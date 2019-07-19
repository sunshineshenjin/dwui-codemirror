import _CodeMirror from './codemirror-lib/codemirror/lib/codemirror'
import Codemirror from './src/Codemirror.vue'

const CodeMirror = window.CodeMirror || _CodeMirror
const install = (Vue, config) => {
  if (config) {
    if (config.options) {
      Codemirror.props.globalOptions.default = () => config.options
    }
    if (config.events) {
      Codemirror.props.globalEvents.default = () => config.events
    }
  }
  Vue.component(Codemirror.name, Codemirror)
}

const DwuiCodemirror = { CodeMirror, Codemirror, install }

export default DwuiCodemirror
export { CodeMirror, Codemirror, install }
