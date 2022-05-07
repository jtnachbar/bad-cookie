<template>
  <div>
    <div class="popup">
      <div class="popup-text">
        To reject cookies, please send a signed note to: <br><br>
        757 S. Alameda St., Suite 220 <br> Los Angeles, CA 90021 <br><br>
        You will be automatically redirected upon receipt.
      </div>
      <div class="b-btn-group my-4" role="group">
        <button class="btn btn-success left-btn" @click="changeLose()">
          Accept
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css");
  .popup {
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 25px;
    width: 40vw;
    height: 55vh;
    background-color:antiquewhite;
    outline: 2px dashed black;
  }

  .popup-text {
    font-size: 22px;
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

  .left-btn {
    margin-left: 14vw;
    margin-bottom: 3vh;
  }
</style>

<script>
export default {
  name: 'MailCookie',
  data() {
    return {
      acceptClass: 'left-btn',
    }
  },
  methods: {
    changeLose() {
      this.$emit("changeScreen", { res: "lose", color: "#f02017" });
    }
  }

}
</script>
