<template>
  <v-app>
    <log-viewer url="/api/logs/hello" />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>

<style lang="scss">
@import './foundation-icons.scss';
</style>
