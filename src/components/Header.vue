<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__profile-info">
        <div class="profile-info__text">
          <span>ילארשי ל </span>ארשי ןכוסה םש
        </div>
        <div class="profile-info__text"><span>למשח </span>תרבח ביטקלוק</div>
        <div class="profile-info__text"><span>השמ םייח </span>,םולש</div>
      </div>
      <a href="#" class="header__avatar">
        <img src="../assets/img/icons/icon-profile.svg" alt="avatar" />
      </a>
    </div>
    <slot></slot>
  </header>
</template>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.header {
  &__wrapper {
    padding-right: rem(11px);
    min-height: rem(63px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__avatar {
    margin-left: rem(11px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: rem(30px);
    height: rem(30px);
    border-radius: rem(10px);
    background-color: $primary-accent-color;
  }
  .profile-info__text {
    font-size: rem(10px);
    line-height: rem(10px);
    color: $primary-accent-color;
    text-align: right;
    &:last-child {
      margin-top: rem(6px);
      color: $secondary-accent-color;
    }
    span {
      font-weight: bold;
    }
  }
}

@media (min-width: $desktop) {
  .header {
    &__wrapper {
      padding-right: rem(20px);
      min-height: rem(106px);
    }
    &__avatar {
      margin-left: rem(19px);
      width: rem(38px);
      height: rem(38px);
    }
    .profile-info__text {
      font-size: rem(16px);
      line-height: rem(18px);
      &:last-child {
        display: none;
      }
      span {
        font-weight: bold;
      }
    }
  }
}
</style>