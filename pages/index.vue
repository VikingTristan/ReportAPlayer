<template>
  <div id="scroll-sections" data-scroll-container class="cyber1">
    <section data-scroll-section class="cyber pt-20 min-h-screen">
      <div class="flex justify-center report-title">
        <span
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="top"
          class="title"
        >
          REPORT &nbsp;
        </span>
        <span
          data-scroll
          data-scroll-speed="3"
          data-scroll-position="left"
          class="title"
        >
          A &nbsp;
        </span>
        <span
          data-scroll
          data-scroll-speed="5"
          data-scroll-position="right"
          class="title"
        >
          PLAYER!
        </span>
      </div>
      <svg
        id="Layer_1"
        data-scroll
        data-scroll-speed="1"
        data-scroll-position="top"
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
      </svg>
    </section>
    <section data-scroll-section class="cyber min-h-screen">
      <div id="report-directions">
        <div class="report-directions-item report-directions-item-1">
          <h1
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="20"
            data-scroll-target="#report-directions"
          >
            REPORT!
          </h1>
        </div>
        <div class="report-directions-item report-directions-item-2">
          <h1
            data-scroll
            data-scroll-delay="0.05"
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#report-directions"
          >
            REPORT!
          </h1>
        </div>
        <div class="report-directions-item report-directions-item-3">
          <h1
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-direction="horizontal"
            data-scroll-speed="-15"
            data-scroll-target="#report-directions"
          >
            REPORT!
          </h1>
        </div>
        <div class="report-directions-item report-directions-item-4">
          <h1
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
            data-scroll-target="#report-directions"
          >
            REPORT!
          </h1>
        </div>
      </div>
    </section>
    <section data-scroll-section class="cyber">
      <h1 data-scroll data-scroll-speed="3" class="title">wroom</h1>
    </section>
    <section data-scroll-section class="cyber">
      <h1 data-scroll data-scroll-speed="-15" class="title">Sick scrolls</h1>
    </section>
    <section data-scroll-section class="cyber cyber2">
      <h1 data-scroll data-scroll-speed="-15" class="title">
        C-c-c-ombo breaker
      </h1>
    </section>
    <section data-scroll-section class="cyber flex justify-center">
      <div v-if="!reported" data-scroll data-scroll-speed="10" class="mt-10">
        <h1 class="title">WHO DO YOU WANT TO REPORT?</h1>
        <div class="flex justify-center">
          <input
            v-model="currentReportee"
            class="text-3xl border-solid border-2 border-gray-400 p-5 text-gray-800"
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import locomotive from "~/mixins/locomotive.js";

export default Vue.extend({
  mixins: [locomotive],
  data() {
    return {
      reported: false,
      currentReportee: "",
      reportee: "",
    };
  },
  methods: {
    reset() {
      this.reported = false;
    },
    report() {
      if (!this.currentReportee) return;
      this.reportee = this.currentReportee;
      this.currentReportee = "";
      this.reported = true;
    },
  },
});
</script>

<style lang="postcss">
.report-directions {
  position: absolute;
  height: 180vh;
  bottom: 0;
}
.report-directions-item {
  position: absolute;
  font-size: 10vw;
  white-space: nowrap;
  text-transform: uppercase;
  margin-bottom: 40vh;
}
.report-directions-item-1 {
  right: -110px;
  top: 33%;

  /* transform: translateX(-50vw) rotate(26deg); */
}
.report-directions-item-2 {
  top: 45%;
  left: 90%;
  transform: translateX(-50vw) rotate(26deg);
}
.report-directions-item-3 {
  top: 101%;
  right: 24%;
  transform: translateX(-50vw) rotate(-23deg);
}
.report-directions-item-4 {
  top: 85%;
  left: 70%;
  transform: translateX(-50vw) rotate(58deg);
}
.report-title {
  position: absolute;
  left: 20%;
  bottom: 30%;
}
.arrow-down {
  position: absolute;
  bottom: 0;
  left: 50%;
  stroke: #fff;
  width: 120px;
}
html {
  color: #fff;
}
.cyber {
  min-height: 100vh;

  /* display: flex;
  justify-content: center; */
}

.cyber1 {
  background-image: url("~assets/images/cyber1.jpg");
  background-position: 100% 0%;
  background-size: 140%;
}
.cyber2 {
  background-image: url("~assets/images/cyber2.jpg");
  background-position: 80% 70%;
}
.cyber3 {
  background-image: url("~assets/images/cyber3.jpg");
  background-position: 80% 70%;
}
.cyber4 {
  background-image: url("~assets/images/cyber4.jpg");
  background-position: 80% 70%;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;

  /* color: #35495e; */
  color: #fff;
  letter-spacing: 1px;
}
</style>
