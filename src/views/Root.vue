<template lang="pug">
v-app
  v-content
   v-layout(justify-center wrap)
    v-flex(xs12 sm6)
     v-toolbar(color='indigo')
      v-toolbar-side-icon
      v-toolbar-title WMS
      v-spacer
      v-toolbar-title 5999
    v-flex(xs12 sm12)
     router-view
    v-flex
     v-btn(color='pink' dark small fixed bottom right fab)
      v-icon tag_faces 
</template>
