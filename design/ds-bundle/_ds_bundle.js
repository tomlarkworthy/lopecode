/* @ds-bundle: {"namespace":"LopecodeDS","components":[{"name":"Button","sourcePath":"components/general/Button/Button.jsx"},{"name":"Checkbox","sourcePath":"components/general/Checkbox/Checkbox.jsx"},{"name":"Color","sourcePath":"components/general/Color/Color.jsx"},{"name":"DateInput","sourcePath":"components/general/DateInput/DateInput.jsx"},{"name":"DatetimeInput","sourcePath":"components/general/DatetimeInput/DatetimeInput.jsx"},{"name":"FileInput","sourcePath":"components/general/FileInput/FileInput.jsx"},{"name":"Form","sourcePath":"components/general/Form/Form.jsx"},{"name":"NumberInput","sourcePath":"components/general/NumberInput/NumberInput.jsx"},{"name":"Radio","sourcePath":"components/general/Radio/Radio.jsx"},{"name":"Range","sourcePath":"components/general/Range/Range.jsx"},{"name":"Search","sourcePath":"components/general/Search/Search.jsx"},{"name":"Select","sourcePath":"components/general/Select/Select.jsx"},{"name":"Table","sourcePath":"components/general/Table/Table.jsx"},{"name":"TextareaInput","sourcePath":"components/general/TextareaInput/TextareaInput.jsx"},{"name":"TextInput","sourcePath":"components/general/TextInput/TextInput.jsx"},{"name":"Theme","sourcePath":"components/general/Theme/Theme.jsx"},{"name":"Toggle","sourcePath":"components/general/Toggle/Toggle.jsx"}],"sourceHashes":{"components/general/Button/Button.jsx":"e4821513d2fa","components/general/Button/Button.d.ts":"773d4c30e9ce","components/general/Button/Button.prompt.md":"2e55d6788023","components/general/Checkbox/Checkbox.jsx":"de1c4793be0f","components/general/Checkbox/Checkbox.d.ts":"6780ace15a95","components/general/Checkbox/Checkbox.prompt.md":"aab3544fda12","components/general/Color/Color.jsx":"8c5c47cc242f","components/general/Color/Color.d.ts":"a2fe2606e35a","components/general/Color/Color.prompt.md":"5230e0a4ab87","components/general/DateInput/DateInput.jsx":"9dbc9b56d401","components/general/DateInput/DateInput.d.ts":"4686b82de037","components/general/DateInput/DateInput.prompt.md":"c798c4a33fec","components/general/DatetimeInput/DatetimeInput.jsx":"4f7ccc5923d9","components/general/DatetimeInput/DatetimeInput.d.ts":"ad2b7965f134","components/general/DatetimeInput/DatetimeInput.prompt.md":"4f1a56b6c3cf","components/general/FileInput/FileInput.jsx":"5de068a465e0","components/general/FileInput/FileInput.d.ts":"b4353a1979fa","components/general/FileInput/FileInput.prompt.md":"da80abc7a7b7","components/general/Form/Form.jsx":"c368f2b85102","components/general/Form/Form.d.ts":"d6d5ecc13127","components/general/Form/Form.prompt.md":"fbed5d142bd7","components/general/NumberInput/NumberInput.jsx":"106d0ecba045","components/general/NumberInput/NumberInput.d.ts":"a3187604031d","components/general/NumberInput/NumberInput.prompt.md":"315705c03160","components/general/Radio/Radio.jsx":"54d49d9aa099","components/general/Radio/Radio.d.ts":"6858c99554c0","components/general/Radio/Radio.prompt.md":"ec3380cc13ee","components/general/Range/Range.jsx":"d91eb8b3d1ae","components/general/Range/Range.d.ts":"58ded5e08def","components/general/Range/Range.prompt.md":"392d1a138041","components/general/Search/Search.jsx":"b946cb32662a","components/general/Search/Search.d.ts":"ff30dc573759","components/general/Search/Search.prompt.md":"52da6d2a4164","components/general/Select/Select.jsx":"cb297a978152","components/general/Select/Select.d.ts":"e0c58c97ff65","components/general/Select/Select.prompt.md":"bffb319af1d3","components/general/Table/Table.jsx":"733ba6a715ef","components/general/Table/Table.d.ts":"ad946da66ea1","components/general/Table/Table.prompt.md":"1dc893f1e514","components/general/TextareaInput/TextareaInput.jsx":"5b83f71ae846","components/general/TextareaInput/TextareaInput.d.ts":"7a0b3d1548d5","components/general/TextareaInput/TextareaInput.prompt.md":"68d81a553195","components/general/TextInput/TextInput.jsx":"b0d1afd0cf14","components/general/TextInput/TextInput.d.ts":"a043ac860e14","components/general/TextInput/TextInput.prompt.md":"995f9385bbfa","components/general/Theme/Theme.jsx":"699a418568bf","components/general/Theme/Theme.d.ts":"cbb0fd4978a6","components/general/Theme/Theme.prompt.md":"4bb82cdaa60c","components/general/Toggle/Toggle.jsx":"30d460eac0f6","components/general/Toggle/Toggle.d.ts":"276f94f2f36f","components/general/Toggle/Toggle.prompt.md":"ce2a156c2a51"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var LopecodeDS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx2(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs : jsx2)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/index.js
  var index_exports = {};
  __export(index_exports, {
    Button: () => Button,
    Checkbox: () => Checkbox,
    Color: () => Color,
    DateInput: () => DateInput,
    DatetimeInput: () => DatetimeInput,
    FileInput: () => FileInput,
    Form: () => Form,
    Inputs: () => dist_exports,
    NumberInput: () => NumberInput,
    Radio: () => Radio,
    Range: () => Range,
    Search: () => Search,
    Select: () => Select,
    Table: () => Table,
    TextInput: () => TextInput,
    TextareaInput: () => TextareaInput,
    Theme: () => Theme,
    Toggle: () => Toggle
  });
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim(), 1);
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var __defProp2 = Object.defineProperty;
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var dist_exports = {};
  __export2(dist_exports, {
    bind: () => bind,
    button: () => button,
    checkbox: () => checkbox,
    color: () => color,
    date: () => date,
    datetime: () => datetime,
    disposal: () => disposal,
    email: () => email,
    file: () => file,
    form: () => form,
    formatAuto: () => formatAuto,
    formatDate: () => formatDate$1,
    formatLocaleAuto: () => formatLocaleAuto,
    formatLocaleNumber: () => formatLocaleNumber,
    formatNumber: () => formatNumber,
    formatTrim: () => formatTrim,
    input: () => input,
    number: () => number,
    password: () => password,
    radio: () => radio,
    range: () => range,
    search: () => search,
    searchFilter: () => searchFilter,
    select: () => select,
    table: () => table,
    tel: () => tel,
    text: () => text,
    textarea: () => textarea,
    toggle: () => toggle,
    url: () => url
  });
  function renderHtml(string) {
    const template = document.createElement("template");
    template.innerHTML = string;
    return document.importNode(template.content, true);
  }
  function renderSvg(string) {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.innerHTML = string;
    return g;
  }
  var html = Object.assign(hypertext(renderHtml, (fragment) => {
    if (fragment.firstChild === null) return null;
    if (fragment.firstChild === fragment.lastChild) return fragment.removeChild(fragment.firstChild);
    const span = document.createElement("span");
    span.appendChild(fragment);
    return span;
  }), { fragment: hypertext(renderHtml, (fragment) => fragment) });
  var svg = Object.assign(hypertext(renderSvg, (g) => {
    if (g.firstChild === null) return null;
    if (g.firstChild === g.lastChild) return g.removeChild(g.firstChild);
    return g;
  }), { fragment: hypertext(renderSvg, (g) => {
    const fragment = document.createDocumentFragment();
    while (g.firstChild) fragment.appendChild(g.firstChild);
    return fragment;
  }) });
  var CODE_TAB = 9;
  var CODE_LF = 10;
  var CODE_FF = 12;
  var CODE_CR = 13;
  var CODE_SPACE = 32;
  var CODE_UPPER_A = 65;
  var CODE_UPPER_Z = 90;
  var CODE_LOWER_A = 97;
  var CODE_LOWER_Z = 122;
  var CODE_LT = 60;
  var CODE_GT = 62;
  var CODE_SLASH = 47;
  var CODE_DASH = 45;
  var CODE_BANG = 33;
  var CODE_EQ = 61;
  var CODE_DQUOTE = 34;
  var CODE_SQUOTE = 39;
  var CODE_QUESTION = 63;
  var STATE_DATA = 1;
  var STATE_TAG_OPEN = 2;
  var STATE_END_TAG_OPEN = 3;
  var STATE_TAG_NAME = 4;
  var STATE_BOGUS_COMMENT = 5;
  var STATE_BEFORE_ATTRIBUTE_NAME = 6;
  var STATE_AFTER_ATTRIBUTE_NAME = 7;
  var STATE_ATTRIBUTE_NAME = 8;
  var STATE_BEFORE_ATTRIBUTE_VALUE = 9;
  var STATE_ATTRIBUTE_VALUE_DOUBLE_QUOTED = 10;
  var STATE_ATTRIBUTE_VALUE_SINGLE_QUOTED = 11;
  var STATE_ATTRIBUTE_VALUE_UNQUOTED = 12;
  var STATE_AFTER_ATTRIBUTE_VALUE_QUOTED = 13;
  var STATE_SELF_CLOSING_START_TAG = 14;
  var STATE_COMMENT_START = 15;
  var STATE_COMMENT_START_DASH = 16;
  var STATE_COMMENT = 17;
  var STATE_COMMENT_LESS_THAN_SIGN = 18;
  var STATE_COMMENT_LESS_THAN_SIGN_BANG = 19;
  var STATE_COMMENT_LESS_THAN_SIGN_BANG_DASH = 20;
  var STATE_COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 21;
  var STATE_COMMENT_END_DASH = 22;
  var STATE_COMMENT_END = 23;
  var STATE_COMMENT_END_BANG = 24;
  var STATE_MARKUP_DECLARATION_OPEN = 25;
  var STATE_RAWTEXT = 26;
  var STATE_RAWTEXT_LESS_THAN_SIGN = 27;
  var STATE_RAWTEXT_END_TAG_OPEN = 28;
  var STATE_RAWTEXT_END_TAG_NAME = 29;
  var SHOW_COMMENT = 128;
  var SHOW_ELEMENT = 1;
  var TYPE_COMMENT = 8;
  var TYPE_ELEMENT = 1;
  var NS_SVG = "http://www.w3.org/2000/svg";
  var NS_XLINK = "http://www.w3.org/1999/xlink";
  var NS_XML = "http://www.w3.org/XML/1998/namespace";
  var NS_XMLNS = "http://www.w3.org/2000/xmlns/";
  var svgAdjustAttributes = new Map([
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
  ].map((name) => [name.toLowerCase(), name]));
  var svgForeignAttributes = /* @__PURE__ */ new Map([
    ["xlink:actuate", NS_XLINK],
    ["xlink:arcrole", NS_XLINK],
    ["xlink:href", NS_XLINK],
    ["xlink:role", NS_XLINK],
    ["xlink:show", NS_XLINK],
    ["xlink:title", NS_XLINK],
    ["xlink:type", NS_XLINK],
    ["xml:lang", NS_XML],
    ["xml:space", NS_XML],
    ["xmlns", NS_XMLNS],
    ["xmlns:xlink", NS_XMLNS]
  ]);
  function hypertext(render, postprocess) {
    return function({ raw: strings }) {
      let state = STATE_DATA;
      let string = "";
      let tagNameStart;
      let tagName;
      let attributeNameStart;
      let attributeNameEnd;
      let nodeFilter = 0;
      for (let j = 0, m = arguments.length; j < m; ++j) {
        const input2 = strings[j];
        if (j > 0) {
          const value = arguments[j];
          switch (state) {
            case STATE_RAWTEXT: {
              if (value != null) {
                const text2 = `${value}`;
                if (isEscapableRawText(tagName)) {
                  string += text2.replace(/[<]/g, entity);
                } else if (new RegExp(`</${tagName}[\\s>/]`, "i").test(string.slice(-tagName.length - 2) + text2)) {
                  throw new Error("unsafe raw text");
                } else {
                  string += text2;
                }
              }
              break;
            }
            case STATE_DATA: {
              if (value == null) {
              } else if (value instanceof Node || typeof value !== "string" && value[Symbol.iterator] || /(?:^|>)$/.test(strings[j - 1]) && /^(?:<|$)/.test(input2)) {
                string += "<!--::" + j + "-->";
                nodeFilter |= SHOW_COMMENT;
              } else {
                string += `${value}`.replace(/[<&]/g, entity);
              }
              break;
            }
            case STATE_BEFORE_ATTRIBUTE_VALUE: {
              state = STATE_ATTRIBUTE_VALUE_UNQUOTED;
              let text2;
              if (/^[\s>]/.test(input2)) {
                if (value == null || value === false) {
                  string = string.slice(0, attributeNameStart - strings[j - 1].length);
                  break;
                }
                if (value === true || (text2 = `${value}`) === "") {
                  string += "''";
                  break;
                }
                const name = strings[j - 1].slice(attributeNameStart, attributeNameEnd);
                if (name === "style" && isObjectLiteral(value) || typeof value === "function") {
                  string += "::" + j;
                  nodeFilter |= SHOW_ELEMENT;
                  break;
                }
              }
              if (text2 === void 0) text2 = `${value}`;
              if (text2 === "") throw new Error("unsafe unquoted empty string");
              string += text2.replace(/^['"]|[\s>&]/g, entity);
              break;
            }
            case STATE_ATTRIBUTE_VALUE_UNQUOTED: {
              string += `${value}`.replace(/[\s>&]/g, entity);
              break;
            }
            case STATE_ATTRIBUTE_VALUE_SINGLE_QUOTED: {
              string += `${value}`.replace(/['&]/g, entity);
              break;
            }
            case STATE_ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
              string += `${value}`.replace(/["&]/g, entity);
              break;
            }
            case STATE_BEFORE_ATTRIBUTE_NAME: {
              if (isObjectLiteral(value)) {
                string += "::" + j + "=''";
                nodeFilter |= SHOW_ELEMENT;
                break;
              }
              throw new Error("invalid binding");
            }
            case STATE_COMMENT:
              break;
            default:
              throw new Error("invalid binding");
          }
        }
        for (let i = 0, n = input2.length; i < n; ++i) {
          const code = input2.charCodeAt(i);
          switch (state) {
            case STATE_DATA: {
              if (code === CODE_LT) {
                state = STATE_TAG_OPEN;
              }
              break;
            }
            case STATE_TAG_OPEN: {
              if (code === CODE_BANG) {
                state = STATE_MARKUP_DECLARATION_OPEN;
              } else if (code === CODE_SLASH) {
                state = STATE_END_TAG_OPEN;
              } else if (isAsciiAlphaCode(code)) {
                tagNameStart = i, tagName = void 0;
                state = STATE_TAG_NAME, --i;
              } else if (code === CODE_QUESTION) {
                state = STATE_BOGUS_COMMENT, --i;
              } else {
                state = STATE_DATA, --i;
              }
              break;
            }
            case STATE_END_TAG_OPEN: {
              if (isAsciiAlphaCode(code)) {
                state = STATE_TAG_NAME, --i;
              } else if (code === CODE_GT) {
                state = STATE_DATA;
              } else {
                state = STATE_BOGUS_COMMENT, --i;
              }
              break;
            }
            case STATE_TAG_NAME: {
              if (isSpaceCode(code)) {
                state = STATE_BEFORE_ATTRIBUTE_NAME;
                tagName = lower(input2, tagNameStart, i);
              } else if (code === CODE_SLASH) {
                state = STATE_SELF_CLOSING_START_TAG;
              } else if (code === CODE_GT) {
                tagName = lower(input2, tagNameStart, i);
                state = isRawText(tagName) ? STATE_RAWTEXT : STATE_DATA;
              }
              break;
            }
            case STATE_BEFORE_ATTRIBUTE_NAME: {
              if (isSpaceCode(code)) {
              } else if (code === CODE_SLASH || code === CODE_GT) {
                state = STATE_AFTER_ATTRIBUTE_NAME, --i;
              } else if (code === CODE_EQ) {
                state = STATE_ATTRIBUTE_NAME;
                attributeNameStart = i + 1, attributeNameEnd = void 0;
              } else {
                state = STATE_ATTRIBUTE_NAME, --i;
                attributeNameStart = i + 1, attributeNameEnd = void 0;
              }
              break;
            }
            case STATE_ATTRIBUTE_NAME: {
              if (isSpaceCode(code) || code === CODE_SLASH || code === CODE_GT) {
                state = STATE_AFTER_ATTRIBUTE_NAME, --i;
                attributeNameEnd = i;
              } else if (code === CODE_EQ) {
                state = STATE_BEFORE_ATTRIBUTE_VALUE;
                attributeNameEnd = i;
              }
              break;
            }
            case STATE_AFTER_ATTRIBUTE_NAME: {
              if (isSpaceCode(code)) {
              } else if (code === CODE_SLASH) {
                state = STATE_SELF_CLOSING_START_TAG;
              } else if (code === CODE_EQ) {
                state = STATE_BEFORE_ATTRIBUTE_VALUE;
              } else if (code === CODE_GT) {
                state = isRawText(tagName) ? STATE_RAWTEXT : STATE_DATA;
              } else {
                state = STATE_ATTRIBUTE_NAME, --i;
                attributeNameStart = i + 1, attributeNameEnd = void 0;
              }
              break;
            }
            case STATE_BEFORE_ATTRIBUTE_VALUE: {
              if (isSpaceCode(code)) {
              } else if (code === CODE_DQUOTE) {
                state = STATE_ATTRIBUTE_VALUE_DOUBLE_QUOTED;
              } else if (code === CODE_SQUOTE) {
                state = STATE_ATTRIBUTE_VALUE_SINGLE_QUOTED;
              } else if (code === CODE_GT) {
                state = isRawText(tagName) ? STATE_RAWTEXT : STATE_DATA;
              } else {
                state = STATE_ATTRIBUTE_VALUE_UNQUOTED, --i;
              }
              break;
            }
            case STATE_ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
              if (code === CODE_DQUOTE) {
                state = STATE_AFTER_ATTRIBUTE_VALUE_QUOTED;
              }
              break;
            }
            case STATE_ATTRIBUTE_VALUE_SINGLE_QUOTED: {
              if (code === CODE_SQUOTE) {
                state = STATE_AFTER_ATTRIBUTE_VALUE_QUOTED;
              }
              break;
            }
            case STATE_ATTRIBUTE_VALUE_UNQUOTED: {
              if (isSpaceCode(code)) {
                state = STATE_BEFORE_ATTRIBUTE_NAME;
              } else if (code === CODE_GT) {
                state = isRawText(tagName) ? STATE_RAWTEXT : STATE_DATA;
              }
              break;
            }
            case STATE_AFTER_ATTRIBUTE_VALUE_QUOTED: {
              if (isSpaceCode(code)) {
                state = STATE_BEFORE_ATTRIBUTE_NAME;
              } else if (code === CODE_SLASH) {
                state = STATE_SELF_CLOSING_START_TAG;
              } else if (code === CODE_GT) {
                state = isRawText(tagName) ? STATE_RAWTEXT : STATE_DATA;
              } else {
                state = STATE_BEFORE_ATTRIBUTE_NAME, --i;
              }
              break;
            }
            case STATE_SELF_CLOSING_START_TAG: {
              if (code === CODE_GT) {
                state = STATE_DATA;
              } else {
                state = STATE_BEFORE_ATTRIBUTE_NAME, --i;
              }
              break;
            }
            case STATE_BOGUS_COMMENT: {
              if (code === CODE_GT) {
                state = STATE_DATA;
              }
              break;
            }
            case STATE_COMMENT_START: {
              if (code === CODE_DASH) {
                state = STATE_COMMENT_START_DASH;
              } else if (code === CODE_GT) {
                state = STATE_DATA;
              } else {
                state = STATE_COMMENT, --i;
              }
              break;
            }
            case STATE_COMMENT_START_DASH: {
              if (code === CODE_DASH) {
                state = STATE_COMMENT_END;
              } else if (code === CODE_GT) {
                state = STATE_DATA;
              } else {
                state = STATE_COMMENT, --i;
              }
              break;
            }
            case STATE_COMMENT: {
              if (code === CODE_LT) {
                state = STATE_COMMENT_LESS_THAN_SIGN;
              } else if (code === CODE_DASH) {
                state = STATE_COMMENT_END_DASH;
              }
              break;
            }
            case STATE_COMMENT_LESS_THAN_SIGN: {
              if (code === CODE_BANG) {
                state = STATE_COMMENT_LESS_THAN_SIGN_BANG;
              } else if (code !== CODE_LT) {
                state = STATE_COMMENT, --i;
              }
              break;
            }
            case STATE_COMMENT_LESS_THAN_SIGN_BANG: {
              if (code === CODE_DASH) {
                state = STATE_COMMENT_LESS_THAN_SIGN_BANG_DASH;
              } else {
                state = STATE_COMMENT, --i;
              }
              break;
            }
            case STATE_COMMENT_LESS_THAN_SIGN_BANG_DASH: {
              if (code === CODE_DASH) {
                state = STATE_COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
              } else {
                state = STATE_COMMENT_END, --i;
              }
              break;
            }
            case STATE_COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
              state = STATE_COMMENT_END, --i;
              break;
            }
            case STATE_COMMENT_END_DASH: {
              if (code === CODE_DASH) {
                state = STATE_COMMENT_END;
              } else {
                state = STATE_COMMENT, --i;
              }
              break;
            }
            case STATE_COMMENT_END: {
              if (code === CODE_GT) {
                state = STATE_DATA;
              } else if (code === CODE_BANG) {
                state = STATE_COMMENT_END_BANG;
              } else if (code !== CODE_DASH) {
                state = STATE_COMMENT, --i;
              }
              break;
            }
            case STATE_COMMENT_END_BANG: {
              if (code === CODE_DASH) {
                state = STATE_COMMENT_END_DASH;
              } else if (code === CODE_GT) {
                state = STATE_DATA;
              } else {
                state = STATE_COMMENT, --i;
              }
              break;
            }
            case STATE_MARKUP_DECLARATION_OPEN: {
              if (code === CODE_DASH && input2.charCodeAt(i + 1) === CODE_DASH) {
                state = STATE_COMMENT_START, ++i;
              } else {
                state = STATE_BOGUS_COMMENT, --i;
              }
              break;
            }
            case STATE_RAWTEXT: {
              if (code === CODE_LT) {
                state = STATE_RAWTEXT_LESS_THAN_SIGN;
              }
              break;
            }
            case STATE_RAWTEXT_LESS_THAN_SIGN: {
              if (code === CODE_SLASH) {
                state = STATE_RAWTEXT_END_TAG_OPEN;
              } else {
                state = STATE_RAWTEXT, --i;
              }
              break;
            }
            case STATE_RAWTEXT_END_TAG_OPEN: {
              if (isAsciiAlphaCode(code)) {
                tagNameStart = i;
                state = STATE_RAWTEXT_END_TAG_NAME, --i;
              } else {
                state = STATE_RAWTEXT, --i;
              }
              break;
            }
            case STATE_RAWTEXT_END_TAG_NAME: {
              if (isSpaceCode(code) && tagName === lower(input2, tagNameStart, i)) {
                state = STATE_BEFORE_ATTRIBUTE_NAME;
              } else if (code === CODE_SLASH && tagName === lower(input2, tagNameStart, i)) {
                state = STATE_SELF_CLOSING_START_TAG;
              } else if (code === CODE_GT && tagName === lower(input2, tagNameStart, i)) {
                state = STATE_DATA;
              } else if (!isAsciiAlphaCode(code)) {
                state = STATE_RAWTEXT, --i;
              }
              break;
            }
            default: {
              state = void 0;
              break;
            }
          }
        }
        string += input2;
      }
      const root = render(string);
      const walker = document.createTreeWalker(root, nodeFilter, null, false);
      const removeNodes = [];
      while (walker.nextNode()) {
        const node = walker.currentNode;
        switch (node.nodeType) {
          case TYPE_ELEMENT: {
            const attributes = node.attributes;
            for (let i = 0, n = attributes.length; i < n; ++i) {
              const { name, value: currentValue } = attributes[i];
              if (/^::/.test(name)) {
                const value = arguments[+name.slice(2)];
                removeAttribute(node, name), --i, --n;
                for (const key in value) {
                  const subvalue = value[key];
                  if (subvalue == null || subvalue === false) {
                  } else if (typeof subvalue === "function") {
                    node[key] = subvalue;
                  } else if (key === "style" && isObjectLiteral(subvalue)) {
                    setStyles(node[key], subvalue);
                  } else {
                    setAttribute(node, key, subvalue === true ? "" : subvalue);
                  }
                }
              } else if (/^::/.test(currentValue)) {
                const value = arguments[+currentValue.slice(2)];
                removeAttribute(node, name), --i, --n;
                if (typeof value === "function") {
                  node[name] = value;
                } else {
                  setStyles(node[name], value);
                }
              }
            }
            break;
          }
          case TYPE_COMMENT: {
            if (/^::/.test(node.data)) {
              const parent = node.parentNode;
              const value = arguments[+node.data.slice(2)];
              if (value instanceof Node) {
                parent.insertBefore(value, node);
              } else if (typeof value !== "string" && value[Symbol.iterator]) {
                if (value instanceof NodeList || value instanceof HTMLCollection) {
                  for (let i = value.length - 1, r = node; i >= 0; --i) {
                    r = parent.insertBefore(value[i], r);
                  }
                } else {
                  for (const subvalue of value) {
                    if (subvalue == null) continue;
                    parent.insertBefore(subvalue instanceof Node ? subvalue : document.createTextNode(subvalue), node);
                  }
                }
              } else {
                parent.insertBefore(document.createTextNode(value), node);
              }
              removeNodes.push(node);
            }
            break;
          }
        }
      }
      for (const node of removeNodes) {
        node.parentNode.removeChild(node);
      }
      return postprocess(root);
    };
  }
  function entity(character) {
    return `&#${character.charCodeAt(0).toString()};`;
  }
  function isAsciiAlphaCode(code) {
    return CODE_UPPER_A <= code && code <= CODE_UPPER_Z || CODE_LOWER_A <= code && code <= CODE_LOWER_Z;
  }
  function isSpaceCode(code) {
    return code === CODE_TAB || code === CODE_LF || code === CODE_FF || code === CODE_SPACE || code === CODE_CR;
  }
  function isObjectLiteral(value) {
    return value && value.toString === Object.prototype.toString;
  }
  function isRawText(tagName) {
    return tagName === "script" || tagName === "style" || isEscapableRawText(tagName);
  }
  function isEscapableRawText(tagName) {
    return tagName === "textarea" || tagName === "title";
  }
  function lower(input2, start, end) {
    return input2.slice(start, end).toLowerCase();
  }
  function setAttribute(node, name, value) {
    if (node.namespaceURI === NS_SVG) {
      name = name.toLowerCase();
      name = svgAdjustAttributes.get(name) || name;
      if (svgForeignAttributes.has(name)) {
        node.setAttributeNS(svgForeignAttributes.get(name), name, value);
        return;
      }
    }
    node.setAttribute(name, value);
  }
  function removeAttribute(node, name) {
    if (node.namespaceURI === NS_SVG) {
      name = name.toLowerCase();
      name = svgAdjustAttributes.get(name) || name;
      if (svgForeignAttributes.has(name)) {
        node.removeAttributeNS(svgForeignAttributes.get(name), name);
        return;
      }
    }
    node.removeAttribute(name);
  }
  function setStyles(style, values) {
    for (const name in values) {
      const value = values[name];
      if (name.startsWith("--")) style.setProperty(name, value);
      else style[name] = value;
    }
  }
  function format(date2, fallback) {
    if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
    if (isNaN(date2)) return typeof fallback === "function" ? fallback(date2) : fallback;
    const hours = date2.getUTCHours();
    const minutes = date2.getUTCMinutes();
    const seconds = date2.getUTCSeconds();
    const milliseconds = date2.getUTCMilliseconds();
    return `${formatYear(date2.getUTCFullYear(), 4)}-${pad(date2.getUTCMonth() + 1, 2)}-${pad(date2.getUTCDate(), 2)}${hours || minutes || seconds || milliseconds ? `T${pad(hours, 2)}:${pad(minutes, 2)}${seconds || milliseconds ? `:${pad(seconds, 2)}${milliseconds ? `.${pad(milliseconds, 3)}` : ``}` : ``}Z` : ``}`;
  }
  function formatYear(year) {
    return year < 0 ? `-${pad(-year, 6)}` : year > 9999 ? `+${pad(year, 6)}` : pad(year, 4);
  }
  function pad(value, width) {
    return `${value}`.padStart(width, "0");
  }
  var re = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
  function parse(string, fallback) {
    if (!re.test(string += "")) return typeof fallback === "function" ? fallback(string) : fallback;
    return new Date(string);
  }
  function length(x) {
    return x == null ? null : typeof x === "number" ? `${x}px` : `${x}`;
  }
  function maybeWidth(width) {
    return { "--input-width": length(width) };
  }
  var bubbles = { bubbles: true };
  function preventDefault(event) {
    event.preventDefault();
  }
  function dispatchInput({ currentTarget }) {
    (currentTarget.form || currentTarget).dispatchEvent(new Event("input", bubbles));
  }
  function checkValidity(input2) {
    return input2.checkValidity();
  }
  function identity(x) {
    return x;
  }
  var nextId = 0;
  function newId() {
    return `inputs-3a86ea-${++nextId}`;
  }
  function maybeLabel(label, input2) {
    if (!label) return;
    label = html`<label>${label}`;
    if (input2 !== void 0) label.htmlFor = input2.id = newId();
    return label;
  }
  function button(content = "\u2261", {
    label = "",
    value,
    reduce,
    disabled,
    required = false,
    width
  } = {}) {
    const solitary = typeof content === "string" || content instanceof Node;
    if (solitary) {
      if (!required && value === void 0) value = 0;
      if (reduce === void 0) reduce = (value2 = 0) => value2 + 1;
      disabled = new Set(disabled ? [content] : []);
      content = [[content, reduce]];
    } else {
      if (!required && value === void 0) value = null;
      disabled = new Set(disabled === true ? Array.from(content, ([content2]) => content2) : disabled || void 0);
    }
    const form2 = html`<form class=inputs-3a86ea>`;
    form2.addEventListener("submit", preventDefault);
    const style = { width: length(width) };
    const buttons = Array.from(content, ([content2, reduce2 = identity]) => {
      if (typeof reduce2 !== "function") throw new TypeError("reduce is not a function");
      return html`<button disabled=${disabled.has(content2)} style=${style} onclick=${(event) => {
        form2.value = reduce2(form2.value);
        dispatchInput(event);
      }}>${content2}`;
    });
    if (label = maybeLabel(label, solitary ? buttons[0] : void 0)) form2.append(label);
    form2.append(...buttons);
    form2.value = value;
    return form2;
  }
  function arrayify(array) {
    return Array.isArray(array) ? array : Array.from(array);
  }
  function iterable(array) {
    return array ? typeof array[Symbol.iterator] === "function" : false;
  }
  function maybeColumns(data) {
    if (iterable(data.columns)) return data.columns;
    if (data.schema && iterable(data.schema.fields)) return Array.from(data.schema.fields, (f) => f.name);
    if (typeof data.columnNames === "function") return data.columnNames();
  }
  function stringify(x) {
    return x == null ? "" : `${x}`;
  }
  var formatLocaleAuto = localize((locale) => {
    const formatNumber2 = formatLocaleNumber(locale);
    return (value) => value == null ? "" : typeof value === "number" ? formatNumber2(value) : value instanceof Date ? formatDate$1(value) : `${value}`;
  });
  var formatLocaleNumber = localize((locale) => {
    return (value) => value === 0 ? "0" : value.toLocaleString(locale);
  });
  var formatAuto = formatLocaleAuto();
  var formatNumber = formatLocaleNumber();
  function formatTrim(value) {
    const s = value.toString();
    const n = s.length;
    let i0 = -1, i1;
    out: for (let i = 1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0) i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i]) break out;
          if (i0 > 0) i0 = 0;
          break;
      }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }
  function formatDate$1(date2) {
    return format(date2, "Invalid Date");
  }
  function localize(f) {
    let key = localize, value;
    return (locale = "en") => locale === key ? value : value = f(key = locale);
  }
  function ascending(a, b) {
    return defined(b) - defined(a) || (a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN);
  }
  function descending(b, a) {
    return defined(a) - defined(b) || (a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN);
  }
  function defined(d) {
    return d != null && !Number.isNaN(d);
  }
  var first = ([x]) => x;
  var second = ([, x]) => x;
  function createChooser({ multiple: fixedMultiple, render, selectedIndexes, select: select2 }) {
    return function chooser(data, {
      locale,
      keyof = data instanceof Map ? first : identity,
      valueof = data instanceof Map ? second : identity,
      format: format2 = /* @__PURE__ */ ((f) => (d, i, data2) => f(keyof(d, i, data2)))(formatLocaleAuto(locale)),
      multiple,
      key,
      value,
      disabled = false,
      sort,
      unique,
      ...options
    } = {}) {
      if (typeof keyof !== "function") throw new TypeError("keyof is not a function");
      if (typeof valueof !== "function") throw new TypeError("valueof is not a function");
      if (typeof format2 !== "function") throw new TypeError("format is not a function");
      if (fixedMultiple !== void 0) multiple = fixedMultiple;
      sort = maybeSort(sort);
      let size = +multiple;
      if (value === void 0) value = key !== void 0 && data instanceof Map ? size > 0 ? Array.from(key, (k) => data.get(k)) : data.get(key) : void 0;
      unique = !!unique;
      data = arrayify(data);
      let keys = data.map((d, i) => [keyof(d, i, data), i]);
      if (sort !== void 0) keys.sort(([a], [b]) => sort(a, b));
      if (unique) keys = [...new Map(keys.map((o) => [intern(o[0]), o])).values()];
      const index = keys.map(second);
      if (multiple === true) size = Math.max(1, Math.min(10, index.length));
      else if (size > 0) multiple = true;
      else multiple = false, size = void 0;
      const [form2, input2] = render(
        data,
        index,
        maybeSelection(data, index, value, multiple, valueof),
        maybeDisabled(data, index, disabled, valueof),
        {
          ...options,
          format: format2,
          multiple,
          size
        }
      );
      form2.addEventListener("input", oninput);
      form2.addEventListener("change", dispatchInput);
      form2.addEventListener("submit", preventDefault);
      function oninput(event) {
        if (event && event.isTrusted) form2.removeEventListener("change", dispatchInput);
        if (multiple) {
          value = selectedIndexes(input2).map((i) => valueof(data[i], i, data));
        } else {
          const i = selectedIndex(input2);
          value = i < 0 ? null : valueof(data[i], i, data);
        }
      }
      oninput();
      return Object.defineProperty(form2, "value", {
        get() {
          return value;
        },
        set(v) {
          if (multiple) {
            const selection = new Set(v);
            for (const e of input2) {
              const i = +e.value;
              select2(e, selection.has(valueof(data[i], i, data)));
            }
          } else {
            input2.value = index.find((i) => v === valueof(data[i], i, data));
          }
          oninput();
        }
      });
    };
  }
  function maybeSelection(data, index, value, multiple, valueof) {
    const values = new Set(value === void 0 ? [] : multiple ? arrayify(value) : [value]);
    if (!values.size) return () => false;
    const selection = /* @__PURE__ */ new Set();
    for (const i of index) {
      if (values.has(valueof(data[i], i, data))) {
        selection.add(i);
      }
    }
    return (i) => selection.has(i);
  }
  function maybeDisabled(data, index, value, valueof) {
    if (typeof value === "boolean") return value;
    const values = new Set(arrayify(value));
    const disabled = /* @__PURE__ */ new Set();
    for (const i of index) {
      if (values.has(valueof(data[i], i, data))) {
        disabled.add(i);
      }
    }
    return (i) => disabled.has(i);
  }
  function maybeSort(sort) {
    if (sort === void 0 || sort === false) return;
    if (sort === true || sort === "ascending") return ascending;
    if (sort === "descending") return descending;
    if (typeof sort === "function") return sort;
    throw new TypeError("sort is not a function");
  }
  function selectedIndex(input2) {
    return input2.value ? +input2.value : -1;
  }
  function intern(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }
  function createCheckbox(multiple, type2) {
    return createChooser({
      multiple,
      render(data, index, selected, disabled, { format: format2, label }) {
        const form2 = html`<form class="inputs-3a86ea inputs-3a86ea-checkbox">
      ${maybeLabel(label)}<div>
        ${index.map((i) => html`<label><input type=${type2} disabled=${typeof disabled === "function" ? disabled(i) : disabled} name=input value=${i} checked=${selected(i)}>${format2(data[i], i, data)}`)}
      </div>
    </form>`;
        return [form2, inputof$1(form2.elements.input, multiple)];
      },
      selectedIndexes(input2) {
        return Array.from(input2).filter((i) => i.checked).map((i) => +i.value);
      },
      select(input2, selected) {
        input2.checked = selected;
      }
    });
  }
  var radio = createCheckbox(false, "radio");
  var checkbox = createCheckbox(true, "checkbox");
  function toggle({ label, value, values, disabled } = {}) {
    const input2 = html`<input class=inputs-3a86ea-input type=checkbox name=input disabled=${disabled}>`;
    const form2 = html`<form class="inputs-3a86ea inputs-3a86ea-toggle">${maybeLabel(label, input2)}${input2}`;
    Object.defineProperty(form2, "value", {
      get() {
        return values === void 0 ? input2.checked : values[input2.checked ? 0 : 1];
      },
      set(v) {
        input2.checked = values === void 0 ? !!v : v === values[0];
      }
    });
    if (value !== void 0) form2.value = value;
    return form2;
  }
  function inputof$1(input2, multiple) {
    return input2 === void 0 ? new OptionZero(multiple ? [] : null) : typeof input2.length === "undefined" ? new (multiple ? MultipleOptionOne : OptionOne)(input2) : input2;
  }
  var OptionZero = class {
    constructor(value) {
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(v) {
    }
    *[Symbol.iterator]() {
    }
  };
  var OptionOne = class {
    constructor(input2) {
      this._input = input2;
    }
    get value() {
      const { _input } = this;
      return _input.checked ? _input.value : "";
    }
    set value(v) {
      const { _input } = this;
      if (_input.checked) return;
      _input.checked = stringify(v) === _input.value;
    }
    *[Symbol.iterator]() {
      yield this._input;
    }
  };
  var MultipleOptionOne = class {
    constructor(input2) {
      this._input = input2;
      this._value = input2.checked ? [input2.value] : [];
    }
    get value() {
      return this._value;
    }
    set value(v) {
      const { _input } = this;
      if (_input.checked) return;
      _input.checked = stringify(v) === _input.value;
      this._value = _input.checked ? [_input.value] : [];
    }
    *[Symbol.iterator]() {
      yield this._input;
    }
  };
  function maybeDatalist(datalist) {
    if (datalist === void 0) return [null, null];
    const listId = newId();
    const list = html`<datalist id=${listId}>${Array.from(datalist, (value) => html`<option value=${stringify(value)}>`)}`;
    return [list, listId];
  }
  function createText(form2, input2, value, {
    validate = checkValidity,
    submit
  } = {}, {
    get: get2 = (input3) => input3.value,
    set: set2 = (input3, value2) => input3.value = stringify(value2),
    same = (input3, value2) => input3.value === value2,
    after = (button2) => input2.after(button2)
  } = {}) {
    submit = submit === true ? "Submit" : submit || null;
    const button2 = submit ? html`<button type=submit disabled>${submit}` : null;
    if (submit) after(button2);
    set2(input2, value);
    value = validate(input2) ? get2(input2) : void 0;
    form2.addEventListener("submit", onsubmit);
    input2.oninput = oninput;
    function update() {
      if (validate(input2)) {
        value = get2(input2);
        return true;
      }
    }
    function onsubmit(event) {
      preventDefault(event);
      if (submit) {
        if (update()) {
          button2.disabled = true;
          dispatchInput(event);
        } else {
          input2.reportValidity();
        }
      }
    }
    function oninput(event) {
      if (submit) {
        button2.disabled = same(input2, value);
        event.stopPropagation();
      } else if (!update()) {
        event.stopPropagation();
      }
    }
    return Object.defineProperty(form2, "value", {
      get() {
        return value;
      },
      set(v) {
        set2(input2, v);
        update();
      }
    });
  }
  function text({
    label,
    value = "",
    type: type2 = "text",
    placeholder,
    pattern,
    spellcheck,
    autocomplete,
    autocapitalize,
    min,
    max,
    minlength,
    maxlength,
    required = minlength > 0,
    datalist,
    readonly,
    disabled,
    width,
    ...options
  } = {}) {
    const [list, listId] = maybeDatalist(datalist);
    const input2 = html`<input
    type=${type2}
    name=text
    list=${listId}
    readonly=${readonly}
    disabled=${disabled}
    required=${required}
    min=${min}
    max=${max}
    minlength=${minlength}
    maxlength=${maxlength}
    pattern=${pattern}
    spellcheck=${truefalse(spellcheck)}
    autocomplete=${onoff(autocomplete)}
    autocapitalize=${onoff(autocapitalize)}
    placeholder=${placeholder}
  >`;
    const form2 = html`<form class=inputs-3a86ea style=${maybeWidth(width)}>
    ${maybeLabel(label, input2)}<div class=inputs-3a86ea-input>
      ${input2}
    </div>${list}
  </form>`;
    return createText(form2, input2, value, options);
  }
  function email(options) {
    return text({ ...options, type: "email" });
  }
  function tel(options) {
    return text({ ...options, type: "tel" });
  }
  function url(options) {
    return text({ ...options, type: "url" });
  }
  function password(options) {
    return text({ ...options, type: "password" });
  }
  function truefalse(value) {
    return value == null ? null : `${value}`;
  }
  function onoff(value) {
    return value == null ? null : `${value === false ? "off" : value === true ? "on" : value}`;
  }
  function color({
    label,
    value,
    required,
    datalist,
    readonly,
    disabled,
    width,
    ...options
  } = {}) {
    const [list, listId] = maybeDatalist(datalist);
    const id = newId();
    const input2 = html`<input
    type=color
    name=text
    value=${value}
    id=${id}
    list=${listId}
    readonly=${readonly}
    disabled=${disabled}
    required=${required}
  >`;
    const output = html`<output
    for=${id}
  >`;
    output.value = input2.value;
    input2.addEventListener("input", () => output.value = input2.value);
    const form2 = html`<form class=inputs-3a86ea style=${maybeWidth(width)}>
    ${maybeLabel(label, input2)}<div class=inputs-3a86ea-input>
      <div class=inputs-3a86ea-input>${input2}${output}</div>
    </div>${list}
  </form>`;
    return createText(form2, input2, value, options, {
      after: (button2) => input2.parentNode.after(button2)
    });
  }
  var dateops = {
    type: "date",
    get: (input2) => input2.valueAsDate,
    set: (input2, value) => input2.value = formatDate(value),
    same: (input2, value) => +input2.valueAsDate === +value,
    format: formatDate
  };
  var datetimeops = {
    type: "datetime-local",
    get: (input2) => input2.value ? new Date(input2.value) : null,
    set: (input2, value) => input2.value = formatDatetime(value),
    same: (input2, value) => +new Date(input2.value) === +value,
    format: formatDatetime
  };
  function createDate({
    label,
    min,
    max,
    required,
    readonly,
    disabled,
    width,
    value,
    ...options
  } = {}, {
    type: type2,
    format: format2,
    ...ops
  }) {
    const input2 = html`<input type=${type2} name=date readonly=${readonly} disabled=${disabled} required=${required} min=${format2(min)} max=${format2(max)}>`;
    const form2 = html`<form class=inputs-3a86ea style=${maybeWidth(width)}>
    ${maybeLabel(label, input2)}<div class=inputs-3a86ea-input>
      ${input2}
    </div>
  </form>`;
    return createText(form2, input2, coerce(value), options, ops);
  }
  function date(options) {
    return createDate(options, dateops);
  }
  function datetime(options) {
    return createDate(options, datetimeops);
  }
  function coerce(value) {
    return value instanceof Date && !isNaN(value) ? value : typeof value === "string" ? parse(value, null) : value == null || isNaN(value = +value) ? null : /* @__PURE__ */ new Date(+value);
  }
  function formatDate(value) {
    return (value = coerce(value)) ? value.toISOString().slice(0, 10) : value;
  }
  function formatDatetime(value) {
    return (value = coerce(value)) ? new Date(+value - value.getTimezoneOffset() * 1e3 * 60).toISOString().slice(0, 16) : value;
  }
  function form(inputs, options) {
    return (Array.isArray(inputs) ? arrayForm : objectForm)(inputs, options);
  }
  function arrayTemplate(inputs) {
    return html`<div>${inputs}`;
  }
  function arrayForm(inputs, { template = arrayTemplate } = {}) {
    inputs = [...inputs];
    let value = inputs.map(({ value: value2 }) => value2);
    return Object.defineProperty(template(inputs), "value", {
      get() {
        for (let i = 0, n = inputs.length; i < n; ++i) {
          const v = inputs[i].value;
          if (!Object.is(v, value[i])) {
            value = [...value];
            value[i] = v;
          }
        }
        return value;
      },
      set(v = []) {
        for (let i = 0, n = inputs.length; i < n; ++i) {
          inputs[i].value = v[i];
        }
      }
    });
  }
  function objectTemplate(inputs) {
    return html`<div>${Object.values(inputs)}`;
  }
  function objectForm(inputs, { template = objectTemplate } = {}) {
    inputs = { ...inputs };
    let value = Object.fromEntries(Object.entries(inputs).map(([name, { value: value2 }]) => [name, value2]));
    return Object.defineProperty(template(inputs), "value", {
      get() {
        for (const k in value) {
          const v = inputs[k].value;
          if (!Object.is(v, value[k])) {
            value = { ...value };
            value[k] = v;
          }
        }
        return value;
      },
      set(v = {}) {
        for (const name in inputs) {
          inputs[name].value = v[name];
        }
      }
    });
  }
  function file({
    label,
    required,
    accept,
    capture,
    multiple,
    disabled,
    width,
    value,
    // eslint-disable-line no-unused-vars
    submit,
    // eslint-disable-line no-unused-vars
    transform = (file2) => file2,
    ...options
  } = {}) {
    const input2 = html`<input
    type=file
    name=file
    disabled=${disabled}
    required=${required}
    accept=${accept}
    capture=${capture}
    multiple=${multiple}
  >`;
    const form2 = html`<form class=inputs-3a86ea style=${maybeWidth(width)}>
    ${maybeLabel(label, input2)}<div class=inputs-3a86ea-input>
      ${input2}
    </div>
  </form>`;
    return createText(form2, input2, void 0, options, {
      get: (input3) => multiple ? Array.from(input3.files, (file2) => transform(file2)) : input3.files.length ? transform(input3.files[0]) : null,
      set: () => {
      },
      // ignored
      same: () => false
      // ignored
    });
  }
  var epsilon = 1e-6;
  function number(extent, options) {
    if (arguments.length < 2) options = extent, extent = void 0;
    if (extent === void 0) extent = [];
    return createRange({ extent }, options);
  }
  function range(extent = [0, 1], options) {
    return createRange({ extent, range: true }, options);
  }
  function createRange({
    extent: [min, max],
    range: range2
  }, {
    format: format2 = formatTrim,
    transform,
    invert,
    label = "",
    value: initialValue,
    step,
    disabled,
    placeholder,
    validate = checkValidity,
    width
  } = {}) {
    let value;
    if (typeof format2 !== "function") throw new TypeError("format is not a function");
    if (min == null || isNaN(min = +min)) min = -Infinity;
    if (max == null || isNaN(max = +max)) max = Infinity;
    if (min > max) [min, max] = [max, min], transform === void 0 && (transform = negate);
    if (step !== void 0) step = +step;
    const number2 = html`<input type=number min=${isFinite(min) ? min : null} max=${isFinite(max) ? max : null} step=${step == void 0 ? "any" : step} name=number required placeholder=${placeholder} oninput=${onnumber} disabled=${disabled}>`;
    let irange;
    if (range2) {
      if (transform === void 0) transform = identity;
      if (typeof transform !== "function") throw new TypeError("transform is not a function");
      if (invert === void 0) invert = transform.invert === void 0 ? solver(transform) : transform.invert;
      if (typeof invert !== "function") throw new TypeError("invert is not a function");
      let tmin = +transform(min), tmax = +transform(max);
      if (tmin > tmax) [tmin, tmax] = [tmax, tmin];
      range2 = html`<input type=range min=${isFinite(tmin) ? tmin : null} max=${isFinite(tmax) ? tmax : null} step=${step === void 0 || transform !== identity && transform !== negate ? "any" : step} name=range oninput=${onrange} disabled=${disabled}>`;
      irange = transform === identity ? range2 : html`<input type=range min=${min} max=${max} step=${step === void 0 ? "any" : step} name=range disabled=${disabled}>`;
    } else {
      range2 = null;
      transform = invert = identity;
    }
    const form2 = html`<form class=inputs-3a86ea style=${maybeWidth(width)}>
    ${maybeLabel(label, number2)}<div class=inputs-3a86ea-input>
      ${number2}${range2}
    </div>
  </form>`;
    form2.addEventListener("submit", preventDefault);
    function coerce2(v) {
      if (!irange) return +v;
      v = Math.max(min, Math.min(max, v));
      if (!isFinite(v)) return v;
      irange.valueAsNumber = v;
      return irange.valueAsNumber;
    }
    function onrange(event) {
      const v = coerce2(invert(range2.valueAsNumber));
      if (isFinite(v)) {
        number2.valueAsNumber = Math.max(min, Math.min(max, v));
        if (validate(number2)) {
          value = number2.valueAsNumber;
          number2.value = format2(value);
          return;
        }
      }
      if (event) event.stopPropagation();
    }
    function onnumber(event) {
      const v = coerce2(number2.valueAsNumber);
      if (isFinite(v)) {
        if (range2) range2.valueAsNumber = transform(v);
        if (validate(number2)) {
          value = v;
          return;
        }
      }
      if (event) event.stopPropagation();
    }
    Object.defineProperty(form2, "value", {
      get() {
        return value;
      },
      set(v) {
        v = coerce2(v);
        if (isFinite(v)) {
          number2.valueAsNumber = v;
          if (range2) range2.valueAsNumber = transform(v);
          if (validate(number2)) {
            value = v;
            number2.value = format2(value);
          }
        }
      }
    });
    if (initialValue === void 0 && irange) initialValue = irange.valueAsNumber;
    if (initialValue !== void 0) form2.value = initialValue;
    return form2;
  }
  function negate(x) {
    return -x;
  }
  function square(x) {
    return x * x;
  }
  function solver(f) {
    if (f === identity || f === negate) return f;
    if (f === Math.sqrt) return square;
    if (f === Math.log) return Math.exp;
    if (f === Math.exp) return Math.log;
    return (x) => solve(f, x, x);
  }
  function solve(f, y, x) {
    let steps = 100, delta, f0, f1;
    x = x === void 0 ? 0 : +x;
    y = +y;
    do {
      f0 = f(x);
      f1 = f(x + epsilon);
      if (f0 === f1) f1 = f0 + epsilon;
      x -= delta = -1 * epsilon * (f0 - y) / (f0 - f1);
    } while (steps-- > 0 && Math.abs(delta) > epsilon);
    return steps < 0 ? NaN : x;
  }
  function search(data, {
    locale,
    format: format2 = formatResults(locale),
    // length format
    label,
    query = "",
    // initial search query
    placeholder = "Search",
    // placeholder text to show when empty
    columns = maybeColumns(data),
    spellcheck,
    autocomplete,
    autocapitalize,
    filter = columns === void 0 ? searchFilter : columnFilter(columns),
    // returns the filter function given query
    datalist,
    disabled,
    required = true,
    // if true, the value is everything if nothing is selected
    width
  } = {}) {
    let value = [];
    data = arrayify(data);
    required = !!required;
    const [list, listId] = maybeDatalist(datalist);
    const input2 = html`<input
    name=input
    type=search
    list=${listId}
    disabled=${disabled}
    spellcheck=${truefalse(spellcheck)}
    autocomplete=${onoff(autocomplete)}
    autocapitalize=${onoff(autocapitalize)}
    placeholder=${placeholder}
    value=${query}
    oninput=${oninput}
  >`;
    const output = html`<output name=output>`;
    const form2 = html`<form class=inputs-3a86ea style=${maybeWidth(width)}>
    ${maybeLabel(label, input2)}<div class=inputs-3a86ea-input>
      ${input2}${output}
    </div>${list}
  </form>`;
    form2.addEventListener("submit", preventDefault);
    function oninput() {
      value = input2.value || required ? data.filter(filter(input2.value)) : [];
      if (columns !== void 0) value.columns = columns;
      output.value = format2(value.length);
    }
    oninput();
    return Object.defineProperties(form2, {
      value: {
        get() {
          return value;
        }
      },
      query: {
        get() {
          return query;
        },
        set(v) {
          query = input2.value = stringify(v);
          oninput();
        }
      }
    });
  }
  function searchFilter(query) {
    const filters = `${query}`.split(/\s+/g).filter((t) => t).map(termFilter);
    return (d) => {
      if (d == null) return false;
      if (typeof d === "object") {
        out: for (const filter of filters) {
          for (const value of valuesof(d)) {
            if (filter.test(value)) {
              continue out;
            }
          }
          return false;
        }
      } else {
        for (const filter of filters) {
          if (!filter.test(d)) {
            return false;
          }
        }
      }
      return true;
    };
  }
  function columnFilter(columns) {
    return (query) => {
      const filters = `${query}`.split(/\s+/g).filter((t) => t).map(termFilter);
      return (d) => {
        out: for (const filter of filters) {
          for (const column of columns) {
            if (filter.test(d[column])) {
              continue out;
            }
          }
          return false;
        }
        return true;
      };
    };
  }
  function* valuesof(d) {
    for (const key in d) {
      yield d[key];
    }
  }
  function termFilter(term) {
    return new RegExp(`(?:^|[^\\p{L}-])${escapeRegExp(term)}`, "iu");
  }
  function escapeRegExp(text2) {
    return text2.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  }
  var formatResults = localize((locale) => {
    const formatNumber2 = formatLocaleNumber(locale);
    return (length2) => `${formatNumber2(length2)} result${length2 === 1 ? "" : "s"}`;
  });
  var select = createChooser({
    render(data, index, selected, disabled, { format: format2, multiple, size, label, width }) {
      const select2 = html`<select class=inputs-3a86ea-input disabled=${disabled === true} multiple=${multiple} size=${size} name=input>
      ${index.map((i) => html`<option value=${i} disabled=${typeof disabled === "function" ? disabled(i) : false} selected=${selected(i)}>${stringify(format2(data[i], i, data))}`)}
    </select>`;
      const form2 = html`<form class=inputs-3a86ea style=${maybeWidth(width)}>${maybeLabel(label, select2)}${select2}`;
      return [form2, select2];
    },
    selectedIndexes(input2) {
      return Array.from(input2.selectedOptions, (i) => +i.value);
    },
    select(input2, selected) {
      input2.selected = selected;
    }
  });
  var rowHeight = 22;
  function table(data, options = {}) {
    const {
      rows = 11.5,
      // maximum number of rows to show
      height,
      maxHeight = height === void 0 ? (rows + 1) * rowHeight - 1 : void 0,
      width = {},
      // object of column name to width, or overall table width
      maxWidth
    } = options;
    const id = newId();
    const root = html`<form class="inputs-3a86ea inputs-3a86ea-table" id=${id} style=${{ height: length(height), maxHeight: length(maxHeight), width: typeof width === "string" || typeof width === "number" ? length(width) : void 0, maxWidth: length(maxWidth) }}>`;
    if (data && typeof data.then === "function") {
      Object.defineProperty(root, "value", {
        configurable: true,
        // allow defineProperty again on initialization
        set() {
          throw new Error("cannot set value while data is unresolved");
        }
      });
      Promise.resolve(data).then((data2) => initialize({ root, id }, data2, options));
    } else {
      initialize({ root, id }, data, options);
    }
    return root;
  }
  function initialize({
    root,
    id
  }, data, {
    columns = maybeColumns(data),
    // array of column names
    value,
    // initial selection
    required = true,
    // if true, the value is everything if nothing is selected
    sort,
    // name of column to sort by, if any
    reverse = false,
    // if sorting, true for descending and false for ascending
    format: format2,
    // object of column name to format function
    locale,
    align,
    // object of column name to left, right, or center
    header,
    // object of column name to string or HTML element
    rows = 11.5,
    // maximum number of rows to show
    width = {},
    // object of column name to width, or overall table width
    multiple = true,
    select: selectable = true,
    // is the table selectable?
    layout
    // "fixed" or "auto"
  } = {}) {
    columns = columns === void 0 ? columnsof(data) : arrayify(columns);
    if (layout === void 0) layout = columns.length >= 12 ? "auto" : "fixed";
    format2 = formatof(format2, data, columns, locale);
    align = alignof(align, data, columns);
    let array = [];
    let index = [];
    let iterator = data[Symbol.iterator]();
    let iterindex = 0;
    let N = lengthof(data);
    let n = minlengthof(rows * 2);
    function materialize() {
      if (iterindex >= 0) {
        iterindex = iterator = void 0;
        index = Uint32Array.from(array = arrayify(data), (_, i) => i);
        N = index.length;
      }
    }
    function minlengthof(length2) {
      length2 = Math.floor(length2);
      if (N !== void 0) return Math.min(N, length2);
      if (length2 <= iterindex) return length2;
      while (length2 > iterindex) {
        const { done, value: value2 } = iterator.next();
        if (done) return N = iterindex;
        index.push(iterindex++);
        array.push(value2);
      }
      return iterindex;
    }
    let currentSortHeader = null, currentReverse = false;
    let selected = /* @__PURE__ */ new Set();
    let anchor = null, head = null;
    const tbody = html`<tbody>`;
    const tr = html`<tr><td>${selectable ? html`<input type=${multiple ? "checkbox" : "radio"} name=${multiple ? null : "radio"}>` : null}</td>${columns.map(() => html`<td>`)}`;
    const theadr = html`<tr><th>${selectable ? html`<input type=checkbox onclick=${reselectAll} disabled=${!multiple}>` : null}</th>${columns.map((column) => html`<th title=${column} onclick=${(event) => resort(event, column)}><span></span>${header && column in header ? header[column] : column}</th>`)}</tr>`;
    root.appendChild(html.fragment`<table style=${{ tableLayout: layout }}>
  <thead>${minlengthof(1) || columns.length ? theadr : null}</thead>
  ${tbody}
</table>
<style>${columns.map((column, i) => {
      const rules = [];
      if (align[column] != null) rules.push(`text-align:${align[column]}`);
      if (width[column] != null) rules.push(`width:${length(width[column])}`);
      if (rules.length) return `#${id} tr>:nth-child(${i + 2}){${rules.join(";")}}`;
    }).filter(identity).join("\n")}</style>`);
    function appendRows(i, j) {
      if (iterindex === i) {
        for (; i < j; ++i) {
          appendRow(iterator.next().value, i);
        }
        iterindex = j;
      } else {
        for (let k; i < j; ++i) {
          k = index[i];
          appendRow(array[k], k);
        }
      }
    }
    function appendRow(d, i) {
      const itr = tr.cloneNode(true);
      const input2 = inputof(itr);
      if (input2 != null) {
        input2.onclick = reselect;
        input2.checked = selected.has(i);
        input2.value = i;
      }
      if (d != null) for (let j = 0; j < columns.length; ++j) {
        let column = columns[j];
        let value2 = d[column];
        if (!defined(value2)) continue;
        value2 = format2[column](value2, i, data);
        if (!(value2 instanceof Node)) value2 = document.createTextNode(value2);
        itr.childNodes[j + 1].appendChild(value2);
      }
      tbody.append(itr);
    }
    function unselect(i) {
      materialize();
      let j = index.indexOf(i);
      if (j < tbody.childNodes.length) {
        const tr2 = tbody.childNodes[j];
        inputof(tr2).checked = false;
      }
      selected.delete(i);
    }
    function select2(i) {
      materialize();
      let j = index.indexOf(i);
      if (j < tbody.childNodes.length) {
        const tr2 = tbody.childNodes[j];
        inputof(tr2).checked = true;
      }
      selected.add(i);
    }
    function* range2(i, j) {
      materialize();
      i = index.indexOf(i), j = index.indexOf(j);
      if (i < j) while (i <= j) yield index[i++];
      else while (j <= i) yield index[j++];
    }
    function first2(set2) {
      return set2[Symbol.iterator]().next().value;
    }
    function reselectAll(event) {
      materialize();
      if (this.checked) {
        selected = new Set(index);
        for (const tr2 of tbody.childNodes) {
          inputof(tr2).checked = true;
        }
      } else {
        for (let i of selected) unselect(i);
        anchor = head = null;
        if (event.detail) event.currentTarget.blur();
      }
      reinput();
    }
    function reselect(event) {
      materialize();
      let i = +this.value;
      if (!multiple) {
        for (let i2 of selected) unselect(i2);
        select2(i);
      } else if (event.shiftKey) {
        if (anchor === null) anchor = selected.size ? first2(selected) : index[0];
        else for (let i2 of range2(anchor, head)) unselect(i2);
        head = i;
        for (let i2 of range2(anchor, head)) select2(i2);
      } else {
        anchor = head = i;
        if (selected.has(i)) {
          unselect(i);
          anchor = head = null;
          if (event.detail) event.currentTarget.blur();
        } else {
          select2(i);
        }
      }
      reinput();
    }
    function resort(event, column) {
      materialize();
      const th = event.currentTarget;
      let compare;
      if (currentSortHeader === th && event.metaKey) {
        orderof(currentSortHeader).textContent = "";
        currentSortHeader = null;
        currentReverse = false;
        compare = ascending;
      } else {
        if (currentSortHeader === th) {
          currentReverse = !currentReverse;
        } else {
          if (currentSortHeader) {
            orderof(currentSortHeader).textContent = "";
          }
          currentSortHeader = th;
          currentReverse = event.altKey;
        }
        const order = currentReverse ? descending : ascending;
        compare = (a, b) => order(array[a][column], array[b][column]);
        orderof(th).textContent = currentReverse ? "\u25BE" : "\u25B4";
      }
      index.sort(compare);
      selected = new Set(Array.from(selected).sort(compare));
      root.scrollTo(root.scrollLeft, 0);
      while (tbody.firstChild) tbody.firstChild.remove();
      appendRows(0, n = minlengthof(rows * 2));
      anchor = head = null;
      reinput();
    }
    function reinput() {
      const check = inputof(theadr);
      if (check == null) return;
      check.disabled = !multiple && !selected.size;
      check.indeterminate = multiple && selected.size && selected.size !== N;
      check.checked = selected.size;
      value = void 0;
    }
    root.addEventListener("scroll", () => {
      if (root.scrollHeight - root.scrollTop < rows * rowHeight * 1.5 && n < minlengthof(n + 1)) {
        appendRows(n, n = minlengthof(n + rows));
      }
    });
    if (sort === void 0 && reverse) {
      materialize();
      index.reverse();
    }
    if (value !== void 0) {
      materialize();
      if (multiple) {
        const values = new Set(value);
        selected = new Set(index.filter((i) => values.has(array[i])));
      } else {
        const i = array.indexOf(value);
        selected = i < 0 ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
      reinput();
    }
    if (minlengthof(1)) {
      appendRows(0, n);
    } else {
      tbody.append(html`<tr>${columns.length ? html`<td>` : null}<td rowspan=${columns.length} style="padding-left: var(--length3); font-style: italic;">No results.</td></tr>`);
    }
    if (sort !== void 0) {
      let i = columns.indexOf(sort);
      if (i >= 0) {
        if (reverse) currentSortHeader = theadr.childNodes[i + 1];
        resort({ currentTarget: theadr.childNodes[i + 1] }, columns[i]);
      }
    }
    return Object.defineProperty(root, "value", {
      get() {
        if (value === void 0) {
          materialize();
          if (multiple) {
            value = Array.from(required && selected.size === 0 ? index : selected, (i) => array[i]);
            value.columns = columns;
          } else if (selected.size) {
            const [i] = selected;
            value = array[i];
          } else {
            value = null;
          }
        }
        return value;
      },
      set(v) {
        materialize();
        if (multiple) {
          const values = new Set(v);
          const selection = new Set(index.filter((i) => values.has(array[i])));
          for (const i of selected) if (!selection.has(i)) unselect(i);
          for (const i of selection) if (!selected.has(i)) select2(i);
        } else {
          const i = array.indexOf(v);
          selected = i < 0 ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
        }
        value = void 0;
      }
    });
  }
  function inputof(tr) {
    return tr.firstChild.firstChild;
  }
  function orderof(th) {
    return th.firstChild;
  }
  function formatof(base = {}, data, columns, locale) {
    const format2 = /* @__PURE__ */ Object.create(null);
    for (const column of columns) {
      if (column in base) {
        format2[column] = base[column];
        continue;
      }
      switch (type(data, column)) {
        case "number":
          format2[column] = formatLocaleNumber(locale);
          break;
        case "date":
          format2[column] = formatDate$1;
          break;
        default:
          format2[column] = formatLocaleAuto(locale);
          break;
      }
    }
    return format2;
  }
  function alignof(base = {}, data, columns) {
    const align = /* @__PURE__ */ Object.create(null);
    for (const column of columns) {
      if (column in base) {
        align[column] = base[column];
      } else if (type(data, column) === "number") {
        align[column] = "right";
      }
    }
    return align;
  }
  function type(data, column) {
    if (isArrowTable(data)) return getArrowType(data, column);
    for (const d of data) {
      if (d == null) continue;
      const value = d[column];
      if (value == null) continue;
      if (typeof value === "number") return "number";
      if (value instanceof Date) return "date";
      return;
    }
  }
  function isArrowTable(value) {
    return typeof value.getChild === "function" && typeof value.toArray === "function" && value.schema && Array.isArray(value.schema.fields);
  }
  function getArrowType(value, column) {
    const field = value.schema.fields.find((d) => d.name === column);
    switch (field?.type.typeId) {
      case 8:
      // Date
      case 10:
        return field.type.unit === 1 ? "date" : "number";
      // millisecond
      case 2:
      // Int
      case 3:
      // Float
      case 7:
      // Decimal
      case 9:
        return "number";
    }
  }
  function lengthof(data) {
    if (typeof data.length === "number") return data.length;
    if (typeof data.size === "number") return data.size;
    if (typeof data.numRows === "function") return data.numRows();
  }
  function columnsof(data) {
    const columns = /* @__PURE__ */ new Set();
    for (const row of data) {
      for (const name in row) {
        columns.add(name);
      }
    }
    return Array.from(columns);
  }
  function textarea({
    value = "",
    label,
    placeholder,
    spellcheck,
    autocomplete,
    autocapitalize,
    rows = 3,
    minlength,
    maxlength,
    required = minlength > 0,
    readonly,
    disabled,
    monospace = false,
    resize = rows < 12,
    width,
    ...options
  } = {}) {
    const input2 = html`<textarea
    name=text
    readonly=${readonly}
    disabled=${disabled}
    required=${required}
    rows=${rows}
    minlength=${minlength}
    maxlength=${maxlength}
    spellcheck=${truefalse(spellcheck)}
    autocomplete=${onoff(autocomplete)}
    autocapitalize=${onoff(autocapitalize)}
    placeholder=${placeholder}
    onkeydown=${onkeydown}
    style=${{
      width,
      fontFamily: monospace ? "var(--monospace, monospace)" : null,
      resize: resize ? null : "none"
    }}
  >`;
    const form2 = html`<form class="inputs-3a86ea inputs-3a86ea-textarea" style=${maybeWidth(width)}>
    ${maybeLabel(label, input2)}<div>
      ${input2}
    </div>
  </form>`;
    function onkeydown(event) {
      if (options.submit && event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        return form2.dispatchEvent(new Event("submit", bubbles));
      }
    }
    return createText(form2, input2, value, options);
  }
  function input(value) {
    const target = new EventTarget();
    target.value = value;
    return target;
  }
  function disposal(element) {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        const target = element.closest(".observablehq");
        if (!target) return resolve();
        const observer = new MutationObserver(() => {
          if (target.contains(element)) return;
          observer.disconnect(), resolve();
        });
        observer.observe(target, { childList: true });
      });
    });
  }
  function bind(target, source, invalidation = disposal(target)) {
    const sourceEvent = eventof(source);
    const onsource = () => set(target, source);
    const ontarget = () => (set(source, target), source.dispatchEvent(new Event(sourceEvent, bubbles)));
    onsource();
    target.addEventListener(eventof(target), ontarget);
    source.addEventListener(sourceEvent, onsource);
    invalidation.then(() => source.removeEventListener(sourceEvent, onsource));
    return target;
  }
  function get(input2) {
    switch (input2.type) {
      case "range":
      case "number":
        return input2.valueAsNumber;
      case "date":
        return input2.valueAsDate;
      case "checkbox":
        return input2.checked;
      case "file":
        return input2.multiple ? input2.files : input2.files[0];
      default:
        return input2.value;
    }
  }
  function set(target, source) {
    const value = get(source);
    switch (target.type) {
      case "range":
      case "number":
        target.valueAsNumber = value;
        break;
      case "date":
        target.valueAsDate = value;
        break;
      case "checkbox":
        target.checked = value;
        break;
      case "file":
        target.multiple ? target.files = value : target.files = [value];
        break;
      default:
        target.value = value;
        break;
    }
  }
  function eventof(input2) {
    switch (input2.type) {
      case "button":
      case "submit":
        return "click";
      case "file":
        return "change";
      default:
        return "input";
    }
  }
  function useInput(make, deps, onChange, value) {
    const host = (0, import_react.useRef)(null);
    const el = (0, import_react.useRef)(null);
    const change = (0, import_react.useRef)(onChange);
    change.current = onChange;
    (0, import_react.useLayoutEffect)(() => {
      const node = make();
      el.current = node;
      const h = host.current;
      h.replaceChildren(node);
      const listener = () => change.current?.(node.value);
      node.addEventListener("input", listener);
      return () => {
        node.removeEventListener("input", listener);
        disposal(node).then(() => {
        });
        if (node.parentNode === h) h.removeChild(node);
      };
    }, deps);
    (0, import_react.useEffect)(() => {
      if (value !== void 0 && el.current && el.current.value !== value) {
        el.current.value = value;
      }
    }, [value]);
    return host;
  }
  function Host({
    host,
    className,
    style
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: host, className, style: { width: "100%", minWidth: 0, boxSizing: "border-box", ...style } });
  }
  function labelText(label) {
    return label == null ? void 0 : String(label);
  }
  function Button({ content = "OK", label, disabled, width, onClick, className, style }) {
    const host = useInput(
      () => button(content, { label: labelText(label), disabled, width, value: 0, reduce: (v) => v + 1 }),
      [content, labelText(label), disabled, width],
      onClick,
      void 0
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Toggle({ label, value, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => toggle({ label: labelText(label), value: value ?? false, disabled, width }),
      [labelText(label), disabled, width],
      onChange,
      value
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Checkbox({ options, label, value, format: format2, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => checkbox(options, { label: labelText(label), value, format: format2, disabled, width }),
      [options, labelText(label), format2, disabled, width],
      onChange,
      value
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Radio({ options, label, value, format: format2, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => radio(options, { label: labelText(label), value, format: format2, disabled, width }),
      [options, labelText(label), format2, disabled, width],
      onChange,
      value
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Select({ options, label, value, multiple, size, format: format2, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => select(options, { label: labelText(label), value, multiple, size, format: format2, disabled, width }),
      [options, labelText(label), multiple, size, format2, disabled, width],
      onChange,
      value
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function TextInput({ label, value, placeholder, type: type2 = "text", pattern, minlength, maxlength, required, submit, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => text({ label: labelText(label), value: value ?? "", placeholder, type: type2, pattern, minlength, maxlength, required, submit, disabled, width }),
      [labelText(label), placeholder, type2, pattern, minlength, maxlength, required, submit, disabled, width],
      onChange,
      value
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function TextareaInput({ label, value, placeholder, rows, cols, resize, spellcheck, minlength, maxlength, required, submit, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => textarea({ label: labelText(label), value: value ?? "", placeholder, rows, cols, resize, spellcheck, minlength, maxlength, required, submit, disabled, width }),
      [labelText(label), placeholder, rows, cols, resize, spellcheck, minlength, maxlength, required, submit, disabled, width],
      onChange,
      value
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function NumberInput({ label, value, min, max, step, placeholder, required, submit, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => number([min, max], { label: labelText(label), value, step, placeholder, required, submit, disabled, width }),
      [labelText(label), min, max, step, placeholder, required, submit, disabled, width],
      onChange,
      value
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Range({ min = 0, max = 1, step, label, value, format: format2, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => range([min, max], { label: labelText(label), step, value, format: format2, disabled, width }),
      [min, max, step, labelText(label), format2, disabled, width],
      onChange,
      value
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function DateInput({ label, value, min, max, required, submit, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => date({ label: labelText(label), value, min, max, required, submit, disabled, width }),
      [labelText(label), String(min), String(max), required, submit, disabled, width],
      onChange,
      void 0
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function DatetimeInput({ label, value, min, max, required, submit, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => datetime({ label: labelText(label), value, min, max, required, submit, disabled, width }),
      [labelText(label), String(min), String(max), required, submit, disabled, width],
      onChange,
      void 0
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Color({ label, value, submit, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => color({ label: labelText(label), value, submit, disabled, width }),
      [labelText(label), submit, disabled, width],
      onChange,
      value
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function FileInput({ label, accept, multiple, required, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => file({ label: labelText(label), accept, multiple, required, disabled, width }),
      [labelText(label), accept, multiple, required, disabled, width],
      onChange,
      void 0
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Search({ data, label, placeholder, columns, query, disabled, width, onChange, className, style }) {
    const host = useInput(
      () => search(data, { label: labelText(label), placeholder, columns, query, disabled, width }),
      [data, labelText(label), placeholder, columns, query, disabled, width],
      onChange,
      void 0
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Table({ data, columns, header, format: format2, sort, reverse, rows, width, height, select: select2, multiple, value, onChange, className, style }) {
    const host = useInput(
      () => table(data, { columns, header, format: format2, sort, reverse, rows, width, height, select: select2, multiple, value }),
      [data, columns, header, format2, sort, reverse, rows, width, height, select2, multiple],
      onChange,
      void 0
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Form({ fields, onChange, className, style }) {
    const host = useInput(
      () => {
        const built = {};
        for (const [k, f] of Object.entries(fields)) built[k] = f(dist_exports);
        return form(built);
      },
      [fields],
      onChange,
      void 0
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Host, { host, className, style });
  }
  function Theme({ name, children, className, style }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        "data-lc-theme": name,
        className,
        style: { background: "var(--theme-background)", color: "var(--theme-foreground)", font: "17px/1.5 var(--serif)", ...style },
        children
      }
    );
  }
  return __toCommonJS(index_exports);
})();
window.LopecodeDS=LopecodeDS.__dsMainNs?Object.assign({},LopecodeDS,LopecodeDS.__dsMainNs,{__dsMainNs:undefined}):LopecodeDS;
