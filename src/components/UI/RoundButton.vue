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
.round-button {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  background-color: #fff;
  cursor: pointer;
}
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 19px;
  fill: #fff;
}

@media (min-width: 768px) {
  .round-button {
    width: 50px;
    height: 50px;
  }
  .icon {
    width: 34px;
    height: 24px;
  }
}
@media (min-width: 1330px) {
  .round-button {
    width: 50px;
    height: 50px;
  }
  .icon {
    width: 30px;
    height: 19px;
    fill: #21325e;
  }
}
</style>