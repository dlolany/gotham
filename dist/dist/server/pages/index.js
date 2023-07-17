exports.ids = [3,2];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tutorial.vue?vue&type=template&id=76cd717e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<h1>Tables</h1> <ul><div class=\"flex flex-col w-[100%] items-center gap-[50px]\">" + _vm._ssrList(_vm.tables, function (table) {
    return "<div class=\"w-[90%] h-[50px] flex items-center justify-center bg-black cursor-pointer\"><p class=\"text-white\">" + _vm._ssrEscape(_vm._s(table.table_number)) + "</p></div>";
  }) + "</div></ul>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Tutorial.vue?vue&type=template&id=76cd717e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tutorial.vue?vue&type=script&lang=js&
/* harmony default export */ var Tutorialvue_type_script_lang_js_ = ({
  data() {
    return {
      tables: []
    };
  },
  mounted() {
    this.fetchTables();
  },
  methods: {
    fetchTables() {
      this.$axios.get('https://x8ki-letl-twmt.n7.xano.io/api:W5s58OFL/tables').then(response => {
        this.tables = response.data;
      }).catch(error => {
        console.error('Error fetching tables:', error);
      });
    },
    navigateToTable(tableId) {
      this.$router.push(`/tables/${tableId}`);
    }
  }
});
// CONCATENATED MODULE: ./components/Tutorial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tutorialvue_type_script_lang_js_ = (Tutorialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Tutorial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tutorialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "db27545e"
  
)

/* harmony default export */ var Tutorial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=52e0077b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Tutorial');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=52e0077b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage'
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c14ad77e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Tutorial: __webpack_require__(24).default})


/***/ })

};;
//# sourceMappingURL=index.js.map