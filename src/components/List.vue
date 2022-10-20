<template>
  <div>
    <ul class="my-product">
      <li v-for="obj in arr" :key="obj.id">
        {{ obj.proname }} - {{ obj.proprice | toFixTwo }} - {{ obj.info }}
      </li>
    </ul>
  </div>
</template>

<script>
import EventBus from '../EventBus'
export default {
  name: 'List',
  props: ['arr'],
  created() {
    EventBus.$on('send', (index, price) => {
      if (this.arr[index].proprice < price) {
        alert('砍不了了，老板买了吧')
        return
      }
      this.arr[index].proprice -= price
    })
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
