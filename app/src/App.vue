<template>
  <div id='app' :style="myStyle">
    <div v-if="screen==='lose'">
      <EndScreen message="Loser"/>
    </div>
    <div v-if="screen==='win'">
      <EndScreen message="Winner"/>
    </div>
    <div v-if="screen==='play'">
      <SwitcherCookie/>
    </div>
  </div>
</template>

<script>
import SwitcherCookie from './components/SwitcherCookie.vue'
import EndScreen from './components/EndScreen.vue'

export default {
  name: 'App',
  components: {
    SwitcherCookie,
    EndScreen,
  },
  data() {
    return {
      screen: 'play',
      myStyle:{
        backgroundColor:"000000" 
      },
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
