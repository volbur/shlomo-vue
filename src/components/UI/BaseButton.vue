<template>
  <button
    class="btn"
    :class="[
      mode,
      {
        icon: icon,
        medium: medium,
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
    medium: {
      type: Boolean,
      required: false,
    },
  },
};
</script>


<style lang="scss" scoped>
.btn {
  width: 156px;
  height: 40px;
  border-radius: 35px;
  border: none;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;
}
.btn.icon {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url("../../assets/img/icons/icon-triangle.svg") center
      center/cover no-repeat;
  }
}
.btn.grey {
  background-color: #c4c4c4;
}
.btn.green {
  background-color: #009c41;
}

.btn.medium {
  width: 40px;
  height: 40px;
  font-size: 0;
  &::before {
    left: 50%;
    transform: translate(-50%, -50%);
    border: 100%;
    background: url("../../assets/img/icons/icon-plus.svg") center center/cover
      no-repeat;
  }
}

@media (min-width: 1330px) {
  .btn {
    width: 350px;
    height: 58px;
    font-size: 24px;
    line-height: 28px;
  }
  .btn.icon {
    &::before {
      left: 102px;
      width: 20px;
      height: 20px;
    }
  }
  .btn.medium {
    width: 284px;
    height: 58px;
    font-size: 24px;
    &::before {
      width: 20px;
      height: 20px;
      top: 50%;
      left: 25px;
      transform: translateY(-50%);
      background: url("../../assets/img/icons/icon-triangle.svg") center
        center/cover no-repeat;
    }
  }
}
</style>