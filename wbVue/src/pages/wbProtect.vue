<template>
  <div class="pros">
    <protect-header></protect-header>
    <protect-content :data="protectData"></protect-content>
    <protect-footer></protect-footer>
  </div>
</template>

<script>
    import protectHeader from"../components/protect/protectHeader"
    import protectContent from"../components/protect/protectContent"
    import protectFooter from "../components/protect/protectFooter"
    import wbProtectApi from "../apis/wbProtect"
    export default {
        name: "wbProtect",
        components:{
          protectHeader,
          protectContent,
          protectFooter
        },
        data(){
          return {
            protectData:{}
          }
        },

      methods:{

          _initData(){
            wbProtectApi.getwbProtectInfo((data)=>{
              console.log(data);
              this.protectData=data;
            })

          }
      },

      created(){
          this._initData();
      }

    }
</script>

<style scoped>
    .pros{
      height:100%;
      display: flex;
      flex-direction: column;
    }
</style>
