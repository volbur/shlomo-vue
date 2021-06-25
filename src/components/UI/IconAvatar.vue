<template>
  <a href="#" class="icon-avatar"></a>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.icon-avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: url("../../assets/img/icons/icon-avatar.png") center center/cover
    no-repeat;
}
@media (min-width: $tablet) {
  .icon-avatar {
    width: 66px;
    height: 66px;
  }
}
@media (min-width: $desktop) {
  .icon-avatar {
    width: 76px;
    height: 76px;
  }
}
</style>