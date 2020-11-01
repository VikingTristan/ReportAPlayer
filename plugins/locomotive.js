import Vue from "vue";
import LocomotiveScroll from "locomotive-scroll";

Object.defineProperty(Vue.prototype, "LocomotiveScroll", {
  value: LocomotiveScroll,
});

// export default ({ app }, inject) => {
//   inject("LocomotiveScroll", LocomotiveScroll);
// };
