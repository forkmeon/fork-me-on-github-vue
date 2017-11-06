<template>
  <div class="editor">
    <div class="form-group">
      <div>
        <label class="control-label">position</label>
      </div>
      <label class="radio-inline">
        <input type="radio" name="horizontalRadio" @change="horizontalRadioChangeHandler('left')" /> left
      </label>
      <label class="radio-inline">
        <input type="radio" name="horizontalRadio" @change="horizontalRadioChangeHandler('right')" /> right
      </label>
      <label class="radio-inline">
        <input type="radio" name="verticalRadio" @change="verticalRadioChangeHandle('top')"/> top
      </label>
      <label class="radio-inline">
        <input type="radio" name="verticalRadio" @change="verticalRadioChangeHandle('bottom')" /> bottom
      </label>
      <label class="checkbox-inline fixed-checkbox">
        <input type="checkbox" @change="fixedCheckboxChangeHandler" /> fixed
      </label>
    </div>
    <div class="form-group">
      <div>
        <label class="control-label">style</label>
      </div>
      <label class="checkbox-inline">
        <input type="checkbox" @change="flatCheckboxChangeHandler" /> flat
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" @change="borderCheckboxChangeHandler" /> border
      </label>
    </div>
    <div class="form-group">
      <label class="control-label">text</label>
      <input class="form-control" :placeholder="editor.placeHolderText" @change="textInputChangeHandler" v-model="text" type="text" />
    </div>
    <div class="form-group">
      <label class="control-label">link</label>
      <input class="form-control" :placeholder="editor.placeHolderLinkUrl" @change="linkUrlInputChangeHandler" v-model="linkUrl" type="text" />
    </div>
    <div class="form-group">
      <label class="control-label">copy css</label>
      <pre>{{ editor.exportCss }}</pre>
      <pre >{{ editor.exportInnerHtml }}</pre>
    </div>
    <div class="form-group">
      <label class="control-label">copy html</label>
      <pre>{{ editor.exportHtml }}</pre>
    </div>
    <ribbon
      ref="demo"
      v-bind="options"
    >
    </ribbon>
  </div>
</template>
<script>
import Ribbon from '../src/ribbon.vue';

const pkg = require('../package');

export default {
  name: 'editor',
  components: {
    ribbon: Ribbon
  },
  data() {
    return {
      text: 'Fork me on GitHub',
      linkUrl: pkg.repository.url,
      fixed: false,
      left: false,
      top: true,
      border: true,
      flat: true,
      editor: {
        exportCss: '',
        exportInnerHtml: '',
        exportHtml: '',
        placeHolderText: 'Fork me on GitHub',
        placeHolderLinkUrl: pkg.repository.url
      }
    };
  },
  mounted() {
    this.updateEditor();
  },
  beforeUpdate() {
    this.updateEditor();
  },
  computed: {
    options() {
      return this.$data;
    }
  },
  methods: {
    updateEditor() {
      var parser = new DOMParser();
      var outerHtml = this.$refs.demo.$el.outerHTML.replace(/editor="\[object\s+Object\]"\s/g, '');
      var className = outerHtml.match(/[\s]+class="(\w+-\w+)"/)[1];
      var node = parser.parseFromString(outerHtml, 'text/html');
      var href = node.querySelector('a').href;
      this.editor.exportInnerHtml = `<div class="${className}">\n  <a target="_blank" href="${href}">${this.text}</a>\n</div>`;
      this.editor.exportCss = `.${className} {\n  ${node.querySelector('div').style.cssText.replace(/;\s+/g, ';\n  ')}\n}\n.${className} a {\n  ${node.querySelector('a').style.cssText.replace(/;\s+/g, ';\n  ')}\n}`;
      this.editor.exportHtml = outerHtml.replace(/\n/g, '');
    },
    horizontalRadioChangeHandler(data) {
      this.left = data === 'left';
    },
    verticalRadioChangeHandle(data) {
      this.top = data === 'top';
    },
    flatCheckboxChangeHandler(e) {
      this.flat = e.target.checked;
    },
    borderCheckboxChangeHandler(e) {
      this.border = e.target.checked;
    },
    fixedCheckboxChangeHandler(e) {
      this.fixed = e.target.checked;
    },
    textInputChangeHandler(e) {
      if (!e.target.value) {
        this.text = this.editor.placeHolderText;
      }
    },
    linkUrlInputChangeHandler(e) {
      if (!e.target.value) {
        this.linkUrl = this.editor.placeHolderLinkUrl;
      }
    }
  }
};
</script>
