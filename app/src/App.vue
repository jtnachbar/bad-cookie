<template>
  <div>
    <button v-if="screen != 2" class="btn btn-secondary btn-next" @click="screen += 1">
        Next
    </button>
    <button v-if="screen != 1" class="btn btn-secondary btn-prev" @click="screen -= 1">
        Prev
    </button>
    <div id='app' :style="myStyle">
      <div v-if="screen==='lose'">
        <EndScreen message="Loser"/>
      </div>
      <div v-if="screen==='win'">
        <EndScreen message="Winner"/>
      </div>
      <div v-if="screen===1">
        <JumperCookie @changeScreen="changeScreen"/>
      </div>
      <div v-if="screen===2">
        <SwitcherCookie @changeScreen="changeScreen"/>
      </div>
    </div>
  </div>
</template>

<script>
import SwitcherCookie from './components/SwitcherCookie.vue'
import JumperCookie from './components/JumperCookie.vue'

import EndScreen from './components/EndScreen.vue'

export default {
  name: 'App',
  components: {
    SwitcherCookie,
    JumperCookie,
    EndScreen,
  },
  data() {
    return {
      screen: 1,
      myStyle:{
        backgroundColor: '#ffffff'
      }
    }
  },
  methods: {
    changeScreen({ res, color }) {
      console.log(color)
      this.screen = res;
      this.myStyle = { backgroundColor: color }
    }
  },
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
.btn-next {
  font-size: 24px;
  right: 2vw;
  top: 3vh;
  position: absolute;
}
.btn-prev {
  font-size: 24px;
  left: 2vw;
  top: 3vh;
  position: absolute;
}
</style>
