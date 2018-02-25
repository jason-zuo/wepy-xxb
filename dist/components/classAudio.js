'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _untils = require('./../untils/untils.js');

var _untils2 = _interopRequireDefault(_untils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classAudio = function (_wepy$component) {
    _inherits(classAudio, _wepy$component);

    function classAudio() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, classAudio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = classAudio.__proto__ || Object.getPrototypeOf(classAudio)).call.apply(_ref, [this].concat(args))), _this2), _this2.props = {
            src: {
                default: 'http://fs.xuexibao.cn/educhain/course/11/single/1/1.mp3'
            }
        }, _this2.data = {
            // 音频播放状态， 1 为未播放显示 三角 ， 2 为正在播放显示两个条按钮
            playstatus: 1,
            playImg: '../images/audioplay.png',
            endTime: '00:00',
            startTime: '00:00',
            duration: '00:00',
            currentTime: '00:00',
            sliderMax: null,
            sliderCurrent: null
        }, _this2.methods = {
            sliderChange: function sliderChange(e) {
                console.log(e);
                //   移动滑块改变进度条
                console.log(e.detail.value);
                var nowStep = e.detail.value;
                // 获取新的current Time 并且赋值给媒体 
                // 思路之初是将新的slider的value赋值给currentTime 但是 报错说没有setter只有getter
                var position = e.detail.value;
                this.seekCurrentAUdio(position);
            },
            playaudio: function playaudio() {
                if (this.playstatus == 1) {
                    this.audioContext.play();
                } else if (this.playstatus == 2) {
                    this.audioContext.pause();
                }
            },
            createPaper: function createPaper() {
                wx.navigateTo({
                    url: '../pages/imgSave'
                });
            }
        }, _this2.watch = {}, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(classAudio, [{
        key: 'seekCurrentAUdio',
        value: function seekCurrentAUdio(position) {
            var _this = this;
            console.log("进入seek事件");
            _this.audioContext.seek(position);
        }
    }, {
        key: 'playHeadle',
        value: function playHeadle() {
            console.log(111);
            this.playstatus = 2;
            this.$apply();
        }
    }, {
        key: 'pauseHandle',
        value: function pauseHandle() {
            console.log(222);
            this.playstatus = 1;
            this.$apply();
        }
    }, {
        key: 'playImgChange',
        value: function playImgChange() {
            var that = this;
            console.log(that.playstatus);
            if (that.playstatus == 1) {
                that.playImg = '../images/audioplay.png';
            } else if (that.playstatus == 2) {
                that.playImg = '../images/audio-stop.png';
            }
            that.$apply();
        }
    }, {
        key: 'pauseAudio',
        value: function pauseAudio() {
            var _this = this;
            console.log(this.audioContext);
            this.audioContext.destroy(function () {});
        }
    }, {
        key: 'creatAudio',
        value: function creatAudio(audioSrc) {
            var innerAudioContext = wx.createInnerAudioContext();
            var _this = this;
            innerAudioContext.autoplay = true;
            innerAudioContext.src = audioSrc;
            _this.audioContext = innerAudioContext;
            innerAudioContext.onPlay(function () {
                _this.playHeadle();
                _this.playImgChange();
                console.log("开始播放");
                _this.$apply();
            });

            innerAudioContext.onPause(function () {
                _this.pauseHandle();
                _this.playImgChange();
                console.log("暂停播放");
            });

            innerAudioContext.onTimeUpdate(function () {
                // 由于没有双向数据绑定所以页面没法实时绘制时间信息
                _this.currentTime = _untils2.default.getCountDownTime(innerAudioContext.currentTime);
                _this.duration = _untils2.default.getCountDownTime(innerAudioContext.duration);
                _this.sliderCurrent = innerAudioContext.currentTime;
                _this.sliderMax = innerAudioContext.duration;
                _this.$apply();
            });

            innerAudioContext.onError(function (res) {
                console.log(res.errMsg);
                console.log(res.errCode);
            });
            _this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var that = this;
            that.creatAudio(that.src);
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            console.log("组件卸载");
            this.pauseHandle();
        }
    }]);

    return classAudio;
}(_wepy2.default.component);

exports.default = classAudio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzQXVkaW8uanMiXSwibmFtZXMiOlsiY2xhc3NBdWRpbyIsInByb3BzIiwic3JjIiwiZGVmYXVsdCIsImRhdGEiLCJwbGF5c3RhdHVzIiwicGxheUltZyIsImVuZFRpbWUiLCJzdGFydFRpbWUiLCJkdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwic2xpZGVyTWF4Iiwic2xpZGVyQ3VycmVudCIsIm1ldGhvZHMiLCJzbGlkZXJDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwibm93U3RlcCIsInBvc2l0aW9uIiwic2Vla0N1cnJlbnRBVWRpbyIsInBsYXlhdWRpbyIsImF1ZGlvQ29udGV4dCIsInBsYXkiLCJwYXVzZSIsImNyZWF0ZVBhcGVyIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2F0Y2giLCJfdGhpcyIsInNlZWsiLCIkYXBwbHkiLCJ0aGF0IiwiZGVzdHJveSIsImF1ZGlvU3JjIiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwib25QbGF5IiwicGxheUhlYWRsZSIsInBsYXlJbWdDaGFuZ2UiLCJvblBhdXNlIiwicGF1c2VIYW5kbGUiLCJvblRpbWVVcGRhdGUiLCJnZXRDb3VudERvd25UaW1lIiwib25FcnJvciIsInJlcyIsImVyck1zZyIsImVyckNvZGUiLCJjcmVhdEF1ZGlvIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7O3FNQUNuQkMsSyxHQUFRO0FBQ0pDLGlCQUFNO0FBQ0hDLHlCQUFVO0FBRFA7QUFERixTLFNBTVJDLEksR0FBTztBQUNMO0FBQ0VDLHdCQUFhLENBRlY7QUFHSEMscUJBQVUseUJBSFA7QUFJSEMscUJBQVUsT0FKUDtBQUtIQyx1QkFBWSxPQUxUO0FBTUhDLHNCQUFXLE9BTlI7QUFPSEMseUJBQWMsT0FQWDtBQVFIQyx1QkFBWSxJ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QUF1QlQsa0JBQWtCN0IsUUFBekMsQ0FBbEI7QUFDQXVCLHNCQUFNcEIsYUFBTixHQUFzQjBCLGtCQUFrQjVCLFdBQXhDO0FBQ0FzQixzQkFBTXJCLFNBQU4sR0FBbUIyQixrQkFBa0I3QixRQUFyQztBQUNBdUIsc0JBQU1FLE1BQU47QUFDSCxhQVBEOztBQVNBSSw4QkFBa0JVLE9BQWxCLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUNoQ2pDLHdCQUFRQyxHQUFSLENBQVlnQyxJQUFJQyxNQUFoQjtBQUNBbEMsd0JBQVFDLEdBQVIsQ0FBWWdDLElBQUlFLE9BQWhCO0FBQ0gsYUFIRDtBQUlBbkIsa0JBQU1FLE1BQU47QUFDSjs7O2lDQUVPO0FBQ1AsZ0JBQUlDLE9BQU8sSUFBWDtBQUNBQSxpQkFBS2lCLFVBQUwsQ0FBZ0JqQixLQUFLakMsR0FBckI7QUFFRDs7O21DQUNXO0FBQ1JjLG9CQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLGlCQUFLNEIsV0FBTDtBQUNIOzs7O0VBOUhxQyxlQUFLUSxTOztrQkFBeEJyRCxVIiwiZmlsZSI6ImNsYXNzQXVkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHVudGlsIGZyb20gJy4uL3VudGlscy91bnRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjbGFzc0F1ZGlvIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgICBzcmMgOiB7XHJcbiAgICAgICAgIGRlZmF1bHQgOiAnaHR0cDovL2ZzLnh1ZXhpYmFvLmNuL2VkdWNoYWluL2NvdXJzZS8xMS9zaW5nbGUvMS8xLm1wMydcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOmfs+mikeaSreaUvueKtuaAge+8jCAxIOS4uuacquaSreaUvuaYvuekuiDkuInop5Ig77yMIDIg5Li65q2j5Zyo5pKt5pS+5pi+56S65Lik5Liq5p2h5oyJ6ZKuXHJcbiAgICAgIHBsYXlzdGF0dXMgOiAxICAsXHJcbiAgICAgIHBsYXlJbWcgOiAnLi4vaW1hZ2VzL2F1ZGlvcGxheS5wbmcnICxcclxuICAgICAgZW5kVGltZSA6ICcwMDowMCcgLFxyXG4gICAgICBzdGFydFRpbWUgOiAnMDA6MDAnICxcclxuICAgICAgZHVyYXRpb24gOiAnMDA6MDAnICxcclxuICAgICAgY3VycmVudFRpbWUgOiAnMDA6MDAnICxcclxuICAgICAgc2xpZGVyTWF4IDogbnVsbCAsXHJcbiAgICAgIHNsaWRlckN1cnJlbnQgOiBudWxsXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgICAgIHNsaWRlckNoYW5nZSAoZSkge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgLy8gICDnp7vliqjmu5HlnZfmlLnlj5jov5vluqbmnaFcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgICAgICAgIGxldCBub3dTdGVwID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgICAgLy8g6I635Y+W5paw55qEY3VycmVudCBUaW1lIOW5tuS4lOi1i+WAvOe7meWqkuS9kyBcclxuICAgICAgICAgICAgLy8g5oCd6Lev5LmL5Yid5piv5bCG5paw55qEc2xpZGVy55qEdmFsdWXotYvlgLznu5ljdXJyZW50VGltZSDkvYbmmK8g5oql6ZSZ6K+05rKh5pyJc2V0dGVy5Y+q5pyJZ2V0dGVyXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZS5kZXRhaWwudmFsdWUgO1xyXG4gICAgICAgICAgICB0aGlzLnNlZWtDdXJyZW50QVVkaW8ocG9zaXRpb24pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGxheWF1ZGlvICgpIHtcclxuICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlzdGF0dXMgPT0gMSkgeyBcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0LnBsYXkoKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAodGhpcy5wbGF5c3RhdHVzID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0LnBhdXNlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlUGFwZXIoKXtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9pbWdTYXZlJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICAgIHNlZWtDdXJyZW50QVVkaW8gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcyA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaVzZWVr5LqL5Lu2XCIpXHJcbiAgICAgICAgX3RoaXMuYXVkaW9Db250ZXh0LnNlZWsocG9zaXRpb24pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlIZWFkbGUgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDExMSlcclxuICAgICAgICB0aGlzLnBsYXlzdGF0dXMgPSAyXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlSGFuZGxlICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygyMjIpXHJcbiAgICAgICAgdGhpcy5wbGF5c3RhdHVzID0gMVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICBwbGF5SW1nQ2hhbmdlICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXMgO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoYXQucGxheXN0YXR1cylcclxuICAgICAgICBpZiAodGhhdC5wbGF5c3RhdHVzID09IDEpIHsgXHJcbiAgICAgICAgICAgIHRoYXQucGxheUltZyA9ICcuLi9pbWFnZXMvYXVkaW9wbGF5LnBuZydcclxuICAgICAgICB9ZWxzZSBpZiAodGhhdC5wbGF5c3RhdHVzID09IDIpIHtcclxuICAgICAgICAgICAgdGhhdC5wbGF5SW1nID0gJy4uL2ltYWdlcy9hdWRpby1zdG9wLnBuZydcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC4kYXBwbHkoKSA7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VBdWRpbyAoKSB7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coIHRoaXMuYXVkaW9Db250ZXh0KSA7XHJcbiAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0LmRlc3Ryb3kgKCgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdEF1ZGlvIChhdWRpb1NyYykge1xyXG4gICAgICAgIGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKSA7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWUgO1xyXG4gICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9ICBhdWRpb1NyYyA7XHJcbiAgICAgICAgX3RoaXMuYXVkaW9Db250ZXh0ID0gaW5uZXJBdWRpb0NvbnRleHQgO1xyXG4gICAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSAoKCkgPT4ge1xyXG4gICAgICAgICAgICBfdGhpcy5wbGF5SGVhZGxlKClcclxuICAgICAgICAgICAgX3RoaXMucGxheUltZ0NoYW5nZSgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL5pKt5pS+XCIpIDtcclxuICAgICAgICAgICAgX3RoaXMuJGFwcGx5KClcclxuICAgICAgICB9KSBcclxuICAgICAgICBcclxuICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBhdXNlICgoKSA9PiB7XHJcbiAgICAgICAgICAgIF90aGlzLnBhdXNlSGFuZGxlKClcclxuICAgICAgICAgICAgX3RoaXMucGxheUltZ0NoYW5nZSgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pqC5YGc5pKt5pS+XCIpIDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5vblRpbWVVcGRhdGUgKCgpID0+IHtcclxuICAgICAgICAgICAgLy8g55Sx5LqO5rKh5pyJ5Y+M5ZCR5pWw5o2u57uR5a6a5omA5Lul6aG16Z2i5rKh5rOV5a6e5pe257uY5Yi25pe26Ze05L+h5oGvXHJcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRUaW1lID0gdW50aWwuZ2V0Q291bnREb3duVGltZShpbm5lckF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSkgO1xyXG4gICAgICAgICAgICBfdGhpcy5kdXJhdGlvbiA9ICB1bnRpbC5nZXRDb3VudERvd25UaW1lKGlubmVyQXVkaW9Db250ZXh0LmR1cmF0aW9uKVxyXG4gICAgICAgICAgICBfdGhpcy5zbGlkZXJDdXJyZW50ID0gaW5uZXJBdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIF90aGlzLnNsaWRlck1heCA9ICBpbm5lckF1ZGlvQ29udGV4dC5kdXJhdGlvblxyXG4gICAgICAgICAgICBfdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0pICBcclxuXHJcbiAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvciAoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKSA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKSA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBfdGhpcy4kYXBwbHkoKVxyXG4gICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHRoYXQuY3JlYXRBdWRpbyh0aGF0LnNyYylcclxuXHJcbiAgfVxyXG4gIG9uVW5sb2FkICgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCLnu4Tku7bljbjovb1cIilcclxuICAgICAgdGhpcy5wYXVzZUhhbmRsZSgpIFxyXG4gIH1cclxuICB3YXRjaCA9IHsgICBcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==