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
                stroke="#009C41"
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
        <RoundButton :is-letter="true" />
        <RoundButton :is-pen="true" />
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

<style lang="scss">
.card {
  list-style: none;

  &__wrapper {
    position: relative;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, minmax(45px, auto));
    grid-row-gap: 14px;
    padding: 26px 10px 24px;
    height: unset;
    border-radius: 30px;
    background-color: #fff;
  }
  &__item {
    list-style: none;
    align-self: center;
    &_svg {
      text-align: center;
      .card__item-head {
        color: #797979;
      }
    }
    &-head {
      font-size: 18px;
      line-height: 21px;
      text-align: right;
      color: #797979;
    }
    &-value {
      padding: 7px;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      text-align: right;
      color: #21325e;
    }
    &_1 {
      grid-column: 1 / 2;
      grid-row: 6 / 6;
      align-self: flex-end;
      .svg-wrapper {
        display: none;
        svg {
          width: 20px;
          height: 16px;
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
      padding-bottom: 17px;
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;

        content: "";
        display: inline-block;
        width: 200%;
        height: 2px;
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
    top: 15px;
    left: 35px;
    justify-content: space-between;
    width: 95px;
  }
  .round-button {
    background-color: #009c41;
  }
}

.show-text .card__item-head {
  color: #009c41;
}

.svg-wrapper {
  display: none;
}

@media (min-width: 768px) {
  .card {
    &__items {
      grid-row-gap: 22px;
      padding: 30px 40px 40px;
    }
    &__item {
      &-head {
        font-size: 22px;
        margin-bottom: 7px;
      }
      &-value {
        font-size: 26px;
      }
    }
    &__nav {
      top: 15px;
      left: 35px;
      width: 110px;
    }
  }
}

@media (min-width: 1330px) {
  .card {
    &:hover {
      .card__nav {
        display: flex;
      }
      .card__items {
        background-color: #ff7728;
      }
      .card__item-value {
        color: #fff;
      }
      .card__item_svg {
        svg path {
          stroke: #fff;
        }
      }
    }
    &__items {
      grid-template-columns: repeat(9, 1fr);
      grid-template-rows: minmax(45px, auto);
      padding: 0;
      border-radius: 35px;
      background-color: #fff;
      cursor: pointer;
    }
    &__item {
      &-head {
        display: none;
      }
      &-value {
        border-left: 1px solid #e5e5e5;

        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
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
      right: -112px;
      left: unset;
      justify-content: space-between;
      width: 100px;
      transform: translateY(-50%);
    }
    .round-button {
      width: 45px;
      height: 45px;
      background-color: #fff;
    }
  }
  .show-svg .svg-wrapper {
    display: inline-block;
  }
}
</style>