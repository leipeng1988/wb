<template>
  <div class="box">
    <my-new @show="show()"></my-new>
    <my-order></my-order>
    <my-server></my-server>
  </div>

</template>

<script>
  import myNew from "./myNew"
  import myOrder from "./myOrder"
  import myServer from "./myServer"
    export default {
        name: "myContent",
        components:{
          myNew,
          myOrder,
          myServer
        },
      methods:{
          show(){
            this.$emit("show","我的")
          }
      },
    }
</script>

<style scoped>
    .box{
      flex: 1;
      overflow-y: auto;
    }
</style>
