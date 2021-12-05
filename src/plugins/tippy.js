import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling
import "tippy.js/animations/scale.css";

export default {
  install: (app, options) => {
    app.directive("tooltip", {
      beforeMount(el, binding, vnode, oldVnode) {
        tippy(el, {
          content: binding.value,
          animation: "scale",
        });
      },
    });
  },
};
