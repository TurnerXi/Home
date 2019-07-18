let tuxid = 1;
export default class TuxVNode {
  constructor(context, tag, data, attrs, child) {
    this.tuxid = tuxid++;
    this.tag = tag;
    this.context = context;
    this.attrs = attrs || {};
    this.child = child || [];
  }
}
