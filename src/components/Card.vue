<template>
  <li class="card">
    <div class="card__wrapper container">
      <ul class="card__items">
        <li
          class="card__item card__item_1 card__item_svg"
          :class="{ 'show-svg': card.isActive, 'show-text': !card.isActive }"
        >
          <div class="card__item-head card__item-head_green">(חוקלל החלשנ)</div>
          <div class="svg-wrapper">
            <svg
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11.5L10 18L22 2"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
        <li class="card__item card__item_2">
          <div class="card__item-head">הסילופ ‘סמ</div>
          <div class="card__item-value">{{ card.id }}</div>
        </li>
        <li class="card__item card__item_3">
          <div class="card__item-head">חוטיבה תליחת</div>
          <div class="card__item-value">{{ card.dateStart }}</div>
        </li>
        <li class="card__item card__item_4">
          <div class="card__item-head">העצהה תחיתפ</div>
          <div class="card__item-value">{{ card.dateEnd }}</div>
        </li>
        <li class="card__item card__item_5">
          <div class="card__item-head">תוהז תדועת</div>
          <div class="card__item-value">{{ card.phoneNumber }}</div>
        </li>
        <li class="card__item card__item_6">
          <div class="card__item-head">יושיר ‘סמ</div>
          <div class="card__item-value">{{ card.orderId }}</div>
        </li>
        <li class="card__item card__item_7">
          <div class="card__item-head">חטובמ םש</div>
          <div class="card__item-value">{{ card.lastName }}</div>
        </li>
        <li class="card__item card__item_8">
          <div class="card__item-head">רצומ</div>
          <div class="card__item-value">{{ card.firstName }}</div>
        </li>
        <li class="card__item card__item_9">
          <div class="card__item-wrapper">
            <div class="card__item-value">{{ card.model }}</div>
          </div>
          <img src="../assets/img/icons/icon-car.svg" alt="icon car" />
        </li>
      </ul>
      <ul class="card__nav">
        <RoundButton :is-icon-letter="true" />
        <RoundButton :is-icon-pen="true" />
      </ul>
    </div>
  </li>
</template>

<script>
import RoundButton from "./UI/RoundButton.vue";

export default {
  props: {
    card: {
      type: Object,
      require: true,
    },
  },
  components: {
    RoundButton,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.card {
  list-style: none;

  &__wrapper {
    position: relative;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, minmax(rem(45px), auto));
    grid-row-gap: rem(14px);
    padding: rem(26px) rem(10px) rem(24px);
    height: unset;
    border-radius: rem(30px);
    background-color: $primary-white-color;
  }
  &__item {
    list-style: none;
    align-self: center;
    &_svg {
      text-align: center;
      .card__item-head {
        color: $main-head-mob-color;
      }
    }
    &-head {
      font-size: rem(18px);
      line-height: rem(21px);
      text-align: right;
      color: $main-head-mob-color;
    }
    &-value {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: rem(7px);
      font-weight: bold;
      font-size: rem(20px);
      line-height: rem(23px);
      text-align: right;
      color: $main-text-color;
    }
    &_1 {
      grid-column: 1 / 2;
      grid-row: 6 / 6;
      align-self: flex-end;
      .svg-wrapper {
        display: none;
        svg {
          width: rem(20px);
          height: rem(16px);
        }
      }
    }
    &_2 {
      grid-column: 2 / 3;
      grid-row: 6 / 6;
    }
    &_3 {
      grid-column: 1 / 2;
      grid-row: 5 / 5;
    }
    &_4 {
      grid-column: 2 / 3;
      grid-row: 5 / 5;
    }
    &_5 {
      grid-column: 1 / 2;
      grid-row: 4 / 4;
    }
    &_6 {
      grid-column: 2 / 3;
      grid-row: 4 / 4;
    }
    &_7 {
      grid-column: 2 / 3;
      grid-row: 3 / 3;
    }
    &_8 {
      grid-column: 2 / 3;
      grid-row: 2 / 2;
    }
    &_9 {
      position: relative;

      grid-column: 2 / 3;
      grid-row: 1 / 1;
      padding-bottom: rem(17px);
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;

        content: "";
        display: inline-block;
        width: 200%;
        height: rem(2px);
        background-color: #1d4076;
      }
      img {
        margin-left: auto;
      }
      .card__item-value {
        display: none;
      }
    }
  }
  &__nav {
    position: absolute;
    display: flex;
    top: rem(15px);
    left: rem(35px);
    justify-content: space-between;
    width: rem(95px);
  }
  .round-button {
    background-color: $primary-accent-color;
  }
}
.card__item_svg {
  svg path {
    stroke: $primary-accent-color;
  }
}

.show-text .card__item-head {
  color: $primary-accent-color;
}

.svg-wrapper {
  display: none;
}

@media (min-width: $tablet) {
  .card {
    &__items {
      grid-row-gap: rem(22px);
      padding: rem(30px) rem(40px) rem(40px);
    }
    &__item {
      &-head {
        font-size: rem(22px);
        margin-bottom: rem(7px);
      }
      &-value {
        font-size: rem(26px);
      }
    }
    &__nav {
      top: rem(15px);
      left: rem(35px);
      width: rem(110px);
    }
    &__item {
      &_9 {
        img {
          height: rem(40px);
        }
      }
    }
  }
}

@media (min-width: $desktop) {
  .card {
    &:hover {
      .card__nav {
        display: flex;
      }
      .card__items {
        background-color: $secondary-accent-color;
      }
      .card__item-value {
        color: $primary-white-color;
      }
      .card__item_svg {
        svg path {
          stroke: $primary-white-color;
        }
      }
    }
    &__items {
      grid-template-columns:
        rem(140px) rem(122px) rem(110px) rem(104px) rem(105px)
        rem(98px) rem(167px) rem(168px) rem(63px);
      grid-template-rows: minmax(rem(45px), auto);
      padding: 0;
      border-radius: 35px;
      background-color: $primary-white-color;
      cursor: pointer;
    }
    &__item {
      &-head {
        display: none;
      }
      &-value {
        border-left: rem(1px) solid #e5e5e5;
        font-weight: normal;
        font-size: rem(14px);
        line-height: rem(16px);
        text-align: center;
      }
      &_svg {
        text-align: center;
        .card__item-head {
          display: none;
        }
      }
      &_1,
      &_2,
      &_3,
      &_4,
      &_5,
      &_6,
      &_7,
      &_8,
      &_9 {
        grid-column-start: unset;
        grid-column-end: unset;
        grid-row-start: unset;
        grid-row-end: unset;
        align-self: unset;
        align-self: center;
      }
      &_9 {
        padding-bottom: 0;
        &::after {
          display: none;
        }
        .card__item-head {
          display: none;
        }
        .card__item-value {
          display: block;
        }
        img {
          display: none;
        }
      }
    }
    &__nav {
      display: none;
      position: absolute;
      top: 50%;
      right: rem(-112px);
      left: unset;
      justify-content: space-between;
      width: rem(100px);
      transform: translateY(-50%);
    }
    .round-button {
      width: rem(45px);
      height: rem(45px);
      background-color: $primary-white-color;
    }
  }
  .show-svg .svg-wrapper {
    display: inline-block;
  }
}
</style>