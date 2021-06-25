<template>
  <form @submit.prevent="submitForm" class="authorization__form form">
    <div class="form__control">
      <label class="form__label" for="user-name">שמתשמ םש</label>
      <BaseInput
        :icon="true"
        :icon-name="'cross'"
        :name="'user-name'"
        :id="'user-name'"
        v-model="userName"
      />
    </div>
    <div class="form__control">
      <label class="form__label" for="user-password">אמסיס</label>
      <BaseInput
        :name="'user-password'"
        :id="'user-password'"
        v-model="userPassword"
      />
    </div>
    <div class="form__control form__control_btns">
      <BaseButton :icon="true" :type="'button'" :mode="'secondary'"
        >הסינכ</BaseButton
      >
      <BaseButton :type="'submit'" :mode="'primary'">לוטיב</BaseButton>
    </div>
  </form>
</template>

<script>
import BaseButton from "./UI/BaseButton.vue";
import BaseInput from "./UI/BaseInput.vue";
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
    };
  },
  components: {
    BaseButton,
    BaseInput,
  },
  methods: {
    submitForm() {
      this.$router.push("/admin");
      console.log("userPassword: ", this.userPassword);
      console.log("userName: ", this.userName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__control {
    margin-top: rem(56px);
    width: rem(330px);
    &:first-child {
      margin-top: 0;
    }
    &_btns {
      display: flex;
      justify-content: space-between;
      margin-top: rem(92px);
      width: rem(330px);
    }
  }
  &__label {
    display: block;
    margin-bottom: rem(12px);
    padding-right: rem(22px);
    text-align: right;
    font-size: rem(18px);
    line-height: rem(21px);
    color: $primary-white-color;
  }
}

@media (min-width: $tablet) {
  .form {
    &__control {
      width: rem(350px);
      margin-top: rem(40px);
      &_btns {
        margin-top: rem(70px);
        width: rem(600px);
      }
    }
    &__label {
      margin-bottom: rem(15px);
      padding-right: rem(42px);
      font-size: rem(22px);
      line-height: rem(28px);
    }
  }
}

@media (min-width: $desktop) {
  .form {
    &__control {
      &_btns {
        margin-top: rem(86px);
        width: rem(740px);
      }
    }
    &__label {
      font-size: rem(24px);
    }
  }
}
</style>