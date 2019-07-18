<template>
<div id="app">
  <div class="list-wrapper">
    <div draggable data-name="TuxButton"> TuxButton</div>
    <div draggable data-name="TuxTable">TuxTable</div>
  </div>
  <div class="design-wrapper dropzone" ref="container" @dragenter.prevent="dragEnterEvent" @dragover.prevent @dragleave="dragLeaveEvent" @drop="dropEvent">
  </div>
</div>
</template>

<script>
import Tux from './core/Tux'
export default {
  name: 'app',
  data() {
    return {
      tux: null
    }
  },
  methods: {
    dragEnterEvent(event) {
      window.tar = event.target
      if (event.target.className.indexOf('dropzone') > -1) {
        event.target.style.backgroundColor = 'blue';
      }
    },
    dragLeaveEvent(event) {
      if (event.target.className.indexOf('dropzone') > -1) {
        event.target.style.backgroundColor = '';
        event.target.style.opacity = '1';
      }
    },
    dropEvent(event) {
      if (event.target.className.indexOf('dropzone') > -1) {
        event.target.style.backgroundColor = '';
        event.target.style.opacity = '1';
        let compname = event.dataTransfer.getData('name');
        this.tux.createElement(compname, event.target, event.target.nextSibling);
        this.tux.render();
      }
    }
  },
  mounted() {
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
</style>
