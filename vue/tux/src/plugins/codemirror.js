import Vue from 'vue'
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
Vue.use(VueCodeMirror, {
  options: {
    mode: 'text/javascript',
    tabSize: 4,
    theme: 'monokai',
    lineNumbers: true,
    line: true
  }
})
