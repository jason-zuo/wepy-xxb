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
            }
        }, _this.components = {
            //
        }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
            console.log(this.list);
        }
    }, {
        key: 'load',
        value: function load(singles) {
            this.singles = singles;
            this.$apply();
        }
    }]);

    return classList;
}(_wepy2.default.component);

exports.default = classList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzTGlzdCAtIOWJr+acrC5qcyJdLCJuYW1lcyI6WyJjbGFzc0xpc3QiLCJwcm9wcyIsInNpbmdsZXMiLCJhbHJlYWR5QnV5IiwiZGVmYXVsdCIsImNvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztBQUNKO0lBQ3lCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFDakJDLEssR0FBUTtBQUNKQyxxQkFBUSxFQURKO0FBRUpDLHdCQUFhO0FBQ1RDLHlCQUFVO0FBREQ7QUFGVCxTLFFBT1JDLFUsR0FBYTtBQUNyQjtBQURxQixTLFFBSWJDLEksR0FBTyxFLFFBSVBDLE8sR0FBVSxFOzs7OztrQ0FHQ0MsSSxFQUFNO0FBQ2Isb0JBQVFBLElBQVI7QUFDUSxxQkFBSyxDQUFMO0FBQ0ksMkJBQU8scUJBQVA7QUFDSixxQkFBSyxDQUFMO0FBQ0ksMkJBQU8scUJBQVA7QUFDSixxQkFBSyxDQUFMO0FBQ0ksMkJBQU8sb0JBQVA7QUFDSjtBQUNJLDJCQUFPLG9CQUFQO0FBUlo7QUFVSDs7O2lDQUVTO0FBQ05DLG9CQUFRQyxHQUFSLENBQVksS0FBS0MsSUFBakI7QUFDSDs7OzZCQUVLVCxPLEVBQVM7QUFDWCxpQkFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsaUJBQUtVLE1BQUw7QUFDSDs7OztFQXZDa0MsZUFBS0MsUzs7a0JBQXZCYixTIiwiZmlsZSI6ImNsYXNzTGlzdCAtIOWJr+acrC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbi8vICAgIGltcG9ydCBWb2xJdGVtIGZyb20gJ3ZvbEl0ZW0nO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xhc3NMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICBzaW5nbGVzOnt9ICxcclxuICAgICAgICAgICAgYWxyZWFkeUJ1eSA6IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29tcG9uZW50cyA9IHtcclxuLy9cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWNvblN0eWxlICh0eXBlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcuLi9pbWFnZXMvYXVkaW8ucG5nJztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnLi4vaW1hZ2VzL3ZpZGVvLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy4uL2ltYWdlcy90ZXh0LnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcuLi9pbWFnZXMvdGV4dC5wbmcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxvYWQgKHNpbmdsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVzID0gc2luZ2xlcztcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuIl19