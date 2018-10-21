<template>
    <div class="typer">
      {{str2}}
    </div>
</template>

<script>
export default {
  data () {
    return {
      str: '今夕何夕兮搴舟中流，今日何日兮得与王子同舟。 蒙羞被好兮不訾诟耻。 心几烦而不绝兮得知王子。 山有木兮木有枝，心悦君兮君不知。',
      i: 0,
      timer: 0,
      str2: ''
    }
  },
  methods: {
    typing () {
      if (this.i <= this.str.length) {
        this.str2 = this.str.slice(0, this.i++) + '_'
        this.timer = setTimeout(() => {
          this.typing()
        }, 200)
      } else {
        clearTimeout(this.timer)
      }
    }
  },
  mounted () {
    this.typing()
  }
}
</script>

<style scoped>
</style>
