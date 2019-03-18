'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Config = require('./../predefined/config'),
    rp = require('request-promise'),
    serviceIPHolder = "ip",
    hubAddress = "http://ip:".concat(Config.serviceHubPort, "/rest");

var ServiceFinder =
/*#__PURE__*/
function () {
  function ServiceFinder(ip) {
    _classCallCheck(this, ServiceFinder);

    this.hub = hubAddress.replace(serviceIPHolder, ip);
  }

  _createClass(ServiceFinder, [{
    key: "listService",
    value: function () {
      var _listService = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return rp({
                  method: 'GET',
                  uri: this.hub + '/list',
                  json: true
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listService() {
        return _listService.apply(this, arguments);
      }

      return listService;
    }()
  }, {
    key: "searchService",
    value: function () {
      var _searchService = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(serviceType) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return rp({
                  method: 'GET',
                  uri: this.hub + '/search',
                  qs: {
                    service_type: serviceType
                  },
                  json: true
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function searchService(_x) {
        return _searchService.apply(this, arguments);
      }

      return searchService;
    }()
  }]);

  return ServiceFinder;
}();

exports.default = ServiceFinder;