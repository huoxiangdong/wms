<template lang='pug'>
v-app
  v-container
   v-layout(justify-center wrap)
    v-flex(xs12 sm6)
     v-toolbar(color='indigo')
      v-toolbar-title WMS
      v-spacer
      v-btn(icon)
    v-flex(xs12 sm12)
 
   
        





    



</template>

<script>


export default {
  name: 'App',
  components: {
    Home
  },
  data () {
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
