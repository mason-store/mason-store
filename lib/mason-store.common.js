module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "c4ea":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"787b2732-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/Integration/index.vue?vue&type=template&id=c3013764&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"general"},[_c('div',{staticClass:"general-seek"},[_c('div',{staticClass:"seek-buttons"},[_vm._l((_vm.modelConf.mainButton),function(item,index){return _c('span',{key:index},[(item.isShow !== false)?_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(item.type === 'add'),expression:"item.type === 'add'"}],attrs:{"size":"mini","type":"primary","plain":"","icon":item.icon ? item.icon : 'el-icon-plus'},on:{"click":function($event){return _vm.onTableButFn(false, item)}}},[_vm._v(" "+_vm._s(item.label)+" ")]):_vm._e(),(item.isShow !== false)?_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(item.type === 'topSort'),expression:"item.type === 'topSort'"}],attrs:{"size":"mini","type":"primary","plain":"","icon":item.icon ? item.icon : 'el-icon-plus'},on:{"click":function($event){return _vm.onShowTopSort(item)}}},[_vm._v(" "+_vm._s(item.label)+" ")]):_vm._e()],1)}),_vm._t("mainbuts")],2),_c('el-form',{staticClass:"seek-condition",attrs:{"inline":true,"model":_vm.seekData}},[_vm._l((_vm.modelConf.seekConfig),function(item,index){return _c('div',{key:index,staticClass:"seek-form-box"},[(item.type === 'date')?_c('el-form-item',{attrs:{"label":item.label}},[_c('el-date-picker',{attrs:{"type":item.dateType,"placeholder":'选择' + item.label,"size":"mini","range-separator":"至","start-placeholder":'开始' + item.label,"end-placeholder":'结束' + item.label,"picker-options":item.pickerOptions},model:{value:(_vm.seekData[item.prop]),callback:function ($$v) {_vm.$set(_vm.seekData, item.prop, $$v)},expression:"seekData[item.prop]"}})],1):_vm._e(),(item.type === 'cascader')?_c('el-form-item',{attrs:{"label":item.label}},[_c('el-cascader',{attrs:{"clearable":true,"size":"mini","placeholder":'请选择' + item.label,"options":item.option,"filterable":""},model:{value:(_vm.seekData[item.prop]),callback:function ($$v) {_vm.$set(_vm.seekData, item.prop, $$v)},expression:"seekData[item.prop]"}})],1):(item.type === 'text')?_c('el-form-item',{attrs:{"label":item.label}},[_c('el-input',{attrs:{"clearable":"","show-word-limit":"","size":"mini","maxlength":item.maxlength,"placeholder":'请输入' + item.label},model:{value:(_vm.seekData[item.prop]),callback:function ($$v) {_vm.$set(_vm.seekData, item.prop, $$v)},expression:"seekData[item.prop]"}})],1):(item.type === 'select')?_c('el-form-item',{attrs:{"label":item.label}},[_c('el-select',{attrs:{"placeholder":'请选择' + item.label,"size":"mini","filterable":"","clearable":true},model:{value:(_vm.seekData[item.prop]),callback:function ($$v) {_vm.$set(_vm.seekData, item.prop, $$v)},expression:"seekData[item.prop]"}},_vm._l((item.option),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1):_vm._e()],1)}),_c('el-form-item',{staticClass:"seek-form-box"},_vm._l((_vm.modelConf.mainButton),function(item,index){return (item.isShow !== false && item.type == 'query')?_c('el-button',{key:index,attrs:{"size":"mini","type":"primary","plain":"","icon":item.icon ? item.icon : 'el-icon-search',"loading":_vm.isReqLoading},on:{"click":function($event){return _vm.seekDataFn(item)}}},[_vm._v(" "+_vm._s(item.label)+" ")]):_vm._e()}),1)],2)],1),_c('div',{staticClass:"general-table"},[_c('div',{staticClass:"table"},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"border":true,"size":"mini","max-height":_vm.modelConf.viewConf.tableMaxHeight},on:{"selection-change":_vm.selectFn}},[_c('el-table-column',{attrs:{"type":"selection","width":"40"}}),_vm._l((_vm.modelConf.tableConfig),function(item,index){return _c('el-table-column',{key:index,attrs:{"show-overflow-tooltip":"","sortable":item.isSortable,"label":item.label,"width":item.width,"prop":item.prop,"fixed":item.fiexd},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(item.type == 'tag')?_c('div',_vm._l((scope.row[item.prop]),function(tagItem,tagIndex){return _c('el-tag',{key:tagIndex,staticClass:"common-table-tag",attrs:{"type":tagItem.type}},[_vm._v(" "+_vm._s(tagItem.label)+" ")])}),1):(item.type == 'image' || item.type == 'images' || item.type == 'img')?_c('el-image',{staticStyle:{"width":"100%","height":"auto"},attrs:{"src":scope.row[item.prop][0],"fit":"contain"}}):(item.type === 'operation')?_c('div',_vm._l((item.buttons),function(item,index){return _c('div',{key:index,staticClass:"table-but"},[(item.type === 'button' && item.isShow(scope.row))?_c('div',{attrs:{"placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":item.icon,"type":"primary","size":"mini","plain":""},on:{"click":function($event){return _vm.onTableButFn(scope.row, item)}}},[_vm._v(" "+_vm._s(item.label)+" ")])],1):_vm._e()])}),0):_c('div',[_vm._v(_vm._s(scope.row[item.prop]))])]}}],null,true)})})],2),_c('div',{staticClass:"page"},[_c('el-pagination',{attrs:{"current-page":_vm.seekData.pageNum,"page-sizes":[10, 30, 50, 100],"layout":"total, sizes, prev, pager, next, jumper","total":_vm.pageTotal},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1),_c('el-dialog',{attrs:{"title":_vm.remindWinConf.title,"visible":_vm.centerDialogVisible,"width":"30%","center":""},on:{"update:visible":function($event){_vm.centerDialogVisible=$event}}},[_c('span',[_vm._v(_vm._s(_vm.remindWinConf.msg))]),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.cancelDeleteFn}},[_vm._v(" 取消 ")]),_c('el-button',{attrs:{"type":"primary","plain":"","size":"mini","disabled":_vm.isReqLoading,"loading":_vm.isReqLoading},on:{"click":function($event){return _vm.confirmDeleteFn()}}},[_vm._v(" 确定 ")])],1)])],1)]),_c('div',{staticClass:"general-window"},[_c('WindowModule',{attrs:{"show-window":_vm.isShowWindow,"form-data":_vm.dialogFormData,"add-or-set":_vm.addOrSet,"modelConf":_vm.modelConf},on:{"winCancelFn":_vm.getWindowCancelFn,"setTableList":_vm.setTableList}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./mason-store/Integration/index.vue?vue&type=template&id=c3013764&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"787b2732-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mason-store/Integration/module/dialog.vue?vue&type=template&id=5f284a22&
var dialogvue_type_template_id_5f284a22_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"general-dialog"},[_c('el-dialog',{attrs:{"width":"80%","title":_vm.winText,"destroy-on-close":true,"visible":_vm.showFormBox,"close-on-click-modal":false},on:{"update:visible":function($event){_vm.showFormBox=$event},"close":_vm.closeFn}},[_c('div',[_c('el-form',{ref:"winFormData",staticClass:"seek-ruleForm",attrs:{"label-width":_vm.modelConf.viewConf.formLabelWidth,"model":_vm.winFormData,"rules":_vm.modelConf.formRules}},[_c('el-row',[_vm._l((_vm.modelConf.formConfig),function(item,index){return _c('el-col',{key:index,attrs:{"span":item.span}},[(item.type === 'form-title')?_c('div',[_c('el-divider',[_vm._v(_vm._s(item.label))])],1):_vm._e(),(item.type === 'text' || item.type === 'textarea')?_c('el-form-item',{attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
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
                  : item.prop}},[_c('el-date-picker',{attrs:{"type":item.dateType,"placeholder":'选择' + item.label,"size":"mini","range-separator":"至","start-placeholder":'开始' + item.label,"end-placeholder":'结束' + item.label,"picker-options":item.pickerOptions,"value-format":item.valueFormat,"format":item.format},model:{value:(_vm.winFormData[item.prop]),callback:function ($$v) {_vm.$set(_vm.winFormData, item.prop, $$v)},expression:"winFormData[item.prop]"}})],1):_vm._e(),(item.type === 'cascader')?_c('el-form-item',{attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
                (_vm.winText === '编辑' && item.isEditPermit === false)
                  ? ''
                  : item.prop}},[_c('el-cascader',{attrs:{"clearable":true,"size":"mini","placeholder":'请选择' + item.label,"options":item.option,"filterable":""},model:{value:(_vm.winFormData[item.prop]),callback:function ($$v) {_vm.$set(_vm.winFormData, item.prop, $$v)},expression:"winFormData[item.prop]"}})],1):_vm._e(),(item.type === 'img')?_c('el-form-item',{staticClass:"img-upload-box",attrs:{"label":item.label,"prop":(_vm.winText === '新增' && item.isAddPermit === false) ||
                (_vm.winText === '编辑' && item.isEditPermit === false)
                  ? ''
                  : item.prop}},[_vm._l((_vm.winFormData[item.prop]),function(imgItem,imgIndex){return _c('div',{key:imgIndex,staticClass:"dialog-img"},[_c('el-image',{attrs:{"preview-src-list":_vm.winFormData[item.prop],"z-index":imgIndex + 1,"src":imgItem}}),_c('span',{staticClass:"cancel",on:{"click":function($event){return _vm.onRemoveImgItem(item.prop, imgIndex)}}},[_vm._v(" × ")])],1)}),(_vm.winFormData[item.prop] ? (_vm.winFormData[item.prop].length < item.limit ? true : false) : false)?_c('el-upload',{staticClass:"picture dialog-img",attrs:{"list-type":"picture-card","accept":".jpg, .png","name":item.requestModel.uploadName,"action":item.requestModel.requestFn,"auto-upload":true,"show-file-list":false,"headers":item.requestModel.uploadHeaders,"on-success":function (response, file, fileList) { return _vm.handleUploadSuc(item, response, file, fileList); },"before-upload":function (response, file, fileList) { return _vm.handleBeforeUpload(item, response, file, fileList); }}},[_c('el-button',{attrs:{"size":"mini","plain":"","type":"primary","loading":_vm.uploadLoadin}},[_vm._v(" 上传图片 ")])],1):_vm._e()],2):_vm._e()],1)}),_vm._t("form")],2)],1)],1),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.closeFn}},[_vm._v(" 取消 ")]),_c('el-button',{attrs:{"plain":"","type":"primary","size":"mini","disabled":_vm.buttonAct,"loading":_vm.buttonAct},on:{"click":function($event){return _vm.confirmFn('winFormData')}}},[_vm._v(" 确定 ")])],1)])],1)}
var dialogvue_type_template_id_5f284a22_staticRenderFns = []


// CONCATENATED MODULE: ./mason-store/Integration/module/dialog.vue?vue&type=template&id=5f284a22&

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

/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
  name: 'general-dialog',
  props: ['showWindow', 'formData', 'addOrSet', 'modelConf'],
  data() {
    return {
      buttonAct: false, // 激活按钮
      showFormBox: false, // 子组件 - 显示状态
      resumeBeginDate: [], // 时间范围
      winFormData: {}, // 弹窗表单
      formDataName: '', // TS 类型转换
      winText: '-', // 弹窗文字
      uploadLoadin: false, // 上传图片等待
      loading: false,
      seekData: {
        pageNum: 1,
        pageSize: 10,
      },
      pageTotal: 0,
    }
  },
  watch: {
    showWindow: {
      handler(val, oldVal) {
        this.showFormBox = val
        // 监听父组件显示状态，关联子组件显示状态。避免修改到父组件的值
        if (val === true) {
          // 重置验证
          this.formDataName = this.$refs['winFormData']
          if (this.formDataName) {
            this.formDataName.resetFields()
          }
          // 新增 - 编辑
          if (this.addOrSet === 1) {
            this.winText = '新增'
            this.winFormData = { ...this.formData }
          } else if (this.addOrSet === 2) {
            this.winText = '编辑'
            this.winFormData = { ...this.formData }
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
      const res = item.requestModel.responseData(response)
      if (res.code === 0) {
        this.winFormData[item.prop] = this.winFormData[item.prop] || []
        this.winFormData[item.prop] = [...this.winFormData[item.prop], ...[res.path]]
        this.uploadLoadin = false
        this.$message({
          showClose: true,
          message: res.msg || '上传成功',
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: res.msg || '上传失败',
          type: 'error',
        })
      }
    },
    /**
     * 分页组件 - 每页数量
     */
    handleSizeChange(val) {
      this.seekData['pageSize'] = val
      this.remoteMethod(this.remoteVal)
    },
    /**
     * 分页组件 - 当前页面
     */
    handleCurrentChange(val) {
      this.seekData['pageNum'] = val
      this.remoteMethod(this.remoteVal)
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
            type: 'error',
          })
          return false
        } else {
          this.uploadLoadin = true
          return true
        }
      } else {
        return true
      }
    },
    /**
     * 移除图片
     */
    onRemoveImgItem(data, index) {
      this.winFormData[data].splice(index, 1)
    },
    /**
     * 弹窗组件 - 提交表单
     */
    async setDataFn(data) {
      if (this.addOrSet === 1) {
        // 新增
        let queryData = await this.modelConf.butRequestModel.requestData(data, this.modelConf)
        if (queryData === false) return
        this.buttonAct = true
        this.modelConf.butRequestModel
          .requestFn(queryData)
          .then((Response) => {
            this.buttonAct = false
            let res = this.modelConf.butRequestModel.responseData(Response)
            if (res.code === 0) {
              this.$message({
                showClose: true,
                message: res.msg,
                type: 'success',
              })
              this.$emit('setTableList', true)
              this.$emit('winCancelFn', false)
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: 'error',
              })
            }
          })
          .catch((err) => {
            console.error(err)
          })
      } else if (this.addOrSet === 2) {
        // 编辑
        let queryData = await this.modelConf.butRequestModel.requestData(data, this.modelConf)
        if (queryData === false) return
        this.buttonAct = true
        this.modelConf.butRequestModel
          .requestFn(queryData)
          .then((Response) => {
            this.buttonAct = false
            let res = this.modelConf.butRequestModel.responseData(Response)
            if (res.code === 0) {
              this.$message({
                showClose: true,
                message: res.msg,
                type: 'success',
              })
              this.$emit('setTableList', true)
              this.$emit('winCancelFn', false)
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: 'error',
              })
            }
          })
          .catch((err) => {
            console.error(err)
          })
      }
    },
    /**
     * 远程搜索
     */
    remoteMethod(val) {
      this.remoteVal = val
      if (this.loading === false) {
        const arr = this.modelConf.formConfig.filter((item) => item.type === 'select' && item.isRemote === true)
        if (arr.length > 0) {
          this.loading = true
          const api = arr[0].requestModel
          const queryData = api.requestData({
            ...{ remoteValue: val },
            ...this.winFormData,
            ...this.seekData,
          })
          if (queryData !== false) {
            api.requestFn(queryData).then((response) => {
              const res = api.responseData(response)
              arr[0].option = res.list
              this.pageTotal = res.total
              this.loading = false
            })
          } else {
            this.loading = false
          }
        }
      }
      return []
    },
    /**
     * 按钮 - 确定
     */
    confirmFn(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.setDataFn(this.winFormData)
        } else {
          this.$message({
            showClose: true,
            message: '请检查输入内容！',
            type: 'error',
          })
          return false
        }
      })
    },
    /**
     * 按钮 - 关闭
     */
    closeFn() {
      this.$emit('winCancelFn', false)
    },
  },
});

// CONCATENATED MODULE: ./mason-store/Integration/module/dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./mason-store/Integration/module/dialog.vue





/* normalize component */

var component = normalizeComponent(
  module_dialogvue_type_script_lang_js_,
  dialogvue_type_template_id_5f284a22_render,
  dialogvue_type_template_id_5f284a22_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dialog = (component.exports);
// CONCATENATED MODULE: ./mason-store/Integration/index.js
const setModelConf = (data) => {
  let config = {
    ...{
      tableConfig: data.tabelConf,// 常规列表
      seekConfig: [],// 查询配置
      formConfig: [],// 表单配置
      formRules: {},// 表单验证
      formData: {},// 表单数据
    },
    ...data
  }
  data.formConf.forEach((item) => {
    if (item.isSeek !== false) {
      // 搜索区配置
      config.seekConfig.push({
        label: item.label,
        type: item.type ? item.type : "text",
        prop: item.prop,
        maxlength: item.maxlength ? item.maxlength : 32,
        option: item.option,
        dateType: item.dateType || "",
        pickerOptions: item.pickerOptions,
      });
    }
    // 表单配置
    if (item.isForm !== false) {
      config.formConfig.push({
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
        span: item.span || 24
      });
      config.formRules[item.prop] = [
        {
          required: item.required === false ? false : true,
          message: item.label + "不能为空",
          trigger: item.trigger,
        },
      ];
      config.formData[item.prop] = item.type == 'img' ? [] : "";
    }
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

 // 新增＆编辑


/* harmony default export */ var Integrationvue_type_script_lang_js_ = ({
  name: 'GeneralModel',
  props: ['data', 'fieldConfig'],
  computed: {},
  components: { WindowModule: dialog },
  data() {
    return {
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
      previewData: {
        title: '',
        data: '',
        isShow: false,
      },
      topSort: {
        isShow: false,
        title: '置顶排序',
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
        title: '',
        msg: '',
        code: '',
      },
    }
  },
  computed: {
    modelConf() {
      return setModelConf(this.data)
    },
  },
  methods: {
    onShowTopSort(item) {
      this.topSort.isShow = true
      this.topSort.butConf = item
      this.topSortApi = item.requestModel
    },
    // 查询 - 按钮
    seekDataFn(item) {
      this.seekData = { ...this.seekData }
      this.seekData.pageNum = 1
      this.isReqLoading = true
      this.getListDataFn(this.seekData)
    },
    // 获取数据
    getListDataFn(seekData) {
      const api = this.modelConf.mainButton.filter((item) => item.type === 'query')[0].requestModel
      let queryData = api.requestData(seekData)
      api
        .requestFn(queryData)
        .then(async (Response) => {
          const res = api.responseData(Response)
          this.isReqLoading = false // 查询等待
          if (res.code === 0) {
            this.pageTotal = res.total
            this.tableData = res.list
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: 'error',
            })
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
    // 列表组件 - 修改
    onTableButFn(item, butConf) {
      this.modelConf.butRequestModel = butConf.requestModel
      if (butConf.code === 'edit') {
        this.addOrSet = 2
        this.isShowWindow = true
        this.dialogFormData = Object.assign({}, item)
      } else if (butConf.code === 'add') {
        this.addOrSet = 1
        this.isShowWindow = true
        this.dialogFormData = Object.assign({}, this.modelConf.formData)
      } else if (butConf.code === 'preview') {
        this.previewData = {
          title: '预览',
          isShow: true,
          data: item,
          butConf: butConf,
        }
      } else if (butConf.isShowRemindWin !== false) {
        this.centerDialogVisible = true
        this.remindWinData = item
        this.remindWinConf = butConf.remindWinConf
      }
    },
    // 表格选择监听
    selectFn(data) {
      this.selectTableData = data
    },
    // 批量处理
    getSelectTableDataFn() {
      if (this.selectTableData.length === 0) {
        this.$message({
          showClose: true,
          message: '请选择需要批量处理的数据',
          type: 'error',
        })
      } else {
        this.$emit('batchList', this.selectTableData)
      }
    },
    // 弹窗 - 确定
    confirmDeleteFn() {
      const brModel = this.modelConf.butRequestModel
      if (brModel) {
        const { requestFn, responseData, requestData } = brModel
        requestFn(requestData(this.remindWinData)).then(async (res) => {
          const _res = await responseData(res)
          if (_res.code === 0) {
            this.$message({
              showClose: true,
              message: res.msg,
              type: 'success',
            })
            this.getListDataFn(this.seekData)
            this.centerDialogVisible = false
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: 'error',
            })
          }
        })
      }
    },
    // 弹窗 - 取消删除
    cancelDeleteFn() {
      this.centerDialogVisible = false
      this.$message({
        showClose: true,
        message: '取消操作',
      })
    },
    // 分页组件 - 每页数量
    handleSizeChange(val) {
      this.seekData['pageSize'] = val
      this.getListDataFn(this.seekData)
    },
    // 分页组件 - 当前页面
    handleCurrentChange(val) {
      this.seekData['pageNum'] = val
      this.getListDataFn(this.seekData)
    },
    // 弹窗组件 - 关闭
    getWindowCancelFn(windowChiData) {
      this.isShowWindow = windowChiData
    },
    // 刷新列表
    setTableList(data) {
      if (data === true) {
        this.getListDataFn(this.seekData)
      }
    },
  },
  created() {
    this.getListDataFn(this.seekData)
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