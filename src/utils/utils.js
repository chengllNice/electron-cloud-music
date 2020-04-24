
/**
 * 储存localStorage
 * @param name
 * @param value
 * @returns {boolean}
 */
const setStorage = (name, value) => {
    if (!name) return false;
    window.localStorage.setItem(name, value);
};

/**
 * 获取指定的localstorage
 * @param name
 * @returns {string|boolean|any}
 */
const getStorage = (name) => {
    if (!name) return false;
    return window.localStorage.getItem(name)
};

/**
 * 删除指定的localStorage
 * @param name
 * @returns {boolean}
 */
const removeStorage = (name) => {
    if (!name || !window.localStorage.getItem(name)) return false;
    window.localStorage.removeItem(name);
};


/**
 * 检验当前播放歌曲
 * @param data
 * @param vue
 */
const isCurrentMusic = (data, vue) => {
    let query_id = vue.$route.query.id || '';
    let current_music_id = vue.$store.state.music_info.id;
    let current_music_source_path = vue.$store.state.music_info.source_path;
    if(current_music_source_path.path == vue.$route.path && current_music_source_path.id == query_id && current_music_id == data.id){
        data.playStatus = vue.$store.state.music_info.playStatus
    }else{
        data.playStatus = ''
    }
};

/**
 * 时间转换
 * @param msd
 * @param type
 * @returns {string}
 */
// const timeFormat = (msd, type) => {
//     var time = '';
//     if(type){
//         let _date = new Date(msd);
//         let now_date = new Date();
//         let now_y = now_date.getFullYear();
//         let now_m = zeroFormat(now_date.getMonth()+1);
//         let now_d = zeroFormat(now_date.getDate());
//         let now_time = now_date.getTime();
//         let _date_time = _date.getTime();
//         let y = _date.getFullYear();
//         let m = zeroFormat(_date.getMonth()+1);
//         let d = zeroFormat(_date.getDate());
//
//         let _h = zeroFormat(_date.getHours());
//         let _m = zeroFormat(_date.getMinutes());
//         let _s = zeroFormat(_date.getSeconds());
//
//         if(type === 'comment'){
//             let dis_time = now_time - _date_time;
//             //计算出相差天数
//             let dis_days=Math.floor(dis_time/(24*3600*1000));
//             if(now_y === y && now_m === m && now_d === d){
//                 //计算出小时数
//                 let leave1=dis_time%(24*3600*1000);    //计算天数后剩余的毫秒数
//                 let dis_hours=Math.floor(leave1/(3600*1000));
//                 //计算相差分钟数
//                 let leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
//                 let dis_minutes=Math.floor(leave2/(60*1000));
//                 //计算相差秒数
//                 // let leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
//                 // let dis_seconds=Math.round(leave3/1000);
//                 if(dis_hours === 0){
//                     time = `${dis_minutes}分钟前`;
//                     if(dis_minutes === 0){
//                         time = `刚刚`;
//                     }
//                 }else{
//                     time = `${_h}:${_m}`;
//                 }
//             }else if(dis_days === 0){
//                 time = `昨天 ${_h}:${_m}`
//             }else{
//                 time = `${m}月${d}日 ${_h}:${_m}`;
//             }
//         }else{
//             let y_i = type.indexOf('yy');
//             let m_i = type.indexOf('mm');
//             let d_i = type.indexOf('dd');
//
//             let _h_i = type.indexOf('hh');
//             let _m_i = type.lastIndexOf('mi');
//             let _s_i = type.indexOf('ss');
//
//             let y_m = type.substring(m_i-1,m_i);
//             let m_d = type.substring(d_i-1,d_i);
//             let d_d = type.substring(d_i+2,d_i+3);
//
//             let h_m = type.substring(_m_i-1,_m_i);
//             let m_s = type.substring(_s_i-1,_s_i);
//
//             if(y_i<0){
//                 y = '';
//                 y_m = '';
//             }
//             if(m_i<0){
//                 m = '';
//                 m_d = '';
//             }
//             if(d_i<0){
//                 d = ''
//             }
//             if(d_d == ''){
//                 d_d = ' '
//             }
//             if(_h_i<0){
//                 _h = '';
//                 h_m = '';
//             }
//             if(_m_i<0){
//                 _m = '';
//                 m_s = '';
//             }
//             if(_s_i<0){
//                 _s = '';
//             }
//             time = `${y}${y_m}${m}${m_d}${d}${d_d}${_h}${h_m}${_m}${m_s}${_s}`;
//         }
//     }else{
//         let secondTotal = parseFloat(msd) / 1000;//总共秒
//
//         let hour = 0;//小时
//         let minute = 0;//分钟
//         let second = 0;//秒
//
//         if (null != time && "" != time) {
//             if (time > 60 && time < 60 * 60) {
//                 time = zeroFormat(parseInt(time / 60.0)) + ":" + zeroFormat(parseInt((parseFloat(time / 60.0) -
//                     parseInt(time / 60.0)) * 60));
//             }
//             else if (time >= 60 * 60 && time < 60 * 60 * 24) {
//                 time = zeroFormat(parseInt(time / 3600.0)) + ":" + zeroFormat(parseInt((parseFloat(time / 3600.0) -
//                     parseInt(time / 3600.0)) * 60)) + ":" +
//                     zeroFormat(parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
//                         parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60));
//             }
//             else {
//                 time = '00:' + zeroFormat(parseInt(time));
//             }
//         }else{
//             time = '00:00'
//         }
//     }
//
//     return time;
// };


/**
 * 时间格式化
 * @param value
 * @param type date(日期转换) time(时间转换)
 * @param format
 * @returns {string|*}
 */
const timeFormat = (value, type, format) => {
    if(type === 'time'){
        if(!value.toString()) return value;
        format = format || 'hh:mm:ss';
        let secondTotal = parseFloat(value) / 1000;//总共秒

        let hour = parseInt(secondTotal / 3600) || 0;//小时
        let minute = parseInt(secondTotal / 60 - hour * 60);//分钟
        let second = parseInt(secondTotal - hour * 3600 - minute * 60);//秒


        hour = zeroFormat(hour);
        minute = zeroFormat(minute);
        second = zeroFormat(second);
        return format.replace('hh', hour).replace('mm', minute).replace('ss', second);
    }
    if(type === 'date'){
        let d = new Date(value);

        format = format || 'YY-MM-DD';

        let year = zeroFormat(d.getFullYear());
        let month = zeroFormat(d.getMonth() + 1);
        let date = zeroFormat(d.getDate());
        let hour = zeroFormat(d.getHours());
        let minute = zeroFormat(d.getMinutes());
        let second = zeroFormat(d.getSeconds());

        return format.replace('YY', year).replace('MM', month).replace('DD', date).replace('hh', hour).replace('mm', minute).replace('ss', second);
    }
};

/**
 * 判断类型
 * @param obj
 * @returns {*}
 */
const typeOf = (obj) => {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
};


/**
 * 获取对象的值
 * @param obj
 * @param text
 * @returns {*}
 */
export const getObjectValue = function(obj, text) {
    try {
        if ((typeOf(obj) === 'object' || typeOf(obj) === 'array') && text) {
            let textArray = text.split('.');
            let get_value = function(obj, textArray) {
                let key = textArray.shift();
                if (key.length < 5 && parseInt(key)) {
                    key = parseInt(key);
                }
                if (typeof obj[key] === 'undefined' || obj[key] == null) {
                    return '';
                }
                if (textArray.length === 0) {
                    return obj[key];
                }
                obj = obj[key];
                return get_value(obj, textArray);
            };
            return get_value(obj, textArray);
        }
        return '';
    } catch (error) {
        // debugger
        console.log(error);
    }
};

/**
 * 单位格式化
 * @param value
 * @param unit
 */
const unitFormat = (value, unit = '') => {
    if(isNaN(value)) return value;
    let len = 1;
    switch (unit) {
        case '万':
            len = 5;
            break;
    }
    return Math.floor(value / Math.pow(10,len - 1)) + unit;
};

/**
 * 格式化数字
 * @param value
 * @returns {string}
 */
const zeroFormat = (value) => {
    if(!value.toString()) return;
    value = Number(value);
    if(value < 10){
        value = '0' + value;
    }else{
        value = value.toString()
    }
    return value;
};



const localStorage = {
    setStorage,
    getStorage,
    removeStorage
};

export default {
    localStorage,
    timeFormat,
    isCurrentMusic,
    typeOf,
    getObjectValue,
    unitFormat,
    zeroFormat,
}
