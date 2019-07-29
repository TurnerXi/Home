import Packages from '../packages'
import CodeGenerator from './CodeGenerator'
import { decompile } from './decompiler'
import TuxVNode, { createTextVNode, flatternNodes } from './TuxVNode'
import JsBeautify from 'js-beautify'
import { clone } from '../utils/object'
export default class Tux {
  constructor(context, container) {
    this.ctx = context;
    this.root = new TuxVNode('template');
    this.container = container;
    this.codes = '';
    this.nodes = {};
  }
  createElement(tag, parent, nextSibling) {
    if (parent instanceof HTMLElement) {
      let pid = parent.getAttribute('tuxid');
      while (!pid && parent !== this.container) {
        parent = parent.parentNode;
        pid = parent.getAttribute('tuxid');
      }
      let pNode = this.nodes[pid] || this.root;
      if (!pNode) return;
      let sibling;
      if (nextSibling && nextSibling.getAttribute) {
        let sid = nextSibling.getAttribute('tuxid');
        sibling = this.nodes[sid];
      }
      let tuxVNode;
      if (Packages[tag]) {
        let vnode = this.ctx.$createElement(Packages[tag]);
        vnode.data.hook.init(vnode, true);
        let parent = decompile(vnode.componentInstance);
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
      this.nodes = flatternNodes(this.root, {});
    }
  }
  render() {
    let vnode = this.root.createVNodes(this.ctx);
    this.container.innerHTML = '';
    this.container.appendChild(this.ctx.__patch__(null, vnode, true, false));
    this.genCode();
  }
  genCode() {
    let gen = new CodeGenerator(this.root);
    gen.start();
    this.codes = JsBeautify.html(gen.codes);
  }
}
