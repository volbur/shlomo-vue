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

.btn.round {
  width: 40px;
  height: 40px;
  font-size: 0;
  &::before {
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background: url("../../assets/img/icons/icon-plus.svg") center center/cover
      no-repeat;
  }
}

@media (min-width: 768px) {
  .btn {
    width: 280px;
    height: 50px;
    font-size: 22px;
  }
  .btn.icon {
    &::before {
      left: unset;
      width: 30px;
      height: 30px;
    }
  }
  .btn.round {
    width: 50px;
    height: 50px;
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
    }
  }
  .btn.round {
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