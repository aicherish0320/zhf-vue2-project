<template>
  <el-carousel :interval="4000" type="card" height="360px">
    <el-carousel-item v-for="item in sliders" :key="item._id">
      <img class="img" :src="item.url" alt="img" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import * as types from '@/store/action-types'
export default {
  name: 'HomeView',
  computed: {
    ...mapState(['sliders'])
  },
  methods: {
    ...mapActions([types.SET_SLIDERS])
  },
  mounted() {
    if (!this.sliders.length) {
      this[types.SET_SLIDERS]()
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
}
</style>
