<template>

  <div class="popup">
    <div class="popup-text">
      Please manage the use of cookies below
    </div>
    <div class="b-btn-group my-4" role="group">
      <button class="btn btn-success" :class="acceptClass" @click="changeLose()">
        Accept
      </button>
      <button class="btn btn-danger" :class="rejectClass" @mouseover="toggleSides()" @click="changeWin()">
        Reject
      </button>
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
  name: 'SwitcherCookie',
  data() {
    return {
      acceptClass: 'left-btn',
      rejectClass: 'right-btn',
    }
  },
  methods: {
    toggleSides() {
      if (this.acceptClass === 'left-btn'){
        this.acceptClass = 'right-btn';
        this.rejectClass = 'left-btn';
      }
      else {
        this.acceptClass = 'left-btn';
        this.rejectClass = 'right-btn';
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
