<template>
  <button class="round-button">
    <svg v-if="isIconLetter" class="icon">
      <use href="../../assets/img/icons/icon-letter.svg#icon-letter"></use>
    </svg>
    <svg v-if="isIconPen" class="icon">
      <use href="../../assets/img/icons/icon-pen.svg#icon-pen"></use>
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    isIconLetter: {
      type: Boolean,
      required: false,
    },
    isIconPen: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.round-button {
  position: relative;
  width: rem(40px);
  height: rem(40px);
  border-radius: 100%;
  border: none;
  background-color: $primary-white-color;
  cursor: pointer;
}
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: rem(30px);
  height: rem(19px);
  fill: $primary-white-color;
}

@media (min-width: $tablet) {
  .round-button {
    width: rem(50px);
    height: rem(50px);
  }
  .icon {
    width: rem(34px);
    height: rem(24px);
  }
}
@media (min-width: $desktop) {
  .round-button {
    width: rem(50px);
    height: rem(50px);
  }
  .icon {
    width: rem(30px);
    height: rem(19px);
    fill: $main-text-color;
  }
}
</style>