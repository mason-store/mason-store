
import Integration from './Integration/index.vue';
import "./styles/index.css"

function install(Vue) {
  var components = [Integration];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { install, Integration };
export default {
  install: install,
};