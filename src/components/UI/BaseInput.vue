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
@import "../../scss/variables.scss";
.base-input {
  padding: 0 rem(22px);
  width: 100%;
  height: rem(40px);
  border-radius: rem(35px);
  border: none;
  text-align: right;
  font-size: rem(18px);
  line-height: rem(21px);
  background: $primary-white-color;
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
    left: rem(22px);
    width: rem(14px);
    height: rem(14px);
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}

.show {
  display: inline-block;
}

@media (min-width: $tablet) {
  .base-input {
    padding: 0 rem(48px);
    height: rem(50px);
    font-size: rem(22px);
    line-height: rem(28px);
    &__btn {
      position: absolute;
      top: 50%;
      left: rem(22px);
      width: rem(30px);
      height: rem(30px);
      transform: translateY(-50%);
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
}
@media (min-width: $desktop) {
  .base-input {
    height: rem(58px);
    font-size: rem(24px);
    &__btn {
      width: rem(18px);
      height: rem(18px);
    }
  }
}
</style>