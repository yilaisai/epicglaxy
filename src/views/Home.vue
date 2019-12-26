<template>
  <div class="home" >
    1111
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted(){
    this.$ScrollReveal().reveal('.scroll',this.$store.state.ScrollConfig)
  }
}
</script>
