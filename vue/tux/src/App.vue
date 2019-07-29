<template lang="html">
  <layout @gencode="genCode">
      <dropzone ref="container" @dragenter.prevent="dragEnterEvent" @dragover.prevent @dragleave="dragLeaveEvent" @drop="dropEvent">
      </dropzone>
      <props :vnode="choosedVnode" @change="tux.render()"></props>
      <code-mask :content="tux && tux.codes" v-model="isShowCodes"></code-mask>
  </layout>
</template>

<script>
import Layout from './layout'
import Props from './assets/components/props'
import CodeMask from './assets/components/codemask'
import Tux from './core/Tux'
import { indexOf } from './utils/dom'
export default {
  components: {
    Layout,
    Props,
    CodeMask
  },
  data() {
    return {
      tux: null,
      choosedVnode: null,
      isShowCodes: false
    }
  },
  methods: {
    dragEnterEvent(event) {
      window.tar = event.target
      if (event.target.tagName === 'DROPZONE') {
        event.target.style.border = '1.5px dashed rgba(50,50,50,0.5)';
        event.target.style.borderRadius = '5px';
      }
    },
    dragLeaveEvent(event) {
      if (event.target.tagName === 'DROPZONE') {
        event.target.style.border = '';
        event.target.style.borderRadius = '';
      }
    },
    dropEvent(event) {
      if (event.target.tagName === 'DROPZONE') {
        event.target.style.border = '';
        event.target.style.borderRadius = '';
        let compname = event.dataTransfer.getData('name');
        this.tux.createElement(compname, event.target, event.target.nextSibling);
        this.tux.render();
      }
    },
    genCode() {
      this.tux.genCode();
      this.isShowCodes = true;
    }
  },
  mounted() {
    this.tux = new Tux(this, this.$refs.container);
    document.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('name', event.target.getAttribute('data-name'));
    }, false);
    this.$refs.container.addEventListener('click', (event) => {
      let container = this.$refs.container;

      function findComponent(elm) {
        while (elm !== container && !elm.parentElement.getAttribute('tuxid')) {
          elm = elm.parentElement;
        }
        return elm === container ? null : elm;
      }
      let componentRoot = findComponent(event.target);
      if (componentRoot) {
        let idx = indexOf(componentRoot.parentElement.children, componentRoot);
        let tuxid = componentRoot.parentElement.getAttribute('tuxid');
        this.choosedVnode = this.tux.nodes[tuxid].child[idx];
      } else {
        this.choosedVnode = null;
      }
    })
  }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}

ul,
li,
ol {
    list-style: none;
}

template {
    display: block;
}

dropzone {
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: auto;
}

.vue-codemirror .CodeMirror,
.vue-codemirror {
    height: 100%;
}
</style>
