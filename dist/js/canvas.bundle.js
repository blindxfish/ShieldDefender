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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//      __..._   _...__\n// _..-\"      `Y`      \"-._\n// \\ JS-WIZARDS|  Nixon's   /\n// \\\\          | Practice  //\n// \\\\\\         | Book    ///\n//  \\\\\\ _..---.|.---.._ ///\n//   \\\\`_..---.Y.---.._`//\n//    '`               `'\n// ** Simple canvas shield defender game **\n//\n// Todos: \n////       ... 8/5/2020 DONE - ...Finish the destroying of the objects\n//       Replace objects with sprites\n//         ... 8/5/2020 DONE - Implement random speed for the attackers\n//       Implement spawn of the attackers - not finished\n//       Implement movements for the player/target \n//       Implement weapons (?)\n//       Implement touch functionality\n//         ... 8/8/2020 DONE - FIX : Sometimes the balls pass the shield  \n//       Slow down the movement of the shield, make the speed changeable ability\n//IMPORT FEW GENERAL FUNCTIONS\n //BUILD THE CANVAS\n\nvar canvas = document.querySelector('canvas');\nvar c = canvas.getContext('2d');\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\nvar gravity = 0.8;\nvar ballid = 1;\nvar mouse = {\n  x: innerWidth / 2,\n  y: innerHeight / 2\n};\nvar colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']; // Event Listeners\n\naddEventListener('mousemove', function (event) {\n  mouse.x = event.clientX;\n  mouse.y = event.clientY; //target.toPosition(mouse.x,mouse.y)\n\n  target.movetoX = mouse.x;\n  target.movetoY = mouse.y;\n}); //MAKE A BALL ON CLICK EVENT - FOR TESTING PURPOSES\n\n/*\naddEventListener('click', (event) =>{\n makeball(mouse.x,mouse.y) \n})\n*/\n\naddEventListener('resize', function () {\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n  init();\n}); // Balls are the enemies or so called meteors - currently created by click\n\nvar Ball = /*#__PURE__*/function () {\n  function Ball(x, y, radius, color, ballid) {\n    _classCallCheck(this, Ball);\n\n    this.ballid = ballid;\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.color = color;\n    this.roundPosition = 0;\n    this.damage = Math.floor(this.radius / 3); // Damage of the balls depends of their size\n\n    this.speed = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomIntFromRange\"])(1, 7) / 10;\n  }\n\n  _createClass(Ball, [{\n    key: \"draw\",\n    value: function draw() {\n      c.beginPath();\n      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n      c.fillStyle = this.color;\n      c.fill();\n      c.closePath();\n    }\n  }, {\n    key: \"moveBall\",\n    value: function moveBall() {\n      var dx = (target.x - this.x) * gravity;\n      var dy = (target.y - this.y) * gravity;\n      var distance = Math.sqrt(dx * dx + dy * dy);\n\n      if (distance + this.radius > target.size) {\n        dx *= 5 / distance * this.speed;\n        dy *= 5 / distance * this.speed;\n      }\n\n      this.x += dx;\n      this.y += dy; //roundposition represents the angle in radians, from the center of ball to the center of the target\n\n      this.roundPosition = Math.atan2(this.y - target.y, this.x - target.x) * 180 / Math.PI * (Math.PI / 180) + 0.1;\n\n      if (distance + this.radius <= target.size + target.shieldDist && distance + this.radius >= target.shieldDist - 20) {\n        if (this.roundPosition > target.startposition && this.roundPosition < target.endposition || this.roundPosition * -1 > target.startposition && this.roundPosition * -1 < target.endposition) {\n          objects = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"destroy\"])(objects, this.ballid);\n        }\n      }\n\n      if (distance < target.size) {\n        target.health -= this.damage;\n        objects = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"destroy\"])(objects, this.ballid);\n        target.size--;\n        target.shieldDist += this.damage;\n      }\n    }\n    /*\n    // Simple falling - gravity simulation for later use\n    if(this.y + this.radius + this.dy > canvas.height){\n      this.dy = -this.dy * friction\n    }else if(this.y + this.radius<canvas.height){\n      this.dy += gravity\n    }\n    this.y+=this.dy;\n      */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.moveBall();\n      this.draw();\n    }\n  }]);\n\n  return Ball;\n}(); // Circle is representing the player object - he is the so called Target object.\n\n\nvar Circle = /*#__PURE__*/function () {\n  function Circle(size) {\n    _classCallCheck(this, Circle);\n\n    this.x = canvas.width / 2;\n    this.y = canvas.height / 2;\n    this.size = size;\n    this.startposition = this.endposition - this.shieldSize * 2;\n    this.endposition = Math.atan2(this.movetoY - this.y, this.movetoX - this.x) * 180 / Math.PI * (Math.PI / 180) + this.shieldSize;\n    this.shieldDist = 40;\n    this.shieldSize = this.size / 200;\n    this.health = 100;\n    this.movetoX = 0;\n    this.movetoY = 0;\n  }\n\n  _createClass(Circle, [{\n    key: \"toPosition\",\n    value: function toPosition() {\n      var moveto = Math.atan2(this.movetoY - this.y, this.movetoX - this.x) * 180 / Math.PI * (Math.PI / 180);\n      this.endposition = Math.atan2(this.movetoY - this.y, this.movetoX - this.x) * 180 / Math.PI * (Math.PI / 180) + this.shieldSize;\n      this.startposition = this.endposition - this.shieldSize * 2; // console.log(`${this.startposition} - ${this.endposition} and ${moveto}`)\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      c.lineWidth = 5;\n      c.beginPath();\n      c.strokeStyle = 'red';\n      c.arc(this.x, this.y, this.size + this.shieldDist, this.startposition, this.endposition);\n      c.stroke();\n      c.strokeStyle = 'green';\n      c.fillStyle = 'green';\n      c.beginPath();\n      c.arc(this.x, this.y, this.size, 0, Math.PI * 2);\n      c.fill();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.toPosition();\n      this.draw();\n    }\n  }]);\n\n  return Circle;\n}(); // Implementation\n\n\nvar objects;\nvar player;\nvar target;\n\nfunction init() {\n  objects = [];\n  player = [];\n  target = new Circle(40);\n  player.push(target);\n  /*\n  // OTHER FUNCTIONS FOR LATER USE - ESPECIALLY FOR CREATING NON OVERLAPPING ENEMIES \n  \n  let numberOfObjects = 100;\n  let overLapp = false;\n  let safetySwitch = 5000;\n  let safetyCounter = 0;\n  \n   FILL THE SCREEN WITH NON OVERLAPPING BALLS\n  while(objects.length < numberOfObjects && safetyCounter < safetySwitch){\n  \n    let ball = new Ball(randomIntFromRange(0,canvas.width),randomIntFromRange(0,canvas.height),20,randomColor(colors))\n  \n    for(let i=0; i < objects.length; i++){\n      let previousObject = objects[i]\n      overLapp = false;\n      if(distance(ball.x, ball.y, previousObject.x, previousObject.y) < ball.radius + previousObject.radius){\n          overLapp = true;\n          break;\n      }\n      if(ball.radius + ball.y > canvas.height || ball.radius + ball.x > canvas.width || ball.radius + ball.y < 0 || ball.radius + ball.x < 0){\n        overLapp = true;\n        break;\n      }\n    }\n    if(!overLapp){\n      objects.push(ball)\n    }\n    safetyCounter++\n  }*/\n} // Simple function to make a ball - currently triggered with eventlistener on top of this code\n\n/*\nfunction makeball(x,y){\n  let ball = new Ball(x,y,randomIntFromRange(5,10),randomColor(colors),ballid)\n  objects.push(ball)\n  ballid++\n}\n*/\n\n\nfunction generateMeteors() {\n  var newballx = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomIntFromRange\"])(-20, canvas.width + 20);\n  var newbally = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomIntFromRange\"])(0, canvas.height + 20);\n  console.log(\"\".concat(newballx, \" - \").concat(newbally));\n  var newball = new Ball(newballx, newbally, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomIntFromRange\"])(5, 10), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomColor\"])(colors), ballid);\n  objects.push(newball);\n  ballid++;\n} // Draw screen divider on the middle of the screen, helped while figuring out the angle tracking\n\n\nfunction drawDivider() {\n  c.lineWidth = 1;\n  c.moveTo(canvas.width / 2, 0);\n  c.lineTo(canvas.width / 2, canvas.height);\n  c.stroke();\n  c.moveTo(0, canvas.height / 2);\n  c.lineTo(canvas.width, canvas.height / 2);\n  c.stroke();\n} // MAIN ANIMATION LOOP \n\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  c.fillStyle = \"black\";\n  c.fillRect(0, 0, canvas.width, canvas.height);\n  drawDivider();\n\n  if (objects.length < 5) {\n    generateMeteors();\n  } //call the update of the player (target)\n\n\n  player.forEach(function (el) {\n    el.update();\n  }); //call the update of the objects (balls)\n\n  objects.forEach(function (el) {\n    el.update();\n  });\n}\n\ninit();\nanimate();\n\n//# sourceURL=webpack:///./src/js/canvas.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function randomIntFromRange(min, max) {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n}\n\nfunction randomColor(colors) {\n  return colors[Math.floor(Math.random() * colors.length)];\n}\n\nfunction distance(x1, y1, x2, y2) {\n  var xDist = x2 - x1;\n  var yDist = y2 - y1;\n  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));\n} //Filter out the object from the array of objects\n\n\nfunction destroy(arr, id) {\n  if (arr.length > 1) {\n    arr = arr.filter(function (x) {\n      return x.ballid != id;\n    });\n  } else {\n    arr.pop();\n  }\n\n  return arr;\n}\n\nmodule.exports = {\n  randomIntFromRange: randomIntFromRange,\n  randomColor: randomColor,\n  distance: distance,\n  destroy: destroy\n};\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });