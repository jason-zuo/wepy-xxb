import moment from 'moment';

/**
 * 工具类
 *
 * @class Until
 */
class Until {
    constructor() {
        this.getCountDownTime = this
            .getCountDownTime
            .bind(this)
        this.setTimerByTimestamp = this
            .setTimerByTimestamp
            .bind(this)
        this.GetQueryString = this.GetQueryString.bind(this)
    }

    /**
     * 倒计时设置秒
     *
     * @param {any} time
     * @returns
     * @memberof Until
     */
    getCountDownTime(time) {
        if (time > 0) {
            // var hour = Math.floor(time / 1000 / 60 / 60)
            var min = Math.floor(time / 60 % 60)
            var sec = Math.floor(time % 60)
            // if (hour < 10) {   hour = '0' + hour }
            if (min < 10) {
                min = '0' + min
            }
            if (sec < 10) {
                sec = '0' + sec
            }
            // return hour + ':' + min + ':' + sec
            return min + ':' + sec
        } else {
            return '00:00'
        }
    }

    setTimerByTimestamp(val) {
        return moment(val).format("YYYY-MM-DD HH:mm")
    }

    GetQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        let context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    }

    changeTitle(title) {
        var body = document.getElementsByTagName('body')[0];
        document.title = title;
        var iframe = document.createElement("iframe");

        // iframe.setAttribute("src", "http://named.cn/page/take/img/icon_phone.png");
        iframe.style.display = "none";
        var d = function () {
            setTimeout(function () {
                iframe.removeEventListener('load', d);
                document.body.removeChild(iframe);
            }, 0);
        };
        iframe.addEventListener('load', d);
        document.body.appendChild(iframe);
    }

    // localstorage存储
    setLocalStorage(name, val) {
        localStorage.setItem(name, JSON.stringify(val))
    }
    // 读取localstorage
    readLocalStorage(name) {
        return JSON.parse(localStorage.getItem(name))
    }
    //删除某个变量存储
    removeLocalstorage(name) {
        localStorage.removeItem(name);
    }
    // 判断localstorage里是否有某个变量
    hasLocalstorage(name) {
        localStorage.hasOwnproperty(name)
    }

    limitLength(word) {
        let newWord = word
        return (newWord.substring(0, 23) + '...')
    }

    iosIos9() {
        return Boolean(navigator.userAgent.match(/OS [9]_\d[_\d]* like Mac OS X/i))
    }

    // 判断数组中是否有该条数据
    arrayHas(arr, value) {
        var index = arr.indexOf(value);
        if (index >= 0) {
            return true;
        }
    }
};

export default new Until();