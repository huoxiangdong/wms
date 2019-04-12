<template lang="pug">
v-card(flat)
 v-container
  v-layout(wrap)
   v-flex(xs12)
    v-text-field(
        clearable
        prepend-inner-icon='search'
        placeholder='搜索'
        v-model='datacode'
    )
   v-flex(xs12)
    v-expansion-panel(focusable)
     v-expansion-panel-content(
         v-for='(item, i) in items'
         :key='i'
     )
      template(v-slot:header)
       div {{ item.title }}
      v-card(v-for='(Stockout, s) in item.Stockout' :key='s')
       v-card-text(class='grey light-3' @click='dialog = !dialog') {{ Stockout.sourceid }}
       v-dialog(v-model='dialog' full-width hide-overlay scrollable ) 
         v-list 
          v-list-tile(v-for='(mcode, m) in Stockout.Detail' :key='m' avatar
            @click="")
           v-list-tile-content 
            v-list-tile-title(v-text='mcode.sourceid')

 
</template>
<script>
export default {
  data() {
    return {
      datacode: "",
      items: [],
      dialog: false
    };
  },
  mounted() {
    
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.axios
      .get("/stockout/getckNoticeList", {
        params: {
          sourceid: "",
          outtype: 0
        }
      })
      .then(res => {
        const { data } = res;
        data.map(ele => {
          console.log(ele);
          vm.items.push({
            title: `${ele.custno} (${ele.shortname})`,
            Stockout: ele.Stockout
          });
        });
      });
    });
  }
};
</script>

