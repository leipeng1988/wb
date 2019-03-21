<template>
 <div class="index">
   <index-header></index-header>
   <index-content :recommend="indexRecomm"></index-content>
   <common-footer></common-footer>
 </div>
</template>

<script>

    import indexHeader from "../components/index/indexHeader"
    import indexContent from "../components/index/indexContent"
    import commonFooter from "../components/index/indexFooter"
    import wbIndexApi from "../apis/wbIndex"
    export default {
        name: "wbIndex",
        components:{
          indexHeader,
          indexContent,
          commonFooter
        },
      data(){
          return {
            indexRecomm:[]
          }
      },
      methods:{
          _initData(){
            wbIndexApi.getwbIndexInfo(data=>{
              console.log(data);
                this.indexRecomm=data;
            })
          }
      },
      created(){
          this._initData();
      }

    }
</script>

<style scoped>
  .index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
