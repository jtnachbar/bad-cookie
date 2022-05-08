<template>
    <div>
        <h1> {{ message }} </h1>
        <button @click="playAgain()"> Play Again </button>
    </div>
</template>

<style scoped>

h1 {
  font-family: 'Comic Sans MS', sans-serif;
  color: #fff;
  font-size: 100px;
  font-weight: 300;
}

button {
  position: absolute;
  top: 60%;
  right: 45%;
  font-family: 'Comic Sans MS', sans-serif;
  background-color: #fff;
  border: none;
  font-size: 22px;
  padding: 10px 24px;
  border-radius: 4px;
}
</style>

<script>
export default {
  name: 'EndScreen',
  props: ['message'],
  data(){
    return {
    }
  },
  methods: {
    playAgain() {
      this.$emit("playAgain");
    }
  }
}
</script>
