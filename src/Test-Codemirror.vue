<template>
    <div>
        <div>
            <!--<Codemirror-->
                    <!--ref="codemirror"-->
                    <!--v-model="code"-->
                    <!--:options="cmOptions"-->
                    <!--@cursorActivity="onCursorActivity($event)"-->
            <!--&gt;</Codemirror>-->
        </div>
      <div style="border-top: 1px solid gray">
          <div id="codeMerge"></div>
      </div>
    </div>
</template>

<script>
import CodeMirror from './../codemirror-lib/codemirror/lib/codemirror.js'
import './../codemirror-lib/codemirror/lib/codemirror.css'
// import './../codemirror-lib/codemirror/src/codemirror'
// import './../codemirror-lib/codemirror/src/modes'
//
// import './../codemirror-lib/codemirror/theme/base16-dark.css'
// import './../codemirror-lib/codemirror/theme/dracula.css'
//
// import './../codemirror-lib/codemirror/mode/javascript/javascript.js'
// import './../codemirror-lib/codemirror/mode/sql/sql.js'
// import './../codemirror-lib/codemirror/mode/shell/shell.js'
// import './../codemirror-lib/codemirror/keymap/sublime.js'
// // placeholder
// import './../codemirror-lib/codemirror/addon/display/placeholder.js'
// // styleSelectedText
// import './../codemirror-lib/codemirror/addon/selection/mark-selection.js'
// import './../codemirror-lib/codemirror/addon/search/searchcursor.js'
// // hint
// import './../codemirror-lib/codemirror/addon/hint/show-hint.js'
// import './../codemirror-lib/codemirror/addon/hint/show-hint.css'
// import './../codemirror-lib/codemirror/addon/hint/javascript-hint.js'
// import './../codemirror-lib/codemirror/addon/selection/active-line.js'
// import './../codemirror-lib/codemirror/addon/hint/sql-hint.js'
//
// // highlightSelectionMatches
// import './../codemirror-lib/codemirror/addon/scroll/annotatescrollbar.js'
// import './../codemirror-lib/codemirror/addon/search/matchesonscrollbar.js'
// import './../codemirror-lib/codemirror/addon/search/match-highlighter.js'
// // keyMap
// import './../codemirror-lib/codemirror/addon/edit/matchbrackets.js'
// import './../codemirror-lib/codemirror/addon/comment/comment.js'
// import './../codemirror-lib/codemirror/addon/dialog/dialog.js'
// import './../codemirror-lib/codemirror/addon/dialog/dialog.css'
// import './../codemirror-lib/codemirror/addon/search/search.js'
//
// // foldGutter
// import './../codemirror-lib/codemirror/addon/fold/foldgutter.css'
// import './../codemirror-lib/codemirror/addon/fold/brace-fold.js'
// import './../codemirror-lib/codemirror/addon/fold/comment-fold.js'
// import './../codemirror-lib/codemirror/addon/fold/foldcode.js'
// import './../codemirror-lib/codemirror/addon/fold/foldgutter.js'
// import './../codemirror-lib/codemirror/addon/fold/indent-fold.js'
// import './../codemirror-lib/codemirror/addon/fold/markdown-fold.js'
// import './../codemirror-lib/codemirror/addon/fold/xml-fold.js'
//
// // panel
// import './../codemirror-lib/codemirror/addon/display/panel.js'
//
// import Codemirror from './Codemirror.vue'

// code merge
import './lib/diff_match_patch.js'
import './../codemirror-lib/codemirror/addon/merge/merge.js'
import './../codemirror-lib/codemirror/addon/merge/merge.css'

export default {
  name: 'Test-Codemirror',
  // components: { Codemirror },
  data () {
    return {
      // code: 'select * from ',
      // cmOptions: {
      //   tabSize: 4,
      //   mode: 'text/x-mysql',
      //   theme: 'base16-dark',
      //   lineNumbers: true,
      //   line: true,
      //   lineWiseCopyCut: true,
      //   // keyMap: 'sublime',
      //   matchBrackets: true,
      //   lineComment: '--',
      //   hintOptions: {
      //     // 当匹配只有一项的时候是否自动补全
      //     // hint: function (cm, callback, options) {
      //     //     debugger
      //     //   console.info('调用')
      //     // },
      //     completeSingle: false,
      //     closeOnUnfocus: true,
      //     tables: {
      //       users: ['name', 'score', 'birthDate'],
      //       countries: ['name', 'population', 'size']
      //     }
      //   },
      //   extraKeys: {
      //     'Ctrl-/': 'toggleComment',
      //     'Cmd-/': (options) => {
      //       debugger
      //       this.$refs.codemirror.cminstance.toggleComment({ lineComment: '--' })
      //     }
      //   }
      // }
    }
  },
  methods: {
    // onCursorActivity () {
    //   this.$refs.codemirror.cminstance.showHint()
    // }
  },
  mounted () {
    const target = document.getElementById('codeMerge')
    CodeMirror.MergeView(target, {
      value: '12',
      origLeft: '12',
      lineNumbers: true,
      allowEditingOriginals: false
    })
  }
}
</script>

<style scoped>

</style>
