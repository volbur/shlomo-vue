<template>
  <div class="table-offers">
    <ul class="table-offers__heads">
      <li class="offers-head">חוקלל חלשנ</li>
      <li class="offers-head">הסילופ ‘סמ</li>
      <li class="offers-head">חוטיבה תליחת</li>
      <li class="offers-head">העצהה תחיתפ</li>
      <li class="offers-head">תוהז תדועת</li>
      <li class="offers-head">יושיר ‘סמ</li>
      <li class="offers-head">חטובמ םש</li>
      <li class="offers-head">רצומ</li>
      <li class="offers-head">ףנע</li>
    </ul>
    <ul class="table-offers__cards cards">
      <Card v-for="card in cards" :key="card.id" :card="card" />
    </ul>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  props: {
    cards: {
      type: Array,
      require: true,
    },
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.table-offers {
  list-style: none;
  &__heads {
    display: none;
    grid-template-columns:
      rem(140px) rem(122px) rem(110px) rem(104px) rem(105px)
      rem(98px) rem(167px) rem(168px) rem(63px);

    margin: 0 auto rem(35px);
    width: rem(1076px);
    list-style: none;
  }
}
.offers-head {
  font-size: rem(14px);
  line-height: rem(16px);
  text-align: center;
  color: $main-head-des-color;
  list-style: none;
}
.card {
  margin-bottom: rem(10px);
  &:last-child {
    margin-bottom: 0;
  }
}
@media (min-width: $tablet) {
  .card {
    margin-bottom: rem(30px);
  }
}

@media (min-width: $desktop) {
  .table-offers {
    &__heads {
      display: grid;
    }
  }
  .card {
    margin-bottom: rem(10px);
  }
}
</style>