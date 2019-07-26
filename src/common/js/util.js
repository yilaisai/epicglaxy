import Vue from 'vue';

export const convertNull = value => (value || 0);
Vue.filter('convertNull', convertNull);

export const convertNum = (value) => {
  if (value) {
    return value / 100;
  }
  return 0;
};
Vue.filter('convertNum', convertNum);


// 验证手机号
export const isPhoneNumber = (str) => {
  const reg = /^1[34578]\d{9}$/;
  return reg.test(str);
};


// 日期

export const dateFormat = function dateFormat(date, fmt = 'YYYY-MM-DD') {
  let newDate = date;
  let fmts = fmt;
  if (!newDate) {
    newDate = new Date;
  }
  if (typeof newDate === 'number') {
    newDate = new Date(newDate);
  }
  const o = {
    'M+': newDate.getMonth() + 1,
    'D+': newDate.getDate(),
    'h+': newDate.getHours() % 12 === 0 ? 12 : newDate.getHours() % 12,
    'H+': newDate.getHours(),
    'm+': newDate.getMinutes(),
    's+': newDate.getSeconds(),
    'q+': Math.floor((newDate.getMonth() + 3) / 3),
    S: newDate.getMilliseconds(),
  };
  const week = {
    0: '\u65e5',
    1: '\u4e00',
    2: '\u4e8c',
    3: '\u4e09',
    4: '\u56db',
    5: '\u4e94',
    6: '\u516d',
  };
  if (/(Y+)/.test(fmts)) {
    fmts = fmts.replace(RegExp.$1, (`${newDate.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmts)) {
    fmts = fmts.replace(RegExp.$1, () => {
      if (RegExp.$1.length > 1) {
        if (RegExp.$1.length > 2) {
          return `\u661f\u671f${week[newDate.getDay()]}`;
        }
        return `\u5468${week[newDate.getDay()]}`;
      }
      return week[`${newDate.getDay()}`];
    });
  }
  Object.keys(o)
    .forEach((k) => {
      if (new RegExp(`(${k})`).test(fmts)) {
        fmts = fmts.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
      }
    });
  return fmts;
};

Vue.filter('dateFormat', dateFormat);

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

// 你可以这样使用: typeValidate({})('String') === false
export function typeValidate(obj) {
  const types = [
    'Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map',
    'WeakMap', 'Set', 'WeakSet', 'Object', 'Null', 'Undefined', 'Boolean', 'Array',
  ];
  return (type) => {
    if (types.indexOf(type) > -1) {
      return Object.prototype.toString.call(obj) === `[object ${type}]`;
    }
    throw new CustomError('Invalid test type');
  };
}
