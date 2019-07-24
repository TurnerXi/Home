import Vue from 'vue'
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror, {
  options: {
    mode: 'text/javascript',
    tabSize: 4,
    theme: 'base16-dark',
    lineNumbers: true,
    line: true
  }
})
