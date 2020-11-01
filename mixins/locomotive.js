import _ from "lodash";

export default {
  data() {
    return {
      scrollPosition: 0,
    };
  },
  watch: {
    $route() {
      this.lmS.update();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.lmS = new this.LocomotiveScroll({
        el: document.querySelector("#scroll-sections"),
        smooth: true /* if false disable overflow: hidden on html, body */,
      });

      this.lmS.on("scroll", _.throttle(this.onLmsScroll, 150));
      window.addEventListener(
        "resize",
        _.debounce(this.onLmsResize.bind(this), 100)
      );
    });
  },
  destroyed() {
    this.lmS.destroy();
    window.removeEventListener("resize", this.onLmsResize);
  },
  methods: {
    onLmsScroll(obj) {
      this.scrollPosition = obj.scroll.y;
    },
    onLmsResize() {
      this.lmS.update();
    },
  },
};
