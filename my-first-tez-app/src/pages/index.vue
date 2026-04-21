<script >
import headerComponent from "../components/header.vue";
import footerComponent from "../components/footer.vue";
export default {
  components: {
    headerComponent: headerComponent,
    footerComponent:footerComponent
  },
  head: {
    title: "tezjs: starter vue project",
  },
};
</script>
<template>
  <headerComponent></headerComponent>
  
 <footerComponent></footerComponent>
</template>