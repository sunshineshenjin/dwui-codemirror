<template>
    <Codemirror
            ref="codemirror"
            v-model="code"
            :options="cmOptions"
            @cursorActivity="onCursorActivity($event)"
    ></Codemirror>
</template>

<script>
import './../codemirror-lib/codemirror/src/codemirror'
import './../codemirror-lib/codemirror/src/modes'

import './../codemirror-lib/codemirror/theme/base16-dark.css'
import './../codemirror-lib/codemirror/theme/dracula.css'

import './../codemirror-lib/codemirror/mode/javascript/javascript.js'
import './../codemirror-lib/codemirror/mode/sql/sql.js'
import './../codemirror-lib/codemirror/mode/shell/shell.js'
import './../codemirror-lib/codemirror/keymap/sublime.js'
// placeholder
import './../codemirror-lib/codemirror/addon/display/placeholder.js'
// styleSelectedText
import './../codemirror-lib/codemirror/addon/selection/mark-selection.js'
import './../codemirror-lib/codemirror/addon/search/searchcursor.js'
// hint
import './../codemirror-lib/codemirror/addon/hint/show-hint.js'
import './../codemirror-lib/codemirror/addon/hint/show-hint.css'
import './../codemirror-lib/codemirror/addon/hint/javascript-hint.js'
import './../codemirror-lib/codemirror/addon/selection/active-line.js'
import './../codemirror-lib/codemirror/addon/hint/sql-hint.js'

// highlightSelectionMatches
import './../codemirror-lib/codemirror/addon/scroll/annotatescrollbar.js'
import './../codemirror-lib/codemirror/addon/search/matchesonscrollbar.js'
import './../codemirror-lib/codemirror/addon/search/match-highlighter.js'
// keyMap
import './../codemirror-lib/codemirror/addon/edit/matchbrackets.js'
import './../codemirror-lib/codemirror/addon/comment/comment.js'
import './../codemirror-lib/codemirror/addon/dialog/dialog.js'
import './../codemirror-lib/codemirror/addon/dialog/dialog.css'
import './../codemirror-lib/codemirror/addon/search/search.js'

// foldGutter
import './../codemirror-lib/codemirror/addon/fold/foldgutter.css'
import './../codemirror-lib/codemirror/addon/fold/brace-fold.js'
import './../codemirror-lib/codemirror/addon/fold/comment-fold.js'
import './../codemirror-lib/codemirror/addon/fold/foldcode.js'
import './../codemirror-lib/codemirror/addon/fold/foldgutter.js'
import './../codemirror-lib/codemirror/addon/fold/indent-fold.js'
import './../codemirror-lib/codemirror/addon/fold/markdown-fold.js'
import './../codemirror-lib/codemirror/addon/fold/xml-fold.js'

// panel
import './../codemirror-lib/codemirror/addon/display/panel.js'

import Codemirror from './Codemirror.vue'

export default {
  name: 'Test-Codemirror',
  components: { Codemirror },
  data () {
    return {
      code: 'select * from ',
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-mysql',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        lineWiseCopyCut: true,
        // keyMap: 'sublime',
        matchBrackets: true,
        hintOptions: {
          // 当匹配只有一项的时候是否自动补全
          // hint: function (cm, callback, options) {
          //     debugger
          //   console.info('调用')
          // },
          completeSingle: false,
          closeOnUnfocus: true,
          tables: {
            users: ['name', 'score', 'birthDate'],
            countries: ['name', 'population', 'size']
          }
        },
        extraKeys: {
        }
      }
    }
  },
  methods: {
    onCursorActivity () {
      let words = this.$refs.codemirror.cminstance.getValue() + ''
      // 利用正则取出用户输入的所有的英文的字母
      words = words.replace(/[a-z]+[\-|\']+[a-z]+/ig, '').match(/([a-z]+)/ig)
      // 将获取到的用户的单词传入CodeMirror,并在javascript-hint中做匹配
      console.info(words)
      // CodeMirror.ukeys = words
      // 调用显示提示
      this.$refs.codemirror.cminstance.showHint()
    }
  }
}
</script>

<style scoped>

</style>
