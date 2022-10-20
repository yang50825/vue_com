<template>
  <div>
    <div style="float: left">
      <my-product
        v-for="(obj, index) in list"
        :key="obj.id"
        :title="obj.proname"
        :price="obj.proprice"
        :desc="obj.info"
        :index="index"
        @subprice="fn"
      ></my-product>
    </div>
    <div style="float: left">
      <List :arr="list"></List>
    </div>
  </div>
</template>

<script>
import MyProduct from './components/MyProduct'
import List from './components/List'
export default {
  name: 'App',
  data() {
    return {
      list: [
        {
          id: 1,
          proname: '超级好吃的棒棒糖',
          proprice: 18.8,
          info: '开业大酬宾, 全场8折',
        },
        {
          id: 2,
          proname: '超级好吃的大鸡腿',
          proprice: 34.2,
          info: '好吃不腻, 快来买啊',
        },
        {
          id: 3,
          proname: '超级无敌的冰激凌',
          proprice: 14.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
      ],
    }
  },
  methods: {
    fn(index, price) {
      if (this.list[index].proprice < price) {
        alert('砍不了了，老板买了吧')
        return
      }
      this.list[index].proprice -= price
    },
  },
  components: {
    MyProduct,
    List,
  },
}
</script>

<style></style>
