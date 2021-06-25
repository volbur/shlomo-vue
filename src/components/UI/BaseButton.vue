<template>
  <button
    class="btn"
    :class="[
      mode,
      {
        icon: icon,
        round: round,
      },
    ]"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    icon: {
      type: Boolean,
      required: false,
    },
    round: {
      type: Boolean,
      required: false,
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../scss/variables.scss";
.btn {
  width: rem(156px);
  height: rem(40px);
  border-radius: rem(35px);
  border: none;
  font-size: rem(18px);
  line-height: rem(21px);
  color: $primary-white-color;
  cursor: pointer;
}
.btn.icon {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: rem(25px);
    transform: translateY(-50%);
    display: inline-block;
    width: rem(15px);
    height: rem(15px);
    background: url("../../assets/img/icons/icon-triangle.svg") center
      center/cover no-repeat;
  }
}
.btn.secondary {
  background-color: $secondary-btn-color;
}
.btn.primary {
  background-color: $primary-accent-color;
}

.btn.round {
  width: rem(40px);
  height: rem(40px);
  font-size: 0;
  &::before {
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background: url("../../assets/img/icons/icon-plus.svg") center center/cover
      no-repeat;
  }
}

@media (min-width: $tablet) {
  .btn {
    width: rem(280px);
    height: rem(50px);
    font-size: rem(22px);
  }
  .btn.icon {
    &::before {
      left: rem(44px);
      width: rem(24px);
      height: rem(24px);
    }
  }
  .btn.round {
    width: rem(50px);
    height: rem(50px);
    &::before {
      left: unset;
    }
  }
}

@media (min-width: $desktop) {
  .btn {
    width: rem(350px);
    height: rem(58px);
    font-size: rem(24px);
    line-height: rem(28px);
  }
  .btn.icon {
    &::before {
      left: rem(102px);
      width: rem(19px);
      height: rem(19px);
    }
  }
  .btn.round {
    width: rem(284px);
    height: rem(58px);
    font-size: rem(24px);
    &::before {
      width: rem(20px);
      height: rem(20px);
      top: 50%;
      left: rem(25px);
      transform: translateY(-50%);
      background: url("../../assets/img/icons/icon-triangle.svg") center
        center/cover no-repeat;
    }
  }
}
</style>