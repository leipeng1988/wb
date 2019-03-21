<template>
  <div>
    <login-header></login-header>
    <login-content></login-content>
  </div>
</template>

<script>
    import loginHeader from "../components/login/loginHeader"
    import loginContent from "../components/login/loginContent"
    export default {
        name: "wbLogin",
        components:{
          loginHeader,
          loginContent
        }
    }
</script>

<style scoped>

</style>
