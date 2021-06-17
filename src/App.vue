<template>
  <Authorization />
</template>

<script>
import Authorization from "./pages/Authorization.vue";
export default {
  components: {
    Authorization,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  &::after,
  &::before {
    box-sizing: inherit;
  }
}
body {
  font-family: Arimo, sans-serif;
  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
