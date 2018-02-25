'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//    import VolItem from 'volItem';
var classList = function (_wepy$component) {
    _inherits(classList, _wepy$component);

    function classList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, classList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = classList.__proto__ || Object.getPrototypeOf(classList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            singles: {},
            alreadyBuy: {
                default: false
            },
            productType: {}
        }, _this.components = {
            //
        }, _this.data = {}, _this.methods = {
            moreClass: function moreClass(id) {
                wx.navigateTo({
                    url: 'pages/course?courseId=' + id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(classList, [{
        key: 'iconStyle',
        value: function iconStyle(type) {
            switch (type) {
                case 2:
                    return '../images/audio.png';
                case 3:
                    return '../images/video.png';
                case 1:
                    return '../images/text.png';
                default:
                    return '../images/text.png';
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            console.log(this.alreadyBuy);
            console.log(this.singles);
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            console.log(this.alreadyBuy);
            console.log(this.singles);
        }
    }]);

    return classList;
}(_wepy2.default.component);

exports.default = classList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzTGlzdC5qcyJdLCJuYW1lcyI6WyJjbGFzc0xpc3QiLCJwcm9wcyIsInNpbmdsZXMiLCJhbHJlYWR5QnV5IiwiZGVmYXVsdCIsInByb2R1Y3RUeXBlIiwiY29tcG9uZW50cyIsImRhdGEiLCJtZXRob2RzIiwibW9yZUNsYXNzIiwiaWQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztBQUNKO0lBQ3lCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFDakJDLEssR0FBUTtBQUNKQyxxQkFBUSxFQURKO0FBSUpDLHdCQUFhO0FBQ1RDLHlCQUFVO0FBREQsYUFKVDtBQU9KQyx5QkFBYztBQVBWLFMsUUFZUkMsVSxHQUFhO0FBQ3JCO0FBRHFCLFMsUUFJYkMsSSxHQUFPLEUsUUFHUEMsTyxHQUFVO0FBQ0xDLHVCQUFXLG1CQUFVQyxFQUFWLEVBQWM7QUFDdEJDLG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUssMkJBQTJCSDtBQUR0QixpQkFBZDtBQUdIO0FBTEssUzs7Ozs7a0NBUUNJLEksRUFBTTtBQUNiLG9CQUFRQSxJQUFSO0FBQ1EscUJBQUssQ0FBTDtBQUNJLDJCQUFPLHFCQUFQO0FBQ0oscUJBQUssQ0FBTDtBQUNJLDJCQUFPLHFCQUFQO0FBQ0oscUJBQUssQ0FBTDtBQUNJLDJCQUFPLG9CQUFQO0FBQ0o7QUFDSSwyQkFBTyxvQkFBUDtBQVJaO0FBVUg7OztpQ0FFUztBQUNOQyxvQkFBUUMsR0FBUixDQUFZLEtBQUtiLFVBQWpCO0FBQ0FZLG9CQUFRQyxHQUFSLENBQVksS0FBS2QsT0FBakI7QUFDSDs7O2lDQUVTO0FBQ0xhLG9CQUFRQyxHQUFSLENBQVksS0FBS2IsVUFBakI7QUFDRFksb0JBQVFDLEdBQVIsQ0FBWSxLQUFLZCxPQUFqQjtBQUNIOzs7O0VBakRrQyxlQUFLZSxTOztrQkFBdkJqQixTIiwiZmlsZSI6ImNsYXNzTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbi8vICAgIGltcG9ydCBWb2xJdGVtIGZyb20gJ3ZvbEl0ZW0nO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xhc3NMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICBzaW5nbGVzOntcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGFscmVhZHlCdXkgOiB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDogZmFsc2UgXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBwcm9kdWN0VHlwZSA6IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29tcG9uZW50cyA9IHtcclxuLy9cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgICBtb3JlQ2xhc3M6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAncGFnZXMvY291cnNlP2NvdXJzZUlkPScgKyBpZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpY29uU3R5bGUgKHR5cGUpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy4uL2ltYWdlcy9hdWRpby5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcuLi9pbWFnZXMvdmlkZW8ucG5nJztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnLi4vaW1hZ2VzL3RleHQucG5nJztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy4uL2ltYWdlcy90ZXh0LnBuZyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFscmVhZHlCdXkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2luZ2xlcylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBvblNob3cgKCkge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hbHJlYWR5QnV5KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpbmdsZXMpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiJdfQ==