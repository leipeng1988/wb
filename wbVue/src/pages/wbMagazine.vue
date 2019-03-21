<template>
  <div class="mag">
    <magazine-header></magazine-header>
    <magazine-content :magCont="magazines.magaz"></magazine-content>
    <magazine-footer></magazine-footer>
  </div>
</template>

<script>
    import magazineHeader from "../components/magazine/magazineHeader"
    import magazineContent from "../components/magazine/magazineContent"
    import magazineFooter from "../components/magazine/magazineFooter"
    import wbMagazineApi from "../apis/wbMagazine"

    export default {
        name: "wbMagazine",
        components:{
          magazineHeader,
          magazineContent,
          magazineFooter
        },
      data(){
           return {
             magazines:[]
           }
       },
       methods:{
           _initMaga(){
             wbMagazineApi.getwbMagazineInfo(data=>{
               console.log(data);
               this.magazines=data;
             })
           }
       },
       created(){
        this._initMaga();
       }

    }
</script>

<style scoped>
    .mag{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
</style>
