<template>
  <div class="base-input__wrapper">
    <button class="base-input__btn" :class="className" type="button">
      <img :src="iconSrc" :alt="iconAlt" />
    </button>
    <input
      class="base-input"
      type="text"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconSearch: {
        src: require("../../assets/img/icons/icon-search.svg"),
        alt: "icon search",
      },
      iconCross: {
        src: require("../../assets/img/icons/icon-cross.png"),
        alt: "icon cross",
      },
    };
  },
  props: {
    value: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    icon: {
      type: Boolean,
      required: false,
    },
    iconName: {
      type: String,
      required: false,
    },
  },
  computed: {
    iconSrc() {
      if (this.iconName === "search") {
        return this.iconSearch.src;
      } else if (this.iconName === "cross") {
        return this.iconCross.src;
      }
      return null;
    },
    iconAlt() {
      if (this.iconName === "search") {
        return this.iconSearch.alt;
      } else if (this.iconName === "cross") {
        return this.iconCross.alt;
      }
      return null;
    },
    className() {
      return {
        show: this.icon,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  padding: 0 22px;
  width: 100%;
  height: 40px;
  border-radius: 35px;
  border: none;
  text-align: right;
  font-size: 18px;
  line-height: 21px;
  background: #ffffff;
  &:focus {
    outline: none;
  }
  &__wrapper {
    position: relative;
  }
  &__btn {
    display: none;
    position: absolute;
    top: 50%;
    left: 22px;
    width: 14px;
    height: 14px;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}

.show {
  display: inline-block;
}

@media (min-width: 768px) {
  .base-input {
    padding: 0 48px;
    height: 50px;
    font-size: 22px;
    line-height: 28px;
    &__btn {
      position: absolute;
      top: 50%;
      left: 22px;
      width: 30px;
      height: 30px;
      transform: translateY(-50%);
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
}
@media (min-width: 1330px) {
  .base-input {
    height: 58px;
    font-size: 24px;
    &__btn {
      width: 18px;
      height: 18px;
    }
  }
}
</style>