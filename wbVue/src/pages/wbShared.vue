<template>
  <div>
    <shared-header></shared-header>
    <shared-content :data="sharedData"></shared-content>
    <shared-footer></shared-footer>
  </div>
</template>

<script>
    import sharedHeader from "../components/shared/sharedHeader"
    import sharedContent from "../components/shared/sharedContent"
    import sharedFooter from "../components/shared/sharedFooter"
    import wbSharedApi from "../apis/wbShare"
    export default {
        name: "wbShared",
      components:{
        sharedHeader,
        sharedContent,
        sharedFooter
      },

      data(){
          return {
            sharedData:{}
          }
      },

      methods:{
          _initData(){
            wbSharedApi.getwbSharedInfo(data=>{
              console.log(data);
              this.sharedData=data;
            })
          }
      },

      created(){
          this._initData();
      }

    }
</script>

<style scoped>

</style>
