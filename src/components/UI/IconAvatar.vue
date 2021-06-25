<template>
  <a href="#" class="icon-avatar"></a>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.icon-avatar {
  display: inline-block;
  width: rem(40px);
  height: rem(40px);
  background: url("../../assets/img/icons/icon-avatar.png") center center/cover
    no-repeat;
}
@media (min-width: $tablet) {
  .icon-avatar {
    width: rem(66px);
    height: rem(66px);
  }
}
@media (min-width: $desktop) {
  .icon-avatar {
    width: rem(76px);
    height: rem(76px);
  }
}
</style>