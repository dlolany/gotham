exports.ids = [4];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tables/_id.vue?vue&type=template&id=30ce8144&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode(_vm._ssrEscape("\n" + _vm._s(_vm.table.table_number) + "\n    ") + "<p>" + _vm._ssrEscape(_vm._s(_vm.table.description)) + "</p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/tables/_id.vue?vue&type=template&id=30ce8144&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tables/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      table: {}
    };
  },
  mounted() {
    this.fetchTable();
  },
  methods: {
    fetchTable() {
      const tableId = this.$route.params.id;
      // Make API request to fetch a single table
      this.$axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:W5s58OFL/tables/${tableId}`).then(response => {
        this.table = response.data;
      }).catch(error => {
        console.error('Error fetching table:', error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/tables/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var tables_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/tables/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tables_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05f81a31"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map