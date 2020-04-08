<template>
  <div class="wrapper">
    <Header />
    <Sidebar />
    <nuxt />
    <Footer />
    <ControlSidebar />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '~/components/Footer.vue'
import ControlSidebar from '~/components/ControlSidebar.vue'

export default {
  components: {
    Header, Sidebar, Footer, ControlSidebar
  }
}
</script>
<style>
  body {
    margin: 0;
  }
</style>
