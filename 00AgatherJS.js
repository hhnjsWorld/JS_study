//随机数封装好的方法
const arrayRandomValue = (array, start = 0, end) => {
        end = end ? end : array.length;
        start--;
        const index = start + Math.floor(Math.random() * (end - start));
        return array[index];
    }
    //定义日期格式方法
const dateFormat = (date, format = "YYYY-MM-DD HH:mm:ss") => {
    const config = {
        YYYY: date.getFullYear(),
        MM: date.getMonth() + 1,
        DD: date.getDate(),
        HH: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds(),
    };
    for (const key in config) {
        format = format.replace(key, config[key]);
    }
    return format;
};
export {
    arrayRandomValue,
    dateFormat,
}