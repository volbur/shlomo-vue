<template>
  <header class="header">
    <div class="header__profile-info">
      <div class="profile-info__text"><span>ילארשי ל </span>ארשי ןכוסה םש</div>
      <div class="profile-info__text"><span>למשח </span>תרבח ביטקלוק</div>
      <div class="profile-info__text"><span>השמ םייח </span>,םולש</div>
    </div>
    <a href="#" class="header__avatar">
      <img src="../assets/img/icons/icon-profile.svg" alt="avatar" />
    </a>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 0 11px;
  min-height: 63px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &__avatar {
    margin-left: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background-color: #009c41;
  }
  .profile-info__text {
    font-size: 10px;
    line-height: 10px;
    color: #009c41;
    text-align: right;
    &:last-child {
      margin-top: 6px;
      color: #ff7728;
    }
    span {
      font-weight: bold;
    }
  }
}

@media (min-width: 1330px) {
  .header {
    padding: 0 20px;
    min-height: 106px;
    &__avatar {
      margin-left: 19px;
      width: 38px;
      height: 38px;
    }
    .profile-info__text {
      font-size: 16px;
      line-height: 18px;
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