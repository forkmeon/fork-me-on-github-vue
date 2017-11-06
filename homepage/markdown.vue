<template>
  <div class='markdown' v-html="html"></div>
</template>
<script>
const Markdown = require('marked');
const Highlight = require('highlight.js');

Markdown.setOptions({
  highlight: function(code) {
    return Highlight.highlightAuto(code).value;
  }
});

export default {
  name: 'markdown',
  props: ['source'],
  computed: {
    html() {
      return Markdown(this.source);
    }
  }
};
</script>
