<template>
  <div :class="className" :style="outerStyle">
    <a target="_blank" :style="innerStyle" :href="linkUrl">{{text}}</a>
  </div>
</template>
<script>
import Utils from './utils';

const innerStyle = {
  display: 'inline-block',
  width: '200px',
  overflow: 'hidden',
  padding: '6px 0',
  textAlign: 'center',
  WebkitTransform: 'rotate(45deg)',
  MozTransform: 'rotate(45deg)',
  msTransform: 'rotate(45deg)',
  OTransform: 'rotate(45deg)',
  Transform: 'rotate(45deg)',
  textDecoration: 'none',
  color: '#fff',
  position: 'inherit',
  top: '45px',
  right: '-40px',
  borderWidth: '1px 0',
  borderStyle: 'dotted',
  borderColor: 'rgba(255, 255, 255, 0.7)',
  font: '700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',
  boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',
  backgroundColor: '#a00',
  backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'
};

const outerStyle = {
  position: 'absolute',
  right: 0,
  top: 0,
  width: '150px',
  height: '150px',
  overflow: 'hidden',
  zIndex: 9999
};

export default {
  name: 'Ribbon',
  data() {
    return {
      className: `${this.classPrefix}-ribbon`
    };
  },
  props: {
    classPrefix: {
      type: String,
      default: 'github'
    },
    fixed: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    linkUrl: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    left: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    outerStyle() {
      var style = Utils.merge({}, outerStyle);

      if (this.fixed) {
        style.position = 'fixed';
      }

      if (this.left) {
        style.left = 0;
        delete style.right;
      }

      if (!this.top) {
        style.bottom = 0;
        delete style.top;
      }
      return style;
    },
    innerStyle() {
      var style = Utils.merge({}, innerStyle);

      if (this.flat) {
        delete style.backgroundImage;
      }

      if (this.left) {
        style.left = style.right;
        delete style.right;
      }

      if (this.right) {
        style.right = style.left;
        delete style.left;
      }

      if (!this.top) {
        style.bottom = style.top;
        delete style.top;

        if (this.left) {
          style.transform = 'rotate(45deg)';
        } else {
          style.transform = 'rotate(-45deg)';
        }
      } else {
        if (this.left) {
          style.transform = 'rotate(-45deg)';
        } else {
          style.transform = 'rotate(45deg)';
        }
      }

      if (!this.border) {
        delete style.borderWidth;
        delete style.borderStyle;
        delete style.borderColor;
      }

      return style;
    }
  }
};
</script>
