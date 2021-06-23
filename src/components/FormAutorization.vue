<template>
  <form @submit.prevent="submitForm" class="authorization__form form">
    <div class="form__control">
      <label class="form__label" for="user-name">שמתשמ םש</label>
      <BaseInput
        :icon="true"
        :icon-name="'cross'"
        :name="'user-name'"
        :id="'user-name'"
      />
    </div>
    <div class="form__control">
      <label class="form__label" for="user-password">אמסיס</label>
      <BaseInput :name="'user-password'" :id="'user-password'" />
    </div>
    <div class="form__control form__control_btns">
      <BaseButton :icon="true" :type="'button'" :mode="'grey'"
        >הסינכ</BaseButton
      >
      <BaseButton :type="'submit'" :mode="'green'">לוטיב</BaseButton>
    </div>
  </form>
</template>

<script>
import BaseButton from "./UI/BaseButton.vue";
import BaseInput from "./UI/BaseInput.vue";
export default {
  components: {
    BaseButton,
    BaseInput,
  },
  methods: {
    submitForm() {
      this.$router.push("/admin");
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__control {
    margin-top: 56px;
    width: 330px;
    &:first-child {
      margin-top: 0;
    }
    &_btns {
      display: flex;
      justify-content: space-between;
      margin-top: 92px;
      width: 330px;
    }
  }
  &__label {
    display: block;
    margin-bottom: 12px;
    padding-right: 22px;
    text-align: right;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
  }
}

@media (min-width: 768px) {
  .form {
    &__control {
      width: 350px;
      margin-top: 40px;
      &_btns {
        margin-top: 70px;
        width: 600px;
      }
    }
    &__label {
      margin-bottom: 15px;
      padding-right: 42px;
      font-size: 22px;
      line-height: 28px;
    }
  }
}

@media (min-width: 1330px) {
  .form {
    &__control {
      &_btns {
        margin-top: 86px;
        width: 740px;
      }
    }
    &__label {
      font-size: 24px;
    }
  }
}
</style>