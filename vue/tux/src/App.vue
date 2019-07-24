<template>
<div id="app">
  <div class="list-wrapper">
    <div draggable data-name="TuxButton"> TuxButton</div>
    <div draggable data-name="TuxTable">TuxTable</div>
  </div>
  <div class="dropzone-wrapper">
    <dropzone class="design-wrapper" ref="container" @dragenter.prevent="dragEnterEvent" @dragover.prevent @dragleave="dragLeaveEvent" @drop="dropEvent">
    </dropzone>
  </div>
  <codemirror ref="myCm" :value="codes" @changes="onCodeChange"></codemirror>
</div>
</template>

<script>
import JsBeautify from 'js-beautify'
import Tux from './core/Tux'
export default {
  name: 'app',
  components: {},
  data() {
    return {
      tux: null,
      codes: ''
    }
  },
  methods: {
    dragEnterEvent(event) {
      window.tar = event.target
      if (event.target.tagName === 'DROPZONE') {
        event.target.style.backgroundColor = 'blue';
      }
    },
    dragLeaveEvent(event) {
      if (event.target.tagName === 'DROPZONE') {
        event.target.style.backgroundColor = '';
        event.target.style.opacity = '1';
      }
    },
    dropEvent(event) {
      if (event.target.tagName === 'DROPZONE') {
        event.target.style.backgroundColor = '';
        event.target.style.opacity = '1';
        let compname = event.dataTransfer.getData('name');
        this.tux.createElement(compname, event.target, event.target.nextSibling);
        this.tux.render();
        this.codes = JsBeautify.html(this.tux.genCode());
      }
    },
    onCodeChange(event) {}
  },
  mounted() {
    // let parentDom = decompile(this);
    // console.log(parentDom);
    this.tux = new Tux(this, this.$refs.container);
    document.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('name', event.target.getAttribute('data-name'));
    }, false);
  }
}
</script>

<style scoped>
template {
    display: block;
}

.list-wrapper>*:hover {
    cursor: pointer;
}

.design-wrapper {
    width: 100%;
    height: 800px;
    padding: 10px;
}

.dropzone-wrapper {
    position: relative;
    width: 100%;
    height: 500px;
}

dropzone {
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>
