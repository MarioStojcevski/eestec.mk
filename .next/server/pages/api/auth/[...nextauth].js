"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    const loggedInUserResponse = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`http://localhost:1337/auth/local`, {\n                        identifier: credentials?.username,\n                        password: credentials?.password\n                    });\n                    console.log(loggedInUserResponse);\n                    return {\n                        id: loggedInUserResponse.data.user.id,\n                        ...loggedInUserResponse\n                    };\n                } catch (error) {\n                    throw Error(error);\n                }\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    //TODO: add a secret from env file\n    secret: \"blabla\",\n    session: {\n        strategy: \"jwt\"\n    }\n};\nconst Auth = (req, res)=>next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, authOptions);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDWTtBQUN4QztBQUUxQixNQUFNRyxjQUErQjtJQUNuQ0MsV0FBVztRQUNUSCxzRUFBbUJBLENBQUM7WUFDbEJJLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtnQkFBTztnQkFDNUNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXLEVBQUU7Z0JBQzNCLElBQUk7b0JBQ0YsTUFBTU0sdUJBQXVCLE1BQU1WLGtEQUFVLENBQzNDLENBQUMsZ0NBQWdDLENBQUMsRUFDbEM7d0JBQ0VZLFlBQVlSLGFBQWFDO3dCQUN6QkcsVUFBVUosYUFBYUk7b0JBQ3pCO29CQUdGSyxRQUFRQyxHQUFHLENBQUNKO29CQUVaLE9BQU87d0JBQ0xLLElBQUlMLHFCQUFxQk0sSUFBSSxDQUFDQyxJQUFJLENBQUNGLEVBQUU7d0JBQ3JDLEdBQUdMLG9CQUFvQjtvQkFDekI7Z0JBQ0YsRUFBRSxPQUFPUSxPQUFPO29CQUNkLE1BQU1DLE1BQU1ELE9BQWlCO2dCQUMvQjtZQUNGO1FBQ0Y7S0FDRDtJQUNERSxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBLGtDQUFrQztJQUNsQ0MsUUFBUTtJQUNSQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtBQUNGO0FBRUEsTUFBTUMsT0FBTyxDQUFDQyxLQUFxQkMsTUFDakM3QixnREFBUUEsQ0FBQzRCLEtBQUtDLEtBQUsxQjtBQUVyQixpRUFBZXdCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJ1c2VybmFtZVwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJwYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBsb2dnZWRJblVzZXJSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2F1dGgvbG9jYWxgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZGVudGlmaWVyOiBjcmVkZW50aWFscz8udXNlcm5hbWUsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscz8ucGFzc3dvcmQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2dlZEluVXNlclJlc3BvbnNlKTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbG9nZ2VkSW5Vc2VyUmVzcG9uc2UuZGF0YS51c2VyLmlkLFxuICAgICAgICAgICAgLi4ubG9nZ2VkSW5Vc2VyUmVzcG9uc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihlcnJvciBhcyBzdHJpbmcpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgfSxcbiAgLy9UT0RPOiBhZGQgYSBzZWNyZXQgZnJvbSBlbnYgZmlsZVxuICBzZWNyZXQ6IFwiYmxhYmxhXCIsXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbn07XG5cbmNvbnN0IEF1dGggPSAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+XG4gIE5leHRBdXRoKHJlcSwgcmVzLCBhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGg7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXhpb3MiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJsb2dnZWRJblVzZXJSZXNwb25zZSIsInBvc3QiLCJpZGVudGlmaWVyIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGF0YSIsInVzZXIiLCJlcnJvciIsIkVycm9yIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJBdXRoIiwicmVxIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();