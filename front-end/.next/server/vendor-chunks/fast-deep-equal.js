"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/fast-deep-equal";
exports.ids = ["vendor-chunks/fast-deep-equal"];
exports.modules = {

/***/ "(ssr)/../node_modules/fast-deep-equal/index.js":
/*!************************************************!*\
  !*** ../node_modules/fast-deep-equal/index.js ***!
  \************************************************/
/***/ ((module) => {

eval("\n// do not edit .js files directly - edit src/index.jst\nmodule.exports = function equal(a, b) {\n    if (a === b) return true;\n    if (a && b && typeof a == \"object\" && typeof b == \"object\") {\n        if (a.constructor !== b.constructor) return false;\n        var length, i, keys;\n        if (Array.isArray(a)) {\n            length = a.length;\n            if (length != b.length) return false;\n            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;\n            return true;\n        }\n        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;\n        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();\n        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();\n        keys = Object.keys(a);\n        length = keys.length;\n        if (length !== Object.keys(b).length) return false;\n        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;\n        for(i = length; i-- !== 0;){\n            var key = keys[i];\n            if (!equal(a[key], b[key])) return false;\n        }\n        return true;\n    }\n    // true if both NaN, false otherwise\n    return a !== a && b !== b;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLHNEQUFzRDtBQUl0REEsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLE1BQU1DLENBQUMsRUFBRUMsQ0FBQztJQUNsQyxJQUFJRCxNQUFNQyxHQUFHLE9BQU87SUFFcEIsSUFBSUQsS0FBS0MsS0FBSyxPQUFPRCxLQUFLLFlBQVksT0FBT0MsS0FBSyxVQUFVO1FBQzFELElBQUlELEVBQUVFLFdBQVcsS0FBS0QsRUFBRUMsV0FBVyxFQUFFLE9BQU87UUFFNUMsSUFBSUMsUUFBUUMsR0FBR0M7UUFDZixJQUFJQyxNQUFNQyxPQUFPLENBQUNQLElBQUk7WUFDcEJHLFNBQVNILEVBQUVHLE1BQU07WUFDakIsSUFBSUEsVUFBVUYsRUFBRUUsTUFBTSxFQUFFLE9BQU87WUFDL0IsSUFBS0MsSUFBSUQsUUFBUUMsUUFBUSxHQUN2QixJQUFJLENBQUNMLE1BQU1DLENBQUMsQ0FBQ0ksRUFBRSxFQUFFSCxDQUFDLENBQUNHLEVBQUUsR0FBRyxPQUFPO1lBQ2pDLE9BQU87UUFDVDtRQUlBLElBQUlKLEVBQUVFLFdBQVcsS0FBS00sUUFBUSxPQUFPUixFQUFFUyxNQUFNLEtBQUtSLEVBQUVRLE1BQU0sSUFBSVQsRUFBRVUsS0FBSyxLQUFLVCxFQUFFUyxLQUFLO1FBQ2pGLElBQUlWLEVBQUVXLE9BQU8sS0FBS0MsT0FBT0MsU0FBUyxDQUFDRixPQUFPLEVBQUUsT0FBT1gsRUFBRVcsT0FBTyxPQUFPVixFQUFFVSxPQUFPO1FBQzVFLElBQUlYLEVBQUVjLFFBQVEsS0FBS0YsT0FBT0MsU0FBUyxDQUFDQyxRQUFRLEVBQUUsT0FBT2QsRUFBRWMsUUFBUSxPQUFPYixFQUFFYSxRQUFRO1FBRWhGVCxPQUFPTyxPQUFPUCxJQUFJLENBQUNMO1FBQ25CRyxTQUFTRSxLQUFLRixNQUFNO1FBQ3BCLElBQUlBLFdBQVdTLE9BQU9QLElBQUksQ0FBQ0osR0FBR0UsTUFBTSxFQUFFLE9BQU87UUFFN0MsSUFBS0MsSUFBSUQsUUFBUUMsUUFBUSxHQUN2QixJQUFJLENBQUNRLE9BQU9DLFNBQVMsQ0FBQ0UsY0FBYyxDQUFDQyxJQUFJLENBQUNmLEdBQUdJLElBQUksQ0FBQ0QsRUFBRSxHQUFHLE9BQU87UUFFaEUsSUFBS0EsSUFBSUQsUUFBUUMsUUFBUSxHQUFJO1lBQzNCLElBQUlhLE1BQU1aLElBQUksQ0FBQ0QsRUFBRTtZQUVqQixJQUFJLENBQUNMLE1BQU1DLENBQUMsQ0FBQ2lCLElBQUksRUFBRWhCLENBQUMsQ0FBQ2dCLElBQUksR0FBRyxPQUFPO1FBQ3JDO1FBRUEsT0FBTztJQUNUO0lBRUEsb0NBQW9DO0lBQ3BDLE9BQU9qQixNQUFJQSxLQUFLQyxNQUFJQTtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uLi9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4LmpzP2MxOGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImVxdWFsIiwiYSIsImIiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsImkiLCJrZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJ2YWx1ZU9mIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/fast-deep-equal/index.js\n");

/***/ })

};
;