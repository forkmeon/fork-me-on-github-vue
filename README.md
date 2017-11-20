# Fork me on Github – CSS ribbon

CSS implementation of [GitHub ribbon](//github.com/blog/273-github-ribbons).

## Usage

```javascript
import ForkeMeOnGithub from 'fork-me-on-github-vue';

Vue.use(ForkeMeOnGithub);
```

```vue
<template>
  ...
  <Ribbon
    v-bind="ribbonOptions"
  ></Ribbon>
  ...
</template>
<script>
  ...
  data() {
    return {
      ribbonOptions: {
        text: 'Fork me on GitHub',
        linkUrl: pkg.repository.url,
        fixed: true
      }
    }
  }
  ...
</script>
```
