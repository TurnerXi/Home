import components from '../components'
import CodeGenerator from './CodeGenerator'
import TuxVNode from './TuxVNode'
export default class Tux {
  constructor(context, container) {
    this.ctx = context;
    this.root = new TuxVNode('template');
    this.container = container;
    this.codes = '';
  }
  createElement(tag, parent, nextSibling) {
    if (parent instanceof HTMLElement) {
      let pid = parent.getAttribute('tuxid');
      while (!pid && parent !== this.container) {
        parent = parent.parentNode;
        pid = parent.getAttribute('tuxid');
      }
      let pNode = pid ? this.findNode(this.root, pid) : this.root;
      if (!pNode) return;
      let sibling;
      if (nextSibling) {
        let sid = nextSibling.getAttribute('tuxid');
        sibling = this.findNode(pNode, sid);
      }
      let tuxVNode;
      if (components[tag]) {
        let vnode = this.ctx.$createElement(components[tag]);
        vnode.data.hook.init(vnode, true);
        let parent = this.decompile(vnode.componentInstance);
        tuxVNode = parent.child;
      } else {
        tuxVNode = [new TuxVNode(tag)];
      }

      let idx = (sibling && pNode.child.indexOf(sibling)) || -1;
      if (idx > -1) {
        pNode.child.splice(idx, 0, ...tuxVNode);
      } else {
        pNode.child.push(...tuxVNode);
      }
    }
  }
  render() {
    let vnode = this.createVNodes(this.root);
    console.log(vnode);
    this.container.innerHTML = '';
    this.container.appendChild(this.ctx.__patch__(null, vnode, true, false));
  }
  createVNodes(tuxvnode) {
    if (!tuxvnode) {
      return;
    }
    if (tuxvnode.text) {
      return createTextVNode(tuxvnode.text);
    }
    let children = [];
    for (let i = 0; i < tuxvnode.child.length; i++) {
      let child = tuxvnode.child[i];
      children.push(this.createVNodes(child));
    }
    return this.ctx.$createElement(components[tuxvnode.tag] || tuxvnode.tag, clone(tuxvnode.data), children);
  }
  findNode(node, pid) {
    pid = Number(pid);
    if (isNaN(pid)) {
      return;
    }
    if (node.tuxid === pid) {
      return node;
    }
    for (let i = 0; i < node.child.length; i++) {
      let child = this.findNode(node.child[i], pid);
      if (child) {
        return child;
      }
    }
  }
  decompile(componentInstance, parent) {
    if (!parent) { parent = new TuxVNode('template'); }
    let vnode = componentInstance._vnode;
    this.resolveVNode(vnode, parent);
    return parent;
  }
  resolveVNode(vnode, parent) {
    if (!vnode) return;
    let cIns = vnode.componentInstance;
    if (cIns && cIns._isTux) {
      this.decompile(vnode.componentInstance, parent);
      return;
    }
    if (vnode.tag) {
      let tuxVNode = new TuxVNode(vnode.tag.replace(/vue-component-\d+-/g, ''), vnode.data);
      parent.child.push(tuxVNode);
      if (vnode.children) {
        for (let i = 0; i < vnode.children.length; i++) {
          this.resolveVNode(vnode.children[i], tuxVNode);
        }
      }
      if (cIns) {
        Object.assign(tuxVNode.data, { attrs: vnode.componentOptions.propsData });
        if (cIns.$slots) {
          this.resolveSlots(tuxVNode, cIns.$slots);
        }
      }
    }
    if (vnode.text) {
      parent.child.push(createTextVNode(vnode.text));
    }
  }
  resolveSlots(parent, slots) {
    for (let key in slots) {
      let temp = parent;
      if (key !== 'default') {
        temp = new TuxVNode('template', {
          attrs: {
            [`v-slot:${key}`]: undefined
          }
        });
        parent.child.push(temp);
      }
      for (let i = 0; i < slots[key].length; i++) {
        this.resolveVNode(slots[key][i], temp);
      }
    }
  }
  genCode() {
    let gen = new CodeGenerator(this.root);
    gen.start();
    this.codes = gen.codes;
    return this.codes;
  }
}

function createTextVNode(val) {
  return new TuxVNode(undefined, undefined, undefined, String(val));
}

function clone(object) {
  if (object === null || object === undefined) {
    return object;
  }
  if (typeof (object) === 'object') {
    if (object instanceof Array) {
      let newArr = [];
      for (let i = 0; i < object.length; i++) {
        newArr[i] = clone(object[i]);
      }
      return newArr;
    } else {
      let newObj = {};
      for (let key in object) {
        newObj[key] = clone(object[key]);
      }
      return newObj;
    }
  } else {
    return object;
  }
}
