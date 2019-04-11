<template lang="pug">
v-card(flat to='stockout') 
  v-container(fluid grid-list-md)
    v-layout(row wrap)
     v-flex(v-for='card in cards' :key='card.title' v-bind='{ [`xs${card.flex}`]: true }')
       v-card(color='teal')
        v-card-text(align='center').headline 生产领料
     v-flex
  
</template>
<script>
export default {
    data() {
      return {
        cards: [
        { title: '销售出库', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        //{ title: '生产领料', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        //{ title: '盘点', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
      ]
      }
    }
  }
</script>
