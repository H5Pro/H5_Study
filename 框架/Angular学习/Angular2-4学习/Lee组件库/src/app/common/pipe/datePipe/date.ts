const formatDate = (time: any, format: string) => {
  if (!time) {
    return '';
  }
  // 默认传入的是字符串格式
   let date = new Date(time);
  // 如果传入的日期对象
  if (time instanceof Date) {
    date = time;
  }
  const Y = date.getFullYear().toString();
  const M = (date.getMonth() + 1).toString().padStart(2, '0');
  const D = date.getDate().toString().padStart(2, '0');
  const h = date.getHours().toString().padStart(2, '0');
  const m = date.getMinutes().toString().padStart(2, '0');
  const s = date.getSeconds().toString().padStart(2, '0');
  const ms = date.getMilliseconds().toString().padStart(3, '0');
  let dateStr = format.replace(/[A-Za-z]{2}/g, '{}');
  dateStr = dateStr.replace('{}{}', Y);
  dateStr = dateStr.replace('{}', M);
  dateStr = dateStr.replace('{}', D);
  dateStr = dateStr.replace('{}', h);
  dateStr = dateStr.replace('{}', m);
  dateStr = dateStr.replace('{}', s);
  dateStr = dateStr.replace('{}', ms);
  return dateStr;
};
const getCurDate = (date: any) => {
  if (!date) {
   return '';
  }
  const nowTime = new Date();
  let targetTime = date;
  if (typeof date !== 'object') {
    targetTime = new Date(date);
  }
  const nowDays = nowTime.valueOf() / (24 * 60 * 60 * 1000);
  const targetDays = targetTime.valueOf() / (24 * 60 * 60 * 1000);
  const dValue = Math.floor(nowDays - targetDays);
  let showValue = formatDate(targetTime, 'yyyy/mm/dd');
  switch (dValue) {
    case 0:
      showValue = '今天';
      break;
    case 1:
      showValue = '昨天';
      break;
    case 2:
      showValue = '前天';
      break;
  }
  return showValue;
};
const getCurTime = (date: any) => {
  if (!date) {
    return '';
  }
  const nowTime = new Date();
  let targetTime = date;
  if (typeof date !== 'object') {
    targetTime = new Date(date);
  }
  const nowSeconds = nowTime.valueOf() / 1000;
  const targetSeconds = targetTime.valueOf() / 1000;
  const dValue = nowSeconds - targetSeconds;
  let showValue = formatDate(targetTime, 'yyyy/mm/dd hh:mm:ss').split(' ')[1];
  if (dValue > 60 && dValue < 60 * 60) {
    showValue = `${Math.floor(dValue / 60)}分钟前`;
  } else if (dValue < 60 && dValue >= 0) {
    showValue = `${Math.floor(dValue)}秒前`;
  }
  return showValue;
};

export {formatDate, getCurDate, getCurTime};
