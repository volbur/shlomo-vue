<template>
  <Header>
    <section class="subheader">
      <div class="subheader__title"><span>השמ םייח</span> ,םולש</div>
    </section>
  </Header>
  <main class="main">
    <section class="authorization">
      <div class="authorization__wrapper-title">
        <h1 class="authorization__title">ריחמה תעצהב היפצ - תכרעמל הסינכ</h1>
        <IconAvatar />
      </div>
      <p class="authorization__text">
        שדח דוק תחילש לע ץחל דוק תלביק אל םא ,הסינכה דוק תא ןזה
      </p>
      <FormAutorization />
    </section>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import IconAvatar from "../components/UI/IconAvatar.vue";
import FormAutorization from "../components/FormAutorization.vue";
export default {
  components: {
    Header,
    IconAvatar,
    FormAutorization,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.main {
  background: url("../assets/img/bg-build-mobile.jpg") center center/cover;
}
.subheader {
  display: none;
}
.authorization {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px 63px;
  width: 100%;
  background-color: $main-filter-color;
  &__wrapper-title {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 12px;
    max-width: 330px;
    border-bottom: 2px solid $primary-white-color;
  }
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: right;
    color: $primary-white-color;
  }
  &__text {
    margin-top: 72px;
    max-width: 330px;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    color: $primary-white-color;
  }
}

.icon-avatar {
  margin-left: 30px;
}

@media (min-width: 768px) {
  .main {
    background: url("../assets/img/bg-car-desctop.jpg") center center/cover;
  }
  .authorization {
    padding: 30px 0 71px;
    &__form {
      margin-top: 40px;
    }
    &__wrapper-title {
      align-items: flex-end;
      padding-bottom: 0;
      max-width: 1076px;
      border-bottom: 5px solid $primary-white-color;
    }
    &__title {
      font-weight: normal;
      font-size: 40px;
      line-height: 55px;
    }

    &__text {
      font-size: 20px;
      line-height: 28px;
      margin-top: 40px;
    }
  }
  .subheader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 62px;
    height: 50px;
    background-color: #f5f5f5;
    box-shadow: inset 0 14px 16px -16px rgba(0, 0, 0, 0.4);
    &__title {
      text-align: right;
      font-size: 14px;
      line-height: 18px;
      span {
        font-weight: bold;
      }
    }
  }
}

@media (min-width: 1330px) {
  .authorization {
    &__form {
      margin-top: 57px;
    }
    &__title {
      font-size: 48px;
    }
    &__text {
      max-width: unset;
      font-size: 24px;
    }
  }
  .subheader {
    height: 76px;
    &__title {
      font-size: 16px;
    }
  }
}
</style>
