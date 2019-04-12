<template lang="pug">
v-card(flat) 
  v-container
    v-layout(justify-center wrap)
     v-flex(v-for='card in cards' :key='card.title' v-bind='{ [`xs${card.flex}`]: true }')
       v-card(color='teal' to='stockout')
        v-card-text(align='center').headline 生产领料
  
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
