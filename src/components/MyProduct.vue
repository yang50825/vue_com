<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyProduct',
  props: ['title', 'price', 'desc'],
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
