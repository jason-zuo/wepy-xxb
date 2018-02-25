"use strict";

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

var cuImg = function (_wepy$component) {
    _inherits(cuImg, _wepy$component);

    function cuImg() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, cuImg);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cuImg.__proto__ || Object.getPrototypeOf(cuImg)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            cuImgStyle: {
                default: 2
            },
            imgsrc: {
                default: "../images/lock.png"
            }
        }, _this.components = {
            //
        }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(cuImg, [{
        key: "onLoad",
        value: function onLoad() {
            console.log(this.list);
        }
    }, {
        key: "load",
        value: function load(singles) {}
    }]);

    return cuImg;
}(_wepy2.default.component);

exports.default = cuImg;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1SW1nLmpzIl0sIm5hbWVzIjpbImN1SW1nIiwicHJvcHMiLCJjdUltZ1N0eWxlIiwiZGVmYXVsdCIsImltZ3NyYyIsImNvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJsaXN0Iiwic2luZ2xlcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsd0JBQWE7QUFDVEMseUJBQVU7QUFERCxhQURUO0FBSUpDLG9CQUFTO0FBQ0xELHlCQUFVO0FBREw7QUFKTCxTLFFBU1JFLFUsR0FBYTtBQUNyQjtBQURxQixTLFFBSWJDLEksR0FBTyxFLFFBSVBDLE8sR0FBVSxFOzs7OztpQ0FHQTtBQUNOQyxvQkFBUUMsR0FBUixDQUFZLEtBQUtDLElBQWpCO0FBQ0g7Ozs2QkFFS0MsTyxFQUFTLENBRWQ7Ozs7RUEzQjhCLGVBQUtDLFM7O2tCQUFuQlosSyIsImZpbGUiOiJjdUltZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3VJbWcgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICAgICAgcHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGN1SW1nU3R5bGUgOiB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDogMlxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgaW1nc3JjIDoge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdCA6IFwiLi4vaW1hZ2VzL2xvY2sucG5nXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbi8vXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsb2FkIChzaW5nbGVzKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuIl19