/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/lab/vendor/flexible.js":
/***/ (function(module, exports) {

!function (a, b) {
	function c() {
		var b = f.getBoundingClientRect().width;
		b / i > 540 && (b = 540 * i);
		var c = b / 10;
		f.style.fontSize = c + "px", k.rem = a.rem = c;
	}
	var d,
	    e = a.document,
	    f = e.documentElement,
	    g = e.querySelector('meta[name="viewport"]'),
	    h = e.querySelector('meta[name="flexible"]'),
	    i = 0,
	    j = 0,
	    k = b.flexible || (b.flexible = {});
	if (g) {
		console.warn("将根据已有的meta标签来设置缩放比例");
		var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
		l && (j = parseFloat(l[1]), i = parseInt(1 / j));
	} else if (h) {
		var m = h.getAttribute("content");
		if (m) {
			var n = m.match(/initial\-dpr=([\d\.]+)/),
			    o = m.match(/maximum\-dpr=([\d\.]+)/);
			n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)));
		}
	}
	if (!i && !j) {
		var p = a.navigator.userAgent,
		    q = (!!p.match(/android/gi), !!p.match(/iphone/gi)),
		    r = q && !!p.match(/OS 9_3/),
		    s = a.devicePixelRatio;
		i = q && !r ? s >= 3 && (!i || i >= 3) ? 3 : s >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i;
	}
	if (f.setAttribute("data-dpr", i), !g) if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);else {
		var t = e.createElement("div");
		t.appendChild(g), e.write(t.innerHTML);
	}
	a.addEventListener("resize", function () {
		clearTimeout(d), d = setTimeout(c, 300);
	}, !1), a.addEventListener("pageshow", function (a) {
		a.persisted && (clearTimeout(d), d = setTimeout(c, 300));
	}, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
		e.body.style.fontSize = 12 * i + "px";
	}, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
		var b = parseFloat(a) * this.rem;
		return "string" == typeof a && a.match(/rem$/) && (b += "px"), b;
	}, k.px2rem = function (a) {
		var b = parseFloat(a) / this.rem;
		return "string" == typeof a && a.match(/px$/) && (b += "rem"), b;
	};
}(window, window.lib || (window.lib = {}));

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/lab/vendor/flexible.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTE0NzY4MDUzZmRkMTA4MWQ3MmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9sYWIvdmVuZG9yL2ZsZXhpYmxlLmpzIl0sIm5hbWVzIjpbImEiLCJiIiwiYyIsImYiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImkiLCJzdHlsZSIsImZvbnRTaXplIiwiayIsInJlbSIsImQiLCJlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJnIiwicXVlcnlTZWxlY3RvciIsImgiLCJqIiwiZmxleGlibGUiLCJjb25zb2xlIiwid2FybiIsImwiLCJnZXRBdHRyaWJ1dGUiLCJtYXRjaCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsIm0iLCJuIiwibyIsInRvRml4ZWQiLCJwIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwicSIsInIiLCJzIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFwcGVuZENoaWxkIiwidCIsIndyaXRlIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwZXJzaXN0ZWQiLCJyZWFkeVN0YXRlIiwiYm9keSIsImRwciIsInJlZnJlc2hSZW0iLCJyZW0ycHgiLCJweDJyZW0iLCJ3aW5kb3ciLCJsaWIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBC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LENBQU8zQyxLQUFQLENBQWFDLFFBQWIsR0FBd0IsS0FBS0YsQ0FBTCxHQUFTLElBQWpDO0FBQ0EsRUFGNkUsRUFFM0UsQ0FBQyxDQUYwRSxDQUo5RSxFQU1RSixHQU5SLEVBTWFPLEVBQUUwQyxHQUFGLEdBQVFuRCxFQUFFbUQsR0FBRixHQUFRN0MsQ0FON0IsRUFNZ0NHLEVBQUUyQyxVQUFGLEdBQWVsRCxDQU4vQyxFQU1rRE8sRUFBRTRDLE1BQUYsR0FBVyxVQUFTckQsQ0FBVCxFQUFZO0FBQ3hFLE1BQUlDLElBQUl3QixXQUFXekIsQ0FBWCxJQUFnQixLQUFLVSxHQUE3QjtBQUNBLFNBQU8sWUFBWSxPQUFPVixDQUFuQixJQUF3QkEsRUFBRXdCLEtBQUYsQ0FBUSxNQUFSLENBQXhCLEtBQTRDdkIsS0FBSyxJQUFqRCxHQUF3REEsQ0FBL0Q7QUFDQSxFQVRELEVBU0dRLEVBQUU2QyxNQUFGLEdBQVcsVUFBU3RELENBQVQsRUFBWTtBQUN6QixNQUFJQyxJQUFJd0IsV0FBV3pCLENBQVgsSUFBZ0IsS0FBS1UsR0FBN0I7QUFDQSxTQUFPLFlBQVksT0FBT1YsQ0FBbkIsSUFBd0JBLEVBQUV3QixLQUFGLENBQVEsS0FBUixDQUF4QixLQUEyQ3ZCLEtBQUssS0FBaEQsR0FBd0RBLENBQS9EO0FBQ0EsRUFaRDtBQWFBLENBcERDLENBb0RBc0QsTUFwREEsRUFvRFFBLE9BQU9DLEdBQVAsS0FBZUQsT0FBT0MsR0FBUCxHQUFhLEVBQTVCLENBcERSLENBQUYsQyIsImZpbGUiOiIvbGFiL3ZlbmRvci9mbGV4aWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUxNDc2ODA1M2ZkZDEwODFkNzJlIiwiISBmdW5jdGlvbihhLCBiKSB7XG5cdGZ1bmN0aW9uIGMoKSB7XG5cdFx0dmFyIGIgPSBmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdGIgLyBpID4gNTQwICYmIChiID0gNTQwICogaSk7XG5cdFx0dmFyIGMgPSBiIC8gMTA7XG5cdFx0Zi5zdHlsZS5mb250U2l6ZSA9IGMgKyBcInB4XCIsIGsucmVtID0gYS5yZW0gPSBjXG5cdH1cblx0dmFyIGQsIGUgPSBhLmRvY3VtZW50LFxuXHRcdGYgPSBlLmRvY3VtZW50RWxlbWVudCxcblx0XHRnID0gZS5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLFxuXHRcdGggPSBlLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImZsZXhpYmxlXCJdJyksXG5cdFx0aSA9IDAsXG5cdFx0aiA9IDAsXG5cdFx0ayA9IGIuZmxleGlibGUgfHwgKGIuZmxleGlibGUgPSB7fSk7XG5cdGlmIChnKSB7XG5cdFx0Y29uc29sZS53YXJuKFwi5bCG5qC55o2u5bey5pyJ55qEbWV0Yeagh+etvuadpeiuvue9rue8qeaUvuavlOS+i1wiKTtcblx0XHR2YXIgbCA9IGcuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKS5tYXRjaCgvaW5pdGlhbFxcLXNjYWxlPShbXFxkXFwuXSspLyk7XG5cdFx0bCAmJiAoaiA9IHBhcnNlRmxvYXQobFsxXSksIGkgPSBwYXJzZUludCgxIC8gaikpXG5cdH0gZWxzZSBpZiAoaCkge1xuXHRcdHZhciBtID0gaC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpO1xuXHRcdGlmIChtKSB7XG5cdFx0XHR2YXIgbiA9IG0ubWF0Y2goL2luaXRpYWxcXC1kcHI9KFtcXGRcXC5dKykvKSxcblx0XHRcdFx0byA9IG0ubWF0Y2goL21heGltdW1cXC1kcHI9KFtcXGRcXC5dKykvKTtcblx0XHRcdG4gJiYgKGkgPSBwYXJzZUZsb2F0KG5bMV0pLCBqID0gcGFyc2VGbG9hdCgoMSAvIGkpLnRvRml4ZWQoMikpKSwgbyAmJiAoaSA9IHBhcnNlRmxvYXQob1sxXSksIGogPSBwYXJzZUZsb2F0KCgxIC8gaSkudG9GaXhlZCgyKSkpXG5cdFx0fVxuXHR9XG5cdGlmICghaSAmJiAhaikge1xuXHRcdHZhciBwID0gYS5uYXZpZ2F0b3IudXNlckFnZW50LFxuXHRcdFx0cSA9ICghIXAubWF0Y2goL2FuZHJvaWQvZ2kpLCAhIXAubWF0Y2goL2lwaG9uZS9naSkpLFxuXHRcdFx0ciA9IHEgJiYgISFwLm1hdGNoKC9PUyA5XzMvKSxcblx0XHRcdHMgPSBhLmRldmljZVBpeGVsUmF0aW87XG5cdFx0aSA9IHEgJiYgIXIgPyBzID49IDMgJiYgKCFpIHx8IGkgPj0gMykgPyAzIDogcyA+PSAyICYmICghaSB8fCBpID49IDIpID8gMiA6IDEgOiAxLCBqID0gMSAvIGlcblx0fVxuXHRpZiAoZi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRwclwiLCBpKSwgIWcpXG5cdFx0aWYgKGcgPSBlLmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpLCBnLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ2aWV3cG9ydFwiKSwgZy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsIFwiaW5pdGlhbC1zY2FsZT1cIiArIGogKyBcIiwgbWF4aW11bS1zY2FsZT1cIiArIGogKyBcIiwgbWluaW11bS1zY2FsZT1cIiArIGogKyBcIiwgdXNlci1zY2FsYWJsZT1ub1wiKSwgZi5maXJzdEVsZW1lbnRDaGlsZCkgZi5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChnKTtcblx0XHRlbHNlIHtcblx0XHRcdHZhciB0ID0gZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0dC5hcHBlbmRDaGlsZChnKSwgZS53cml0ZSh0LmlubmVySFRNTClcblx0XHR9XG5cdGEuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRjbGVhclRpbWVvdXQoZCksIGQgPSBzZXRUaW1lb3V0KGMsIDMwMClcblx0fSwgITEpLCBhLmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCBmdW5jdGlvbihhKSB7XG5cdFx0YS5wZXJzaXN0ZWQgJiYgKGNsZWFyVGltZW91dChkKSwgZCA9IHNldFRpbWVvdXQoYywgMzAwKSlcblx0fSwgITEpLCBcImNvbXBsZXRlXCIgPT09IGUucmVhZHlTdGF0ZSA/IGUuYm9keS5zdHlsZS5mb250U2l6ZSA9IDEyICogaSArIFwicHhcIiA6IGUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0ZS5ib2R5LnN0eWxlLmZvbnRTaXplID0gMTIgKiBpICsgXCJweFwiXG5cdH0sICExKSwgYygpLCBrLmRwciA9IGEuZHByID0gaSwgay5yZWZyZXNoUmVtID0gYywgay5yZW0ycHggPSBmdW5jdGlvbihhKSB7XG5cdFx0dmFyIGIgPSBwYXJzZUZsb2F0KGEpICogdGhpcy5yZW07XG5cdFx0cmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGEgJiYgYS5tYXRjaCgvcmVtJC8pICYmIChiICs9IFwicHhcIiksIGJcblx0fSwgay5weDJyZW0gPSBmdW5jdGlvbihhKSB7XG5cdFx0dmFyIGIgPSBwYXJzZUZsb2F0KGEpIC8gdGhpcy5yZW07XG5cdFx0cmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGEgJiYgYS5tYXRjaCgvcHgkLykgJiYgKGIgKz0gXCJyZW1cIiksIGJcblx0fVxufSh3aW5kb3csIHdpbmRvdy5saWIgfHwgKHdpbmRvdy5saWIgPSB7fSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvbGFiL3ZlbmRvci9mbGV4aWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=