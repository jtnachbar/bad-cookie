<template>
  <div>
    <div v-if="showMenu == false" class="popup">
        <div class="popup-text">
          Please manage the use of cookies below
        </div>
        <div class="b-btn-group my-4" role="group">
        <button class="btn btn-success left-btn" @click="checkScreen()">
          Continue
        </button>
        <button class="btn btn-secondary right-btn" @click="this.showMenu = true">
          Manage
        </button>
        </div>
    </div>
    <div v-else class="popup">
      <div class="checks">
        <div v-for="val in 185" :key="val" class="form-check list-check"
        style="{ position:absolute; left:2vw; top:1vh;}">
          <input v-model="checkList[val-1]" class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
            Bad Cookie Number {{ val }}
          </label>
        </div>
      </div>
       <button class="btn btn-secondary left-btn" @click="this.showMenu = false">
          Back
      </button>
    </div>
  </div>
</template>

<style scoped>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css");
  .popup {
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    border-radius: 25px;
    width: 40vw;
    height: 40vh;
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

  .checks {
    position: absolute;
    background-color: white;
    border-radius: 10px;
    left: 3vw;
    top: 2vh;
    outline-style: solid;
    outline-width: 2px;
    outline-color: black;
    height: 22vh;
    width: 34vw;
    overflow: scroll;
  }

  .list-check {
    width: 30vw;
  }

</style>

<script>
export default {
  name: 'SwitcherCookie',
  data() {
    return {
      showMenu: false,
      checkList: Array(185).fill(true),
    }
  },
  methods: {
    checkScreen() {
      console.log(this.checkList[0]);
      for(let i = 0; i < 185; i++) {
        if(this.checkList[i]) {
          this.changeLose();
          return;
        }
      }
      this.changeWin();
    },
    changeWin() {
      this.$emit("changeScreen", { res: "win", color: "#0aa51c" });
    },
    changeLose() {
      this.$emit("changeScreen", { res: "lose", color: "#f02017" });
    },
  }
}
</script>
