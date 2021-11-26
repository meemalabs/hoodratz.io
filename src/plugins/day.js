import dayjs from 'dayjs'

export default {
  /**
    * Vue
    * @param {Vue} Vue
  */
  install: function (app) {
    app.config.globalProperties.$dayjs = dayjs
    app.config.globalProperties.$date = dayjs
    app.dayjs = dayjs;
  }
};
