<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price | toFixTwo }}元</p>
    <p>{{ desc }}</p>
    <button @click="fn">砍一刀</button>
  </div>
</template>

<script>
import EventBus from '../EventBus'

export default {
  name: 'MyProduct',
  props: ['title', 'price', 'desc', 'index'],
  methods: {
    fn() {
      //   this.$emit('subprice', this.index, 1)
      EventBus.$emit('send', this.index, 2)
    },
  },
}
</script>

<style>
.my-product {
  margin: 10px;
  padding: 20px;
  width: 400px;
  border: 2px solid #000;
  border-radius: 5px;
}
</style>
