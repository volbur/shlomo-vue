<template>
  <li class="card">
    <div class="card__wrapper container">
      <ul class="card__items">
        <li
          class="card__item card__item_svg"
          :class="{ 'show-svg': card.isActive }"
        >
          <div class="card__item-head">(חוקלל החלשנ)</div>
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
        </li>
        <li class="card__item">
          <div class="card__item-head">הסילופ ‘סמ</div>
          <div class="card__item-value">{{ card.id }}</div>
        </li>
        <li class="card__item">
          <div class="card__item-head">חוטיבה תליחת</div>
          <div class="card__item-value">{{ card.dateStart }}</div>
        </li>
        <li class="card__item">
          <div class="card__item-head">העצהה תחיתפ</div>
          <div class="card__item-value">{{ card.dateEnd }}</div>
        </li>
        <li class="card__item">
          <div class="card__item-head">תוהז תדועת</div>
          <div class="card__item-value">{{ card.phoneNumber }}</div>
        </li>
        <li class="card__item">
          <div class="card__item-head">יושיר ‘סמ</div>
          <div class="card__item-value">{{ card.orderId }}</div>
        </li>
        <li class="card__item">
          <div class="card__item-head">חטובמ םש</div>
          <div class="card__item-value">{{ card.lastName }}</div>
        </li>
        <li class="card__item">
          <div class="card__item-head">רצומ</div>
          <div class="card__item-value">{{ card.firstName }}</div>
        </li>
        <li class="card__item">
          <div class="card__item-head">ףנע</div>
          <div class="card__item-value">{{ card.model }}</div>
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
  &__wrapper {
    position: relative;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    height: 45px;
    border-radius: 35px;
    background-color: #fff;
    cursor: pointer;
    @media (max-width: 374px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-row-gap: 14px;
      padding: 15px 10px 24px;
      height: unset;
    }
  }
  &__item {
    list-style: none;
    align-self: center;
    &:first-child {
      .card__item-value {
        border-left: unset;
      }
    }
    &_svg {
      text-align: center;
      .card__item-head {
        color: #009c41;
      }
      svg {
        display: none;
        width: 20px;
        height: 16px;
      }
    }
    &-head {
      font-size: 18px;
      line-height: 21px;
      text-align: right;
      color: #797979;
      @media (min-width: 1330px) {
        display: none;
      }
    }
    &-value {
      text-align: center;
      border-left: 1px solid #e5e5e5;
      font-size: 14px;
      line-height: 29px;
      color: #21325e;
      @media (max-width: 374px) {
        border-left: unset;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        text-align: right;
        color: #21325e;
      }
    }
  }
  &__nav {
    display: none;
    position: absolute;
    top: 50%;
    right: -112px;
    justify-content: space-between;
    width: 100px;
    transform: translateY(-50%);
  }
}
.show-svg svg {
  display: inline-block;
}
</style>