'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 工具类
 *
 * @class Until
 */
var Until = function () {
    function Until() {
        _classCallCheck(this, Until);

        this.getCountDownTime = this.getCountDownTime.bind(this);
        this.setTimerByTimestamp = this.setTimerByTimestamp.bind(this);
        this.GetQueryString = this.GetQueryString.bind(this);
    }

    /**
     * 倒计时设置秒
     *
     * @param {any} time
     * @returns
     * @memberof Until
     */


    _createClass(Until, [{
        key: 'getCountDownTime',
        value: function getCountDownTime(time) {
            if (time > 0) {
                // var hour = Math.floor(time / 1000 / 60 / 60)
                var min = Math.floor(time / 60 % 60);
                var sec = Math.floor(time % 60);
                // if (hour < 10) {   hour = '0' + hour }
                if (min < 10) {
                    min = '0' + min;
                }
                if (sec < 10) {
                    sec = '0' + sec;
                }
                // return hour + ':' + min + ':' + sec
                return min + ':' + sec;
            } else {
                return '00:00';
            }
        }
    }, {
        key: 'setTimerByTimestamp',
        value: function setTimerByTimestamp(val) {
            return (0, _moment2.default)(val).format("YYYY-MM-DD HH:mm");
        }
    }, {
        key: 'GetQueryString',
        value: function GetQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            var context = "";
            if (r != null) context = r[2];
            reg = null;
            r = null;
            return context == null || context == "" || context == "undefined" ? "" : context;
        }
    }, {
        key: 'changeTitle',
        value: function changeTitle(title) {
            var body = document.getElementsByTagName('body')[0];
            document.title = title;
            var iframe = document.createElement("iframe");

            // iframe.setAttribute("src", "http://named.cn/page/take/img/icon_phone.png");
            iframe.style.display = "none";
            var d = function d() {
                setTimeout(function () {
                    iframe.removeEventListener('load', d);
                    document.body.removeChild(iframe);
                }, 0);
            };
            iframe.addEventListener('load', d);
            document.body.appendChild(iframe);
        }

        // localstorage存储

    }, {
        key: 'setLocalStorage',
        value: function setLocalStorage(name, val) {
            localStorage.setItem(name, JSON.stringify(val));
        }
        // 读取localstorage

    }, {
        key: 'readLocalStorage',
        value: function readLocalStorage(name) {
            return JSON.parse(localStorage.getItem(name));
        }
        //删除某个变量存储

    }, {
        key: 'removeLocalstorage',
        value: function removeLocalstorage(name) {
            localStorage.removeItem(name);
        }
        // 判断localstorage里是否有某个变量

    }, {
        key: 'hasLocalstorage',
        value: function hasLocalstorage(name) {
            localStorage.hasOwnproperty(name);
        }
    }, {
        key: 'limitLength',
        value: function limitLength(word) {
            var newWord = word;
            return newWord.substring(0, 23) + '...';
        }
    }, {
        key: 'iosIos9',
        value: function iosIos9() {
            return Boolean(navigator.userAgent.match(/OS [9]_\d[_\d]* like Mac OS X/i));
        }

        // 判断数组中是否有该条数据

    }, {
        key: 'arrayHas',
        value: function arrayHas(arr, value) {
            var index = arr.indexOf(value);
            if (index >= 0) {
                return true;
            }
        }
    }]);

    return Until;
}();

;

exports.default = new Until();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudGlscy5qcyJdLCJuYW1lcyI6WyJVbnRpbCIsImdldENvdW50RG93blRpbWUiLCJiaW5kIiwic2V0VGltZXJCeVRpbWVzdGFtcCIsIkdldFF1ZXJ5U3RyaW5nIiwidGltZSIsIm1pbiIsIk1hdGgiLCJmbG9vciIsInNlYyIsInZhbCIsImZvcm1hdCIsIm5hbWUiLCJyZWciLCJSZWdFeHAiLCJyIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHIiLCJtYXRjaCIsImNvbnRleHQiLCJ0aXRsZSIsImJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaWZyYW1lIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsImQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiaGFzT3ducHJvcGVydHkiLCJ3b3JkIiwibmV3V29yZCIsInN1YnN0cmluZyIsIkJvb2xlYW4iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhcnIiLCJ2YWx1ZSIsImluZGV4IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsSztBQUNGLHFCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsZ0JBQUwsR0FBd0IsS0FDbkJBLGdCQURtQixDQUVuQkMsSUFGbUIsQ0FFZCxJQUZjLENBQXhCO0FBR0EsYUFBS0MsbUJBQUwsR0FBMkIsS0FDdEJBLG1CQURzQixDQUV0QkQsSUFGc0IsQ0FFakIsSUFGaUIsQ0FBM0I7QUFHQSxhQUFLRSxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JGLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7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QUFLQyxLLEVBQU87QUFDakIsZ0JBQUlDLFFBQVFGLElBQUlHLE9BQUosQ0FBWUYsS0FBWixDQUFaO0FBQ0EsZ0JBQUlDLFNBQVMsQ0FBYixFQUFnQjtBQUNaLHVCQUFPLElBQVA7QUFDSDtBQUNKOzs7Ozs7QUFDSjs7a0JBRWMsSUFBSXBELEtBQUosRSIsImZpbGUiOiJ1bnRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG4vKipcclxuICog5bel5YW357G7XHJcbiAqXHJcbiAqIEBjbGFzcyBVbnRpbFxyXG4gKi9cclxuY2xhc3MgVW50aWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDb3VudERvd25UaW1lID0gdGhpc1xyXG4gICAgICAgICAgICAuZ2V0Q291bnREb3duVGltZVxyXG4gICAgICAgICAgICAuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc2V0VGltZXJCeVRpbWVzdGFtcCA9IHRoaXNcclxuICAgICAgICAgICAgLnNldFRpbWVyQnlUaW1lc3RhbXBcclxuICAgICAgICAgICAgLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLkdldFF1ZXJ5U3RyaW5nID0gdGhpcy5HZXRRdWVyeVN0cmluZy5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgJLorqHml7borr7nva7np5JcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gdGltZVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBVbnRpbFxyXG4gICAgICovXHJcbiAgICBnZXRDb3VudERvd25UaW1lKHRpbWUpIHtcclxuICAgICAgICBpZiAodGltZSA+IDApIHtcclxuICAgICAgICAgICAgLy8gdmFyIGhvdXIgPSBNYXRoLmZsb29yKHRpbWUgLyAxMDAwIC8gNjAgLyA2MClcclxuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGguZmxvb3IodGltZSAvIDYwICUgNjApXHJcbiAgICAgICAgICAgIHZhciBzZWMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MClcclxuICAgICAgICAgICAgLy8gaWYgKGhvdXIgPCAxMCkgeyAgIGhvdXIgPSAnMCcgKyBob3VyIH1cclxuICAgICAgICAgICAgaWYgKG1pbiA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBtaW4gPSAnMCcgKyBtaW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VjIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIHNlYyA9ICcwJyArIHNlY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBob3VyICsgJzonICsgbWluICsgJzonICsgc2VjXHJcbiAgICAgICAgICAgIHJldHVybiBtaW4gKyAnOicgKyBzZWNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJzAwOjAwJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lckJ5VGltZXN0YW1wKHZhbCkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQodmFsKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tXCIpXHJcbiAgICB9XHJcblxyXG4gICAgR2V0UXVlcnlTdHJpbmcobmFtZSkge1xyXG4gICAgICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKFwiKF58JilcIiArIG5hbWUgKyBcIj0oW14mXSopKCZ8JClcIiwgXCJpXCIpO1xyXG4gICAgICAgIGxldCByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcclxuICAgICAgICBsZXQgY29udGV4dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHIgIT0gbnVsbClcclxuICAgICAgICAgICAgY29udGV4dCA9IHJbMl07XHJcbiAgICAgICAgcmVnID0gbnVsbDtcclxuICAgICAgICByID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gY29udGV4dCA9PSBudWxsIHx8IGNvbnRleHQgPT0gXCJcIiB8fCBjb250ZXh0ID09IFwidW5kZWZpbmVkXCIgPyBcIlwiIDogY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG5cclxuICAgICAgICAvLyBpZnJhbWUuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiaHR0cDovL25hbWVkLmNuL3BhZ2UvdGFrZS9pbWcvaWNvbl9waG9uZS5wbmdcIik7XHJcbiAgICAgICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB2YXIgZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxvY2Fsc3RvcmFnZeWtmOWCqFxyXG4gICAgc2V0TG9jYWxTdG9yYWdlKG5hbWUsIHZhbCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KHZhbCkpXHJcbiAgICB9XHJcbiAgICAvLyDor7vlj5Zsb2NhbHN0b3JhZ2VcclxuICAgIHJlYWRMb2NhbFN0b3JhZ2UobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpKVxyXG4gICAgfVxyXG4gICAgLy/liKDpmaTmn5DkuKrlj5jph4/lrZjlgqhcclxuICAgIHJlbW92ZUxvY2Fsc3RvcmFnZShuYW1lKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSk7XHJcbiAgICB9XHJcbiAgICAvLyDliKTmlq1sb2NhbHN0b3JhZ2Xph4zmmK/lkKbmnInmn5DkuKrlj5jph49cclxuICAgIGhhc0xvY2Fsc3RvcmFnZShuYW1lKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmhhc093bnByb3BlcnR5KG5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgbGltaXRMZW5ndGgod29yZCkge1xyXG4gICAgICAgIGxldCBuZXdXb3JkID0gd29yZFxyXG4gICAgICAgIHJldHVybiAobmV3V29yZC5zdWJzdHJpbmcoMCwgMjMpICsgJy4uLicpXHJcbiAgICB9XHJcblxyXG4gICAgaW9zSW9zOSgpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PUyBbOV1fXFxkW19cXGRdKiBsaWtlIE1hYyBPUyBYL2kpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIpOaWreaVsOe7hOS4reaYr+WQpuacieivpeadoeaVsOaNrlxyXG4gICAgYXJyYXlIYXMoYXJyLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVW50aWwoKTsiXX0=