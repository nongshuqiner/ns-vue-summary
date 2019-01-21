import Vue from 'vue';
import deepmerge from 'deepmerge'; // 用于Javascript对象的深度（递归）合并的库
import defaultLang from './lang/zh-CN'; // 默认语言
import Format from './format';

const format = Format(Vue);

let lang = defaultLang;

let merged = false;

let i18nHandler = function () { // i18n的处理程序
  const vuei18n = Object.getPrototypeOf(this || Vue).$t; // 语言翻译转换方法
  if (typeof vuei18n === 'function' && !!Vue.locale) {
    if (!merged) {
      merged = true;
      Vue.locale(
        Vue.config.lang, // 当前语言类型
        deepmerge(lang, Vue.locale(Vue.config.lang) || {}, { clone: true }) // 深度合并
      );
    }
    return vuei18n.apply(this, arguments);
  }
};

export const t = function (path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  const array = path.split('.');
  let current = lang;

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) return format(value, options);
    if (!value) return '';
    current = value;
  }
  return '';
};

export const use = function (l) {
  lang = l || lang;
};

export const i18n = function (fn) {
  i18nHandler = fn || i18nHandler;
};

export default { use, t, i18n };
