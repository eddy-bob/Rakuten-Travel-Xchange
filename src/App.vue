<script>
import appHeader from "./components/appHeader.vue";
import appFooter from "./components/appFooter.vue";
export default {
  components: { appHeader, appFooter },
};
</script>
<template>
  <div >
    <appHeader />

    <router-view></router-view>
    <appFooter />
  </div>
</template>

<style></style>
