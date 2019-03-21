<template>
    <div class="detail">
      <input type="checkbox" v-model="data.checked">
      <img :src="data.pic" alt="">
      <div class="carListA">
        <span>{{data.title}}</span>
        <span>{{data.attrs.straptyps}}&nbsp{{data.attrs.color}}&nbsp{{data.attrs.strap}}</span>
        <p><span class="carListB">￥{{data.nprice}}</span><span class="carListC">￥{{data.oprice}}</span><span class="carListD"><a @click.prevent.default="add(sid,pid)">X</a>{{data.attrs.numbers}}</span></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cartsGoods",
      props:["data","pid","sid"],
      methods:{
          add(sid,pid){
            console.log("2");
            this.$emit("add",sid,pid);
          }
      }

    }
</script>

<style scoped>
  .detail{
    display: flex;
    align-items: center;
  }
  input{
    margin-left:.21rem;
  }
   img{
    margin-left:.16rem;
    margin-right:.1rem;
    display: block;
    width:.95rem;
    height:.95rem;
  }
  .carListA span:nth-of-type(1){
    font-size:.1rem;
    display: block;
    margin-bottom:6px;
  }
  .carListA span:nth-of-type(2){
    font-size:7px;
    color:#959595;
    display: block;
    margin-bottom:.13rem;
  }
  .carListA span:nth-of-type(3){
    font-size:7px;
    color:#959595;
    display: block;
    margin-left:1.1rem;
  }
  .carListA p{
    display: flex;
  }
  .carListB{
    font-size:.1rem;
    display: block;
  }
  .carListC{
    font-size:8px;
    color:#959595;
    text-decoration: line-through;
  }


</style>
