<template>
  <button class="round-button">
    <img :src="iconButton.url" :alt="iconButton.btn" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      letter: {
        url: require("../../assets/img/icons/icon-letter.svg"),
        alt: "icon letter",
      },
      pen: {
        url: require("../../assets/img/icons/icon-pen.svg"),
        alt: "icon pen",
      },
    };
  },
  props: {
    isLetter: {
      type: Boolean,
      required: false,
    },
    isPen: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    iconButton() {
      if (this.isLetter) {
        return this.letter;
      } else if (this.isPen) {
        return this.pen;
      }
      return "#";
    },
  },
};
</script>

<style lang="scss" scoped>
.round-button {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  background-color: #fff;
  cursor: pointer;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (min-width: 768px) {
  .round-button {
    width: 50px;
    height: 50px;
    img {
      width: 35px;
    }
  }
}
@media (min-width: 1330px) {
  .round-button {
    width: 50px;
    height: 50px;
    img {
      width: unset;
    }
  }
}
</style>