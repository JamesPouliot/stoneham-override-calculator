var stonehamOverrideCalculator = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a15, b7) => {
    for (var prop in b7 || (b7 = {}))
      if (__hasOwnProp.call(b7, prop))
        __defNormalProp(a15, prop, b7[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b7)) {
        if (__propIsEnum.call(b7, prop))
          __defNormalProp(a15, prop, b7[prop]);
      }
    return a15;
  };
  var __spreadProps = (a15, b7) => __defProps(a15, __getOwnPropDescs(b7));
  var __restKey = (key) => typeof key === "symbol" ? key : key + "";
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

  // node_modules/preact/dist/preact.module.js
  function w(n9, l8) {
    for (var u17 in l8) n9[u17] = l8[u17];
    return n9;
  }
  function g(n9) {
    n9 && n9.parentNode && n9.parentNode.removeChild(n9);
  }
  function _(l8, u17, t9) {
    var i9, o11, r11, e8 = {};
    for (r11 in u17) "key" == r11 ? i9 = u17[r11] : "ref" == r11 ? o11 = u17[r11] : e8[r11] = u17[r11];
    if (arguments.length > 2 && (e8.children = arguments.length > 3 ? n.call(arguments, 2) : t9), "function" == typeof l8 && null != l8.defaultProps) for (r11 in l8.defaultProps) void 0 === e8[r11] && (e8[r11] = l8.defaultProps[r11]);
    return m(l8, e8, i9, o11, null);
  }
  function m(n9, t9, i9, o11, r11) {
    var e8 = { type: n9, props: t9, key: i9, ref: o11, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == r11 ? ++u : r11, __i: -1, __u: 0 };
    return null == r11 && null != l.vnode && l.vnode(e8), e8;
  }
  function b() {
    return { current: null };
  }
  function k(n9) {
    return n9.children;
  }
  function x(n9, l8) {
    this.props = n9, this.context = l8;
  }
  function S(n9, l8) {
    if (null == l8) return n9.__ ? S(n9.__, n9.__i + 1) : null;
    for (var u17; l8 < n9.__k.length; l8++) if (null != (u17 = n9.__k[l8]) && null != u17.__e) return u17.__e;
    return "function" == typeof n9.type ? S(n9) : null;
  }
  function C(n9) {
    var l8, u17;
    if (null != (n9 = n9.__) && null != n9.__c) {
      for (n9.__e = n9.__c.base = null, l8 = 0; l8 < n9.__k.length; l8++) if (null != (u17 = n9.__k[l8]) && null != u17.__e) {
        n9.__e = n9.__c.base = u17.__e;
        break;
      }
      return C(n9);
    }
  }
  function M(n9) {
    (!n9.__d && (n9.__d = true) && i.push(n9) && !$.__r++ || o != l.debounceRendering) && ((o = l.debounceRendering) || r)($);
  }
  function $() {
    for (var n9, u17, t9, o11, r11, f14, c13, s12 = 1; i.length; ) i.length > s12 && i.sort(e), n9 = i.shift(), s12 = i.length, n9.__d && (t9 = void 0, o11 = void 0, r11 = (o11 = (u17 = n9).__v).__e, f14 = [], c13 = [], u17.__P && ((t9 = w({}, o11)).__v = o11.__v + 1, l.vnode && l.vnode(t9), O(u17.__P, t9, o11, u17.__n, u17.__P.namespaceURI, 32 & o11.__u ? [r11] : null, f14, null == r11 ? S(o11) : r11, !!(32 & o11.__u), c13), t9.__v = o11.__v, t9.__.__k[t9.__i] = t9, N(f14, t9, c13), o11.__e = o11.__ = null, t9.__e != r11 && C(t9)));
    $.__r = 0;
  }
  function I(n9, l8, u17, t9, i9, o11, r11, e8, f14, c13, s12) {
    var a15, h8, y8, d6, w8, g6, _7, m8 = t9 && t9.__k || v, b7 = l8.length;
    for (f14 = P(u17, l8, m8, f14, b7), a15 = 0; a15 < b7; a15++) null != (y8 = u17.__k[a15]) && (h8 = -1 == y8.__i ? p : m8[y8.__i] || p, y8.__i = a15, g6 = O(n9, y8, h8, i9, o11, r11, e8, f14, c13, s12), d6 = y8.__e, y8.ref && h8.ref != y8.ref && (h8.ref && B(h8.ref, null, y8), s12.push(y8.ref, y8.__c || d6, y8)), null == w8 && null != d6 && (w8 = d6), (_7 = !!(4 & y8.__u)) || h8.__k === y8.__k ? f14 = A(y8, f14, n9, _7) : "function" == typeof y8.type && void 0 !== g6 ? f14 = g6 : d6 && (f14 = d6.nextSibling), y8.__u &= -7);
    return u17.__e = w8, f14;
  }
  function P(n9, l8, u17, t9, i9) {
    var o11, r11, e8, f14, c13, s12 = u17.length, a15 = s12, h8 = 0;
    for (n9.__k = new Array(i9), o11 = 0; o11 < i9; o11++) null != (r11 = l8[o11]) && "boolean" != typeof r11 && "function" != typeof r11 ? ("string" == typeof r11 || "number" == typeof r11 || "bigint" == typeof r11 || r11.constructor == String ? r11 = n9.__k[o11] = m(null, r11, null, null, null) : d(r11) ? r11 = n9.__k[o11] = m(k, { children: r11 }, null, null, null) : void 0 === r11.constructor && r11.__b > 0 ? r11 = n9.__k[o11] = m(r11.type, r11.props, r11.key, r11.ref ? r11.ref : null, r11.__v) : n9.__k[o11] = r11, f14 = o11 + h8, r11.__ = n9, r11.__b = n9.__b + 1, e8 = null, -1 != (c13 = r11.__i = L(r11, u17, f14, a15)) && (a15--, (e8 = u17[c13]) && (e8.__u |= 2)), null == e8 || null == e8.__v ? (-1 == c13 && (i9 > s12 ? h8-- : i9 < s12 && h8++), "function" != typeof r11.type && (r11.__u |= 4)) : c13 != f14 && (c13 == f14 - 1 ? h8-- : c13 == f14 + 1 ? h8++ : (c13 > f14 ? h8-- : h8++, r11.__u |= 4))) : n9.__k[o11] = null;
    if (a15) for (o11 = 0; o11 < s12; o11++) null != (e8 = u17[o11]) && 0 == (2 & e8.__u) && (e8.__e == t9 && (t9 = S(e8)), D(e8, e8));
    return t9;
  }
  function A(n9, l8, u17, t9) {
    var i9, o11;
    if ("function" == typeof n9.type) {
      for (i9 = n9.__k, o11 = 0; i9 && o11 < i9.length; o11++) i9[o11] && (i9[o11].__ = n9, l8 = A(i9[o11], l8, u17, t9));
      return l8;
    }
    n9.__e != l8 && (t9 && (l8 && n9.type && !l8.parentNode && (l8 = S(n9)), u17.insertBefore(n9.__e, l8 || null)), l8 = n9.__e);
    do {
      l8 = l8 && l8.nextSibling;
    } while (null != l8 && 8 == l8.nodeType);
    return l8;
  }
  function H(n9, l8) {
    return l8 = l8 || [], null == n9 || "boolean" == typeof n9 || (d(n9) ? n9.some(function(n10) {
      H(n10, l8);
    }) : l8.push(n9)), l8;
  }
  function L(n9, l8, u17, t9) {
    var i9, o11, r11, e8 = n9.key, f14 = n9.type, c13 = l8[u17], s12 = null != c13 && 0 == (2 & c13.__u);
    if (null === c13 && null == e8 || s12 && e8 == c13.key && f14 == c13.type) return u17;
    if (t9 > (s12 ? 1 : 0)) {
      for (i9 = u17 - 1, o11 = u17 + 1; i9 >= 0 || o11 < l8.length; ) if (null != (c13 = l8[r11 = i9 >= 0 ? i9-- : o11++]) && 0 == (2 & c13.__u) && e8 == c13.key && f14 == c13.type) return r11;
    }
    return -1;
  }
  function T(n9, l8, u17) {
    "-" == l8[0] ? n9.setProperty(l8, null == u17 ? "" : u17) : n9[l8] = null == u17 ? "" : "number" != typeof u17 || y.test(l8) ? u17 : u17 + "px";
  }
  function j(n9, l8, u17, t9, i9) {
    var o11, r11;
    n: if ("style" == l8) if ("string" == typeof u17) n9.style.cssText = u17;
    else {
      if ("string" == typeof t9 && (n9.style.cssText = t9 = ""), t9) for (l8 in t9) u17 && l8 in u17 || T(n9.style, l8, "");
      if (u17) for (l8 in u17) t9 && u17[l8] == t9[l8] || T(n9.style, l8, u17[l8]);
    }
    else if ("o" == l8[0] && "n" == l8[1]) o11 = l8 != (l8 = l8.replace(f, "$1")), r11 = l8.toLowerCase(), l8 = r11 in n9 || "onFocusOut" == l8 || "onFocusIn" == l8 ? r11.slice(2) : l8.slice(2), n9.l || (n9.l = {}), n9.l[l8 + o11] = u17, u17 ? t9 ? u17.u = t9.u : (u17.u = c, n9.addEventListener(l8, o11 ? a : s, o11)) : n9.removeEventListener(l8, o11 ? a : s, o11);
    else {
      if ("http://www.w3.org/2000/svg" == i9) l8 = l8.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l8 && "height" != l8 && "href" != l8 && "list" != l8 && "form" != l8 && "tabIndex" != l8 && "download" != l8 && "rowSpan" != l8 && "colSpan" != l8 && "role" != l8 && "popover" != l8 && l8 in n9) try {
        n9[l8] = null == u17 ? "" : u17;
        break n;
      } catch (n10) {
      }
      "function" == typeof u17 || (null == u17 || false === u17 && "-" != l8[4] ? n9.removeAttribute(l8) : n9.setAttribute(l8, "popover" == l8 && 1 == u17 ? "" : u17));
    }
  }
  function F(n9) {
    return function(u17) {
      if (this.l) {
        var t9 = this.l[u17.type + n9];
        if (null == u17.t) u17.t = c++;
        else if (u17.t < t9.u) return;
        return t9(l.event ? l.event(u17) : u17);
      }
    };
  }
  function O(n9, u17, t9, i9, o11, r11, e8, f14, c13, s12) {
    var a15, h8, p10, v6, y8, _7, m8, b7, S8, C10, M6, $5, P7, A7, H6, L6, T8, j10 = u17.type;
    if (void 0 !== u17.constructor) return null;
    128 & t9.__u && (c13 = !!(32 & t9.__u), r11 = [f14 = u17.__e = t9.__e]), (a15 = l.__b) && a15(u17);
    n: if ("function" == typeof j10) try {
      if (b7 = u17.props, S8 = "prototype" in j10 && j10.prototype.render, C10 = (a15 = j10.contextType) && i9[a15.__c], M6 = a15 ? C10 ? C10.props.value : a15.__ : i9, t9.__c ? m8 = (h8 = u17.__c = t9.__c).__ = h8.__E : (S8 ? u17.__c = h8 = new j10(b7, M6) : (u17.__c = h8 = new x(b7, M6), h8.constructor = j10, h8.render = E), C10 && C10.sub(h8), h8.state || (h8.state = {}), h8.__n = i9, p10 = h8.__d = true, h8.__h = [], h8._sb = []), S8 && null == h8.__s && (h8.__s = h8.state), S8 && null != j10.getDerivedStateFromProps && (h8.__s == h8.state && (h8.__s = w({}, h8.__s)), w(h8.__s, j10.getDerivedStateFromProps(b7, h8.__s))), v6 = h8.props, y8 = h8.state, h8.__v = u17, p10) S8 && null == j10.getDerivedStateFromProps && null != h8.componentWillMount && h8.componentWillMount(), S8 && null != h8.componentDidMount && h8.__h.push(h8.componentDidMount);
      else {
        if (S8 && null == j10.getDerivedStateFromProps && b7 !== v6 && null != h8.componentWillReceiveProps && h8.componentWillReceiveProps(b7, M6), u17.__v == t9.__v || !h8.__e && null != h8.shouldComponentUpdate && false === h8.shouldComponentUpdate(b7, h8.__s, M6)) {
          for (u17.__v != t9.__v && (h8.props = b7, h8.state = h8.__s, h8.__d = false), u17.__e = t9.__e, u17.__k = t9.__k, u17.__k.some(function(n10) {
            n10 && (n10.__ = u17);
          }), $5 = 0; $5 < h8._sb.length; $5++) h8.__h.push(h8._sb[$5]);
          h8._sb = [], h8.__h.length && e8.push(h8);
          break n;
        }
        null != h8.componentWillUpdate && h8.componentWillUpdate(b7, h8.__s, M6), S8 && null != h8.componentDidUpdate && h8.__h.push(function() {
          h8.componentDidUpdate(v6, y8, _7);
        });
      }
      if (h8.context = M6, h8.props = b7, h8.__P = n9, h8.__e = false, P7 = l.__r, A7 = 0, S8) {
        for (h8.state = h8.__s, h8.__d = false, P7 && P7(u17), a15 = h8.render(h8.props, h8.state, h8.context), H6 = 0; H6 < h8._sb.length; H6++) h8.__h.push(h8._sb[H6]);
        h8._sb = [];
      } else do {
        h8.__d = false, P7 && P7(u17), a15 = h8.render(h8.props, h8.state, h8.context), h8.state = h8.__s;
      } while (h8.__d && ++A7 < 25);
      h8.state = h8.__s, null != h8.getChildContext && (i9 = w(w({}, i9), h8.getChildContext())), S8 && !p10 && null != h8.getSnapshotBeforeUpdate && (_7 = h8.getSnapshotBeforeUpdate(v6, y8)), L6 = a15, null != a15 && a15.type === k && null == a15.key && (L6 = V(a15.props.children)), f14 = I(n9, d(L6) ? L6 : [L6], u17, t9, i9, o11, r11, e8, f14, c13, s12), h8.base = u17.__e, u17.__u &= -161, h8.__h.length && e8.push(h8), m8 && (h8.__E = h8.__ = null);
    } catch (n10) {
      if (u17.__v = null, c13 || null != r11) if (n10.then) {
        for (u17.__u |= c13 ? 160 : 128; f14 && 8 == f14.nodeType && f14.nextSibling; ) f14 = f14.nextSibling;
        r11[r11.indexOf(f14)] = null, u17.__e = f14;
      } else {
        for (T8 = r11.length; T8--; ) g(r11[T8]);
        z(u17);
      }
      else u17.__e = t9.__e, u17.__k = t9.__k, n10.then || z(u17);
      l.__e(n10, u17, t9);
    }
    else null == r11 && u17.__v == t9.__v ? (u17.__k = t9.__k, u17.__e = t9.__e) : f14 = u17.__e = q(t9.__e, u17, t9, i9, o11, r11, e8, c13, s12);
    return (a15 = l.diffed) && a15(u17), 128 & u17.__u ? void 0 : f14;
  }
  function z(n9) {
    n9 && n9.__c && (n9.__c.__e = true), n9 && n9.__k && n9.__k.forEach(z);
  }
  function N(n9, u17, t9) {
    for (var i9 = 0; i9 < t9.length; i9++) B(t9[i9], t9[++i9], t9[++i9]);
    l.__c && l.__c(u17, n9), n9.some(function(u18) {
      try {
        n9 = u18.__h, u18.__h = [], n9.some(function(n10) {
          n10.call(u18);
        });
      } catch (n10) {
        l.__e(n10, u18.__v);
      }
    });
  }
  function V(n9) {
    return "object" != typeof n9 || null == n9 || n9.__b && n9.__b > 0 ? n9 : d(n9) ? n9.map(V) : w({}, n9);
  }
  function q(u17, t9, i9, o11, r11, e8, f14, c13, s12) {
    var a15, h8, v6, y8, w8, _7, m8, b7 = i9.props || p, k7 = t9.props, x6 = t9.type;
    if ("svg" == x6 ? r11 = "http://www.w3.org/2000/svg" : "math" == x6 ? r11 = "http://www.w3.org/1998/Math/MathML" : r11 || (r11 = "http://www.w3.org/1999/xhtml"), null != e8) {
      for (a15 = 0; a15 < e8.length; a15++) if ((w8 = e8[a15]) && "setAttribute" in w8 == !!x6 && (x6 ? w8.localName == x6 : 3 == w8.nodeType)) {
        u17 = w8, e8[a15] = null;
        break;
      }
    }
    if (null == u17) {
      if (null == x6) return document.createTextNode(k7);
      u17 = document.createElementNS(r11, x6, k7.is && k7), c13 && (l.__m && l.__m(t9, e8), c13 = false), e8 = null;
    }
    if (null == x6) b7 === k7 || c13 && u17.data == k7 || (u17.data = k7);
    else {
      if (e8 = e8 && n.call(u17.childNodes), !c13 && null != e8) for (b7 = {}, a15 = 0; a15 < u17.attributes.length; a15++) b7[(w8 = u17.attributes[a15]).name] = w8.value;
      for (a15 in b7) if (w8 = b7[a15], "children" == a15) ;
      else if ("dangerouslySetInnerHTML" == a15) v6 = w8;
      else if (!(a15 in k7)) {
        if ("value" == a15 && "defaultValue" in k7 || "checked" == a15 && "defaultChecked" in k7) continue;
        j(u17, a15, null, w8, r11);
      }
      for (a15 in k7) w8 = k7[a15], "children" == a15 ? y8 = w8 : "dangerouslySetInnerHTML" == a15 ? h8 = w8 : "value" == a15 ? _7 = w8 : "checked" == a15 ? m8 = w8 : c13 && "function" != typeof w8 || b7[a15] === w8 || j(u17, a15, w8, b7[a15], r11);
      if (h8) c13 || v6 && (h8.__html == v6.__html || h8.__html == u17.innerHTML) || (u17.innerHTML = h8.__html), t9.__k = [];
      else if (v6 && (u17.innerHTML = ""), I("template" == t9.type ? u17.content : u17, d(y8) ? y8 : [y8], t9, i9, o11, "foreignObject" == x6 ? "http://www.w3.org/1999/xhtml" : r11, e8, f14, e8 ? e8[0] : i9.__k && S(i9, 0), c13, s12), null != e8) for (a15 = e8.length; a15--; ) g(e8[a15]);
      c13 || (a15 = "value", "progress" == x6 && null == _7 ? u17.removeAttribute("value") : null != _7 && (_7 !== u17[a15] || "progress" == x6 && !_7 || "option" == x6 && _7 != b7[a15]) && j(u17, a15, _7, b7[a15], r11), a15 = "checked", null != m8 && m8 != u17[a15] && j(u17, a15, m8, b7[a15], r11));
    }
    return u17;
  }
  function B(n9, u17, t9) {
    try {
      if ("function" == typeof n9) {
        var i9 = "function" == typeof n9.__u;
        i9 && n9.__u(), i9 && null == u17 || (n9.__u = n9(u17));
      } else n9.current = u17;
    } catch (n10) {
      l.__e(n10, t9);
    }
  }
  function D(n9, u17, t9) {
    var i9, o11;
    if (l.unmount && l.unmount(n9), (i9 = n9.ref) && (i9.current && i9.current != n9.__e || B(i9, null, u17)), null != (i9 = n9.__c)) {
      if (i9.componentWillUnmount) try {
        i9.componentWillUnmount();
      } catch (n10) {
        l.__e(n10, u17);
      }
      i9.base = i9.__P = null;
    }
    if (i9 = n9.__k) for (o11 = 0; o11 < i9.length; o11++) i9[o11] && D(i9[o11], u17, t9 || "function" != typeof n9.type);
    t9 || g(n9.__e), n9.__c = n9.__ = n9.__e = void 0;
  }
  function E(n9, l8, u17) {
    return this.constructor(n9, u17);
  }
  function G(u17, t9, i9) {
    var o11, r11, e8, f14;
    t9 == document && (t9 = document.documentElement), l.__ && l.__(u17, t9), r11 = (o11 = "function" == typeof i9) ? null : i9 && i9.__k || t9.__k, e8 = [], f14 = [], O(t9, u17 = (!o11 && i9 || t9).__k = _(k, null, [u17]), r11 || p, p, t9.namespaceURI, !o11 && i9 ? [i9] : r11 ? null : t9.firstChild ? n.call(t9.childNodes) : null, e8, !o11 && i9 ? i9 : r11 ? r11.__e : t9.firstChild, o11, f14), N(e8, u17, f14);
  }
  function J(n9, l8) {
    G(n9, l8, J);
  }
  function K(l8, u17, t9) {
    var i9, o11, r11, e8, f14 = w({}, l8.props);
    for (r11 in l8.type && l8.type.defaultProps && (e8 = l8.type.defaultProps), u17) "key" == r11 ? i9 = u17[r11] : "ref" == r11 ? o11 = u17[r11] : f14[r11] = void 0 === u17[r11] && null != e8 ? e8[r11] : u17[r11];
    return arguments.length > 2 && (f14.children = arguments.length > 3 ? n.call(arguments, 2) : t9), m(l8.type, f14, i9 || l8.key, o11 || l8.ref, null);
  }
  function Q(n9) {
    function l8(n10) {
      var u17, t9;
      return this.getChildContext || (u17 = /* @__PURE__ */ new Set(), (t9 = {})[l8.__c] = this, this.getChildContext = function() {
        return t9;
      }, this.componentWillUnmount = function() {
        u17 = null;
      }, this.shouldComponentUpdate = function(n11) {
        this.props.value != n11.value && u17.forEach(function(n12) {
          n12.__e = true, M(n12);
        });
      }, this.sub = function(n11) {
        u17.add(n11);
        var l9 = n11.componentWillUnmount;
        n11.componentWillUnmount = function() {
          u17 && u17.delete(n11), l9 && l9.call(n11);
        };
      }), n10.children;
    }
    return l8.__c = "__cC" + h++, l8.__ = n9, l8.Provider = l8.__l = (l8.Consumer = function(n10, l9) {
      return n10.children(l9);
    }).contextType = l8, l8;
  }
  var n, l, u, t, i, o, r, e, f, c, s, a, h, p, v, y, d;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      p = {};
      v = [];
      y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      d = Array.isArray;
      n = v.slice, l = { __e: function(n9, l8, u17, t9) {
        for (var i9, o11, r11; l8 = l8.__; ) if ((i9 = l8.__c) && !i9.__) try {
          if ((o11 = i9.constructor) && null != o11.getDerivedStateFromError && (i9.setState(o11.getDerivedStateFromError(n9)), r11 = i9.__d), null != i9.componentDidCatch && (i9.componentDidCatch(n9, t9 || {}), r11 = i9.__d), r11) return i9.__E = i9;
        } catch (l9) {
          n9 = l9;
        }
        throw n9;
      } }, u = 0, t = function(n9) {
        return null != n9 && void 0 === n9.constructor;
      }, x.prototype.setState = function(n9, l8) {
        var u17;
        u17 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n9 && (n9 = n9(w({}, u17), this.props)), n9 && w(u17, n9), null != n9 && this.__v && (l8 && this._sb.push(l8), M(this));
      }, x.prototype.forceUpdate = function(n9) {
        this.__v && (this.__e = true, n9 && this.__h.push(n9), M(this));
      }, x.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n9, l8) {
        return n9.__v.__b - l8.__v.__b;
      }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function p2(n9, t9) {
    c2.__h && c2.__h(r2, n9, o2 || t9), o2 = 0;
    var u17 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n9 >= u17.__.length && u17.__.push({}), u17.__[n9];
  }
  function d2(n9) {
    return o2 = 1, h2(D2, n9);
  }
  function h2(n9, u17, i9) {
    var o11 = p2(t2++, 2);
    if (o11.t = n9, !o11.__c && (o11.__ = [i9 ? i9(u17) : D2(void 0, u17), function(n10) {
      var t9 = o11.__N ? o11.__N[0] : o11.__[0], r11 = o11.t(t9, n10);
      t9 !== r11 && (o11.__N = [r11, o11.__[1]], o11.__c.setState({}));
    }], o11.__c = r2, !r2.__f)) {
      var f14 = function(n10, t9, r11) {
        if (!o11.__c.__H) return true;
        var u18 = o11.__c.__H.__.filter(function(n11) {
          return !!n11.__c;
        });
        if (u18.every(function(n11) {
          return !n11.__N;
        })) return !c13 || c13.call(this, n10, t9, r11);
        var i10 = o11.__c.props !== n10;
        return u18.forEach(function(n11) {
          if (n11.__N) {
            var t10 = n11.__[0];
            n11.__ = n11.__N, n11.__N = void 0, t10 !== n11.__[0] && (i10 = true);
          }
        }), c13 && c13.call(this, n10, t9, r11) || i10;
      };
      r2.__f = true;
      var c13 = r2.shouldComponentUpdate, e8 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n10, t9, r11) {
        if (this.__e) {
          var u18 = c13;
          c13 = void 0, f14(n10, t9, r11), c13 = u18;
        }
        e8 && e8.call(this, n10, t9, r11);
      }, r2.shouldComponentUpdate = f14;
    }
    return o11.__N || o11.__;
  }
  function y2(n9, u17) {
    var i9 = p2(t2++, 3);
    !c2.__s && C2(i9.__H, u17) && (i9.__ = n9, i9.u = u17, r2.__H.__h.push(i9));
  }
  function _2(n9, u17) {
    var i9 = p2(t2++, 4);
    !c2.__s && C2(i9.__H, u17) && (i9.__ = n9, i9.u = u17, r2.__h.push(i9));
  }
  function A2(n9) {
    return o2 = 5, T2(function() {
      return { current: n9 };
    }, []);
  }
  function F2(n9, t9, r11) {
    o2 = 6, _2(function() {
      if ("function" == typeof n9) {
        var r12 = n9(t9());
        return function() {
          n9(null), r12 && "function" == typeof r12 && r12();
        };
      }
      if (n9) return n9.current = t9(), function() {
        return n9.current = null;
      };
    }, null == r11 ? r11 : r11.concat(n9));
  }
  function T2(n9, r11) {
    var u17 = p2(t2++, 7);
    return C2(u17.__H, r11) && (u17.__ = n9(), u17.__H = r11, u17.__h = n9), u17.__;
  }
  function q2(n9, t9) {
    return o2 = 8, T2(function() {
      return n9;
    }, t9);
  }
  function x2(n9) {
    var u17 = r2.context[n9.__c], i9 = p2(t2++, 9);
    return i9.c = n9, u17 ? (null == i9.__ && (i9.__ = true, u17.sub(r2)), u17.props.value) : n9.__;
  }
  function P2(n9, t9) {
    c2.useDebugValue && c2.useDebugValue(t9 ? t9(n9) : n9);
  }
  function b2(n9) {
    var u17 = p2(t2++, 10), i9 = d2();
    return u17.__ = n9, r2.componentDidCatch || (r2.componentDidCatch = function(n10, t9) {
      u17.__ && u17.__(n10, t9), i9[1](n10);
    }), [i9[0], function() {
      i9[1](void 0);
    }];
  }
  function g2() {
    var n9 = p2(t2++, 11);
    if (!n9.__) {
      for (var u17 = r2.__v; null !== u17 && !u17.__m && null !== u17.__; ) u17 = u17.__;
      var i9 = u17.__m || (u17.__m = [0, 0]);
      n9.__ = "P" + i9[0] + "-" + i9[1]++;
    }
    return n9.__;
  }
  function j2() {
    for (var n9; n9 = f2.shift(); ) if (n9.__P && n9.__H) try {
      n9.__H.__h.forEach(z2), n9.__H.__h.forEach(B2), n9.__H.__h = [];
    } catch (t9) {
      n9.__H.__h = [], c2.__e(t9, n9.__v);
    }
  }
  function w2(n9) {
    var t9, r11 = function() {
      clearTimeout(u17), k2 && cancelAnimationFrame(t9), setTimeout(n9);
    }, u17 = setTimeout(r11, 35);
    k2 && (t9 = requestAnimationFrame(r11));
  }
  function z2(n9) {
    var t9 = r2, u17 = n9.__c;
    "function" == typeof u17 && (n9.__c = void 0, u17()), r2 = t9;
  }
  function B2(n9) {
    var t9 = r2;
    n9.__c = n9.__(), r2 = t9;
  }
  function C2(n9, t9) {
    return !n9 || n9.length !== t9.length || t9.some(function(t10, r11) {
      return t10 !== n9[r11];
    });
  }
  function D2(n9, t9) {
    return "function" == typeof t9 ? t9(n9) : t9;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, s2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = l;
      e2 = c2.__b;
      a2 = c2.__r;
      v2 = c2.diffed;
      l2 = c2.__c;
      m2 = c2.unmount;
      s2 = c2.__;
      c2.__b = function(n9) {
        r2 = null, e2 && e2(n9);
      }, c2.__ = function(n9, t9) {
        n9 && t9.__k && t9.__k.__m && (n9.__m = t9.__k.__m), s2 && s2(n9, t9);
      }, c2.__r = function(n9) {
        a2 && a2(n9), t2 = 0;
        var i9 = (r2 = n9.__c).__H;
        i9 && (u2 === r2 ? (i9.__h = [], r2.__h = [], i9.__.forEach(function(n10) {
          n10.__N && (n10.__ = n10.__N), n10.u = n10.__N = void 0;
        })) : (i9.__h.forEach(z2), i9.__h.forEach(B2), i9.__h = [], t2 = 0)), u2 = r2;
      }, c2.diffed = function(n9) {
        v2 && v2(n9);
        var t9 = n9.__c;
        t9 && t9.__H && (t9.__H.__h.length && (1 !== f2.push(t9) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t9.__H.__.forEach(function(n10) {
          n10.u && (n10.__H = n10.u), n10.u = void 0;
        })), u2 = r2 = null;
      }, c2.__c = function(n9, t9) {
        t9.some(function(n10) {
          try {
            n10.__h.forEach(z2), n10.__h = n10.__h.filter(function(n11) {
              return !n11.__ || B2(n11);
            });
          } catch (r11) {
            t9.some(function(n11) {
              n11.__h && (n11.__h = []);
            }), t9 = [], c2.__e(r11, n10.__v);
          }
        }), l2 && l2(n9, t9);
      }, c2.unmount = function(n9) {
        m2 && m2(n9);
        var t9, r11 = n9.__c;
        r11 && r11.__H && (r11.__H.__.forEach(function(n10) {
          try {
            z2(n10);
          } catch (n11) {
            t9 = n11;
          }
        }), r11.__H = void 0, t9 && c2.__e(t9, r11.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  var compat_module_exports = {};
  __export(compat_module_exports, {
    Children: () => O2,
    Component: () => x,
    Fragment: () => k,
    PureComponent: () => N2,
    StrictMode: () => Cn,
    Suspense: () => P3,
    SuspenseList: () => B3,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => hn,
    cloneElement: () => _n,
    createContext: () => Q,
    createElement: () => _,
    createFactory: () => dn,
    createPortal: () => $2,
    createRef: () => b,
    default: () => xn,
    findDOMNode: () => Sn,
    flushSync: () => En,
    forwardRef: () => D3,
    hydrate: () => tn,
    isElement: () => Rn,
    isFragment: () => pn,
    isMemo: () => yn,
    isValidElement: () => mn,
    lazy: () => z3,
    memo: () => M2,
    render: () => nn,
    startTransition: () => x3,
    unmountComponentAtNode: () => bn,
    unstable_batchedUpdates: () => gn,
    useCallback: () => q2,
    useContext: () => x2,
    useDebugValue: () => P2,
    useDeferredValue: () => w3,
    useEffect: () => y2,
    useErrorBoundary: () => b2,
    useId: () => g2,
    useImperativeHandle: () => F2,
    useInsertionEffect: () => I2,
    useLayoutEffect: () => _2,
    useMemo: () => T2,
    useReducer: () => h2,
    useRef: () => A2,
    useState: () => d2,
    useSyncExternalStore: () => C3,
    useTransition: () => k3,
    version: () => vn
  });
  function g3(n9, t9) {
    for (var e8 in t9) n9[e8] = t9[e8];
    return n9;
  }
  function E2(n9, t9) {
    for (var e8 in n9) if ("__source" !== e8 && !(e8 in t9)) return true;
    for (var r11 in t9) if ("__source" !== r11 && n9[r11] !== t9[r11]) return true;
    return false;
  }
  function C3(n9, t9) {
    var e8 = t9(), r11 = d2({ t: { __: e8, u: t9 } }), u17 = r11[0].t, o11 = r11[1];
    return _2(function() {
      u17.__ = e8, u17.u = t9, R(u17) && o11({ t: u17 });
    }, [n9, e8, t9]), y2(function() {
      return R(u17) && o11({ t: u17 }), n9(function() {
        R(u17) && o11({ t: u17 });
      });
    }, [n9]), e8;
  }
  function R(n9) {
    var t9, e8, r11 = n9.u, u17 = n9.__;
    try {
      var o11 = r11();
      return !((t9 = u17) === (e8 = o11) && (0 !== t9 || 1 / t9 == 1 / e8) || t9 != t9 && e8 != e8);
    } catch (n10) {
      return true;
    }
  }
  function x3(n9) {
    n9();
  }
  function w3(n9) {
    return n9;
  }
  function k3() {
    return [false, x3];
  }
  function N2(n9, t9) {
    this.props = n9, this.context = t9;
  }
  function M2(n9, e8) {
    function r11(n10) {
      var t9 = this.props.ref, r12 = t9 == n10.ref;
      return !r12 && t9 && (t9.call ? t9(null) : t9.current = null), e8 ? !e8(this.props, n10) || !r12 : E2(this.props, n10);
    }
    function u17(e9) {
      return this.shouldComponentUpdate = r11, _(n9, e9);
    }
    return u17.displayName = "Memo(" + (n9.displayName || n9.name) + ")", u17.prototype.isReactComponent = true, u17.__f = true, u17.type = n9, u17;
  }
  function D3(n9) {
    function t9(t10) {
      var e8 = g3({}, t10);
      return delete e8.ref, n9(e8, t10.ref || null);
    }
    return t9.$$typeof = A3, t9.render = n9, t9.prototype.isReactComponent = t9.__f = true, t9.displayName = "ForwardRef(" + (n9.displayName || n9.name) + ")", t9;
  }
  function V2(n9, t9, e8) {
    return n9 && (n9.__c && n9.__c.__H && (n9.__c.__H.__.forEach(function(n10) {
      "function" == typeof n10.__c && n10.__c();
    }), n9.__c.__H = null), null != (n9 = g3({}, n9)).__c && (n9.__c.__P === e8 && (n9.__c.__P = t9), n9.__c.__e = true, n9.__c = null), n9.__k = n9.__k && n9.__k.map(function(n10) {
      return V2(n10, t9, e8);
    })), n9;
  }
  function W(n9, t9, e8) {
    return n9 && e8 && (n9.__v = null, n9.__k = n9.__k && n9.__k.map(function(n10) {
      return W(n10, t9, e8);
    }), n9.__c && n9.__c.__P === t9 && (n9.__e && e8.appendChild(n9.__e), n9.__c.__e = true, n9.__c.__P = e8)), n9;
  }
  function P3() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function j3(n9) {
    if (!n9.__) return null;
    var t9 = n9.__.__c;
    return t9 && t9.__a && t9.__a(n9);
  }
  function z3(n9) {
    var e8, r11, u17, o11 = null;
    function i9(i10) {
      if (e8 || (e8 = n9()).then(function(n10) {
        n10 && (o11 = n10.default || n10), u17 = true;
      }, function(n10) {
        r11 = n10, u17 = true;
      }), r11) throw r11;
      if (!u17) throw e8;
      return o11 ? _(o11, i10) : null;
    }
    return i9.displayName = "Lazy", i9.__f = true, i9;
  }
  function B3() {
    this.i = null, this.l = null;
  }
  function Z(n9) {
    return this.getChildContext = function() {
      return n9.context;
    }, n9.children;
  }
  function Y(n9) {
    var e8 = this, r11 = n9.h;
    if (e8.componentWillUnmount = function() {
      G(null, e8.v), e8.v = null, e8.h = null;
    }, e8.h && e8.h !== r11 && e8.componentWillUnmount(), !e8.v) {
      for (var u17 = e8.__v; null !== u17 && !u17.__m && null !== u17.__; ) u17 = u17.__;
      e8.h = r11, e8.v = { nodeType: 1, parentNode: r11, childNodes: [], __k: { __m: u17.__m }, contains: function() {
        return true;
      }, namespaceURI: r11.namespaceURI, insertBefore: function(n10, t9) {
        this.childNodes.push(n10), e8.h.insertBefore(n10, t9);
      }, removeChild: function(n10) {
        this.childNodes.splice(this.childNodes.indexOf(n10) >>> 1, 1), e8.h.removeChild(n10);
      } };
    }
    G(_(Z, { context: e8.context }, n9.__v), e8.v);
  }
  function $2(n9, e8) {
    var r11 = _(Y, { __v: n9, h: e8 });
    return r11.containerInfo = e8, r11;
  }
  function nn(n9, t9, e8) {
    return null == t9.__k && (t9.textContent = ""), G(n9, t9), "function" == typeof e8 && e8(), n9 ? n9.__c : null;
  }
  function tn(n9, t9, e8) {
    return J(n9, t9), "function" == typeof e8 && e8(), n9 ? n9.__c : null;
  }
  function rn() {
  }
  function un() {
    return this.cancelBubble;
  }
  function on() {
    return this.defaultPrevented;
  }
  function dn(n9) {
    return _.bind(null, n9);
  }
  function mn(n9) {
    return !!n9 && n9.$$typeof === q3;
  }
  function pn(n9) {
    return mn(n9) && n9.type === k;
  }
  function yn(n9) {
    return !!n9 && !!n9.displayName && ("string" == typeof n9.displayName || n9.displayName instanceof String) && n9.displayName.startsWith("Memo(");
  }
  function _n(n9) {
    return mn(n9) ? K.apply(null, arguments) : n9;
  }
  function bn(n9) {
    return !!n9.__k && (G(null, n9), true);
  }
  function Sn(n9) {
    return n9 && (n9.base || 1 === n9.nodeType && n9) || null;
  }
  var I2, T3, A3, L2, O2, U, F3, H2, q3, G2, J2, K2, Q2, X, en, ln, cn, fn, an, sn, hn, vn, gn, En, Cn, Rn, xn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      I2 = _2;
      (N2.prototype = new x()).isPureReactComponent = true, N2.prototype.shouldComponentUpdate = function(n9, t9) {
        return E2(this.props, n9) || E2(this.state, t9);
      };
      T3 = l.__b;
      l.__b = function(n9) {
        n9.type && n9.type.__f && n9.ref && (n9.props.ref = n9.ref, n9.ref = null), T3 && T3(n9);
      };
      A3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      L2 = function(n9, t9) {
        return null == n9 ? null : H(H(n9).map(t9));
      };
      O2 = { map: L2, forEach: L2, count: function(n9) {
        return n9 ? H(n9).length : 0;
      }, only: function(n9) {
        var t9 = H(n9);
        if (1 !== t9.length) throw "Children.only";
        return t9[0];
      }, toArray: H };
      U = l.__e;
      l.__e = function(n9, t9, e8, r11) {
        if (n9.then) {
          for (var u17, o11 = t9; o11 = o11.__; ) if ((u17 = o11.__c) && u17.__c) return null == t9.__e && (t9.__e = e8.__e, t9.__k = e8.__k), u17.__c(n9, t9);
        }
        U(n9, t9, e8, r11);
      };
      F3 = l.unmount;
      l.unmount = function(n9) {
        var t9 = n9.__c;
        t9 && (t9.__z = true), t9 && t9.__R && t9.__R(), t9 && 32 & n9.__u && (n9.type = null), F3 && F3(n9);
      }, (P3.prototype = new x()).__c = function(n9, t9) {
        var e8 = t9.__c, r11 = this;
        null == r11.o && (r11.o = []), r11.o.push(e8);
        var u17 = j3(r11.__v), o11 = false, i9 = function() {
          o11 || r11.__z || (o11 = true, e8.__R = null, u17 ? u17(c13) : c13());
        };
        e8.__R = i9;
        var l8 = e8.__P;
        e8.__P = null;
        var c13 = function() {
          if (!--r11.__u) {
            if (r11.state.__a) {
              var n10 = r11.state.__a;
              r11.__v.__k[0] = W(n10, n10.__c.__P, n10.__c.__O);
            }
            var t10;
            for (r11.setState({ __a: r11.__b = null }); t10 = r11.o.pop(); ) t10.__P = l8, t10.forceUpdate();
          }
        };
        r11.__u++ || 32 & t9.__u || r11.setState({ __a: r11.__b = r11.__v.__k[0] }), n9.then(i9, i9);
      }, P3.prototype.componentWillUnmount = function() {
        this.o = [];
      }, P3.prototype.render = function(n9, e8) {
        if (this.__b) {
          if (this.__v.__k) {
            var r11 = document.createElement("div"), o11 = this.__v.__k[0].__c;
            this.__v.__k[0] = V2(this.__b, r11, o11.__O = o11.__P);
          }
          this.__b = null;
        }
        var i9 = e8.__a && _(k, null, n9.fallback);
        return i9 && (i9.__u &= -33), [_(k, null, e8.__a ? null : n9.children), i9];
      };
      H2 = function(n9, t9, e8) {
        if (++e8[1] === e8[0] && n9.l.delete(t9), n9.props.revealOrder && ("t" !== n9.props.revealOrder[0] || !n9.l.size)) for (e8 = n9.i; e8; ) {
          for (; e8.length > 3; ) e8.pop()();
          if (e8[1] < e8[0]) break;
          n9.i = e8 = e8[2];
        }
      };
      (B3.prototype = new x()).__a = function(n9) {
        var t9 = this, e8 = j3(t9.__v), r11 = t9.l.get(n9);
        return r11[0]++, function(u17) {
          var o11 = function() {
            t9.props.revealOrder ? (r11.push(u17), H2(t9, n9, r11)) : u17();
          };
          e8 ? e8(o11) : o11();
        };
      }, B3.prototype.render = function(n9) {
        this.i = null, this.l = /* @__PURE__ */ new Map();
        var t9 = H(n9.children);
        n9.revealOrder && "b" === n9.revealOrder[0] && t9.reverse();
        for (var e8 = t9.length; e8--; ) this.l.set(t9[e8], this.i = [1, 0, this.i]);
        return n9.children;
      }, B3.prototype.componentDidUpdate = B3.prototype.componentDidMount = function() {
        var n9 = this;
        this.l.forEach(function(t9, e8) {
          H2(n9, e8, t9);
        });
      };
      q3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      K2 = /[A-Z0-9]/g;
      Q2 = "undefined" != typeof document;
      X = function(n9) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n9);
      };
      x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t9) {
        Object.defineProperty(x.prototype, t9, { configurable: true, get: function() {
          return this["UNSAFE_" + t9];
        }, set: function(n9) {
          Object.defineProperty(this, t9, { configurable: true, writable: true, value: n9 });
        } });
      });
      en = l.event;
      l.event = function(n9) {
        return en && (n9 = en(n9)), n9.persist = rn, n9.isPropagationStopped = un, n9.isDefaultPrevented = on, n9.nativeEvent = n9;
      };
      cn = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      fn = l.vnode;
      l.vnode = function(n9) {
        "string" == typeof n9.type && (function(n10) {
          var t9 = n10.props, e8 = n10.type, u17 = {}, o11 = -1 === e8.indexOf("-");
          for (var i9 in t9) {
            var l8 = t9[i9];
            if (!("value" === i9 && "defaultValue" in t9 && null == l8 || Q2 && "children" === i9 && "noscript" === e8 || "class" === i9 || "className" === i9)) {
              var c13 = i9.toLowerCase();
              "defaultValue" === i9 && "value" in t9 && null == t9.value ? i9 = "value" : "download" === i9 && true === l8 ? l8 = "" : "translate" === c13 && "no" === l8 ? l8 = false : "o" === c13[0] && "n" === c13[1] ? "ondoubleclick" === c13 ? i9 = "ondblclick" : "onchange" !== c13 || "input" !== e8 && "textarea" !== e8 || X(t9.type) ? "onfocus" === c13 ? i9 = "onfocusin" : "onblur" === c13 ? i9 = "onfocusout" : J2.test(i9) && (i9 = c13) : c13 = i9 = "oninput" : o11 && G2.test(i9) ? i9 = i9.replace(K2, "-$&").toLowerCase() : null === l8 && (l8 = void 0), "oninput" === c13 && u17[i9 = c13] && (i9 = "oninputCapture"), u17[i9] = l8;
            }
          }
          "select" == e8 && u17.multiple && Array.isArray(u17.value) && (u17.value = H(t9.children).forEach(function(n11) {
            n11.props.selected = -1 != u17.value.indexOf(n11.props.value);
          })), "select" == e8 && null != u17.defaultValue && (u17.value = H(t9.children).forEach(function(n11) {
            n11.props.selected = u17.multiple ? -1 != u17.defaultValue.indexOf(n11.props.value) : u17.defaultValue == n11.props.value;
          })), t9.class && !t9.className ? (u17.class = t9.class, Object.defineProperty(u17, "className", cn)) : (t9.className && !t9.class || t9.class && t9.className) && (u17.class = u17.className = t9.className), n10.props = u17;
        })(n9), n9.$$typeof = q3, fn && fn(n9);
      };
      an = l.__r;
      l.__r = function(n9) {
        an && an(n9), ln = n9.__c;
      };
      sn = l.diffed;
      l.diffed = function(n9) {
        sn && sn(n9);
        var t9 = n9.props, e8 = n9.__e;
        null != e8 && "textarea" === n9.type && "value" in t9 && t9.value !== e8.value && (e8.value = null == t9.value ? "" : t9.value), ln = null;
      };
      hn = { ReactCurrentDispatcher: { current: { readContext: function(n9) {
        return ln.__n[n9.__c].props.value;
      }, useCallback: q2, useContext: x2, useDebugValue: P2, useDeferredValue: w3, useEffect: y2, useId: g2, useImperativeHandle: F2, useInsertionEffect: I2, useLayoutEffect: _2, useMemo: T2, useReducer: h2, useRef: A2, useState: d2, useSyncExternalStore: C3, useTransition: k3 } } };
      vn = "18.3.1";
      gn = function(n9, t9) {
        return n9(t9);
      };
      En = function(n9, t9) {
        return n9(t9);
      };
      Cn = k;
      Rn = mn;
      xn = { useState: d2, useId: g2, useReducer: h2, useEffect: y2, useLayoutEffect: _2, useInsertionEffect: I2, useTransition: k3, useDeferredValue: w3, useSyncExternalStore: C3, startTransition: x3, useRef: A2, useImperativeHandle: F2, useMemo: T2, useCallback: q2, useContext: x2, useDebugValue: P2, version: "18.3.1", Children: O2, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $2, createElement: _, createContext: Q, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k, isValidElement: mn, isElement: Rn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: x, PureComponent: N2, memo: M2, forwardRef: D3, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P3, SuspenseList: B3, lazy: z3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
    }
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js
  var require_use_sync_external_store_with_selector_development = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js"(exports) {
      "use strict";
      (function() {
        function is(x6, y8) {
          return x6 === y8 && (0 !== x6 || 1 / x6 === 1 / y8) || x6 !== x6 && y8 !== y8;
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var React = (init_compat_module(), __toCommonJS(compat_module_exports)), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
        exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef(null);
          if (null === instRef.current) {
            var inst = { hasValue: false, value: null };
            instRef.current = inst;
          } else inst = instRef.current;
          instRef = useMemo(
            function() {
              function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                  hasMemo = true;
                  memoizedSnapshot = nextSnapshot;
                  nextSnapshot = selector(nextSnapshot);
                  if (void 0 !== isEqual && inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, nextSnapshot))
                      return memoizedSelection = currentSelection;
                  }
                  return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot))
                  return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                  return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
              }
              var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
              return [
                function() {
                  return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                  return memoizedSelector(maybeGetServerSnapshot());
                }
              ];
            },
            [getSnapshot, getServerSnapshot, selector, isEqual]
          );
          var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
          useEffect(
            function() {
              inst.hasValue = true;
              inst.value = value;
            },
            [value]
          );
          useDebugValue(value);
          return value;
        };
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/use-sync-external-store/with-selector.js
  var require_with_selector = __commonJS({
    "node_modules/use-sync-external-store/with-selector.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_use_sync_external_store_with_selector_development();
      }
    }
  });

  // src/index.tsx
  var index_exports = {};
  __export(index_exports, {
    renderCalculator: () => renderCalculator
  });
  init_preact_module();

  // node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
  init_compat_module();
  var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, xn).useLayoutEffect : () => {
  };

  // node_modules/@react-aria/utils/dist/domHelpers.mjs
  var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
  };
  var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
    if (el && "window" in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
  };
  function $431fbd86ca7dc216$var$isNode(value) {
    return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
  }
  function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
    return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
  }

  // node_modules/@react-stately/flags/dist/import.mjs
  var $f4e2df6bd15f8569$var$_shadowDOM = false;
  function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
    return $f4e2df6bd15f8569$var$_shadowDOM;
  }

  // node_modules/@react-aria/utils/dist/DOMFunctions.mjs
  function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
    if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while (currentNode !== null) {
      if (currentNode === node) return true;
      if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
        currentNode = currentNode.assignedSlot.parentNode;
      else if ((0, $431fbd86ca7dc216$export$af51f0f06c0f328a)(currentNode))
        currentNode = currentNode.host;
      else currentNode = currentNode.parentNode;
    }
    return false;
  }
  var $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
    var _activeElement_shadowRoot;
    if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return doc.activeElement;
    let activeElement2 = doc.activeElement;
    while (activeElement2 && "shadowRoot" in activeElement2 && ((_activeElement_shadowRoot = activeElement2.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement)) activeElement2 = activeElement2.shadowRoot.activeElement;
    return activeElement2;
  };
  function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
    if ((0, $f4e2df6bd15f8569$export$98658e8c59125e6a)() && event.target.shadowRoot) {
      if (event.composedPath) return event.composedPath()[0];
    }
    return event.target;
  }

  // node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
  function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
      preventScroll: true
    });
    else {
      let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
      element.focus();
      $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
  }
  var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
  function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
      $7215afc6de606d6b$var$supportsPreventScrollCached = false;
      try {
        let focusElem = document.createElement("div");
        focusElem.focus({
          get preventScroll() {
            $7215afc6de606d6b$var$supportsPreventScrollCached = true;
            return true;
          }
        });
      } catch (e8) {
      }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
  }
  function $7215afc6de606d6b$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
      if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
      parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
  }
  function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element, scrollTop, scrollLeft } of scrollableElements) {
      element.scrollTop = scrollTop;
      element.scrollLeft = scrollLeft;
    }
  }

  // node_modules/@react-aria/utils/dist/platform.mjs
  function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === "undefined" || window.navigator == null) return false;
    let brands = (_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands;
    return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
  }
  function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
  }
  function $c87311424ea30a05$var$cached(fn2) {
    if (false) return fn2;
    let res = null;
    return () => {
      if (res == null) res = fn2();
      return res;
    };
  }
  var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
  });
  var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
  });
  var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
  });
  var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
  });
  var $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
  });
  var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
  });
  var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
  });
  var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
  });
  var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
  });

  // node_modules/@react-aria/utils/dist/openLink.mjs
  init_compat_module();
  function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    var _window_event_type, _window_event;
    let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
    if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
      if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
      else ctrlKey = true;
    }
    let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
      keyIdentifier: "Enter",
      metaKey,
      ctrlKey,
      altKey,
      shiftKey
    }) : new MouseEvent("click", {
      metaKey,
      ctrlKey,
      altKey,
      shiftKey,
      detail: 1,
      bubbles: true,
      cancelable: true
    });
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
    (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
    target.dispatchEvent(event);
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
  }
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;

  // node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
  init_compat_module();
  function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, A2)(/* @__PURE__ */ new Map());
    let addGlobalListener = (0, q2)((eventTarget, type, listener, options) => {
      let fn2 = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
        globalListeners.current.delete(listener);
        listener(...args);
      } : listener;
      globalListeners.current.set(listener, {
        type,
        eventTarget,
        fn: fn2,
        options
      });
      eventTarget.addEventListener(type, fn2, options);
    }, []);
    let removeGlobalListener = (0, q2)((eventTarget, type, listener, options) => {
      var _globalListeners_current_get;
      let fn2 = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
      eventTarget.removeEventListener(type, fn2, options);
      globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, q2)(() => {
      globalListeners.current.forEach((value, key) => {
        removeGlobalListener(value.eventTarget, value.type, key, value.options);
      });
    }, [
      removeGlobalListener
    ]);
    (0, y2)(() => {
      return removeAllGlobalListeners;
    }, [
      removeAllGlobalListeners
    ]);
    return {
      addGlobalListener,
      removeGlobalListener,
      removeAllGlobalListeners
    };
  }

  // node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
  function $6a7db85432448f7f$export$60278871457622de(event) {
    if (event.pointerType === "" && event.isTrusted) return true;
    if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
  }

  // node_modules/@react-aria/interactions/dist/utils.mjs
  init_compat_module();
  function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = () => event.defaultPrevented;
    event.isPropagationStopped = () => event.cancelBubble;
    event.persist = () => {
    };
    return event;
  }
  function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
    Object.defineProperty(event, "target", {
      value: target
    });
    Object.defineProperty(event, "currentTarget", {
      value: target
    });
  }
  function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, A2)({
      isFocused: false,
      observer: null
    });
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
      const state = stateRef.current;
      return () => {
        if (state.observer) {
          state.observer.disconnect();
          state.observer = null;
        }
      };
    }, []);
    return (0, q2)((e8) => {
      if (e8.target instanceof HTMLButtonElement || e8.target instanceof HTMLInputElement || e8.target instanceof HTMLTextAreaElement || e8.target instanceof HTMLSelectElement) {
        stateRef.current.isFocused = true;
        let target = e8.target;
        let onBlurHandler = (e9) => {
          stateRef.current.isFocused = false;
          if (target.disabled) {
            let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e9);
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
          }
          if (stateRef.current.observer) {
            stateRef.current.observer.disconnect();
            stateRef.current.observer = null;
          }
        };
        target.addEventListener("focusout", onBlurHandler, {
          once: true
        });
        stateRef.current.observer = new MutationObserver(() => {
          if (stateRef.current.isFocused && target.disabled) {
            var _stateRef_current_observer;
            (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
            let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
            target.dispatchEvent(new FocusEvent("blur", {
              relatedTarget: relatedTargetEl
            }));
            target.dispatchEvent(new FocusEvent("focusout", {
              bubbles: true,
              relatedTarget: relatedTargetEl
            }));
          }
        });
        stateRef.current.observer.observe(target, {
          attributes: true,
          attributeFilter: [
            "disabled"
          ]
        });
      }
    }, [
      onBlur
    ]);
  }
  var $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;

  // node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
  init_compat_module();
  var $507fabe10e71c6fb$var$currentModality = null;
  var $507fabe10e71c6fb$var$currentPointerType = "keyboard";
  var $507fabe10e71c6fb$export$901e90a13c50a14e = /* @__PURE__ */ new Set();
  var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
  var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
  var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
  };
  function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e8) {
    for (let handler of $507fabe10e71c6fb$export$901e90a13c50a14e) handler(modality, e8);
  }
  function $507fabe10e71c6fb$var$isValidKey(e8) {
    return !(e8.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e8.altKey || e8.ctrlKey || e8.key === "Control" || e8.key === "Shift" || e8.key === "Meta");
  }
  function $507fabe10e71c6fb$var$handleKeyboardEvent(e8) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if (!(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening && $507fabe10e71c6fb$var$isValidKey(e8)) {
      $507fabe10e71c6fb$var$currentModality = "keyboard";
      $507fabe10e71c6fb$var$currentPointerType = "keyboard";
      $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e8);
    }
  }
  function $507fabe10e71c6fb$var$handlePointerEvent(e8) {
    $507fabe10e71c6fb$var$currentModality = "pointer";
    $507fabe10e71c6fb$var$currentPointerType = "pointerType" in e8 ? e8.pointerType : "mouse";
    if (e8.type === "mousedown" || e8.type === "pointerdown") {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e8);
    }
  }
  function $507fabe10e71c6fb$var$handleClickEvent(e8) {
    if (!(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening && (0, $6a7db85432448f7f$export$60278871457622de)(e8)) {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      $507fabe10e71c6fb$var$currentModality = "virtual";
      $507fabe10e71c6fb$var$currentPointerType = "virtual";
    }
  }
  function $507fabe10e71c6fb$var$handleFocusEvent(e8) {
    if (e8.target === window || e8.target === document || (0, $8a9cb279dc87e130$export$fda7da73ab5d4c48) || !e8.isTrusted) return;
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
      $507fabe10e71c6fb$var$currentModality = "virtual";
      $507fabe10e71c6fb$var$currentPointerType = "virtual";
      $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e8);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
  }
  function $507fabe10e71c6fb$var$handleWindowBlur() {
    if (0, $8a9cb279dc87e130$export$fda7da73ab5d4c48) return;
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
  }
  function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === "undefined" || typeof document === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
    const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      focus.apply(this, arguments);
    };
    documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
      documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (false) {
      documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    windowObject.addEventListener("beforeunload", () => {
      $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
      once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
      focus
    });
  }
  var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
    const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
    if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
      documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (false) {
      documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
  };
  function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
    let loadListener;
    if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
      loadListener = () => {
        $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
      };
      documentObject.addEventListener("DOMContentLoaded", loadListener);
    }
    return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
  }
  if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
  function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== "pointer";
  }
  var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
  ]);
  function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e8) {
    let document1 = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8 === null || e8 === void 0 ? void 0 : e8.target);
    const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).KeyboardEvent : KeyboardEvent;
    isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
    return !(isTextInput && modality === "keyboard" && e8 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e8.key]);
  }
  function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn2, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (0, y2)(() => {
      if ((opts === null || opts === void 0 ? void 0 : opts.enabled) === false) return;
      let handler = (modality, e8) => {
        if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e8)) return;
        fn2($507fabe10e71c6fb$export$b9b3dfddab17db27());
      };
      $507fabe10e71c6fb$export$901e90a13c50a14e.add(handler);
      return () => {
        $507fabe10e71c6fb$export$901e90a13c50a14e.delete(handler);
      };
    }, deps);
  }

  // node_modules/@react-aria/interactions/dist/useFocus.mjs
  init_compat_module();
  function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
    const onBlur = (0, q2)((e8) => {
      if (e8.target === e8.currentTarget) {
        if (onBlurProp) onBlurProp(e8);
        if (onFocusChange) onFocusChange(false);
        return true;
      }
    }, [
      onBlurProp,
      onFocusChange
    ]);
    const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    const onFocus = (0, q2)((e8) => {
      const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.target);
      const activeElement2 = ownerDocument ? (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) : (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)();
      if (e8.target === e8.currentTarget && activeElement2 === (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent)) {
        if (onFocusProp) onFocusProp(e8);
        if (onFocusChange) onFocusChange(true);
        onSyntheticFocus(e8);
      }
    }, [
      onFocusChange,
      onFocusProp,
      onSyntheticFocus
    ]);
    return {
      focusProps: {
        onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
        onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
      }
    };
  }

  // node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
  init_compat_module();
  function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
    let state = (0, A2)({
      isFocusWithin: false
    });
    let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let onBlur = (0, q2)((e8) => {
      if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, e8.target)) return;
      if (state.current.isFocusWithin && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, e8.relatedTarget)) {
        state.current.isFocusWithin = false;
        removeAllGlobalListeners();
        if (onBlurWithin) onBlurWithin(e8);
        if (onFocusWithinChange) onFocusWithinChange(false);
      }
    }, [
      onBlurWithin,
      onFocusWithinChange,
      state,
      removeAllGlobalListeners
    ]);
    let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    let onFocus = (0, q2)((e8) => {
      if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, e8.target)) return;
      const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.target);
      const activeElement2 = (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
      if (!state.current.isFocusWithin && activeElement2 === (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent)) {
        if (onFocusWithin) onFocusWithin(e8);
        if (onFocusWithinChange) onFocusWithinChange(true);
        state.current.isFocusWithin = true;
        onSyntheticFocus(e8);
        let currentTarget = e8.currentTarget;
        addGlobalListener(ownerDocument, "focus", (e9) => {
          if (state.current.isFocusWithin && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(currentTarget, e9.target)) {
            let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
              relatedTarget: e9.target
            });
            (0, $8a9cb279dc87e130$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
            let event = (0, $8a9cb279dc87e130$export$525bc4921d56d4a)(nativeEvent);
            onBlur(event);
          }
        }, {
          capture: true
        });
      }
    }, [
      onFocusWithin,
      onFocusWithinChange,
      onSyntheticFocus,
      addGlobalListener,
      onBlur
    ]);
    if (isDisabled) return {
      focusWithinProps: {
        // These cannot be null, that would conflict in mergeProps
        onFocus: void 0,
        onBlur: void 0
      }
    };
    return {
      focusWithinProps: {
        onFocus,
        onBlur
      }
    };
  }

  // node_modules/@react-aria/interactions/dist/useHover.mjs
  init_compat_module();
  var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  var $6179b936705e76d3$var$hoverCount = 0;
  function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    setTimeout(() => {
      $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
  }
  function $6179b936705e76d3$var$handleGlobalPointerEvent(e8) {
    if (e8.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
  }
  function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === "undefined") return;
    if ($6179b936705e76d3$var$hoverCount === 0) {
      if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
      else if (false) document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    }
    $6179b936705e76d3$var$hoverCount++;
    return () => {
      $6179b936705e76d3$var$hoverCount--;
      if ($6179b936705e76d3$var$hoverCount > 0) return;
      if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
      else if (false) document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
  }
  function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
    let [isHovered, setHovered] = (0, d2)(false);
    let state = (0, A2)({
      isHovered: false,
      ignoreEmulatedMouseEvents: false,
      pointerType: "",
      target: null
    }).current;
    (0, y2)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let { hoverProps, triggerHoverEnd } = (0, T2)(() => {
      let triggerHoverStart = (event, pointerType) => {
        state.pointerType = pointerType;
        if (isDisabled || pointerType === "touch" || state.isHovered || !(0, $d4ee10de306f2510$export$4282f70798064fe0)(event.currentTarget, event.target)) return;
        state.isHovered = true;
        let target = event.currentTarget;
        state.target = target;
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(event.target), "pointerover", (e8) => {
          if (state.isHovered && state.target && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, e8.target)) triggerHoverEnd2(e8, e8.pointerType);
        }, {
          capture: true
        });
        if (onHoverStart) onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
        if (onHoverChange) onHoverChange(true);
        setHovered(true);
      };
      let triggerHoverEnd2 = (event, pointerType) => {
        let target = state.target;
        state.pointerType = "";
        state.target = null;
        if (pointerType === "touch" || !state.isHovered || !target) return;
        state.isHovered = false;
        removeAllGlobalListeners();
        if (onHoverEnd) onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
        if (onHoverChange) onHoverChange(false);
        setHovered(false);
      };
      let hoverProps2 = {};
      if (typeof PointerEvent !== "undefined") {
        hoverProps2.onPointerEnter = (e8) => {
          if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e8.pointerType === "mouse") return;
          triggerHoverStart(e8, e8.pointerType);
        };
        hoverProps2.onPointerLeave = (e8) => {
          if (!isDisabled && (0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, e8.target)) triggerHoverEnd2(e8, e8.pointerType);
        };
      } else if (false) {
        hoverProps2.onTouchStart = () => {
          state.ignoreEmulatedMouseEvents = true;
        };
        hoverProps2.onMouseEnter = (e8) => {
          if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e8, "mouse");
          state.ignoreEmulatedMouseEvents = false;
        };
        hoverProps2.onMouseLeave = (e8) => {
          if (!isDisabled && (0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, e8.target)) triggerHoverEnd2(e8, "mouse");
        };
      }
      return {
        hoverProps: hoverProps2,
        triggerHoverEnd: triggerHoverEnd2
      };
    }, [
      onHoverStart,
      onHoverChange,
      onHoverEnd,
      isDisabled,
      state,
      addGlobalListener,
      removeAllGlobalListeners
    ]);
    (0, y2)(() => {
      if (isDisabled) triggerHoverEnd({
        currentTarget: state.target
      }, state.pointerType);
    }, [
      isDisabled
    ]);
    return {
      hoverProps,
      isHovered
    };
  }

  // node_modules/@react-aria/focus/dist/useFocusRing.mjs
  init_compat_module();
  function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus = false, isTextInput, within } = props;
    let state = (0, A2)({
      isFocused: false,
      isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
    });
    let [isFocused, setFocused] = (0, d2)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, d2)(() => state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, q2)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, q2)((isFocused2) => {
      state.current.isFocused = isFocused2;
      state.current.isFocusVisible = (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)();
      setFocused(isFocused2);
      updateState();
    }, [
      updateState
    ]);
    (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
      state.current.isFocusVisible = isFocusVisible;
      updateState();
    }, [
      isTextInput,
      isFocused
    ], {
      enabled: isFocused,
      isTextInput
    });
    let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
      isDisabled: within,
      onFocusChange
    });
    let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
      isDisabled: !within,
      onFocusWithinChange: onFocusChange
    });
    return {
      isFocused,
      isFocusVisible: isFocusVisibleState,
      focusProps: within ? focusWithinProps : focusProps
    };
  }

  // node_modules/@headlessui/react/dist/hooks/use-active-press.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/env.js
  var i3 = Object.defineProperty;
  var d3 = (t9, e8, n9) => e8 in t9 ? i3(t9, e8, { enumerable: true, configurable: true, writable: true, value: n9 }) : t9[e8] = n9;
  var r3 = (t9, e8, n9) => (d3(t9, typeof e8 != "symbol" ? e8 + "" : e8, n9), n9);
  var o3 = class {
    constructor() {
      r3(this, "current", this.detect());
      r3(this, "handoffState", "pending");
      r3(this, "currentId", 0);
    }
    set(e8) {
      this.current !== e8 && (this.handoffState = "pending", this.currentId = 0, this.current = e8);
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  };
  var s3 = new o3();

  // node_modules/@headlessui/react/dist/utils/owner.js
  function l3(n9) {
    var u17;
    return s3.isServer ? null : n9 == null ? document : (u17 = n9 == null ? void 0 : n9.ownerDocument) != null ? u17 : document;
  }
  function r4(n9) {
    var u17, o11;
    return s3.isServer ? null : n9 == null ? document : (o11 = (u17 = n9 == null ? void 0 : n9.getRootNode) == null ? void 0 : u17.call(n9)) != null ? o11 : document;
  }
  function e3(n9) {
    var u17, o11;
    return (o11 = (u17 = r4(n9)) == null ? void 0 : u17.activeElement) != null ? o11 : null;
  }
  function d4(n9) {
    return e3(n9) === n9;
  }

  // node_modules/@headlessui/react/dist/hooks/use-disposables.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/micro-task.js
  function t3(e8) {
    typeof queueMicrotask == "function" ? queueMicrotask(e8) : Promise.resolve().then(e8).catch((o11) => setTimeout(() => {
      throw o11;
    }));
  }

  // node_modules/@headlessui/react/dist/utils/disposables.js
  function o4() {
    let s12 = [], r11 = { addEventListener(e8, t9, n9, i9) {
      return e8.addEventListener(t9, n9, i9), r11.add(() => e8.removeEventListener(t9, n9, i9));
    }, requestAnimationFrame(...e8) {
      let t9 = requestAnimationFrame(...e8);
      return r11.add(() => cancelAnimationFrame(t9));
    }, nextFrame(...e8) {
      return r11.requestAnimationFrame(() => r11.requestAnimationFrame(...e8));
    }, setTimeout(...e8) {
      let t9 = setTimeout(...e8);
      return r11.add(() => clearTimeout(t9));
    }, microTask(...e8) {
      let t9 = { current: true };
      return t3(() => {
        t9.current && e8[0]();
      }), r11.add(() => {
        t9.current = false;
      });
    }, style(e8, t9, n9) {
      let i9 = e8.style.getPropertyValue(t9);
      return Object.assign(e8.style, { [t9]: n9 }), this.add(() => {
        Object.assign(e8.style, { [t9]: i9 });
      });
    }, group(e8) {
      let t9 = o4();
      return e8(t9), this.add(() => t9.dispose());
    }, add(e8) {
      return s12.includes(e8) || s12.push(e8), () => {
        let t9 = s12.indexOf(e8);
        if (t9 >= 0) for (let n9 of s12.splice(t9, 1)) n9();
      };
    }, dispose() {
      for (let e8 of s12.splice(0)) e8();
    } };
    return r11;
  }

  // node_modules/@headlessui/react/dist/hooks/use-disposables.js
  function p3() {
    let [e8] = d2(o4);
    return y2(() => () => e8.dispose(), [e8]), e8;
  }

  // node_modules/@headlessui/react/dist/hooks/use-event.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-latest-value.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
  init_compat_module();
  var n2 = (e8, t9) => {
    s3.isServer ? y2(e8, t9) : _2(e8, t9);
  };

  // node_modules/@headlessui/react/dist/hooks/use-latest-value.js
  function s4(e8) {
    let r11 = A2(e8);
    return n2(() => {
      r11.current = e8;
    }, [e8]), r11;
  }

  // node_modules/@headlessui/react/dist/hooks/use-event.js
  var o5 = function(t9) {
    let e8 = s4(t9);
    return xn.useCallback((...r11) => e8.current(...r11), [e8]);
  };

  // node_modules/@headlessui/react/dist/hooks/use-active-press.js
  function E3(e8) {
    let t9 = e8.width / 2, n9 = e8.height / 2;
    return { top: e8.clientY - n9, right: e8.clientX + t9, bottom: e8.clientY + n9, left: e8.clientX - t9 };
  }
  function P4(e8, t9) {
    return !(!e8 || !t9 || e8.right < t9.left || e8.left > t9.right || e8.bottom < t9.top || e8.top > t9.bottom);
  }
  function w4({ disabled: e8 = false } = {}) {
    let t9 = A2(null), [n9, l8] = d2(false), r11 = p3(), o11 = o5(() => {
      t9.current = null, l8(false), r11.dispose();
    }), f14 = o5((s12) => {
      if (r11.dispose(), t9.current === null) {
        t9.current = s12.currentTarget, l8(true);
        {
          let i9 = l3(s12.currentTarget);
          r11.addEventListener(i9, "pointerup", o11, false), r11.addEventListener(i9, "pointermove", (c13) => {
            if (t9.current) {
              let p10 = E3(c13);
              l8(P4(p10, t9.current.getBoundingClientRect()));
            }
          }, false), r11.addEventListener(i9, "pointercancel", o11, false);
        }
      }
    });
    return { pressed: n9, pressProps: e8 ? {} : { onPointerDown: f14, onPointerUp: o11, onClick: o11 } };
  }

  // node_modules/@headlessui/react/dist/hooks/use-slot.js
  init_compat_module();
  function n3(e8) {
    return T2(() => e8, Object.values(e8));
  }

  // node_modules/@headlessui/react/dist/internal/disabled.js
  init_compat_module();
  var e4 = Q(void 0);
  function a3() {
    return x2(e4);
  }

  // node_modules/@headlessui/react/dist/utils/render.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/class-names.js
  function t4(...r11) {
    return Array.from(new Set(r11.flatMap((n9) => typeof n9 == "string" ? n9.split(" ") : []))).filter(Boolean).join(" ");
  }

  // node_modules/@headlessui/react/dist/utils/match.js
  function u3(r11, n9, ...a15) {
    if (r11 in n9) {
      let e8 = n9[r11];
      return typeof e8 == "function" ? e8(...a15) : e8;
    }
    let t9 = new Error('Tried to handle "'.concat(r11, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(n9).map((e8) => '"'.concat(e8, '"')).join(", "), "."));
    throw Error.captureStackTrace && Error.captureStackTrace(t9, u3), t9;
  }

  // node_modules/@headlessui/react/dist/utils/render.js
  var A4 = ((a15) => (a15[a15.None = 0] = "None", a15[a15.RenderStrategy = 1] = "RenderStrategy", a15[a15.Static = 2] = "Static", a15))(A4 || {});
  var C4 = ((e8) => (e8[e8.Unmount = 0] = "Unmount", e8[e8.Hidden = 1] = "Hidden", e8))(C4 || {});
  function K3() {
    let n9 = $3();
    return q2((r11) => U2(__spreadValues({ mergeRefs: n9 }, r11)), [n9]);
  }
  function U2({ ourProps: n9, theirProps: r11, slot: e8, defaultTag: a15, features: s12, visible: t9 = true, name: l8, mergeRefs: i9 }) {
    i9 = i9 != null ? i9 : I3;
    let o11 = P5(r11, n9);
    if (t9) return F4(o11, e8, a15, l8, i9);
    let y8 = s12 != null ? s12 : 0;
    if (y8 & 2) {
      let _a = o11, { static: f14 = false } = _a, u17 = __objRest(_a, ["static"]);
      if (f14) return F4(u17, e8, a15, l8, i9);
    }
    if (y8 & 1) {
      let _b = o11, { unmount: f14 = true } = _b, u17 = __objRest(_b, ["unmount"]);
      return u3(f14 ? 0 : 1, { [0]() {
        return null;
      }, [1]() {
        return F4(__spreadProps(__spreadValues({}, u17), { hidden: true, style: { display: "none" } }), e8, a15, l8, i9);
      } });
    }
    return F4(o11, e8, a15, l8, i9);
  }
  function F4(n9, r11 = {}, e8, a15, s12) {
    let _a = h3(n9, ["unmount", "static"]), { as: t9 = e8, children: l8, refName: i9 = "ref" } = _a, o11 = __objRest(_a, ["as", "children", "refName"]), y8 = n9.ref !== void 0 ? { [i9]: n9.ref } : {}, f14 = typeof l8 == "function" ? l8(r11) : l8;
    "className" in o11 && o11.className && typeof o11.className == "function" && (o11.className = o11.className(r11)), o11["aria-labelledby"] && o11["aria-labelledby"] === o11.id && (o11["aria-labelledby"] = void 0);
    let u17 = {};
    if (r11) {
      let d6 = false, p10 = [];
      for (let [c13, T8] of Object.entries(r11)) typeof T8 == "boolean" && (d6 = true), T8 === true && p10.push(c13.replace(/([A-Z])/g, (g6) => "-".concat(g6.toLowerCase())));
      if (d6) {
        u17["data-headlessui-state"] = p10.join(" ");
        for (let c13 of p10) u17["data-".concat(c13)] = "";
      }
    }
    if (b3(t9) && (Object.keys(m3(o11)).length > 0 || Object.keys(m3(u17)).length > 0)) if (!mn(f14) || Array.isArray(f14) && f14.length > 1 || D4(f14)) {
      if (Object.keys(m3(o11)).length > 0) throw new Error(['Passing props on "Fragment"!', "", "The current component <".concat(a15, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(m3(o11)).concat(Object.keys(m3(u17))).map((d6) => "  - ".concat(d6)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d6) => "  - ".concat(d6)).join("\n")].join("\n"));
    } else {
      let d6 = f14.props, p10 = d6 == null ? void 0 : d6.className, c13 = typeof p10 == "function" ? (...R2) => t4(p10(...R2), o11.className) : t4(p10, o11.className), T8 = c13 ? { className: c13 } : {}, g6 = P5(f14.props, m3(h3(o11, ["ref"])));
      for (let R2 in u17) R2 in g6 && delete u17[R2];
      return _n(f14, Object.assign({}, g6, u17, y8, { ref: s12(H3(f14), y8.ref) }, T8));
    }
    return _(t9, Object.assign({}, h3(o11, ["ref"]), !b3(t9) && y8, !b3(t9) && u17), f14);
  }
  function $3() {
    let n9 = A2([]), r11 = q2((e8) => {
      for (let a15 of n9.current) a15 != null && (typeof a15 == "function" ? a15(e8) : a15.current = e8);
    }, []);
    return (...e8) => {
      if (!e8.every((a15) => a15 == null)) return n9.current = e8, r11;
    };
  }
  function I3(...n9) {
    return n9.every((r11) => r11 == null) ? void 0 : (r11) => {
      for (let e8 of n9) e8 != null && (typeof e8 == "function" ? e8(r11) : e8.current = r11);
    };
  }
  function P5(...n9) {
    var a15;
    if (n9.length === 0) return {};
    if (n9.length === 1) return n9[0];
    let r11 = {}, e8 = {};
    for (let s12 of n9) for (let t9 in s12) t9.startsWith("on") && typeof s12[t9] == "function" ? ((a15 = e8[t9]) != null || (e8[t9] = []), e8[t9].push(s12[t9])) : r11[t9] = s12[t9];
    if (r11.disabled || r11["aria-disabled"]) for (let s12 in e8) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s12) && (e8[s12] = [(t9) => {
      var l8;
      return (l8 = t9 == null ? void 0 : t9.preventDefault) == null ? void 0 : l8.call(t9);
    }]);
    for (let s12 in e8) Object.assign(r11, { [s12](t9, ...l8) {
      let i9 = e8[s12];
      for (let o11 of i9) {
        if ((t9 instanceof Event || (t9 == null ? void 0 : t9.nativeEvent) instanceof Event) && t9.defaultPrevented) return;
        o11(t9, ...l8);
      }
    } });
    return r11;
  }
  function V3(...n9) {
    var a15;
    if (n9.length === 0) return {};
    if (n9.length === 1) return n9[0];
    let r11 = {}, e8 = {};
    for (let s12 of n9) for (let t9 in s12) t9.startsWith("on") && typeof s12[t9] == "function" ? ((a15 = e8[t9]) != null || (e8[t9] = []), e8[t9].push(s12[t9])) : r11[t9] = s12[t9];
    for (let s12 in e8) Object.assign(r11, { [s12](...t9) {
      let l8 = e8[s12];
      for (let i9 of l8) i9 == null || i9(...t9);
    } });
    return r11;
  }
  function Y2(n9) {
    var r11;
    return Object.assign(D3(n9), { displayName: (r11 = n9.displayName) != null ? r11 : n9.name });
  }
  function m3(n9) {
    let r11 = Object.assign({}, n9);
    for (let e8 in r11) r11[e8] === void 0 && delete r11[e8];
    return r11;
  }
  function h3(n9, r11 = []) {
    let e8 = Object.assign({}, n9);
    for (let a15 of r11) a15 in e8 && delete e8[a15];
    return e8;
  }
  function H3(n9) {
    return xn.version.split(".")[0] >= "19" ? n9.props.ref : n9.ref;
  }
  function b3(n9) {
    return n9 === k || n9 === Symbol.for("react.fragment");
  }
  function D4(n9) {
    return b3(n9.type);
  }

  // node_modules/@headlessui/react/dist/hooks/use-controllable.js
  init_compat_module();
  init_compat_module();
  function b4(l8, r11, c13) {
    let [i9, s12] = d2(c13), e8 = l8 !== void 0, t9 = A2(e8), u17 = A2(false), d6 = A2(false);
    return e8 && !t9.current && !u17.current ? (u17.current = true, t9.current = e8, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e8 && t9.current && !d6.current && (d6.current = true, t9.current = e8, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e8 ? l8 : i9, o5((n9) => (e8 || En(() => s12(n9)), r11 == null ? void 0 : r11(n9)))];
  }

  // node_modules/@headlessui/react/dist/hooks/use-default-value.js
  init_compat_module();
  function l4(e8) {
    let [t9] = d2(e8);
    return t9;
  }

  // node_modules/@headlessui/react/dist/hooks/use-id.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/internal/form-fields.js
  init_compat_module();
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/form.js
  init_compat_module();
  function p4(t9 = {}, i9 = null, n9 = []) {
    for (let [e8, o11] of Object.entries(t9)) s5(n9, r5(i9, e8), o11);
    return n9;
  }
  function r5(t9, i9) {
    return t9 ? t9 + "[" + i9 + "]" : i9;
  }
  function s5(t9, i9, n9) {
    if (Array.isArray(n9)) for (let [e8, o11] of n9.entries()) s5(t9, r5(i9, e8.toString()), o11);
    else n9 instanceof Date ? t9.push([i9, n9.toISOString()]) : typeof n9 == "boolean" ? t9.push([i9, n9 ? "1" : "0"]) : typeof n9 == "string" ? t9.push([i9, n9]) : typeof n9 == "number" ? t9.push([i9, "".concat(n9)]) : n9 == null ? t9.push([i9, ""]) : c3(n9) && !mn(n9) && p4(n9, i9, t9);
  }
  function c3(t9) {
    if (Object.prototype.toString.call(t9) !== "[object Object]") return false;
    let i9 = Object.getPrototypeOf(t9);
    return i9 === null || Object.getPrototypeOf(i9) === null;
  }

  // node_modules/@headlessui/react/dist/internal/hidden.js
  var a4 = "span";
  var s6 = ((e8) => (e8[e8.None = 1] = "None", e8[e8.Focusable = 2] = "Focusable", e8[e8.Hidden = 4] = "Hidden", e8))(s6 || {});
  function l5(t9, r11) {
    var n9;
    let _a = t9, { features: d6 = 1 } = _a, e8 = __objRest(_a, ["features"]), o11 = { ref: r11, "aria-hidden": (d6 & 2) === 2 ? true : (n9 = e8["aria-hidden"]) != null ? n9 : void 0, hidden: (d6 & 4) === 4 ? true : void 0, style: __spreadValues({ position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" }, (d6 & 4) === 4 && (d6 & 2) !== 2 && { display: "none" }) };
    return K3()({ ourProps: o11, theirProps: e8, slot: {}, defaultTag: a4, name: "Hidden" });
  }
  var f3 = Y2(l5);

  // node_modules/@headlessui/react/dist/internal/form-fields.js
  var f4 = Q(null);
  function c4({ children: t9 }) {
    let e8 = x2(f4);
    if (!e8) return xn.createElement(xn.Fragment, null, t9);
    let { target: r11 } = e8;
    return r11 ? $2(xn.createElement(xn.Fragment, null, t9), r11) : null;
  }
  function j4({ data: t9, form: e8, disabled: r11, onReset: n9, overrides: F6 }) {
    let [i9, a15] = d2(null), p10 = p3();
    return y2(() => {
      if (n9 && i9) return p10.addEventListener(i9, "reset", n9);
    }, [i9, e8, n9]), xn.createElement(c4, null, xn.createElement(C5, { setForm: a15, formId: e8 }), p4(t9).map(([s12, v6]) => xn.createElement(f3, __spreadValues({ features: s6.Hidden }, m3(__spreadValues({ key: s12, as: "input", type: "hidden", hidden: true, readOnly: true, form: e8, disabled: r11, name: s12, value: v6 }, F6))))));
  }
  function C5({ setForm: t9, formId: e8 }) {
    return y2(() => {
      if (e8) {
        let r11 = document.getElementById(e8);
        r11 && t9(r11);
      }
    }, [t9, e8]), e8 ? null : xn.createElement(f3, { features: s6.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r11) => {
      if (!r11) return;
      let n9 = r11.closest("form");
      n9 && t9(n9);
    } });
  }

  // node_modules/@headlessui/react/dist/internal/id.js
  init_compat_module();
  var e5 = Q(void 0);
  function u4() {
    return x2(e5);
  }

  // node_modules/@headlessui/react/dist/utils/dom.js
  function o6(e8) {
    return typeof e8 != "object" || e8 === null ? false : "nodeType" in e8;
  }
  function t5(e8) {
    return o6(e8) && "tagName" in e8;
  }
  function n4(e8) {
    return t5(e8) && "accessKey" in e8;
  }
  function i4(e8) {
    return t5(e8) && "tabIndex" in e8;
  }
  function r6(e8) {
    return t5(e8) && "style" in e8;
  }
  function u5(e8) {
    return n4(e8) && e8.nodeName === "IFRAME";
  }
  function l6(e8) {
    return n4(e8) && e8.nodeName === "INPUT";
  }
  function m4(e8) {
    return n4(e8) && e8.nodeName === "LABEL";
  }
  function a5(e8) {
    return n4(e8) && e8.nodeName === "FIELDSET";
  }
  function E4(e8) {
    return n4(e8) && e8.nodeName === "LEGEND";
  }
  function L3(e8) {
    return t5(e8) ? e8.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : false;
  }

  // node_modules/@headlessui/react/dist/utils/bugs.js
  function s7(l8) {
    let e8 = l8.parentElement, t9 = null;
    for (; e8 && !a5(e8); ) E4(e8) && (t9 = e8), e8 = e8.parentElement;
    let i9 = (e8 == null ? void 0 : e8.getAttribute("disabled")) === "";
    return i9 && r7(t9) ? false : i9;
  }
  function r7(l8) {
    if (!l8) return false;
    let e8 = l8.previousElementSibling;
    for (; e8 !== null; ) {
      if (E4(e8)) return false;
      e8 = e8.previousElementSibling;
    }
    return true;
  }

  // node_modules/@headlessui/react/dist/components/description/description.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
  init_compat_module();
  var u6 = Symbol();
  function T4(t9, n9 = true) {
    return Object.assign(t9, { [u6]: n9 });
  }
  function y3(...t9) {
    let n9 = A2(t9);
    y2(() => {
      n9.current = t9;
    }, [t9]);
    let c13 = o5((e8) => {
      for (let o11 of n9.current) o11 != null && (typeof o11 == "function" ? o11(e8) : o11.current = e8);
    });
    return t9.every((e8) => e8 == null || (e8 == null ? void 0 : e8[u6])) ? void 0 : c13;
  }

  // node_modules/@headlessui/react/dist/components/description/description.js
  var a6 = Q(null);
  a6.displayName = "DescriptionContext";
  function f5() {
    let r11 = x2(a6);
    if (r11 === null) {
      let e8 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(e8, f5), e8;
    }
    return r11;
  }
  function w5() {
    var r11, e8;
    return (e8 = (r11 = x2(a6)) == null ? void 0 : r11.value) != null ? e8 : void 0;
  }
  var I4 = "p";
  function C6(r11, e8) {
    let c13 = g2(), t9 = a3(), _a = r11, { id: i9 = "headlessui-description-".concat(c13) } = _a, l8 = __objRest(_a, ["id"]), n9 = f5(), o11 = y3(e8);
    n2(() => n9.register(i9), [i9, n9.register]);
    let s12 = n3(__spreadProps(__spreadValues({}, n9.slot), { disabled: t9 || false })), p10 = __spreadProps(__spreadValues({ ref: o11 }, n9.props), { id: i9 });
    return K3()({ ourProps: p10, theirProps: l8, slot: s12, defaultTag: I4, name: n9.name || "Description" });
  }
  var _3 = Y2(C6);
  var M3 = Object.assign(_3, {});

  // node_modules/@headlessui/react/dist/components/keyboard.js
  var o7 = ((r11) => (r11.Space = " ", r11.Enter = "Enter", r11.Escape = "Escape", r11.Backspace = "Backspace", r11.Delete = "Delete", r11.ArrowLeft = "ArrowLeft", r11.ArrowUp = "ArrowUp", r11.ArrowRight = "ArrowRight", r11.ArrowDown = "ArrowDown", r11.Home = "Home", r11.End = "End", r11.PageUp = "PageUp", r11.PageDown = "PageDown", r11.Tab = "Tab", r11))(o7 || {});

  // node_modules/@headlessui/react/dist/components/label/label.js
  init_compat_module();
  var L4 = Q(null);
  L4.displayName = "LabelContext";
  function C7() {
    let n9 = x2(L4);
    if (n9 === null) {
      let l8 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(l8, C7), l8;
    }
    return n9;
  }
  function N3(n9) {
    var a15, e8, o11;
    let l8 = (e8 = (a15 = x2(L4)) == null ? void 0 : a15.value) != null ? e8 : void 0;
    return ((o11 = n9 == null ? void 0 : n9.length) != null ? o11 : 0) > 0 ? [l8, ...n9].filter(Boolean).join(" ") : l8;
  }
  function V4({ inherit: n9 = false } = {}) {
    let l8 = N3(), [a15, e8] = d2([]), o11 = n9 ? [l8, ...a15].filter(Boolean) : a15;
    return [o11.length > 0 ? o11.join(" ") : void 0, T2(() => function(t9) {
      let p10 = o5((i9) => (e8((u17) => [...u17, i9]), () => e8((u17) => {
        let d6 = u17.slice(), f14 = d6.indexOf(i9);
        return f14 !== -1 && d6.splice(f14, 1), d6;
      }))), b7 = T2(() => ({ register: p10, slot: t9.slot, name: t9.name, props: t9.props, value: t9.value }), [p10, t9.slot, t9.name, t9.props, t9.value]);
      return xn.createElement(L4.Provider, { value: b7 }, t9.children);
    }, [e8])];
  }
  var G3 = "label";
  function U3(n9, l8) {
    var y8;
    let a15 = g2(), e8 = C7(), o11 = u4(), T8 = a3(), _a = n9, { id: t9 = "headlessui-label-".concat(a15), htmlFor: p10 = o11 != null ? o11 : (y8 = e8.props) == null ? void 0 : y8.htmlFor, passive: b7 = false } = _a, i9 = __objRest(_a, ["id", "htmlFor", "passive"]), u17 = y3(l8);
    n2(() => e8.register(t9), [t9, e8.register]);
    let d6 = o5((s12) => {
      let g6 = s12.currentTarget;
      if (!(s12.target !== s12.currentTarget && L3(s12.target)) && (m4(g6) && s12.preventDefault(), e8.props && "onClick" in e8.props && typeof e8.props.onClick == "function" && e8.props.onClick(s12), m4(g6))) {
        let r11 = document.getElementById(g6.htmlFor);
        if (r11) {
          let E7 = r11.getAttribute("disabled");
          if (E7 === "true" || E7 === "") return;
          let x6 = r11.getAttribute("aria-disabled");
          if (x6 === "true" || x6 === "") return;
          (l6(r11) && (r11.type === "file" || r11.type === "radio" || r11.type === "checkbox") || r11.role === "radio" || r11.role === "checkbox" || r11.role === "switch") && r11.click(), r11.focus({ preventScroll: true });
        }
      }
    }), f14 = n3(__spreadProps(__spreadValues({}, e8.slot), { disabled: T8 || false })), c13 = __spreadProps(__spreadValues({ ref: u17 }, e8.props), { id: t9, htmlFor: p10, onClick: d6 });
    return b7 && ("onClick" in c13 && (delete c13.htmlFor, delete c13.onClick), "onClick" in i9 && delete i9.onClick), K3()({ ourProps: c13, theirProps: i9, slot: f14, defaultTag: p10 ? G3 : "div", name: e8.name || "Label" });
  }
  var j5 = Y2(U3);
  var Z2 = Object.assign(j5, {});

  // node_modules/@tanstack/react-virtual/dist/esm/index.js
  init_compat_module();
  init_compat_module();

  // node_modules/@tanstack/virtual-core/dist/esm/utils.js
  function memo(getDeps, fn2, opts) {
    var _a;
    let deps = (_a = opts.initialDeps) != null ? _a : [];
    let result;
    let isInitial = true;
    function memoizedFunction() {
      var _a2, _b, _c;
      let depTime;
      if (opts.key && ((_a2 = opts.debug) == null ? void 0 : _a2.call(opts))) depTime = Date.now();
      const newDeps = getDeps();
      const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index3) => deps[index3] !== dep);
      if (!depsChanged) {
        return result;
      }
      deps = newDeps;
      let resultTime;
      if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
      result = fn2(...newDeps);
      if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = " " + str;
          }
          return str;
        };
        console.info(
          "%c\u23F1 ".concat(pad(resultEndTime, 5), " /").concat(pad(depEndTime, 5), " ms"),
          "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(".concat(Math.max(
            0,
            Math.min(120 - 120 * resultFpsPercentage, 120)
          ), "deg 100% 31%);"),
          opts == null ? void 0 : opts.key
        );
      }
      if ((opts == null ? void 0 : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) {
        opts.onChange(result);
      }
      isInitial = false;
      return result;
    }
    memoizedFunction.updateDeps = (newDeps) => {
      deps = newDeps;
    };
    return memoizedFunction;
  }
  function notUndefined(value, msg) {
    if (value === void 0) {
      throw new Error("Unexpected undefined".concat(msg ? ": ".concat(msg) : ""));
    } else {
      return value;
    }
  }
  var approxEqual = (a15, b7) => Math.abs(a15 - b7) < 1.01;
  var debounce = (targetWindow, fn2, ms) => {
    let timeoutId;
    return function(...args) {
      targetWindow.clearTimeout(timeoutId);
      timeoutId = targetWindow.setTimeout(() => fn2.apply(this, args), ms);
    };
  };

  // node_modules/@tanstack/virtual-core/dist/esm/index.js
  var getRect = (element) => {
    const { offsetWidth, offsetHeight } = element;
    return { width: offsetWidth, height: offsetHeight };
  };
  var defaultKeyExtractor = (index3) => index3;
  var defaultRangeExtractor = (range) => {
    const start = Math.max(range.startIndex - range.overscan, 0);
    const end = Math.min(range.endIndex + range.overscan, range.count - 1);
    const arr = [];
    for (let i9 = start; i9 <= end; i9++) {
      arr.push(i9);
    }
    return arr;
  };
  var observeElementRect = (instance, cb) => {
    const element = instance.scrollElement;
    if (!element) {
      return;
    }
    const targetWindow = instance.targetWindow;
    if (!targetWindow) {
      return;
    }
    const handler = (rect) => {
      const { width, height } = rect;
      cb({ width: Math.round(width), height: Math.round(height) });
    };
    handler(getRect(element));
    if (!targetWindow.ResizeObserver) {
      return () => {
      };
    }
    const observer = new targetWindow.ResizeObserver((entries) => {
      const run = () => {
        const entry = entries[0];
        if (entry == null ? void 0 : entry.borderBoxSize) {
          const box = entry.borderBoxSize[0];
          if (box) {
            handler({ width: box.inlineSize, height: box.blockSize });
            return;
          }
        }
        handler(getRect(element));
      };
      instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
    });
    observer.observe(element, { box: "border-box" });
    return () => {
      observer.unobserve(element);
    };
  };
  var addEventListenerOptions = {
    passive: true
  };
  var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
  var observeElementOffset = (instance, cb) => {
    const element = instance.scrollElement;
    if (!element) {
      return;
    }
    const targetWindow = instance.targetWindow;
    if (!targetWindow) {
      return;
    }
    let offset4 = 0;
    const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(
      targetWindow,
      () => {
        cb(offset4, false);
      },
      instance.options.isScrollingResetDelay
    );
    const createHandler = (isScrolling) => () => {
      const { horizontal, isRtl } = instance.options;
      offset4 = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
      fallback();
      cb(offset4, isScrolling);
    };
    const handler = createHandler(true);
    const endHandler = createHandler(false);
    element.addEventListener("scroll", handler, addEventListenerOptions);
    const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
    if (registerScrollendEvent) {
      element.addEventListener("scrollend", endHandler, addEventListenerOptions);
    }
    return () => {
      element.removeEventListener("scroll", handler);
      if (registerScrollendEvent) {
        element.removeEventListener("scrollend", endHandler);
      }
    };
  };
  var measureElement = (element, entry, instance) => {
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        const size4 = Math.round(
          box[instance.options.horizontal ? "inlineSize" : "blockSize"]
        );
        return size4;
      }
    }
    return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
  };
  var elementScroll = (offset4, {
    adjustments = 0,
    behavior
  }, instance) => {
    var _a, _b;
    const toOffset = offset4 + adjustments;
    (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
      [instance.options.horizontal ? "left" : "top"]: toOffset,
      behavior
    });
  };
  var Virtualizer = class {
    constructor(opts) {
      this.unsubs = [];
      this.scrollElement = null;
      this.targetWindow = null;
      this.isScrolling = false;
      this.currentScrollToIndex = null;
      this.measurementsCache = [];
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.laneAssignments = /* @__PURE__ */ new Map();
      this.pendingMeasuredCacheIndexes = [];
      this.prevLanes = void 0;
      this.lanesChangedFlag = false;
      this.lanesSettling = false;
      this.scrollRect = null;
      this.scrollOffset = null;
      this.scrollDirection = null;
      this.scrollAdjustments = 0;
      this.elementsCache = /* @__PURE__ */ new Map();
      this.observer = /* @__PURE__ */ (() => {
        let _ro = null;
        const get2 = () => {
          if (_ro) {
            return _ro;
          }
          if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
            return null;
          }
          return _ro = new this.targetWindow.ResizeObserver((entries) => {
            entries.forEach((entry) => {
              const run = () => {
                this._measureElement(entry.target, entry);
              };
              this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
            });
          });
        };
        return {
          disconnect: () => {
            var _a;
            (_a = get2()) == null ? void 0 : _a.disconnect();
            _ro = null;
          },
          observe: (target) => {
            var _a;
            return (_a = get2()) == null ? void 0 : _a.observe(target, { box: "border-box" });
          },
          unobserve: (target) => {
            var _a;
            return (_a = get2()) == null ? void 0 : _a.unobserve(target);
          }
        };
      })();
      this.range = null;
      this.setOptions = (opts2) => {
        Object.entries(opts2).forEach(([key, value]) => {
          if (typeof value === "undefined") delete opts2[key];
        });
        this.options = __spreadValues({
          debug: false,
          initialOffset: 0,
          overscan: 1,
          paddingStart: 0,
          paddingEnd: 0,
          scrollPaddingStart: 0,
          scrollPaddingEnd: 0,
          horizontal: false,
          getItemKey: defaultKeyExtractor,
          rangeExtractor: defaultRangeExtractor,
          onChange: () => {
          },
          measureElement,
          initialRect: { width: 0, height: 0 },
          scrollMargin: 0,
          gap: 0,
          indexAttribute: "data-index",
          initialMeasurementsCache: [],
          lanes: 1,
          isScrollingResetDelay: 150,
          enabled: true,
          isRtl: false,
          useScrollendEvent: false,
          useAnimationFrameWithResizeObserver: false
        }, opts2);
      };
      this.notify = (sync) => {
        var _a, _b;
        (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
      };
      this.maybeNotify = memo(
        () => {
          this.calculateRange();
          return [
            this.isScrolling,
            this.range ? this.range.startIndex : null,
            this.range ? this.range.endIndex : null
          ];
        },
        (isScrolling) => {
          this.notify(isScrolling);
        },
        {
          key: "maybeNotify",
          debug: () => this.options.debug,
          initialDeps: [
            this.isScrolling,
            this.range ? this.range.startIndex : null,
            this.range ? this.range.endIndex : null
          ]
        }
      );
      this.cleanup = () => {
        this.unsubs.filter(Boolean).forEach((d6) => d6());
        this.unsubs = [];
        this.observer.disconnect();
        this.scrollElement = null;
        this.targetWindow = null;
      };
      this._didMount = () => {
        return () => {
          this.cleanup();
        };
      };
      this._willUpdate = () => {
        var _a2;
        var _a;
        const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
        if (this.scrollElement !== scrollElement) {
          this.cleanup();
          if (!scrollElement) {
            this.maybeNotify();
            return;
          }
          this.scrollElement = scrollElement;
          if (this.scrollElement && "ownerDocument" in this.scrollElement) {
            this.targetWindow = this.scrollElement.ownerDocument.defaultView;
          } else {
            this.targetWindow = (_a2 = (_a = this.scrollElement) == null ? void 0 : _a.window) != null ? _a2 : null;
          }
          this.elementsCache.forEach((cached) => {
            this.observer.observe(cached);
          });
          this.unsubs.push(
            this.options.observeElementRect(this, (rect) => {
              this.scrollRect = rect;
              this.maybeNotify();
            })
          );
          this.unsubs.push(
            this.options.observeElementOffset(this, (offset4, isScrolling) => {
              this.scrollAdjustments = 0;
              this.scrollDirection = isScrolling ? this.getScrollOffset() < offset4 ? "forward" : "backward" : null;
              this.scrollOffset = offset4;
              this.isScrolling = isScrolling;
              this.maybeNotify();
            })
          );
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
        }
      };
      this.getSize = () => {
        var _a;
        if (!this.options.enabled) {
          this.scrollRect = null;
          return 0;
        }
        this.scrollRect = (_a = this.scrollRect) != null ? _a : this.options.initialRect;
        return this.scrollRect[this.options.horizontal ? "width" : "height"];
      };
      this.getScrollOffset = () => {
        var _a;
        if (!this.options.enabled) {
          this.scrollOffset = null;
          return 0;
        }
        this.scrollOffset = (_a = this.scrollOffset) != null ? _a : typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset;
        return this.scrollOffset;
      };
      this.getFurthestMeasurement = (measurements, index3) => {
        const furthestMeasurementsFound = /* @__PURE__ */ new Map();
        const furthestMeasurements = /* @__PURE__ */ new Map();
        for (let m8 = index3 - 1; m8 >= 0; m8--) {
          const measurement = measurements[m8];
          if (furthestMeasurementsFound.has(measurement.lane)) {
            continue;
          }
          const previousFurthestMeasurement = furthestMeasurements.get(
            measurement.lane
          );
          if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
            furthestMeasurements.set(measurement.lane, measurement);
          } else if (measurement.end < previousFurthestMeasurement.end) {
            furthestMeasurementsFound.set(measurement.lane, true);
          }
          if (furthestMeasurementsFound.size === this.options.lanes) {
            break;
          }
        }
        return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a15, b7) => {
          if (a15.end === b7.end) {
            return a15.index - b7.index;
          }
          return a15.end - b7.end;
        })[0] : void 0;
      };
      this.getMeasurementOptions = memo(
        () => [
          this.options.count,
          this.options.paddingStart,
          this.options.scrollMargin,
          this.options.getItemKey,
          this.options.enabled,
          this.options.lanes
        ],
        (count2, paddingStart, scrollMargin, getItemKey, enabled, lanes) => {
          const lanesChanged = this.prevLanes !== void 0 && this.prevLanes !== lanes;
          if (lanesChanged) {
            this.lanesChangedFlag = true;
          }
          this.prevLanes = lanes;
          this.pendingMeasuredCacheIndexes = [];
          return {
            count: count2,
            paddingStart,
            scrollMargin,
            getItemKey,
            enabled,
            lanes
          };
        },
        {
          key: false
        }
      );
      this.getMeasurements = memo(
        () => [this.getMeasurementOptions(), this.itemSizeCache],
        ({ count: count2, paddingStart, scrollMargin, getItemKey, enabled, lanes }, itemSizeCache) => {
          if (!enabled) {
            this.measurementsCache = [];
            this.itemSizeCache.clear();
            this.laneAssignments.clear();
            return [];
          }
          if (this.laneAssignments.size > count2) {
            for (const index3 of this.laneAssignments.keys()) {
              if (index3 >= count2) {
                this.laneAssignments.delete(index3);
              }
            }
          }
          if (this.lanesChangedFlag) {
            this.lanesChangedFlag = false;
            this.lanesSettling = true;
            this.measurementsCache = [];
            this.itemSizeCache.clear();
            this.laneAssignments.clear();
            this.pendingMeasuredCacheIndexes = [];
          }
          if (this.measurementsCache.length === 0 && !this.lanesSettling) {
            this.measurementsCache = this.options.initialMeasurementsCache;
            this.measurementsCache.forEach((item) => {
              this.itemSizeCache.set(item.key, item.size);
            });
          }
          const min2 = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
          this.pendingMeasuredCacheIndexes = [];
          if (this.lanesSettling && this.measurementsCache.length === count2) {
            this.lanesSettling = false;
          }
          const measurements = this.measurementsCache.slice(0, min2);
          const laneLastIndex = new Array(lanes).fill(
            void 0
          );
          for (let m8 = 0; m8 < min2; m8++) {
            const item = measurements[m8];
            if (item) {
              laneLastIndex[item.lane] = m8;
            }
          }
          for (let i9 = min2; i9 < count2; i9++) {
            const key = getItemKey(i9);
            const cachedLane = this.laneAssignments.get(i9);
            let lane;
            let start;
            if (cachedLane !== void 0 && this.options.lanes > 1) {
              lane = cachedLane;
              const prevIndex = laneLastIndex[lane];
              const prevInLane = prevIndex !== void 0 ? measurements[prevIndex] : void 0;
              start = prevInLane ? prevInLane.end + this.options.gap : paddingStart + scrollMargin;
            } else {
              const furthestMeasurement = this.options.lanes === 1 ? measurements[i9 - 1] : this.getFurthestMeasurement(measurements, i9);
              start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
              lane = furthestMeasurement ? furthestMeasurement.lane : i9 % this.options.lanes;
              if (this.options.lanes > 1) {
                this.laneAssignments.set(i9, lane);
              }
            }
            const measuredSize = itemSizeCache.get(key);
            const size4 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i9);
            const end = start + size4;
            measurements[i9] = {
              index: i9,
              start,
              size: size4,
              end,
              key,
              lane
            };
            laneLastIndex[lane] = i9;
          }
          this.measurementsCache = measurements;
          return measurements;
        },
        {
          key: "getMeasurements",
          debug: () => this.options.debug
        }
      );
      this.calculateRange = memo(
        () => [
          this.getMeasurements(),
          this.getSize(),
          this.getScrollOffset(),
          this.options.lanes
        ],
        (measurements, outerSize, scrollOffset, lanes) => {
          return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
            measurements,
            outerSize,
            scrollOffset,
            lanes
          }) : null;
        },
        {
          key: "calculateRange",
          debug: () => this.options.debug
        }
      );
      this.getVirtualIndexes = memo(
        () => {
          let startIndex = null;
          let endIndex = null;
          const range = this.calculateRange();
          if (range) {
            startIndex = range.startIndex;
            endIndex = range.endIndex;
          }
          this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
          return [
            this.options.rangeExtractor,
            this.options.overscan,
            this.options.count,
            startIndex,
            endIndex
          ];
        },
        (rangeExtractor, overscan, count2, startIndex, endIndex) => {
          return startIndex === null || endIndex === null ? [] : rangeExtractor({
            startIndex,
            endIndex,
            overscan,
            count: count2
          });
        },
        {
          key: "getVirtualIndexes",
          debug: () => this.options.debug
        }
      );
      this.indexFromElement = (node) => {
        const attributeName = this.options.indexAttribute;
        const indexStr = node.getAttribute(attributeName);
        if (!indexStr) {
          console.warn(
            "Missing attribute name '".concat(attributeName, "={index}' on measured element.")
          );
          return -1;
        }
        return parseInt(indexStr, 10);
      };
      this._measureElement = (node, entry) => {
        const index3 = this.indexFromElement(node);
        const item = this.measurementsCache[index3];
        if (!item) {
          return;
        }
        const key = item.key;
        const prevNode = this.elementsCache.get(key);
        if (prevNode !== node) {
          if (prevNode) {
            this.observer.unobserve(prevNode);
          }
          this.observer.observe(node);
          this.elementsCache.set(key, node);
        }
        if (node.isConnected) {
          this.resizeItem(index3, this.options.measureElement(node, entry, this));
        }
      };
      this.resizeItem = (index3, size4) => {
        var _a;
        const item = this.measurementsCache[index3];
        if (!item) {
          return;
        }
        const itemSize = (_a = this.itemSizeCache.get(item.key)) != null ? _a : item.size;
        const delta = size4 - itemSize;
        if (delta !== 0) {
          if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
            if (this.options.debug) {
              console.info("correction", delta);
            }
            this._scrollToOffset(this.getScrollOffset(), {
              adjustments: this.scrollAdjustments += delta,
              behavior: void 0
            });
          }
          this.pendingMeasuredCacheIndexes.push(item.index);
          this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size4));
          this.notify(false);
        }
      };
      this.measureElement = (node) => {
        if (!node) {
          this.elementsCache.forEach((cached, key) => {
            if (!cached.isConnected) {
              this.observer.unobserve(cached);
              this.elementsCache.delete(key);
            }
          });
          return;
        }
        this._measureElement(node, void 0);
      };
      this.getVirtualItems = memo(
        () => [this.getVirtualIndexes(), this.getMeasurements()],
        (indexes, measurements) => {
          const virtualItems = [];
          for (let k7 = 0, len = indexes.length; k7 < len; k7++) {
            const i9 = indexes[k7];
            const measurement = measurements[i9];
            virtualItems.push(measurement);
          }
          return virtualItems;
        },
        {
          key: "getVirtualItems",
          debug: () => this.options.debug
        }
      );
      this.getVirtualItemForOffset = (offset4) => {
        const measurements = this.getMeasurements();
        if (measurements.length === 0) {
          return void 0;
        }
        return notUndefined(
          measurements[findNearestBinarySearch(
            0,
            measurements.length - 1,
            (index3) => notUndefined(measurements[index3]).start,
            offset4
          )]
        );
      };
      this.getMaxScrollOffset = () => {
        if (!this.scrollElement) return 0;
        if ("scrollHeight" in this.scrollElement) {
          return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
        } else {
          const doc = this.scrollElement.document.documentElement;
          return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
        }
      };
      this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
        if (!this.scrollElement) return 0;
        const size4 = this.getSize();
        const scrollOffset = this.getScrollOffset();
        if (align === "auto") {
          align = toOffset >= scrollOffset + size4 ? "end" : "start";
        }
        if (align === "center") {
          toOffset += (itemSize - size4) / 2;
        } else if (align === "end") {
          toOffset -= size4;
        }
        const maxOffset = this.getMaxScrollOffset();
        return Math.max(Math.min(maxOffset, toOffset), 0);
      };
      this.getOffsetForIndex = (index3, align = "auto") => {
        index3 = Math.max(0, Math.min(index3, this.options.count - 1));
        const item = this.measurementsCache[index3];
        if (!item) {
          return void 0;
        }
        const size4 = this.getSize();
        const scrollOffset = this.getScrollOffset();
        if (align === "auto") {
          if (item.end >= scrollOffset + size4 - this.options.scrollPaddingEnd) {
            align = "end";
          } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
            align = "start";
          } else {
            return [scrollOffset, align];
          }
        }
        if (align === "end" && index3 === this.options.count - 1) {
          return [this.getMaxScrollOffset(), align];
        }
        const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
        return [
          this.getOffsetForAlignment(toOffset, align, item.size),
          align
        ];
      };
      this.isDynamicMode = () => this.elementsCache.size > 0;
      this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
        if (behavior === "smooth" && this.isDynamicMode()) {
          console.warn(
            "The `smooth` scroll behavior is not fully supported with dynamic size."
          );
        }
        this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
          adjustments: void 0,
          behavior
        });
      };
      this.scrollToIndex = (index3, { align: initialAlign = "auto", behavior } = {}) => {
        if (behavior === "smooth" && this.isDynamicMode()) {
          console.warn(
            "The `smooth` scroll behavior is not fully supported with dynamic size."
          );
        }
        index3 = Math.max(0, Math.min(index3, this.options.count - 1));
        this.currentScrollToIndex = index3;
        let attempts = 0;
        const maxAttempts = 10;
        const tryScroll = (currentAlign) => {
          if (!this.targetWindow) return;
          const offsetInfo = this.getOffsetForIndex(index3, currentAlign);
          if (!offsetInfo) {
            console.warn("Failed to get offset for index:", index3);
            return;
          }
          const [offset4, align] = offsetInfo;
          this._scrollToOffset(offset4, { adjustments: void 0, behavior });
          this.targetWindow.requestAnimationFrame(() => {
            const verify = () => {
              if (this.currentScrollToIndex !== index3) return;
              const currentOffset = this.getScrollOffset();
              const afterInfo = this.getOffsetForIndex(index3, align);
              if (!afterInfo) {
                console.warn("Failed to get offset for index:", index3);
                return;
              }
              if (!approxEqual(afterInfo[0], currentOffset)) {
                scheduleRetry(align);
              }
            };
            if (this.isDynamicMode()) {
              this.targetWindow.requestAnimationFrame(verify);
            } else {
              verify();
            }
          });
        };
        const scheduleRetry = (align) => {
          if (!this.targetWindow) return;
          if (this.currentScrollToIndex !== index3) return;
          attempts++;
          if (attempts < maxAttempts) {
            if (this.options.debug) {
              console.info("Schedule retry", attempts, maxAttempts);
            }
            this.targetWindow.requestAnimationFrame(() => tryScroll(align));
          } else {
            console.warn(
              "Failed to scroll to index ".concat(index3, " after ").concat(maxAttempts, " attempts.")
            );
          }
        };
        tryScroll(initialAlign);
      };
      this.scrollBy = (delta, { behavior } = {}) => {
        if (behavior === "smooth" && this.isDynamicMode()) {
          console.warn(
            "The `smooth` scroll behavior is not fully supported with dynamic size."
          );
        }
        this._scrollToOffset(this.getScrollOffset() + delta, {
          adjustments: void 0,
          behavior
        });
      };
      this.getTotalSize = () => {
        var _a2;
        var _a;
        const measurements = this.getMeasurements();
        let end;
        if (measurements.length === 0) {
          end = this.options.paddingStart;
        } else if (this.options.lanes === 1) {
          end = (_a2 = (_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) != null ? _a2 : 0;
        } else {
          const endByLane = Array(this.options.lanes).fill(null);
          let endIndex = measurements.length - 1;
          while (endIndex >= 0 && endByLane.some((val) => val === null)) {
            const item = measurements[endIndex];
            if (endByLane[item.lane] === null) {
              endByLane[item.lane] = item.end;
            }
            endIndex--;
          }
          end = Math.max(...endByLane.filter((val) => val !== null));
        }
        return Math.max(
          end - this.options.scrollMargin + this.options.paddingEnd,
          0
        );
      };
      this._scrollToOffset = (offset4, {
        adjustments,
        behavior
      }) => {
        this.options.scrollToFn(offset4, { behavior, adjustments }, this);
      };
      this.measure = () => {
        this.itemSizeCache = /* @__PURE__ */ new Map();
        this.laneAssignments = /* @__PURE__ */ new Map();
        this.notify(false);
      };
      this.setOptions(opts);
    }
  };
  var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
    while (low <= high) {
      const middle = (low + high) / 2 | 0;
      const currentValue = getCurrentValue(middle);
      if (currentValue < value) {
        low = middle + 1;
      } else if (currentValue > value) {
        high = middle - 1;
      } else {
        return middle;
      }
    }
    if (low > 0) {
      return low - 1;
    } else {
      return 0;
    }
  };
  function calculateRange({
    measurements,
    outerSize,
    scrollOffset,
    lanes
  }) {
    const lastIndex = measurements.length - 1;
    const getOffset = (index3) => measurements[index3].start;
    if (measurements.length <= lanes) {
      return {
        startIndex: 0,
        endIndex: lastIndex
      };
    }
    let startIndex = findNearestBinarySearch(
      0,
      lastIndex,
      getOffset,
      scrollOffset
    );
    let endIndex = startIndex;
    if (lanes === 1) {
      while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
        endIndex++;
      }
    } else if (lanes > 1) {
      const endPerLane = Array(lanes).fill(0);
      while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
        const item = measurements[endIndex];
        endPerLane[item.lane] = item.end;
        endIndex++;
      }
      const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
      while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
        const item = measurements[startIndex];
        startPerLane[item.lane] = item.start;
        startIndex--;
      }
      startIndex = Math.max(0, startIndex - startIndex % lanes);
      endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
    }
    return { startIndex, endIndex };
  }

  // node_modules/@tanstack/react-virtual/dist/esm/index.js
  var useIsomorphicLayoutEffect = typeof document !== "undefined" ? _2 : y2;
  function useVirtualizerBase(_a) {
    var _b = _a, {
      useFlushSync = true
    } = _b, options = __objRest(_b, [
      "useFlushSync"
    ]);
    const rerender = h2(() => ({}), {})[1];
    const resolvedOptions = __spreadProps(__spreadValues({}, options), {
      onChange: (instance2, sync) => {
        var _a2;
        if (useFlushSync && sync) {
          En(rerender);
        } else {
          rerender();
        }
        (_a2 = options.onChange) == null ? void 0 : _a2.call(options, instance2, sync);
      }
    });
    const [instance] = d2(
      () => new Virtualizer(resolvedOptions)
    );
    instance.setOptions(resolvedOptions);
    useIsomorphicLayoutEffect(() => {
      return instance._didMount();
    }, []);
    useIsomorphicLayoutEffect(() => {
      return instance._willUpdate();
    });
    return instance;
  }
  function useVirtualizer(options) {
    return useVirtualizerBase(__spreadValues({
      observeElementRect,
      observeElementOffset,
      scrollToFn: elementScroll
    }, options));
  }

  // node_modules/@headlessui/react/dist/components/combobox/combobox.js
  init_compat_module();
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
  init_compat_module();
  function l7(e8, r11) {
    return e8 !== null && r11 !== null && typeof e8 == "object" && typeof r11 == "object" && "id" in e8 && "id" in r11 ? e8.id === r11.id : e8 === r11;
  }
  function u7(e8 = l7) {
    return q2((r11, t9) => {
      if (typeof e8 == "string") {
        let o11 = e8;
        return (r11 == null ? void 0 : r11[o11]) === (t9 == null ? void 0 : t9[o11]);
      }
      return e8(r11, t9);
    }, [e8]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-element-size.js
  init_compat_module();
  function h4(i9) {
    if (i9 === null) return { width: 0, height: 0 };
    let { width: t9, height: e8 } = i9.getBoundingClientRect();
    return { width: t9, height: e8 };
  }
  function w6(i9, t9, e8 = false) {
    let [r11, f14] = d2(() => h4(t9));
    return n2(() => {
      if (!t9 || !i9) return;
      let n9 = o4();
      return n9.requestAnimationFrame(function s12() {
        n9.requestAnimationFrame(s12), f14((u17) => {
          let o11 = h4(t9);
          return o11.width === u17.width && o11.height === u17.height ? u17 : o11;
        });
      }), () => {
        n9.dispose();
      };
    }, [t9, i9]), e8 ? { width: "".concat(r11.width, "px"), height: "".concat(r11.height, "px") } : r11;
  }

  // node_modules/@headlessui/react/dist/hooks/use-handle-toggle.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/components/mouse.js
  var g4 = ((f14) => (f14[f14.Left = 0] = "Left", f14[f14.Right = 2] = "Right", f14))(g4 || {});

  // node_modules/@headlessui/react/dist/hooks/use-handle-toggle.js
  function s8(t9) {
    let r11 = A2(null), u17 = o5((e8) => {
      r11.current = e8.pointerType, !s7(e8.currentTarget) && e8.pointerType === "mouse" && e8.button === g4.Left && (e8.preventDefault(), t9(e8));
    }), i9 = o5((e8) => {
      r11.current !== "mouse" && (s7(e8.currentTarget) || t9(e8));
    });
    return { onPointerDown: u17, onClick: i9 };
  }

  // node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/default-map.js
  var a7 = class extends Map {
    constructor(t9) {
      super();
      this.factory = t9;
    }
    get(t9) {
      let e8 = super.get(t9);
      return e8 === void 0 && (e8 = this.factory(t9), this.set(t9, e8)), e8;
    }
  };

  // node_modules/@headlessui/react/dist/machine.js
  var h5 = Object.defineProperty;
  var v3 = (t9, e8, r11) => e8 in t9 ? h5(t9, e8, { enumerable: true, configurable: true, writable: true, value: r11 }) : t9[e8] = r11;
  var S2 = (t9, e8, r11) => (v3(t9, typeof e8 != "symbol" ? e8 + "" : e8, r11), r11);
  var b5 = (t9, e8, r11) => {
    if (!e8.has(t9)) throw TypeError("Cannot " + r11);
  };
  var i5 = (t9, e8, r11) => (b5(t9, e8, "read from private field"), r11 ? r11.call(t9) : e8.get(t9));
  var c5 = (t9, e8, r11) => {
    if (e8.has(t9)) throw TypeError("Cannot add the same private member more than once");
    e8 instanceof WeakSet ? e8.add(t9) : e8.set(t9, r11);
  };
  var u8 = (t9, e8, r11, s12) => (b5(t9, e8, "write to private field"), s12 ? s12.call(t9, r11) : e8.set(t9, r11), r11);
  var n5;
  var a8;
  var o8;
  var T5 = class {
    constructor(e8) {
      c5(this, n5, {});
      c5(this, a8, new a7(() => /* @__PURE__ */ new Set()));
      c5(this, o8, /* @__PURE__ */ new Set());
      S2(this, "disposables", o4());
      u8(this, n5, e8), s3.isServer && this.disposables.microTask(() => {
        this.dispose();
      });
    }
    dispose() {
      this.disposables.dispose();
    }
    get state() {
      return i5(this, n5);
    }
    subscribe(e8, r11) {
      if (s3.isServer) return () => {
      };
      let s12 = { selector: e8, callback: r11, current: e8(i5(this, n5)) };
      return i5(this, o8).add(s12), this.disposables.add(() => {
        i5(this, o8).delete(s12);
      });
    }
    on(e8, r11) {
      return s3.isServer ? () => {
      } : (i5(this, a8).get(e8).add(r11), this.disposables.add(() => {
        i5(this, a8).get(e8).delete(r11);
      }));
    }
    send(e8) {
      let r11 = this.reduce(i5(this, n5), e8);
      if (r11 !== i5(this, n5)) {
        u8(this, n5, r11);
        for (let s12 of i5(this, o8)) {
          let l8 = s12.selector(i5(this, n5));
          j6(s12.current, l8) || (s12.current = l8, s12.callback(l8));
        }
        for (let s12 of i5(this, a8).get(e8.type)) s12(i5(this, n5), e8);
      }
    }
  };
  n5 = /* @__PURE__ */ new WeakMap(), a8 = /* @__PURE__ */ new WeakMap(), o8 = /* @__PURE__ */ new WeakMap();
  function j6(t9, e8) {
    return Object.is(t9, e8) ? true : typeof t9 != "object" || t9 === null || typeof e8 != "object" || e8 === null ? false : Array.isArray(t9) && Array.isArray(e8) ? t9.length !== e8.length ? false : f6(t9[Symbol.iterator](), e8[Symbol.iterator]()) : t9 instanceof Map && e8 instanceof Map || t9 instanceof Set && e8 instanceof Set ? t9.size !== e8.size ? false : f6(t9.entries(), e8.entries()) : p5(t9) && p5(e8) ? f6(Object.entries(t9)[Symbol.iterator](), Object.entries(e8)[Symbol.iterator]()) : false;
  }
  function f6(t9, e8) {
    do {
      let r11 = t9.next(), s12 = e8.next();
      if (r11.done && s12.done) return true;
      if (r11.done || s12.done || !Object.is(r11.value, s12.value)) return false;
    } while (true);
  }
  function p5(t9) {
    if (Object.prototype.toString.call(t9) !== "[object Object]") return false;
    let e8 = Object.getPrototypeOf(t9);
    return e8 === null || Object.getPrototypeOf(e8) === null;
  }

  // node_modules/@headlessui/react/dist/machines/stack-machine.js
  var a9 = Object.defineProperty;
  var r8 = (e8, c13, t9) => c13 in e8 ? a9(e8, c13, { enumerable: true, configurable: true, writable: true, value: t9 }) : e8[c13] = t9;
  var p6 = (e8, c13, t9) => (r8(e8, typeof c13 != "symbol" ? c13 + "" : c13, t9), t9);
  var k4 = ((t9) => (t9[t9.Push = 0] = "Push", t9[t9.Pop = 1] = "Pop", t9))(k4 || {});
  var y4 = { [0](e8, c13) {
    let t9 = c13.id, s12 = e8.stack, i9 = e8.stack.indexOf(t9);
    if (i9 !== -1) {
      let n9 = e8.stack.slice();
      return n9.splice(i9, 1), n9.push(t9), s12 = n9, __spreadProps(__spreadValues({}, e8), { stack: s12 });
    }
    return __spreadProps(__spreadValues({}, e8), { stack: [...e8.stack, t9] });
  }, [1](e8, c13) {
    let t9 = c13.id, s12 = e8.stack.indexOf(t9);
    if (s12 === -1) return e8;
    let i9 = e8.stack.slice();
    return i9.splice(s12, 1), __spreadProps(__spreadValues({}, e8), { stack: i9 });
  } };
  var o9 = class _o2 extends T5 {
    constructor() {
      super(...arguments);
      p6(this, "actions", { push: (t9) => this.send({ type: 0, id: t9 }), pop: (t9) => this.send({ type: 1, id: t9 }) });
      p6(this, "selectors", { isTop: (t9, s12) => t9.stack[t9.stack.length - 1] === s12, inStack: (t9, s12) => t9.stack.includes(s12) });
    }
    static new() {
      return new _o2({ stack: [] });
    }
    reduce(t9, s12) {
      return u3(s12.type, y4, t9, s12);
    }
  };
  var x4 = new a7(() => o9.new());

  // node_modules/@headlessui/react/dist/react-glue.js
  var import_with_selector = __toESM(require_with_selector(), 1);
  function S3(e8, n9, r11 = j6) {
    return (0, import_with_selector.useSyncExternalStoreWithSelector)(o5((i9) => e8.subscribe(s9, i9)), o5(() => e8.state), o5(() => e8.state), o5(n9), r11);
  }
  function s9(e8) {
    return e8;
  }

  // node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
  function I5(o11, s12) {
    let t9 = g2(), r11 = x4.get(s12), [i9, c13] = S3(r11, q2((e8) => [r11.selectors.isTop(e8, t9), r11.selectors.inStack(e8, t9)], [r11, t9]));
    return n2(() => {
      if (o11) return r11.actions.push(t9), () => r11.actions.pop(t9);
    }, [r11, o11, t9]), o11 ? c13 ? i9 : true : false;
  }

  // node_modules/@headlessui/react/dist/hooks/use-inert-others.js
  var f7 = /* @__PURE__ */ new Map();
  var u9 = /* @__PURE__ */ new Map();
  function h6(t9) {
    var e8;
    let r11 = (e8 = u9.get(t9)) != null ? e8 : 0;
    return u9.set(t9, r11 + 1), r11 !== 0 ? () => m5(t9) : (f7.set(t9, { "aria-hidden": t9.getAttribute("aria-hidden"), inert: t9.inert }), t9.setAttribute("aria-hidden", "true"), t9.inert = true, () => m5(t9));
  }
  function m5(t9) {
    var i9;
    let r11 = (i9 = u9.get(t9)) != null ? i9 : 1;
    if (r11 === 1 ? u9.delete(t9) : u9.set(t9, r11 - 1), r11 !== 1) return;
    let e8 = f7.get(t9);
    e8 && (e8["aria-hidden"] === null ? t9.removeAttribute("aria-hidden") : t9.setAttribute("aria-hidden", e8["aria-hidden"]), t9.inert = e8.inert, f7.delete(t9));
  }
  function y5(t9, { allowed: r11, disallowed: e8 } = {}) {
    let i9 = I5(t9, "inert-others");
    n2(() => {
      var d6, c13;
      if (!i9) return;
      let a15 = o4();
      for (let n9 of (d6 = e8 == null ? void 0 : e8()) != null ? d6 : []) n9 && a15.add(h6(n9));
      let s12 = (c13 = r11 == null ? void 0 : r11()) != null ? c13 : [];
      for (let n9 of s12) {
        if (!n9) continue;
        let l8 = l3(n9);
        if (!l8) continue;
        let o11 = n9.parentElement;
        for (; o11 && o11 !== l8.body; ) {
          for (let p10 of o11.children) s12.some((E7) => p10.contains(E7)) || a15.add(h6(p10));
          o11 = o11.parentElement;
        }
      }
      return a15.dispose;
    }, [i9, r11, e8]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
  init_compat_module();
  function p7(s12, n9, o11) {
    let i9 = s4((t9) => {
      let e8 = t9.getBoundingClientRect();
      e8.x === 0 && e8.y === 0 && e8.width === 0 && e8.height === 0 && o11();
    });
    y2(() => {
      if (!s12) return;
      let t9 = n9 === null ? null : n4(n9) ? n9 : n9.current;
      if (!t9) return;
      let e8 = o4();
      if (typeof ResizeObserver != "undefined") {
        let r11 = new ResizeObserver(() => i9.current(t9));
        r11.observe(t9), e8.add(() => r11.disconnect());
      }
      if (typeof IntersectionObserver != "undefined") {
        let r11 = new IntersectionObserver(() => i9.current(t9));
        r11.observe(t9), e8.add(() => r11.disconnect());
      }
      return () => e8.dispose();
    }, [n9, i9, s12]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-outside-click.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/focus-management.js
  var E5 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e8) => "".concat(e8, ":not([tabindex='-1'])")).join(",");
  var S4 = ["[data-autofocus]"].map((e8) => "".concat(e8, ":not([tabindex='-1'])")).join(",");
  var T6 = ((o11) => (o11[o11.First = 1] = "First", o11[o11.Previous = 2] = "Previous", o11[o11.Next = 4] = "Next", o11[o11.Last = 8] = "Last", o11[o11.WrapAround = 16] = "WrapAround", o11[o11.NoScroll = 32] = "NoScroll", o11[o11.AutoFocus = 64] = "AutoFocus", o11))(T6 || {});
  var A5 = ((n9) => (n9[n9.Error = 0] = "Error", n9[n9.Overflow = 1] = "Overflow", n9[n9.Success = 2] = "Success", n9[n9.Underflow = 3] = "Underflow", n9))(A5 || {});
  var O3 = ((t9) => (t9[t9.Previous = -1] = "Previous", t9[t9.Next = 1] = "Next", t9))(O3 || {});
  var I6 = ((t9) => (t9[t9.Strict = 0] = "Strict", t9[t9.Loose = 1] = "Loose", t9))(I6 || {});
  function H4(e8, r11 = 0) {
    var t9;
    return e8 === ((t9 = l3(e8)) == null ? void 0 : t9.body) ? false : u3(r11, { [0]() {
      return e8.matches(E5);
    }, [1]() {
      let l8 = e8;
      for (; l8 !== null; ) {
        if (l8.matches(E5)) return true;
        l8 = l8.parentElement;
      }
      return false;
    } });
  }
  var g5 = ((t9) => (t9[t9.Keyboard = 0] = "Keyboard", t9[t9.Mouse = 1] = "Mouse", t9))(g5 || {});
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e8) => {
    e8.metaKey || e8.altKey || e8.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true), document.addEventListener("click", (e8) => {
    e8.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e8.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true));
  var _4 = ["textarea", "input"].join(",");
  function G4(e8, r11 = (t9) => t9) {
    return e8.slice().sort((t9, l8) => {
      let n9 = r11(t9), a15 = r11(l8);
      if (n9 === null || a15 === null) return 0;
      let u17 = n9.compareDocumentPosition(a15);
      return u17 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u17 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
  }

  // node_modules/@headlessui/react/dist/utils/platform.js
  function t6() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
  }
  function i6() {
    return /Android/gi.test(window.navigator.userAgent);
  }
  function n6() {
    return t6() || i6();
  }

  // node_modules/@headlessui/react/dist/hooks/use-document-event.js
  init_compat_module();
  function i7(t9, e8, o11, n9) {
    let u17 = s4(o11);
    y2(() => {
      if (!t9) return;
      function r11(m8) {
        u17.current(m8);
      }
      return document.addEventListener(e8, r11, n9), () => document.removeEventListener(e8, r11, n9);
    }, [t9, e8, n9]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-window-event.js
  init_compat_module();
  function s10(t9, e8, o11, n9) {
    let i9 = s4(o11);
    y2(() => {
      if (!t9) return;
      function r11(d6) {
        i9.current(d6);
      }
      return window.addEventListener(e8, r11, n9), () => window.removeEventListener(e8, r11, n9);
    }, [t9, e8, n9]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-outside-click.js
  var C8 = 30;
  function k5(o11, f14, h8) {
    let m8 = s4(h8), s12 = q2(function(e8, c13) {
      if (e8.defaultPrevented) return;
      let r11 = c13(e8);
      if (r11 === null || !r11.getRootNode().contains(r11) || !r11.isConnected) return;
      let M6 = (function u17(n9) {
        return typeof n9 == "function" ? u17(n9()) : Array.isArray(n9) || n9 instanceof Set ? n9 : [n9];
      })(f14);
      for (let u17 of M6) if (u17 !== null && (u17.contains(r11) || e8.composed && e8.composedPath().includes(u17))) return;
      return !H4(r11, I6.Loose) && r11.tabIndex !== -1 && e8.preventDefault(), m8.current(e8, r11);
    }, [m8, f14]), i9 = A2(null);
    i7(o11, "pointerdown", (t9) => {
      var e8, c13;
      n6() || (i9.current = ((c13 = (e8 = t9.composedPath) == null ? void 0 : e8.call(t9)) == null ? void 0 : c13[0]) || t9.target);
    }, true), i7(o11, "pointerup", (t9) => {
      if (n6() || !i9.current) return;
      let e8 = i9.current;
      return i9.current = null, s12(t9, () => e8);
    }, true);
    let l8 = A2({ x: 0, y: 0 });
    i7(o11, "touchstart", (t9) => {
      l8.current.x = t9.touches[0].clientX, l8.current.y = t9.touches[0].clientY;
    }, true), i7(o11, "touchend", (t9) => {
      let e8 = { x: t9.changedTouches[0].clientX, y: t9.changedTouches[0].clientY };
      if (!(Math.abs(e8.x - l8.current.x) >= C8 || Math.abs(e8.y - l8.current.y) >= C8)) return s12(t9, () => i4(t9.target) ? t9.target : null);
    }, true), s10(o11, "blur", (t9) => s12(t9, () => u5(window.document.activeElement) ? window.document.activeElement : null), true);
  }

  // node_modules/@headlessui/react/dist/hooks/use-owner.js
  init_compat_module();
  function u10(...e8) {
    return T2(() => l3(...e8), [...e8]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-quick-release.js
  init_compat_module();
  var H5 = ((e8) => (e8[e8.Ignore = 0] = "Ignore", e8[e8.Select = 1] = "Select", e8[e8.Close = 2] = "Close", e8))(H5 || {});
  var S5 = { Ignore: { kind: 0 }, Select: (r11) => ({ kind: 1, target: r11 }), Close: { kind: 2 } };
  var M4 = 200;
  var f8 = 5;
  function L5(r11, { trigger: n9, action: T8, close: e8, select: p10 }) {
    let l8 = A2(null), i9 = A2(null), u17 = A2(null);
    i7(r11 && n9 !== null, "pointerdown", (t9) => {
      o6(t9 == null ? void 0 : t9.target) && n9 != null && n9.contains(t9.target) && (i9.current = t9.x, u17.current = t9.y, l8.current = t9.timeStamp);
    }), i7(r11 && n9 !== null, "pointerup", (t9) => {
      var s12, m8;
      let c13 = l8.current;
      if (c13 === null || (l8.current = null, !i4(t9.target)) || Math.abs(t9.x - ((s12 = i9.current) != null ? s12 : t9.x)) < f8 && Math.abs(t9.y - ((m8 = u17.current) != null ? m8 : t9.y)) < f8) return;
      let a15 = T8(t9);
      switch (a15.kind) {
        case 0:
          return;
        case 1: {
          t9.timeStamp - c13 > M4 && (p10(a15.target), e8());
          break;
        }
        case 2: {
          e8();
          break;
        }
      }
    }, { capture: true });
  }

  // node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-event-listener.js
  init_compat_module();
  function E6(n9, e8, a15, t9) {
    let i9 = s4(a15);
    y2(() => {
      n9 = n9 != null ? n9 : window;
      function r11(o11) {
        i9.current(o11);
      }
      return n9.addEventListener(e8, r11, t9), () => n9.removeEventListener(e8, r11, t9);
    }, [n9, e8, t9]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
  function v4(e8) {
    let l8 = A2({ value: "", selectionStart: null, selectionEnd: null });
    return E6(e8, "blur", (n9) => {
      let t9 = n9.target;
      l6(t9) && (l8.current = { value: t9.value, selectionStart: t9.selectionStart, selectionEnd: t9.selectionEnd });
    }), o5(() => {
      if (!d4(e8) && l6(e8) && e8.isConnected) {
        if (e8.focus({ preventScroll: true }), e8.value !== l8.current.value) e8.setSelectionRange(e8.value.length, e8.value.length);
        else {
          let { selectionStart: n9, selectionEnd: t9 } = l8.current;
          n9 !== null && t9 !== null && e8.setSelectionRange(n9, t9);
        }
        l8.current = { value: "", selectionStart: null, selectionEnd: null };
      }
    });
  }

  // node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
  init_compat_module();
  function e6(t9, u17) {
    return T2(() => {
      var n9;
      if (t9.type) return t9.type;
      let r11 = (n9 = t9.as) != null ? n9 : "button";
      if (typeof r11 == "string" && r11.toLowerCase() === "button" || (u17 == null ? void 0 : u17.tagName) === "BUTTON" && !u17.hasAttribute("type")) return "button";
    }, [t9.type, t9.as, u17]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-store.js
  init_compat_module();
  function o10(t9) {
    return C3(t9.subscribe, t9.getSnapshot, t9.getSnapshot);
  }

  // node_modules/@headlessui/react/dist/utils/store.js
  function a11(o11, r11) {
    let t9 = o11(), n9 = /* @__PURE__ */ new Set();
    return { getSnapshot() {
      return t9;
    }, subscribe(e8) {
      return n9.add(e8), () => n9.delete(e8);
    }, dispatch(e8, ...s12) {
      let i9 = r11[e8].call(t9, ...s12);
      i9 && (t9 = i9, n9.forEach((c13) => c13()));
    } };
  }

  // node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
  function d5() {
    let r11;
    return { before({ doc: e8 }) {
      var l8;
      let o11 = e8.documentElement, t9 = (l8 = e8.defaultView) != null ? l8 : window;
      r11 = Math.max(0, t9.innerWidth - o11.clientWidth);
    }, after({ doc: e8, d: o11 }) {
      let t9 = e8.documentElement, l8 = Math.max(0, t9.clientWidth - t9.offsetWidth), n9 = Math.max(0, r11 - l8);
      o11.style(t9, "paddingRight", "".concat(n9, "px"));
    } };
  }

  // node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
  function w7() {
    return t6() ? { before({ doc: o11, d: r11, meta: m8 }) {
      function a15(s12) {
        for (let l8 of m8().containers) for (let c13 of l8()) if (c13.contains(s12)) return true;
        return false;
      }
      r11.microTask(() => {
        var c13;
        if (window.getComputedStyle(o11.documentElement).scrollBehavior !== "auto") {
          let t9 = o4();
          t9.style(o11.documentElement, "scrollBehavior", "auto"), r11.add(() => r11.microTask(() => t9.dispose()));
        }
        let s12 = (c13 = window.scrollY) != null ? c13 : window.pageYOffset, l8 = null;
        r11.addEventListener(o11, "click", (t9) => {
          if (i4(t9.target)) try {
            let e8 = t9.target.closest("a");
            if (!e8) return;
            let { hash: n9 } = new URL(e8.href), f14 = o11.querySelector(n9);
            i4(f14) && !a15(f14) && (l8 = f14);
          } catch (e8) {
          }
        }, true), r11.group((t9) => {
          r11.addEventListener(o11, "touchstart", (e8) => {
            if (t9.dispose(), i4(e8.target) && r6(e8.target)) if (a15(e8.target)) {
              let n9 = e8.target;
              for (; n9.parentElement && a15(n9.parentElement); ) n9 = n9.parentElement;
              t9.style(n9, "overscrollBehavior", "contain");
            } else t9.style(e8.target, "touchAction", "none");
          });
        }), r11.addEventListener(o11, "touchmove", (t9) => {
          if (i4(t9.target)) {
            if (l6(t9.target)) return;
            if (a15(t9.target)) {
              let e8 = t9.target;
              for (; e8.parentElement && e8.dataset.headlessuiPortal !== "" && !(e8.scrollHeight > e8.clientHeight || e8.scrollWidth > e8.clientWidth); ) e8 = e8.parentElement;
              e8.dataset.headlessuiPortal === "" && t9.preventDefault();
            } else t9.preventDefault();
          }
        }, { passive: false }), r11.add(() => {
          var e8;
          let t9 = (e8 = window.scrollY) != null ? e8 : window.pageYOffset;
          s12 !== t9 && window.scrollTo(0, s12), l8 && l8.isConnected && (l8.scrollIntoView({ block: "nearest" }), l8 = null);
        });
      });
    } } : {};
  }

  // node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
  function r9() {
    return { before({ doc: e8, d: o11 }) {
      o11.style(e8.documentElement, "overflow", "hidden");
    } };
  }

  // node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
  function r10(e8) {
    let o11 = {};
    for (let t9 of e8) Object.assign(o11, t9(o11));
    return o11;
  }
  var c6 = a11(() => /* @__PURE__ */ new Map(), { PUSH(e8, o11) {
    var n9;
    let t9 = (n9 = this.get(e8)) != null ? n9 : { doc: e8, count: 0, d: o4(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
    return t9.count++, t9.meta.add(o11), t9.computedMeta = r10(t9.meta), this.set(e8, t9), this;
  }, POP(e8, o11) {
    let t9 = this.get(e8);
    return t9 && (t9.count--, t9.meta.delete(o11), t9.computedMeta = r10(t9.meta)), this;
  }, SCROLL_PREVENT(e8) {
    let o11 = { doc: e8.doc, d: e8.d, meta() {
      return e8.computedMeta;
    } }, t9 = [w7(), d5(), r9()];
    t9.forEach(({ before: n9 }) => n9 == null ? void 0 : n9(o11)), t9.forEach(({ after: n9 }) => n9 == null ? void 0 : n9(o11));
  }, SCROLL_ALLOW({ d: e8 }) {
    e8.dispose();
  }, TEARDOWN({ doc: e8 }) {
    this.delete(e8);
  } });
  c6.subscribe(() => {
    let e8 = c6.getSnapshot(), o11 = /* @__PURE__ */ new Map();
    for (let [t9] of e8) o11.set(t9, t9.documentElement.style.overflow);
    for (let t9 of e8.values()) {
      let n9 = o11.get(t9.doc) === "hidden", a15 = t9.count !== 0;
      (a15 && !n9 || !a15 && n9) && c6.dispatch(t9.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t9), t9.count === 0 && c6.dispatch("TEARDOWN", t9);
    }
  });

  // node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
  function a12(r11, e8, n9 = () => ({ containers: [] })) {
    let f14 = o10(c6), o11 = e8 ? f14.get(e8) : void 0, i9 = o11 ? o11.count > 0 : false;
    return n2(() => {
      if (!(!e8 || !r11)) return c6.dispatch("PUSH", e8, n9), () => c6.dispatch("POP", e8, n9);
    }, [r11, e8]), i9;
  }

  // node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
  function f9(e8, c13, n9 = () => [document.body]) {
    let r11 = I5(e8, "scroll-lock");
    a12(r11, c13, (t9) => {
      var o11;
      return { containers: [...(o11 = t9.containers) != null ? o11 : [], n9] };
    });
  }

  // node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
  init_compat_module();
  function t7(e8) {
    return [e8.screenX, e8.screenY];
  }
  function u11() {
    let e8 = A2([-1, -1]);
    return { wasMoved(r11) {
      let n9 = t7(r11);
      return e8.current[0] === n9[0] && e8.current[1] === n9[1] ? false : (e8.current = n9, true);
    }, update(r11) {
      e8.current = t7(r11);
    } };
  }

  // node_modules/@headlessui/react/dist/hooks/use-transition.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-flags.js
  init_compat_module();
  function c7(u17 = 0) {
    let [r11, a15] = d2(u17), g6 = q2((e8) => a15(e8), []), s12 = q2((e8) => a15((l8) => l8 | e8), []), m8 = q2((e8) => (r11 & e8) === e8, [r11]), n9 = q2((e8) => a15((l8) => l8 & ~e8), []), F6 = q2((e8) => a15((l8) => l8 ^ e8), []);
    return { flags: r11, setFlag: g6, addFlag: s12, hasFlag: m8, removeFlag: n9, toggleFlag: F6 };
  }

  // node_modules/@headlessui/react/dist/hooks/use-transition.js
  var T7;
  var S6;
  typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T7 = process == null ? void 0 : process.env) == null ? void 0 : T7["NODE_ENV"]) === "test" && typeof ((S6 = Element == null ? void 0 : Element.prototype) == null ? void 0 : S6.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
    return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join("\n")), [];
  });
  var A6 = ((i9) => (i9[i9.None = 0] = "None", i9[i9.Closed = 1] = "Closed", i9[i9.Enter = 2] = "Enter", i9[i9.Leave = 4] = "Leave", i9))(A6 || {});
  function x5(e8) {
    let r11 = {};
    for (let t9 in e8) e8[t9] === true && (r11["data-".concat(t9)] = "");
    return r11;
  }
  function N4(e8, r11, t9, n9) {
    let [i9, a15] = d2(t9), { hasFlag: s12, addFlag: o11, removeFlag: l8 } = c7(e8 && i9 ? 3 : 0), u17 = A2(false), f14 = A2(false), E7 = p3();
    return n2(() => {
      var d6;
      if (e8) {
        if (t9 && a15(true), !r11) {
          t9 && o11(3);
          return;
        }
        return (d6 = n9 == null ? void 0 : n9.start) == null || d6.call(n9, t9), C9(r11, { inFlight: u17, prepare() {
          f14.current ? f14.current = false : f14.current = u17.current, u17.current = true, !f14.current && (t9 ? (o11(3), l8(4)) : (o11(4), l8(2)));
        }, run() {
          f14.current ? t9 ? (l8(3), o11(4)) : (l8(4), o11(3)) : t9 ? l8(1) : o11(1);
        }, done() {
          var p10;
          f14.current && D5(r11) || (u17.current = false, l8(7), t9 || a15(false), (p10 = n9 == null ? void 0 : n9.end) == null || p10.call(n9, t9));
        } });
      }
    }, [e8, t9, r11, E7]), e8 ? [i9, { closed: s12(1), enter: s12(2), leave: s12(4), transition: s12(2) || s12(4) }] : [t9, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
  }
  function C9(e8, { prepare: r11, run: t9, done: n9, inFlight: i9 }) {
    let a15 = o4();
    return j7(e8, { prepare: r11, inFlight: i9 }), a15.nextFrame(() => {
      t9(), a15.requestAnimationFrame(() => {
        a15.add(M5(e8, n9));
      });
    }), a15.dispose;
  }
  function M5(e8, r11) {
    var a15, s12;
    let t9 = o4();
    if (!e8) return t9.dispose;
    let n9 = false;
    t9.add(() => {
      n9 = true;
    });
    let i9 = (s12 = (a15 = e8.getAnimations) == null ? void 0 : a15.call(e8).filter((o11) => o11 instanceof CSSTransition)) != null ? s12 : [];
    return i9.length === 0 ? (r11(), t9.dispose) : (Promise.allSettled(i9.map((o11) => o11.finished)).then(() => {
      n9 || r11();
    }), t9.dispose);
  }
  function j7(e8, { inFlight: r11, prepare: t9 }) {
    if (r11 != null && r11.current) {
      t9();
      return;
    }
    let n9 = e8.style.transition;
    e8.style.transition = "none", t9(), e8.offsetHeight, e8.style.transition = n9;
  }
  function D5(e8) {
    var t9, n9;
    return ((n9 = (t9 = e8.getAnimations) == null ? void 0 : t9.call(e8)) != null ? n9 : []).some((i9) => i9 instanceof CSSTransition && i9.playState !== "finished");
  }

  // node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
  init_compat_module();
  function F5(c13, { container: e8, accept: t9, walk: r11 }) {
    let o11 = A2(t9), l8 = A2(r11);
    y2(() => {
      o11.current = t9, l8.current = r11;
    }, [t9, r11]), n2(() => {
      if (!e8 || !c13) return;
      let n9 = l3(e8);
      if (!n9) return;
      let f14 = o11.current, p10 = l8.current, i9 = Object.assign((m8) => f14(m8), { acceptNode: f14 }), u17 = n9.createTreeWalker(e8, NodeFilter.SHOW_ELEMENT, i9, false);
      for (; u17.nextNode(); ) p10(u17.currentNode);
    }, [e8, c13, o11, l8]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-watch.js
  init_compat_module();
  function m6(u17, t9) {
    let e8 = A2([]), r11 = o5(u17);
    y2(() => {
      let o11 = [...e8.current];
      for (let [a15, l8] of t9.entries()) if (e8.current[a15] !== l8) {
        let n9 = r11(t9, o11);
        return e8.current = t9, n9;
      }
    }, [r11, ...t9]);
  }

  // node_modules/@floating-ui/react/dist/floating-ui.react.mjs
  init_compat_module();
  init_compat_module();

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle2(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
  }
  var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function isTableElement(element) {
    return tableElements.has(getNodeName(element));
  }
  var topLayerSelectors = [":popover-open", ":modal"];
  function isTopLayer(element) {
    return topLayerSelectors.some((selector) => {
      try {
        return element.matches(selector);
      } catch (_e) {
        return false;
      }
    });
  }
  var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
  var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
  var containValues = ["paint", "layout", "strict", "content"];
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
    return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
  }
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  // node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
  function getUserAgent() {
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
      return uaData.brands.map((_ref) => {
        let {
          brand,
          version
        } = _ref;
        return brand + "/" + version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = (v6) => ({
    x: v6,
    y: v6
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  var oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
  function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  var lrPlacement = ["left", "right"];
  var rlPlacement = ["right", "left"];
  var tbPlacement = ["top", "bottom"];
  var btPlacement = ["bottom", "top"];
  function getSideList(side, isStart, rtl) {
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rlPlacement : lrPlacement;
        return isStart ? lrPlacement : rlPlacement;
      case "left":
      case "right":
        return isStart ? tbPlacement : btPlacement;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return __spreadValues({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, padding);
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x: x6,
      y: y8,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y8,
      left: x6,
      right: x6 + width,
      bottom: y8 + height,
      x: x6,
      y: y8
    };
  }

  // node_modules/@floating-ui/react/dist/floating-ui.react.mjs
  init_compat_module();

  // node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x6,
      y: y8,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x: x6,
      y: y8,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x: x6,
      y: y8
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i9 = 0; i9 < validMiddleware.length; i9++) {
      var _platform$detectOverf;
      const {
        name,
        fn: fn2
      } = validMiddleware[i9];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn2({
        x: x6,
        y: y8,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: __spreadProps(__spreadValues({}, platform2), {
          detectOverflow: (_platform$detectOverf = platform2.detectOverflow) != null ? _platform$detectOverf : detectOverflow
        }),
        elements: {
          reference,
          floating
        }
      });
      x6 = nextX != null ? nextX : x6;
      y8 = nextY != null ? nextY : y8;
      middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
        [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
      });
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x: x6,
            y: y8
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i9 = -1;
      }
    }
    return {
      x: x6,
      y: y8,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const _a = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true
        } = _a, detectOverflowOptions = __objRest(_a, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
            if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
            // overflows the main axis.
            overflowsData.every((d6) => getSideAxis(d6.placement) === initialSideAxis ? d6.overflows[0] > 0 : true)) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d6) => d6.overflows[0] <= 0).sort((a15, b7) => a15.overflows[1] - b7.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d6) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d6.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d6) => [d6.placement, d6.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a15, b7) => a15[1] - b7[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  var originSides = /* @__PURE__ */ new Set(["left", "top"]);
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x: x6,
          y: y8,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x6 + diffCoords.x,
          y: y8 + diffCoords.y,
          data: __spreadProps(__spreadValues({}, diffCoords), {
            placement
          })
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x: x6,
          y: y8,
          placement,
          platform: platform2
        } = state;
        const _a = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x7,
                y: y9
              } = _ref;
              return {
                x: x7,
                y: y9
              };
            }
          }
        } = _a, detectOverflowOptions = __objRest(_a, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]);
        const coords = {
          x: x6,
          y: y8
        };
        const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn(__spreadProps(__spreadValues({}, state), {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        }));
        return __spreadProps(__spreadValues({}, limitedCoords), {
          data: {
            x: limitedCoords.x - x6,
            y: limitedCoords.y - y8,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        });
      }
    };
  };
  var size = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const _a = evaluate(options, state), {
          apply = () => {
          }
        } = _a, detectOverflowOptions = __objRest(_a, [
          "apply"
        ]);
        const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply(__spreadProps(__spreadValues({}, state), {
          availableWidth,
          availableHeight
        }));
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  function getCssDimensions(element) {
    const css = getComputedStyle2(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $: $5
    } = getCssDimensions(domElement);
    let x6 = ($5 ? round(rect.width) : rect.width) / width;
    let y8 = ($5 ? round(rect.height) : rect.height) / height;
    if (!x6 || !Number.isFinite(x6)) {
      x6 = 1;
    }
    if (!y8 || !Number.isFinite(y8)) {
      y8 = 1;
    }
    return {
      x: x6,
      y: y8
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x6 = (clientRect.left + visualOffsets.x) / scale.x;
    let y8 = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle2(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x6 *= iframeScale.x;
        y8 *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x6 += left;
        y8 += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x6,
      y: y8
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x6 = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y8 = htmlRect.top + scroll.scrollTop;
    return {
      x: x6,
      y: y8
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x6 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y8 = -scroll.scrollTop;
    if (getComputedStyle2(body).direction === "rtl") {
      x6 += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x6,
      y: y8
    };
  }
  var SCROLLBAR_MAX = 25;
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x6 = 0;
    let y8 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x6 = visualViewport.offsetLeft;
        y8 = visualViewport.offsetTop;
      }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    if (windowScrollbarX <= 0) {
      const doc = html.ownerDocument;
      const body = doc.body;
      const bodyStyles = getComputedStyle(body);
      const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
      const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
      if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
        width -= clippingStableScrollbarWidth;
      }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
      width += windowScrollbarX;
    }
    return {
      width,
      height,
      x: x6,
      y: y8
    };
  }
  var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x6 = left * scale.x;
    const y8 = top * scale.y;
    return {
      width,
      height,
      x: x6,
      y: y8
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle2(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle2(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    function setLeftRTLScrollbarOffset() {
      offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        setLeftRTLScrollbarOffset();
      }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
      setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x6 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y8 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x: x6,
      y: y8,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle2(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  var getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle2(element).direction === "rtl";
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function rectsAreEqual(a15, b7) {
    return a15.x === b7.x && a15.y === b7.y && a15.width === b7.width && a15.height === b7.height;
  }
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          refresh();
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, __spreadProps(__spreadValues({}, options), {
          // Handle <iframe>s
          root: root.ownerDocument
        }));
      } catch (_e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  var detectOverflow2 = detectOverflow;
  var offset2 = offset;
  var shift2 = shift;
  var flip2 = flip;
  var size2 = size;
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = __spreadValues({
      platform
    }, options);
    const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
      _c: cache
    });
    return computePosition(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
      platform: platformWithCache
    }));
  };

  // node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
  init_compat_module();
  init_compat_module();
  init_compat_module();
  var isClient = typeof document !== "undefined";
  var noop = function noop2() {
  };
  var index = isClient ? _2 : noop;
  function deepEqual(a15, b7) {
    if (a15 === b7) {
      return true;
    }
    if (typeof a15 !== typeof b7) {
      return false;
    }
    if (typeof a15 === "function" && a15.toString() === b7.toString()) {
      return true;
    }
    let length;
    let i9;
    let keys;
    if (a15 && b7 && typeof a15 === "object") {
      if (Array.isArray(a15)) {
        length = a15.length;
        if (length !== b7.length) return false;
        for (i9 = length; i9-- !== 0; ) {
          if (!deepEqual(a15[i9], b7[i9])) {
            return false;
          }
        }
        return true;
      }
      keys = Object.keys(a15);
      length = keys.length;
      if (length !== Object.keys(b7).length) {
        return false;
      }
      for (i9 = length; i9-- !== 0; ) {
        if (!{}.hasOwnProperty.call(b7, keys[i9])) {
          return false;
        }
      }
      for (i9 = length; i9-- !== 0; ) {
        const key = keys[i9];
        if (key === "_owner" && a15.$$typeof) {
          continue;
        }
        if (!deepEqual(a15[key], b7[key])) {
          return false;
        }
      }
      return true;
    }
    return a15 !== a15 && b7 !== b7;
  }
  function getDPR(element) {
    if (typeof window === "undefined") {
      return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
  }
  function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
  }
  function useLatestRef(value) {
    const ref = A2(value);
    index(() => {
      ref.current = value;
    });
    return ref;
  }
  function useFloating(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2,
      elements: {
        reference: externalReference,
        floating: externalFloating
      } = {},
      transform = true,
      whileElementsMounted,
      open
    } = options;
    const [data, setData] = d2({
      x: 0,
      y: 0,
      strategy,
      placement,
      middlewareData: {},
      isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = d2(middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
      setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = d2(null);
    const [_floating, _setFloating] = d2(null);
    const setReference = q2((node) => {
      if (node !== referenceRef.current) {
        referenceRef.current = node;
        _setReference(node);
      }
    }, []);
    const setFloating = q2((node) => {
      if (node !== floatingRef.current) {
        floatingRef.current = node;
        _setFloating(node);
      }
    }, []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = A2(null);
    const floatingRef = A2(null);
    const dataRef = A2(data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform2);
    const openRef = useLatestRef(open);
    const update = q2(() => {
      if (!referenceRef.current || !floatingRef.current) {
        return;
      }
      const config = {
        placement,
        strategy,
        middleware: latestMiddleware
      };
      if (platformRef.current) {
        config.platform = platformRef.current;
      }
      computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
        const fullData = __spreadProps(__spreadValues({}, data2), {
          // The floating element's position may be recomputed while it's closed
          // but still mounted (such as when transitioning out). To ensure
          // `isPositioned` will be `false` initially on the next open, avoid
          // setting it to `true` when `open === false` (must be specified).
          isPositioned: openRef.current !== false
        });
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData;
          En(() => {
            setData(fullData);
          });
        }
      });
    }, [latestMiddleware, placement, strategy, platformRef, openRef]);
    index(() => {
      if (open === false && dataRef.current.isPositioned) {
        dataRef.current.isPositioned = false;
        setData((data2) => __spreadProps(__spreadValues({}, data2), {
          isPositioned: false
        }));
      }
    }, [open]);
    const isMountedRef = A2(false);
    index(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);
    index(() => {
      if (referenceEl) referenceRef.current = referenceEl;
      if (floatingEl) floatingRef.current = floatingEl;
      if (referenceEl && floatingEl) {
        if (whileElementsMountedRef.current) {
          return whileElementsMountedRef.current(referenceEl, floatingEl, update);
        }
        update();
      }
    }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
    const refs = T2(() => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating
    }), [setReference, setFloating]);
    const elements = T2(() => ({
      reference: referenceEl,
      floating: floatingEl
    }), [referenceEl, floatingEl]);
    const floatingStyles = T2(() => {
      const initialStyles = {
        position: strategy,
        left: 0,
        top: 0
      };
      if (!elements.floating) {
        return initialStyles;
      }
      const x6 = roundByDPR(elements.floating, data.x);
      const y8 = roundByDPR(elements.floating, data.y);
      if (transform) {
        return __spreadValues(__spreadProps(__spreadValues({}, initialStyles), {
          transform: "translate(" + x6 + "px, " + y8 + "px)"
        }), getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        });
      }
      return {
        position: strategy,
        left: x6,
        top: y8
      };
    }, [strategy, transform, elements.floating, data.x, data.y]);
    return T2(() => __spreadProps(__spreadValues({}, data), {
      update,
      refs,
      elements,
      floatingStyles
    }), [data, update, refs, elements, floatingStyles]);
  }
  var offset3 = (options, deps) => __spreadProps(__spreadValues({}, offset2(options)), {
    options: [options, deps]
  });
  var shift3 = (options, deps) => __spreadProps(__spreadValues({}, shift2(options)), {
    options: [options, deps]
  });
  var flip3 = (options, deps) => __spreadProps(__spreadValues({}, flip2(options)), {
    options: [options, deps]
  });
  var size3 = (options, deps) => __spreadProps(__spreadValues({}, size2(options)), {
    options: [options, deps]
  });

  // node_modules/@floating-ui/react/dist/floating-ui.react.mjs
  var SafeReact = __spreadValues({}, compat_module_exports);
  var useInsertionEffect = SafeReact.useInsertionEffect;
  var useSafeInsertionEffect = useInsertionEffect || ((fn2) => fn2());
  function useEffectEvent(callback) {
    const ref = A2(() => {
      if (true) {
        throw new Error("Cannot call an event handler while rendering.");
      }
    });
    useSafeInsertionEffect(() => {
      ref.current = callback;
    });
    return q2(function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return ref.current == null ? void 0 : ref.current(...args);
    }, []);
  }
  var ARROW_UP = "ArrowUp";
  var ARROW_DOWN = "ArrowDown";
  var ARROW_LEFT = "ArrowLeft";
  var ARROW_RIGHT = "ArrowRight";
  var index2 = typeof document !== "undefined" ? _2 : y2;
  var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
  var verticalKeys = [ARROW_UP, ARROW_DOWN];
  var allKeys = [...horizontalKeys, ...verticalKeys];
  var serverHandoffComplete = false;
  var count = 0;
  var genId = () => (
    // Ensure the id is unique with multiple independent versions of Floating UI
    // on <React 18
    "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
  );
  function useFloatingId() {
    const [id, setId] = d2(() => serverHandoffComplete ? genId() : void 0);
    index2(() => {
      if (id == null) {
        setId(genId());
      }
    }, []);
    y2(() => {
      serverHandoffComplete = true;
    }, []);
    return id;
  }
  var useReactId = SafeReact.useId;
  var useId = useReactId || useFloatingId;
  var devMessageSet;
  if (true) {
    devMessageSet = /* @__PURE__ */ new Set();
  }
  function warn() {
    var _devMessageSet;
    for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
      messages[_key] = arguments[_key];
    }
    const message = "Floating UI: " + messages.join(" ");
    if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
      var _devMessageSet2;
      (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
      console.warn(message);
    }
  }
  function error() {
    var _devMessageSet3;
    for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      messages[_key2] = arguments[_key2];
    }
    const message = "Floating UI: " + messages.join(" ");
    if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
      var _devMessageSet4;
      (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
      console.error(message);
    }
  }
  function createPubSub() {
    const map = /* @__PURE__ */ new Map();
    return {
      emit(event, data) {
        var _map$get;
        (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
      },
      on(event, listener) {
        map.set(event, [...map.get(event) || [], listener]);
      },
      off(event, listener) {
        var _map$get2;
        map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l8) => l8 !== listener)) || []);
      }
    };
  }
  var FloatingNodeContext = /* @__PURE__ */ Q(null);
  var FloatingTreeContext = /* @__PURE__ */ Q(null);
  var useFloatingParentNodeId = () => {
    var _React$useContext;
    return ((_React$useContext = x2(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
  };
  var useFloatingTree = () => x2(FloatingTreeContext);
  var FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
  function useFloatingRootContext(options) {
    const {
      open = false,
      onOpenChange: onOpenChangeProp,
      elements: elementsProp
    } = options;
    const floatingId = useId();
    const dataRef = A2({});
    const [events] = d2(() => createPubSub());
    const nested = useFloatingParentNodeId() != null;
    if (true) {
      const optionDomReference = elementsProp.reference;
      if (optionDomReference && !isElement(optionDomReference)) {
        error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
      }
    }
    const [positionReference, setPositionReference] = d2(elementsProp.reference);
    const onOpenChange = useEffectEvent((open2, event, reason) => {
      dataRef.current.openEvent = open2 ? event : void 0;
      events.emit("openchange", {
        open: open2,
        event,
        reason,
        nested
      });
      onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
    });
    const refs = T2(() => ({
      setPositionReference
    }), []);
    const elements = T2(() => ({
      reference: positionReference || elementsProp.reference || null,
      floating: elementsProp.floating || null,
      domReference: elementsProp.reference
    }), [positionReference, elementsProp.reference, elementsProp.floating]);
    return T2(() => ({
      dataRef,
      open,
      onOpenChange,
      elements,
      events,
      floatingId,
      refs
    }), [open, onOpenChange, elements, events, floatingId, refs]);
  }
  function useFloating2(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      nodeId
    } = options;
    const internalRootContext = useFloatingRootContext(__spreadProps(__spreadValues({}, options), {
      elements: __spreadValues({
        reference: null,
        floating: null
      }, options.elements)
    }));
    const rootContext = options.rootContext || internalRootContext;
    const computedElements = rootContext.elements;
    const [_domReference, setDomReference] = d2(null);
    const [positionReference, _setPositionReference] = d2(null);
    const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
    const domReference = optionDomReference || _domReference;
    const domReferenceRef = A2(null);
    const tree = useFloatingTree();
    index2(() => {
      if (domReference) {
        domReferenceRef.current = domReference;
      }
    }, [domReference]);
    const position = useFloating(__spreadProps(__spreadValues({}, options), {
      elements: __spreadValues(__spreadValues({}, computedElements), positionReference && {
        reference: positionReference
      })
    }));
    const setPositionReference = q2((node) => {
      const computedPositionReference = isElement(node) ? {
        getBoundingClientRect: () => node.getBoundingClientRect(),
        contextElement: node
      } : node;
      _setPositionReference(computedPositionReference);
      position.refs.setReference(computedPositionReference);
    }, [position.refs]);
    const setReference = q2((node) => {
      if (isElement(node) || node === null) {
        domReferenceRef.current = node;
        setDomReference(node);
      }
      if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
      // `null` to support `positionReference` + an unstable `reference`
      // callback ref.
      node !== null && !isElement(node)) {
        position.refs.setReference(node);
      }
    }, [position.refs]);
    const refs = T2(() => __spreadProps(__spreadValues({}, position.refs), {
      setReference,
      setPositionReference,
      domReference: domReferenceRef
    }), [position.refs, setReference, setPositionReference]);
    const elements = T2(() => __spreadProps(__spreadValues({}, position.elements), {
      domReference
    }), [position.elements, domReference]);
    const context = T2(() => __spreadProps(__spreadValues(__spreadValues({}, position), rootContext), {
      refs,
      elements,
      nodeId
    }), [position, refs, elements, nodeId, rootContext]);
    index2(() => {
      rootContext.dataRef.current.floatingContext = context;
      const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
      if (node) {
        node.context = context;
      }
    });
    return T2(() => __spreadProps(__spreadValues({}, position), {
      context,
      refs,
      elements
    }), [position, refs, elements, context]);
  }
  var ACTIVE_KEY = "active";
  var SELECTED_KEY = "selected";
  function mergeProps(userProps, propsList, elementKey) {
    const map = /* @__PURE__ */ new Map();
    const isItem = elementKey === "item";
    let domUserProps = userProps;
    if (isItem && userProps) {
      const _a = userProps, {
        [ACTIVE_KEY]: _7,
        [SELECTED_KEY]: __
      } = _a, validProps = __objRest(_a, [
        __restKey(ACTIVE_KEY),
        __restKey(SELECTED_KEY)
      ]);
      domUserProps = validProps;
    }
    return __spreadValues(__spreadValues(__spreadValues({}, elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ""
    }), domUserProps), propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn2) => fn2(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {}));
  }
  function useInteractions(propsList) {
    if (propsList === void 0) {
      propsList = [];
    }
    const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
    const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
    const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
    const getReferenceProps = q2(
      (userProps) => mergeProps(userProps, propsList, "reference"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      referenceDeps
    );
    const getFloatingProps = q2(
      (userProps) => mergeProps(userProps, propsList, "floating"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      floatingDeps
    );
    const getItemProps = q2(
      (userProps) => mergeProps(userProps, propsList, "item"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      itemDeps
    );
    return T2(() => ({
      getReferenceProps,
      getFloatingProps,
      getItemProps
    }), [getReferenceProps, getFloatingProps, getItemProps]);
  }
  function getArgsWithCustomFloatingHeight(state, height) {
    return __spreadProps(__spreadValues({}, state), {
      rects: __spreadProps(__spreadValues({}, state.rects), {
        floating: __spreadProps(__spreadValues({}, state.rects.floating), {
          height
        })
      })
    });
  }
  var inner = (props) => ({
    name: "inner",
    options: props,
    async fn(state) {
      const _a = evaluate(props, state), {
        listRef,
        overflowRef,
        onFallbackChange,
        offset: innerOffset = 0,
        index: index3 = 0,
        minItemsVisible = 4,
        referenceOverflowThreshold = 0,
        scrollRef
      } = _a, detectOverflowOptions = __objRest(_a, [
        "listRef",
        "overflowRef",
        "onFallbackChange",
        "offset",
        "index",
        "minItemsVisible",
        "referenceOverflowThreshold",
        "scrollRef"
      ]);
      const {
        rects,
        elements: {
          floating
        }
      } = state;
      const item = listRef.current[index3];
      const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;
      const clientTop = floating.clientTop || scrollEl.clientTop;
      const floatingIsBordered = floating.clientTop !== 0;
      const scrollElIsBordered = scrollEl.clientTop !== 0;
      const floatingIsScrollEl = floating === scrollEl;
      if (true) {
        if (!state.placement.startsWith("bottom")) {
          warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
        }
      }
      if (!item) {
        return {};
      }
      const nextArgs = __spreadValues(__spreadValues({}, state), await offset3(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state));
      const overflow = await detectOverflow2(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
      const refOverflow = await detectOverflow2(nextArgs, __spreadProps(__spreadValues({}, detectOverflowOptions), {
        elementContext: "reference"
      }));
      const diffY = max(0, overflow.top);
      const nextY = nextArgs.y + diffY;
      const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
      const rounder = isScrollable ? (v6) => v6 : round;
      const maxHeight = rounder(max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max(0, overflow.bottom)));
      scrollEl.style.maxHeight = maxHeight + "px";
      scrollEl.scrollTop = diffY;
      if (onFallbackChange) {
        const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
        En(() => onFallbackChange(shouldFallback));
      }
      if (overflowRef) {
        overflowRef.current = await detectOverflow2(getArgsWithCustomFloatingHeight(__spreadProps(__spreadValues({}, nextArgs), {
          y: nextY
        }), scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
      }
      return {
        y: nextY
      };
    }
  });
  function useInnerOffset(context, props) {
    const {
      open,
      elements
    } = context;
    const {
      enabled = true,
      overflowRef,
      scrollRef,
      onChange: unstable_onChange
    } = props;
    const onChange = useEffectEvent(unstable_onChange);
    const controlledScrollingRef = A2(false);
    const prevScrollTopRef = A2(null);
    const initialOverflowRef = A2(null);
    y2(() => {
      if (!enabled) return;
      function onWheel(e8) {
        if (e8.ctrlKey || !el || overflowRef.current == null) {
          return;
        }
        const dY = e8.deltaY;
        const isAtTop = overflowRef.current.top >= -0.5;
        const isAtBottom = overflowRef.current.bottom >= -0.5;
        const remainingScroll = el.scrollHeight - el.clientHeight;
        const sign = dY < 0 ? -1 : 1;
        const method = dY < 0 ? "max" : "min";
        if (el.scrollHeight <= el.clientHeight) {
          return;
        }
        if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
          e8.preventDefault();
          En(() => {
            onChange((d6) => d6 + Math[method](dY, remainingScroll * sign));
          });
        } else if (/firefox/i.test(getUserAgent())) {
          el.scrollTop += dY;
        }
      }
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (open && el) {
        el.addEventListener("wheel", onWheel);
        requestAnimationFrame(() => {
          prevScrollTopRef.current = el.scrollTop;
          if (overflowRef.current != null) {
            initialOverflowRef.current = __spreadValues({}, overflowRef.current);
          }
        });
        return () => {
          prevScrollTopRef.current = null;
          initialOverflowRef.current = null;
          el.removeEventListener("wheel", onWheel);
        };
      }
    }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
    const floating = T2(() => ({
      onKeyDown() {
        controlledScrollingRef.current = true;
      },
      onWheel() {
        controlledScrollingRef.current = false;
      },
      onPointerMove() {
        controlledScrollingRef.current = false;
      },
      onScroll() {
        const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
        if (!overflowRef.current || !el || !controlledScrollingRef.current) {
          return;
        }
        if (prevScrollTopRef.current !== null) {
          const scrollDiff = el.scrollTop - prevScrollTopRef.current;
          if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
            En(() => onChange((d6) => d6 + scrollDiff));
          }
        }
        requestAnimationFrame(() => {
          prevScrollTopRef.current = el.scrollTop;
        });
      }
    }), [elements.floating, onChange, overflowRef, scrollRef]);
    return T2(() => enabled ? {
      floating
    } : {}, [enabled, floating]);
  }

  // node_modules/@headlessui/react/dist/internal/floating.js
  init_compat_module();
  init_compat_module();
  var y6 = Q({ styles: void 0, setReference: () => {
  }, setFloating: () => {
  }, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
  y6.displayName = "FloatingContext";
  var $4 = Q(null);
  $4.displayName = "PlacementContext";
  function ye(e8) {
    return T2(() => e8 ? typeof e8 == "string" ? { to: e8 } : e8 : null, [e8]);
  }
  function Fe() {
    return x2(y6).setReference;
  }
  function Te() {
    let { getFloatingProps: e8, slot: t9 } = x2(y6);
    return q2((...n9) => Object.assign({}, e8(...n9), { "data-anchor": t9.anchor }), [e8, t9]);
  }
  function Re(e8 = null) {
    e8 === false && (e8 = null), typeof e8 == "string" && (e8 = { to: e8 });
    let t9 = x2($4), n9 = T2(() => e8, [JSON.stringify(e8, (l8, o11) => {
      var u17;
      return (u17 = o11 == null ? void 0 : o11.outerHTML) != null ? u17 : o11;
    })]);
    n2(() => {
      t9 == null || t9(n9 != null ? n9 : null);
    }, [t9, n9]);
    let r11 = x2(y6);
    return T2(() => [r11.setFloating, e8 ? r11.styles : {}], [r11.setFloating, e8, r11.styles]);
  }
  var D6 = 4;
  function Ae({ children: e8, enabled: t9 = true }) {
    let [n9, r11] = d2(null), [l8, o11] = d2(0), u17 = A2(null), [f14, s12] = d2(null);
    ce(f14);
    let i9 = t9 && n9 !== null && f14 !== null, { to: F6 = "bottom", gap: E7 = 0, offset: A7 = 0, padding: c13 = 0, inner: h8 } = ge(n9, f14), [a15, p10 = "center"] = F6.split(" ");
    n2(() => {
      i9 && o11(0);
    }, [i9]);
    let { refs: b7, floatingStyles: S8, context: g6 } = useFloating2({ open: i9, placement: a15 === "selection" ? p10 === "center" ? "bottom" : "bottom-".concat(p10) : p10 === "center" ? "".concat(a15) : "".concat(a15, "-").concat(p10), strategy: "absolute", transform: false, middleware: [offset3({ mainAxis: a15 === "selection" ? 0 : E7, crossAxis: A7 }), shift3({ padding: c13 }), a15 !== "selection" && flip3({ padding: c13 }), a15 === "selection" && h8 ? inner(__spreadProps(__spreadValues({}, h8), { padding: c13, overflowRef: u17, offset: l8, minItemsVisible: D6, referenceOverflowThreshold: c13, onFallbackChange(P7) {
      var L6, N5;
      if (!P7) return;
      let d6 = g6.elements.floating;
      if (!d6) return;
      let M6 = parseFloat(getComputedStyle(d6).scrollPaddingBottom) || 0, I9 = Math.min(D6, d6.childElementCount), W3 = 0, B4 = 0;
      for (let m8 of (N5 = (L6 = g6.elements.floating) == null ? void 0 : L6.childNodes) != null ? N5 : []) if (n4(m8)) {
        let x6 = m8.offsetTop, k7 = x6 + m8.clientHeight + M6, H6 = d6.scrollTop, U4 = H6 + d6.clientHeight;
        if (x6 >= H6 && k7 <= U4) I9--;
        else {
          B4 = Math.max(0, Math.min(k7, U4) - Math.max(x6, H6)), W3 = m8.clientHeight;
          break;
        }
      }
      I9 >= 1 && o11((m8) => {
        let x6 = W3 * I9 - B4 + M6;
        return m8 >= x6 ? m8 : x6;
      });
    } })) : null, size3({ padding: c13, apply({ availableWidth: P7, availableHeight: d6, elements: M6 }) {
      Object.assign(M6.floating.style, { overflow: "auto", maxWidth: "".concat(P7, "px"), maxHeight: "min(var(--anchor-max-height, 100vh), ".concat(d6, "px)") });
    } })].filter(Boolean), whileElementsMounted: autoUpdate }), [w8 = a15, V5 = p10] = g6.placement.split("-");
    a15 === "selection" && (w8 = "selection");
    let G5 = T2(() => ({ anchor: [w8, V5].filter(Boolean).join(" ") }), [w8, V5]), K4 = useInnerOffset(g6, { overflowRef: u17, onChange: o11 }), { getReferenceProps: Q3, getFloatingProps: X3 } = useInteractions([K4]), Y3 = o5((P7) => {
      s12(P7), b7.setFloating(P7);
    });
    return _($4.Provider, { value: r11 }, _(y6.Provider, { value: { setFloating: Y3, setReference: b7.setReference, styles: S8, getReferenceProps: Q3, getFloatingProps: X3, slot: G5 } }, e8));
  }
  function ce(e8) {
    n2(() => {
      if (!e8) return;
      let t9 = new MutationObserver(() => {
        let n9 = window.getComputedStyle(e8).maxHeight, r11 = parseFloat(n9);
        if (isNaN(r11)) return;
        let l8 = parseInt(n9);
        isNaN(l8) || r11 !== l8 && (e8.style.maxHeight = "".concat(Math.ceil(r11), "px"));
      });
      return t9.observe(e8, { attributes: true, attributeFilter: ["style"] }), () => {
        t9.disconnect();
      };
    }, [e8]);
  }
  function ge(e8, t9) {
    var o11, u17, f14;
    let n9 = O4((o11 = e8 == null ? void 0 : e8.gap) != null ? o11 : "var(--anchor-gap, 0)", t9), r11 = O4((u17 = e8 == null ? void 0 : e8.offset) != null ? u17 : "var(--anchor-offset, 0)", t9), l8 = O4((f14 = e8 == null ? void 0 : e8.padding) != null ? f14 : "var(--anchor-padding, 0)", t9);
    return __spreadProps(__spreadValues({}, e8), { gap: n9, offset: r11, padding: l8 });
  }
  function O4(e8, t9, n9 = void 0) {
    let r11 = p3(), l8 = o5((s12, i9) => {
      if (s12 == null) return [n9, null];
      if (typeof s12 == "number") return [s12, null];
      if (typeof s12 == "string") {
        if (!i9) return [n9, null];
        let F6 = J3(s12, i9);
        return [F6, (E7) => {
          let A7 = q4(s12);
          {
            let c13 = A7.map((h8) => window.getComputedStyle(i9).getPropertyValue(h8));
            r11.requestAnimationFrame(function h8() {
              r11.nextFrame(h8);
              let a15 = false;
              for (let [b7, S8] of A7.entries()) {
                let g6 = window.getComputedStyle(i9).getPropertyValue(S8);
                if (c13[b7] !== g6) {
                  c13[b7] = g6, a15 = true;
                  break;
                }
              }
              if (!a15) return;
              let p10 = J3(s12, i9);
              F6 !== p10 && (E7(p10), F6 = p10);
            });
          }
          return r11.dispose;
        }];
      }
      return [n9, null];
    }), o11 = T2(() => l8(e8, t9)[0], [e8, t9]), [u17 = o11, f14] = d2();
    return n2(() => {
      let [s12, i9] = l8(e8, t9);
      if (f14(s12), !!i9) return i9(f14);
    }, [e8, t9]), u17;
  }
  function q4(e8) {
    let t9 = /var\((.*)\)/.exec(e8);
    if (t9) {
      let n9 = t9[1].indexOf(",");
      if (n9 === -1) return [t9[1]];
      let r11 = t9[1].slice(0, n9).trim(), l8 = t9[1].slice(n9 + 1).trim();
      return l8 ? [r11, ...q4(l8)] : [r11];
    }
    return [];
  }
  function J3(e8, t9) {
    let n9 = document.createElement("div");
    t9.appendChild(n9), n9.style.setProperty("margin-top", "0px", "important"), n9.style.setProperty("margin-top", e8, "important");
    let r11 = parseFloat(window.getComputedStyle(n9).marginTop) || 0;
    return t9.removeChild(n9), r11;
  }

  // node_modules/@headlessui/react/dist/internal/frozen.js
  init_compat_module();
  function f10({ children: t9, freeze: e8 }, o11) {
    let n9 = u12(e8, t9);
    return mn(n9) ? _n(n9, { ref: o11 }) : xn.createElement(xn.Fragment, null, n9);
  }
  var s11 = xn.forwardRef(f10);
  function u12(t9, e8) {
    let [o11, n9] = d2(e8);
    return !t9 && o11 !== e8 && n9(e8), t9 ? o11 : e8;
  }

  // node_modules/@headlessui/react/dist/internal/open-closed.js
  init_compat_module();
  var n7 = Q(null);
  n7.displayName = "OpenClosedContext";
  var i8 = ((e8) => (e8[e8.Open = 1] = "Open", e8[e8.Closed = 2] = "Closed", e8[e8.Closing = 4] = "Closing", e8[e8.Opening = 8] = "Opening", e8))(i8 || {});
  function u13() {
    return x2(n7);
  }
  function c8({ value: o11, children: t9 }) {
    return xn.createElement(n7.Provider, { value: o11 }, t9);
  }

  // node_modules/@headlessui/react/dist/utils/document-ready.js
  function t8(n9) {
    function e8() {
      document.readyState !== "loading" && (n9(), document.removeEventListener("DOMContentLoaded", e8));
    }
    typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e8), e8());
  }

  // node_modules/@headlessui/react/dist/utils/active-element-history.js
  var n8 = [];
  t8(() => {
    function e8(t9) {
      if (!i4(t9.target) || t9.target === document.body || n8[0] === t9.target) return;
      let r11 = t9.target;
      r11 = r11.closest(E5), n8.unshift(r11 != null ? r11 : t9.target), n8 = n8.filter((o11) => o11 != null && o11.isConnected), n8.splice(10);
    }
    window.addEventListener("click", e8, { capture: true }), window.addEventListener("mousedown", e8, { capture: true }), window.addEventListener("focus", e8, { capture: true }), document.body.addEventListener("click", e8, { capture: true }), document.body.addEventListener("mousedown", e8, { capture: true }), document.body.addEventListener("focus", e8, { capture: true });
  });

  // node_modules/@headlessui/react/dist/utils/calculate-active-index.js
  function u14(l8) {
    throw new Error("Unexpected object: " + l8);
  }
  var c9 = ((i9) => (i9[i9.First = 0] = "First", i9[i9.Previous = 1] = "Previous", i9[i9.Next = 2] = "Next", i9[i9.Last = 3] = "Last", i9[i9.Specific = 4] = "Specific", i9[i9.Nothing = 5] = "Nothing", i9))(c9 || {});
  function f11(l8, n9) {
    let t9 = n9.resolveItems();
    if (t9.length <= 0) return null;
    let r11 = n9.resolveActiveIndex(), s12 = r11 != null ? r11 : -1;
    switch (l8.focus) {
      case 0: {
        for (let e8 = 0; e8 < t9.length; ++e8) if (!n9.resolveDisabled(t9[e8], e8, t9)) return e8;
        return r11;
      }
      case 1: {
        s12 === -1 && (s12 = t9.length);
        for (let e8 = s12 - 1; e8 >= 0; --e8) if (!n9.resolveDisabled(t9[e8], e8, t9)) return e8;
        return r11;
      }
      case 2: {
        for (let e8 = s12 + 1; e8 < t9.length; ++e8) if (!n9.resolveDisabled(t9[e8], e8, t9)) return e8;
        return r11;
      }
      case 3: {
        for (let e8 = t9.length - 1; e8 >= 0; --e8) if (!n9.resolveDisabled(t9[e8], e8, t9)) return e8;
        return r11;
      }
      case 4: {
        for (let e8 = 0; e8 < t9.length; ++e8) if (n9.resolveId(t9[e8], e8, t9) === l8.id) return e8;
        return r11;
      }
      case 5:
        return null;
      default:
        u14(l8);
    }
  }

  // node_modules/@headlessui/react/dist/components/portal/portal.js
  init_compat_module();
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
  init_compat_module();
  function c10(t9) {
    let r11 = o5(t9), e8 = A2(false);
    y2(() => (e8.current = false, () => {
      e8.current = true, t3(() => {
        e8.current && r11();
      });
    }), [r11]);
  }

  // node_modules/@headlessui/react/dist/internal/portal-force-root.js
  init_compat_module();
  var e7 = Q(false);
  function a13() {
    return x2(e7);
  }

  // node_modules/@headlessui/react/dist/components/portal/portal.js
  function W2(e8) {
    let o11 = a13(), l8 = x2(c11), [r11, p10] = d2(() => {
      var s12;
      if (!o11 && l8 !== null) return (s12 = l8.current) != null ? s12 : null;
      if (s3.isServer) return null;
      let t9 = e8 == null ? void 0 : e8.getElementById("headlessui-portal-root");
      if (t9) return t9;
      if (e8 === null) return null;
      let n9 = e8.createElement("div");
      return n9.setAttribute("id", "headlessui-portal-root"), e8.body.appendChild(n9);
    });
    return y2(() => {
      r11 !== null && (e8 != null && e8.body.contains(r11) || e8 == null || e8.body.appendChild(r11));
    }, [r11, e8]), y2(() => {
      o11 || l8 !== null && p10(l8.current);
    }, [l8, p10, o11]), r11;
  }
  var _5 = k;
  var j8 = Y2(function(o11, l8) {
    let _a = o11, { ownerDocument: r11 = null } = _a, p10 = __objRest(_a, ["ownerDocument"]), t9 = A2(null), n9 = y3(T4((a15) => {
      t9.current = a15;
    }), l8), s12 = u10(t9.current), C10 = r11 != null ? r11 : s12, u17 = W2(C10), y8 = x2(m7), g6 = p3(), v6 = K3();
    return c10(() => {
      var a15;
      u17 && u17.childNodes.length <= 0 && ((a15 = u17.parentElement) == null || a15.removeChild(u17));
    }), u17 ? $2(xn.createElement("div", { "data-headlessui-portal": "", ref: (a15) => {
      g6.dispose(), y8 && a15 && g6.add(y8.register(a15));
    } }, v6({ ourProps: { ref: n9 }, theirProps: p10, slot: {}, defaultTag: _5, name: "Portal" })), u17) : null;
  });
  function S7(e8, o11) {
    let l8 = y3(o11), _a = e8, { enabled: r11 = true, ownerDocument: p10 } = _a, t9 = __objRest(_a, ["enabled", "ownerDocument"]), n9 = K3();
    return r11 ? xn.createElement(j8, __spreadProps(__spreadValues({}, t9), { ownerDocument: p10, ref: l8 })) : n9({ ourProps: { ref: l8 }, theirProps: t9, slot: {}, defaultTag: _5, name: "Portal" });
  }
  var I7 = k;
  var c11 = Q(null);
  function D7(e8, o11) {
    let _a = e8, { target: l8 } = _a, r11 = __objRest(_a, ["target"]), t9 = { ref: y3(o11) }, n9 = K3();
    return xn.createElement(c11.Provider, { value: l8 }, n9({ ourProps: t9, theirProps: r11, defaultTag: I7, name: "Popover.Group" }));
  }
  var m7 = Q(null);
  var J4 = Y2(S7);
  var X2 = Y2(D7);
  var te = Object.assign(J4, { Group: X2 });

  // node_modules/@headlessui/react/dist/utils/element-movement.js
  var c12 = { Idle: { kind: "Idle" }, Tracked: (e8) => ({ kind: "Tracked", position: e8 }), Moved: { kind: "Moved" } };
  function a14(e8) {
    let t9 = e8.getBoundingClientRect();
    return "".concat(t9.x, ",").concat(t9.y);
  }
  function p8(e8, t9, i9) {
    let n9 = o4();
    if (t9.kind === "Tracked") {
      let o11 = function() {
        d6 !== a14(e8) && (n9.dispose(), i9());
      };
      var f14 = o11;
      let { position: d6 } = t9, s12 = new ResizeObserver(o11);
      s12.observe(e8), n9.add(() => s12.disconnect()), n9.addEventListener(window, "scroll", o11, { passive: true }), n9.addEventListener(window, "resize", o11);
    }
    return () => n9.dispose();
  }

  // node_modules/@headlessui/react/dist/components/combobox/combobox-machine.js
  var I8 = Object.defineProperty;
  var h7 = (t9, i9, e8) => i9 in t9 ? I8(t9, i9, { enumerable: true, configurable: true, writable: true, value: e8 }) : t9[i9] = e8;
  var f12 = (t9, i9, e8) => (h7(t9, typeof i9 != "symbol" ? i9 + "" : i9, e8), e8);
  var P6 = ((e8) => (e8[e8.Open = 0] = "Open", e8[e8.Closed = 1] = "Closed", e8))(P6 || {});
  var k6 = ((e8) => (e8[e8.Single = 0] = "Single", e8[e8.Multi = 1] = "Multi", e8))(k6 || {});
  var _6 = ((n9) => (n9[n9.Pointer = 0] = "Pointer", n9[n9.Focus = 1] = "Focus", n9[n9.Other = 2] = "Other", n9))(_6 || {});
  var D8 = ((l8) => (l8[l8.OpenCombobox = 0] = "OpenCombobox", l8[l8.CloseCombobox = 1] = "CloseCombobox", l8[l8.GoToOption = 2] = "GoToOption", l8[l8.SetTyping = 3] = "SetTyping", l8[l8.RegisterOption = 4] = "RegisterOption", l8[l8.UnregisterOption = 5] = "UnregisterOption", l8[l8.DefaultToFirstOption = 6] = "DefaultToFirstOption", l8[l8.SetActivationTrigger = 7] = "SetActivationTrigger", l8[l8.UpdateVirtualConfiguration = 8] = "UpdateVirtualConfiguration", l8[l8.SetInputElement = 9] = "SetInputElement", l8[l8.SetButtonElement = 10] = "SetButtonElement", l8[l8.SetOptionsElement = 11] = "SetOptionsElement", l8[l8.MarkInputAsMoved = 12] = "MarkInputAsMoved", l8))(D8 || {});
  function v5(t9, i9 = (e8) => e8) {
    let e8 = t9.activeOptionIndex !== null ? t9.options[t9.activeOptionIndex] : null, n9 = i9(t9.options.slice()), o11 = n9.length > 0 && n9[0].dataRef.current.order !== null ? n9.sort((u17, a15) => u17.dataRef.current.order - a15.dataRef.current.order) : G4(n9, (u17) => u17.dataRef.current.domRef.current), r11 = e8 ? o11.indexOf(e8) : null;
    return r11 === -1 && (r11 = null), { options: o11, activeOptionIndex: r11 };
  }
  var j9 = { [1](t9) {
    var e8;
    if ((e8 = t9.dataRef.current) != null && e8.disabled || t9.comboboxState === 1) return t9;
    let i9 = t9.inputElement ? c12.Tracked(a14(t9.inputElement)) : t9.inputPositionState;
    return __spreadProps(__spreadValues({}, t9), { activeOptionIndex: null, comboboxState: 1, isTyping: false, activationTrigger: 2, inputPositionState: i9, __demoMode: false });
  }, [0](t9) {
    var i9, e8;
    if ((i9 = t9.dataRef.current) != null && i9.disabled || t9.comboboxState === 0) return t9;
    if ((e8 = t9.dataRef.current) != null && e8.value) {
      let n9 = t9.dataRef.current.calculateIndex(t9.dataRef.current.value);
      if (n9 !== -1) return __spreadProps(__spreadValues({}, t9), { activeOptionIndex: n9, comboboxState: 0, __demoMode: false, inputPositionState: c12.Idle });
    }
    return __spreadProps(__spreadValues({}, t9), { comboboxState: 0, inputPositionState: c12.Idle, __demoMode: false });
  }, [3](t9, i9) {
    return t9.isTyping === i9.isTyping ? t9 : __spreadProps(__spreadValues({}, t9), { isTyping: i9.isTyping });
  }, [2](t9, i9) {
    var r11, u17, a15, s12;
    if ((r11 = t9.dataRef.current) != null && r11.disabled || t9.optionsElement && !((u17 = t9.dataRef.current) != null && u17.optionsPropsRef.current.static) && t9.comboboxState === 1) return t9;
    if (t9.virtual) {
      let { options: p10, disabled: c13 } = t9.virtual, m8 = i9.focus === c9.Specific ? i9.idx : f11(i9, { resolveItems: () => p10, resolveActiveIndex: () => {
        var l8, x6;
        return (x6 = (l8 = t9.activeOptionIndex) != null ? l8 : p10.findIndex((S8) => !c13(S8))) != null ? x6 : null;
      }, resolveDisabled: c13, resolveId() {
        throw new Error("Function not implemented.");
      } }), b7 = (a15 = i9.trigger) != null ? a15 : 2;
      return t9.activeOptionIndex === m8 && t9.activationTrigger === b7 ? t9 : __spreadProps(__spreadValues({}, t9), { activeOptionIndex: m8, activationTrigger: b7, isTyping: false, __demoMode: false });
    }
    let e8 = v5(t9);
    if (e8.activeOptionIndex === null) {
      let p10 = e8.options.findIndex((c13) => !c13.dataRef.current.disabled);
      p10 !== -1 && (e8.activeOptionIndex = p10);
    }
    let n9 = i9.focus === c9.Specific ? i9.idx : f11(i9, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (p10) => p10.id, resolveDisabled: (p10) => p10.dataRef.current.disabled }), o11 = (s12 = i9.trigger) != null ? s12 : 2;
    return t9.activeOptionIndex === n9 && t9.activationTrigger === o11 ? t9 : __spreadProps(__spreadValues(__spreadValues({}, t9), e8), { isTyping: false, activeOptionIndex: n9, activationTrigger: o11, __demoMode: false });
  }, [4]: (t9, i9) => {
    var r11, u17, a15, s12;
    if ((r11 = t9.dataRef.current) != null && r11.virtual) return __spreadProps(__spreadValues({}, t9), { options: [...t9.options, i9.payload] });
    let e8 = i9.payload, n9 = v5(t9, (p10) => (p10.push(e8), p10));
    t9.activeOptionIndex === null && (a15 = (u17 = t9.dataRef.current).isSelected) != null && a15.call(u17, i9.payload.dataRef.current.value) && (n9.activeOptionIndex = n9.options.indexOf(e8));
    let o11 = __spreadProps(__spreadValues(__spreadValues({}, t9), n9), { activationTrigger: 2 });
    return (s12 = t9.dataRef.current) != null && s12.__demoMode && t9.dataRef.current.value === void 0 && (o11.activeOptionIndex = 0), o11;
  }, [5]: (t9, i9) => {
    var n9;
    if ((n9 = t9.dataRef.current) != null && n9.virtual) return __spreadProps(__spreadValues({}, t9), { options: t9.options.filter((o11) => o11.id !== i9.id) });
    let e8 = v5(t9, (o11) => {
      let r11 = o11.findIndex((u17) => u17.id === i9.id);
      return r11 !== -1 && o11.splice(r11, 1), o11;
    });
    return __spreadProps(__spreadValues(__spreadValues({}, t9), e8), { activationTrigger: 2 });
  }, [6]: (t9, i9) => t9.defaultToFirstOption === i9.value ? t9 : __spreadProps(__spreadValues({}, t9), { defaultToFirstOption: i9.value }), [7]: (t9, i9) => t9.activationTrigger === i9.trigger ? t9 : __spreadProps(__spreadValues({}, t9), { activationTrigger: i9.trigger }), [8]: (t9, i9) => {
    var n9, o11;
    if (t9.virtual === null) return __spreadProps(__spreadValues({}, t9), { virtual: { options: i9.options, disabled: (n9 = i9.disabled) != null ? n9 : () => false } });
    if (t9.virtual.options === i9.options && t9.virtual.disabled === i9.disabled) return t9;
    let e8 = t9.activeOptionIndex;
    if (t9.activeOptionIndex !== null) {
      let r11 = i9.options.indexOf(t9.virtual.options[t9.activeOptionIndex]);
      r11 !== -1 ? e8 = r11 : e8 = null;
    }
    return __spreadProps(__spreadValues({}, t9), { activeOptionIndex: e8, virtual: { options: i9.options, disabled: (o11 = i9.disabled) != null ? o11 : () => false } });
  }, [9]: (t9, i9) => t9.inputElement === i9.element ? t9 : __spreadProps(__spreadValues({}, t9), { inputElement: i9.element }), [10]: (t9, i9) => t9.buttonElement === i9.element ? t9 : __spreadProps(__spreadValues({}, t9), { buttonElement: i9.element }), [11]: (t9, i9) => t9.optionsElement === i9.element ? t9 : __spreadProps(__spreadValues({}, t9), { optionsElement: i9.element }), [12](t9) {
    return t9.inputPositionState.kind !== "Tracked" ? t9 : __spreadProps(__spreadValues({}, t9), { inputPositionState: c12.Moved });
  } };
  var y7 = class _y extends T5 {
    constructor(e8) {
      super(e8);
      f12(this, "actions", { onChange: (e9) => {
        let { onChange: n9, compare: o11, mode: r11, value: u17 } = this.state.dataRef.current;
        return u3(r11, { [0]: () => n9 == null ? void 0 : n9(e9), [1]: () => {
          let a15 = u17.slice(), s12 = a15.findIndex((p10) => o11(p10, e9));
          return s12 === -1 ? a15.push(e9) : a15.splice(s12, 1), n9 == null ? void 0 : n9(a15);
        } });
      }, registerOption: (e9, n9) => (this.send({ type: 4, payload: { id: e9, dataRef: n9 } }), () => {
        this.state.activeOptionIndex === this.state.dataRef.current.calculateIndex(n9.current.value) && this.send({ type: 6, value: true }), this.send({ type: 5, id: e9 });
      }), goToOption: (e9, n9) => (this.send({ type: 6, value: false }), this.send(__spreadProps(__spreadValues({ type: 2 }, e9), { trigger: n9 }))), setIsTyping: (e9) => {
        this.send({ type: 3, isTyping: e9 });
      }, closeCombobox: () => {
        var e9, n9;
        this.send({ type: 1 }), this.send({ type: 6, value: false }), (n9 = (e9 = this.state.dataRef.current).onClose) == null || n9.call(e9);
      }, openCombobox: () => {
        this.send({ type: 0 }), this.send({ type: 6, value: true });
      }, setActivationTrigger: (e9) => {
        this.send({ type: 7, trigger: e9 });
      }, selectActiveOption: () => {
        let e9 = this.selectors.activeOptionIndex(this.state);
        if (e9 !== null) {
          if (this.actions.setIsTyping(false), this.state.virtual) this.actions.onChange(this.state.virtual.options[e9]);
          else {
            let { dataRef: n9 } = this.state.options[e9];
            this.actions.onChange(n9.current.value);
          }
          this.actions.goToOption({ focus: c9.Specific, idx: e9 });
        }
      }, setInputElement: (e9) => {
        this.send({ type: 9, element: e9 });
      }, setButtonElement: (e9) => {
        this.send({ type: 10, element: e9 });
      }, setOptionsElement: (e9) => {
        this.send({ type: 11, element: e9 });
      } });
      f12(this, "selectors", { activeDescendantId: (e9) => {
        var o11, r11;
        let n9 = this.selectors.activeOptionIndex(e9);
        if (n9 !== null) return e9.virtual ? (r11 = e9.options.find((u17) => !u17.dataRef.current.disabled && e9.dataRef.current.compare(u17.dataRef.current.value, e9.virtual.options[n9]))) == null ? void 0 : r11.id : (o11 = e9.options[n9]) == null ? void 0 : o11.id;
      }, activeOptionIndex: (e9) => {
        if (e9.defaultToFirstOption && e9.activeOptionIndex === null && (e9.virtual ? e9.virtual.options.length > 0 : e9.options.length > 0)) {
          if (e9.virtual) {
            let { options: o11, disabled: r11 } = e9.virtual, u17 = o11.findIndex((a15) => {
              var s12;
              return !((s12 = r11 == null ? void 0 : r11(a15)) != null && s12);
            });
            if (u17 !== -1) return u17;
          }
          let n9 = e9.options.findIndex((o11) => !o11.dataRef.current.disabled);
          if (n9 !== -1) return n9;
        }
        return e9.activeOptionIndex;
      }, activeOption: (e9) => {
        var o11, r11;
        let n9 = this.selectors.activeOptionIndex(e9);
        return n9 === null ? null : e9.virtual ? e9.virtual.options[n9 != null ? n9 : 0] : (r11 = (o11 = e9.options[n9]) == null ? void 0 : o11.dataRef.current.value) != null ? r11 : null;
      }, isActive: (e9, n9, o11) => {
        var u17;
        let r11 = this.selectors.activeOptionIndex(e9);
        return r11 === null ? false : e9.virtual ? r11 === e9.dataRef.current.calculateIndex(n9) : ((u17 = e9.options[r11]) == null ? void 0 : u17.id) === o11;
      }, shouldScrollIntoView: (e9, n9, o11) => !(e9.virtual || e9.__demoMode || e9.comboboxState !== 0 || e9.activationTrigger === 0 || !this.selectors.isActive(e9, n9, o11)), didInputMove(e9) {
        return e9.inputPositionState.kind === "Moved";
      } });
      {
        let n9 = this.state.id, o11 = x4.get(null);
        this.disposables.add(o11.on(k4.Push, (r11) => {
          !o11.selectors.isTop(r11, n9) && this.state.comboboxState === 0 && this.actions.closeCombobox();
        })), this.on(0, () => o11.actions.push(n9)), this.on(1, () => o11.actions.pop(n9));
      }
      this.disposables.group((n9) => {
        this.on(1, (o11) => {
          o11.inputElement && (n9.dispose(), n9.add(p8(o11.inputElement, o11.inputPositionState, () => {
            this.send({ type: 12 });
          })));
        });
      });
    }
    static new({ id: e8, virtual: n9 = null, __demoMode: o11 = false }) {
      var r11;
      return new _y({ id: e8, dataRef: { current: {} }, comboboxState: o11 ? 0 : 1, isTyping: false, options: [], virtual: n9 ? { options: n9.options, disabled: (r11 = n9.disabled) != null ? r11 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: o11, inputPositionState: c12.Idle });
    }
    reduce(e8, n9) {
      return u3(n9.type, j9, e8, n9);
    }
  };

  // node_modules/@headlessui/react/dist/components/combobox/combobox-machine-glue.js
  init_compat_module();
  var u15 = Q(null);
  function p9(n9) {
    let o11 = x2(u15);
    if (o11 === null) {
      let e8 = new Error("<".concat(n9, " /> is missing a parent <Combobox /> component."));
      throw Error.captureStackTrace && Error.captureStackTrace(e8, b6), e8;
    }
    return o11;
  }
  function b6({ id: n9, virtual: o11 = null, __demoMode: e8 = false }) {
    let t9 = T2(() => y7.new({ id: n9, virtual: o11, __demoMode: e8 }), []);
    return c10(() => t9.dispose()), t9;
  }

  // node_modules/@headlessui/react/dist/components/combobox/combobox.js
  var de = Q(null);
  de.displayName = "ComboboxDataContext";
  function te2(T8) {
    let O5 = x2(de);
    if (O5 === null) {
      let e8 = new Error("<".concat(T8, " /> is missing a parent <Combobox /> component."));
      throw Error.captureStackTrace && Error.captureStackTrace(e8, te2), e8;
    }
    return O5;
  }
  var Le = Q(null);
  function Eo(T8) {
    let O5 = p9("VirtualProvider"), e8 = te2("VirtualProvider"), { options: o11 } = e8.virtual, E7 = S3(O5, (a15) => a15.optionsElement), [R2, y8] = T2(() => {
      let a15 = E7;
      if (!a15) return [0, 0];
      let u17 = window.getComputedStyle(a15);
      return [parseFloat(u17.paddingBlockStart || u17.paddingTop), parseFloat(u17.paddingBlockEnd || u17.paddingBottom)];
    }, [E7]), b7 = useVirtualizer({ enabled: o11.length !== 0, scrollPaddingStart: R2, scrollPaddingEnd: y8, count: o11.length, estimateSize() {
      return 40;
    }, getScrollElement() {
      return O5.state.optionsElement;
    }, overscan: 12 }), [h8, p10] = d2(0);
    n2(() => {
      p10((a15) => a15 + 1);
    }, [o11]);
    let f14 = b7.getVirtualItems(), n9 = S3(O5, (a15) => a15.activationTrigger === _6.Pointer), m8 = S3(O5, O5.selectors.activeOptionIndex);
    return f14.length === 0 ? null : xn.createElement(Le.Provider, { value: b7 }, xn.createElement("div", { style: { position: "relative", width: "100%", height: "".concat(b7.getTotalSize(), "px") }, ref: (a15) => {
      a15 && (n9 || m8 !== null && o11.length > m8 && b7.scrollToIndex(m8));
    } }, f14.map((a15) => {
      var u17;
      return xn.createElement(k, { key: a15.key }, xn.cloneElement((u17 = T8.children) == null ? void 0 : u17.call(T8, __spreadProps(__spreadValues({}, T8.slot), { option: o11[a15.index] })), { key: "".concat(h8, "-").concat(a15.key), "data-index": a15.index, "aria-setsize": o11.length, "aria-posinset": a15.index + 1, style: { position: "absolute", top: 0, left: 0, transform: "translateY(".concat(a15.start, "px)"), overflowAnchor: "none" } }));
    })));
  }
  var ho = k;
  function Ao(T8, O5) {
    let e8 = g2(), o11 = a3(), _a = T8, { value: E7, defaultValue: R2, onChange: y8, form: b7, name: h8, by: p10, invalid: f14 = false, disabled: n9 = o11 || false, onClose: m8, __demoMode: a15 = false, multiple: u17 = false, immediate: A7 = false, virtual: d6 = null, nullable: X3 } = _a, G5 = __objRest(_a, ["value", "defaultValue", "onChange", "form", "name", "by", "invalid", "disabled", "onClose", "__demoMode", "multiple", "immediate", "virtual", "nullable"]), C10 = l4(R2), [x6 = u17 ? [] : void 0, v6] = b4(E7, y8, C10), c13 = b6({ id: e8, virtual: d6, __demoMode: a15 }), z4 = A2({ static: false, hold: false }), D9 = u7(p10), K4 = o5((i9) => d6 ? p10 === null ? d6.options.indexOf(i9) : d6.options.findIndex((M6) => D9(M6, i9)) : c13.state.options.findIndex((M6) => D9(M6.dataRef.current.value, i9))), W3 = q2((i9) => u3(l8.mode, { [k6.Multi]: () => x6.some((M6) => D9(M6, i9)), [k6.Single]: () => D9(x6, i9) }), [x6]), S8 = S3(c13, (i9) => i9.virtual), j10 = o5(() => m8 == null ? void 0 : m8()), l8 = T2(() => ({ __demoMode: a15, immediate: A7, optionsPropsRef: z4, value: x6, defaultValue: C10, disabled: n9, invalid: f14, mode: u17 ? k6.Multi : k6.Single, virtual: d6 ? S8 : null, onChange: v6, isSelected: W3, calculateIndex: K4, compare: D9, onClose: j10 }), [a15, A7, z4, x6, C10, n9, f14, u17, d6, S8, v6, W3, K4, D9, j10]);
    n2(() => {
      var i9;
      d6 && c13.send({ type: D8.UpdateVirtualConfiguration, options: d6.options, disabled: (i9 = d6.disabled) != null ? i9 : null });
    }, [d6, d6 == null ? void 0 : d6.options, d6 == null ? void 0 : d6.disabled]), n2(() => {
      c13.state.dataRef.current = l8;
    }, [l8]);
    let [k7, Y3, s12, U4] = S3(c13, (i9) => [i9.comboboxState, i9.buttonElement, i9.inputElement, i9.optionsElement]), $5 = x4.get(null), ne = S3($5, q2((i9) => $5.selectors.isTop(i9, e8), [$5, e8]));
    k5(ne, [Y3, s12, U4], () => c13.actions.closeCombobox());
    let be = S3(c13, c13.selectors.activeOptionIndex), ee = S3(c13, c13.selectors.activeOption), q5 = n3({ open: k7 === P6.Open, disabled: n9, invalid: f14, activeIndex: be, activeOption: ee, value: x6 }), [t9, V5] = V4(), P7 = O5 === null ? {} : { ref: O5 }, N5 = q2(() => {
      if (C10 !== void 0) return v6 == null ? void 0 : v6(C10);
    }, [v6, C10]), g6 = K3();
    return xn.createElement(V5, { value: t9, props: { htmlFor: s12 == null ? void 0 : s12.id }, slot: { open: k7 === P6.Open, disabled: n9 } }, xn.createElement(Ae, null, xn.createElement(de.Provider, { value: l8 }, xn.createElement(u15.Provider, { value: c13 }, xn.createElement(c8, { value: u3(k7, { [P6.Open]: i8.Open, [P6.Closed]: i8.Closed }) }, h8 != null && xn.createElement(j4, { disabled: n9, data: x6 != null ? { [h8]: x6 } : {}, form: b7, onReset: N5 }), g6({ ourProps: P7, theirProps: G5, slot: q5, defaultTag: ho, name: "Combobox" }))))));
  }
  var Io = "input";
  function Ro(T8, O5) {
    var ee, q5;
    let e8 = p9("Combobox.Input"), o11 = te2("Combobox.Input"), E7 = g2(), R2 = u4(), _a = T8, { id: y8 = R2 || "headlessui-combobox-input-".concat(E7), onChange: b7, displayValue: h8, disabled: p10 = o11.disabled || false, autoFocus: f14 = false, type: n9 = "text" } = _a, m8 = __objRest(_a, ["id", "onChange", "displayValue", "disabled", "autoFocus", "type"]), a15 = A2(null), u17 = y3(a15, O5, Fe(), e8.actions.setInputElement), [A7, d6] = S3(e8, (t9) => [t9.comboboxState, t9.isTyping]), X3 = p3(), G5 = o5(() => {
      e8.actions.onChange(null), e8.state.optionsElement && (e8.state.optionsElement.scrollTop = 0), e8.actions.goToOption({ focus: c9.Nothing });
    }), C10 = T2(() => {
      var t9;
      return typeof h8 == "function" && o11.value !== void 0 ? (t9 = h8(o11.value)) != null ? t9 : "" : typeof o11.value == "string" ? o11.value : "";
    }, [o11.value, h8]);
    m6(([t9, V5], [P7, N5]) => {
      if (e8.state.isTyping) return;
      let g6 = a15.current;
      g6 && ((N5 === P6.Open && V5 === P6.Closed || t9 !== P7) && (g6.value = t9), requestAnimationFrame(() => {
        if (e8.state.isTyping || !g6 || d4(g6)) return;
        let { selectionStart: i9, selectionEnd: M6 } = g6;
        Math.abs((M6 != null ? M6 : 0) - (i9 != null ? i9 : 0)) === 0 && i9 === 0 && g6.setSelectionRange(g6.value.length, g6.value.length);
      }));
    }, [C10, A7, d6]), m6(([t9], [V5]) => {
      if (t9 === P6.Open && V5 === P6.Closed) {
        if (e8.state.isTyping) return;
        let P7 = a15.current;
        if (!P7) return;
        let N5 = P7.value, { selectionStart: g6, selectionEnd: i9, selectionDirection: M6 } = P7;
        P7.value = "", P7.value = N5, M6 !== null ? P7.setSelectionRange(g6, i9, M6) : P7.setSelectionRange(g6, i9);
      }
    }, [A7]);
    let x6 = A2(false), v6 = o5(() => {
      x6.current = true;
    }), c13 = o5(() => {
      X3.nextFrame(() => {
        x6.current = false;
      });
    }), z4 = o5((t9) => {
      switch (e8.actions.setIsTyping(true), t9.key) {
        case o7.Enter:
          if (e8.state.comboboxState !== P6.Open || x6.current) return;
          if (t9.preventDefault(), t9.stopPropagation(), e8.selectors.activeOptionIndex(e8.state) === null) {
            e8.actions.closeCombobox();
            return;
          }
          e8.actions.selectActiveOption(), o11.mode === k6.Single && e8.actions.closeCombobox();
          break;
        case o7.ArrowDown:
          return t9.preventDefault(), t9.stopPropagation(), u3(e8.state.comboboxState, { [P6.Open]: () => e8.actions.goToOption({ focus: c9.Next }), [P6.Closed]: () => e8.actions.openCombobox() });
        case o7.ArrowUp:
          return t9.preventDefault(), t9.stopPropagation(), u3(e8.state.comboboxState, { [P6.Open]: () => e8.actions.goToOption({ focus: c9.Previous }), [P6.Closed]: () => {
            En(() => e8.actions.openCombobox()), o11.value || e8.actions.goToOption({ focus: c9.Last });
          } });
        case o7.Home:
          if (e8.state.comboboxState === P6.Closed || t9.shiftKey) break;
          return t9.preventDefault(), t9.stopPropagation(), e8.actions.goToOption({ focus: c9.First });
        case o7.PageUp:
          return t9.preventDefault(), t9.stopPropagation(), e8.actions.goToOption({ focus: c9.First });
        case o7.End:
          if (e8.state.comboboxState === P6.Closed || t9.shiftKey) break;
          return t9.preventDefault(), t9.stopPropagation(), e8.actions.goToOption({ focus: c9.Last });
        case o7.PageDown:
          return t9.preventDefault(), t9.stopPropagation(), e8.actions.goToOption({ focus: c9.Last });
        case o7.Escape:
          return e8.state.comboboxState !== P6.Open ? void 0 : (t9.preventDefault(), e8.state.optionsElement && !o11.optionsPropsRef.current.static && t9.stopPropagation(), o11.mode === k6.Single && o11.value === null && G5(), e8.actions.closeCombobox());
        case o7.Tab:
          if (e8.actions.setIsTyping(false), e8.state.comboboxState !== P6.Open) return;
          o11.mode === k6.Single && e8.state.activationTrigger !== _6.Focus && e8.actions.selectActiveOption(), e8.actions.closeCombobox();
          break;
      }
    }), D9 = o5((t9) => {
      b7 == null || b7(t9), o11.mode === k6.Single && t9.target.value === "" && G5(), e8.actions.openCombobox();
    }), K4 = o5((t9) => {
      var P7, N5, g6;
      let V5 = (P7 = t9.relatedTarget) != null ? P7 : n8.find((i9) => i9 !== t9.currentTarget);
      if (!((N5 = e8.state.optionsElement) != null && N5.contains(V5)) && !((g6 = e8.state.buttonElement) != null && g6.contains(V5)) && e8.state.comboboxState === P6.Open) return t9.preventDefault(), o11.mode === k6.Single && o11.value === null && G5(), e8.actions.closeCombobox();
    }), W3 = o5((t9) => {
      var P7, N5, g6;
      let V5 = (P7 = t9.relatedTarget) != null ? P7 : n8.find((i9) => i9 !== t9.currentTarget);
      (N5 = e8.state.buttonElement) != null && N5.contains(V5) || (g6 = e8.state.optionsElement) != null && g6.contains(V5) || o11.disabled || o11.immediate && e8.state.comboboxState !== P6.Open && X3.microTask(() => {
        En(() => e8.actions.openCombobox()), e8.actions.setActivationTrigger(_6.Focus);
      });
    }), S8 = N3(), j10 = w5(), { isFocused: l8, focusProps: k7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f14 }), { isHovered: Y3, hoverProps: s12 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: p10 }), U4 = S3(e8, (t9) => t9.optionsElement), $5 = n3({ open: A7 === P6.Open, disabled: p10, invalid: o11.invalid, hover: Y3, focus: l8, autofocus: f14 }), ne = V3({ ref: u17, id: y8, role: "combobox", type: n9, "aria-controls": U4 == null ? void 0 : U4.id, "aria-expanded": A7 === P6.Open, "aria-activedescendant": S3(e8, e8.selectors.activeDescendantId), "aria-labelledby": S8, "aria-describedby": j10, "aria-autocomplete": "list", defaultValue: (q5 = (ee = T8.defaultValue) != null ? ee : o11.defaultValue !== void 0 ? h8 == null ? void 0 : h8(o11.defaultValue) : null) != null ? q5 : o11.defaultValue, disabled: p10 || void 0, autoFocus: f14, onCompositionStart: v6, onCompositionEnd: c13, onKeyDown: z4, onChange: D9, onFocus: W3, onBlur: K4 }, k7, s12);
    return K3()({ ourProps: ne, theirProps: m8, slot: $5, defaultTag: Io, name: "Combobox.Input" });
  }
  var _o = "button";
  function Fo(T8, O5) {
    let e8 = p9("Combobox.Button"), o11 = te2("Combobox.Button"), [E7, R2] = d2(null), y8 = y3(O5, R2, e8.actions.setButtonElement), b7 = g2(), _a = T8, { id: h8 = "headlessui-combobox-button-".concat(b7), disabled: p10 = o11.disabled || false, autoFocus: f14 = false } = _a, n9 = __objRest(_a, ["id", "disabled", "autoFocus"]), [m8, a15, u17] = S3(e8, (l8) => [l8.comboboxState, l8.inputElement, l8.optionsElement]), A7 = v4(a15), d6 = m8 === P6.Open;
    L5(d6, { trigger: E7, action: q2((l8) => {
      if (E7 != null && E7.contains(l8.target)) return S5.Ignore;
      if (a15 != null && a15.contains(l8.target)) return S5.Ignore;
      let k7 = l8.target.closest('[role="option"]:not([data-disabled])');
      return n4(k7) ? S5.Select(k7) : u17 != null && u17.contains(l8.target) ? S5.Ignore : S5.Close;
    }, [E7, a15, u17]), close: e8.actions.closeCombobox, select: e8.actions.selectActiveOption });
    let X3 = o5((l8) => {
      switch (l8.key) {
        case o7.Space:
        case o7.Enter:
          l8.preventDefault(), l8.stopPropagation(), e8.state.comboboxState === P6.Closed && En(() => e8.actions.openCombobox()), A7();
          return;
        case o7.ArrowDown:
          l8.preventDefault(), l8.stopPropagation(), e8.state.comboboxState === P6.Closed && (En(() => e8.actions.openCombobox()), e8.state.dataRef.current.value || e8.actions.goToOption({ focus: c9.First })), A7();
          return;
        case o7.ArrowUp:
          l8.preventDefault(), l8.stopPropagation(), e8.state.comboboxState === P6.Closed && (En(() => e8.actions.openCombobox()), e8.state.dataRef.current.value || e8.actions.goToOption({ focus: c9.Last })), A7();
          return;
        case o7.Escape:
          if (e8.state.comboboxState !== P6.Open) return;
          l8.preventDefault(), e8.state.optionsElement && !o11.optionsPropsRef.current.static && l8.stopPropagation(), En(() => e8.actions.closeCombobox()), A7();
          return;
        default:
          return;
      }
    }), G5 = s8(() => {
      e8.state.comboboxState === P6.Open ? e8.actions.closeCombobox() : e8.actions.openCombobox(), A7();
    }), C10 = N3([h8]), { isFocusVisible: x6, focusProps: v6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f14 }), { isHovered: c13, hoverProps: z4 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: p10 }), { pressed: D9, pressProps: K4 } = w4({ disabled: p10 }), W3 = n3({ open: m8 === P6.Open, active: D9 || m8 === P6.Open, disabled: p10, invalid: o11.invalid, value: o11.value, hover: c13, focus: x6 }), S8 = V3({ ref: y8, id: h8, type: e6(T8, E7), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": u17 == null ? void 0 : u17.id, "aria-expanded": m8 === P6.Open, "aria-labelledby": C10, disabled: p10 || void 0, autoFocus: f14, onKeyDown: X3 }, G5, v6, z4, K4);
    return K3()({ ourProps: S8, theirProps: n9, slot: W3, defaultTag: _o, name: "Combobox.Button" });
  }
  var Do = "div";
  var So = A4.RenderStrategy | A4.Static;
  function Mo(T8, O5) {
    var M6, Ce, ve;
    let e8 = g2(), _a = T8, { id: o11 = "headlessui-combobox-options-".concat(e8), hold: E7 = false, anchor: R2, portal: y8 = false, modal: b7 = true, transition: h8 = false } = _a, p10 = __objRest(_a, ["id", "hold", "anchor", "portal", "modal", "transition"]), f14 = p9("Combobox.Options"), n9 = te2("Combobox.Options"), m8 = ye(R2);
    m8 && (y8 = true);
    let [a15, u17] = Re(m8), [A7, d6] = d2(null), X3 = Te(), G5 = y3(O5, m8 ? a15 : null, f14.actions.setOptionsElement, d6), [C10, x6, v6, c13, z4] = S3(f14, (_7) => [_7.comboboxState, _7.inputElement, _7.buttonElement, _7.optionsElement, _7.activationTrigger]), D9 = u10(x6 || v6), K4 = u10(c13), W3 = u13(), [S8, j10] = N4(h8, A7, W3 !== null ? (W3 & i8.Open) === i8.Open : C10 === P6.Open);
    p7(S8, x6, f14.actions.closeCombobox);
    let l8 = n9.__demoMode ? false : b7 && C10 === P6.Open;
    f9(l8, K4);
    let k7 = n9.__demoMode ? false : b7 && C10 === P6.Open;
    y5(k7, { allowed: q2(() => [x6, v6, c13], [x6, v6, c13]) });
    let s12 = S3(f14, f14.selectors.didInputMove) ? false : S8;
    n2(() => {
      var _7;
      n9.optionsPropsRef.current.static = (_7 = T8.static) != null ? _7 : false;
    }, [n9.optionsPropsRef, T8.static]), n2(() => {
      n9.optionsPropsRef.current.hold = E7;
    }, [n9.optionsPropsRef, E7]), F5(C10 === P6.Open, { container: c13, accept(_7) {
      return _7.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : _7.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
    }, walk(_7) {
      _7.setAttribute("role", "none");
    } });
    let U4 = N3([v6 == null ? void 0 : v6.id]), $5 = n3({ open: C10 === P6.Open, option: void 0 }), ne = o5(() => {
      f14.actions.setActivationTrigger(_6.Pointer);
    }), be = o5((_7) => {
      _7.preventDefault(), f14.actions.setActivationTrigger(_6.Pointer);
    }), ee = V3(m8 ? X3() : {}, __spreadValues({ "aria-labelledby": U4, role: "listbox", "aria-multiselectable": n9.mode === k6.Multi ? true : void 0, id: o11, ref: G5, style: __spreadProps(__spreadValues(__spreadValues({}, p10.style), u17), { "--input-width": w6(S8, x6, true).width, "--button-width": w6(S8, v6, true).width }), onWheel: z4 === _6.Pointer ? void 0 : ne, onMouseDown: be }, x5(j10))), q5 = S8 && C10 === P6.Closed && !T8.static, t9 = u12(q5, (M6 = n9.virtual) == null ? void 0 : M6.options), V5 = u12(q5, n9.value), P7 = q2((_7) => n9.compare(V5, _7), [n9.compare, V5]), N5 = T2(() => {
      if (!n9.virtual) return n9;
      if (t9 === void 0) throw new Error("Missing `options` in virtual mode");
      return t9 !== n9.virtual.options ? __spreadProps(__spreadValues({}, n9), { virtual: __spreadProps(__spreadValues({}, n9.virtual), { options: t9 }) }) : n9;
    }, [n9, t9, (Ce = n9.virtual) == null ? void 0 : Ce.options]);
    n9.virtual && Object.assign(p10, { children: xn.createElement(de.Provider, { value: N5 }, xn.createElement(Eo, { slot: $5 }, p10.children)) });
    let g6 = K3(), i9 = T2(() => n9.mode === k6.Multi ? n9 : __spreadProps(__spreadValues({}, n9), { isSelected: P7 }), [n9, P7]);
    return xn.createElement(te, { enabled: y8 ? T8.static || S8 : false, ownerDocument: D9 }, xn.createElement(de.Provider, { value: i9 }, g6({ ourProps: ee, theirProps: __spreadProps(__spreadValues({}, p10), { children: xn.createElement(s11, { freeze: q5 }, typeof p10.children == "function" ? (ve = p10.children) == null ? void 0 : ve.call(p10, $5) : p10.children) }), slot: $5, defaultTag: Do, features: So, visible: s12, name: "Combobox.Options" })));
  }
  var Lo = "div";
  function Vo(T8, O5) {
    var l8, k7, Y3;
    let e8 = te2("Combobox.Option"), o11 = p9("Combobox.Option"), E7 = g2(), _a = T8, { id: R2 = "headlessui-combobox-option-".concat(E7), value: y8, disabled: b7 = (Y3 = (k7 = (l8 = e8.virtual) == null ? void 0 : l8.disabled) == null ? void 0 : k7.call(l8, y8)) != null ? Y3 : false, order: h8 = null } = _a, p10 = __objRest(_a, ["id", "value", "disabled", "order"]), [f14] = S3(o11, (s12) => [s12.inputElement]), n9 = v4(f14), m8 = S3(o11, q2((s12) => o11.selectors.isActive(s12, y8, R2), [y8, R2])), a15 = e8.isSelected(y8), u17 = A2(null), A7 = s4({ disabled: b7, value: y8, domRef: u17, order: h8 }), d6 = x2(Le), X3 = y3(O5, u17, d6 ? d6.measureElement : null), G5 = o5(() => {
      o11.actions.setIsTyping(false), o11.actions.onChange(y8);
    });
    n2(() => o11.actions.registerOption(R2, A7), [A7, R2]);
    let C10 = S3(o11, q2((s12) => o11.selectors.shouldScrollIntoView(s12, y8, R2), [y8, R2]));
    n2(() => {
      if (C10) return o4().requestAnimationFrame(() => {
        var s12, U4;
        (U4 = (s12 = u17.current) == null ? void 0 : s12.scrollIntoView) == null || U4.call(s12, { block: "nearest" });
      });
    }, [C10, u17]);
    let x6 = o5((s12) => {
      s12.preventDefault(), s12.button === g4.Left && (b7 || (G5(), n6() || requestAnimationFrame(() => n9()), e8.mode === k6.Single && o11.actions.closeCombobox()));
    }), v6 = o5(() => {
      if (b7) return o11.actions.goToOption({ focus: c9.Nothing });
      let s12 = e8.calculateIndex(y8);
      o11.actions.goToOption({ focus: c9.Specific, idx: s12 });
    }), c13 = u11(), z4 = o5((s12) => c13.update(s12)), D9 = o5((s12) => {
      if (!c13.wasMoved(s12) || b7 || m8 && o11.state.activationTrigger === _6.Pointer) return;
      let U4 = e8.calculateIndex(y8);
      o11.actions.goToOption({ focus: c9.Specific, idx: U4 }, _6.Pointer);
    }), K4 = o5((s12) => {
      c13.wasMoved(s12) && (b7 || m8 && (e8.optionsPropsRef.current.hold || o11.state.activationTrigger === _6.Pointer && o11.actions.goToOption({ focus: c9.Nothing })));
    }), W3 = n3({ active: m8, focus: m8, selected: a15, disabled: b7 }), S8 = { id: R2, ref: X3, role: "option", tabIndex: b7 === true ? void 0 : -1, "aria-disabled": b7 === true ? true : void 0, "aria-selected": a15, disabled: void 0, onMouseDown: x6, onFocus: v6, onPointerEnter: z4, onMouseEnter: z4, onPointerMove: D9, onMouseMove: D9, onPointerLeave: K4, onMouseLeave: K4 };
    return K3()({ ourProps: S8, theirProps: p10, slot: W3, defaultTag: Lo, name: "Combobox.Option" });
  }
  var wo = Y2(Ao);
  var Bo = Y2(Fo);
  var ko = Y2(Ro);
  var No = Z2;
  var Uo = Y2(Mo);
  var Ho = Y2(Vo);
  var Ht = Object.assign(wo, { Input: ko, Button: Bo, Label: No, Options: Uo, Option: Ho });

  // node_modules/react-number-format/dist/react-number-format.es.js
  init_compat_module();
  function __rest(s12, e8) {
    var t9 = {};
    for (var p10 in s12) {
      if (Object.prototype.hasOwnProperty.call(s12, p10) && e8.indexOf(p10) < 0) {
        t9[p10] = s12[p10];
      }
    }
    if (s12 != null && typeof Object.getOwnPropertySymbols === "function") {
      for (var i9 = 0, p10 = Object.getOwnPropertySymbols(s12); i9 < p10.length; i9++) {
        if (e8.indexOf(p10[i9]) < 0 && Object.prototype.propertyIsEnumerable.call(s12, p10[i9])) {
          t9[p10[i9]] = s12[p10[i9]];
        }
      }
    }
    return t9;
  }
  var SourceType;
  (function(SourceType2) {
    SourceType2["event"] = "event";
    SourceType2["props"] = "prop";
  })(SourceType || (SourceType = {}));
  function noop3() {
  }
  function memoizeOnce(cb) {
    var lastArgs;
    var lastValue = void 0;
    return function() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      if (lastArgs && args.length === lastArgs.length && args.every(function(value, index3) {
        return value === lastArgs[index3];
      })) {
        return lastValue;
      }
      lastArgs = args;
      lastValue = cb.apply(void 0, args);
      return lastValue;
    };
  }
  function charIsNumber(char) {
    return !!(char || "").match(/\d/);
  }
  function isNil(val) {
    return val === null || val === void 0;
  }
  function isNanValue(val) {
    return typeof val === "number" && isNaN(val);
  }
  function isNotValidValue(val) {
    return isNil(val) || isNanValue(val) || typeof val === "number" && !isFinite(val);
  }
  function escapeRegExp(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
  function getThousandsGroupRegex(thousandsGroupStyle) {
    switch (thousandsGroupStyle) {
      case "lakh":
        return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
      case "wan":
        return /(\d)(?=(\d{4})+(?!\d))/g;
      case "thousand":
      default:
        return /(\d)(?=(\d{3})+(?!\d))/g;
    }
  }
  function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
    var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
    var index3 = str.search(/[1-9]/);
    index3 = index3 === -1 ? str.length : index3;
    return str.substring(0, index3) + str.substring(index3, str.length).replace(thousandsGroupRegex, "$1" + thousandSeparator);
  }
  function usePersistentCallback(cb) {
    var callbackRef = A2(cb);
    callbackRef.current = cb;
    var persistentCbRef = A2(function() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      return callbackRef.current.apply(callbackRef, args);
    });
    return persistentCbRef.current;
  }
  function splitDecimal(numStr, allowNegative) {
    if (allowNegative === void 0) allowNegative = true;
    var hasNegation = numStr[0] === "-";
    var addNegation = hasNegation && allowNegative;
    numStr = numStr.replace("-", "");
    var parts = numStr.split(".");
    var beforeDecimal = parts[0];
    var afterDecimal = parts[1] || "";
    return {
      beforeDecimal,
      afterDecimal,
      hasNegation,
      addNegation
    };
  }
  function fixLeadingZero(numStr) {
    if (!numStr) {
      return numStr;
    }
    var isNegative = numStr[0] === "-";
    if (isNegative) {
      numStr = numStr.substring(1, numStr.length);
    }
    var parts = numStr.split(".");
    var beforeDecimal = parts[0].replace(/^0+/, "") || "0";
    var afterDecimal = parts[1] || "";
    return (isNegative ? "-" : "") + beforeDecimal + (afterDecimal ? "." + afterDecimal : "");
  }
  function limitToScale(numStr, scale, fixedDecimalScale) {
    var str = "";
    var filler = fixedDecimalScale ? "0" : "";
    for (var i9 = 0; i9 <= scale - 1; i9++) {
      str += numStr[i9] || filler;
    }
    return str;
  }
  function repeat(str, count2) {
    return Array(count2 + 1).join(str);
  }
  function toNumericString(num) {
    var _num = num + "";
    var sign = _num[0] === "-" ? "-" : "";
    if (sign) {
      _num = _num.substring(1);
    }
    var ref = _num.split(/[eE]/g);
    var coefficient = ref[0];
    var exponent = ref[1];
    exponent = Number(exponent);
    if (!exponent) {
      return sign + coefficient;
    }
    coefficient = coefficient.replace(".", "");
    var decimalIndex = 1 + exponent;
    var coffiecientLn = coefficient.length;
    if (decimalIndex < 0) {
      coefficient = "0." + repeat("0", Math.abs(decimalIndex)) + coefficient;
    } else if (decimalIndex >= coffiecientLn) {
      coefficient = coefficient + repeat("0", decimalIndex - coffiecientLn);
    } else {
      coefficient = (coefficient.substring(0, decimalIndex) || "0") + "." + coefficient.substring(decimalIndex);
    }
    return sign + coefficient;
  }
  function roundToPrecision(numStr, scale, fixedDecimalScale) {
    if (["", "-"].indexOf(numStr) !== -1) {
      return numStr;
    }
    var shouldHaveDecimalSeparator = (numStr.indexOf(".") !== -1 || fixedDecimalScale) && scale;
    var ref = splitDecimal(numStr);
    var beforeDecimal = ref.beforeDecimal;
    var afterDecimal = ref.afterDecimal;
    var hasNegation = ref.hasNegation;
    var floatValue = parseFloat("0." + (afterDecimal || "0"));
    var floatValueStr = afterDecimal.length <= scale ? "0." + afterDecimal : floatValue.toFixed(scale);
    var roundedDecimalParts = floatValueStr.split(".");
    var intPart = beforeDecimal;
    if (beforeDecimal && Number(roundedDecimalParts[0])) {
      intPart = beforeDecimal.split("").reverse().reduce(function(roundedStr, current, idx) {
        if (roundedStr.length > idx) {
          return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
        }
        return current + roundedStr;
      }, roundedDecimalParts[0]);
    }
    var decimalPart = limitToScale(roundedDecimalParts[1] || "", scale, fixedDecimalScale);
    var negation = hasNegation ? "-" : "";
    var decimalSeparator = shouldHaveDecimalSeparator ? "." : "";
    return "" + negation + intPart + decimalSeparator + decimalPart;
  }
  function setCaretPosition(el, caretPos) {
    el.value = el.value;
    if (el !== null) {
      if (el.createTextRange) {
        var range = el.createTextRange();
        range.move("character", caretPos);
        range.select();
        return true;
      }
      if (el.selectionStart || el.selectionStart === 0) {
        el.focus();
        el.setSelectionRange(caretPos, caretPos);
        return true;
      }
      el.focus();
      return false;
    }
  }
  var findChangeRange = memoizeOnce(function(prevValue, newValue) {
    var i9 = 0, j10 = 0;
    var prevLength = prevValue.length;
    var newLength = newValue.length;
    while (prevValue[i9] === newValue[i9] && i9 < prevLength) {
      i9++;
    }
    while (prevValue[prevLength - 1 - j10] === newValue[newLength - 1 - j10] && newLength - j10 > i9 && prevLength - j10 > i9) {
      j10++;
    }
    return {
      from: { start: i9, end: prevLength - j10 },
      to: { start: i9, end: newLength - j10 }
    };
  });
  var findChangedRangeFromCaretPositions = function(lastCaretPositions, currentCaretPosition) {
    var startPosition = Math.min(lastCaretPositions.selectionStart, currentCaretPosition);
    return {
      from: { start: startPosition, end: lastCaretPositions.selectionEnd },
      to: { start: startPosition, end: currentCaretPosition }
    };
  };
  function clamp2(num, min2, max2) {
    return Math.min(Math.max(num, min2), max2);
  }
  function geInputCaretPosition(el) {
    return Math.max(el.selectionStart, el.selectionEnd);
  }
  function addInputMode() {
    return typeof navigator !== "undefined" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
  }
  function getDefaultChangeMeta(value) {
    return {
      from: {
        start: 0,
        end: 0
      },
      to: {
        start: 0,
        end: value.length
      },
      lastValue: ""
    };
  }
  function defaultIsCharacterSame(ref) {
    var currentValue = ref.currentValue;
    var formattedValue = ref.formattedValue;
    var currentValueIndex = ref.currentValueIndex;
    var formattedValueIndex = ref.formattedValueIndex;
    return currentValue[currentValueIndex] === formattedValue[formattedValueIndex];
  }
  function getCaretPosition(newFormattedValue, lastFormattedValue, curValue, curCaretPos, boundary, isValidInputCharacter, isCharacterSame) {
    if (isCharacterSame === void 0) isCharacterSame = defaultIsCharacterSame;
    var firstAllowedPosition = boundary.findIndex(function(b7) {
      return b7;
    });
    var prefixFormat = newFormattedValue.slice(0, firstAllowedPosition);
    if (!lastFormattedValue && !curValue.startsWith(prefixFormat)) {
      lastFormattedValue = prefixFormat;
      curValue = prefixFormat + curValue;
      curCaretPos = curCaretPos + prefixFormat.length;
    }
    var curValLn = curValue.length;
    var formattedValueLn = newFormattedValue.length;
    var addedIndexMap = {};
    var indexMap = new Array(curValLn);
    for (var i9 = 0; i9 < curValLn; i9++) {
      indexMap[i9] = -1;
      for (var j10 = 0, jLn = formattedValueLn; j10 < jLn; j10++) {
        var isCharSame = isCharacterSame({
          currentValue: curValue,
          lastValue: lastFormattedValue,
          formattedValue: newFormattedValue,
          currentValueIndex: i9,
          formattedValueIndex: j10
        });
        if (isCharSame && addedIndexMap[j10] !== true) {
          indexMap[i9] = j10;
          addedIndexMap[j10] = true;
          break;
        }
      }
    }
    var pos = curCaretPos;
    while (pos < curValLn && (indexMap[pos] === -1 || !isValidInputCharacter(curValue[pos]))) {
      pos++;
    }
    var endIndex = pos === curValLn || indexMap[pos] === -1 ? formattedValueLn : indexMap[pos];
    pos = curCaretPos - 1;
    while (pos > 0 && indexMap[pos] === -1) {
      pos--;
    }
    var startIndex = pos === -1 || indexMap[pos] === -1 ? 0 : indexMap[pos] + 1;
    if (startIndex > endIndex) {
      return endIndex;
    }
    return curCaretPos - startIndex < endIndex - curCaretPos ? startIndex : endIndex;
  }
  function getCaretPosInBoundary(value, caretPos, boundary, direction) {
    var valLn = value.length;
    caretPos = clamp2(caretPos, 0, valLn);
    if (direction === "left") {
      while (caretPos >= 0 && !boundary[caretPos]) {
        caretPos--;
      }
      if (caretPos === -1) {
        caretPos = boundary.indexOf(true);
      }
    } else {
      while (caretPos <= valLn && !boundary[caretPos]) {
        caretPos++;
      }
      if (caretPos > valLn) {
        caretPos = boundary.lastIndexOf(true);
      }
    }
    if (caretPos === -1) {
      caretPos = valLn;
    }
    return caretPos;
  }
  function caretUnknownFormatBoundary(formattedValue) {
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
      return true;
    });
    for (var i9 = 0, ln2 = boundaryAry.length; i9 < ln2; i9++) {
      boundaryAry[i9] = Boolean(charIsNumber(formattedValue[i9]) || charIsNumber(formattedValue[i9 - 1]));
    }
    return boundaryAry;
  }
  function useInternalValues(value, defaultValue, valueIsNumericString, format3, removeFormatting2, onValueChange) {
    if (onValueChange === void 0) onValueChange = noop3;
    var getValues = usePersistentCallback(function(value2, valueIsNumericString2) {
      var formattedValue, numAsString;
      if (isNotValidValue(value2)) {
        numAsString = "";
        formattedValue = "";
      } else if (typeof value2 === "number" || valueIsNumericString2) {
        numAsString = typeof value2 === "number" ? toNumericString(value2) : value2;
        formattedValue = format3(numAsString);
      } else {
        numAsString = removeFormatting2(value2, void 0);
        formattedValue = format3(numAsString);
      }
      return { formattedValue, numAsString };
    });
    var ref = d2(function() {
      return getValues(isNil(value) ? defaultValue : value, valueIsNumericString);
    });
    var values = ref[0];
    var setValues = ref[1];
    var _onValueChange = function(newValues2, sourceInfo) {
      if (newValues2.formattedValue !== values.formattedValue) {
        setValues({
          formattedValue: newValues2.formattedValue,
          numAsString: newValues2.value
        });
      }
      onValueChange(newValues2, sourceInfo);
    };
    var _value = value;
    var _valueIsNumericString = valueIsNumericString;
    if (isNil(value)) {
      _value = values.numAsString;
      _valueIsNumericString = true;
    }
    var newValues = getValues(_value, _valueIsNumericString);
    T2(function() {
      setValues(newValues);
    }, [newValues.formattedValue]);
    return [values, _onValueChange];
  }
  function defaultRemoveFormatting(value) {
    return value.replace(/[^0-9]/g, "");
  }
  function defaultFormat(value) {
    return value;
  }
  function NumberFormatBase(props) {
    var type = props.type;
    if (type === void 0) type = "text";
    var displayType = props.displayType;
    if (displayType === void 0) displayType = "input";
    var customInput = props.customInput;
    var renderText = props.renderText;
    var getInputRef = props.getInputRef;
    var format3 = props.format;
    if (format3 === void 0) format3 = defaultFormat;
    var removeFormatting2 = props.removeFormatting;
    if (removeFormatting2 === void 0) removeFormatting2 = defaultRemoveFormatting;
    var defaultValue = props.defaultValue;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var isAllowed = props.isAllowed;
    var onChange = props.onChange;
    if (onChange === void 0) onChange = noop3;
    var onKeyDown = props.onKeyDown;
    if (onKeyDown === void 0) onKeyDown = noop3;
    var onMouseUp = props.onMouseUp;
    if (onMouseUp === void 0) onMouseUp = noop3;
    var onFocus = props.onFocus;
    if (onFocus === void 0) onFocus = noop3;
    var onBlur = props.onBlur;
    if (onBlur === void 0) onBlur = noop3;
    var propValue = props.value;
    var getCaretBoundary2 = props.getCaretBoundary;
    if (getCaretBoundary2 === void 0) getCaretBoundary2 = caretUnknownFormatBoundary;
    var isValidInputCharacter = props.isValidInputCharacter;
    if (isValidInputCharacter === void 0) isValidInputCharacter = charIsNumber;
    var isCharacterSame = props.isCharacterSame;
    var otherProps = __rest(props, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]);
    var ref = useInternalValues(propValue, defaultValue, Boolean(valueIsNumericString), format3, removeFormatting2, onValueChange);
    var ref_0 = ref[0];
    var formattedValue = ref_0.formattedValue;
    var numAsString = ref_0.numAsString;
    var onFormattedValueChange = ref[1];
    var caretPositionBeforeChange = A2();
    var lastUpdatedValue = A2({ formattedValue, numAsString });
    var _onValueChange = function(values, source) {
      lastUpdatedValue.current = { formattedValue: values.formattedValue, numAsString: values.value };
      onFormattedValueChange(values, source);
    };
    var ref$1 = d2(false);
    var mounted = ref$1[0];
    var setMounted = ref$1[1];
    var focusedElm = A2(null);
    var timeout = A2({
      setCaretTimeout: null,
      focusTimeout: null
    });
    y2(function() {
      setMounted(true);
      return function() {
        clearTimeout(timeout.current.setCaretTimeout);
        clearTimeout(timeout.current.focusTimeout);
      };
    }, []);
    var _format = format3;
    var getValueObject = function(formattedValue2, numAsString2) {
      var floatValue = parseFloat(numAsString2);
      return {
        formattedValue: formattedValue2,
        value: numAsString2,
        floatValue: isNaN(floatValue) ? void 0 : floatValue
      };
    };
    var setPatchedCaretPosition = function(el, caretPos, currentValue) {
      if (el.selectionStart === 0 && el.selectionEnd === el.value.length) {
        return;
      }
      setCaretPosition(el, caretPos);
      timeout.current.setCaretTimeout = setTimeout(function() {
        if (el.value === currentValue && el.selectionStart !== caretPos) {
          setCaretPosition(el, caretPos);
        }
      }, 0);
    };
    var correctCaretPosition = function(value, caretPos, direction) {
      return getCaretPosInBoundary(value, caretPos, getCaretBoundary2(value), direction);
    };
    var getNewCaretPosition = function(inputValue, newFormattedValue, caretPos) {
      var caretBoundary = getCaretBoundary2(newFormattedValue);
      var updatedCaretPos = getCaretPosition(newFormattedValue, formattedValue, inputValue, caretPos, caretBoundary, isValidInputCharacter, isCharacterSame);
      updatedCaretPos = getCaretPosInBoundary(newFormattedValue, updatedCaretPos, caretBoundary);
      return updatedCaretPos;
    };
    var updateValueAndCaretPosition = function(params) {
      var newFormattedValue = params.formattedValue;
      if (newFormattedValue === void 0) newFormattedValue = "";
      var input = params.input;
      var source = params.source;
      var event = params.event;
      var numAsString2 = params.numAsString;
      var caretPos;
      if (input) {
        var inputValue = params.inputValue || input.value;
        var currentCaretPosition2 = geInputCaretPosition(input);
        input.value = newFormattedValue;
        caretPos = getNewCaretPosition(inputValue, newFormattedValue, currentCaretPosition2);
        if (caretPos !== void 0) {
          setPatchedCaretPosition(input, caretPos, newFormattedValue);
        }
      }
      if (newFormattedValue !== formattedValue) {
        _onValueChange(getValueObject(newFormattedValue, numAsString2), { event, source });
      }
    };
    y2(function() {
      var ref2 = lastUpdatedValue.current;
      var lastFormattedValue = ref2.formattedValue;
      var lastNumAsString = ref2.numAsString;
      if (formattedValue !== lastFormattedValue || numAsString !== lastNumAsString) {
        _onValueChange(getValueObject(formattedValue, numAsString), {
          event: void 0,
          source: SourceType.props
        });
      }
    }, [formattedValue, numAsString]);
    var currentCaretPosition = focusedElm.current ? geInputCaretPosition(focusedElm.current) : void 0;
    var useIsomorphicLayoutEffect2 = typeof window !== "undefined" ? _2 : y2;
    useIsomorphicLayoutEffect2(function() {
      var input = focusedElm.current;
      if (formattedValue !== lastUpdatedValue.current.formattedValue && input) {
        var caretPos = getNewCaretPosition(lastUpdatedValue.current.formattedValue, formattedValue, currentCaretPosition);
        input.value = formattedValue;
        setPatchedCaretPosition(input, caretPos, formattedValue);
      }
    }, [formattedValue]);
    var formatInputValue = function(inputValue, event, source) {
      var input = event.target;
      var changeRange = caretPositionBeforeChange.current ? findChangedRangeFromCaretPositions(caretPositionBeforeChange.current, input.selectionEnd) : findChangeRange(formattedValue, inputValue);
      var changeMeta = Object.assign(Object.assign({}, changeRange), { lastValue: formattedValue });
      var _numAsString = removeFormatting2(inputValue, changeMeta);
      var _formattedValue = _format(_numAsString);
      _numAsString = removeFormatting2(_formattedValue, void 0);
      if (isAllowed && !isAllowed(getValueObject(_formattedValue, _numAsString))) {
        var input$1 = event.target;
        var currentCaretPosition2 = geInputCaretPosition(input$1);
        var caretPos = getNewCaretPosition(inputValue, formattedValue, currentCaretPosition2);
        input$1.value = formattedValue;
        setPatchedCaretPosition(input$1, caretPos, formattedValue);
        return false;
      }
      updateValueAndCaretPosition({
        formattedValue: _formattedValue,
        numAsString: _numAsString,
        inputValue,
        event,
        source,
        input: event.target
      });
      return true;
    };
    var setCaretPositionInfoBeforeChange = function(el, endOffset) {
      if (endOffset === void 0) endOffset = 0;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      caretPositionBeforeChange.current = { selectionStart, selectionEnd: selectionEnd + endOffset };
    };
    var _onChange = function(e8) {
      var el = e8.target;
      var inputValue = el.value;
      var changed = formatInputValue(inputValue, e8, SourceType.event);
      if (changed) {
        onChange(e8);
      }
      caretPositionBeforeChange.current = void 0;
    };
    var _onKeyDown = function(e8) {
      var el = e8.target;
      var key = e8.key;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value;
      if (value === void 0) value = "";
      var expectedCaretPosition;
      if (key === "ArrowLeft" || key === "Backspace") {
        expectedCaretPosition = Math.max(selectionStart - 1, 0);
      } else if (key === "ArrowRight") {
        expectedCaretPosition = Math.min(selectionStart + 1, value.length);
      } else if (key === "Delete") {
        expectedCaretPosition = selectionStart;
      }
      var endOffset = 0;
      if (key === "Delete" && selectionStart === selectionEnd) {
        endOffset = 1;
      }
      var isArrowKey = key === "ArrowLeft" || key === "ArrowRight";
      if (expectedCaretPosition === void 0 || selectionStart !== selectionEnd && !isArrowKey) {
        onKeyDown(e8);
        setCaretPositionInfoBeforeChange(el, endOffset);
        return;
      }
      var newCaretPosition = expectedCaretPosition;
      if (isArrowKey) {
        var direction = key === "ArrowLeft" ? "left" : "right";
        newCaretPosition = correctCaretPosition(value, expectedCaretPosition, direction);
        if (newCaretPosition !== expectedCaretPosition) {
          e8.preventDefault();
        }
      } else if (key === "Delete" && !isValidInputCharacter(value[expectedCaretPosition])) {
        newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "right");
      } else if (key === "Backspace" && !isValidInputCharacter(value[expectedCaretPosition])) {
        newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "left");
      }
      if (newCaretPosition !== expectedCaretPosition) {
        setPatchedCaretPosition(el, newCaretPosition, value);
      }
      onKeyDown(e8);
      setCaretPositionInfoBeforeChange(el, endOffset);
    };
    var _onMouseUp = function(e8) {
      var el = e8.target;
      var correctCaretPositionIfRequired = function() {
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value;
        if (value === void 0) value = "";
        if (selectionStart === selectionEnd) {
          var caretPosition = correctCaretPosition(value, selectionStart);
          if (caretPosition !== selectionStart) {
            setPatchedCaretPosition(el, caretPosition, value);
          }
        }
      };
      correctCaretPositionIfRequired();
      requestAnimationFrame(function() {
        correctCaretPositionIfRequired();
      });
      onMouseUp(e8);
      setCaretPositionInfoBeforeChange(el);
    };
    var _onFocus = function(e8) {
      if (e8.persist) {
        e8.persist();
      }
      var el = e8.target;
      var currentTarget = e8.currentTarget;
      focusedElm.current = el;
      timeout.current.focusTimeout = setTimeout(function() {
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value;
        if (value === void 0) value = "";
        var caretPosition = correctCaretPosition(value, selectionStart);
        if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
          setPatchedCaretPosition(el, caretPosition, value);
        }
        onFocus(Object.assign(Object.assign({}, e8), { currentTarget }));
      }, 0);
    };
    var _onBlur = function(e8) {
      focusedElm.current = null;
      clearTimeout(timeout.current.focusTimeout);
      clearTimeout(timeout.current.setCaretTimeout);
      onBlur(e8);
    };
    var inputMode = mounted && addInputMode() ? "numeric" : void 0;
    var inputProps = Object.assign({ inputMode }, otherProps, {
      type,
      value: formattedValue,
      onChange: _onChange,
      onKeyDown: _onKeyDown,
      onMouseUp: _onMouseUp,
      onFocus: _onFocus,
      onBlur: _onBlur
    });
    if (displayType === "text") {
      return renderText ? xn.createElement(xn.Fragment, null, renderText(formattedValue, otherProps) || null) : xn.createElement("span", Object.assign({}, otherProps, { ref: getInputRef }), formattedValue);
    } else if (customInput) {
      var CustomInput = customInput;
      return xn.createElement(CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }
    return xn.createElement("input", Object.assign({}, inputProps, { ref: getInputRef }));
  }
  function format(numStr, props) {
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var suffix = props.suffix;
    if (suffix === void 0) suffix = "";
    var allowNegative = props.allowNegative;
    var thousandsGroupStyle = props.thousandsGroupStyle;
    if (thousandsGroupStyle === void 0) thousandsGroupStyle = "thousand";
    if (numStr === "" || numStr === "-") {
      return numStr;
    }
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var hasDecimalSeparator = decimalScale !== 0 && numStr.indexOf(".") !== -1 || decimalScale && fixedDecimalScale;
    var ref$1 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$1.beforeDecimal;
    var afterDecimal = ref$1.afterDecimal;
    var addNegation = ref$1.addNegation;
    if (decimalScale !== void 0) {
      afterDecimal = limitToScale(afterDecimal, decimalScale, !!fixedDecimalScale);
    }
    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }
    if (prefix) {
      beforeDecimal = prefix + beforeDecimal;
    }
    if (suffix) {
      afterDecimal = afterDecimal + suffix;
    }
    if (addNegation) {
      beforeDecimal = "-" + beforeDecimal;
    }
    numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || "") + afterDecimal;
    return numStr;
  }
  function getSeparators(props) {
    var decimalSeparator = props.decimalSeparator;
    if (decimalSeparator === void 0) decimalSeparator = ".";
    var thousandSeparator = props.thousandSeparator;
    var allowedDecimalSeparators = props.allowedDecimalSeparators;
    if (thousandSeparator === true) {
      thousandSeparator = ",";
    }
    if (!allowedDecimalSeparators) {
      allowedDecimalSeparators = [decimalSeparator, "."];
    }
    return {
      decimalSeparator,
      thousandSeparator,
      allowedDecimalSeparators
    };
  }
  function handleNegation(value, allowNegative) {
    if (value === void 0) value = "";
    var negationRegex = new RegExp("(-)");
    var doubleNegationRegex = new RegExp("(-)(.)*(-)");
    var hasNegation = negationRegex.test(value);
    var removeNegation = doubleNegationRegex.test(value);
    value = value.replace(/-/g, "");
    if (hasNegation && !removeNegation && allowNegative) {
      value = "-" + value;
    }
    return value;
  }
  function getNumberRegex(decimalSeparator, global) {
    return new RegExp("(^-)|[0-9]|" + escapeRegExp(decimalSeparator), global ? "g" : void 0);
  }
  function isNumericString(val, prefix, suffix) {
    if (val === "") {
      return true;
    }
    return !(prefix === null || prefix === void 0 ? void 0 : prefix.match(/\d/)) && !(suffix === null || suffix === void 0 ? void 0 : suffix.match(/\d/)) && typeof val === "string" && !isNaN(Number(val));
  }
  function removeFormatting(value, changeMeta, props) {
    var assign;
    if (changeMeta === void 0) changeMeta = getDefaultChangeMeta(value);
    var allowNegative = props.allowNegative;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var suffix = props.suffix;
    if (suffix === void 0) suffix = "";
    var decimalScale = props.decimalScale;
    var from = changeMeta.from;
    var to = changeMeta.to;
    var start = to.start;
    var end = to.end;
    var ref = getSeparators(props);
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var decimalSeparator = ref.decimalSeparator;
    var isBeforeDecimalSeparator = value[end] === decimalSeparator;
    if (charIsNumber(value) && (value === prefix || value === suffix) && changeMeta.lastValue === "") {
      return value;
    }
    if (end - start === 1 && allowedDecimalSeparators.indexOf(value[start]) !== -1) {
      var separator = decimalScale === 0 ? "" : decimalSeparator;
      value = value.substring(0, start) + separator + value.substring(start + 1, value.length);
    }
    var stripNegation = function(value2, start2, end2) {
      var hasNegation2 = false;
      var hasDoubleNegation = false;
      if (prefix.startsWith("-")) {
        hasNegation2 = false;
      } else if (value2.startsWith("--")) {
        hasNegation2 = false;
        hasDoubleNegation = true;
      } else if (suffix.startsWith("-") && value2.length === suffix.length) {
        hasNegation2 = false;
      } else if (value2[0] === "-") {
        hasNegation2 = true;
      }
      var charsToRemove = hasNegation2 ? 1 : 0;
      if (hasDoubleNegation) {
        charsToRemove = 2;
      }
      if (charsToRemove) {
        value2 = value2.substring(charsToRemove);
        start2 -= charsToRemove;
        end2 -= charsToRemove;
      }
      return { value: value2, start: start2, end: end2, hasNegation: hasNegation2 };
    };
    var toMetadata = stripNegation(value, start, end);
    var hasNegation = toMetadata.hasNegation;
    assign = toMetadata, value = assign.value, start = assign.start, end = assign.end;
    var ref$1 = stripNegation(changeMeta.lastValue, from.start, from.end);
    var fromStart = ref$1.start;
    var fromEnd = ref$1.end;
    var lastValue = ref$1.value;
    var updatedSuffixPart = value.substring(start, end);
    if (value.length && lastValue.length && (fromStart > lastValue.length - suffix.length || fromEnd < prefix.length) && !(updatedSuffixPart && suffix.startsWith(updatedSuffixPart))) {
      value = lastValue;
    }
    var startIndex = 0;
    if (value.startsWith(prefix)) {
      startIndex += prefix.length;
    } else if (start < prefix.length) {
      startIndex = start;
    }
    value = value.substring(startIndex);
    end -= startIndex;
    var endIndex = value.length;
    var suffixStartIndex = value.length - suffix.length;
    if (value.endsWith(suffix)) {
      endIndex = suffixStartIndex;
    } else if (end > suffixStartIndex) {
      endIndex = end;
    } else if (end > value.length - suffix.length) {
      endIndex = end;
    }
    value = value.substring(0, endIndex);
    value = handleNegation(hasNegation ? "-" + value : value, allowNegative);
    value = (value.match(getNumberRegex(decimalSeparator, true)) || []).join("");
    var firstIndex = value.indexOf(decimalSeparator);
    value = value.replace(new RegExp(escapeRegExp(decimalSeparator), "g"), function(match, index3) {
      return index3 === firstIndex ? "." : "";
    });
    var ref$2 = splitDecimal(value, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation;
    if (to.end - to.start < from.end - from.start && beforeDecimal === "" && isBeforeDecimalSeparator && !parseFloat(afterDecimal)) {
      value = addNegation ? "-" : "";
    }
    return value;
  }
  function getCaretBoundary(formattedValue, props) {
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var suffix = props.suffix;
    if (suffix === void 0) suffix = "";
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
      return true;
    });
    var hasNegation = formattedValue[0] === "-";
    boundaryAry.fill(false, 0, prefix.length + (hasNegation ? 1 : 0));
    var valLn = formattedValue.length;
    boundaryAry.fill(false, valLn - suffix.length + 1, valLn + 1);
    return boundaryAry;
  }
  function validateAndUpdateProps(props) {
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var allowNegative = props.allowNegative;
    if (allowNegative === void 0) allowNegative = true;
    if (thousandSeparator === decimalSeparator) {
      throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + thousandSeparator + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + decimalSeparator + " (default value for decimalSeparator is .)\n     ");
    }
    if (prefix.startsWith("-") && allowNegative) {
      console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + prefix + "\n      allowNegative: " + allowNegative + "\n    ");
      allowNegative = false;
    }
    return Object.assign(Object.assign({}, props), { allowNegative });
  }
  function useNumericFormat(props) {
    props = validateAndUpdateProps(props);
    var _decimalSeparator = props.decimalSeparator;
    var _allowedDecimalSeparators = props.allowedDecimalSeparators;
    var thousandsGroupStyle = props.thousandsGroupStyle;
    var suffix = props.suffix;
    var allowNegative = props.allowNegative;
    var allowLeadingZeros = props.allowLeadingZeros;
    var onKeyDown = props.onKeyDown;
    if (onKeyDown === void 0) onKeyDown = noop3;
    var onBlur = props.onBlur;
    if (onBlur === void 0) onBlur = noop3;
    var thousandSeparator = props.thousandSeparator;
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var defaultValue = props.defaultValue;
    var value = props.value;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var restProps = __rest(props, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]);
    var ref = getSeparators(props);
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var _format = function(numStr) {
      return format(numStr, props);
    };
    var _removeFormatting = function(inputValue, changeMeta) {
      return removeFormatting(inputValue, changeMeta, props);
    };
    var _value = isNil(value) ? defaultValue : value;
    var _valueIsNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : isNumericString(_value, prefix, suffix);
    if (!isNil(value)) {
      _valueIsNumericString = _valueIsNumericString || typeof value === "number";
    } else if (!isNil(defaultValue)) {
      _valueIsNumericString = _valueIsNumericString || typeof defaultValue === "number";
    }
    var roundIncomingValueToPrecision = function(value2) {
      if (isNotValidValue(value2)) {
        return value2;
      }
      if (typeof value2 === "number") {
        value2 = toNumericString(value2);
      }
      if (_valueIsNumericString && typeof decimalScale === "number") {
        return roundToPrecision(value2, decimalScale, Boolean(fixedDecimalScale));
      }
      return value2;
    };
    var ref$1 = useInternalValues(roundIncomingValueToPrecision(value), roundIncomingValueToPrecision(defaultValue), Boolean(_valueIsNumericString), _format, _removeFormatting, onValueChange);
    var ref$1_0 = ref$1[0];
    var numAsString = ref$1_0.numAsString;
    var formattedValue = ref$1_0.formattedValue;
    var _onValueChange = ref$1[1];
    var _onKeyDown = function(e8) {
      var el = e8.target;
      var key = e8.key;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value2 = el.value;
      if (value2 === void 0) value2 = "";
      if ((key === "Backspace" || key === "Delete") && selectionEnd < prefix.length) {
        e8.preventDefault();
        return;
      }
      if (selectionStart !== selectionEnd) {
        onKeyDown(e8);
        return;
      }
      if (key === "Backspace" && value2[0] === "-" && selectionStart === prefix.length + 1 && allowNegative) {
        setCaretPosition(el, 1);
      }
      if (decimalScale && fixedDecimalScale) {
        if (key === "Backspace" && value2[selectionStart - 1] === decimalSeparator) {
          setCaretPosition(el, selectionStart - 1);
          e8.preventDefault();
        } else if (key === "Delete" && value2[selectionStart] === decimalSeparator) {
          e8.preventDefault();
        }
      }
      if ((allowedDecimalSeparators === null || allowedDecimalSeparators === void 0 ? void 0 : allowedDecimalSeparators.includes(key)) && value2[selectionStart] === decimalSeparator) {
        setCaretPosition(el, selectionStart + 1);
      }
      var _thousandSeparator = thousandSeparator === true ? "," : thousandSeparator;
      if (key === "Backspace" && value2[selectionStart - 1] === _thousandSeparator) {
        setCaretPosition(el, selectionStart - 1);
      }
      if (key === "Delete" && value2[selectionStart] === _thousandSeparator) {
        setCaretPosition(el, selectionStart + 1);
      }
      onKeyDown(e8);
    };
    var _onBlur = function(e8) {
      var _value2 = numAsString;
      if (!_value2.match(/\d/g)) {
        _value2 = "";
      }
      if (!allowLeadingZeros) {
        _value2 = fixLeadingZero(_value2);
      }
      if (fixedDecimalScale && decimalScale) {
        _value2 = roundToPrecision(_value2, decimalScale, fixedDecimalScale);
      }
      if (_value2 !== numAsString) {
        var formattedValue2 = format(_value2, props);
        _onValueChange({
          formattedValue: formattedValue2,
          value: _value2,
          floatValue: parseFloat(_value2)
        }, {
          event: e8,
          source: SourceType.event
        });
      }
      onBlur(e8);
    };
    var isValidInputCharacter = function(inputChar) {
      if (inputChar === decimalSeparator) {
        return true;
      }
      return charIsNumber(inputChar);
    };
    var isCharacterSame = function(ref2) {
      var currentValue = ref2.currentValue;
      var lastValue = ref2.lastValue;
      var formattedValue2 = ref2.formattedValue;
      var currentValueIndex = ref2.currentValueIndex;
      var formattedValueIndex = ref2.formattedValueIndex;
      var curChar = currentValue[currentValueIndex];
      var newChar = formattedValue2[formattedValueIndex];
      var typedRange = findChangeRange(lastValue, currentValue);
      var to = typedRange.to;
      var getDecimalSeparatorIndex = function(value2) {
        return _removeFormatting(value2).indexOf(".") + prefix.length;
      };
      if (value === 0 && fixedDecimalScale && decimalScale && currentValue[to.start] === decimalSeparator && getDecimalSeparatorIndex(currentValue) < currentValueIndex && getDecimalSeparatorIndex(formattedValue2) > formattedValueIndex) {
        return false;
      }
      if (currentValueIndex >= to.start && currentValueIndex < to.end && allowedDecimalSeparators && allowedDecimalSeparators.includes(curChar) && newChar === decimalSeparator) {
        return true;
      }
      return curChar === newChar;
    };
    return Object.assign(Object.assign({}, restProps), {
      value: formattedValue,
      valueIsNumericString: false,
      isValidInputCharacter,
      isCharacterSame,
      onValueChange: _onValueChange,
      format: _format,
      removeFormatting: _removeFormatting,
      getCaretBoundary: function(formattedValue2) {
        return getCaretBoundary(formattedValue2, props);
      },
      onKeyDown: _onKeyDown,
      onBlur: _onBlur
    });
  }
  function NumericFormat(props) {
    var numericFormatProps = useNumericFormat(props);
    return xn.createElement(NumberFormatBase, Object.assign({}, numericFormatProps));
  }

  // src/use-calculator.ts
  init_hooks_module();

  // node_modules/fuse.js/dist/fuse.mjs
  function isArray(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
  }
  var INFINITY = 1 / 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
  }
  function isObject(value) {
    return typeof value === "object";
  }
  function isObjectLike(value) {
    return isObject(value) && value !== null;
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }
  function getTag(value) {
    return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
  }
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => "Invalid value for key ".concat(key);
  var PATTERN_LENGTH_TOO_LARGE = (max2) => "Pattern length exceeds max of ".concat(max2, ".");
  var MISSING_KEY_PROPERTY = (name) => "Missing ".concat(name, " property in key");
  var INVALID_KEY_WEIGHT_VALUE = (key) => "Property 'weight' in key '".concat(key, "' must be a positive integer");
  var hasOwn = Object.prototype.hasOwnProperty;
  var KeyStore = class {
    constructor(keys) {
      this._keys = [];
      this._keyMap = {};
      let totalWeight = 0;
      keys.forEach((key) => {
        let obj = createKey(key);
        this._keys.push(obj);
        this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      });
      this._keys.forEach((key) => {
        key.weight /= totalWeight;
      });
    }
    get(keyId) {
      return this._keyMap[keyId];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  };
  function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray(key)) {
      src = key;
      path = createKeyPath(key);
      id = createKeyId(key);
    } else {
      if (!hasOwn.call(key, "name")) {
        throw new Error(MISSING_KEY_PROPERTY("name"));
      }
      const name = key.name;
      src = name;
      if (hasOwn.call(key, "weight")) {
        weight = key.weight;
        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
      }
      path = createKeyPath(name);
      id = createKeyId(name);
      getFn = key.getFn;
    }
    return { path, id, weight, src, getFn };
  }
  function createKeyPath(key) {
    return isArray(key) ? key : key.split(".");
  }
  function createKeyId(key) {
    return isArray(key) ? key.join(".") : key;
  }
  function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj2, path2, index3) => {
      if (!isDefined(obj2)) {
        return;
      }
      if (!path2[index3]) {
        list.push(obj2);
      } else {
        let key = path2[index3];
        const value = obj2[key];
        if (!isDefined(value)) {
          return;
        }
        if (index3 === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
          list.push(toString(value));
        } else if (isArray(value)) {
          arr = true;
          for (let i9 = 0, len = value.length; i9 < len; i9 += 1) {
            deepGet(value[i9], path2, index3 + 1);
          }
        } else if (path2.length) {
          deepGet(value, path2, index3 + 1);
        }
      }
    };
    deepGet(obj, isString(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
  }
  var MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
  };
  var BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When `true`, the algorithm will ignore diacritics (accents) in comparisons
    ignoreDiacritics: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: (a15, b7) => a15.score === b7.score ? a15.idx < b7.idx ? -1 : 1 : a15.score < b7.score ? -1 : 1
  };
  var FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
  };
  var AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
  };
  var Config = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
  var SPACE = /[^ ]+/g;
  function norm(weight = 1, mantissa = 3) {
    const cache = /* @__PURE__ */ new Map();
    const m8 = Math.pow(10, mantissa);
    return {
      get(value) {
        const numTokens = value.match(SPACE).length;
        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }
        const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
        const n9 = parseFloat(Math.round(norm2 * m8) / m8);
        cache.set(numTokens, n9);
        return n9;
      },
      clear() {
        cache.clear();
      }
    };
  }
  var FuseIndex = class {
    constructor({
      getFn = Config.getFn,
      fieldNormWeight = Config.fieldNormWeight
    } = {}) {
      this.norm = norm(fieldNormWeight, 3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setIndexRecords();
    }
    setSources(docs = []) {
      this.docs = docs;
    }
    setIndexRecords(records = []) {
      this.records = records;
    }
    setKeys(keys = []) {
      this.keys = keys;
      this._keysMap = {};
      keys.forEach((key, idx) => {
        this._keysMap[key.id] = idx;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) {
        return;
      }
      this.isCreated = true;
      if (isString(this.docs[0])) {
        this.docs.forEach((doc, docIndex) => {
          this._addString(doc, docIndex);
        });
      } else {
        this.docs.forEach((doc, docIndex) => {
          this._addObject(doc, docIndex);
        });
      }
      this.norm.clear();
    }
    // Adds a doc to the end of the index
    add(doc) {
      const idx = this.size();
      if (isString(doc)) {
        this._addString(doc, idx);
      } else {
        this._addObject(doc, idx);
      }
    }
    // Removes the doc at the specified index of the index
    removeAt(idx) {
      this.records.splice(idx, 1);
      for (let i9 = idx, len = this.size(); i9 < len; i9 += 1) {
        this.records[i9].i -= 1;
      }
    }
    getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
    size() {
      return this.records.length;
    }
    _addString(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return;
      }
      let record = {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
      this.records.push(record);
    }
    _addObject(doc, docIndex) {
      let record = { i: docIndex, $: {} };
      this.keys.forEach((key, keyIndex) => {
        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
        if (!isDefined(value)) {
          return;
        }
        if (isArray(value)) {
          let subRecords = [];
          const stack = [{ nestedArrIndex: -1, value }];
          while (stack.length) {
            const { nestedArrIndex, value: value2 } = stack.pop();
            if (!isDefined(value2)) {
              continue;
            }
            if (isString(value2) && !isBlank(value2)) {
              let subRecord = {
                v: value2,
                i: nestedArrIndex,
                n: this.norm.get(value2)
              };
              subRecords.push(subRecord);
            } else if (isArray(value2)) {
              value2.forEach((item, k7) => {
                stack.push({
                  nestedArrIndex: k7,
                  value: item
                });
              });
            } else ;
          }
          record.$[keyIndex] = subRecords;
        } else if (isString(value) && !isBlank(value)) {
          let subRecord = {
            v: value,
            n: this.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      });
      this.records.push(record);
    }
    toJSON() {
      return {
        keys: this.keys,
        records: this.records
      };
    }
  };
  function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const { keys, records } = data;
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
  }
  function computeScore$1(pattern, {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) {
      return accuracy;
    }
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
      return proximity ? 1 : accuracy;
    }
    return accuracy + proximity / distance;
  }
  function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i9 = 0;
    for (let len = matchmask.length; i9 < len; i9 += 1) {
      let match = matchmask[i9];
      if (match && start === -1) {
        start = i9;
      } else if (!match && start !== -1) {
        end = i9 - 1;
        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchmask[i9 - 1] && i9 - start >= minMatchCharLength) {
      indices.push([start, i9 - 1]);
    }
    return indices;
  }
  var MAX_BITS = 32;
  function search(text, pattern, patternAlphabet, {
    location: location2 = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }
    const patternLen = pattern.length;
    const textLen = text.length;
    const expectedLocation = Math.max(0, Math.min(location2, textLen));
    let currentThreshold = threshold;
    let bestLocation = expectedLocation;
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    const matchMask = computeMatches ? Array(textLen) : [];
    let index3;
    while ((index3 = text.indexOf(pattern, bestLocation)) > -1) {
      let score = computeScore$1(pattern, {
        currentLocation: index3,
        expectedLocation,
        distance,
        ignoreLocation
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index3 + patternLen;
      if (computeMatches) {
        let i9 = 0;
        while (i9 < patternLen) {
          matchMask[index3 + i9] = 1;
          i9 += 1;
        }
      }
    }
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for (let i9 = 0; i9 < patternLen; i9 += 1) {
      let binMin = 0;
      let binMid = binMax;
      while (binMin < binMid) {
        const score2 = computeScore$1(pattern, {
          errors: i9,
          currentLocation: expectedLocation + binMid,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }
      binMax = binMid;
      let start = Math.max(1, expectedLocation - binMid + 1);
      let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
      let bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << i9) - 1;
      for (let j10 = finish; j10 >= start; j10 -= 1) {
        let currentLocation = j10 - 1;
        let charMatch = patternAlphabet[text.charAt(currentLocation)];
        if (computeMatches) {
          matchMask[currentLocation] = +!!charMatch;
        }
        bitArr[j10] = (bitArr[j10 + 1] << 1 | 1) & charMatch;
        if (i9) {
          bitArr[j10] |= (lastBitArr[j10 + 1] | lastBitArr[j10]) << 1 | 1 | lastBitArr[j10 + 1];
        }
        if (bitArr[j10] & mask) {
          finalScore = computeScore$1(pattern, {
            errors: i9,
            currentLocation,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (finalScore <= currentThreshold) {
            currentThreshold = finalScore;
            bestLocation = currentLocation;
            if (bestLocation <= expectedLocation) {
              break;
            }
            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      }
      const score = computeScore$1(pattern, {
        errors: i9 + 1,
        currentLocation: expectedLocation,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score > currentThreshold) {
        break;
      }
      lastBitArr = bitArr;
    }
    const result = {
      isMatch: bestLocation >= 0,
      // Count exact matches (those with a score of 0) to be "almost" exact
      score: Math.max(1e-3, finalScore)
    };
    if (computeMatches) {
      const indices = convertMaskToIndices(matchMask, minMatchCharLength);
      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }
    return result;
  }
  function createPatternAlphabet(pattern) {
    let mask = {};
    for (let i9 = 0, len = pattern.length; i9 < len; i9 += 1) {
      const char = pattern.charAt(i9);
      mask[char] = (mask[char] || 0) | 1 << len - i9 - 1;
    }
    return mask;
  }
  var stripDiacritics = String.prototype.normalize ? ((str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((str) => str);
  var BitapSearch = class {
    constructor(pattern, {
      location: location2 = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      this.options = {
        location: location2,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreDiacritics,
        ignoreLocation
      };
      pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
      this.pattern = pattern;
      this.chunks = [];
      if (!this.pattern.length) {
        return;
      }
      const addChunk = (pattern2, startIndex) => {
        this.chunks.push({
          pattern: pattern2,
          alphabet: createPatternAlphabet(pattern2),
          startIndex
        });
      };
      const len = this.pattern.length;
      if (len > MAX_BITS) {
        let i9 = 0;
        const remainder = len % MAX_BITS;
        const end = len - remainder;
        while (i9 < end) {
          addChunk(this.pattern.substr(i9, MAX_BITS), i9);
          i9 += MAX_BITS;
        }
        if (remainder) {
          const startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }
    searchIn(text) {
      const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      text = ignoreDiacritics ? stripDiacritics(text) : text;
      if (this.pattern === text) {
        let result2 = {
          isMatch: true,
          score: 0
        };
        if (includeMatches) {
          result2.indices = [[0, text.length - 1]];
        }
        return result2;
      }
      const {
        location: location2,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        ignoreLocation
      } = this.options;
      let allIndices = [];
      let totalScore = 0;
      let hasMatches = false;
      this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
        const { isMatch, score, indices } = search(text, pattern, alphabet, {
          location: location2 + startIndex,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          includeMatches,
          ignoreLocation
        });
        if (isMatch) {
          hasMatches = true;
        }
        totalScore += score;
        if (isMatch && indices) {
          allIndices = [...allIndices, ...indices];
        }
      });
      let result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };
      if (hasMatches && includeMatches) {
        result.indices = allIndices;
      }
      return result;
    }
  };
  var BaseMatch = class {
    constructor(pattern) {
      this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
      return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
      return getMatch(pattern, this.singleRegex);
    }
    search() {
    }
  };
  function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }
  var ExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(text) {
      const isMatch = text === this.pattern;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InverseExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(text) {
      const index3 = text.indexOf(this.pattern);
      const isMatch = index3 === -1;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var PrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(text) {
      const isMatch = text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InversePrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(text) {
      const isMatch = !text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var SuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(text) {
      const isMatch = text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [text.length - this.pattern.length, text.length - 1]
      };
    }
  };
  var InverseSuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(text) {
      const isMatch = !text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var FuzzyMatch = class extends BaseMatch {
    constructor(pattern, {
      location: location2 = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      super(pattern);
      this._bitapSearch = new BitapSearch(pattern, {
        location: location2,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreDiacritics,
        ignoreLocation
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(text) {
      return this._bitapSearch.searchIn(text);
    }
  };
  var IncludeMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(text) {
      let location2 = 0;
      let index3;
      const indices = [];
      const patternLen = this.pattern.length;
      while ((index3 = text.indexOf(this.pattern, location2)) > -1) {
        location2 = index3 + patternLen;
        indices.push([index3, location2 - 1]);
      }
      const isMatch = !!indices.length;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices
      };
    }
  };
  var searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
  ];
  var searchersLen = searchers.length;
  var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  var OR_TOKEN = "|";
  function parseQuery(pattern, options = {}) {
    return pattern.split(OR_TOKEN).map((item) => {
      let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
      let results = [];
      for (let i9 = 0, len = query.length; i9 < len; i9 += 1) {
        const queryItem = query[i9];
        let found = false;
        let idx = -1;
        while (!found && ++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isMultiMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            found = true;
          }
        }
        if (found) {
          continue;
        }
        idx = -1;
        while (++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isSingleMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            break;
          }
        }
      }
      return results;
    });
  }
  var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
  var ExtendedSearch = class {
    constructor(pattern, {
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location: location2 = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}) {
      this.query = null;
      this.options = {
        isCaseSensitive,
        ignoreDiacritics,
        includeMatches,
        minMatchCharLength,
        findAllMatches,
        ignoreLocation,
        location: location2,
        threshold,
        distance
      };
      pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
      this.pattern = pattern;
      this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_7, options) {
      return options.useExtendedSearch;
    }
    searchIn(text) {
      const query = this.query;
      if (!query) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      text = ignoreDiacritics ? stripDiacritics(text) : text;
      let numMatches = 0;
      let allIndices = [];
      let totalScore = 0;
      for (let i9 = 0, qLen = query.length; i9 < qLen; i9 += 1) {
        const searchers2 = query[i9];
        allIndices.length = 0;
        numMatches = 0;
        for (let j10 = 0, pLen = searchers2.length; j10 < pLen; j10 += 1) {
          const searcher = searchers2[j10];
          const { isMatch, indices, score } = searcher.search(text);
          if (isMatch) {
            numMatches += 1;
            totalScore += score;
            if (includeMatches) {
              const type = searcher.constructor.type;
              if (MultiMatchSet.has(type)) {
                allIndices = [...allIndices, ...indices];
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            break;
          }
        }
        if (numMatches) {
          let result = {
            isMatch: true,
            score: totalScore / numMatches
          };
          if (includeMatches) {
            result.indices = allIndices;
          }
          return result;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  var registeredSearchers = [];
  function register(...args) {
    registeredSearchers.push(...args);
  }
  function createSearcher(pattern, options) {
    for (let i9 = 0, len = registeredSearchers.length; i9 < len; i9 += 1) {
      let searcherClass = registeredSearchers[i9];
      if (searcherClass.condition(pattern, options)) {
        return new searcherClass(pattern, options);
      }
    }
    return new BitapSearch(pattern, options);
  }
  var LogicalOperator = {
    AND: "$and",
    OR: "$or"
  };
  var KeyType = {
    PATH: "$path",
    PATTERN: "$val"
  };
  var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  var isPath = (query) => !!query[KeyType.PATH];
  var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
  var convertToExplicit = (query) => ({
    [LogicalOperator.AND]: Object.keys(query).map((key) => ({
      [key]: query[key]
    }))
  });
  function parse(query, options, { auto = true } = {}) {
    const next = (query2) => {
      let keys = Object.keys(query2);
      const isQueryPath = isPath(query2);
      if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
        return next(convertToExplicit(query2));
      }
      if (isLeaf(query2)) {
        const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
        const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
        if (!isString(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }
        const obj = {
          keyId: createKeyId(key),
          pattern
        };
        if (auto) {
          obj.searcher = createSearcher(pattern, options);
        }
        return obj;
      }
      let node = {
        children: [],
        operator: keys[0]
      };
      keys.forEach((key) => {
        const value = query2[key];
        if (isArray(value)) {
          value.forEach((item) => {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };
    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }
    return next(query);
  }
  function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result) => {
      let totalScore = 1;
      result.matches.forEach(({ key, norm: norm2, score }) => {
        const weight = key ? key.weight : null;
        totalScore *= Math.pow(
          score === 0 && weight ? Number.EPSILON : score,
          (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
        );
      });
      result.score = totalScore;
    });
  }
  function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) {
      return;
    }
    matches.forEach((match) => {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }
      const { indices, value } = match;
      let obj = {
        indices,
        value
      };
      if (match.key) {
        obj.key = match.key.src;
      }
      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }
      data.matches.push(obj);
    });
  }
  function transformScore(result, data) {
    data.score = result.score;
  }
  function format2(results, docs, {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}) {
    const transformers = [];
    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);
    return results.map((result) => {
      const { idx } = result;
      const data = {
        item: docs[idx],
        refIndex: idx
      };
      if (transformers.length) {
        transformers.forEach((transformer) => {
          transformer(result, data);
        });
      }
      return data;
    });
  }
  var Fuse = class {
    constructor(docs, options = {}, index3) {
      this.options = __spreadValues(__spreadValues({}, Config), options);
      if (this.options.useExtendedSearch && false) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }
      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index3);
    }
    setCollection(docs, index3) {
      this._docs = docs;
      if (index3 && !(index3 instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }
      this._myIndex = index3 || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
    }
    add(doc) {
      if (!isDefined(doc)) {
        return;
      }
      this._docs.push(doc);
      this._myIndex.add(doc);
    }
    remove(predicate = () => false) {
      const results = [];
      for (let i9 = 0, len = this._docs.length; i9 < len; i9 += 1) {
        const doc = this._docs[i9];
        if (predicate(doc, i9)) {
          this.removeAt(i9);
          i9 -= 1;
          len -= 1;
          results.push(doc);
        }
      }
      return results;
    }
    removeAt(idx) {
      this._docs.splice(idx, 1);
      this._myIndex.removeAt(idx);
    }
    getIndex() {
      return this._myIndex;
    }
    search(query, { limit = -1 } = {}) {
      const {
        includeMatches,
        includeScore,
        shouldSort,
        sortFn,
        ignoreFieldNorm
      } = this.options;
      let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore(results, { ignoreFieldNorm });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
      return format2(results, this._docs, {
        includeMatches,
        includeScore
      });
    }
    _searchStringList(query) {
      const searcher = createSearcher(query, this.options);
      const { records } = this._myIndex;
      const results = [];
      records.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          results.push({
            item: text,
            idx,
            matches: [{ score, value: text, norm: norm2, indices }]
          });
        }
      });
      return results;
    }
    _searchLogical(query) {
      const expression = parse(query, this.options);
      const evaluate2 = (node, item, idx) => {
        if (!node.children) {
          const { keyId, searcher } = node;
          const matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
          if (matches && matches.length) {
            return [
              {
                idx,
                item,
                matches
              }
            ];
          }
          return [];
        }
        const res = [];
        for (let i9 = 0, len = node.children.length; i9 < len; i9 += 1) {
          const child = node.children[i9];
          const result = evaluate2(child, item, idx);
          if (result.length) {
            res.push(...result);
          } else if (node.operator === LogicalOperator.AND) {
            return [];
          }
        }
        return res;
      };
      const records = this._myIndex.records;
      const resultMap = {};
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (isDefined(item)) {
          let expResults = evaluate2(expression, item, idx);
          if (expResults.length) {
            if (!resultMap[idx]) {
              resultMap[idx] = { idx, item, matches: [] };
              results.push(resultMap[idx]);
            }
            expResults.forEach(({ matches }) => {
              resultMap[idx].matches.push(...matches);
            });
          }
        }
      });
      return results;
    }
    _searchObjectList(query) {
      const searcher = createSearcher(query, this.options);
      const { keys, records } = this._myIndex;
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (!isDefined(item)) {
          return;
        }
        let matches = [];
        keys.forEach((key, keyIndex) => {
          matches.push(
            ...this._findMatches({
              key,
              value: item[keyIndex],
              searcher
            })
          );
        });
        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      });
      return results;
    }
    _findMatches({ key, value, searcher }) {
      if (!isDefined(value)) {
        return [];
      }
      let matches = [];
      if (isArray(value)) {
        value.forEach(({ v: text, i: idx, n: norm2 }) => {
          if (!isDefined(text)) {
            return;
          }
          const { isMatch, score, indices } = searcher.searchIn(text);
          if (isMatch) {
            matches.push({
              score,
              key,
              value: text,
              idx,
              norm: norm2,
              indices
            });
          }
        });
      } else {
        const { v: text, n: norm2 } = value;
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({ score, key, value: text, norm: norm2, indices });
        }
      }
      return matches;
    }
  };
  Fuse.version = "7.1.0";
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;
  {
    Fuse.parseQuery = parse;
  }
  {
    register(ExtendedSearch);
  }

  // src/properties.json
  var properties_default = [
    { "#": "11 ABBOTTSFORD RD (054-02-00)", $: 2445700 },
    { "#": "12 ABBOTTSFORD RD (053-16-00)", $: 3001800 },
    { "#": "19 ABBOTTSFORD RD (054-03-00)", $: 2151700 },
    { "#": "20 ABBOTTSFORD RD (053-15-00)", $: 232e4 },
    { "#": "25 ABBOTTSFORD RD (054-04-00)", $: 3043600 },
    { "#": "26 ABBOTTSFORD RD (053-14-00)", $: 2670800 },
    { "#": "29 ABBOTTSFORD RD (054-05-00)", $: 2497500 },
    { "#": "32 ABBOTTSFORD RD (053-13-00)", $: 3266200 },
    { "#": "33 ABBOTTSFORD RD (054-06-00)", $: 1958e3 },
    { "#": "40 ABBOTTSFORD RD (053-12-00)", $: 2439300 },
    { "#": "43 ABBOTTSFORD RD (054-07-00)", $: 3589300 },
    { "#": "46 ABBOTTSFORD RD (053-11-00)", $: 2614500 },
    { "#": "51 ABBOTTSFORD RD (054-08-00)", $: 2966200 },
    { "#": "70 ABBOTTSFORD RD (062-10-00.9)", $: 0 },
    { "#": "75 ABBOTTSFORD RD (057-14-00)", $: 2092800 },
    { "#": "87 ABBOTTSFORD RD (059-02-00.9)", $: 0 },
    { "#": "91 ABBOTTSFORD RD (059-03-01)", $: 2278400 },
    { "#": "101 ABBOTTSFORD RD (059-04-00.9)", $: 0 },
    { "#": "12 ACKERS AVE (269A-16-00)", $: 791900 },
    { "#": "12 ACKERS AVE (269A-16-00.9)", $: 3165300 },
    { "#": "22 ACKERS AVE (269A-15-00)", $: 2198200 },
    { "#": "27 ACKERS AVE (267-39-00)", $: 10479900 },
    { "#": "30 ACKERS AVE (269-11-00)", $: 2506600 },
    { "#": "33 ACKERS AVE (267-26-00)", $: 1518900 },
    { "#": "33 ACKERS AVE (267-26-00.9)", $: 1594800 },
    { "#": "36 ACKERS AVE (269-10-00)", $: 1790200 },
    { "#": "39 ACKERS AVE (267-26-05)", $: 1489500 },
    { "#": "41 ACKERS AVE (267-27-00.9)", $: 0 },
    { "#": "42 ACKERS AVE (269-09-00)", $: 1413400 },
    { "#": "43 ACKERS AVE (267-28-00)", $: 789400 },
    { "#": "46 ACKERS AVE (269-07-01)", $: 858500 },
    { "#": "46 ACKERS AVE (269-07-01.9)", $: 1546200 },
    { "#": "48 ACKERS AVE (269-07-00.9)", $: 0 },
    { "#": "49 ACKERS AVE (268-04-00)", $: 1658200 },
    { "#": "51 ACKERS AVE (268-05-00.9)", $: 0 },
    { "#": "52 ACKERS AVE (269-06-02)", $: 1596100 },
    { "#": "54 ACKERS AVE (269-02-03)", $: 1578300 },
    { "#": "57 ACKERS AVE (268-06-00.9)", $: 882e3 },
    { "#": "59 ACKERS AVE (268-07-00.9)", $: 0 },
    { "#": "8 ACKERS TER (267-26-01)", $: 1257600 },
    { "#": "12 ACKERS TER (267-26-02)", $: 1115800 },
    { "#": "16 ACKERS TER (267-26-03)", $: 984100 },
    { "#": "20 ACKERS TER (267-26-04)", $: 1190800 },
    { "#": "2 ACRON RD (315-01-00)", $: 1425200 },
    { "#": "7 ACRON RD (314-15-00)", $: 2272800 },
    { "#": "9 ACRON RD (314-16-00)", $: 1376200 },
    { "#": "12 ACRON RD (315-11-00)", $: 1565900 },
    { "#": "15 ACRON RD (314-17-00)", $: 1521500 },
    { "#": "16 ACRON RD (315-10-00.9)", $: 0 },
    { "#": "18 ACRON RD (315-09-00)", $: 2322400 },
    { "#": "5 ADAMS ST (028-02-00.9)", $: 0 },
    { "#": "9 ADAMS ST (028-03-00)", $: 1398900 },
    { "#": "12 ADAMS ST (029-13-00)", $: 1776100 },
    { "#": "15 ADAMS ST (028-04-00)", $: 1627900 },
    { "#": "16 ADAMS ST (029-12-00)", $: 1992300 },
    { "#": "19 ADAMS ST (028-05-00)", $: 1557500 },
    { "#": "20 ADAMS ST (029-11-00)", $: 2549300 },
    { "#": "24 ADAMS ST (029-10-00)", $: 1656200 },
    { "#": "25 ADAMS ST (028-06-00)", $: 1866300 },
    { "#": "28 ADAMS ST (029-09-00)", $: 1880400 },
    { "#": "29 ADAMS ST (028-07-00)", $: 1920100 },
    { "#": "35 ADAMS ST (028-08-00)", $: 1924800 },
    { "#": "39 ADAMS ST (028-09-00)", $: 1959e3 },
    { "#": "0 ADDINGTON RD (219-35-01)", $: 243400 },
    { "#": "0 ADDINGTON RD (220-03-00.9)", $: 0 },
    { "#": "1 ADDINGTON RD (220-01-00.9)", $: 0 },
    { "#": "4 ADDINGTON RD (219-37-00)", $: 2190100 },
    { "#": "7 ADDINGTON RD (220-02-00)", $: 2107100 },
    { "#": "16 ADDINGTON RD (219-36-00.9)", $: 0 },
    { "#": "19 ADDINGTON RD (220-04-00)", $: 2194800 },
    { "#": "21 ADDINGTON RD (220-05-00)", $: 2378400 },
    { "#": "22 ADDINGTON RD (219-34-00.9)", $: 0 },
    { "#": "24 ADDINGTON RD (219-33-00.9)", $: 0 },
    { "#": "28 ADDINGTON RD (219-32-00.9)", $: 0 },
    { "#": "29 ADDINGTON RD (220-06-10.9)", $: 0 },
    { "#": "30 ADDINGTON RD (219-31-00)", $: 2253100 },
    { "#": "35 ADDINGTON RD (220-17-00)", $: 2281100 },
    { "#": "36 ADDINGTON RD (219-30-00)", $: 2233300 },
    { "#": "37 ADDINGTON RD (220-18-00)", $: 2687700 },
    { "#": "39 ADDINGTON RD (220-19-00)", $: 2567300 },
    { "#": "41 ADDINGTON RD (220-20-00.9)", $: 0 },
    { "#": "42 ADDINGTON RD (219-29-00.9)", $: 0 },
    { "#": "43 ADDINGTON RD (220-21-00)", $: 2474900 },
    { "#": "43 ADDINGTON RD (220-21-00.9)", $: 2474900 },
    { "#": "45 ADDINGTON RD (220-22-00.9)", $: 0 },
    { "#": "47 ADDINGTON RD (220-23-00)", $: 2918100 },
    { "#": "48 ADDINGTON RD (219-28-00)", $: 1852e3 },
    { "#": "49 ADDINGTON RD (220-24-00)", $: 2485600 },
    { "#": "51 ADDINGTON RD (220-25-00)", $: 2122900 },
    { "#": "51 ADDINGTON RD (220-25-00.9)", $: 2729400 },
    { "#": "53 ADDINGTON RD (220-26-00)", $: 2726100 },
    { "#": "55 ADDINGTON RD (220-27-00)", $: 3906400 },
    { "#": "55 ADDINGTON RD (220-27-00.9)", $: 3906400 },
    { "#": "56 ADDINGTON RD (219-27-00)", $: 1925500 },
    { "#": "57 ADDINGTON RD (220-28-00.9)", $: 0 },
    { "#": "59 ADDINGTON RD (220-29-00)", $: 2877500 },
    { "#": "59 ADDINGTON RD (220-29-00.9)", $: 0 },
    { "#": "63 ADDINGTON RD (220-30-00)", $: 2290800 },
    { "#": "66 ADDINGTON RD (219-26-00)", $: 2719e3 },
    { "#": "71 ADDINGTON RD (220-31-00)", $: 2778800 },
    { "#": "72 ADDINGTON RD (219-25-00)", $: 2688200 },
    { "#": "77 ADDINGTON RD (220-32-00.9)", $: 0 },
    { "#": "78 ADDINGTON RD (219-24-00)", $: 2028100 },
    { "#": "86 ADDINGTON RD (219-23-00)", $: 2621e3 },
    { "#": "90 ADDINGTON RD (219-22-00.9)", $: 0 },
    { "#": "94 ADDINGTON RD (219-21-00)", $: 2252500 },
    { "#": "98 ADDINGTON RD (219-20-00)", $: 2573700 },
    { "#": "99 ADDINGTON RD (220-33-00)", $: 4480800 },
    { "#": "102 ADDINGTON RD (219-19-00.9)", $: 0 },
    { "#": "106 ADDINGTON RD (219-18-00.9)", $: 0 },
    { "#": "110 ADDINGTON RD (219-17-00)", $: 123e4 },
    { "#": "110 ADDINGTON RD (219-17-00.9)", $: 2669400 },
    { "#": "114 ADDINGTON RD (219-16-00.9)", $: 0 },
    { "#": "118 ADDINGTON RD (219-15-00.9)", $: 0 },
    { "#": "122 ADDINGTON RD (219-14-00.9)", $: 0 },
    { "#": "125 ADDINGTON RD (220-38-00)", $: 2863300 },
    { "#": "128 ADDINGTON RD (219-13-00)", $: 2280900 },
    { "#": "129 ADDINGTON RD (220-39-00)", $: 2206900 },
    { "#": "135 ADDINGTON RD (220-40-00)", $: 2769e3 },
    { "#": "0 ALBERTA RD (395-11-01)", $: 15700 },
    { "#": "8 ALBERTA RD (374-18-00)", $: 1698600 },
    { "#": "15 ALBERTA RD (399-48-00)", $: 2045400 },
    { "#": "16 ALBERTA RD (395-29-00)", $: 2096700 },
    { "#": "24 ALBERTA RD (395-28-00)", $: 1708800 },
    { "#": "25 ALBERTA RD (399-49-00)", $: 1437200 },
    { "#": "31 ALBERTA RD (399-50-00)", $: 1781200 },
    { "#": "32 ALBERTA RD (395-27-01)", $: 2208300 },
    { "#": "37 ALBERTA RD (399-51-00)", $: 1933600 },
    { "#": "38 ALBERTA RD (395-27-00)", $: 2103100 },
    { "#": "45 ALBERTA RD (399-52-00)", $: 1556800 },
    { "#": "46 ALBERTA RD (395-26-00)", $: 2315900 },
    { "#": "50 ALBERTA RD (395-13-01)", $: 15500 },
    { "#": "51 ALBERTA RD (399-53-00)", $: 1543200 },
    { "#": "52 ALBERTA RD (395-25-00)", $: 1845800 },
    { "#": "57 ALBERTA RD (399-54-00)", $: 1215e3 },
    { "#": "60 ALBERTA RD (395-24-00)", $: 1431800 },
    { "#": "65 ALBERTA RD (399-55-00)", $: 1681e3 },
    { "#": "68 ALBERTA RD (395-23-00)", $: 2051700 },
    { "#": "71 ALBERTA RD (399-56-00)", $: 62e4 },
    { "#": "74 ALBERTA RD (395-22-00)", $: 1013600 },
    { "#": "79 ALBERTA RD (399-57-00)", $: 594500 },
    { "#": "84 ALBERTA RD (395-21-00)", $: 1296200 },
    { "#": "85 ALBERTA RD (399-58-00)", $: 1554800 },
    { "#": "93 ALBERTA RD (399-59-00)", $: 1469600 },
    { "#": "99 ALBERTA RD (399-60-00)", $: 1464300 },
    { "#": "107 ALBERTA RD (399-61-00)", $: 1731700 },
    { "#": "266 ALLANDALE RD (358-01-00)", $: 982400 },
    { "#": "278 ALLANDALE RD (359-01-00)", $: 1141400 },
    { "#": "294 ALLANDALE RD (359-13-14)", $: 1677300 },
    { "#": "302 ALLANDALE RD (359-12-00)", $: 1870700 },
    { "#": "306 ALLANDALE RD (359-11-00)", $: 1833600 },
    { "#": "318 ALLANDALE RD (363-30-31)", $: 1029700 },
    { "#": "28 ALLERTON ST (292-08-00)", $: 2943900 },
    { "#": "31 ALLERTON ST (295-02-00)", $: 2201200 },
    { "#": "32 ALLERTON ST (292-07-00)", $: 1994900 },
    { "#": "35 ALLERTON ST (295-03-00)", $: 3141700 },
    { "#": "36 ALLERTON ST (292-06-00)", $: 3260900 },
    { "#": "41 ALLERTON ST (295-04-00)", $: 2889200 },
    { "#": "43 ALLERTON ST (295-05-00)", $: 2063100 },
    { "#": "44 ALLERTON ST (292-05-00)", $: 1664300 },
    { "#": "48 ALLERTON ST (292-04-00)", $: 2128900 },
    { "#": "52 ALLERTON ST (292-03-00)", $: 2059e3 },
    { "#": "58 ALLERTON ST (292-02-00)", $: 2294500 },
    { "#": "4 ALTON CT (155-47-00.9)", $: 0 },
    { "#": "5 ALTON CT (155-40-00.9)", $: 0 },
    { "#": "6 ALTON CT (155-46-00)", $: 1446900 },
    { "#": "6 ALTON CT (155-46-00.9)", $: 2449200 },
    { "#": "10 ALTON CT (155-45-00)", $: 2735600 },
    { "#": "14 ALTON CT (155-44-00.9)", $: 0 },
    { "#": "18 ALTON CT (155-43-00)", $: 1437300 },
    { "#": "18 ALTON CT (155-43-00.9)", $: 1437300 },
    { "#": "21 ALTON CT (155-41-00)", $: 2815700 },
    { "#": "22 ALTON CT (155-42-01.9)", $: 0 },
    { "#": "25 ALTON CT (155-41-01)", $: 1464900 },
    { "#": "25 ALTON CT (155-41-01.9)", $: 3338600 },
    { "#": "26 ALTON CT (155-42-00.9)", $: 0 },
    { "#": "3 ALTON PL (155-32-00)", $: 2801800 },
    { "#": "8 ALTON PL (156-11-01)", $: 2879600 },
    { "#": "9 ALTON PL (155-33-00.9)", $: 0 },
    { "#": "11 ALTON PL (155-34-00)", $: 5579400 },
    { "#": "12 ALTON PL (156-11-00)", $: 12702300 },
    { "#": "15 ALTON PL (155-35-00.9)", $: 0 },
    { "#": "17 ALTON PL (155-36-00)", $: 3044500 },
    { "#": "19 ALTON PL (155-37-00.9)", $: 0 },
    { "#": "24 ALTON PL (156-10-00.9)", $: 0 },
    { "#": "25 ALTON PL (155-38-00)", $: 4053500 },
    { "#": "27 ALTON PL (155-39-00)", $: 2435700 },
    { "#": "36 ALTON PL (156-09-00)", $: 2876800 },
    { "#": "42 ALTON PL (157-03-00)", $: 2172e3 },
    { "#": "47 ALTON PL (155-01-00.9)", $: 0 },
    { "#": "50 ALTON PL (157-01-02)", $: 29438600 },
    { "#": "1 ALWYNGTON RD (284-12-00)", $: 3057100 },
    { "#": "3 ALWYNGTON RD (284-11-00)", $: 3103700 },
    { "#": "4 ALWYNGTON RD (284-09-00)", $: 2767400 },
    { "#": "6 ALWYNGTON RD (284-10-00)", $: 7317100 },
    { "#": "14 AMORY ST (011-25-00)", $: 2514400 },
    { "#": "15 AMORY ST (010-05-00)", $: 38138500 },
    { "#": "20 AMORY ST (011-24-00)", $: 4631600 },
    { "#": "30 AMORY ST (011-23-00)", $: 2782500 },
    { "#": "36 AMORY ST (011-22-00)", $: 3743800 },
    { "#": "44 AMORY ST (011-21-00)", $: 4374700 },
    { "#": "50 AMORY ST (011-20-00)", $: 3344100 },
    { "#": "60 AMORY ST (011-19-00)", $: 3429300 },
    { "#": "64 AMORY ST (011-18-00)", $: 3412200 },
    { "#": "68 AMORY ST (011-17-00)", $: 3869200 },
    { "#": "74 AMORY ST (011-16-00)", $: 2683e3 },
    { "#": "120 AMORY ST (022-09-00.9)", $: 0 },
    { "#": "132 AMORY ST (022-07-00.9)", $: 0 },
    { "#": "155 AMORY ST (016-01-03)", $: 2839600 },
    { "#": "163 AMORY ST (017-05-00)", $: 8347600 },
    { "#": "5 ARLINGTON RD (416-24-00)", $: 1885500 },
    { "#": "8 ARLINGTON RD (412-01-00)", $: 1366400 },
    { "#": "11 ARLINGTON RD (416-23-00)", $: 2065100 },
    { "#": "16 ARLINGTON RD (412-02-00)", $: 1857200 },
    { "#": "17 ARLINGTON RD (416-22-00)", $: 1735900 },
    { "#": "23 ARLINGTON RD (416-21-00)", $: 1424200 },
    { "#": "24 ARLINGTON RD (412-03-00)", $: 2177500 },
    { "#": "31 ARLINGTON RD (416-20-00)", $: 1331700 },
    { "#": "32 ARLINGTON RD (412-04-00)", $: 923800 },
    { "#": "36 ARLINGTON RD (412-05-00)", $: 1448300 },
    { "#": "39 ARLINGTON RD (416-19-00)", $: 1696800 },
    { "#": "42 ARLINGTON RD (412-06-00)", $: 1866500 },
    { "#": "47 ARLINGTON RD (416-18-00)", $: 1665600 },
    { "#": "50 ARLINGTON RD (412-07-01)", $: 2619100 },
    { "#": "50 ARLINGTON RD (412-07-08)", $: 1351500 },
    { "#": "61 ARLINGTON RD (415-08-00)", $: 1827600 },
    { "#": "64 ARLINGTON RD (413-08-00)", $: 1764600 },
    { "#": "72 ARLINGTON RD (413-09-00)", $: 1452600 },
    { "#": "73 ARLINGTON RD (415-10-00)", $: 1886100 },
    { "#": "78 ARLINGTON RD (413-10-00)", $: 1750700 },
    { "#": "81 ARLINGTON RD (415-11-00)", $: 1267600 },
    { "#": "86 ARLINGTON RD (413-11-00)", $: 1532400 },
    { "#": "89 ARLINGTON RD (415-12-00)", $: 2783300 },
    { "#": "92 ARLINGTON RD (413-12-00)", $: 1967500 },
    { "#": "96 ARLINGTON RD (413-12-01)", $: 2077400 },
    { "#": "97 ARLINGTON RD (415-13-00)", $: 1620300 },
    { "#": "100 ARLINGTON RD (413-13-00)", $: 1671600 },
    { "#": "110 ARLINGTON RD (413-14-00)", $: 1606e3 },
    { "#": "115 ARLINGTON RD (416-05-06)", $: 2341300 },
    { "#": "118 ARLINGTON RD (413-15-00)", $: 1405100 },
    { "#": "124 ARLINGTON RD (413-16-00)", $: 1519800 },
    { "#": "125 ARLINGTON RD (416-04-00)", $: 1929700 },
    { "#": "132 ARLINGTON RD (413-17-00)", $: 1729600 },
    { "#": "135 ARLINGTON RD (416-02-03)", $: 950500 },
    { "#": "135 ARLINGTON RD (416-03-00)", $: 1998100 },
    { "#": "141 ARLINGTON RD (416-01-00)", $: 1494900 },
    { "#": "141 ARLINGTON RD (416-01-02)", $: 3095400 },
    { "#": "260 ARLINGTON RD (418-21-00)", $: 22825600 },
    { "#": "290 ARLINGTON RD (423-01-00)", $: 1027900 },
    { "#": "302 ARLINGTON RD (423-02-00)", $: 1798100 },
    { "#": "6 ASHEVILLE RD (382-14-00)", $: 938500 },
    { "#": "7 ASHEVILLE RD (385-18-00)", $: 1179200 },
    { "#": "10 ASHEVILLE RD (382-13-00)", $: 871e3 },
    { "#": "14 ASHEVILLE RD (382-12-00)", $: 1177500 },
    { "#": "25 ASHEVILLE RD (386-20-00)", $: 1842500 },
    { "#": "26 ASHEVILLE RD (383-13-00)", $: 1080600 },
    { "#": "33 ASHEVILLE RD (386-01-00)", $: 961600 },
    { "#": "45 ASHEVILLE RD (387-01-00)", $: 1132100 },
    { "#": "46 ASHEVILLE RD (384-12-00)", $: 1522800 },
    { "#": "15 ASPINWALL AVE (154-04-06.9)", $: 0 },
    { "#": "18 ASPINWALL AVE (155-13-00)", $: 1720800 },
    { "#": "23 ASPINWALL AVE (154-11-00)", $: 412e4 },
    { "#": "33 ASPINWALL AVE (154-08-00.9)", $: 0 },
    { "#": "39 ASPINWALL AVE (154-09-00)", $: 1614200 },
    { "#": "40 ASPINWALL AVE (155-10-11)", $: 2354700 },
    { "#": "46 ASPINWALL AVE (155-09-01)", $: 1839800 },
    { "#": "57 ASPINWALL AVE (153-09-00)", $: 1511900 },
    { "#": "58 ASPINWALL AVE (155-09-00)", $: 1859200 },
    { "#": "60 ASPINWALL AVE (155-08-00.9)", $: 0 },
    { "#": "64 ASPINWALL AVE (155-07-00.9)", $: 0 },
    { "#": "65 ASPINWALL AVE (153-10-00)", $: 1860100 },
    { "#": "71 ASPINWALL AVE (153-11-00)", $: 2053300 },
    { "#": "79 ASPINWALL AVE (153-12-00)", $: 2199100 },
    { "#": "89 ASPINWALL AVE (153-13-00)", $: 2061e3 },
    { "#": "97 ASPINWALL AVE (153-14-00)", $: 2078e3 },
    { "#": "104 ASPINWALL AVE (132-02-00)", $: 8732500 },
    { "#": "123 ASPINWALL AVE (153-17-00)", $: 2124200 },
    { "#": "130 ASPINWALL AVE (132-01-00)", $: 2852e3 },
    { "#": "135 ASPINWALL AVE (153-18-00)", $: 2156400 },
    { "#": "145 ASPINWALL AVE (152-10-00)", $: 2040200 },
    { "#": "150 ASPINWALL AVE (131-05-00)", $: 1191200 },
    { "#": "152 ASPINWALL AVE (131-04-00)", $: 2510400 },
    { "#": "155 ASPINWALL AVE (152-11-00)", $: 2187500 },
    { "#": "157 ASPINWALL AVE (152-12-00)", $: 2461100 },
    { "#": "159 ASPINWALL AVE (152-13-00)", $: 1945700 },
    { "#": "159 ASPINWALL AVE (152-13-00.9)", $: 1945700 },
    { "#": "160 ASPINWALL AVE (131-03-00.9)", $: 0 },
    { "#": "162 ASPINWALL AVE (131-02-00)", $: 2287400 },
    { "#": "165 ASPINWALL AVE (152-14-00)", $: 1660200 },
    { "#": "168 ASPINWALL AVE (131-01-00)", $: 1783900 },
    { "#": "172 ASPINWALL AVE (130-02-00.9)", $: 0 },
    { "#": "177 ASPINWALL AVE (144-14-00)", $: 1890100 },
    { "#": "179 ASPINWALL AVE (144-15-00)", $: 1899900 },
    { "#": "183 ASPINWALL AVE (144-16-00)", $: 2227400 },
    { "#": "184 ASPINWALL AVE (130-01-00)", $: 2255e3 },
    { "#": "189 ASPINWALL AVE (144-17-00)", $: 2494100 },
    { "#": "193 ASPINWALL AVE (144-18-00)", $: 1697200 },
    { "#": "194 ASPINWALL AVE (128-18-00)", $: 2822400 },
    { "#": "198 ASPINWALL AVE (128-17-00)", $: 1578100 },
    { "#": "199 ASPINWALL AVE (144-19-00)", $: 1742100 },
    { "#": "203 ASPINWALL AVE (144-20-00)", $: 1814100 },
    { "#": "204 ASPINWALL AVE (128-16-00)", $: 3039700 },
    { "#": "206 ASPINWALL AVE (128-15-06)", $: 2045700 },
    { "#": "206 ASPINWALL AVE (128-15-06.9)", $: 2256200 },
    { "#": "207 ASPINWALL AVE (144-21-00)", $: 2632600 },
    { "#": "208 ASPINWALL AVE (128-15-00.9)", $: 0 },
    { "#": "209 ASPINWALL AVE (144-21-01)", $: 1609e3 },
    { "#": "212 ASPINWALL AVE (128-14-00)", $: 2101900 },
    { "#": "213 ASPINWALL AVE (144-22-00)", $: 2312e3 },
    { "#": "219 ASPINWALL AVE (144-23-00)", $: 2558800 },
    { "#": "220 ASPINWALL AVE (128-13-00)", $: 2736100 },
    { "#": "223 ASPINWALL AVE (144-24-00)", $: 2218500 },
    { "#": "224 ASPINWALL AVE (128-12-00)", $: 2762900 },
    { "#": "227 ASPINWALL AVE (144-25-00)", $: 2478800 },
    { "#": "232 ASPINWALL AVE (127-20-00.9)", $: 0 },
    { "#": "233 ASPINWALL AVE (143-06-00)", $: 2231200 },
    { "#": "240 ASPINWALL AVE (133-07-00)", $: 1367700 },
    { "#": "252 ASPINWALL AVE (134-17-00)", $: 1766300 },
    { "#": "256 ASPINWALL AVE (134-16-00)", $: 2314500 },
    { "#": "260 ASPINWALL AVE (134-15-00)", $: 2165500 },
    { "#": "5 ASTON RD (419B-15-00)", $: 2667600 },
    { "#": "8 ASTON RD (419A-06-00)", $: 3751300 },
    { "#": "13 ASTON RD (419B-14-01)", $: 118100 },
    { "#": "15 ASTON RD (419B-14-00)", $: 3368700 },
    { "#": "25 ASTON RD (419B-13-00)", $: 2532600 },
    { "#": "30 ASTON RD (419A-07-00)", $: 3856700 },
    { "#": "37 ASTON RD (419B-12-00)", $: 5242300 },
    { "#": "40 ASTON RD (419A-08-00)", $: 2355e3 },
    { "#": "7 ATHERTON RD (084-13-00)", $: 1881500 },
    { "#": "11 ATHERTON RD (084-14-00.9)", $: 0 },
    { "#": "15 ATHERTON RD (084-15-00)", $: 1831100 },
    { "#": "17 ATHERTON RD (084-16-00)", $: 1712300 },
    { "#": "18 ATHERTON RD (085-48-00)", $: 2293100 },
    { "#": "21 ATHERTON RD (084-17-00)", $: 2893900 },
    { "#": "22 ATHERTON RD (085-47-00)", $: 1147900 },
    { "#": "22 ATHERTON RD (085-47-00.9)", $: 1793100 },
    { "#": "28 ATHERTON RD (085-46-00)", $: 2282500 },
    { "#": "32 ATHERTON RD (085-45-00)", $: 2877600 },
    { "#": "36 ATHERTON RD (085-44-00.9)", $: 0 },
    { "#": "40 ATHERTON RD (085-43-00)", $: 2493200 },
    { "#": "44 ATHERTON RD (085-42-00)", $: 948900 },
    { "#": "44 ATHERTON RD (085-42-00.9)", $: 2573900 },
    { "#": "45 ATHERTON RD (084-28-01)", $: 2555900 },
    { "#": "48 ATHERTON RD (085-41-00)", $: 1780800 },
    { "#": "50 ATHERTON RD (085-40-00)", $: 1153500 },
    { "#": "53 ATHERTON RD (084-26-01)", $: 432300 },
    { "#": "54 ATHERTON RD (085-39-00)", $: 1904100 },
    { "#": "58 ATHERTON RD (085-38-00)", $: 1901300 },
    { "#": "61 ATHERTON RD (084-18-00)", $: 2239700 },
    { "#": "62 ATHERTON RD (085-37-00)", $: 1876700 },
    { "#": "62 ATHERTON RD (085-37-00.9)", $: 1984900 },
    { "#": "65 ATHERTON RD (084-19-00)", $: 2195700 },
    { "#": "66 ATHERTON RD (085-36-00.9)", $: 0 },
    { "#": "70 ATHERTON RD (085-35-00)", $: 1574900 },
    { "#": "76 ATHERTON RD (085-34-00)", $: 1497900 },
    { "#": "80 ATHERTON RD (085-33-00.9)", $: 0 },
    { "#": "84 ATHERTON RD (085-32-00)", $: 2672e3 },
    { "#": "90 ATHERTON RD (085-31-00.9)", $: 0 },
    { "#": "1 AUBURN CT (170-14-00.9)", $: 0 },
    { "#": "9 AUBURN PL (170-05-00)", $: 2103900 },
    { "#": "10 AUBURN PL (170-08-00)", $: 1992300 },
    { "#": "14 AUBURN PL (170-07-00)", $: 2214e3 },
    { "#": "15 AUBURN PL (170-06-00)", $: 1793400 },
    { "#": "4 AUBURN ST (170-15-00)", $: 1969300 },
    { "#": "15 AUBURN ST (169-25-00)", $: 2150700 },
    { "#": "17 AUBURN ST (169-26-00)", $: 1719700 },
    { "#": "21 AUBURN ST (169-27-00)", $: 1580700 },
    { "#": "23 AUBURN ST (169-28-00)", $: 1829900 },
    { "#": "24 AUBURN ST (170-13-00)", $: 2335700 },
    { "#": "27 AUBURN ST (169-29-00)", $: 2031400 },
    { "#": "31 AUBURN ST (169-30-00)", $: 1700500 },
    { "#": "32 AUBURN ST (170-10-00)", $: 1891400 },
    { "#": "37 AUBURN ST (169-17-00)", $: 13618200 },
    { "#": "40 AUBURN ST (170-09-00)", $: 2193600 },
    { "#": "45 AUBURN ST (169-31-00)", $: 1625200 },
    { "#": "48 AUBURN ST (170-04-00)", $: 1708200 },
    { "#": "54 AUBURN ST (170-03-00)", $: 8089100 },
    { "#": "57 AUBURN ST (169-33-00)", $: 1896600 },
    { "#": "59 AUBURN ST (169-34-00)", $: 926800 },
    { "#": "59 AUBURN ST (169-34-00.9)", $: 926800 },
    { "#": "0 AVON ST (354-03-00)", $: 18200 },
    { "#": "71 AVON ST (354-02-00)", $: 1899200 },
    { "#": "0 BABCOCK ST (048-09-00)", $: 165700 },
    { "#": "9 BABCOCK ST (047A-05-00.9)", $: 0 },
    { "#": "11 BABCOCK ST (047A-06-00)", $: 2648700 },
    { "#": "15 BABCOCK ST (047A-07-09)", $: 4145600 },
    { "#": "26 BABCOCK ST (048-10-00)", $: 2077100 },
    { "#": "28 BABCOCK ST (048-08-00)", $: 3447500 },
    { "#": "30 BABCOCK ST (048-07-00)", $: 2600500 },
    { "#": "34 BABCOCK ST (048-06-00)", $: 6577900 },
    { "#": "38 BABCOCK ST (048-05-01)", $: 2377900 },
    { "#": "40 BABCOCK ST (048-05-00)", $: 3297300 },
    { "#": "46 BABCOCK ST (048-04-01)", $: 2861900 },
    { "#": "48 BABCOCK ST (048-04-00)", $: 4578500 },
    { "#": "49 BABCOCK ST (047-02-00)", $: 5029900 },
    { "#": "52 BABCOCK ST (048-03-00.9)", $: 0 },
    { "#": "57 BABCOCK ST (047-04-00.9)", $: 0 },
    { "#": "60 BABCOCK ST (048-01-00.9)", $: 0 },
    { "#": "69 BABCOCK ST (047-09-00)", $: 3590900 },
    { "#": "74 BABCOCK ST (049-15-00)", $: 4324500 },
    { "#": "77 BABCOCK ST (034-01-00)", $: 67900 },
    { "#": "80 BABCOCK ST (049-14-00)", $: 2964600 },
    { "#": "86 BABCOCK ST (049-13-00)", $: 892400 },
    { "#": "86 BABCOCK ST (049-13-00.9)", $: 2732400 },
    { "#": "90 BABCOCK ST (049-12-00)", $: 1718400 },
    { "#": "90 BABCOCK ST (049-12-00.9)", $: 2431100 },
    { "#": "91 BABCOCK ST (033-03-00)", $: 2232e3 },
    { "#": "94 BABCOCK ST (049-11-00)", $: 2485500 },
    { "#": "95 BABCOCK ST (033-04-00)", $: 2734600 },
    { "#": "99 BABCOCK ST (033-05-03)", $: 2316500 },
    { "#": "104 BABCOCK ST (049-09-00.9)", $: 0 },
    { "#": "105 BABCOCK ST (033-06-00)", $: 2766500 },
    { "#": "109 BABCOCK ST (033-07-00)", $: 2977400 },
    { "#": "109 BABCOCK ST (033-07-00.9)", $: 2977400 },
    { "#": "110 BABCOCK ST (049-08-00)", $: 12674600 },
    { "#": "113 BABCOCK ST (033-08-00)", $: 1193400 },
    { "#": "120 BABCOCK ST (049-07-00)", $: 25132300 },
    { "#": "121 BABCOCK ST (033-09-00.9)", $: 0 },
    { "#": "129 BABCOCK ST (032-01-00)", $: 196700 },
    { "#": "134 BABCOCK ST (049-06-00)", $: 3500700 },
    { "#": "136 BABCOCK ST (049-06-01)", $: 9611200 },
    { "#": "138 BABCOCK ST (049-05-01)", $: 1467600 },
    { "#": "140 BABCOCK ST (049-05-00)", $: 1804900 },
    { "#": "143 BABCOCK ST (027-13-00.9)", $: 0 },
    { "#": "145 BABCOCK ST (027-14-00.9)", $: 0 },
    { "#": "148 BABCOCK ST (049-04-00)", $: 2245400 },
    { "#": "149 BABCOCK ST (027-17-01)", $: 2354200 },
    { "#": "149 BABCOCK ST (027-17-01.9)", $: 4505400 },
    { "#": "153 BABCOCK ST (027-17-02)", $: 1106100 },
    { "#": "156 BABCOCK ST (049-03-00)", $: 2365600 },
    { "#": "157 BABCOCK ST (027-17-00)", $: 4209200 },
    { "#": "157 BABCOCK ST (027-17-03)", $: 3595200 },
    { "#": "157 BABCOCK ST (027-17-03.9)", $: 3595200 },
    { "#": "162 BABCOCK ST (053-01-00)", $: 2277600 },
    { "#": "163 BABCOCK ST (027-18-00)", $: 2262100 },
    { "#": "167 BABCOCK ST (027-19-00.9)", $: 0 },
    { "#": "170 BABCOCK ST (053-17-00)", $: 2762100 },
    { "#": "173 BABCOCK ST (027-20-00)", $: 3469800 },
    { "#": "177 BABCOCK ST (027-21-00.9)", $: 0 },
    { "#": "179 BABCOCK ST (027-22-00)", $: 2785600 },
    { "#": "182 BABCOCK ST (054-01-00)", $: 2114500 },
    { "#": "183 BABCOCK ST (027-23-00.9)", $: 0 },
    { "#": "184 BABCOCK ST (054-20-00)", $: 1172800 },
    { "#": "187 BABCOCK ST (027-24-00.9)", $: 0 },
    { "#": "189 BABCOCK ST (027-25-00)", $: 2852e3 },
    { "#": "189 BABCOCK ST (027-25-00.9)", $: 5514600 },
    { "#": "190 BABCOCK ST (054-19-00)", $: 1637500 },
    { "#": "191 BABCOCK ST (027-26-00)", $: 2882300 },
    { "#": "195 BABCOCK ST (027-27-00)", $: 1406100 },
    { "#": "195 BABCOCK ST (027-27-00.9)", $: 1878900 },
    { "#": "198 BABCOCK ST (055-01-00)", $: 2603500 },
    { "#": "199 BABCOCK ST (027-28-00.9)", $: 0 },
    { "#": "204 BABCOCK ST (055-29-00)", $: 2265200 },
    { "#": "205 BABCOCK ST (027-29-00)", $: 3031100 },
    { "#": "209 BABCOCK ST (027-30-00)", $: 2394700 },
    { "#": "210 BABCOCK ST (055-28-01)", $: 2342300 },
    { "#": "215 BABCOCK ST (027-31-00)", $: 1953200 },
    { "#": "222 BABCOCK ST (056-01-16)", $: 21685800 },
    { "#": "227 BABCOCK ST (027-32-34)", $: 11169e3 },
    { "#": "240 BABCOCK ST (056-15-00)", $: 3228700 },
    { "#": "5 BAKER CIR (365-24-00)", $: 1411300 },
    { "#": "11 BAKER CIR (365-23-00)", $: 1429700 },
    { "#": "17 BAKER CIR (365-22-00)", $: 1645800 },
    { "#": "25 BAKER CIR (365-21-00)", $: 1137600 },
    { "#": "30 BAKER CIR (365-09-00)", $: 1651700 },
    { "#": "31 BAKER CIR (365-20-00)", $: 1584300 },
    { "#": "37 BAKER CIR (365-19-00)", $: 1096400 },
    { "#": "38 BAKER CIR (365-10-00)", $: 1798200 },
    { "#": "44 BAKER CIR (365-11-00)", $: 1458200 },
    { "#": "45 BAKER CIR (365-17-18)", $: 1186300 },
    { "#": "51 BAKER CIR (365-16-00)", $: 750900 },
    { "#": "51 BAKER CIR (365-16-02)", $: 1872200 },
    { "#": "55 BAKER CIR (365-16-01)", $: 2074600 },
    { "#": "56 BAKER CIR (365-12-00)", $: 1383300 },
    { "#": "61 BAKER CIR (365-15-00)", $: 1250200 },
    { "#": "62 BAKER CIR (365-13-00)", $: 1542200 },
    { "#": "66 BAKER CIR (365-14-00)", $: 1021900 },
    { "#": "5 BARTLETT CRES (093-16-00)", $: 2224200 },
    { "#": "9 BARTLETT CRES (093-17-00)", $: 1264100 },
    { "#": "9 BARTLETT CRES (093-17-00.9)", $: 1986400 },
    { "#": "13 BARTLETT CRES (093-18-00.9)", $: 0 },
    { "#": "17 BARTLETT CRES (093-19-00.9)", $: 0 },
    { "#": "21 BARTLETT CRES (093-20-00)", $: 2566800 },
    { "#": "24 BARTLETT CRES (094-12-00)", $: 2743600 },
    { "#": "24 BARTLETT CRES (094-12-00.9)", $: 2743600 },
    { "#": "25 BARTLETT CRES (093-21-00.9)", $: 0 },
    { "#": "29 BARTLETT CRES (093-22-00)", $: 2166200 },
    { "#": "33 BARTLETT CRES (093-23-00)", $: 2240200 },
    { "#": "37 BARTLETT CRES (093-24-00)", $: 2466700 },
    { "#": "43 BARTLETT CRES (093-25-00)", $: 554e3 },
    { "#": "45 BARTLETT CRES (093-24-01)", $: 2780900 },
    { "#": "51 BARTLETT CRES (093-25-01)", $: 865600 },
    { "#": "16 BARTLETT ST (093-15-00)", $: 2219200 },
    { "#": "51 BAXTER RD (256A-07-00)", $: 2705800 },
    { "#": "59 BAXTER RD (256A-07-01)", $: 3042100 },
    { "#": "69 BAXTER RD (256A-07-02)", $: 3192e3 },
    { "#": "79 BAXTER RD (256A-07-03)", $: 2894800 },
    { "#": "85 BAXTER RD (256A-08-00)", $: 2879600 },
    { "#": "90 BAXTER RD (256-06-00)", $: 3596900 },
    { "#": "91 BAXTER RD (256A-08-01)", $: 2359700 },
    { "#": "0 BEACON ST (101-29-00)", $: 1814500 },
    { "#": "0 BEACON ST (124-07-01)", $: 386700 },
    { "#": "0 BEACON ST (214-71-08)", $: 250600 },
    { "#": "999 BEACON ST (112-25-26)", $: 3984500 },
    { "#": "1002 BEACON ST (001-01-00)", $: 4080400 },
    { "#": "1004 BEACON ST (001-02-08)", $: 9319500 },
    { "#": "1011 BEACON ST (112-24-00.9)", $: 0 },
    { "#": "1013 BEACON ST (112-23-00)", $: 3387e3 },
    { "#": "1015 BEACON ST (112-22-00)", $: 2823e3 },
    { "#": "1017 BEACON ST (112-21-00)", $: 953300 },
    { "#": "1018 BEACON ST (001-09-00)", $: 3329100 },
    { "#": "1019 BEACON ST (112-20-00)", $: 1382100 },
    { "#": "1020 BEACON ST (001-10-00)", $: 1539600 },
    { "#": "1021 BEACON ST (112-19-00)", $: 2807300 },
    { "#": "1022 BEACON ST (001-11-00)", $: 2138900 },
    { "#": "1023 BEACON ST (112-18-00)", $: 2859800 },
    { "#": "1024 BEACON ST (001-12-00)", $: 6374200 },
    { "#": "1025 BEACON ST (112-17-00)", $: 2667300 },
    { "#": "1029 BEACON ST (112-15-00)", $: 1241700 },
    { "#": "1031 BEACON ST (112-14-00)", $: 2857700 },
    { "#": "1033 BEACON ST (112-13-00)", $: 3602100 },
    { "#": "1035 BEACON ST (112-12-00.9)", $: 0 },
    { "#": "1037 BEACON ST (112-11-00.9)", $: 0 },
    { "#": "1038 BEACON ST (001-13-00.9)", $: 0 },
    { "#": "1042 BEACON ST (001-14-00.9)", $: 0 },
    { "#": "1043 BEACON ST (112-09-10)", $: 1375e3 },
    { "#": "1047 BEACON ST (112-08-00)", $: 2681e3 },
    { "#": "1051 BEACON ST (112-06-00.9)", $: 0 },
    { "#": "1053 BEACON ST (116-24-00)", $: 2402800 },
    { "#": "1055 BEACON ST (116-23-00)", $: 3210800 },
    { "#": "1056 BEACON ST (009B-07-00.9)", $: 0 },
    { "#": "1059 BEACON ST (116-21-00)", $: 3328100 },
    { "#": "1061 BEACON ST (116-20-00)", $: 2681e3 },
    { "#": "1063 BEACON ST (116-19-00)", $: 3208200 },
    { "#": "1065 BEACON ST (116-18-00)", $: 2981e3 },
    { "#": "1067 BEACON ST (116-17-00)", $: 3226e3 },
    { "#": "1069 BEACON ST (116-15-00)", $: 6381800 },
    { "#": "1070 BEACON ST (009B-09-00)", $: 11268700 },
    { "#": "1073 BEACON ST (116-14-00)", $: 3595300 },
    { "#": "1075 BEACON ST (116-13-00)", $: 2566700 },
    { "#": "1077 BEACON ST (116-12-00)", $: 2610900 },
    { "#": "1079 BEACON ST (116-10-00.9)", $: 0 },
    { "#": "1080 BEACON ST (009B-10-00.9)", $: 0 },
    { "#": "1083 BEACON ST (116-09-00.9)", $: 0 },
    { "#": "1085 BEACON ST (116-08-00)", $: 2711500 },
    { "#": "1087 BEACON ST (116-07-00)", $: 2532600 },
    { "#": "1089 BEACON ST (116-06-00)", $: 3334200 },
    { "#": "1090 BEACON ST (009B-11-00)", $: 7237500 },
    { "#": "1093 BEACON ST (116-05-00)", $: 5032400 },
    { "#": "1100 BEACON ST (009B-12-00)", $: 7475600 },
    { "#": "1101 BEACON ST (117-09-00)", $: 26549400 },
    { "#": "1110 BEACON ST (009B-13-00)", $: 6822100 },
    { "#": "1111 BEACON ST (117-06-00)", $: 37061900 },
    { "#": "1120 BEACON ST (009B-14-00)", $: 8320100 },
    { "#": "1122 BEACON ST (009-03-00)", $: 1561400 },
    { "#": "1126 BEACON ST (010-01-00.9)", $: 0 },
    { "#": "1128 BEACON ST (010-01-01)", $: 2558200 },
    { "#": "1129 BEACON ST (118-13-14)", $: 30412400 },
    { "#": "1140 BEACON ST (010-02-04.9)", $: 0 },
    { "#": "1160 BEACON ST (011-01-04.9)", $: 0 },
    { "#": "1177 BEACON ST (123-01-02)", $: 1841e4 },
    { "#": "1180 BEACON ST (042-09-00.9)", $: 0 },
    { "#": "1195 BEACON ST (124-11-00.9)", $: 0 },
    { "#": "1197 BEACON ST (124-10-00)", $: 255e4 },
    { "#": "1199 BEACON ST (124-09-00.9)", $: 0 },
    { "#": "1200 BEACON ST (042-11-01)", $: 58215800 },
    { "#": "1203 BEACON ST (124-08-00)", $: 35e5 },
    { "#": "1209 BEACON ST (124-07-00)", $: 19114400 },
    { "#": "1223 BEACON ST (124-04-06)", $: 24539300 },
    { "#": "1232 BEACON ST (043-09-00)", $: 4180600 },
    { "#": "1236 BEACON ST (043-10-00)", $: 1601200 },
    { "#": "1236 BEACON ST (043-10-00.9)", $: 0 },
    { "#": "1240 BEACON ST (043-11-00)", $: 5546100 },
    { "#": "1243 BEACON ST (160-06-00.9)", $: 0 },
    { "#": "1244 BEACON ST (043-12-00.9)", $: 0 },
    { "#": "1247 BEACON ST (160-05-00)", $: 6171900 },
    { "#": "1248 BEACON ST (043-13-14.9)", $: 0 },
    { "#": "1253 BEACON ST (160-04-00.9)", $: 0 },
    { "#": "1258 BEACON ST (044-01-00.9)", $: 0 },
    { "#": "1265 BEACON ST (160-02-00.9)", $: 0 },
    { "#": "1272 BEACON ST (044-03-00.9)", $: 0 },
    { "#": "1278 BEACON ST (044-04-00)", $: 64132e3 },
    { "#": "1285 BEACON ST (161-04-00)", $: 17957800 },
    { "#": "1292 BEACON ST (045-02-00)", $: 8067600 },
    { "#": "1295 BEACON ST (161-03-01)", $: 4818800 },
    { "#": "1297 BEACON ST (161-03-00)", $: 5151400 },
    { "#": "1299 BEACON ST (161-02-01)", $: 4891300 },
    { "#": "1309 BEACON ST (161-02-00)", $: 25001800 },
    { "#": "1310 BEACON ST (045-03-00)", $: 16988900 },
    { "#": "1319 BEACON ST (161-01-00)", $: 8835300 },
    { "#": "1324 BEACON ST (082-10-11)", $: 4e7 },
    { "#": "1329 BEACON ST (163-01-00)", $: 13467700 },
    { "#": "1341 BEACON ST (163-10-00)", $: 5445900 },
    { "#": "1343 BEACON ST (163-09-00)", $: 2371400 },
    { "#": "1345 BEACON ST (163-08-00)", $: 2294100 },
    { "#": "1347 BEACON ST (163-07-00)", $: 2323300 },
    { "#": "1351 BEACON ST (163-06-00)", $: 15036e3 },
    { "#": "1356 BEACON ST (082-12-00)", $: 1846600 },
    { "#": "1360 BEACON ST (082-13-00)", $: 3978500 },
    { "#": "1366 BEACON ST (083-09-00.9)", $: 0 },
    { "#": "1371 BEACON ST (164-01-00)", $: 34986800 },
    { "#": "1375 BEACON ST (165-21-00)", $: 10121400 },
    { "#": "1378 BEACON ST (083-10-13)", $: 25862600 },
    { "#": "1394 BEACON ST (084-01-00)", $: 3002800 },
    { "#": "1397 BEACON ST (165-20-22)", $: 25688400 },
    { "#": "1398 BEACON ST (084-02-00.9)", $: 0 },
    { "#": "1400 BEACON ST (084-03-00.9)", $: 0 },
    { "#": "1402 BEACON ST (084-04-00.9)", $: 0 },
    { "#": "1404 BEACON ST (084-05-00)", $: 5510500 },
    { "#": "1407 BEACON ST (165-18-00.9)", $: 0 },
    { "#": "1408 BEACON ST (084-07-00.9)", $: 0 },
    { "#": "1410 BEACON ST (084-08-00)", $: 3747400 },
    { "#": "1411 BEACON ST (165-16-17)", $: 10123700 },
    { "#": "1416 BEACON ST (090-01-00)", $: 3431500 },
    { "#": "1417 BEACON ST (165-15-00)", $: 3262500 },
    { "#": "1419 BEACON ST (165-14-00)", $: 3365300 },
    { "#": "1423 BEACON ST (165-13-00)", $: 2230400 },
    { "#": "1429 BEACON ST (165-12-00)", $: 5192700 },
    { "#": "1430 BEACON ST (090-02-00)", $: 1890200 },
    { "#": "1440 BEACON ST (090-03-05)", $: 53851300 },
    { "#": "1443 BEACON ST (214-31-34)", $: 84149400 },
    { "#": "1450 BEACON ST (090-06-00.9)", $: 0 },
    { "#": "1455 BEACON ST (214-30-00)", $: 10370600 },
    { "#": "1459 BEACON ST (214-29-00)", $: 5944500 },
    { "#": "1463 BEACON ST (214-28-00)", $: 7367500 },
    { "#": "1469 BEACON ST (214-27-00)", $: 6687700 },
    { "#": "1470 BEACON ST (089-01-00)", $: 17614e3 },
    { "#": "1471 BEACON ST (214-26-00)", $: 2152400 },
    { "#": "1471 BEACON ST (214-26-00.9)", $: 0 },
    { "#": "1473 BEACON ST (214-25-00)", $: 1570300 },
    { "#": "1476 BEACON ST (089-02-00)", $: 3657900 },
    { "#": "1477 BEACON ST (214-23-24)", $: 29385400 },
    { "#": "1482 BEACON ST (089-03-04)", $: 8377200 },
    { "#": "1485 BEACON ST (214-22-00)", $: 2162900 },
    { "#": "1487 BEACON ST (214-21-00.9)", $: 0 },
    { "#": "1488 BEACON ST (089-05-07.9)", $: 0 },
    { "#": "1489 BEACON ST (214-20-00)", $: 2838e3 },
    { "#": "1491 BEACON ST (214-19-00.9)", $: 0 },
    { "#": "1493 BEACON ST (214-18-00.9)", $: 0 },
    { "#": "1495 BEACON ST (214-17-00.9)", $: 0 },
    { "#": "1501 BEACON ST (214-15-16)", $: 77129e3 },
    { "#": "1514 BEACON ST (089-08-09.9)", $: 0 },
    { "#": "1515 BEACON ST (214-14-00)", $: 2675900 },
    { "#": "1517 BEACON ST (214-13-00)", $: 1369300 },
    { "#": "1517 BEACON ST (214-13-00.9)", $: 2526900 },
    { "#": "1519 BEACON ST (214-12-00.9)", $: 0 },
    { "#": "1521 BEACON ST (214-11-00.9)", $: 0 },
    { "#": "1525 BEACON ST (214-10-00)", $: 4550500 },
    { "#": "1529 BEACON ST (214-09-01)", $: 888200 },
    { "#": "1530 BEACON ST (089-10-00)", $: 60361200 },
    { "#": "1531 BEACON ST (214-09-00)", $: 2299900 },
    { "#": "1537 BEACON ST (214-08-00)", $: 3663700 },
    { "#": "1550 BEACON ST (091-01-00)", $: 34679700 },
    { "#": "1555 BEACON ST (215-23-00)", $: 4717200 },
    { "#": "1559 BEACON ST (215-22-00)", $: 3014500 },
    { "#": "1561 BEACON ST (215-21-00)", $: 3436400 },
    { "#": "1563 BEACON ST (215-20-00.9)", $: 0 },
    { "#": "1566 BEACON ST (091-03-00)", $: 6565500 },
    { "#": "1569 BEACON ST (215-19-00)", $: 10568200 },
    { "#": "1572 BEACON ST (091-04-00)", $: 1925800 },
    { "#": "1574 BEACON ST (091-05-00)", $: 2391200 },
    { "#": "1574 BEACON ST (091-05-00.9)", $: 3768300 },
    { "#": "1575 BEACON ST (215-18-00.9)", $: 0 },
    { "#": "1577 BEACON ST (215-17-00)", $: 2473600 },
    { "#": "1578 BEACON ST (091-06-00)", $: 2617900 },
    { "#": "1580 BEACON ST (091-06-01)", $: 1851100 },
    { "#": "1581 BEACON ST (215-16-00.9)", $: 0 },
    { "#": "1584 BEACON ST (091-06-02.9)", $: 0 },
    { "#": "1588 BEACON ST (091-07-00.9)", $: 0 },
    { "#": "1589 BEACON ST (215-14-15)", $: 12918400 },
    { "#": "1592 BEACON ST (091-07-01)", $: 3294300 },
    { "#": "1600 BEACON ST (091-08-00.9)", $: 0 },
    { "#": "1601 BEACON ST (215-13-00.9)", $: 0 },
    { "#": "1609 BEACON ST (215-12-00)", $: 7414500 },
    { "#": "1614 BEACON ST (092-01-00)", $: 1453600 },
    { "#": "1614 BEACON ST (092-01-00.9)", $: 1453600 },
    { "#": "1616 BEACON ST (092-02-00)", $: 2710300 },
    { "#": "1618 BEACON ST (092-03-00)", $: 1997200 },
    { "#": "1618 BEACON ST (092-03-00.9)", $: 0 },
    { "#": "1620 BEACON ST (092-04-00)", $: 3360100 },
    { "#": "1622 BEACON ST (092-05-00)", $: 2702200 },
    { "#": "1623 BEACON ST (216-17-00)", $: 1549300 },
    { "#": "1624 BEACON ST (092-06-00)", $: 6957100 },
    { "#": "1627 BEACON ST (216-17-01)", $: 2094500 },
    { "#": "1629 BEACON ST (216-18-00)", $: 3263800 },
    { "#": "1634 BEACON ST (101-01-28)", $: 6256600 },
    { "#": "1641 BEACON ST (217-21-22)", $: 8177200 },
    { "#": "1646 BEACON ST (101-02-00)", $: 4008100 },
    { "#": "1653 BEACON ST (217-23-00)", $: 3584700 },
    { "#": "1657 BEACON ST (217-24-25)", $: 4189300 },
    { "#": "1658 BEACON ST (101-03-00)", $: 3661300 },
    { "#": "1665 BEACON ST (224-31-00)", $: 4009800 },
    { "#": "1668 BEACON ST (101-04-05)", $: 5377500 },
    { "#": "1673 BEACON ST (224-29-30)", $: 10334600 },
    { "#": "1674 BEACON ST (101-06-00)", $: 2319300 },
    { "#": "1676 BEACON ST (101-07-00)", $: 1936400 },
    { "#": "1678 BEACON ST (101-08-00)", $: 2016600 },
    { "#": "1680 BEACON ST (101-09-00)", $: 3268800 },
    { "#": "1682 BEACON ST (101-10-00)", $: 2857500 },
    { "#": "1683 BEACON ST (224-28-00)", $: 2042e3 },
    { "#": "1684 BEACON ST (101-11-00)", $: 3209500 },
    { "#": "1685 BEACON ST (224-27-00)", $: 1999100 },
    { "#": "1688 BEACON ST (101-12-00)", $: 8747600 },
    { "#": "1689 BEACON ST (224-26-00)", $: 3163e3 },
    { "#": "1691 BEACON ST (224-25-00.9)", $: 0 },
    { "#": "1693 BEACON ST (224-24-00)", $: 2637700 },
    { "#": "1694 BEACON ST (101-13-00)", $: 4841200 },
    { "#": "1696 BEACON ST (101-14-00)", $: 4425700 },
    { "#": "1705 BEACON ST (225-24-25)", $: 2349900 },
    { "#": "1710 BEACON ST (102-01-00)", $: 2877300 },
    { "#": "1712 BEACON ST (102-02-00)", $: 1779300 },
    { "#": "1714 BEACON ST (102-03-00)", $: 1873500 },
    { "#": "1716 BEACON ST (102-04-00)", $: 2608100 },
    { "#": "1717 BEACON ST (225-26-00)", $: 9938100 },
    { "#": "1718 BEACON ST (102-05-00)", $: 2272e3 },
    { "#": "1720 BEACON ST (102-06-00)", $: 2357600 },
    { "#": "1722 BEACON ST (102-07-00)", $: 2336400 },
    { "#": "1724 BEACON ST (102-08-00.9)", $: 0 },
    { "#": "1726 BEACON ST (102-09-00)", $: 1951600 },
    { "#": "1728 BEACON ST (102-10-00)", $: 2205900 },
    { "#": "1730 BEACON ST (102-11-00)", $: 2461200 },
    { "#": "1731 BEACON ST (225-27-00.9)", $: 0 },
    { "#": "1732 BEACON ST (102-12-00)", $: 2529100 },
    { "#": "1734 BEACON ST (102-13-00.9)", $: 0 },
    { "#": "1734 BEACON ST (102-13-03)", $: 2035900 },
    { "#": "1736 BEACON ST (102-14-00)", $: 2038700 },
    { "#": "1738 BEACON ST (102-15-00)", $: 1959600 },
    { "#": "1740 BEACON ST (102-16-00)", $: 2502100 },
    { "#": "1742 BEACON ST (102-17-00.9)", $: 0 },
    { "#": "1748 BEACON ST (102-18-00)", $: 3544e3 },
    { "#": "1750 BEACON ST (102-19-00)", $: 3666e3 },
    { "#": "1751 BEACON ST (225-53-00)", $: 2859600 },
    { "#": "1752 BEACON ST (102-20-00.9)", $: 0 },
    { "#": "1753 BEACON ST (225-54-00.9)", $: 0 },
    { "#": "1754 BEACON ST (102-21-00)", $: 917500 },
    { "#": "1755 BEACON ST (225-55-00)", $: 1277800 },
    { "#": "1755 BEACON ST (225-55-00.9)", $: 0 },
    { "#": "1756 BEACON ST (102-22-00.9)", $: 0 },
    { "#": "1757 BEACON ST (225-56-00.9)", $: 0 },
    { "#": "1758 BEACON ST (102-23-00)", $: 2248e3 },
    { "#": "1759 BEACON ST (225-57-00.9)", $: 0 },
    { "#": "1760 BEACON ST (102-24-00)", $: 2876300 },
    { "#": "1761 BEACON ST (225-58-00)", $: 1060100 },
    { "#": "1761 BEACON ST (225-58-00.9)", $: 1113100 },
    { "#": "1762 BEACON ST (102-25-00)", $: 2434100 },
    { "#": "1762 BEACON ST (102-25-00.9)", $: 2116600 },
    { "#": "1763 BEACON ST (225-59-00.9)", $: 0 },
    { "#": "1768 BEACON ST (102-26-00.9)", $: 0 },
    { "#": "1773 BEACON ST (234-02-00)", $: 11227600 },
    { "#": "1774 BEACON ST (106-01-00.9)", $: 0 },
    { "#": "1776 BEACON ST (106-02-00)", $: 2613500 },
    { "#": "1778 BEACON ST (106-03-00.9)", $: 0 },
    { "#": "1780 BEACON ST (106-04-05.9)", $: 0 },
    { "#": "1784 BEACON ST (106-06-00)", $: 1678700 },
    { "#": "1788 BEACON ST (106-07-00)", $: 6329400 },
    { "#": "1789 BEACON ST (234-03-00)", $: 4821100 },
    { "#": "1791 BEACON ST (234-04-00)", $: 2372e3 },
    { "#": "1793 BEACON ST (234-05-00.9)", $: 0 },
    { "#": "1795 BEACON ST (234-06-00.9)", $: 0 },
    { "#": "1796 BEACON ST (107-01-00)", $: 2061500 },
    { "#": "1797 BEACON ST (234-07-00)", $: 2314400 },
    { "#": "1798 BEACON ST (107-02-00)", $: 2162200 },
    { "#": "1799 BEACON ST (234-08-00)", $: 2276200 },
    { "#": "1800 BEACON ST (107-03-00)", $: 3533600 },
    { "#": "1801 BEACON ST (234-09-00)", $: 4152300 },
    { "#": "1802 BEACON ST (107-04-00)", $: 3031300 },
    { "#": "1803 BEACON ST (234-10-00)", $: 2750500 },
    { "#": "1804 BEACON ST (107-05-00)", $: 2325900 },
    { "#": "1805 BEACON ST (234-11-00)", $: 2820200 },
    { "#": "1806 BEACON ST (107-06-00)", $: 2167600 },
    { "#": "1807 BEACON ST (234-12-00.9)", $: 0 },
    { "#": "1808 BEACON ST (107-07-00)", $: 2084900 },
    { "#": "1809 BEACON ST (234-13-00)", $: 2736800 },
    { "#": "1810 BEACON ST (107-08-00)", $: 2325600 },
    { "#": "1811 BEACON ST (234-14-00)", $: 2292100 },
    { "#": "1812 BEACON ST (107-09-00)", $: 2223700 },
    { "#": "1815 BEACON ST (234-15-00)", $: 2279600 },
    { "#": "1817 BEACON ST (234-16-00)", $: 2880200 },
    { "#": "1819 BEACON ST (234-17-00)", $: 3368100 },
    { "#": "1821 BEACON ST (234-18-00)", $: 2270100 },
    { "#": "1822 BEACON ST (108-13-00)", $: 3231800 },
    { "#": "1824 BEACON ST (108-14-00.9)", $: 0 },
    { "#": "1834 BEACON ST (108-15-00.9)", $: 0 },
    { "#": "1841 BEACON ST (234-19-00)", $: 6342700 },
    { "#": "1842 BEACON ST (110-01-00.9)", $: 0 },
    { "#": "1850 BEACON ST (110-04-00.9)", $: 0 },
    { "#": "1853 BEACON ST (235-22-00)", $: 2066200 },
    { "#": "1855 BEACON ST (235-21-00)", $: 2004700 },
    { "#": "1856 BEACON ST (110-05-00.9)", $: 0 },
    { "#": "1857 BEACON ST (235-20-00.9)", $: 0 },
    { "#": "1859 BEACON ST (235-19-00)", $: 2192e3 },
    { "#": "1861 BEACON ST (235-18-00.9)", $: 0 },
    { "#": "1862 BEACON ST (110-06-07)", $: 13657900 },
    { "#": "1863 BEACON ST (235-17-00.9)", $: 0 },
    { "#": "1865 BEACON ST (235-16-00.9)", $: 0 },
    { "#": "1867 BEACON ST (235-15-00.9)", $: 0 },
    { "#": "1869 BEACON ST (235-14-00.9)", $: 0 },
    { "#": "1871 BEACON ST (235-13-00)", $: 3700700 },
    { "#": "1874 BEACON ST (110-08-00.9)", $: 0 },
    { "#": "1876 BEACON ST (110-09-00)", $: 75e4 },
    { "#": "1878 BEACON ST (110-10-00)", $: 2642900 },
    { "#": "1880 BEACON ST (110-11-00.9)", $: 0 },
    { "#": "1887 BEACON ST (237-04-00.9)", $: 0 },
    { "#": "1888 BEACON ST (111-01-00)", $: 2436200 },
    { "#": "1890 BEACON ST (111-02-00)", $: 2055e3 },
    { "#": "1891 BEACON ST (237-05-00.9)", $: 0 },
    { "#": "1892 BEACON ST (111-03-00.9)", $: 0 },
    { "#": "1894 BEACON ST (111-04-00)", $: 2160100 },
    { "#": "1895 BEACON ST (237-06-00.9)", $: 0 },
    { "#": "1896 BEACON ST (111-05-00.9)", $: 0 },
    { "#": "1897 BEACON ST (237-07-00)", $: 3086e3 },
    { "#": "1898 BEACON ST (111-06-00.9)", $: 0 },
    { "#": "1900 BEACON ST (111-07-00.9)", $: 0 },
    { "#": "1901 BEACON ST (237-08-00)", $: 3052700 },
    { "#": "1902 BEACON ST (111-08-00.9)", $: 0 },
    { "#": "1904 BEACON ST (111-09-00)", $: 2948100 },
    { "#": "1905 BEACON ST (237-09-00)", $: 2859100 },
    { "#": "1906 BEACON ST (111-10-00)", $: 3175100 },
    { "#": "1908 BEACON ST (111-11-00)", $: 271e4 },
    { "#": "1909 BEACON ST (237-10-00)", $: 2693400 },
    { "#": "1911 BEACON ST (237-11-00)", $: 2740500 },
    { "#": "1915 BEACON ST (237-12-00.9)", $: 0 },
    { "#": "4 BEACONSFIELD RD (228-14-01)", $: 369400 },
    { "#": "11 BEACONSFIELD RD (228-12-00)", $: 0 },
    { "#": "12 BEACONSFIELD RD (228-13-14)", $: 1417900 },
    { "#": "12 BEACONSFIELD RD (228-14-00)", $: 1856100 },
    { "#": "14 BEACONSFIELD RD (228-13-00)", $: 1127300 },
    { "#": "15 BEACONSFIELD RD (227-15-00)", $: 1745100 },
    { "#": "18 BEACONSFIELD RD (228-12-01)", $: 978600 },
    { "#": "24 BEACONSFIELD RD (228-11-00)", $: 520900 },
    { "#": "24 BEACONSFIELD RD (228-11-00.9)", $: 1997500 },
    { "#": "25 BEACONSFIELD RD (227-16-00)", $: 2515800 },
    { "#": "28 BEACONSFIELD RD (228-10-00)", $: 1531600 },
    { "#": "31 BEACONSFIELD RD (227-17-00)", $: 1868500 },
    { "#": "34 BEACONSFIELD RD (228-09-00)", $: 152e4 },
    { "#": "37 BEACONSFIELD RD (227-18-00)", $: 1160800 },
    { "#": "37 BEACONSFIELD RD (227-18-00.9)", $: 1160800 },
    { "#": "40 BEACONSFIELD RD (228-08-00)", $: 936700 },
    { "#": "40 BEACONSFIELD RD (228-08-00.9)", $: 936700 },
    { "#": "43 BEACONSFIELD RD (227-19-00.9)", $: 0 },
    { "#": "46 BEACONSFIELD RD (228-07-00.9)", $: 0 },
    { "#": "51 BEACONSFIELD RD (227-20-00.9)", $: 0 },
    { "#": "52 BEACONSFIELD RD (228-06-00.9)", $: 0 },
    { "#": "57 BEACONSFIELD RD (227-21-00.9)", $: 0 },
    { "#": "58 BEACONSFIELD RD (228-05-00)", $: 1281500 },
    { "#": "62 BEACONSFIELD RD (228-04-00.9)", $: 0 },
    { "#": "63 BEACONSFIELD RD (227-22-00.9)", $: 0 },
    { "#": "69 BEACONSFIELD RD (227-23-00)", $: 1788400 },
    { "#": "70 BEACONSFIELD RD (228-03-00)", $: 2371e3 },
    { "#": "75 BEACONSFIELD RD (227-24-00)", $: 921600 },
    { "#": "75 BEACONSFIELD RD (227-24-00.9)", $: 1491800 },
    { "#": "76 BEACONSFIELD RD (228-02-00)", $: 2058400 },
    { "#": "83 BEACONSFIELD RD (227-25-00)", $: 2175400 },
    { "#": "84 BEACONSFIELD RD (228-01-02)", $: 2463400 },
    { "#": "86 BEACONSFIELD RD (228-01-01)", $: 2581900 },
    { "#": "89 BEACONSFIELD RD (225-01-01)", $: 276e4 },
    { "#": "94 BEACONSFIELD RD (226-10-11.9)", $: 0 },
    { "#": "100 BEACONSFIELD RD (226-09-00)", $: 2423100 },
    { "#": "120 BEACONSFIELD RD (226-06-00.9)", $: 0 },
    { "#": "124 BEACONSFIELD RD (226-01-00)", $: 11500 },
    { "#": "128 BEACONSFIELD RD (226-02-00.9)", $: 0 },
    { "#": "133 BEACONSFIELD RD (225-71-00.9)", $: 0 },
    { "#": "135 BEACONSFIELD RD (225-66-00.9)", $: 0 },
    { "#": "6 BEALS ST (051-51-00.9)", $: 0 },
    { "#": "7 BEALS ST (050-04-00.9)", $: 0 },
    { "#": "10 BEALS ST (051-50-00)", $: 4225700 },
    { "#": "15 BEALS ST (050-05-00)", $: 2756700 },
    { "#": "16 BEALS ST (051-49-00)", $: 2112e3 },
    { "#": "19 BEALS ST (050-06-00)", $: 2424300 },
    { "#": "22 BEALS ST (051-48-00)", $: 1978100 },
    { "#": "25 BEALS ST (050-07-00)", $: 2216600 },
    { "#": "26 BEALS ST (051-47-00)", $: 2309300 },
    { "#": "26 BEALS ST (051-47-00.9)", $: 2309300 },
    { "#": "29 BEALS ST (050-08-00)", $: 2155300 },
    { "#": "30 BEALS ST (051-46-00)", $: 3233300 },
    { "#": "34 BEALS ST (051-45-00)", $: 2170700 },
    { "#": "35 BEALS ST (050-09-00)", $: 2651900 },
    { "#": "36 BEALS ST (051-44-00)", $: 1956700 },
    { "#": "38 BEALS ST (051-43-00)", $: 1994900 },
    { "#": "39 BEALS ST (050-10-00)", $: 2536600 },
    { "#": "40 BEALS ST (051-42-00)", $: 1749100 },
    { "#": "43 BEALS ST (050-11-00)", $: 2445500 },
    { "#": "44 BEALS ST (051-41-00)", $: 2499e3 },
    { "#": "49 BEALS ST (050-12-03)", $: 2474400 },
    { "#": "50 BEALS ST (051-40-00)", $: 1803600 },
    { "#": "51 BEALS ST (050-13-00)", $: 1947100 },
    { "#": "54 BEALS ST (051-39-01)", $: 1594900 },
    { "#": "55 BEALS ST (050-14-00)", $: 1558800 },
    { "#": "56 BEALS ST (051-39-00)", $: 1897e3 },
    { "#": "58 BEALS ST (051-38-00)", $: 2343200 },
    { "#": "60 BEALS ST (051-37-00)", $: 2085700 },
    { "#": "63 BEALS ST (050-15-03)", $: 2211800 },
    { "#": "66 BEALS ST (051-36-00)", $: 2173500 },
    { "#": "67 BEALS ST (050-16-00)", $: 1837300 },
    { "#": "70 BEALS ST (051-35-00)", $: 1751800 },
    { "#": "73 BEALS ST (050-17-00)", $: 2700700 },
    { "#": "74 BEALS ST (051-34-00)", $: 2343600 },
    { "#": "77 BEALS ST (050-18-00.9)", $: 0 },
    { "#": "80 BEALS ST (051-33-00)", $: 2469400 },
    { "#": "83 BEALS ST (050-19-00)", $: 1476900 },
    { "#": "84 BEALS ST (051-32-00.9)", $: 0 },
    { "#": "85 BEALS ST (050-20-00)", $: 1701900 },
    { "#": "88 BEALS ST (051-31-00.9)", $: 0 },
    { "#": "91 BEALS ST (050-21-00.9)", $: 0 },
    { "#": "92 BEALS ST (051-30-00)", $: 2149200 },
    { "#": "95 BEALS ST (050-22-00)", $: 1124400 },
    { "#": "95 BEALS ST (050-22-00.9)", $: 1643200 },
    { "#": "96 BEALS ST (051-29-00)", $: 1618900 },
    { "#": "96 BEALS ST (051-29-00.9)", $: 1618900 },
    { "#": "99 BEALS ST (050-23-00)", $: 2102100 },
    { "#": "100 BEALS ST (051-28-00)", $: 2303400 },
    { "#": "112 BEALS ST (052-10-00.9)", $: 0 },
    { "#": "10 BEECH RD (120-18-00)", $: 4802200 },
    { "#": "16 BEECH RD (120-17-00)", $: 3416900 },
    { "#": "26 BEECH RD (120-16-00)", $: 8759700 },
    { "#": "34 BEECH RD (120-15-00)", $: 4279600 },
    { "#": "42 BEECH RD (120-14-00)", $: 4581100 },
    { "#": "48 BEECH RD (120-13-00)", $: 3567100 },
    { "#": "60 BEECH RD (120-12-00)", $: 4030600 },
    { "#": "62 BEECH RD (120-11-00)", $: 6197900 },
    { "#": "9 BEECHER RD (251-08-01)", $: 4278700 },
    { "#": "24 BEECHER RD (251-06-00)", $: 2444800 },
    { "#": "6 BELLINGHAM DR (369-03-00)", $: 1114700 },
    { "#": "12 BELLINGHAM DR (369-02-00)", $: 2122600 },
    { "#": "15 BELLINGHAM DR (368-06-00)", $: 1039900 },
    { "#": "18 BELLINGHAM DR (369-01-00)", $: 1342100 },
    { "#": "21 BELLINGHAM DR (368-07-00)", $: 1166e3 },
    { "#": "22 BELLINGHAM DR (369-01-01)", $: 0 },
    { "#": "25 BELLINGHAM DR (370-29-01)", $: 1309300 },
    { "#": "10 BELLINGHAM RD (369-13-00)", $: 2170300 },
    { "#": "11 BELLINGHAM RD (371-20-00)", $: 1795400 },
    { "#": "18 BELLINGHAM RD (369-12-00)", $: 1880600 },
    { "#": "19 BELLINGHAM RD (371-21-00)", $: 1799300 },
    { "#": "22 BELLINGHAM RD (369-11-00)", $: 1836500 },
    { "#": "28 BELLINGHAM RD (369-09-10)", $: 1546100 },
    { "#": "34 BELLINGHAM RD (369-08-00)", $: 798100 },
    { "#": "35 BELLINGHAM RD (371-22-23)", $: 1549500 },
    { "#": "38 BELLINGHAM RD (369-07-00)", $: 641100 },
    { "#": "50 BELLINGHAM RD (369-05-06)", $: 2051900 },
    { "#": "55 BELLINGHAM RD (371-12-00)", $: 1302200 },
    { "#": "59 BELLINGHAM RD (371-11-00)", $: 1962e3 },
    { "#": "60 BELLINGHAM RD (369-04-00)", $: 132e4 },
    { "#": "65 BELLINGHAM RD (371-10-24)", $: 1498900 },
    { "#": "77 BELLINGHAM RD (371-26-00)", $: 1569600 },
    { "#": "80 BELLINGHAM RD (368-05-00)", $: 1139300 },
    { "#": "89 BELLINGHAM RD (371-27-28)", $: 2674200 },
    { "#": "90 BELLINGHAM RD (368-04-00)", $: 1105700 },
    { "#": "99 BELLINGHAM RD (371-01-00)", $: 1092100 },
    { "#": "100 BELLINGHAM RD (368-02-03)", $: 1202400 },
    { "#": "111 BELLINGHAM RD (364A-06-00)", $: 1079900 },
    { "#": "114 BELLINGHAM RD (364-03-00)", $: 1137200 },
    { "#": "120 BELLINGHAM RD (364-04-00)", $: 1032900 },
    { "#": "121 BELLINGHAM RD (364A-07-00)", $: 1016600 },
    { "#": "124 BELLINGHAM RD (364-05-00)", $: 976700 },
    { "#": "128 BELLINGHAM RD (364-06-00)", $: 1222e3 },
    { "#": "130 BELLINGHAM RD (364-07-00)", $: 1360200 },
    { "#": "136 BELLINGHAM RD (364-08-00)", $: 1325100 },
    { "#": "139 BELLINGHAM RD (364A-08-00)", $: 1353400 },
    { "#": "142 BELLINGHAM RD (364-09-00)", $: 867700 },
    { "#": "145 BELLINGHAM RD (364A-09-00)", $: 1079e3 },
    { "#": "146 BELLINGHAM RD (364-10-00)", $: 1447100 },
    { "#": "151 BELLINGHAM RD (364A-10-00)", $: 2111e3 },
    { "#": "154 BELLINGHAM RD (364-11-00)", $: 903400 },
    { "#": "157 BELLINGHAM RD (364A-11-00)", $: 982100 },
    { "#": "160 BELLINGHAM RD (364-12-00)", $: 2067900 },
    { "#": "163 BELLINGHAM RD (364A-01-00)", $: 1021900 },
    { "#": "9 BELMONT RD (424-02-00)", $: 1532e3 },
    { "#": "10 BELMONT RD (424A-08-00)", $: 1110500 },
    { "#": "15 BELMONT RD (424-03-00.9)", $: 0 },
    { "#": "16 BELMONT RD (424A-09-00)", $: 1742600 },
    { "#": "20 BELMONT RD (424A-10-00)", $: 959800 },
    { "#": "21 BELMONT RD (424-04-00)", $: 958700 },
    { "#": "1 BENJAMIN PL (442-18-00.9)", $: 0 },
    { "#": "0 BERESFORD RD (413-06-00)", $: 97500 },
    { "#": "0 BERESFORD RD (413-07-00)", $: 78200 },
    { "#": "8 BERESFORD RD (412-08-01)", $: 2864700 },
    { "#": "16 BERESFORD RD (412-09-00)", $: 2878800 },
    { "#": "22 BERESFORD RD (412-10-00)", $: 3089500 },
    { "#": "29 BERESFORD RD (413-05-00)", $: 1397100 },
    { "#": "30 BERESFORD RD (412-11-00)", $: 1460100 },
    { "#": "36 BERESFORD RD (412-12-00)", $: 2163700 },
    { "#": "37 BERESFORD RD (413-04-00)", $: 2400900 },
    { "#": "44 BERESFORD RD (412-13-00)", $: 1242300 },
    { "#": "45 BERESFORD RD (413-03-00)", $: 1984500 },
    { "#": "50 BERESFORD RD (412-14-00)", $: 2666400 },
    { "#": "51 BERESFORD RD (413-02-00)", $: 1774500 },
    { "#": "57 BERESFORD RD (413-01-00)", $: 2597200 },
    { "#": "9 BERKELEY CT (176-08-01.9)", $: 0 },
    { "#": "10 BERKELEY CT (176-12-00)", $: 1729400 },
    { "#": "14 BERKELEY CT (176-11-00.9)", $: 0 },
    { "#": "15 BERKELEY CT (176-09-00)", $: 1018800 },
    { "#": "15 BERKELEY CT (176-09-00.9)", $: 2405e3 },
    { "#": "18 BERKELEY CT (176-10-00)", $: 1657800 },
    { "#": "2 BEVERLY RD (403-04-00)", $: 1324600 },
    { "#": "12 BEVERLY RD (403-05-00)", $: 2076100 },
    { "#": "19 BEVERLY RD (405-06-00)", $: 2139600 },
    { "#": "22 BEVERLY RD (403-06-00)", $: 1890800 },
    { "#": "29 BEVERLY RD (405-05-00)", $: 1985300 },
    { "#": "30 BEVERLY RD (403-07-00)", $: 1128100 },
    { "#": "36 BEVERLY RD (403-08-00)", $: 1417e3 },
    { "#": "37 BEVERLY RD (405-04-00)", $: 1400400 },
    { "#": "44 BEVERLY RD (403-09-00)", $: 1678300 },
    { "#": "45 BEVERLY RD (405-03-00)", $: 1399900 },
    { "#": "52 BEVERLY RD (403-10-00)", $: 1758800 },
    { "#": "53 BEVERLY RD (405-02-00)", $: 1729700 },
    { "#": "59 BEVERLY RD (405-01-00)", $: 1101300 },
    { "#": "60 BEVERLY RD (403-11-00)", $: 1521600 },
    { "#": "66 BEVERLY RD (403-12-00)", $: 1586e3 },
    { "#": "72 BEVERLY RD (403-13-00)", $: 2055400 },
    { "#": "73 BEVERLY RD (404-04-00)", $: 1300200 },
    { "#": "78 BEVERLY RD (403-14-00)", $: 1654500 },
    { "#": "79 BEVERLY RD (404-03-01)", $: 1314500 },
    { "#": "86 BEVERLY RD (403-15-00)", $: 1426e3 },
    { "#": "87 BEVERLY RD (404-03-00)", $: 1954800 },
    { "#": "92 BEVERLY RD (403-16-00)", $: 2355700 },
    { "#": "95 BEVERLY RD (404-02-00)", $: 1274200 },
    { "#": "100 BEVERLY RD (403-17-00)", $: 1740300 },
    { "#": "105 BEVERLY RD (404-01-00)", $: 1864400 },
    { "#": "110 BEVERLY RD (403-18-19)", $: 1137500 },
    { "#": "111 BEVERLY RD (398B-05-00)", $: 1815200 },
    { "#": "120 BEVERLY RD (398A-01-00)", $: 1342200 },
    { "#": "121 BEVERLY RD (398B-04-00)", $: 1351800 },
    { "#": "129 BEVERLY RD (398B-03-00)", $: 1967700 },
    { "#": "130 BEVERLY RD (398A-02-00)", $: 1329100 },
    { "#": "132 BEVERLY RD (398A-03-00)", $: 1838500 },
    { "#": "135 BEVERLY RD (398B-02-01)", $: 1553400 },
    { "#": "136 BEVERLY RD (398A-03-01)", $: 1267600 },
    { "#": "141 BEVERLY RD (398B-02-00)", $: 1378300 },
    { "#": "142 BEVERLY RD (398A-04-00)", $: 1785500 },
    { "#": "146 BEVERLY RD (398A-05-00)", $: 1771900 },
    { "#": "152 BEVERLY RD (398A-06-00)", $: 1389600 },
    { "#": "160 BEVERLY RD (398A-07-00)", $: 1298100 },
    { "#": "205 BEVERLY RD (398B-01-00)", $: 41546900 },
    { "#": "210 BEVERLY RD (398-08-02)", $: 1628700 },
    { "#": "219 BEVERLY RD (398B-06-00)", $: 20413100 },
    { "#": "220 BEVERLY RD (398-10-00)", $: 847800 },
    { "#": "223 BEVERLY RD (392-16-00)", $: 946200 },
    { "#": "224 BEVERLY RD (393-01-00)", $: 1011400 },
    { "#": "229 BEVERLY RD (392-15-00)", $: 1506700 },
    { "#": "230 BEVERLY RD (393-02-00)", $: 1269100 },
    { "#": "233 BEVERLY RD (392-14-00)", $: 1054800 },
    { "#": "236 BEVERLY RD (393-03-00)", $: 1412800 },
    { "#": "239 BEVERLY RD (392-13-00)", $: 1271700 },
    { "#": "242 BEVERLY RD (393-04-00)", $: 1153100 },
    { "#": "243 BEVERLY RD (392-12-00)", $: 1148e3 },
    { "#": "248 BEVERLY RD (393-05-00)", $: 1130500 },
    { "#": "249 BEVERLY RD (392-11-00)", $: 1273400 },
    { "#": "253 BEVERLY RD (392-10-00)", $: 1096100 },
    { "#": "254 BEVERLY RD (393-06-00)", $: 1241400 },
    { "#": "257 BEVERLY RD (392-09-00)", $: 1093800 },
    { "#": "260 BEVERLY RD (393-07-00)", $: 1775e3 },
    { "#": "263 BEVERLY RD (392-08-00)", $: 1133400 },
    { "#": "267 BEVERLY RD (392-07-00)", $: 1115900 },
    { "#": "268 BEVERLY RD (393-08-00)", $: 1067100 },
    { "#": "271 BEVERLY RD (392-06-00)", $: 1015300 },
    { "#": "274 BEVERLY RD (393-09-00)", $: 1300600 },
    { "#": "275 BEVERLY RD (392-05-00)", $: 1268e3 },
    { "#": "279 BEVERLY RD (392-04-00)", $: 1126e3 },
    { "#": "280 BEVERLY RD (393-10-00)", $: 1023400 },
    { "#": "285 BEVERLY RD (392-03-00)", $: 1513600 },
    { "#": "286 BEVERLY RD (393-11-00)", $: 1152800 },
    { "#": "290 BEVERLY RD (393-12-00)", $: 1539600 },
    { "#": "291 BEVERLY RD (392-02-00)", $: 1232200 },
    { "#": "296 BEVERLY RD (393-13-00)", $: 1097500 },
    { "#": "299 BEVERLY RD (392-01-00)", $: 1365800 },
    { "#": "300 BEVERLY RD (393-14-00)", $: 1098900 },
    { "#": "6 BLAKE RD (228-32-00)", $: 2267600 },
    { "#": "12 BLAKE RD (228-31-01)", $: 1461800 },
    { "#": "16 BLAKE RD (228-31-02)", $: 1526800 },
    { "#": "17 BLAKE RD (203-08-00)", $: 2069800 },
    { "#": "21 BLAKE RD (203-09-00)", $: 1808100 },
    { "#": "24 BLAKE RD (228-30-01)", $: 1777800 },
    { "#": "36 BLAKE RD (204-20-00)", $: 2093400 },
    { "#": "40 BLAKE RD (204-19-00)", $: 2748700 },
    { "#": "43 BLAKE RD (205-02-00)", $: 2539300 },
    { "#": "46 BLAKE RD (204-18-00)", $: 2341700 },
    { "#": "49 BLAKE RD (205-03-00)", $: 1698900 },
    { "#": "50 BLAKE RD (204-17-00)", $: 2128900 },
    { "#": "54 BLAKE RD (204-16-00)", $: 2375900 },
    { "#": "55 BLAKE RD (205-04-00)", $: 1735800 },
    { "#": "60 BLAKE RD (204-15-00)", $: 2215300 },
    { "#": "61 BLAKE RD (205-05-00)", $: 1962200 },
    { "#": "64 BLAKE RD (204-14-00)", $: 2046300 },
    { "#": "65 BLAKE RD (205-06-00)", $: 1481800 },
    { "#": "72 BLAKE RD (204-13-00)", $: 1890200 },
    { "#": "75 BLAKE RD (205-07-00)", $: 1980800 },
    { "#": "83 BLAKE RD (205A-08-01)", $: 2412100 },
    { "#": "91 BLAKE RD (205A-08-00)", $: 1984900 },
    { "#": "95 BLAKE RD (205A-09-00)", $: 1960600 },
    { "#": "101 BLAKE RD (205A-09-01)", $: 2357e3 },
    { "#": "72 BONAD RD (380-01-00)", $: 11300 },
    { "#": "75 BONAD RD (379-09-00)", $: 155300 },
    { "#": "78 BONAD RD (380-02-00)", $: 1420900 },
    { "#": "79 BONAD RD (379-08-00)", $: 1177200 },
    { "#": "80 BONAD RD (380-03-00)", $: 1218800 },
    { "#": "83 BONAD RD (379-07-00)", $: 967600 },
    { "#": "84 BONAD RD (380-04-00)", $: 1498600 },
    { "#": "87 BONAD RD (379-06-00)", $: 831e3 },
    { "#": "88 BONAD RD (380-05-00)", $: 960900 },
    { "#": "110 BONAD RD (383-24-00)", $: 968500 },
    { "#": "111 BONAD RD (382-02-00)", $: 932300 },
    { "#": "114 BONAD RD (383-23-00)", $: 1073700 },
    { "#": "117 BONAD RD (382-03-00)", $: 837200 },
    { "#": "118 BONAD RD (383-22-00)", $: 862500 },
    { "#": "121 BONAD RD (382-04-00)", $: 913900 },
    { "#": "122 BONAD RD (383-21-00)", $: 807300 },
    { "#": "125 BONAD RD (382-05-00)", $: 886200 },
    { "#": "126 BONAD RD (383-20-00)", $: 1047200 },
    { "#": "129 BONAD RD (382-06-00)", $: 989400 },
    { "#": "130 BONAD RD (383-19-00)", $: 1208600 },
    { "#": "132 BONAD RD (383-18-00)", $: 1006900 },
    { "#": "133 BONAD RD (382-07-00)", $: 969900 },
    { "#": "136 BONAD RD (383-17-00)", $: 1141400 },
    { "#": "137 BONAD RD (382-08-00)", $: 1104e3 },
    { "#": "140 BONAD RD (383-16-00)", $: 935900 },
    { "#": "141 BONAD RD (382-09-00)", $: 935600 },
    { "#": "145 BONAD RD (382-10-00)", $: 943300 },
    { "#": "146 BONAD RD (383-14-15)", $: 1362800 },
    { "#": "149 BONAD RD (382-11-00)", $: 1857e3 },
    { "#": "161 BONAD RD (385-01-00)", $: 959200 },
    { "#": "165 BONAD RD (385-02-00)", $: 927700 },
    { "#": "166 BONAD RD (386-19-00)", $: 805700 },
    { "#": "169 BONAD RD (385-03-00)", $: 991300 },
    { "#": "170 BONAD RD (386-18-00)", $: 1072600 },
    { "#": "173 BONAD RD (385-04-00)", $: 990300 },
    { "#": "174 BONAD RD (386-17-00)", $: 1104600 },
    { "#": "177 BONAD RD (385-05-00)", $: 1016800 },
    { "#": "180 BONAD RD (386-16-00)", $: 1441400 },
    { "#": "181 BONAD RD (385-06-00)", $: 797800 },
    { "#": "184 BONAD RD (386-15-00)", $: 884800 },
    { "#": "186 BONAD RD (386-14-00)", $: 974700 },
    { "#": "187 BONAD RD (385-07-00)", $: 938600 },
    { "#": "191 BONAD RD (385-08-00)", $: 1203600 },
    { "#": "192 BONAD RD (386-13-00)", $: 872e3 },
    { "#": "195 BONAD RD (385-09-00)", $: 1719500 },
    { "#": "196 BONAD RD (386-12-00)", $: 929400 },
    { "#": "205 BONAD RD (391-15-00)", $: 1064300 },
    { "#": "209 BONAD RD (391-16-00)", $: 823500 },
    { "#": "210 BONAD RD (390-12-00)", $: 1076900 },
    { "#": "213 BONAD RD (391-17-00)", $: 1028400 },
    { "#": "214 BONAD RD (390-11-00)", $: 1081900 },
    { "#": "217 BONAD RD (391-18-00)", $: 1216e3 },
    { "#": "218 BONAD RD (390-10-00)", $: 917600 },
    { "#": "222 BONAD RD (390-09-00)", $: 1191300 },
    { "#": "223 BONAD RD (391-19-00)", $: 1141800 },
    { "#": "226 BONAD RD (390-08-01)", $: 872600 },
    { "#": "227 BONAD RD (391-20-00)", $: 1250400 },
    { "#": "230 BONAD RD (390-08-00)", $: 884500 },
    { "#": "233 BONAD RD (391-21-00)", $: 1030100 },
    { "#": "234 BONAD RD (390-07-00)", $: 1194500 },
    { "#": "237 BONAD RD (391-22-00)", $: 1548100 },
    { "#": "238 BONAD RD (390-06-00)", $: 1089900 },
    { "#": "241 BONAD RD (391-23-00)", $: 1201700 },
    { "#": "244 BONAD RD (390-05-00)", $: 1299900 },
    { "#": "247 BONAD RD (391-23-01)", $: 1329700 },
    { "#": "250 BONAD RD (390-04-00)", $: 1025200 },
    { "#": "251 BONAD RD (391-24-00)", $: 975900 },
    { "#": "256 BONAD RD (390-03-00)", $: 976300 },
    { "#": "257 BONAD RD (391-25-00)", $: 1413700 },
    { "#": "262 BONAD RD (390-02-00)", $: 1031900 },
    { "#": "263 BONAD RD (391-26-00)", $: 1238800 },
    { "#": "269 BONAD RD (391-27-00)", $: 1128100 },
    { "#": "15 BORLAND ST (118-15-00)", $: 2894100 },
    { "#": "21 BORLAND ST (118-16-00)", $: 2791500 },
    { "#": "32 BORLAND ST (117-04-00)", $: 3385900 },
    { "#": "2 BOWKER ST (145-11-00)", $: 1793700 },
    { "#": "8 BOWKER ST (145-10-00)", $: 1609500 },
    { "#": "9 BOWKER ST (146-08-01)", $: 1655100 },
    { "#": "10 BOWKER ST (145-09-00)", $: 1628700 },
    { "#": "14 BOWKER ST (145-08-00)", $: 1631400 },
    { "#": "15 BOWKER ST (146-09-00)", $: 1622900 },
    { "#": "16 BOWKER ST (145-07-00)", $: 1741800 },
    { "#": "17 BOWKER ST (146-10-00)", $: 1944e3 },
    { "#": "18 BOWKER ST (145-07-01)", $: 2076700 },
    { "#": "19 BOWKER ST (146-11-00)", $: 1934800 },
    { "#": "21 BOWKER ST (146-11-01)", $: 1746800 },
    { "#": "22 BOWKER ST (145-06-00)", $: 2219400 },
    { "#": "24 BOWKER ST (145-05-00.9)", $: 0 },
    { "#": "25 BOWKER ST (146-12-00)", $: 1912700 },
    { "#": "27 BOWKER ST (146-12-01)", $: 1683300 },
    { "#": "30 BOWKER ST (145-04-01)", $: 1471400 },
    { "#": "31 BOWKER ST (146-13-00.9)", $: 0 },
    { "#": "32 BOWKER ST (145-04-00)", $: 1485500 },
    { "#": "34 BOWKER ST (145-03-00.9)", $: 0 },
    { "#": "35 BOWKER ST (146-14-00)", $: 1560800 },
    { "#": "38 BOWKER ST (145-02-01)", $: 1255400 },
    { "#": "40 BOWKER ST (145-02-00)", $: 1691900 },
    { "#": "41 BOWKER ST (146-15-00)", $: 1790200 },
    { "#": "45 BOWKER ST (146-16-00)", $: 1202900 },
    { "#": "45 BOWKER ST (146-16-00.9)", $: 3080200 },
    { "#": "47 BOWKER ST (146-17-00)", $: 1864800 },
    { "#": "14 BOYLSTON PL (189-23-00)", $: 1170700 },
    { "#": "0 BOYLSTON ST (185-27-00)", $: 0 },
    { "#": "0 BOYLSTON ST (278C-22-00)", $: 0 },
    { "#": "0 BOYLSTON ST (278C-36-00)", $: 560700 },
    { "#": "0 BOYLSTON ST (278C-37-00)", $: 611600 },
    { "#": "0 BOYLSTON ST (426-04-03)", $: 0 },
    { "#": "0 BOYLSTON ST (426-04-04)", $: 0 },
    { "#": "19 BOYLSTON ST (185-03-00)", $: 1647600 },
    { "#": "20 BOYLSTON ST (318-41-45)", $: 10179e3 },
    { "#": "20 BOYLSTON ST (318-41-45.9)", $: 956700 },
    { "#": "22 BOYLSTON ST (318-40-00)", $: 696100 },
    { "#": "31 BOYLSTON ST (185-04-05)", $: 5888300 },
    { "#": "43 BOYLSTON ST (185-06-00)", $: 875100 },
    { "#": "43 BOYLSTON ST (185-06-00.9)", $: 918900 },
    { "#": "48 BOYLSTON ST (318-38-00)", $: 1447700 },
    { "#": "49 BOYLSTON ST (185-07-00)", $: 1692500 },
    { "#": "50 BOYLSTON ST (318-37-00.9)", $: 0 },
    { "#": "51 BOYLSTON ST (185-08-00)", $: 763700 },
    { "#": "55 BOYLSTON ST (185-09-10)", $: 1336600 },
    { "#": "65 BOYLSTON ST (185-11-00)", $: 1027600 },
    { "#": "68 BOYLSTON ST (318-34-35)", $: 3078e3 },
    { "#": "71 BOYLSTON ST (185-12-00)", $: 1466300 },
    { "#": "75 BOYLSTON ST (185-13-14.9)", $: 0 },
    { "#": "82 BOYLSTON ST (318-33-00)", $: 809100 },
    { "#": "87 BOYLSTON ST (185-15-00)", $: 1670600 },
    { "#": "88 BOYLSTON ST (318-32-00)", $: 1553200 },
    { "#": "94 BOYLSTON ST (318-31-00)", $: 873800 },
    { "#": "95 BOYLSTON ST (185-16-00)", $: 1193300 },
    { "#": "96 BOYLSTON ST (318-30-00.9)", $: 0 },
    { "#": "99 BOYLSTON ST (185-17-00)", $: 1566500 },
    { "#": "111 BOYLSTON ST (185-18-25)", $: 0 },
    { "#": "111 BOYLSTON ST (185-18-27)", $: 37593e3 },
    { "#": "120 BOYLSTON ST (318-28-29)", $: 2466800 },
    { "#": "128 BOYLSTON ST (318-25-27)", $: 2858700 },
    { "#": "146 BOYLSTON ST (318-24-00)", $: 1434700 },
    { "#": "153 BOYLSTON ST (186-01-02)", $: 8650300 },
    { "#": "158 BOYLSTON ST (318-22-00)", $: 958600 },
    { "#": "194 BOYLSTON ST (318-20-00)", $: 21271400 },
    { "#": "199 BOYLSTON ST (186-03-00)", $: 686e3 },
    { "#": "199 BOYLSTON ST (186-03-07)", $: 4183400 },
    { "#": "211 BOYLSTON ST (186-04-00)", $: 1516600 },
    { "#": "223 BOYLSTON ST (187-03-00)", $: 1155700 },
    { "#": "229 BOYLSTON ST (187-04-00)", $: 993400 },
    { "#": "233 BOYLSTON ST (187-05-00)", $: 1792100 },
    { "#": "241 BOYLSTON ST (187-06-00)", $: 1104700 },
    { "#": "265 BOYLSTON ST (188-04-06)", $: 3435100 },
    { "#": "270 BOYLSTON ST (318-18-00)", $: 7107700 },
    { "#": "275 BOYLSTON ST (188-07-00)", $: 1775e3 },
    { "#": "296 BOYLSTON ST (318-17-00)", $: 3352800 },
    { "#": "303 BOYLSTON ST (189-11-15)", $: 12586e3 },
    { "#": "308 BOYLSTON ST (318-14-16)", $: 21490800 },
    { "#": "345 BOYLSTON ST (189-24-29)", $: 4145500 },
    { "#": "358 BOYLSTON ST (319-12-00)", $: 3659700 },
    { "#": "361 BOYLSTON ST (190-02-00)", $: 8071e3 },
    { "#": "370 BOYLSTON ST (319-09-00.9)", $: 0 },
    { "#": "384 BOYLSTON ST (319-08-00)", $: 1748400 },
    { "#": "391 BOYLSTON ST (191-15-00)", $: 1920600 },
    { "#": "397 BOYLSTON ST (191-16-00)", $: 1414900 },
    { "#": "401 BOYLSTON ST (191-17-00)", $: 1868400 },
    { "#": "402 BOYLSTON ST (320A-16-00)", $: 1581100 },
    { "#": "420 BOYLSTON ST (321-12-02)", $: 1051700 },
    { "#": "424 BOYLSTON ST (321-12-01)", $: 1081600 },
    { "#": "428 BOYLSTON ST (321-12-00)", $: 1124200 },
    { "#": "440 BOYLSTON ST (321-11-00)", $: 2323300 },
    { "#": "452 BOYLSTON ST (321-10-00)", $: 1723800 },
    { "#": "462 BOYLSTON ST (321-09-00)", $: 1369700 },
    { "#": "481 BOYLSTON ST (253-04-00)", $: 2701e3 },
    { "#": "483 BOYLSTON ST (253-05-00.9)", $: 0 },
    { "#": "487 BOYLSTON ST (253-06-00.9)", $: 0 },
    { "#": "489 BOYLSTON ST (253-07-00.9)", $: 0 },
    { "#": "495 BOYLSTON ST (253-08-00.9)", $: 0 },
    { "#": "497 BOYLSTON ST (253-09-00)", $: 2765200 },
    { "#": "501 BOYLSTON ST (253-10-00)", $: 3293500 },
    { "#": "503 BOYLSTON ST (253-11-00.9)", $: 0 },
    { "#": "509 BOYLSTON ST (252-02-00.9)", $: 0 },
    { "#": "603 BOYLSTON ST (254-02-02)", $: 2734200 },
    { "#": "605 BOYLSTON ST (254-03-02)", $: 2718800 },
    { "#": "615 BOYLSTON ST (254-04-01)", $: 251e3 },
    { "#": "617 BOYLSTON ST (254-04-02)", $: 2534100 },
    { "#": "619 BOYLSTON ST (254-03-01)", $: 3725e3 },
    { "#": "619 BOYLSTON ST (254-03-03)", $: 9943300 },
    { "#": "621 BOYLSTON ST (254-04-03)", $: 1474100 },
    { "#": "623 BOYLSTON ST (254-04-04)", $: 347100 },
    { "#": "683 BOYLSTON ST (255-03-00)", $: 1858500 },
    { "#": "691 BOYLSTON ST (255-04-00)", $: 2108700 },
    { "#": "697 BOYLSTON ST (255-05-00)", $: 1886400 },
    { "#": "703 BOYLSTON ST (255-06-00)", $: 1819900 },
    { "#": "709 BOYLSTON ST (255-07-00)", $: 2151100 },
    { "#": "728 BOYLSTON ST (276-13-00)", $: 1349e3 },
    { "#": "734 BOYLSTON ST (276-12-00)", $: 1725400 },
    { "#": "740 BOYLSTON ST (276-11-01)", $: 1424900 },
    { "#": "744 BOYLSTON ST (276-11-00)", $: 1628800 },
    { "#": "748 BOYLSTON ST (276-10-01.9)", $: 0 },
    { "#": "752 BOYLSTON ST (276-10-00)", $: 1471300 },
    { "#": "753 BOYLSTON ST (272-05-00)", $: 1354e3 },
    { "#": "755 BOYLSTON ST (272-06-00)", $: 1741400 },
    { "#": "757 BOYLSTON ST (272-07-00)", $: 1347100 },
    { "#": "759 BOYLSTON ST (272-08-00)", $: 1470400 },
    { "#": "765 BOYLSTON ST (272-09-00.9)", $: 0 },
    { "#": "769 BOYLSTON ST (272-10-00.9)", $: 0 },
    { "#": "770 BOYLSTON ST (276-06-09)", $: 8585500 },
    { "#": "771 BOYLSTON ST (272-11-00.9)", $: 0 },
    { "#": "774 BOYLSTON ST (276-20-01)", $: 2586800 },
    { "#": "775 BOYLSTON ST (273-01-00)", $: 1401300 },
    { "#": "777 BOYLSTON ST (273-04-00)", $: 1118900 },
    { "#": "781 BOYLSTON ST (274-01-00.9)", $: 0 },
    { "#": "783 BOYLSTON ST (274-02-00)", $: 1162900 },
    { "#": "787 BOYLSTON ST (274-03-00)", $: 1119900 },
    { "#": "789 BOYLSTON ST (274-04-00)", $: 2026700 },
    { "#": "794 BOYLSTON ST (276-03-04)", $: 2053700 },
    { "#": "797 BOYLSTON ST (275-07-09)", $: 1772400 },
    { "#": "800 BOYLSTON ST (276-01-00)", $: 2077200 },
    { "#": "803 BOYLSTON ST (275-10-00)", $: 1969900 },
    { "#": "809 BOYLSTON ST (275-11-00)", $: 2171900 },
    { "#": "809 BOYLSTON ST (275-11-00.9)", $: 2171900 },
    { "#": "811 BOYLSTON ST (275-12-00)", $: 1742500 },
    { "#": "811 BOYLSTON ST (275-12-00.9)", $: 1742500 },
    { "#": "815 BOYLSTON ST (275-16-00)", $: 1503600 },
    { "#": "824 BOYLSTON ST (437-10-00)", $: 10385300 },
    { "#": "827 BOYLSTON ST (277-01-01)", $: 5134100 },
    { "#": "830 BOYLSTON ST (437-09-00)", $: 23536400 },
    { "#": "840 BOYLSTON ST (437-08-01)", $: 8075500 },
    { "#": "845 BOYLSTON ST (278C-19-00)", $: 2638600 },
    { "#": "850 BOYLSTON ST (437-08-00)", $: 85651e3 },
    { "#": "910 BOYLSTON ST (437-04-06)", $: 57870200 },
    { "#": "990 BOYLSTON ST (437-04-01)", $: 4285200 },
    { "#": "1014 BOYLSTON ST (437-03-00)", $: 9882500 },
    { "#": "1020 BOYLSTON ST (437-02-00)", $: 2121800 },
    { "#": "1025 BOYLSTON ST (278C-31-00)", $: 1942800 },
    { "#": "1033 BOYLSTON ST (278C-02-00)", $: 790300 },
    { "#": "1033 BOYLSTON ST (278C-32-00)", $: 1316700 },
    { "#": "1039 BOYLSTON ST (278C-21-00)", $: 1229800 },
    { "#": "1039 BOYLSTON ST (278C-33-00)", $: 2688800 },
    { "#": "1041 BOYLSTON ST (278C-34-00)", $: 2562800 },
    { "#": "1093 BOYLSTON ST (284-14-02)", $: 876e3 },
    { "#": "1101 BOYLSTON ST (284-15-00)", $: 1871700 },
    { "#": "1106 BOYLSTON ST (434-02-00)", $: 1826800 },
    { "#": "1109 BOYLSTON ST (284-16-00)", $: 2142100 },
    { "#": "1117 BOYLSTON ST (284-17-00)", $: 2662500 },
    { "#": "1125 BOYLSTON ST (284-18-00)", $: 16749200 },
    { "#": "1140 BOYLSTON ST (433-20-02)", $: 1587800 },
    { "#": "1148 BOYLSTON ST (433-19-00)", $: 1662900 },
    { "#": "1154 BOYLSTON ST (433-17-00)", $: 4105300 },
    { "#": "1162 BOYLSTON ST (433-16-00.9)", $: 0 },
    { "#": "1180 BOYLSTON ST (433-11-12)", $: 5433e3 },
    { "#": "1180 BOYLSTON ST (433-12-00)", $: 4552100 },
    { "#": "1182 BOYLSTON ST (427-09-00)", $: 3469500 },
    { "#": "1190 BOYLSTON ST (427-10-00)", $: 67e4 },
    { "#": "1192 BOYLSTON ST (427-08-00)", $: 2645300 },
    { "#": "1195 BOYLSTON ST (286-06-00)", $: 75e5 },
    { "#": "1198 BOYLSTON ST (427-04-05)", $: 7465600 },
    { "#": "1207 BOYLSTON ST (286-05-00)", $: 14123100 },
    { "#": "1212 BOYLSTON ST (427-03-00)", $: 1793e3 },
    { "#": "1216 BOYLSTON ST (427-02-00)", $: 1750700 },
    { "#": "1218 BOYLSTON ST (427-01-00)", $: 2251800 },
    { "#": "1228 BOYLSTON ST (426-05-00)", $: 6896100 },
    { "#": "1234 BOYLSTON ST (426-04-01)", $: 8388e3 },
    { "#": "1234 BOYLSTON ST (426-04-05)", $: 977900 },
    { "#": "1240 BOYLSTON ST (426-04-00)", $: 2596700 },
    { "#": "1244 BOYLSTON ST (426-01-03)", $: 29138400 },
    { "#": "1268 BOYLSTON ST (425-07-09)", $: 3690700 },
    { "#": "1280 BOYLSTON ST (425-10-00)", $: 16828300 },
    { "#": "1290 BOYLSTON ST (425-10-01)", $: 2315600 },
    { "#": "1300 BOYLSTON ST (425-11-00)", $: 12231300 },
    { "#": "1330 BOYLSTON ST (425-12-00)", $: 28718100 },
    { "#": "3 BRADFORD TER (048-11-01.9)", $: 0 },
    { "#": "4 BRADFORD TER (048-11-00.9)", $: 0 },
    { "#": "16 BRINGTON RD (190-11-00)", $: 1635400 },
    { "#": "19 BRINGTON RD (191-01-00.9)", $: 0 },
    { "#": "20 BRINGTON RD (190-10-00.9)", $: 0 },
    { "#": "25 BRINGTON RD (191-02-00)", $: 1417300 },
    { "#": "26 BRINGTON RD (190-09-00)", $: 1854e3 },
    { "#": "29 BRINGTON RD (191-03-00)", $: 1646600 },
    { "#": "33 BRINGTON RD (191-04-00)", $: 1398100 },
    { "#": "34 BRINGTON RD (190-08-00)", $: 2718900 },
    { "#": "37 BRINGTON RD (191-05-00)", $: 1423500 },
    { "#": "41 BRINGTON RD (191-06-00)", $: 1535800 },
    { "#": "42 BRINGTON RD (190-07-00)", $: 1873e3 },
    { "#": "43 BRINGTON RD (191-30-00)", $: 2472600 },
    { "#": "45 BRINGTON RD (191-07-00)", $: 1500200 },
    { "#": "47 BRINGTON RD (191-08-00.9)", $: 0 },
    { "#": "49 BRINGTON RD (191-07-01)", $: 329500 },
    { "#": "51 BRINGTON RD (191-31-00)", $: 2203900 },
    { "#": "53 BRINGTON RD (191-10-00)", $: 1557800 },
    { "#": "59 BRINGTON RD (191-11-00)", $: 1511e3 },
    { "#": "59 BRINGTON RD (191-11-00.9)", $: 2061800 },
    { "#": "63 BRINGTON RD (191-12-00.9)", $: 0 },
    { "#": "64 BRINGTON RD (190-06-00)", $: 1777900 },
    { "#": "68 BRINGTON RD (190-05-00)", $: 1142500 },
    { "#": "69 BRINGTON RD (191-13-00)", $: 1318800 },
    { "#": "70 BRINGTON RD (190-04-00)", $: 1442700 },
    { "#": "77 BRINGTON RD (191-14-00)", $: 1849300 },
    { "#": "78 BRINGTON RD (190-03-00)", $: 1512500 },
    { "#": "0 BROOK ST (149-33-01.9)", $: 0 },
    { "#": "1 BROOK ST (143-01-00)", $: 2059e3 },
    { "#": "19 BROOK ST (144-01-01)", $: 2269700 },
    { "#": "24 BROOK ST (145-22-00)", $: 1743700 },
    { "#": "25 BROOK ST (144-02-00)", $: 2068900 },
    { "#": "26 BROOK ST (145-21-01)", $: 1817200 },
    { "#": "27 BROOK ST (144-02-01)", $: 2037600 },
    { "#": "28 BROOK ST (145-21-00)", $: 1316400 },
    { "#": "28 BROOK ST (145-21-00.9)", $: 1892700 },
    { "#": "31 BROOK ST (144-03-00)", $: 2122900 },
    { "#": "32 BROOK ST (145-20-00.9)", $: 0 },
    { "#": "33 BROOK ST (144-04-00)", $: 2091900 },
    { "#": "37 BROOK ST (144-05-00)", $: 2362200 },
    { "#": "40 BROOK ST (145-19-01)", $: 1809700 },
    { "#": "41 BROOK ST (144-06-00)", $: 2117100 },
    { "#": "42 BROOK ST (145-19-00)", $: 1867e3 },
    { "#": "44 BROOK ST (145-18-00.9)", $: 0 },
    { "#": "45 BROOK ST (144-07-00)", $: 1682600 },
    { "#": "47 BROOK ST (144-08-00)", $: 2023100 },
    { "#": "48 BROOK ST (145-17-00)", $: 2055700 },
    { "#": "50 BROOK ST (145-16-00)", $: 1923900 },
    { "#": "52 BROOK ST (145-15-00)", $: 1851700 },
    { "#": "53 BROOK ST (144-09-00)", $: 1904600 },
    { "#": "54 BROOK ST (145-14-00)", $: 1749700 },
    { "#": "55 BROOK ST (144-10-00)", $: 1899900 },
    { "#": "58 BROOK ST (145-13-00)", $: 2363600 },
    { "#": "59 BROOK ST (144-11-00)", $: 2149e3 },
    { "#": "61 BROOK ST (144-12-00)", $: 235e4 },
    { "#": "65 BROOK ST (144-13-00)", $: 2614900 },
    { "#": "69 BROOK ST (152-01-00)", $: 179e4 },
    { "#": "75 BROOK ST (152-02-00.9)", $: 0 },
    { "#": "77 BROOK ST (152-03-00)", $: 826e3 },
    { "#": "77 BROOK ST (152-03-00.9)", $: 1102500 },
    { "#": "79 BROOK ST (152-04-00)", $: 3119300 },
    { "#": "82 BROOK ST (151-15-00)", $: 2526200 },
    { "#": "83 BROOK ST (152-05-00)", $: 2533900 },
    { "#": "86 BROOK ST (151-14-00)", $: 2852900 },
    { "#": "87 BROOK ST (152-06-00)", $: 2162200 },
    { "#": "88 BROOK ST (151-13-00)", $: 1722200 },
    { "#": "90 BROOK ST (151-12-00)", $: 1605400 },
    { "#": "94 BROOK ST (151-11-00)", $: 1886e3 },
    { "#": "96 BROOK ST (151-10-00.9)", $: 0 },
    { "#": "98 BROOK ST (149-01-00.9)", $: 0 },
    { "#": "105 BROOK ST (153-02-00)", $: 2636900 },
    { "#": "106 BROOK ST (149-38-03)", $: 2037e3 },
    { "#": "110 BROOK ST (149-37-00)", $: 296900 },
    { "#": "114 BROOK ST (149-36-00.9)", $: 0 },
    { "#": "116 BROOK ST (149-35-00)", $: 1800200 },
    { "#": "120 BROOK ST (149-34-00.9)", $: 0 },
    { "#": "121 BROOK ST (153-04-00)", $: 3821100 },
    { "#": "129 BROOK ST (153-05-00)", $: 3376800 },
    { "#": "139 BROOK ST (153-06-00)", $: 1105e3 },
    { "#": "139 BROOK ST (153-06-00.9)", $: 0 },
    { "#": "147 BROOK ST (153-07-00.9)", $: 0 },
    { "#": "167 BROOK ST (153-08-00)", $: 1699900 },
    { "#": "0 BROOKLINE AVE (134A-01-00)", $: 15942800 },
    { "#": "553 BROOKLINE AVE (134-14-00)", $: 3853500 },
    { "#": "599 BROOKLINE AVE (137-01-02)", $: 24357500 },
    { "#": "608 BROOKLINE AVE (135-23-00)", $: 216200 },
    { "#": "610 BROOKLINE AVE (135-19-22)", $: 2378200 },
    { "#": "636 BROOKLINE AVE (135-17-18)", $: 1811800 },
    { "#": "646 BROOKLINE AVE (135-15-00)", $: 2858400 },
    { "#": "654 BROOKLINE AVE (135-14-00)", $: 1161800 },
    { "#": "666 BROOKLINE AVE (135-12-13)", $: 2133200 },
    { "#": "676 BROOKLINE AVE (135-10-11)", $: 3975700 },
    { "#": "700 BROOKLINE AVE (135-01-00)", $: 52965e3 },
    { "#": "1 BROOKLINE PL (138-02-00)", $: 97426500 },
    { "#": "2 BROOKLINE PL (138-01-00)", $: 107730500 },
    { "#": "5 BROOKLINE PL (138-03-00)", $: 4237e3 },
    { "#": "10 BROOKLINE PL WEST (139-27-44)", $: 144970800 },
    { "#": "8 BROWNE ST (041-07-00.9)", $: 0 },
    { "#": "10 BROWNE ST (041-06-00)", $: 3229200 },
    { "#": "12 BROWNE ST (041-05-00.9)", $: 0 },
    { "#": "14 BROWNE ST (041-04-00.9)", $: 0 },
    { "#": "16 BROWNE ST (041-03-00)", $: 4114100 },
    { "#": "17 BROWNE ST (039-08-00)", $: 2393e3 },
    { "#": "18 BROWNE ST (041-02-00.9)", $: 0 },
    { "#": "23 BROWNE ST (039-09-00)", $: 3577200 },
    { "#": "36 BROWNE ST (040-08-00.9)", $: 0 },
    { "#": "56 BROWNE ST (040-06-00.9)", $: 0 },
    { "#": "74 BROWNE ST (035-35-00)", $: 4001900 },
    { "#": "77 BROWNE ST (036-18-00)", $: 2969700 },
    { "#": "78 BROWNE ST (035-34-00.9)", $: 0 },
    { "#": "80 BROWNE ST (035-33-00.9)", $: 0 },
    { "#": "82 BROWNE ST (035-32-00.9)", $: 0 },
    { "#": "83 BROWNE ST (036-19-00)", $: 2924800 },
    { "#": "84 BROWNE ST (035-31-00)", $: 2932300 },
    { "#": "85 BROWNE ST (036-20-00)", $: 2504500 },
    { "#": "86 BROWNE ST (035-30-00)", $: 2384300 },
    { "#": "87 BROWNE ST (036-21-00.9)", $: 0 },
    { "#": "88 BROWNE ST (035-29-00)", $: 3206500 },
    { "#": "90 BROWNE ST (035-28-00)", $: 2684400 },
    { "#": "92 BROWNE ST (035-27-00)", $: 2367200 },
    { "#": "94 BROWNE ST (035-26-00)", $: 2048300 },
    { "#": "96 BROWNE ST (035-25-00.9)", $: 0 },
    { "#": "100 BROWNE ST (035-24-00)", $: 2109e3 },
    { "#": "100 BROWNE ST (035-24-00.9)", $: 2109e3 },
    { "#": "101 BROWNE ST (036-22-00)", $: 1990500 },
    { "#": "102 BROWNE ST (035-23-00.9)", $: 0 },
    { "#": "103 BROWNE ST (036-23-00.9)", $: 0 },
    { "#": "105 BROWNE ST (036-24-00.9)", $: 0 },
    { "#": "106 BROWNE ST (035-22-00.9)", $: 0 },
    { "#": "107 BROWNE ST (036-25-00.9)", $: 0 },
    { "#": "110 BROWNE ST (035-21-00.9)", $: 0 },
    { "#": "111 BROWNE ST (036-26-00.9)", $: 0 },
    { "#": "112 BROWNE ST (035-20-00.9)", $: 0 },
    { "#": "115 BROWNE ST (036-27-00)", $: 2263500 },
    { "#": "116 BROWNE ST (035-19-00)", $: 2394e3 },
    { "#": "119 BROWNE ST (036-28-00)", $: 1976300 },
    { "#": "120 BROWNE ST (035-18-00)", $: 4444500 },
    { "#": "121 BROWNE ST (036-29-00)", $: 2332900 },
    { "#": "124 BROWNE ST (035-17-00)", $: 1726800 },
    { "#": "125 BROWNE ST (036-30-00.9)", $: 0 },
    { "#": "126 BROWNE ST (035-16-00.9)", $: 0 },
    { "#": "127 BROWNE ST (036-31-00.9)", $: 0 },
    { "#": "15 BUCKMINSTER RD (192-17-00)", $: 3746500 },
    { "#": "20 BUCKMINSTER RD (253-03-00.9)", $: 0 },
    { "#": "28 BUCKMINSTER RD (253-02-01)", $: 1939200 },
    { "#": "39 BUCKMINSTER RD (231-39-00)", $: 3669400 },
    { "#": "42 BUCKMINSTER RD (252-10-00)", $: 1641400 },
    { "#": "49 BUCKMINSTER RD (231-35-02)", $: 2578100 },
    { "#": "54 BUCKMINSTER RD (252-09-01)", $: 2895200 },
    { "#": "62 BUCKMINSTER RD (252-09-00)", $: 6725600 },
    { "#": "63 BUCKMINSTER RD (231-40-00)", $: 2713700 },
    { "#": "67 BUCKMINSTER RD (231-41-00)", $: 2489100 },
    { "#": "70 BUCKMINSTER RD (252-08-02)", $: 2772800 },
    { "#": "76 BUCKMINSTER RD (252-08-01)", $: 2240400 },
    { "#": "79 BUCKMINSTER RD (231-42-00)", $: 3648300 },
    { "#": "82 BUCKMINSTER RD (252-08-00)", $: 2480800 },
    { "#": "90 BUCKMINSTER RD (252-07-00)", $: 1841e3 },
    { "#": "95 BUCKMINSTER RD (247-16-00)", $: 1797400 },
    { "#": "115 BUCKMINSTER RD (247-18-00)", $: 4659500 },
    { "#": "123 BUCKMINSTER RD (247-19-00)", $: 3265300 },
    { "#": "130 BUCKMINSTER RD (252-06-00)", $: 2293700 },
    { "#": "133 BUCKMINSTER RD (247-20-00)", $: 2375100 },
    { "#": "141 BUCKMINSTER RD (247-21-00)", $: 3808500 },
    { "#": "149 BUCKMINSTER RD (247-22-00)", $: 3467400 },
    { "#": "150 BUCKMINSTER RD (251-07-00)", $: 1948100 },
    { "#": "161 BUCKMINSTER RD (247-23-00)", $: 2966700 },
    { "#": "169 BUCKMINSTER RD (247-24-00)", $: 2847500 },
    { "#": "172 BUCKMINSTER RD (248-09-00)", $: 2798600 },
    { "#": "177 BUCKMINSTER RD (247-25-00)", $: 3899500 },
    { "#": "182 BUCKMINSTER RD (248-08-00)", $: 3988200 },
    { "#": "185 BUCKMINSTER RD (247-26-00)", $: 4566100 },
    { "#": "191 BUCKMINSTER RD (247-27-00)", $: 2682e3 },
    { "#": "194 BUCKMINSTER RD (248-07-00)", $: 2554500 },
    { "#": "201 BUCKMINSTER RD (247-28-00)", $: 3294900 },
    { "#": "206 BUCKMINSTER RD (248-06-00)", $: 3819100 },
    { "#": "209 BUCKMINSTER RD (247-29-00)", $: 3029300 },
    { "#": "214 BUCKMINSTER RD (248-05-00)", $: 2499600 },
    { "#": "219 BUCKMINSTER RD (247-30-00)", $: 2424400 },
    { "#": "220 BUCKMINSTER RD (248-04-00)", $: 3497200 },
    { "#": "230 BUCKMINSTER RD (248-03-00)", $: 2914700 },
    { "#": "233 BUCKMINSTER RD (246-03-00)", $: 3183300 },
    { "#": "236 BUCKMINSTER RD (248-02-00)", $: 2642100 },
    { "#": "241 BUCKMINSTER RD (246-04-00)", $: 2914100 },
    { "#": "248 BUCKMINSTER RD (248-01-00)", $: 5455700 },
    { "#": "249 BUCKMINSTER RD (246-05-00)", $: 2786600 },
    { "#": "270 BUCKMINSTER RD (244-04-01)", $: 2718500 },
    { "#": "282 BUCKMINSTER RD (244-04-00)", $: 3500700 },
    { "#": "283 BUCKMINSTER RD (243-08-00)", $: 2815100 },
    { "#": "291 BUCKMINSTER RD (243-09-00)", $: 3852900 },
    { "#": "294 BUCKMINSTER RD (244-03-00)", $: 5629600 },
    { "#": "297 BUCKMINSTER RD (243-10-00)", $: 3057300 },
    { "#": "305 BUCKMINSTER RD (243-11-00)", $: 2353300 },
    { "#": "306 BUCKMINSTER RD (244-02-00)", $: 3563e3 },
    { "#": "309 BUCKMINSTER RD (243-12-00)", $: 1905e3 },
    { "#": "315 BUCKMINSTER RD (243-13-00)", $: 2977e3 },
    { "#": "337 BUCKMINSTER RD (258-01-00)", $: 4741500 },
    { "#": "345 BUCKMINSTER RD (258-02-00)", $: 5924700 },
    { "#": "348 BUCKMINSTER RD (257-11-00)", $: 3920300 },
    { "#": "355 BUCKMINSTER RD (258-03-04)", $: 6552300 },
    { "#": "364 BUCKMINSTER RD (257-10-00)", $: 7280600 },
    { "#": "0 CABOT ST (437-05-02)", $: 168e3 },
    { "#": "0 CABOT ST (437-47-02)", $: 136900 },
    { "#": "100 CABOT ST (437-55-00)", $: 8230500 },
    { "#": "107 CABOT ST (437-59-00)", $: 1270500 },
    { "#": "120 CABOT ST (437-54-00)", $: 7479e3 },
    { "#": "130 CABOT ST (437-53-00)", $: 7597100 },
    { "#": "161 CABOT ST (437-44-00)", $: 5410400 },
    { "#": "177 CABOT ST (437-43-00)", $: 4453200 },
    { "#": "180 CABOT ST (437-48-00)", $: 7427200 },
    { "#": "192 CABOT ST (437-49-00)", $: 134300 },
    { "#": "195 CABOT ST (437-42-00)", $: 6606400 },
    { "#": "0 CAMERON ST (186-08-00)", $: 0 },
    { "#": "11 CAMERON ST (188-09-00)", $: 2441100 },
    { "#": "11 CAMERON ST (188-09-00.9)", $: 2441100 },
    { "#": "15 CAMERON ST (188-10-00)", $: 1324700 },
    { "#": "20 CAMERON ST (189-09-10.9)", $: 0 },
    { "#": "23 CAMERON ST (188-11-00)", $: 876e3 },
    { "#": "30 CAMERON ST (189-06-08.9)", $: 0 },
    { "#": "40 CAMERON ST (189-05-01)", $: 3732200 },
    { "#": "43 CAMERON ST (187-08-00)", $: 470200 },
    { "#": "46 CAMERON ST (189-05-00)", $: 159800 },
    { "#": "46 CAMERON ST (189-05-00.9)", $: 1315400 },
    { "#": "48 CAMERON ST (189-04-00)", $: 771200 },
    { "#": "48 CAMERON ST (189-04-00.9)", $: 809900 },
    { "#": "58 CAMERON ST (186-08-00.9)", $: 3815500 },
    { "#": "63 CAMERON ST (186-07-00)", $: 255100 },
    { "#": "3 CARLTON ST (114-01-00)", $: 2582400 },
    { "#": "5 CARLTON ST (114-01-01)", $: 2548300 },
    { "#": "11 CARLTON ST (114-01-02)", $: 2920700 },
    { "#": "15 CARLTON ST (114-02-00)", $: 3000600 },
    { "#": "17 CARLTON ST (114-03-00.9)", $: 0 },
    { "#": "22 CARLTON ST (115-02-00)", $: 5846500 },
    { "#": "37 CARLTON ST (112-01-02)", $: 3419600 },
    { "#": "40 CARLTON ST (116-01-25)", $: 11547e3 },
    { "#": "41 CARLTON ST (112-03-00.9)", $: 0 },
    { "#": "43 CARLTON ST (112-04-00.9)", $: 0 },
    { "#": "45 CARLTON ST (112-05-00)", $: 3414900 },
    { "#": "67 CARLTON ST (001-15-00.9)", $: 0 },
    { "#": "71 CARLTON ST (001-16-00)", $: 2367900 },
    { "#": "79 CARLTON ST (001-17-00)", $: 3941900 },
    { "#": "82 CARLTON ST (009A-07-00)", $: 3419600 },
    { "#": "89 CARLTON ST (001-18-00)", $: 3309100 },
    { "#": "90 CARLTON ST (009A-06-00)", $: 2966700 },
    { "#": "95 CARLTON ST (001-19-00)", $: 5047100 },
    { "#": "98 CARLTON ST (009A-05-00)", $: 4555400 },
    { "#": "111 CARLTON ST (002-06-00)", $: 3453200 },
    { "#": "121 CARLTON ST (002-07-00)", $: 3753700 },
    { "#": "122 CARLTON ST (003-05-00)", $: 2420200 },
    { "#": "131 CARLTON ST (005-15-00)", $: 4487e3 },
    { "#": "132 CARLTON ST (004-04-00)", $: 4984700 },
    { "#": "141 CARLTON ST (005-01-00)", $: 3349700 },
    { "#": "146 CARLTON ST (004-03-00)", $: 1994900 },
    { "#": "5 CARY RD (434-05-00)", $: 1573300 },
    { "#": "9 CARY RD (434-06-00)", $: 2408200 },
    { "#": "10 CARY RD (435-02-00)", $: 3819500 },
    { "#": "17 CARY RD (434-07-00)", $: 1995200 },
    { "#": "30 CATLIN RD (254-02-03)", $: 2864200 },
    { "#": "31 CATLIN RD (254-15-02)", $: 4743500 },
    { "#": "2 CEDAR RD (419B-16-00)", $: 2242e3 },
    { "#": "7 CEDAR RD (420-03-00)", $: 2164600 },
    { "#": "15 CEDAR RD (420-02-00)", $: 4309500 },
    { "#": "16 CEDAR RD (419B-03-00)", $: 2457300 },
    { "#": "21 CEDAR RD (420-01-00)", $: 5203900 },
    { "#": "30 CEDAR RD (419B-04-00)", $: 2997300 },
    { "#": "37 CEDAR RD (420-23-00)", $: 4156500 },
    { "#": "40 CEDAR RD (419B-05-00)", $: 3458500 },
    { "#": "45 CEDAR RD (420-22-00)", $: 4533700 },
    { "#": "48 CEDAR RD (419B-06-01)", $: 2970100 },
    { "#": "63 CEDAR RD (420-21-00)", $: 4553200 },
    { "#": "12 CENTRE ST (083-07-00)", $: 5578900 },
    { "#": "25 CENTRE ST (082-14-00)", $: 10468400 },
    { "#": "30 CENTRE ST (083-06-00)", $: 2074600 },
    { "#": "32 CENTRE ST (083-05-00)", $: 2331800 },
    { "#": "34 CENTRE ST (083-04-00)", $: 1966100 },
    { "#": "40 CENTRE ST (083-03-00)", $: 3252e3 },
    { "#": "41 CENTRE ST (082-20-00.9)", $: 0 },
    { "#": "51 CENTRE ST (082-21-00)", $: 2855600 },
    { "#": "53 CENTRE ST (082-22-00)", $: 2690100 },
    { "#": "61 CENTRE ST (082-23-00)", $: 2693e3 },
    { "#": "62 CENTRE ST (080-04-00)", $: 4106600 },
    { "#": "69 CENTRE ST (081-06-00.9)", $: 0 },
    { "#": "70 CENTRE ST (080-02-00)", $: 18821800 },
    { "#": "75 CENTRE ST (081-07-00)", $: 3050800 },
    { "#": "85 CENTRE ST (078-09-00.9)", $: 0 },
    { "#": "93 CENTRE ST (078-12-00.9)", $: 0 },
    { "#": "95 CENTRE ST (078-13-00.9)", $: 0 },
    { "#": "97 CENTRE ST (078-14-00)", $: 2727200 },
    { "#": "103 CENTRE ST (078-15-00.9)", $: 0 },
    { "#": "107 CENTRE ST (078-16-00.9)", $: 0 },
    { "#": "108 CENTRE ST (079-20-00)", $: 2293e3 },
    { "#": "121 CENTRE ST (078-17-00.9)", $: 0 },
    { "#": "123 CENTRE ST (078-18-00)", $: 2900200 },
    { "#": "129 CENTRE ST (078-19-00)", $: 2671800 },
    { "#": "4 CHANNING RD (255-01-00)", $: 4324400 },
    { "#": "4 CHANNING RD (255-01-01)", $: 4536200 },
    { "#": "14 CHANNING RD (255-12-00)", $: 3741700 },
    { "#": "19 CHANNING RD (256-04-00)", $: 4546600 },
    { "#": "27 CHANNING RD (256-05-00)", $: 2905800 },
    { "#": "30 CHANNING RD (255-10-00)", $: 3037e3 },
    { "#": "38 CHANNING RD (255-09-00)", $: 2640700 },
    { "#": "46 CHANNING RD (255-08-00)", $: 2113700 },
    { "#": "20 CHAPEL ST (121-04-00.9)", $: 0 },
    { "#": "20 CHAPEL ST (121-04-00.9)", $: 0 },
    { "#": "11 CHARLES ST (161-05-06)", $: 6209e3 },
    { "#": "14 CHATHAM CIR (118-07-00)", $: 2859500 },
    { "#": "15 CHATHAM CIR (118-04-00)", $: 2501100 },
    { "#": "17 CHATHAM CIR (118-05-00)", $: 3792e3 },
    { "#": "18 CHATHAM CIR (118-06-00)", $: 3237300 },
    { "#": "7 CHATHAM ST (117-02-00)", $: 4487100 },
    { "#": "15 CHATHAM ST (117-03-00)", $: 6294900 },
    { "#": "33 CHATHAM ST (118-01-00)", $: 3390500 },
    { "#": "39 CHATHAM ST (118-02-00)", $: 3281600 },
    { "#": "47 CHATHAM ST (118-03-00)", $: 3322900 },
    { "#": "57 CHATHAM ST (118-08-00)", $: 2536200 },
    { "#": "65 CHATHAM ST (118-09-00)", $: 3472300 },
    { "#": "73 CHATHAM ST (118-10-00)", $: 3653300 },
    { "#": "17 CHESHAM RD (246-06-00)", $: 3011300 },
    { "#": "25 CHESHAM RD (246-07-00)", $: 1900200 },
    { "#": "26 CHESHAM RD (245-09-00)", $: 2472400 },
    { "#": "399 CHESTNUT HILL AVE (238-01-00)", $: 22768800 },
    { "#": "400 CHESTNUT HILL AVE (237-13-00)", $: 13598100 },
    { "#": "416 CHESTNUT HILL AVE (239-01-00)", $: 2502200 },
    { "#": "419 CHESTNUT HILL AVE (264-01-01)", $: 40100 },
    { "#": "447 CHESTNUT HILL AVE (263-06-00)", $: 2478e3 },
    { "#": "452 CHESTNUT HILL AVE (241-07-00)", $: 3226900 },
    { "#": "459 CHESTNUT HILL AVE (263-07-00)", $: 3011100 },
    { "#": "462 CHESTNUT HILL AVE (241-06-00)", $: 2538200 },
    { "#": "473 CHESTNUT HILL AVE (259-01-00)", $: 2527700 },
    { "#": "474 CHESTNUT HILL AVE (242-03-00)", $: 1829700 },
    { "#": "505 CHESTNUT HILL AVE (267-19-00)", $: 2460700 },
    { "#": "509 CHESTNUT HILL AVE (267-20-00)", $: 3244800 },
    { "#": "511 CHESTNUT HILL AVE (267-21-00)", $: 6849600 },
    { "#": "540 CHESTNUT HILL AVE (257-08-09)", $: 4811e3 },
    { "#": "545 CHESTNUT HILL AVE (267-22-00)", $: 3629200 },
    { "#": "559 CHESTNUT HILL AVE (267-23-00)", $: 2547100 },
    { "#": "591 CHESTNUT HILL AVE (269A-17-19)", $: 423e4 },
    { "#": "605 CHESTNUT HILL AVE (269A-20-00)", $: 2038800 },
    { "#": "615 CHESTNUT HILL AVE (269A-21-00)", $: 2040900 },
    { "#": "616 CHESTNUT HILL AVE (256A-17-00)", $: 1128200 },
    { "#": "622 CHESTNUT HILL AVE (256A-16-00)", $: 955800 },
    { "#": "625 CHESTNUT HILL AVE (269A-22-00)", $: 1224700 },
    { "#": "628 CHESTNUT HILL AVE (256A-15-00)", $: 1016200 },
    { "#": "629 CHESTNUT HILL AVE (269A-23-00.9)", $: 0 },
    { "#": "633 CHESTNUT HILL AVE (269A-24-00)", $: 1374800 },
    { "#": "634 CHESTNUT HILL AVE (256A-14-00)", $: 1234200 },
    { "#": "635 CHESTNUT HILL AVE (269A-25-00)", $: 127e4 },
    { "#": "635 CHESTNUT HILL AVE (269A-25-00.9)", $: 2241e3 },
    { "#": "639 CHESTNUT HILL AVE (269A-26-00.9)", $: 0 },
    { "#": "641 CHESTNUT HILL AVE (269A-27-00)", $: 867700 },
    { "#": "642 CHESTNUT HILL AVE (256A-13-02)", $: 1532500 },
    { "#": "643 CHESTNUT HILL AVE (269A-28-00.9)", $: 0 },
    { "#": "645 CHESTNUT HILL AVE (269A-29-00)", $: 886400 },
    { "#": "650 CHESTNUT HILL AVE (256A-12-01)", $: 995200 },
    { "#": "651 CHESTNUT HILL AVE (269A-30-00)", $: 2018300 },
    { "#": "653 CHESTNUT HILL AVE (269A-31-00)", $: 1088800 },
    { "#": "654 CHESTNUT HILL AVE (256A-12-00)", $: 1299400 },
    { "#": "656 CHESTNUT HILL AVE (256A-11-01)", $: 975500 },
    { "#": "657 CHESTNUT HILL AVE (269A-32-00)", $: 1001e3 },
    { "#": "660 CHESTNUT HILL AVE (256A-11-00)", $: 1035400 },
    { "#": "661 CHESTNUT HILL AVE (269A-33-00)", $: 1357700 },
    { "#": "661 CHESTNUT HILL AVE (269A-33-00.9)", $: 1357700 },
    { "#": "662 CHESTNUT HILL AVE (256A-10-00)", $: 1670500 },
    { "#": "667 CHESTNUT HILL AVE (269A-34-00)", $: 1448e3 },
    { "#": "671 CHESTNUT HILL AVE (269A-35-00)", $: 1270400 },
    { "#": "672 CHESTNUT HILL AVE (256A-09-00)", $: 2298400 },
    { "#": "675 CHESTNUT HILL AVE (269A-36-00)", $: 1065500 },
    { "#": "1 CHESTNUT PL (329-13-00)", $: 6298500 },
    { "#": "11 CHESTNUT PL (329-14-00)", $: 3951900 },
    { "#": "11 CHESTNUT PL (329-14-01)", $: 4585800 },
    { "#": "13 CHESTNUT PL (329-14-02)", $: 1642100 },
    { "#": "18 CHESTNUT PL (330-11-00.9)", $: 0 },
    { "#": "29 CHESTNUT PL (329-15-00)", $: 3576600 },
    { "#": "35 CHESTNUT PL (329-16-00)", $: 3653100 },
    { "#": "0 CHESTNUT ST (316-15-05.9)", $: 0 },
    { "#": "0 CHESTNUT ST (316A-12-01)", $: 120100 },
    { "#": "10 CHESTNUT ST (317-07-00)", $: 1637100 },
    { "#": "14 CHESTNUT ST (317-06-00)", $: 1910600 },
    { "#": "20 CHESTNUT ST (317-05-00)", $: 2205500 },
    { "#": "26 CHESTNUT ST (317-04-00)", $: 3646300 },
    { "#": "27 CHESTNUT ST (329-12-00)", $: 2577600 },
    { "#": "33 CHESTNUT ST (329-12-01)", $: 2213e3 },
    { "#": "36 CHESTNUT ST (317-03-00)", $: 1093400 },
    { "#": "40 CHESTNUT ST (317-02-00)", $: 1136400 },
    { "#": "46 CHESTNUT ST (317-01-00)", $: 1404800 },
    { "#": "52 CHESTNUT ST (316A-09-00)", $: 1369600 },
    { "#": "56 CHESTNUT ST (316A-08-00)", $: 879e3 },
    { "#": "60 CHESTNUT ST (316A-07-00.9)", $: 0 },
    { "#": "62 CHESTNUT ST (316A-06-00.9)", $: 0 },
    { "#": "66 CHESTNUT ST (316A-05-00)", $: 1533e3 },
    { "#": "68 CHESTNUT ST (316A-04-00.9)", $: 0 },
    { "#": "70 CHESTNUT ST (316A-03-00.9)", $: 0 },
    { "#": "74 CHESTNUT ST (316A-02-00.9)", $: 0 },
    { "#": "79 CHESTNUT ST (330-08-01.9)", $: 0 },
    { "#": "80 CHESTNUT ST (316A-01-00)", $: 1975600 },
    { "#": "86 CHESTNUT ST (316-20-00)", $: 1519300 },
    { "#": "90 CHESTNUT ST (316-19-00.9)", $: 0 },
    { "#": "96 CHESTNUT ST (316-18-00.9)", $: 0 },
    { "#": "98 CHESTNUT ST (316-17-00)", $: 987400 },
    { "#": "100 CHESTNUT ST (316-16-00)", $: 902600 },
    { "#": "108 CHESTNUT ST (316-15-00)", $: 1720400 },
    { "#": "108 CHESTNUT ST (316-15-01)", $: 81500 },
    { "#": "108 CHESTNUT ST (316-15-02)", $: 80600 },
    { "#": "108 CHESTNUT ST (316-15-04)", $: 81100 },
    { "#": "110 CHESTNUT ST (316-14-00)", $: 1188200 },
    { "#": "110 CHESTNUT ST (316-14-01.9)", $: 0 },
    { "#": "111 CHESTNUT ST (330-08-00)", $: 925300 },
    { "#": "112 CHESTNUT ST (316-13-00.9)", $: 0 },
    { "#": "112 CHESTNUT ST (316-13-01)", $: 1108800 },
    { "#": "114 CHESTNUT ST (316-12-00.9)", $: 0 },
    { "#": "115 CHESTNUT ST (330-07-02)", $: 848900 },
    { "#": "116 CHESTNUT ST (316-11-00)", $: 1457300 },
    { "#": "117 CHESTNUT ST (330-07-01)", $: 1167800 },
    { "#": "121 CHESTNUT ST (330-07-00.9)", $: 0 },
    { "#": "122 CHESTNUT ST (316-10-00)", $: 1067300 },
    { "#": "124 CHESTNUT ST (316-09-00.9)", $: 0 },
    { "#": "126 CHESTNUT ST (316-08-00.9)", $: 0 },
    { "#": "127 CHESTNUT ST (330-06-02)", $: 1241800 },
    { "#": "128 CHESTNUT ST (316-07-00.9)", $: 0 },
    { "#": "133 CHESTNUT ST (330-06-01)", $: 2718300 },
    { "#": "133 CHESTNUT ST (330-06-01.9)", $: 2718300 },
    { "#": "135 CHESTNUT ST (330-06-00.9)", $: 0 },
    { "#": "141 CHESTNUT ST (330-05-02)", $: 1024200 },
    { "#": "145 CHESTNUT ST (330-05-01)", $: 936200 },
    { "#": "148 CHESTNUT ST (303-01-00)", $: 1200600 },
    { "#": "149 CHESTNUT ST (330-05-00)", $: 1456500 },
    { "#": "156 CHESTNUT ST (302-05-00.9)", $: 0 },
    { "#": "160 CHESTNUT ST (302-04-00)", $: 1605300 },
    { "#": "162 CHESTNUT ST (302-03-00)", $: 1740300 },
    { "#": "165 CHESTNUT ST (330-02-15)", $: 16303600 },
    { "#": "166 CHESTNUT ST (302-02-00.9)", $: 0 },
    { "#": "167 CHESTNUT ST (330-01-00)", $: 62200 },
    { "#": "6 CHILTON ST (009-07-00)", $: 4178800 },
    { "#": "7 CHILTON ST (009A-01-00)", $: 2707900 },
    { "#": "15 CHILTON ST (009A-02-00)", $: 3021200 },
    { "#": "16 CHILTON ST (009-06-00)", $: 4080200 },
    { "#": "21 CHILTON ST (009A-03-00)", $: 3428100 },
    { "#": "26 CHILTON ST (009-04-05)", $: 4629400 },
    { "#": "27 CHILTON ST (009A-04-00)", $: 2615900 },
    { "#": "208 CHURCH ST (379-01-00)", $: 583400 },
    { "#": "6 CHURCHILL ST (009B-06-00)", $: 2479e3 },
    { "#": "12 CHURCHILL ST (009B-05-00)", $: 2935100 },
    { "#": "18 CHURCHILL ST (009B-04-00)", $: 2079e3 },
    { "#": "24 CHURCHILL ST (009B-03-00)", $: 1597700 },
    { "#": "30 CHURCHILL ST (009B-01-00)", $: 2161600 },
    { "#": "4 CIRCUIT RD (281-06-00)", $: 2354400 },
    { "#": "5 CIRCUIT RD (279-11-00)", $: 2949800 },
    { "#": "10 CIRCUIT RD (281-05-00)", $: 2384800 },
    { "#": "15 CIRCUIT RD (279-12-01)", $: 3644200 },
    { "#": "16 CIRCUIT RD (281-04-00)", $: 2109600 },
    { "#": "20 CIRCUIT RD (281-03-00)", $: 2644900 },
    { "#": "23 CIRCUIT RD (279-12-02)", $: 3890700 },
    { "#": "26 CIRCUIT RD (281-02-00)", $: 2148500 },
    { "#": "33 CIRCUIT RD (279-13-14)", $: 3489e3 },
    { "#": "35 CIRCUIT RD (279-15-00)", $: 1086300 },
    { "#": "37 CIRCUIT RD (279-16-00)", $: 3718400 },
    { "#": "43 CIRCUIT RD (279-17-18)", $: 3218e3 },
    { "#": "44 CIRCUIT RD (281-01-00)", $: 3069800 },
    { "#": "62 CIRCUIT RD (280-02-00)", $: 3499800 },
    { "#": "70 CIRCUIT RD (280-01-00)", $: 3548300 },
    { "#": "2 CITY VIEW RD (091-44-00)", $: 1574800 },
    { "#": "6 CITY VIEW RD (091-43-00)", $: 1688600 },
    { "#": "10 CITY VIEW RD (091-42-00)", $: 1526100 },
    { "#": "14 CITY VIEW RD (091-41-00)", $: 1399800 },
    { "#": "18 CITY VIEW RD (091-40-00)", $: 1627700 },
    { "#": "22 CITY VIEW RD (091-39-00)", $: 1907600 },
    { "#": "0 CLAFLIN PATH (220-08-00)", $: 52500 },
    { "#": "7 CLAFLIN PATH (220-11-00.9)", $: 0 },
    { "#": "11 CLAFLIN PATH (220-12-00)", $: 2292400 },
    { "#": "15 CLAFLIN PATH (220-13-00.9)", $: 0 },
    { "#": "16 CLAFLIN PATH (220-15-00)", $: 33e3 },
    { "#": "2 CLAFLIN RD (220-72-00)", $: 9337400 },
    { "#": "6 CLAFLIN RD (220-71-00)", $: 2738900 },
    { "#": "6 CLAFLIN RD (220-71-00.9)", $: 0 },
    { "#": "9 CLAFLIN RD (221-01-00)", $: 2733400 },
    { "#": "10 CLAFLIN RD (220-70-00.9)", $: 0 },
    { "#": "11 CLAFLIN RD (221-02-00.9)", $: 0 },
    { "#": "14 CLAFLIN RD (220-69-00.9)", $: 0 },
    { "#": "15 CLAFLIN RD (221-03-00.9)", $: 0 },
    { "#": "16 CLAFLIN RD (220-68-00.9)", $: 0 },
    { "#": "19 CLAFLIN RD (221-04-00)", $: 2909300 },
    { "#": "20 CLAFLIN RD (220-67-00.9)", $: 0 },
    { "#": "22 CLAFLIN RD (220-66-00)", $: 2481300 },
    { "#": "23 CLAFLIN RD (221-05-00.9)", $: 0 },
    { "#": "26 CLAFLIN RD (220-65-00)", $: 3541600 },
    { "#": "27 CLAFLIN RD (221-06-00.9)", $: 0 },
    { "#": "30 CLAFLIN RD (220-64-00)", $: 3047800 },
    { "#": "31 CLAFLIN RD (221-07-00)", $: 1080200 },
    { "#": "31 CLAFLIN RD (221-07-00.9)", $: 2543800 },
    { "#": "32 CLAFLIN RD (220-63-00)", $: 2664100 },
    { "#": "35 CLAFLIN RD (221-08-00)", $: 2123100 },
    { "#": "36 CLAFLIN RD (220-62-00.9)", $: 0 },
    { "#": "37 CLAFLIN RD (221-09-00)", $: 4185900 },
    { "#": "40 CLAFLIN RD (220-61-00.9)", $: 0 },
    { "#": "45 CLARENCE ST (068-13-00)", $: 2253600 },
    { "#": "8 CLARK CT (317-14-00)", $: 1438900 },
    { "#": "9 CLARK CT (317-10-00)", $: 1206800 },
    { "#": "12 CLARK CT (317-13-00)", $: 1459300 },
    { "#": "15 CLARK CT (317-11-00)", $: 1604100 },
    { "#": "16 CLARK CT (317-12-00)", $: 1532300 },
    { "#": "0 CLARK RD (192-08-01)", $: 0 },
    { "#": "2 CLARK RD (192-09-00)", $: 0 },
    { "#": "2 CLARK RD (192-09-11)", $: 21947500 },
    { "#": "7 CLARK RD (191-18-00.9)", $: 0 },
    { "#": "11 CLARK RD (191-19-00.9)", $: 0 },
    { "#": "17 CLARK RD (191-20-00)", $: 2082e3 },
    { "#": "21 CLARK RD (191-21-00)", $: 2271500 },
    { "#": "25 CLARK RD (191-21-01)", $: 2121300 },
    { "#": "32 CLARK RD (192-07-02)", $: 1933900 },
    { "#": "33 CLARK RD (191-22-00.9)", $: 0 },
    { "#": "36 CLARK RD (192-07-01)", $: 1921300 },
    { "#": "39 CLARK RD (191-23-00)", $: 2707400 },
    { "#": "40 CLARK RD (192-07-00)", $: 1918400 },
    { "#": "43 CLARK RD (191-24-00.9)", $: 0 },
    { "#": "44 CLARK RD (192-06-02)", $: 2554300 },
    { "#": "47 CLARK RD (191-25-00.9)", $: 0 },
    { "#": "48 CLARK RD (192-06-01.9)", $: 0 },
    { "#": "51 CLARK RD (191-26-00)", $: 1782700 },
    { "#": "54 CLARK RD (192-05-00)", $: 2092500 },
    { "#": "55 CLARK RD (191-27-00)", $: 2052e3 },
    { "#": "61 CLARK RD (191-28-00)", $: 2500700 },
    { "#": "62 CLARK RD (192-04-00.9)", $: 0 },
    { "#": "70 CLARK RD (192-03-00)", $: 1793100 },
    { "#": "76 CLARK RD (192-02-00)", $: 1495200 },
    { "#": "76 CLARK RD (192-02-00.9)", $: 3109600 },
    { "#": "83 CLARK RD (191-29-00)", $: 1107200 },
    { "#": "95 CLARK RD (229-01-00)", $: 21e5 },
    { "#": "98 CLARK RD (231-36-02)", $: 1167100 },
    { "#": "101 CLARK RD (229-02-00)", $: 1851600 },
    { "#": "104 CLARK RD (231-36-01)", $: 1499500 },
    { "#": "107 CLARK RD (229-03-00)", $: 2632100 },
    { "#": "110 CLARK RD (231-38-02)", $: 2094e3 },
    { "#": "115 CLARK RD (229-04-00)", $: 2467900 },
    { "#": "116 CLARK RD (231-35-01)", $: 2129400 },
    { "#": "121 CLARK RD (229-05-00)", $: 2318900 },
    { "#": "122 CLARK RD (231-35-00)", $: 2478200 },
    { "#": "126 CLARK RD (231-34-00)", $: 2118600 },
    { "#": "129 CLARK RD (229-06-00)", $: 1861500 },
    { "#": "132 CLARK RD (231-33-00.9)", $: 0 },
    { "#": "135 CLARK RD (229-07-00)", $: 2120500 },
    { "#": "140 CLARK RD (231-32-00)", $: 2276100 },
    { "#": "141 CLARK RD (229-08-00)", $: 1664200 },
    { "#": "144 CLARK RD (231-31-00)", $: 2325500 },
    { "#": "147 CLARK RD (229-09-00)", $: 1656e3 },
    { "#": "150 CLARK RD (231-30-00.9)", $: 0 },
    { "#": "152 CLARK RD (231-29-00)", $: 2365700 },
    { "#": "157 CLARK RD (229-10-00)", $: 184e4 },
    { "#": "160 CLARK RD (231-28-00)", $: 1828400 },
    { "#": "161 CLARK RD (229-11-00)", $: 1148300 },
    { "#": "166 CLARK RD (231-27-00)", $: 1626400 },
    { "#": "169 CLARK RD (229-12-00)", $: 1845200 },
    { "#": "170 CLARK RD (231-26-00)", $: 1408100 },
    { "#": "175 CLARK RD (229-13-00)", $: 1493e3 },
    { "#": "180 CLARK RD (231-24-25)", $: 2068400 },
    { "#": "181 CLARK RD (229-14-00)", $: 1884e3 },
    { "#": "184 CLARK RD (231-23-00)", $: 1766900 },
    { "#": "187 CLARK RD (229-15-00)", $: 1111700 },
    { "#": "188 CLARK RD (231-22-00.9)", $: 0 },
    { "#": "193 CLARK RD (229-16-00)", $: 1483e3 },
    { "#": "194 CLARK RD (231-21-00)", $: 1749800 },
    { "#": "198 CLARK RD (231-20-00)", $: 1449500 },
    { "#": "199 CLARK RD (229-17-00)", $: 1663400 },
    { "#": "204 CLARK RD (231-19-00)", $: 1696900 },
    { "#": "205 CLARK RD (229-18-00)", $: 1484700 },
    { "#": "206 CLARK RD (231-18-00)", $: 1812200 },
    { "#": "209 CLARK RD (229-19-00)", $: 1316400 },
    { "#": "212 CLARK RD (231-17-00)", $: 1813300 },
    { "#": "215 CLARK RD (229-20-00)", $: 1354800 },
    { "#": "216 CLARK RD (231-16-00)", $: 2346900 },
    { "#": "219 CLARK RD (229-21-00)", $: 1681100 },
    { "#": "222 CLARK RD (231-15-00)", $: 1330200 },
    { "#": "225 CLARK RD (229-22-00)", $: 1384800 },
    { "#": "226 CLARK RD (231-14-00)", $: 1658200 },
    { "#": "229 CLARK RD (229-23-00)", $: 1587100 },
    { "#": "230 CLARK RD (231-13-00)", $: 1416900 },
    { "#": "233 CLARK RD (229-24-00)", $: 1364700 },
    { "#": "238 CLARK RD (231-12-00)", $: 2083200 },
    { "#": "239 CLARK RD (229-25-00)", $: 1714e3 },
    { "#": "242 CLARK RD (231-11-00)", $: 1840400 },
    { "#": "243 CLARK RD (229-26-00)", $: 1528400 },
    { "#": "246 CLARK RD (231-10-00)", $: 1810800 },
    { "#": "250 CLARK RD (231-09-00)", $: 1799800 },
    { "#": "253 CLARK RD (229-27-00)", $: 2807600 },
    { "#": "255 CLARK RD (229-27-28)", $: 891300 },
    { "#": "255 CLARK RD (229-28-00)", $: 2856300 },
    { "#": "256 CLARK RD (231-08-00)", $: 1398100 },
    { "#": "260 CLARK RD (231-07-00)", $: 1614e3 },
    { "#": "261 CLARK RD (229-29-00)", $: 1915200 },
    { "#": "266 CLARK RD (231-06-00)", $: 1599e3 },
    { "#": "269 CLARK RD (229-30-00)", $: 1604400 },
    { "#": "270 CLARK RD (231-05-00)", $: 2159900 },
    { "#": "279 CLARK RD (229-31-00)", $: 1572300 },
    { "#": "280 CLARK RD (231-04-00)", $: 2420500 },
    { "#": "285 CLARK RD (229-32-00)", $: 1761400 },
    { "#": "286 CLARK RD (231-03-00)", $: 1740600 },
    { "#": "295 CLARK RD (229-33-00)", $: 1741600 },
    { "#": "301 CLARK RD (229-34-00)", $: 1662100 },
    { "#": "305 CLARK RD (229-35-00)", $: 1912700 },
    { "#": "308 CLARK RD (230-06-02)", $: 2253700 },
    { "#": "311 CLARK RD (229-36-00)", $: 1501900 },
    { "#": "314 CLARK RD (230-06-00)", $: 2890700 },
    { "#": "314 CLARK RD (230-06-01)", $: 1756700 },
    { "#": "317 CLARK RD (229-37-00)", $: 1211e3 },
    { "#": "323 CLARK RD (229-38-00)", $: 1678900 },
    { "#": "326 CLARK RD (230-05-00)", $: 2075800 },
    { "#": "327 CLARK RD (229-39-00)", $: 1745900 },
    { "#": "330 CLARK RD (230-04-00)", $: 2419800 },
    { "#": "333 CLARK RD (229-40-00)", $: 1815300 },
    { "#": "336 CLARK RD (230-03-00)", $: 1731800 },
    { "#": "339 CLARK RD (229-41-00)", $: 1516e3 },
    { "#": "342 CLARK RD (230-02-00)", $: 1730900 },
    { "#": "349 CLARK RD (229-42-00)", $: 1679600 },
    { "#": "351 CLARK RD (229-43-00)", $: 1669100 },
    { "#": "11 CLEARWATER RD (377-15-00)", $: 1403200 },
    { "#": "12 CLEARWATER RD (376A-31-00)", $: 1058200 },
    { "#": "15 CLEARWATER RD (377-16-00)", $: 1044400 },
    { "#": "17 CLEARWATER RD (377-17-00)", $: 1106600 },
    { "#": "18 CLEARWATER RD (376A-30-00)", $: 999400 },
    { "#": "21 CLEARWATER RD (377-18-00)", $: 874800 },
    { "#": "22 CLEARWATER RD (376A-29-00)", $: 122e4 },
    { "#": "25 CLEARWATER RD (377-19-00)", $: 1056400 },
    { "#": "26 CLEARWATER RD (376A-28-00)", $: 1278600 },
    { "#": "30 CLEARWATER RD (376A-27-00)", $: 1086300 },
    { "#": "33 CLEARWATER RD (377-21-00)", $: 1331200 },
    { "#": "34 CLEARWATER RD (376A-26-00)", $: 1178e3 },
    { "#": "38 CLEARWATER RD (376A-25-00)", $: 1096200 },
    { "#": "39 CLEARWATER RD (377-22-00)", $: 978900 },
    { "#": "42 CLEARWATER RD (376A-24-00)", $: 1085700 },
    { "#": "45 CLEARWATER RD (377-23-00)", $: 987300 },
    { "#": "46 CLEARWATER RD (376A-23-00)", $: 1137e3 },
    { "#": "50 CLEARWATER RD (376A-22-00)", $: 976200 },
    { "#": "51 CLEARWATER RD (377-24-00)", $: 980400 },
    { "#": "52 CLEARWATER RD (376A-21-00)", $: 889200 },
    { "#": "56 CLEARWATER RD (376A-20-00)", $: 2179500 },
    { "#": "57 CLEARWATER RD (377-25-00)", $: 1111900 },
    { "#": "60 CLEARWATER RD (376A-19-00)", $: 1367800 },
    { "#": "64 CLEARWATER RD (376A-18-00)", $: 1359600 },
    { "#": "3 CLEVELAND RD (264B-10-00)", $: 1084200 },
    { "#": "7 CLEVELAND RD (264B-11-00)", $: 2619400 },
    { "#": "15 CLEVELAND RD (264B-12-00)", $: 26e5 },
    { "#": "16 CLEVELAND RD (264C-02-00)", $: 2655800 },
    { "#": "24 CLEVELAND RD (264C-01-00)", $: 2650200 },
    { "#": "25 CLEVELAND RD (264B-13-00)", $: 2222800 },
    { "#": "39 CLEVELAND RD (265-09-00)", $: 1974600 },
    { "#": "40 CLEVELAND RD (265A-05-00)", $: 1304e3 },
    { "#": "45 CLEVELAND RD (265-10-00)", $: 2350100 },
    { "#": "50 CLEVELAND RD (265A-04-00)", $: 2667500 },
    { "#": "51 CLEVELAND RD (265-11-00)", $: 1914400 },
    { "#": "57 CLEVELAND RD (265-12-00)", $: 3217500 },
    { "#": "62 CLEVELAND RD (265A-03-00)", $: 3074600 },
    { "#": "63 CLEVELAND RD (265-13-00)", $: 1801700 },
    { "#": "69 CLEVELAND RD (265-14-00)", $: 1492900 },
    { "#": "70 CLEVELAND RD (265A-02-00)", $: 1363900 },
    { "#": "77 CLEVELAND RD (265-15-00)", $: 1514300 },
    { "#": "1 CLINTON PATH (235-23-00.9)", $: 0 },
    { "#": "9 CLINTON PATH (235-01-00.9)", $: 0 },
    { "#": "26 CLINTON PATH (234-01-00)", $: 27496700 },
    { "#": "0 CLINTON RD (240-04-01)", $: 7400 },
    { "#": "3 CLINTON RD (231-43-00)", $: 2818800 },
    { "#": "11 CLINTON RD (231-44-00)", $: 3145100 },
    { "#": "19 CLINTON RD (231-45-00)", $: 3221100 },
    { "#": "20 CLINTON RD (247-15-17)", $: 2221e3 },
    { "#": "25 CLINTON RD (231-46-00)", $: 3112800 },
    { "#": "30 CLINTON RD (247-14-00)", $: 1514e3 },
    { "#": "33 CLINTON RD (231-47-00)", $: 2838800 },
    { "#": "38 CLINTON RD (247-13-00)", $: 2509700 },
    { "#": "39 CLINTON RD (231-48-00)", $: 2466e3 },
    { "#": "46 CLINTON RD (247-12-02)", $: 2245300 },
    { "#": "52 CLINTON RD (247-12-01)", $: 2360900 },
    { "#": "60 CLINTON RD (247-12-00)", $: 2480800 },
    { "#": "67 CLINTON RD (231-49-00)", $: 121100 },
    { "#": "68 CLINTON RD (247-11-00)", $: 3166900 },
    { "#": "69 CLINTON RD (231-50-00)", $: 2408300 },
    { "#": "75 CLINTON RD (231-51-00)", $: 1665300 },
    { "#": "78 CLINTON RD (247-10-00)", $: 2940900 },
    { "#": "79 CLINTON RD (231-52-00)", $: 1665500 },
    { "#": "84 CLINTON RD (247-09-01)", $: 3435800 },
    { "#": "87 CLINTON RD (231-53-00)", $: 2896500 },
    { "#": "90 CLINTON RD (247-09-00)", $: 2604500 },
    { "#": "95 CLINTON RD (231-54-00)", $: 2566900 },
    { "#": "98 CLINTON RD (247-08-00)", $: 3453800 },
    { "#": "103 CLINTON RD (231-55-00)", $: 2006e3 },
    { "#": "106 CLINTON RD (247-07-00)", $: 4532700 },
    { "#": "111 CLINTON RD (231-56-00)", $: 2373400 },
    { "#": "114 CLINTON RD (247-06-00)", $: 2419900 },
    { "#": "117 CLINTON RD (231-57-00)", $: 3570100 },
    { "#": "122 CLINTON RD (247-05-00)", $: 5091300 },
    { "#": "125 CLINTON RD (231-58-00)", $: 2145900 },
    { "#": "128 CLINTON RD (247-04-00)", $: 2026900 },
    { "#": "129 CLINTON RD (231-59-00)", $: 1894900 },
    { "#": "134 CLINTON RD (247-03-00)", $: 3008800 },
    { "#": "137 CLINTON RD (231-60-00)", $: 3960100 },
    { "#": "142 CLINTON RD (247-02-00)", $: 2148700 },
    { "#": "147 CLINTON RD (231-01-00)", $: 3169600 },
    { "#": "158 CLINTON RD (246-01-00)", $: 2849800 },
    { "#": "161 CLINTON RD (230-09-00)", $: 2012600 },
    { "#": "166 CLINTON RD (246-08-00)", $: 1900600 },
    { "#": "167 CLINTON RD (230-10-00)", $: 1827600 },
    { "#": "171 CLINTON RD (230-11-00)", $: 2000400 },
    { "#": "176 CLINTON RD (245-08-00)", $: 3089200 },
    { "#": "179 CLINTON RD (230-12-00)", $: 2272100 },
    { "#": "183 CLINTON RD (230-13-00)", $: 2270800 },
    { "#": "189 CLINTON RD (230-14-00)", $: 2136200 },
    { "#": "197 CLINTON RD (230-15-00)", $: 1926400 },
    { "#": "203 CLINTON RD (230-16-00)", $: 2332200 },
    { "#": "204 CLINTON RD (245-07-00)", $: 2431300 },
    { "#": "233 CLINTON RD (233-06-00)", $: 1803200 },
    { "#": "239 CLINTON RD (233-05-00)", $: 1915900 },
    { "#": "240 CLINTON RD (232-10-00)", $: 2428e3 },
    { "#": "245 CLINTON RD (233-04-00)", $: 2057600 },
    { "#": "246 CLINTON RD (232-09-00)", $: 1902300 },
    { "#": "249 CLINTON RD (233-03-00)", $: 1723900 },
    { "#": "252 CLINTON RD (232-08-00)", $: 2308400 },
    { "#": "255 CLINTON RD (233-02-00)", $: 2111200 },
    { "#": "261 CLINTON RD (233-01-00)", $: 1992200 },
    { "#": "262 CLINTON RD (232-07-00)", $: 3068300 },
    { "#": "271 CLINTON RD (239-12-13)", $: 3196800 },
    { "#": "278 CLINTON RD (240-05-00)", $: 2222200 },
    { "#": "285 CLINTON RD (239-11-00)", $: 2452800 },
    { "#": "286 CLINTON RD (240-04-00)", $: 2470800 },
    { "#": "289 CLINTON RD (239-10-00)", $: 1814200 },
    { "#": "292 CLINTON RD (240-03-00)", $: 2117700 },
    { "#": "295 CLINTON RD (239-09-00)", $: 1942300 },
    { "#": "300 CLINTON RD (240-02-00)", $: 2131100 },
    { "#": "301 CLINTON RD (239-08-00)", $: 1793400 },
    { "#": "311 CLINTON RD (239-07-00)", $: 2487100 },
    { "#": "319 CLINTON RD (239-06-00)", $: 2326300 },
    { "#": "327 CLINTON RD (239-05-00)", $: 2199200 },
    { "#": "330 CLINTON RD (241-09-00)", $: 2619300 },
    { "#": "335 CLINTON RD (239-04-00)", $: 1829600 },
    { "#": "338 CLINTON RD (241-08-00)", $: 2869700 },
    { "#": "345 CLINTON RD (239-03-00)", $: 1893600 },
    { "#": "351 CLINTON RD (239-02-00)", $: 2054600 },
    { "#": "357 CLINTON RD (239-01-02)", $: 1826400 },
    { "#": "370 CLINTON RD (263-05-00)", $: 4290900 },
    { "#": "375 CLINTON RD (264-01-00)", $: 2420400 },
    { "#": "376 CLINTON RD (263-04-00)", $: 2715600 },
    { "#": "381 CLINTON RD (264-02-00)", $: 2161200 },
    { "#": "385 CLINTON RD (264-03-00)", $: 2180600 },
    { "#": "393 CLINTON RD (264-04-00)", $: 3163400 },
    { "#": "401 CLINTON RD (264-04-01)", $: 1910600 },
    { "#": "404 CLINTON RD (262-04-00)", $: 1781400 },
    { "#": "405 CLINTON RD (264-05-00)", $: 1983600 },
    { "#": "411 CLINTON RD (264-06-00)", $: 2002700 },
    { "#": "416 CLINTON RD (262-03-00)", $: 2781800 },
    { "#": "419 CLINTON RD (264-07-00)", $: 1842600 },
    { "#": "425 CLINTON RD (264-08-00)", $: 1426800 },
    { "#": "433 CLINTON RD (264-09-00)", $: 2129800 },
    { "#": "434 CLINTON RD (264A-12-00)", $: 2185200 },
    { "#": "455 CLINTON RD (264D-04-00)", $: 1988e3 },
    { "#": "465 CLINTON RD (264D-03-00)", $: 1194800 },
    { "#": "471 CLINTON RD (264D-02-00)", $: 1305300 },
    { "#": "477 CLINTON RD (264D-01-00)", $: 1415300 },
    { "#": "478 CLINTON RD (265-01-00)", $: 2287400 },
    { "#": "485 CLINTON RD (265-25-00)", $: 1435800 },
    { "#": "486 CLINTON RD (265-26-00)", $: 2259100 },
    { "#": "491 CLINTON RD (265-24-00)", $: 158e4 },
    { "#": "492 CLINTON RD (265-27-00)", $: 2157200 },
    { "#": "497 CLINTON RD (265-23-00)", $: 1361700 },
    { "#": "500 CLINTON RD (265-28-00)", $: 1554300 },
    { "#": "503 CLINTON RD (265-22-00)", $: 1358900 },
    { "#": "506 CLINTON RD (265-29-00)", $: 1326e3 },
    { "#": "509 CLINTON RD (265-21-00)", $: 1384900 },
    { "#": "510 CLINTON RD (265-30-00)", $: 1552200 },
    { "#": "515 CLINTON RD (265-20-00)", $: 1428500 },
    { "#": "520 CLINTON RD (265-31-00)", $: 1463e3 },
    { "#": "521 CLINTON RD (265-19-00)", $: 1547700 },
    { "#": "524 CLINTON RD (265-32-00)", $: 2733200 },
    { "#": "529 CLINTON RD (265-18-00)", $: 1269200 },
    { "#": "530 CLINTON RD (265-33-00)", $: 2696600 },
    { "#": "535 CLINTON RD (265-16-02)", $: 1423500 },
    { "#": "536 CLINTON RD (265-34-00)", $: 1903800 },
    { "#": "539 CLINTON RD (265-35-00)", $: 2308e3 },
    { "#": "16 CLYDE ST (338-23-00)", $: 5595700 },
    { "#": "30 CLYDE ST (338-22-09)", $: 5646700 },
    { "#": "38 CLYDE ST (338-10-00)", $: 4666500 },
    { "#": "39 CLYDE ST (439-20-21)", $: 6852400 },
    { "#": "54 CLYDE ST (338-20-11)", $: 4554e3 },
    { "#": "57 CLYDE ST (439-21-01)", $: 8370500 },
    { "#": "74 CLYDE ST (338-13-18)", $: 3262e3 },
    { "#": "75 CLYDE ST (439-21-02)", $: 5860300 },
    { "#": "88 CLYDE ST (338-16-00)", $: 6105300 },
    { "#": "99 CLYDE ST (439-25-01)", $: 4755900 },
    { "#": "106 CLYDE ST (339-13-00)", $: 7686600 },
    { "#": "120 CLYDE ST (339-12-00)", $: 3610300 },
    { "#": "130 CLYDE ST (339-14-00)", $: 3451800 },
    { "#": "142 CLYDE ST (339-10-11)", $: 11493900 },
    { "#": "145 CLYDE ST (439-48-50)", $: 23962400 },
    { "#": "155 CLYDE ST (439-56-71)", $: 9686200 },
    { "#": "161 CLYDE ST (439-81-00)", $: 419e4 },
    { "#": "180 CLYDE ST (339-09-00)", $: 9040900 },
    { "#": "181 CLYDE ST (439-81-04)", $: 7046200 },
    { "#": "191 CLYDE ST (441-01-00)", $: 81209700 },
    { "#": "198 CLYDE ST (339-15-00)", $: 6322400 },
    { "#": "204 CLYDE ST (339-16-00)", $: 6893200 },
    { "#": "220 CLYDE ST (339-07-01)", $: 6240300 },
    { "#": "246 CLYDE ST (347-05-01)", $: 843100 },
    { "#": "254 CLYDE ST (347-05-00.9)", $: 0 },
    { "#": "256 CLYDE ST (347-04-00)", $: 865700 },
    { "#": "268 CLYDE ST (340-16-00)", $: 732100 },
    { "#": "272 CLYDE ST (340-15-00)", $: 942600 },
    { "#": "276 CLYDE ST (340-14-00)", $: 927100 },
    { "#": "280 CLYDE ST (340-13-00)", $: 1226600 },
    { "#": "286 CLYDE ST (340-12-00)", $: 1078300 },
    { "#": "290 CLYDE ST (340-11-09)", $: 950900 },
    { "#": "294 CLYDE ST (340-09-01)", $: 1081500 },
    { "#": "298 CLYDE ST (340-10-00)", $: 824600 },
    { "#": "302 CLYDE ST (340-10-01)", $: 955500 },
    { "#": "324 CLYDE ST (342-07-08.9)", $: 0 },
    { "#": "334 CLYDE ST (343-01-00)", $: 1635300 },
    { "#": "336 CLYDE ST (343-12-00)", $: 1219500 },
    { "#": "342 CLYDE ST (343-11-00)", $: 1287900 },
    { "#": "344 CLYDE ST (343-10-00)", $: 1503e3 },
    { "#": "352 CLYDE ST (344-01-00)", $: 1586100 },
    { "#": "352 CLYDE ST (344-01-00.9)", $: 1586100 },
    { "#": "356 CLYDE ST (344-12-00)", $: 783800 },
    { "#": "362 CLYDE ST (344-11-00)", $: 1312500 },
    { "#": "365 CLYDE ST (441-52-02)", $: 5897100 },
    { "#": "370 CLYDE ST (344-10-01)", $: 1549900 },
    { "#": "26 CODMAN RD (333-03-00)", $: 3410400 },
    { "#": "30 CODMAN RD (333-02-00)", $: 9661800 },
    { "#": "36 CODMAN RD (333-01-00)", $: 6023400 },
    { "#": "41 CODMAN RD (329-01-00)", $: 3053300 },
    { "#": "59 CODMAN RD (329-02-00)", $: 6796100 },
    { "#": "60 CODMAN RD (328-14-00)", $: 2381200 },
    { "#": "62 CODMAN RD (328-13-00)", $: 2381200 },
    { "#": "70 CODMAN RD (328-12-00)", $: 11187300 },
    { "#": "77 CODMAN RD (329-03-00)", $: 2683400 },
    { "#": "99 CODMAN RD (329-04-00)", $: 2136800 },
    { "#": "100 CODMAN RD (328-11-00)", $: 4027900 },
    { "#": "103 CODMAN RD (329-04-01)", $: 10400 },
    { "#": "104 CODMAN RD (328-10-01)", $: 6730200 },
    { "#": "108 CODMAN RD (328-10-00)", $: 4110900 },
    { "#": "120 CODMAN RD (328-09-00)", $: 2960800 },
    { "#": "8 COLBOURNE CRES (218-01-00.9)", $: 0 },
    { "#": "9 COLBOURNE CRES (219-04-00.9)", $: 0 },
    { "#": "11 COLBOURNE CRES (219-05-00.9)", $: 0 },
    { "#": "12 COLBOURNE CRES (218-25-00.9)", $: 0 },
    { "#": "14 COLBOURNE CRES (218-24-00.9)", $: 0 },
    { "#": "15 COLBOURNE CRES (219-06-00)", $: 1811500 },
    { "#": "15 COLBOURNE CRES (219-06-00.9)", $: 2127300 },
    { "#": "18 COLBOURNE CRES (218-23-00)", $: 2070900 },
    { "#": "21 COLBOURNE CRES (219-07-00)", $: 3804e3 },
    { "#": "21 COLBOURNE CRES (219-07-00.9)", $: 3804e3 },
    { "#": "22 COLBOURNE CRES (218-22-00)", $: 787e3 },
    { "#": "22 COLBOURNE CRES (218-22-00.9)", $: 2905300 },
    { "#": "26 COLBOURNE CRES (218-21-00)", $: 2733700 },
    { "#": "26 COLBOURNE CRES (218-21-00.9)", $: 4335800 },
    { "#": "29 COLBOURNE CRES (219-08-00)", $: 2822200 },
    { "#": "32 COLBOURNE CRES (218-20-00)", $: 2501e3 },
    { "#": "34 COLBOURNE CRES (218-19-00)", $: 2497700 },
    { "#": "36 COLBOURNE CRES (218-18-00)", $: 2600400 },
    { "#": "37 COLBOURNE CRES (219-09-00)", $: 3393800 },
    { "#": "51 COLBOURNE CRES (219-10-00)", $: 2256600 },
    { "#": "56 COLBOURNE CRES (218-28-00)", $: 1749500 },
    { "#": "61 COLBOURNE CRES (219-11-00)", $: 1981e3 },
    { "#": "64 COLBOURNE CRES (218-30-00)", $: 2475600 },
    { "#": "65 COLBOURNE CRES (219-12-00)", $: 2432e3 },
    { "#": "72 COLBOURNE CRES (218-26-00)", $: 2842300 },
    { "#": "86 COLBOURNE CRES (218-32-00)", $: 1758e3 },
    { "#": "93 COLBOURNE CRES (220-41-00)", $: 2066100 },
    { "#": "99 COLBOURNE CRES (220-42-00)", $: 1683800 },
    { "#": "100 COLBOURNE CRES (218-16-01)", $: 1922600 },
    { "#": "103 COLBOURNE CRES (220-43-00)", $: 2083100 },
    { "#": "106 COLBOURNE CRES (218-17-00)", $: 2214e3 },
    { "#": "107 COLBOURNE CRES (220-44-00)", $: 2470200 },
    { "#": "113 COLBOURNE CRES (220-44-01)", $: 2896800 },
    { "#": "121 COLBOURNE CRES (220-45-00)", $: 2902500 },
    { "#": "6 COLCHESTER ST (115A-01-00)", $: 72300 },
    { "#": "7 COLCHESTER ST (115-03-00)", $: 6024500 },
    { "#": "19 COLCHESTER ST (115-04-00)", $: 5021800 },
    { "#": "25 COLCHESTER ST (115-05-00.9)", $: 0 },
    { "#": "60 COLCHESTER ST (121-05-00)", $: 7428900 },
    { "#": "67 COLCHESTER ST (120-02-00)", $: 3610200 },
    { "#": "71 COLCHESTER ST (120-03-00)", $: 2459900 },
    { "#": "77 COLCHESTER ST (120-04-00)", $: 4652300 },
    { "#": "87 COLCHESTER ST (120-05-00)", $: 3661500 },
    { "#": "99 COLCHESTER ST (120-06-00)", $: 2569600 },
    { "#": "101 COLCHESTER ST (120-07-00)", $: 2299200 },
    { "#": "103 COLCHESTER ST (120-08-00)", $: 2881300 },
    { "#": "105 COLCHESTER ST (120-09-00)", $: 2154300 },
    { "#": "116 COLCHESTER ST (121-03-00)", $: 3577600 },
    { "#": "119 COLCHESTER ST (120-10-00)", $: 2776400 },
    { "#": "9 COLUMBIA ST (074-02-00.9)", $: 0 },
    { "#": "12 COLUMBIA ST (075-66-00)", $: 1777600 },
    { "#": "15 COLUMBIA ST (074-03-00)", $: 2947600 },
    { "#": "16 COLUMBIA ST (075-65-00)", $: 1769700 },
    { "#": "19 COLUMBIA ST (074-04-00)", $: 2550800 },
    { "#": "22 COLUMBIA ST (075-64-00)", $: 2702100 },
    { "#": "25 COLUMBIA ST (074-05-00)", $: 2517500 },
    { "#": "26 COLUMBIA ST (075-63-00)", $: 2475900 },
    { "#": "29 COLUMBIA ST (074-06-03)", $: 2846400 },
    { "#": "30 COLUMBIA ST (075-62-00.9)", $: 0 },
    { "#": "33 COLUMBIA ST (074-07-00)", $: 2548300 },
    { "#": "36 COLUMBIA ST (075-61-00)", $: 2264400 },
    { "#": "39 COLUMBIA ST (074-08-00)", $: 1070800 },
    { "#": "39 COLUMBIA ST (074-08-00.9)", $: 2828300 },
    { "#": "40 COLUMBIA ST (075-60-00)", $: 1851900 },
    { "#": "45 COLUMBIA ST (074-09-00)", $: 2468e3 },
    { "#": "46 COLUMBIA ST (075-59-00)", $: 2262100 },
    { "#": "50 COLUMBIA ST (075-58-00.9)", $: 0 },
    { "#": "50 COLUMBIA ST (075-58-03)", $: 2909700 },
    { "#": "51 COLUMBIA ST (074-10-00)", $: 2401800 },
    { "#": "60 COLUMBIA ST (075-55-00)", $: 2479200 },
    { "#": "61 COLUMBIA ST (074-11-00)", $: 2221800 },
    { "#": "61 COLUMBIA ST (074-11-00.9)", $: 2221800 },
    { "#": "66 COLUMBIA ST (075-54-00)", $: 2308300 },
    { "#": "66 COLUMBIA ST (075-54-00.9)", $: 2423700 },
    { "#": "70 COLUMBIA ST (075-53-00)", $: 961500 },
    { "#": "70 COLUMBIA ST (075-53-00.9)", $: 1171200 },
    { "#": "76 COLUMBIA ST (075-52-00)", $: 2290900 },
    { "#": "80 COLUMBIA ST (075-51-00)", $: 988e3 },
    { "#": "80 COLUMBIA ST (075-51-00.9)", $: 2512200 },
    { "#": "88 COLUMBIA ST (075-50-00)", $: 2621e3 },
    { "#": "89 COLUMBIA ST (073-11-00)", $: 6560200 },
    { "#": "92 COLUMBIA ST (075-49-00)", $: 1099800 },
    { "#": "92 COLUMBIA ST (075-49-00.9)", $: 3409800 },
    { "#": "96 COLUMBIA ST (075-48-00)", $: 3159900 },
    { "#": "100 COLUMBIA ST (075-47-00.9)", $: 0 },
    { "#": "104 COLUMBIA ST (075-46-00)", $: 1958500 },
    { "#": "108 COLUMBIA ST (075-45-00.9)", $: 0 },
    { "#": "109 COLUMBIA ST (072-19-00)", $: 1799400 },
    { "#": "112 COLUMBIA ST (075-44-00.9)", $: 0 },
    { "#": "116 COLUMBIA ST (075-43-00)", $: 1932e3 },
    { "#": "120 COLUMBIA ST (075-42-00.9)", $: 0 },
    { "#": "124 COLUMBIA ST (075-41-00)", $: 2107600 },
    { "#": "128 COLUMBIA ST (075-40-00)", $: 2071900 },
    { "#": "132 COLUMBIA ST (075-39-00)", $: 2352200 },
    { "#": "133 COLUMBIA ST (071-22-00)", $: 2678200 },
    { "#": "136 COLUMBIA ST (075-38-00)", $: 2481200 },
    { "#": "139 COLUMBIA ST (071-23-00)", $: 2343500 },
    { "#": "140 COLUMBIA ST (075-37-00)", $: 2198e3 },
    { "#": "144 COLUMBIA ST (075-36-00)", $: 2230800 },
    { "#": "1 COLUMBIA TER (075-56-00)", $: 2698100 },
    { "#": "7 COLUMBIA TER (075-57-00)", $: 2630600 },
    { "#": "0 COMMONWEALTH AVE (007-01-00)", $: 55318400 },
    { "#": "0 COMMONWEALTH AVE (017-02-00)", $: 0 },
    { "#": "730 COMMONWEALTH AVE (007-05-09)", $: 50815700 },
    { "#": "808 COMMONWEALTH AVE (017-01-00)", $: 53900400 },
    { "#": "820 COMMONWEALTH AVE (017-02-07)", $: 58550500 },
    { "#": "830 COMMONWEALTH AVE (017-03-00)", $: 7309200 },
    { "#": "850 COMMONWEALTH AVE (017-04-00)", $: 2785900 },
    { "#": "860 COMMONWEALTH AVE (018-04-05)", $: 17656300 },
    { "#": "874 COMMONWEALTH AVE (018-03-00)", $: 12237600 },
    { "#": "882 COMMONWEALTH AVE (018-02-00)", $: 26841300 },
    { "#": "890 COMMONWEALTH AVE (018-01-00)", $: 15993100 },
    { "#": "900 COMMONWEALTH AVE (019-01-00)", $: 26250200 },
    { "#": "910 COMMONWEALTH AVE (019-10-00)", $: 6499300 },
    { "#": "916 COMMONWEALTH AVE (019-08-09)", $: 14728900 },
    { "#": "928 COMMONWEALTH AVE (019-07-00)", $: 13702700 },
    { "#": "930 COMMONWEALTH AVE (019-05-12)", $: 44117600 },
    { "#": "950 COMMONWEALTH AVE (028-01-03)", $: 4577400 },
    { "#": "966 COMMONWEALTH AVE (028-01-01)", $: 3742600 },
    { "#": "972 COMMONWEALTH AVE (028-01-00)", $: 4686e3 },
    { "#": "996 COMMONWEALTH AVE (027-36-37)", $: 2479900 },
    { "#": "1010 COMMONWEALTH AVE (027-35-00)", $: 22958100 },
    { "#": "1016 COMMONWEALTH AVE (056-14-00)", $: 2918400 },
    { "#": "1020 COMMONWEALTH AVE (056-13-00)", $: 2797400 },
    { "#": "1022 COMMONWEALTH AVE (056-12-00)", $: 4253e3 },
    { "#": "1028 COMMONWEALTH AVE (056-11-00)", $: 5283300 },
    { "#": "1030 COMMONWEALTH AVE (056-10-00)", $: 2903500 },
    { "#": "1032 COMMONWEALTH AVE (056-09-00)", $: 3977600 },
    { "#": "1040 COMMONWEALTH AVE (055-17-21)", $: 9378600 },
    { "#": "1056 COMMONWEALTH AVE (055-17-02)", $: 0 },
    { "#": "1066 COMMONWEALTH AVE (055-17-01)", $: 0 },
    { "#": "1082 COMMONWEALTH AVE (057-21-04)", $: 0 },
    { "#": "1086 COMMONWEALTH AVE (057-21-03)", $: 0 },
    { "#": "1092 COMMONWEALTH AVE (057-21-02)", $: 0 },
    { "#": "1106 COMMONWEALTH AVE (057-21-01)", $: 0 },
    { "#": "1140 COMMONWEALTH AVE (070-31-00)", $: 0 },
    { "#": "1142 COMMONWEALTH AVE (070-30-00)", $: 0 },
    { "#": "1148 COMMONWEALTH AVE (070-29-00)", $: 0 },
    { "#": "1152 COMMONWEALTH AVE (070-28-00)", $: 0 },
    { "#": "1156 COMMONWEALTH AVE (070-27-00)", $: 0 },
    { "#": "1158 COMMONWEALTH AVE (070-26-00)", $: 0 },
    { "#": "1168 COMMONWEALTH AVE (070-23-25)", $: 21409700 },
    { "#": "3 CONANT RD (360-12-00)", $: 673100 },
    { "#": "6 CONANT RD (359-07-00)", $: 1040300 },
    { "#": "7 CONANT RD (360-13-00)", $: 905700 },
    { "#": "11 CONANT RD (360-14-00)", $: 1077400 },
    { "#": "12 CONANT RD (359-06-00)", $: 1147500 },
    { "#": "15 CONANT RD (360-15-00)", $: 874800 },
    { "#": "16 CONANT RD (359-05-00)", $: 1247500 },
    { "#": "19 CONANT RD (360-16-00)", $: 892e3 },
    { "#": "20 CONANT RD (359-04-00)", $: 780500 },
    { "#": "23 CONANT RD (360-17-00)", $: 917e3 },
    { "#": "24 CONANT RD (359-03-00)", $: 1009e3 },
    { "#": "27 CONANT RD (360-01-00)", $: 978300 },
    { "#": "28 CONANT RD (359-02-00)", $: 2005100 },
    { "#": "8 COOLIDGE ST (076-23-00)", $: 1821e3 },
    { "#": "9 COOLIDGE ST (077-01-01)", $: 2743800 },
    { "#": "15 COOLIDGE ST (077-25-00)", $: 2166500 },
    { "#": "16 COOLIDGE ST (076-22-00)", $: 2234600 },
    { "#": "17 COOLIDGE ST (077-26-00)", $: 2308800 },
    { "#": "20 COOLIDGE ST (076-21-00)", $: 1859600 },
    { "#": "21 COOLIDGE ST (077-03-00)", $: 1641700 },
    { "#": "23 COOLIDGE ST (077-04-00)", $: 1943600 },
    { "#": "26 COOLIDGE ST (076-20-00)", $: 2300600 },
    { "#": "30 COOLIDGE ST (076-19-00)", $: 1804900 },
    { "#": "31 COOLIDGE ST (077-05-00)", $: 1924600 },
    { "#": "34 COOLIDGE ST (076-18-00)", $: 1766700 },
    { "#": "35 COOLIDGE ST (077-06-00)", $: 1946200 },
    { "#": "40 COOLIDGE ST (076-17-00)", $: 2514600 },
    { "#": "41 COOLIDGE ST (077-07-00)", $: 2298400 },
    { "#": "42 COOLIDGE ST (076-16-00.9)", $: 3245200 },
    { "#": "44 COOLIDGE ST (076-16-00)", $: 1362200 },
    { "#": "45 COOLIDGE ST (077-08-00)", $: 2381e3 },
    { "#": "48 COOLIDGE ST (076-15-00.9)", $: 0 },
    { "#": "49 COOLIDGE ST (077-09-00)", $: 1479500 },
    { "#": "54 COOLIDGE ST (076-14-00)", $: 1765700 },
    { "#": "64 COOLIDGE ST (067-07-00)", $: 3030500 },
    { "#": "69 COOLIDGE ST (066-12-00)", $: 2997700 },
    { "#": "70 COOLIDGE ST (067-06-00)", $: 1990400 },
    { "#": "73 COOLIDGE ST (066-13-00)", $: 2467600 },
    { "#": "74 COOLIDGE ST (067-05-00)", $: 1785900 },
    { "#": "78 COOLIDGE ST (067-04-00)", $: 2079900 },
    { "#": "79 COOLIDGE ST (066-14-00)", $: 2904100 },
    { "#": "83 COOLIDGE ST (066-15-00)", $: 2021900 },
    { "#": "84 COOLIDGE ST (067-03-00)", $: 1978300 },
    { "#": "87 COOLIDGE ST (066-16-00.9)", $: 0 },
    { "#": "88 COOLIDGE ST (067-02-00)", $: 2167100 },
    { "#": "88 COOLIDGE ST (067-02-00.9)", $: 2576800 },
    { "#": "91 COOLIDGE ST (066-17-00)", $: 2781100 },
    { "#": "92 COOLIDGE ST (067-01-00.9)", $: 0 },
    { "#": "95 COOLIDGE ST (066-18-00)", $: 2219100 },
    { "#": "100 COOLIDGE ST (068-12-00)", $: 2381700 },
    { "#": "101 COOLIDGE ST (065-01-00)", $: 2261e3 },
    { "#": "104 COOLIDGE ST (068-11-00)", $: 2778100 },
    { "#": "110 COOLIDGE ST (068-10-00)", $: 2098e3 },
    { "#": "111 COOLIDGE ST (065-02-00.9)", $: 0 },
    { "#": "114 COOLIDGE ST (068-09-00)", $: 1941800 },
    { "#": "119 COOLIDGE ST (065-03-00)", $: 3312900 },
    { "#": "120 COOLIDGE ST (068-08-00)", $: 2783600 },
    { "#": "124 COOLIDGE ST (068-07-00)", $: 1761500 },
    { "#": "125 COOLIDGE ST (065-04-00)", $: 2087300 },
    { "#": "127 COOLIDGE ST (065-05-00.9)", $: 0 },
    { "#": "128 COOLIDGE ST (068-06-00)", $: 2204700 },
    { "#": "132 COOLIDGE ST (068-05-00)", $: 2981400 },
    { "#": "133 COOLIDGE ST (065-06-00.9)", $: 0 },
    { "#": "136 COOLIDGE ST (068-04-00)", $: 1850600 },
    { "#": "137 COOLIDGE ST (065-07-00)", $: 2331e3 },
    { "#": "142 COOLIDGE ST (068-27-00)", $: 4297100 },
    { "#": "143 COOLIDGE ST (065-08-00)", $: 2062100 },
    { "#": "144 COOLIDGE ST (068-26-00)", $: 2616600 },
    { "#": "146 COOLIDGE ST (068-25-00)", $: 2178800 },
    { "#": "147 COOLIDGE ST (065-09-00)", $: 2259200 },
    { "#": "155 COOLIDGE ST (061-06-00)", $: 2480700 },
    { "#": "156 COOLIDGE ST (060-09-00)", $: 2883900 },
    { "#": "159 COOLIDGE ST (061-05-00)", $: 2282800 },
    { "#": "162 COOLIDGE ST (060-10-00.9)", $: 0 },
    { "#": "163 COOLIDGE ST (061-04-00)", $: 2492600 },
    { "#": "165 COOLIDGE ST (061-03-00)", $: 1609300 },
    { "#": "166 COOLIDGE ST (060-11-00.9)", $: 0 },
    { "#": "170 COOLIDGE ST (060-12-00)", $: 1923300 },
    { "#": "176 COOLIDGE ST (060-13-00)", $: 2785700 },
    { "#": "177 COOLIDGE ST (061-01-00)", $: 2156400 },
    { "#": "3 COPLEY ST (030-03-00)", $: 2080900 },
    { "#": "4 COPLEY ST (031-01-00)", $: 2175800 },
    { "#": "10 COPLEY ST (031-13-00)", $: 2005500 },
    { "#": "11 COPLEY ST (030-04-00)", $: 2935300 },
    { "#": "16 COPLEY ST (031-12-00)", $: 2528500 },
    { "#": "19 COPLEY ST (030-05-00)", $: 2042300 },
    { "#": "20 COPLEY ST (031-11-00)", $: 2060800 },
    { "#": "25 COPLEY ST (030-06-00)", $: 2507600 },
    { "#": "28 COPLEY ST (031-10-00)", $: 2470800 },
    { "#": "29 COPLEY ST (030-07-00)", $: 2238e3 },
    { "#": "12 COREY RD (106-16-00)", $: 2651100 },
    { "#": "14 COREY RD (106-15-00)", $: 2971800 },
    { "#": "16 COREY RD (106-14-00)", $: 2605100 },
    { "#": "17 COREY RD (102-27-00)", $: 2418700 },
    { "#": "37 COREY RD (103-04-00)", $: 2311900 },
    { "#": "42 COREY RD (105-15-00)", $: 2125800 },
    { "#": "47 COREY RD (103-05-00)", $: 2772800 },
    { "#": "48 COREY RD (105-14-00)", $: 2121700 },
    { "#": "58 COREY RD (104-01-00)", $: 2004100 },
    { "#": "59 COREY RD (099-10-00)", $: 1555500 },
    { "#": "17 COTSWOLD RD (247-31-32)", $: 3190300 },
    { "#": "20 COTSWOLD RD (246-02-00)", $: 1828600 },
    { "#": "25 COTSWOLD RD (247-01-00)", $: 2777300 },
    { "#": "46 COTSWOLD RD (230-08-00)", $: 2762300 },
    { "#": "47 COTSWOLD RD (231-02-00)", $: 2068200 },
    { "#": "54 COTSWOLD RD (230-07-00)", $: 2300200 },
    { "#": "10 COTTAGE FARM RD (012-05-01)", $: 6290700 },
    { "#": "24 COTTAGE FARM RD (012-05-00)", $: 8784700 },
    { "#": "43 COTTAGE FARM RD (015-01-00)", $: 3632400 },
    { "#": "51 COTTAGE FARM RD (015-02-00)", $: 2320300 },
    { "#": "54 COTTAGE FARM RD (016-03-00)", $: 2605300 },
    { "#": "55 COTTAGE FARM RD (015-02-01)", $: 2172e3 },
    { "#": "25 COTTAGE ST (351-12-01)", $: 3426800 },
    { "#": "25 COTTAGE ST (352-01-00)", $: 2625500 },
    { "#": "39 COTTAGE ST (352-01-01)", $: 3404e3 },
    { "#": "39 COTTAGE ST (352-01-02)", $: 5652700 },
    { "#": "40 COTTAGE ST (332-03-09)", $: 33302100 },
    { "#": "45 COTTAGE ST (352-02-00)", $: 10139600 },
    { "#": "63 COTTAGE ST (352-17-00)", $: 2573300 },
    { "#": "75 COTTAGE ST (352-16-00)", $: 5682400 },
    { "#": "80 COTTAGE ST (332-02-00)", $: 2380900 },
    { "#": "85 COTTAGE ST (352-04-00)", $: 5717200 },
    { "#": "88 COTTAGE ST (332-01-00)", $: 21698e3 },
    { "#": "100 COTTAGE ST (331-06-01)", $: 7243800 },
    { "#": "120 COTTAGE ST (331-06-02)", $: 1125600 },
    { "#": "126 COTTAGE ST (331-06-00)", $: 3580600 },
    { "#": "144 COTTAGE ST (331-10-00)", $: 5961900 },
    { "#": "150 COTTAGE ST (331-09-01)", $: 2208900 },
    { "#": "152 COTTAGE ST (331-09-00)", $: 918300 },
    { "#": "3 COUNTRY RD (340-01-00)", $: 872400 },
    { "#": "10 COUNTRY RD (347-03-00)", $: 1828200 },
    { "#": "11 COUNTRY RD (340-02-00)", $: 844400 },
    { "#": "17 COUNTRY RD (340-03-00)", $: 709300 },
    { "#": "18 COUNTRY RD (347-02-00)", $: 1233700 },
    { "#": "30 COUNTRY RD (346-09-00)", $: 1781e3 },
    { "#": "35 COUNTRY RD (341-03-00)", $: 1059300 },
    { "#": "36 COUNTRY RD (346-07-08)", $: 836100 },
    { "#": "17 CRAFTS RD (278C-25-00)", $: 1617100 },
    { "#": "19 CRAFTS RD (278C-36-37)", $: 3604200 },
    { "#": "20 CRAFTS RD (279-05-01)", $: 2447900 },
    { "#": "21 CRAFTS RD (278C-35-00)", $: 4203800 },
    { "#": "23 CRAFTS RD (278C-29-02)", $: 4894500 },
    { "#": "24 CRAFTS RD (279-05-00)", $: 3644500 },
    { "#": "27 CRAFTS RD (278C-26-00)", $: 2274800 },
    { "#": "32 CRAFTS RD (279-04-00)", $: 2453e3 },
    { "#": "35 CRAFTS RD (278C-27-00)", $: 3392800 },
    { "#": "40 CRAFTS RD (279-03-00)", $: 1905700 },
    { "#": "41 CRAFTS RD (278C-28-00)", $: 1788900 },
    { "#": "42 CRAFTS RD (279-02-00)", $: 1550800 },
    { "#": "46 CRAFTS RD (279-01-00)", $: 2703200 },
    { "#": "47 CRAFTS RD (278C-29-00)", $: 3276600 },
    { "#": "65 CRAFTS RD (278D-01-00)", $: 3774500 },
    { "#": "76 CRAFTS RD (280-19-20)", $: 3713600 },
    { "#": "79 CRAFTS RD (278D-02-00)", $: 4006400 },
    { "#": "96 CRAFTS RD (280-18-00)", $: 3644100 },
    { "#": "99 CRAFTS RD (278D-03-00)", $: 5342200 },
    { "#": "106 CRAFTS RD (280-17-00)", $: 3523700 },
    { "#": "107 CRAFTS RD (278D-05-00)", $: 4042200 },
    { "#": "116 CRAFTS RD (280-16-00)", $: 934700 },
    { "#": "119 CRAFTS RD (278D-06-00)", $: 239e4 },
    { "#": "127 CRAFTS RD (278D-07-00)", $: 2033600 },
    { "#": "128 CRAFTS RD (280-15-00)", $: 3278200 },
    { "#": "135 CRAFTS RD (278D-08-00)", $: 3488100 },
    { "#": "142 CRAFTS RD (280-13-14)", $: 6139400 },
    { "#": "153 CRAFTS RD (278D-09-00)", $: 2884900 },
    { "#": "165 CRAFTS RD (278-19-00)", $: 2416700 },
    { "#": "171 CRAFTS RD (278-19-01)", $: 2326900 },
    { "#": "200 CRAFTS RD (265A-01-00)", $: 1473400 },
    { "#": "206 CRAFTS RD (265A-11-00)", $: 2284300 },
    { "#": "212 CRAFTS RD (265A-10-00)", $: 1405700 },
    { "#": "215 CRAFTS RD (277-13-00.9)", $: 0 },
    { "#": "219 CRAFTS RD (277-14-00.9)", $: 0 },
    { "#": "225 CRAFTS RD (277-15-00)", $: 1385e3 },
    { "#": "233 CRAFTS RD (277-16-00)", $: 1250500 },
    { "#": "241 CRAFTS RD (277-17-00)", $: 1465100 },
    { "#": "247 CRAFTS RD (277-18-00)", $: 1571800 },
    { "#": "0 CRAFTSLAND RD (423-14-00)", $: 0 },
    { "#": "0 CRAFTSLAND RD (423-42-00.9)", $: 0 },
    { "#": "3 CRAFTSLAND RD (423-20-00)", $: 1909200 },
    { "#": "4 CRAFTSLAND RD (423-21-00)", $: 1340600 },
    { "#": "9 CRAFTSLAND RD (423-19-00)", $: 977900 },
    { "#": "10 CRAFTSLAND RD (423-22-00)", $: 1202900 },
    { "#": "15 CRAFTSLAND RD (423-18-00)", $: 901600 },
    { "#": "16 CRAFTSLAND RD (423-23-00)", $: 1673400 },
    { "#": "19 CRAFTSLAND RD (423-17-00)", $: 1147200 },
    { "#": "22 CRAFTSLAND RD (423-24-00)", $: 1281300 },
    { "#": "25 CRAFTSLAND RD (423-16-00)", $: 1164e3 },
    { "#": "26 CRAFTSLAND RD (423-25-00)", $: 1401200 },
    { "#": "31 CRAFTSLAND RD (423-15-00)", $: 1209800 },
    { "#": "32 CRAFTSLAND RD (423-26-00)", $: 1092200 },
    { "#": "36 CRAFTSLAND RD (423-27-00)", $: 1256800 },
    { "#": "42 CRAFTSLAND RD (423-28-00)", $: 1055300 },
    { "#": "46 CRAFTSLAND RD (423-29-00)", $: 1051800 },
    { "#": "47 CRAFTSLAND RD (423-13-00)", $: 739800 },
    { "#": "47 CRAFTSLAND RD (423-13-14)", $: 2253900 },
    { "#": "50 CRAFTSLAND RD (423-30-00)", $: 1170700 },
    { "#": "53 CRAFTSLAND RD (423-12-00)", $: 1043400 },
    { "#": "56 CRAFTSLAND RD (423-31-00)", $: 1459800 },
    { "#": "57 CRAFTSLAND RD (423-11-00)", $: 1428300 },
    { "#": "62 CRAFTSLAND RD (423-32-00)", $: 968600 },
    { "#": "63 CRAFTSLAND RD (423-10-00)", $: 1034500 },
    { "#": "67 CRAFTSLAND RD (423-09-00)", $: 1639100 },
    { "#": "68 CRAFTSLAND RD (423-33-00)", $: 1562100 },
    { "#": "70 CRAFTSLAND RD (423-41-00)", $: 1027100 },
    { "#": "71 CRAFTSLAND RD (423-08-02)", $: 1737100 },
    { "#": "74 CRAFTSLAND RD (423-34-35)", $: 1543100 },
    { "#": "75 CRAFTSLAND RD (423-08-01)", $: 1447e3 },
    { "#": "79 CRAFTSLAND RD (423-08-00)", $: 1343100 },
    { "#": "80 CRAFTSLAND RD (423-40-00)", $: 1892600 },
    { "#": "83 CRAFTSLAND RD (423-07-00)", $: 1131800 },
    { "#": "87 CRAFTSLAND RD (423-06-01)", $: 1234500 },
    { "#": "88 CRAFTSLAND RD (423-36-00)", $: 1758600 },
    { "#": "90 CRAFTSLAND RD (423-37-00)", $: 1312e3 },
    { "#": "95 CRAFTSLAND RD (423-06-00)", $: 931600 },
    { "#": "96 CRAFTSLAND RD (423-38-00)", $: 1300500 },
    { "#": "100 CRAFTSLAND RD (423-39-00)", $: 1876500 },
    { "#": "7 CRAIG PL (027-07-00)", $: 1891800 },
    { "#": "11 CRAIG PL (027-08-00.9)", $: 0 },
    { "#": "15 CRAIG PL (027-08-02)", $: 1515e3 },
    { "#": "17 CRAIG PL (027-08-01)", $: 1841400 },
    { "#": "11 CRAMOND RD (438-04-00)", $: 7748800 },
    { "#": "18 CRAMOND RD (439-05-00)", $: 6379600 },
    { "#": "30 CRAMOND RD (439-04-00)", $: 9115700 },
    { "#": "48 CRAMOND RD (439-03-00)", $: 5785e3 },
    { "#": "59 CRAMOND RD (438-02-06)", $: 9646700 },
    { "#": "60 CRAMOND RD (439-01-02)", $: 10159800 },
    { "#": "0 CROWNINSHIELD RD (027-38-00)", $: 557200 },
    { "#": "16 CROWNINSHIELD RD (028-10-00)", $: 2032400 },
    { "#": "21 CROWNINSHIELD RD (027-38-39)", $: 4994400 },
    { "#": "21 CROWNINSHIELD RD (027-38-39.9)", $: 4683300 },
    { "#": "21 CROWNINSHIELD RD (027-39-00)", $: 1127900 },
    { "#": "25 CROWNINSHIELD RD (027-40-00)", $: 2272700 },
    { "#": "26 CROWNINSHIELD RD (029-08-00)", $: 2039200 },
    { "#": "29 CROWNINSHIELD RD (027-41-00)", $: 2682e3 },
    { "#": "35 CROWNINSHIELD RD (027-42-00)", $: 2369e3 },
    { "#": "38 CROWNINSHIELD RD (029-07-00)", $: 2705e3 },
    { "#": "39 CROWNINSHIELD RD (027-43-00)", $: 2334100 },
    { "#": "43 CROWNINSHIELD RD (027-44-00)", $: 2066200 },
    { "#": "47 CROWNINSHIELD RD (027-45-00)", $: 2522e3 },
    { "#": "50 CROWNINSHIELD RD (030-08-00)", $: 3715700 },
    { "#": "53 CROWNINSHIELD RD (027-46-00)", $: 3076300 },
    { "#": "59 CROWNINSHIELD RD (027-47-00)", $: 2083100 },
    { "#": "61 CROWNINSHIELD RD (027-48-00)", $: 1996800 },
    { "#": "67 CROWNINSHIELD RD (027-49-00)", $: 1886700 },
    { "#": "71 CROWNINSHIELD RD (027-50-00)", $: 2234100 },
    { "#": "75 CROWNINSHIELD RD (027-51-00)", $: 2201200 },
    { "#": "78 CROWNINSHIELD RD (031-09-00)", $: 2557900 },
    { "#": "81 CROWNINSHIELD RD (027-52-00)", $: 2066900 },
    { "#": "84 CROWNINSHIELD RD (031-08-00)", $: 2462900 },
    { "#": "87 CROWNINSHIELD RD (027-53-00)", $: 2574800 },
    { "#": "91 CROWNINSHIELD RD (027-54-00)", $: 2114400 },
    { "#": "95 CROWNINSHIELD RD (027-55-00)", $: 1973200 },
    { "#": "98 CROWNINSHIELD RD (031-06-00)", $: 2448900 },
    { "#": "102 CROWNINSHIELD RD (031-05-00)", $: 1910900 },
    { "#": "108 CROWNINSHIELD RD (031-04-00)", $: 1827900 },
    { "#": "15 CUMBERLAND AVE (297-09-00)", $: 2179900 },
    { "#": "21 CUMBERLAND AVE (296-08-00)", $: 1799800 },
    { "#": "38 CUMBERLAND AVE (299-46-00)", $: 1673200 },
    { "#": "43 CUMBERLAND AVE (295-11-12)", $: 721500 },
    { "#": "47 CUMBERLAND AVE (295-13-00)", $: 2318100 },
    { "#": "50 CUMBERLAND AVE (299-45-00)", $: 1909400 },
    { "#": "11 CUSHING RD (320-07-00)", $: 1584700 },
    { "#": "12 CUSHING RD (320A-06-00)", $: 1821600 },
    { "#": "17 CUSHING RD (320-08-00)", $: 1429100 },
    { "#": "18 CUSHING RD (320A-05-00)", $: 1416400 },
    { "#": "22 CUSHING RD (320A-04-00)", $: 3523500 },
    { "#": "23 CUSHING RD (320-09-00)", $: 2691500 },
    { "#": "28 CUSHING RD (320A-03-00)", $: 3066e3 },
    { "#": "7 CUTLER LN (437-15-01)", $: 6387600 },
    { "#": "25 CUTLER LN (437-16-00)", $: 4885e3 },
    { "#": "32 CUTLER LN (437-24-00)", $: 5473600 },
    { "#": "33 CUTLER LN (437-17-00)", $: 2135900 },
    { "#": "41 CUTLER LN (437-18-00)", $: 3556e3 },
    { "#": "50 CUTLER LN (437-23-00)", $: 5932800 },
    { "#": "51 CUTLER LN (437-19-00)", $: 1434700 },
    { "#": "65 CUTLER LN (437-20-00)", $: 2534100 },
    { "#": "66 CUTLER LN (437-27-03)", $: 5337e3 },
    { "#": "77 CUTLER LN (437-21-00)", $: 2570300 },
    { "#": "88 CUTLER LN (437-27-02)", $: 6773500 },
    { "#": "89 CUTLER LN (437-22-00)", $: 2183400 },
    { "#": "0 CYPRESS ST (200-16-03)", $: 140500 },
    { "#": "0 CYPRESS ST (200-16-04)", $: 142100 },
    { "#": "0 CYPRESS ST (200-16-05)", $: 107600 },
    { "#": "6 CYPRESS ST (177-37-00)", $: 2597400 },
    { "#": "14 CYPRESS ST (177-36-00)", $: 1480900 },
    { "#": "18 CYPRESS ST (177-35-00)", $: 1453900 },
    { "#": "19 CYPRESS ST (195-09-00)", $: 1614e4 },
    { "#": "21 CYPRESS ST (200-16-00)", $: 2484300 },
    { "#": "23 CYPRESS ST (200-16-01)", $: 2372e3 },
    { "#": "25 CYPRESS ST (200-16-02)", $: 2584700 },
    { "#": "26 CYPRESS ST (177-25-01.9)", $: 0 },
    { "#": "27 CYPRESS ST (200-17-00)", $: 1922600 },
    { "#": "30 CYPRESS ST (177-25-00.9)", $: 0 },
    { "#": "34 CYPRESS ST (177-24-00)", $: 2022400 },
    { "#": "35 CYPRESS ST (200-01-00)", $: 2343600 },
    { "#": "36 CYPRESS ST (177-23-00)", $: 2035900 },
    { "#": "39 CYPRESS ST (198-07-00)", $: 1872300 },
    { "#": "41 CYPRESS ST (198-07-01.9)", $: 0 },
    { "#": "42 CYPRESS ST (179-11-01)", $: 1955400 },
    { "#": "44 CYPRESS ST (179-11-00)", $: 2264100 },
    { "#": "54 CYPRESS ST (179-10-00)", $: 2652900 },
    { "#": "62 CYPRESS ST (180-03-00.9)", $: 0 },
    { "#": "69 CYPRESS ST (197-01-00)", $: 2109200 },
    { "#": "76 CYPRESS ST (180-02-00.9)", $: 0 },
    { "#": "79 CYPRESS ST (197-02-00)", $: 1856600 },
    { "#": "83 CYPRESS ST (197-03-00)", $: 1833400 },
    { "#": "90 CYPRESS ST (181-04-00)", $: 6653200 },
    { "#": "98 CYPRESS ST (181-02-03)", $: 2684400 },
    { "#": "102 CYPRESS ST (181-01-00)", $: 3024e3 },
    { "#": "110 CYPRESS ST (189-22-32.9)", $: 0 },
    { "#": "116 CYPRESS ST (189-31-00)", $: 1521e3 },
    { "#": "120 CYPRESS ST (189-30-00)", $: 1071500 },
    { "#": "131 CYPRESS ST (190-01-00)", $: 7003e3 },
    { "#": "144 CYPRESS ST (318-13-00)", $: 1585100 },
    { "#": "150 CYPRESS ST (318-12-00)", $: 1955200 },
    { "#": "153 CYPRESS ST (319-01-00)", $: 1515500 },
    { "#": "156 CYPRESS ST (318-03-01)", $: 1523600 },
    { "#": "157 CYPRESS ST (320-01-00)", $: 787e3 },
    { "#": "157 CYPRESS ST (320-01-00.9)", $: 787e3 },
    { "#": "158 CYPRESS ST (318-03-00)", $: 1413700 },
    { "#": "161 CYPRESS ST (320-02-00)", $: 2013900 },
    { "#": "162 CYPRESS ST (318-02-00)", $: 1792600 },
    { "#": "165 CYPRESS ST (320-03-00)", $: 1585e3 },
    { "#": "171 CYPRESS ST (320-03-01)", $: 1565600 },
    { "#": "175 CYPRESS ST (320-04-00)", $: 1540800 },
    { "#": "193 CYPRESS ST (317-20-00)", $: 2011100 },
    { "#": "195 CYPRESS ST (317-21-00.9)", $: 0 },
    { "#": "205 CYPRESS ST (317-25-00)", $: 5819100 },
    { "#": "215 CYPRESS ST (317-30-00)", $: 1619700 },
    { "#": "217 CYPRESS ST (317-31-00.9)", $: 0 },
    { "#": "224 CYPRESS ST (307-03-00)", $: 1284600 },
    { "#": "227 CYPRESS ST (317-32-33)", $: 2325700 },
    { "#": "229 CYPRESS ST (317-34-00)", $: 837300 },
    { "#": "230 CYPRESS ST (307-01-02)", $: 1061200 },
    { "#": "234 CYPRESS ST (306-06-00)", $: 1395600 },
    { "#": "235 CYPRESS ST (316-23-00)", $: 8805500 },
    { "#": "236 CYPRESS ST (306-05-00)", $: 1419500 },
    { "#": "238 CYPRESS ST (306-04-00)", $: 1207500 },
    { "#": "240 CYPRESS ST (306-03-00)", $: 1298600 },
    { "#": "241 CYPRESS ST (316-24-00.9)", $: 0 },
    { "#": "244 CYPRESS ST (306-02-00.9)", $: 0 },
    { "#": "248 CYPRESS ST (306-01-00)", $: 1038400 },
    { "#": "252 CYPRESS ST (305-04-00)", $: 1321100 },
    { "#": "254 CYPRESS ST (305-03-00)", $: 920400 },
    { "#": "258 CYPRESS ST (305-02-00)", $: 1263e3 },
    { "#": "264 CYPRESS ST (305-01-00)", $: 1242900 },
    { "#": "268 CYPRESS ST (304-06-00)", $: 1390200 },
    { "#": "275 CYPRESS ST (316-25-00.9)", $: 0 },
    { "#": "276 CYPRESS ST (304-05-00.9)", $: 0 },
    { "#": "278 CYPRESS ST (304-04-00)", $: 1154500 },
    { "#": "280 CYPRESS ST (304-03-00)", $: 943800 },
    { "#": "282 CYPRESS ST (304-01-02)", $: 1724400 },
    { "#": "293 CYPRESS ST (303-11-00)", $: 1665200 },
    { "#": "296 CYPRESS ST (308-82-83)", $: 14435300 },
    { "#": "299 CYPRESS ST (303-13-12)", $: 2954100 },
    { "#": "299 CYPRESS ST (303-13-12.9)", $: 3072200 },
    { "#": "317 CYPRESS ST (302-11-00)", $: 1122600 },
    { "#": "321 CYPRESS ST (302-12-00)", $: 1024400 },
    { "#": "327 CYPRESS ST (302-13-00)", $: 1423300 },
    { "#": "329 CYPRESS ST (302-14-01)", $: 76700 },
    { "#": "331 CYPRESS ST (302-14-00)", $: 1181300 },
    { "#": "15 DALE ST (341-14-00)", $: 924200 },
    { "#": "23 DALE ST (341-15-00)", $: 951200 },
    { "#": "25 DALE ST (341-15-01)", $: 904300 },
    { "#": "27 DALE ST (341-16-00)", $: 932200 },
    { "#": "31 DALE ST (341-17-00)", $: 832900 },
    { "#": "32 DALE ST (340-08-00)", $: 1553500 },
    { "#": "35 DALE ST (341-18-00)", $: 1301100 },
    { "#": "38 DALE ST (340-06-07)", $: 891e3 },
    { "#": "39 DALE ST (341-19-00)", $: 1043100 },
    { "#": "43 DALE ST (341-20-00)", $: 909700 },
    { "#": "44 DALE ST (340-05-00)", $: 1048900 },
    { "#": "48 DALE ST (340-04-00)", $: 940900 },
    { "#": "49 DALE ST (341-01-02)", $: 831e3 },
    { "#": "59 DALE ST (346-10-00)", $: 922600 },
    { "#": "65 DALE ST (346-11-00)", $: 833e3 },
    { "#": "66 DALE ST (347-01-04)", $: 1165500 },
    { "#": "69 DALE ST (346-12-00)", $: 993700 },
    { "#": "72 DALE ST (347-01-03)", $: 930900 },
    { "#": "73 DALE ST (346-13-00)", $: 889e3 },
    { "#": "77 DALE ST (346-14-00)", $: 976300 },
    { "#": "78 DALE ST (347-01-02)", $: 1933600 },
    { "#": "79 DALE ST (346-15-00)", $: 804300 },
    { "#": "85 DALE ST (346-16-00)", $: 1215900 },
    { "#": "86 DALE ST (347-01-01)", $: 2031900 },
    { "#": "91 DALE ST (346-17-00)", $: 1397e3 },
    { "#": "92 DALE ST (347-18-00)", $: 1193700 },
    { "#": "95 DALE ST (346-18-00)", $: 1753300 },
    { "#": "99 DALE ST (346-19-00)", $: 1686700 },
    { "#": "100 DALE ST (347-19-00)", $: 1344600 },
    { "#": "101 DALE ST (346-20-00)", $: 100 },
    { "#": "7 DANA ST (197-07-00)", $: 2107800 },
    { "#": "11 DANA ST (197-08-00)", $: 1848800 },
    { "#": "12 DANA ST (196-03-00)", $: 2200800 },
    { "#": "14 DANA ST (196-02-00)", $: 2178600 },
    { "#": "22 DANA ST (196-01-03)", $: 235e4 },
    { "#": "0 DAVIS AVE (182-04-01.9)", $: 0 },
    { "#": "10 DAVIS AVE (183-11-00)", $: 4572900 },
    { "#": "14 DAVIS AVE (183-10-00)", $: 4986700 },
    { "#": "15 DAVIS AVE (176-02-00.9)", $: 0 },
    { "#": "17 DAVIS AVE (176-03-00)", $: 935500 },
    { "#": "17 DAVIS AVE (176-03-00.9)", $: 1075300 },
    { "#": "18 DAVIS AVE (183-09-00.9)", $: 0 },
    { "#": "22 DAVIS AVE (183-08-03)", $: 837500 },
    { "#": "22 DAVIS AVE (183-08-03.9)", $: 1174800 },
    { "#": "23 DAVIS AVE (176-04-01)", $: 2224e3 },
    { "#": "24 DAVIS AVE (183-08-02)", $: 1496400 },
    { "#": "25 DAVIS AVE (176-05-00)", $: 2181800 },
    { "#": "26 DAVIS AVE (183-08-01)", $: 1484100 },
    { "#": "28 DAVIS AVE (183-08-00)", $: 1777e3 },
    { "#": "30 DAVIS AVE (183-07-00)", $: 2051800 },
    { "#": "31 DAVIS AVE (176-06-00.9)", $: 0 },
    { "#": "32 DAVIS AVE (183-06-01)", $: 1204e3 },
    { "#": "34 DAVIS AVE (183-06-00)", $: 1972400 },
    { "#": "34 DAVIS AVE (183-06-00.9)", $: 2285400 },
    { "#": "35 DAVIS AVE (176-07-00)", $: 2533700 },
    { "#": "36 DAVIS AVE (183-05-00.9)", $: 0 },
    { "#": "43 DAVIS AVE (176-08-00.9)", $: 0 },
    { "#": "44 DAVIS AVE (183-04-00.9)", $: 0 },
    { "#": "49 DAVIS AVE (176-13-00.9)", $: 0 },
    { "#": "50 DAVIS AVE (183-03-00)", $: 1958400 },
    { "#": "50 DAVIS AVE (183-03-02)", $: 1985800 },
    { "#": "50 DAVIS AVE (183-03-02.9)", $: 1985800 },
    { "#": "53 DAVIS AVE (176-14-00.9)", $: 0 },
    { "#": "54 DAVIS AVE (183-03-01)", $: 1141500 },
    { "#": "58 DAVIS AVE (183-02-00)", $: 259e4 },
    { "#": "60 DAVIS AVE (183-01-00)", $: 2894700 },
    { "#": "68 DAVIS AVE (182-17-00)", $: 2214300 },
    { "#": "74 DAVIS AVE (182-16-00)", $: 4351500 },
    { "#": "82 DAVIS AVE (182-15-00)", $: 2213300 },
    { "#": "84 DAVIS AVE (182-14-01)", $: 1611e3 },
    { "#": "84 DAVIS AVE (182-14-01.9)", $: 1675500 },
    { "#": "88 DAVIS AVE (182-14-00)", $: 2330800 },
    { "#": "92 DAVIS AVE (182-13-01)", $: 1714e3 },
    { "#": "96 DAVIS AVE (182-13-00)", $: 1916600 },
    { "#": "100 DAVIS AVE (182-12-00)", $: 1697500 },
    { "#": "102 DAVIS AVE (182-11-00)", $: 1934800 },
    { "#": "106 DAVIS AVE (182-10-00)", $: 1637700 },
    { "#": "109 DAVIS AVE (179-01-00.9)", $: 0 },
    { "#": "110 DAVIS AVE (182-09-00)", $: 1674100 },
    { "#": "112 DAVIS AVE (182-08-00)", $: 1672800 },
    { "#": "114 DAVIS AVE (182-07-00)", $: 933700 },
    { "#": "114 DAVIS AVE (182-07-00.9)", $: 675200 },
    { "#": "117 DAVIS AVE (179-02-00)", $: 1805100 },
    { "#": "118 DAVIS AVE (182-06-00)", $: 1605500 },
    { "#": "122 DAVIS AVE (182-05-00.9)", $: 0 },
    { "#": "123 DAVIS AVE (179-03-00)", $: 1765900 },
    { "#": "124 DAVIS AVE (182-04-00.9)", $: 0 },
    { "#": "128 DAVIS AVE (182-03-00.9)", $: 0 },
    { "#": "131 DAVIS AVE (180-09-00.9)", $: 0 },
    { "#": "134 DAVIS AVE (181-06-00.9)", $: 0 },
    { "#": "138 DAVIS AVE (181-05-00)", $: 2032200 },
    { "#": "138 DAVIS AVE (181-05-00.9)", $: 2032200 },
    { "#": "139 DAVIS AVE (180-01-00.9)", $: 0 },
    { "#": "151 DAVIS AVE (197-04-00)", $: 2105800 },
    { "#": "155 DAVIS AVE (197-05-00)", $: 1931800 },
    { "#": "161 DAVIS AVE (197-06-00)", $: 3303500 },
    { "#": "165 DAVIS AVE (196-04-00)", $: 1708e3 },
    { "#": "173 DAVIS AVE (196-05-00)", $: 4787500 },
    { "#": "175 DAVIS AVE (196-06-02)", $: 1347200 },
    { "#": "177 DAVIS AVE (196-06-01)", $: 1452300 },
    { "#": "179 DAVIS AVE (196-06-00)", $: 1489500 },
    { "#": "181 DAVIS AVE (196-07-00.9)", $: 0 },
    { "#": "185 DAVIS AVE (196-08-00.9)", $: 0 },
    { "#": "191 DAVIS AVE (196-09-00)", $: 2178e3 },
    { "#": "195 DAVIS AVE (196-10-00.9)", $: 0 },
    { "#": "201 DAVIS AVE (196-11-00)", $: 2333200 },
    { "#": "205 DAVIS AVE (196-12-00)", $: 2805200 },
    { "#": "4 DAVIS CT (183-14-00)", $: 2111300 },
    { "#": "12 DAVIS CT (183-13-00.9)", $: 0 },
    { "#": "12 DEAN RD (225-60-00)", $: 4794500 },
    { "#": "18 DEAN RD (225-61-00)", $: 3848400 },
    { "#": "20 DEAN RD (225-62-00)", $: 3619700 },
    { "#": "24 DEAN RD (225-63-00.9)", $: 0 },
    { "#": "26 DEAN RD (225-64-00.9)", $: 0 },
    { "#": "30 DEAN RD (225-65-00.9)", $: 0 },
    { "#": "61 DEAN RD (233-07-00)", $: 2636900 },
    { "#": "64 DEAN RD (230-01-00)", $: 2325100 },
    { "#": "73 DEAN RD (232-01-00)", $: 2428900 },
    { "#": "78 DEAN RD (245-06-00)", $: 2281200 },
    { "#": "85 DEAN RD (232-02-00)", $: 2809300 },
    { "#": "86 DEAN RD (245-05-00)", $: 3242600 },
    { "#": "92 DEAN RD (245-04-00)", $: 1825800 },
    { "#": "93 DEAN RD (232-03-00)", $: 3879700 },
    { "#": "96 DEAN RD (245-03-00)", $: 3275e3 },
    { "#": "101 DEAN RD (232-04-00)", $: 2678e3 },
    { "#": "102 DEAN RD (243-06-00)", $: 1698400 },
    { "#": "107 DEAN RD (240-07-00)", $: 3219600 },
    { "#": "110 DEAN RD (243-05-00)", $: 2513800 },
    { "#": "115 DEAN RD (240-08-00)", $: 2423800 },
    { "#": "118 DEAN RD (243-04-00)", $: 3728900 },
    { "#": "123 DEAN RD (240-09-11)", $: 2731700 },
    { "#": "124 DEAN RD (243-03-00)", $: 3100800 },
    { "#": "129 DEAN RD (240-10-00)", $: 3583100 },
    { "#": "130 DEAN RD (243-02-00)", $: 3600800 },
    { "#": "156 DEAN RD (258-08-00)", $: 3457600 },
    { "#": "163 DEAN RD (241-02-00)", $: 2937500 },
    { "#": "163 DEAN RD (241-02-01)", $: 2870500 },
    { "#": "164 DEAN RD (258-07-00)", $: 4974900 },
    { "#": "172 DEAN RD (258-06-00)", $: 3466e3 },
    { "#": "177 DEAN RD (242-01-00)", $: 2803400 },
    { "#": "184 DEAN RD (258-05-00)", $: 3666200 },
    { "#": "185 DEAN RD (242-02-00)", $: 2845700 },
    { "#": "198 DEAN RD (267-18-00)", $: 2855500 },
    { "#": "199 DEAN RD (259-02-00)", $: 2353400 },
    { "#": "207 DEAN RD (259-03-00)", $: 3394100 },
    { "#": "212 DEAN RD (267-17-00)", $: 2636200 },
    { "#": "228 DEAN RD (267-12-13)", $: 2755500 },
    { "#": "237 DEAN RD (260-04-00)", $: 2672600 },
    { "#": "240 DEAN RD (267-11-00)", $: 3289e3 },
    { "#": "249 DEAN RD (261-02-00)", $: 2379200 },
    { "#": "250 DEAN RD (267-10-00)", $: 2140900 },
    { "#": "257 DEAN RD (261-03-00)", $: 1912300 },
    { "#": "260 DEAN RD (267-09-00)", $: 2346500 },
    { "#": "265 DEAN RD (261-04-00)", $: 2878700 },
    { "#": "266 DEAN RD (267-08-00)", $: 2119500 },
    { "#": "271 DEAN RD (261-05-00)", $: 3187700 },
    { "#": "274 DEAN RD (267-07-00)", $: 2319300 },
    { "#": "275 DEAN RD (261-06-00)", $: 2568300 },
    { "#": "284 DEAN RD (267-06-00)", $: 2613400 },
    { "#": "285 DEAN RD (261-07-00)", $: 2611700 },
    { "#": "294 DEAN RD (267-05-00)", $: 3320400 },
    { "#": "302 DEAN RD (267-04-00)", $: 2585400 },
    { "#": "305 DEAN RD (264C-07-00)", $: 2511400 },
    { "#": "311 DEAN RD (264C-08-00)", $: 2648500 },
    { "#": "312 DEAN RD (267-02-03)", $: 3585300 },
    { "#": "319 DEAN RD (264C-09-00)", $: 2585e3 },
    { "#": "9 DENNY RD (278D-11-00)", $: 3687900 },
    { "#": "19 DENNY RD (278D-12-00)", $: 2941100 },
    { "#": "28 DENNY RD (278B-10-00)", $: 2729e3 },
    { "#": "29 DENNY RD (278D-13-00)", $: 2364800 },
    { "#": "36 DENNY RD (278B-09-00)", $: 3112600 },
    { "#": "39 DENNY RD (278D-13-01)", $: 1805600 },
    { "#": "48 DENNY RD (278B-08-00)", $: 2457900 },
    { "#": "59 DENNY RD (278D-14-01)", $: 2468100 },
    { "#": "60 DENNY RD (278B-07-00)", $: 3662900 },
    { "#": "69 DENNY RD (278D-15-00)", $: 4960600 },
    { "#": "76 DENNY RD (278B-06-00)", $: 4214800 },
    { "#": "11 DEVON RD (284-01-00)", $: 10100 },
    { "#": "17 DEVON RD (284-02-00)", $: 3283800 },
    { "#": "27 DEVON RD (284-03-04)", $: 3940300 },
    { "#": "37 DEVON RD (284-05-00)", $: 2166200 },
    { "#": "38 DEVON RD (283-06-00)", $: 3550200 },
    { "#": "45 DEVON RD (284-06-00)", $: 2040800 },
    { "#": "48 DEVON RD (283-05-00)", $: 3275700 },
    { "#": "55 DEVON RD (284-07-00)", $: 5018800 },
    { "#": "7 DEVOTION ST (049-15-01)", $: 2496200 },
    { "#": "9 DEVOTION ST (049-16-00)", $: 2425500 },
    { "#": "19 DEVOTION ST (049-10-00)", $: 5722800 },
    { "#": "9 DORAN RD (267-29-30)", $: 753300 },
    { "#": "9 DORAN RD (267-29-30.9)", $: 1155500 },
    { "#": "14 DORAN RD (268-03-00)", $: 1114300 },
    { "#": "15 DORAN RD (267-31-00)", $: 1010600 },
    { "#": "15 DORAN RD (267-32-00)", $: 947200 },
    { "#": "15 DORAN RD (267-33-00)", $: 947300 },
    { "#": "17 DORAN RD (267-34-00)", $: 1860200 },
    { "#": "18 DORAN RD (268-02-00)", $: 762800 },
    { "#": "18 DORAN RD (268-02-00.9)", $: 1139800 },
    { "#": "21 DORAN RD (267-35-00)", $: 1256400 },
    { "#": "5 DOWNING RD (095-04-01)", $: 1836300 },
    { "#": "9 DOWNING RD (095-05-00)", $: 3016300 },
    { "#": "10 DOWNING RD (096-09-00)", $: 2768400 },
    { "#": "16 DOWNING RD (096-08-00)", $: 2930700 },
    { "#": "25 DOWNING RD (097-06-00)", $: 2514400 },
    { "#": "26 DOWNING RD (096-07-00)", $: 2115600 },
    { "#": "5 DRUCE ST (240-06-00)", $: 3801900 },
    { "#": "8 DRUCE ST (232-06-00)", $: 2842500 },
    { "#": "12 DRUCE ST (232-05-00)", $: 1950800 },
    { "#": "36 DRUCE ST (245-02-00)", $: 2863900 },
    { "#": "43 DRUCE ST (243-07-00)", $: 2681800 },
    { "#": "50 DRUCE ST (245-01-00)", $: 41394e3 },
    { "#": "79 DRUCE ST (244-05-00)", $: 2814100 },
    { "#": "1 DUDLEY ST (325-09-00)", $: 5061500 },
    { "#": "20 DUDLEY ST (326-01-03)", $: 3723100 },
    { "#": "23 DUDLEY ST (325-01-00)", $: 3151300 },
    { "#": "30 DUDLEY ST (326-23-00)", $: 2898600 },
    { "#": "46 DUDLEY ST (326-21-22)", $: 7080900 },
    { "#": "54 DUDLEY ST (326-20-09)", $: 3653400 },
    { "#": "64 DUDLEY ST (326-19-00)", $: 7070600 },
    { "#": "68 DUDLEY ST (326-10-00)", $: 3927500 },
    { "#": "80 DUDLEY ST (326-18-00)", $: 6862600 },
    { "#": "92 DUDLEY ST (326-16-05)", $: 4112300 },
    { "#": "94 DUDLEY ST (326-16-00.9)", $: 0 },
    { "#": "111 DUDLEY ST (324-10-00)", $: 22590800 },
    { "#": "112 DUDLEY ST (326-15-00)", $: 2986e3 },
    { "#": "128 DUDLEY ST (334-30-00)", $: 1998300 },
    { "#": "140 DUDLEY ST (334-29-00)", $: 2435600 },
    { "#": "145 DUDLEY ST (335-01-00)", $: 363300 },
    { "#": "150 DUDLEY ST (334-27-28)", $: 2699800 },
    { "#": "170 DUDLEY ST (334-26-00)", $: 2046900 },
    { "#": "178 DUDLEY ST (334-25-00)", $: 2812100 },
    { "#": "190 DUDLEY ST (334-23-00)", $: 2775e3 },
    { "#": "200 DUDLEY ST (334-22-00)", $: 1913300 },
    { "#": "226 DUDLEY ST (350-19-20)", $: 7053500 },
    { "#": "240 DUDLEY ST (350-18-00)", $: 4217200 },
    { "#": "243 DUDLEY ST (349-13-00)", $: 5706e3 },
    { "#": "248 DUDLEY ST (350-04-00)", $: 3103e3 },
    { "#": "255 DUDLEY ST (349-14-00)", $: 7117100 },
    { "#": "265 DUDLEY ST (349-15-00)", $: 4735400 },
    { "#": "274 DUDLEY ST (350-03-00)", $: 4747200 },
    { "#": "280 DUDLEY ST (350-02-00)", $: 6221300 },
    { "#": "285 DUDLEY ST (349-16-00)", $: 4290400 },
    { "#": "300 DUDLEY ST (350-01-00)", $: 4605200 },
    { "#": "305 DUDLEY ST (349-17-00)", $: 8059200 },
    { "#": "320 DUDLEY ST (350-17-00)", $: 4254700 },
    { "#": "9 DUFFLEY CT (275-13-00)", $: 1067500 },
    { "#": "10 DUFFLEY CT (275-15-00)", $: 1220800 },
    { "#": "10 DUFFLEY CT (275-15-00.9)", $: 1220800 },
    { "#": "10 DUFFLEY CT (275-15-04)", $: 1578200 },
    { "#": "14 DUFFLEY CT (275-14-00)", $: 138e4 },
    { "#": "0 DUMMER ST (017-07-00)", $: 0 },
    { "#": "10 DUMMER ST (015-03-01)", $: 2930300 },
    { "#": "14 DUMMER ST (015-03-00)", $: 2105700 },
    { "#": "40 DUMMER ST (016-02-00)", $: 1579e3 },
    { "#": "47 DUMMER ST (017-06-00)", $: 4417300 },
    { "#": "115 DUMMER ST (019-02-00)", $: 4793200 },
    { "#": "121 DUMMER ST (019-11-00)", $: 7748300 },
    { "#": "22 DUNSTER RD (284-21-00)", $: 2116100 },
    { "#": "26 DUNSTER RD (284-20-00)", $: 2327300 },
    { "#": "40 DUNSTER RD (284-19-00)", $: 6418700 },
    { "#": "83 DUNSTER RD (433-01-00)", $: 1486200 },
    { "#": "4 DWIGHT ST (046-14-00.9)", $: 0 },
    { "#": "8 DWIGHT ST (046-13-00)", $: 2952300 },
    { "#": "10 DWIGHT ST (046-12-00)", $: 2797400 },
    { "#": "15 DWIGHT ST (035-44-00)", $: 1519500 },
    { "#": "21 DWIGHT ST (035-45-00)", $: 2566900 },
    { "#": "25 DWIGHT ST (035-46-00)", $: 3314300 },
    { "#": "31 DWIGHT ST (035-47-00)", $: 2828400 },
    { "#": "33 DWIGHT ST (035-48-00)", $: 3687800 },
    { "#": "36 DWIGHT ST (047-12-00.9)", $: 0 },
    { "#": "37 DWIGHT ST (035-49-00)", $: 3174100 },
    { "#": "39 DWIGHT ST (035-50-00)", $: 3168300 },
    { "#": "41 DWIGHT ST (035-51-00.9)", $: 0 },
    { "#": "43 DWIGHT ST (035-52-00)", $: 3791900 },
    { "#": "43 DWIGHT ST (035-52-00.9)", $: 3791900 },
    { "#": "45 DWIGHT ST (035-53-00)", $: 3136700 },
    { "#": "48 DWIGHT ST (047-10-00.9)", $: 0 },
    { "#": "53 DWIGHT ST (033-01-00)", $: 1387300 },
    { "#": "57 DWIGHT ST (033-02-00)", $: 1764100 },
    { "#": "9 EAST MILTON RD (318-04-00)", $: 853900 },
    { "#": "10 EAST MILTON RD (318-11-00)", $: 2085300 },
    { "#": "11 EAST MILTON RD (318-05-00)", $: 1943300 },
    { "#": "14 EAST MILTON RD (318-10-00)", $: 1981800 },
    { "#": "15 EAST MILTON RD (318-06-00)", $: 1976600 },
    { "#": "17 EAST MILTON RD (318-07-00)", $: 1991300 },
    { "#": "18 EAST MILTON RD (318-09-00)", $: 2401600 },
    { "#": "20 EAST MILTON RD (318-08-00.9)", $: 0 },
    { "#": "1 EDGEHILL RD (299-31-00)", $: 2427800 },
    { "#": "12 EDGEHILL RD (299-43-00)", $: 76100 },
    { "#": "17 EDGEHILL RD (299-32-00)", $: 2146400 },
    { "#": "19 EDGEHILL RD (299-33-00)", $: 2087200 },
    { "#": "20 EDGEHILL RD (299-42-00)", $: 2515900 },
    { "#": "25 EDGEHILL RD (299-34-00)", $: 2022600 },
    { "#": "26 EDGEHILL RD (299-41-00)", $: 2893500 },
    { "#": "29 EDGEHILL RD (299-35-00)", $: 1666600 },
    { "#": "33 EDGEHILL RD (299-36-00)", $: 4935300 },
    { "#": "36 EDGEHILL RD (299-40-00)", $: 3647900 },
    { "#": "41 EDGEHILL RD (299-37-00)", $: 3907700 },
    { "#": "44 EDGEHILL RD (299-39-00)", $: 3767e3 },
    { "#": "50 EDGEHILL RD (299-38-00)", $: 4009100 },
    { "#": "6 EDWIN ST (317-29-00)", $: 1749400 },
    { "#": "8 EDWIN ST (317-28-00)", $: 2255600 },
    { "#": "12 EDWIN ST (317-27-00)", $: 1712900 },
    { "#": "12 EDWIN ST (317-27-00.9)", $: 1071300 },
    { "#": "16 EDWIN ST (317-26-00)", $: 1421300 },
    { "#": "14 EGMONT ST (022-01-00.9)", $: 0 },
    { "#": "54 EGMONT ST (023-01-00.9)", $: 0 },
    { "#": "5 ELBA ST (029-03-00)", $: 2248100 },
    { "#": "6 ELBA ST (030-01-00)", $: 2264900 },
    { "#": "9 ELBA ST (029-04-00)", $: 2852700 },
    { "#": "12 ELBA ST (030-11-00)", $: 2572500 },
    { "#": "18 ELBA ST (030-10-00)", $: 2140900 },
    { "#": "21 ELBA ST (029-05-00)", $: 2676e3 },
    { "#": "24 ELBA ST (030-09-00)", $: 2433600 },
    { "#": "27 ELBA ST (029-06-00)", $: 2456100 },
    { "#": "1 ELIOT AVE (274-05-00)", $: 1010400 },
    { "#": "5 ELIOT AVE (274-06-00)", $: 1479500 },
    { "#": "8 ELIOT AVE (275-06-00)", $: 1398200 },
    { "#": "6 ELIOT CRES (272-13-00)", $: 1717500 },
    { "#": "12 ELIOT CRES (273-02-00)", $: 1607500 },
    { "#": "16 ELIOT CRES (273-03-00)", $: 1601900 },
    { "#": "19 ELIOT CRES (271-02-00.9)", $: 0 },
    { "#": "25 ELIOT CRES (271-03-00)", $: 1110400 },
    { "#": "29 ELIOT CRES (271-03-01)", $: 1173900 },
    { "#": "32 ELIOT CRES (275-05-00)", $: 1107200 },
    { "#": "35 ELIOT CRES (271-04-00)", $: 999700 },
    { "#": "36 ELIOT CRES (275-04-00)", $: 1265100 },
    { "#": "39 ELIOT CRES (271-05-00.9)", $: 0 },
    { "#": "40 ELIOT CRES (275-03-00)", $: 1147800 },
    { "#": "46 ELIOT CRES (275-02-00)", $: 1264500 },
    { "#": "48 ELIOT CRES (275-01-00)", $: 1540800 },
    { "#": "55 ELIOT CRES (271-06-00)", $: 778100 },
    { "#": "55 ELIOT CRES (271-06-00.9)", $: 778100 },
    { "#": "59 ELIOT CRES (271-07-00)", $: 1621e3 },
    { "#": "59 ELIOT CRES (271-07-00.9)", $: 1702e3 },
    { "#": "3 ELIOT ST (269A-36-01)", $: 3859500 },
    { "#": "19 ELIOT ST (269A-42-00)", $: 1231200 },
    { "#": "20 ELIOT ST (272-03-04)", $: 1466500 },
    { "#": "24 ELIOT ST (272-02-01)", $: 1140700 },
    { "#": "25 ELIOT ST (269A-43-00)", $: 1423600 },
    { "#": "28 ELIOT ST (272-02-00)", $: 1167800 },
    { "#": "29 ELIOT ST (269A-44-00)", $: 1116900 },
    { "#": "30 ELIOT ST (272-01-00)", $: 887500 },
    { "#": "35 ELIOT ST (269A-45-00)", $: 1089300 },
    { "#": "39 ELIOT ST (269A-46-00)", $: 2474300 },
    { "#": "43 ELIOT ST (269A-47-00)", $: 1597500 },
    { "#": "47 ELIOT ST (269A-48-00)", $: 1721300 },
    { "#": "51 ELIOT ST (269A-49-00.9)", $: 0 },
    { "#": "55 ELIOT ST (269A-01-00.9)", $: 0 },
    { "#": "60 ELIOT ST (271-01-00)", $: 2400400 },
    { "#": "67 ELIOT ST (269-17-00)", $: 3244700 },
    { "#": "71 ELIOT ST (269-18-00)", $: 969600 },
    { "#": "75 ELIOT ST (269-18-01)", $: 1029600 },
    { "#": "77 ELIOT ST (269-19-00)", $: 1242500 },
    { "#": "79 ELIOT ST (269-20-00)", $: 1118900 },
    { "#": "83 ELIOT ST (269-21-00)", $: 1035700 },
    { "#": "85 ELIOT ST (269-22-00)", $: 1080900 },
    { "#": "91 ELIOT ST (269-23-00)", $: 1317900 },
    { "#": "93 ELIOT ST (269-24-00)", $: 1241500 },
    { "#": "95 ELIOT ST (269-25-04)", $: 1049e3 },
    { "#": "100 ELIOT ST (277-01-00)", $: 30316600 },
    { "#": "101 ELIOT ST (269-01-00)", $: 1e6 },
    { "#": "115 ELIOT ST (268-08-00)", $: 1667300 },
    { "#": "119 ELIOT ST (268-01-00)", $: 2002100 },
    { "#": "125 ELIOT ST (267-37-00)", $: 1937200 },
    { "#": "127 ELIOT ST (267-38-00)", $: 1455700 },
    { "#": "132 ELIOT ST (277-24-00)", $: 136e4 },
    { "#": "136 ELIOT ST (277-23-00)", $: 1597600 },
    { "#": "140 ELIOT ST (277-22-00)", $: 1379900 },
    { "#": "146 ELIOT ST (277-21-00)", $: 1199800 },
    { "#": "149 ELIOT ST (267-40-00)", $: 2760700 },
    { "#": "150 ELIOT ST (277-20-00)", $: 1856900 },
    { "#": "154 ELIOT ST (277-19-00)", $: 1435700 },
    { "#": "175 ELIOT ST (264C-10-00)", $: 1750800 },
    { "#": "180 ELIOT ST (265A-09-00)", $: 1518600 },
    { "#": "183 ELIOT ST (264C-11-00)", $: 2258700 },
    { "#": "189 ELIOT ST (264C-12-00)", $: 2203700 },
    { "#": "194 ELIOT ST (265A-08-09)", $: 2337300 },
    { "#": "195 ELIOT ST (264C-13-00)", $: 1842800 },
    { "#": "200 ELIOT ST (265A-07-00)", $: 2466500 },
    { "#": "203 ELIOT ST (264C-14-00)", $: 1713100 },
    { "#": "208 ELIOT ST (265A-06-00)", $: 2422800 },
    { "#": "230 ELIOT ST (265-08-00)", $: 1807700 },
    { "#": "231 ELIOT ST (264B-24-00)", $: 2669800 },
    { "#": "238 ELIOT ST (265-07-00)", $: 2034400 },
    { "#": "246 ELIOT ST (265-05-06)", $: 2421900 },
    { "#": "260 ELIOT ST (265-03-00)", $: 3352700 },
    { "#": "261 ELIOT ST (264A-08-00)", $: 2090500 },
    { "#": "267 ELIOT ST (264A-09-00)", $: 2112300 },
    { "#": "270 ELIOT ST (265-02-00)", $: 1985600 },
    { "#": "273 ELIOT ST (264A-10-00)", $: 1980300 },
    { "#": "281 ELIOT ST (264A-11-00)", $: 1660400 },
    { "#": "290 ELIOT ST (264D-05-00)", $: 1206300 },
    { "#": "300 ELIOT ST (264D-01-01)", $: 35700 },
    { "#": "101 ELLERY CT (388-01-02)", $: 6836800 },
    { "#": "4 ELM ST (181-08-00)", $: 1187600 },
    { "#": "5 ELM ST (182-01-02.9)", $: 1549200 },
    { "#": "6 ELM ST (181-07-00)", $: 2324200 },
    { "#": "7 ELM ST (182-02-00.9)", $: 0 },
    { "#": "10 ELM ST (180-08-00.9)", $: 0 },
    { "#": "13 ELM ST (179-04-00)", $: 1763700 },
    { "#": "15 ELM ST (179-04-01)", $: 2273300 },
    { "#": "16 ELM ST (180-07-00.9)", $: 0 },
    { "#": "19 ELM ST (179-05-00)", $: 1495e3 },
    { "#": "20 ELM ST (180-06-00.9)", $: 0 },
    { "#": "23 ELM ST (179-05-01)", $: 2666600 },
    { "#": "24 ELM ST (180-05-00.9)", $: 0 },
    { "#": "27 ELM ST (179-06-00)", $: 1550200 },
    { "#": "29 ELM ST (179-07-00)", $: 2973100 },
    { "#": "29 ELM ST (179-07-00.9)", $: 2973100 },
    { "#": "31 ELM ST (179-08-00)", $: 2324400 },
    { "#": "35 ELM ST (179-09-00.9)", $: 0 },
    { "#": "6 EMERSON ST (179-19-00)", $: 1854400 },
    { "#": "16 EMERSON ST (179-18-00)", $: 2915500 },
    { "#": "17 EMERSON ST (178-01-00)", $: 6324400 },
    { "#": "22 EMERSON ST (179-17-00)", $: 2860600 },
    { "#": "28 EMERSON ST (179-16-00)", $: 2682400 },
    { "#": "34 EMERSON ST (179-15-00)", $: 3319e3 },
    { "#": "11 ENGLEWOOD AVE (108-16-00)", $: 4537900 },
    { "#": "15 ENGLEWOOD AVE (108-25-00)", $: 3624500 },
    { "#": "17 ENGLEWOOD AVE (108-18-00)", $: 3653800 },
    { "#": "19 ENGLEWOOD AVE (108-19-00.9)", $: 0 },
    { "#": "20 ENGLEWOOD AVE (110-02-00)", $: 13214400 },
    { "#": "89 ESSEX ST (008-04-01)", $: 3430300 },
    { "#": "130 ESSEX ST (015-04-00)", $: 3050500 },
    { "#": "143 ESSEX ST (006A-05-00)", $: 2594400 },
    { "#": "2 EUSTON ST (002-16-00.9)", $: 0 },
    { "#": "3 EUSTON ST (005-06-00.9)", $: 0 },
    { "#": "4 EUSTON ST (002-15-00.9)", $: 0 },
    { "#": "5 EUSTON ST (005-07-00)", $: 3446600 },
    { "#": "7 EUSTON ST (005-08-00)", $: 3555200 },
    { "#": "8 EUSTON ST (002-14-00.9)", $: 0 },
    { "#": "11 EUSTON ST (005-09-00)", $: 3084600 },
    { "#": "12 EUSTON ST (002-13-00.9)", $: 0 },
    { "#": "15 EUSTON ST (005-10-00)", $: 3220800 },
    { "#": "15 EUSTON ST (005-10-00.9)", $: 5761200 },
    { "#": "16 EUSTON ST (002-12-00)", $: 3772900 },
    { "#": "18 EUSTON ST (002-11-00)", $: 3772900 },
    { "#": "19 EUSTON ST (005-11-00)", $: 2797900 },
    { "#": "21 EUSTON ST (005-12-00)", $: 3058800 },
    { "#": "22 EUSTON ST (002-10-00)", $: 3772900 },
    { "#": "24 EUSTON ST (002-09-00.9)", $: 0 },
    { "#": "25 EUSTON ST (005-13-00)", $: 1664200 },
    { "#": "25 EUSTON ST (005-13-00.9)", $: 3055600 },
    { "#": "33 EUSTON ST (005-14-00)", $: 3980300 },
    { "#": "36 EUSTON ST (002-08-00)", $: 2563800 },
    { "#": "58 EUSTON ST (003-04-00)", $: 5336500 },
    { "#": "1 EVANS RD (096-01-00.9)", $: 0 },
    { "#": "10 EVANS RD (100-18-00)", $: 2389800 },
    { "#": "11 EVANS RD (096-02-00)", $: 3051e3 },
    { "#": "15 EVANS RD (096-03-00)", $: 3061500 },
    { "#": "18 EVANS RD (100-17-00)", $: 2483700 },
    { "#": "24 EVANS RD (100-16-00)", $: 2843900 },
    { "#": "25 EVANS RD (096-04-00)", $: 2943200 },
    { "#": "30 EVANS RD (100-15-00)", $: 2769700 },
    { "#": "31 EVANS RD (096-05-00)", $: 2156500 },
    { "#": "36 EVANS RD (100-14-00)", $: 2333800 },
    { "#": "37 EVANS RD (096-06-00)", $: 3328200 },
    { "#": "40 EVANS RD (100-13-00)", $: 2883500 },
    { "#": "59 EVANS RD (098-06-00)", $: 3208200 },
    { "#": "60 EVANS RD (099-16-00)", $: 3057200 },
    { "#": "66 EVANS RD (099-15-00)", $: 2986900 },
    { "#": "69 EVANS RD (098-07-00)", $: 3063100 },
    { "#": "72 EVANS RD (099-14-00)", $: 3147200 },
    { "#": "77 EVANS RD (098-08-00)", $: 3603700 },
    { "#": "78 EVANS RD (099-13-00)", $: 2920100 },
    { "#": "82 EVANS RD (099-11-01)", $: 3691400 },
    { "#": "87 EVANS RD (098-09-00)", $: 3128800 },
    { "#": "92 EVANS RD (099-11-00)", $: 4529200 },
    { "#": "93 EVANS RD (098-10-00)", $: 3021800 },
    { "#": "99 EVANS RD (098-11-00)", $: 2873500 },
    { "#": "106 EVANS RD (099-10-01.9)", $: 0 },
    { "#": "4 FAIRBANKS ST (215-01-00.9)", $: 0 },
    { "#": "8 FAIRBANKS ST (215-29-00.9)", $: 0 },
    { "#": "9 FAIRBANKS ST (214-02-00.9)", $: 0 },
    { "#": "10 FAIRBANKS ST (215-28-00)", $: 3064400 },
    { "#": "14 FAIRBANKS ST (215-27-00)", $: 1368200 },
    { "#": "14 FAIRBANKS ST (215-27-00.9)", $: 3173700 },
    { "#": "16 FAIRBANKS ST (215-26-00.9)", $: 0 },
    { "#": "17 FAIRBANKS ST (214-03-07)", $: 18610700 },
    { "#": "20 FAIRBANKS ST (215-24-25)", $: 8567300 },
    { "#": "0 FAIRGREEN PL (442-06-01)", $: 4e4 },
    { "#": "11 FAIRGREEN PL (442-01-00.9)", $: 0 },
    { "#": "43 FAIRGREEN PL (442-05-00)", $: 1697800 },
    { "#": "44 FAIRGREEN PL (442-07-00.9)", $: 0 },
    { "#": "53 FAIRGREEN PL (442-06-00.9)", $: 0 },
    { "#": "12 FAIRMOUNT ST (327-01-00)", $: 2493400 },
    { "#": "21 FAIRMOUNT ST (326-04-00)", $: 2435500 },
    { "#": "25 FAIRMOUNT ST (326-05-00.9)", $: 0 },
    { "#": "33 FAIRMOUNT ST (326-06-00)", $: 2371100 },
    { "#": "36 FAIRMOUNT ST (334-02-01)", $: 11377600 },
    { "#": "39 FAIRMOUNT ST (326-07-00)", $: 2445400 },
    { "#": "54 FAIRMOUNT ST (334-34-00)", $: 5690900 },
    { "#": "70 FAIRMOUNT ST (334-33-00)", $: 3925900 },
    { "#": "72 FAIRMOUNT ST (334-32-00)", $: 4048700 },
    { "#": "73 FAIRMOUNT ST (326-11-00)", $: 2370300 },
    { "#": "81 FAIRMOUNT ST (326-12-00)", $: 2852300 },
    { "#": "82 FAIRMOUNT ST (334-31-00)", $: 2185300 },
    { "#": "87 FAIRMOUNT ST (326-13-00)", $: 3399600 },
    { "#": "99 FAIRMOUNT ST (326-14-00)", $: 1690600 },
    { "#": "7 FAIRWAY RD (278-01-00)", $: 1934600 },
    { "#": "8 FAIRWAY RD (278C-18-00)", $: 2526e3 },
    { "#": "14 FAIRWAY RD (278C-17-00)", $: 1357300 },
    { "#": "21 FAIRWAY RD (278-02-00)", $: 1831300 },
    { "#": "24 FAIRWAY RD (278C-16-00)", $: 1964400 },
    { "#": "32 FAIRWAY RD (278C-15-00)", $: 1596200 },
    { "#": "33 FAIRWAY RD (278-03-00)", $: 2418300 },
    { "#": "42 FAIRWAY RD (278C-14-00)", $: 1808200 },
    { "#": "52 FAIRWAY RD (278C-13-00)", $: 2984200 },
    { "#": "62 FAIRWAY RD (278C-12-00)", $: 2462500 },
    { "#": "69 FAIRWAY RD (278A-02-00)", $: 2154700 },
    { "#": "72 FAIRWAY RD (278C-11-00)", $: 1714400 },
    { "#": "77 FAIRWAY RD (278A-03-00)", $: 185e4 },
    { "#": "82 FAIRWAY RD (278C-10-00)", $: 2035200 },
    { "#": "85 FAIRWAY RD (278A-04-00)", $: 2456200 },
    { "#": "92 FAIRWAY RD (278C-09-01)", $: 2814500 },
    { "#": "100 FAIRWAY RD (278C-09-00)", $: 1803900 },
    { "#": "110 FAIRWAY RD (278C-08-01)", $: 1441400 },
    { "#": "120 FAIRWAY RD (278C-08-00)", $: 1720400 },
    { "#": "127 FAIRWAY RD (278B-01-00)", $: 4636500 },
    { "#": "130 FAIRWAY RD (278C-07-00)", $: 1365800 },
    { "#": "135 FAIRWAY RD (278B-02-00)", $: 1645700 },
    { "#": "140 FAIRWAY RD (278C-06-00)", $: 2221700 },
    { "#": "143 FAIRWAY RD (278B-03-00)", $: 2198600 },
    { "#": "150 FAIRWAY RD (278C-05-02)", $: 2022100 },
    { "#": "151 FAIRWAY RD (278B-04-00)", $: 4189e3 },
    { "#": "160 FAIRWAY RD (278C-05-01)", $: 2124600 },
    { "#": "170 FAIRWAY RD (278C-05-00)", $: 2013100 },
    { "#": "176 FAIRWAY RD (278C-04-00)", $: 1768300 },
    { "#": "180 FAIRWAY RD (278C-30-00)", $: 1856900 },
    { "#": "192 FAIRWAY RD (278C-01-00)", $: 1184300 },
    { "#": "192 FAIRWAY RD (278C-29-01)", $: 1924800 },
    { "#": "8 FENENO TER (071-30-00)", $: 10100 },
    { "#": "10 FENENO TER (071-29-00)", $: 1411700 },
    { "#": "10 FENENO TER (071-29-00.9)", $: 2665300 },
    { "#": "11 FENENO TER (071-27-00)", $: 941300 },
    { "#": "15 FENENO TER (071-28-00)", $: 2212600 },
    { "#": "0 FERNWOOD RD (439-80-00)", $: 3323500 },
    { "#": "6 FERNWOOD RD (439-81-03)", $: 5072300 },
    { "#": "26 FERNWOOD RD (439-81-02)", $: 7458700 },
    { "#": "28 FERNWOOD RD (439-81-01)", $: 9392700 },
    { "#": "28 FERNWOOD RD (439-82-00)", $: 5793100 },
    { "#": "50 FERNWOOD RD (439-79-00)", $: 3113e3 },
    { "#": "50 FERNWOOD RD (439-79-01)", $: 3803400 },
    { "#": "51 FERNWOOD RD (439-47-00)", $: 3613300 },
    { "#": "54 FERNWOOD RD (439-78-00)", $: 7999500 },
    { "#": "60 FERNWOOD RD (439-75-00)", $: 6305600 },
    { "#": "66 FERNWOOD RD (439-77-00)", $: 6149700 },
    { "#": "74 FERNWOOD RD (439-76-00)", $: 4954300 },
    { "#": "76 FERNWOOD RD (439-85-86)", $: 13828100 },
    { "#": "78 FERNWOOD RD (439-74-00)", $: 6248800 },
    { "#": "80 FERNWOOD RD (439-73-00)", $: 5478700 },
    { "#": "82 FERNWOOD RD (439-72-00)", $: 5155100 },
    { "#": "86 FERNWOOD RD (439-55-00)", $: 5610700 },
    { "#": "100 FERNWOOD RD (439-54-00)", $: 5407600 },
    { "#": "101 FERNWOOD RD (439-49-00)", $: 15911500 },
    { "#": "102 FERNWOOD RD (439-53-00)", $: 4681500 },
    { "#": "104 FERNWOOD RD (439-52-00)", $: 5845700 },
    { "#": "106 FERNWOOD RD (439-39-40)", $: 21602600 },
    { "#": "0 FISHER AVE (254-08-02)", $: 81800 },
    { "#": "4 FISHER AVE (255-02-00)", $: 2523200 },
    { "#": "7 FISHER AVE (254-07-00)", $: 375900 },
    { "#": "18 FISHER AVE (255-01-02)", $: 3865900 },
    { "#": "25 FISHER AVE (254-08-00)", $: 3686e3 },
    { "#": "29 FISHER AVE (254-08-04)", $: 39400 },
    { "#": "31 FISHER AVE (254-08-05)", $: 38500 },
    { "#": "34 FISHER AVE (254-08-03)", $: 34300 },
    { "#": "35 FISHER AVE (254-09-00)", $: 6949e3 },
    { "#": "42 FISHER AVE (256-03-00)", $: 5552600 },
    { "#": "50 FISHER AVE (256-02-00)", $: 3655100 },
    { "#": "71 FISHER AVE (250-12-03)", $: 1574200 },
    { "#": "73 FISHER AVE (250-12-04)", $: 1675100 },
    { "#": "93 FISHER AVE (250-13-02)", $: 4526600 },
    { "#": "99 FISHER AVE (250-13-01)", $: 4491e3 },
    { "#": "100 FISHER AVE (256-01-00)", $: 11903100 },
    { "#": "110 FISHER AVE (256-01-01)", $: 1892900 },
    { "#": "117 FISHER AVE (250-01-02)", $: 2825800 },
    { "#": "123 FISHER AVE (250-01-05)", $: 22332700 },
    { "#": "124 FISHER AVE (256-24-00)", $: 2006100 },
    { "#": "150 FISHER AVE (256-21-23)", $: 8978500 },
    { "#": "166 FISHER AVE (256-22-00)", $: 5403400 },
    { "#": "169 FISHER AVE (249-01-00)", $: 3361600 },
    { "#": "184 FISHER AVE (257-01-00)", $: 4761700 },
    { "#": "195 FISHER AVE (244-01-00)", $: 3849800 },
    { "#": "200 FISHER AVE (257-12-00)", $: 4207300 },
    { "#": "207 FISHER AVE (243-14-00)", $: 4567500 },
    { "#": "219 FISHER AVE (243-01-00)", $: 4460500 },
    { "#": "233 FISHER AVE (240-12-00)", $: 4220200 },
    { "#": "234 FISHER AVE (241-01-00)", $: 4672700 },
    { "#": "239 FISHER AVE (240-13-00)", $: 287700 },
    { "#": "244 FISHER AVE (241-13-00)", $: 2144700 },
    { "#": "246 FISHER AVE (241-12-00)", $: 1032100 },
    { "#": "247 FISHER AVE (240-14-00)", $: 2367200 },
    { "#": "255 FISHER AVE (240-01-00)", $: 3449e3 },
    { "#": "260 FISHER AVE (241-11-00)", $: 2303400 },
    { "#": "266 FISHER AVE (241-10-00)", $: 3336200 },
    { "#": "2 FISKE TER (071-35-37)", $: 63900 },
    { "#": "7 FISKE TER (071-34-00)", $: 2124900 },
    { "#": "181 FLORENCE ST (423-04-02)", $: 240200 },
    { "#": "1 FOREST ST (345-16-00)", $: 1032700 },
    { "#": "8 FOREST ST (341-11-00)", $: 1423e3 },
    { "#": "11 FOREST ST (345-17-00)", $: 886800 },
    { "#": "12 FOREST ST (341-09-10)", $: 905200 },
    { "#": "13 FOREST ST (345-18-00)", $: 48600 },
    { "#": "14 FOREST ST (341-08-00)", $: 563800 },
    { "#": "19 FOREST ST (345-19-00)", $: 2104600 },
    { "#": "21 FOREST ST (345-20-00)", $: 1057600 },
    { "#": "25 FOREST ST (345-21-00)", $: 1289900 },
    { "#": "26 FOREST ST (341-06-07)", $: 1169100 },
    { "#": "32 FOREST ST (341-04-00)", $: 1130200 },
    { "#": "33 FOREST ST (345-22-23)", $: 1148800 },
    { "#": "39 FOREST ST (345-24-25)", $: 970200 },
    { "#": "47 FOREST ST (345-26-00)", $: 941900 },
    { "#": "53 FOREST ST (345-27-28)", $: 881200 },
    { "#": "54 FOREST ST (346-06-00)", $: 915800 },
    { "#": "60 FOREST ST (346-04-05)", $: 1206500 },
    { "#": "63 FOREST ST (345-30-00)", $: 1513400 },
    { "#": "64 FOREST ST (346-02-03)", $: 1338e3 },
    { "#": "65 FOREST ST (345-30-01)", $: 1352100 },
    { "#": "66 FOREST ST (346-01-01)", $: 1260200 },
    { "#": "68 FOREST ST (346-01-00)", $: 1134600 },
    { "#": "2 FRANCIS ST (129-14-00)", $: 1232500 },
    { "#": "8 FRANCIS ST (129-13-00)", $: 1398700 },
    { "#": "9 FRANCIS ST (126-07-00)", $: 2845900 },
    { "#": "10 FRANCIS ST (129-12-00)", $: 1401300 },
    { "#": "15 FRANCIS ST (126-08-00.9)", $: 0 },
    { "#": "20 FRANCIS ST (129-11-00)", $: 3367200 },
    { "#": "24 FRANCIS ST (129-22-00)", $: 2199300 },
    { "#": "26 FRANCIS ST (129-23-00)", $: 2088600 },
    { "#": "27 FRANCIS ST (126-09-00)", $: 27938700 },
    { "#": "30 FRANCIS ST (129-09-00)", $: 2320200 },
    { "#": "34 FRANCIS ST (129-08-00.9)", $: 0 },
    { "#": "44 FRANCIS ST (130-14-00)", $: 1845900 },
    { "#": "48 FRANCIS ST (130-13-00)", $: 2294800 },
    { "#": "54 FRANCIS ST (130-12-00)", $: 2275400 },
    { "#": "57 FRANCIS ST (126-11-12)", $: 1203800 },
    { "#": "63 FRANCIS ST (126-13-00)", $: 2308100 },
    { "#": "67 FRANCIS ST (126-14-00)", $: 2099500 },
    { "#": "70 FRANCIS ST (131-16-00)", $: 1379500 },
    { "#": "71 FRANCIS ST (126-15-00)", $: 2288e3 },
    { "#": "72 FRANCIS ST (131-15-00)", $: 1534e3 },
    { "#": "75 FRANCIS ST (126-16-00.9)", $: 0 },
    { "#": "78 FRANCIS ST (131-14-00.9)", $: 0 },
    { "#": "81 FRANCIS ST (126-17-00.9)", $: 0 },
    { "#": "85 FRANCIS ST (126-18-00.9)", $: 0 },
    { "#": "91 FRANCIS ST (126-19-00)", $: 3029200 },
    { "#": "92 FRANCIS ST (132-26-00)", $: 1234600 },
    { "#": "94 FRANCIS ST (132-27-00)", $: 1221100 },
    { "#": "97 FRANCIS ST (126-20-00)", $: 3401300 },
    { "#": "100 FRANCIS ST (132-11-00)", $: 2313500 },
    { "#": "103 FRANCIS ST (126-21-00)", $: 2234700 },
    { "#": "106 FRANCIS ST (132-10-00)", $: 2054800 },
    { "#": "1 FRANKLIN CT (304-24-00)", $: 577900 },
    { "#": "2 FRANKLIN CT (304-23-00)", $: 908900 },
    { "#": "3 FRANKLIN CT (304-22-00)", $: 751100 },
    { "#": "4 FRANKLIN CT (304-21-00)", $: 897e3 },
    { "#": "5 FRANKLIN CT (304-20-00)", $: 791600 },
    { "#": "3 FRANKLIN ST (307-33-00)", $: 1615800 },
    { "#": "7 FRANKLIN ST (307-34-00.9)", $: 0 },
    { "#": "37 FRANKLIN ST (306-12-00)", $: 1241900 },
    { "#": "40 FRANKLIN ST (308-93-00)", $: 1043e3 },
    { "#": "41 FRANKLIN ST (306-13-00)", $: 1522500 },
    { "#": "44 FRANKLIN ST (308-94-00)", $: 1213600 },
    { "#": "50 FRANKLIN ST (308-95-00)", $: 1526700 },
    { "#": "51 FRANKLIN ST (305-13-00)", $: 1084700 },
    { "#": "54 FRANKLIN ST (308-95-01)", $: 1135400 },
    { "#": "55 FRANKLIN ST (305-15-00)", $: 2041400 },
    { "#": "60 FRANKLIN ST (308-95-02)", $: 1134400 },
    { "#": "61 FRANKLIN ST (304-15-00)", $: 1540300 },
    { "#": "63 FRANKLIN ST (304-16-00)", $: 1626500 },
    { "#": "64 FRANKLIN ST (308-95-03)", $: 1087700 },
    { "#": "65 FRANKLIN ST (304-17-00)", $: 757700 },
    { "#": "67 FRANKLIN ST (304-18-00)", $: 1092700 },
    { "#": "68 FRANKLIN ST (308-95-04)", $: 1171100 },
    { "#": "70 FRANKLIN ST (308-95-05)", $: 123e3 },
    { "#": "81 FRANKLIN ST (304-19-00)", $: 1116500 },
    { "#": "85 FRANKLIN ST (304-25-00)", $: 1431700 },
    { "#": "100 FRANKLIN ST (303-10-00)", $: 1412700 },
    { "#": "101 FRANKLIN ST (316-26-00.9)", $: 0 },
    { "#": "102 FRANKLIN ST (303-09-00)", $: 1411800 },
    { "#": "104 FRANKLIN ST (303-08-00)", $: 2073800 },
    { "#": "105 FRANKLIN ST (316-03-00.9)", $: 0 },
    { "#": "106 FRANKLIN ST (303-07-00.9)", $: 0 },
    { "#": "107 FRANKLIN ST (316-04-00)", $: 1264900 },
    { "#": "109 FRANKLIN ST (316-05-00.9)", $: 0 },
    { "#": "110 FRANKLIN ST (303-06-00.9)", $: 0 },
    { "#": "112 FRANKLIN ST (303-05-00.9)", $: 0 },
    { "#": "114 FRANKLIN ST (303-04-00)", $: 1444200 },
    { "#": "115 FRANKLIN ST (316-06-00)", $: 593e3 },
    { "#": "115 FRANKLIN ST (316-06-00.9)", $: 845500 },
    { "#": "117 FRANKLIN ST (316-06-01.9)", $: 0 },
    { "#": "118 FRANKLIN ST (303-03-00.9)", $: 0 },
    { "#": "120 FRANKLIN ST (303-02-00.9)", $: 0 },
    { "#": "95 FREEMAN ST (012-03-00)", $: 6382400 },
    { "#": "137 FREEMAN ST (026-01-00.9)", $: 0 },
    { "#": "143 FREEMAN ST (026-08-09)", $: 4668700 },
    { "#": "175 FREEMAN ST (024-01-00)", $: 223480200 },
    { "#": "200 FREEMAN ST (036-02-00.9)", $: 0 },
    { "#": "201 FREEMAN ST (027-01-00.9)", $: 0 },
    { "#": "202 FREEMAN ST (036-01-02)", $: 1660500 },
    { "#": "206 FREEMAN ST (036-01-01)", $: 1838100 },
    { "#": "208 FREEMAN ST (036-01-00)", $: 1666200 },
    { "#": "214 FREEMAN ST (035-15-00)", $: 2378600 },
    { "#": "217 FREEMAN ST (027-04-00)", $: 2457700 },
    { "#": "218 FREEMAN ST (035-14-00.9)", $: 0 },
    { "#": "219 FREEMAN ST (027-05-00)", $: 2289200 },
    { "#": "221 FREEMAN ST (027-06-00.9)", $: 0 },
    { "#": "222 FREEMAN ST (035-13-00)", $: 3087200 },
    { "#": "229 FREEMAN ST (027-09-12.9)", $: 0 },
    { "#": "237 FREEMAN ST (027-15-16)", $: 5361100 },
    { "#": "3 FULLER ST (079-14-00.9)", $: 0 },
    { "#": "4 FULLER ST (077-23-00)", $: 3344500 },
    { "#": "5 FULLER ST (079-15-00.9)", $: 0 },
    { "#": "6 FULLER ST (077-22-00)", $: 1453800 },
    { "#": "6 FULLER ST (077-22-00.9)", $: 0 },
    { "#": "10 FULLER ST (077-21-00)", $: 2538900 },
    { "#": "10 FULLER ST (077-21-00.9)", $: 2661400 },
    { "#": "12 FULLER ST (077-20-00)", $: 3111e3 },
    { "#": "16 FULLER ST (077-19-00)", $: 2918100 },
    { "#": "18 FULLER ST (077-18-00)", $: 3170200 },
    { "#": "20 FULLER ST (077-17-00)", $: 3905100 },
    { "#": "20 FULLER ST (077-17-00.9)", $: 6228700 },
    { "#": "30 FULLER ST (077-15-16)", $: 8433200 },
    { "#": "38 FULLER ST (077-14-00)", $: 2553700 },
    { "#": "39 FULLER ST (078-20-00)", $: 1188800 },
    { "#": "39 FULLER ST (078-20-00.9)", $: 1626300 },
    { "#": "44 FULLER ST (077-13-00)", $: 2143600 },
    { "#": "45 FULLER ST (078-21-00)", $: 2622100 },
    { "#": "62 FULLER ST (066-09-00)", $: 2107700 },
    { "#": "67 FULLER ST (064-12-00)", $: 2023700 },
    { "#": "68 FULLER ST (066-08-00)", $: 2610400 },
    { "#": "73 FULLER ST (064-13-00.9)", $: 0 },
    { "#": "74 FULLER ST (066-07-00)", $: 2353600 },
    { "#": "77 FULLER ST (064-14-00)", $: 2334400 },
    { "#": "78 FULLER ST (066-06-00)", $: 1787100 },
    { "#": "82 FULLER ST (066-05-00.9)", $: 0 },
    { "#": "83 FULLER ST (064-15-00.9)", $: 0 },
    { "#": "84 FULLER ST (066-04-00)", $: 2891e3 },
    { "#": "87 FULLER ST (064-16-00)", $: 2279200 },
    { "#": "88 FULLER ST (066-03-00)", $: 2898200 },
    { "#": "90 FULLER ST (066-01-01)", $: 3344500 },
    { "#": "91 FULLER ST (064-17-00)", $: 2426400 },
    { "#": "93 FULLER ST (064-18-00)", $: 2443e3 },
    { "#": "95 FULLER ST (064-19-00)", $: 2439600 },
    { "#": "97 FULLER ST (064-20-00)", $: 1206300 },
    { "#": "97 FULLER ST (064-20-00.9)", $: 0 },
    { "#": "98 FULLER ST (066-01-00)", $: 2395300 },
    { "#": "102 FULLER ST (065-22-00)", $: 2163100 },
    { "#": "102 FULLER ST (065-22-00.9)", $: 3651e3 },
    { "#": "103 FULLER ST (063-15-00)", $: 2234e3 },
    { "#": "107 FULLER ST (063-16-00)", $: 1751500 },
    { "#": "108 FULLER ST (065-21-00)", $: 2061500 },
    { "#": "111 FULLER ST (063-17-00)", $: 2311800 },
    { "#": "112 FULLER ST (065-20-00.9)", $: 0 },
    { "#": "115 FULLER ST (063-18-00)", $: 2318e3 },
    { "#": "116 FULLER ST (065-19-00)", $: 2210300 },
    { "#": "119 FULLER ST (063-19-00.9)", $: 0 },
    { "#": "120 FULLER ST (065-18-00)", $: 2142800 },
    { "#": "123 FULLER ST (063-20-00)", $: 1643300 },
    { "#": "127 FULLER ST (063-21-00.9)", $: 0 },
    { "#": "128 FULLER ST (065-17-00)", $: 2792900 },
    { "#": "130 FULLER ST (065-16-00.9)", $: 0 },
    { "#": "131 FULLER ST (063-22-00)", $: 2680400 },
    { "#": "134 FULLER ST (065-15-00.9)", $: 0 },
    { "#": "135 FULLER ST (063-23-00)", $: 2743400 },
    { "#": "137 FULLER ST (063-24-00)", $: 2421700 },
    { "#": "138 FULLER ST (065-14-00.9)", $: 0 },
    { "#": "140 FULLER ST (065-13-00.9)", $: 0 },
    { "#": "141 FULLER ST (063-25-00)", $: 2387500 },
    { "#": "142 FULLER ST (065-12-00)", $: 1231200 },
    { "#": "142 FULLER ST (065-12-00.9)", $: 0 },
    { "#": "143 FULLER ST (063-26-00)", $: 2361300 },
    { "#": "147 FULLER ST (063-27-00.9)", $: 0 },
    { "#": "148 FULLER ST (065-11-00)", $: 974900 },
    { "#": "148 FULLER ST (065-11-00.9)", $: 2384400 },
    { "#": "149 FULLER ST (063-28-00.9)", $: 0 },
    { "#": "153 FULLER ST (063-29-00.9)", $: 0 },
    { "#": "162 FULLER ST (061-08-00.9)", $: 0 },
    { "#": "165 FULLER ST (062-06-00)", $: 2250200 },
    { "#": "166 FULLER ST (061-09-00.9)", $: 0 },
    { "#": "169 FULLER ST (062-07-00)", $: 2086400 },
    { "#": "172 FULLER ST (061-10-00)", $: 1879500 },
    { "#": "175 FULLER ST (062-08-00)", $: 2836200 },
    { "#": "176 FULLER ST (061-02-00.9)", $: 0 },
    { "#": "183 FULLER ST (062-09-00.9)", $: 0 },
    { "#": "192 FULLER ST (059-01-00.9)", $: 0 },
    { "#": "197 FULLER ST (057-15-00)", $: 2637300 },
    { "#": "202 FULLER ST (059-06-00.9)", $: 0 },
    { "#": "203 FULLER ST (057-16-00)", $: 2004500 },
    { "#": "207 FULLER ST (057-17-00)", $: 837e3 },
    { "#": "207 FULLER ST (057-17-00.9)", $: 837e3 },
    { "#": "211 FULLER ST (057-18-00)", $: 1675e3 },
    { "#": "217 FULLER ST (057-19-00)", $: 1824e3 },
    { "#": "221 FULLER ST (057-20-00)", $: 1905e3 },
    { "#": "224 FULLER ST (058-04-00)", $: 972600 },
    { "#": "225 FULLER ST (057-21-00.9)", $: 0 },
    { "#": "2 GARDNER RD (208-32-00.9)", $: 0 },
    { "#": "11 GARDNER RD (210-17-01.9)", $: 0 },
    { "#": "16 GARDNER RD (208-31-01)", $: 2351900 },
    { "#": "17 GARDNER RD (210-17-00)", $: 2258100 },
    { "#": "25 GARDNER RD (210-16-00)", $: 4068e3 },
    { "#": "30 GARDNER RD (208-30-33)", $: 20062400 },
    { "#": "35 GARDNER RD (210-15-00)", $: 4240100 },
    { "#": "40 GARDNER RD (208-29-00)", $: 2582800 },
    { "#": "43 GARDNER RD (210-14-03.9)", $: 0 },
    { "#": "46 GARDNER RD (208-28-00.9)", $: 0 },
    { "#": "49 GARDNER RD (210-14-02)", $: 2128500 },
    { "#": "53 GARDNER RD (210-14-00.9)", $: 0 },
    { "#": "54 GARDNER RD (208-27-00)", $: 2885e3 },
    { "#": "60 GARDNER RD (208-26-02)", $: 1400600 },
    { "#": "60 GARDNER RD (208-26-02.9)", $: 2026e3 },
    { "#": "61 GARDNER RD (210-13-01.9)", $: 0 },
    { "#": "64 GARDNER RD (208-26-01)", $: 2725e3 },
    { "#": "70 GARDNER RD (208-26-00)", $: 2584200 },
    { "#": "73 GARDNER RD (210-11-05.9)", $: 0 },
    { "#": "80 GARDNER RD (205A-16-00)", $: 3096400 },
    { "#": "87 GARDNER RD (209-01-00)", $: 1726100 },
    { "#": "92 GARDNER RD (205A-15-01)", $: 1804800 },
    { "#": "96 GARDNER RD (205A-15-00)", $: 2469800 },
    { "#": "99 GARDNER RD (209-02-00)", $: 1698400 },
    { "#": "104 GARDNER RD (205A-14-00)", $: 2632300 },
    { "#": "105 GARDNER RD (209-02-01)", $: 2297600 },
    { "#": "112 GARDNER RD (205A-13-00)", $: 2167100 },
    { "#": "117 GARDNER RD (209A-05-00)", $: 2225400 },
    { "#": "118 GARDNER RD (205A-12-00)", $: 1805800 },
    { "#": "123 GARDNER RD (209A-06-00)", $: 3355100 },
    { "#": "128 GARDNER RD (205A-11-00)", $: 1409300 },
    { "#": "130 GARDNER RD (205A-10-00)", $: 1254300 },
    { "#": "131 GARDNER RD (209A-07-00.9)", $: 0 },
    { "#": "137 GARDNER RD (209A-08-00)", $: 3279e3 },
    { "#": "143 GARDNER RD (222-14-03)", $: 2145800 },
    { "#": "150 GARDNER RD (204-12-00)", $: 4190900 },
    { "#": "151 GARDNER RD (222-14-04)", $: 2063800 },
    { "#": "155 GARDNER RD (222-14-05)", $: 2215900 },
    { "#": "161 GARDNER RD (222-15-00)", $: 3566600 },
    { "#": "164 GARDNER RD (204-11-00)", $: 3300700 },
    { "#": "168 GARDNER RD (204-10-01)", $: 2270800 },
    { "#": "171 GARDNER RD (222-15-01)", $: 2261700 },
    { "#": "174 GARDNER RD (204-10-00)", $: 2844900 },
    { "#": "177 GARDNER RD (222-15-02)", $: 2572100 },
    { "#": "180 GARDNER RD (204-09-01)", $: 2258400 },
    { "#": "183 GARDNER RD (222-16-00)", $: 1930700 },
    { "#": "186 GARDNER RD (204-09-00)", $: 1753e3 },
    { "#": "187 GARDNER RD (222-16-01)", $: 1815800 },
    { "#": "193 GARDNER RD (222-17-00)", $: 2411500 },
    { "#": "194 GARDNER RD (204-08-00)", $: 2321300 },
    { "#": "197 GARDNER RD (222-17-01)", $: 2671600 },
    { "#": "200 GARDNER RD (204-07-01)", $: 282e4 },
    { "#": "205 GARDNER RD (222-18-00)", $: 1868e3 },
    { "#": "208 GARDNER RD (204-07-00)", $: 2202500 },
    { "#": "213 GARDNER RD (222-19-00)", $: 2894500 },
    { "#": "216 GARDNER RD (204-06-00)", $: 2741400 },
    { "#": "219 GARDNER RD (222-20-01)", $: 3992300 },
    { "#": "221 GARDNER RD (222-20-05)", $: 1886200 },
    { "#": "225 GARDNER RD (222-20-04)", $: 1956300 },
    { "#": "0 GARRISON RD (224-22-00)", $: 19e3 },
    { "#": "0 GARRISON RD (224-22-01)", $: 16800 },
    { "#": "0 GARRISON RD (224-22-04)", $: 56400 },
    { "#": "0 GARRISON RD (224-22-05)", $: 113800 },
    { "#": "0 GARRISON RD (224-22-06)", $: 37200 },
    { "#": "0 GARRISON RD (224-22-07)", $: 74500 },
    { "#": "11 GARRISON RD (224-01-00.9)", $: 0 },
    { "#": "13 GARRISON RD (224-02-00.9)", $: 0 },
    { "#": "15 GARRISON RD (224-03-00)", $: 2553800 },
    { "#": "16 GARRISON RD (221-15-00.9)", $: 0 },
    { "#": "17 GARRISON RD (224-04-00.9)", $: 0 },
    { "#": "19 GARRISON RD (224-05-00.9)", $: 0 },
    { "#": "21 GARRISON RD (224-06-00)", $: 2306800 },
    { "#": "22 GARRISON RD (221-14-00.9)", $: 0 },
    { "#": "23 GARRISON RD (224-07-00)", $: 2538100 },
    { "#": "25 GARRISON RD (224-08-00)", $: 3220800 },
    { "#": "33 GARRISON RD (224-09-00)", $: 2177100 },
    { "#": "34 GARRISON RD (223-17-00.9)", $: 0 },
    { "#": "35 GARRISON RD (224-10-00)", $: 3495400 },
    { "#": "37 GARRISON RD (224-11-00)", $: 2482700 },
    { "#": "38 GARRISON RD (223-16-00.9)", $: 0 },
    { "#": "39 GARRISON RD (224-12-00)", $: 2727e3 },
    { "#": "42 GARRISON RD (223-15-00.9)", $: 0 },
    { "#": "45 GARRISON RD (224-15-00)", $: 3112100 },
    { "#": "46 GARRISON RD (223-14-00.9)", $: 0 },
    { "#": "47 GARRISON RD (224-16-00)", $: 2663200 },
    { "#": "49 GARRISON RD (224-17-00)", $: 2733600 },
    { "#": "50 GARRISON RD (223-13-00.9)", $: 0 },
    { "#": "51 GARRISON RD (224-18-00)", $: 2521400 },
    { "#": "53 GARRISON RD (224-19-00)", $: 2225200 },
    { "#": "55 GARRISON RD (224-20-00.9)", $: 0 },
    { "#": "11 GEORGE LN (352-06-00)", $: 3306e3 },
    { "#": "29 GEORGE LN (352-07-00)", $: 3468100 },
    { "#": "30 GEORGE LN (352-10-00)", $: 5071600 },
    { "#": "35 GEORGE LN (352-07-01)", $: 4230800 },
    { "#": "6 GIBBS ST (051-27-00.9)", $: 0 },
    { "#": "9 GIBBS ST (052-10-01.9)", $: 0 },
    { "#": "11 GIBBS ST (052-12-00)", $: 2845800 },
    { "#": "12 GIBBS ST (051-22-00.9)", $: 0 },
    { "#": "15 GIBBS ST (052-13-00.9)", $: 0 },
    { "#": "17 GIBBS ST (052-14-00.9)", $: 0 },
    { "#": "21 GIBBS ST (052-15-00)", $: 3169400 },
    { "#": "25 GIBBS ST (052-16-00)", $: 3578600 },
    { "#": "31 GIBBS ST (052-17-00)", $: 2301400 },
    { "#": "47 GIBBS ST (062-04-00.9)", $: 0 },
    { "#": "60 GIBBS ST (065-10-00)", $: 1847e3 },
    { "#": "63 GIBBS ST (061-07-00.9)", $: 0 },
    { "#": "77 GIBBS ST (060-07-00.9)", $: 0 },
    { "#": "78 GIBBS ST (068-24-00)", $: 2445400 },
    { "#": "81 GIBBS ST (060-06-00)", $: 3254300 },
    { "#": "14 GLEN RD (297-01-03)", $: 1947300 },
    { "#": "25 GLEN RD (296-04-00)", $: 1658500 },
    { "#": "26 GLEN RD (297-14-00)", $: 1582900 },
    { "#": "30 GLEN RD (297-13-00)", $: 2162500 },
    { "#": "31 GLEN RD (296-05-00)", $: 1791600 },
    { "#": "36 GLEN RD (297-12-00)", $: 2037700 },
    { "#": "37 GLEN RD (296-06-00)", $: 1605200 },
    { "#": "43 GLEN RD (296-07-00)", $: 1619500 },
    { "#": "46 GLEN RD (297-10-11)", $: 1614200 },
    { "#": "60 GLEN RD (299-01-00.9)", $: 0 },
    { "#": "85 GLEN RD (299-04-00.9)", $: 0 },
    { "#": "11 GLENLAND RD (425-02-00)", $: 1301600 },
    { "#": "12 GLENLAND RD (424-23-00)", $: 1449700 },
    { "#": "15 GLENLAND RD (425-01-00)", $: 884400 },
    { "#": "17 GLENLAND RD (425-01-01)", $: 2700 },
    { "#": "18 GLENLAND RD (424-25-00.9)", $: 0 },
    { "#": "32 GLENLAND RD (424-26-00)", $: 48300 },
    { "#": "33 GLENLAND RD (424-28-00)", $: 2270600 },
    { "#": "33 GLENLAND RD (424-28-00.9)", $: 2270600 },
    { "#": "36 GLENLAND RD (424-29-00)", $: 1296300 },
    { "#": "39 GLENLAND RD (424-17-02)", $: 1192100 },
    { "#": "3 GLENOE RD (430-05-00)", $: 2488500 },
    { "#": "12 GLENOE RD (431-06-00)", $: 2605200 },
    { "#": "17 GLENOE RD (430-06-00)", $: 3193300 },
    { "#": "20 GLENOE RD (431-05-00)", $: 3892900 },
    { "#": "25 GLENOE RD (430-07-00)", $: 3043600 },
    { "#": "28 GLENOE RD (431-04-00)", $: 4557400 },
    { "#": "39 GLENOE RD (430-08-00)", $: 3111e3 },
    { "#": "40 GLENOE RD (431-03-00)", $: 4130400 },
    { "#": "50 GLENOE RD (431-02-00)", $: 2993400 },
    { "#": "15 GODDARD AVE (352-05-00)", $: 2514300 },
    { "#": "50 GODDARD AVE (353-01-08)", $: 44781200 },
    { "#": "63 GODDARD AVE (352-11-12)", $: 12091700 },
    { "#": "65 GODDARD AVE (352-13-00)", $: 7699200 },
    { "#": "75 GODDARD AVE (352-14-00)", $: 6228900 },
    { "#": "79 GODDARD AVE (352-15-00)", $: 2381700 },
    { "#": "99 GODDARD AVE (352-14-01)", $: 3429500 },
    { "#": "100 GODDARD AVE (353-09-10)", $: 9899300 },
    { "#": "130 GODDARD AVE (354-01-02)", $: 5054e3 },
    { "#": "133 GODDARD AVE (355-11-00)", $: 7524100 },
    { "#": "143 GODDARD AVE (355-12-00)", $: 3583100 },
    { "#": "162 GODDARD AVE (354-01-00)", $: 21410100 },
    { "#": "171 GODDARD AVE (355-10-00)", $: 78481700 },
    { "#": "235 GODDARD AVE (355-09-00)", $: 4985e3 },
    { "#": "255 GODDARD AVE (355-08-00)", $: 26614400 },
    { "#": "265 GODDARD AVE (355-07-00)", $: 5758500 },
    { "#": "271 GODDARD AVE (355-06-00)", $: 4540900 },
    { "#": "275 GODDARD AVE (355-05-00)", $: 3404900 },
    { "#": "285 GODDARD AVE (355-04-00)", $: 2697400 },
    { "#": "287 GODDARD AVE (355-01-00.9)", $: 0 },
    { "#": "325 GODDARD AVE (355-02-00)", $: 3288300 },
    { "#": "399 GODDARD AVE (344-07-00)", $: 1045600 },
    { "#": "9 GODDARD CIR (357-23-00)", $: 1969300 },
    { "#": "10 GODDARD CIR (357-28-00)", $: 2206200 },
    { "#": "22 GODDARD CIR (357-27-00)", $: 2513200 },
    { "#": "25 GODDARD CIR (357-24-00)", $: 2017600 },
    { "#": "29 GODDARD CIR (357-25-00)", $: 2173200 },
    { "#": "30 GODDARD CIR (357-26-00)", $: 3136700 },
    { "#": "3 GOODNOUGH RD (374-04-00)", $: 1294100 },
    { "#": "8 GOODNOUGH RD (395-40-00)", $: 1136300 },
    { "#": "9 GOODNOUGH RD (374-05-00)", $: 205e4 },
    { "#": "15 GOODNOUGH RD (374-06-00)", $: 1529300 },
    { "#": "16 GOODNOUGH RD (395-39-00)", $: 1526300 },
    { "#": "19 GOODNOUGH RD (374-07-00)", $: 1289100 },
    { "#": "22 GOODNOUGH RD (395-38-00)", $: 1225e3 },
    { "#": "25 GOODNOUGH RD (374-08-00)", $: 1182400 },
    { "#": "28 GOODNOUGH RD (395-37-00)", $: 1278700 },
    { "#": "29 GOODNOUGH RD (374-09-00)", $: 774500 },
    { "#": "35 GOODNOUGH RD (374-10-00)", $: 1493900 },
    { "#": "36 GOODNOUGH RD (395-36-00)", $: 2098800 },
    { "#": "41 GOODNOUGH RD (374-11-00)", $: 1221900 },
    { "#": "42 GOODNOUGH RD (395-35-00)", $: 1279400 },
    { "#": "49 GOODNOUGH RD (374-12-00)", $: 1306e3 },
    { "#": "50 GOODNOUGH RD (395-34-00)", $: 1976900 },
    { "#": "54 GOODNOUGH RD (395-44-00)", $: 547700 },
    { "#": "55 GOODNOUGH RD (374-13-00)", $: 1323700 },
    { "#": "59 GOODNOUGH RD (374-14-00)", $: 1146e3 },
    { "#": "64 GOODNOUGH RD (395-43-00)", $: 1388e3 },
    { "#": "65 GOODNOUGH RD (374-15-16)", $: 1232500 },
    { "#": "72 GOODNOUGH RD (395-31-00)", $: 1190500 },
    { "#": "76 GOODNOUGH RD (395-30-00)", $: 1371e3 },
    { "#": "79 GOODNOUGH RD (374-17-00)", $: 1195200 },
    { "#": "11 GOODWIN PL (177-43-00)", $: 1715100 },
    { "#": "12 GOODWIN PL (177-44-00)", $: 1775900 },
    { "#": "3 GORHAM AVE (198-08-00.9)", $: 0 },
    { "#": "11 GORHAM AVE (198-10-00)", $: 2204100 },
    { "#": "12 GORHAM AVE (197-10-00)", $: 2152e3 },
    { "#": "15 GORHAM AVE (198-01-00)", $: 1961100 },
    { "#": "16 GORHAM AVE (197-09-00)", $: 1663900 },
    { "#": "21 GORHAM AVE (199-01-00)", $: 2126100 },
    { "#": "26 GORHAM AVE (196-20-00)", $: 2470100 },
    { "#": "29 GORHAM AVE (199-02-00)", $: 1074e3 },
    { "#": "29 GORHAM AVE (199-02-00.9)", $: 3701400 },
    { "#": "34 GORHAM AVE (196-19-00)", $: 2642e3 },
    { "#": "35 GORHAM AVE (199-03-00)", $: 1174600 },
    { "#": "35 GORHAM AVE (199-03-00.9)", $: 1484100 },
    { "#": "36 GORHAM AVE (196-18-00)", $: 1325500 },
    { "#": "36 GORHAM AVE (196-18-00.9)", $: 1966200 },
    { "#": "37 GORHAM AVE (199-04-00.9)", $: 0 },
    { "#": "38 GORHAM AVE (196-17-00)", $: 4772900 },
    { "#": "38 GORHAM AVE (196-17-00.9)", $: 4772900 },
    { "#": "41 GORHAM AVE (199-05-00)", $: 1334600 },
    { "#": "41 GORHAM AVE (199-05-00.9)", $: 1334600 },
    { "#": "48 GORHAM AVE (196-16-01)", $: 1431400 },
    { "#": "49 GORHAM AVE (199-06-00)", $: 2252400 },
    { "#": "50 GORHAM AVE (196-16-00)", $: 2035600 },
    { "#": "51 GORHAM AVE (199-07-00.9)", $: 0 },
    { "#": "60 GORHAM AVE (196-15-00)", $: 5715100 },
    { "#": "5 GRASSMERE RD (391-13-14)", $: 1286200 },
    { "#": "24 GRASSMERE RD (386-11-00)", $: 1019100 },
    { "#": "25 GRASSMERE RD (390-13-00)", $: 1124400 },
    { "#": "31 GRASSMERE RD (390-14-00)", $: 958100 },
    { "#": "32 GRASSMERE RD (386-10-00)", $: 980300 },
    { "#": "13 GREEN HILL RD (334-31-01)", $: 1217700 },
    { "#": "24 GREEN HILL RD (334-16-03)", $: 5179e3 },
    { "#": "33 GREEN HILL RD (334-20-00)", $: 5077100 },
    { "#": "36 GREEN HILL RD (334-16-02)", $: 9803e3 },
    { "#": "43 GREEN HILL RD (334-23-01)", $: 1717600 },
    { "#": "44 GREEN HILL RD (334-17-00)", $: 10609500 },
    { "#": "48 GREEN HILL RD (334-16-00)", $: 4821100 },
    { "#": "14 GREEN ST (047A-15-01)", $: 3936900 },
    { "#": "15 GREEN ST (045-06-00.9)", $: 0 },
    { "#": "45 GREEN ST (046-05-00)", $: 7025500 },
    { "#": "50 GREEN ST (047-16-00.9)", $: 0 },
    { "#": "55 GREEN ST (046-06-00)", $: 2668800 },
    { "#": "59 GREEN ST (046-07-00)", $: 1556500 },
    { "#": "59 GREEN ST (046-07-00.9)", $: 1556500 },
    { "#": "62 GREEN ST (047-15-00)", $: 15279300 },
    { "#": "63 GREEN ST (046-08-00)", $: 2813200 },
    { "#": "67 GREEN ST (046-09-00.9)", $: 0 },
    { "#": "71 GREEN ST (046-10-00)", $: 3114900 },
    { "#": "74 GREEN ST (047-14-03.9)", $: 0 },
    { "#": "81 GREEN ST (046-11-00)", $: 8241500 },
    { "#": "82 GREEN ST (047-13-00)", $: 1340800 },
    { "#": "82 GREEN ST (047-13-00.9)", $: 0 },
    { "#": "3 GREENOUGH CIR (200-13-00)", $: 1297500 },
    { "#": "4 GREENOUGH CIR (200-13-07)", $: 1413100 },
    { "#": "9 GREENOUGH CIR (200-13-01)", $: 1673900 },
    { "#": "10 GREENOUGH CIR (200-13-06)", $: 1569500 },
    { "#": "15 GREENOUGH CIR (200-13-02)", $: 1613200 },
    { "#": "16 GREENOUGH CIR (200-13-05)", $: 1906500 },
    { "#": "17 GREENOUGH CIR (200-13-03)", $: 1814800 },
    { "#": "18 GREENOUGH CIR (200-13-04)", $: 1521200 },
    { "#": "0 GREENOUGH ST (201-07-01)", $: 75300 },
    { "#": "3 GREENOUGH ST (207-07-00)", $: 1295400 },
    { "#": "9 GREENOUGH ST (207-08-00)", $: 1654300 },
    { "#": "12 GREENOUGH ST (200-12-00.9)", $: 0 },
    { "#": "15 GREENOUGH ST (207-09-00)", $: 1502400 },
    { "#": "16 GREENOUGH ST (200-11-00.9)", $: 0 },
    { "#": "22 GREENOUGH ST (200-10-00)", $: 2210600 },
    { "#": "26 GREENOUGH ST (200-09-00)", $: 2211500 },
    { "#": "29 GREENOUGH ST (206-16-00)", $: 2094e3 },
    { "#": "34 GREENOUGH ST (200-08-00)", $: 2257e3 },
    { "#": "39 GREENOUGH ST (206-01-00)", $: 1600800 },
    { "#": "47 GREENOUGH ST (201-01-00)", $: 2009300 },
    { "#": "50 GREENOUGH ST (199-10-00)", $: 1876500 },
    { "#": "53 GREENOUGH ST (201-02-00)", $: 1372700 },
    { "#": "55 GREENOUGH ST (201-03-00)", $: 1057700 },
    { "#": "56 GREENOUGH ST (199-09-00.9)", $: 0 },
    { "#": "60 GREENOUGH ST (199-08-00)", $: 4426200 },
    { "#": "61 GREENOUGH ST (201-04-00.9)", $: 0 },
    { "#": "65 GREENOUGH ST (201-05-00.9)", $: 0 },
    { "#": "71 GREENOUGH ST (201-06-00)", $: 2099400 },
    { "#": "75 GREENOUGH ST (201-07-00)", $: 866e3 },
    { "#": "75 GREENOUGH ST (201-07-02)", $: 4943200 },
    { "#": "75 GREENOUGH ST (201-07-02.9)", $: 4943200 },
    { "#": "79 GREENOUGH ST (201-08-00)", $: 1687e3 },
    { "#": "80 GREENOUGH ST (196-14-00)", $: 1856800 },
    { "#": "81 GREENOUGH ST (201-09-00)", $: 1852500 },
    { "#": "86 GREENOUGH ST (196-13-00.9)", $: 0 },
    { "#": "87 GREENOUGH ST (201-10-00)", $: 3126e3 },
    { "#": "115 GREENOUGH ST (202-09-00)", $: 130517800 },
    { "#": "3 GREENWAY CT (047A-11-00)", $: 3854e3 },
    { "#": "3 GREENWAY CT (047A-11-00.9)", $: 0 },
    { "#": "4 GREENWAY CT (047A-15-00)", $: 4205100 },
    { "#": "9 GREENWAY CT (047A-12-00)", $: 4568300 },
    { "#": "10 GREENWAY CT (047A-13-14)", $: 7446200 },
    { "#": "0 GRIGGS RD (214-71-02)", $: 106600 },
    { "#": "0 GRIGGS RD (214-71-03)", $: 103100 },
    { "#": "0 GRIGGS RD (214-71-04)", $: 104700 },
    { "#": "0 GRIGGS RD (214-71-05)", $: 113200 },
    { "#": "0 GRIGGS RD (214-71-06)", $: 112700 },
    { "#": "4 GRIGGS RD (212-16-04)", $: 1586700 },
    { "#": "5 GRIGGS RD (214-56-00)", $: 2791600 },
    { "#": "8 GRIGGS RD (212-16-01)", $: 1455300 },
    { "#": "15 GRIGGS RD (214-57-00)", $: 3133400 },
    { "#": "24 GRIGGS RD (212-17-00)", $: 2098400 },
    { "#": "30 GRIGGS RD (212-18-00)", $: 2764500 },
    { "#": "33 GRIGGS RD (213-01-00)", $: 19662100 },
    { "#": "34 GRIGGS RD (212-19-00)", $: 2224100 },
    { "#": "40 GRIGGS RD (212-20-00)", $: 2124700 },
    { "#": "46 GRIGGS RD (212-21-00)", $: 2485200 },
    { "#": "50 GRIGGS RD (212-22-00)", $: 2594e3 },
    { "#": "56 GRIGGS RD (212-23-00)", $: 1630400 },
    { "#": "59 GRIGGS RD (214-71-01)", $: 2389300 },
    { "#": "61 GRIGGS RD (214-72-00)", $: 2094400 },
    { "#": "63 GRIGGS RD (214-72-01)", $: 1823e3 },
    { "#": "64 GRIGGS RD (212-31-00)", $: 1305600 },
    { "#": "65 GRIGGS RD (214-73-00)", $: 2534700 },
    { "#": "66 GRIGGS RD (212-32-00)", $: 1513800 },
    { "#": "67 GRIGGS RD (214-73-01)", $: 2196900 },
    { "#": "69 GRIGGS RD (214-74-00)", $: 2274700 },
    { "#": "71 GRIGGS RD (214-74-01)", $: 2279700 },
    { "#": "75 GRIGGS RD (214-75-00)", $: 1028200 },
    { "#": "75 GRIGGS RD (214-75-00.9)", $: 4101600 },
    { "#": "81 GRIGGS RD (214-76-00)", $: 2388600 },
    { "#": "85 GRIGGS RD (214-77-00)", $: 2678300 },
    { "#": "103 GRIGGS RD (214-79-00)", $: 1801e3 },
    { "#": "107 GRIGGS RD (214-79-01.9)", $: 0 },
    { "#": "108 GRIGGS RD (212-29-00)", $: 3050200 },
    { "#": "108 GRIGGS RD (212-29-00.9)", $: 3050200 },
    { "#": "113 GRIGGS RD (214-80-00)", $: 2402900 },
    { "#": "117 GRIGGS RD (214-81-04)", $: 1978200 },
    { "#": "118 GRIGGS RD (212-30-00.9)", $: 0 },
    { "#": "121 GRIGGS RD (214-82-00)", $: 2548900 },
    { "#": "0 GRIGGS TER (214-71-07)", $: 103900 },
    { "#": "6 GRIGGS TER (214-71-00)", $: 2029100 },
    { "#": "7 GRIGGS TER (214-70-01)", $: 1641700 },
    { "#": "8 GRIGGS TER (214-70-00)", $: 2552400 },
    { "#": "9 GRIGGS TER (214-69-02)", $: 1892100 },
    { "#": "10 GRIGGS TER (214-69-01)", $: 2128900 },
    { "#": "11 GRIGGS TER (214-69-00)", $: 2335400 },
    { "#": "12 GRIGGS TER (214-68-00)", $: 2330300 },
    { "#": "14 GRIGGS TER (214-67-00)", $: 1993300 },
    { "#": "18 GRIGGS TER (214-66-33)", $: 3133100 },
    { "#": "20 GRIGGS TER (214-35-02)", $: 1600 },
    { "#": "21 GRIGGS TER (214-65-00)", $: 2630600 },
    { "#": "23 GRIGGS TER (214-64-00)", $: 2369100 },
    { "#": "40 GRIGGS TER (214-59-00)", $: 2068100 },
    { "#": "42 GRIGGS TER (214-58-00.9)", $: 0 },
    { "#": "47 GRIGGS TER (214-57-02)", $: 22900 },
    { "#": "31 GROVE ST (370-15-16)", $: 15214600 },
    { "#": "61 GROVE ST (370-20-00)", $: 1301500 },
    { "#": "71 GROVE ST (370-21-00)", $: 1317500 },
    { "#": "85 GROVE ST (370-22-23)", $: 1246100 },
    { "#": "91 GROVE ST (370-24-00)", $: 693900 },
    { "#": "95 GROVE ST (370-25-00)", $: 1225500 },
    { "#": "96 GROVE ST (364-01-00)", $: 23029500 },
    { "#": "101 GROVE ST (370-26-27)", $: 1604500 },
    { "#": "107 GROVE ST (370-28-00)", $: 764500 },
    { "#": "115 GROVE ST (370-29-00)", $: 1003100 },
    { "#": "121 GROVE ST (368-01-00)", $: 894900 },
    { "#": "122 GROVE ST (364-02-00)", $: 1006500 },
    { "#": "144 GROVE ST (364A-05-00)", $: 1213100 },
    { "#": "145 GROVE ST (371-02-00)", $: 995e3 },
    { "#": "150 GROVE ST (364A-04-00)", $: 1158500 },
    { "#": "151 GROVE ST (371-03-00)", $: 874100 },
    { "#": "156 GROVE ST (364A-03-00)", $: 1250900 },
    { "#": "157 GROVE ST (371-04-06)", $: 391e4 },
    { "#": "162 GROVE ST (364A-02-00)", $: 1054500 },
    { "#": "183 GROVE ST (373-07-09)", $: 9653e3 },
    { "#": "194 GROVE ST (375-01-00)", $: 9092500 },
    { "#": "219 GROVE ST (394-14-00)", $: 998300 },
    { "#": "226 GROVE ST (391-28-00)", $: 947500 },
    { "#": "229 GROVE ST (394-13-00)", $: 934700 },
    { "#": "241 GROVE ST (393-15-00)", $: 1506500 },
    { "#": "242 GROVE ST (390-01-00)", $: 1161e3 },
    { "#": "254 GROVE ST (390-25-00)", $: 959800 },
    { "#": "5 HACKENSACK RD (361-05-00)", $: 12500 },
    { "#": "7 HACKENSACK RD (361-04-01)", $: 11400 },
    { "#": "8 HACKENSACK RD (358-02-00)", $: 885700 },
    { "#": "16 HACKENSACK RD (358-03-04)", $: 1113100 },
    { "#": "22 HACKENSACK RD (358-05-00)", $: 675700 },
    { "#": "26 HACKENSACK RD (358-06-00)", $: 847400 },
    { "#": "30 HACKENSACK RD (358-07-00)", $: 737100 },
    { "#": "31 HACKENSACK RD (360-02-00)", $: 1331e3 },
    { "#": "34 HACKENSACK RD (358-08-00)", $: 12100 },
    { "#": "36 HACKENSACK RD (358-09-00)", $: 1800 },
    { "#": "41 HACKENSACK RD (361-01-00)", $: 1145e3 },
    { "#": "43 HACKENSACK RD (361-02-00)", $: 1132800 },
    { "#": "49 HACKENSACK RD (361-03-04)", $: 851700 },
    { "#": "139 HACKENSACK RD (366-14-00)", $: 52400 },
    { "#": "149 HACKENSACK RD (366-15-00)", $: 30300 },
    { "#": "153 HACKENSACK RD (366-16-00)", $: 31600 },
    { "#": "3 HALL RD (308-54-02)", $: 1297600 },
    { "#": "4 HALL RD (308-55-00)", $: 1395800 },
    { "#": "11 HALL RD (308-54-03)", $: 1743500 },
    { "#": "12 HALL RD (308-55-01)", $: 1559700 },
    { "#": "0 HALLWOOD RD (370A-05-00)", $: 274600 },
    { "#": "9 HALLWOOD RD (370A-01-00)", $: 3348400 },
    { "#": "10 HALLWOOD RD (370-13-00)", $: 265e4 },
    { "#": "18 HALLWOOD RD (370-12-00)", $: 4606e3 },
    { "#": "21 HALLWOOD RD (370A-02-00)", $: 2650800 },
    { "#": "22 HALLWOOD RD (370-11-00)", $: 2761200 },
    { "#": "28 HALLWOOD RD (370-10-00)", $: 2682600 },
    { "#": "34 HALLWOOD RD (370-09-00)", $: 1697500 },
    { "#": "45 HALLWOOD RD (370A-03-00)", $: 2801200 },
    { "#": "46 HALLWOOD RD (370-07-00)", $: 2897700 },
    { "#": "54 HALLWOOD RD (370-06-00)", $: 1776200 },
    { "#": "55 HALLWOOD RD (370A-04-00)", $: 4049100 },
    { "#": "70 HALLWOOD RD (370-04-05)", $: 5067800 },
    { "#": "77 HALLWOOD RD (370A-06-07)", $: 2892300 },
    { "#": "80 HALLWOOD RD (370-03-00)", $: 2336700 },
    { "#": "6 HAMILTON RD (058-01-00.9)", $: 0 },
    { "#": "9 HAMILTON RD (059-05-00)", $: 1721700 },
    { "#": "14 HAMILTON RD (058-02-00)", $: 3934200 },
    { "#": "24 HAMILTON RD (058-03-00)", $: 4911700 },
    { "#": "8 HAMMOND POND PKY (418-13-01)", $: 1399300 },
    { "#": "16 HAMMOND POND PKY (418-13-02)", $: 1123e3 },
    { "#": "24 HAMMOND POND PKY (418-14-00.9)", $: 0 },
    { "#": "24 HAMMOND POND PKY (418-14-00.9)", $: 0 },
    { "#": "32 HAMMOND POND PKY (418-14-01)", $: 99e4 },
    { "#": "36 HAMMOND POND PKY (418-14-02)", $: 864e3 },
    { "#": "40 HAMMOND POND PKY (418-15-00)", $: 871200 },
    { "#": "41 HAMMOND POND PKY (419-06-00.9)", $: 0 },
    { "#": "44 HAMMOND POND PKY (418-15-01)", $: 857900 },
    { "#": "48 HAMMOND POND PKY (418-15-02)", $: 854600 },
    { "#": "52 HAMMOND POND PKY (418-16-00)", $: 969100 },
    { "#": "55 HAMMOND POND PKY (419-05-00)", $: 1586900 },
    { "#": "56 HAMMOND POND PKY (418-16-01)", $: 941200 },
    { "#": "60 HAMMOND POND PKY (418-16-02)", $: 865100 },
    { "#": "63 HAMMOND POND PKY (419-04-00)", $: 1168200 },
    { "#": "64 HAMMOND POND PKY (418-17-00)", $: 990900 },
    { "#": "68 HAMMOND POND PKY (418-17-01)", $: 1116800 },
    { "#": "75 HAMMOND POND PKY (419-03-00)", $: 1696300 },
    { "#": "231 HAMMOND POND PKY (418-18-00)", $: 24533600 },
    { "#": "271 HAMMOND POND PKY (421-15-02)", $: 1172100 },
    { "#": "283 HAMMOND POND PKY (421-15-01)", $: 872e3 },
    { "#": "310 HAMMOND POND PKY (424-06-08.9)", $: 0 },
    { "#": "311 HAMMOND POND PKY (424-10-01)", $: 837900 },
    { "#": "317 HAMMOND POND PKY (424-10-02)", $: 793700 },
    { "#": "320 HAMMOND POND PKY (424-05-00)", $: 7272500 },
    { "#": "321 HAMMOND POND PKY (424-10-03)", $: 817900 },
    { "#": "321 HAMMOND POND PKY (424-30-00.9)", $: 0 },
    { "#": "327 HAMMOND POND PKY (424-10-04)", $: 0 },
    { "#": "763 HAMMOND POND PKY (424-09-00)", $: 505e3 },
    { "#": "0 HAMMOND ST (429-23-00)", $: 0 },
    { "#": "0 HAMMOND ST (429-27-00)", $: 0 },
    { "#": "0 HAMMOND ST (429-28-00)", $: 0 },
    { "#": "564 HAMMOND ST (285-01-04)", $: 12915700 },
    { "#": "565 HAMMOND ST (286-01-00)", $: 1446300 },
    { "#": "571 HAMMOND ST (286-02-00)", $: 1488700 },
    { "#": "575 HAMMOND ST (286-03-00)", $: 1520300 },
    { "#": "577 HAMMOND ST (286-04-00)", $: 1611200 },
    { "#": "612 HAMMOND ST (433-11-00)", $: 2255600 },
    { "#": "615 HAMMOND ST (428-07-00)", $: 1360900 },
    { "#": "616 HAMMOND ST (433-10-00)", $: 3140400 },
    { "#": "621 HAMMOND ST (428-08-09)", $: 2469200 },
    { "#": "629 HAMMOND ST (429-02-15.9)", $: 0 },
    { "#": "630 HAMMOND ST (432-12-16.9)", $: 0 },
    { "#": "640 HAMMOND ST (432-10-11.9)", $: 0 },
    { "#": "645 HAMMOND ST (429-16-00.9)", $: 0 },
    { "#": "652 HAMMOND ST (432-08-00)", $: 19156400 },
    { "#": "655 HAMMOND ST (429-18-00)", $: 1222400 },
    { "#": "661 HAMMOND ST (429-19-00)", $: 1171700 },
    { "#": "663 HAMMOND ST (429-17-00)", $: 982600 },
    { "#": "665 HAMMOND ST (429-20-00)", $: 1167e3 },
    { "#": "671 HAMMOND ST (429-21-00)", $: 1331100 },
    { "#": "673 HAMMOND ST (429-21-01)", $: 987300 },
    { "#": "675 HAMMOND ST (429-22-00.9)", $: 0 },
    { "#": "675 HAMMOND ST (429-22-01)", $: 1083900 },
    { "#": "676 HAMMOND ST (432-36-00)", $: 2015400 },
    { "#": "677 HAMMOND ST (429-22-02)", $: 1068e3 },
    { "#": "679 HAMMOND ST (429-25-00)", $: 813200 },
    { "#": "679 HAMMOND ST (429-26-00)", $: 38400 },
    { "#": "681 HAMMOND ST (429-23-28.9)", $: 3409200 },
    { "#": "681 HAMMOND ST (429-24-00)", $: 615700 },
    { "#": "682 HAMMOND ST (432-35-00)", $: 4346800 },
    { "#": "686 HAMMOND ST (432-34-00)", $: 2256300 },
    { "#": "687 HAMMOND ST (429-29-00)", $: 1216900 },
    { "#": "689 HAMMOND ST (429-30-00.9)", $: 0 },
    { "#": "693 HAMMOND ST (429-31-00.9)", $: 0 },
    { "#": "701 HAMMOND ST (429-44-00)", $: 1471e3 },
    { "#": "705 HAMMOND ST (429-34-00)", $: 3825400 },
    { "#": "705 HAMMOND ST (429-34-00.9)", $: 3825400 },
    { "#": "709 HAMMOND ST (429-35-00)", $: 2106300 },
    { "#": "715 HAMMOND ST (429-36-00.9)", $: 0 },
    { "#": "750 HAMMOND ST (430-04-02)", $: 3167400 },
    { "#": "756 HAMMOND ST (430-04-01)", $: 1957200 },
    { "#": "764 HAMMOND ST (430-04-00)", $: 1910700 },
    { "#": "791 HAMMOND ST (422-01-03)", $: 2116600 },
    { "#": "791 HAMMOND ST (429-37-39)", $: 58770900 },
    { "#": "796 HAMMOND ST (441-47-00)", $: 15041e3 },
    { "#": "811 HAMMOND ST (420-04-00)", $: 1598300 },
    { "#": "828 HAMMOND ST (441-45-01)", $: 2448300 },
    { "#": "849 HAMMOND ST (419B-17-00)", $: 2178400 },
    { "#": "854 HAMMOND ST (441-46-00)", $: 2214600 },
    { "#": "856 HAMMOND ST (441-45-00)", $: 3186500 },
    { "#": "860 HAMMOND ST (441-44-00)", $: 8631800 },
    { "#": "870 HAMMOND ST (441-43-00)", $: 26436800 },
    { "#": "895 HAMMOND ST (419A-05-00)", $: 1979400 },
    { "#": "905 HAMMOND ST (419A-04-00)", $: 3548900 },
    { "#": "935 HAMMOND ST (419-10-00)", $: 1648200 },
    { "#": "945 HAMMOND ST (419-09-00)", $: 1654500 },
    { "#": "955 HAMMOND ST (419-08-00)", $: 2253e3 },
    { "#": "962 HAMMOND ST (441-42-00)", $: 6959800 },
    { "#": "965 HAMMOND ST (419-07-00)", $: 1622300 },
    { "#": "10 HANCOCK RD (208-25-00)", $: 2491300 },
    { "#": "15 HANCOCK RD (208-19-00)", $: 2490600 },
    { "#": "16 HANCOCK RD (208-23-24)", $: 2223900 },
    { "#": "17 HANCOCK RD (208-20-00)", $: 1939300 },
    { "#": "21 HANCOCK RD (208-21-00)", $: 2077300 },
    { "#": "22 HANCOCK RD (208-22-00)", $: 1642400 },
    { "#": "12 HARRIS ST (169-22-00)", $: 3441800 },
    { "#": "16 HARRIS ST (169-21-00)", $: 2005500 },
    { "#": "17 HARRIS ST (168-03-00)", $: 1990700 },
    { "#": "19 HARRIS ST (168-04-00.9)", $: 0 },
    { "#": "21 HARRIS ST (168-05-00)", $: 2235600 },
    { "#": "22 HARRIS ST (169-20-00)", $: 1726600 },
    { "#": "23 HARRIS ST (168-06-00)", $: 2104100 },
    { "#": "24 HARRIS ST (169-19-00)", $: 2576400 },
    { "#": "28 HARRIS ST (169-18-00)", $: 1701300 },
    { "#": "31 HARRIS ST (168-07-00.9)", $: 0 },
    { "#": "42 HARRIS ST (169-16-00)", $: 2153600 },
    { "#": "44 HARRIS ST (169-15-00)", $: 2352600 },
    { "#": "49 HARRIS ST (168-08-00.9)", $: 0 },
    { "#": "50 HARRIS ST (169-14-00.9)", $: 0 },
    { "#": "57 HARRIS ST (168-09-00)", $: 2018100 },
    { "#": "16 HARRISON ST (130-25-00)", $: 2618200 },
    { "#": "20 HARRISON ST (130-24-00)", $: 2745300 },
    { "#": "26 HARRISON ST (130-23-01)", $: 1866800 },
    { "#": "30 HARRISON ST (130-23-00)", $: 2209100 },
    { "#": "36 HARRISON ST (130-22-00)", $: 1545200 },
    { "#": "38 HARRISON ST (130-21-00)", $: 1763300 },
    { "#": "40 HARRISON ST (130-20-00)", $: 4004800 },
    { "#": "43 HARRISON ST (128-21-00)", $: 1133200 },
    { "#": "44 HARRISON ST (130-19-00.9)", $: 0 },
    { "#": "47 HARRISON ST (128-01-00)", $: 2828e3 },
    { "#": "48 HARRISON ST (130-18-00)", $: 876600 },
    { "#": "48 HARRISON ST (130-18-00.9)", $: 876600 },
    { "#": "52 HARRISON ST (130-17-00)", $: 2703800 },
    { "#": "54 HARRISON ST (130-16-00)", $: 2588800 },
    { "#": "55 HARRISON ST (129-07-00.9)", $: 0 },
    { "#": "60 HARRISON ST (130-15-00.9)", $: 0 },
    { "#": "6 HART ST (305-23-00)", $: 645100 },
    { "#": "7 HART ST (304-08-00)", $: 727600 },
    { "#": "8 HART ST (305-22-00)", $: 755e3 },
    { "#": "9 HART ST (304-09-00)", $: 654100 },
    { "#": "10 HART ST (305-21-00)", $: 745700 },
    { "#": "11 HART ST (304-10-00)", $: 667e3 },
    { "#": "14 HART ST (305-20-00)", $: 1533200 },
    { "#": "16 HART ST (305-19-00)", $: 609900 },
    { "#": "17 HART ST (304-11-12)", $: 750100 },
    { "#": "18 HART ST (305-18-00)", $: 618500 },
    { "#": "19 HART ST (304-13-00)", $: 620100 },
    { "#": "20 HART ST (305-17-00)", $: 770500 },
    { "#": "21 HART ST (304-14-00)", $: 884700 },
    { "#": "22 HART ST (305-16-00)", $: 93500 },
    { "#": "3 HARVARD AVE (170-19-00.9)", $: 0 },
    { "#": "7 HARVARD AVE (170-20-00)", $: 2013700 },
    { "#": "19 HARVARD AVE (170-21-00)", $: 2079200 },
    { "#": "21 HARVARD AVE (170-22-00)", $: 2619700 },
    { "#": "23 HARVARD AVE (170-24-00.9)", $: 0 },
    { "#": "25 HARVARD AVE (170-23-00)", $: 1989900 },
    { "#": "27 HARVARD AVE (170-25-00)", $: 953600 },
    { "#": "27 HARVARD AVE (170-25-00.9)", $: 1010300 },
    { "#": "29 HARVARD AVE (170-26-00.9)", $: 0 },
    { "#": "30 HARVARD AVE (171-26-00)", $: 19287900 },
    { "#": "33 HARVARD AVE (170-27-00)", $: 223e4 },
    { "#": "37 HARVARD AVE (170-28-00)", $: 1994e3 },
    { "#": "40 HARVARD AVE (171-25-00)", $: 16833700 },
    { "#": "45 HARVARD AVE (170-33-00.9)", $: 0 },
    { "#": "48 HARVARD AVE (171-24-00)", $: 9280300 },
    { "#": "54 HARVARD AVE (171-23-00)", $: 6640300 },
    { "#": "54 HARVARD AVE (171-23-00.9)", $: 6640300 },
    { "#": "56 HARVARD AVE (171-22-00)", $: 3022800 },
    { "#": "60 HARVARD AVE (171-21-00.9)", $: 0 },
    { "#": "63 HARVARD AVE (170-35-01.9)", $: 0 },
    { "#": "66 HARVARD AVE (171-59-00)", $: 1905e3 },
    { "#": "70 HARVARD AVE (171-19-00)", $: 2299400 },
    { "#": "71 HARVARD AVE (170-36-01)", $: 2670900 },
    { "#": "74 HARVARD AVE (171-18-00)", $: 2189600 },
    { "#": "76 HARVARD AVE (171-17-00)", $: 2105800 },
    { "#": "77 HARVARD AVE (170-37-00.9)", $: 0 },
    { "#": "78 HARVARD AVE (171-16-00)", $: 2376600 },
    { "#": "80 HARVARD AVE (171-15-00)", $: 2093900 },
    { "#": "82 HARVARD AVE (171-14-00)", $: 1722100 },
    { "#": "84 HARVARD AVE (171-13-00.9)", $: 0 },
    { "#": "86 HARVARD AVE (171-12-00)", $: 2047500 },
    { "#": "88 HARVARD AVE (171-11-00)", $: 2060900 },
    { "#": "90 HARVARD AVE (171-10-00)", $: 2275600 },
    { "#": "91 HARVARD AVE (170-01-00.9)", $: 0 },
    { "#": "92 HARVARD AVE (171-09-00.9)", $: 0 },
    { "#": "94 HARVARD AVE (171-08-00)", $: 1731100 },
    { "#": "96 HARVARD AVE (171-07-00)", $: 1822600 },
    { "#": "243 HARVARD AVE (071-01-00)", $: 1668500 },
    { "#": "20 HARVARD CT (155-20-01)", $: 1257400 },
    { "#": "4 HARVARD PL (171-34-00)", $: 1501300 },
    { "#": "6 HARVARD PL (171-33-00)", $: 1308500 },
    { "#": "14 HARVARD PL (171-32-00)", $: 1634800 },
    { "#": "16 HARVARD PL (171-31-00)", $: 1486400 },
    { "#": "20 HARVARD PL (171-30-01)", $: 1564800 },
    { "#": "22 HARVARD PL (171-30-00)", $: 1360900 },
    { "#": "1 HARVARD SQ (140-10-00)", $: 2066800 },
    { "#": "5 HARVARD SQ (140-10-01)", $: 668400 },
    { "#": "6 HARVARD SQ (140-10-02)", $: 4144300 },
    { "#": "1 HARVARD ST (140A-04-00)", $: 9571900 },
    { "#": "7 HARVARD ST (140A-05-00)", $: 4994400 },
    { "#": "14 HARVARD ST (174-02-00)", $: 4022700 },
    { "#": "19 HARVARD ST (141-01-00)", $: 38e5 },
    { "#": "27 HARVARD ST (141-02-00)", $: 2167500 },
    { "#": "29 HARVARD ST (141-03-00)", $: 3619700 },
    { "#": "31 HARVARD ST (141-04-00)", $: 1823500 },
    { "#": "33 HARVARD ST (141-05-00)", $: 3057200 },
    { "#": "35 HARVARD ST (141-06-00)", $: 1284500 },
    { "#": "35 HARVARD ST (141-06-01.9)", $: 0 },
    { "#": "37 HARVARD ST (141-06-02)", $: 1115200 },
    { "#": "39 HARVARD ST (141-07-00)", $: 1947900 },
    { "#": "41 HARVARD ST (141-07-01)", $: 1944800 },
    { "#": "43 HARVARD ST (141-08-00)", $: 2668500 },
    { "#": "54 HARVARD ST (172-08-00)", $: 1829100 },
    { "#": "56 HARVARD ST (172-07-00)", $: 1954500 },
    { "#": "58 HARVARD ST (172-06-00)", $: 1739600 },
    { "#": "60 HARVARD ST (172-05-10)", $: 10201800 },
    { "#": "67 HARVARD ST (148-01-02)", $: 17816500 },
    { "#": "68 HARVARD ST (172-04-00)", $: 3980400 },
    { "#": "75 HARVARD ST (154-05-00)", $: 11557700 },
    { "#": "92 HARVARD ST (171-35-37)", $: 2483200 },
    { "#": "99 HARVARD ST (155-12-18)", $: 9e6 },
    { "#": "100 HARVARD ST (171-29-00.9)", $: 0 },
    { "#": "111 HARVARD ST (155-21-22)", $: 3537700 },
    { "#": "114 HARVARD ST (170-18-01)", $: 2603500 },
    { "#": "123 HARVARD ST (155-23-00)", $: 1931200 },
    { "#": "124 HARVARD ST (170-18-00)", $: 2420300 },
    { "#": "126 HARVARD ST (170-17-00)", $: 2009900 },
    { "#": "127 HARVARD ST (155-24-00)", $: 9674500 },
    { "#": "130 HARVARD ST (170-16-00)", $: 2190300 },
    { "#": "137 HARVARD ST (155-25-00)", $: 3880800 },
    { "#": "138 HARVARD ST (169-24-00)", $: 6189500 },
    { "#": "142 HARVARD ST (169-23-00)", $: 2326100 },
    { "#": "143 HARVARD ST (155-20-00)", $: 2639700 },
    { "#": "149 HARVARD ST (155-26-00)", $: 3108e3 },
    { "#": "152 HARVARD ST (168-01-00.9)", $: 0 },
    { "#": "155 HARVARD ST (155-27-00)", $: 17651600 },
    { "#": "171 HARVARD ST (155-28-00)", $: 3482500 },
    { "#": "175 HARVARD ST (155-29-00)", $: 2612100 },
    { "#": "179 HARVARD ST (155-30-00)", $: 2775e3 },
    { "#": "181 HARVARD ST (155-31-00)", $: 2941400 },
    { "#": "185 HARVARD ST (156-11-02)", $: 4599100 },
    { "#": "198 HARVARD ST (167-23-00)", $: 3650200 },
    { "#": "209 HARVARD ST (156-12-00)", $: 14136700 },
    { "#": "210 HARVARD ST (164-06-00)", $: 13852200 },
    { "#": "217 HARVARD ST (156-13-00)", $: 12831800 },
    { "#": "224 HARVARD ST (164-05-00)", $: 6876900 },
    { "#": "238 HARVARD ST (163-02-00)", $: 6073e3 },
    { "#": "279 HARVARD ST (045-04-05)", $: 12384e3 },
    { "#": "280 HARVARD ST (082-09-00)", $: 7608500 },
    { "#": "289 HARVARD ST (047A-01-00)", $: 8962100 },
    { "#": "294 HARVARD ST (082-07-08)", $: 24243800 },
    { "#": "299 HARVARD ST (047A-02-00)", $: 5679100 },
    { "#": "301 HARVARD ST (047A-02-01)", $: 7340700 },
    { "#": "305 HARVARD ST (047A-03-00)", $: 10397700 },
    { "#": "308 HARVARD ST (082-06-00)", $: 7762700 },
    { "#": "314 HARVARD ST (082-05-00)", $: 6011500 },
    { "#": "315 HARVARD ST (048-12-00)", $: 15731e3 },
    { "#": "322 HARVARD ST (082-04-00.9)", $: 0 },
    { "#": "340 HARVARD ST (082-01-00)", $: 2093200 },
    { "#": "342 HARVARD ST (082-28-00)", $: 1889600 },
    { "#": "344 HARVARD ST (082-27-00)", $: 2578800 },
    { "#": "345 HARVARD ST (048-13-00)", $: 134154800 },
    { "#": "356 HARVARD ST (081-03-00)", $: 2830500 },
    { "#": "360 HARVARD ST (081-02-00)", $: 2245e3 },
    { "#": "364 HARVARD ST (081-01-00)", $: 1828200 },
    { "#": "367 HARVARD ST (050-01-00.9)", $: 0 },
    { "#": "370 HARVARD ST (078-05-08)", $: 27515900 },
    { "#": "370 HARVARD ST (078-08-00)", $: 14249500 },
    { "#": "371 HARVARD ST (050-02-00)", $: 3341e3 },
    { "#": "373 HARVARD ST (050-02-00.9)", $: 0 },
    { "#": "375 HARVARD ST (050-03-00)", $: 4295700 },
    { "#": "384 HARVARD ST (078-05-00)", $: 20409800 },
    { "#": "385 HARVARD ST (051-01-02)", $: 4285100 },
    { "#": "389 HARVARD ST (051-03-00)", $: 2799700 },
    { "#": "392 HARVARD ST (078-04-00)", $: 2500900 },
    { "#": "395 HARVARD ST (051-04-00)", $: 9443800 },
    { "#": "398 HARVARD ST (078-03-00)", $: 2009600 },
    { "#": "401 HARVARD ST (064-09-00)", $: 2136800 },
    { "#": "404 HARVARD ST (078-02-00)", $: 2421e3 },
    { "#": "408 HARVARD ST (078-01-00)", $: 3611200 },
    { "#": "411 HARVARD ST (064-10-11)", $: 3937e3 },
    { "#": "420 HARVARD ST (077-09-12)", $: 17210800 },
    { "#": "420 HARVARD ST (077-11-12)", $: 3932200 },
    { "#": "421 HARVARD ST (066-10-00)", $: 2160100 },
    { "#": "426 HARVARD ST (077-10-00)", $: 3006700 },
    { "#": "429 HARVARD ST (066-11-00)", $: 3667200 },
    { "#": "434 HARVARD ST (076-13-00)", $: 1455900 },
    { "#": "435 HARVARD ST (067-08-00)", $: 2379400 },
    { "#": "440 HARVARD ST (076-12-00)", $: 2306800 },
    { "#": "445 HARVARD ST (067-09-00)", $: 2344100 },
    { "#": "454 HARVARD ST (075-01-02)", $: 2889900 },
    { "#": "455 HARVARD ST (069-22-00)", $: 7448300 },
    { "#": "470 HARVARD ST (074-01-00)", $: 4222100 },
    { "#": "473 HARVARD ST (069-23-24)", $: 7503700 },
    { "#": "488 HARVARD ST (073-02-00)", $: 1956600 },
    { "#": "496 HARVARD ST (073-01-00)", $: 2915300 },
    { "#": "500 HARVARD ST (072-01-00)", $: 1859200 },
    { "#": "514 HARVARD ST (072-40-00.9)", $: 0 },
    { "#": "523 HARVARD ST (070-18-22)", $: 19750700 },
    { "#": "524 HARVARD ST (071-02-01)", $: 2577600 },
    { "#": "526 HARVARD ST (071-02-00)", $: 2889200 },
    { "#": "10 HAWES PL (117-05-00)", $: 4365100 },
    { "#": "5 HAWES ST (115-06-00)", $: 4100800 },
    { "#": "6 HAWES ST (120-01-00)", $: 4186e3 },
    { "#": "7 HAWES ST (115-07-00)", $: 3138200 },
    { "#": "9 HAWES ST (115-08-00)", $: 2962200 },
    { "#": "11 HAWES ST (115-09-00)", $: 3664100 },
    { "#": "16 HAWES ST (120-19-00)", $: 5721e3 },
    { "#": "17 HAWES ST (115-10-00)", $: 4685500 },
    { "#": "40 HAWES ST (117-01-00)", $: 3278e3 },
    { "#": "43 HAWES ST (115-11-00)", $: 14102700 },
    { "#": "48 HAWES ST (117-11-00)", $: 3800700 },
    { "#": "56 HAWES ST (117-10-00)", $: 4711600 },
    { "#": "4 HAWTHORN RD (296-01-02)", $: 3378300 },
    { "#": "14 HAWTHORN RD (296-03-14)", $: 3130700 },
    { "#": "17 HAWTHORN RD (295-06-00)", $: 3015700 },
    { "#": "20 HAWTHORN RD (296-13-00)", $: 2341800 },
    { "#": "21 HAWTHORN RD (295-07-08)", $: 3096200 },
    { "#": "28 HAWTHORN RD (296-12-00)", $: 2187900 },
    { "#": "29 HAWTHORN RD (295-09-00)", $: 2312800 },
    { "#": "34 HAWTHORN RD (296-11-00)", $: 1684700 },
    { "#": "35 HAWTHORN RD (295-10-00)", $: 1873100 },
    { "#": "40 HAWTHORN RD (296-10-00)", $: 2315500 },
    { "#": "46 HAWTHORN RD (296-09-00)", $: 1950400 },
    { "#": "18 HAYDEN RD (250-11-01)", $: 1903700 },
    { "#": "30 HAYDEN RD (250-12-02)", $: 3685500 },
    { "#": "30 HAYDEN RD (250-12-05)", $: 9537700 },
    { "#": "11 HEATH HILL (337-07-00)", $: 3252900 },
    { "#": "12 HEATH HILL (336-20-21)", $: 2096100 },
    { "#": "21 HEATH HILL (337-05-06)", $: 4019600 },
    { "#": "22 HEATH HILL (336-22-00)", $: 1926500 },
    { "#": "30 HEATH HILL (336-23-00)", $: 2560100 },
    { "#": "33 HEATH HILL (337-04-00)", $: 5878600 },
    { "#": "40 HEATH HILL (336-24-00)", $: 4369800 },
    { "#": "43 HEATH HILL (337-03-00)", $: 2108e3 },
    { "#": "51 HEATH HILL (337-02-00)", $: 7226e3 },
    { "#": "54 HEATH HILL (336-25-00)", $: 4996300 },
    { "#": "60 HEATH HILL (336-26-00)", $: 4300600 },
    { "#": "61 HEATH HILL (337-01-00)", $: 3398e3 },
    { "#": "0 HEATH ST (440-44-00)", $: 0 },
    { "#": "15 HEATH ST (276-14-00)", $: 1571900 },
    { "#": "23 HEATH ST (276-15-00)", $: 1451300 },
    { "#": "27 HEATH ST (276-15-01)", $: 1756700 },
    { "#": "30 HEATH ST (337-09-10)", $: 3172800 },
    { "#": "31 HEATH ST (276-16-00)", $: 2928500 },
    { "#": "34 HEATH ST (337-30-00)", $: 2867800 },
    { "#": "35 HEATH ST (276-16-01)", $: 1531200 },
    { "#": "38 HEATH ST (337-29-00)", $: 3498e3 },
    { "#": "39 HEATH ST (276-17-00.9)", $: 0 },
    { "#": "45 HEATH ST (276-18-00)", $: 1855300 },
    { "#": "60 HEATH ST (337-14-00)", $: 3685300 },
    { "#": "61 HEATH ST (437-76-00)", $: 2975600 },
    { "#": "70 HEATH ST (337-17-00)", $: 7948e3 },
    { "#": "77 HEATH ST (437-77-00)", $: 6303200 },
    { "#": "80 HEATH ST (337-18-00)", $: 2380900 },
    { "#": "80 HEATH ST (337-18-19)", $: 4122400 },
    { "#": "113 HEATH ST (437-15-02)", $: 6311e3 },
    { "#": "124 HEATH ST (439-84-00)", $: 8650200 },
    { "#": "140 HEATH ST (439-85-00)", $: 2581600 },
    { "#": "150 HEATH ST (439-86-00)", $: 8067700 },
    { "#": "155 HEATH ST (437-40-00)", $: 7753800 },
    { "#": "171 HEATH ST (437-41-00)", $: 5683700 },
    { "#": "188 HEATH ST (438-03-05)", $: 6665300 },
    { "#": "214 HEATH ST (438-01-07)", $: 4020400 },
    { "#": "230 HEATH ST (440-01-00)", $: 11194e3 },
    { "#": "244 HEATH ST (440-13-03)", $: 3432200 },
    { "#": "260 HEATH ST (440-32-35)", $: 14862300 },
    { "#": "288 HEATH ST (440-36-00)", $: 4266100 },
    { "#": "296 HEATH ST (440-37-38)", $: 4299100 },
    { "#": "309 HEATH ST (437-57-00)", $: 2380800 },
    { "#": "315 HEATH ST (437-58-00)", $: 1526200 },
    { "#": "319 HEATH ST (437-60-00)", $: 2477600 },
    { "#": "321 HEATH ST (437-61-00)", $: 9789400 },
    { "#": "324 HEATH ST (440-44-01)", $: 4819900 },
    { "#": "325 HEATH ST (437-62-00)", $: 6349e3 },
    { "#": "327 HEATH ST (437-63-00)", $: 6598700 },
    { "#": "329 HEATH ST (437-64-00)", $: 7216400 },
    { "#": "331 HEATH ST (437-65-00)", $: 3657300 },
    { "#": "333 HEATH ST (437-66-00)", $: 5889700 },
    { "#": "335 HEATH ST (437-67-00)", $: 4736300 },
    { "#": "358 HEATH ST (440-44-02)", $: 2455400 },
    { "#": "359 HEATH ST (437-68-00)", $: 2743100 },
    { "#": "370 HEATH ST (440-45-00)", $: 2380800 },
    { "#": "375 HEATH ST (435-11-00)", $: 2956900 },
    { "#": "385 HEATH ST (435-12-13)", $: 2514900 },
    { "#": "386 HEATH ST (440-46-00)", $: 2384100 },
    { "#": "393 HEATH ST (435-14-00)", $: 2730900 },
    { "#": "400 HEATH ST (440-39-00)", $: 0 },
    { "#": "400 HEATH ST (440-39-01)", $: 66097800 },
    { "#": "401 HEATH ST (435-15-00)", $: 2297800 },
    { "#": "402 HEATH ST (440-47-00)", $: 2386900 },
    { "#": "409 HEATH ST (435-16-00)", $: 2873400 },
    { "#": "421 HEATH ST (435-17-00)", $: 2332500 },
    { "#": "435 HEATH ST (435-01-00)", $: 4036500 },
    { "#": "456 HEATH ST (432-26-05)", $: 4340300 },
    { "#": "458 HEATH ST (432-26-04)", $: 4061300 },
    { "#": "459 HEATH ST (434-08-00)", $: 2063300 },
    { "#": "460 HEATH ST (432-26-03)", $: 2924800 },
    { "#": "462 HEATH ST (432-26-02)", $: 2858300 },
    { "#": "471 HEATH ST (434-09-00)", $: 2635200 },
    { "#": "475 HEATH ST (434-10-00)", $: 2549e3 },
    { "#": "476 HEATH ST (432-25-00)", $: 2579800 },
    { "#": "484 HEATH ST (432-20-24)", $: 9602500 },
    { "#": "495 HEATH ST (433-03-00)", $: 1308800 },
    { "#": "501 HEATH ST (433-04-00)", $: 1637600 },
    { "#": "508 HEATH ST (432-17-00)", $: 1371500 },
    { "#": "513 HEATH ST (433-08-00)", $: 1457200 },
    { "#": "517 HEATH ST (433-09-00)", $: 1143400 },
    { "#": "521 HEATH ST (433-09-01)", $: 1398300 },
    { "#": "545 HEATH ST (428-10-00)", $: 779900 },
    { "#": "555 HEATH ST (428-11-00.9)", $: 0 },
    { "#": "557 HEATH ST (428-12-00)", $: 1800900 },
    { "#": "559 HEATH ST (428-13-00)", $: 1523200 },
    { "#": "563 HEATH ST (428-14-00.9)", $: 0 },
    { "#": "566 HEATH ST (429-01-00.9)", $: 0 },
    { "#": "584 HEATH ST (429-43-00)", $: 13851200 },
    { "#": "593 HEATH ST (426-08-00)", $: 1658e3 },
    { "#": "595 HEATH ST (426-09-00)", $: 991100 },
    { "#": "599 HEATH ST (426-10-00)", $: 996100 },
    { "#": "601 HEATH ST (426-10-01)", $: 888700 },
    { "#": "603 HEATH ST (426-10-02)", $: 797400 },
    { "#": "605 HEATH ST (426-10-03)", $: 798300 },
    { "#": "615 HEATH ST (426-11-13)", $: 28034300 },
    { "#": "629 HEATH ST (425-07-00)", $: 1224500 },
    { "#": "687 HEATH ST (425-06-00)", $: 915500 },
    { "#": "691 HEATH ST (425-04-00)", $: 1496200 },
    { "#": "695 HEATH ST (425-03-00)", $: 1737200 },
    { "#": "695 HEATH ST (425-03-00.9)", $: 1737200 },
    { "#": "709 HEATH ST (424-22-00)", $: 1293e3 },
    { "#": "711 HEATH ST (424-21-00)", $: 866100 },
    { "#": "717 HEATH ST (424-20-00)", $: 1077700 },
    { "#": "721 HEATH ST (424-19-00)", $: 971600 },
    { "#": "725 HEATH ST (424-18-00)", $: 1082600 },
    { "#": "727 HEATH ST (424-17-00)", $: 891400 },
    { "#": "731 HEATH ST (424-15-16)", $: 1233100 },
    { "#": "739 HEATH ST (424-14-00)", $: 1150600 },
    { "#": "741 HEATH ST (424-13-00.9)", $: 0 },
    { "#": "745 HEATH ST (424-12-00)", $: 1003700 },
    { "#": "749 HEATH ST (424-11-00.9)", $: 0 },
    { "#": "755 HEATH ST (424-10-00)", $: 974400 },
    { "#": "756 HEATH ST (421-15-00)", $: 879600 },
    { "#": "779 HEATH ST (424-01-00)", $: 1056100 },
    { "#": "789 HEATH ST (424A-07-00)", $: 1033500 },
    { "#": "790 HEATH ST (423-02-01)", $: 1762600 },
    { "#": "794 HEATH ST (423-02-02)", $: 525200 },
    { "#": "794 HEATH ST (423-02-02.9)", $: 3092300 },
    { "#": "797 HEATH ST (424A-05-00)", $: 2595300 },
    { "#": "797 HEATH ST (424A-05-00.9)", $: 2915200 },
    { "#": "798 HEATH ST (423-02-03.9)", $: 0 },
    { "#": "805 HEATH ST (424A-04-00)", $: 3139200 },
    { "#": "805 HEATH ST (424A-04-00.9)", $: 3139200 },
    { "#": "806 HEATH ST (423-03-00)", $: 1556200 },
    { "#": "809 HEATH ST (424A-03-00.9)", $: 0 },
    { "#": "809 HEATH ST (424A-03-03)", $: 2215200 },
    { "#": "809 HEATH ST (424A-03-03.9)", $: 3664600 },
    { "#": "813 HEATH ST (424A-02-00)", $: 1209400 },
    { "#": "816 HEATH ST (423-04-01)", $: 3590400 },
    { "#": "816 HEATH ST (423-04-01.9)", $: 3590400 },
    { "#": "1 HEATH WOOD LN (423-04-00.9)", $: 0 },
    { "#": "18 HEATH WOOD LN (423-05-00)", $: 2293100 },
    { "#": "37 HEDGE RD (321-05-00)", $: 1820600 },
    { "#": "38 HEDGE RD (322-17-00)", $: 3427900 },
    { "#": "43 HEDGE RD (321-06-00)", $: 2804500 },
    { "#": "52 HEDGE RD (322-16-01)", $: 4142200 },
    { "#": "57 HEDGE RD (321-07-00)", $: 2696400 },
    { "#": "58 HEDGE RD (322-15-02)", $: 2223900 },
    { "#": "61 HEDGE RD (321-08-00)", $: 1932100 },
    { "#": "62 HEDGE RD (322-15-01)", $: 119900 },
    { "#": "7 HENRY ST (302-06-00)", $: 1204100 },
    { "#": "8 HENRY ST (303-18-00)", $: 1123500 },
    { "#": "11 HENRY ST (302-07-00)", $: 1321400 },
    { "#": "12 HENRY ST (303-17-00)", $: 785700 },
    { "#": "12 HENRY ST (303-17-00.9)", $: 1571300 },
    { "#": "16 HENRY ST (303-16-00.9)", $: 0 },
    { "#": "17 HENRY ST (302-08-00)", $: 1284600 },
    { "#": "19 HENRY ST (302-09-10)", $: 851300 },
    { "#": "20 HENRY ST (303-14-15)", $: 1393300 },
    { "#": "17 HIGH ST (314-12-00.9)", $: 0 },
    { "#": "21 HIGH ST (314-12-01.9)", $: 0 },
    { "#": "27 HIGH ST (314-13-00)", $: 1634e3 },
    { "#": "31 HIGH ST (314-14-00)", $: 1572600 },
    { "#": "36 HIGH ST (292-13-00)", $: 3202300 },
    { "#": "44 HIGH ST (292-11-00)", $: 1985e3 },
    { "#": "48 HIGH ST (292-10-00)", $: 1205100 },
    { "#": "52 HIGH ST (292-09-01)", $: 2027800 },
    { "#": "59 HIGH ST (315-02-04)", $: 4988e3 },
    { "#": "60 HIGH ST (292-09-00)", $: 1999800 },
    { "#": "68 HIGH ST (295-01-00)", $: 2502200 },
    { "#": "76 HIGH ST (295-18-00)", $: 2972400 },
    { "#": "82 HIGH ST (295-17-00)", $: 3047600 },
    { "#": "84 HIGH ST (295-16-00)", $: 2566600 },
    { "#": "92 HIGH ST (295-15-00)", $: 3936e3 },
    { "#": "99 HIGH ST (308-50-00)", $: 4696500 },
    { "#": "100 HIGH ST (295-14-00)", $: 2630800 },
    { "#": "107 HIGH ST (308-51-00.9)", $: 0 },
    { "#": "112 HIGH ST (299-44-00)", $: 5322700 },
    { "#": "123 HIGH ST (308-52-00)", $: 3034600 },
    { "#": "127 HIGH ST (308-53-00)", $: 2721500 },
    { "#": "131 HIGH ST (308-54-00)", $: 2183900 },
    { "#": "132 HIGH ST (299-30-00)", $: 2413300 },
    { "#": "135 HIGH ST (308-54-01)", $: 2292900 },
    { "#": "138 HIGH ST (299-28-29)", $: 3244e3 },
    { "#": "146 HIGH ST (299-27-00)", $: 1560700 },
    { "#": "153 HIGH ST (308-56-00)", $: 1889300 },
    { "#": "157 HIGH ST (308-57-00)", $: 1768200 },
    { "#": "161 HIGH ST (308-58-00)", $: 1425700 },
    { "#": "165 HIGH ST (308-64-00)", $: 773100 },
    { "#": "165 HIGH ST (308-64-00.9)", $: 1135500 },
    { "#": "171 HIGH ST (308-65-00)", $: 1204200 },
    { "#": "173 HIGH ST (308-66-00)", $: 923600 },
    { "#": "175 HIGH ST (308-67-00)", $: 1481300 },
    { "#": "179 HIGH ST (308-73-00.9)", $: 0 },
    { "#": "181 HIGH ST (308-74-00.9)", $: 0 },
    { "#": "183 HIGH ST (308-75-00)", $: 1729700 },
    { "#": "185 HIGH ST (308-76-79.9)", $: 0 },
    { "#": "201 HIGH ST (308-80-00)", $: 1862700 },
    { "#": "203 HIGH ST (308-81-00)", $: 1698e3 },
    { "#": "209 HIGH ST (308-81-01)", $: 1031900 },
    { "#": "225 HIGH ST (302-15-00)", $: 1447100 },
    { "#": "229 HIGH ST (302-16-00)", $: 1604300 },
    { "#": "231 HIGH ST (302-01-00)", $: 1783100 },
    { "#": "3 HIGH ST PL (308-68-00)", $: 1554400 },
    { "#": "5 HIGH ST PL (308-69-00)", $: 1546800 },
    { "#": "7 HIGH ST PL (308-70-00)", $: 1536300 },
    { "#": "9 HIGH ST PL (308-71-00.9)", $: 0 },
    { "#": "11 HIGH ST PL (308-72-00)", $: 106500 },
    { "#": "24 HIGHLAND RD (300-01-00)", $: 7539800 },
    { "#": "29 HIGHLAND RD (299-05-00)", $: 1432300 },
    { "#": "35 HIGHLAND RD (299-05-01)", $: 1447900 },
    { "#": "41 HIGHLAND RD (299-06-00)", $: 1461200 },
    { "#": "45 HIGHLAND RD (299-06-01.9)", $: 0 },
    { "#": "49 HIGHLAND RD (299-07-00.9)", $: 0 },
    { "#": "53 HIGHLAND RD (299-07-01)", $: 1627100 },
    { "#": "57 HIGHLAND RD (299-08-00)", $: 1481400 },
    { "#": "61 HIGHLAND RD (299-09-00)", $: 1530300 },
    { "#": "63 HIGHLAND RD (299-10-00)", $: 1408200 },
    { "#": "67 HIGHLAND RD (299-11-00)", $: 1475500 },
    { "#": "69 HIGHLAND RD (299-12-00)", $: 1381600 },
    { "#": "71 HIGHLAND RD (299-13-00)", $: 964600 },
    { "#": "73 HIGHLAND RD (299-14-00)", $: 958900 },
    { "#": "75 HIGHLAND RD (299-15-00)", $: 1102500 },
    { "#": "77 HIGHLAND RD (299-16-00)", $: 1198400 },
    { "#": "81 HIGHLAND RD (299-17-00)", $: 1633e3 },
    { "#": "82 HIGHLAND RD (301-03-00.9)", $: 0 },
    { "#": "83 HIGHLAND RD (299-14-01)", $: 99400 },
    { "#": "85 HIGHLAND RD (299-18-00)", $: 1223600 },
    { "#": "86 HIGHLAND RD (301-02-00)", $: 1807700 },
    { "#": "89 HIGHLAND RD (299-20-21)", $: 1358600 },
    { "#": "90 HIGHLAND RD (301-01-00)", $: 1777600 },
    { "#": "91 HIGHLAND RD (299-22-00)", $: 962200 },
    { "#": "93 HIGHLAND RD (299-23-00)", $: 1001100 },
    { "#": "95 HIGHLAND RD (299-24-00)", $: 1065700 },
    { "#": "97 HIGHLAND RD (299-25-00)", $: 894600 },
    { "#": "1 HILLSIDE RD (336-05-00)", $: 7169400 },
    { "#": "15 HILLSIDE RD (336-04-00)", $: 2136e3 },
    { "#": "33 HILLSIDE RD (336-03-00)", $: 7906500 },
    { "#": "37 HILLSIDE RD (336-02-00)", $: 1846200 },
    { "#": "40 HILLSIDE RD (337-27-00)", $: 393800 },
    { "#": "60 HILLSIDE RD (337-28-00)", $: 7783400 },
    { "#": "63 HILLSIDE RD (336-01-00)", $: 8429400 },
    { "#": "3 HILLTOP RD (278-04-00)", $: 2207800 },
    { "#": "11 HILLTOP RD (278-05-00)", $: 2024e3 },
    { "#": "20 HILLTOP RD (278A-01-00)", $: 2066200 },
    { "#": "29 HILLTOP RD (278-06-07)", $: 3663700 },
    { "#": "30 HILLTOP RD (278A-08-00)", $: 2166600 },
    { "#": "37 HILLTOP RD (278-07-01)", $: 3444e3 },
    { "#": "42 HILLTOP RD (278A-07-00)", $: 1789e3 },
    { "#": "47 HILLTOP RD (278-08-00)", $: 2264e3 },
    { "#": "53 HILLTOP RD (278-09-00)", $: 2542100 },
    { "#": "54 HILLTOP RD (278A-06-00)", $: 2725300 },
    { "#": "59 HILLTOP RD (278-33-00)", $: 2736400 },
    { "#": "65 HILLTOP RD (278-11-00)", $: 2904200 },
    { "#": "74 HILLTOP RD (278A-05-00)", $: 2256200 },
    { "#": "75 HILLTOP RD (278-12-00)", $: 2926700 },
    { "#": "85 HILLTOP RD (278-13-00)", $: 3226900 },
    { "#": "5 HOLDEN ST (174-08-01.9)", $: 0 },
    { "#": "11 HOLDEN ST (174-09-00)", $: 944800 },
    { "#": "11 HOLDEN ST (174-09-00.9)", $: 3820400 },
    { "#": "15 HOLDEN ST (174-10-00)", $: 1323200 },
    { "#": "25 HOLDEN ST (174-01-00)", $: 14722300 },
    { "#": "16 HOLLAND RD (251-06-01)", $: 1745700 },
    { "#": "50 HOLLAND RD (251-05-00)", $: 1863500 },
    { "#": "51 HOLLAND RD (248-10-00)", $: 2891100 },
    { "#": "59 HOLLAND RD (248-11-00)", $: 2534100 },
    { "#": "74 HOLLAND RD (250-07-00)", $: 2953e3 },
    { "#": "79 HOLLAND RD (249-08-00)", $: 3557300 },
    { "#": "90 HOLLAND RD (250-06-00)", $: 3995700 },
    { "#": "97 HOLLAND RD (249-15-00)", $: 4034700 },
    { "#": "105 HOLLAND RD (249-11-00)", $: 3492700 },
    { "#": "111 HOLLAND RD (249-12-00)", $: 2334400 },
    { "#": "124 HOLLAND RD (250-03-05)", $: 8282800 },
    { "#": "125 HOLLAND RD (249-13-00)", $: 4325300 },
    { "#": "25 HOLLY LN (426-06-00.9)", $: 0 },
    { "#": "26 HOLLY LN (428-01-00.9)", $: 0 },
    { "#": "6 HOLLYWOOD RD (378-01-00)", $: 1174200 },
    { "#": "12 HOLLYWOOD RD (378-06-00)", $: 10800 },
    { "#": "16 HOLLYWOOD RD (378-07-00)", $: 3800 },
    { "#": "12 HOMER ST (154-10-00)", $: 4542500 },
    { "#": "18 HOMER ST (154-02-00)", $: 3139100 },
    { "#": "22 HOMER ST (154-01-00.9)", $: 0 },
    { "#": "7 HURD RD (149-26-00.9)", $: 0 },
    { "#": "9 HURD RD (149-27-00)", $: 2363900 },
    { "#": "11 HURD RD (149-28-00.9)", $: 0 },
    { "#": "15 HURD RD (149-29-00)", $: 2492400 },
    { "#": "19 HURD RD (149-30-00)", $: 1996900 },
    { "#": "23 HURD RD (149-31-00.9)", $: 0 },
    { "#": "27 HURD RD (149-32-00.9)", $: 0 },
    { "#": "27 HURD RD (149-32-07)", $: 3150200 },
    { "#": "31 HURD RD (149-33-00)", $: 2017800 },
    { "#": "9 HYSLOP RD (248-12-00)", $: 2995100 },
    { "#": "15 HYSLOP RD (248-13-00)", $: 3255300 },
    { "#": "22 HYSLOP RD (249-07-00)", $: 2599900 },
    { "#": "29 HYSLOP RD (248-14-00)", $: 2763800 },
    { "#": "34 HYSLOP RD (249-14-00)", $: 2097500 },
    { "#": "37 HYSLOP RD (248-15-00)", $: 4973500 },
    { "#": "46 HYSLOP RD (249-05-00)", $: 2852800 },
    { "#": "52 HYSLOP RD (249-04-00)", $: 3547400 },
    { "#": "60 HYSLOP RD (249-03-00)", $: 4011900 },
    { "#": "67 HYSLOP RD (244-06-00)", $: 3149200 },
    { "#": "70 HYSLOP RD (249-02-00)", $: 3651400 },
    { "#": "89 HYSLOP RD (244-07-00)", $: 6464800 },
    { "#": "119 HYSLOP RD (257-02-00)", $: 9943e3 },
    { "#": "133 HYSLOP RD (257-03-00)", $: 4793700 },
    { "#": "146 HYSLOP RD (256-20-00)", $: 3585e3 },
    { "#": "147 HYSLOP RD (257-04-06)", $: 3084e3 },
    { "#": "154 HYSLOP RD (256-19-00)", $: 3857400 },
    { "#": "161 HYSLOP RD (257-05-00)", $: 3976600 },
    { "#": "166 HYSLOP RD (256-18-00)", $: 3850300 },
    { "#": "170 HYSLOP RD (256A-02-00)", $: 5130400 },
    { "#": "200 HYSLOP RD (256A-01-01)", $: 2244400 },
    { "#": "201 HYSLOP RD (257-07-00)", $: 6892200 },
    { "#": "0 HYSLOP RD EXT (256-17-00)", $: 1e4 },
    { "#": "11 HYSLOP RD EXT (256A-02-01)", $: 1449200 },
    { "#": "31 HYSLOP RD EXT (256A-03-06)", $: 6776300 },
    { "#": "0 INDEPENDENCE DR (389-15-01)", $: 0 },
    { "#": "7 INDEPENDENCE DR (392-01-01)", $: 921800 },
    { "#": "9 INDEPENDENCE DR (388C-01-01)", $: 12284800 },
    { "#": "14 INDEPENDENCE DR (389-13-00)", $: 1210400 },
    { "#": "18 INDEPENDENCE DR (389-14-00)", $: 1359300 },
    { "#": "21 INDEPENDENCE DR (388C-01-00)", $: 42943e3 },
    { "#": "22 INDEPENDENCE DR (389-15-00)", $: 1797300 },
    { "#": "24 INDEPENDENCE DR (388A-01-01)", $: 6982e3 },
    { "#": "46 INDEPENDENCE DR (388A-01-00)", $: 28260300 },
    { "#": "101 INDEPENDENCE DR (388B-01-00)", $: 67166400 },
    { "#": "2 INTERVALE RD (375C-11-00)", $: 1144300 },
    { "#": "6 INTERVALE RD (375C-10-00)", $: 2136300 },
    { "#": "11 INTERVALE RD (375F-03-00)", $: 1500700 },
    { "#": "12 INTERVALE RD (375C-09-00)", $: 1056300 },
    { "#": "20 INTERVALE RD (375C-05-00)", $: 1554900 },
    { "#": "26 INTERVALE RD (375C-08-00)", $: 2129e3 },
    { "#": "27 INTERVALE RD (375F-01-02)", $: 2423200 },
    { "#": "30 INTERVALE RD (375C-07-00)", $: 874900 },
    { "#": "44 INTERVALE RD (375C-06-00)", $: 1757400 },
    { "#": "56 INTERVALE RD (375D-05-00)", $: 1217800 },
    { "#": "5 IRVING ST (308-34-00.9)", $: 0 },
    { "#": "6 IRVING ST (313-05-00)", $: 1116500 },
    { "#": "9 IRVING ST (308-35-00)", $: 2586400 },
    { "#": "14 IRVING ST (313-04-00)", $: 2408400 },
    { "#": "22 IRVING ST (313-03-00)", $: 4177600 },
    { "#": "27 IRVING ST (312-10-00)", $: 3594100 },
    { "#": "30 IRVING ST (313-02-00)", $: 1953200 },
    { "#": "39 IRVING ST (308-48-00)", $: 3512800 },
    { "#": "48 IRVING ST (310-01-00)", $: 2289400 },
    { "#": "55 IRVING ST (308-49-00)", $: 3739500 },
    { "#": "58 IRVING ST (310-01-01)", $: 2168600 },
    { "#": "0 IVY ST (001-19-02)", $: 18200 },
    { "#": "0 IVY ST (001-19-04)", $: 103300 },
    { "#": "0 IVY ST (001-31-02)", $: 73e3 },
    { "#": "80 IVY ST (001-23-00)", $: 10557400 },
    { "#": "83 IVY ST (002-01-00.9)", $: 0 },
    { "#": "87 IVY ST (002-02-00)", $: 2402400 },
    { "#": "90 IVY ST (001-22-00)", $: 2699700 },
    { "#": "93 IVY ST (002-03-00)", $: 3906100 },
    { "#": "96 IVY ST (001-21-00)", $: 4009900 },
    { "#": "101 IVY ST (002-04-00)", $: 3644900 },
    { "#": "108 IVY ST (001-20-00)", $: 4492400 },
    { "#": "111 IVY ST (002-05-00)", $: 3623500 },
    { "#": "135 IVY ST (003-01-00)", $: 8909700 },
    { "#": "156 IVY ST (009-02-00)", $: 6067600 },
    { "#": "157 IVY ST (008-03-01)", $: 2598800 },
    { "#": "165 IVY ST (008-04-00)", $: 2400300 },
    { "#": "170 IVY ST (009-01-00)", $: 5199800 },
    { "#": "178 IVY ST (012-04-01)", $: 3198100 },
    { "#": "180 IVY ST (012-04-00)", $: 4753100 },
    { "#": "190 IVY ST (012-02-01)", $: 6377200 },
    { "#": "8 JAMAICA RD (301-23-00)", $: 1207300 },
    { "#": "8 JAMAICA RD (301-23-00.9)", $: 1317400 },
    { "#": "12 JAMAICA RD (301-22-00)", $: 1918400 },
    { "#": "16 JAMAICA RD (301-21-00)", $: 2290600 },
    { "#": "20 JAMAICA RD (301-20-00.9)", $: 0 },
    { "#": "22 JAMAICA RD (301-19-00)", $: 1774300 },
    { "#": "26 JAMAICA RD (301-18-00)", $: 1921900 },
    { "#": "30 JAMAICA RD (301-17-00)", $: 1968200 },
    { "#": "34 JAMAICA RD (301-16-00)", $: 3638500 },
    { "#": "36 JAMAICA RD (301-13-01)", $: 20400 },
    { "#": "38 JAMAICA RD (301-12-00)", $: 1763500 },
    { "#": "40 JAMAICA RD (301-13-00)", $: 67900 },
    { "#": "42 JAMAICA RD (301-11-00.9)", $: 0 },
    { "#": "46 JAMAICA RD (301-10-00)", $: 881400 },
    { "#": "46 JAMAICA RD (301-10-00.9)", $: 1381900 },
    { "#": "48 JAMAICA RD (301-09-00.9)", $: 0 },
    { "#": "52 JAMAICA RD (301-08-00)", $: 2028100 },
    { "#": "58 JAMAICA RD (301-07-00.9)", $: 0 },
    { "#": "60 JAMAICA RD (301-06-00)", $: 1491e3 },
    { "#": "66 JAMAICA RD (301-05-00)", $: 1286600 },
    { "#": "66 JAMAICA RD (301-05-00.9)", $: 1286600 },
    { "#": "68 JAMAICA RD (301-04-00)", $: 2067700 },
    { "#": "5 JAMES ST (043-15-00)", $: 1201600 },
    { "#": "9 JAMES ST (043-16-00)", $: 4291500 },
    { "#": "12 JAMES ST (044-08-00.9)", $: 0 },
    { "#": "15 JAMES ST (043-17-00.9)", $: 0 },
    { "#": "19 JAMES ST (043-18-00)", $: 4964e3 },
    { "#": "22 JAMES ST (044-07-00)", $: 3966300 },
    { "#": "22 JAMES ST (044-07-00.9)", $: 0 },
    { "#": "27 JAMES ST (043-19-00.9)", $: 0 },
    { "#": "28 JAMES ST (044-06-00.9)", $: 0 },
    { "#": "5 JEFFERSON RD (436-03-04)", $: 2016300 },
    { "#": "13 JEFFERSON RD (436-05-00)", $: 2868200 },
    { "#": "14 JEFFERSON RD (437-01-00)", $: 2917e3 },
    { "#": "24 JEFFERSON RD (437-74-00)", $: 1888e3 },
    { "#": "25 JEFFERSON RD (436-06-00)", $: 2997400 },
    { "#": "35 JEFFERSON RD (436-07-00)", $: 2093100 },
    { "#": "36 JEFFERSON RD (437-73-00)", $: 2648200 },
    { "#": "42 JEFFERSON RD (437-72-00)", $: 315e4 },
    { "#": "6 JENNESS RD (086A-12-00)", $: 1313500 },
    { "#": "8 JENNESS RD (086A-13-00)", $: 1325200 },
    { "#": "9 JENNESS RD (086A-10-00)", $: 1672600 },
    { "#": "10 JENNESS RD (086A-14-00)", $: 1520700 },
    { "#": "15 JENNESS RD (086A-10-01)", $: 1494700 },
    { "#": "16 JENNESS RD (086A-15-00)", $: 1273200 },
    { "#": "20 JENNESS RD (086A-16-00)", $: 1498400 },
    { "#": "9 JOHN ST (046-02-04)", $: 5820500 },
    { "#": "16 JOHN ST (045-11-00)", $: 2756500 },
    { "#": "20 JOHN ST (045-09-00.9)", $: 0 },
    { "#": "37 JOHN ST (047-17-00)", $: 1429800 },
    { "#": "40 JOHN ST (047A-10-00)", $: 301200 },
    { "#": "51 JOHN ST (047-01-00.9)", $: 0 },
    { "#": "0 JORDAN RD (086A-01-01)", $: 1204500 },
    { "#": "15 JORDAN RD (086-44-00)", $: 2233200 },
    { "#": "19 JORDAN RD (086-45-00)", $: 2292900 },
    { "#": "20 JORDAN RD (086B-23-00)", $: 1765100 },
    { "#": "24 JORDAN RD (086B-22-00)", $: 1954500 },
    { "#": "25 JORDAN RD (086-46-00)", $: 3416200 },
    { "#": "28 JORDAN RD (086B-21-00)", $: 1705300 },
    { "#": "31 JORDAN RD (086-47-48)", $: 1523200 },
    { "#": "38 JORDAN RD (086B-20-00)", $: 2095900 },
    { "#": "39 JORDAN RD (086-49-50)", $: 2452900 },
    { "#": "42 JORDAN RD (086B-18-19)", $: 1816400 },
    { "#": "43 JORDAN RD (086-51-00)", $: 1990900 },
    { "#": "49 JORDAN RD (086-52-00)", $: 1811800 },
    { "#": "52 JORDAN RD (086B-16-17)", $: 1907900 },
    { "#": "53 JORDAN RD (086-53-00)", $: 2178500 },
    { "#": "54 JORDAN RD (086B-15-00)", $: 1828200 },
    { "#": "59 JORDAN RD (086-54-00)", $: 1917e3 },
    { "#": "60 JORDAN RD (086B-14-00)", $: 2181500 },
    { "#": "61 JORDAN RD (086-55-00)", $: 2023100 },
    { "#": "67 JORDAN RD (086-56-00)", $: 2161400 },
    { "#": "71 JORDAN RD (086-57-00)", $: 2036e3 },
    { "#": "77 JORDAN RD (086-58-00)", $: 1752100 },
    { "#": "81 JORDAN RD (086-59-00)", $: 2452e3 },
    { "#": "89 JORDAN RD (086-60-00)", $: 1443200 },
    { "#": "94 JORDAN RD (086B-09-00)", $: 173e4 },
    { "#": "95 JORDAN RD (086-61-00)", $: 2132300 },
    { "#": "99 JORDAN RD (086-62-00)", $: 1914e3 },
    { "#": "100 JORDAN RD (086B-08-00)", $: 2936400 },
    { "#": "105 JORDAN RD (086-63-00)", $: 3993500 },
    { "#": "106 JORDAN RD (086B-07-00)", $: 1666200 },
    { "#": "111 JORDAN RD (086-64-65)", $: 2149600 },
    { "#": "121 JORDAN RD (086-66-00)", $: 1953e3 },
    { "#": "127 JORDAN RD (086-67-00)", $: 2317500 },
    { "#": "133 JORDAN RD (086-68-00)", $: 2545800 },
    { "#": "137 JORDAN RD (086-69-00)", $: 2085400 },
    { "#": "138 JORDAN RD (086A-03-01)", $: 1844900 },
    { "#": "141 JORDAN RD (086-69-01)", $: 1717800 },
    { "#": "142 JORDAN RD (086A-03-00)", $: 1572900 },
    { "#": "144 JORDAN RD (086A-02-01)", $: 1508700 },
    { "#": "147 JORDAN RD (086-70-00)", $: 2451200 },
    { "#": "148 JORDAN RD (086A-02-00)", $: 1776100 },
    { "#": "150 JORDAN RD (086A-01-00)", $: 2219200 },
    { "#": "150 JORDAN RD (086A-01-02)", $: 1203400 },
    { "#": "153 JORDAN RD (086-71-00)", $: 2147400 },
    { "#": "157 JORDAN RD (086-72-00)", $: 1862500 },
    { "#": "6 JUNIPER ST (287-02-03.9)", $: 0 },
    { "#": "40 JUNIPER ST (287-04-00)", $: 1737800 },
    { "#": "1 KENDALL ST (317-35-00)", $: 2208500 },
    { "#": "7 KENDALL ST (317-36-00.9)", $: 0 },
    { "#": "11 KENDALL ST (317-36-01)", $: 950200 },
    { "#": "15 KENDALL ST (317-37-00)", $: 889100 },
    { "#": "19 KENDALL ST (317-38-00)", $: 1185600 },
    { "#": "23 KENDALL ST (316A-18-00)", $: 1323300 },
    { "#": "33 KENDALL ST (316A-19-22.9)", $: 0 },
    { "#": "37 KENDALL ST (316A-20-01)", $: 1086600 },
    { "#": "39 KENDALL ST (316A-20-00)", $: 1059900 },
    { "#": "45 KENDALL ST (316A-21-00)", $: 1224600 },
    { "#": "48 KENDALL ST (316-22-00)", $: 1389100 },
    { "#": "52 KENDALL ST (316-21-00)", $: 859300 },
    { "#": "5 KENNARD RD (321-13-00)", $: 3037900 },
    { "#": "6 KENNARD RD (320A-14-15)", $: 2173800 },
    { "#": "15 KENNARD RD (321-01-00)", $: 3168400 },
    { "#": "16 KENNARD RD (320A-13-00)", $: 2551200 },
    { "#": "19 KENNARD RD (322-01-00)", $: 46654600 },
    { "#": "22 KENNARD RD (320A-12-00)", $: 2212300 },
    { "#": "32 KENNARD RD (320A-09-11)", $: 2947600 },
    { "#": "5 KENSINGTON CIR (416-17-00)", $: 1739700 },
    { "#": "11 KENSINGTON CIR (416-16-00)", $: 1726600 },
    { "#": "17 KENSINGTON CIR (416-14-15)", $: 1651700 },
    { "#": "20 KENSINGTON CIR (415-07-00)", $: 1052700 },
    { "#": "25 KENSINGTON CIR (416-13-00)", $: 1687100 },
    { "#": "30 KENSINGTON CIR (415-06-00)", $: 1301100 },
    { "#": "31 KENSINGTON CIR (416-12-00)", $: 1973700 },
    { "#": "39 KENSINGTON CIR (416-11-00)", $: 3033400 },
    { "#": "40 KENSINGTON CIR (415-05-00)", $: 1814200 },
    { "#": "43 KENSINGTON CIR (416-10-00)", $: 1994e3 },
    { "#": "49 KENSINGTON CIR (416-09-00)", $: 2150400 },
    { "#": "50 KENSINGTON CIR (415-03-04)", $: 2102300 },
    { "#": "55 KENSINGTON CIR (416-08-00)", $: 2011e3 },
    { "#": "60 KENSINGTON CIR (415-02-00)", $: 2228600 },
    { "#": "63 KENSINGTON CIR (416-07-00)", $: 2194e3 },
    { "#": "80 KENSINGTON CIR (415-01-00)", $: 2530800 },
    { "#": "3 KENT SQ (129-20-00)", $: 1266500 },
    { "#": "7 KENT SQ (129-21-00)", $: 1265700 },
    { "#": "9 KENT SQ (129-01-00)", $: 1270800 },
    { "#": "11 KENT SQ (129-02-00)", $: 1199200 },
    { "#": "12 KENT SQ (128-06-00.9)", $: 0 },
    { "#": "13 KENT SQ (129-02-01)", $: 1216600 },
    { "#": "15 KENT SQ (129-02-02)", $: 1284400 },
    { "#": "16 KENT SQ (128-05-00.9)", $: 0 },
    { "#": "17 KENT SQ (129-02-03)", $: 1327e3 },
    { "#": "21 KENT SQ (129-03-00)", $: 2285300 },
    { "#": "22 KENT SQ (128-04-00.9)", $: 0 },
    { "#": "25 KENT SQ (129-04-00)", $: 2179900 },
    { "#": "26 KENT SQ (128-03-00)", $: 1994900 },
    { "#": "31 KENT SQ (129-05-00)", $: 1130500 },
    { "#": "32 KENT SQ (128-02-00)", $: 899300 },
    { "#": "32 KENT SQ (128-02-00.9)", $: 899300 },
    { "#": "33 KENT SQ (129-06-00)", $: 1848200 },
    { "#": "7 KENT ST (140-11-00.9)", $: 0 },
    { "#": "9 KENT ST (140-12-00)", $: 1616300 },
    { "#": "11 KENT ST (140-13-00)", $: 1674900 },
    { "#": "16 KENT ST (140A-03-00)", $: 3660500 },
    { "#": "17 KENT ST (140-14-01)", $: 2054100 },
    { "#": "20 KENT ST (140A-02-00)", $: 6199300 },
    { "#": "21 KENT ST (140-15-00.9)", $: 0 },
    { "#": "25 KENT ST (140-05-00)", $: 2415200 },
    { "#": "32 KENT ST (140A-01-00)", $: 1696100 },
    { "#": "33 KENT ST (140-17-00.9)", $: 0 },
    { "#": "40 KENT ST (141-26-00)", $: 2386700 },
    { "#": "41 KENT ST (140-18-00.9)", $: 0 },
    { "#": "43 KENT ST (140-18-01)", $: 1399200 },
    { "#": "48 KENT ST (141-25-00.9)", $: 0 },
    { "#": "50 KENT ST (141-24-00)", $: 8648600 },
    { "#": "58 KENT ST (141-23-00)", $: 2348100 },
    { "#": "72 KENT ST (141-22-00.9)", $: 0 },
    { "#": "90 KENT ST (146-19-00)", $: 2012600 },
    { "#": "96 KENT ST (146-18-00)", $: 1777200 },
    { "#": "110 KENT ST (145-01-00)", $: 2610700 },
    { "#": "117 KENT ST (143-02-00.9)", $: 0 },
    { "#": "122 KENT ST (144-01-00)", $: 2361700 },
    { "#": "123 KENT ST (143-03-00)", $: 2618900 },
    { "#": "125 KENT ST (143-04-00)", $: 2598400 },
    { "#": "128 KENT ST (144-26-00)", $: 1909600 },
    { "#": "131 KENT ST (143-05-00)", $: 2018600 },
    { "#": "143 KENT ST (127-19-00.9)", $: 0 },
    { "#": "147 KENT ST (127-18-00)", $: 5610100 },
    { "#": "147 KENT ST (127-18-00.9)", $: 5610100 },
    { "#": "148 KENT ST (128-11-00)", $: 3504900 },
    { "#": "148 KENT ST (128-11-00.9)", $: 3504900 },
    { "#": "159 KENT ST (127-16-00)", $: 1422600 },
    { "#": "163 KENT ST (127-15-00)", $: 781500 },
    { "#": "163 KENT ST (127-15-00.9)", $: 3230300 },
    { "#": "169 KENT ST (127-12-00.9)", $: 0 },
    { "#": "186 KENT ST (128-08-10)", $: 27429e3 },
    { "#": "197 KENT ST (127-11-00.9)", $: 0 },
    { "#": "200 KENT ST (128-07-00)", $: 3527e3 },
    { "#": "212 KENT ST (129-19-00)", $: 1266e3 },
    { "#": "214 KENT ST (129-18-00)", $: 1394800 },
    { "#": "216 KENT ST (129-17-00)", $: 1248600 },
    { "#": "217 KENT ST (127-10-00)", $: 10046500 },
    { "#": "218 KENT ST (129-16-00)", $: 1236e3 },
    { "#": "220 KENT ST (129-15-00)", $: 1366e3 },
    { "#": "229 KENT ST (127-09-00)", $: 7703500 },
    { "#": "232 KENT ST (126-06-00)", $: 2443900 },
    { "#": "240 KENT ST (126-05-02)", $: 1638e3 },
    { "#": "241 KENT ST (127-08-00)", $: 7859100 },
    { "#": "247 KENT ST (127-07-00)", $: 3126900 },
    { "#": "252 KENT ST (126-03-01)", $: 2717100 },
    { "#": "253 KENT ST (127-06-00)", $: 3312900 },
    { "#": "258 KENT ST (126-03-00)", $: 1734300 },
    { "#": "259 KENT ST (127-05-00)", $: 3706300 },
    { "#": "262 KENT ST (126-02-00)", $: 2176700 },
    { "#": "268 KENT ST (126-01-00)", $: 2106300 },
    { "#": "269 KENT ST (127-21-00)", $: 3964100 },
    { "#": "282 KENT ST (122-03-02)", $: 3050900 },
    { "#": "287 KENT ST (121-01-00.9)", $: 0 },
    { "#": "288 KENT ST (122-03-01)", $: 2302700 },
    { "#": "294 KENT ST (122-03-00)", $: 2338700 },
    { "#": "295 KENT ST (121-02-00)", $: 4216700 },
    { "#": "300 KENT ST (122-02-00.9)", $: 0 },
    { "#": "310 KENT ST (122-01-00)", $: 3912800 },
    { "#": "328 KENT ST (123-09-00)", $: 2549700 },
    { "#": "334 KENT ST (123-08-00)", $: 3656400 },
    { "#": "339 KENT ST (119-01-00)", $: 11565600 },
    { "#": "340 KENT ST (123-07-00)", $: 1857500 },
    { "#": "348 KENT ST (123-06-00)", $: 3661800 },
    { "#": "352 KENT ST (123-05-00)", $: 3139200 },
    { "#": "359 KENT ST (118-11-00)", $: 2257300 },
    { "#": "360 KENT ST (123-04-00)", $: 2829400 },
    { "#": "365 KENT ST (118-12-00)", $: 2218300 },
    { "#": "366 KENT ST (123-03-00)", $: 2650700 },
    { "#": "9 KENWOOD ST (072-02-00)", $: 2104600 },
    { "#": "12 KENWOOD ST (073-20-00)", $: 975300 },
    { "#": "12 KENWOOD ST (073-20-00.9)", $: 1304300 },
    { "#": "15 KENWOOD ST (072-03-00)", $: 2339200 },
    { "#": "16 KENWOOD ST (073-19-00)", $: 2658400 },
    { "#": "19 KENWOOD ST (072-04-00)", $: 2823200 },
    { "#": "22 KENWOOD ST (073-18-00)", $: 2467800 },
    { "#": "23 KENWOOD ST (072-05-00)", $: 935800 },
    { "#": "23 KENWOOD ST (072-05-00.9)", $: 1459e3 },
    { "#": "26 KENWOOD ST (073-17-00)", $: 2446900 },
    { "#": "27 KENWOOD ST (072-06-00)", $: 2072300 },
    { "#": "30 KENWOOD ST (073-16-00)", $: 2001600 },
    { "#": "33 KENWOOD ST (072-07-00)", $: 1801e3 },
    { "#": "34 KENWOOD ST (073-15-00)", $: 1004200 },
    { "#": "34 KENWOOD ST (073-15-00.9)", $: 1655100 },
    { "#": "37 KENWOOD ST (072-08-00)", $: 2217300 },
    { "#": "40 KENWOOD ST (073-14-00.9)", $: 0 },
    { "#": "41 KENWOOD ST (072-09-00)", $: 1932600 },
    { "#": "45 KENWOOD ST (072-10-00)", $: 899800 },
    { "#": "45 KENWOOD ST (072-10-00.9)", $: 2257300 },
    { "#": "46 KENWOOD ST (073-13-00)", $: 2163300 },
    { "#": "50 KENWOOD ST (073-12-00)", $: 3182200 },
    { "#": "51 KENWOOD ST (072-11-00)", $: 2041200 },
    { "#": "55 KENWOOD ST (072-12-00)", $: 1922900 },
    { "#": "57 KENWOOD ST (072-12-01)", $: 1703600 },
    { "#": "61 KENWOOD ST (072-13-00)", $: 2130900 },
    { "#": "63 KENWOOD ST (072-14-00.9)", $: 0 },
    { "#": "69 KENWOOD ST (072-15-00)", $: 3910200 },
    { "#": "73 KENWOOD ST (072-16-00.9)", $: 0 },
    { "#": "77 KENWOOD ST (072-17-00.9)", $: 2315300 },
    { "#": "79 KENWOOD ST (072-17-00)", $: 1097300 },
    { "#": "83 KENWOOD ST (072-18-00)", $: 2703200 },
    { "#": "0 KERRIGAN PL (185-26-01)", $: 104100 },
    { "#": "12 KERRIGAN PL (185-26-00)", $: 556800 },
    { "#": "8 KILSYTH RD (108-12-00)", $: 2728300 },
    { "#": "10 KILSYTH RD (108-11-00.9)", $: 0 },
    { "#": "12 KILSYTH RD (108-10-00.9)", $: 0 },
    { "#": "15 KILSYTH RD (107-10-00)", $: 3015700 },
    { "#": "17 KILSYTH RD (107-11-00)", $: 3310800 },
    { "#": "18 KILSYTH RD (108-09-00)", $: 962700 },
    { "#": "18 KILSYTH RD (108-09-00.9)", $: 3373700 },
    { "#": "19 KILSYTH RD (107-12-00)", $: 3112700 },
    { "#": "21 KILSYTH RD (107-13-00)", $: 2397500 },
    { "#": "23 KILSYTH RD (107-14-00)", $: 2898e3 },
    { "#": "24 KILSYTH RD (108-08-00)", $: 1982100 },
    { "#": "25 KILSYTH RD (107-15-00)", $: 2988100 },
    { "#": "27 KILSYTH RD (107-16-00)", $: 2337e3 },
    { "#": "30 KILSYTH RD (108-03-00.9)", $: 0 },
    { "#": "37 KILSYTH RD (105-07-00)", $: 2401100 },
    { "#": "41 KILSYTH RD (105-08-00)", $: 3021100 },
    { "#": "44 KILSYTH RD (108-24-00.9)", $: 0 },
    { "#": "45 KILSYTH RD (105-09-00)", $: 2528800 },
    { "#": "47 KILSYTH RD (105-09-01)", $: 2127700 },
    { "#": "48 KILSYTH RD (108-02-01.9)", $: 0 },
    { "#": "52 KILSYTH RD (108-02-00.9)", $: 0 },
    { "#": "60 KILSYTH RD (108-01-00)", $: 2570700 },
    { "#": "12 LAGRANGE ST (402-34-00)", $: 1626300 },
    { "#": "20 LAGRANGE ST (402-35-00)", $: 1973e3 },
    { "#": "24 LAGRANGE ST (402-36-00)", $: 1015100 },
    { "#": "27 LAGRANGE ST (408-12-00)", $: 1113100 },
    { "#": "34 LAGRANGE ST (402-38-39)", $: 2413e3 },
    { "#": "39 LAGRANGE ST (408-13-00)", $: 1400800 },
    { "#": "45 LAGRANGE ST (408-14-00)", $: 1163100 },
    { "#": "48 LAGRANGE ST (403-01-00)", $: 905100 },
    { "#": "54 LAGRANGE ST (403-03-00)", $: 897400 },
    { "#": "55 LAGRANGE ST (408-15-00)", $: 1149300 },
    { "#": "65 LAGRANGE ST (408-16-00)", $: 1192700 },
    { "#": "71 LAGRANGE ST (408-17-00)", $: 1562400 },
    { "#": "78 LAGRANGE ST (405-07-00)", $: 1675400 },
    { "#": "81 LAGRANGE ST (408-18-00)", $: 2470900 },
    { "#": "91 LAGRANGE ST (408-19-00)", $: 1393500 },
    { "#": "98 LAGRANGE ST (405-08-00)", $: 1227100 },
    { "#": "101 LAGRANGE ST (408-20-00)", $: 1211400 },
    { "#": "104 LAGRANGE ST (405-09-00)", $: 2483400 },
    { "#": "116 LAGRANGE ST (405-10-11)", $: 1953e3 },
    { "#": "130 LAGRANGE ST (406-01-00)", $: 2291300 },
    { "#": "135 LAGRANGE ST (409-01-02)", $: 2461600 },
    { "#": "142 LAGRANGE ST (406-14-00)", $: 1425600 },
    { "#": "145 LAGRANGE ST (409-02-00)", $: 1550200 },
    { "#": "150 LAGRANGE ST (406-13-00)", $: 1814400 },
    { "#": "164 LAGRANGE ST (407-02-00)", $: 1396600 },
    { "#": "176 LAGRANGE ST (407-01-00)", $: 789200 },
    { "#": "0 LANARK RD (108-22-00.9)", $: 0 },
    { "#": "0 LANARK RD (108-23-00.9)", $: 0 },
    { "#": "6 LANARK RD (109-01-00.9)", $: 0 },
    { "#": "11 LANARK RD (108-19-02)", $: 2406300 },
    { "#": "15 LANARK RD (108-19-01)", $: 2525600 },
    { "#": "19 LANARK RD (108-20-00)", $: 86800 },
    { "#": "23 LANARK RD (108-21-00)", $: 879600 },
    { "#": "0 LANCASTER TER (091-35-01)", $: 16500 },
    { "#": "19 LANCASTER TER (089-11-00.9)", $: 0 },
    { "#": "33 LANCASTER TER (089-12-13)", $: 15204700 },
    { "#": "48 LANCASTER TER (091-73-00)", $: 2336300 },
    { "#": "50 LANCASTER TER (091-72-00.9)", $: 0 },
    { "#": "54 LANCASTER TER (091-71-00.9)", $: 0 },
    { "#": "58 LANCASTER TER (091-70-00)", $: 1702100 },
    { "#": "69 LANCASTER TER (088-18-00)", $: 1270300 },
    { "#": "78 LANCASTER TER (091-68-00)", $: 2697e3 },
    { "#": "79 LANCASTER TER (088-19-00)", $: 2244600 },
    { "#": "82 LANCASTER TER (091-67-00)", $: 2733100 },
    { "#": "85 LANCASTER TER (088-20-00)", $: 1706300 },
    { "#": "88 LANCASTER TER (091-66-00)", $: 2449700 },
    { "#": "92 LANCASTER TER (091-65-00)", $: 1968200 },
    { "#": "93 LANCASTER TER (088-21-22)", $: 1580600 },
    { "#": "98 LANCASTER TER (091-64-00)", $: 1998300 },
    { "#": "99 LANCASTER TER (088-23-00)", $: 1440400 },
    { "#": "105 LANCASTER TER (088-24-00)", $: 1375100 },
    { "#": "112 LANCASTER TER (091-63-00)", $: 3157900 },
    { "#": "114 LANCASTER TER (091-62-00.9)", $: 0 },
    { "#": "115 LANCASTER TER (088-25-26)", $: 2285200 },
    { "#": "118 LANCASTER TER (091-61-00)", $: 2152900 },
    { "#": "119 LANCASTER TER (088-27-00)", $: 1776400 },
    { "#": "122 LANCASTER TER (091-60-00)", $: 1524900 },
    { "#": "126 LANCASTER TER (091-59-00)", $: 2155100 },
    { "#": "128 LANCASTER TER (091-58-00)", $: 2003200 },
    { "#": "130 LANCASTER TER (091-57-00)", $: 2063200 },
    { "#": "130 LANCASTER TER (091-57-00.9)", $: 2063200 },
    { "#": "138 LANCASTER TER (091-56-00)", $: 2565300 },
    { "#": "146 LANCASTER TER (091-54-00)", $: 2463600 },
    { "#": "150 LANCASTER TER (091-53-00)", $: 1613800 },
    { "#": "156 LANCASTER TER (091-52-00)", $: 2316700 },
    { "#": "160 LANCASTER TER (091-51-00)", $: 1739900 },
    { "#": "166 LANCASTER TER (091-50-00)", $: 3137100 },
    { "#": "184 LANCASTER TER (086A-07-00)", $: 2375100 },
    { "#": "190 LANCASTER TER (086A-06-00)", $: 2567100 },
    { "#": "194 LANCASTER TER (086A-05-00)", $: 1701400 },
    { "#": "200 LANCASTER TER (086A-04-01)", $: 1773800 },
    { "#": "204 LANCASTER TER (086A-04-00)", $: 1923700 },
    { "#": "35 LAPLAND ST (440-02-12)", $: 19886100 },
    { "#": "11 LARKIN RD (343-14-00)", $: 1294200 },
    { "#": "12 LARKIN RD (342-04-06.9)", $: 0 },
    { "#": "15 LARKIN RD (343-13-00)", $: 1305700 },
    { "#": "17 LARKIN RD (343-03-00)", $: 969100 },
    { "#": "21 LARKIN RD (343-04-00)", $: 834600 },
    { "#": "11 LAUREL RD (421-11-00)", $: 4478200 },
    { "#": "17 LAUREL RD (421-10-00)", $: 3337900 },
    { "#": "27 LAUREL RD (421-08-00)", $: 4469200 },
    { "#": "28 LAUREL RD (420-14-00)", $: 4188e3 },
    { "#": "42 LAUREL RD (420-15-00)", $: 4268700 },
    { "#": "45 LAUREL RD (421-06-00)", $: 4015300 },
    { "#": "48 LAUREL RD (420-16-00)", $: 6206900 },
    { "#": "57 LAUREL RD (421-05-00)", $: 3864200 },
    { "#": "66 LAUREL RD (420-17-00)", $: 4771200 },
    { "#": "73 LAUREL RD (421-04-00)", $: 4536200 },
    { "#": "76 LAUREL RD (420-18-19)", $: 7257300 },
    { "#": "88 LAUREL RD (420-20-00)", $: 3443600 },
    { "#": "97 LAUREL RD (421-01-00)", $: 4081200 },
    { "#": "106 LAUREL RD (419B-08-01)", $: 3952e3 },
    { "#": "111 LAUREL RD (419-18-00)", $: 4354600 },
    { "#": "116 LAUREL RD (419B-09-01)", $: 5572900 },
    { "#": "121 LAUREL RD (419-17-00)", $: 5272600 },
    { "#": "128 LAUREL RD (419B-10-00)", $: 3126300 },
    { "#": "131 LAUREL RD (419-16-00)", $: 3991600 },
    { "#": "136 LAUREL RD (419B-11-00)", $: 3290300 },
    { "#": "143 LAUREL RD (419-15-00)", $: 4169700 },
    { "#": "151 LAUREL RD (419-14-00)", $: 3576600 },
    { "#": "160 LAUREL RD (419A-09-00)", $: 3619900 },
    { "#": "167 LAUREL RD (419-19-00)", $: 2690700 },
    { "#": "173 LAUREL RD (419-12-02)", $: 4144300 },
    { "#": "174 LAUREL RD (419A-01-02)", $: 2381200 },
    { "#": "181 LAUREL RD (419-11-00)", $: 3176700 },
    { "#": "186 LAUREL RD (419A-03-00)", $: 2544900 },
    { "#": "3 LAWRENCE RD (126-34-00)", $: 271e4 },
    { "#": "7 LAWRENCE RD (126-35-00)", $: 2698300 },
    { "#": "11 LAWRENCE RD (126-36-00)", $: 2006600 },
    { "#": "12 LAWRENCE RD (126-37-00)", $: 2853100 },
    { "#": "21 LAWTON ST (069-25-00)", $: 918e3 },
    { "#": "21 LAWTON ST (069-25-00.9)", $: 1137400 },
    { "#": "27 LAWTON ST (069-26-00)", $: 2073900 },
    { "#": "33 LAWTON ST (069-27-00)", $: 2098900 },
    { "#": "38 LAWTON ST (070-17-00)", $: 2488200 },
    { "#": "39 LAWTON ST (069-28-00)", $: 2550600 },
    { "#": "45 LAWTON ST (069-29-00.9)", $: 0 },
    { "#": "48 LAWTON ST (070-16-00)", $: 2385e3 },
    { "#": "53 LAWTON ST (069-30-00)", $: 2879100 },
    { "#": "54 LAWTON ST (070-15-00.9)", $: 0 },
    { "#": "57 LAWTON ST (069-31-00)", $: 2495600 },
    { "#": "57 LAWTON ST (069-31-00.9)", $: 2620400 },
    { "#": "60 LAWTON ST (070-14-00)", $: 2106200 },
    { "#": "63 LAWTON ST (069-32-00)", $: 2064300 },
    { "#": "66 LAWTON ST (070-13-00)", $: 2696e3 },
    { "#": "66 LAWTON ST (070-13-00.9)", $: 2821300 },
    { "#": "71 LAWTON ST (069-33-00)", $: 2072700 },
    { "#": "74 LAWTON ST (070-12-00)", $: 251e4 },
    { "#": "78 LAWTON ST (070-11-00)", $: 1765700 },
    { "#": "79 LAWTON ST (069-34-00)", $: 1980400 },
    { "#": "84 LAWTON ST (070-10-00)", $: 2077400 },
    { "#": "85 LAWTON ST (069-35-00)", $: 1944200 },
    { "#": "90 LAWTON ST (070-09-00)", $: 852700 },
    { "#": "90 LAWTON ST (070-09-00.9)", $: 2111100 },
    { "#": "93 LAWTON ST (069-36-00)", $: 2628600 },
    { "#": "96 LAWTON ST (070-08-00)", $: 2166700 },
    { "#": "102 LAWTON ST (070-07-00)", $: 1795800 },
    { "#": "103 LAWTON ST (069-37-00)", $: 2743e3 },
    { "#": "105 LAWTON ST (069-38-00)", $: 1956e3 },
    { "#": "108 LAWTON ST (070-06-00)", $: 2015600 },
    { "#": "112 LAWTON ST (070-05-00)", $: 1622200 },
    { "#": "115 LAWTON ST (069-39-40)", $: 2645700 },
    { "#": "116 LAWTON ST (070-03-00)", $: 2595100 },
    { "#": "156 LAWTON ST (070-02-00)", $: 5637600 },
    { "#": "25 LEE ST (336-19-00)", $: 1375800 },
    { "#": "31 LEE ST (336-18-00)", $: 1369e3 },
    { "#": "37 LEE ST (336-17-00)", $: 2059400 },
    { "#": "49 LEE ST (336-16-00)", $: 3470400 },
    { "#": "55 LEE ST (336-15-00)", $: 2819e3 },
    { "#": "75 LEE ST (336-13-00)", $: 2598200 },
    { "#": "83 LEE ST (336-12-00)", $: 3415300 },
    { "#": "97 LEE ST (336-11-00)", $: 4494600 },
    { "#": "109 LEE ST (336-09-10)", $: 4992800 },
    { "#": "125 LEE ST (336-08-00)", $: 2655e3 },
    { "#": "145 LEE ST (336-07-00)", $: 4443100 },
    { "#": "182 LEE ST (349-11-00)", $: 2337100 },
    { "#": "190 LEE ST (349-10-00)", $: 3628500 },
    { "#": "195 LEE ST (338-04-05)", $: 5768600 },
    { "#": "210 LEE ST (349-09-00)", $: 1980500 },
    { "#": "220 LEE ST (349-08-00)", $: 2053100 },
    { "#": "225 LEE ST (338-08-00)", $: 2523e3 },
    { "#": "240 LEE ST (349-07-00)", $: 4468500 },
    { "#": "250 LEE ST (349-06-00)", $: 3645900 },
    { "#": "260 LEE ST (349-05-00)", $: 3540400 },
    { "#": "269 LEE ST (338-12-19)", $: 2887e3 },
    { "#": "280 LEE ST (349-03-00)", $: 5894e3 },
    { "#": "295 LEE ST (338-14-15)", $: 3964400 },
    { "#": "315 LEE ST (339-01-02)", $: 7558100 },
    { "#": "330 LEE ST (347-11-00)", $: 2789900 },
    { "#": "333 LEE ST (339-03-00)", $: 16900200 },
    { "#": "346 LEE ST (347-10-00)", $: 3205900 },
    { "#": "360 LEE ST (347-09-01)", $: 2685100 },
    { "#": "370 LEE ST (347-09-00)", $: 2765300 },
    { "#": "375 LEE ST (339-05-01)", $: 6388e3 },
    { "#": "382 LEE ST (347-08-00)", $: 5235700 },
    { "#": "385 LEE ST (339-06-00)", $: 1445300 },
    { "#": "393 LEE ST (339-06-01)", $: 1566200 },
    { "#": "396 LEE ST (347-17-00)", $: 2308200 },
    { "#": "403 LEE ST (339-06-02)", $: 1300100 },
    { "#": "408 LEE ST (347-06-00)", $: 16e5 },
    { "#": "23 LEICESTER ST (254-10-00)", $: 4216200 },
    { "#": "33 LEICESTER ST (254-11-00)", $: 5218700 },
    { "#": "45 LEICESTER ST (254-12-00)", $: 7942700 },
    { "#": "55 LEICESTER ST (254-13-00)", $: 9680200 },
    { "#": "71 LEICESTER ST (254-14-00)", $: 5267300 },
    { "#": "83 LEICESTER ST (254-15-01)", $: 6699600 },
    { "#": "5 LELAND RD (366-01-00)", $: 972500 },
    { "#": "6 LELAND RD (367-14-00)", $: 924700 },
    { "#": "9 LELAND RD (366-03-00)", $: 1074500 },
    { "#": "10 LELAND RD (367-13-00)", $: 926500 },
    { "#": "14 LELAND RD (367-12-00)", $: 1017200 },
    { "#": "15 LELAND RD (366-04-00)", $: 893100 },
    { "#": "18 LELAND RD (367-11-00)", $: 728800 },
    { "#": "21 LELAND RD (366-05-00)", $: 843500 },
    { "#": "22 LELAND RD (367-10-00)", $: 1386500 },
    { "#": "25 LELAND RD (366-06-00)", $: 636e3 },
    { "#": "26 LELAND RD (367-09-00)", $: 1437500 },
    { "#": "33 LELAND RD (366-07-00)", $: 1339900 },
    { "#": "34 LELAND RD (367-07-00)", $: 692700 },
    { "#": "40 LELAND RD (367-05-00)", $: 1014900 },
    { "#": "41 LELAND RD (366-08-00)", $: 1329400 },
    { "#": "45 LELAND RD (366-08-01)", $: 877500 },
    { "#": "46 LELAND RD (367-03-04)", $: 927e3 },
    { "#": "51 LELAND RD (366-09-10)", $: 995600 },
    { "#": "54 LELAND RD (367-01-02)", $: 1087900 },
    { "#": "55 LELAND RD (366-11-00)", $: 949600 },
    { "#": "59 LELAND RD (366-12-00)", $: 1017300 },
    { "#": "65 LELAND RD (366-13-00)", $: 151900 },
    { "#": "10 LENOX ST (004-02-00)", $: 9660500 },
    { "#": "25 LENOX ST (006A-03-00)", $: 3977900 },
    { "#": "39 LENOX ST (006A-04-00)", $: 2084900 },
    { "#": "170 LENOX ST (006A-02-00)", $: 1477400 },
    { "#": "7 LEVERETT ST (186-05-00.9)", $: 0 },
    { "#": "8 LEVERETT ST (187-03-04)", $: 3350200 },
    { "#": "8 LEVERETT ST (187-03-04.9)", $: 0 },
    { "#": "9 LEVERETT ST (186-05-01)", $: 1594600 },
    { "#": "10 LEVERETT ST (187-02-00)", $: 882100 },
    { "#": "11 LEVERETT ST (186-06-00)", $: 1576900 },
    { "#": "14 LEVERETT ST (187-01-00)", $: 2842800 },
    { "#": "15 LEVERETT ST (186-06-01)", $: 374500 },
    { "#": "22 LEVERETT ST (189-01-03)", $: 1375100 },
    { "#": "4 LINCOLN RD (198-05-00)", $: 1994300 },
    { "#": "5 LINCOLN RD (199-15-00)", $: 1988300 },
    { "#": "8 LINCOLN RD (198-04-00.9)", $: 0 },
    { "#": "9 LINCOLN RD (199-16-00)", $: 2059400 },
    { "#": "12 LINCOLN RD (198-03-00)", $: 1978100 },
    { "#": "15 LINCOLN RD (199-17-00)", $: 2208400 },
    { "#": "16 LINCOLN RD (198-02-00)", $: 1736e3 },
    { "#": "4 LINDEN CT (147-07-00.9)", $: 0 },
    { "#": "8 LINDEN CT (147-06-00.9)", $: 0 },
    { "#": "5 LINDEN PL (148-03-00)", $: 14820600 },
    { "#": "11 LINDEN PL (149-25-00.9)", $: 0 },
    { "#": "12 LINDEN PL (149-24-05)", $: 1498300 },
    { "#": "12 LINDEN PL (149-24-06)", $: 1883800 },
    { "#": "14 LINDEN PL (149-24-03)", $: 1479400 },
    { "#": "14 LINDEN PL (149-24-04)", $: 1485600 },
    { "#": "16 LINDEN PL (149-24-01)", $: 1651200 },
    { "#": "16 LINDEN PL (149-24-02)", $: 1379400 },
    { "#": "18 LINDEN PL (149-24-00)", $: 2024400 },
    { "#": "20 LINDEN PL (149-23-01)", $: 1119200 },
    { "#": "21 LINDEN PL (147-08-00)", $: 1913200 },
    { "#": "22 LINDEN PL (149-22-23)", $: 8005700 },
    { "#": "29 LINDEN PL (147-09-00.9)", $: 0 },
    { "#": "31 LINDEN PL (147-10-00)", $: 5078e3 },
    { "#": "37 LINDEN PL (147-11-00)", $: 1571300 },
    { "#": "39 LINDEN PL (147-12-00)", $: 1566200 },
    { "#": "45 LINDEN PL (147-13-00)", $: 2014300 },
    { "#": "46 LINDEN PL (146-05-00)", $: 2769900 },
    { "#": "48 LINDEN PL (146-04-00)", $: 1499800 },
    { "#": "50 LINDEN PL (146-03-01)", $: 2554100 },
    { "#": "54 LINDEN PL (146-03-00.9)", $: 0 },
    { "#": "62 LINDEN PL (146-02-00)", $: 1679300 },
    { "#": "64 LINDEN PL (146-01-00)", $: 2679600 },
    { "#": "30 LINDEN SQ (150-01-00)", $: 1249500 },
    { "#": "7 LINDEN ST (141-09-00)", $: 1816200 },
    { "#": "9 LINDEN ST (141-10-00.9)", $: 0 },
    { "#": "10 LINDEN ST (141-10-01)", $: 645300 },
    { "#": "12 LINDEN ST (141-11-00.9)", $: 0 },
    { "#": "13 LINDEN ST (141-12-00.9)", $: 0 },
    { "#": "15 LINDEN ST (147-06-01)", $: 1489200 },
    { "#": "19 LINDEN ST (141-13-00)", $: 2580600 },
    { "#": "22 LINDEN ST (147-05-00)", $: 1914700 },
    { "#": "25 LINDEN ST (141-14-00)", $: 2919500 },
    { "#": "26 LINDEN ST (147-04-00.9)", $: 0 },
    { "#": "29 LINDEN ST (141-15-00)", $: 1765300 },
    { "#": "31 LINDEN ST (141-16-00)", $: 1756100 },
    { "#": "32 LINDEN ST (147-03-00)", $: 5197200 },
    { "#": "33 LINDEN ST (141-17-00)", $: 2332200 },
    { "#": "35 LINDEN ST (141-18-00)", $: 2265900 },
    { "#": "38 LINDEN ST (147-02-00.9)", $: 0 },
    { "#": "38 LINDEN ST (147-02-00.9)", $: 0 },
    { "#": "39 LINDEN ST (141-19-00)", $: 1856500 },
    { "#": "41 LINDEN ST (141-19-01.9)", $: 0 },
    { "#": "43 LINDEN ST (141-19-03.9)", $: 0 },
    { "#": "44 LINDEN ST (147-01-00)", $: 2803100 },
    { "#": "45 LINDEN ST (141-19-02)", $: 221e4 },
    { "#": "52 LINDEN ST (146-25-00)", $: 1659700 },
    { "#": "53 LINDEN ST (141-19-04)", $: 3054700 },
    { "#": "55 LINDEN ST (141-20-00)", $: 1914400 },
    { "#": "56 LINDEN ST (146-24-00.9)", $: 0 },
    { "#": "59 LINDEN ST (141-20-01)", $: 2066100 },
    { "#": "60 LINDEN ST (146-23-00.9)", $: 0 },
    { "#": "61 LINDEN ST (141-20-02.9)", $: 0 },
    { "#": "64 LINDEN ST (146-22-00.9)", $: 0 },
    { "#": "65 LINDEN ST (141-21-00)", $: 1783e3 },
    { "#": "66 LINDEN ST (146-21-00.9)", $: 1491500 },
    { "#": "68 LINDEN ST (146-21-00)", $: 1403500 },
    { "#": "69 LINDEN ST (141-21-01)", $: 1779300 },
    { "#": "72 LINDEN ST (146-20-00)", $: 2186700 },
    { "#": "7 LITTELL RD (157-04-00)", $: 2477900 },
    { "#": "8 LITTELL RD (156-08-00)", $: 2546700 },
    { "#": "11 LITTELL RD (157-05-00)", $: 2131400 },
    { "#": "12 LITTELL RD (156-07-00)", $: 1148e3 },
    { "#": "12 LITTELL RD (156-07-00.9)", $: 1488300 },
    { "#": "16 LITTELL RD (156-06-00.9)", $: 0 },
    { "#": "17 LITTELL RD (157-06-00)", $: 3098e3 },
    { "#": "20 LITTELL RD (156-05-00)", $: 2382800 },
    { "#": "21 LITTELL RD (157-07-00)", $: 2004200 },
    { "#": "24 LITTELL RD (156-04-00)", $: 1529200 },
    { "#": "24 LITTELL RD (156-04-00.9)", $: 3152100 },
    { "#": "25 LITTELL RD (157-08-00)", $: 2494600 },
    { "#": "28 LITTELL RD (156-02-03)", $: 5412600 },
    { "#": "29 LITTELL RD (157-09-00)", $: 1893600 },
    { "#": "5 LONGWOOD AVE (162-03-00)", $: 7772500 },
    { "#": "11 LONGWOOD AVE (162-01-00.9)", $: 0 },
    { "#": "21 LONGWOOD AVE (158-11-00)", $: 4515100 },
    { "#": "27 LONGWOOD AVE (158-12-00)", $: 2255300 },
    { "#": "29 LONGWOOD AVE (158-13-00)", $: 1977300 },
    { "#": "30 LONGWOOD AVE (159-01-00.9)", $: 0 },
    { "#": "31 LONGWOOD AVE (158-14-00)", $: 1977300 },
    { "#": "33 LONGWOOD AVE (158-15-00.9)", $: 0 },
    { "#": "36 LONGWOOD AVE (159-12-00)", $: 5876600 },
    { "#": "36 LONGWOOD AVE (159-12-00.9)", $: 1553300 },
    { "#": "40 LONGWOOD AVE (159-11-00)", $: 12543900 },
    { "#": "45 LONGWOOD AVE (158-16-00.9)", $: 0 },
    { "#": "50 LONGWOOD AVE (159-04-00.9)", $: 0 },
    { "#": "57 LONGWOOD AVE (158-19-00)", $: 4493100 },
    { "#": "59 LONGWOOD AVE (158-20-00.9)", $: 0 },
    { "#": "61 LONGWOOD AVE (158-21-00.9)", $: 0 },
    { "#": "63 LONGWOOD AVE (158-22-00.9)", $: 0 },
    { "#": "83 LONGWOOD AVE (126-50-00)", $: 3160200 },
    { "#": "89 LONGWOOD AVE (126-51-00)", $: 10070200 },
    { "#": "94 LONGWOOD AVE (125-21-00)", $: 11363600 },
    { "#": "101 LONGWOOD AVE (126-52-00)", $: 2065600 },
    { "#": "103 LONGWOOD AVE (126-52-01)", $: 1723600 },
    { "#": "105 LONGWOOD AVE (126-52-02)", $: 2054800 },
    { "#": "106 LONGWOOD AVE (125-19-20)", $: 18431600 },
    { "#": "111 LONGWOOD AVE (126-53-00)", $: 2026800 },
    { "#": "115 LONGWOOD AVE (126-54-00)", $: 2218100 },
    { "#": "121 LONGWOOD AVE (126-54-01.9)", $: 0 },
    { "#": "123 LONGWOOD AVE (126-55-00)", $: 3886800 },
    { "#": "124 LONGWOOD AVE (125-18-00.9)", $: 0 },
    { "#": "126 LONGWOOD AVE (125-17-00.9)", $: 0 },
    { "#": "128 LONGWOOD AVE (125-16-00)", $: 3543100 },
    { "#": "130 LONGWOOD AVE (125-15-00.9)", $: 0 },
    { "#": "131 LONGWOOD AVE (126-10-00)", $: 20811300 },
    { "#": "138 LONGWOOD AVE (122-04-03)", $: 2452800 },
    { "#": "141 LONGWOOD AVE (126-57-00)", $: 2433800 },
    { "#": "143 LONGWOOD AVE (126-58-00.9)", $: 0 },
    { "#": "144 LONGWOOD AVE (122-04-02)", $: 2221200 },
    { "#": "145 LONGWOOD AVE (126-59-00)", $: 3166400 },
    { "#": "147 LONGWOOD AVE (126-60-00.9)", $: 0 },
    { "#": "149 LONGWOOD AVE (126-61-00.9)", $: 0 },
    { "#": "150 LONGWOOD AVE (122-04-01)", $: 1662100 },
    { "#": "151 LONGWOOD AVE (126-62-00.9)", $: 0 },
    { "#": "155 LONGWOOD AVE (126-63-00)", $: 2534100 },
    { "#": "156 LONGWOOD AVE (122-04-00)", $: 179e4 },
    { "#": "159 LONGWOOD AVE (126-64-00)", $: 3692800 },
    { "#": "165 LONGWOOD AVE (126-65-00)", $: 201e4 },
    { "#": "173 LONGWOOD AVE (126-66-00)", $: 2078700 },
    { "#": "191 LONGWOOD AVE (127-22-00.9)", $: 0 },
    { "#": "197 LONGWOOD AVE (127-03-00.9)", $: 0 },
    { "#": "201 LONGWOOD AVE (127-02-00.9)", $: 0 },
    { "#": "70 LOUISE RD (418-22-00)", $: 14300 },
    { "#": "80 LOUISE RD (418-23-00)", $: 24e3 },
    { "#": "92 LOUISE RD (418-24-00)", $: 24200 },
    { "#": "102 LOUISE RD (418-25-00)", $: 17300 },
    { "#": "110 LOUISE RD (418-26-00)", $: 5600 },
    { "#": "10 LOVELAND RD (269A-14-00)", $: 1214900 },
    { "#": "11 LOVELAND RD (269-12-00.9)", $: 0 },
    { "#": "12 LOVELAND RD (269A-13-00)", $: 1356e3 },
    { "#": "16 LOVELAND RD (269A-12-00)", $: 1002500 },
    { "#": "20 LOVELAND RD (269A-11-00)", $: 1624100 },
    { "#": "21 LOVELAND RD (269-13-00)", $: 2292500 },
    { "#": "22 LOVELAND RD (269A-10-00)", $: 986200 },
    { "#": "23 LOVELAND RD (269-13-05.9)", $: 1626e3 },
    { "#": "26 LOVELAND RD (269A-09-00)", $: 1205200 },
    { "#": "30 LOVELAND RD (269A-08-00)", $: 1028900 },
    { "#": "31 LOVELAND RD (269-14-00)", $: 1112100 },
    { "#": "32 LOVELAND RD (269A-07-00)", $: 1952200 },
    { "#": "35 LOVELAND RD (269-15-00)", $: 1018500 },
    { "#": "36 LOVELAND RD (269A-06-01)", $: 1817300 },
    { "#": "36 LOVELAND RD (269A-06-01.9)", $: 1908200 },
    { "#": "39 LOVELAND RD (269-16-00)", $: 1060200 },
    { "#": "42 LOVELAND RD (269A-05-00)", $: 1902200 },
    { "#": "43 LOVELAND RD (269-16-01)", $: 1042700 },
    { "#": "48 LOVELAND RD (269A-04-00.9)", $: 0 },
    { "#": "52 LOVELAND RD (269A-02-00)", $: 1133e3 },
    { "#": "20 LOWELL LN (337-15-00)", $: 7579200 },
    { "#": "36 LOWELL LN (337-16-00)", $: 8871600 },
    { "#": "8 LOWELL RD (201-16-01)", $: 2133300 },
    { "#": "11 LOWELL RD (202-02-00)", $: 2212200 },
    { "#": "12 LOWELL RD (201-16-00)", $: 2440100 },
    { "#": "17 LOWELL RD (202-03-00)", $: 1977500 },
    { "#": "18 LOWELL RD (201-15-00)", $: 57900 },
    { "#": "21 LOWELL RD (202-04-00)", $: 2088600 },
    { "#": "22 LOWELL RD (201-14-00)", $: 2574200 },
    { "#": "29 LOWELL RD (202-05-00)", $: 2283300 },
    { "#": "32 LOWELL RD (201-13-00)", $: 2165600 },
    { "#": "37 LOWELL RD (202-06-00)", $: 2211700 },
    { "#": "42 LOWELL RD (201-12-00)", $: 2363e3 },
    { "#": "10 LYMAN RD (437-39-00)", $: 6913600 },
    { "#": "30 LYMAN RD (437-38-00)", $: 6845200 },
    { "#": "33 LYMAN RD (437-25-00)", $: 7716300 },
    { "#": "45 LYMAN RD (437-26-00)", $: 5451400 },
    { "#": "50 LYMAN RD (437-37-00)", $: 7365e3 },
    { "#": "55 LYMAN RD (437-27-01)", $: 8107800 },
    { "#": "60 LYMAN RD (437-36-00)", $: 2194900 },
    { "#": "70 LYMAN RD (437-35-00)", $: 3914100 },
    { "#": "80 LYMAN RD (437-34-00)", $: 5642800 },
    { "#": "96 LYMAN RD (437-33-00)", $: 4124100 },
    { "#": "99 LYMAN RD (437-28-00)", $: 3265100 },
    { "#": "105 LYMAN RD (437-29-00)", $: 3851900 },
    { "#": "110 LYMAN RD (437-32-00)", $: 5049700 },
    { "#": "111 LYMAN RD (437-30-00)", $: 2043e3 },
    { "#": "117 LYMAN RD (437-31-00)", $: 4342900 },
    { "#": "8 LYON RD (423-01-01)", $: 1958700 },
    { "#": "11 LYON RD (423-02-04)", $: 1950800 },
    { "#": "12 LYON RD (423-01-02)", $: 1442500 },
    { "#": "19 LYON RD (423-02-05)", $: 2462400 },
    { "#": "20 LYON RD (423-02-07)", $: 688300 },
    { "#": "20 LYON RD (423-43-00)", $: 2378600 },
    { "#": "27 LYON RD (423-02-06)", $: 1111600 },
    { "#": "28 LYON RD (423-02-08)", $: 650900 },
    { "#": "28 LYON RD (423-45-00)", $: 847500 },
    { "#": "30 LYON RD (423-44-00)", $: 2757100 },
    { "#": "11 MANCHESTER RD (053-02-00)", $: 2214400 },
    { "#": "12 MANCHESTER RD (049-02-00)", $: 1915100 },
    { "#": "16 MANCHESTER RD (049-01-00)", $: 2611900 },
    { "#": "17 MANCHESTER RD (053-03-00)", $: 3438e3 },
    { "#": "23 MANCHESTER RD (053-04-00.9)", $: 0 },
    { "#": "28 MANCHESTER RD (052-08-00.9)", $: 0 },
    { "#": "29 MANCHESTER RD (053-05-00)", $: 2703e3 },
    { "#": "32 MANCHESTER RD (052-07-00)", $: 1579700 },
    { "#": "33 MANCHESTER RD (053-06-00)", $: 3692400 },
    { "#": "34 MANCHESTER RD (052-06-00)", $: 2437200 },
    { "#": "41 MANCHESTER RD (053-07-00)", $: 1697200 },
    { "#": "42 MANCHESTER RD (052-05-00)", $: 3299500 },
    { "#": "47 MANCHESTER RD (053-08-00)", $: 1481100 },
    { "#": "48 MANCHESTER RD (052-04-00)", $: 3205200 },
    { "#": "51 MANCHESTER RD (053-09-00.9)", $: 0 },
    { "#": "58 MANCHESTER RD (052-02-03)", $: 2897100 },
    { "#": "5 MANTON TER (071-31-00)", $: 7100 },
    { "#": "7 MANTON TER (071-32-00)", $: 1030400 },
    { "#": "7 MANTON TER (071-32-00.9)", $: 1251600 },
    { "#": "8 MANTON TER (071-33-00)", $: 2399700 },
    { "#": "5 MAPLE ST (308-36-00)", $: 3593200 },
    { "#": "12 MAPLE ST (312-09-00)", $: 3516400 },
    { "#": "18 MAPLE ST (312-08-00)", $: 1712900 },
    { "#": "14 MARION ST (167-22-00)", $: 6004900 },
    { "#": "20 MARION ST (167-21-00)", $: 3956200 },
    { "#": "20 MARION ST (167-21-00.9)", $: 0 },
    { "#": "24 MARION ST (167-20-00.9)", $: 0 },
    { "#": "25 MARION ST (164-07-00.9)", $: 0 },
    { "#": "41 MARION ST (164-08-00)", $: 7871300 },
    { "#": "44 MARION ST (167-18-00)", $: 2285500 },
    { "#": "45 MARION ST (164-09-00)", $: 22271100 },
    { "#": "49 MARION ST (164-10-01)", $: 18468300 },
    { "#": "59 MARION ST (164-11-00)", $: 5126800 },
    { "#": "67 MARION ST (165-01-00.9)", $: 0 },
    { "#": "77 MARION ST (165-02-00)", $: 34597e3 },
    { "#": "88 MARION ST (214-36-00.9)", $: 0 },
    { "#": "89 MARION ST (165-05-00)", $: 4308600 },
    { "#": "91 MARION ST (165-06-10)", $: 3300200 },
    { "#": "93 MARION ST (165-07-00.9)", $: 0 },
    { "#": "97 MARION ST (165-08-00.9)", $: 0 },
    { "#": "99 MARION ST (165-09-00.9)", $: 0 },
    { "#": "100 MARION ST (214-35-00.9)", $: 0 },
    { "#": "102 MARION ST (214-35-01)", $: 1300 },
    { "#": "105 MARION ST (165-10-00)", $: 2309800 },
    { "#": "111 MARION ST (165-11-00)", $: 3129900 },
    { "#": "111 MARION ST (165-11-00.9)", $: 3129900 },
    { "#": "7 MARION TER (167-15-00.9)", $: 0 },
    { "#": "0 MARSHAL ST (124-29-04.9)", $: 0 },
    { "#": "0 MARSHAL ST (124-29-04.9)", $: 0 },
    { "#": "12 MARSHAL ST (125-13-14.9)", $: 0 },
    { "#": "14 MARSHAL ST (125-12-00.9)", $: 0 },
    { "#": "19 MARSHAL ST (122-05-00)", $: 2480100 },
    { "#": "20 MARSHAL ST (125-08-00.9)", $: 0 },
    { "#": "25 MARSHAL ST (122-05-01)", $: 2451300 },
    { "#": "39 MARSHAL ST (123-12-00)", $: 3103600 },
    { "#": "45 MARSHAL ST (123-13-00)", $: 2439700 },
    { "#": "48 MARSHAL ST (124-21-00.9)", $: 0 },
    { "#": "50 MARSHAL ST (124-20-00.9)", $: 0 },
    { "#": "51 MARSHAL ST (123-14-00)", $: 1981300 },
    { "#": "54 MARSHAL ST (124-19-00)", $: 2875700 },
    { "#": "56 MARSHAL ST (124-18-00.9)", $: 0 },
    { "#": "58 MARSHAL ST (124-17-00.9)", $: 0 },
    { "#": "59 MARSHAL ST (123-15-00)", $: 1796600 },
    { "#": "60 MARSHAL ST (124-16-00.9)", $: 0 },
    { "#": "65 MARSHAL ST (123-16-00)", $: 1470400 },
    { "#": "66 MARSHAL ST (124-15-00.9)", $: 0 },
    { "#": "68 MARSHAL ST (124-14-00.9)", $: 0 },
    { "#": "69 MARSHAL ST (123-17-00)", $: 1588800 },
    { "#": "70 MARSHAL ST (124-13-00.9)", $: 0 },
    { "#": "76 MARSHAL ST (124-12-00.9)", $: 0 },
    { "#": "23 MARTHAS LN (417-04-02)", $: 2333600 },
    { "#": "25 MARTHAS LN (417-04-01)", $: 3290500 },
    { "#": "26 MARTHAS LN (416-25-00)", $: 1995e3 },
    { "#": "33 MARTHAS LN (417-03-00)", $: 1773200 },
    { "#": "34 MARTHAS LN (416-26-00)", $: 1747800 },
    { "#": "44 MARTHAS LN (416-27-00)", $: 2029600 },
    { "#": "45 MARTHAS LN (417-02-00)", $: 2449500 },
    { "#": "53 MARTHAS LN (417-01-00)", $: 2889700 },
    { "#": "1 MASON ST (014-04-00)", $: 6213100 },
    { "#": "8 MASON ST (013-01-00)", $: 4277500 },
    { "#": "11 MASON ST (014-05-00)", $: 4539100 },
    { "#": "21 MASON ST (014-06-00)", $: 5824200 },
    { "#": "2 MASON TER (088-17-00)", $: 3151200 },
    { "#": "5 MASON TER (089-14-00)", $: 2721100 },
    { "#": "12 MASON TER (088-16-37)", $: 4249300 },
    { "#": "19 MASON TER (089-14-01)", $: 1564300 },
    { "#": "22 MASON TER (088-15-00)", $: 2905e3 },
    { "#": "25 MASON TER (089-15-00)", $: 1096900 },
    { "#": "28 MASON TER (088-14-00)", $: 2121200 },
    { "#": "29 MASON TER (089-15-01)", $: 2028600 },
    { "#": "32 MASON TER (088-13-00)", $: 2218800 },
    { "#": "38 MASON TER (088-12-00)", $: 1143600 },
    { "#": "41 MASON TER (089-16-00)", $: 2742100 },
    { "#": "42 MASON TER (088-11-00)", $: 1691600 },
    { "#": "45 MASON TER (089-17-00.9)", $: 0 },
    { "#": "48 MASON TER (088-10-00)", $: 1873100 },
    { "#": "51 MASON TER (089-18-00)", $: 1949900 },
    { "#": "52 MASON TER (088-09-00)", $: 1687300 },
    { "#": "55 MASON TER (089-18-01.9)", $: 0 },
    { "#": "56 MASON TER (088-08-00)", $: 1665100 },
    { "#": "59 MASON TER (089-19-00)", $: 2010900 },
    { "#": "60 MASON TER (088-07-01)", $: 2151e3 },
    { "#": "63 MASON TER (089-20-00)", $: 2098600 },
    { "#": "66 MASON TER (088-07-02)", $: 4355300 },
    { "#": "67 MASON TER (089-21-00.9)", $: 0 },
    { "#": "70 MASON TER (088-06-01)", $: 2799500 },
    { "#": "71 MASON TER (089-22-00.9)", $: 0 },
    { "#": "77 MASON TER (089-23-25)", $: 8808400 },
    { "#": "80 MASON TER (088-05-00.9)", $: 0 },
    { "#": "87 MASON TER (089-26-00.9)", $: 0 },
    { "#": "88 MASON TER (088-04-00)", $: 1186800 },
    { "#": "88 MASON TER (088-04-00.9)", $: 3559600 },
    { "#": "94 MASON TER (088-03-00.9)", $: 0 },
    { "#": "95 MASON TER (089-28-00.9)", $: 0 },
    { "#": "99 MASON TER (089-30-31)", $: 2896800 },
    { "#": "106 MASON TER (088-02-00)", $: 2639300 },
    { "#": "111 MASON TER (089-32-00.9)", $: 0 },
    { "#": "117 MASON TER (089-32-01)", $: 2273100 },
    { "#": "118 MASON TER (088-01-00)", $: 2427500 },
    { "#": "127 MASON TER (085-56-00)", $: 1027700 },
    { "#": "127 MASON TER (085-56-00.9)", $: 1422900 },
    { "#": "131 MASON TER (085-57-00)", $: 1630900 },
    { "#": "132 MASON TER (086-36-00)", $: 1968500 },
    { "#": "135 MASON TER (085-58-00.9)", $: 0 },
    { "#": "138 MASON TER (086-35-00.9)", $: 0 },
    { "#": "139 MASON TER (085-59-00.9)", $: 0 },
    { "#": "143 MASON TER (085-60-00.9)", $: 0 },
    { "#": "144 MASON TER (086-34-00.9)", $: 0 },
    { "#": "145 MASON TER (085-60-03)", $: 2692900 },
    { "#": "147 MASON TER (085-61-00.9)", $: 0 },
    { "#": "148 MASON TER (086-33-00)", $: 813600 },
    { "#": "148 MASON TER (086-33-00.9)", $: 813600 },
    { "#": "151 MASON TER (085-62-00)", $: 2054900 },
    { "#": "151 MASON TER (085-62-00.9)", $: 3020700 },
    { "#": "155 MASON TER (085-63-02)", $: 3164100 },
    { "#": "155 MASON TER (085-63-02.9)", $: 3164100 },
    { "#": "156 MASON TER (086-32-00)", $: 2548500 },
    { "#": "161 MASON TER (085-64-00)", $: 1746700 },
    { "#": "162 MASON TER (086-31-00.9)", $: 0 },
    { "#": "165 MASON TER (085-65-00)", $: 1456900 },
    { "#": "169 MASON TER (085-66-00)", $: 2028400 },
    { "#": "172 MASON TER (086-30-00)", $: 2818100 },
    { "#": "173 MASON TER (085-67-00)", $: 1703800 },
    { "#": "177 MASON TER (085-68-00)", $: 1806e3 },
    { "#": "178 MASON TER (086-29-00)", $: 1374800 },
    { "#": "183 MASON TER (085-69-00)", $: 1588700 },
    { "#": "186 MASON TER (086-27-00)", $: 2428200 },
    { "#": "186 MASON TER (086-27-00.9)", $: 1424600 },
    { "#": "187 MASON TER (085-70-00)", $: 1663200 },
    { "#": "192 MASON TER (086-26-00)", $: 1864800 },
    { "#": "193 MASON TER (085-71-00)", $: 1818200 },
    { "#": "196 MASON TER (086-25-00)", $: 1729700 },
    { "#": "197 MASON TER (085-72-00)", $: 1943700 },
    { "#": "202 MASON TER (086-24-00)", $: 1983900 },
    { "#": "203 MASON TER (085-73-00)", $: 2418400 },
    { "#": "207 MASON TER (085-74-00.9)", $: 0 },
    { "#": "210 MASON TER (086-23-00)", $: 2221e3 },
    { "#": "211 MASON TER (085-75-00)", $: 2021100 },
    { "#": "214 MASON TER (086-22-00)", $: 1024300 },
    { "#": "214 MASON TER (086-22-00.9)", $: 1075500 },
    { "#": "217 MASON TER (085-76-00)", $: 1966700 },
    { "#": "219 MASON TER (085-77-00.9)", $: 0 },
    { "#": "220 MASON TER (086-21-00)", $: 1785400 },
    { "#": "224 MASON TER (086-20-00)", $: 2179400 },
    { "#": "227 MASON TER (085-78-00)", $: 1844500 },
    { "#": "228 MASON TER (086-19-00)", $: 1562200 },
    { "#": "230 MASON TER (086-18-00)", $: 2125e3 },
    { "#": "233 MASON TER (085-79-00)", $: 2448700 },
    { "#": "236 MASON TER (086-17-00)", $: 2183500 },
    { "#": "237 MASON TER (085-80-00.9)", $: 0 },
    { "#": "240 MASON TER (086-16-00)", $: 1685600 },
    { "#": "243 MASON TER (085-81-00)", $: 182e4 },
    { "#": "246 MASON TER (086-15-00)", $: 2173900 },
    { "#": "249 MASON TER (085-82-00)", $: 1694800 },
    { "#": "252 MASON TER (086-14-00)", $: 2396900 },
    { "#": "253 MASON TER (085-83-00)", $: 2185700 },
    { "#": "256 MASON TER (086-13-00)", $: 1524900 },
    { "#": "259 MASON TER (085-84-00)", $: 2542100 },
    { "#": "260 MASON TER (086-12-01)", $: 2046700 },
    { "#": "264 MASON TER (086-12-00)", $: 1990700 },
    { "#": "265 MASON TER (085-85-00)", $: 1813700 },
    { "#": "268 MASON TER (086-11-00)", $: 2442100 },
    { "#": "269 MASON TER (085-86-00)", $: 1677900 },
    { "#": "273 MASON TER (085-87-00)", $: 2706500 },
    { "#": "274 MASON TER (086-10-00)", $: 1932500 },
    { "#": "277 MASON TER (085-88-00)", $: 2436900 },
    { "#": "280 MASON TER (086-09-00)", $: 1603800 },
    { "#": "281 MASON TER (085-89-00)", $: 1396900 },
    { "#": "281 MASON TER (085-89-00.9)", $: 1732500 },
    { "#": "286 MASON TER (086-08-00)", $: 1929400 },
    { "#": "287 MASON TER (085-90-00)", $: 2337900 },
    { "#": "292 MASON TER (086-07-00)", $: 2250500 },
    { "#": "293 MASON TER (085-91-00)", $: 1726600 },
    { "#": "296 MASON TER (086-06-00)", $: 2562e3 },
    { "#": "297 MASON TER (085-91-01)", $: 1921400 },
    { "#": "301 MASON TER (085-92-00)", $: 1882800 },
    { "#": "302 MASON TER (086-05-00)", $: 3088500 },
    { "#": "305 MASON TER (085-92-01)", $: 1588400 },
    { "#": "306 MASON TER (086-04-00)", $: 2147900 },
    { "#": "309 MASON TER (085-93-00)", $: 1682300 },
    { "#": "312 MASON TER (086-03-00)", $: 1940100 },
    { "#": "315 MASON TER (085-94-00)", $: 1853100 },
    { "#": "318 MASON TER (086-02-00)", $: 4203100 },
    { "#": "319 MASON TER (085-95-00)", $: 1564300 },
    { "#": "322 MASON TER (086-01-01)", $: 2448400 },
    { "#": "325 MASON TER (085-96-00)", $: 1726900 },
    { "#": "327 MASON TER (085-97-00)", $: 1740700 },
    { "#": "328 MASON TER (086-01-00)", $: 1673700 },
    { "#": "1 MEADOWBROOK RD (342-01-02)", $: 1374500 },
    { "#": "5 MEADOWBROOK RD (342-03-00.9)", $: 0 },
    { "#": "6 MEADOWBROOK RD (341-13-00)", $: 1148600 },
    { "#": "26 MEADOWBROOK RD (345-15-00)", $: 920800 },
    { "#": "28 MEADOWBROOK RD (345-13-00.9)", $: 341800 },
    { "#": "32 MEADOWBROOK RD (345-13-14)", $: 526900 },
    { "#": "33 MEADOWBROOK RD (343-05-00)", $: 879400 },
    { "#": "36 MEADOWBROOK RD (345-12-00)", $: 1211300 },
    { "#": "40 MEADOWBROOK RD (345-11-00)", $: 1087200 },
    { "#": "46 MEADOWBROOK RD (345-09-10)", $: 1422300 },
    { "#": "52 MEADOWBROOK RD (345-08-00)", $: 967200 },
    { "#": "55 MEADOWBROOK RD (344-06-02)", $: 1082100 },
    { "#": "56 MEADOWBROOK RD (345-07-00)", $: 1052100 },
    { "#": "70 MEADOWBROOK RD (345-03-00)", $: 1646100 },
    { "#": "78 MEADOWBROOK RD (345-01-00)", $: 1187800 },
    { "#": "69 MIDDLESEX RD (283-07-08)", $: 3647600 },
    { "#": "73 MIDDLESEX RD (283-01-00)", $: 2233300 },
    { "#": "81 MIDDLESEX RD (283-02-00)", $: 2083400 },
    { "#": "91 MIDDLESEX RD (283-03-00)", $: 4573900 },
    { "#": "92 MIDDLESEX RD (282-23-00)", $: 15100 },
    { "#": "96 MIDDLESEX RD (282-22-00)", $: 20900 },
    { "#": "104 MIDDLESEX RD (282-21-00)", $: 30200 },
    { "#": "110 MIDDLESEX RD (282-21-01)", $: 31200 },
    { "#": "120 MIDDLESEX RD (282-20-00)", $: 20200 },
    { "#": "128 MIDDLESEX RD (282-19-00)", $: 17200 },
    { "#": "132 MIDDLESEX RD (282-15-18.9)", $: 0 },
    { "#": "137 MIDDLESEX RD (281-07-00)", $: 2430700 },
    { "#": "145 MIDDLESEX RD (281-08-00)", $: 2765500 },
    { "#": "151 MIDDLESEX RD (281-09-00)", $: 1789100 },
    { "#": "157 MIDDLESEX RD (281-10-00)", $: 2374400 },
    { "#": "162 MIDDLESEX RD (282-13-00)", $: 561600 },
    { "#": "163 MIDDLESEX RD (281-11-00)", $: 3769700 },
    { "#": "170 MIDDLESEX RD (282-12-00)", $: 249800 },
    { "#": "174 MIDDLESEX RD (282-11-00)", $: 371200 },
    { "#": "175 MIDDLESEX RD (281-12-00)", $: 2892100 },
    { "#": "180 MIDDLESEX RD (282-10-00)", $: 1102500 },
    { "#": "183 MIDDLESEX RD (281-12-01)", $: 3626600 },
    { "#": "190 MIDDLESEX RD (282-08-09)", $: 1663300 },
    { "#": "195 MIDDLESEX RD (281-13-14)", $: 4035500 },
    { "#": "206 MIDDLESEX RD (282-07-00)", $: 1854100 },
    { "#": "209 MIDDLESEX RD (281-15-00)", $: 3251400 },
    { "#": "210 MIDDLESEX RD (282-06-00)", $: 1695600 },
    { "#": "218 MIDDLESEX RD (282-04-05)", $: 2141300 },
    { "#": "230 MIDDLESEX RD (282-03-00)", $: 1681200 },
    { "#": "233 MIDDLESEX RD (281-19-00)", $: 2401200 },
    { "#": "234 MIDDLESEX RD (282-02-00)", $: 1886e3 },
    { "#": "240 MIDDLESEX RD (282-01-00)", $: 1955400 },
    { "#": "243 MIDDLESEX RD (281-20-01)", $: 260600 },
    { "#": "10 MILTON RD (320-13-00)", $: 1629600 },
    { "#": "11 MILTON RD (319-02-00)", $: 1722300 },
    { "#": "14 MILTON RD (320-12-00)", $: 2568100 },
    { "#": "17 MILTON RD (319-03-00)", $: 1972700 },
    { "#": "18 MILTON RD (320-11-00)", $: 1920500 },
    { "#": "21 MILTON RD (319-04-05)", $: 2234400 },
    { "#": "24 MILTON RD (320-10-00)", $: 1775100 },
    { "#": "32 MILTON RD (320A-02-00.9)", $: 0 },
    { "#": "35 MILTON RD (319-06-07)", $: 1557100 },
    { "#": "36 MILTON RD (320A-01-00)", $: 1703400 },
    { "#": "10 MONMOUTH CT (113-06-00)", $: 2880100 },
    { "#": "11 MONMOUTH CT (114-10-00.9)", $: 0 },
    { "#": "12 MONMOUTH CT (113-05-00)", $: 2557500 },
    { "#": "14 MONMOUTH CT (113-04-00)", $: 2338500 },
    { "#": "16 MONMOUTH CT (113-03-00)", $: 2279400 },
    { "#": "18 MONMOUTH CT (113-02-00)", $: 2268500 },
    { "#": "19 MONMOUTH CT (114-11-00)", $: 2429e3 },
    { "#": "21 MONMOUTH CT (114-12-00)", $: 2030400 },
    { "#": "23 MONMOUTH CT (114-13-00)", $: 1967600 },
    { "#": "24 MONMOUTH CT (113-01-00)", $: 1037300 },
    { "#": "24 MONMOUTH CT (113-01-04)", $: 3356100 },
    { "#": "24 MONMOUTH CT (113-01-04.9)", $: 3356100 },
    { "#": "25 MONMOUTH CT (114-14-00)", $: 2533e3 },
    { "#": "26 MONMOUTH CT (113-01-01)", $: 2676200 },
    { "#": "26 MONMOUTH CT (113-01-01.9)", $: 2676200 },
    { "#": "27 MONMOUTH CT (114-15-00)", $: 2250900 },
    { "#": "0 MONMOUTH ST (113-07-01)", $: 14e4 },
    { "#": "0 MONMOUTH ST (113-09-01)", $: 188800 },
    { "#": "0 MONMOUTH ST (113-10-02)", $: 69700 },
    { "#": "0 MONMOUTH ST (113-10-03)", $: 69700 },
    { "#": "0 MONMOUTH ST (113-10-04)", $: 69700 },
    { "#": "0 MONMOUTH ST (113-10-05)", $: 69700 },
    { "#": "0 MONMOUTH ST (113-11-01)", $: 128600 },
    { "#": "4 MONMOUTH ST (116-04-00)", $: 5058800 },
    { "#": "16 MONMOUTH ST (116-03-00)", $: 5582400 },
    { "#": "23 MONMOUTH ST (115-12-00)", $: 2504500 },
    { "#": "26 MONMOUTH ST (116-02-00)", $: 5228500 },
    { "#": "29 MONMOUTH ST (115-01-00)", $: 7860700 },
    { "#": "47 MONMOUTH ST (114-04-00)", $: 2812100 },
    { "#": "49 MONMOUTH ST (114-04-01)", $: 2439800 },
    { "#": "53 MONMOUTH ST (114-05-00)", $: 2088900 },
    { "#": "55 MONMOUTH ST (114-06-00)", $: 2135900 },
    { "#": "57 MONMOUTH ST (114-07-00)", $: 2480500 },
    { "#": "58 MONMOUTH ST (112-35-00)", $: 5781300 },
    { "#": "59 MONMOUTH ST (114-08-00)", $: 2150700 },
    { "#": "61 MONMOUTH ST (114-09-00)", $: 2702e3 },
    { "#": "68 MONMOUTH ST (112-34-00.9)", $: 0 },
    { "#": "69 MONMOUTH ST (113-07-00)", $: 2900100 },
    { "#": "71 MONMOUTH ST (113-08-00)", $: 2484500 },
    { "#": "73 MONMOUTH ST (113-09-00)", $: 2773200 },
    { "#": "74 MONMOUTH ST (112-33-00)", $: 2910700 },
    { "#": "75 MONMOUTH ST (113-10-00)", $: 2468800 },
    { "#": "76 MONMOUTH ST (112-32-00)", $: 2893200 },
    { "#": "77 MONMOUTH ST (113-11-00)", $: 3149200 },
    { "#": "78 MONMOUTH ST (112-31-00)", $: 2642900 },
    { "#": "80 MONMOUTH ST (112-30-00)", $: 2344200 },
    { "#": "82 MONMOUTH ST (112-29-00)", $: 2986700 },
    { "#": "86 MONMOUTH ST (112-28-00)", $: 2428300 },
    { "#": "90 MONMOUTH ST (112-27-00)", $: 68200 },
    { "#": "101 MONMOUTH ST (113-12-00)", $: 5658e4 },
    { "#": "138 MOUNTFORT ST (005-03-00)", $: 2311300 },
    { "#": "150 MOUNTFORT ST (005-02-00)", $: 1903300 },
    { "#": "3 MULFORD ST (317-22-00.9)", $: 0 },
    { "#": "7 MULFORD ST (317-23-00)", $: 1615900 },
    { "#": "9 MULFORD ST (317-24-00)", $: 1640600 },
    { "#": "8 NAPLES RD (064-08-00)", $: 1070500 },
    { "#": "8 NAPLES RD (064-08-00.9)", $: 1539200 },
    { "#": "11 NAPLES RD (051-05-00)", $: 1937600 },
    { "#": "12 NAPLES RD (064-07-00)", $: 2006700 },
    { "#": "15 NAPLES RD (051-06-00)", $: 2160700 },
    { "#": "18 NAPLES RD (064-06-00)", $: 2055800 },
    { "#": "21 NAPLES RD (051-07-00)", $: 2525600 },
    { "#": "21 NAPLES RD (051-07-00.9)", $: 2525600 },
    { "#": "23 NAPLES RD (051-08-00)", $: 2597100 },
    { "#": "24 NAPLES RD (064-05-00)", $: 2537300 },
    { "#": "29 NAPLES RD (051-09-00)", $: 2469100 },
    { "#": "30 NAPLES RD (064-04-00)", $: 1949e3 },
    { "#": "30 NAPLES RD (064-04-00.9)", $: 2195500 },
    { "#": "33 NAPLES RD (051-10-00)", $: 2884800 },
    { "#": "36 NAPLES RD (064-03-00)", $: 3322e3 },
    { "#": "40 NAPLES RD (064-02-00)", $: 4499e3 },
    { "#": "41 NAPLES RD (051-11-01)", $: 2531500 },
    { "#": "43 NAPLES RD (051-11-02.9)", $: 0 },
    { "#": "46 NAPLES RD (064-01-00)", $: 2892600 },
    { "#": "47 NAPLES RD (051-12-00)", $: 2060700 },
    { "#": "50 NAPLES RD (063-14-00)", $: 3518400 },
    { "#": "51 NAPLES RD (051-13-00)", $: 2737900 },
    { "#": "54 NAPLES RD (063-13-00)", $: 3017900 },
    { "#": "55 NAPLES RD (051-14-00)", $: 2357400 },
    { "#": "59 NAPLES RD (051-15-00)", $: 2131600 },
    { "#": "60 NAPLES RD (063-12-00)", $: 2018700 },
    { "#": "64 NAPLES RD (063-11-00)", $: 4481e3 },
    { "#": "65 NAPLES RD (051-16-00)", $: 1669900 },
    { "#": "68 NAPLES RD (063-10-00)", $: 4151400 },
    { "#": "69 NAPLES RD (051-17-00)", $: 2809100 },
    { "#": "73 NAPLES RD (051-18-00)", $: 2581e3 },
    { "#": "74 NAPLES RD (063-09-00)", $: 2525200 },
    { "#": "79 NAPLES RD (051-19-00)", $: 2216e3 },
    { "#": "82 NAPLES RD (063-08-00)", $: 1560600 },
    { "#": "85 NAPLES RD (051-20-00)", $: 2241300 },
    { "#": "88 NAPLES RD (063-07-00.9)", $: 0 },
    { "#": "89 NAPLES RD (051-21-00)", $: 2580300 },
    { "#": "90 NAPLES RD (063-06-00.9)", $: 0 },
    { "#": "94 NAPLES RD (063-05-00.9)", $: 0 },
    { "#": "96 NAPLES RD (063-04-00.9)", $: 0 },
    { "#": "100 NAPLES RD (063-03-00)", $: 2677600 },
    { "#": "102 NAPLES RD (063-02-00)", $: 3655500 },
    { "#": "105 NAPLES RD (052-01-00)", $: 3578400 },
    { "#": "106 NAPLES RD (063-01-00.9)", $: 0 },
    { "#": "114 NAPLES RD (062-03-00)", $: 2813100 },
    { "#": "122 NAPLES RD (062-02-00)", $: 2882300 },
    { "#": "127 NAPLES RD (053-10-00)", $: 2638400 },
    { "#": "132 NAPLES RD (062-01-00)", $: 2504400 },
    { "#": "140 NAPLES RD (057-13-00)", $: 5015400 },
    { "#": "145 NAPLES RD (055-08-00)", $: 2255800 },
    { "#": "146 NAPLES RD (057-12-00)", $: 3570400 },
    { "#": "149 NAPLES RD (055-09-00)", $: 1931e3 },
    { "#": "150 NAPLES RD (057-11-00.9)", $: 0 },
    { "#": "153 NAPLES RD (055-10-00)", $: 2381900 },
    { "#": "157 NAPLES RD (055-11-00.9)", $: 0 },
    { "#": "158 NAPLES RD (057-10-00)", $: 2167700 },
    { "#": "161 NAPLES RD (055-12-00)", $: 1610800 },
    { "#": "161 NAPLES RD (055-12-00.9)", $: 3720300 },
    { "#": "162 NAPLES RD (057-09-00)", $: 1927100 },
    { "#": "165 NAPLES RD (055-13-00)", $: 2012900 },
    { "#": "166 NAPLES RD (057-08-00)", $: 2141900 },
    { "#": "169 NAPLES RD (055-14-00)", $: 2967e3 },
    { "#": "172 NAPLES RD (057-07-00)", $: 2738400 },
    { "#": "173 NAPLES RD (055-15-00)", $: 2167e3 },
    { "#": "174 NAPLES RD (057-06-00.9)", $: 0 },
    { "#": "175 NAPLES RD (055-16-00)", $: 2306100 },
    { "#": "178 NAPLES RD (057-05-00)", $: 2876600 },
    { "#": "178 NAPLES RD (057-05-00.9)", $: 2876600 },
    { "#": "180 NAPLES RD (057-04-00)", $: 2765700 },
    { "#": "182 NAPLES RD (057-03-00.9)", $: 0 },
    { "#": "184 NAPLES RD (057-02-00)", $: 2940100 },
    { "#": "186 NAPLES RD (057-01-00)", $: 3104200 },
    { "#": "5 NELSON DR (418-08-00)", $: 1465900 },
    { "#": "6 NELSON DR (418-07-00)", $: 1455e3 },
    { "#": "15 NELSON DR (418-06-00)", $: 1521100 },
    { "#": "16 NELSON DR (418-02-03)", $: 1583700 },
    { "#": "24 NELSON DR (418-04-00)", $: 2449300 },
    { "#": "25 NELSON DR (418-05-00)", $: 2059200 },
    { "#": "2 NETHERLANDS RD (133-06-00)", $: 1650700 },
    { "#": "3 NETHERLANDS RD (134-01-00.9)", $: 0 },
    { "#": "6 NETHERLANDS RD (133-05-00)", $: 1652900 },
    { "#": "7 NETHERLANDS RD (134-02-00.9)", $: 0 },
    { "#": "10 NETHERLANDS RD (133-04-00)", $: 1331900 },
    { "#": "10 NETHERLANDS RD (133-04-00.9)", $: 2035600 },
    { "#": "11 NETHERLANDS RD (134-03-00.9)", $: 0 },
    { "#": "14 NETHERLANDS RD (133-03-00)", $: 1480300 },
    { "#": "15 NETHERLANDS RD (134-04-00)", $: 2253100 },
    { "#": "19 NETHERLANDS RD (134-05-00.9)", $: 0 },
    { "#": "20 NETHERLANDS RD (133-02-00)", $: 2466100 },
    { "#": "23 NETHERLANDS RD (134-06-00.9)", $: 0 },
    { "#": "44 NETHERLANDS RD (133-01-00)", $: 5970400 },
    { "#": "11 NEWELL RD (126-03-02)", $: 1949600 },
    { "#": "14 NEWELL RD (126-05-01)", $: 1849800 },
    { "#": "17 NEWELL RD (126-03-03)", $: 1989200 },
    { "#": "20 NEWELL RD (126-05-00)", $: 1717200 },
    { "#": "21 NEWELL RD (126-03-04)", $: 2648500 },
    { "#": "27 NEWELL RD (126-04-00.9)", $: 0 },
    { "#": "9 NEWTON ST (356-01-00)", $: 57943700 },
    { "#": "20 NEWTON ST (357-01-02)", $: 132366900 },
    { "#": "40 NEWTON ST (357-36-00)", $: 1857300 },
    { "#": "50 NEWTON ST (357-35-00)", $: 1517200 },
    { "#": "64 NEWTON ST (357-33-34)", $: 3879200 },
    { "#": "80 NEWTON ST (357-32-00)", $: 2462600 },
    { "#": "92 NEWTON ST (357-31-00)", $: 1908400 },
    { "#": "102 NEWTON ST (357-30-00)", $: 2137700 },
    { "#": "112 NEWTON ST (357-29-00)", $: 1694e3 },
    { "#": "131 NEWTON ST (344-08-01.9)", $: 0 },
    { "#": "147 NEWTON ST (344-09-00)", $: 2156500 },
    { "#": "150 NEWTON ST (357-22-00)", $: 2041400 },
    { "#": "164 NEWTON ST (357-21-00)", $: 3655e3 },
    { "#": "186 NEWTON ST (357-14-20)", $: 577e4 },
    { "#": "191 NEWTON ST (441-52-00)", $: 2885800 },
    { "#": "191 NEWTON ST (441-52-01)", $: 3696300 },
    { "#": "195 NEWTON ST (441-51-00)", $: 5115400 },
    { "#": "209 NEWTON ST (441-50-00)", $: 4186500 },
    { "#": "225 NEWTON ST (441-49-00)", $: 5598700 },
    { "#": "282 NEWTON ST (357-04-13)", $: 19761e3 },
    { "#": "293 NEWTON ST (442-02-00)", $: 50500 },
    { "#": "320 NEWTON ST (370-17-00)", $: 2692400 },
    { "#": "321 NEWTON ST (442-16-00)", $: 2029900 },
    { "#": "331 NEWTON ST (442-17-00)", $: 1011800 },
    { "#": "346 NEWTON ST (370-14-00)", $: 1325700 },
    { "#": "361 NEWTON ST (442-31-33)", $: 1382800 },
    { "#": "367 NEWTON ST (442-34-00)", $: 1521200 },
    { "#": "376 NEWTON ST (370A-09-00)", $: 2523600 },
    { "#": "379 NEWTON ST (442-37-00)", $: 1586800 },
    { "#": "384 NEWTON ST (370A-08-00)", $: 209e4 },
    { "#": "387 NEWTON ST (442-38-01)", $: 1050900 },
    { "#": "389 NEWTON ST (442-39-00)", $: 1266600 },
    { "#": "397 NEWTON ST (442-40-00)", $: 1670900 },
    { "#": "420 NEWTON ST (370-02-00)", $: 1818700 },
    { "#": "464 NEWTON ST (372-04-00)", $: 1639600 },
    { "#": "474 NEWTON ST (372-03-00)", $: 1365600 },
    { "#": "510 NEWTON ST (399-39-00)", $: 1523900 },
    { "#": "518 NEWTON ST (399-38-00)", $: 1801500 },
    { "#": "528 NEWTON ST (399-37-00)", $: 1926500 },
    { "#": "538 NEWTON ST (399-36-00)", $: 2770300 },
    { "#": "546 NEWTON ST (399-33-35)", $: 1159200 },
    { "#": "556 NEWTON ST (399-32-00)", $: 1064100 },
    { "#": "566 NEWTON ST (399-31-00)", $: 1372300 },
    { "#": "576 NEWTON ST (399-30-00)", $: 1004900 },
    { "#": "584 NEWTON ST (399-29-00)", $: 2323900 },
    { "#": "594 NEWTON ST (399-28-00)", $: 1131800 },
    { "#": "604 NEWTON ST (399-27-00)", $: 2683500 },
    { "#": "612 NEWTON ST (399-26-00)", $: 2543300 },
    { "#": "618 NEWTON ST (399-25-00)", $: 1072600 },
    { "#": "624 NEWTON ST (399-24-00)", $: 1150100 },
    { "#": "628 NEWTON ST (399-23-00)", $: 1472600 },
    { "#": "634 NEWTON ST (399-22-00)", $: 1378900 },
    { "#": "640 NEWTON ST (399-21-00)", $: 1610300 },
    { "#": "646 NEWTON ST (399-20-00)", $: 883800 },
    { "#": "646 NEWTON ST (399-20-00.9)", $: 931900 },
    { "#": "668 NEWTON ST (402-28-00)", $: 1237400 },
    { "#": "674 NEWTON ST (402-29-00)", $: 1034600 },
    { "#": "680 NEWTON ST (402-30-00)", $: 776900 },
    { "#": "684 NEWTON ST (402-31-00)", $: 1031200 },
    { "#": "690 NEWTON ST (402-32-00)", $: 1236300 },
    { "#": "716 NEWTON ST (408-11-00)", $: 2256100 },
    { "#": "721 NEWTON ST (418-13-00)", $: 1302600 },
    { "#": "728 NEWTON ST (408-10-00)", $: 1419800 },
    { "#": "729 NEWTON ST (418-12-02)", $: 1488500 },
    { "#": "737 NEWTON ST (418-12-01)", $: 3909800 },
    { "#": "740 NEWTON ST (408-26-00)", $: 2529900 },
    { "#": "744 NEWTON ST (408-25-00)", $: 2495600 },
    { "#": "745 NEWTON ST (418-12-00)", $: 1947500 },
    { "#": "750 NEWTON ST (408-22-00)", $: 2364600 },
    { "#": "753 NEWTON ST (418-11-02)", $: 1333400 },
    { "#": "754 NEWTON ST (408-23-00)", $: 2233600 },
    { "#": "761 NEWTON ST (418-11-01)", $: 1410100 },
    { "#": "767 NEWTON ST (418-11-00)", $: 2819500 },
    { "#": "775 NEWTON ST (418-10-00)", $: 1493700 },
    { "#": "776 NEWTON ST (410-16-00)", $: 1186700 },
    { "#": "783 NEWTON ST (418-09-00)", $: 3196800 },
    { "#": "786 NEWTON ST (410-17-00)", $: 1483900 },
    { "#": "800 NEWTON ST (410-18-19)", $: 2360300 },
    { "#": "806 NEWTON ST (410-20-00)", $: 1093200 },
    { "#": "807 NEWTON ST (418-01-00)", $: 17757500 },
    { "#": "815 NEWTON ST (418-19-00)", $: 36967100 },
    { "#": "820 NEWTON ST (411-06-08.9)", $: 0 },
    { "#": "823 NEWTON ST (417-07-03)", $: 2702700 },
    { "#": "830 NEWTON ST (411-09-00)", $: 2166e3 },
    { "#": "833 NEWTON ST (417-07-02)", $: 1406700 },
    { "#": "835 NEWTON ST (417-06-00)", $: 1876300 },
    { "#": "850 NEWTON ST (411-04-00)", $: 3063200 },
    { "#": "854 NEWTON ST (411-03-00)", $: 3064e3 },
    { "#": "860 NEWTON ST (411-05-00)", $: 3830200 },
    { "#": "6 NORFOLK RD (279-10-00)", $: 4161800 },
    { "#": "14 NORFOLK RD (279-09-00)", $: 1671700 },
    { "#": "15 NORFOLK RD (283-04-00)", $: 3146e3 },
    { "#": "30 NORFOLK RD (279-08-00)", $: 5059700 },
    { "#": "40 NORFOLK RD (279-07-00)", $: 5786500 },
    { "#": "47 NORFOLK RD (284-08-00)", $: 3705400 },
    { "#": "52 NORFOLK RD (279-06-00)", $: 5140300 },
    { "#": "63 NORFOLK RD (284-13-00)", $: 3274900 },
    { "#": "66 NORFOLK RD (278C-24-00)", $: 2414300 },
    { "#": "76 NORFOLK RD (278C-23-00)", $: 1581700 },
    { "#": "77 NORFOLK RD (284-14-01)", $: 2641400 },
    { "#": "15 OAK ST (432-18-19.9)", $: 0 },
    { "#": "0 OAKLAND RD (308-84-00)", $: 77900 },
    { "#": "0 OAKLAND RD (308-85-00)", $: 0 },
    { "#": "0 OAKLAND RD (308-85-00.9)", $: 0 },
    { "#": "0 OAKLAND RD (308-86-87)", $: 154300 },
    { "#": "7 OAKLAND RD (307-23-00)", $: 2094800 },
    { "#": "15 OAKLAND RD (307-24-00)", $: 1191400 },
    { "#": "18 OAKLAND RD (308-99-02)", $: 1586200 },
    { "#": "19 OAKLAND RD (307-25-00)", $: 1745400 },
    { "#": "22 OAKLAND RD (308-99-01)", $: 2576600 },
    { "#": "28 OAKLAND RD (308-99-00)", $: 2162700 },
    { "#": "32 OAKLAND RD (308-98-00)", $: 1113300 },
    { "#": "33 OAKLAND RD (307-30-31)", $: 1564300 },
    { "#": "35 OAKLAND RD (307-32-00)", $: 2081700 },
    { "#": "36 OAKLAND RD (308-97-01)", $: 1989e3 },
    { "#": "39 OAKLAND RD (308-88-00)", $: 1514100 },
    { "#": "40 OAKLAND RD (308-96-00.9)", $: 0 },
    { "#": "43 OAKLAND RD (308-89-00)", $: 1792900 },
    { "#": "50 OAKLAND RD (308-96-02)", $: 1624300 },
    { "#": "51 OAKLAND RD (308-90-00)", $: 2044600 },
    { "#": "55 OAKLAND RD (308-91-00)", $: 1026100 },
    { "#": "55 OAKLAND RD (308-91-00.9)", $: 1026100 },
    { "#": "56 OAKLAND RD (308-96-03)", $: 1306400 },
    { "#": "59 OAKLAND RD (308-92-00)", $: 1522800 },
    { "#": "104 OAKLAND RD EXT (308-61-00)", $: 1987100 },
    { "#": "105 OAKLAND RD EXT (308-62-00.9)", $: 0 },
    { "#": "108 OAKLAND RD EXT (308-60-00)", $: 1550100 },
    { "#": "111 OAKLAND RD EXT (308-63-00)", $: 1327500 },
    { "#": "112 OAKLAND RD EXT (308-59-00.9)", $: 0 },
    { "#": "11 OGDEN RD (375C-01-00)", $: 976600 },
    { "#": "14 OGDEN RD (375B-15-00)", $: 1446900 },
    { "#": "20 OGDEN RD (375B-14-00)", $: 1323500 },
    { "#": "21 OGDEN RD (375D-09-00)", $: 874200 },
    { "#": "24 OGDEN RD (375B-13-00)", $: 1378e3 },
    { "#": "27 OGDEN RD (375D-10-00)", $: 1218300 },
    { "#": "30 OGDEN RD (375B-12-00)", $: 1273800 },
    { "#": "35 OGDEN RD (375D-01-00)", $: 1014500 },
    { "#": "36 OGDEN RD (375B-11-00)", $: 1336200 },
    { "#": "42 OGDEN RD (375B-10-00)", $: 1360600 },
    { "#": "2 OLMSTED RD (250-13-11.9)", $: 0 },
    { "#": "3 OLMSTED RD (250-13-05)", $: 3284300 },
    { "#": "5 OLMSTED RD (250-13-06)", $: 3464e3 },
    { "#": "7 OLMSTED RD (250-13-07)", $: 3276900 },
    { "#": "9 OLMSTED RD (250-13-08)", $: 3382700 },
    { "#": "10 OLMSTED RD (250-13-10)", $: 4121800 },
    { "#": "11 OLMSTED RD (250-13-09)", $: 4171500 },
    { "#": "11 ORCHARD RD (095-06-00)", $: 2392100 },
    { "#": "14 ORCHARD RD (097-05-00)", $: 2296100 },
    { "#": "18 ORCHARD RD (097-04-00)", $: 228e4 },
    { "#": "21 ORCHARD RD (095-07-00)", $: 276e4 },
    { "#": "25 ORCHARD RD (095-08-00)", $: 1936300 },
    { "#": "26 ORCHARD RD (097-03-00)", $: 2809200 },
    { "#": "34 ORCHARD RD (097-02-00)", $: 2146200 },
    { "#": "35 ORCHARD RD (095-01-01)", $: 1e5 },
    { "#": "36 ORCHARD RD (097-01-00)", $: 1110400 },
    { "#": "1 OSBORNE RD (054-09-00)", $: 1717100 },
    { "#": "5 OSBORNE RD (054-10-00)", $: 2004500 },
    { "#": "9 OSBORNE RD (054-11-00)", $: 2084100 },
    { "#": "11 OSBORNE RD (054-12-00)", $: 2470900 },
    { "#": "12 OSBORNE RD (055-07-00)", $: 2152600 },
    { "#": "12 OSBORNE RD (055-07-00.9)", $: 2152600 },
    { "#": "17 OSBORNE RD (054-13-00)", $: 2046700 },
    { "#": "18 OSBORNE RD (055-06-00)", $: 2255100 },
    { "#": "21 OSBORNE RD (054-14-00)", $: 1962100 },
    { "#": "22 OSBORNE RD (055-05-00)", $: 1302e3 },
    { "#": "26 OSBORNE RD (055-04-00)", $: 2109100 },
    { "#": "27 OSBORNE RD (054-15-00)", $: 2163100 },
    { "#": "30 OSBORNE RD (055-03-00)", $: 2012400 },
    { "#": "31 OSBORNE RD (054-16-00)", $: 2229800 },
    { "#": "36 OSBORNE RD (055-02-00)", $: 1819800 },
    { "#": "37 OSBORNE RD (054-17-00)", $: 2646400 },
    { "#": "41 OSBORNE RD (054-18-00)", $: 2034100 },
    { "#": "0 PARK ST (165-22-01)", $: 835200 },
    { "#": "4 PARK ST (214-49-00.9)", $: 0 },
    { "#": "10 PARK ST (214-48-00)", $: 3860500 },
    { "#": "11 PARK ST (171-05-00)", $: 4461700 },
    { "#": "14 PARK ST (214-47-01.9)", $: 0 },
    { "#": "20 PARK ST (214-47-00)", $: 6059500 },
    { "#": "25 PARK ST (171-06-00)", $: 1972500 },
    { "#": "28 PARK ST (214-45-46)", $: 20760400 },
    { "#": "41 PARK ST (170-02-00.9)", $: 0 },
    { "#": "50 PARK ST (214-43-00.9)", $: 0 },
    { "#": "55 PARK ST (169-01-00.9)", $: 0 },
    { "#": "65 PARK ST (169-03-00.9)", $: 0 },
    { "#": "70 PARK ST (214-39-00.9)", $: 0 },
    { "#": "75 PARK ST (169-04-00.9)", $: 0 },
    { "#": "77 PARK ST (169-05-00)", $: 2566800 },
    { "#": "77 PARK ST (169-05-00.9)", $: 2669400 },
    { "#": "79 PARK ST (169-06-00)", $: 2774800 },
    { "#": "81 PARK ST (169-07-00.9)", $: 0 },
    { "#": "83 PARK ST (169-08-00.9)", $: 0 },
    { "#": "90 PARK ST (214-38-00.9)", $: 0 },
    { "#": "99 PARK ST (167-10-00)", $: 11510800 },
    { "#": "100 PARK ST (166-01-00)", $: 2356200 },
    { "#": "119 PARK ST (164-12-00.9)", $: 0 },
    { "#": "122 PARK ST (165-24-00)", $: 3270600 },
    { "#": "124 PARK ST (165-23-00.9)", $: 0 },
    { "#": "125 PARK ST (164-13-00.9)", $: 0 },
    { "#": "126 PARK ST (165-22-00.9)", $: 0 },
    { "#": "5 PARK VALE (171-04-00)", $: 5302800 },
    { "#": "9 PARK VALE (171-03-00.9)", $: 0 },
    { "#": "15 PARK VALE (171-02-00.9)", $: 0 },
    { "#": "17 PARK VALE (171-01-00.9)", $: 0 },
    { "#": "7 PARKMAN ST (041-10-00)", $: 2246600 },
    { "#": "7 PARKMAN ST (041-10-00.9)", $: 2459200 },
    { "#": "12 PARKMAN ST (042-08-00)", $: 3017800 },
    { "#": "14 PARKMAN ST (042-07-00.9)", $: 0 },
    { "#": "15 PARKMAN ST (041-11-00)", $: 3957500 },
    { "#": "16 PARKMAN ST (042-06-00.9)", $: 0 },
    { "#": "17 PARKMAN ST (041-12-00)", $: 2262100 },
    { "#": "18 PARKMAN ST (042-05-00)", $: 2838400 },
    { "#": "21 PARKMAN ST (041-13-00.9)", $: 0 },
    { "#": "22 PARKMAN ST (042-03-00.9)", $: 0 },
    { "#": "23 PARKMAN ST (041-14-00.9)", $: 0 },
    { "#": "25 PARKMAN ST (041-15-00)", $: 2708900 },
    { "#": "34 PARKMAN ST (042-02-00.9)", $: 0 },
    { "#": "53 PARKMAN ST (040-01-00)", $: 9332e3 },
    { "#": "60 PARKMAN ST (043-31-00)", $: 4285300 },
    { "#": "62 PARKMAN ST (043-30-00.9)", $: 0 },
    { "#": "64 PARKMAN ST (043-29-00.9)", $: 0 },
    { "#": "66 PARKMAN ST (043-28-00.9)", $: 0 },
    { "#": "68 PARKMAN ST (043-27-00.9)", $: 0 },
    { "#": "74 PARKMAN ST (043-26-00.9)", $: 0 },
    { "#": "76 PARKMAN ST (043-25-00.9)", $: 0 },
    { "#": "6 PARKWAY RD (134-13-00.9)", $: 0 },
    { "#": "8 PARKWAY RD (134-10-01)", $: 3247500 },
    { "#": "12 PARKWAY RD (134-10-02)", $: 3247500 },
    { "#": "16 PARKWAY RD (134-10-03)", $: 3974600 },
    { "#": "20 PARKWAY RD (134-09-00.9)", $: 0 },
    { "#": "26 PARKWAY RD (134-08-00)", $: 2216100 },
    { "#": "32 PARKWAY RD (134-07-00.9)", $: 0 },
    { "#": "9 PAYSON RD (361-06-00)", $: 2487500 },
    { "#": "16 PAYSON RD (362-01-00)", $: 682600 },
    { "#": "17 PAYSON RD (361-08-00)", $: 1275700 },
    { "#": "20 PAYSON RD (362-03-00)", $: 1011100 },
    { "#": "21 PAYSON RD (361-09-00)", $: 918900 },
    { "#": "22 PAYSON RD (362-04-00)", $: 600200 },
    { "#": "25 PAYSON RD (361-10-00)", $: 1067700 },
    { "#": "29 PAYSON RD (361-11-00)", $: 933200 },
    { "#": "30 PAYSON RD (362-05-00)", $: 929900 },
    { "#": "44 PAYSON RD (367-22-00)", $: 1150600 },
    { "#": "48 PAYSON RD (367-21-00)", $: 1301e3 },
    { "#": "51 PAYSON RD (363-13-14)", $: 1240600 },
    { "#": "52 PAYSON RD (367-19-00)", $: 1316100 },
    { "#": "58 PAYSON RD (367-18-00)", $: 826600 },
    { "#": "63 PAYSON RD (363-09-00)", $: 1338300 },
    { "#": "63 PAYSON RD (363-09-02)", $: 1291e3 },
    { "#": "67 PAYSON RD (363-09-01)", $: 764500 },
    { "#": "68 PAYSON RD (367-17-00)", $: 910500 },
    { "#": "69 PAYSON RD (363-07-08)", $: 1313300 },
    { "#": "74 PAYSON RD (367-16-00)", $: 83e4 },
    { "#": "75 PAYSON RD (363-06-00)", $: 1215900 },
    { "#": "77 PAYSON RD (363-05-00)", $: 762200 },
    { "#": "80 PAYSON RD (367-15-00)", $: 961600 },
    { "#": "83 PAYSON RD (363-04-00)", $: 1133700 },
    { "#": "87 PAYSON RD (363-03-00)", $: 1417400 },
    { "#": "93 PAYSON RD (363-01-02)", $: 1269500 },
    { "#": "97 PAYSON RD (365-39-00)", $: 2859300 },
    { "#": "103 PAYSON RD (365-38-00)", $: 1438200 },
    { "#": "107 PAYSON RD (365-37-00)", $: 1483600 },
    { "#": "110 PAYSON RD (366-25-26)", $: 1144300 },
    { "#": "113 PAYSON RD (365-36-00)", $: 1074300 },
    { "#": "119 PAYSON RD (365-35-00)", $: 1298900 },
    { "#": "120 PAYSON RD (366-24-00)", $: 1001800 },
    { "#": "125 PAYSON RD (365-34-00)", $: 1031900 },
    { "#": "126 PAYSON RD (366-23-00)", $: 1110600 },
    { "#": "129 PAYSON RD (365-33-00)", $: 1317700 },
    { "#": "132 PAYSON RD (366-22-00)", $: 1251900 },
    { "#": "133 PAYSON RD (365-32-00)", $: 1000100 },
    { "#": "138 PAYSON RD (366-21-00)", $: 1033600 },
    { "#": "141 PAYSON RD (365-31-00)", $: 847700 },
    { "#": "144 PAYSON RD (366-20-01)", $: 1440800 },
    { "#": "147 PAYSON RD (365-30-00)", $: 758600 },
    { "#": "150 PAYSON RD (366-20-00)", $: 968200 },
    { "#": "151 PAYSON RD (365-29-00)", $: 1114900 },
    { "#": "158 PAYSON RD (366-19-00)", $: 951e3 },
    { "#": "159 PAYSON RD (365-28-00)", $: 867100 },
    { "#": "161 PAYSON RD (365-27-01)", $: 16600 },
    { "#": "162 PAYSON RD (366-18-00)", $: 893700 },
    { "#": "166 PAYSON RD (366-17-00)", $: 111700 },
    { "#": "168 PAYSON RD (366-17-01)", $: 600 },
    { "#": "72 PENNIMAN PL (267-15-16)", $: 2584600 },
    { "#": "83 PENNIMAN PL (267-14-00)", $: 4102900 },
    { "#": "8 PENNIMAN RD (263-03-00)", $: 2405900 },
    { "#": "9 PENNIMAN RD (262-05-00)", $: 2257400 },
    { "#": "15 PENNIMAN RD (262-06-00)", $: 2806800 },
    { "#": "18 PENNIMAN RD (263-01-02)", $: 2956100 },
    { "#": "21 PENNIMAN RD (262-07-00)", $: 3097800 },
    { "#": "44 PENNIMAN RD (259-04-00)", $: 3302100 },
    { "#": "47 PENNIMAN RD (260-02-00)", $: 1865900 },
    { "#": "55 PENNIMAN RD (260-03-00)", $: 3189400 },
    { "#": "1 PERRIN RD (329-09-00)", $: 2395600 },
    { "#": "2 PERRIN RD (329-06-00)", $: 2628300 },
    { "#": "3 PERRIN RD (329-08-00)", $: 2521400 },
    { "#": "5 PERRIN RD (329-07-00)", $: 3652400 },
    { "#": "4 PERRY ST (149-21-00)", $: 1312900 },
    { "#": "4 PERRY ST (149-21-00.9)", $: 1378500 },
    { "#": "6 PERRY ST (149-20-00.9)", $: 0 },
    { "#": "7 PERRY ST (151-05-00)", $: 2539500 },
    { "#": "8 PERRY ST (149-19-00.9)", $: 0 },
    { "#": "9 PERRY ST (151-05-01)", $: 1840400 },
    { "#": "12 PERRY ST (149-18-00)", $: 1943100 },
    { "#": "13 PERRY ST (151-06-00)", $: 1828300 },
    { "#": "14 PERRY ST (149-18-01)", $: 1649700 },
    { "#": "15 PERRY ST (151-07-00)", $: 1896700 },
    { "#": "17 PERRY ST (151-08-00.9)", $: 0 },
    { "#": "19 PERRY ST (151-08-02.9)", $: 0 },
    { "#": "20 PERRY ST (149-03-00.9)", $: 0 },
    { "#": "22 PERRY ST (149-02-00.9)", $: 0 },
    { "#": "30 PERRY ST (153-01-00)", $: 2165300 },
    { "#": "31 PERRY ST (152-07-00)", $: 2124700 },
    { "#": "34 PERRY ST (153-20-00)", $: 2399300 },
    { "#": "37 PERRY ST (152-08-00.9)", $: 0 },
    { "#": "39 PERRY ST (152-09-00)", $: 2141800 },
    { "#": "40 PERRY ST (153-19-00)", $: 2768100 },
    { "#": "56 PERRY ST (132-25-00)", $: 2907500 },
    { "#": "56 PERRY ST (132-25-00.9)", $: 0 },
    { "#": "57 PERRY ST (131-06-00)", $: 1915400 },
    { "#": "63 PERRY ST (131-07-00)", $: 2572200 },
    { "#": "64 PERRY ST (132-20-00)", $: 1481600 },
    { "#": "66 PERRY ST (132-24-00)", $: 1034e3 },
    { "#": "66 PERRY ST (132-24-00.9)", $: 1351e3 },
    { "#": "67 PERRY ST (131-08-00)", $: 1872800 },
    { "#": "70 PERRY ST (132-23-00)", $: 2472800 },
    { "#": "71 PERRY ST (131-09-00.9)", $: 0 },
    { "#": "74 PERRY ST (132-21-00)", $: 2682600 },
    { "#": "74 PERRY ST (132-21-00.9)", $: 2682600 },
    { "#": "76 PERRY ST (132-17-00)", $: 1058700 },
    { "#": "77 PERRY ST (131-10-00)", $: 1765300 },
    { "#": "78 PERRY ST (132-22-00)", $: 83800 },
    { "#": "80 PERRY ST (132-15-00)", $: 2264100 },
    { "#": "81 PERRY ST (131-11-00)", $: 1568500 },
    { "#": "82 PERRY ST (132-14-00.9)", $: 0 },
    { "#": "85 PERRY ST (131-12-00)", $: 2052300 },
    { "#": "87 PERRY ST (131-12-01)", $: 2392600 },
    { "#": "93 PERRY ST (131-13-00.9)", $: 0 },
    { "#": "94 PERRY ST (132-12-01.9)", $: 0 },
    { "#": "0 PHILBRICK RD (192-11-00)", $: 0 },
    { "#": "3 PHILBRICK RD (192-10-00)", $: 1537200 },
    { "#": "19 PHILBRICK RD (192-08-00)", $: 2036200 },
    { "#": "21 PHILBRICK RD (192-12-01)", $: 1440400 },
    { "#": "23 PHILBRICK RD (192-12-00)", $: 2940900 },
    { "#": "36 PHILBRICK RD (193-01-00)", $: 25226200 },
    { "#": "37 PHILBRICK RD (192-13-00)", $: 2940300 },
    { "#": "51 PHILBRICK RD (192-15-00)", $: 2285900 },
    { "#": "55 PHILBRICK RD (192-16-00)", $: 2222e3 },
    { "#": "11 PIERCE ST (172-09-00)", $: 9862500 },
    { "#": "7 PINE RD (431-07-00)", $: 2802e3 },
    { "#": "18 PINE RD (432-05-00)", $: 7727600 },
    { "#": "19 PINE RD (431-07-01)", $: 4610800 },
    { "#": "40 PINE RD (432-04-00)", $: 4030800 },
    { "#": "45 PINE RD (431-08-00)", $: 4124500 },
    { "#": "62 PINE RD (432-03-00)", $: 1465400 },
    { "#": "67 PINE RD (431-09-00)", $: 3238500 },
    { "#": "72 PINE RD (432-02-00)", $: 2970900 },
    { "#": "10 PLEASANT ST (045-01-00)", $: 95e5 },
    { "#": "26 PLEASANT ST (046-20-00)", $: 2727400 },
    { "#": "31 PLEASANT ST (044-05-00)", $: 11299900 },
    { "#": "57 PLEASANT ST (043-20-00.9)", $: 0 },
    { "#": "58 PLEASANT ST (046-16-00.9)", $: 0 },
    { "#": "59 PLEASANT ST (043-21-00)", $: 2070300 },
    { "#": "59 PLEASANT ST (043-21-00.9)", $: 2070300 },
    { "#": "61 PLEASANT ST (043-22-00.9)", $: 0 },
    { "#": "62 PLEASANT ST (046-15-00.9)", $: 0 },
    { "#": "63 PLEASANT ST (043-23-00.9)", $: 0 },
    { "#": "65 PLEASANT ST (043-24-00)", $: 2125100 },
    { "#": "65 PLEASANT ST (043-24-00.9)", $: 3992400 },
    { "#": "79 PLEASANT ST (040-02-00.9)", $: 0 },
    { "#": "80 PLEASANT ST (035-41-43)", $: 17496700 },
    { "#": "84 PLEASANT ST (035-40-00.9)", $: 0 },
    { "#": "88 PLEASANT ST (035-39-00.9)", $: 0 },
    { "#": "89 PLEASANT ST (040-05-00.9)", $: 0 },
    { "#": "90 PLEASANT ST (035-38-00)", $: 2580400 },
    { "#": "92 PLEASANT ST (035-37-00)", $: 1477500 },
    { "#": "92 PLEASANT ST (035-37-00.9)", $: 1477500 },
    { "#": "94 PLEASANT ST (035-36-00)", $: 2419400 },
    { "#": "104 PLEASANT ST (036-17-00.9)", $: 0 },
    { "#": "106 PLEASANT ST (036-16-00)", $: 3590600 },
    { "#": "112 PLEASANT ST (036-15-00)", $: 2849800 },
    { "#": "114 PLEASANT ST (036-14-00)", $: 2814300 },
    { "#": "116 PLEASANT ST (036-13-00.9)", $: 0 },
    { "#": "118 PLEASANT ST (036-12-00)", $: 1869500 },
    { "#": "118 PLEASANT ST (036-12-00.9)", $: 2510800 },
    { "#": "120 PLEASANT ST (036-11-00)", $: 2831500 },
    { "#": "122 PLEASANT ST (036-10-00)", $: 2896400 },
    { "#": "125 PLEASANT ST (037-02-00.9)", $: 0 },
    { "#": "128 PLEASANT ST (036-09-00.9)", $: 0 },
    { "#": "130 PLEASANT ST (036-08-00)", $: 2625800 },
    { "#": "132 PLEASANT ST (036-07-00)", $: 3237900 },
    { "#": "132 PLEASANT ST (036-07-00.9)", $: 3309100 },
    { "#": "134 PLEASANT ST (036-06-00.9)", $: 0 },
    { "#": "136 PLEASANT ST (036-05-00)", $: 3532300 },
    { "#": "140 PLEASANT ST (036-04-00)", $: 2193900 },
    { "#": "142 PLEASANT ST (036-03-00)", $: 846e3 },
    { "#": "142 PLEASANT ST (036-03-00.9)", $: 1249900 },
    { "#": "182 PLEASANT ST (031-03-00)", $: 2174200 },
    { "#": "186 PLEASANT ST (031-02-00)", $: 1849700 },
    { "#": "199 PLEASANT ST (023-14-00.9)", $: 0 },
    { "#": "204 PLEASANT ST (030-02-00)", $: 2614900 },
    { "#": "222 PLEASANT ST (029-02-00)", $: 2332100 },
    { "#": "228 PLEASANT ST (029-01-00)", $: 2187600 },
    { "#": "9 PLOWGATE RD (375B-02-00)", $: 1268300 },
    { "#": "10 PLOWGATE RD (375A-12-00)", $: 1003100 },
    { "#": "14 PLOWGATE RD (375A-11-00)", $: 1409400 },
    { "#": "17 PLOWGATE RD (375B-04-00)", $: 3039100 },
    { "#": "20 PLOWGATE RD (375A-10-00)", $: 1019400 },
    { "#": "25 PLOWGATE RD (375B-05-00)", $: 1786500 },
    { "#": "26 PLOWGATE RD (375A-09-00)", $: 1183e3 },
    { "#": "31 PLOWGATE RD (375B-06-00)", $: 1330500 },
    { "#": "32 PLOWGATE RD (375A-08-00)", $: 1119500 },
    { "#": "35 PLOWGATE RD (375B-07-00)", $: 1219400 },
    { "#": "203 POND AVE (297-04-00)", $: 2145800 },
    { "#": "209 POND AVE (297-05-00)", $: 1721600 },
    { "#": "215 POND AVE (297-06-00)", $: 1780500 },
    { "#": "219 POND AVE (297-07-00)", $: 1657100 },
    { "#": "225 POND AVE (297-07-01)", $: 1655600 },
    { "#": "231 POND AVE (297-08-00)", $: 1952700 },
    { "#": "375 POND AVE (301-24-00.9)", $: 0 },
    { "#": "379 POND AVE (301-25-00.9)", $: 0 },
    { "#": "381 POND AVE (301-26-00.9)", $: 0 },
    { "#": "385 POND AVE (301-27-00)", $: 1688400 },
    { "#": "11 POWELL ST (011-05-00)", $: 2860200 },
    { "#": "19 POWELL ST (011-06-00)", $: 4022400 },
    { "#": "29 POWELL ST (011-07-00)", $: 3997800 },
    { "#": "30 POWELL ST (041-09-00.9)", $: 0 },
    { "#": "32 POWELL ST (041-08-00)", $: 2393200 },
    { "#": "33 POWELL ST (011-08-00)", $: 3146100 },
    { "#": "41 POWELL ST (011-09-00)", $: 3005100 },
    { "#": "45 POWELL ST (011-10-00)", $: 4789400 },
    { "#": "46 POWELL ST (039-07-00)", $: 3866900 },
    { "#": "53 POWELL ST (011-11-00)", $: 3015200 },
    { "#": "54 POWELL ST (039-06-00)", $: 3378100 },
    { "#": "60 POWELL ST (039-05-00.9)", $: 0 },
    { "#": "63 POWELL ST (011-12-00)", $: 3433e3 },
    { "#": "65 POWELL ST (011-13-00)", $: 1556500 },
    { "#": "66 POWELL ST (039-04-00)", $: 1777900 },
    { "#": "67 POWELL ST (011-14-00)", $: 2748300 },
    { "#": "72 POWELL ST (039-03-00)", $: 2377600 },
    { "#": "78 POWELL ST (039-02-00)", $: 4081600 },
    { "#": "81 POWELL ST (011-15-00)", $: 1393e3 },
    { "#": "86 POWELL ST (039-01-00)", $: 3125400 },
    { "#": "9 PRESCOTT ST (008-01-00)", $: 7735400 },
    { "#": "16 PRESCOTT ST (004-01-00)", $: 7693e3 },
    { "#": "23 PRESCOTT ST (008-02-05)", $: 11078300 },
    { "#": "30 PRESCOTT ST (003-03-00)", $: 4992400 },
    { "#": "35 PRESCOTT ST (008-03-00)", $: 2913800 },
    { "#": "40 PRESCOTT ST (003-02-00)", $: 3519400 },
    { "#": "8 PRINCE ST (317-45-00)", $: 2074600 },
    { "#": "11 PRINCE ST (316A-10-00)", $: 1344100 },
    { "#": "12 PRINCE ST (317-44-00)", $: 798300 },
    { "#": "12 PRINCE ST (317-44-00.9)", $: 1136400 },
    { "#": "15 PRINCE ST (316A-11-00)", $: 1403e3 },
    { "#": "16 PRINCE ST (317-43-00.9)", $: 0 },
    { "#": "19 PRINCE ST (316A-12-00)", $: 1357300 },
    { "#": "19 PRINCE ST (316A-12-00.9)", $: 1425100 },
    { "#": "25 PRINCE ST (316A-12-02)", $: 500 },
    { "#": "32 PRINCE ST (317-42-00)", $: 1816200 },
    { "#": "39 PRINCE ST (316A-13-00.9)", $: 0 },
    { "#": "42 PRINCE ST (317-41-00)", $: 1113900 },
    { "#": "43 PRINCE ST (316A-14-00.9)", $: 0 },
    { "#": "49 PRINCE ST (316A-15-00.9)", $: 0 },
    { "#": "52 PRINCE ST (317-40-00.9)", $: 0 },
    { "#": "53 PRINCE ST (316A-16-00)", $: 1621400 },
    { "#": "58 PRINCE ST (317-39-00.9)", $: 0 },
    { "#": "59 PRINCE ST (316A-17-00)", $: 1584200 },
    { "#": "0 PRINCETON RD (405-14-01)", $: 114e3 },
    { "#": "11 PRINCETON RD (410-15-00)", $: 2588300 },
    { "#": "14 PRINCETON RD (408-06-00)", $: 2124e3 },
    { "#": "21 PRINCETON RD (410-14-00)", $: 3875400 },
    { "#": "22 PRINCETON RD (408-05-00)", $: 1759e3 },
    { "#": "29 PRINCETON RD (410-13-00)", $: 2209100 },
    { "#": "30 PRINCETON RD (408-04-00)", $: 2625900 },
    { "#": "40 PRINCETON RD (408-03-00)", $: 1904700 },
    { "#": "49 PRINCETON RD (409-10-00)", $: 2730100 },
    { "#": "50 PRINCETON RD (408-02-00)", $: 1399100 },
    { "#": "59 PRINCETON RD (409-13-00)", $: 2149200 },
    { "#": "60 PRINCETON RD (408-01-00)", $: 3192e3 },
    { "#": "69 PRINCETON RD (409-14-00)", $: 3289800 },
    { "#": "70 PRINCETON RD (408-21-00)", $: 2599500 },
    { "#": "79 PRINCETON RD (409-01-01)", $: 2688200 },
    { "#": "101 PRINCETON RD (406-02-00)", $: 2392600 },
    { "#": "102 PRINCETON RD (405-12-00)", $: 1690400 },
    { "#": "110 PRINCETON RD (405-13-00)", $: 1899800 },
    { "#": "111 PRINCETON RD (406-03-00)", $: 1911e3 },
    { "#": "118 PRINCETON RD (405-14-00)", $: 2039100 },
    { "#": "121 PRINCETON RD (406-04-00)", $: 1823700 },
    { "#": "128 PRINCETON RD (405-15-00)", $: 1782200 },
    { "#": "140 PRINCETON RD (404-05-01)", $: 1312100 },
    { "#": "145 PRINCETON RD (407-12-00)", $: 2698200 },
    { "#": "150 PRINCETON RD (404-06-00)", $: 5146500 },
    { "#": "159 PRINCETON RD (407-13-00)", $: 67300 },
    { "#": "160 PRINCETON RD (404-07-00)", $: 4850100 },
    { "#": "167 PRINCETON RD (407-14-00)", $: 129300 },
    { "#": "9 PUDDINGSTONE RD (375A-02-00)", $: 1213600 },
    { "#": "15 PUDDINGSTONE RD (375A-03-00)", $: 950500 },
    { "#": "19 PUDDINGSTONE RD (375A-04-00)", $: 1359900 },
    { "#": "25 PUDDINGSTONE RD (375A-05-00)", $: 1597800 },
    { "#": "7 RANDOLPH RD (434-03-00)", $: 1034400 },
    { "#": "15 RANDOLPH RD (434-04-00)", $: 1360600 },
    { "#": "20 RANDOLPH RD (436-01-02)", $: 3576400 },
    { "#": "29 RANDOLPH RD (435-03-00)", $: 2628100 },
    { "#": "37 RANDOLPH RD (435-04-00)", $: 2141300 },
    { "#": "38 RANDOLPH RD (436-09-10)", $: 3583100 },
    { "#": "45 RANDOLPH RD (435-05-00)", $: 2305200 },
    { "#": "51 RANDOLPH RD (435-07-00)", $: 1903300 },
    { "#": "58 RANDOLPH RD (436-08-00)", $: 2899800 },
    { "#": "59 RANDOLPH RD (435-08-00)", $: 2253900 },
    { "#": "69 RANDOLPH RD (435-09-00)", $: 3252900 },
    { "#": "70 RANDOLPH RD (437-71-00)", $: 3518300 },
    { "#": "78 RANDOLPH RD (437-70-00)", $: 4195800 },
    { "#": "79 RANDOLPH RD (435-10-00)", $: 2118700 },
    { "#": "86 RANDOLPH RD (437-69-00)", $: 3455500 },
    { "#": "5 RANGELEY RD (410-12-00)", $: 2440200 },
    { "#": "14 RANGELEY RD (409-09-00)", $: 2102800 },
    { "#": "15 RANGELEY RD (410-11-00)", $: 2372500 },
    { "#": "21 RANGELEY RD (410-10-00)", $: 2072e3 },
    { "#": "29 RANGELEY RD (410-09-00)", $: 1681500 },
    { "#": "30 RANGELEY RD (409-08-00)", $: 1393600 },
    { "#": "33 RANGELEY RD (410-08-00)", $: 2521600 },
    { "#": "39 RANGELEY RD (410-07-00)", $: 3836300 },
    { "#": "44 RANGELEY RD (409-07-00)", $: 1971500 },
    { "#": "47 RANGELEY RD (410-06-00)", $: 1312e3 },
    { "#": "52 RANGELEY RD (409-06-00)", $: 2636700 },
    { "#": "57 RANGELEY RD (410-05-00)", $: 4078200 },
    { "#": "62 RANGELEY RD (409-05-00)", $: 1812500 },
    { "#": "63 RANGELEY RD (410-04-00)", $: 3040200 },
    { "#": "71 RANGELEY RD (410-03-00)", $: 1556400 },
    { "#": "72 RANGELEY RD (409-04-00)", $: 1329400 },
    { "#": "80 RANGELEY RD (409-03-00)", $: 1033600 },
    { "#": "81 RANGELEY RD (410-02-00)", $: 1766700 },
    { "#": "89 RANGELEY RD (410-01-00)", $: 1354500 },
    { "#": "116 RANGELEY RD (406-12-00)", $: 1927200 },
    { "#": "121 RANGELEY RD (407-02-01)", $: 1562100 },
    { "#": "124 RANGELEY RD (406-11-00)", $: 1836e3 },
    { "#": "129 RANGELEY RD (407-04-00)", $: 3679900 },
    { "#": "134 RANGELEY RD (406-10-00)", $: 1625400 },
    { "#": "135 RANGELEY RD (407-05-00)", $: 1848500 },
    { "#": "140 RANGELEY RD (406-09-00)", $: 1487400 },
    { "#": "143 RANGELEY RD (407-06-00)", $: 1402100 },
    { "#": "149 RANGELEY RD (407-07-00)", $: 1952100 },
    { "#": "150 RANGELEY RD (406-08-00)", $: 3114400 },
    { "#": "153 RANGELEY RD (407-08-02)", $: 3029600 },
    { "#": "155 RANGELEY RD (407-08-03)", $: 2833200 },
    { "#": "159 RANGELEY RD (407-09-00)", $: 3918300 },
    { "#": "163 RANGELEY RD (407-10-00)", $: 3923500 },
    { "#": "166 RANGELEY RD (406-05-02)", $: 3114700 },
    { "#": "167 RANGELEY RD (407-11-00)", $: 1344500 },
    { "#": "176 RANGELEY RD (406-05-01)", $: 2764200 },
    { "#": "195 RANGELEY RD (404-05-00)", $: 1447400 },
    { "#": "203 RANGELEY RD (404-04-01)", $: 1192300 },
    { "#": "204 RANGELEY RD (405-16-00)", $: 1506500 },
    { "#": "210 RANGELEY RD (405-17-00)", $: 1336900 },
    { "#": "6 RAWSON RD (209A-14-00)", $: 3006600 },
    { "#": "7 RAWSON RD (218-06-00.9)", $: 0 },
    { "#": "14 RAWSON RD (209A-13-00)", $: 2619e3 },
    { "#": "14 RAWSON RD (209A-13-00.9)", $: 2619e3 },
    { "#": "20 RAWSON RD (209A-12-00)", $: 3923300 },
    { "#": "28 RAWSON RD (209A-11-00.9)", $: 0 },
    { "#": "29 RAWSON RD (218-08-07)", $: 118100 },
    { "#": "34 RAWSON RD (209A-10-00)", $: 1453700 },
    { "#": "34 RAWSON RD (209A-10-00.9)", $: 1737400 },
    { "#": "44 RAWSON RD (209A-09-00.9)", $: 0 },
    { "#": "45 RAWSON RD (218-07-00)", $: 2465e3 },
    { "#": "47 RAWSON RD (218-07-01)", $: 2796500 },
    { "#": "49 RAWSON RD (218-09-00.9)", $: 0 },
    { "#": "52 RAWSON RD (222-14-02)", $: 2033700 },
    { "#": "55 RAWSON RD (218-10-00)", $: 6122600 },
    { "#": "58 RAWSON RD (222-14-01)", $: 2479100 },
    { "#": "62 RAWSON RD (222-14-00)", $: 1668600 },
    { "#": "63 RAWSON RD (218-29-00)", $: 2005100 },
    { "#": "66 RAWSON RD (222-13-02)", $: 32800 },
    { "#": "67 RAWSON RD (218-31-00)", $: 2248700 },
    { "#": "72 RAWSON RD (222-13-01)", $: 1724400 },
    { "#": "77 RAWSON RD (218-27-00)", $: 2320400 },
    { "#": "78 RAWSON RD (222-13-00)", $: 1803500 },
    { "#": "84 RAWSON RD (222-12-00)", $: 2608200 },
    { "#": "89 RAWSON RD (218-14-00)", $: 4476700 },
    { "#": "90 RAWSON RD (222-11-01)", $: 1983800 },
    { "#": "98 RAWSON RD (222-11-00)", $: 1546100 },
    { "#": "99 RAWSON RD (218-33-00)", $: 2720200 },
    { "#": "104 RAWSON RD (222-10-00)", $: 2297700 },
    { "#": "109 RAWSON RD (218-15-00)", $: 2192500 },
    { "#": "114 RAWSON RD (222-09-00)", $: 4027700 },
    { "#": "119 RAWSON RD (218-16-00)", $: 1498200 },
    { "#": "120 RAWSON RD (222-08-01)", $: 3328300 },
    { "#": "124 RAWSON RD (222-07-08)", $: 1890600 },
    { "#": "128 RAWSON RD (222-06-01)", $: 2848100 },
    { "#": "133 RAWSON RD (218-17-01)", $: 2489600 },
    { "#": "136 RAWSON RD (222-04-06)", $: 3922200 },
    { "#": "139 RAWSON RD (218-17-02)", $: 1989200 },
    { "#": "154 RAWSON RD (222-42-00)", $: 2425300 },
    { "#": "161 RAWSON RD (220-46-00)", $: 1923700 },
    { "#": "164 RAWSON RD (222-41-00)", $: 3943600 },
    { "#": "165 RAWSON RD (220-47-00)", $: 1962100 },
    { "#": "169 RAWSON RD (220-48-00)", $: 1824500 },
    { "#": "170 RAWSON RD (222-39-00)", $: 1919200 },
    { "#": "175 RAWSON RD (220-49-00)", $: 2897700 },
    { "#": "176 RAWSON RD (222-38-00)", $: 1378600 },
    { "#": "178 RAWSON RD (222-37-00)", $: 1406800 },
    { "#": "179 RAWSON RD (220-50-00)", $: 2760900 },
    { "#": "179 RAWSON RD (220-50-00.9)", $: 1646800 },
    { "#": "180 RAWSON RD (222-36-00)", $: 1416900 },
    { "#": "182 RAWSON RD (222-35-00)", $: 1437200 },
    { "#": "183 RAWSON RD (220-16-01)", $: 3100 },
    { "#": "184 RAWSON RD (222-34-00)", $: 1403200 },
    { "#": "185 RAWSON RD (220-51-55.9)", $: 0 },
    { "#": "188 RAWSON RD (223-27-00.9)", $: 0 },
    { "#": "189 RAWSON RD (220-56-00.9)", $: 0 },
    { "#": "193 RAWSON RD (220-57-00)", $: 2229800 },
    { "#": "194 RAWSON RD (223-26-00.9)", $: 0 },
    { "#": "195 RAWSON RD (220-52-54)", $: 967400 },
    { "#": "197 RAWSON RD (220-58-00)", $: 1166600 },
    { "#": "197 RAWSON RD (220-58-00.9)", $: 3128700 },
    { "#": "198 RAWSON RD (223-25-00.9)", $: 0 },
    { "#": "201 RAWSON RD (220-59-00)", $: 2135600 },
    { "#": "202 RAWSON RD (223-24-00)", $: 1488800 },
    { "#": "202 RAWSON RD (223-24-00.9)", $: 3813800 },
    { "#": "205 RAWSON RD (220-60-00)", $: 2114700 },
    { "#": "208 RAWSON RD (223-23-00)", $: 2695500 },
    { "#": "222 RAWSON RD (223-09-00.9)", $: 0 },
    { "#": "227 RAWSON RD (221-10-00)", $: 3570700 },
    { "#": "231 RAWSON RD (221-11-00.9)", $: 0 },
    { "#": "235 RAWSON RD (221-12-00)", $: 3163700 },
    { "#": "236 RAWSON RD (223-18-00.9)", $: 0 },
    { "#": "239 RAWSON RD (221-13-00.9)", $: 0 },
    { "#": "0 REGENT CIR (225-30-00)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-01)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-02)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-03)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-04)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-05)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-06)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-07)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-08)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-09)", $: 68500 },
    { "#": "0 REGENT CIR (225-30-10)", $: 68500 },
    { "#": "1 REGENT CIR (225-52-00.9)", $: 0 },
    { "#": "3 REGENT CIR (225-51-00)", $: 2234900 },
    { "#": "5 REGENT CIR (225-50-00)", $: 2489600 },
    { "#": "7 REGENT CIR (225-49-00.9)", $: 0 },
    { "#": "9 REGENT CIR (225-48-00)", $: 2649700 },
    { "#": "11 REGENT CIR (225-47-00.9)", $: 0 },
    { "#": "13 REGENT CIR (225-46-00.9)", $: 0 },
    { "#": "15 REGENT CIR (225-45-00)", $: 2407900 },
    { "#": "17 REGENT CIR (225-44-00.9)", $: 0 },
    { "#": "19 REGENT CIR (225-43-00.9)", $: 0 },
    { "#": "21 REGENT CIR (225-42-00)", $: 2796100 },
    { "#": "23 REGENT CIR (225-41-00)", $: 2762300 },
    { "#": "25 REGENT CIR (225-40-03)", $: 3276900 },
    { "#": "30 REGENT CIR (225-32-00.9)", $: 0 },
    { "#": "54 RESERVOIR LN (266-02-03)", $: 3485400 },
    { "#": "57 RESERVOIR LN (265-36-00)", $: 3313600 },
    { "#": "63 RESERVOIR LN (265-37-00)", $: 1739400 },
    { "#": "249 RESERVOIR LN (266-04-00)", $: 1778300 },
    { "#": "9 RESERVOIR RD (276-19-00)", $: 1675400 },
    { "#": "15 RESERVOIR RD (276-19-01)", $: 195e4 },
    { "#": "19 RESERVOIR RD (276-20-00)", $: 1209600 },
    { "#": "20 RESERVOIR RD (437-75-00)", $: 2807600 },
    { "#": "46 RESERVOIR RD (437-12-00)", $: 1406900 },
    { "#": "51 RESERVOIR RD (276-21-00.9)", $: 0 },
    { "#": "55 RESERVOIR RD (276-05-22.9)", $: 0 },
    { "#": "70 RESERVOIR RD (437-11-00)", $: 9887e3 },
    { "#": "109 RESERVOIR RD (277-01-02)", $: 1363e3 },
    { "#": "144 RESERVOIR RD (278-31-00)", $: 1935700 },
    { "#": "154 RESERVOIR RD (278-30-00)", $: 2432e3 },
    { "#": "155 RESERVOIR RD (277-02-00)", $: 2195500 },
    { "#": "160 RESERVOIR RD (278-29-00)", $: 1931400 },
    { "#": "161 RESERVOIR RD (277-03-00)", $: 1666800 },
    { "#": "167 RESERVOIR RD (277-03-01)", $: 1642600 },
    { "#": "170 RESERVOIR RD (278-28-00)", $: 1940400 },
    { "#": "171 RESERVOIR RD (277-04-00)", $: 1965900 },
    { "#": "176 RESERVOIR RD (278-27-00)", $: 1623e3 },
    { "#": "177 RESERVOIR RD (277-05-00)", $: 2174100 },
    { "#": "183 RESERVOIR RD (277-06-00)", $: 1878400 },
    { "#": "186 RESERVOIR RD (278-26-00)", $: 1795800 },
    { "#": "187 RESERVOIR RD (277-06-01)", $: 1428100 },
    { "#": "191 RESERVOIR RD (277-06-02)", $: 1602800 },
    { "#": "192 RESERVOIR RD (278-25-00)", $: 2049200 },
    { "#": "197 RESERVOIR RD (277-06-03)", $: 1390800 },
    { "#": "200 RESERVOIR RD (278-24-00)", $: 2061100 },
    { "#": "201 RESERVOIR RD (277-07-00)", $: 1592500 },
    { "#": "209 RESERVOIR RD (277-08-00)", $: 1480400 },
    { "#": "210 RESERVOIR RD (278-23-00)", $: 1521500 },
    { "#": "213 RESERVOIR RD (277-09-00.9)", $: 0 },
    { "#": "215 RESERVOIR RD (277-10-00)", $: 186e4 },
    { "#": "218 RESERVOIR RD (278-22-00)", $: 1631700 },
    { "#": "221 RESERVOIR RD (277-11-00)", $: 2321400 },
    { "#": "225 RESERVOIR RD (277-12-00)", $: 2056400 },
    { "#": "226 RESERVOIR RD (278-21-00)", $: 1553700 },
    { "#": "233 RESERVOIR RD (277-12-01)", $: 8100 },
    { "#": "234 RESERVOIR RD (278-20-00)", $: 1764200 },
    { "#": "280 RESERVOIR RD (280-12-00)", $: 1981e3 },
    { "#": "285 RESERVOIR RD (266-03-00)", $: 4140100 },
    { "#": "295 RESERVOIR RD (266-02-02)", $: 1471800 },
    { "#": "295 RESERVOIR RD (266-02-04)", $: 1921800 },
    { "#": "307 RESERVOIR RD (266-02-00)", $: 1899900 },
    { "#": "315 RESERVOIR RD (266-01-00)", $: 1298700 },
    { "#": "320 RESERVOIR RD (282-01-01)", $: 33700 },
    { "#": "321 RESERVOIR RD (266-01-01)", $: 13100 },
    { "#": "6 RICE ST (307-41-00)", $: 1388200 },
    { "#": "8 RICE ST (307-40-00.9)", $: 0 },
    { "#": "9 RICE ST (306-07-00)", $: 3572900 },
    { "#": "10 RICE ST (307-39-00)", $: 990100 },
    { "#": "14 RICE ST (307-37-00.9)", $: 0 },
    { "#": "15 RICE ST (306-09-00)", $: 1155500 },
    { "#": "16 RICE ST (307-36-00.9)", $: 0 },
    { "#": "17 RICE ST (306-10-00.9)", $: 0 },
    { "#": "20 RICE ST (307-35-00.9)", $: 0 },
    { "#": "21 RICE ST (306-11-00.9)", $: 0 },
    { "#": "11 RISLEY RD (363-29-00)", $: 922700 },
    { "#": "14 RISLEY RD (359-09-10)", $: 1873200 },
    { "#": "17 RISLEY RD (363-28-00)", $: 1490700 },
    { "#": "20 RISLEY RD (359-08-00)", $: 41500 },
    { "#": "25 RISLEY RD (363-26-00)", $: 1406800 },
    { "#": "31 RISLEY RD (363-25-00)", $: 988700 },
    { "#": "36 RISLEY RD (360-11-00)", $: 1106100 },
    { "#": "37 RISLEY RD (363-23-24)", $: 826500 },
    { "#": "41 RISLEY RD (363-22-00)", $: 889200 },
    { "#": "49 RISLEY RD (363-20-00)", $: 1205e3 },
    { "#": "53 RISLEY RD (363-19-00)", $: 1676900 },
    { "#": "57 RISLEY RD (363-18-00)", $: 873700 },
    { "#": "58 RISLEY RD (361-14-15)", $: 1438200 },
    { "#": "62 RISLEY RD (361-13-00)", $: 1044e3 },
    { "#": "63 RISLEY RD (363-16-00)", $: 812400 },
    { "#": "66 RISLEY RD (361-12-00)", $: 1168200 },
    { "#": "67 RISLEY RD (363-15-00)", $: 1069700 },
    { "#": "77 RISLEY RD (367-23-00)", $: 783e3 },
    { "#": "82 RISLEY RD (362-06-00)", $: 960400 },
    { "#": "83 RISLEY RD (367-24-00)", $: 1306e3 },
    { "#": "86 RISLEY RD (362-07-00)", $: 806300 },
    { "#": "87 RISLEY RD (367-25-00)", $: 1033800 },
    { "#": "90 RISLEY RD (362-08-00)", $: 1087400 },
    { "#": "93 RISLEY RD (367-26-00)", $: 827200 },
    { "#": "98 RISLEY RD (362-09-10)", $: 991800 },
    { "#": "99 RISLEY RD (367-29-00)", $: 8900 },
    { "#": "101 RISLEY RD (367-27-28)", $: 861e3 },
    { "#": "5 ROBERTS ST (305-24-00)", $: 1305900 },
    { "#": "6 ROBERTS ST (306-01-01)", $: 1497700 },
    { "#": "7 ROBERTS ST (305-25-00)", $: 1285600 },
    { "#": "8 ROBERTS ST (306-17-00)", $: 199e4 },
    { "#": "9 ROBERTS ST (305-08-00)", $: 1556700 },
    { "#": "10 ROBERTS ST (306-16-00)", $: 1187500 },
    { "#": "13 ROBERTS ST (305-09-00)", $: 1461400 },
    { "#": "14 ROBERTS ST (306-15-00)", $: 914e3 },
    { "#": "14 ROBERTS ST (306-15-00.9)", $: 959700 },
    { "#": "16 ROBERTS ST (306-15-01.9)", $: 0 },
    { "#": "17 ROBERTS ST (305-10-00.9)", $: 0 },
    { "#": "18 ROBERTS ST (306-14-00)", $: 4677800 },
    { "#": "19 ROBERTS ST (305-11-00)", $: 2176e3 },
    { "#": "23 ROBERTS ST (305-12-00)", $: 1266900 },
    { "#": "9 ROCKLEDGE RD (375C-02-00)", $: 1789800 },
    { "#": "15 ROCKLEDGE RD (375C-03-04)", $: 799900 },
    { "#": "20 ROCKLEDGE RD (375D-08-00)", $: 937400 },
    { "#": "24 ROCKLEDGE RD (375D-06-00)", $: 576400 },
    { "#": "105 ROCKWOOD ST (353-13-00)", $: 4459900 },
    { "#": "120 ROCKWOOD ST (354-01-01)", $: 3727600 },
    { "#": "125 ROCKWOOD ST (353-11-12)", $: 6445e3 },
    { "#": "11 ROYAL RD (209-04-00)", $: 2398e3 },
    { "#": "12 ROYAL RD (209A-04-00)", $: 2255700 },
    { "#": "16 ROYAL RD (209A-03-00)", $: 2461400 },
    { "#": "19 ROYAL RD (209-05-00)", $: 2186800 },
    { "#": "20 ROYAL RD (209A-02-00)", $: 2318800 },
    { "#": "25 ROYAL RD (209-06-00)", $: 2282300 },
    { "#": "26 ROYAL RD (209A-01-00)", $: 2046300 },
    { "#": "11 RUSSELL ST (073-03-00)", $: 1274500 },
    { "#": "12 RUSSELL ST (074-22-00)", $: 1761100 },
    { "#": "15 RUSSELL ST (073-04-00)", $: 1794900 },
    { "#": "18 RUSSELL ST (074-21-00)", $: 2002400 },
    { "#": "21 RUSSELL ST (073-05-00)", $: 2413100 },
    { "#": "22 RUSSELL ST (074-20-00)", $: 2458e3 },
    { "#": "25 RUSSELL ST (073-06-00)", $: 2856300 },
    { "#": "28 RUSSELL ST (074-19-00)", $: 2404800 },
    { "#": "31 RUSSELL ST (073-07-00.9)", $: 0 },
    { "#": "32 RUSSELL ST (074-18-00)", $: 2522200 },
    { "#": "33 RUSSELL ST (073-08-00.9)", $: 0 },
    { "#": "34 RUSSELL ST (074-17-00.9)", $: 0 },
    { "#": "39 RUSSELL ST (073-09-00.9)", $: 0 },
    { "#": "42 RUSSELL ST (074-16-00)", $: 2358200 },
    { "#": "43 RUSSELL ST (073-10-00.9)", $: 0 },
    { "#": "46 RUSSELL ST (074-15-00)", $: 2273900 },
    { "#": "50 RUSSELL ST (074-14-00)", $: 2525900 },
    { "#": "50 RUSSELL ST (074-14-00.9)", $: 2998600 },
    { "#": "56 RUSSELL ST (074-13-00)", $: 3135600 },
    { "#": "62 RUSSELL ST (074-12-00)", $: 2356200 },
    { "#": "197 RUSSETT RD (380-11-00)", $: 1663400 },
    { "#": "200 RUSSETT RD (381-01-00)", $: 776600 },
    { "#": "201 RUSSETT RD (380-10-00)", $: 1343500 },
    { "#": "202 RUSSETT RD (381-02-00)", $: 935200 },
    { "#": "207 RUSSETT RD (380-09-00)", $: 2534700 },
    { "#": "208 RUSSETT RD (381-03-00)", $: 562500 },
    { "#": "213 RUSSETT RD (380-08-00)", $: 1079600 },
    { "#": "214 RUSSETT RD (381-04-00)", $: 936300 },
    { "#": "237 RUSSETT RD (383-02-00)", $: 943400 },
    { "#": "238 RUSSETT RD (384-02-00)", $: 860700 },
    { "#": "241 RUSSETT RD (383-03-00)", $: 978800 },
    { "#": "242 RUSSETT RD (384-03-00)", $: 1084500 },
    { "#": "245 RUSSETT RD (383-04-00)", $: 1213700 },
    { "#": "246 RUSSETT RD (384-04-00)", $: 1184300 },
    { "#": "249 RUSSETT RD (383-05-00)", $: 1005100 },
    { "#": "250 RUSSETT RD (384-05-00)", $: 974900 },
    { "#": "254 RUSSETT RD (384-06-00)", $: 1038600 },
    { "#": "255 RUSSETT RD (383-06-00)", $: 1287300 },
    { "#": "257 RUSSETT RD (383-07-00)", $: 843100 },
    { "#": "258 RUSSETT RD (384-07-00)", $: 1202800 },
    { "#": "261 RUSSETT RD (383-08-00)", $: 1143500 },
    { "#": "262 RUSSETT RD (384-08-00)", $: 919e3 },
    { "#": "265 RUSSETT RD (383-09-00)", $: 1439500 },
    { "#": "266 RUSSETT RD (384-09-00)", $: 1151600 },
    { "#": "269 RUSSETT RD (383-10-00)", $: 1444600 },
    { "#": "270 RUSSETT RD (384-10-00)", $: 1137600 },
    { "#": "273 RUSSETT RD (383-11-00)", $: 1214800 },
    { "#": "274 RUSSETT RD (384-11-00)", $: 895600 },
    { "#": "277 RUSSETT RD (383-12-00)", $: 907e3 },
    { "#": "291 RUSSETT RD (386-02-00)", $: 896400 },
    { "#": "292 RUSSETT RD (387-02-00)", $: 914200 },
    { "#": "295 RUSSETT RD (386-03-00)", $: 1111e3 },
    { "#": "296 RUSSETT RD (387-03-00)", $: 1191800 },
    { "#": "299 RUSSETT RD (386-04-00)", $: 978700 },
    { "#": "300 RUSSETT RD (387-04-00)", $: 1027400 },
    { "#": "303 RUSSETT RD (386-05-00)", $: 1352900 },
    { "#": "304 RUSSETT RD (387-05-00)", $: 1213700 },
    { "#": "307 RUSSETT RD (386-06-00)", $: 1089900 },
    { "#": "308 RUSSETT RD (387-06-00)", $: 1096800 },
    { "#": "311 RUSSETT RD (386-07-00)", $: 1289600 },
    { "#": "312 RUSSETT RD (387-07-00)", $: 1320900 },
    { "#": "315 RUSSETT RD (386-08-00)", $: 953700 },
    { "#": "316 RUSSETT RD (387-08-00)", $: 1095200 },
    { "#": "319 RUSSETT RD (386-09-00)", $: 1456200 },
    { "#": "320 RUSSETT RD (387-09-00)", $: 1271600 },
    { "#": "333 RUSSETT RD (390-15-00)", $: 923300 },
    { "#": "336 RUSSETT RD (389-02-00)", $: 1233700 },
    { "#": "339 RUSSETT RD (390-16-00)", $: 1185400 },
    { "#": "340 RUSSETT RD (389-03-00)", $: 1154100 },
    { "#": "343 RUSSETT RD (390-17-00)", $: 1168200 },
    { "#": "344 RUSSETT RD (389-04-00)", $: 1633200 },
    { "#": "347 RUSSETT RD (390-18-00)", $: 1210700 },
    { "#": "348 RUSSETT RD (389-05-00)", $: 1056600 },
    { "#": "352 RUSSETT RD (389-06-00)", $: 1308800 },
    { "#": "353 RUSSETT RD (390-19-00)", $: 1073500 },
    { "#": "358 RUSSETT RD (389-07-00)", $: 1292200 },
    { "#": "359 RUSSETT RD (390-20-00)", $: 1128400 },
    { "#": "362 RUSSETT RD (389-08-00)", $: 1022300 },
    { "#": "365 RUSSETT RD (390-21-00)", $: 1379200 },
    { "#": "366 RUSSETT RD (389-09-00)", $: 738e3 },
    { "#": "371 RUSSETT RD (390-22-00)", $: 127e4 },
    { "#": "372 RUSSETT RD (389-10-00)", $: 1161700 },
    { "#": "377 RUSSETT RD (390-23-00)", $: 1114700 },
    { "#": "378 RUSSETT RD (389-11-00)", $: 1288e3 },
    { "#": "383 RUSSETT RD (390-24-00)", $: 1078700 },
    { "#": "9 SALISBURY RD (100-02-00)", $: 2668100 },
    { "#": "12 SALISBURY RD (101-24-00)", $: 3005700 },
    { "#": "15 SALISBURY RD (100-03-00)", $: 2689900 },
    { "#": "18 SALISBURY RD (101-23-00)", $: 2221e3 },
    { "#": "21 SALISBURY RD (100-04-00)", $: 2985e3 },
    { "#": "22 SALISBURY RD (101-22-00)", $: 2887800 },
    { "#": "25 SALISBURY RD (100-05-00)", $: 2323300 },
    { "#": "26 SALISBURY RD (101-21-00)", $: 2498100 },
    { "#": "29 SALISBURY RD (100-06-00)", $: 2340400 },
    { "#": "32 SALISBURY RD (101-20-00)", $: 2214900 },
    { "#": "36 SALISBURY RD (101-19-00)", $: 1998100 },
    { "#": "37 SALISBURY RD (100-07-00)", $: 3194400 },
    { "#": "40 SALISBURY RD (101-18-00)", $: 2195700 },
    { "#": "43 SALISBURY RD (100-08-00)", $: 2340600 },
    { "#": "47 SALISBURY RD (100-09-00)", $: 2497800 },
    { "#": "48 SALISBURY RD (101-17-00)", $: 2384200 },
    { "#": "51 SALISBURY RD (100-10-00)", $: 3481200 },
    { "#": "52 SALISBURY RD (101-16-00)", $: 2073600 },
    { "#": "71 SALISBURY RD (099-02-00)", $: 2287e3 },
    { "#": "72 SALISBURY RD (102-36-01)", $: 2321900 },
    { "#": "74 SALISBURY RD (102-36-00)", $: 2137e3 },
    { "#": "77 SALISBURY RD (099-03-00)", $: 4002100 },
    { "#": "78 SALISBURY RD (102-35-00)", $: 2874400 },
    { "#": "84 SALISBURY RD (102-34-00)", $: 2606500 },
    { "#": "85 SALISBURY RD (099-04-00)", $: 2385600 },
    { "#": "90 SALISBURY RD (102-33-00)", $: 2588e3 },
    { "#": "93 SALISBURY RD (099-05-00)", $: 3088100 },
    { "#": "100 SALISBURY RD (102-32-00)", $: 2347200 },
    { "#": "102 SALISBURY RD (102-31-00)", $: 1884100 },
    { "#": "105 SALISBURY RD (103-01-00)", $: 2647900 },
    { "#": "106 SALISBURY RD (102-30-00)", $: 2878300 },
    { "#": "111 SALISBURY RD (103-02-00)", $: 2490600 },
    { "#": "112 SALISBURY RD (102-29-00)", $: 3109200 },
    { "#": "118 SALISBURY RD (102-28-00)", $: 2692800 },
    { "#": "121 SALISBURY RD (103-03-00)", $: 2464100 },
    { "#": "133 SALISBURY RD (105-01-00)", $: 4134800 },
    { "#": "134 SALISBURY RD (106-13-00)", $: 1592600 },
    { "#": "134 SALISBURY RD (106-13-00.9)", $: 3275100 },
    { "#": "140 SALISBURY RD (106-12-00)", $: 1839700 },
    { "#": "141 SALISBURY RD (105-02-00)", $: 3423200 },
    { "#": "145 SALISBURY RD (105-03-00.9)", $: 0 },
    { "#": "151 SALISBURY RD (105-04-00)", $: 22e5 },
    { "#": "154 SALISBURY RD (107-20-00)", $: 2185e3 },
    { "#": "156 SALISBURY RD (107-19-00)", $: 2108200 },
    { "#": "157 SALISBURY RD (105-05-00)", $: 3964700 },
    { "#": "158 SALISBURY RD (107-18-00)", $: 1869200 },
    { "#": "160 SALISBURY RD (107-17-00)", $: 2029200 },
    { "#": "167 SALISBURY RD (105-06-00)", $: 1766800 },
    { "#": "167 SALISBURY RD (105-06-00.9)", $: 2678800 },
    { "#": "29 SARGENT BEECHWD (330-19-00)", $: 5356500 },
    { "#": "30 SARGENT BEECHWD (330-15-05)", $: 2230800 },
    { "#": "33 SARGENT BEECHWD (330-17-18)", $: 6643100 },
    { "#": "40 SARGENT BEECHWD (330-15-04)", $: 2080100 },
    { "#": "50 SARGENT BEECHWD (330-15-03)", $: 1316100 },
    { "#": "60 SARGENT BEECHWD (330-32-00)", $: 4497600 },
    { "#": "75 SARGENT BEECHWD (330-16-00)", $: 5583300 },
    { "#": "82 SARGENT BEECHWD (330-31-00)", $: 4669700 },
    { "#": "0 SARGENT CSWY (331-08-00)", $: 163400 },
    { "#": "21 SARGENT CSWY (331-03-01)", $: 6300200 },
    { "#": "40 SARGENT CSWY (330-25-00)", $: 8321700 },
    { "#": "46 SARGENT CSWY (330-28-00)", $: 4544900 },
    { "#": "50 SARGENT CSWY (330-27-00)", $: 5960500 },
    { "#": "53 SARGENT CSWY (331-01-07)", $: 19675100 },
    { "#": "56 SARGENT CSWY (330-29-00)", $: 5552300 },
    { "#": "42 SARGENT RD (330-20-02)", $: 595800 },
    { "#": "47 SARGENT RD (329-17-00)", $: 8582300 },
    { "#": "54 SARGENT RD (330-20-01)", $: 6796300 },
    { "#": "75 SARGENT RD (333-04-00)", $: 6544500 },
    { "#": "82 SARGENT RD (330-26-00)", $: 7304700 },
    { "#": "90 SARGENT RD (330-30-00)", $: 11843800 },
    { "#": "99 SARGENT RD (333-05-00)", $: 8591100 },
    { "#": "106 SARGENT RD (330-23-00)", $: 5172200 },
    { "#": "115 SARGENT RD (333-06-00)", $: 5657500 },
    { "#": "120 SARGENT RD (330-24-00)", $: 4856900 },
    { "#": "136 SARGENT RD (331-04-05)", $: 51e4 },
    { "#": "145 SARGENT RD (333-07-00)", $: 8117800 },
    { "#": "165 SARGENT RD (333-08-01)", $: 4324900 },
    { "#": "170 SARGENT RD (332-10-00)", $: 1096500 },
    { "#": "185 SARGENT RD (333-08-02)", $: 3365500 },
    { "#": "209 SARGENT RD (333-08-00)", $: 16362900 },
    { "#": "211 SARGENT RD (333-09-00)", $: 3279800 },
    { "#": "224 SARGENT RD (332-07-00)", $: 3314400 },
    { "#": "225 SARGENT RD (333-10-00)", $: 4563200 },
    { "#": "235 SARGENT RD (333-11-00)", $: 3942600 },
    { "#": "19 SCHOOL ST (171-38-00)", $: 1206300 },
    { "#": "21 SCHOOL ST (171-39-00)", $: 972500 },
    { "#": "27 SCHOOL ST (171-40-00)", $: 979500 },
    { "#": "29 SCHOOL ST (171-41-00)", $: 1104400 },
    { "#": "31 SCHOOL ST (171-42-00)", $: 863e3 },
    { "#": "33 SCHOOL ST (171-43-00)", $: 1081100 },
    { "#": "39 SCHOOL ST (171-44-00)", $: 863300 },
    { "#": "41 SCHOOL ST (171-44-01)", $: 911700 },
    { "#": "43 SCHOOL ST (171-44-02)", $: 1084800 },
    { "#": "45 SCHOOL ST (171-44-03)", $: 1113e3 },
    { "#": "47 SCHOOL ST (171-45-00)", $: 1346500 },
    { "#": "50 SCHOOL ST (172-03-00)", $: 42619100 },
    { "#": "53 SCHOOL ST (171-27-00)", $: 12198600 },
    { "#": "69 SCHOOL ST (171-48-00)", $: 1004e3 },
    { "#": "69 SCHOOL ST (171-48-02)", $: 3466400 },
    { "#": "71 SCHOOL ST (171-48-01)", $: 1026800 },
    { "#": "81 SCHOOL ST (171-49-00)", $: 1501700 },
    { "#": "89 SCHOOL ST (171-50-00)", $: 1270100 },
    { "#": "105 SCHOOL ST (171-51-00)", $: 1292e3 },
    { "#": "115 SCHOOL ST (171-52-00.9)", $: 0 },
    { "#": "8 SEARLE AVE (177-34-00.9)", $: 0 },
    { "#": "9 SEARLE AVE (177-25-02)", $: 1507500 },
    { "#": "14 SEARLE AVE (177-33-00)", $: 2080400 },
    { "#": "15 SEARLE AVE (177-26-00)", $: 2394600 },
    { "#": "19 SEARLE AVE (177-27-00)", $: 2108700 },
    { "#": "20 SEARLE AVE (177-32-00)", $: 1888400 },
    { "#": "21 SEARLE AVE (177-28-00.9)", $: 0 },
    { "#": "22 SEARLE AVE (177-31-00)", $: 1597100 },
    { "#": "23 SEARLE AVE (177-29-00)", $: 2178100 },
    { "#": "26 SEARLE AVE (177-30-00)", $: 1982100 },
    { "#": "8 SEARS RD (349-01-02)", $: 3808e3 },
    { "#": "9 SEARS RD (347-12-00)", $: 4606600 },
    { "#": "20 SEARS RD (349-18-00)", $: 6721400 },
    { "#": "21 SEARS RD (347-13-02)", $: 8691500 },
    { "#": "25 SEARS RD (347-13-03)", $: 4949400 },
    { "#": "29 SEARS RD (347-14-04)", $: 4738400 },
    { "#": "33 SEARS RD (347-14-01)", $: 3943500 },
    { "#": "37 SEARS RD (347-14-02)", $: 9875e3 },
    { "#": "41 SEARS RD (347-14-03)", $: 18829500 },
    { "#": "52 SEARS RD (350-16-00)", $: 2495900 },
    { "#": "71 SEARS RD (347-15-00)", $: 8185400 },
    { "#": "80 SEARS RD (350-21-00)", $: 11848400 },
    { "#": "85 SEARS RD (347-16-00)", $: 3400700 },
    { "#": "88 SEARS RD (350-22-00)", $: 2609e3 },
    { "#": "96 SEARS RD (350-14-00)", $: 5165e3 },
    { "#": "5 SEAVER ST (251-08-00)", $: 2018300 },
    { "#": "10 SEAVER ST (251-02-01)", $: 34400 },
    { "#": "53 SEAVER ST (251-13-00)", $: 3728800 },
    { "#": "73 SEAVER ST (251-01-00)", $: 6184700 },
    { "#": "80 SEAVER ST (252-01-00)", $: 6795600 },
    { "#": "87 SEAVER ST (251-02-00)", $: 3615e3 },
    { "#": "91 SEAVER ST (251-10-00)", $: 3789200 },
    { "#": "93 SEAVER ST (251-09-00)", $: 3024700 },
    { "#": "99 SEAVER ST (251-02-02)", $: 2992900 },
    { "#": "105 SEAVER ST (251-02-03)", $: 3122100 },
    { "#": "111 SEAVER ST (251-03-00)", $: 2663e3 },
    { "#": "120 SEAVER ST (250-08-10.9)", $: 0 },
    { "#": "121 SEAVER ST (251-03-01)", $: 3137500 },
    { "#": "125 SEAVER ST (251-03-03)", $: 1662600 },
    { "#": "141 SEAVER ST (251-04-00)", $: 3814700 },
    { "#": "155 SEAVER ST (251-04-01)", $: 2577300 },
    { "#": "9 SEWALL AVE (158-10-00)", $: 19237400 },
    { "#": "10 SEWALL AVE (162-02-00)", $: 10848400 },
    { "#": "51 SEWALL AVE (159-02-00.9)", $: 0 },
    { "#": "53 SEWALL AVE (159-03-00)", $: 1015500 },
    { "#": "55 SEWALL AVE (159-03-01.9)", $: 0 },
    { "#": "64 SEWALL AVE (160-01-12.9)", $: 0 },
    { "#": "70 SEWALL AVE (160-11-00.9)", $: 0 },
    { "#": "92 SEWALL AVE (124-01-00)", $: 3456400 },
    { "#": "97 SEWALL AVE (125-02-00.9)", $: 0 },
    { "#": "98 SEWALL AVE (124-30-00.9)", $: 0 },
    { "#": "103 SEWALL AVE (125-03-00.9)", $: 0 },
    { "#": "115 SEWALL AVE (125-04-05.9)", $: 0 },
    { "#": "120 SEWALL AVE (124-29-00.9)", $: 0 },
    { "#": "122 SEWALL AVE (124-28-00.9)", $: 0 },
    { "#": "123 SEWALL AVE (125-06-00.9)", $: 0 },
    { "#": "126 SEWALL AVE (124-27-00.9)", $: 0 },
    { "#": "128 SEWALL AVE (124-26-00.9)", $: 0 },
    { "#": "131 SEWALL AVE (125-07-00.9)", $: 0 },
    { "#": "132 SEWALL AVE (124-25-00.9)", $: 0 },
    { "#": "134 SEWALL AVE (124-24-00.9)", $: 0 },
    { "#": "138 SEWALL AVE (124-23-00.9)", $: 0 },
    { "#": "140 SEWALL AVE (124-22-00.9)", $: 0 },
    { "#": "154 SEWALL AVE (123-11-00)", $: 2226e3 },
    { "#": "155 SEWALL AVE (122-05-02)", $: 2339100 },
    { "#": "160 SEWALL AVE (123-10-00)", $: 2797500 },
    { "#": "161 SEWALL AVE (122-06-00)", $: 2623900 },
    { "#": "6 SHAILER ST (082-26-00.9)", $: 0 },
    { "#": "9 SHAILER ST (081-04-00)", $: 2030800 },
    { "#": "10 SHAILER ST (082-25-00)", $: 1627e3 },
    { "#": "10 SHAILER ST (082-25-00.9)", $: 5005600 },
    { "#": "15 SHAILER ST (081-05-00)", $: 2678200 },
    { "#": "2 SHAW RD (396-01-00)", $: 1544700 },
    { "#": "5 SHAW RD (395-01-00)", $: 1342900 },
    { "#": "11 SHAW RD (395-02-00)", $: 1610300 },
    { "#": "16 SHAW RD (396-27-00)", $: 1559500 },
    { "#": "17 SHAW RD (395-03-00)", $: 1378700 },
    { "#": "21 SHAW RD (395-04-00)", $: 1059100 },
    { "#": "24 SHAW RD (396-26-00)", $: 1470200 },
    { "#": "29 SHAW RD (395-05-00)", $: 1581300 },
    { "#": "34 SHAW RD (396-25-00)", $: 2928100 },
    { "#": "35 SHAW RD (395-06-00)", $: 1990700 },
    { "#": "38 SHAW RD (396-24-00)", $: 1362300 },
    { "#": "43 SHAW RD (395-07-00)", $: 1310500 },
    { "#": "46 SHAW RD (396-23-00)", $: 1671300 },
    { "#": "47 SHAW RD (395-08-00)", $: 2563900 },
    { "#": "54 SHAW RD (396-22-00)", $: 1715100 },
    { "#": "55 SHAW RD (395-09-00)", $: 2117200 },
    { "#": "60 SHAW RD (396-21-00)", $: 1500100 },
    { "#": "61 SHAW RD (395-10-00)", $: 1953600 },
    { "#": "67 SHAW RD (395-11-00)", $: 2407100 },
    { "#": "70 SHAW RD (396-20-00)", $: 2075500 },
    { "#": "75 SHAW RD (395-12-00)", $: 1935500 },
    { "#": "78 SHAW RD (396-19-00)", $: 2708100 },
    { "#": "83 SHAW RD (395-13-00)", $: 1629200 },
    { "#": "86 SHAW RD (396-18-00)", $: 3560900 },
    { "#": "90 SHAW RD (396-15-00)", $: 81700 },
    { "#": "91 SHAW RD (395-14-00)", $: 1934e3 },
    { "#": "94 SHAW RD (396-17-00)", $: 2403600 },
    { "#": "99 SHAW RD (395-15-00)", $: 1425500 },
    { "#": "100 SHAW RD (396-16-00)", $: 1477800 },
    { "#": "107 SHAW RD (395-16-00)", $: 1956100 },
    { "#": "117 SHAW RD (395-17-00)", $: 1235900 },
    { "#": "123 SHAW RD (395-18-20)", $: 2687100 },
    { "#": "133 SHAW RD (395-19-00)", $: 1998100 },
    { "#": "140 SHAW RD (397-13-14)", $: 1929700 },
    { "#": "150 SHAW RD (400-03-00)", $: 1602700 },
    { "#": "151 SHAW RD (399-62-00)", $: 1528800 },
    { "#": "155 SHAW RD (399-63-00)", $: 1667100 },
    { "#": "158 SHAW RD (400-02-00)", $: 1537e3 },
    { "#": "161 SHAW RD (399-64-00)", $: 1416200 },
    { "#": "168 SHAW RD (400-01-00)", $: 1204500 },
    { "#": "171 SHAW RD (399-65-00)", $: 1793800 },
    { "#": "175 SHAW RD (399-66-00)", $: 1304600 },
    { "#": "8 SHEAFE ST (428-06-00)", $: 1662100 },
    { "#": "14 SHEAFE ST (428-05-00)", $: 1999400 },
    { "#": "18 SHEAFE ST (428-04-00)", $: 1163500 },
    { "#": "21 SHEAFE ST (427-12-00)", $: 1538700 },
    { "#": "22 SHEAFE ST (428-03-01)", $: 1377200 },
    { "#": "25 SHEAFE ST (427-13-00)", $: 1142600 },
    { "#": "26 SHEAFE ST (428-03-00)", $: 1623900 },
    { "#": "30 SHEAFE ST (428-02-02)", $: 1784e3 },
    { "#": "34 SHEAFE ST (428-02-00.9)", $: 0 },
    { "#": "35 SHEAFE ST (427-15-00)", $: 1264600 },
    { "#": "39 SHEAFE ST (427-16-00)", $: 1663e3 },
    { "#": "41 SHEAFE ST (427-17-00)", $: 8200 },
    { "#": "201 SHERMAN RD (388B-01-01)", $: 8669500 },
    { "#": "6 SHERRIN RD (360-09-00)", $: 969800 },
    { "#": "9 SHERRIN RD (361-16-00)", $: 1397100 },
    { "#": "10 SHERRIN RD (360-08-00)", $: 891500 },
    { "#": "11 SHERRIN RD (361-17-00)", $: 957900 },
    { "#": "14 SHERRIN RD (360-07-00)", $: 894400 },
    { "#": "15 SHERRIN RD (361-18-00)", $: 1022800 },
    { "#": "19 SHERRIN RD (361-19-00)", $: 1099300 },
    { "#": "20 SHERRIN RD (360-06-00)", $: 888700 },
    { "#": "24 SHERRIN RD (360-05-00)", $: 1516100 },
    { "#": "25 SHERRIN RD (361-20-00)", $: 1204400 },
    { "#": "32 SHERRIN RD (360-03-00)", $: 1226100 },
    { "#": "10 SHORT ST (089-34-35)", $: 11438e3 },
    { "#": "15 SHORT ST (090-07-00.9)", $: 0 },
    { "#": "8 SINGLETREE RD (437-56-00)", $: 7031900 },
    { "#": "9 SINGLETREE RD (437-45-00)", $: 4522e3 },
    { "#": "35 SINGLETREE RD (437-46-00)", $: 6676600 },
    { "#": "40 SINGLETREE RD (437-52-00)", $: 8919700 },
    { "#": "45 SINGLETREE RD (437-47-00)", $: 3871100 },
    { "#": "45 SINGLETREE RD (437-47-01)", $: 4279800 },
    { "#": "55 SINGLETREE RD (437-50-00)", $: 8305400 },
    { "#": "55 SINGLETREE RD (437-50-51)", $: 17428900 },
    { "#": "60 SINGLETREE RD (437-51-00)", $: 0 },
    { "#": "5 SMYTHE ST (187-06-01)", $: 1861600 },
    { "#": "6 SMYTHE ST (188-03-00)", $: 1563100 },
    { "#": "7 SMYTHE ST (187-07-00)", $: 2378300 },
    { "#": "10 SMYTHE ST (188-02-00)", $: 1098500 },
    { "#": "14 SMYTHE ST (188-01-00)", $: 1412900 },
    { "#": "1 SOMERSET RD (207-01-00)", $: 2151500 },
    { "#": "9 SOMERSET RD (207-02-00)", $: 3155700 },
    { "#": "14 SOMERSET RD (206-15-00)", $: 1781100 },
    { "#": "18 SOMERSET RD (206-14-00)", $: 2395100 },
    { "#": "21 SOMERSET RD (208-11-00)", $: 1896300 },
    { "#": "24 SOMERSET RD (206-13-00)", $: 2236e3 },
    { "#": "27 SOMERSET RD (208-12-00)", $: 2326800 },
    { "#": "28 SOMERSET RD (206-12-00)", $: 2124800 },
    { "#": "33 SOMERSET RD (208-13-00)", $: 2377700 },
    { "#": "34 SOMERSET RD (206-11-00)", $: 1936100 },
    { "#": "39 SOMERSET RD (208-14-00)", $: 2273500 },
    { "#": "40 SOMERSET RD (206-10-00)", $: 2394700 },
    { "#": "43 SOMERSET RD (208-15-00)", $: 2169100 },
    { "#": "59 SOMERSET RD (205A-01-00)", $: 2105800 },
    { "#": "64 SOMERSET RD (205-14-00)", $: 2457e3 },
    { "#": "65 SOMERSET RD (205A-02-00)", $: 2169100 },
    { "#": "69 SOMERSET RD (205A-03-00)", $: 1949400 },
    { "#": "74 SOMERSET RD (205-13-00)", $: 2102400 },
    { "#": "75 SOMERSET RD (205A-04-00)", $: 2057300 },
    { "#": "79 SOMERSET RD (205A-05-00)", $: 2077900 },
    { "#": "80 SOMERSET RD (205-12-00)", $: 2119100 },
    { "#": "85 SOMERSET RD (205A-06-00)", $: 2091700 },
    { "#": "86 SOMERSET RD (205-11-01)", $: 1901700 },
    { "#": "91 SOMERSET RD (205A-07-00)", $: 2121400 },
    { "#": "92 SOMERSET RD (205-11-00)", $: 1903200 },
    { "#": "97 SOMERSET RD (205A-07-01)", $: 1882500 },
    { "#": "98 SOMERSET RD (205-10-01)", $: 1861800 },
    { "#": "104 SOMERSET RD (205-10-00)", $: 1944500 },
    { "#": "108 SOMERSET RD (205-09-00)", $: 1935500 },
    { "#": "114 SOMERSET RD (205-08-00)", $: 1992300 },
    { "#": "2 SOUTH ST (370-01-00)", $: 4026700 },
    { "#": "5 SOUTH ST (372-05-00)", $: 1915300 },
    { "#": "9 SOUTH ST (372-06-00)", $: 1280400 },
    { "#": "16 SOUTH ST (369-14-00)", $: 2241900 },
    { "#": "21 SOUTH ST (372-07-00)", $: 2471e3 },
    { "#": "28 SOUTH ST (371-19-00)", $: 1185300 },
    { "#": "33 SOUTH ST (372-01-00)", $: 1567600 },
    { "#": "57 SOUTH ST (399-47-00)", $: 1300900 },
    { "#": "62 SOUTH ST (373-01-00)", $: 979600 },
    { "#": "75 SOUTH ST (374-19-00)", $: 1789700 },
    { "#": "76 SOUTH ST (373-02-00)", $: 868800 },
    { "#": "81 SOUTH ST (374-20-00)", $: 1189400 },
    { "#": "87 SOUTH ST (374-21-00)", $: 1127900 },
    { "#": "95 SOUTH ST (374-22-00)", $: 1446400 },
    { "#": "99 SOUTH ST (374-23-00)", $: 1462100 },
    { "#": "105 SOUTH ST (374-24-00)", $: 1142500 },
    { "#": "111 SOUTH ST (374-25-00)", $: 835300 },
    { "#": "117 SOUTH ST (374-26-00)", $: 949400 },
    { "#": "123 SOUTH ST (374-27-00)", $: 925e3 },
    { "#": "127 SOUTH ST (374-28-00)", $: 1227300 },
    { "#": "131 SOUTH ST (374-29-00)", $: 731900 },
    { "#": "139 SOUTH ST (374-30-00)", $: 1263400 },
    { "#": "143 SOUTH ST (374-31-00)", $: 912800 },
    { "#": "151 SOUTH ST (374-32-00)", $: 985500 },
    { "#": "157 SOUTH ST (374-01-00)", $: 1153800 },
    { "#": "173 SOUTH ST (391-01-00)", $: 670500 },
    { "#": "179 SOUTH ST (391-02-00)", $: 1229e3 },
    { "#": "180 SOUTH ST (375A-01-00)", $: 1404300 },
    { "#": "186 SOUTH ST (375A-13-00)", $: 1415500 },
    { "#": "187 SOUTH ST (391-03-00)", $: 967700 },
    { "#": "193 SOUTH ST (391-04-00)", $: 1165500 },
    { "#": "199 SOUTH ST (391-05-00)", $: 1210100 },
    { "#": "200 SOUTH ST (375B-01-00)", $: 866900 },
    { "#": "205 SOUTH ST (391-06-00)", $: 1340100 },
    { "#": "207 SOUTH ST (391-07-01)", $: 0 },
    { "#": "208 SOUTH ST (375B-16-00)", $: 1961900 },
    { "#": "211 SOUTH ST (391-07-00)", $: 1131200 },
    { "#": "217 SOUTH ST (391-08-00)", $: 1270100 },
    { "#": "220 SOUTH ST (375C-15-00)", $: 1252200 },
    { "#": "223 SOUTH ST (391-09-00)", $: 1332400 },
    { "#": "227 SOUTH ST (391-10-00)", $: 1199400 },
    { "#": "228 SOUTH ST (375C-14-00)", $: 1071900 },
    { "#": "231 SOUTH ST (391-11-00)", $: 1351400 },
    { "#": "234 SOUTH ST (375C-13-00)", $: 1074900 },
    { "#": "239 SOUTH ST (391-12-00)", $: 1156300 },
    { "#": "240 SOUTH ST (375C-12-00)", $: 939e3 },
    { "#": "255 SOUTH ST (385-10-00)", $: 931900 },
    { "#": "257 SOUTH ST (385-11-00)", $: 640300 },
    { "#": "261 SOUTH ST (385-12-00)", $: 1116e3 },
    { "#": "265 SOUTH ST (385-13-00)", $: 1178200 },
    { "#": "269 SOUTH ST (385-14-00)", $: 1100400 },
    { "#": "270 SOUTH ST (375F-04-00)", $: 1297900 },
    { "#": "275 SOUTH ST (385-15-16)", $: 2034400 },
    { "#": "278 SOUTH ST (376A-01-02)", $: 1240600 },
    { "#": "289 SOUTH ST (385-17-00)", $: 2031500 },
    { "#": "300 SOUTH ST (376A-01-00)", $: 21335300 },
    { "#": "307 SOUTH ST (382-15-00)", $: 1223900 },
    { "#": "311 SOUTH ST (382-16-00)", $: 1229100 },
    { "#": "317 SOUTH ST (382-17-00)", $: 979700 },
    { "#": "321 SOUTH ST (382-18-00)", $: 1839500 },
    { "#": "327 SOUTH ST (382-19-00)", $: 923700 },
    { "#": "328 SOUTH ST (376A-32-00)", $: 731100 },
    { "#": "331 SOUTH ST (382-20-00)", $: 1198600 },
    { "#": "335 SOUTH ST (382-21-00)", $: 916e3 },
    { "#": "336 SOUTH ST (377-14-00)", $: 1413800 },
    { "#": "339 SOUTH ST (382-22-00)", $: 897900 },
    { "#": "363 SOUTH ST (379-03-00)", $: 984400 },
    { "#": "367 SOUTH ST (379-02-00)", $: 1222e3 },
    { "#": "3 SPOONER RD (280-03-00)", $: 1948100 },
    { "#": "10 SPOONER RD (281-32-00)", $: 5165700 },
    { "#": "18 SPOONER RD (281-31-00)", $: 3000700 },
    { "#": "19 SPOONER RD (280-04-00)", $: 1261600 },
    { "#": "24 SPOONER RD (281-30-00)", $: 2875400 },
    { "#": "34 SPOONER RD (281-29-00)", $: 4274800 },
    { "#": "35 SPOONER RD (280-05-00)", $: 2339300 },
    { "#": "41 SPOONER RD (280-06-00)", $: 2716500 },
    { "#": "50 SPOONER RD (281-28-00)", $: 2845500 },
    { "#": "51 SPOONER RD (280-07-00)", $: 2664200 },
    { "#": "56 SPOONER RD (281-27-00)", $: 2116500 },
    { "#": "61 SPOONER RD (280-08-00)", $: 3745600 },
    { "#": "64 SPOONER RD (281-26-00)", $: 2296800 },
    { "#": "71 SPOONER RD (280-09-01)", $: 42e4 },
    { "#": "72 SPOONER RD (281-25-00)", $: 3115200 },
    { "#": "81 SPOONER RD (280-09-02)", $: 2670100 },
    { "#": "84 SPOONER RD (281-24-17)", $: 2266600 },
    { "#": "91 SPOONER RD (280-10-00)", $: 2837700 },
    { "#": "92 SPOONER RD (281-23-18)", $: 2984100 },
    { "#": "98 SPOONER RD (281-22-00)", $: 2321600 },
    { "#": "106 SPOONER RD (281-21-01)", $: 2641100 },
    { "#": "15 ST MARYS CT (001-26-00)", $: 2925100 },
    { "#": "19 ST MARYS CT (001-27-00)", $: 2165400 },
    { "#": "23 ST MARYS CT (001-28-00)", $: 1676600 },
    { "#": "25 ST MARYS CT (001-29-00)", $: 1489800 },
    { "#": "27 ST MARYS CT (001-30-00)", $: 1825600 },
    { "#": "29 ST MARYS CT (001-31-00)", $: 1588300 },
    { "#": "29 ST MARYS ST (001-31-01)", $: 43e3 },
    { "#": "37 ST MARYS ST (005-04-00)", $: 11157500 },
    { "#": "49 ST MARYS ST (005-05-00)", $: 3184400 },
    { "#": "65 ST MARYS ST (002-17-00)", $: 3655800 },
    { "#": "71 ST MARYS ST (002-18-00.9)", $: 0 },
    { "#": "121 ST MARYS ST (112-26-01)", $: 860800 },
    { "#": "2 ST PAUL ST (155-06-02.9)", $: 0 },
    { "#": "18 ST PAUL ST (155-05-00)", $: 1409100 },
    { "#": "20 ST PAUL ST (155-04-00.9)", $: 0 },
    { "#": "33 ST PAUL ST (132-03-00.9)", $: 0 },
    { "#": "36 ST PAUL ST (155-03-00.9)", $: 0 },
    { "#": "43 ST PAUL ST (132-06-18)", $: 4045900 },
    { "#": "51 ST PAUL ST (132-07-00.9)", $: 0 },
    { "#": "53 ST PAUL ST (132-08-00.9)", $: 0 },
    { "#": "67 ST PAUL ST (132-09-00.9)", $: 0 },
    { "#": "75 ST PAUL ST (126-22-00.9)", $: 0 },
    { "#": "79 ST PAUL ST (126-23-00.9)", $: 0 },
    { "#": "83 ST PAUL ST (126-24-00.9)", $: 0 },
    { "#": "89 ST PAUL ST (126-25-00.9)", $: 0 },
    { "#": "93 ST PAUL ST (126-42-00)", $: 984100 },
    { "#": "93 ST PAUL ST (126-42-00.9)", $: 1169200 },
    { "#": "96 ST PAUL ST (158-01-00.9)", $: 0 },
    { "#": "97 ST PAUL ST (126-43-00)", $: 1759100 },
    { "#": "97 ST PAUL ST (126-43-00.9)", $: 1829500 },
    { "#": "100 ST PAUL ST (158-24-00.9)", $: 0 },
    { "#": "101 ST PAUL ST (126-44-00)", $: 1973600 },
    { "#": "105 ST PAUL ST (126-45-00)", $: 1710100 },
    { "#": "108 ST PAUL ST (158-23-00.9)", $: 0 },
    { "#": "109 ST PAUL ST (126-46-49)", $: 10503300 },
    { "#": "123 ST PAUL ST (125-24-00.9)", $: 0 },
    { "#": "125 ST PAUL ST (125-24-01)", $: 396e4 },
    { "#": "129 ST PAUL ST (125-24-02)", $: 3295700 },
    { "#": "135 ST PAUL ST (125-25-00.9)", $: 0 },
    { "#": "143 ST PAUL ST (125-01-00)", $: 4128700 },
    { "#": "150 ST PAUL ST (160-07-09.9)", $: 0 },
    { "#": "153 ST PAUL ST (124-01-02)", $: 4237e3 },
    { "#": "153 ST PAUL ST (124-02-00)", $: 1766100 },
    { "#": "159 ST PAUL ST (124-03-00.9)", $: 0 },
    { "#": "180 ST PAUL ST (043-08-00)", $: 3113100 },
    { "#": "182 ST PAUL ST (043-07-00)", $: 2653600 },
    { "#": "184 ST PAUL ST (043-06-00)", $: 2921100 },
    { "#": "194 ST PAUL ST (043-05-00.9)", $: 0 },
    { "#": "195 ST PAUL ST (042-12-00.9)", $: 0 },
    { "#": "196 ST PAUL ST (043-04-00)", $: 2989200 },
    { "#": "198 ST PAUL ST (043-03-00)", $: 3726900 },
    { "#": "199 ST PAUL ST (042-13-00)", $: 2537900 },
    { "#": "200 ST PAUL ST (043-02-00.9)", $: 0 },
    { "#": "201 ST PAUL ST (042-01-00.9)", $: 0 },
    { "#": "202 ST PAUL ST (043-01-00)", $: 4424700 },
    { "#": "209 ST PAUL ST (041-16-00.9)", $: 0 },
    { "#": "211 ST PAUL ST (041-17-00)", $: 3476300 },
    { "#": "215 ST PAUL ST (041-18-00)", $: 3259700 },
    { "#": "216 ST PAUL ST (040-01-01.9)", $: 0 },
    { "#": "217 ST PAUL ST (041-19-00)", $: 2966900 },
    { "#": "221 ST PAUL ST (041-20-00)", $: 2930200 },
    { "#": "223 ST PAUL ST (041-21-00)", $: 2739200 },
    { "#": "229 ST PAUL ST (041-01-00)", $: 8211600 },
    { "#": "237 ST PAUL ST (039-10-00)", $: 2686400 },
    { "#": "245 ST PAUL ST (039-11-00)", $: 165400 },
    { "#": "250 ST PAUL ST (038-01-00)", $: 10511e3 },
    { "#": "251 ST PAUL ST (039-12-00.9)", $: 0 },
    { "#": "255 ST PAUL ST (039-13-00.9)", $: 0 },
    { "#": "259 ST PAUL ST (039-14-00)", $: 2403700 },
    { "#": "265 ST PAUL ST (039-15-00)", $: 2288600 },
    { "#": "271 ST PAUL ST (039-16-00)", $: 1489200 },
    { "#": "277 ST PAUL ST (039-17-00)", $: 2633300 },
    { "#": "281 ST PAUL ST (026-10-11)", $: 8288200 },
    { "#": "303 ST PAUL ST (025-01-00)", $: 11430700 },
    { "#": "315 ST PAUL ST (022-19-00.9)", $: 0 },
    { "#": "317 ST PAUL ST (022-20-00)", $: 3172800 },
    { "#": "319 ST PAUL ST (022-21-00.9)", $: 0 },
    { "#": "323 ST PAUL ST (022-22-00.9)", $: 0 },
    { "#": "325 ST PAUL ST (022-23-00)", $: 2702700 },
    { "#": "327 ST PAUL ST (022-24-00.9)", $: 0 },
    { "#": "11 STANTON RD (200-02-00)", $: 2095100 },
    { "#": "12 STANTON RD (198-06-00)", $: 2068100 },
    { "#": "19 STANTON RD (200-03-00)", $: 1295700 },
    { "#": "25 STANTON RD (200-04-00)", $: 2778900 },
    { "#": "27 STANTON RD (200-05-00.9)", $: 0 },
    { "#": "28 STANTON RD (199-13-00.9)", $: 0 },
    { "#": "33 STANTON RD (200-05-01.9)", $: 0 },
    { "#": "37 STANTON RD (200-06-00)", $: 1906800 },
    { "#": "41 STANTON RD (200-07-00)", $: 1888700 },
    { "#": "44 STANTON RD (199-12-00.9)", $: 0 },
    { "#": "46 STANTON RD (199-11-01)", $: 1679200 },
    { "#": "50 STANTON RD (199-11-00.9)", $: 0 },
    { "#": "59 STANTON RD (206-02-00)", $: 1768800 },
    { "#": "65 STANTON RD (206-03-00)", $: 2107700 },
    { "#": "66 STANTON RD (201-18-00)", $: 1833800 },
    { "#": "69 STANTON RD (206-04-00)", $: 1951400 },
    { "#": "70 STANTON RD (201-17-00)", $: 1968800 },
    { "#": "75 STANTON RD (206-05-00)", $: 2247200 },
    { "#": "78 STANTON RD (202-01-00)", $: 1981900 },
    { "#": "81 STANTON RD (206-06-00)", $: 1661700 },
    { "#": "85 STANTON RD (206-07-00)", $: 1952600 },
    { "#": "90 STANTON RD (202-20-00)", $: 1896e3 },
    { "#": "4 STATION ST (139-45-00)", $: 1407400 },
    { "#": "5 STATION ST (140-07-00)", $: 6646300 },
    { "#": "9 STATION ST (140-06-00)", $: 9660900 },
    { "#": "30 STATION ST (140-04-00.9)", $: 0 },
    { "#": "39 STATION ST (140-03-01)", $: 1341700 },
    { "#": "42 STATION ST (140-03-00.9)", $: 0 },
    { "#": "46 STATION ST (140-02-19)", $: 3967e3 },
    { "#": "55 STATION ST (140-01-00.9)", $: 0 },
    { "#": "11 STEARNS RD (156-14-00)", $: 4750700 },
    { "#": "12 STEARNS RD (158-09-00)", $: 3968500 },
    { "#": "15 STEARNS RD (156-15-00)", $: 4630900 },
    { "#": "17 STEARNS RD (156-16-00.9)", $: 0 },
    { "#": "20 STEARNS RD (158-07-00.9)", $: 0 },
    { "#": "25 STEARNS RD (156-17-00.9)", $: 0 },
    { "#": "27 STEARNS RD (156-18-00)", $: 3887700 },
    { "#": "30 STEARNS RD (158-05-00.9)", $: 0 },
    { "#": "31 STEARNS RD (156-19-00)", $: 2380200 },
    { "#": "33 STEARNS RD (156-01-00)", $: 3154600 },
    { "#": "41 STEARNS RD (157-10-00)", $: 968300 },
    { "#": "41 STEARNS RD (157-10-11.9)", $: 7086800 },
    { "#": "45 STEARNS RD (157-11-00)", $: 967300 },
    { "#": "50 STEARNS RD (158-03-00)", $: 2181e3 },
    { "#": "50 STEARNS RD (158-03-00.9)", $: 3669e3 },
    { "#": "54 STEARNS RD (158-02-00.9)", $: 0 },
    { "#": "71 STEARNS RD (126-26-00)", $: 1135300 },
    { "#": "71 STEARNS RD (126-26-00.9)", $: 1824e3 },
    { "#": "74 STEARNS RD (126-41-00)", $: 2233700 },
    { "#": "75 STEARNS RD (126-27-00.9)", $: 0 },
    { "#": "78 STEARNS RD (126-40-00)", $: 1787100 },
    { "#": "79 STEARNS RD (126-28-00)", $: 1848500 },
    { "#": "82 STEARNS RD (126-39-03)", $: 2030700 },
    { "#": "83 STEARNS RD (126-29-00.9)", $: 0 },
    { "#": "88 STEARNS RD (126-38-00)", $: 1914500 },
    { "#": "89 STEARNS RD (126-30-00.9)", $: 0 },
    { "#": "93 STEARNS RD (126-31-00)", $: 1760100 },
    { "#": "97 STEARNS RD (126-32-00)", $: 2716100 },
    { "#": "101 STEARNS RD (126-33-00.9)", $: 0 },
    { "#": "12 STEDMAN ST (050-39-00.9)", $: 0 },
    { "#": "16 STEDMAN ST (050-38-00)", $: 1855700 },
    { "#": "20 STEDMAN ST (050-37-00)", $: 2242e3 },
    { "#": "24 STEDMAN ST (050-36-00)", $: 1989800 },
    { "#": "32 STEDMAN ST (050-35-00)", $: 2608e3 },
    { "#": "38 STEDMAN ST (050-34-00)", $: 2164800 },
    { "#": "44 STEDMAN ST (050-33-00.9)", $: 0 },
    { "#": "48 STEDMAN ST (050-32-00)", $: 1965600 },
    { "#": "50 STEDMAN ST (050-31-00)", $: 2178400 },
    { "#": "56 STEDMAN ST (050-30-00.9)", $: 0 },
    { "#": "60 STEDMAN ST (050-29-00.9)", $: 0 },
    { "#": "66 STEDMAN ST (050-28-00)", $: 2140900 },
    { "#": "72 STEDMAN ST (050-27-00)", $: 2834700 },
    { "#": "75 STEDMAN ST (049-18-00)", $: 3161100 },
    { "#": "78 STEDMAN ST (050-26-00.9)", $: 0 },
    { "#": "79 STEDMAN ST (049-19-00.9)", $: 0 },
    { "#": "82 STEDMAN ST (050-25-00)", $: 2445900 },
    { "#": "83 STEDMAN ST (049-20-00)", $: 2169800 },
    { "#": "86 STEDMAN ST (050-24-00)", $: 1968900 },
    { "#": "89 STEDMAN ST (049-21-00)", $: 3263600 },
    { "#": "91 STEDMAN ST (049-22-00)", $: 1975900 },
    { "#": "95 STEDMAN ST (049-23-00)", $: 2166300 },
    { "#": "95 STEDMAN ST (049-23-00.9)", $: 2166300 },
    { "#": "99 STEDMAN ST (049-24-00)", $: 2003e3 },
    { "#": "101 STEDMAN ST (049-25-00.9)", $: 0 },
    { "#": "105 STEDMAN ST (049-26-00)", $: 1142700 },
    { "#": "111 STEDMAN ST (049-27-00)", $: 2473100 },
    { "#": "113 STEDMAN ST (049-28-00)", $: 1343300 },
    { "#": "115 STEDMAN ST (049-29-00)", $: 1440800 },
    { "#": "117 STEDMAN ST (049-30-00.9)", $: 0 },
    { "#": "120 STEDMAN ST (052-09-00)", $: 2393700 },
    { "#": "121 STEDMAN ST (049-31-00.9)", $: 0 },
    { "#": "7 STETSON ST (035-01-00)", $: 1887700 },
    { "#": "9 STETSON ST (035-02-00)", $: 2025700 },
    { "#": "12 STETSON ST (033-17-00)", $: 2437700 },
    { "#": "15 STETSON ST (035-03-00)", $: 2909e3 },
    { "#": "16 STETSON ST (033-16-00)", $: 2849400 },
    { "#": "19 STETSON ST (035-04-00)", $: 2656500 },
    { "#": "23 STETSON ST (035-05-00.9)", $: 0 },
    { "#": "24 STETSON ST (033-15-00)", $: 1995300 },
    { "#": "26 STETSON ST (033-14-00)", $: 2301400 },
    { "#": "27 STETSON ST (035-06-00)", $: 2474600 },
    { "#": "30 STETSON ST (033-13-00)", $: 1664300 },
    { "#": "31 STETSON ST (035-07-00)", $: 1074300 },
    { "#": "31 STETSON ST (035-07-00.9)", $: 1533700 },
    { "#": "34 STETSON ST (033-12-00)", $: 1603100 },
    { "#": "35 STETSON ST (035-08-00)", $: 1931400 },
    { "#": "39 STETSON ST (035-09-00)", $: 1552500 },
    { "#": "40 STETSON ST (033-10-00.9)", $: 0 },
    { "#": "43 STETSON ST (035-10-00)", $: 1585400 },
    { "#": "47 STETSON ST (035-11-00)", $: 2115600 },
    { "#": "51 STETSON ST (035-12-00.9)", $: 0 },
    { "#": "2 STILL ST (037-01-00.9)", $: 0 },
    { "#": "1 STRATHMORE RD (235-02-00)", $: 2103200 },
    { "#": "1 STRATHMORE RD (235-02-00.9)", $: 697300 },
    { "#": "2 STRATHMORE RD (236-01-00)", $: 3469e3 },
    { "#": "3 STRATHMORE RD (235-03-00)", $: 2320400 },
    { "#": "4 STRATHMORE RD (236-02-00)", $: 3142200 },
    { "#": "5 STRATHMORE RD (235-04-00)", $: 2393500 },
    { "#": "6 STRATHMORE RD (236-03-00.9)", $: 0 },
    { "#": "7 STRATHMORE RD (235-05-00)", $: 3689600 },
    { "#": "8 STRATHMORE RD (236-04-00.9)", $: 0 },
    { "#": "9 STRATHMORE RD (235-06-00)", $: 3374700 },
    { "#": "10 STRATHMORE RD (236-05-00)", $: 2948700 },
    { "#": "11 STRATHMORE RD (235-07-00)", $: 2782300 },
    { "#": "12 STRATHMORE RD (236-06-00)", $: 2412500 },
    { "#": "14 STRATHMORE RD (236-07-00)", $: 2668900 },
    { "#": "15 STRATHMORE RD (235-08-00.9)", $: 0 },
    { "#": "16 STRATHMORE RD (236-08-00)", $: 2902e3 },
    { "#": "17 STRATHMORE RD (235-09-00.9)", $: 0 },
    { "#": "18 STRATHMORE RD (236-09-00.9)", $: 0 },
    { "#": "19 STRATHMORE RD (235-10-00)", $: 2323500 },
    { "#": "20 STRATHMORE RD (236-10-00.9)", $: 0 },
    { "#": "21 STRATHMORE RD (235-11-00.9)", $: 0 },
    { "#": "22 STRATHMORE RD (236-11-00)", $: 2412900 },
    { "#": "23 STRATHMORE RD (235-12-00.9)", $: 0 },
    { "#": "24 STRATHMORE RD (236-12-00)", $: 2382e3 },
    { "#": "26 STRATHMORE RD (236-13-14)", $: 1037100 },
    { "#": "28 STRATHMORE RD (237-01-00)", $: 5679500 },
    { "#": "40 STRATHMORE RD (237-03-00)", $: 2531300 },
    { "#": "2 SUMMIT AVE (084-09-00)", $: 1016100 },
    { "#": "3 SUMMIT AVE (084-10-00)", $: 695700 },
    { "#": "3 SUMMIT AVE (084-10-00.9)", $: 1321200 },
    { "#": "4 SUMMIT AVE (084-11-00)", $: 1539700 },
    { "#": "9 SUMMIT AVE (084-12-00)", $: 7542200 },
    { "#": "17 SUMMIT AVE (085-49-00)", $: 978100 },
    { "#": "17 SUMMIT AVE (085-49-00.9)", $: 978100 },
    { "#": "21 SUMMIT AVE (085-50-00)", $: 901500 },
    { "#": "21 SUMMIT AVE (085-50-00.9)", $: 901500 },
    { "#": "24 SUMMIT AVE (090-08-00.9)", $: 0 },
    { "#": "27 SUMMIT AVE (085-51-00.9)", $: 2336700 },
    { "#": "29 SUMMIT AVE (085-51-00)", $: 816400 },
    { "#": "31 SUMMIT AVE (085-52-00)", $: 2995e3 },
    { "#": "31 SUMMIT AVE (085-52-00.9)", $: 2995e3 },
    { "#": "37 SUMMIT AVE (085-53-00)", $: 2088800 },
    { "#": "41 SUMMIT AVE (085-54-00)", $: 1438e3 },
    { "#": "41 SUMMIT AVE (085-54-00.9)", $: 4104900 },
    { "#": "48 SUMMIT AVE (089-33-00.9)", $: 0 },
    { "#": "49 SUMMIT AVE (085-55-00)", $: 1069900 },
    { "#": "49 SUMMIT AVE (085-55-00.9)", $: 1190600 },
    { "#": "63 SUMMIT AVE (086-37-00.9)", $: 0 },
    { "#": "66 SUMMIT AVE (088-56-00)", $: 3390700 },
    { "#": "69 SUMMIT AVE (086-38-00)", $: 3764400 },
    { "#": "70 SUMMIT AVE (088-55-00)", $: 1236800 },
    { "#": "72 SUMMIT AVE (088-54-01)", $: 1595500 },
    { "#": "75 SUMMIT AVE (086-39-00)", $: 2058300 },
    { "#": "76 SUMMIT AVE (088-54-00)", $: 2110900 },
    { "#": "80 SUMMIT AVE (088-53-00.9)", $: 0 },
    { "#": "81 SUMMIT AVE (086-40-00)", $: 1283100 },
    { "#": "84 SUMMIT AVE (088-52-00)", $: 2511900 },
    { "#": "87 SUMMIT AVE (086-41-00)", $: 4044800 },
    { "#": "90 SUMMIT AVE (088-51-00)", $: 1679400 },
    { "#": "93 SUMMIT AVE (086-42-00)", $: 1726300 },
    { "#": "100 SUMMIT AVE (088-50-00)", $: 2081800 },
    { "#": "101 SUMMIT AVE (086-43-00.9)", $: 0 },
    { "#": "104 SUMMIT AVE (088-49-00)", $: 1652e3 },
    { "#": "112 SUMMIT AVE (087-01-00.9)", $: 0 },
    { "#": "113 SUMMIT AVE (086B-24-25)", $: 1618e3 },
    { "#": "119 SUMMIT AVE (086B-26-00)", $: 2309200 },
    { "#": "121 SUMMIT AVE (086B-27-00)", $: 1582300 },
    { "#": "122 SUMMIT AVE (087-25-00)", $: 2324800 },
    { "#": "126 SUMMIT AVE (087-24-00)", $: 2085700 },
    { "#": "127 SUMMIT AVE (086B-28-00)", $: 1421500 },
    { "#": "132 SUMMIT AVE (087-23-00)", $: 1583e3 },
    { "#": "133 SUMMIT AVE (086B-29-00)", $: 1585100 },
    { "#": "139 SUMMIT AVE (086B-30-00)", $: 2580800 },
    { "#": "141 SUMMIT AVE (086B-31-32)", $: 3719900 },
    { "#": "142 SUMMIT AVE (087-22-00)", $: 2933800 },
    { "#": "146 SUMMIT AVE (087-22-01)", $: 1661200 },
    { "#": "149 SUMMIT AVE (086B-33-00)", $: 1984400 },
    { "#": "150 SUMMIT AVE (087-21-01)", $: 2307700 },
    { "#": "153 SUMMIT AVE (086B-34-00)", $: 1598e3 },
    { "#": "155 SUMMIT AVE (086B-35-36)", $: 2065900 },
    { "#": "156 SUMMIT AVE (087-21-00)", $: 1909800 },
    { "#": "159 SUMMIT AVE (086B-37-00)", $: 1921200 },
    { "#": "161 SUMMIT AVE (090-09-00)", $: 1647700 },
    { "#": "162 SUMMIT AVE (087-09-00)", $: 11429100 },
    { "#": "163 SUMMIT AVE (086B-38-00)", $: 11405700 },
    { "#": "186 SUMMIT AVE (087-20-00)", $: 1192200 },
    { "#": "188 SUMMIT AVE (087-19-00)", $: 1746800 },
    { "#": "189 SUMMIT AVE (086B-39-00)", $: 1694400 },
    { "#": "194 SUMMIT AVE (087-17-18)", $: 3259500 },
    { "#": "195 SUMMIT AVE (086B-40-00)", $: 1698700 },
    { "#": "201 SUMMIT AVE (086B-41-00)", $: 1961400 },
    { "#": "204 SUMMIT AVE (087-16-00.9)", $: 0 },
    { "#": "208 SUMMIT AVE (087-15-00.9)", $: 0 },
    { "#": "216 SUMMIT AVE (087-14-00.9)", $: 0 },
    { "#": "227 SUMMIT AVE (086B-01-00.9)", $: 0 },
    { "#": "244 SUMMIT AVE (091-49-00)", $: 2185500 },
    { "#": "248 SUMMIT AVE (091-48-00)", $: 1969400 },
    { "#": "249 SUMMIT AVE (086A-08-00)", $: 1831e3 },
    { "#": "252 SUMMIT AVE (091-47-00)", $: 2013800 },
    { "#": "255 SUMMIT AVE (086A-09-00)", $: 1754600 },
    { "#": "256 SUMMIT AVE (091-46-00)", $: 2072100 },
    { "#": "260 SUMMIT AVE (091-45-00)", $: 2138800 },
    { "#": "265 SUMMIT AVE (086A-11-00)", $: 1304900 },
    { "#": "14 SUMNER RD (252-10-02)", $: 1405700 },
    { "#": "20 SUMNER RD (252-10-01)", $: 1484500 },
    { "#": "23 SUMNER RD (253-01-00.9)", $: 0 },
    { "#": "31 SUMNER RD (253-02-00)", $: 1567100 },
    { "#": "43 SUMNER RD (192-18-01)", $: 3201100 },
    { "#": "44 SUMNER RD (231-38-01)", $: 3089e3 },
    { "#": "50 SUMNER RD (231-37-00)", $: 3385700 },
    { "#": "55 SUMNER RD (192-18-02)", $: 1785800 },
    { "#": "59 SUMNER RD (192-19-00)", $: 1105700 },
    { "#": "61 SUMNER RD (192-20-01)", $: 2372e3 },
    { "#": "64 SUMNER RD (231-36-00)", $: 3156700 },
    { "#": "65 SUMNER RD (192-20-00)", $: 1802700 },
    { "#": "71 SUMNER RD (192-21-21)", $: 1703600 },
    { "#": "72 SUMNER RD (231-36-03)", $: 1603300 },
    { "#": "75 SUMNER RD (192-01-00)", $: 1407400 },
    { "#": "86 SUMNER RD (229-01-01)", $: 6100 },
    { "#": "101 SUMNER RD (194-01-00)", $: 1502200 },
    { "#": "105 SUMNER RD (194-02-00)", $: 1454300 },
    { "#": "106 SUMNER RD (203-06-07)", $: 2296400 },
    { "#": "111 SUMNER RD (194-03-00)", $: 1700900 },
    { "#": "112 SUMNER RD (203-05-00)", $: 2014100 },
    { "#": "115 SUMNER RD (194-04-00)", $: 1493400 },
    { "#": "118 SUMNER RD (203-04-00)", $: 2416e3 },
    { "#": "119 SUMNER RD (194-05-00)", $: 1951e3 },
    { "#": "122 SUMNER RD (203-03-00)", $: 1756e3 },
    { "#": "125 SUMNER RD (194-06-00.9)", $: 0 },
    { "#": "127 SUMNER RD (194-07-00.9)", $: 0 },
    { "#": "130 SUMNER RD (203-02-00.9)", $: 0 },
    { "#": "131 SUMNER RD (194-08-00)", $: 1551700 },
    { "#": "135 SUMNER RD (194-09-00)", $: 1963500 },
    { "#": "140 SUMNER RD (203-01-00)", $: 1443200 },
    { "#": "140 SUMNER RD (203-01-00.9)", $: 2566700 },
    { "#": "2 TABOR PL (149-17-00)", $: 1499900 },
    { "#": "4 TABOR PL (149-16-00)", $: 1188900 },
    { "#": "6 TABOR PL (149-15-00)", $: 1196400 },
    { "#": "8 TABOR PL (149-14-00)", $: 12e5 },
    { "#": "10 TABOR PL (149-13-00)", $: 1188100 },
    { "#": "11 TABOR PL (149-04-00)", $: 1538700 },
    { "#": "12 TABOR PL (149-12-00)", $: 1395300 },
    { "#": "13 TABOR PL (149-05-00)", $: 1504800 },
    { "#": "14 TABOR PL (149-11-00)", $: 1394800 },
    { "#": "15 TABOR PL (149-06-00)", $: 1716400 },
    { "#": "16 TABOR PL (149-10-00)", $: 1220800 },
    { "#": "17 TABOR PL (149-07-00)", $: 1721600 },
    { "#": "18 TABOR PL (149-09-00)", $: 1522500 },
    { "#": "19 TABOR PL (149-08-00)", $: 1515400 },
    { "#": "0 TAPPAN ST (228-15-01)", $: 0 },
    { "#": "4 TAPPAN ST (194-13-00)", $: 7300 },
    { "#": "22 TAPPAN ST (191-01-01)", $: 65110700 },
    { "#": "24 TAPPAN ST (194-12-00)", $: 10800 },
    { "#": "46 TAPPAN ST (194-10-11)", $: 36630800 },
    { "#": "88 TAPPAN ST (203-14-00)", $: 1824800 },
    { "#": "94 TAPPAN ST (203-13-00)", $: 2460700 },
    { "#": "98 TAPPAN ST (203-12-01)", $: 1533400 },
    { "#": "100 TAPPAN ST (203-12-00)", $: 2443100 },
    { "#": "108 TAPPAN ST (203-11-00.9)", $: 0 },
    { "#": "109 TAPPAN ST (205-29-00)", $: 1437900 },
    { "#": "115 TAPPAN ST (205-01-00)", $: 1628600 },
    { "#": "116 TAPPAN ST (203-10-00)", $: 1939300 },
    { "#": "125 TAPPAN ST (204-01-00)", $: 2475400 },
    { "#": "138 TAPPAN ST (228-30-00)", $: 186e4 },
    { "#": "143 TAPPAN ST (204-02-01)", $: 3764700 },
    { "#": "145 TAPPAN ST (204-02-02)", $: 1945400 },
    { "#": "146 TAPPAN ST (228-29-00)", $: 2443e3 },
    { "#": "150 TAPPAN ST (228-29-01)", $: 2396800 },
    { "#": "151 TAPPAN ST (204-04-00)", $: 2454900 },
    { "#": "154 TAPPAN ST (228-25-01)", $: 50500 },
    { "#": "156 TAPPAN ST (228-28-00)", $: 3923400 },
    { "#": "162 TAPPAN ST (228-27-00)", $: 2015200 },
    { "#": "163 TAPPAN ST (204-05-00)", $: 1804600 },
    { "#": "164 TAPPAN ST (228-26-00)", $: 1979700 },
    { "#": "166 TAPPAN ST (228-24-25)", $: 2365900 },
    { "#": "168 TAPPAN ST (228-23-00)", $: 1484300 },
    { "#": "170 TAPPAN ST (228-22-00)", $: 1810300 },
    { "#": "176 TAPPAN ST (228-21-01)", $: 2074600 },
    { "#": "178 TAPPAN ST (228-21-00)", $: 3709900 },
    { "#": "185 TAPPAN ST (222-20-03)", $: 1651300 },
    { "#": "186 TAPPAN ST (228-20-00)", $: 4628e3 },
    { "#": "189 TAPPAN ST (222-20-02)", $: 2326500 },
    { "#": "194 TAPPAN ST (228-19-00)", $: 3648500 },
    { "#": "195 TAPPAN ST (222-21-00)", $: 2996700 },
    { "#": "200 TAPPAN ST (228-18-00)", $: 2005400 },
    { "#": "205 TAPPAN ST (222-22-00)", $: 1887e3 },
    { "#": "210 TAPPAN ST (228-17-00)", $: 4927800 },
    { "#": "215 TAPPAN ST (222-23-00)", $: 2240700 },
    { "#": "216 TAPPAN ST (228-16-00)", $: 1633200 },
    { "#": "223 TAPPAN ST (222-24-00)", $: 1776500 },
    { "#": "224 TAPPAN ST (228-15-00)", $: 1552700 },
    { "#": "225 TAPPAN ST (222-25-00.9)", $: 1126300 },
    { "#": "227 TAPPAN ST (222-25-00)", $: 892700 },
    { "#": "233 TAPPAN ST (222-26-00)", $: 1792900 },
    { "#": "234 TAPPAN ST (227-14-00)", $: 2355e3 },
    { "#": "238 TAPPAN ST (227-13-00)", $: 913200 },
    { "#": "238 TAPPAN ST (227-13-00.9)", $: 831e3 },
    { "#": "239 TAPPAN ST (222-27-00)", $: 1961900 },
    { "#": "244 TAPPAN ST (227-12-00)", $: 1479400 },
    { "#": "245 TAPPAN ST (222-28-00)", $: 1804900 },
    { "#": "247 TAPPAN ST (222-29-00)", $: 1763500 },
    { "#": "252 TAPPAN ST (227-11-00.9)", $: 0 },
    { "#": "254 TAPPAN ST (227-10-00)", $: 2304300 },
    { "#": "255 TAPPAN ST (222-30-00)", $: 2824400 },
    { "#": "260 TAPPAN ST (227-09-00.9)", $: 0 },
    { "#": "261 TAPPAN ST (222-31-00)", $: 3145e3 },
    { "#": "261 TAPPAN ST (222-31-00.9)", $: 3643700 },
    { "#": "261 TAPPAN ST (222-31-32)", $: 3677700 },
    { "#": "264 TAPPAN ST (227-08-00)", $: 2334600 },
    { "#": "267 TAPPAN ST (222-32-00)", $: 1288600 },
    { "#": "270 TAPPAN ST (227-07-00)", $: 1480100 },
    { "#": "274 TAPPAN ST (227-06-00.9)", $: 0 },
    { "#": "275 TAPPAN ST (222-33-00)", $: 2303400 },
    { "#": "280 TAPPAN ST (227-05-00.9)", $: 0 },
    { "#": "281 TAPPAN ST (223-01-00.9)", $: 0 },
    { "#": "283 TAPPAN ST (223-02-00.9)", $: 0 },
    { "#": "284 TAPPAN ST (227-04-00.9)", $: 0 },
    { "#": "287 TAPPAN ST (223-03-00)", $: 6044500 },
    { "#": "287 TAPPAN ST (223-03-00.9)", $: 6044500 },
    { "#": "290 TAPPAN ST (227-03-00)", $: 3183200 },
    { "#": "290 TAPPAN ST (227-03-00.9)", $: 3183200 },
    { "#": "294 TAPPAN ST (227-02-00.9)", $: 0 },
    { "#": "295 TAPPAN ST (223-04-00.9)", $: 0 },
    { "#": "299 TAPPAN ST (223-05-00.9)", $: 0 },
    { "#": "300 TAPPAN ST (227-01-00)", $: 1898700 },
    { "#": "303 TAPPAN ST (223-06-00)", $: 1966400 },
    { "#": "307 TAPPAN ST (223-07-00.9)", $: 0 },
    { "#": "309 TAPPAN ST (223-08-00)", $: 1336300 },
    { "#": "310 TAPPAN ST (225-02-00)", $: 5769400 },
    { "#": "316 TAPPAN ST (225-03-00.9)", $: 0 },
    { "#": "318 TAPPAN ST (225-04-00)", $: 3183500 },
    { "#": "320 TAPPAN ST (225-05-00)", $: 1619200 },
    { "#": "322 TAPPAN ST (225-06-00.9)", $: 0 },
    { "#": "324 TAPPAN ST (225-07-00)", $: 3836200 },
    { "#": "326 TAPPAN ST (225-08-00.9)", $: 0 },
    { "#": "329 TAPPAN ST (223-11-00)", $: 2212600 },
    { "#": "332 TAPPAN ST (225-09-03)", $: 1784100 },
    { "#": "334 TAPPAN ST (225-10-00.9)", $: 0 },
    { "#": "336 TAPPAN ST (225-11-00.9)", $: 0 },
    { "#": "337 TAPPAN ST (223-12-00.9)", $: 0 },
    { "#": "338 TAPPAN ST (225-12-00)", $: 2660400 },
    { "#": "340 TAPPAN ST (225-13-00.9)", $: 0 },
    { "#": "342 TAPPAN ST (225-14-00)", $: 2457900 },
    { "#": "344 TAPPAN ST (225-15-00.9)", $: 0 },
    { "#": "350 TAPPAN ST (225-16-00.9)", $: 0 },
    { "#": "352 TAPPAN ST (225-17-00.9)", $: 0 },
    { "#": "354 TAPPAN ST (225-18-00)", $: 2713900 },
    { "#": "356 TAPPAN ST (225-19-00)", $: 2554500 },
    { "#": "358 TAPPAN ST (225-20-00)", $: 2624900 },
    { "#": "359 TAPPAN ST (224-21-00.9)", $: 0 },
    { "#": "360 TAPPAN ST (225-21-00)", $: 2089800 },
    { "#": "362 TAPPAN ST (225-22-00)", $: 3227200 },
    { "#": "366 TAPPAN ST (225-23-00.9)", $: 0 },
    { "#": "369 TAPPAN ST (224-23-00.9)", $: 0 },
    { "#": "32 TAYLOR CSWY (262-02-00)", $: 2866200 },
    { "#": "33 TAYLOR CSWY (264B-01-00)", $: 3635900 },
    { "#": "40 TAYLOR CSWY (262-01-01)", $: 2325900 },
    { "#": "41 TAYLOR CSWY (264B-02-00)", $: 2016600 },
    { "#": "47 TAYLOR CSWY (264B-03-00)", $: 2438500 },
    { "#": "68 TAYLOR CSWY (260-05-00)", $: 2869200 },
    { "#": "15 THATCHER ST (022-13-00.9)", $: 0 },
    { "#": "55 THATCHER ST (023-07-00.9)", $: 0 },
    { "#": "67 THATCHER ST (023-11-00)", $: 3761700 },
    { "#": "73 THATCHER ST (023-13-00)", $: 3943600 },
    { "#": "8 THAYER PL (177-12-00)", $: 1717900 },
    { "#": "12 THAYER PL (177-11-00)", $: 1390300 },
    { "#": "16 THAYER PL (177-10-00)", $: 1354200 },
    { "#": "18 THAYER PL (177-09-00.9)", $: 0 },
    { "#": "6 THAYER ST (176-21-02.9)", $: 0 },
    { "#": "12 THAYER ST (176-20-01)", $: 143100 },
    { "#": "14 THAYER ST (176-20-00)", $: 1639100 },
    { "#": "16 THAYER ST (176-19-00)", $: 2212600 },
    { "#": "18 THAYER ST (176-18-00)", $: 2273500 },
    { "#": "21 THAYER ST (177-13-00.9)", $: 0 },
    { "#": "22 THAYER ST (176-17-00)", $: 1992200 },
    { "#": "29 THAYER ST (177-14-00)", $: 1387900 },
    { "#": "2 THORNDIKE ST (075-14-00)", $: 1052800 },
    { "#": "2 THORNDIKE ST (075-14-00.9)", $: 3534600 },
    { "#": "12 THORNDIKE ST (075-13-00)", $: 2461700 },
    { "#": "17 THORNDIKE ST (076-02-00)", $: 2098800 },
    { "#": "18 THORNDIKE ST (075-12-00)", $: 2338300 },
    { "#": "21 THORNDIKE ST (076-03-00)", $: 2028700 },
    { "#": "22 THORNDIKE ST (075-11-00)", $: 2038500 },
    { "#": "25 THORNDIKE ST (076-04-00)", $: 1760400 },
    { "#": "26 THORNDIKE ST (075-10-00)", $: 2293500 },
    { "#": "29 THORNDIKE ST (076-05-00)", $: 3226e3 },
    { "#": "32 THORNDIKE ST (075-09-00)", $: 2265700 },
    { "#": "33 THORNDIKE ST (076-06-00)", $: 2153200 },
    { "#": "36 THORNDIKE ST (075-08-00)", $: 2337800 },
    { "#": "39 THORNDIKE ST (076-07-00)", $: 1899800 },
    { "#": "40 THORNDIKE ST (075-07-00)", $: 3014800 },
    { "#": "40 THORNDIKE ST (075-07-00.9)", $: 3014800 },
    { "#": "43 THORNDIKE ST (076-08-00)", $: 2064600 },
    { "#": "46 THORNDIKE ST (075-06-00)", $: 1251700 },
    { "#": "46 THORNDIKE ST (075-06-00.9)", $: 2812500 },
    { "#": "49 THORNDIKE ST (076-09-00)", $: 2334600 },
    { "#": "50 THORNDIKE ST (075-05-00)", $: 2012800 },
    { "#": "53 THORNDIKE ST (076-10-00)", $: 2475100 },
    { "#": "54 THORNDIKE ST (075-04-00)", $: 2708300 },
    { "#": "54 THORNDIKE ST (075-04-00.9)", $: 2708300 },
    { "#": "57 THORNDIKE ST (076-11-00)", $: 1824100 },
    { "#": "60 THORNDIKE ST (075-03-00)", $: 1492100 },
    { "#": "77 THORNDIKE ST (067-10-00)", $: 1813900 },
    { "#": "78 THORNDIKE ST (069-21-00)", $: 1704300 },
    { "#": "81 THORNDIKE ST (067-11-00.9)", $: 0 },
    { "#": "82 THORNDIKE ST (069-20-00)", $: 2611500 },
    { "#": "87 THORNDIKE ST (067-12-00)", $: 2211500 },
    { "#": "88 THORNDIKE ST (069-19-00)", $: 1838500 },
    { "#": "91 THORNDIKE ST (067-13-00)", $: 244e4 },
    { "#": "92 THORNDIKE ST (069-18-00)", $: 2744400 },
    { "#": "93 THORNDIKE ST (067-14-00)", $: 2182e3 },
    { "#": "98 THORNDIKE ST (069-17-00)", $: 2089500 },
    { "#": "102 THORNDIKE ST (069-16-00)", $: 2416800 },
    { "#": "106 THORNDIKE ST (069-15-00)", $: 661200 },
    { "#": "106 THORNDIKE ST (069-15-00.9)", $: 1213400 },
    { "#": "107 THORNDIKE ST (068-14-00)", $: 2037800 },
    { "#": "111 THORNDIKE ST (068-15-00)", $: 2094100 },
    { "#": "112 THORNDIKE ST (069-14-00)", $: 3192500 },
    { "#": "116 THORNDIKE ST (069-13-00)", $: 2097800 },
    { "#": "117 THORNDIKE ST (068-16-00)", $: 1900100 },
    { "#": "121 THORNDIKE ST (068-17-00)", $: 1784600 },
    { "#": "122 THORNDIKE ST (069-12-00)", $: 2184200 },
    { "#": "126 THORNDIKE ST (069-11-00)", $: 972e3 },
    { "#": "126 THORNDIKE ST (069-11-00.9)", $: 1638900 },
    { "#": "127 THORNDIKE ST (068-18-00)", $: 2561800 },
    { "#": "130 THORNDIKE ST (069-10-00)", $: 2008100 },
    { "#": "131 THORNDIKE ST (068-19-00)", $: 2203100 },
    { "#": "135 THORNDIKE ST (068-20-00)", $: 2943e3 },
    { "#": "135 THORNDIKE ST (068-20-00.9)", $: 2943e3 },
    { "#": "136 THORNDIKE ST (069-09-00)", $: 1201500 },
    { "#": "136 THORNDIKE ST (069-09-00.9)", $: 1507600 },
    { "#": "140 THORNDIKE ST (069-08-00)", $: 1112600 },
    { "#": "140 THORNDIKE ST (069-08-00.9)", $: 1766500 },
    { "#": "141 THORNDIKE ST (068-21-00)", $: 2732e3 },
    { "#": "147 THORNDIKE ST (068-22-00)", $: 2585200 },
    { "#": "148 THORNDIKE ST (069-07-00.9)", $: 0 },
    { "#": "154 THORNDIKE ST (069-06-00)", $: 2749700 },
    { "#": "157 THORNDIKE ST (060-05-00)", $: 3011300 },
    { "#": "158 THORNDIKE ST (069-05-00)", $: 2628500 },
    { "#": "160 THORNDIKE ST (069-04-00.9)", $: 0 },
    { "#": "161 THORNDIKE ST (060-04-00)", $: 2566100 },
    { "#": "161 THORNDIKE ST (060-04-00.9)", $: 3228400 },
    { "#": "164 THORNDIKE ST (069-03-00)", $: 2547700 },
    { "#": "165 THORNDIKE ST (060-03-00.9)", $: 0 },
    { "#": "166 THORNDIKE ST (069-02-00.9)", $: 0 },
    { "#": "170 THORNDIKE ST (069-01-00.9)", $: 0 },
    { "#": "171 THORNDIKE ST (060-02-00.9)", $: 0 },
    { "#": "177 THORNDIKE ST (060-01-00)", $: 1385300 },
    { "#": "177 THORNDIKE ST (060-01-00.9)", $: 3592300 },
    { "#": "178 THORNDIKE ST (070-01-00)", $: 2142100 },
    { "#": "3 THORNTON RD (389-01-00)", $: 770200 },
    { "#": "4 THORNTON RD (387-10-00)", $: 872600 },
    { "#": "10 THORNTON RD (388-01-01)", $: 26201100 },
    { "#": "7 TIMON AVE (272-12-00)", $: 2081800 },
    { "#": "1 TOXTETH ST (146-06-00)", $: 2144900 },
    { "#": "9 TOXTETH ST (146-07-00)", $: 2102100 },
    { "#": "12 TOXTETH ST (151-04-00)", $: 2239200 },
    { "#": "15 TOXTETH ST (146-08-00)", $: 798900 },
    { "#": "15 TOXTETH ST (146-08-00.9)", $: 1273100 },
    { "#": "18 TOXTETH ST (151-03-00)", $: 1716800 },
    { "#": "22 TOXTETH ST (151-02-00)", $: 2449500 },
    { "#": "23 TOXTETH ST (145-11-01)", $: 1543600 },
    { "#": "26 TOXTETH ST (151-01-00.9)", $: 0 },
    { "#": "29 TOXTETH ST (145-12-00)", $: 3029900 },
    { "#": "56 TOXTETH ST (131-24-00)", $: 1705300 },
    { "#": "57 TOXTETH ST (130-03-00)", $: 2827e3 },
    { "#": "61 TOXTETH ST (130-04-00)", $: 1551900 },
    { "#": "62 TOXTETH ST (131-23-00)", $: 951500 },
    { "#": "62 TOXTETH ST (131-23-00.9)", $: 2199600 },
    { "#": "65 TOXTETH ST (130-05-00)", $: 2490800 },
    { "#": "66 TOXTETH ST (131-22-00)", $: 1948700 },
    { "#": "67 TOXTETH ST (130-05-01)", $: 2630400 },
    { "#": "71 TOXTETH ST (130-06-00)", $: 2351400 },
    { "#": "72 TOXTETH ST (131-21-00)", $: 2681600 },
    { "#": "77 TOXTETH ST (130-07-00)", $: 1757e3 },
    { "#": "80 TOXTETH ST (131-20-00)", $: 1713500 },
    { "#": "80 TOXTETH ST (131-20-00.9)", $: 2481600 },
    { "#": "81 TOXTETH ST (130-08-00)", $: 2195200 },
    { "#": "85 TOXTETH ST (130-26-00)", $: 1938e3 },
    { "#": "86 TOXTETH ST (131-19-00)", $: 1989700 },
    { "#": "87 TOXTETH ST (130-27-00)", $: 1912200 },
    { "#": "90 TOXTETH ST (131-18-00)", $: 2512900 },
    { "#": "93 TOXTETH ST (130-10-00)", $: 2082800 },
    { "#": "97 TOXTETH ST (130-11-00)", $: 2175100 },
    { "#": "98 TOXTETH ST (131-17-01)", $: 3093600 },
    { "#": "104 TOXTETH ST (131-17-00)", $: 3576700 },
    { "#": "19 TULLY ST (425-07-01)", $: 1023200 },
    { "#": "7 UNIVERSITY RD (217-20-00)", $: 1799e3 },
    { "#": "10 UNIVERSITY RD (216-19-00)", $: 5156800 },
    { "#": "11 UNIVERSITY RD (217-19-00.9)", $: 0 },
    { "#": "15 UNIVERSITY RD (217-17-18.9)", $: 0 },
    { "#": "16 UNIVERSITY RD (216-20-00)", $: 5193400 },
    { "#": "19 UNIVERSITY RD (217-16-00)", $: 2434300 },
    { "#": "22 UNIVERSITY RD (216-21-00)", $: 4998500 },
    { "#": "25 UNIVERSITY RD (217-15-00)", $: 1584700 },
    { "#": "29 UNIVERSITY RD (217-14-00)", $: 2527e3 },
    { "#": "30 UNIVERSITY RD (216-22-00)", $: 1828400 },
    { "#": "34 UNIVERSITY RD (216-23-00)", $: 2380300 },
    { "#": "35 UNIVERSITY RD (217-13-00.9)", $: 0 },
    { "#": "37 UNIVERSITY RD (217-12-00)", $: 2992600 },
    { "#": "40 UNIVERSITY RD (216-24-00.9)", $: 0 },
    { "#": "41 UNIVERSITY RD (217-11-00)", $: 2354300 },
    { "#": "41 UNIVERSITY RD (217-11-00.9)", $: 3528500 },
    { "#": "46 UNIVERSITY RD (216-25-00)", $: 2510300 },
    { "#": "47 UNIVERSITY RD (217-10-00)", $: 1912100 },
    { "#": "53 UNIVERSITY RD (217-09-00.9)", $: 0 },
    { "#": "54 UNIVERSITY RD (216-26-00)", $: 2426600 },
    { "#": "57 UNIVERSITY RD (217-08-00)", $: 991600 },
    { "#": "58 UNIVERSITY RD (216-27-00)", $: 1204e3 },
    { "#": "58 UNIVERSITY RD (216-27-00.9)", $: 2751600 },
    { "#": "63 UNIVERSITY RD (217-07-00)", $: 1336300 },
    { "#": "63 UNIVERSITY RD (217-07-00.9)", $: 1336300 },
    { "#": "64 UNIVERSITY RD (216-28-00.9)", $: 0 },
    { "#": "66 UNIVERSITY RD (216-29-00)", $: 2169600 },
    { "#": "67 UNIVERSITY RD (217-06-00)", $: 2542500 },
    { "#": "69 UNIVERSITY RD (217-05-00)", $: 1376600 },
    { "#": "69 UNIVERSITY RD (217-05-00.9)", $: 1376600 },
    { "#": "74 UNIVERSITY RD (216-30-00)", $: 2776e3 },
    { "#": "79 UNIVERSITY RD (217-04-02.9)", $: 0 },
    { "#": "80 UNIVERSITY RD (216-31-00)", $: 238e4 },
    { "#": "81 UNIVERSITY RD (217-04-01)", $: 1944800 },
    { "#": "84 UNIVERSITY RD (216-32-00)", $: 2477900 },
    { "#": "88 UNIVERSITY RD (216-33-00)", $: 2267e3 },
    { "#": "89 UNIVERSITY RD (217-03-02)", $: 3031800 },
    { "#": "91 UNIVERSITY RD (217-03-01)", $: 2171e3 },
    { "#": "91 UNIVERSITY RD (217-03-01.9)", $: 2171e3 },
    { "#": "92 UNIVERSITY RD (216-34-00)", $: 2220900 },
    { "#": "94 UNIVERSITY RD (216-35-00.9)", $: 0 },
    { "#": "97 UNIVERSITY RD (217-02-00)", $: 2119400 },
    { "#": "98 UNIVERSITY RD (216-36-00)", $: 2298100 },
    { "#": "103 UNIVERSITY RD (217-01-00)", $: 2115500 },
    { "#": "104 UNIVERSITY RD (211-01-00)", $: 2131100 },
    { "#": "107 UNIVERSITY RD (210-28-00.9)", $: 0 },
    { "#": "108 UNIVERSITY RD (211-02-00)", $: 1867e3 },
    { "#": "111 UNIVERSITY RD (210-27-00)", $: 2302200 },
    { "#": "114 UNIVERSITY RD (211-03-00)", $: 2699e3 },
    { "#": "115 UNIVERSITY RD (210-26-00.9)", $: 0 },
    { "#": "116 UNIVERSITY RD (211-04-00.9)", $: 0 },
    { "#": "118 UNIVERSITY RD (211-05-00)", $: 2897400 },
    { "#": "120 UNIVERSITY RD (211-06-00)", $: 2284800 },
    { "#": "121 UNIVERSITY RD (210-25-01.9)", $: 0 },
    { "#": "125 UNIVERSITY RD (210-24-00)", $: 2412100 },
    { "#": "126 UNIVERSITY RD (211-07-00)", $: 793900 },
    { "#": "126 UNIVERSITY RD (211-07-00.9)", $: 1249500 },
    { "#": "128 UNIVERSITY RD (211-08-00.9)", $: 0 },
    { "#": "129 UNIVERSITY RD (210-23-00.9)", $: 0 },
    { "#": "134 UNIVERSITY RD (211-09-00.9)", $: 0 },
    { "#": "135 UNIVERSITY RD (210-22-00)", $: 1106500 },
    { "#": "135 UNIVERSITY RD (210-22-00.9)", $: 2603100 },
    { "#": "138 UNIVERSITY RD (211-10-00)", $: 2149700 },
    { "#": "139 UNIVERSITY RD (210-21-00.9)", $: 0 },
    { "#": "142 UNIVERSITY RD (211-11-00)", $: 1994600 },
    { "#": "145 UNIVERSITY RD (210-20-00.9)", $: 0 },
    { "#": "146 UNIVERSITY RD (211-12-00.9)", $: 0 },
    { "#": "147 UNIVERSITY RD (210-19-00)", $: 2524500 },
    { "#": "153 UNIVERSITY RD (210-18-00)", $: 1839900 },
    { "#": "154 UNIVERSITY RD (211-13-00)", $: 1824400 },
    { "#": "160 UNIVERSITY RD (211-14-00)", $: 2090900 },
    { "#": "3 UPLAND RD (313-08-00.9)", $: 0 },
    { "#": "4 UPLAND RD (314-05-00.9)", $: 0 },
    { "#": "8 UPLAND RD (314-04-00.9)", $: 0 },
    { "#": "9 UPLAND RD (313-09-00)", $: 2218e3 },
    { "#": "10 UPLAND RD (314-03-00)", $: 1574500 },
    { "#": "14 UPLAND RD (314-02-00)", $: 1496200 },
    { "#": "18 UPLAND RD (314-01-00)", $: 1462900 },
    { "#": "24 UPLAND RD (315-08-00)", $: 1366500 },
    { "#": "27 UPLAND RD (313-01-00)", $: 1305500 },
    { "#": "28 UPLAND RD (315-07-00)", $: 1377200 },
    { "#": "30 UPLAND RD (315-06-00)", $: 1997400 },
    { "#": "36 UPLAND RD (315-05-00)", $: 1468400 },
    { "#": "43 UPLAND RD (312-01-00)", $: 2768600 },
    { "#": "51 UPLAND RD (312-02-00)", $: 2580800 },
    { "#": "52 UPLAND RD (308-47-00)", $: 2674200 },
    { "#": "56 UPLAND RD (308-46-00)", $: 2816400 },
    { "#": "57 UPLAND RD (312-03-00)", $: 4658200 },
    { "#": "62 UPLAND RD (308-45-00)", $: 2317300 },
    { "#": "65 UPLAND RD (312-04-07)", $: 2662e3 },
    { "#": "70 UPLAND RD (308-44-00)", $: 2909200 },
    { "#": "71 UPLAND RD (312-05-00)", $: 1486e3 },
    { "#": "72 UPLAND RD (311-01-00)", $: 119700 },
    { "#": "78 UPLAND RD (308-43-00)", $: 4929800 },
    { "#": "84 UPLAND RD (308-42-00)", $: 2811300 },
    { "#": "94 UPLAND RD (308-41-00)", $: 2491100 },
    { "#": "100 UPLAND RD (308-40-00)", $: 4308200 },
    { "#": "107 UPLAND RD (312-06-00)", $: 2851300 },
    { "#": "108 UPLAND RD (308-39-00)", $: 3552e3 },
    { "#": "14 VALLEY RD (278-32-00)", $: 2355400 },
    { "#": "22 VALLEY RD (278-17-00)", $: 2288900 },
    { "#": "25 VALLEY RD (278D-10-00)", $: 2091600 },
    { "#": "34 VALLEY RD (278-16-00)", $: 1805600 },
    { "#": "43 VALLEY RD (278B-11-00)", $: 2871e3 },
    { "#": "44 VALLEY RD (278-15-00)", $: 2037e3 },
    { "#": "53 VALLEY RD (278B-12-00)", $: 3917600 },
    { "#": "60 VALLEY RD (278-14-00)", $: 3067e3 },
    { "#": "5 VERNDALE ST (071-02-02.9)", $: 0 },
    { "#": "7 VERNDALE ST (071-02-14)", $: 72e3 },
    { "#": "8 VERNDALE ST (072-39-00)", $: 2542600 },
    { "#": "9 VERNDALE ST (071-02-04.9)", $: 0 },
    { "#": "11 VERNDALE ST (071-02-05.9)", $: 0 },
    { "#": "12 VERNDALE ST (072-38-00)", $: 1952200 },
    { "#": "16 VERNDALE ST (072-37-00)", $: 1967e3 },
    { "#": "19 VERNDALE ST (071-03-00)", $: 1618100 },
    { "#": "19 VERNDALE ST (071-03-00.9)", $: 1618100 },
    { "#": "20 VERNDALE ST (072-36-00)", $: 2220800 },
    { "#": "21 VERNDALE ST (071-04-00)", $: 1925600 },
    { "#": "24 VERNDALE ST (072-35-00)", $: 1930900 },
    { "#": "27 VERNDALE ST (071-05-00.9)", $: 0 },
    { "#": "28 VERNDALE ST (072-34-00)", $: 2254300 },
    { "#": "31 VERNDALE ST (071-06-00.9)", $: 0 },
    { "#": "32 VERNDALE ST (072-33-00)", $: 2107900 },
    { "#": "33 VERNDALE ST (071-07-00)", $: 1837900 },
    { "#": "36 VERNDALE ST (072-32-00)", $: 2049700 },
    { "#": "39 VERNDALE ST (071-08-00)", $: 2486400 },
    { "#": "39 VERNDALE ST (071-08-00.9)", $: 2486400 },
    { "#": "42 VERNDALE ST (072-31-00.9)", $: 0 },
    { "#": "43 VERNDALE ST (071-09-00)", $: 2552900 },
    { "#": "46 VERNDALE ST (072-30-00)", $: 1904800 },
    { "#": "49 VERNDALE ST (071-10-00)", $: 2470700 },
    { "#": "49 VERNDALE ST (071-10-00.9)", $: 4356200 },
    { "#": "50 VERNDALE ST (072-29-00)", $: 2080400 },
    { "#": "55 VERNDALE ST (071-11-00)", $: 2231900 },
    { "#": "56 VERNDALE ST (072-28-00.9)", $: 0 },
    { "#": "57 VERNDALE ST (071-12-00)", $: 2280300 },
    { "#": "60 VERNDALE ST (072-27-00)", $: 1995100 },
    { "#": "63 VERNDALE ST (071-13-00.9)", $: 0 },
    { "#": "64 VERNDALE ST (072-26-00.9)", $: 0 },
    { "#": "67 VERNDALE ST (071-14-00)", $: 2296300 },
    { "#": "70 VERNDALE ST (072-25-00)", $: 4963e3 },
    { "#": "70 VERNDALE ST (072-25-00.9)", $: 4963e3 },
    { "#": "73 VERNDALE ST (071-15-00)", $: 3956e3 },
    { "#": "73 VERNDALE ST (071-15-00.9)", $: 3956e3 },
    { "#": "76 VERNDALE ST (072-24-00)", $: 1668600 },
    { "#": "76 VERNDALE ST (072-24-00.9)", $: 1668600 },
    { "#": "77 VERNDALE ST (071-16-00)", $: 846400 },
    { "#": "77 VERNDALE ST (071-16-00.9)", $: 1049100 },
    { "#": "78 VERNDALE ST (072-23-00.9)", $: 3909e3 },
    { "#": "79 VERNDALE ST (071-25-26)", $: 2797300 },
    { "#": "80 VERNDALE ST (072-23-00)", $: 1396700 },
    { "#": "81 VERNDALE ST (071-17-00)", $: 1800800 },
    { "#": "85 VERNDALE ST (071-18-00)", $: 1696500 },
    { "#": "86 VERNDALE ST (072-22-00)", $: 2659900 },
    { "#": "90 VERNDALE ST (072-21-00.9)", $: 0 },
    { "#": "91 VERNDALE ST (071-19-00)", $: 2522100 },
    { "#": "95 VERNDALE ST (071-20-00)", $: 3187100 },
    { "#": "96 VERNDALE ST (072-20-00)", $: 2436600 },
    { "#": "96 VERNDALE ST (072-20-00.9)", $: 5328e3 },
    { "#": "101 VERNDALE ST (071-21-00)", $: 2419500 },
    { "#": "7 VERNON ST (167-01-00)", $: 16220300 },
    { "#": "10 VERNON ST (168-15-16.9)", $: 0 },
    { "#": "18 VERNON ST (168-14-00)", $: 2974300 },
    { "#": "19 VERNON ST (167-05-00)", $: 2932500 },
    { "#": "22 VERNON ST (168-13-00)", $: 1947100 },
    { "#": "28 VERNON ST (168-12-00)", $: 2318e3 },
    { "#": "32 VERNON ST (168-11-00)", $: 2145900 },
    { "#": "35 VERNON ST (167-06-09)", $: 18657400 },
    { "#": "36 VERNON ST (168-10-00)", $: 1043e3 },
    { "#": "36 VERNON ST (168-10-00.9)", $: 2333e3 },
    { "#": "42 VERNON ST (169-13-00)", $: 1796300 },
    { "#": "44 VERNON ST (169-12-00)", $: 1354500 },
    { "#": "44 VERNON ST (169-12-00.9)", $: 4892800 },
    { "#": "50 VERNON ST (169-11-00)", $: 2982900 },
    { "#": "52 VERNON ST (169-10-00.9)", $: 0 },
    { "#": "54 VERNON ST (169-09-00)", $: 2618100 },
    { "#": "80 VERNON ST (214-37-00)", $: 1675200 },
    { "#": "329 VFW PKY (376A-14-00)", $: 3500 },
    { "#": "333 VFW PKY (376A-15-00)", $: 14200 },
    { "#": "343 VFW PKY (376A-17-00)", $: 551100 },
    { "#": "349 VFW PKY (376A-16-00)", $: 428900 },
    { "#": "355 VFW PKY (377-01-00)", $: 1455100 },
    { "#": "361 VFW PKY (377-02-00)", $: 868800 },
    { "#": "367 VFW PKY (377-03-00)", $: 832700 },
    { "#": "373 VFW PKY (377-04-05)", $: 759100 },
    { "#": "377 VFW PKY (377-06-00)", $: 791700 },
    { "#": "381 VFW PKY (377-07-00)", $: 994200 },
    { "#": "385 VFW PKY (377-08-00)", $: 742900 },
    { "#": "389 VFW PKY (377-09-00)", $: 794400 },
    { "#": "393 VFW PKY (377-10-00)", $: 765500 },
    { "#": "394 VFW PKY (378-03-05)", $: 1091e3 },
    { "#": "397 VFW PKY (377-11-00)", $: 686700 },
    { "#": "401 VFW PKY (377-12-00)", $: 777600 },
    { "#": "402 VFW PKY (378-02-00)", $: 824700 },
    { "#": "405 VFW PKY (377-13-00)", $: 925200 },
    { "#": "416 VFW PKY (379-04-00)", $: 769300 },
    { "#": "417 VFW PKY (382-23-00)", $: 820900 },
    { "#": "424 VFW PKY (379-05-00)", $: 1057500 },
    { "#": "425 VFW PKY (382-01-00)", $: 946700 },
    { "#": "434 VFW PKY (380-06-01)", $: 13100 },
    { "#": "436 VFW PKY (380-06-00)", $: 843700 },
    { "#": "443 VFW PKY (383-01-00)", $: 885800 },
    { "#": "444 VFW PKY (380-07-00)", $: 790400 },
    { "#": "454 VFW PKY (381-05-00)", $: 734500 },
    { "#": "455 VFW PKY (384-01-00)", $: 707700 },
    { "#": "460 VFW PKY (381-06-00)", $: 754600 },
    { "#": "466 VFW PKY (381-07-00)", $: 835900 },
    { "#": "471 VFW PKY (388-01-00)", $: 32270600 },
    { "#": "1 VOGEL TER (307-29-00)", $: 1197800 },
    { "#": "2 VOGEL TER (307-28-00)", $: 1435800 },
    { "#": "3 VOGEL TER (307-27-00)", $: 1704500 },
    { "#": "4 VOGEL TER (307-26-00)", $: 1586e3 },
    { "#": "10 WALDO ST (045-02-01)", $: 83e5 },
    { "#": "11 WALLIS RD (394-12-00)", $: 1076100 },
    { "#": "14 WALLIS RD (393-16-00)", $: 1632100 },
    { "#": "17 WALLIS RD (394-11-00)", $: 1299900 },
    { "#": "20 WALLIS RD (393-17-00)", $: 1299e3 },
    { "#": "21 WALLIS RD (394-10-00)", $: 1040700 },
    { "#": "26 WALLIS RD (393-18-00)", $: 1190400 },
    { "#": "29 WALLIS RD (394-09-00)", $: 1654500 },
    { "#": "32 WALLIS RD (393-19-00)", $: 1304900 },
    { "#": "35 WALLIS RD (394-08-00)", $: 1605300 },
    { "#": "40 WALLIS RD (393-20-00)", $: 1211e3 },
    { "#": "41 WALLIS RD (394-07-00)", $: 1243e3 },
    { "#": "46 WALLIS RD (393-21-00)", $: 521700 },
    { "#": "47 WALLIS RD (394-06-00)", $: 1126100 },
    { "#": "52 WALLIS RD (393-22-00)", $: 558800 },
    { "#": "53 WALLIS RD (394-05-00)", $: 745500 },
    { "#": "59 WALLIS RD (394-04-00)", $: 1427900 },
    { "#": "60 WALLIS RD (393-23-24)", $: 1081e3 },
    { "#": "65 WALLIS RD (394-03-00)", $: 980600 },
    { "#": "70 WALLIS RD (393-25-00)", $: 1454700 },
    { "#": "72 WALLIS RD (393-26-00)", $: 753600 },
    { "#": "73 WALLIS RD (394-02-00)", $: 122e4 },
    { "#": "79 WALLIS RD (394-01-00)", $: 1297700 },
    { "#": "80 WALLIS RD (393-27-00)", $: 1549200 },
    { "#": "84 WALLIS RD (398-01-00)", $: 1393800 },
    { "#": "85 WALLIS RD (397-28-00)", $: 1019500 },
    { "#": "90 WALLIS RD (398-02-00)", $: 1947400 },
    { "#": "91 WALLIS RD (397-27-00)", $: 911300 },
    { "#": "98 WALLIS RD (398-02-01)", $: 1484200 },
    { "#": "99 WALLIS RD (397-26-00)", $: 85e4 },
    { "#": "102 WALLIS RD (398-03-01)", $: 1711500 },
    { "#": "103 WALLIS RD (397-25-00)", $: 810100 },
    { "#": "109 WALLIS RD (397-24-00)", $: 881700 },
    { "#": "110 WALLIS RD (398-04-00)", $: 1703600 },
    { "#": "118 WALLIS RD (398-05-00)", $: 1584900 },
    { "#": "119 WALLIS RD (397-23-00)", $: 1164100 },
    { "#": "126 WALLIS RD (398-06-00)", $: 1712e3 },
    { "#": "127 WALLIS RD (397-22-00)", $: 931900 },
    { "#": "134 WALLIS RD (398-07-00)", $: 1475100 },
    { "#": "135 WALLIS RD (397-21-00)", $: 1301800 },
    { "#": "146 WALLIS RD (398A-08-00)", $: 1718300 },
    { "#": "147 WALLIS RD (397-20-00)", $: 1172700 },
    { "#": "151 WALLIS RD (397-19-00)", $: 1459900 },
    { "#": "154 WALLIS RD (398A-09-00)", $: 2392900 },
    { "#": "161 WALLIS RD (397-18-00)", $: 1628400 },
    { "#": "162 WALLIS RD (398A-10-00)", $: 3164800 },
    { "#": "171 WALLIS RD (397-16-00)", $: 1112e3 },
    { "#": "183 WALLIS RD (397-15-00)", $: 2081300 },
    { "#": "186 WALLIS RD (400-05-00)", $: 1410500 },
    { "#": "192 WALLIS RD (400-04-00)", $: 729100 },
    { "#": "11 WALNUT HILL RD (374-02-00)", $: 1880400 },
    { "#": "14 WALNUT HILL RD (394-15-00)", $: 1326800 },
    { "#": "17 WALNUT HILL RD (374-03-00)", $: 1586400 },
    { "#": "20 WALNUT HILL RD (394-16-00)", $: 1169500 },
    { "#": "26 WALNUT HILL RD (394-17-00)", $: 1297300 },
    { "#": "32 WALNUT HILL RD (394-18-00)", $: 1031500 },
    { "#": "38 WALNUT HILL RD (394-19-00)", $: 1234300 },
    { "#": "39 WALNUT HILL RD (395-41-00)", $: 1076e3 },
    { "#": "42 WALNUT HILL RD (394-20-00)", $: 2322800 },
    { "#": "45 WALNUT HILL RD (395-42-00)", $: 1160600 },
    { "#": "50 WALNUT HILL RD (394-21-00)", $: 912e3 },
    { "#": "60 WALNUT HILL RD (394-22-00)", $: 1172500 },
    { "#": "62 WALNUT HILL RD (394-23-24)", $: 1377300 },
    { "#": "73 WALNUT HILL RD (396-02-00)", $: 1962600 },
    { "#": "74 WALNUT HILL RD (394-25-00)", $: 1227400 },
    { "#": "77 WALNUT HILL RD (396-03-00)", $: 2060400 },
    { "#": "80 WALNUT HILL RD (394-26-00)", $: 830600 },
    { "#": "85 WALNUT HILL RD (396-04-00)", $: 1576600 },
    { "#": "86 WALNUT HILL RD (397-01-00)", $: 60100 },
    { "#": "91 WALNUT HILL RD (396-05-00)", $: 1249500 },
    { "#": "94 WALNUT HILL RD (397-02-00)", $: 950200 },
    { "#": "97 WALNUT HILL RD (396-06-00)", $: 1249500 },
    { "#": "98 WALNUT HILL RD (397-03-00)", $: 65600 },
    { "#": "105 WALNUT HILL RD (396-07-00)", $: 1300700 },
    { "#": "110 WALNUT HILL RD (397-03-01)", $: 3792500 },
    { "#": "111 WALNUT HILL RD (396-08-00)", $: 1422e3 },
    { "#": "118 WALNUT HILL RD (397-05-00)", $: 1535600 },
    { "#": "119 WALNUT HILL RD (396-09-00)", $: 2627900 },
    { "#": "126 WALNUT HILL RD (397-06-00)", $: 1249900 },
    { "#": "129 WALNUT HILL RD (396-10-00)", $: 996400 },
    { "#": "135 WALNUT HILL RD (396-11-00)", $: 1777500 },
    { "#": "136 WALNUT HILL RD (397-07-00)", $: 2877100 },
    { "#": "144 WALNUT HILL RD (397-08-00)", $: 1715500 },
    { "#": "145 WALNUT HILL RD (396-12-00)", $: 1264300 },
    { "#": "150 WALNUT HILL RD (397-09-00)", $: 1011500 },
    { "#": "153 WALNUT HILL RD (396-13-00)", $: 1323700 },
    { "#": "158 WALNUT HILL RD (397-10-00)", $: 1672e3 },
    { "#": "166 WALNUT HILL RD (397-11-00)", $: 2343200 },
    { "#": "171 WALNUT HILL RD (396-14-00)", $: 1953400 },
    { "#": "172 WALNUT HILL RD (397-12-00)", $: 1578900 },
    { "#": "9 WALNUT PL (308-11-00)", $: 3891100 },
    { "#": "10 WALNUT PL (308-26-00)", $: 3762900 },
    { "#": "24 WALNUT PL (308-25-00)", $: 3405700 },
    { "#": "27 WALNUT PL (308-12-00)", $: 3616e3 },
    { "#": "35 WALNUT PL (308-13-14)", $: 5545400 },
    { "#": "56 WALNUT PL (308-24-00)", $: 2991100 },
    { "#": "61 WALNUT PL (308-15-00)", $: 3993500 },
    { "#": "67 WALNUT PL (308-16-00)", $: 4988900 },
    { "#": "75 WALNUT PL (308-17-01)", $: 371300 },
    { "#": "76 WALNUT PL (308-20-23)", $: 6463200 },
    { "#": "79 WALNUT PL (308-17-00)", $: 3382100 },
    { "#": "93 WALNUT PL (308-18-01)", $: 371300 },
    { "#": "94 WALNUT PL (308-19-00)", $: 3046700 },
    { "#": "100 WALNUT PL (308-18-00)", $: 3958300 },
    { "#": "72 WALNUT ST (314-11-00.9)", $: 0 },
    { "#": "77 WALNUT ST (318-46-00)", $: 1213900 },
    { "#": "81 WALNUT ST (318-46-01)", $: 1022400 },
    { "#": "82 WALNUT ST (314-10-00.9)", $: 0 },
    { "#": "87 WALNUT ST (318-39-00)", $: 1059600 },
    { "#": "88 WALNUT ST (314-09-00.9)", $: 0 },
    { "#": "91 WALNUT ST (318-48-00.9)", $: 0 },
    { "#": "95 WALNUT ST (318-49-00.9)", $: 0 },
    { "#": "96 WALNUT ST (314-08-00)", $: 1390400 },
    { "#": "103 WALNUT ST (318-50-36)", $: 1649900 },
    { "#": "104 WALNUT ST (314-07-00)", $: 2303700 },
    { "#": "110 WALNUT ST (314-06-00)", $: 1392e3 },
    { "#": "115 WALNUT ST (318-51-00.9)", $: 0 },
    { "#": "123 WALNUT ST (318-52-00.9)", $: 0 },
    { "#": "129 WALNUT ST (318-53-00)", $: 701400 },
    { "#": "133 WALNUT ST (318-54-00)", $: 962300 },
    { "#": "137 WALNUT ST (318-55-00.9)", $: 0 },
    { "#": "141 WALNUT ST (318-56-00)", $: 15e5 },
    { "#": "148 WALNUT ST (313-07-00)", $: 2093400 },
    { "#": "149 WALNUT ST (318-57-00)", $: 1597600 },
    { "#": "150 WALNUT ST (313-06-00.9)", $: 0 },
    { "#": "157 WALNUT ST (318-58-00)", $: 1641500 },
    { "#": "162 WALNUT ST (308-33-00.9)", $: 0 },
    { "#": "163 WALNUT ST (318-59-00)", $: 1952100 },
    { "#": "166 WALNUT ST (308-32-00.9)", $: 0 },
    { "#": "167 WALNUT ST (318-60-00.9)", $: 0 },
    { "#": "170 WALNUT ST (308-31-00)", $: 222100 },
    { "#": "173 WALNUT ST (318-61-00)", $: 1479400 },
    { "#": "173 WALNUT ST (318-61-00.9)", $: 1479400 },
    { "#": "181 WALNUT ST (318-62-00)", $: 1650200 },
    { "#": "182 WALNUT ST (308-28-00)", $: 5138e3 },
    { "#": "187 WALNUT ST (318-63-00)", $: 2229300 },
    { "#": "187 WALNUT ST (318-63-00.9)", $: 2340700 },
    { "#": "195 WALNUT ST (318-64-00)", $: 2789700 },
    { "#": "205 WALNUT ST (318-65-00)", $: 1918600 },
    { "#": "210 WALNUT ST (308-10-00)", $: 2060800 },
    { "#": "217 WALNUT ST (318-66-00)", $: 2948900 },
    { "#": "220 WALNUT ST (308-09-00)", $: 1457100 },
    { "#": "222 WALNUT ST (308-08-02)", $: 1900100 },
    { "#": "224 WALNUT ST (308-08-01)", $: 2519800 },
    { "#": "230 WALNUT ST (308-08-00)", $: 1924400 },
    { "#": "233 WALNUT ST (318-67-00)", $: 1982400 },
    { "#": "234 WALNUT ST (308-07-00)", $: 1817e3 },
    { "#": "235 WALNUT ST (318-68-00.9)", $: 2599300 },
    { "#": "236 WALNUT ST (308-06-00)", $: 2073600 },
    { "#": "238 WALNUT ST (308-05-00)", $: 1899600 },
    { "#": "239 WALNUT ST (318-68-69)", $: 1841300 },
    { "#": "239 WALNUT ST (318-69-00)", $: 3769e3 },
    { "#": "240 WALNUT ST (308-04-00)", $: 2188600 },
    { "#": "242 WALNUT ST (308-03-00)", $: 2420800 },
    { "#": "247 WALNUT ST (318-70-00)", $: 1824900 },
    { "#": "249 WALNUT ST (318-71-00)", $: 2177200 },
    { "#": "254 WALNUT ST (307-22-00)", $: 2060200 },
    { "#": "255 WALNUT ST (318-72-00.9)", $: 0 },
    { "#": "256 WALNUT ST (307-21-00)", $: 2369400 },
    { "#": "257 WALNUT ST (318-73-00.9)", $: 0 },
    { "#": "258 WALNUT ST (307-20-00)", $: 1866100 },
    { "#": "261 WALNUT ST (318-74-00)", $: 2625300 },
    { "#": "262 WALNUT ST (307-19-00)", $: 1839300 },
    { "#": "263 WALNUT ST (318-75-00)", $: 1788100 },
    { "#": "267 WALNUT ST (318-76-00)", $: 1673300 },
    { "#": "268 WALNUT ST (307-18-00)", $: 1987e3 },
    { "#": "272 WALNUT ST (307-17-00)", $: 2029300 },
    { "#": "273 WALNUT ST (318-77-00)", $: 2443200 },
    { "#": "276 WALNUT ST (307-16-00)", $: 1773100 },
    { "#": "277 WALNUT ST (318-78-00)", $: 167e4 },
    { "#": "279 WALNUT ST (318-79-00)", $: 2749300 },
    { "#": "284 WALNUT ST (307-15-00)", $: 2159e3 },
    { "#": "287 WALNUT ST (318-01-00)", $: 1763300 },
    { "#": "287 WALNUT ST (318-01-00.9)", $: 1851500 },
    { "#": "294 WALNUT ST (317-18-00.9)", $: 0 },
    { "#": "295 WALNUT ST (320-05-00)", $: 1534100 },
    { "#": "299 WALNUT ST (320-05-01)", $: 777400 },
    { "#": "299 WALNUT ST (320-05-01.9)", $: 2909700 },
    { "#": "302 WALNUT ST (317-17-00)", $: 2090100 },
    { "#": "305 WALNUT ST (320-06-00)", $: 2240600 },
    { "#": "306 WALNUT ST (317-16-00)", $: 1619700 },
    { "#": "312 WALNUT ST (317-15-00)", $: 1541900 },
    { "#": "315 WALNUT ST (320A-07-00)", $: 1807400 },
    { "#": "318 WALNUT ST (317-09-00)", $: 1642400 },
    { "#": "322 WALNUT ST (317-08-00)", $: 1739300 },
    { "#": "323 WALNUT ST (320A-08-00)", $: 1659200 },
    { "#": "330 WALNUT ST (329-11-02)", $: 2206100 },
    { "#": "348 WALNUT ST (329-10-00)", $: 2840700 },
    { "#": "353 WALNUT ST (322-05-00)", $: 371e4 },
    { "#": "356 WALNUT ST (329-05-00)", $: 2408e3 },
    { "#": "371 WALNUT ST (322-06-07)", $: 5170800 },
    { "#": "393 WALNUT ST (322-08-09)", $: 4386500 },
    { "#": "397 WALNUT ST (322-10-00)", $: 1364600 },
    { "#": "400 WALNUT ST (328-08-00)", $: 8913700 },
    { "#": "405 WALNUT ST (322-11-13)", $: 503100 },
    { "#": "413 WALNUT ST (323-01-00)", $: 70600 },
    { "#": "423 WALNUT ST (324-06-00)", $: 2755e3 },
    { "#": "424 WALNUT ST (325-06-00)", $: 2908900 },
    { "#": "433 WALNUT ST (324-07-00)", $: 2293600 },
    { "#": "434 WALNUT ST (325-05-00)", $: 3791400 },
    { "#": "439 WALNUT ST (324-08-00)", $: 1348300 },
    { "#": "446 WALNUT ST (325-04-00)", $: 2688e3 },
    { "#": "460 WALNUT ST (325-03-00)", $: 2514300 },
    { "#": "468 WALNUT ST (325-02-00)", $: 3072500 },
    { "#": "469 WALNUT ST (324-09-00)", $: 4453300 },
    { "#": "0 WARREN ST (351-04-00)", $: 3748100 },
    { "#": "14 WARREN ST (334-35-00)", $: 442100 },
    { "#": "16 WARREN ST (322-15-00)", $: 1727300 },
    { "#": "30 WARREN ST (322-14-00)", $: 5053600 },
    { "#": "37 WARREN ST (324-01-00)", $: 6383500 },
    { "#": "45 WARREN ST (324-03-00)", $: 3097e3 },
    { "#": "49 WARREN ST (324-04-05)", $: 6107500 },
    { "#": "77 WARREN ST (325-07-00)", $: 5121300 },
    { "#": "99 WARREN ST (327-02-00)", $: 6860400 },
    { "#": "103 WARREN ST (334-01-00)", $: 2460200 },
    { "#": "107 WARREN ST (334-02-00)", $: 2427e3 },
    { "#": "111 WARREN ST (334-10-00)", $: 14308100 },
    { "#": "116 WARREN ST (328-07-00)", $: 6039500 },
    { "#": "126 WARREN ST (333-13-00)", $: 2404100 },
    { "#": "130 WARREN ST (333-12-00)", $: 10204500 },
    { "#": "135 WARREN ST (334-02-02)", $: 13591100 },
    { "#": "140 WARREN ST (333-10-02)", $: 2635400 },
    { "#": "143 WARREN ST (334-03-00)", $: 2397300 },
    { "#": "161 WARREN ST (334-04-00)", $: 2387400 },
    { "#": "173 WARREN ST (334-05-00)", $: 2396500 },
    { "#": "185 WARREN ST (334-06-00)", $: 2911900 },
    { "#": "186 WARREN ST (332-06-00)", $: 3647e3 },
    { "#": "190 WARREN ST (332-06-08)", $: 4975400 },
    { "#": "190 WARREN ST (332-08-00)", $: 3586900 },
    { "#": "204 WARREN ST (332-05-00)", $: 11702e3 },
    { "#": "215 WARREN ST (334-07-00)", $: 5683100 },
    { "#": "222 WARREN ST (351-12-00)", $: 7781900 },
    { "#": "222 WARREN ST (351-12-02)", $: 5554500 },
    { "#": "230 WARREN ST (351-11-00)", $: 10039100 },
    { "#": "235 WARREN ST (334-08-00)", $: 5862900 },
    { "#": "255 WARREN ST (334-09-01)", $: 13689200 },
    { "#": "257 WARREN ST (334-09-00)", $: 3882400 },
    { "#": "260 WARREN ST (352-08-09)", $: 9025e3 },
    { "#": "270 WARREN ST (351-03-00)", $: 4495400 },
    { "#": "270 WARREN ST (351-03-04)", $: 7864400 },
    { "#": "278 WARREN ST (351-07-10)", $: 22678900 },
    { "#": "280 WARREN ST (352-14-03)", $: 12903e3 },
    { "#": "282 WARREN ST (350-13-00)", $: 8954200 },
    { "#": "284 WARREN ST (351-14-00)", $: 9681200 },
    { "#": "285 WARREN ST (334-11-13)", $: 3656800 },
    { "#": "286 WARREN ST (351-13-00)", $: 7736200 },
    { "#": "288 WARREN ST (352-14-02)", $: 6612200 },
    { "#": "290 WARREN ST (351-05-06)", $: 6061800 },
    { "#": "292 WARREN ST (350-05-00)", $: 10662200 },
    { "#": "294 WARREN ST (350-12-00)", $: 310500 },
    { "#": "300 WARREN ST (350-09-00)", $: 5561e3 },
    { "#": "305 WARREN ST (334-14-00)", $: 4449200 },
    { "#": "321 WARREN ST (334-21-00)", $: 3733200 },
    { "#": "324 WARREN ST (350-08-00)", $: 4940400 },
    { "#": "325 WARREN ST (334-21-01)", $: 1376300 },
    { "#": "342 WARREN ST (349-12-01)", $: 7336900 },
    { "#": "372 WARREN ST (338-01-03)", $: 5355900 },
    { "#": "381 WARREN ST (337-26-00)", $: 11331100 },
    { "#": "388 WARREN ST (338-27-28)", $: 4645500 },
    { "#": "395 WARREN ST (337-25-00)", $: 10506600 },
    { "#": "405 WARREN ST (337-24-01)", $: 3655800 },
    { "#": "407 WARREN ST (337-24-03)", $: 7815300 },
    { "#": "415 WARREN ST (337-24-00)", $: 7079900 },
    { "#": "420 WARREN ST (338-26-00)", $: 5249100 },
    { "#": "428 WARREN ST (338-24-25)", $: 5853300 },
    { "#": "431 WARREN ST (337-23-00)", $: 7229600 },
    { "#": "450 WARREN ST (439-08-19)", $: 46839300 },
    { "#": "465 WARREN ST (337-22-00)", $: 5912400 },
    { "#": "485 WARREN ST (337-21-00)", $: 11259100 },
    { "#": "487 WARREN ST (337-21-01)", $: 2413800 },
    { "#": "489 WARREN ST (337-20-00)", $: 2396900 },
    { "#": "514 WARREN ST (439-83-00)", $: 11297200 },
    { "#": "525 WARREN ST (337-19-00)", $: 5979e3 },
    { "#": "11 WARWICK RD (106-08-00.9)", $: 0 },
    { "#": "12 WARWICK RD (107-24-00.9)", $: 0 },
    { "#": "14 WARWICK RD (107-23-00.9)", $: 0 },
    { "#": "15 WARWICK RD (106-09-00)", $: 3920200 },
    { "#": "16 WARWICK RD (107-22-00.9)", $: 0 },
    { "#": "17 WARWICK RD (106-10-00)", $: 2778400 },
    { "#": "21 WARWICK RD (106-11-00.9)", $: 0 },
    { "#": "24 WARWICK RD (107-21-00)", $: 2040800 },
    { "#": "1 WASHBURN PL (170-12-00.9)", $: 0 },
    { "#": "2 WASHBURN PL (170-10-06)", $: 2024100 },
    { "#": "2 WASHBURN PL (170-10-06.9)", $: 2024100 },
    { "#": "3 WASHBURN PL (170-11-00)", $: 1751800 },
    { "#": "4 WASHBURN PL (170-10-02)", $: 2208800 },
    { "#": "3 WASHBURN TER (170-29-00)", $: 1983300 },
    { "#": "5 WASHBURN TER (170-30-00.9)", $: 0 },
    { "#": "7 WASHBURN TER (170-31-00)", $: 1980300 },
    { "#": "9 WASHBURN TER (170-32-00.9)", $: 0 },
    { "#": "44 WASHINGTON ST (287-10-00.9)", $: 0 },
    { "#": "140 WASHINGTON ST (293-01-00)", $: 4736900 },
    { "#": "160 WASHINGTON ST (185-02-00)", $: 4121500 },
    { "#": "176 WASHINGTON ST (185-01-00)", $: 981e3 },
    { "#": "190 WASHINGTON ST (183-18-00)", $: 2533600 },
    { "#": "202 WASHINGTON ST (183-17-00)", $: 2162200 },
    { "#": "207 WASHINGTON ST (140-08-00)", $: 5419100 },
    { "#": "214 WASHINGTON ST (183-16-00)", $: 1492300 },
    { "#": "217 WASHINGTON ST (140-08-01)", $: 5238e3 },
    { "#": "220 WASHINGTON ST (183-15-00.9)", $: 0 },
    { "#": "231 WASHINGTON ST (140-08-02.9)", $: 0 },
    { "#": "236 WASHINGTON ST (183-12-00)", $: 7098200 },
    { "#": "256 WASHINGTON ST (176-01-00)", $: 5567600 },
    { "#": "264 WASHINGTON ST (176-34-00)", $: 1829300 },
    { "#": "274 WASHINGTON ST (176-33-00)", $: 2352600 },
    { "#": "279 WASHINGTON ST (174-03-06)", $: 7673700 },
    { "#": "280 WASHINGTON ST (176-32-00)", $: 3397e3 },
    { "#": "288 WASHINGTON ST (176-30-00)", $: 1965800 },
    { "#": "295 WASHINGTON ST (174-07-00)", $: 1448100 },
    { "#": "300 WASHINGTON ST (176-29-00)", $: 2732600 },
    { "#": "303 WASHINGTON ST (174-07-01)", $: 1490500 },
    { "#": "306 WASHINGTON ST (176-27-28)", $: 2278300 },
    { "#": "311 WASHINGTON ST (174-08-00)", $: 3037e3 },
    { "#": "316 WASHINGTON ST (176-26-00)", $: 10168800 },
    { "#": "322 WASHINGTON ST (176-25-00)", $: 11327900 },
    { "#": "328 WASHINGTON ST (176-24-00)", $: 1998300 },
    { "#": "330 WASHINGTON ST (176-23-00)", $: 1938800 },
    { "#": "332 WASHINGTON ST (176-22-00)", $: 1997500 },
    { "#": "332 WASHINGTON ST (176-22-00.9)", $: 1997500 },
    { "#": "333 WASHINGTON ST (172-01-00)", $: 41209500 },
    { "#": "334 WASHINGTON ST (176-21-01)", $: 1384300 },
    { "#": "336 WASHINGTON ST (176-21-00.9)", $: 0 },
    { "#": "350 WASHINGTON ST (177-01-00)", $: 22602400 },
    { "#": "360 WASHINGTON ST (177-47-00)", $: 7290700 },
    { "#": "361 WASHINGTON ST (172-02-00)", $: 34160900 },
    { "#": "366 WASHINGTON ST (177-46-00)", $: 2299500 },
    { "#": "370 WASHINGTON ST (177-42-00)", $: 2565800 },
    { "#": "376 WASHINGTON ST (177-41-00)", $: 1844500 },
    { "#": "378 WASHINGTON ST (177-40-02)", $: 856900 },
    { "#": "380 WASHINGTON ST (177-40-00)", $: 2152600 },
    { "#": "382 WASHINGTON ST (177-40-01)", $: 970600 },
    { "#": "384 WASHINGTON ST (177-39-00)", $: 1229600 },
    { "#": "385 WASHINGTON ST (171-53-00)", $: 4482300 },
    { "#": "390 WASHINGTON ST (177-38-00)", $: 2167200 },
    { "#": "399 WASHINGTON ST (171-53-01.9)", $: 0 },
    { "#": "400 WASHINGTON ST (200-15-01)", $: 6910500 },
    { "#": "411 WASHINGTON ST (171-54-00.9)", $: 0 },
    { "#": "416 WASHINGTON ST (200-14-00)", $: 1863100 },
    { "#": "432 WASHINGTON ST (200-12-01)", $: 3000400 },
    { "#": "439 WASHINGTON ST (171-55-00.9)", $: 0 },
    { "#": "447 WASHINGTON ST (171-55-01)", $: 1102700 },
    { "#": "447 WASHINGTON ST (171-55-01.9)", $: 2023900 },
    { "#": "453 WASHINGTON ST (171-56-00.9)", $: 0 },
    { "#": "454 WASHINGTON ST (207-05-06)", $: 2721100 },
    { "#": "465 WASHINGTON ST (171-57-00.9)", $: 0 },
    { "#": "471 WASHINGTON ST (171-58-00.9)", $: 0 },
    { "#": "472 WASHINGTON ST (208-04-00)", $: 1344600 },
    { "#": "480 WASHINGTON ST (208-03-00)", $: 1351800 },
    { "#": "483 WASHINGTON ST (214-50-00.9)", $: 0 },
    { "#": "484 WASHINGTON ST (208-02-00)", $: 1564400 },
    { "#": "485 WASHINGTON ST (214-51-00.9)", $: 0 },
    { "#": "487 WASHINGTON ST (214-52-00.9)", $: 0 },
    { "#": "489 WASHINGTON ST (214-53-00)", $: 1964400 },
    { "#": "490 WASHINGTON ST (208-01-00)", $: 1398e3 },
    { "#": "496 WASHINGTON ST (208-39-00)", $: 1317100 },
    { "#": "497 WASHINGTON ST (214-54-00)", $: 2503200 },
    { "#": "500 WASHINGTON ST (208-38-00.9)", $: 0 },
    { "#": "503 WASHINGTON ST (214-55-00)", $: 2077200 },
    { "#": "504 WASHINGTON ST (208-37-00)", $: 1936900 },
    { "#": "508 WASHINGTON ST (208-36-01)", $: 1677e3 },
    { "#": "512 WASHINGTON ST (208-36-00)", $: 1650600 },
    { "#": "516 WASHINGTON ST (208-35-00)", $: 2278800 },
    { "#": "519 WASHINGTON ST (212-15-00)", $: 8228300 },
    { "#": "520 WASHINGTON ST (208-34-00)", $: 1291500 },
    { "#": "523 WASHINGTON ST (212-14-00)", $: 2610400 },
    { "#": "523 WASHINGTON ST (212-14-00.9)", $: 2610400 },
    { "#": "531 WASHINGTON ST (212-13-00)", $: 1912200 },
    { "#": "531 WASHINGTON ST (212-13-00.9)", $: 3305700 },
    { "#": "537 WASHINGTON ST (212-12-00.9)", $: 0 },
    { "#": "541 WASHINGTON ST (212-11-00)", $: 1604300 },
    { "#": "549 WASHINGTON ST (212-09-00)", $: 1506300 },
    { "#": "563 WASHINGTON ST (212-05-00.9)", $: 0 },
    { "#": "575 WASHINGTON ST (212-04-00)", $: 2223200 },
    { "#": "576 WASHINGTON ST (211-15-00.9)", $: 0 },
    { "#": "580 WASHINGTON ST (211-17-00.9)", $: 0 },
    { "#": "584 WASHINGTON ST (211-18-00)", $: 2256300 },
    { "#": "585 WASHINGTON ST (212-03-00)", $: 1439700 },
    { "#": "586 WASHINGTON ST (211-19-00.9)", $: 0 },
    { "#": "589 WASHINGTON ST (212-02-00)", $: 1794100 },
    { "#": "594 WASHINGTON ST (211-21-00.9)", $: 0 },
    { "#": "598 WASHINGTON ST (211-22-00.9)", $: 0 },
    { "#": "599 WASHINGTON ST (212-01-00)", $: 1638700 },
    { "#": "602 WASHINGTON ST (211-23-00)", $: 394200 },
    { "#": "606 WASHINGTON ST (211-24-00.9)", $: 0 },
    { "#": "609 WASHINGTON ST (214-83-00.9)", $: 0 },
    { "#": "610 WASHINGTON ST (211-24-01)", $: 1608500 },
    { "#": "611 WASHINGTON ST (214-84-00)", $: 1367600 },
    { "#": "615 WASHINGTON ST (214-01-00.9)", $: 0 },
    { "#": "616 WASHINGTON ST (211-25-00.9)", $: 0 },
    { "#": "626 WASHINGTON ST (216-01-00.9)", $: 0 },
    { "#": "636 WASHINGTON ST (216-02-00)", $: 2568900 },
    { "#": "637 WASHINGTON ST (215-02-03)", $: 13366400 },
    { "#": "638 WASHINGTON ST (216-02-01.9)", $: 0 },
    { "#": "640 WASHINGTON ST (216-02-02.9)", $: 0 },
    { "#": "648 WASHINGTON ST (216-03-00.9)", $: 0 },
    { "#": "657 WASHINGTON ST (215-04-00.9)", $: 0 },
    { "#": "658 WASHINGTON ST (216-05-00)", $: 2337100 },
    { "#": "659 WASHINGTON ST (215-05-00.9)", $: 0 },
    { "#": "662 WASHINGTON ST (216-06-00.9)", $: 0 },
    { "#": "665 WASHINGTON ST (215-06-00)", $: 3284100 },
    { "#": "666 WASHINGTON ST (216-07-00.9)", $: 0 },
    { "#": "667 WASHINGTON ST (215-07-00)", $: 3788700 },
    { "#": "672 WASHINGTON ST (216-08-01)", $: 5179400 },
    { "#": "673 WASHINGTON ST (215-08-00)", $: 3587100 },
    { "#": "676 WASHINGTON ST (216-09-00)", $: 1976500 },
    { "#": "677 WASHINGTON ST (215-09-00)", $: 4358800 },
    { "#": "682 WASHINGTON ST (216-10-00)", $: 1940500 },
    { "#": "683 WASHINGTON ST (215-10-00)", $: 4358800 },
    { "#": "684 WASHINGTON ST (216-11-00)", $: 1889600 },
    { "#": "686 WASHINGTON ST (216-12-00)", $: 1427400 },
    { "#": "688 WASHINGTON ST (216-13-00)", $: 1371200 },
    { "#": "689 WASHINGTON ST (215-11-00.9)", $: 0 },
    { "#": "690 WASHINGTON ST (216-14-00)", $: 1586600 },
    { "#": "692 WASHINGTON ST (216-15-00)", $: 3059800 },
    { "#": "704 WASHINGTON ST (216-16-00)", $: 2851300 },
    { "#": "724 WASHINGTON ST (101-27-00)", $: 4972400 },
    { "#": "732 WASHINGTON ST (101-26-00)", $: 356300 },
    { "#": "736 WASHINGTON ST (101-25-00)", $: 3146900 },
    { "#": "740 WASHINGTON ST (100-01-00)", $: 2973700 },
    { "#": "747 WASHINGTON ST (092-12-00)", $: 1938900 },
    { "#": "750 WASHINGTON ST (100-20-00)", $: 1676e3 },
    { "#": "751 WASHINGTON ST (092-13-00.9)", $: 0 },
    { "#": "756 WASHINGTON ST (100-19-01)", $: 2282500 },
    { "#": "757 WASHINGTON ST (092-14-00)", $: 2630400 },
    { "#": "761 WASHINGTON ST (092-15-00)", $: 1895800 },
    { "#": "762 WASHINGTON ST (100-19-00)", $: 1889400 },
    { "#": "765 WASHINGTON ST (092-16-00)", $: 2438e3 },
    { "#": "769 WASHINGTON ST (092-17-00.9)", $: 0 },
    { "#": "779 WASHINGTON ST (094-01-00)", $: 1619700 },
    { "#": "782 WASHINGTON ST (096-11-00.9)", $: 0 },
    { "#": "783 WASHINGTON ST (094-02-00)", $: 1943900 },
    { "#": "785 WASHINGTON ST (094-03-00)", $: 1968900 },
    { "#": "786 WASHINGTON ST (096-10-00)", $: 2103700 },
    { "#": "789 WASHINGTON ST (094-04-00)", $: 1999400 },
    { "#": "793 WASHINGTON ST (094-04-01)", $: 1830200 },
    { "#": "797 WASHINGTON ST (094-04-02)", $: 3044400 },
    { "#": "800 WASHINGTON ST (095-04-02)", $: 2612500 },
    { "#": "803 WASHINGTON ST (094-05-00)", $: 2428200 },
    { "#": "804 WASHINGTON ST (095-04-03)", $: 2872800 },
    { "#": "804 WASHINGTON ST (095-04-03.9)", $: 2872800 },
    { "#": "805 WASHINGTON ST (094-06-00)", $: 2545100 },
    { "#": "807 WASHINGTON ST (094-07-00)", $: 2523400 },
    { "#": "808 WASHINGTON ST (095-04-00)", $: 2006200 },
    { "#": "809 WASHINGTON ST (094-08-00)", $: 2545100 },
    { "#": "811 WASHINGTON ST (094-09-00)", $: 2527600 },
    { "#": "815 WASHINGTON ST (094-10-00.9)", $: 0 },
    { "#": "816 WASHINGTON ST (095-03-00.9)", $: 0 },
    { "#": "817 WASHINGTON ST (094-11-00)", $: 1742900 },
    { "#": "820 WASHINGTON ST (095-02-01)", $: 1476100 },
    { "#": "824 WASHINGTON ST (095-01-00)", $: 1658600 },
    { "#": "11 WAVERLY ST (176-15-00.9)", $: 0 },
    { "#": "19 WAVERLY ST (176-16-00)", $: 1783800 },
    { "#": "25 WAVERLY ST (177-15-00)", $: 2222200 },
    { "#": "27 WAVERLY ST (177-16-00)", $: 2010100 },
    { "#": "33 WAVERLY ST (177-17-00.9)", $: 0 },
    { "#": "36 WAVERLY ST (179-14-00)", $: 2561100 },
    { "#": "37 WAVERLY ST (177-18-00.9)", $: 0 },
    { "#": "41 WAVERLY ST (177-19-00)", $: 1493800 },
    { "#": "43 WAVERLY ST (177-20-00)", $: 1748900 },
    { "#": "44 WAVERLY ST (179-13-00)", $: 2328100 },
    { "#": "44 WAVERLY ST (179-13-00.9)", $: 1754300 },
    { "#": "47 WAVERLY ST (177-21-00)", $: 2500400 },
    { "#": "48 WAVERLY ST (179-12-01)", $: 1819e3 },
    { "#": "50 WAVERLY ST (179-12-00)", $: 1920500 },
    { "#": "53 WAVERLY ST (177-22-00)", $: 2210600 },
    { "#": "57 WAVERLY ST (177-22-01)", $: 2004900 },
    { "#": "58 WAVERLY ST (179-11-02.9)", $: 0 },
    { "#": "20 WEBSTER PL (141-29-00)", $: 7375900 },
    { "#": "30 WEBSTER PL (141-28-00)", $: 2818800 },
    { "#": "10 WEBSTER ST (164-04-00.9)", $: 0 },
    { "#": "13 WEBSTER ST (163-03-00)", $: 1326e3 },
    { "#": "19 WEBSTER ST (163-04-00)", $: 3272200 },
    { "#": "25 WEBSTER ST (163-05-00)", $: 2656500 },
    { "#": "30 WEBSTER ST (164-03-00)", $: 21348e3 },
    { "#": "40 WEBSTER ST (164-02-00)", $: 68671800 },
    { "#": "11 WELCH RD (328-01-00)", $: 2684900 },
    { "#": "25 WELCH RD (328-02-00)", $: 4559e3 },
    { "#": "38 WELCH RD (328-06-00)", $: 3527100 },
    { "#": "39 WELCH RD (328-03-00)", $: 5056600 },
    { "#": "46 WELCH RD (328-05-00)", $: 2950500 },
    { "#": "58 WELCH RD (328-04-00)", $: 4889500 },
    { "#": "4 WELLAND RD (208-17-18)", $: 2867500 },
    { "#": "14 WELLAND RD (208-16-00)", $: 2200400 },
    { "#": "26 WELLAND RD (206-09-00)", $: 2105800 },
    { "#": "32 WELLAND RD (206-08-00)", $: 2073900 },
    { "#": "33 WELLAND RD (205-15-00)", $: 2104e3 },
    { "#": "41 WELLAND RD (205-16-00)", $: 1873400 },
    { "#": "42 WELLAND RD (202-19-00)", $: 1847700 },
    { "#": "48 WELLAND RD (202-18-00)", $: 2643e3 },
    { "#": "49 WELLAND RD (205-17-00)", $: 2105800 },
    { "#": "54 WELLAND RD (202-17-00)", $: 2427200 },
    { "#": "55 WELLAND RD (205-18-00)", $: 2149300 },
    { "#": "58 WELLAND RD (202-16-00)", $: 1697700 },
    { "#": "61 WELLAND RD (205-19-00)", $: 2232200 },
    { "#": "64 WELLAND RD (202-15-00)", $: 1932400 },
    { "#": "65 WELLAND RD (205-20-00)", $: 1729400 },
    { "#": "70 WELLAND RD (202-14-00)", $: 2016800 },
    { "#": "73 WELLAND RD (205-21-00)", $: 2315400 },
    { "#": "77 WELLAND RD (205-22-00)", $: 1940100 },
    { "#": "83 WELLAND RD (205-23-00)", $: 1940500 },
    { "#": "89 WELLAND RD (205-24-00)", $: 2220900 },
    { "#": "95 WELLAND RD (205-25-00)", $: 3022800 },
    { "#": "99 WELLAND RD (205-26-00)", $: 2071600 },
    { "#": "103 WELLAND RD (205-27-00)", $: 1933800 },
    { "#": "109 WELLAND RD (205-28-00)", $: 1994600 },
    { "#": "1 WELLINGTON TER (307-05-00)", $: 1855400 },
    { "#": "2 WELLINGTON TER (307-12-00.9)", $: 0 },
    { "#": "3 WELLINGTON TER (307-06-00.9)", $: 0 },
    { "#": "4 WELLINGTON TER (307-11-00)", $: 2737200 },
    { "#": "5 WELLINGTON TER (307-07-00)", $: 2986900 },
    { "#": "6 WELLINGTON TER (307-09-10)", $: 2660300 },
    { "#": "7 WELLINGTON TER (307-08-00)", $: 1809200 },
    { "#": "6 WELLMAN ST (083-01-00.9)", $: 0 },
    { "#": "9 WELLMAN ST (080-05-00)", $: 2222e3 },
    { "#": "10 WELLMAN ST (083-21-00)", $: 233e4 },
    { "#": "11 WELLMAN ST (080-06-00.9)", $: 0 },
    { "#": "12 WELLMAN ST (083-20-00.9)", $: 0 },
    { "#": "14 WELLMAN ST (083-19-00)", $: 2309700 },
    { "#": "15 WELLMAN ST (080-07-00.9)", $: 0 },
    { "#": "243 WEST ROXBURY PKY (376-15-00)", $: 255600 },
    { "#": "800 WEST ROXBURY PKY (376-16-00)", $: 1171900 },
    { "#": "806 WEST ROXBURY PKY (376-17-00)", $: 1098400 },
    { "#": "810 WEST ROXBURY PKY (376-18-00)", $: 1395700 },
    { "#": "811 WEST ROXBURY PKY (365-27-00)", $: 1101400 },
    { "#": "819 WEST ROXBURY PKY (365-26-00)", $: 1285600 },
    { "#": "822 WEST ROXBURY PKY (376-19-00)", $: 892700 },
    { "#": "828 WEST ROXBURY PKY (376-20-00)", $: 867600 },
    { "#": "829 WEST ROXBURY PKY (365-25-00)", $: 1195e3 },
    { "#": "836 WEST ROXBURY PKY (376-21-00)", $: 866500 },
    { "#": "842 WEST ROXBURY PKY (376-22-00)", $: 975700 },
    { "#": "850 WEST ROXBURY PKY (376-23-00)", $: 1078900 },
    { "#": "851 WEST ROXBURY PKY (365-08-00)", $: 1365200 },
    { "#": "858 WEST ROXBURY PKY (376-24-00)", $: 860100 },
    { "#": "861 WEST ROXBURY PKY (365-07-00)", $: 1503600 },
    { "#": "866 WEST ROXBURY PKY (376-25-00)", $: 874700 },
    { "#": "869 WEST ROXBURY PKY (365-06-00)", $: 1299e3 },
    { "#": "872 WEST ROXBURY PKY (376-26-00)", $: 1335500 },
    { "#": "875 WEST ROXBURY PKY (365-05-00)", $: 1315200 },
    { "#": "881 WEST ROXBURY PKY (365-04-00)", $: 1526400 },
    { "#": "882 WEST ROXBURY PKY (376-01-00)", $: 1101800 },
    { "#": "887 WEST ROXBURY PKY (365-03-00)", $: 2042800 },
    { "#": "893 WEST ROXBURY PKY (365-02-00)", $: 1528400 },
    { "#": "900 WEST ROXBURY PKY (375E-01-02)", $: 7712100 },
    { "#": "901 WEST ROXBURY PKY (365-01-00)", $: 1475200 },
    { "#": "909 WEST ROXBURY PKY (364-22-00)", $: 1546400 },
    { "#": "917 WEST ROXBURY PKY (364-21-00)", $: 1419800 },
    { "#": "925 WEST ROXBURY PKY (364-20-00)", $: 1330100 },
    { "#": "930 WEST ROXBURY PKY (375B-09-00)", $: 1139100 },
    { "#": "933 WEST ROXBURY PKY (364-19-00)", $: 1164300 },
    { "#": "940 WEST ROXBURY PKY (375B-08-00)", $: 1264800 },
    { "#": "941 WEST ROXBURY PKY (364-14-00)", $: 1692100 },
    { "#": "954 WEST ROXBURY PKY (375A-07-00)", $: 1146900 },
    { "#": "959 WEST ROXBURY PKY (364-13-00)", $: 4352700 },
    { "#": "962 WEST ROXBURY PKY (375A-06-00)", $: 1482800 },
    { "#": "1025 WEST ROXBURY PKY (371-07-00)", $: 1006500 },
    { "#": "1033 WEST ROXBURY PKY (371-08-00)", $: 944600 },
    { "#": "1039 WEST ROXBURY PKY (371-09-00)", $: 767800 },
    { "#": "1040 WEST ROXBURY PKY (373-06-00)", $: 1608900 },
    { "#": "1046 WEST ROXBURY PKY (373-05-00)", $: 1797400 },
    { "#": "1054 WEST ROXBURY PKY (373-04-00)", $: 1676200 },
    { "#": "1060 WEST ROXBURY PKY (373-03-00)", $: 895100 },
    { "#": "1069 WEST ROXBURY PKY (371-29-00)", $: 1607200 },
    { "#": "1075 WEST ROXBURY PKY (371-14-15)", $: 2068900 },
    { "#": "1087 WEST ROXBURY PKY (371-16-00)", $: 1894400 },
    { "#": "1097 WEST ROXBURY PKY (371-17-18)", $: 1547e3 },
    { "#": "1100 WEST ROXBURY PKY (399-46-00)", $: 1484800 },
    { "#": "1110 WEST ROXBURY PKY (399-45-00)", $: 1594100 },
    { "#": "1114 WEST ROXBURY PKY (399-44-00)", $: 1976e3 },
    { "#": "1124 WEST ROXBURY PKY (399-42-43)", $: 1834900 },
    { "#": "1125 WEST ROXBURY PKY (372-02-00)", $: 2149600 },
    { "#": "1140 WEST ROXBURY PKY (399-41-00)", $: 3612400 },
    { "#": "1152 WEST ROXBURY PKY (399-40-00)", $: 1871100 },
    { "#": "1281 WEST ROXBURY PKY (441-04-00)", $: 65098700 },
    { "#": "15 WESTBOURNE TER (091-09-00.9)", $: 0 },
    { "#": "31 WESTBOURNE TER (091-13-00.9)", $: 0 },
    { "#": "41 WESTBOURNE TER (091-16-00)", $: 2171300 },
    { "#": "45 WESTBOURNE TER (091-17-00)", $: 2618700 },
    { "#": "49 WESTBOURNE TER (091-18-00)", $: 2194800 },
    { "#": "50 WESTBOURNE TER (092-18-00)", $: 37107400 },
    { "#": "53 WESTBOURNE TER (091-19-00)", $: 2387700 },
    { "#": "57 WESTBOURNE TER (091-20-00)", $: 2441500 },
    { "#": "61 WESTBOURNE TER (091-21-00)", $: 2504200 },
    { "#": "65 WESTBOURNE TER (091-22-00)", $: 2693200 },
    { "#": "69 WESTBOURNE TER (091-23-00)", $: 2654800 },
    { "#": "69 WESTBOURNE TER (091-23-01)", $: 3064700 },
    { "#": "69 WESTBOURNE TER (091-23-05.9)", $: 3064700 },
    { "#": "73 WESTBOURNE TER (091-23-04)", $: 3064800 },
    { "#": "77 WESTBOURNE TER (091-24-00)", $: 3043200 },
    { "#": "81 WESTBOURNE TER (091-25-00.9)", $: 0 },
    { "#": "84 WESTBOURNE TER (093-14-00)", $: 2184800 },
    { "#": "84 WESTBOURNE TER (093-14-00.9)", $: 2184800 },
    { "#": "85 WESTBOURNE TER (091-26-00)", $: 2160600 },
    { "#": "89 WESTBOURNE TER (091-27-00)", $: 2429100 },
    { "#": "90 WESTBOURNE TER (093-13-00.9)", $: 0 },
    { "#": "94 WESTBOURNE TER (093-12-00)", $: 2076e3 },
    { "#": "95 WESTBOURNE TER (091-28-00)", $: 2312300 },
    { "#": "98 WESTBOURNE TER (093-11-00)", $: 2082600 },
    { "#": "99 WESTBOURNE TER (091-29-00.9)", $: 0 },
    { "#": "103 WESTBOURNE TER (091-30-00)", $: 2002600 },
    { "#": "104 WESTBOURNE TER (093-10-00.9)", $: 0 },
    { "#": "106 WESTBOURNE TER (093-09-00.9)", $: 0 },
    { "#": "107 WESTBOURNE TER (091-31-00.9)", $: 0 },
    { "#": "108 WESTBOURNE TER (093-08-00)", $: 1040100 },
    { "#": "108 WESTBOURNE TER (093-08-00.9)", $: 1213200 },
    { "#": "111 WESTBOURNE TER (091-32-00)", $: 2136400 },
    { "#": "112 WESTBOURNE TER (093-07-00.9)", $: 0 },
    { "#": "115 WESTBOURNE TER (091-33-00.9)", $: 0 },
    { "#": "116 WESTBOURNE TER (093-06-00)", $: 1838500 },
    { "#": "119 WESTBOURNE TER (091-34-00)", $: 3338500 },
    { "#": "120 WESTBOURNE TER (093-05-00)", $: 1349400 },
    { "#": "122 WESTBOURNE TER (093-04-00)", $: 1680300 },
    { "#": "125 WESTBOURNE TER (091-36-00)", $: 1903100 },
    { "#": "126 WESTBOURNE TER (093-03-00)", $: 1846100 },
    { "#": "127 WESTBOURNE TER (091-35-37.9)", $: 1490700 },
    { "#": "128 WESTBOURNE TER (093-02-00)", $: 1776900 },
    { "#": "131 WESTBOURNE TER (091-38-00)", $: 1682600 },
    { "#": "132 WESTBOURNE TER (093-01-00)", $: 1081300 },
    { "#": "133 WESTBOURNE TER (091-38-01.9)", $: 0 },
    { "#": "17 WEYBRIDGE LN (208-04-01)", $: 1969200 },
    { "#": "25 WEYBRIDGE LN (208-03-01)", $: 2200700 },
    { "#": "33 WEYBRIDGE LN (208-02-01)", $: 1899400 },
    { "#": "37 WEYBRIDGE LN (208-01-01)", $: 2021500 },
    { "#": "0 WEYBRIDGE RD (207-04-00)", $: 0 },
    { "#": "7 WEYBRIDGE RD (208-05-00)", $: 1462e3 },
    { "#": "15 WEYBRIDGE RD (208-06-00)", $: 2298700 },
    { "#": "25 WEYBRIDGE RD (208-07-00)", $: 2096e3 },
    { "#": "26 WEYBRIDGE RD (207-02-03)", $: 1324500 },
    { "#": "26 WEYBRIDGE RD (207-03-04)", $: 4006700 },
    { "#": "31 WEYBRIDGE RD (208-09-00)", $: 1944200 },
    { "#": "35 WEYBRIDGE RD (208-10-00)", $: 1716300 },
    { "#": "8 WHITE AVE (274-08-00)", $: 2068800 },
    { "#": "12 WHITE AVE (274-07-00)", $: 893e3 },
    { "#": "12 WHITE AVE (274-07-00.9)", $: 1462900 },
    { "#": "2 WHITE PL (184-17-01)", $: 423600 },
    { "#": "9 WHITE PL (183-19-00)", $: 1802800 },
    { "#": "10 WHITE PL (184-17-00)", $: 1460300 },
    { "#": "11 WHITE PL (183-20-00)", $: 1117900 },
    { "#": "12 WHITE PL (184-16-00.9)", $: 0 },
    { "#": "13 WHITE PL (183-21-00)", $: 1181300 },
    { "#": "13 WHITE PL (183-21-22)", $: 2126900 },
    { "#": "15 WHITE PL (183-22-00)", $: 1311200 },
    { "#": "16 WHITE PL (184-15-00)", $: 1543300 },
    { "#": "17 WHITE PL (183-23-00)", $: 1289100 },
    { "#": "20 WHITE PL (184-14-00)", $: 1255400 },
    { "#": "21 WHITE PL (183-24-00)", $: 1279900 },
    { "#": "22 WHITE PL (184-13-00.9)", $: 0 },
    { "#": "23 WHITE PL (183-25-00)", $: 1224100 },
    { "#": "25 WHITE PL (183-26-00)", $: 1281400 },
    { "#": "26 WHITE PL (184-12-00.9)", $: 0 },
    { "#": "27 WHITE PL (183-27-00)", $: 1102400 },
    { "#": "28 WHITE PL (184-11-00)", $: 1162400 },
    { "#": "31 WHITE PL (183-28-00)", $: 937300 },
    { "#": "33 WHITE PL (183-29-00)", $: 1378400 },
    { "#": "34 WHITE PL (184-08-10)", $: 2112600 },
    { "#": "35 WHITE PL (183-30-00.9)", $: 0 },
    { "#": "37 WHITE PL (183-31-00.9)", $: 0 },
    { "#": "38 WHITE PL (184-07-00)", $: 1532900 },
    { "#": "40 WHITE PL (184-18-00.9)", $: 0 },
    { "#": "41 WHITE PL (183-32-00)", $: 1974400 },
    { "#": "44 WHITE PL (184-05-00)", $: 1185100 },
    { "#": "45 WHITE PL (183-33-00)", $: 1135700 },
    { "#": "46 WHITE PL (184-04-01)", $: 1747900 },
    { "#": "47 WHITE PL (183-34-00)", $: 1234800 },
    { "#": "48 WHITE PL (184-04-00.9)", $: 0 },
    { "#": "49 WHITE PL (183-35-00)", $: 1178600 },
    { "#": "51 WHITE PL (183-36-00)", $: 1356300 },
    { "#": "53 WHITE PL (183-37-00)", $: 1676100 },
    { "#": "55 WHITE PL (183-38-00)", $: 1603900 },
    { "#": "61 WHITE PL (183-39-00)", $: 1289900 },
    { "#": "62 WHITE PL (184-02-00)", $: 959400 },
    { "#": "64 WHITE PL (184-01-00.9)", $: 0 },
    { "#": "65 WHITE PL (183-40-00)", $: 94e3 },
    { "#": "70 WHITE PL (182-18-00)", $: 3428600 },
    { "#": "70 WHITE PL (182-18-00.9)", $: 3428600 },
    { "#": "9 WHITNEY ST (344-02-00.9)", $: 0 },
    { "#": "10 WHITNEY ST (343-09-00)", $: 1254500 },
    { "#": "14 WHITNEY ST (343-08-00)", $: 1206300 },
    { "#": "15 WHITNEY ST (344-03-00)", $: 1582800 },
    { "#": "17 WHITNEY ST (344-04-00)", $: 1107e3 },
    { "#": "20 WHITNEY ST (343-07-00)", $: 1047e3 },
    { "#": "21 WHITNEY ST (344-05-00)", $: 1291600 },
    { "#": "24 WHITNEY ST (343-06-00)", $: 988600 },
    { "#": "25 WHITNEY ST (344-06-00)", $: 1312600 },
    { "#": "9 WILLARD RD (241-03-00)", $: 1040900 },
    { "#": "18 WILLARD RD (242-04-00)", $: 3068300 },
    { "#": "19 WILLARD RD (241-04-00)", $: 2483800 },
    { "#": "25 WILLARD RD (241-05-00)", $: 2689300 },
    { "#": "50 WILLARD RD (259-06-00)", $: 3009800 },
    { "#": "53 WILLARD RD (263-08-00)", $: 3677e3 },
    { "#": "60 WILLARD RD (259-05-00)", $: 2438500 },
    { "#": "63 WILLARD RD (263-01-00)", $: 2409800 },
    { "#": "63 WILLARD RD (263-01-01)", $: 3459e3 },
    { "#": "74 WILLARD RD (260-01-00)", $: 3174200 },
    { "#": "75 WILLARD RD (262-08-00)", $: 2595e3 },
    { "#": "85 WILLARD RD (262-01-00)", $: 2408700 },
    { "#": "86 WILLARD RD (260-06-00)", $: 3191e3 },
    { "#": "97 WILLARD RD (264B-04-00)", $: 2591300 },
    { "#": "100 WILLARD RD (261-01-00)", $: 2319800 },
    { "#": "105 WILLARD RD (264B-05-00)", $: 2490100 },
    { "#": "107 WILLARD RD (264B-05-01)", $: 5400 },
    { "#": "108 WILLARD RD (261-14-00)", $: 2264700 },
    { "#": "111 WILLARD RD (264B-06-00)", $: 2180300 },
    { "#": "114 WILLARD RD (261-13-00)", $: 2319600 },
    { "#": "119 WILLARD RD (264B-07-00)", $: 3221700 },
    { "#": "120 WILLARD RD (261-12-00)", $: 1677e3 },
    { "#": "125 WILLARD RD (264B-08-00)", $: 2257700 },
    { "#": "130 WILLARD RD (261-11-00)", $: 2496700 },
    { "#": "135 WILLARD RD (264B-09-00)", $: 2511e3 },
    { "#": "136 WILLARD RD (261-10-00)", $: 2035100 },
    { "#": "148 WILLARD RD (261-09-00)", $: 2081700 },
    { "#": "149 WILLARD RD (264C-03-00)", $: 2703400 },
    { "#": "155 WILLARD RD (264C-04-00)", $: 2358200 },
    { "#": "158 WILLARD RD (261-08-01)", $: 2087300 },
    { "#": "161 WILLARD RD (264C-05-00)", $: 1883300 },
    { "#": "164 WILLARD RD (261-08-00)", $: 2421400 },
    { "#": "167 WILLARD RD (264C-06-00)", $: 2322300 },
    { "#": "12 WILLIAMS ST (081-10-00)", $: 1505e3 },
    { "#": "24 WILLIAMS ST (081-08-00)", $: 2157100 },
    { "#": "40 WILLIAMS ST (080-01-00)", $: 13515900 },
    { "#": "46 WILLIAMS ST (080-16-00)", $: 3105200 },
    { "#": "48 WILLIAMS ST (080-15-00.9)", $: 0 },
    { "#": "50 WILLIAMS ST (080-14-00.9)", $: 0 },
    { "#": "11 WILLISTON RD (101-14-01)", $: 4259e3 },
    { "#": "17 WILLISTON RD (101-15-00)", $: 2740200 },
    { "#": "18 WILLISTON RD (102-37-00)", $: 2262100 },
    { "#": "29 WILLISTON RD (100-11-00)", $: 2384200 },
    { "#": "30 WILLISTON RD (099-01-00)", $: 2673800 },
    { "#": "39 WILLISTON RD (100-12-00)", $: 2071800 },
    { "#": "55 WILLISTON RD (097-07-00)", $: 3557600 },
    { "#": "64 WILLISTON RD (098-05-00)", $: 2637800 },
    { "#": "65 WILLISTON RD (097-08-00)", $: 3081800 },
    { "#": "70 WILLISTON RD (098-04-00)", $: 2787700 },
    { "#": "71 WILLISTON RD (097-09-00)", $: 2631500 },
    { "#": "76 WILLISTON RD (098-03-00)", $: 2338900 },
    { "#": "79 WILLISTON RD (097-10-00)", $: 2701900 },
    { "#": "82 WILLISTON RD (098-02-00)", $: 2193100 },
    { "#": "85 WILLISTON RD (097-11-00)", $: 3091200 },
    { "#": "88 WILLISTON RD (098-01-00)", $: 3116900 },
    { "#": "5 WILLOW CRES (264A-01-00)", $: 1936600 },
    { "#": "11 WILLOW CRES (264A-02-00)", $: 2756600 },
    { "#": "20 WILLOW CRES (264B-22-00)", $: 2381200 },
    { "#": "21 WILLOW CRES (264A-03-00)", $: 1962e3 },
    { "#": "26 WILLOW CRES (264B-21-00)", $: 2731100 },
    { "#": "27 WILLOW CRES (264A-04-05)", $: 2814300 },
    { "#": "34 WILLOW CRES (264B-20-00)", $: 1989e3 },
    { "#": "38 WILLOW CRES (264B-19-00)", $: 1524800 },
    { "#": "44 WILLOW CRES (264B-18-00)", $: 2096500 },
    { "#": "45 WILLOW CRES (264A-06-00)", $: 2306500 },
    { "#": "50 WILLOW CRES (264B-17-00)", $: 2896500 },
    { "#": "54 WILLOW CRES (264B-16-00)", $: 2336500 },
    { "#": "57 WILLOW CRES (264A-07-00)", $: 1808100 },
    { "#": "60 WILLOW CRES (264B-23-00)", $: 2509800 },
    { "#": "1 WINCHESTER ST (083-14-15)", $: 9314400 },
    { "#": "14 WINCHESTER ST (084-40-00)", $: 165e4 },
    { "#": "16 WINCHESTER ST (084-39-01)", $: 2659600 },
    { "#": "19 WINCHESTER ST (083-16-00.9)", $: 0 },
    { "#": "20 WINCHESTER ST (084-39-00.9)", $: 0 },
    { "#": "24 WINCHESTER ST (084-38-00.9)", $: 0 },
    { "#": "26 WINCHESTER ST (084-41-00)", $: 2079400 },
    { "#": "30 WINCHESTER ST (084-37-00)", $: 3526600 },
    { "#": "32 WINCHESTER ST (084-36-00.9)", $: 0 },
    { "#": "34 WINCHESTER ST (084-35-00.9)", $: 0 },
    { "#": "35 WINCHESTER ST (080-08-00.9)", $: 0 },
    { "#": "36 WINCHESTER ST (084-34-00.9)", $: 0 },
    { "#": "38 WINCHESTER ST (084-33-00.9)", $: 0 },
    { "#": "40 WINCHESTER ST (084-32-00.9)", $: 0 },
    { "#": "43 WINCHESTER ST (080-09-00)", $: 2269300 },
    { "#": "47 WINCHESTER ST (080-10-00.9)", $: 0 },
    { "#": "49 WINCHESTER ST (080-11-00.9)", $: 0 },
    { "#": "50 WINCHESTER ST (084-30-00.9)", $: 0 },
    { "#": "51 WINCHESTER ST (080-12-00.9)", $: 0 },
    { "#": "53 WINCHESTER ST (080-13-00)", $: 2443600 },
    { "#": "64 WINCHESTER ST (084-29-00.9)", $: 0 },
    { "#": "67 WINCHESTER ST (079-04-00.9)", $: 0 },
    { "#": "70 WINCHESTER ST (084-28-00)", $: 2372600 },
    { "#": "71 WINCHESTER ST (079-05-00)", $: 1036e3 },
    { "#": "71 WINCHESTER ST (079-05-00.9)", $: 2303600 },
    { "#": "74 WINCHESTER ST (084-27-00)", $: 2144200 },
    { "#": "75 WINCHESTER ST (079-06-00.9)", $: 0 },
    { "#": "76 WINCHESTER ST (084-26-00)", $: 1838600 },
    { "#": "80 WINCHESTER ST (084-25-00)", $: 1805900 },
    { "#": "81 WINCHESTER ST (079-07-08)", $: 9841600 },
    { "#": "90 WINCHESTER ST (084-24-00)", $: 2221800 },
    { "#": "93 WINCHESTER ST (079-09-00)", $: 16359300 },
    { "#": "94 WINCHESTER ST (084-23-00)", $: 2127200 },
    { "#": "99 WINCHESTER ST (079-10-00.9)", $: 0 },
    { "#": "100 WINCHESTER ST (084-22-00.9)", $: 0 },
    { "#": "103 WINCHESTER ST (079-11-00.9)", $: 0 },
    { "#": "104 WINCHESTER ST (084-21-00.9)", $: 0 },
    { "#": "105 WINCHESTER ST (079-12-00.9)", $: 0 },
    { "#": "109 WINCHESTER ST (079-13-00.9)", $: 0 },
    { "#": "110 WINCHESTER ST (084-20-00)", $: 2098500 },
    { "#": "118 WINCHESTER ST (085-30-00)", $: 2484900 },
    { "#": "122 WINCHESTER ST (085-29-00)", $: 1622900 },
    { "#": "122 WINCHESTER ST (085-29-00.9)", $: 1622900 },
    { "#": "125 WINCHESTER ST (077-24-00)", $: 2333600 },
    { "#": "126 WINCHESTER ST (085-28-00)", $: 2119500 },
    { "#": "130 WINCHESTER ST (085-27-00)", $: 2163100 },
    { "#": "131 WINCHESTER ST (077-01-00)", $: 1011300 },
    { "#": "131 WINCHESTER ST (077-01-00.9)", $: 2693200 },
    { "#": "134 WINCHESTER ST (085-26-00)", $: 2217700 },
    { "#": "138 WINCHESTER ST (085-25-00)", $: 1031600 },
    { "#": "138 WINCHESTER ST (085-25-00.9)", $: 1723e3 },
    { "#": "143 WINCHESTER ST (076-24-00)", $: 2422400 },
    { "#": "144 WINCHESTER ST (085-24-00)", $: 2283600 },
    { "#": "147 WINCHESTER ST (076-01-00)", $: 1344200 },
    { "#": "147 WINCHESTER ST (076-01-00.9)", $: 1757e3 },
    { "#": "148 WINCHESTER ST (085-23-00)", $: 2257800 },
    { "#": "152 WINCHESTER ST (085-22-00)", $: 3020400 },
    { "#": "156 WINCHESTER ST (085-21-00)", $: 2305400 },
    { "#": "164 WINCHESTER ST (085-20-00)", $: 2383600 },
    { "#": "165 WINCHESTER ST (075-15-00)", $: 1188e3 },
    { "#": "165 WINCHESTER ST (075-15-00.9)", $: 2905400 },
    { "#": "167 WINCHESTER ST (075-16-00)", $: 2098500 },
    { "#": "168 WINCHESTER ST (085-19-00.9)", $: 0 },
    { "#": "173 WINCHESTER ST (075-17-00.9)", $: 0 },
    { "#": "174 WINCHESTER ST (085-18-00)", $: 2652900 },
    { "#": "177 WINCHESTER ST (075-18-00)", $: 2591e3 },
    { "#": "180 WINCHESTER ST (085-17-00)", $: 2622600 },
    { "#": "183 WINCHESTER ST (075-19-00)", $: 2198100 },
    { "#": "184 WINCHESTER ST (085-16-00)", $: 2545e3 },
    { "#": "187 WINCHESTER ST (075-20-00)", $: 263e4 },
    { "#": "188 WINCHESTER ST (085-15-00.9)", $: 0 },
    { "#": "192 WINCHESTER ST (085-14-00.9)", $: 0 },
    { "#": "193 WINCHESTER ST (075-21-00)", $: 3097900 },
    { "#": "196 WINCHESTER ST (085-13-01)", $: 2220500 },
    { "#": "197 WINCHESTER ST (075-22-00)", $: 2195600 },
    { "#": "200 WINCHESTER ST (085-13-00.9)", $: 0 },
    { "#": "201 WINCHESTER ST (075-23-00.9)", $: 0 },
    { "#": "206 WINCHESTER ST (085-12-00)", $: 2420300 },
    { "#": "207 WINCHESTER ST (075-24-00.9)", $: 0 },
    { "#": "212 WINCHESTER ST (085-11-00)", $: 2215900 },
    { "#": "212 WINCHESTER ST (085-11-00.9)", $: 2215900 },
    { "#": "213 WINCHESTER ST (075-25-00.9)", $: 0 },
    { "#": "216 WINCHESTER ST (085-10-00.9)", $: 0 },
    { "#": "217 WINCHESTER ST (075-26-00.9)", $: 0 },
    { "#": "221 WINCHESTER ST (075-27-00)", $: 2153200 },
    { "#": "222 WINCHESTER ST (085-09-00)", $: 2814700 },
    { "#": "226 WINCHESTER ST (085-08-00)", $: 1994e3 },
    { "#": "227 WINCHESTER ST (075-28-00)", $: 2166200 },
    { "#": "228 WINCHESTER ST (085-07-00.9)", $: 0 },
    { "#": "231 WINCHESTER ST (075-29-00)", $: 2028700 },
    { "#": "232 WINCHESTER ST (085-06-00.9)", $: 0 },
    { "#": "236 WINCHESTER ST (085-05-00)", $: 2541500 },
    { "#": "237 WINCHESTER ST (075-30-00.9)", $: 0 },
    { "#": "240 WINCHESTER ST (085-04-00)", $: 2202200 },
    { "#": "241 WINCHESTER ST (075-31-00)", $: 2699400 },
    { "#": "244 WINCHESTER ST (085-03-00)", $: 2159600 },
    { "#": "247 WINCHESTER ST (075-32-00)", $: 2378700 },
    { "#": "248 WINCHESTER ST (085-02-02.9)", $: 0 },
    { "#": "250 WINCHESTER ST (085-02-01.9)", $: 0 },
    { "#": "251 WINCHESTER ST (075-33-00)", $: 2646300 },
    { "#": "255 WINCHESTER ST (075-34-00)", $: 2651500 },
    { "#": "260 WINCHESTER ST (085-01-01)", $: 2892e3 },
    { "#": "261 WINCHESTER ST (075-35-00)", $: 1718800 },
    { "#": "262 WINCHESTER ST (085-01-00)", $: 2938100 },
    { "#": "7 WINDSOR RD (099-06-00)", $: 2419600 },
    { "#": "15 WINDSOR RD (099-07-00)", $: 2247100 },
    { "#": "16 WINDSOR RD (103-07-00)", $: 2569900 },
    { "#": "19 WINDSOR RD (099-08-00)", $: 1645900 },
    { "#": "22 WINDSOR RD (103-06-00)", $: 1777900 },
    { "#": "25 WINDSOR RD (099-09-00)", $: 2569e3 },
    { "#": "45 WINDSOR RD (104-02-00)", $: 2050600 },
    { "#": "53 WINDSOR RD (104-03-00)", $: 2693100 },
    { "#": "56 WINDSOR RD (105-13-00)", $: 2509200 },
    { "#": "59 WINDSOR RD (104-04-00)", $: 3326900 },
    { "#": "60 WINDSOR RD (105-12-00)", $: 2966600 },
    { "#": "63 WINDSOR RD (104-07-00)", $: 14900 },
    { "#": "65 WINDSOR RD (104-05-00)", $: 3234800 },
    { "#": "68 WINDSOR RD (105-11-00)", $: 4845700 },
    { "#": "73 WINDSOR RD (104-06-00)", $: 3244e3 },
    { "#": "78 WINDSOR RD (105-10-01.9)", $: 0 },
    { "#": "16 WINSLOW RD (056-07-00)", $: 1998100 },
    { "#": "18 WINSLOW RD (056-06-00)", $: 3019600 },
    { "#": "22 WINSLOW RD (056-05-00)", $: 1519300 },
    { "#": "23 WINSLOW RD (055-22-00)", $: 1845300 },
    { "#": "23 WINSLOW RD (055-22-00.9)", $: 1845300 },
    { "#": "24 WINSLOW RD (056-04-00)", $: 1665400 },
    { "#": "27 WINSLOW RD (055-23-00)", $: 2089900 },
    { "#": "28 WINSLOW RD (056-03-00)", $: 2023900 },
    { "#": "31 WINSLOW RD (055-24-00.9)", $: 0 },
    { "#": "41 WINSLOW RD (055-25-00.9)", $: 0 },
    { "#": "44 WINSLOW RD (056-02-00)", $: 2079300 },
    { "#": "45 WINSLOW RD (055-26-00)", $: 1731200 },
    { "#": "51 WINSLOW RD (055-27-01)", $: 3634300 },
    { "#": "53 WINSLOW RD (055-27-02)", $: 3635e3 },
    { "#": "7 WINTHROP RD (210-11-04)", $: 3588700 },
    { "#": "9 WINTHROP RD (210-11-03)", $: 3558200 },
    { "#": "10 WINTHROP RD (209-10-00)", $: 1609e3 },
    { "#": "15 WINTHROP RD (210-11-01)", $: 2500100 },
    { "#": "16 WINTHROP RD (209-09-00)", $: 1808200 },
    { "#": "20 WINTHROP RD (209-08-00)", $: 1886600 },
    { "#": "21 WINTHROP RD (210-11-00)", $: 2228100 },
    { "#": "25 WINTHROP RD (210-10-02)", $: 4188400 },
    { "#": "29 WINTHROP RD (210-10-00.9)", $: 0 },
    { "#": "30 WINTHROP RD (209-07-00.9)", $: 0 },
    { "#": "33 WINTHROP RD (210-10-01)", $: 4858400 },
    { "#": "33 WINTHROP RD (210-10-01.9)", $: 4858400 },
    { "#": "35 WINTHROP RD (210-09-00)", $: 2210700 },
    { "#": "39 WINTHROP RD (210-08-00)", $: 1414300 },
    { "#": "39 WINTHROP RD (210-08-00.9)", $: 1414300 },
    { "#": "47 WINTHROP RD (210-07-00.9)", $: 0 },
    { "#": "51 WINTHROP RD (210-06-00.9)", $: 0 },
    { "#": "57 WINTHROP RD (210-05-00.9)", $: 0 },
    { "#": "63 WINTHROP RD (210-04-00.9)", $: 0 },
    { "#": "67 WINTHROP RD (210-03-00.9)", $: 0 },
    { "#": "73 WINTHROP RD (210-02-00.9)", $: 0 },
    { "#": "78 WINTHROP RD (218-05-00)", $: 1228800 },
    { "#": "78 WINTHROP RD (218-05-00.9)", $: 4469500 },
    { "#": "79 WINTHROP RD (210-01-00)", $: 1914100 },
    { "#": "84 WINTHROP RD (218-04-00)", $: 3057300 },
    { "#": "84 WINTHROP RD (218-04-00.9)", $: 1414800 },
    { "#": "89 WINTHROP RD (217-48-00.9)", $: 0 },
    { "#": "91 WINTHROP RD (217-47-00)", $: 2197800 },
    { "#": "92 WINTHROP RD (218-03-00.9)", $: 0 },
    { "#": "96 WINTHROP RD (218-02-00)", $: 2675800 },
    { "#": "97 WINTHROP RD (217-46-00.9)", $: 0 },
    { "#": "101 WINTHROP RD (217-45-00.9)", $: 0 },
    { "#": "105 WINTHROP RD (217-44-01)", $: 1381500 },
    { "#": "105 WINTHROP RD (217-44-01.9)", $: 1724400 },
    { "#": "107 WINTHROP RD (217-44-00)", $: 2680200 },
    { "#": "108 WINTHROP RD (219-01-03)", $: 9472400 },
    { "#": "111 WINTHROP RD (217-43-00)", $: 2277400 },
    { "#": "111 WINTHROP RD (217-43-00.9)", $: 3267200 },
    { "#": "119 WINTHROP RD (217-42-00.9)", $: 0 },
    { "#": "124 WINTHROP RD (219-38-00.9)", $: 0 },
    { "#": "135 WINTHROP RD (217-41-00)", $: 2711800 },
    { "#": "139 WINTHROP RD (217-40-00)", $: 2561e3 },
    { "#": "145 WINTHROP RD (217-37-00.9)", $: 0 },
    { "#": "146 WINTHROP RD (220-78-00.9)", $: 0 },
    { "#": "152 WINTHROP RD (220-77-00.9)", $: 0 },
    { "#": "157 WINTHROP RD (217-36-00.9)", $: 0 },
    { "#": "158 WINTHROP RD (220-76-00)", $: 3495400 },
    { "#": "158 WINTHROP RD (220-76-00.9)", $: 0 },
    { "#": "164 WINTHROP RD (220-75-00)", $: 2483600 },
    { "#": "165 WINTHROP RD (217-35-00)", $: 3068400 },
    { "#": "168 WINTHROP RD (220-73-74)", $: 6615900 },
    { "#": "175 WINTHROP RD (217-34-00.9)", $: 0 },
    { "#": "177 WINTHROP RD (217-33-00)", $: 1267500 },
    { "#": "177 WINTHROP RD (217-33-00.9)", $: 0 },
    { "#": "181 WINTHROP RD (217-32-00)", $: 3646900 },
    { "#": "185 WINTHROP RD (217-31-00)", $: 2631700 },
    { "#": "187 WINTHROP RD (217-30-00)", $: 3042600 },
    { "#": "191 WINTHROP RD (217-29-00)", $: 39e5 },
    { "#": "195 WINTHROP RD (217-28-00.9)", $: 0 },
    { "#": "199 WINTHROP RD (217-27-00)", $: 3876400 },
    { "#": "203 WINTHROP RD (217-26-00)", $: 3242600 },
    { "#": "208 WINTHROP RD (224-33-00)", $: 9151600 },
    { "#": "210 WINTHROP RD (224-32-00)", $: 7420700 },
    { "#": "8 WOLCOTT RD (399-19-00)", $: 1178500 },
    { "#": "9 WOLCOTT RD (402-27-00)", $: 1053800 },
    { "#": "14 WOLCOTT RD (399-18-00)", $: 1005900 },
    { "#": "18 WOLCOTT RD (399-17-00)", $: 1174800 },
    { "#": "19 WOLCOTT RD (402-26-00)", $: 913900 },
    { "#": "24 WOLCOTT RD (399-16-00)", $: 916200 },
    { "#": "27 WOLCOTT RD (402-25-00)", $: 321e4 },
    { "#": "28 WOLCOTT RD (399-15-00)", $: 1406400 },
    { "#": "31 WOLCOTT RD (402-24-00)", $: 1277300 },
    { "#": "34 WOLCOTT RD (399-14-00)", $: 1299200 },
    { "#": "37 WOLCOTT RD (402-23-00)", $: 1107500 },
    { "#": "43 WOLCOTT RD (402-22-00)", $: 1099600 },
    { "#": "47 WOLCOTT RD (402-21-00)", $: 1035e3 },
    { "#": "51 WOLCOTT RD (402-20-00)", $: 1343700 },
    { "#": "55 WOLCOTT RD (402-19-00)", $: 1386600 },
    { "#": "58 WOLCOTT RD (401-14-00)", $: 1128300 },
    { "#": "61 WOLCOTT RD (402-18-00)", $: 1299900 },
    { "#": "64 WOLCOTT RD (401-13-00)", $: 1030100 },
    { "#": "65 WOLCOTT RD (402-17-00)", $: 1209e3 },
    { "#": "68 WOLCOTT RD (401-12-00)", $: 1181900 },
    { "#": "69 WOLCOTT RD (402-16-00)", $: 1139e3 },
    { "#": "75 WOLCOTT RD (402-15-00)", $: 1327900 },
    { "#": "78 WOLCOTT RD (401-11-00)", $: 1344e3 },
    { "#": "79 WOLCOTT RD (402-14-00)", $: 1256700 },
    { "#": "84 WOLCOTT RD (401-10-00)", $: 1542900 },
    { "#": "85 WOLCOTT RD (402-13-00)", $: 1672500 },
    { "#": "89 WOLCOTT RD (402-12-00)", $: 963800 },
    { "#": "93 WOLCOTT RD (402-11-00)", $: 1138e3 },
    { "#": "96 WOLCOTT RD (401-09-00)", $: 1400400 },
    { "#": "100 WOLCOTT RD (401-07-00)", $: 1379400 },
    { "#": "101 WOLCOTT RD (402-10-00)", $: 1730900 },
    { "#": "111 WOLCOTT RD (402-09-00)", $: 1061800 },
    { "#": "112 WOLCOTT RD (401-06-00)", $: 1529100 },
    { "#": "115 WOLCOTT RD (402-08-00)", $: 1656300 },
    { "#": "117 WOLCOTT RD (402-07-00)", $: 1899200 },
    { "#": "118 WOLCOTT RD (401-05-00)", $: 1257800 },
    { "#": "123 WOLCOTT RD (402-06-00)", $: 1010900 },
    { "#": "124 WOLCOTT RD (401-04-00)", $: 1577300 },
    { "#": "127 WOLCOTT RD (402-05-00)", $: 1091300 },
    { "#": "133 WOLCOTT RD (402-04-00)", $: 1440200 },
    { "#": "136 WOLCOTT RD (401-03-00)", $: 1287700 },
    { "#": "151 WOLCOTT RD (400-09-00)", $: 1249600 },
    { "#": "157 WOLCOTT RD (400-10-00)", $: 1549700 },
    { "#": "158 WOLCOTT RD (401-02-00)", $: 2827500 },
    { "#": "161 WOLCOTT RD (400-11-00)", $: 1547700 },
    { "#": "171 WOLCOTT RD (400-12-00)", $: 1712900 },
    { "#": "172 WOLCOTT RD (401-01-00)", $: 1718300 },
    { "#": "187 WOLCOTT RD (399-01-00)", $: 1246800 },
    { "#": "190 WOLCOTT RD (401-24-00)", $: 1832e3 },
    { "#": "193 WOLCOTT RD (399-02-00)", $: 1095e3 },
    { "#": "198 WOLCOTT RD (401-22-23)", $: 1556600 },
    { "#": "199 WOLCOTT RD (399-03-00)", $: 908400 },
    { "#": "205 WOLCOTT RD (399-04-00)", $: 1289400 },
    { "#": "207 WOLCOTT RD (399-05-00)", $: 1417600 },
    { "#": "210 WOLCOTT RD (401-21-00)", $: 1574900 },
    { "#": "211 WOLCOTT RD (399-06-00)", $: 1006100 },
    { "#": "214 WOLCOTT RD (401-20-00)", $: 1427300 },
    { "#": "217 WOLCOTT RD (399-07-00)", $: 2565600 },
    { "#": "220 WOLCOTT RD (401-19-00)", $: 2389600 },
    { "#": "221 WOLCOTT RD (399-08-00)", $: 1082600 },
    { "#": "227 WOLCOTT RD (399-09-00)", $: 1158500 },
    { "#": "228 WOLCOTT RD (401-18-00)", $: 1551800 },
    { "#": "231 WOLCOTT RD (399-10-00)", $: 1787900 },
    { "#": "234 WOLCOTT RD (401-17-00)", $: 1481e3 },
    { "#": "239 WOLCOTT RD (399-11-12)", $: 2420600 },
    { "#": "240 WOLCOTT RD (401-16-00)", $: 1551900 },
    { "#": "245 WOLCOTT RD (399-13-00)", $: 1061600 },
    { "#": "246 WOLCOTT RD (401-15-00)", $: 1572500 },
    { "#": "8 WOLCOTT RD EXT (398A-11-00)", $: 2015800 },
    { "#": "11 WOLCOTT RD EXT (400-06-00)", $: 1417e3 },
    { "#": "18 WOLCOTT RD EXT (398A-12-00)", $: 2049800 },
    { "#": "21 WOLCOTT RD EXT (400-07-00)", $: 1679500 },
    { "#": "26 WOLCOTT RD EXT (398A-13-00)", $: 1722300 },
    { "#": "33 WOLCOTT RD EXT (400-08-00)", $: 1770900 },
    { "#": "34 WOLCOTT RD EXT (402-01-02)", $: 1274500 },
    { "#": "42 WOLCOTT RD EXT (402-03-00)", $: 1570500 },
    { "#": "11 WOODCLIFF RD (375D-02-00)", $: 1822700 },
    { "#": "21 WOODCLIFF RD (375D-03-00)", $: 1318700 },
    { "#": "27 WOODCLIFF RD (375D-04-00)", $: 1147400 },
    { "#": "43 WOODCLIFF RD (376A-01-01)", $: 1322700 },
    { "#": "46 WOODCLIFF RD (376-02-00)", $: 11e5 },
    { "#": "51 WOODCLIFF RD (376A-02-00)", $: 1178100 },
    { "#": "54 WOODCLIFF RD (376-03-00)", $: 1167400 },
    { "#": "59 WOODCLIFF RD (376A-03-00)", $: 1210400 },
    { "#": "60 WOODCLIFF RD (376-04-00)", $: 1507900 },
    { "#": "65 WOODCLIFF RD (376A-04-00)", $: 1170300 },
    { "#": "66 WOODCLIFF RD (376-05-00)", $: 1150300 },
    { "#": "73 WOODCLIFF RD (376A-05-00)", $: 1035300 },
    { "#": "74 WOODCLIFF RD (376-06-00)", $: 994900 },
    { "#": "79 WOODCLIFF RD (376A-06-00)", $: 1571300 },
    { "#": "80 WOODCLIFF RD (376-07-00)", $: 1114100 },
    { "#": "82 WOODCLIFF RD (376-08-01)", $: 13200 },
    { "#": "85 WOODCLIFF RD (376A-07-00)", $: 1205100 },
    { "#": "86 WOODCLIFF RD (376-08-00)", $: 1562300 },
    { "#": "92 WOODCLIFF RD (376-09-00)", $: 926100 },
    { "#": "93 WOODCLIFF RD (376A-08-00)", $: 1275700 },
    { "#": "100 WOODCLIFF RD (376-10-00)", $: 969800 },
    { "#": "105 WOODCLIFF RD (376A-09-00)", $: 1069900 },
    { "#": "106 WOODCLIFF RD (376-11-00)", $: 1092400 },
    { "#": "110 WOODCLIFF RD (376-12-00)", $: 1185500 },
    { "#": "111 WOODCLIFF RD (376A-10-00)", $: 1118400 },
    { "#": "117 WOODCLIFF RD (376A-11-00)", $: 1218700 },
    { "#": "118 WOODCLIFF RD (376-13-00)", $: 944700 },
    { "#": "122 WOODCLIFF RD (376-14-00)", $: 455900 },
    { "#": "123 WOODCLIFF RD (376A-12-13)", $: 1343800 },
    { "#": "0 WOODLAND RD (441-53-05)", $: 689700 },
    { "#": "27 WOODLAND RD (432-33-00)", $: 12496400 },
    { "#": "31 WOODLAND RD (432-32-00)", $: 2773100 },
    { "#": "33 WOODLAND RD (432-31-04)", $: 6374400 },
    { "#": "45 WOODLAND RD (432-31-03)", $: 7144700 },
    { "#": "49 WOODLAND RD (432-31-02)", $: 6171600 },
    { "#": "53 WOODLAND RD (432-31-01)", $: 6056700 },
    { "#": "69 WOODLAND RD (432-01-00)", $: 6631700 },
    { "#": "89 WOODLAND RD (431-10-00)", $: 1816800 },
    { "#": "105 WOODLAND RD (431-11-00)", $: 5881700 },
    { "#": "112 WOODLAND RD (440-39-02)", $: 19576200 },
    { "#": "116 WOODLAND RD (440-39-03)", $: 12074200 },
    { "#": "117 WOODLAND RD (431-12-00)", $: 3670400 },
    { "#": "118 WOODLAND RD (440-40-00)", $: 9915400 },
    { "#": "126 WOODLAND RD (440-41-00)", $: 8239800 },
    { "#": "127 WOODLAND RD (431-01-00)", $: 3324800 },
    { "#": "134 WOODLAND RD (440-42-00)", $: 7760700 },
    { "#": "136 WOODLAND RD (440-43-00)", $: 4073700 },
    { "#": "136 WOODLAND RD (440-43-02)", $: 4447400 },
    { "#": "138 WOODLAND RD (440-43-01)", $: 4492600 },
    { "#": "145 WOODLAND RD (430-01-00)", $: 2444900 },
    { "#": "150 WOODLAND RD (441-53-04)", $: 5464800 },
    { "#": "152 WOODLAND RD (441-53-03)", $: 2484700 },
    { "#": "154 WOODLAND RD (441-53-02)", $: 2541600 },
    { "#": "161 WOODLAND RD (430-02-00)", $: 3731400 },
    { "#": "168 WOODLAND RD (441-53-01)", $: 24486500 },
    { "#": "173 WOODLAND RD (430-02-01)", $: 4173600 },
    { "#": "181 WOODLAND RD (430-03-00)", $: 2115e3 },
    { "#": "187 WOODLAND RD (430-03-01)", $: 1492600 },
    { "#": "222 WOODLAND RD (420-04-01)", $: 1629900 },
    { "#": "225 WOODLAND RD (422-04-00)", $: 2484400 },
    { "#": "232 WOODLAND RD (420-05-00)", $: 4811e3 },
    { "#": "235 WOODLAND RD (422-05-00)", $: 2447500 },
    { "#": "242 WOODLAND RD (420-06-00)", $: 3366500 },
    { "#": "245 WOODLAND RD (422-06-00)", $: 2842900 },
    { "#": "252 WOODLAND RD (420-07-00)", $: 3112600 },
    { "#": "255 WOODLAND RD (422-07-00)", $: 3024200 },
    { "#": "262 WOODLAND RD (420-08-00)", $: 4144100 },
    { "#": "265 WOODLAND RD (422-08-00)", $: 4446600 },
    { "#": "272 WOODLAND RD (420-09-00)", $: 3338500 },
    { "#": "284 WOODLAND RD (420-10-00)", $: 2633400 },
    { "#": "300 WOODLAND RD (420-11-00)", $: 4568100 },
    { "#": "310 WOODLAND RD (420-12-00)", $: 2073200 },
    { "#": "320 WOODLAND RD (420-13-00)", $: 1736100 },
    { "#": "333 WOODLAND RD (429-40-00)", $: 2579400 },
    { "#": "342 WOODLAND RD (421-12-00)", $: 3239600 },
    { "#": "347 WOODLAND RD (429-41-00)", $: 4640600 },
    { "#": "354 WOODLAND RD (421-13-00)", $: 1934900 },
    { "#": "360 WOODLAND RD (421-13-01)", $: 1217900 },
    { "#": "361 WOODLAND RD (429-42-00)", $: 2414200 },
    { "#": "370 WOODLAND RD (421-13-02)", $: 1327100 },
    { "#": "378 WOODLAND RD (421-14-00)", $: 1157600 },
    { "#": "382 WOODLAND RD (421-14-02)", $: 1080600 },
    { "#": "3 WORTHINGTON RD (015-05-00)", $: 4481500 },
    { "#": "4 WORTHINGTON RD (014-03-00)", $: 4522700 },
    { "#": "11 WORTHINGTON RD (015-06-00)", $: 3381800 },
    { "#": "12 WORTHINGTON RD (014-02-00)", $: 2290900 },
    { "#": "22 WORTHINGTON RD (014-01-00)", $: 6700800 },
    { "#": "39 WORTHINGTON RD (016-04-04)", $: 5850300 },
    { "#": "49 WORTHINGTON RD (016-05-00)", $: 5214600 },
    { "#": "50 WORTHINGTON RD (012-06-00)", $: 11266e3 },
    { "#": "53 WORTHINGTON RD (016-01-02)", $: 3349e3 },
    { "#": "17 YARMOUTH RD (440-31-00)", $: 8244200 },
    { "#": "24 YARMOUTH RD (440-14-00)", $: 6475400 },
    { "#": "33 YARMOUTH RD (440-28-29)", $: 8053600 },
    { "#": "40 YARMOUTH RD (440-15-00)", $: 3764600 },
    { "#": "50 YARMOUTH RD (440-16-00)", $: 6964900 },
    { "#": "74 YARMOUTH RD (440-17-00)", $: 4097300 },
    { "#": "83 YARMOUTH RD (440-27-00)", $: 9484600 },
    { "#": "85 YARMOUTH RD (440-26-30)", $: 14214800 },
    { "#": "90 YARMOUTH RD (440-18-00)", $: 7155600 },
    { "#": "99 YARMOUTH RD (440-25-00)", $: 5744300 },
    { "#": "110 YARMOUTH RD (440-19-00)", $: 6973e3 },
    { "#": "111 YARMOUTH RD (440-24-00)", $: 6817600 },
    { "#": "125 YARMOUTH RD (440-23-00)", $: 7915800 },
    { "#": "132 YARMOUTH RD (440-20-00)", $: 5262600 },
    { "#": "145 YARMOUTH RD (440-22-00)", $: 3279700 },
    { "#": "150 YARMOUTH RD (440-21-00)", $: 6225100 },
    { "#": "6 YORK TER (088-48-00)", $: 1653e3 },
    { "#": "12 YORK TER (088-47-00.9)", $: 0 },
    { "#": "15 YORK TER (087-02-00)", $: 2422200 },
    { "#": "16 YORK TER (088-46-00)", $: 275e4 },
    { "#": "22 YORK TER (088-45-00)", $: 2177500 },
    { "#": "23 YORK TER (087-03-00)", $: 1052600 },
    { "#": "23 YORK TER (087-03-00.9)", $: 1865900 },
    { "#": "24 YORK TER (088-44-00)", $: 1917900 },
    { "#": "28 YORK TER (088-43-00)", $: 1759500 },
    { "#": "30 YORK TER (088-42-00)", $: 1580400 },
    { "#": "31 YORK TER (087-04-00)", $: 3213500 },
    { "#": "34 YORK TER (088-41-00)", $: 1635500 },
    { "#": "38 YORK TER (088-40-00)", $: 2801e3 },
    { "#": "39 YORK TER (087-05-00)", $: 1799300 },
    { "#": "44 YORK TER (088-39-00)", $: 2488700 },
    { "#": "45 YORK TER (087-06-00)", $: 2472200 },
    { "#": "48 YORK TER (088-38-00.9)", $: 3083600 },
    { "#": "50 YORK TER (088-38-00)", $: 1141400 },
    { "#": "51 YORK TER (087-07-00)", $: 2011800 },
    { "#": "57 YORK TER (087-08-00)", $: 2883400 },
    { "#": "58 YORK TER (088-37-00)", $: 1555200 },
    { "#": "66 YORK TER (088-36-00)", $: 1577200 },
    { "#": "72 YORK TER (088-35-00)", $: 2907900 },
    { "#": "80 YORK TER (088-33-34)", $: 1761e3 },
    { "#": "88 YORK TER (088-32-00)", $: 1401700 },
    { "#": "96 YORK TER (088-31-00)", $: 2388700 },
    { "#": "104 YORK TER (088-30-00)", $: 1772e3 },
    { "#": "107 YORK TER (087-10-00)", $: 2093300 },
    { "#": "110 YORK TER (088-29-00)", $: 1837700 },
    { "#": "111 YORK TER (087-11-00)", $: 2015200 },
    { "#": "118 YORK TER (088-28-00)", $: 2224100 },
    { "#": "119 YORK TER (087-12-00)", $: 2172400 },
    { "#": "125 YORK TER (087-13-00.9)", $: 0 }
  ];

  // src/use-calculator.ts
  var DEFAULT_OVERRIDE_AMOUNT = 5e6;
  var DEFAULT_ASSESSED_VALUE = 765770;
  var CURRENT_TAX_RATE = 10.23;
  var RATE_IMPACT_SLOPE = 15103764965009e-20;
  var RATE_IMPACT_INTERCEPT = -0.002888896053319101;
  var formatDollars = (val) => val.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
  var fuse = new Fuse(properties_default, {
    keys: ["#"],
    threshold: 0.2
  });
  var useCalculator = () => {
    const [isLoading, setIsLoading] = d2(false);
    const [suggestions, setSuggestions] = d2([]);
    const [selectedProperty, setSelectedProperty] = d2(
      null
    );
    const [query, setQuery] = d2("");
    const [assessedValue, setAssessedValue] = d2(
      DEFAULT_ASSESSED_VALUE
    );
    const [overrideValue, setOverrideValue] = d2(
      DEFAULT_OVERRIDE_AMOUNT
    );
    const [calculatedValues, setCalculatedValues] = d2({
      currentTaxRate: "",
      newTaxRate: "",
      newTaxRateImpact: "",
      currentTaxBillYearly: "",
      newTaxBillYearly: "",
      currentTaxBillQuarterly: "",
      newTaxBillQuarterly: "",
      estimatedTaxImpactYearly: "",
      estimatedTaxImpactQuarterly: "",
      estimatedTaxImpactMonthly: "",
      estimatedTaxImpactDaily: ""
    });
    const fetchSuggestions = q2(async (searchQuery) => {
      setIsLoading(true);
      try {
        const data = fuse.search(searchQuery).slice(0, 10).map(({ item }) => ({
          address: item["#"],
          value: item.$
        }));
        setSuggestions(data);
      } catch (error2) {
        console.error("Error fetching suggestions:", error2);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, []);
    const debouncedFetchSuggestions = q2(
      /* @__PURE__ */ (() => {
        let timeoutId;
        return (searchQuery) => {
          setIsLoading(true);
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fetchSuggestions(searchQuery), 200);
        };
      })(),
      [fetchSuggestions]
    );
    y2(() => {
      const currentOverride = overrideValue != null ? overrideValue : 0;
      const rateImpact = Math.ceil(
        100 * (RATE_IMPACT_SLOPE * currentOverride + RATE_IMPACT_INTERCEPT)
      ) / 100;
      const proposedNewTaxRate = CURRENT_TAX_RATE + rateImpact;
      const currentTaxBill = (assessedValue != null ? assessedValue : 0) / 1e3 * CURRENT_TAX_RATE;
      const newTaxBill = (assessedValue != null ? assessedValue : 0) / 1e3 * proposedNewTaxRate;
      const taxBillImpactYearly = newTaxBill - currentTaxBill;
      const taxBillImpactQuarterly = taxBillImpactYearly / 4;
      const taxBillImpactMonthly = taxBillImpactYearly / 12;
      const taxBillImpactDaily = taxBillImpactYearly / 365;
      setCalculatedValues({
        currentTaxRate: formatDollars(CURRENT_TAX_RATE),
        newTaxRate: formatDollars(proposedNewTaxRate),
        newTaxRateImpact: formatDollars(rateImpact),
        currentTaxBillYearly: formatDollars(currentTaxBill),
        newTaxBillYearly: formatDollars(newTaxBill),
        currentTaxBillQuarterly: formatDollars(currentTaxBill / 4),
        newTaxBillQuarterly: formatDollars(newTaxBill / 4),
        estimatedTaxImpactYearly: formatDollars(taxBillImpactYearly),
        estimatedTaxImpactQuarterly: formatDollars(taxBillImpactQuarterly),
        estimatedTaxImpactMonthly: formatDollars(taxBillImpactMonthly),
        estimatedTaxImpactDaily: formatDollars(taxBillImpactDaily)
      });
    }, [assessedValue, overrideValue]);
    const onPropertyChange = q2((property) => {
      setSelectedProperty(property);
      if (property) {
        setAssessedValue(property.value);
        setQuery(property.address);
      }
    }, []);
    const onAddressInputChange = q2(
      (event) => {
        const value = event.target.value;
        setQuery(value);
        debouncedFetchSuggestions(value);
      },
      [debouncedFetchSuggestions]
    );
    const onAssessedValueChange = q2((value) => {
      setAssessedValue(value);
    }, []);
    const onOverrideValueChange = q2((value) => {
      setOverrideValue(value);
    }, []);
    const getDisplayValue = q2(
      (property) => {
        var _a;
        return (_a = property == null ? void 0 : property.address) != null ? _a : query;
      },
      [query]
    );
    return {
      isLoading,
      suggestions,
      selectedProperty,
      query,
      assessedValue,
      overrideValue,
      calculatedValues,
      onPropertyChange,
      onAddressInputChange,
      onAssessedValueChange,
      onOverrideValueChange,
      getDisplayValue
    };
  };

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  init_preact_module();
  init_preact_module();
  var f13 = 0;
  function u16(e8, t9, n9, o11, i9, u17) {
    t9 || (t9 = {});
    var a15, c13, p10 = t9;
    if ("ref" in p10) for (c13 in p10 = {}, t9) "ref" == c13 ? a15 = t9[c13] : p10[c13] = t9[c13];
    var l8 = { type: e8, props: p10, key: n9, ref: a15, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f13, __i: -1, __u: 0, __source: i9, __self: u17 };
    if ("function" == typeof e8 && (a15 = e8.defaultProps)) for (c13 in a15) void 0 === p10[c13] && (p10[c13] = a15[c13]);
    return l.vnode && l.vnode(l8), l8;
  }

  // src/calculator.tsx
  var Calculator = () => {
    const calculator = useCalculator();
    return /* @__PURE__ */ u16("article", { id: "override-calculator", className: "calculator", children: [
      /* @__PURE__ */ u16("h1", { children: "Brookline Override Calculator" }),
      /* @__PURE__ */ u16("section", { className: "calculator__inputs", children: [
        /* @__PURE__ */ u16("h2", { className: "calculator__heading", children: "Enter your Info" }),
        /* @__PURE__ */ u16("form", { className: "calculator__form", children: /* @__PURE__ */ u16("fieldset", { className: "calculator__fieldset", children: [
          /* @__PURE__ */ u16("div", { className: "calculator__field", children: [
            /* @__PURE__ */ u16("label", { htmlFor: "overrideValue", className: "calculator__label", children: "Hypothetical Override Amount" }),
            /* @__PURE__ */ u16("div", { className: "calculator__input-wrapper", children: [
              /* @__PURE__ */ u16("span", { className: "calculator__currency-symbol", children: "$" }),
              /* @__PURE__ */ u16(
                NumericFormat,
                {
                  id: "overrideValue",
                  className: "calculator__input calculator__input--numeric",
                  name: "New override amount",
                  type: "text",
                  value: calculator.overrideValue,
                  onValueChange: (e8) => calculator.onOverrideValueChange(e8.floatValue),
                  placeholder: formatDollars(DEFAULT_OVERRIDE_AMOUNT),
                  thousandSeparator: true,
                  allowNegative: false,
                  decimalScale: 0,
                  max: 146e5,
                  maxLength: 10
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__field", children: [
            /* @__PURE__ */ u16("label", { htmlFor: "propertyAddress", className: "calculator__label", children: "Property Address" }),
            /* @__PURE__ */ u16(
              Ht,
              {
                value: calculator.selectedProperty,
                onChange: calculator.onPropertyChange,
                children: /* @__PURE__ */ u16("div", { className: "calculator__combobox", children: [
                  /* @__PURE__ */ u16(
                    ko,
                    {
                      id: "propertyAddress",
                      className: "calculator__input calculator__input--combobox",
                      placeholder: "123 Main St",
                      displayValue: calculator.getDisplayValue,
                      onChange: calculator.onAddressInputChange
                    }
                  ),
                  /* @__PURE__ */ u16(Uo, { className: "calculator__combobox-options", children: calculator.isLoading ? /* @__PURE__ */ u16("div", { className: "calculator__combobox-message", children: "Loading..." }) : calculator.suggestions.length === 0 && calculator.query.length > 2 ? /* @__PURE__ */ u16("div", { className: "calculator__combobox-message", children: /* @__PURE__ */ u16("strong", { children: "No properties found" }) }) : calculator.suggestions.map((suggestion, index3) => /* @__PURE__ */ u16(
                    Ho,
                    {
                      value: suggestion,
                      className: "calculator__combobox-option",
                      children: [
                        /* @__PURE__ */ u16("div", { className: "calculator__combobox-option-address", children: suggestion.address }),
                        /* @__PURE__ */ u16("div", { className: "calculator__combobox-option-value", children: [
                          "Assessed Value: ",
                          formatDollars(suggestion.value)
                        ] })
                      ]
                    },
                    index3
                  )) })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__field", children: [
            /* @__PURE__ */ u16("label", { htmlFor: "yourValue", className: "calculator__label", children: "Your Assessed Property Value" }),
            /* @__PURE__ */ u16("div", { className: "calculator__input-wrapper", children: [
              /* @__PURE__ */ u16("span", { className: "calculator__currency-symbol", children: "$" }),
              /* @__PURE__ */ u16(
                NumericFormat,
                {
                  id: "yourValue",
                  className: "calculator__input calculator__input--numeric",
                  name: "Your assessment value",
                  type: "text",
                  value: calculator.assessedValue,
                  onValueChange: (e8) => calculator.onAssessedValueChange(e8.floatValue),
                  placeholder: formatDollars(DEFAULT_ASSESSED_VALUE),
                  thousandSeparator: true,
                  allowNegative: false,
                  decimalScale: 0,
                  max: 1e8,
                  maxLength: 11
                }
              )
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ u16("section", { className: "calculator__results calculator__results--tax-rate", children: [
        /* @__PURE__ */ u16("h2", { className: "calculator__heading", children: "Estimated Tax Rate Increase" }),
        /* @__PURE__ */ u16("dl", { className: "calculator__data-list", children: [
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Current Tax Rate" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: [
              calculator.calculatedValues.currentTaxRate,
              " ",
              /* @__PURE__ */ u16("span", { class: "calculator__detail calculator__detail--subscript", children: "per $1,000" })
            ] })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: [
              "Proposed Tax Rate (",
              " ",
              calculator.calculatedValues.newTaxRateImpact,
              " increase)"
            ] }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: [
              calculator.calculatedValues.newTaxRate,
              " ",
              /* @__PURE__ */ u16("span", { class: "calculator__detail calculator__detail--subscript", children: "per $1,000" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u16("section", { className: "calculator__results calculator__results--tax-impact", children: /* @__PURE__ */ u16("dl", { className: "calculator__data-list", children: /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
        /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Increase in Dollars" }),
        /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: [
          calculator.calculatedValues.estimatedTaxImpactYearly,
          " ",
          /* @__PURE__ */ u16("span", { class: "calculator__detail calculator__detail--subscript", children: "per year" })
        ] }),
        /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: [
          calculator.calculatedValues.estimatedTaxImpactQuarterly,
          " per quarter"
        ] }),
        /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: [
          calculator.calculatedValues.estimatedTaxImpactMonthly,
          " per month"
        ] }),
        /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: [
          calculator.calculatedValues.estimatedTaxImpactDaily,
          " per day"
        ] })
      ] }) }) }),
      /* @__PURE__ */ u16("section", { className: "calculator__results calculator__results--tax-bill", children: [
        /* @__PURE__ */ u16("h2", { className: "calculator__heading", children: "Your Total Estimated Tax Bill" }),
        /* @__PURE__ */ u16("dl", { className: "calculator__data-list", children: [
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Current Bill" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: [
              calculator.calculatedValues.currentTaxBillYearly,
              " ",
              /* @__PURE__ */ u16("span", { class: "calculator__detail calculator__detail--subscript", children: "per year" })
            ] }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: [
              calculator.calculatedValues.currentTaxBillQuarterly,
              " per quarter"
            ] })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Proposed Bill" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: [
              calculator.calculatedValues.newTaxBillYearly,
              " ",
              /* @__PURE__ */ u16("span", { class: "calculator__detail calculator__detail--subscript", children: "per year" })
            ] }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: [
              calculator.calculatedValues.newTaxBillQuarterly,
              " per quarter"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u16("footer", { className: "calculator__footer", children: /* @__PURE__ */ u16("p", { className: "calculator__disclaimer", children: [
        "Methodology derived from the",
        " ",
        /* @__PURE__ */ u16(
          "a",
          {
            href: "https://dlsgateway.dor.state.ma.us/reports/rdPage.aspx?rdReport=Analysis.TaxImpactCalc",
            className: "calculator__link",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Mass. DOR's Division of Local Services Tax Impact Calculator"
          }
        ),
        " ",
        "for the Town of Brookline (FY2026). Property assessments pulled from public record via the",
        " ",
        /* @__PURE__ */ u16(
          "a",
          {
            href: "https://brooklinema.patriotproperties.com/default.asp",
            className: "calculator__link",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Brookline, MA Property Database"
          }
        ),
        ". For demonstration purposes only. Actual tax impact may vary based on final override amount, assessed property values, and other adjustments to the tax levy. This calculator is not approved nor endorsed by the Massachusetts Department of Revenue, Patriot Properties, nor any other official entity. Source code available via",
        " ",
        /* @__PURE__ */ u16(
          "a",
          {
            href: "https://github.com/RoboCafaz/stoneham-override-calculator",
            className: "calculator__link",
            target: "_blank",
            children: "GitHub"
          }
        ),
        "."
      ] }) })
    ] });
  };

  // src/index.tsx
  var renderCalculator = (targetElementId) => {
    G(/* @__PURE__ */ u16(Calculator, {}), document.getElementById(targetElementId));
  };
  window.stonehamOverrideCalculator = {
    renderCalculator
  };
  return __toCommonJS(index_exports);
})();
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=stoneham-override-calculator.js.map
