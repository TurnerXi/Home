import components from '../components'
import TuxVNode from './TuxVNode'
export default class Tux {
  constructor(context, container) {
    this.ctx = context;
    this.root = new TuxVNode(this.ctx, 'template');
    this.container = container;
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
      let vnode = new TuxVNode(this.ctx, tag);
      let idx = (sibling && pNode.child.indexOf(sibling)) || -1;
      if (idx > -1) {
        pNode.child.splice(idx, 0, vnode);
      } else {
        pNode.child.push(vnode);
      }
    }
  }
  render() {
    let vnode = this.createRealElement(this.root);
    console.log(vnode);
    this.container.appendChild(this.ctx.__patch__(this.container.firstChild, vnode, true, true));
  }
  createRealElement(tuxvnode) {
    if (!tuxvnode) {
      return;
    }
    if (tuxvnode.child.length === 0) {
      return this.ctx.$createElement(components[tuxvnode.tag] || tuxvnode.tag, { attrs: { tuxid: tuxvnode.tuxid } });
    }
    let children = [];
    for (let i = 0; i < tuxvnode.child.length; i++) {
      let child = tuxvnode.child[i];
      children.push(this.createRealElement(child));
    }
    return this.ctx.$createElement(components[tuxvnode.tag] || tuxvnode.tag, { attrs: { tuxid: tuxvnode.tuxid } }, children);
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
}
