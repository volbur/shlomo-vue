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

<style lang="scss">
.table-offers {
  list-style: none;
  &__heads {
    display: none;
    grid-template-columns: repeat(9, 1fr);
    margin: 0 auto 35px;
    width: 1076px;
    list-style: none;
  }
}
.offers-head {
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #f5f5f5;
  list-style: none;
}
.card {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
@media (min-width: 768px) {
  .card {
    margin-bottom: 30px;
  }
}

@media (min-width: 1330px) {
  .table-offers {
    &__heads {
      display: grid;
    }
  }
  .card {
    margin-bottom: 10px;
  }
}
</style>