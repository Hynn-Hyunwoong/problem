"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

module.exports = function (sequelize, Sequelize) {
  var User =
  /*#__PURE__*/
  function (_Sequelize$Model) {
    _inherits(User, _Sequelize$Model);

    function User() {
      _classCallCheck(this, User);

      return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));
    }

    _createClass(User, null, [{
      key: "initialize",
      value: function initialize() {
        return this.init({
          user_IDX: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          userId: {
            type: Sequelize.STRING(60),
            unique: true
          },
          userPw: {
            type: Sequelize.STRING(64),
            allowNull: false
          },
          userName: {
            type: Sequelize.STRING(30),
            allowNull: false
          },
          provider: {
            type: Sequelize.ENUM("local", "kakao"),
            allowNull: false,
            defaultValue: "local"
          },
          snsId: {
            type: Sequelize.STRING(30),
            allowNull: true
          },
          userBirth: {
            type: Sequelize.STRING(30),
            allowNull: false
          },
          userGender: {
            type: Sequelize.ENUM("남자", "여자"),
            allowNull: false,
            defaultValue: "남자"
          },
          userPhone: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          userEmail: {
            type: Sequelize.STRING(128),
            allowNull: false
          },
          userAddress: {
            type: Sequelize.STRING(256),
            allowNull: false
          },
          userRegistrationDate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW()
          }
        }, {
          sequelize: sequelize
        });
      }
    }]);

    return User;
  }(Sequelize.Model);

  User.initialize();
};