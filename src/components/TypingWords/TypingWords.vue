<template>
  <div class="typer">
    <div class="typer-content">
      <p class="typer-dynamic">
        <span class="cut">
          <span class="word" v-for="(letter,index) in words" :key="index">{{letter}}</span>
        </span>
        <span class="typer-cursor"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      words: [],
      str: '致',
      letters: [],
      order: 1
    }
  },
  watch: {
    order (old, newV) {
      if (this.order % 4 === 1) {
        this.str = '可爱'
      } else if (this.order % 4 === 2) {
        this.str = '心悦君兮君不知'
      } else if (this.order % 4 === 3) {
        this.str = '山有木兮木有枝'
      } else {
        this.str = '谷学姐'
      }
    }
  },
  mounted () {
    this.begin()
  },
  methods: {
    begin () {
      this.letters = this.str.split('')
      for (var i = 0; i < this.letters.length; i++) {
        setTimeout(this.write(i), i * 100)
      }
    },
    back () {
      let L = this.letters.length
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 50)
      }
    },
    write (i) {
      return () => {
        let L = this.letters.length
        this.words.push(this.letters[i])
        let that = this
        if (i === L - 1) {
          setTimeout(function () {
            that.back()
          }, 2000)
        }
      }
    },
    wipe (i) {
      return () => {
        this.words.pop(this.letters[i])
        if (this.words.length === 0) {
          this.order++
          let that = this
          setTimeout(function () {
            that.begin()
          }, 300)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .typer {
    width: 800px;
    height: 100%;
    background: #caff09bd;
    margin: 5% auto;
    box-sizing: border-box;
    .typer-content {
      padding: 50px;
      font-weight: bold;
      font-size: 50px;
      display: flex;
      flex-direction: row;
      letter-spacing: 2px;
    }
    .typer-dynamic {
      position: relative;
      .cut {
        color: #e84d49;
      }
      .typer-cursor {
        position: absolute;
        height: 100%;
        width: 3px;
        top: 0;
        right: -10px;
        background-color: #e84d49;
        animation: flash 1.5s linear infinite;
      }
    }
  }
</style>
