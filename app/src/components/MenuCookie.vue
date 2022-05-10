<template>
  <div>
    <div class="popup">
      <div v-show="!showMenu" class="popup-text">
        Please manage the use of web extensions below
      </div>
      <div v-show="showMenu" class="menus">
        <button v-if="menus[0] != ''" class="btn btn-secondary" style="position: absolute; left: 1vw; top: 2vh; font-size: 3vh" @click="clickMenu(0)">
          {{ menus[0] }}
        </button>
        <button v-if="menus[1] != ''" class="btn btn-secondary" style="position: absolute; left: 1vw; top: 10vh; font-size: 3vh" @click="clickMenu(1)">
          {{ menus[1] }}
        </button>
        <button v-if="menus[2] != ''" class="btn btn-secondary" style="position: absolute; left: 1vw; top: 18vh; font-size: 3vh;" @click="clickMenu(2)">
          {{ menus[2] }}
        </button>
        <button v-if="menus[3] != ''" class="btn btn-secondary" style="position: absolute; left: 1vw; top: 26vh; font-size: 3vh" @click="clickMenu(3)">
          {{ menus[3] }}
        </button>
      </div>
      <div class="b-btn-group my-4" role="group">
        <button class="btn btn-success left-btn" @click="changeLose()">
          Accept
        </button>
        <button class="btn btn-secondary right-btn" @click="showMenu = !showMenu; getMenus();">
          Manage
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css");
  .popup {
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 25px;
    width: 40vw;
    height: 52vh;
    background-color:antiquewhite;
    outline: 2px dashed black;
  }

  .popup-text {
    font-size: 36px;
    color: black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-align: center;
    padding: 2vw;
  }

  .btn {
    font-size: 3vw;
    border-radius: 10px;
    margin-bottom: 3vh;
    outline: 2px solid black;
  }

  .right-btn {
    position: absolute;
    right: 3vw;
    bottom: 1vh;
  }

  .left-btn {
    position: absolute;
    left: 3vw;
    bottom: 1vh;
  }

  .menus {
    position: absolute;
    background-color: white;
    border-radius: 10px;
    left: 3vw;
    top: 2vh;
    outline-style: solid;
    outline-width: 2px;
    outline-color: black;
    height: 34vh;
    width: 34vw;
    overflow: scroll;
  }
</style>

<script>
export default {
  name: 'MenuCookie',
  data() {
    return {
      showMenu: false,
      menus: ['','','',''],
      adjectives: ['asynchronous', 'aggregate', 'algorithmic', 'application', 'client', 'encrypted', 'cloud', 'data', 'blockchain', 'domain', 'device', 'executable', 'binary', 'boolean', 'boot', 'network', 'database', 'composite', 'computer', 'digital', 'direct', 'distributed', 'dynamic'],
      nouns: ['trackers', 'cookies', 'scripts', 'data', 'list', 'cloud', 'storage', 'deployment', 'code', 'state', 'console', 'interface', 'database', 'topology', 'network', 'functions', 'menu'],
    }
  },
  methods: {
    getMenus() {
      this.menus = ['','','',''];
      const num = Math.floor(Math.random()*3) + 1;
      for(let i = 0; i <= num; i++) {
        const noun = this.nouns[Math.floor(Math.random()*this.nouns.length)];
        const adj = this.adjectives[Math.floor(Math.random()*this.adjectives.length)];
        this.menus[i] = `${adj} ${noun}`;
      }
      if(num == 3 && Math.random() < 0.05) {
        this.menus[Math.floor(Math.random()*4)] = "reject cookies"
      } 
    },
    clickMenu(index) {
      if(this.menus[index] === 'reject cookies') {
        this.changeWin();
      } else {
        this.getMenus();
      }
    },
    changeWin() {
      this.$emit("changeScreen", { res: "win", color: "#0aa51c" });
    },
    changeLose() {
      this.$emit("changeScreen", { res: "lose", color: "#f02017" });
    }
  }
}
</script>
