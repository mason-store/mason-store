(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mason-store"] = factory();
	else
		root["mason-store"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "251c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_style_index_0_id_601dbfdc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("954c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_style_index_0_id_601dbfdc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_style_index_0_id_601dbfdc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "954c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9d7d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a623":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bb3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d7faa28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a623");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d7faa28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d7faa28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c4ea":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e667":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_id_a46b1070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9d7d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_id_a46b1070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_id_a46b1070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ install; });
__webpack_require__.d(__webpack_exports__, "Integration", function() { return /* reexport */ Integration; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"afef2d94-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/Integration/index.vue?vue&type=template&id=1f44f0f3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"general"},[_c('div',{staticClass:"general-seek"},[_c('div',{staticClass:"seek-buttons"},[_vm._l((_vm.modelConf.requestConf),function(item,index){return _c('span',{key:index},[(item.type === 'main' && item.name === 'add' && item.isShow)?_c('el-button',{attrs:{"size":"mini","type":"primary","plain":"","icon":item.icon ? item.icon : 'el-icon-plus'},on:{"click":function($event){return _vm.onDialogForm(false, item)}}},[_vm._v(" "+_vm._s(item.label)+" ")]):_vm._e()],1)}),_vm._t("mainbuts")],2),_c('el-form',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.isSearchLoading),expression:"isSearchLoading"}],ref:"searchForm",staticClass:"seek-condition",attrs:{"inline":true,"model":_vm.seekData}},[_vm._l((_vm.modelConf.formConfig),function(item,index){return _c('div',{key:index,staticClass:"seek-form-box"},[(item.searchHidden !== true)?_c('div',[(item.type === 'date')?_c('el-form-item',{attrs:{"label":item.label}},[_c('el-date-picker',{attrs:{"type":item.dateType,"placeholder":'选择' + item.label,"size":"mini","range-separator":"至","start-placeholder":'开始' + item.label,"end-placeholder":'结束' + item.label,"picker-options":item.pickerOptions,"value-format":item.format},model:{value:(_vm.seekData[item.prop]),callback:function ($$v) {_vm.$set(_vm.seekData, item.prop, $$v)},expression:"seekData[item.prop]"}})],1):_vm._e(),(item.type === 'cascader')?_c('el-form-item',{attrs:{"label":item.label}},[_c('el-cascader',{attrs:{"clearable":true,"size":"mini","placeholder":'请选择' + item.label,"options":item.option,"filterable":""},model:{value:(_vm.seekData[item.prop]),callback:function ($$v) {_vm.$set(_vm.seekData, item.prop, $$v)},expression:"seekData[item.prop]"}})],1):(item.type === 'text')?_c('el-form-item',{attrs:{"label":item.label}},[_c('el-input',{attrs:{"clearable":"","show-word-limit":"","size":"mini","maxlength":item.maxlength,"placeholder":'请输入' + item.label},model:{value:(_vm.seekData[item.prop]),callback:function ($$v) {_vm.$set(_vm.seekData, item.prop, $$v)},expression:"seekData[item.prop]"}})],1):(item.type === 'select')?_c('el-form-item',{attrs:{"label":item.label}},[_c('el-select',{attrs:{"placeholder":'请选择' + item.label,"size":"mini","filterable":"","clearable":true},model:{value:(_vm.seekData[item.prop]),callback:function ($$v) {_vm.$set(_vm.seekData, item.prop, $$v)},expression:"seekData[item.prop]"}},_vm._l((item.option),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1):_vm._e()],1):_vm._e()])}),_c('el-form-item',{staticClass:"seek-form-box"},[_vm._l((_vm.modelConf.requestConf),function(item,index){return _c('span',{key:index},[(item.type === 'search' && item.isShow)?_c('el-button',{attrs:{"size":"mini","type":"primary","plain":"","icon":item.icon ? item.icon : 'el-icon-search',"loading":_vm.isReqLoading},on:{"click":function($event){return _vm.seekDataFn(item)}}},[_vm._v(" "+_vm._s(item.label)+" ")]):_vm._e()],1)}),_c('span',[_c('el-button',{staticClass:"reset-form-but",attrs:{"size":"mini","icon":"el-icon-refresh-left","plain":""},on:{"click":function($event){return _vm.resetForm('searchForm')}}},[_vm._v(" 重置 ")])],1)],2)],2)],1),_c('div',{staticClass:"general-table"},[_c('div',{staticClass:"table"},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.isTableLoading),expression:"isTableLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"border":true,"size":"mini","max-height":_vm.modelConf.viewConf.tableMaxHeight},on:{"selection-change":_vm.selectFn}},[_c('el-table-column',{attrs:{"type":"selection","width":"40"}}),_vm._l((_vm.modelConf.tableConfig),function(item,index){return _c('el-table-column',{key:index,attrs:{"show-overflow-tooltip":"","sortable":item.isSortable,"label":item.label,"width":item.width,"prop":item.prop,"fixed":item.fiexd},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(item.type == 'tag')?_c('div',_vm._l((scope.row[item.prop]),function(tagItem,tagIndex){return _c('el-tag',{key:tagIndex,staticClass:"common-table-tag",attrs:{"type":tagItem.type}},[_vm._v(" "+_vm._s(tagItem.label)+" ")])}),1):(item.type == 'img')?_c('el-image',{staticStyle:{"width":"100%","height":"auto"},attrs:{"src":scope.row[item.prop][0],"fit":"contain"}}):(item.type == 'switch')?_c('el-switch',{key:index,staticStyle:{"display":"block"},attrs:{"active-text":item.activeText,"inactive-text":item.inactiveText,"active-value":item.activeValue,"inactive-value":item.inactiveValue,"active-color":item.activeColor,"inactive-color":item.inactiveColor},on:{"change":function (index) { return _vm.onDialogForm(scope.row, _vm.getReqCof(item.prop), index); }},model:{value:(scope.row[item.prop]),callback:function ($$v) {_vm.$set(scope.row, item.prop, $$v)},expression:"scope.row[item.prop]"}}):(item.type === 'operation')?_c('div',[_vm._l((_vm.modelConf.requestConf),function(butItem,index){return _c('div',{key:index,staticClass:"table-but"},[(
                    butItem.type === 'table' &&
                    butItem.isShow(scope.row) &&
                    !butItem.prop
                  )?_c('div',{attrs:{"placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":butItem.icon,"type":"primary","size":"mini","plain":""},on:{"click":function($event){return _vm.onDialogForm(scope.row, butItem)}}},[_vm._v(" "+_vm._s(butItem.label)+" ")])],1):_vm._e()])}),_vm._t("operation",null,{"row":scope.row})],2):_c('div',[_vm._v(_vm._s(scope.row[item.prop]))])]}}],null,true)})})],2),_c('div',{staticClass:"page"},[_c('el-pagination',{attrs:{"current-page":_vm.seekData.pageNum,"page-sizes":[10, 30, 50, 100],"layout":"total, sizes, prev, pager, next, jumper","total":_vm.pageTotal},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1),_c('el-dialog',{attrs:{"title":_vm.remindWinConf.title,"visible":_vm.centerDialogVisible,"width":"30%","center":""},on:{"update:visible":function($event){_vm.centerDialogVisible=$event}}},[_c('span',[_vm._v(_vm._s(_vm.remindWinConf.msg))]),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.cancelDeleteFn}},[_vm._v(" 取消 ")]),_c('el-button',{attrs:{"type":"primary","plain":"","size":"mini","disabled":_vm.isReqLoading,"loading":_vm.isReqLoading},on:{"click":function($event){return _vm.confirmDeleteFn()}}},[_vm._v(" 确定 ")])],1)])],1)]),_c('div',{staticClass:"general-window"},[_c('WindowModule',{attrs:{"show-window":_vm.isShowWindow,"form-data":_vm.dialogFormData,"add-or-set":_vm.addOrSet,"modelConf":_vm.modelConf},on:{"winCancelFn":_vm.getWindowCancelFn,"setTableList":_vm.setTableList},scopedSlots:_vm._u([{key:"dialogForm",fn:function(data){return [_vm._t("dialogForm",null,{"formData":data.formData})]}},{key:"dialogButton",fn:function(data){return [_vm._t("dialogButton",null,{"formData":data.formData})]}}],null,true)})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./mason-store/Integration/index.vue?vue&type=template&id=1f44f0f3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"afef2d94-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/Integration/module/dialog.vue?vue&type=template&id=6273e6ca&
var dialogvue_type_template_id_6273e6ca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"general-dialog"},[_c('el-dialog',{attrs:{"width":"80%","title":_vm.winText,"destroy-on-close":true,"visible":_vm.showFormBox,"close-on-click-modal":false},on:{"update:visible":function($event){_vm.showFormBox=$event},"close":_vm.closeFn}},[_c('div',[_c('el-form',{ref:"winFormData",staticClass:"seek-ruleForm",attrs:{"label-width":_vm.modelConf.viewConf.formLabelWidth,"model":_vm.winFormData,"rules":_vm.modelConf.formRules}},[_c('el-row',[_vm._l((_vm.modelConf.formConfig),function(item,index){return _c('el-col',{key:index,attrs:{"span":item.span}},[(item.type === 'form-title')?_c('div',[_c('el-divider',[_vm._v(_vm._s(item.label))])],1):_vm._e(),(item.type === 'text' || item.type === 'textarea')?_c('el-form-item',{attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
                (_vm.winText === '编辑' && item.isEditPermit === false)
                  ? ''
                  : item.prop}},[_c('el-input',{attrs:{"placeholder":'请输入' + item.label,"show-word-limit":"","clearable":"","size":"mini","type":item.type ? item.type : 'text',"maxlength":item.maxlength,"disabled":(_vm.winText === '新增' && item.isAddPermit === false) ||
                  (_vm.winText === '编辑' && item.isEditPermit === false)
                    ? true
                    : false},model:{value:(_vm.winFormData[item.prop]),callback:function ($$v) {_vm.$set(_vm.winFormData, item.prop, $$v)},expression:"winFormData[item.prop]"}})],1):_vm._e(),(item.type === 'radio')?_c('el-form-item',{attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
                (_vm.winText === '编辑' && item.isEditPermit === false)
                  ? ''
                  : item.prop}},_vm._l((item.option),function(item){return _c('el-radio',{key:item.value,attrs:{"size":"mini","label":item.value},model:{value:(_vm.winFormData[item.prop]),callback:function ($$v) {_vm.$set(_vm.winFormData, item.prop, $$v)},expression:"winFormData[item.prop]"}},[_vm._v(_vm._s(item.label))])}),1):_vm._e(),(item.type === 'select' || item.type === 'select_multiple')?_c('el-form-item',{attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
                (_vm.winText === '编辑' && item.isEditPermit === false)
                  ? ''
                  : item.prop}},[_c('el-select',{attrs:{"placeholder":'请选择' + item.label,"size":"mini","filterable":"","remote":item.isRemote,"remote-method":_vm.remoteMethod,"loading":_vm.loading,"multiple":item.type == 'select_multiple',"clearable":true,"disabled":(_vm.winText === '新增' && item.isAddPermit === false) ||
                  (_vm.winText === '编辑' && item.isEditPermit === false)
                    ? true
                    : false},model:{value:(_vm.winFormData[item.prop]),callback:function ($$v) {_vm.$set(_vm.winFormData, item.prop, $$v)},expression:"winFormData[item.prop]"}},[_vm._l((item.option),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),(item.isRemote)?_c('el-pagination',{staticClass:"select-page",attrs:{"current-page":_vm.seekData.pageNum,"page-sizes":[10, 30, 50, 100],"layout":"total, sizes, prev, pager, next, jumper","total":_vm.pageTotal},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}}):_vm._e()],2)],1):_vm._e(),(item.type === 'date')?_c('el-form-item',{attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
                (_vm.winText === '编辑' && item.isEditPermit === false)
                  ? ''
                  : item.prop}},[_c('el-date-picker',{attrs:{"type":item.dateType,"placeholder":'选择' + item.label,"size":"mini","range-separator":"至","start-placeholder":'开始' + item.label,"end-placeholder":'结束' + item.label,"picker-options":item.pickerOptions,"value-format":item.valueFormat,"format":item.format},model:{value:(_vm.winFormData[item.prop]),callback:function ($$v) {_vm.$set(_vm.winFormData, item.prop, $$v)},expression:"winFormData[item.prop]"}})],1):_vm._e(),(item.type === 'richtext')?_c('el-form-item',{attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
                (_vm.winText === '编辑' && item.isEditPermit === false)
                  ? ''
                  : item.prop}},[(_vm.showWindow)?_c('Tinymce',{attrs:{"config":item,"requestModel":item.requestModel,"height":800},model:{value:(_vm.winFormData[item.prop]),callback:function ($$v) {_vm.$set(_vm.winFormData, item.prop, $$v)},expression:"winFormData[item.prop]"}}):_vm._e()],1):_vm._e(),(item.type === 'cascader')?_c('el-form-item',{attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
                (_vm.winText === '编辑' && item.isEditPermit === false)
                  ? ''
                  : item.prop}},[_c('el-cascader',{attrs:{"clearable":true,"size":"mini","placeholder":'请选择' + item.label,"options":item.option,"filterable":""},model:{value:(_vm.winFormData[item.prop]),callback:function ($$v) {_vm.$set(_vm.winFormData, item.prop, $$v)},expression:"winFormData[item.prop]"}})],1):_vm._e(),(item.type === 'img')?_c('el-form-item',{staticClass:"img-upload-box",attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
                (_vm.winText === '编辑' && item.isEditPermit === false)
                  ? ''
                  : item.prop}},[_vm._l((_vm.winFormData[item.prop]),function(imgItem,imgIndex){return _c('div',{key:imgIndex,staticClass:"dialog-img"},[_c('el-image',{attrs:{"preview-src-list":_vm.winFormData[item.prop],"z-index":imgIndex + 1,"src":imgItem}}),_c('span',{staticClass:"cancel",on:{"click":function($event){return _vm.onRemoveImgItem(item.prop, imgIndex)}}},[_vm._v(" × ")])],1)}),(
                  _vm.winFormData[item.prop]
                    ? _vm.winFormData[item.prop].length < item.limit
                      ? true
                      : false
                    : false
                )?_c('el-upload',{staticClass:"picture dialog-img",attrs:{"list-type":"picture-card","accept":".jpg, .png","name":item.requestModel.uploadName,"action":item.requestModel.requestFn,"auto-upload":true,"show-file-list":false,"headers":item.requestModel.uploadHeaders,"on-success":function (response, file, fileList) { return _vm.handleUploadSuc(item, response, file, fileList); },"before-upload":function (response, file, fileList) { return _vm.handleBeforeUpload(item, response, file, fileList); }}},[_c('el-button',{attrs:{"size":"mini","plain":"","type":"primary","loading":_vm.uploadLoadin}},[_vm._v(" 上传图片 ")])],1):_vm._e()],2):_vm._e()],1)}),_vm._t("form")],2)],1)],1),_vm._t("dialogForm",null,{"formData":_vm.winFormData}),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_vm._t("dialogButton",null,{"formData":_vm.winFormData}),_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.closeFn}},[_vm._v(" 取消 ")]),_c('el-button',{attrs:{"plain":"","type":"primary","size":"mini","disabled":_vm.buttonAct,"loading":_vm.buttonAct},on:{"click":function($event){return _vm.confirmFn('winFormData')}}},[_vm._v(" 确定 ")])],2)],2)],1)}
var dialogvue_type_template_id_6273e6ca_staticRenderFns = []


// CONCATENATED MODULE: ./mason-store/Integration/module/dialog.vue?vue&type=template&id=6273e6ca&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"afef2d94-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/components/Tinymce/index.vue?vue&type=template&id=2d7faa28&scoped=true&
var Tinymcevue_type_template_id_2d7faa28_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tinymce-container",class:{ fullscreen: _vm.fullscreen },style:({ width: _vm.containerWidth })},[_c('textarea',{staticClass:"tinymce-textarea",attrs:{"id":_vm.tinymceId}}),_vm._v(" "),_c('div',{staticClass:"editor-custom-btn-container"},[_c('editorImage',{staticClass:"editor-upload-btn",attrs:{"color":"#1890ff","tinymceId":_vm.tinymceId,"requestModel":_vm.requestModel,"config":_vm.config},on:{"successCBK":_vm.imageSuccessCBK,"confirmVideo":_vm.videoSuccess}})],1)])}
var Tinymcevue_type_template_id_2d7faa28_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./mason-store/components/Tinymce/index.vue?vue&type=template&id=2d7faa28&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"afef2d94-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/components/Tinymce/components/EditorImage.vue?vue&type=template&id=601dbfdc&scoped=true&
var EditorImagevue_type_template_id_601dbfdc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-container"},[_c('Preview'),_c('el-button',{style:({ background: _vm.color, borderColor: _vm.color }),attrs:{"icon":"el-icon-upload","size":"mini","type":"primary"},on:{"click":function($event){_vm.dialogVisible = true}}},[_vm._v(" 图片上传 ")]),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible,"append-to-body":"","title":"上传图片","close-on-click-modal":false},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-upload',{staticClass:"editor-slide-upload",attrs:{"limit":_vm.config.limit,"accept":".jpg, .png","headers":_vm.headers,"multiple":true,"file-list":_vm.fileList,"show-file-list":true,"on-remove":_vm.handleRemove,"on-success":_vm.handleSuccess,"before-upload":_vm.beforeUpload,"action":_vm.baseUrl,"on-exceed":_vm.handleExceed,"list-type":"picture-card"}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v("上传")])],1),_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleSubmit}},[_vm._v("确定")])],1)],1)}
var EditorImagevue_type_template_id_601dbfdc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./mason-store/components/Tinymce/components/EditorImage.vue?vue&type=template&id=601dbfdc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"afef2d94-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/components/Tinymce/components/uploadBtn.vue?vue&type=template&id=fbd7a5c6&
var uploadBtnvue_type_template_id_fbd7a5c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('el-button',{attrs:{"type":"success","size":"mini","icon":"el-icon-upload","disabled":_vm.disabled},on:{"click":_vm.init}},[_vm._v("视频上传")]),_c('el-dialog',{attrs:{"visible":_vm.show,"title":"上传视频","append-to-body":"","width":"400px","close-on-click-modal":false},on:{"update:visible":function($event){_vm.show=$event}}},[_c('el-upload',{attrs:{"action":_vm.baseUrl,"headers":_vm.headers,"show-file-list":false,"http-request":_vm.beforeUpload,"multiple":false,"disabled":_vm.disabled,"accept":".mp4, .avi, .wmv"}},[_c('el-button',{attrs:{"type":"primary","size":"mini"}},[_vm._v("点击上传")]),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_c('el-progress',{attrs:{"text-inside":true,"stroke-width":24,"percentage":_vm.percentage,"status":"success"}}),_c('div',[_vm._v("只能上传mp4文件")])],1)],1)],1)],1)}
var uploadBtnvue_type_template_id_fbd7a5c6_staticRenderFns = []


// CONCATENATED MODULE: ./mason-store/components/Tinymce/components/uploadBtn.vue?vue&type=template&id=fbd7a5c6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/components/Tinymce/components/uploadBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const blockSize = 2097152
function getChunkInfo(file, currentChunk, size) {
  const start = currentChunk * size
  const end = Math.min(file.size, start + size)
  const chunk = file.slice(start, end)
  return { start, end, chunk }
}

/* harmony default export */ var uploadBtnvue_type_script_lang_js_ = ({
  props: { requestModel: { type: Object, default: {} } },
  data() {
    return {
      percentage: 0,
      disabled: false,
      show: false,
      headers: this.requestModel.uploadHeaders,
      baseUrl: this.requestModel.requestFn,
    }
  },
  methods: {
    init() {
      this.show = true
    },
    beforeUpload(val) {
      const isMp4 = val.file.type == 'video/mp4'
      const isLt1g = val.file.size < 107374824
      if (!isMp4) {
        this.$message.error('上传文件格式为mp4')
        return
      }
      if (!isLt1g) {
        this.$message.error('上传文件不能超过1G')
      }
      this.disabled = true
      var count = Math.ceil(val.file.size / blockSize)
      this.percentage = 0
      this.uploadChunk({
        file: val.file,
        offset: 0,
        count,
        currentChunk: 0,
        size: blockSize,
        name: null,
      })
    },
    uploadChunk({ file, offset, count, currentChunk, size, name }) {
      let params = {
        offset, //总计上传量
        complete: count - 1 == currentChunk ? true : false,
      }
      var { chunk, start, end } = getChunkInfo(file, currentChunk, size)
      let data = new FormData()
      var fileData = new File([file.slice(start, end)], file.name, {
        type: file.type,
      }) //单片文件
      data.append('file', fileData)
      if (name) {
        data.append('groupName', name[0])
        data.append('appenderFileName', name[1])
      }
      this.$message.info('尚未完善，敬请期待！')
      return
      this.requestModel
        .requestFn(data, params)
        .then((res) => {
          this.percentage = end == file.size ? 100 : Number(((end / file.size) * 100).toFixed(2))
          if (currentChunk == count - 1) {
            this.disabled = false
            this.$emit('success', res.data)
            this.$message.success('上传成功')
            this.show = false
          } else {
            currentChunk++
            this.uploadChunk({
              file,
              offset: end,
              count,
              currentChunk,
              size,
              name: res.data,
            })
          }
        })
        .catch((err) => {
          this.disabled = false
        })
    },
  },
});

// CONCATENATED MODULE: ./mason-store/components/Tinymce/components/uploadBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_uploadBtnvue_type_script_lang_js_ = (uploadBtnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./mason-store/components/Tinymce/components/uploadBtn.vue





/* normalize component */

var component = normalizeComponent(
  components_uploadBtnvue_type_script_lang_js_,
  uploadBtnvue_type_template_id_fbd7a5c6_render,
  uploadBtnvue_type_template_id_fbd7a5c6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var uploadBtn = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"afef2d94-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/components/Tinymce/components/preview.vue?vue&type=template&id=a46b1070&scoped=true&
var previewvue_type_template_id_a46b1070_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('el-button',{attrs:{"type":"success","icon":"el-icon-view","size":"mini"},on:{"click":_vm.init}},[_vm._v("预览")]),_c('el-dialog',{attrs:{"visible":_vm.show,"append-to-body":"","title":"预览","close-on-click-modal":false,"top":"5vh"},on:{"update:visible":function($event){_vm.show=$event}}},[_c('div',{staticClass:"select"},[_vm._v(" 屏幕宽度: "),_c('el-select',{attrs:{"value":_vm.swidth},model:{value:(_vm.swidth),callback:function ($$v) {_vm.swidth=$$v},expression:"swidth"}},_vm._l((_vm.option),function(item){return _c('el-option',{key:item.value,attrs:{"value":item.value,"label":item.label}})}),1)],1),_c('div',{class:_vm.swidth,domProps:{"innerHTML":_vm._s(_vm.htmlBody)}})])],1)}
var previewvue_type_template_id_a46b1070_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./mason-store/components/Tinymce/components/preview.vue?vue&type=template&id=a46b1070&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/components/Tinymce/components/preview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var previewvue_type_script_lang_js_ = ({
  data() {
    return {
      show: false,
      htmlBody: "",
      swidth: "i5",
      option: [
        { value: "i5", label: "iPhone 5" },
        { value: "i6", label: "iPhone 6/7/8" },
        { value: "i6P", label: "iPhone 6/7/8 Plus" },
        { value: "back", label: "后台管理系统" }
      ]
    };
  },
  methods: {
    init() {
      this.show = true;
      this.htmlBody = window.tinymce.activeEditor.getContent();
    }
  }
});

// CONCATENATED MODULE: ./mason-store/components/Tinymce/components/preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_previewvue_type_script_lang_js_ = (previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./mason-store/components/Tinymce/components/preview.vue?vue&type=style&index=0&id=a46b1070&scoped=true&lang=css&
var previewvue_type_style_index_0_id_a46b1070_scoped_true_lang_css_ = __webpack_require__("e667");

// CONCATENATED MODULE: ./mason-store/components/Tinymce/components/preview.vue






/* normalize component */

var preview_component = normalizeComponent(
  components_previewvue_type_script_lang_js_,
  previewvue_type_template_id_a46b1070_scoped_true_render,
  previewvue_type_template_id_a46b1070_scoped_true_staticRenderFns,
  false,
  null,
  "a46b1070",
  null
  
)

/* harmony default export */ var preview = (preview_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { getToken } from 'api/qiniu'


/* harmony default export */ var EditorImagevue_type_script_lang_js_ = ({
  components: { UploadBtn: uploadBtn, Preview: preview },
  name: 'EditorSlideUpload',
  props: {
    color: {
      type: String,
      default: '#1890ff',
    },
    tinymceId: {
      type: String,
    },
    requestModel: { type: Object, default: {} },
    config: { type: Object, default: {} },
  },
  data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: [],
      headers: this.requestModel.uploadHeaders,
      baseUrl: this.requestModel.requestFn,
    }
  },
  methods: {
    uploadSuccess(val) {
      const url = `${Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_BASEURL}/${val.join('/')}`
      this.$emit('confirmVideo', url)
    },
    checkAllSuccess() {
      return Object.keys(this.listObj).every((item) => this.listObj[item].hasSuccess)
    },
    handleSubmit() {
      const arr = Object.keys(this.listObj).map((v) => this.listObj[v])
      if (!this.checkAllSuccess()) {
        this.$message('请等待所有图像成功上载。如果有网络问题，请刷新页面并重新上传！')
        return
      }
      this.$emit('successCBK', arr)
      this.listObj = {}
      this.fileList = []
      this.dialogVisible = false
    },
    handleSuccess(response, file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          const res = this.requestModel.responseData(response)
          if (res.code == 0) {
            this.listObj[objKeyArr[i]].url = res.path
            this.listObj[objKeyArr[i]].hasSuccess = true
          } else {
            this.$message.error(res.msg)
          }
          return
        }
      }
    },
    handleExceed(files, fileList) {
      this.$message('图片数量超过限制，如需更换，请删除再上传！')
      return
    },
    handleRemove(file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]]
          return
        }
      }
    },
    beforeUpload(file) {
      const _self = this
      const _URL = window.URL || window.webkitURL
      const fileName = file.uid
      this.listObj[fileName] = {}
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = _URL.createObjectURL(file)
        img.onload = function() {
          _self.listObj[fileName] = {
            hasSuccess: false,
            uid: file.uid,
            width: this.width,
            height: this.height,
          }
        }
        resolve(true)
      })
    },
  },
});

// CONCATENATED MODULE: ./mason-store/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EditorImagevue_type_script_lang_js_ = (EditorImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./mason-store/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=601dbfdc&lang=scss&scoped=true&
var EditorImagevue_type_style_index_0_id_601dbfdc_lang_scss_scoped_true_ = __webpack_require__("251c");

// CONCATENATED MODULE: ./mason-store/components/Tinymce/components/EditorImage.vue






/* normalize component */

var EditorImage_component = normalizeComponent(
  components_EditorImagevue_type_script_lang_js_,
  EditorImagevue_type_template_id_601dbfdc_scoped_true_render,
  EditorImagevue_type_template_id_601dbfdc_scoped_true_staticRenderFns,
  false,
  null,
  "601dbfdc",
  null
  
)

/* harmony default export */ var EditorImage = (EditorImage_component.exports);
// CONCATENATED MODULE: ./mason-store/components/Tinymce/plugins.js
// Any plugins you want to use has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/

const plugins = ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount']

/* harmony default export */ var Tinymce_plugins = (plugins);

// CONCATENATED MODULE: ./mason-store/components/Tinymce/toolbar.js
// Here is a list of the toolbar
// Detail list see https://www.tinymce.com/docs/advanced/editor-control-identifiers/#toolbarcontrols

const toolbar = ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen']

/* harmony default export */ var Tinymce_toolbar = (toolbar);

// CONCATENATED MODULE: ./mason-store/components/Tinymce/dynamicLoadScript.js
let callbacks = []

function loadedTinymce() {
  // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2144
  // check is successfully downloaded script
  return window.tinymce
}

const dynamicLoadScript = (src, callback) => {
  const existingScript = document.getElementById(src)
  const cb = callback || function() {}

  if (!existingScript) {
    const script = document.createElement('script')
    script.src = src // src url for the third-party library being loaded.
    script.id = src
    document.body.appendChild(script)
    callbacks.push(cb)
    const onEnd = 'onload' in script ? stdOnEnd : ieOnEnd
    onEnd(script)
  }

  if (existingScript && cb) {
    if (loadedTinymce()) {
      cb(null, existingScript)
    } else {
      callbacks.push(cb)
    }
  }

  function stdOnEnd(script) {
    script.onload = function() {
      // this.onload = null here is necessary
      // because even IE9 works not like others
      this.onerror = this.onload = null
      for (const cb of callbacks) {
        cb(null, script)
      }
      callbacks = null
    }
    script.onerror = function() {
      this.onerror = this.onload = null
      cb(new Error('Failed to load ' + src), script)
    }
  }

  function ieOnEnd(script) {
    script.onreadystatechange = function() {
      if (this.readyState !== 'complete' && this.readyState !== 'loaded') return
      this.onreadystatechange = null
      for (const cb of callbacks) {
        cb(null, script) // there is no way to catch loading errors in IE8
      }
      callbacks = null
    }
  }
}

/* harmony default export */ var Tinymce_dynamicLoadScript = (dynamicLoadScript);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/components/Tinymce/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * docs:
 * https://panjiachen.github.io/vue-element-admin-site/feature/component/rich-editor.html#tinymce
 */




// import zh_CN from '@/vendor/zh_CN'
// why use this cdn, detail see https://github.com/PanJiaChen/tinymce-all-in-one
const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'
// const tinymceCDN =
//   "https://lib.baomitu.com/tinymce/4.9.6/tinymce.min.js";

/* harmony default export */ var Tinymcevue_type_script_lang_js_ = ({
  name: 'Tinymce',
  components: { editorImage: EditorImage },
  props: {
    id: {
      type: String,
      default: function() {
        return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      },
    },
    value: { type: String, default: '' },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
    menubar: { type: String, default: 'file edit insert view format table' },
    height: { type: [Number, String], required: false, default: 360 },
    width: { type: [Number, String], required: false, default: 'auto' },
    obj: { type: Object, required: false },
    requestModel: { type: Object, default: {} },
    config: { type: Object, default: {} },
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        en: 'en',
        zh: 'zh_CN',
        es: 'es_MX',
        ja: 'ja',
      },
    }
  },
  computed: {
    containerWidth() {
      const width = this.width
      if (/^[\d]+(\.[\d]+)?$/.test(width)) {
        // matches `100`, `'100'`
        return `${width}px`
      }
      return width
    },
  },
  watch: {
    value(val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() => window.tinymce.get(this.tinymceId).setContent(val || ''))
      }
    },
  },
  mounted() {
    this.init()
  },
  activated() {
    if (window.tinymce) {
      this.initTinymce()
    }
  },
  deactivated() {
    this.destroyTinymce()
  },
  destroyed() {
    this.destroyTinymce()
  },
  methods: {
    init() {
      // dynamic load tinymce from cdn
      Tinymce_dynamicLoadScript(tinymceCDN, (err) => {
        if (err) {
          this.$message.error(err.message)
          return
        }
        this.initTinymce()
      })
    },
    initTinymce() {
      // import("@/vendor/zh_CN").then(zh_CN => {
      const _this = this
      window.tinymce.init({
        selector: `#${this.tinymceId}`,
        auto_focus: true,
        // language_url: zh_CN,
        language: this.languageTypeList['zh'],
        height: this.height,
        fontsize_formats: '12px 14px 18px 24px 36px',
        body_class: 'panel-body ',
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : Tinymce_toolbar,
        menubar: this.menubar,
        plugins: Tinymce_plugins,
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        default_link_target: '_blank',
        link_title: false,
        convert_urls: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: (editor) => {
          if (_this.value) {
            editor.setContent(_this.value)
          }
          _this.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.hasChange = true
            this.$emit('input', editor.getContent())
          })
        },
        setup(editor) {
          editor.on('FullscreenStateChanged', (e) => {
            _this.fullscreen = e.state
          })
        },
        // 整合七牛上传
        // images_dataimg_filter(img) {
        //   setTimeout(() => {
        //     const $image = $(img);
        //     $image.removeAttr('width');
        //     $image.removeAttr('height');
        //     if ($image[0].height && $image[0].width) {
        //       $image.attr('data-wscntype', 'image');
        //       $image.attr('data-wscnh', $image[0].height);
        //       $image.attr('data-wscnw', $image[0].width);
        //       $image.addClass('wscnph');
        //     }
        //   }, 0);
        //   return img
        // },
        // images_upload_handler(blobInfo, success, failure, progress) {
        //   progress(0);
        //   const token = _this.$store.getters.token;
        //   getToken(token).then(response => {
        //     const url = response.data.qiniu_url;
        //     const formData = new FormData();
        //     formData.append('token', response.data.qiniu_token);
        //     formData.append('key', response.data.qiniu_key);
        //     formData.append('file', blobInfo.blob(), url);
        //     upload(formData).then(() => {
        //       success(url);
        //       progress(100);
        //     })
        //   }).catch(err => {
        //     failure('出现未知问题，刷新页面，或者联系程序员')
        //   });
        // },
        // });
      })
    },
    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId)
      if (this.fullscreen) {
        tinymce.execCommand('mceFullScreen')
      }

      if (tinymce) {
        tinymce.destroy()
      }
    },
    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value)
    },
    getContent() {
      window.tinymce.get(this.tinymceId).getContent()
    },
    imageSuccessCBK(arr) {
      const _this = this
      arr.forEach((v) => {
        window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" />`)
      })
    },
    videoSuccess(val) {
      const _this = this
      window.tinymce
        .get(_this.tinymceId)
        .insertContent(`<video width="100%" height="300" src='${val}' controls="controls"></video>`)
    },
  },
});

// CONCATENATED MODULE: ./mason-store/components/Tinymce/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tinymcevue_type_script_lang_js_ = (Tinymcevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./mason-store/components/Tinymce/index.vue?vue&type=style&index=0&id=2d7faa28&scoped=true&lang=css&
var Tinymcevue_type_style_index_0_id_2d7faa28_scoped_true_lang_css_ = __webpack_require__("bb3a");

// CONCATENATED MODULE: ./mason-store/components/Tinymce/index.vue






/* normalize component */

var Tinymce_component = normalizeComponent(
  components_Tinymcevue_type_script_lang_js_,
  Tinymcevue_type_template_id_2d7faa28_scoped_true_render,
  Tinymcevue_type_template_id_2d7faa28_scoped_true_staticRenderFns,
  false,
  null,
  "2d7faa28",
  null
  
)

/* harmony default export */ var Tinymce = (Tinymce_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/Integration/module/dialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
  name: "general-dialog",
  components: { Tinymce: Tinymce },
  props: ["showWindow", "formData", "addOrSet", "modelConf"],
  data() {
    return {
      buttonAct: false, // 激活按钮
      showFormBox: false, // 子组件 - 显示状态
      resumeBeginDate: [], // 时间范围
      winFormData: {}, // 弹窗表单
      formDataName: "", // TS 类型转换
      winText: "-", // 弹窗文字
      uploadLoadin: false, // 上传图片等待
      loading: false,
      seekData: {
        pageNum: 1,
        pageSize: 10,
      },
      pageTotal: 0,
    };
  },
  watch: {
    showWindow: {
      handler(val, oldVal) {
        this.showFormBox = val;
        // 监听父组件显示状态，关联子组件显示状态。避免修改到父组件的值
        if (val === true) {
          // 重置验证
          this.formDataName = this.$refs["winFormData"];
          if (this.formDataName) {
            this.formDataName.resetFields();
          }
          // 新增 - 编辑
          if (this.addOrSet === 1) {
            this.winText = "新增";
            this.winFormData = { ...this.formData };
          } else if (this.addOrSet === 2) {
            this.winText = "编辑";
            this.winFormData = { ...this.formData };
          }
        } else if (val === false) {
        }
      },
      immediate: true,
    },
  },
  methods: {
    /**
     * 上传图片成功
     */
    async handleUploadSuc(item, response, file, list) {
      const res = item.requestModel.responseData(response);
      if (res.code === 0) {
        this.winFormData[item.prop] = this.winFormData[item.prop] || [];
        this.winFormData[item.prop] = [
          ...this.winFormData[item.prop],
          ...[res.path],
        ];
        this.uploadLoadin = false;
        this.$message({
          showClose: true,
          message: res.msg || "上传成功",
          type: "success",
        });
      } else {
        this.$message({
          showClose: true,
          message: res.msg || "上传失败",
          type: "error",
        });
      }
    },
    /**
     * 分页组件 - 每页数量
     */
    handleSizeChange(val) {
      this.seekData["pageSize"] = val;
      this.remoteMethod(this.remoteVal);
    },
    /**
     * 分页组件 - 当前页面
     */
    handleCurrentChange(val) {
      this.seekData["pageNum"] = val;
      this.remoteMethod(this.remoteVal);
    },
    /**
     * 上传之前
     */
    handleBeforeUpload(item) {
      if (this.winFormData[item.prop]) {
        if (item.limit <= this.winFormData[item.prop].length) {
          this.$message({
            showClose: true,
            message: `只能上传${item.limit}张图片`,
            type: "error",
          });
          return false;
        } else {
          this.uploadLoadin = true;
          return true;
        }
      } else {
        return true;
      }
    },
    /**
     * 移除图片
     */
    onRemoveImgItem(data, index) {
      this.winFormData[data].splice(index, 1);
    },
    /**
     * 弹窗组件 - 提交表单
     */
    async setDataFn(data) {
      if (this.addOrSet === 1) {
        // 新增
        let queryData = await this.modelConf.butRequestModel.requestData(
          data,
          this.modelConf
        );
        if (queryData === false) return;
        this.buttonAct = true;
        this.modelConf.butRequestModel
          .requestFn(queryData)
          .then((Response) => {
            this.buttonAct = false;
            let res = this.modelConf.butRequestModel.responseData(Response);
            if (res.code === 0) {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "success",
              });
              this.$emit("setTableList", true);
              this.$emit("winCancelFn", false);
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error",
              });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (this.addOrSet === 2) {
        // 编辑
        let queryData = await this.modelConf.butRequestModel.requestData(
          data,
          this.modelConf
        );
        if (queryData === false) return;
        this.buttonAct = true;
        this.modelConf.butRequestModel
          .requestFn(queryData)
          .then((Response) => {
            this.buttonAct = false;
            let res = this.modelConf.butRequestModel.responseData(Response);
            if (res.code === 0) {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "success",
              });
              this.$emit("setTableList", true);
              this.$emit("winCancelFn", false);
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error",
              });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    /**
     * 远程搜索
     */
    remoteMethod(val) {
      this.remoteVal = val;
      if (this.loading === false) {
        console.log(this.modelConf.formConfig);
        const arr = this.modelConf.formConfig.filter(
          (item) => item.type === "select" && item.isRemote === true
        );
        if (arr.length > 0) {
          this.loading = true;
          const api = arr[0].requestModel;
          const queryData = api.requestData({
            ...{ remoteValue: val },
            ...this.winFormData,
            ...this.seekData,
          });
          if (queryData !== false) {
            api.requestFn(queryData).then((response) => {
              const res = api.responseData(response);
              arr[0].option = res.list;
              this.pageTotal = res.total;
              this.loading = false;
            });
          } else {
            this.loading = false;
          }
        }
      }
      return [];
    },
    /**
     * 按钮 - 确定
     */
    confirmFn(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.setDataFn(this.winFormData);
        } else {
          this.$message({
            showClose: true,
            message: "请检查输入内容！",
            type: "error",
          });
          return false;
        }
      });
    },
    /**
     * 按钮 - 关闭
     */
    closeFn() {
      this.$emit("winCancelFn", false);
    },
  },
});

// CONCATENATED MODULE: ./mason-store/Integration/module/dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./mason-store/Integration/module/dialog.vue





/* normalize component */

var dialog_component = normalizeComponent(
  module_dialogvue_type_script_lang_js_,
  dialogvue_type_template_id_6273e6ca_render,
  dialogvue_type_template_id_6273e6ca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dialog = (dialog_component.exports);
// CONCATENATED MODULE: ./mason-store/Integration/index.js
const setModelConf = (data) => {
  let config = {
    ...{
      tableConfig: [],// 常规列表
      formConfig: [],// 表单配置
      formRules: {},// 表单验证
      formData: {},// 表单数据
    },
    ...data
  }
  data.tableConf.map(item => {
    config.tableConfig = [
      ...config.tableConfig,
      {
        activeColor: item.activeColor || "#13ce66", // switch开启颜色
        inactiveColor: item.inactiveColor || "#ff4949", // switch禁用颜色
        activeValue: item.activeValue || '404', // switch启动值
        inactiveValue: item.inactiveValue || '404', // switch禁用值
        activeText: item.activeText || "启用", // switch启动文字
        inactiveText: item.inactiveText || "禁用", // switch禁用颜色
        ...item
      }
    ]
  })
  data.formConf.forEach((item) => {
    const formParamsConf = {
      label: item.label, // 名称
      type: item.type ? item.type : "text", // 类型
      prop: item.prop, // 字段
      maxlength: item.maxlength ? item.maxlength : 32, // 最大长度
      option: item.option, // 下拉选项
      isAddPermit: item.isAddPermit, // 新增时是否允许输入
      isEditPermit: item.isEditPermit, // 修改时是否允许输入
      isRemote: item.isRemote, // 是否允许远程搜索
      required: item.required === false ? false : true, // 是否必填
      limit: item.limit ? item.limit : 1, // 允许上传图片的数量
      dateType: item.dateType || "", // 日期控件类型
      pickerOptions: item.pickerOptions, // 当前时间日期选择器特有的选项参考下表
      requestModel: item.requestModel, // 请求模块
      valueFormat: item.valueFormat || 'yyyy-MM-dd', // 日期选择器 - 返回值格式
      format: item.format || 'yyyy-MM-dd', // 日期选择器 - 显示格式
      searchHidden: item.searchHidden || false, // 搜索区是否隐藏
      dialogHidden: item.dialogHidden || false, // 对话框区是否隐藏
      span: item.span || 24,// 栅格
    }
    // 单独处理图片或富文本上传图片配置
    if (formParamsConf.type === 'img' || formParamsConf.type === 'richtext') {
      const uploadConf = data.requestConf.filter(e => e.type === 'dialog')
      if (uploadConf.length > 0) formParamsConf.requestModel = uploadConf[0].requestModel
    }
    // 表单配置
    config.formConfig = [...config.formConfig, formParamsConf]
    // 表单校验
    config.formRules[item.prop] = [
      {
        required: item.required === false ? false : true,
        message: item.label + "不能为空",
        trigger: item.trigger,
      },
    ];
    // 表单内容
    config.formData[item.prop] = item.type == 'img' ? [] : "";
  });
  if (config.viewConf) {
    config.viewConf.formLabelWidth = config.viewConf.formLabelWidth; // 表单 label 宽度
    config.viewConf.tableMaxHeight = config.viewConf.tableMaxHeight; // 表格最大高度
  } else {
    config.viewConf = {
      formLabelWidth: "80px", // 表单 label 宽度
      tableMaxHeight: "500px", // 表格最大高度
    }
  }
  return config;
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/Integration/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // 新增＆编辑


/* harmony default export */ var Integrationvue_type_script_lang_js_ = ({
  name: "GeneralModel",
  props: {
    requestConf: { type: Array, default: () => [] },
    tableConf: { type: Array, default: () => [] },
    formConf: { type: Array, default: () => [] },
  },
  computed: {},
  components: { WindowModule: dialog },
  data() {
    return {
      isSearchLoading: false, // 是否负载搜索区
      isTableLoading: false, // 是否负载表格
      tableData: [], // 列表内容
      isShowWindow: false, // 弹窗状态
      pageTotal: 0, // 数据总数
      addOrSet: 0, // 新增或者编辑 0：默认 - 1：新增 - 2：编辑
      centerDialogVisible: false, // 确定删除
      remindWinData: {}, // 提示框数据
      selectTableData: [], // 批量处理索引
      isReqLoading: false, // 查询等待
      roleList: [],
      dialogFormData: {},
      topSort: {
        isShow: false,
        title: "置顶排序",
        data: [],
        butConf: {},
      },
      topSortApi: {},
      // 查询 - 条件
      seekData: {
        pageNum: 1,
        pageSize: 10,
      },
      remindWinConf: {
        title: "",
        msg: "",
        code: "",
      },
    };
  },
  computed: {
    modelConf() {
      return setModelConf({
        requestConf: this.requestConf,
        tableConf: this.tableConf,
        formConf: this.formConf,
      });
    },
  },
  methods: {
    // 查询 - 按钮
    seekDataFn(item) {
      this.seekData = { ...this.seekData };
      this.seekData.pageNum = 1;
      this.isReqLoading = true;
      this.getListDataFn(this.seekData);
    },
    // 获取数据
    getListDataFn(seekData) {
      this.isSearchLoading = true;
      try {
        const api = this.modelConf.requestConf.filter(
          (item) => item.name === "search"
        )[0].requestModel;
        let queryData = api.requestData(seekData);
        api
          .requestFn(queryData)
          .then(async (Response) => {
            this.isSearchLoading = false;
            const res = api.responseData(Response);
            this.isReqLoading = false; // 查询等待
            if (res.code === 0) {
              this.pageTotal = res.total;
              this.tableData = res.list;
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error",
              });
            }
          })
          .catch((err) => {
            this.isSearchLoading = false;
            console.error(err);
          });
      } catch (err) {
        console.log(err);
        this.$message({
          showClose: true,
          message: "配置失败，请确保使用正确性！",
          type: "error",
        });
        this.isSearchLoading = false;
      }
    },
    // 重置
    resetForm(formName) {
      this.seekData = {
        pageNum: 1,
        pageSize: 10,
      };
      this.$nextTick(() => {
        this.$refs[formName].resetFields();
      });
      // this.$nextTick(function () {
      //   console.log(this.$refs[formName]);
      // });
    },
    // 列表组件 - 修改
    async onDialogForm(item, requestConf) {
      const {
        name, // 名称
        remindWinConf, // 确认框配置
        isShowRemindWin, // 是否有确认框
        requestModel, // 操作数据请求
        queryOneModel, // 查询单条数据请求
      } = requestConf;
      if (name === "update") {
        // 如果有queryOneModel，会进行先进行查询
        if (queryOneModel) {
          this.isTableLoading = true;
          try {
            const requestData = queryOneModel.requestData(item); // 请求数据
            const responseData = await queryOneModel.requestFn(requestData); // 返回数据
            const res = queryOneModel.responseData(responseData); // 返回数据处理
            this.isTableLoading = false;
            if (res.code === 0) {
              this.addOrSet = 2;
              this.isShowWindow = true;
              this.dialogFormData = Object.assign({}, res.data);
              this.modelConf.butRequestModel = requestModel;
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error",
              });
            }
          } catch (err) {
            console.log(err);
            this.$message({
              showClose: true,
              message: "配置失败，请确保使用正确性！",
              type: "error",
            });
            this.isTableLoading = false;
          }
        } else {
          this.addOrSet = 2;
          this.isShowWindow = true;
          this.dialogFormData = Object.assign({}, item);
          this.modelConf.butRequestModel = requestModel;
        }
      } else if (name === "add") {
        this.addOrSet = 1;
        this.isShowWindow = true;
        this.dialogFormData = Object.assign({}, this.modelConf.formData);
        this.modelConf.butRequestModel = requestModel;
      } else if (isShowRemindWin !== false) {
        if (requestConf) this.centerDialogVisible = true;
        this.remindWinData = item;
        this.remindWinConf = remindWinConf;
      }
    },
    getReqCof(val) {
      const reqConf = this.requestConf.filter((e) => e.prop === val);
      if (reqConf.length > 0) return reqConf[0];
      return {};
    },
    // 表格选择监听
    selectFn(data) {
      this.selectTableData = data;
    },
    // 批量处理
    getSelectTableDataFn() {
      if (this.selectTableData.length === 0) {
        this.$message({
          showClose: true,
          message: "请选择需要批量处理的数据",
          type: "error",
        });
      } else {
        this.$emit("batchList", this.selectTableData);
      }
    },
    // 弹窗 - 确定
    confirmDeleteFn() {
      const brModel = this.modelConf.butRequestModel;
      if (brModel) {
        const { requestFn, responseData, requestData } = brModel;
        requestFn(requestData(this.remindWinData)).then(async (res) => {
          const _res = await responseData(res);
          if (_res.code === 0) {
            this.$message({
              showClose: true,
              message: res.msg,
              type: "success",
            });
            this.getListDataFn(this.seekData);
            this.centerDialogVisible = false;
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: "error",
            });
          }
        });
      }
    },
    // 弹窗 - 取消删除
    cancelDeleteFn() {
      this.centerDialogVisible = false;
      this.$message({
        showClose: true,
        message: "取消操作",
      });
    },
    // 分页组件 - 每页数量
    handleSizeChange(val) {
      this.seekData["pageSize"] = val;
      this.getListDataFn(this.seekData);
    },
    // 分页组件 - 当前页面
    handleCurrentChange(val) {
      this.seekData["pageNum"] = val;
      this.getListDataFn(this.seekData);
    },
    // 弹窗组件 - 关闭
    getWindowCancelFn(windowChiData) {
      this.isShowWindow = windowChiData;
    },
    // 刷新列表
    setTableList(data) {
      if (data === true) {
        this.getListDataFn(this.seekData);
      }
    },
  },
  created() {
    this.getListDataFn(this.seekData);
  },
});

// CONCATENATED MODULE: ./mason-store/Integration/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var mason_store_Integrationvue_type_script_lang_js_ = (Integrationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./mason-store/Integration/index.vue





/* normalize component */

var Integration_component = normalizeComponent(
  mason_store_Integrationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Integration = (Integration_component.exports);
// EXTERNAL MODULE: ./mason-store/styles/index.css
var styles = __webpack_require__("c4ea");

// CONCATENATED MODULE: ./mason-store/index.js




function install(Vue) {
  var components = [Integration];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


/* harmony default export */ var mason_store = ({
  install: install,
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (mason_store);



/***/ })

/******/ });
});