<template>
  <div id='app' :style="myStyle">
    <button v-if="screen != 3 && screen != 'lose' && screen != 'win'" class="btn btn-secondary btn-next" @click="screen += 1">
        Next
    </button>
    <button v-if="screen != 1 && screen != 'lose' && screen != 'win'" class="btn btn-secondary btn-prev" @click="screen -= 1">
        Prev
    </button>
    <div v-if="screen==='lose'">
      <EndScreen message="Loser" @playAgain="playAgain"/>
    </div>
    <div v-if="screen==='win'">
      <EndScreen message="Winner" @playAgain="playAgain"/>
    </div>
    <div v-if="screen===1">
      <JumperCookie @changeScreen="changeScreen"/>
    </div>
    <div v-if="screen===2">
      <SwitcherCookie @changeScreen="changeScreen"/>
    </div>
    <div v-if="screen===3">
      <MailCookie @changeScreen="changeScreen"/>
    </div>
  </div>
</template>

<script>
import SwitcherCookie from './components/SwitcherCookie.vue'
import JumperCookie from './components/JumperCookie.vue'
import MailCookie from './components/MailCookie.vue'

import EndScreen from './components/EndScreen.vue'

export default {
  name: 'App',
  components: {
    SwitcherCookie,
    JumperCookie,
    MailCookie,
    EndScreen,
  },
  data() {
    return {
      screen: 1,
      previousScreen: 1,
      myStyle:{
        backgroundColor: '#ffffff'
      }
    }
  },
  methods: {
    changeScreen({ res, color }) {
      this.previousScreen = this.screen;
      this.screen = res;
      this.myStyle = { backgroundColor: color }
    },
    playAgain() {
      this.screen = this.previousScreen;
      this.myStyle = { backgroundColor: 'white'}
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
