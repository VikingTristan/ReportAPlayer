<template>
  <div ref="scrollSections" class="cyber1">
    <section data-scroll-section class="cyber pt-20">
      <div class="grid" data-scroll data-scroll-speed="1">
        <h1 data-scroll data-scroll-speed="1" class="title">
          REPORT A PLAYER!
        </h1>
        <svg
          id="Layer_1"
          data-scroll
          data-scroll-speed="2"
          class="arrow-down"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
          str
          xml:space="preserve"
        >
          <g id="Layer_1_1_">
            <path
              d="M48.707 19.353l-1.414-1.413L25 40.232 2.707 17.94l-1.414 1.413L25 43.06z"
            />
            <path
              d="M48.707 8.353L47.293 6.94 25 29.232 2.707 6.94 1.293 8.353 25 32.06z"
            />
          </g>
          <metadata>
            <rdf:RDF
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              ><rdf:Description
                about="https://iconscout.com/legal#licenses"
                dc:title="angle-double-down-arrow-direction"
                dc:description="angle-double-down-arrow-direction"
                dc:publisher="Iconscout"
                dc:date="2018-05-24"
                dc:format="image/svg+xml"
                dc:language="en"
                ><dc:creator
                  ><rdf:Bag><rdf:li>Becris .</rdf:li></rdf:Bag></dc:creator
                ></rdf:Description
              ></rdf:RDF
            >
          </metadata>
        </svg>
      </div>
    </section>
    <section data-scroll-section class="cyber flex justify-center">
      <div v-if="!reported" class="grid">
        <h1 class="title">WHO DO YOU WANT TO REPORT?</h1>
        <div class="grid grid-cols-2">
          <input
            v-model="currentReportee"
            class="text-3xl border-solid border-2 border-gray-400 p-5"
            type="text"
            @keydown.enter="report()"
          />
          <button
            class="border-solid border-2 border-red-900 text-3xl"
            type="submit"
            @click="report()"
          >
            REPORT PLAYER!
          </button>
        </div>
      </div>
      <div v-else class="grid">
        <h1 class="text-6xl">Reported!</h1>
        <h2 class="text-4xl">
          All of our agents are now taking immediate action against <br />
          <strong>{{ reportee }}</strong>
        </h2>
        <p class="">
          The player "{{ reportee }}" will receive the most appropriate justice
          that you deem necessary in your own mind.
        </p>
        <button
          class="my-20 border-solid border-2 border-brown-500 p-5 text-3xl"
          type="button"
          @click="reset()"
        >
          I am satisfied and I want to report another!
        </button>
      </div>
    </section>
    <section class="cyber">
      <h1>mkay</h1>
    </section>
    <section data-scroll-section class="cyber">
      <h1 class="title">Sick scrolls</h1>
    </section>
    <section data-scroll-section class="cyber cyber2">
      <h1>C-c-c-ombo breaker</h1>
    </section>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import LocomotiveScroll from 'locomotive-scroll'
import Vue from 'vue'
// const locomotiveScroll = require('locomotive-scroll')

export default Vue.extend({
  data() {
    return {
      scroll: null,
      reported: false,
      currentReportee: '',
      reportee: '',
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initLocoScroll()
    })
  },
  methods: {
    initLocoScroll() {
      const _self = this
      this.scroll = new LocomotiveScroll({
        el: _self.$refs.scrollSections,
        smooth: true,
        smoothMobile: true,
        getDirection: true,
      })
    },
    reset() {
      this.reported = false
    },
    report() {
      if (!this.currentReportee) return
      this.reportee = this.currentReportee
      this.currentReportee = ''
      this.reported = true
    },
  },
})
</script>

<style lang="postcss">
.arrow-down {
  stroke: #fff;
  width: 120px;
}
html {
  color: #fff;
}
.cyber {
  min-height: 1600px;
  display: flex;
  justify-content: center;
}

.cyber1 {
  background-image: url('~assets/images/cyber1.jpg');
  background-position: 100% 0%;
  background-size: 140%;
}
.cyber2 {
  background-image: url('~assets/images/cyber2.jpg');
  background-position: 80% 70%;
}
.cyber3 {
  background-image: url('~assets/images/cyber3.jpg');
  background-position: 80% 70%;
}
.cyber4 {
  background-image: url('~assets/images/cyber4.jpg');
  background-position: 80% 70%;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;

  /* color: #35495e; */
  color: #fff;
  letter-spacing: 1px;
}
</style>
