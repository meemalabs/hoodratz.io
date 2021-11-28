import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

export default {
  /**
    * Vue
    * @param {Vue} Vue
  */
  install: function (app) {
    dayjs.extend(localizedFormat)

    app.config.globalProperties.$dayjs = dayjs
    app.config.globalProperties.$date = dayjs
    app.dayjs = dayjs;
  }
};
