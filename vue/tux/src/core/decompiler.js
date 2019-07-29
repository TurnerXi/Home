import TuxVNode, { createTextVNode } from './TuxVNode'
export function decompile(componentInstance, parent) {
  if (!parent) { parent = new TuxVNode('template'); }
  let vnode = componentInstance._vnode;
  resolveVNode(vnode, parent);
  return parent;
}

function resolveVNode(vnode, parent) {
  if (!vnode) return;
  let cIns = vnode.componentInstance;
  if (cIns && cIns._isTux) {
    decompile(vnode.componentInstance, parent);
    return;
  }
  if (vnode.tag) {
    let tuxVNode = new TuxVNode(vnode.tag.replace(/vue-component-\d+-/g, ''), vnode.data);
    parent.child.push(tuxVNode);
    if (vnode.children) {
      for (let i = 0; i < vnode.children.length; i++) {
        resolveVNode(vnode.children[i], tuxVNode);
      }
    }
    if (cIns) {
      Object.assign(tuxVNode.data, { attrs: vnode.componentOptions.propsData });
      if (cIns.$slots) {
        resolveSlots(tuxVNode, cIns.$slots);
      }
    }
  }
  if (vnode.text) {
    parent.child.push(createTextVNode(vnode.text));
  }
}

function resolveSlots(parent, slots) {
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
      resolveVNode(slots[key][i], temp);
    }
  }
}
