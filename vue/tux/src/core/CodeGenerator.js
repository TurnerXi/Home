export default class CodeGenerator {
  constructor(root) {
    this.root = root;
    this.stack = [];
    this.codes = '';
    this.space = 0;
  }
  start() {
    this.stack = [];
    this.stack.push(this.parse(this.root, true));
    this.next(this.root);
    this.stack.push(this.parse(this.root, false));
    this.genCodes();
  }
  next(node) {
    for (const child of node.child) {
      this.stack.push(this.parse(child, true));
      this.space++;
      this.next(child);
      this.space--;
      this.stack.push(this.parse(child, false));
    }
  }
  parse(node, isbegin) {
    let result = this.genSpace();
    if (node.tag === 'dropzone') { return ''; }
    if (node.tag && isbegin) {
      let attrs = this.resolveData(node.data);
      result += `<${node.tag} ${Object.keys(attrs).reduce((total, key) => `${total}\r\n ${key}=${attrs[key]}`, '')}>`
    } else if (node.tag) {
      result += `</${node.tag}>`;
    } else if (node.text && isbegin) {
      result += node.text;
    }
    if (result.match(/^ *$/)) {
      result = '';
      // console.warn(`cannot parse node: ${JSON.stringify(node)}`);
    }
    return result;
  }
  resolveData(data) {
    let attrs = {};
    for (let key in data) {
      if (key === 'staticClass') {
        attrs.class = JSON.stringify(data[key]);
      } else if (key === 'staticStyle') {
        attrs.style = JSON.stringify(Object.keys(data[key]).reduce((total, item) => {
          return `${total}${item}:${data[key][item]};`;
        }, ''));
      } else if (key === 'attrs') {
        Object.keys(data[key]).forEach(item => {
          if (item !== 'tuxid') {
            attrs[item] = JSON.stringify(data[key][item]);
          }
        });
      }
    }
    return attrs;
  }
  genSpace() {
    let space = this.space;
    let str = '';
    while (space) {
      str += ' ';
      space--;
    }
    return str;
  }
  genCodes() {
    this.codes = '';
    let code;
    while (this.stack.length) {
      if ((code = this.stack.shift())) {
        this.codes += code + '\r\n';
      }
    }
  }
}
