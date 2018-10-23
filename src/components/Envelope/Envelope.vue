<template>
  <div class="envelope">
    <div class="envelope-wrapper">
      <div class="envelope-corner"></div>
      <div class="envelope-top"></div>
      <div class="envelope-back"></div>
      <div class="paper">
        <div class="paper__input-textarea">
          <p class="input-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit vel facere totam esse ea quisquam laudantium, voluptatibus veritatis architecto corrupti repellendus! Adipisci quaerat odit expedita earum ducimus itaque repellendus?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'
import { SplitText } from 'splittext'
export default {
  mounted () {
    this.send()
  },
  methods: {
    send () {
      var tl = new TimelineMax({ delay: 1 })
      var inputText = document.querySelectorAll('.input-text')
      var mySplitText = new SplitText(inputText, { type: 'chars' })
      var chars = mySplitText.chars
      var trans = 170
      Array.from(inputText, e => {
        e.style.opacity = '1'
      })

      tl.staggerTo(chars, 0.01, { opacity: 1 }, 0.05, '+=0')
        .to('.input-button', 0.2, {color: 'white', backgroundColor: '#6ebcb9'}, '+=0.3')
        .to('.input-button', 0.2, {color: '#6ebcb9', backgroundColor: 'white'})
        .to('.envelope', 0.3, { y: trans })
        .to('.paper', 0.3, { y: -2 * trans }, '-=0.3')
        .to('.envelope-top', 0.1, { zIndex: 100 }, '-=0.1')
        .to('.envelope', 0.3, { y: 0 }, '+=0.1')
        .to('.paper', 0.3, { y: 10 }, '-=0.3')
        .to('.envelope-corner', 0.25, { rotationX: 180 }, '+=0.1')
        .to('.envelope-corner', 0.1, { zIndex: 110 }, '-=0.15')
        .to('.envelope', 0.8, { y: -1200, opacity: 0 }, '+=0.2')
    }
  }
}
</script>

<style lang="scss" scoped>
  .envelope {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    position: relative;
    font-family: 'Roboto';
    overflow: hidden;
    background-color: #79CECB;
    .envelope-wrapper {
      background-color: #e5e5e5;
      width: 35vmax;
      height: 21vmax;
      max-width: 800px;
      max-height: 500px;
      min-width: 500px;
      min-height: 300px;
      position: relative;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      filter: drop-shadow(0 0 40px  rgba(0,0,0,0.05)) drop-shadow(0 0 10px  rgba(0,0,0,0.05)) drop-shadow(0 0 1px  rgba(0,0,0,0.16));
    }

    .envelope-corner {
      background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImVudmVsb3BlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzQwIDIzMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzQwIDIzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CjxwYXRoIGZpbGw9IiNlNWU1ZTUiICBkPSJNMzQwLDIzMHYtNHYtMy44di0yLjhsMCwwdi0wLjFjMC0yLjEtMS00LjEtMi43LTUuNEwxNzgsOThjLTQuNC0zLjEtMTEuNi0zLjEtMTYsMEwyLjcsMjE0CglDMSwyMTUuMiwwLDIxNy4yLDAsMjE5LjR2Mi44djMuOHY0SDM0MHoiLz4KPC9zdmc+Cgo=");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: top center;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: -100%;
      transform-origin: bottom;
      z-index: -1;
    }
    .envelope-top {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImVudmVsb3BlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzQwIDIzMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzQwIDIzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJz4KIDxkZWZzPgogIDxmaWx0ZXIgaWQ9ImxlZnQtcmlnaHQtc2hhZG93IiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIj4KICAgIDxmZU9mZnNldCByZXN1bHQ9Im9mZk91dCIgaW49IlNvdXJjZUdyYXBoaWMiIGR4PSIwIiBkeT0iMCIgLz4KICAgIDxmZUNvbG9yTWF0cml4IHJlc3VsdD0ibWF0cml4T3V0IiBpbj0ib2ZmT3V0IiB0eXBlPSJtYXRyaXgiCiAgICAgIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4zIDAiIC8+CiAgICA8ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PSJibHVyT3V0IiBpbj0ibWF0cml4T3V0IiBzdGREZXZpYXRpb249IjEiIC8+CiAgICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyT3V0IiBtb2RlPSJub3JtYWwiIC8+CiAgPC9maWx0ZXI+CjwvZGVmcz4KPGcgaWQ9ImVudiIgPgo8cG9seWdvbiBpZD0ibGVmdC1yaWdodCIgZmlsdGVyPSJ1cmwoI2xlZnQtcmlnaHQtc2hhZG93KSIgZmlsbD0iI0Y0RjRGNCIgIHBvaW50cz0iMCwyMzAgMCwxMCAxNzAsMTE1IDM0MCwxMCAzNDAsMjMwICIvPgo8cGF0aCBpZD0iYm90dG9tIiBmaWx0ZXI9InVybCgjbGVmdC1yaWdodC1zaGFkb3cpIiBmaWxsPSIjRjlGOUY5IiBkPSJNMCwyMzBoMzQwdi0xMEwxNzgsMTAyYy00LjQtMy4xLTExLjYtMy4xLTE2LDBMMCwyMjBMMCwyMzAiLz4KCjwvZz4KCjwvc3ZnPgo=');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      z-index: 2;
    }
    .envelope-back {
      background-color: #e5e5e5;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .paper {
      display: flex;
      justify-content: space-between;
      flex-wrap:wrap;
      background-color: #fff;
      width: 93%;
      height: 93%;
      max-width: 460px;
      max-height: 290px;
      z-index: 10;
      margin-bottom: 20px;
      box-shadow: 0 0 3px rgba(0,0,0, 0.2);
      padding: 20px;
      box-sizing: border-box;
      position: relative;
      .paper__input-textarea {
        margin-top: 15px;
        width: 100%;
        height: 65%;
        max-height: 150px;
        background-image: repeating-linear-gradient(to bottom, white 0px, white 19px, lightgrey 19px, lightgrey 20px);
        background-position: 0 15px;
        background-repeat: no-repeat;
        .input-text {
          opacity: 0;
          color: #555;
          line-height: 20px;
          div{
            opacity: 0;
          }
        }
      }
    }
  }
</style>
