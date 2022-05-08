<template>
  <div>
    <div class="popup">
      <div class="popup-text">
        Please manage the use of cookies below
      </div>
      <div class="b-btn-group my-4" role="group">
        <button class="btn btn-success" :class="acceptClass" @click="changeLose()">
          Accept
        </button>
        <button class="btn btn-danger" :class="rejectClass" @click="changeWin()" @mouseover="randomJump()" 
        :style="{ 'position': pos, 'left':posX, 'top':posY }">
          Reject
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
</style>

<script>
export default {
  name: 'JumperCookie',
  data() {
    return {
      acceptClass: 'left-btn',
      rejectClass: 'right-btn',
      pos: '',
      posX: '',
      posY: '',
    }
  },
  methods: {
    randomJump() {
      this.rejectClass = '';
      this.pos =  'absolute';
      this.posX = `${String(Math.floor(Math.random() * (window.innerWidth)) - 0.3 * (window.innerWidth))}px`;
      this.posY = `${String(Math.floor(Math.random() * (window.innerHeight)) - 0.3 * (window.innerHeight) )}px`;
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
