<template>
  <div>
    <div class="popup">
        <div class="popup-text">
          Read the terms & conditions to reject
        </div>
        <div class="b-btn-group my-4" role="group">
          <button class="btn btn-success left-btn" @click="changeLose()">
            Accept
          </button>
          <button class="btn btn-danger right-btn" v-if="showReject" @click="changeWin()">
            Reject
          </button>
        </div>
        <div class="terms" @scroll="onScroll($event);">
          <div class="term-text">
            {{ fileText }}
          </div>
        </div>
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
    height: 50vh;
    background-color:antiquewhite;
    outline: 2px dashed black;
    overflow: hidden;
  }

  .popup-text {
    font-size: 2vw;
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
  
  .terms::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
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

  .terms {
    position: absolute;
    background-color: white;
    border-radius: 10px;
    left: 3vw;
    top: 12vh;
    outline-style: solid;
    outline-width: 2px;
    outline-color: black;
    height: 22vh;
    width: 34vw;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .term-text {
    position:absolute; 
    left:2vw; 
    top:1vh;
  }

</style>

<script>
import file from '@/files/terms.txt'
export default {
  name: 'TermsCookie',
  data() {
    return {
      showReject: false,
    }
  },
  methods: {
    changeWin() {
      this.$emit("changeScreen", { res: "win", color: "#0aa51c" });
    },
    changeLose() {
      this.$emit("changeScreen", { res: "lose", color: "#f02017" });
    },
    onScroll (event) {
      if (event.target.clientHeight + event.target.scrollTop >= event.target.scrollHeight){
        this.showReject = true;
      }
    },
  },
  created() {
    this.fileText = file;
  }
}
</script>
