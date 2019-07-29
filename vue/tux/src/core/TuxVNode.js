import { clone } from '../utils/object'
let tuxid = 1;
export default class TuxVNode {
  constructor(tag, data, child, text, context) {
    this.tuxid = tuxid++;
    this.tag = tag;
    this.context = context;
    this.data = Object.assign(data || {}, { attrs: { tuxid: this.tuxid } });
    this.child = child || [];
    this.text = text;
  }
  createVNodes(ctx) {
    if (this.text) {
      this.vnode = createTextVNode(this.text);
      return this.vnode;
    }
    let children = [];
    for (let i = 0; i < this.child.length; i++) {
      let vchild = this.child[i].createVNodes(ctx);
      children.push(vchild);
    }
    let vnode = ctx.$createElement(this.tag, clone(this.data), children);
    this.vnode = vnode;
    return vnode;
  }
}

export function createTextVNode(val) {
  return new TuxVNode(undefined, undefined, undefined, String(val));
}

export function flatternNodes(parent, flattern) {
  flattern[parent.tuxid] = parent;
  parent.child.forEach(item => {
    flatternNodes(item, flattern);
  });
  return flattern;
}
