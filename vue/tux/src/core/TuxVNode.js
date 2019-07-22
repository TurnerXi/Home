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
}
