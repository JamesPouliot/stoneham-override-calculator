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
    var i9, r11, o11, e8 = {};
    for (o11 in u17) "key" == o11 ? i9 = u17[o11] : "ref" == o11 ? r11 = u17[o11] : e8[o11] = u17[o11];
    if (arguments.length > 2 && (e8.children = arguments.length > 3 ? n.call(arguments, 2) : t9), "function" == typeof l8 && null != l8.defaultProps) for (o11 in l8.defaultProps) void 0 === e8[o11] && (e8[o11] = l8.defaultProps[o11]);
    return m(l8, e8, i9, r11, null);
  }
  function m(n9, t9, i9, r11, o11) {
    var e8 = { type: n9, props: t9, key: i9, ref: r11, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o11 ? ++u : o11, __i: -1, __u: 0 };
    return null == o11 && null != l.vnode && l.vnode(e8), e8;
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
    if (n9.__P && n9.__d) {
      var u17 = n9.__v, t9 = u17.__e, i9 = [], r11 = [], o11 = w({}, u17);
      o11.__v = u17.__v + 1, l.vnode && l.vnode(o11), z(n9.__P, o11, u17, n9.__n, n9.__P.namespaceURI, 32 & u17.__u ? [t9] : null, i9, null == t9 ? S(u17) : t9, !!(32 & u17.__u), r11), o11.__v = u17.__v, o11.__.__k[o11.__i] = o11, V(i9, o11, r11), u17.__e = u17.__ = null, o11.__e != t9 && M(o11);
    }
  }
  function M(n9) {
    if (null != (n9 = n9.__) && null != n9.__c) return n9.__e = n9.__c.base = null, n9.__k.some(function(l8) {
      if (null != l8 && null != l8.__e) return n9.__e = n9.__c.base = l8.__e;
    }), M(n9);
  }
  function $(n9) {
    (!n9.__d && (n9.__d = true) && i.push(n9) && !I.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(I);
  }
  function I() {
    for (var n9, l8 = 1; i.length; ) i.length > l8 && i.sort(e), n9 = i.shift(), l8 = i.length, C(n9);
    I.__r = 0;
  }
  function P(n9, l8, u17, t9, i9, r11, o11, e8, f14, c13, s12) {
    var a15, h8, y8, d6, w8, g6, _7, m8 = t9 && t9.__k || v, b7 = l8.length;
    for (f14 = A(u17, l8, m8, f14, b7), a15 = 0; a15 < b7; a15++) null != (y8 = u17.__k[a15]) && (h8 = -1 != y8.__i && m8[y8.__i] || p, y8.__i = a15, g6 = z(n9, y8, h8, i9, r11, o11, e8, f14, c13, s12), d6 = y8.__e, y8.ref && h8.ref != y8.ref && (h8.ref && D(h8.ref, null, y8), s12.push(y8.ref, y8.__c || d6, y8)), null == w8 && null != d6 && (w8 = d6), (_7 = !!(4 & y8.__u)) || h8.__k === y8.__k ? f14 = H(y8, f14, n9, _7) : "function" == typeof y8.type && void 0 !== g6 ? f14 = g6 : d6 && (f14 = d6.nextSibling), y8.__u &= -7);
    return u17.__e = w8, f14;
  }
  function A(n9, l8, u17, t9, i9) {
    var r11, o11, e8, f14, c13, s12 = u17.length, a15 = s12, h8 = 0;
    for (n9.__k = new Array(i9), r11 = 0; r11 < i9; r11++) null != (o11 = l8[r11]) && "boolean" != typeof o11 && "function" != typeof o11 ? ("string" == typeof o11 || "number" == typeof o11 || "bigint" == typeof o11 || o11.constructor == String ? o11 = n9.__k[r11] = m(null, o11, null, null, null) : d(o11) ? o11 = n9.__k[r11] = m(k, { children: o11 }, null, null, null) : void 0 === o11.constructor && o11.__b > 0 ? o11 = n9.__k[r11] = m(o11.type, o11.props, o11.key, o11.ref ? o11.ref : null, o11.__v) : n9.__k[r11] = o11, f14 = r11 + h8, o11.__ = n9, o11.__b = n9.__b + 1, e8 = null, -1 != (c13 = o11.__i = T(o11, u17, f14, a15)) && (a15--, (e8 = u17[c13]) && (e8.__u |= 2)), null == e8 || null == e8.__v ? (-1 == c13 && (i9 > s12 ? h8-- : i9 < s12 && h8++), "function" != typeof o11.type && (o11.__u |= 4)) : c13 != f14 && (c13 == f14 - 1 ? h8-- : c13 == f14 + 1 ? h8++ : (c13 > f14 ? h8-- : h8++, o11.__u |= 4))) : n9.__k[r11] = null;
    if (a15) for (r11 = 0; r11 < s12; r11++) null != (e8 = u17[r11]) && 0 == (2 & e8.__u) && (e8.__e == t9 && (t9 = S(e8)), E(e8, e8));
    return t9;
  }
  function H(n9, l8, u17, t9) {
    var i9, r11;
    if ("function" == typeof n9.type) {
      for (i9 = n9.__k, r11 = 0; i9 && r11 < i9.length; r11++) i9[r11] && (i9[r11].__ = n9, l8 = H(i9[r11], l8, u17, t9));
      return l8;
    }
    n9.__e != l8 && (t9 && (l8 && n9.type && !l8.parentNode && (l8 = S(n9)), u17.insertBefore(n9.__e, l8 || null)), l8 = n9.__e);
    do {
      l8 = l8 && l8.nextSibling;
    } while (null != l8 && 8 == l8.nodeType);
    return l8;
  }
  function L(n9, l8) {
    return l8 = l8 || [], null == n9 || "boolean" == typeof n9 || (d(n9) ? n9.some(function(n10) {
      L(n10, l8);
    }) : l8.push(n9)), l8;
  }
  function T(n9, l8, u17, t9) {
    var i9, r11, o11, e8 = n9.key, f14 = n9.type, c13 = l8[u17], s12 = null != c13 && 0 == (2 & c13.__u);
    if (null === c13 && null == e8 || s12 && e8 == c13.key && f14 == c13.type) return u17;
    if (t9 > (s12 ? 1 : 0)) {
      for (i9 = u17 - 1, r11 = u17 + 1; i9 >= 0 || r11 < l8.length; ) if (null != (c13 = l8[o11 = i9 >= 0 ? i9-- : r11++]) && 0 == (2 & c13.__u) && e8 == c13.key && f14 == c13.type) return o11;
    }
    return -1;
  }
  function j(n9, l8, u17) {
    "-" == l8[0] ? n9.setProperty(l8, null == u17 ? "" : u17) : n9[l8] = null == u17 ? "" : "number" != typeof u17 || y.test(l8) ? u17 : u17 + "px";
  }
  function F(n9, l8, u17, t9, i9) {
    var r11, o11;
    n: if ("style" == l8) if ("string" == typeof u17) n9.style.cssText = u17;
    else {
      if ("string" == typeof t9 && (n9.style.cssText = t9 = ""), t9) for (l8 in t9) u17 && l8 in u17 || j(n9.style, l8, "");
      if (u17) for (l8 in u17) t9 && u17[l8] == t9[l8] || j(n9.style, l8, u17[l8]);
    }
    else if ("o" == l8[0] && "n" == l8[1]) r11 = l8 != (l8 = l8.replace(f, "$1")), o11 = l8.toLowerCase(), l8 = o11 in n9 || "onFocusOut" == l8 || "onFocusIn" == l8 ? o11.slice(2) : l8.slice(2), n9.l || (n9.l = {}), n9.l[l8 + r11] = u17, u17 ? t9 ? u17.u = t9.u : (u17.u = c, n9.addEventListener(l8, r11 ? a : s, r11)) : n9.removeEventListener(l8, r11 ? a : s, r11);
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
  function O(n9) {
    return function(u17) {
      if (this.l) {
        var t9 = this.l[u17.type + n9];
        if (null == u17.t) u17.t = c++;
        else if (u17.t < t9.u) return;
        return t9(l.event ? l.event(u17) : u17);
      }
    };
  }
  function z(n9, u17, t9, i9, r11, o11, e8, f14, c13, s12) {
    var a15, h8, p10, y8, _7, m8, b7, S8, C10, M6, $5, I9, A7, H6, L6, T8 = u17.type;
    if (void 0 !== u17.constructor) return null;
    128 & t9.__u && (c13 = !!(32 & t9.__u), o11 = [f14 = u17.__e = t9.__e]), (a15 = l.__b) && a15(u17);
    n: if ("function" == typeof T8) try {
      if (S8 = u17.props, C10 = "prototype" in T8 && T8.prototype.render, M6 = (a15 = T8.contextType) && i9[a15.__c], $5 = a15 ? M6 ? M6.props.value : a15.__ : i9, t9.__c ? b7 = (h8 = u17.__c = t9.__c).__ = h8.__E : (C10 ? u17.__c = h8 = new T8(S8, $5) : (u17.__c = h8 = new x(S8, $5), h8.constructor = T8, h8.render = G), M6 && M6.sub(h8), h8.state || (h8.state = {}), h8.__n = i9, p10 = h8.__d = true, h8.__h = [], h8._sb = []), C10 && null == h8.__s && (h8.__s = h8.state), C10 && null != T8.getDerivedStateFromProps && (h8.__s == h8.state && (h8.__s = w({}, h8.__s)), w(h8.__s, T8.getDerivedStateFromProps(S8, h8.__s))), y8 = h8.props, _7 = h8.state, h8.__v = u17, p10) C10 && null == T8.getDerivedStateFromProps && null != h8.componentWillMount && h8.componentWillMount(), C10 && null != h8.componentDidMount && h8.__h.push(h8.componentDidMount);
      else {
        if (C10 && null == T8.getDerivedStateFromProps && S8 !== y8 && null != h8.componentWillReceiveProps && h8.componentWillReceiveProps(S8, $5), u17.__v == t9.__v || !h8.__e && null != h8.shouldComponentUpdate && false === h8.shouldComponentUpdate(S8, h8.__s, $5)) {
          u17.__v != t9.__v && (h8.props = S8, h8.state = h8.__s, h8.__d = false), u17.__e = t9.__e, u17.__k = t9.__k, u17.__k.some(function(n10) {
            n10 && (n10.__ = u17);
          }), v.push.apply(h8.__h, h8._sb), h8._sb = [], h8.__h.length && e8.push(h8);
          break n;
        }
        null != h8.componentWillUpdate && h8.componentWillUpdate(S8, h8.__s, $5), C10 && null != h8.componentDidUpdate && h8.__h.push(function() {
          h8.componentDidUpdate(y8, _7, m8);
        });
      }
      if (h8.context = $5, h8.props = S8, h8.__P = n9, h8.__e = false, I9 = l.__r, A7 = 0, C10) h8.state = h8.__s, h8.__d = false, I9 && I9(u17), a15 = h8.render(h8.props, h8.state, h8.context), v.push.apply(h8.__h, h8._sb), h8._sb = [];
      else do {
        h8.__d = false, I9 && I9(u17), a15 = h8.render(h8.props, h8.state, h8.context), h8.state = h8.__s;
      } while (h8.__d && ++A7 < 25);
      h8.state = h8.__s, null != h8.getChildContext && (i9 = w(w({}, i9), h8.getChildContext())), C10 && !p10 && null != h8.getSnapshotBeforeUpdate && (m8 = h8.getSnapshotBeforeUpdate(y8, _7)), H6 = null != a15 && a15.type === k && null == a15.key ? q(a15.props.children) : a15, f14 = P(n9, d(H6) ? H6 : [H6], u17, t9, i9, r11, o11, e8, f14, c13, s12), h8.base = u17.__e, u17.__u &= -161, h8.__h.length && e8.push(h8), b7 && (h8.__E = h8.__ = null);
    } catch (n10) {
      if (u17.__v = null, c13 || null != o11) if (n10.then) {
        for (u17.__u |= c13 ? 160 : 128; f14 && 8 == f14.nodeType && f14.nextSibling; ) f14 = f14.nextSibling;
        o11[o11.indexOf(f14)] = null, u17.__e = f14;
      } else {
        for (L6 = o11.length; L6--; ) g(o11[L6]);
        N(u17);
      }
      else u17.__e = t9.__e, u17.__k = t9.__k, n10.then || N(u17);
      l.__e(n10, u17, t9);
    }
    else null == o11 && u17.__v == t9.__v ? (u17.__k = t9.__k, u17.__e = t9.__e) : f14 = u17.__e = B(t9.__e, u17, t9, i9, r11, o11, e8, c13, s12);
    return (a15 = l.diffed) && a15(u17), 128 & u17.__u ? void 0 : f14;
  }
  function N(n9) {
    n9 && (n9.__c && (n9.__c.__e = true), n9.__k && n9.__k.some(N));
  }
  function V(n9, u17, t9) {
    for (var i9 = 0; i9 < t9.length; i9++) D(t9[i9], t9[++i9], t9[++i9]);
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
  function q(n9) {
    return "object" != typeof n9 || null == n9 || n9.__b > 0 ? n9 : d(n9) ? n9.map(q) : w({}, n9);
  }
  function B(u17, t9, i9, r11, o11, e8, f14, c13, s12) {
    var a15, h8, v6, y8, w8, _7, m8, b7 = i9.props || p, k7 = t9.props, x6 = t9.type;
    if ("svg" == x6 ? o11 = "http://www.w3.org/2000/svg" : "math" == x6 ? o11 = "http://www.w3.org/1998/Math/MathML" : o11 || (o11 = "http://www.w3.org/1999/xhtml"), null != e8) {
      for (a15 = 0; a15 < e8.length; a15++) if ((w8 = e8[a15]) && "setAttribute" in w8 == !!x6 && (x6 ? w8.localName == x6 : 3 == w8.nodeType)) {
        u17 = w8, e8[a15] = null;
        break;
      }
    }
    if (null == u17) {
      if (null == x6) return document.createTextNode(k7);
      u17 = document.createElementNS(o11, x6, k7.is && k7), c13 && (l.__m && l.__m(t9, e8), c13 = false), e8 = null;
    }
    if (null == x6) b7 === k7 || c13 && u17.data == k7 || (u17.data = k7);
    else {
      if (e8 = e8 && n.call(u17.childNodes), !c13 && null != e8) for (b7 = {}, a15 = 0; a15 < u17.attributes.length; a15++) b7[(w8 = u17.attributes[a15]).name] = w8.value;
      for (a15 in b7) w8 = b7[a15], "dangerouslySetInnerHTML" == a15 ? v6 = w8 : "children" == a15 || a15 in k7 || "value" == a15 && "defaultValue" in k7 || "checked" == a15 && "defaultChecked" in k7 || F(u17, a15, null, w8, o11);
      for (a15 in k7) w8 = k7[a15], "children" == a15 ? y8 = w8 : "dangerouslySetInnerHTML" == a15 ? h8 = w8 : "value" == a15 ? _7 = w8 : "checked" == a15 ? m8 = w8 : c13 && "function" != typeof w8 || b7[a15] === w8 || F(u17, a15, w8, b7[a15], o11);
      if (h8) c13 || v6 && (h8.__html == v6.__html || h8.__html == u17.innerHTML) || (u17.innerHTML = h8.__html), t9.__k = [];
      else if (v6 && (u17.innerHTML = ""), P("template" == t9.type ? u17.content : u17, d(y8) ? y8 : [y8], t9, i9, r11, "foreignObject" == x6 ? "http://www.w3.org/1999/xhtml" : o11, e8, f14, e8 ? e8[0] : i9.__k && S(i9, 0), c13, s12), null != e8) for (a15 = e8.length; a15--; ) g(e8[a15]);
      c13 || (a15 = "value", "progress" == x6 && null == _7 ? u17.removeAttribute("value") : null != _7 && (_7 !== u17[a15] || "progress" == x6 && !_7 || "option" == x6 && _7 != b7[a15]) && F(u17, a15, _7, b7[a15], o11), a15 = "checked", null != m8 && m8 != u17[a15] && F(u17, a15, m8, b7[a15], o11));
    }
    return u17;
  }
  function D(n9, u17, t9) {
    try {
      if ("function" == typeof n9) {
        var i9 = "function" == typeof n9.__u;
        i9 && n9.__u(), i9 && null == u17 || (n9.__u = n9(u17));
      } else n9.current = u17;
    } catch (n10) {
      l.__e(n10, t9);
    }
  }
  function E(n9, u17, t9) {
    var i9, r11;
    if (l.unmount && l.unmount(n9), (i9 = n9.ref) && (i9.current && i9.current != n9.__e || D(i9, null, u17)), null != (i9 = n9.__c)) {
      if (i9.componentWillUnmount) try {
        i9.componentWillUnmount();
      } catch (n10) {
        l.__e(n10, u17);
      }
      i9.base = i9.__P = null;
    }
    if (i9 = n9.__k) for (r11 = 0; r11 < i9.length; r11++) i9[r11] && E(i9[r11], u17, t9 || "function" != typeof n9.type);
    t9 || g(n9.__e), n9.__c = n9.__ = n9.__e = void 0;
  }
  function G(n9, l8, u17) {
    return this.constructor(n9, u17);
  }
  function J(u17, t9, i9) {
    var r11, o11, e8, f14;
    t9 == document && (t9 = document.documentElement), l.__ && l.__(u17, t9), o11 = (r11 = "function" == typeof i9) ? null : i9 && i9.__k || t9.__k, e8 = [], f14 = [], z(t9, u17 = (!r11 && i9 || t9).__k = _(k, null, [u17]), o11 || p, p, t9.namespaceURI, !r11 && i9 ? [i9] : o11 ? null : t9.firstChild ? n.call(t9.childNodes) : null, e8, !r11 && i9 ? i9 : o11 ? o11.__e : t9.firstChild, r11, f14), V(e8, u17, f14);
  }
  function K(n9, l8) {
    J(n9, l8, K);
  }
  function Q(l8, u17, t9) {
    var i9, r11, o11, e8, f14 = w({}, l8.props);
    for (o11 in l8.type && l8.type.defaultProps && (e8 = l8.type.defaultProps), u17) "key" == o11 ? i9 = u17[o11] : "ref" == o11 ? r11 = u17[o11] : f14[o11] = void 0 === u17[o11] && null != e8 ? e8[o11] : u17[o11];
    return arguments.length > 2 && (f14.children = arguments.length > 3 ? n.call(arguments, 2) : t9), m(l8.type, f14, i9 || l8.key, r11 || l8.ref, null);
  }
  function R(n9) {
    function l8(n10) {
      var u17, t9;
      return this.getChildContext || (u17 = /* @__PURE__ */ new Set(), (t9 = {})[l8.__c] = this, this.getChildContext = function() {
        return t9;
      }, this.componentWillUnmount = function() {
        u17 = null;
      }, this.shouldComponentUpdate = function(n11) {
        this.props.value != n11.value && u17.forEach(function(n12) {
          n12.__e = true, $(n12);
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
  var n, l, u, t, i, r, o, e, f, c, s, a, h, p, v, y, d;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      p = {};
      v = [];
      y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      d = Array.isArray;
      n = v.slice, l = { __e: function(n9, l8, u17, t9) {
        for (var i9, r11, o11; l8 = l8.__; ) if ((i9 = l8.__c) && !i9.__) try {
          if ((r11 = i9.constructor) && null != r11.getDerivedStateFromError && (i9.setState(r11.getDerivedStateFromError(n9)), o11 = i9.__d), null != i9.componentDidCatch && (i9.componentDidCatch(n9, t9 || {}), o11 = i9.__d), o11) return i9.__E = i9;
        } catch (l9) {
          n9 = l9;
        }
        throw n9;
      } }, u = 0, t = function(n9) {
        return null != n9 && void 0 === n9.constructor;
      }, x.prototype.setState = function(n9, l8) {
        var u17;
        u17 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n9 && (n9 = n9(w({}, u17), this.props)), n9 && w(u17, n9), null != n9 && this.__v && (l8 && this._sb.push(l8), $(this));
      }, x.prototype.forceUpdate = function(n9) {
        this.__v && (this.__e = true, n9 && this.__h.push(n9), $(this));
      }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n9, l8) {
        return n9.__v.__b - l8.__v.__b;
      }, I.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;
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
          return n11.__c;
        });
        if (u18.every(function(n11) {
          return !n11.__N;
        })) return !c13 || c13.call(this, n10, t9, r11);
        var i10 = o11.__c.props !== n10;
        return u18.some(function(n11) {
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
    for (var n9; n9 = f2.shift(); ) {
      var t9 = n9.__H;
      if (n9.__P && t9) try {
        t9.__h.some(z2), t9.__h.some(B2), t9.__h = [];
      } catch (r11) {
        t9.__h = [], c2.__e(r11, n9.__v);
      }
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
        i9 && (u2 === r2 ? (i9.__h = [], r2.__h = [], i9.__.some(function(n10) {
          n10.__N && (n10.__ = n10.__N), n10.u = n10.__N = void 0;
        })) : (i9.__h.some(z2), i9.__h.some(B2), i9.__h = [], t2 = 0)), u2 = r2;
      }, c2.diffed = function(n9) {
        v2 && v2(n9);
        var t9 = n9.__c;
        t9 && t9.__H && (t9.__H.__h.length && (1 !== f2.push(t9) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t9.__H.__.some(function(n10) {
          n10.u && (n10.__H = n10.u), n10.u = void 0;
        })), u2 = r2 = null;
      }, c2.__c = function(n9, t9) {
        t9.some(function(n10) {
          try {
            n10.__h.some(z2), n10.__h = n10.__h.filter(function(n11) {
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
        r11 && r11.__H && (r11.__H.__.some(function(n10) {
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
    createContext: () => R,
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
      u17.__ = e8, u17.u = t9, R2(u17) && o11({ t: u17 });
    }, [n9, e8, t9]), y2(function() {
      return R2(u17) && o11({ t: u17 }), n9(function() {
        R2(u17) && o11({ t: u17 });
      });
    }, [n9]), e8;
  }
  function R2(n9) {
    try {
      return !((t9 = n9.__) === (e8 = n9.u()) && (0 !== t9 || 1 / t9 == 1 / e8) || t9 != t9 && e8 != e8);
    } catch (n10) {
      return true;
    }
    var t9, e8;
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
      J(null, e8.v), e8.v = null, e8.h = null;
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
    J(_(Z, { context: e8.context }, n9.__v), e8.v);
  }
  function $2(n9, e8) {
    var r11 = _(Y, { __v: n9, h: e8 });
    return r11.containerInfo = e8, r11;
  }
  function nn(n9, t9, e8) {
    return null == t9.__k && (t9.textContent = ""), J(n9, t9), "function" == typeof e8 && e8(), n9 ? n9.__c : null;
  }
  function tn(n9, t9, e8) {
    return K(n9, t9), "function" == typeof e8 && e8(), n9 ? n9.__c : null;
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
    return !!n9 && "string" == typeof n9.displayName && n9.displayName.startsWith("Memo(");
  }
  function _n(n9) {
    return mn(n9) ? Q.apply(null, arguments) : n9;
  }
  function bn(n9) {
    return !!n9.__k && (J(null, n9), true);
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
        return null == n9 ? null : L(L(n9).map(t9));
      };
      O2 = { map: L2, forEach: L2, count: function(n9) {
        return n9 ? L(n9).length : 0;
      }, only: function(n9) {
        var t9 = L(n9);
        if (1 !== t9.length) throw "Children.only";
        return t9[0];
      }, toArray: L };
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
        var t9 = L(n9.children);
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
          "select" == e8 && u17.multiple && Array.isArray(u17.value) && (u17.value = L(t9.children).forEach(function(n11) {
            n11.props.selected = -1 != u17.value.indexOf(n11.props.value);
          })), "select" == e8 && null != u17.defaultValue && (u17.value = L(t9.children).forEach(function(n11) {
            n11.props.selected = u17.multiple ? -1 != u17.defaultValue.indexOf(n11.props.value) : u17.defaultValue == n11.props.value;
          })), t9.class && !t9.className ? (u17.class = t9.class, Object.defineProperty(u17, "className", cn)) : t9.className && (u17.class = u17.className = t9.className), n10.props = u17;
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
      xn = { useState: d2, useId: g2, useReducer: h2, useEffect: y2, useLayoutEffect: _2, useInsertionEffect: I2, useTransition: k3, useDeferredValue: w3, useSyncExternalStore: C3, startTransition: x3, useRef: A2, useImperativeHandle: F2, useMemo: T2, useCallback: q2, useContext: x2, useDebugValue: P2, version: "18.3.1", Children: O2, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $2, createElement: _, createContext: R, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k, isValidElement: mn, isElement: Rn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: x, PureComponent: N2, memo: M2, forwardRef: D3, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P3, SuspenseList: B3, lazy: z3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
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
    if ((0, $f4e2df6bd15f8569$export$98658e8c59125e6a)() && event.target instanceof Element && event.target.shadowRoot) {
      var _event_composedPath_, _event_nativeEvent_composedPath_;
      if ("composedPath" in event) return (_event_composedPath_ = event.composedPath()[0]) !== null && _event_composedPath_ !== void 0 ? _event_composedPath_ : null;
      else if ("composedPath" in event.nativeEvent) return (_event_nativeEvent_composedPath_ = event.nativeEvent.composedPath()[0]) !== null && _event_nativeEvent_composedPath_ !== void 0 ? _event_nativeEvent_composedPath_ : null;
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
      let eventTarget = (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8);
      if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
        stateRef.current.isFocused = true;
        let target = eventTarget;
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
            let relatedTargetEl = target === (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)() ? null : (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)();
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
    if ((0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8) === window || (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8) === document || (0, $8a9cb279dc87e130$export$fda7da73ab5d4c48) || !e8.isTrusted) return;
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
    let document1 = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8 ? (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8) : void 0);
    let eventTarget = e8 ? (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8) : void 0;
    const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(eventTarget).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(eventTarget).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(eventTarget).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(eventTarget).KeyboardEvent : KeyboardEvent;
    let activeElement2 = (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(document1);
    isTextInput = isTextInput || activeElement2 instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(activeElement2.type) || activeElement2 instanceof IHTMLTextAreaElement || activeElement2 instanceof IHTMLElement && activeElement2.isContentEditable;
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
      if ((0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8) === e8.currentTarget) {
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
      let eventTarget = (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8);
      const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(eventTarget);
      const activeElement2 = ownerDocument ? (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) : (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)();
      if (eventTarget === e8.currentTarget && eventTarget === activeElement2) {
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
      if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8))) return;
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
      if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8))) return;
      let eventTarget = (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8);
      const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(eventTarget);
      const activeElement2 = (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
      if (!state.current.isFocusWithin && activeElement2 === eventTarget) {
        if (onFocusWithin) onFocusWithin(e8);
        if (onFocusWithinChange) onFocusWithinChange(true);
        state.current.isFocusWithin = true;
        onSyntheticFocus(e8);
        let currentTarget = e8.currentTarget;
        addGlobalListener(ownerDocument, "focus", (e9) => {
          let eventTarget2 = (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e9);
          if (state.current.isFocusWithin && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(currentTarget, eventTarget2)) {
            let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
              relatedTarget: eventTarget2
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
        if (isDisabled || pointerType === "touch" || state.isHovered || !(0, $d4ee10de306f2510$export$4282f70798064fe0)(event.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(event))) return;
        state.isHovered = true;
        let target = event.currentTarget;
        state.target = target;
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)((0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(event)), "pointerover", (e8) => {
          if (state.isHovered && state.target && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8))) triggerHoverEnd2(e8, e8.pointerType);
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
          if (!isDisabled && (0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8))) triggerHoverEnd2(e8, e8.pointerType);
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
          if (!isDisabled && (0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8))) triggerHoverEnd2(e8, "mouse");
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
  var e4 = R(void 0);
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
      let d6 = f14.props, p10 = d6 == null ? void 0 : d6.className, c13 = typeof p10 == "function" ? (...R3) => t4(p10(...R3), o11.className) : t4(p10, o11.className), T8 = c13 ? { className: c13 } : {}, g6 = P5(f14.props, m3(h3(o11, ["ref"])));
      for (let R3 in u17) R3 in g6 && delete u17[R3];
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
  var f4 = R(null);
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
  var e5 = R(void 0);
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
  var a6 = R(null);
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
  var L4 = R(null);
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
      this.scrollState = null;
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
      this.now = () => {
        var _a2;
        var _a, _b, _c;
        return (_a2 = (_c = (_b = (_a = this.targetWindow) == null ? void 0 : _a.performance) == null ? void 0 : _b.now) == null ? void 0 : _c.call(_b)) != null ? _a2 : Date.now();
      };
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
        if (this.rafId != null && this.targetWindow) {
          this.targetWindow.cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
        this.scrollState = null;
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
              if (this.scrollState) {
                this.scheduleScrollReconcile();
              }
              this.maybeNotify();
            })
          );
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
        }
      };
      this.rafId = null;
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
      this.shouldMeasureDuringScroll = (index3) => {
        var _a2;
        var _a;
        if (!this.scrollState || this.scrollState.behavior !== "smooth") {
          return true;
        }
        const scrollIndex = (_a2 = this.scrollState.index) != null ? _a2 : (_a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : _a.index;
        if (scrollIndex !== void 0 && this.range) {
          const bufferSize = Math.max(
            this.options.overscan,
            Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
          );
          const minIndex = Math.max(0, scrollIndex - bufferSize);
          const maxIndex = Math.min(
            this.options.count - 1,
            scrollIndex + bufferSize
          );
          return index3 >= minIndex && index3 <= maxIndex;
        }
        return true;
      };
      this._measureElement = (node, entry) => {
        if (!node.isConnected) {
          this.observer.unobserve(node);
          return;
        }
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
        if (this.shouldMeasureDuringScroll(index3)) {
          this.resizeItem(index3, this.options.measureElement(node, entry, this));
        }
      };
      this.resizeItem = (index3, size4) => {
        var _a2;
        var _a;
        const item = this.measurementsCache[index3];
        if (!item) {
          return;
        }
        const itemSize = (_a2 = this.itemSizeCache.get(item.key)) != null ? _a2 : item.size;
        const delta = size4 - itemSize;
        if (delta !== 0) {
          if (((_a = this.scrollState) == null ? void 0 : _a.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments)) {
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
        const size4 = this.getSize();
        const scrollOffset = this.getScrollOffset();
        const item = this.measurementsCache[index3];
        if (!item) return;
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
      this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
        const offset4 = this.getOffsetForAlignment(toOffset, align);
        const now = this.now();
        this.scrollState = {
          index: null,
          align,
          behavior,
          startedAt: now,
          lastTargetOffset: offset4,
          stableFrames: 0
        };
        this._scrollToOffset(offset4, { adjustments: void 0, behavior });
        this.scheduleScrollReconcile();
      };
      this.scrollToIndex = (index3, {
        align: initialAlign = "auto",
        behavior = "auto"
      } = {}) => {
        index3 = Math.max(0, Math.min(index3, this.options.count - 1));
        const offsetInfo = this.getOffsetForIndex(index3, initialAlign);
        if (!offsetInfo) {
          return;
        }
        const [offset4, align] = offsetInfo;
        const now = this.now();
        this.scrollState = {
          index: index3,
          align,
          behavior,
          startedAt: now,
          lastTargetOffset: offset4,
          stableFrames: 0
        };
        this._scrollToOffset(offset4, { adjustments: void 0, behavior });
        this.scheduleScrollReconcile();
      };
      this.scrollBy = (delta, { behavior = "auto" } = {}) => {
        const offset4 = this.getScrollOffset() + delta;
        const now = this.now();
        this.scrollState = {
          index: null,
          align: "start",
          behavior,
          startedAt: now,
          lastTargetOffset: offset4,
          stableFrames: 0
        };
        this._scrollToOffset(offset4, { adjustments: void 0, behavior });
        this.scheduleScrollReconcile();
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
    scheduleScrollReconcile() {
      if (!this.targetWindow) {
        this.scrollState = null;
        return;
      }
      if (this.rafId != null) return;
      this.rafId = this.targetWindow.requestAnimationFrame(() => {
        this.rafId = null;
        this.reconcileScroll();
      });
    }
    reconcileScroll() {
      if (!this.scrollState) return;
      const el = this.scrollElement;
      if (!el) return;
      const MAX_RECONCILE_MS = 5e3;
      if (this.now() - this.scrollState.startedAt > MAX_RECONCILE_MS) {
        this.scrollState = null;
        return;
      }
      const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0;
      const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
      const STABLE_FRAMES = 1;
      const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
      if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
        this.scrollState.stableFrames++;
        if (this.scrollState.stableFrames >= STABLE_FRAMES) {
          this.scrollState = null;
          return;
        }
      } else {
        this.scrollState.stableFrames = 0;
        if (targetChanged) {
          this.scrollState.lastTargetOffset = targetOffset;
          this.scrollState.behavior = "auto";
          this._scrollToOffset(targetOffset, {
            adjustments: void 0,
            behavior: "auto"
          });
        }
      }
      this.scheduleScrollReconcile();
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
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle2(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
  }
  function isTableElement(element) {
    return /^(table|td|th)$/.test(getNodeName(element));
  }
  function isTopLayer(element) {
    try {
      if (element.matches(":popover-open")) {
        return true;
      }
    } catch (_e) {
    }
    try {
      return element.matches(":modal");
    } catch (_e) {
      return false;
    }
  }
  var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
  var containRe = /paint|layout|strict|content/;
  var isNotNone = (value) => !!value && value !== "none";
  var isWebKitValue;
  function isContainingBlock(elementOrCss) {
    const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
    return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
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
    if (isWebKitValue == null) {
      isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
    }
    return isWebKitValue;
  }
  function isLastTraversableNode(node) {
    return /^(html|body|#document)$/.test(getNodeName(node));
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
    } else {
      return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
    }
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
  function getSideAxis(placement) {
    const firstChar = placement[0];
    return firstChar === "t" || firstChar === "b" ? "y" : "x";
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
    return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
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
    const side = getSide(placement);
    return oppositeSideMap[side] + placement.slice(side.length);
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
  var MAX_RESET_COUNT = 50;
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const platformWithDetectOverflow = platform2.detectOverflow ? platform2 : __spreadProps(__spreadValues({}, platform2), {
      detectOverflow
    });
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
    let resetCount = 0;
    const middlewareData = {};
    for (let i9 = 0; i9 < middleware.length; i9++) {
      const currentMiddleware = middleware[i9];
      if (!currentMiddleware) {
        continue;
      }
      const {
        name,
        fn: fn2
      } = currentMiddleware;
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
        platform: platformWithDetectOverflow,
        elements: {
          reference,
          floating
        }
      });
      x6 = nextX != null ? nextX : x6;
      y8 = nextY != null ? nextY : y8;
      middlewareData[name] = __spreadValues(__spreadValues({}, middlewareData[name]), data);
      if (reset && resetCount < MAX_RESET_COUNT) {
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
      if (isOffsetParentAnElement) {
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
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
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
    const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
    let top = firstRect.top;
    let right = firstRect.right;
    let bottom = firstRect.bottom;
    let left = firstRect.left;
    for (let i9 = 1; i9 < clippingAncestors.length; i9++) {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i9], strategy);
      top = max(rect.top, top);
      right = min(rect.right, right);
      bottom = min(rect.bottom, bottom);
      left = max(rect.left, left);
    }
    return {
      width: right - left,
      height: bottom - top,
      x: left,
      y: top
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
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
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
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
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
      if (floating) {
        resizeObserver.observe(floating);
      }
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
  var offset3 = (options, deps) => {
    const result = offset2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var shift3 = (options, deps) => {
    const result = shift2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var flip3 = (options, deps) => {
    const result = flip2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var size3 = (options, deps) => {
    const result = size2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };

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
  var FloatingNodeContext = /* @__PURE__ */ R(null);
  var FloatingTreeContext = /* @__PURE__ */ R(null);
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
  var y6 = R({ styles: void 0, setReference: () => {
  }, setFloating: () => {
  }, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
  y6.displayName = "FloatingContext";
  var $4 = R(null);
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
  var n7 = R(null);
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
  var e7 = R(false);
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
  var c11 = R(null);
  function D7(e8, o11) {
    let _a = e8, { target: l8 } = _a, r11 = __objRest(_a, ["target"]), t9 = { ref: y3(o11) }, n9 = K3();
    return xn.createElement(c11.Provider, { value: l8 }, n9({ ourProps: t9, theirProps: r11, defaultTag: I7, name: "Popover.Group" }));
  }
  var m7 = R(null);
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
  var u15 = R(null);
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
  var de = R(null);
  de.displayName = "ComboboxDataContext";
  function te2(T8) {
    let O5 = x2(de);
    if (O5 === null) {
      let e8 = new Error("<".concat(T8, " /> is missing a parent <Combobox /> component."));
      throw Error.captureStackTrace && Error.captureStackTrace(e8, te2), e8;
    }
    return O5;
  }
  var Le = R(null);
  function Eo(T8) {
    let O5 = p9("VirtualProvider"), e8 = te2("VirtualProvider"), { options: o11 } = e8.virtual, E7 = S3(O5, (a15) => a15.optionsElement), [R3, y8] = T2(() => {
      let a15 = E7;
      if (!a15) return [0, 0];
      let u17 = window.getComputedStyle(a15);
      return [parseFloat(u17.paddingBlockStart || u17.paddingTop), parseFloat(u17.paddingBlockEnd || u17.paddingBottom)];
    }, [E7]), b7 = useVirtualizer({ enabled: o11.length !== 0, scrollPaddingStart: R3, scrollPaddingEnd: y8, count: o11.length, estimateSize() {
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
    let e8 = g2(), o11 = a3(), _a = T8, { value: E7, defaultValue: R3, onChange: y8, form: b7, name: h8, by: p10, invalid: f14 = false, disabled: n9 = o11 || false, onClose: m8, __demoMode: a15 = false, multiple: u17 = false, immediate: A7 = false, virtual: d6 = null, nullable: X3 } = _a, G5 = __objRest(_a, ["value", "defaultValue", "onChange", "form", "name", "by", "invalid", "disabled", "onClose", "__demoMode", "multiple", "immediate", "virtual", "nullable"]), C10 = l4(R3), [x6 = u17 ? [] : void 0, v6] = b4(E7, y8, C10), c13 = b6({ id: e8, virtual: d6, __demoMode: a15 }), z4 = A2({ static: false, hold: false }), D9 = u7(p10), K4 = o5((i9) => d6 ? p10 === null ? d6.options.indexOf(i9) : d6.options.findIndex((M6) => D9(M6, i9)) : c13.state.options.findIndex((M6) => D9(M6.dataRef.current.value, i9))), W3 = q2((i9) => u3(l8.mode, { [k6.Multi]: () => x6.some((M6) => D9(M6, i9)), [k6.Single]: () => D9(x6, i9) }), [x6]), S8 = S3(c13, (i9) => i9.virtual), j10 = o5(() => m8 == null ? void 0 : m8()), l8 = T2(() => ({ __demoMode: a15, immediate: A7, optionsPropsRef: z4, value: x6, defaultValue: C10, disabled: n9, invalid: f14, mode: u17 ? k6.Multi : k6.Single, virtual: d6 ? S8 : null, onChange: v6, isSelected: W3, calculateIndex: K4, compare: D9, onClose: j10 }), [a15, A7, z4, x6, C10, n9, f14, u17, d6, S8, v6, W3, K4, D9, j10]);
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
    let e8 = p9("Combobox.Input"), o11 = te2("Combobox.Input"), E7 = g2(), R3 = u4(), _a = T8, { id: y8 = R3 || "headlessui-combobox-input-".concat(E7), onChange: b7, displayValue: h8, disabled: p10 = o11.disabled || false, autoFocus: f14 = false, type: n9 = "text" } = _a, m8 = __objRest(_a, ["id", "onChange", "displayValue", "disabled", "autoFocus", "type"]), a15 = A2(null), u17 = y3(a15, O5, Fe(), e8.actions.setInputElement), [A7, d6] = S3(e8, (t9) => [t9.comboboxState, t9.isTyping]), X3 = p3(), G5 = o5(() => {
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
    let e8 = p9("Combobox.Button"), o11 = te2("Combobox.Button"), [E7, R3] = d2(null), y8 = y3(O5, R3, e8.actions.setButtonElement), b7 = g2(), _a = T8, { id: h8 = "headlessui-combobox-button-".concat(b7), disabled: p10 = o11.disabled || false, autoFocus: f14 = false } = _a, n9 = __objRest(_a, ["id", "disabled", "autoFocus"]), [m8, a15, u17] = S3(e8, (l8) => [l8.comboboxState, l8.inputElement, l8.optionsElement]), A7 = v4(a15), d6 = m8 === P6.Open;
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
    let e8 = g2(), _a = T8, { id: o11 = "headlessui-combobox-options-".concat(e8), hold: E7 = false, anchor: R3, portal: y8 = false, modal: b7 = true, transition: h8 = false } = _a, p10 = __objRest(_a, ["id", "hold", "anchor", "portal", "modal", "transition"]), f14 = p9("Combobox.Options"), n9 = te2("Combobox.Options"), m8 = ye(R3);
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
    let e8 = te2("Combobox.Option"), o11 = p9("Combobox.Option"), E7 = g2(), _a = T8, { id: R3 = "headlessui-combobox-option-".concat(E7), value: y8, disabled: b7 = (Y3 = (k7 = (l8 = e8.virtual) == null ? void 0 : l8.disabled) == null ? void 0 : k7.call(l8, y8)) != null ? Y3 : false, order: h8 = null } = _a, p10 = __objRest(_a, ["id", "value", "disabled", "order"]), [f14] = S3(o11, (s12) => [s12.inputElement]), n9 = v4(f14), m8 = S3(o11, q2((s12) => o11.selectors.isActive(s12, y8, R3), [y8, R3])), a15 = e8.isSelected(y8), u17 = A2(null), A7 = s4({ disabled: b7, value: y8, domRef: u17, order: h8 }), d6 = x2(Le), X3 = y3(O5, u17, d6 ? d6.measureElement : null), G5 = o5(() => {
      o11.actions.setIsTyping(false), o11.actions.onChange(y8);
    });
    n2(() => o11.actions.registerOption(R3, A7), [A7, R3]);
    let C10 = S3(o11, q2((s12) => o11.selectors.shouldScrollIntoView(s12, y8, R3), [y8, R3]));
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
    }), W3 = n3({ active: m8, focus: m8, selected: a15, disabled: b7 }), S8 = { id: R3, ref: X3, role: "option", tabIndex: b7 === true ? void 0 : -1, "aria-disabled": b7 === true ? true : void 0, "aria-selected": a15, disabled: void 0, onMouseDown: x6, onFocus: v6, onPointerEnter: z4, onMouseEnter: z4, onPointerMove: D9, onMouseMove: D9, onPointerLeave: K4, onMouseLeave: K4 };
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
    {
      "#": "14 Amory St (011-25-00)",
      $: 2877700,
      owner1: "Platt",
      owner2: "",
      current_taxes: 25832.71,
      "18m_override_total": 27230.26,
      "18m_override_increase": 1397.55,
      "25m_override_total": 27772.75,
      "25m_override_increase": 1940.04
    },
    {
      "#": "15 Amory St (010-05-00)",
      $: 45975200,
      owner1: "Town Of Brookline",
      owner2: "C/O Amory Playground",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "20 Amory St (011-24-00)",
      $: 5041400,
      owner1: "Lessig",
      owner2: "Neuefeind",
      current_taxes: 47989,
      "18m_override_total": 50585.2,
      "18m_override_increase": 2596.2,
      "25m_override_total": 51592.97,
      "25m_override_increase": 3603.97
    },
    {
      "#": "30 Amory St (011-23-00)",
      $: 3339700,
      owner1: "Bell",
      owner2: "",
      current_taxes: 30563.59,
      "18m_override_total": 32217.08,
      "18m_override_increase": 1653.49,
      "25m_override_total": 32858.92,
      "25m_override_increase": 2295.33
    },
    {
      "#": "36 Amory St (011-22-00)",
      $: 4100100,
      owner1: "Patterson",
      owner2: "",
      current_taxes: 38350.09,
      "18m_override_total": 40424.83,
      "18m_override_increase": 2074.74,
      "25m_override_total": 41230.18,
      "25m_override_increase": 2880.09
    },
    {
      "#": "44 Amory St (011-21-00)",
      $: 4717100,
      owner1: "Gurock",
      owner2: "",
      current_taxes: 44668.17,
      "18m_override_total": 47084.72,
      "18m_override_increase": 2416.55,
      "25m_override_total": 48022.75,
      "25m_override_increase": 3354.58
    },
    {
      "#": "50 Amory St (011-20-00)",
      $: 3673500,
      owner1: "Zarren",
      owner2: "",
      current_taxes: 33981.71,
      "18m_override_total": 35820.12,
      "18m_override_increase": 1838.41,
      "25m_override_total": 36533.74,
      "25m_override_increase": 2552.03
    },
    {
      "#": "60 Amory St (011-19-00)",
      $: 3738600,
      owner1: "Martel",
      owner2: "",
      current_taxes: 34648.33,
      "18m_override_total": 36522.8,
      "18m_override_increase": 1874.47,
      "25m_override_total": 37250.42,
      "25m_override_increase": 2602.09
    },
    {
      "#": "64 Amory St (011-18-00)",
      $: 3772200,
      owner1: "Bergin",
      owner2: "Ingraham",
      current_taxes: 34992.39,
      "18m_override_total": 36885.48,
      "18m_override_increase": 1893.09,
      "25m_override_total": 37620.32,
      "25m_override_increase": 2627.93
    },
    {
      "#": "68 Amory St (011-17-00)",
      $: 4141300,
      owner1: "Jurayj",
      owner2: "Silbaugh",
      current_taxes: 38771.98,
      "18m_override_total": 40869.54,
      "18m_override_increase": 2097.56,
      "25m_override_total": 41683.76,
      "25m_override_increase": 2911.78
    },
    {
      "#": "74 Amory St (011-16-00)",
      $: 3083500,
      owner1: "Patton",
      owner2: "",
      current_taxes: 27940.11,
      "18m_override_total": 29451.67,
      "18m_override_increase": 1511.56,
      "25m_override_total": 30038.41,
      "25m_override_increase": 2098.3
    },
    {
      "#": "132 Amory St, Condo 2 & P25 (022-07-01)",
      $: 1313900,
      owner1: "Stang",
      owner2: "Craigue",
      current_taxes: 13454.34,
      "18m_override_total": 14182.22,
      "18m_override_increase": 727.88,
      "25m_override_total": 14464.76,
      "25m_override_increase": 1010.42
    },
    {
      "#": "132 Amory St, Condo 3 & P20 P21 (022-07-02)",
      $: 1425100,
      owner1: "Chase",
      owner2: "Ben-Ari",
      current_taxes: 10958.09,
      "18m_override_total": 11550.92,
      "18m_override_increase": 592.83,
      "25m_override_total": 11781.04,
      "25m_override_increase": 822.95
    },
    {
      "#": "132 Amory St, Condo 4 & P27 P28 (022-07-03)",
      $: 1525500,
      owner1: "Wilcox, Et Al",
      owner2: "",
      current_taxes: 15621.12,
      "18m_override_total": 16466.22,
      "18m_override_increase": 845.1,
      "25m_override_total": 16794.27,
      "25m_override_increase": 1173.15
    },
    {
      "#": "144 Amory St (021-01-00)",
      $: 21131700,
      owner1: "Brookline Housing Authority",
      owner2: "",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "155 Amory St (016-01-03)",
      $: 3207700,
      owner1: "Huang",
      owner2: "",
      current_taxes: 32846.85,
      "18m_override_total": 34623.86,
      "18m_override_increase": 1777.01,
      "25m_override_total": 35313.65,
      "25m_override_increase": 2466.8
    },
    {
      "#": "163 Amory St (017-05-00)",
      $: 9481600,
      owner1: "Trustees Of Boston University",
      owner2: "C/O General Accounting 4Th Fl",
      current_taxes: 29518.84,
      "18m_override_total": 31115.81,
      "18m_override_increase": 1596.97,
      "25m_override_total": 31735.7,
      "25m_override_increase": 2216.86
    },
    {
      "#": "1002 Beacon St (001-01-00)",
      $: 4807700,
      owner1: "Xiao Investment Company V Llc",
      owner2: "",
      current_taxes: 73517.46,
      "18m_override_total": 77494.75,
      "18m_override_increase": 3977.29,
      "25m_override_total": 79038.62,
      "25m_override_increase": 5521.16
    },
    {
      "#": "1004 Beacon St (001-02-08)",
      $: 11438400,
      owner1: "Lineage Re Brookline Llc",
      owner2: "",
      current_taxes: 196282.94,
      "18m_override_total": 206901.85,
      "18m_override_increase": 10618.91,
      "25m_override_total": 211023.79,
      "25m_override_increase": 14740.85
    },
    {
      "#": "1018 Beacon St (001-09-00)",
      $: 3053300,
      owner1: "Glanz, Et Al Trs",
      owner2: "C/O Glanz Properties Inc",
      current_taxes: 52394.63,
      "18m_override_total": 55229.18,
      "18m_override_increase": 2834.55,
      "25m_override_total": 56329.47,
      "25m_override_increase": 3934.84
    },
    {
      "#": "1020 Beacon St, Unit A (001-10-00)",
      $: 1577800,
      owner1: "Galvin, Tr",
      owner2: "C/O 1020-1024 Beacon St Realty",
      current_taxes: 27075.05,
      "18m_override_total": 28539.81,
      "18m_override_increase": 1464.76,
      "25m_override_total": 29108.39,
      "25m_override_increase": 2033.34
    },
    {
      "#": "1022 Beacon St (001-11-00)",
      $: 2213700,
      owner1: "Galvin, Tr",
      owner2: "C/O 1020-1024 Beacon St Realty",
      current_taxes: 37987.09,
      "18m_override_total": 40042.19,
      "18m_override_increase": 2055.1,
      "25m_override_total": 40839.92,
      "25m_override_increase": 2852.83
    },
    {
      "#": "1024 Beacon St (001-12-00)",
      $: 8949e3,
      owner1: "Shief Trs",
      owner2: "Goodman",
      current_taxes: 153564.84,
      "18m_override_total": 161872.7,
      "18m_override_increase": 8307.86,
      "25m_override_total": 165097.56,
      "25m_override_increase": 11532.72
    },
    {
      "#": "1038 Beacon St, Condo 100 & P1 (001-13-05)",
      $: 846400,
      owner1: "Truman",
      owner2: "Joe",
      current_taxes: 8667.14,
      "18m_override_total": 9136.03,
      "18m_override_increase": 468.89,
      "25m_override_total": 9318.04,
      "25m_override_increase": 650.9
    },
    {
      "#": "1038 Beacon St, Condo 101 & P3 (001-13-06)",
      $: 865100,
      owner1: "Pang",
      owner2: "C/O Pang",
      current_taxes: 8858.62,
      "18m_override_total": 9337.87,
      "18m_override_increase": 479.25,
      "25m_override_total": 9523.9,
      "25m_override_increase": 665.28
    },
    {
      "#": "1038 Beacon St, Condo 102 (001-13-07)",
      $: 337900,
      owner1: "Liu",
      owner2: "Young",
      current_taxes: 3460.1,
      "18m_override_total": 3647.29,
      "18m_override_increase": 187.19,
      "25m_override_total": 3719.95,
      "25m_override_increase": 259.85
    },
    {
      "#": "1038 Beacon St, Condo 103 & P14 (001-13-08)",
      $: 1179200,
      owner1: "Leao Deslandes Tr",
      owner2: "",
      current_taxes: 20235.07,
      "18m_override_total": 21329.79,
      "18m_override_increase": 1094.72,
      "25m_override_total": 21754.72,
      "25m_override_increase": 1519.65
    },
    {
      "#": "1038 Beacon St, Condo 104 & P8 (001-13-09)",
      $: 818600,
      owner1: "Tso Trs",
      owner2: "",
      current_taxes: 8382.46,
      "18m_override_total": 8835.95,
      "18m_override_increase": 453.49,
      "25m_override_total": 9011.98,
      "25m_override_increase": 629.52
    },
    {
      "#": "1038 Beacon St, Condo 200 & P4 (001-13-10)",
      $: 917300,
      owner1: "Chow Trs",
      owner2: "Sullivan",
      current_taxes: 5758.22,
      "18m_override_total": 6069.74,
      "18m_override_increase": 311.52,
      "25m_override_total": 6190.66,
      "25m_override_increase": 432.44
    },
    {
      "#": "1038 Beacon St, Condo 201 & P17 (001-13-11)",
      $: 858200,
      owner1: "Krasner Tr",
      owner2: "",
      current_taxes: 8787.97,
      "18m_override_total": 9263.4,
      "18m_override_increase": 475.43,
      "25m_override_total": 9447.95,
      "25m_override_increase": 659.98
    },
    {
      "#": "1038 Beacon St, Condo 202 (001-13-12)",
      $: 373100,
      owner1: "Bohr",
      owner2: "",
      current_taxes: 382.05,
      "18m_override_total": 402.72,
      "18m_override_increase": 20.67,
      "25m_override_total": 410.74,
      "25m_override_increase": 28.69
    },
    {
      "#": "1038 Beacon St, Condo 203 & P7 (001-13-13)",
      $: 1161900,
      owner1: "Sima",
      owner2: "Fu",
      current_taxes: 11897.86,
      "18m_override_total": 12541.53,
      "18m_override_increase": 643.67,
      "25m_override_total": 12791.39,
      "25m_override_increase": 893.53
    },
    {
      "#": "1038 Beacon St, Condo 204& P5 (001-13-14)",
      $: 878e3,
      owner1: "Vasantha",
      owner2: "Anjaneyulu",
      current_taxes: 8990.72,
      "18m_override_total": 9477.12,
      "18m_override_increase": 486.4,
      "25m_override_total": 9665.92,
      "25m_override_increase": 675.2
    },
    {
      "#": "1038 Beacon St, Condo 300 & P11 (001-13-15)",
      $: 903100,
      owner1: "Behnegar",
      owner2: "Parker",
      current_taxes: 5612.81,
      "18m_override_total": 5916.46,
      "18m_override_increase": 303.65,
      "25m_override_total": 6034.33,
      "25m_override_increase": 421.52
    },
    {
      "#": "1038 Beacon St, Condo 301 & P6 (001-13-16)",
      $: 778600,
      owner1: "Elliott Trs",
      owner2: "",
      current_taxes: 4337.93,
      "18m_override_total": 4572.61,
      "18m_override_increase": 234.68,
      "25m_override_total": 4663.71,
      "25m_override_increase": 325.78
    },
    {
      "#": "1038 Beacon St, Condo 302 (001-13-17)",
      $: 418300,
      owner1: "Wang",
      owner2: "",
      current_taxes: 4283.39,
      "18m_override_total": 4515.12,
      "18m_override_increase": 231.73,
      "25m_override_total": 4605.07,
      "25m_override_increase": 321.68
    },
    {
      "#": "1038 Beacon St, Condo 303 & P19 (001-13-18)",
      $: 1029500,
      owner1: "Tri-Corner Realty Llc",
      owner2: "",
      current_taxes: 10542.08,
      "18m_override_total": 11112.41,
      "18m_override_increase": 570.33,
      "25m_override_total": 11333.79,
      "25m_override_increase": 791.71
    },
    {
      "#": "1038 Beacon St, Condo 304 & P12 (001-13-19)",
      $: 883200,
      owner1: "Hung",
      owner2: "",
      current_taxes: 5409.03,
      "18m_override_total": 5701.66,
      "18m_override_increase": 292.63,
      "25m_override_total": 5815.25,
      "25m_override_increase": 406.22
    },
    {
      "#": "1038 Beacon St, Condo 400 & P16 (001-13-20)",
      $: 924e3,
      owner1: "Evans",
      owner2: "",
      current_taxes: 9461.76,
      "18m_override_total": 9973.64,
      "18m_override_increase": 511.88,
      "25m_override_total": 10172.34,
      "25m_override_increase": 710.58
    },
    {
      "#": "1038 Beacon St, Condo 401 & P10 (001-13-21)",
      $: 807500,
      owner1: "Kirda",
      owner2: "",
      current_taxes: 8268.8,
      "18m_override_total": 8716.14,
      "18m_override_increase": 447.34,
      "25m_override_total": 8889.79,
      "25m_override_increase": 620.99
    },
    {
      "#": "1038 Beacon St, Condo 402 & P18 (001-13-22)",
      $: 412e3,
      owner1: "1038 Beacon Nauset Group Llc",
      owner2: "",
      current_taxes: 4218.88,
      "18m_override_total": 4447.12,
      "18m_override_increase": 228.24,
      "25m_override_total": 4535.72,
      "25m_override_increase": 316.84
    },
    {
      "#": "1038 Beacon St, Condo 403 & P13 (001-13-23)",
      $: 1090900,
      owner1: "Tesfaigzi",
      owner2: "Tewolde",
      current_taxes: 11170.82,
      "18m_override_total": 11775.16,
      "18m_override_increase": 604.34,
      "25m_override_total": 12009.75,
      "25m_override_increase": 838.93
    },
    {
      "#": "1038 Beacon St, Condo 404 & P15 (001-13-24)",
      $: 946700,
      owner1: "Fastov",
      owner2: "",
      current_taxes: 9694.21,
      "18m_override_total": 10218.67,
      "18m_override_increase": 524.46,
      "25m_override_total": 10422.25,
      "25m_override_increase": 728.04
    },
    {
      "#": "1038 Beacon St, Condo A (001-13-02)",
      $: 541600,
      owner1: "Keith",
      owner2: "",
      current_taxes: 1911.05,
      "18m_override_total": 2014.44,
      "18m_override_increase": 103.39,
      "25m_override_total": 2054.57,
      "25m_override_increase": 143.52
    },
    {
      "#": "1038 Beacon St, Condo B (001-13-03)",
      $: 289500,
      owner1: "Mobe 12 Llc",
      owner2: "",
      current_taxes: 2964.48,
      "18m_override_total": 3124.86,
      "18m_override_increase": 160.38,
      "25m_override_total": 3187.11,
      "25m_override_increase": 222.63
    },
    {
      "#": "1038 Beacon St, Condo C (001-13-04)",
      $: 491e3,
      owner1: "Evans",
      owner2: "",
      current_taxes: 1392.91,
      "18m_override_total": 1468.27,
      "18m_override_increase": 75.36,
      "25m_override_total": 1497.52,
      "25m_override_increase": 104.61
    },
    {
      "#": "1038 Beacon St, Condo Cr-1 & P9 (001-13-25)",
      $: 1213500,
      owner1: "Japara Llc",
      owner2: "",
      current_taxes: 20823.66,
      "18m_override_total": 21950.22,
      "18m_override_increase": 1126.56,
      "25m_override_total": 22387.52,
      "25m_override_increase": 1563.86
    },
    {
      "#": "1038 Beacon St, Condo Cr-2 & P2 (001-13-01)",
      $: 1151600,
      owner1: "Sgc Realty Llc",
      owner2: "",
      current_taxes: 19761.46,
      "18m_override_total": 20830.55,
      "18m_override_increase": 1069.09,
      "25m_override_total": 21245.55,
      "25m_override_increase": 1484.09
    },
    {
      "#": "1042 Beacon St, Condo 1A (001-14-02)",
      $: 1028100,
      owner1: "Sallet",
      owner2: "",
      current_taxes: 17642.2,
      "18m_override_total": 18596.64,
      "18m_override_increase": 954.44,
      "25m_override_total": 18967.13,
      "25m_override_increase": 1324.93
    },
    {
      "#": "1044 Beacon St, Condo 1 (001-14-01)",
      $: 696800,
      owner1: "Sallet",
      owner2: "",
      current_taxes: 11957.09,
      "18m_override_total": 12603.97,
      "18m_override_increase": 646.88,
      "25m_override_total": 12855.07,
      "25m_override_increase": 897.98
    },
    {
      "#": "1046 Beacon St, Condo 2 (001-14-03)",
      $: 740200,
      owner1: "Christakis Tr",
      owner2: "",
      current_taxes: 12701.83,
      "18m_override_total": 13389,
      "18m_override_increase": 687.17,
      "25m_override_total": 13655.74,
      "25m_override_increase": 953.91
    },
    {
      "#": "1050 Beacon St, Condo 3 (001-14-04)",
      $: 2067500,
      owner1: "Kolgian",
      owner2: "",
      current_taxes: 35478.3,
      "18m_override_total": 37397.68,
      "18m_override_increase": 1919.38,
      "25m_override_total": 38142.72,
      "25m_override_increase": 2664.42
    },
    {
      "#": "1052 Beacon St, Condo 4 (001-14-05)",
      $: 1155900,
      owner1: "Sgc Realty Llc",
      owner2: "",
      current_taxes: 19835.24,
      "18m_override_total": 20908.33,
      "18m_override_increase": 1073.09,
      "25m_override_total": 21324.87,
      "25m_override_increase": 1489.63
    },
    {
      "#": "1054 Beacon St, Condo 5 (001-14-06)",
      $: 1066200,
      owner1: "Sgc Realty Llc",
      owner2: "",
      current_taxes: 18295.99,
      "18m_override_total": 19285.8,
      "18m_override_increase": 989.81,
      "25m_override_total": 19670.02,
      "25m_override_increase": 1374.03
    },
    {
      "#": "1056 Beacon St, Condo 1 & P1 (009B-07-04)",
      $: 776700,
      owner1: "Liddell",
      owner2: "",
      current_taxes: 4318.47,
      "18m_override_total": 4552.1,
      "18m_override_increase": 233.63,
      "25m_override_total": 4642.79,
      "25m_override_increase": 324.32
    },
    {
      "#": "1056 Beacon St, Condo 10 (009B-07-13)",
      $: 631700,
      owner1: "Prasad",
      owner2: "",
      current_taxes: 6468.61,
      "18m_override_total": 6818.56,
      "18m_override_increase": 349.95,
      "25m_override_total": 6954.4,
      "25m_override_increase": 485.79
    },
    {
      "#": "1056 Beacon St, Condo 11 (009B-07-14)",
      $: 461700,
      owner1: "Chen Tr",
      owner2: "",
      current_taxes: 4727.81,
      "18m_override_total": 4983.58,
      "18m_override_increase": 255.77,
      "25m_override_total": 5082.87,
      "25m_override_increase": 355.06
    },
    {
      "#": "1056 Beacon St, Condo 12 (009B-07-15)",
      $: 515400,
      owner1: "Lutfi",
      owner2: "",
      current_taxes: 5277.7,
      "18m_override_total": 5563.22,
      "18m_override_increase": 285.52,
      "25m_override_total": 5674.06,
      "25m_override_increase": 396.36
    },
    {
      "#": "1056 Beacon St, Condo 12A & Prk (009B-07-16)",
      $: 794400,
      owner1: "Huang",
      owner2: "",
      current_taxes: 4499.72,
      "18m_override_total": 4743.15,
      "18m_override_increase": 243.43,
      "25m_override_total": 4837.65,
      "25m_override_increase": 337.93
    },
    {
      "#": "1056 Beacon St, Condo 14 & P22 (009B-07-17)",
      $: 702200,
      owner1: "Baskin",
      owner2: "",
      current_taxes: 7190.53,
      "18m_override_total": 7579.54,
      "18m_override_increase": 389.01,
      "25m_override_total": 7730.54,
      "25m_override_increase": 540.01
    },
    {
      "#": "1056 Beacon St, Condo 15 (009B-07-18)",
      $: 489700,
      owner1: "Eftekharzadeh",
      owner2: "",
      current_taxes: 5014.53,
      "18m_override_total": 5285.82,
      "18m_override_increase": 271.29,
      "25m_override_total": 5391.12,
      "25m_override_increase": 376.59
    },
    {
      "#": "1056 Beacon St, Condo 16 (009B-07-19)",
      $: 472200,
      owner1: "Arsenault",
      owner2: "",
      current_taxes: 1200.39,
      "18m_override_total": 1265.33,
      "18m_override_increase": 64.94,
      "25m_override_total": 1290.54,
      "25m_override_increase": 90.15
    },
    {
      "#": "1056 Beacon St, Condo 2 (009B-07-05)",
      $: 585400,
      owner1: "Kos",
      owner2: "",
      current_taxes: 2359.56,
      "18m_override_total": 2487.21,
      "18m_override_increase": 127.65,
      "25m_override_total": 2536.76,
      "25m_override_increase": 177.2
    },
    {
      "#": "1056 Beacon St, Condo 3 (009B-07-06)",
      $: 461700,
      owner1: "Jacobs",
      owner2: "",
      current_taxes: 1092.87,
      "18m_override_total": 1151.99,
      "18m_override_increase": 59.12,
      "25m_override_total": 1174.94,
      "25m_override_increase": 82.07
    },
    {
      "#": "1056 Beacon St, Condo 4 (009B-07-07)",
      $: 468700,
      owner1: "Fattman",
      owner2: "Murray",
      current_taxes: 4799.49,
      "18m_override_total": 5059.14,
      "18m_override_increase": 259.65,
      "25m_override_total": 5159.93,
      "25m_override_increase": 360.44
    },
    {
      "#": "1056 Beacon St, Condo 5 & P3 (009B-07-08)",
      $: 790300,
      owner1: "Fang",
      owner2: "Zhang",
      current_taxes: 4457.74,
      "18m_override_total": 4698.9,
      "18m_override_increase": 241.16,
      "25m_override_total": 4792.52,
      "25m_override_increase": 334.78
    },
    {
      "#": "1056 Beacon St, Condo 6 & P-H (009B-07-09)",
      $: 747100,
      owner1: "Beacon Street Brookline 1056-6 Llc",
      owner2: "",
      current_taxes: 7650.3,
      "18m_override_total": 8064.18,
      "18m_override_increase": 413.88,
      "25m_override_total": 8224.84,
      "25m_override_increase": 574.54
    },
    {
      "#": "1056 Beacon St, Condo 7 (009B-07-10)",
      $: 488800,
      owner1: "Mccabe",
      owner2: "",
      current_taxes: 1370.38,
      "18m_override_total": 1444.52,
      "18m_override_increase": 74.14,
      "25m_override_total": 1473.3,
      "25m_override_increase": 102.92
    },
    {
      "#": "1056 Beacon St, Condo 8 (009B-07-11)",
      $: 548100,
      owner1: "Dickinson",
      owner2: "",
      current_taxes: 1977.61,
      "18m_override_total": 2084.6,
      "18m_override_increase": 106.99,
      "25m_override_total": 2126.13,
      "25m_override_increase": 148.52
    },
    {
      "#": "1056 Beacon St, Condo 9 & P12 (009B-07-12)",
      $: 788400,
      owner1: "Lee Trs",
      owner2: "Hsu",
      current_taxes: 8073.22,
      "18m_override_total": 8509.98,
      "18m_override_increase": 436.76,
      "25m_override_total": 8679.52,
      "25m_override_increase": 606.3
    },
    {
      "#": "1056 Beacon St, Condo A (009B-07-01)",
      $: 534800,
      owner1: "Fujita Tr",
      owner2: "",
      current_taxes: 1841.42,
      "18m_override_total": 1941.04,
      "18m_override_increase": 99.62,
      "25m_override_total": 1979.71,
      "25m_override_increase": 138.29
    },
    {
      "#": "1056 Beacon St, Condo B (009B-07-02)",
      $: 400400,
      owner1: "Cacace Iii",
      owner2: "Cacace",
      current_taxes: 4100.1,
      "18m_override_total": 4321.92,
      "18m_override_increase": 221.82,
      "25m_override_total": 4408.02,
      "25m_override_increase": 307.92
    },
    {
      "#": "1056 Beacon St, Condo C (009B-07-03)",
      $: 484100,
      owner1: "Fabrizio",
      owner2: "",
      current_taxes: 4957.18,
      "18m_override_total": 5225.36,
      "18m_override_increase": 268.18,
      "25m_override_total": 5329.46,
      "25m_override_increase": 372.28
    },
    {
      "#": "1056 Beacon St, Condo Pk-Y-Z-Aa (009B-07-59)",
      $: 153600,
      owner1: "Beacon Gate Condos",
      owner2: "C/O Certified Property Mgmt",
      current_taxes: 1572.86,
      "18m_override_total": 1657.95,
      "18m_override_increase": 85.09,
      "25m_override_total": 1690.98,
      "25m_override_increase": 118.12
    },
    {
      "#": "1056 Beacon St, Condo Prk-N (009B-07-60)",
      $: 50400,
      owner1: "Sun",
      owner2: "Yung",
      current_taxes: 516.1,
      "18m_override_total": 544.02,
      "18m_override_increase": 27.92,
      "25m_override_total": 554.86,
      "25m_override_increase": 38.76
    },
    {
      "#": "1060 Beacon St, Condo 1 & P9 (009B-07-23)",
      $: 795200,
      owner1: "Wu",
      owner2: "Payne",
      current_taxes: 4507.91,
      "18m_override_total": 4751.79,
      "18m_override_increase": 243.88,
      "25m_override_total": 4846.45,
      "25m_override_increase": 338.54
    },
    {
      "#": "1060 Beacon St, Condo 10 & Prk (009B-07-32)",
      $: 865200,
      owner1: "Pell",
      owner2: "",
      current_taxes: 5224.71,
      "18m_override_total": 5507.37,
      "18m_override_increase": 282.66,
      "25m_override_total": 5617.09,
      "25m_override_increase": 392.38
    },
    {
      "#": "1060 Beacon St, Condo 11 & P18 (009B-07-33)",
      $: 604200,
      owner1: "Guttenberg",
      owner2: "",
      current_taxes: 2552.07,
      "18m_override_total": 2690.14,
      "18m_override_increase": 138.07,
      "25m_override_total": 2743.73,
      "25m_override_increase": 191.66
    },
    {
      "#": "1060 Beacon St, Condo 12 & Prk (009B-07-34)",
      $: 561800,
      owner1: "Morte, Tr",
      owner2: "",
      current_taxes: 5752.83,
      "18m_override_total": 6064.06,
      "18m_override_increase": 311.23,
      "25m_override_total": 6184.87,
      "25m_override_increase": 432.04
    },
    {
      "#": "1060 Beacon St, Condo 12A & P17 (009B-07-35)",
      $: 758100,
      owner1: "Hall",
      owner2: "Solomon",
      current_taxes: 7762.94,
      "18m_override_total": 8182.92,
      "18m_override_increase": 419.98,
      "25m_override_total": 8345.94,
      "25m_override_increase": 583
    },
    {
      "#": "1060 Beacon St, Condo 14 (009B-07-36)",
      $: 663700,
      owner1: "Canchola",
      owner2: "Philbin",
      current_taxes: 6796.29,
      "18m_override_total": 7163.97,
      "18m_override_increase": 367.68,
      "25m_override_total": 7306.69,
      "25m_override_increase": 510.4
    },
    {
      "#": "1060 Beacon St, Condo 15 (009B-07-37)",
      $: 491e3,
      owner1: "Lucic",
      owner2: "",
      current_taxes: 5027.84,
      "18m_override_total": 5299.85,
      "18m_override_increase": 272.01,
      "25m_override_total": 5405.43,
      "25m_override_increase": 377.59
    },
    {
      "#": "1060 Beacon St, Condo 16 (009B-07-38)",
      $: 479200,
      owner1: "Diamond",
      owner2: "",
      current_taxes: 4907.01,
      "18m_override_total": 5172.48,
      "18m_override_increase": 265.47,
      "25m_override_total": 5275.53,
      "25m_override_increase": 368.52
    },
    {
      "#": "1060 Beacon St, Condo 2 & P19 (009B-07-24)",
      $: 639600,
      owner1: "Ahlemeyer",
      owner2: "",
      current_taxes: 6549.5,
      "18m_override_total": 6903.83,
      "18m_override_increase": 354.33,
      "25m_override_total": 7041.37,
      "25m_override_increase": 491.87
    },
    {
      "#": "1060 Beacon St, Condo 3 (009B-07-25)",
      $: 497700,
      owner1: "Kriz Tr",
      owner2: "",
      current_taxes: 5096.45,
      "18m_override_total": 5372.17,
      "18m_override_increase": 275.72,
      "25m_override_total": 5479.19,
      "25m_override_increase": 382.74
    },
    {
      "#": "1060 Beacon St, Condo 4 (009B-07-26)",
      $: 461700,
      owner1: "Griffin Trs",
      owner2: "Lubker",
      current_taxes: 4727.81,
      "18m_override_total": 4983.58,
      "18m_override_increase": 255.77,
      "25m_override_total": 5082.87,
      "25m_override_increase": 355.06
    },
    {
      "#": "1060 Beacon St, Condo 5 & Prk (009B-07-27)",
      $: 777800,
      owner1: "Zhang",
      owner2: "Yi",
      current_taxes: 7964.67,
      "18m_override_total": 8395.56,
      "18m_override_increase": 430.89,
      "25m_override_total": 8562.82,
      "25m_override_increase": 598.15
    },
    {
      "#": "1060 Beacon St, Condo 6 & Prk (009B-07-28)",
      $: 813800,
      owner1: "Wang",
      owner2: "Zhang",
      current_taxes: 4698.38,
      "18m_override_total": 4952.56,
      "18m_override_increase": 254.18,
      "25m_override_total": 5051.23,
      "25m_override_increase": 352.85
    },
    {
      "#": "1060 Beacon St, Condo 7 (009B-07-29)",
      $: 479300,
      owner1: "Winograd",
      owner2: "Feldscher",
      current_taxes: 4908.03,
      "18m_override_total": 5173.55,
      "18m_override_increase": 265.52,
      "25m_override_total": 5276.62,
      "25m_override_increase": 368.59
    },
    {
      "#": "1060 Beacon St, Condo 8 (009B-07-30)",
      $: 482700,
      owner1: "Zhang",
      owner2: "Bless S Matthew",
      current_taxes: 4942.85,
      "18m_override_total": 5210.26,
      "18m_override_increase": 267.41,
      "25m_override_total": 5314.06,
      "25m_override_increase": 371.21
    },
    {
      "#": "1060 Beacon St, Condo 9 & Prk (009B-07-31)",
      $: 780300,
      owner1: "Parfitt",
      owner2: "Welch",
      current_taxes: 4355.34,
      "18m_override_total": 4590.96,
      "18m_override_increase": 235.62,
      "25m_override_total": 4682.43,
      "25m_override_increase": 327.09
    },
    {
      "#": "1060 Beacon St, Condo A (009B-07-20)",
      $: 473600,
      owner1: "Brillhart",
      owner2: "Hogan",
      current_taxes: 4849.66,
      "18m_override_total": 5112.03,
      "18m_override_increase": 262.37,
      "25m_override_total": 5213.87,
      "25m_override_increase": 364.21
    },
    {
      "#": "1060 Beacon St, Condo B (009B-07-21)",
      $: 403500,
      owner1: "Tankard",
      owner2: "",
      current_taxes: 496.91,
      "18m_override_total": 523.79,
      "18m_override_increase": 26.88,
      "25m_override_total": 534.23,
      "25m_override_increase": 37.32
    },
    {
      "#": "1060 Beacon St, Condo C (009B-07-22)",
      $: 316e3,
      owner1: "Zhang",
      owner2: "",
      current_taxes: 3235.84,
      "18m_override_total": 3410.9,
      "18m_override_increase": 175.06,
      "25m_override_total": 3478.85,
      "25m_override_increase": 243.01
    },
    {
      "#": "1064 Beacon St, Condo 1 & Prk (009B-07-41)",
      $: 638700,
      owner1: "Tanasijevic Trs",
      owner2: "",
      current_taxes: 6540.29,
      "18m_override_total": 6894.12,
      "18m_override_increase": 353.83,
      "25m_override_total": 7031.47,
      "25m_override_increase": 491.18
    },
    {
      "#": "1064 Beacon St, Condo 10 (009B-07-50)",
      $: 751700,
      owner1: "Lawton",
      owner2: "",
      current_taxes: 4062.47,
      "18m_override_total": 4282.25,
      "18m_override_increase": 219.78,
      "25m_override_total": 4367.56,
      "25m_override_increase": 305.09
    },
    {
      "#": "1064 Beacon St, Condo 11 (009B-07-51)",
      $: 515300,
      owner1: "Stein",
      owner2: "",
      current_taxes: 1641.74,
      "18m_override_total": 1730.56,
      "18m_override_increase": 88.82,
      "25m_override_total": 1765.03,
      "25m_override_increase": 123.29
    },
    {
      "#": "1064 Beacon St, Condo 12 (009B-07-52)",
      $: 480200,
      owner1: "Brillhart",
      owner2: "",
      current_taxes: 1282.31,
      "18m_override_total": 1351.68,
      "18m_override_increase": 69.37,
      "25m_override_total": 1378.61,
      "25m_override_increase": 96.3
    },
    {
      "#": "1064 Beacon St, Condo 12A (009B-07-53)",
      $: 734800,
      owner1: "Sun",
      owner2: "Yung",
      current_taxes: 3889.42,
      "18m_override_total": 4099.84,
      "18m_override_increase": 210.42,
      "25m_override_total": 4181.52,
      "25m_override_increase": 292.1
    },
    {
      "#": "1064 Beacon St, Condo 14 & Prk (009B-07-54)",
      $: 760400,
      owner1: "Picariello Trs",
      owner2: "",
      current_taxes: 7786.5,
      "18m_override_total": 8207.75,
      "18m_override_increase": 421.25,
      "25m_override_total": 8371.27,
      "25m_override_increase": 584.77
    },
    {
      "#": "1064 Beacon St, Condo 15 (009B-07-55)",
      $: 558900,
      owner1: "Glaser",
      owner2: "",
      current_taxes: 2088.2,
      "18m_override_total": 2201.17,
      "18m_override_increase": 112.97,
      "25m_override_total": 2245.02,
      "25m_override_increase": 156.82
    },
    {
      "#": "1064 Beacon St, Condo 16 & Prk (009B-07-56)",
      $: 542100,
      owner1: "Kamal Trs",
      owner2: "",
      current_taxes: 5551.1,
      "18m_override_total": 5851.41,
      "18m_override_increase": 300.31,
      "25m_override_total": 5967.99,
      "25m_override_increase": 416.89
    },
    {
      "#": "1064 Beacon St, Condo 2 (009B-07-42)",
      $: 654400,
      owner1: "Xiao Tr",
      owner2: "",
      current_taxes: 6701.06,
      "18m_override_total": 7063.59,
      "18m_override_increase": 362.53,
      "25m_override_total": 7204.31,
      "25m_override_increase": 503.25
    },
    {
      "#": "1064 Beacon St, Condo 3 & Prk (009B-07-43)",
      $: 563800,
      owner1: "Lew",
      owner2: "",
      current_taxes: 2138.38,
      "18m_override_total": 2254.07,
      "18m_override_increase": 115.69,
      "25m_override_total": 2298.97,
      "25m_override_increase": 160.59
    },
    {
      "#": "1064 Beacon St, Condo 4 & P-C (009B-07-44)",
      $: 542100,
      owner1: "Officer Tr",
      owner2: "",
      current_taxes: 5551.1,
      "18m_override_total": 5851.41,
      "18m_override_increase": 300.31,
      "25m_override_total": 5967.99,
      "25m_override_increase": 416.89
    },
    {
      "#": "1064 Beacon St, Condo 5 & P10 (009B-07-45)",
      $: 799300,
      owner1: "Van Dissel Tr",
      owner2: "",
      current_taxes: 8184.83,
      "18m_override_total": 8627.63,
      "18m_override_increase": 442.8,
      "25m_override_total": 8799.51,
      "25m_override_increase": 614.68
    },
    {
      "#": "1064 Beacon St, Condo 6 (009B-07-46)",
      $: 710400,
      owner1: "Liu",
      owner2: "",
      current_taxes: 3639.56,
      "18m_override_total": 3836.46,
      "18m_override_increase": 196.9,
      "25m_override_total": 3912.89,
      "25m_override_increase": 273.33
    },
    {
      "#": "1064 Beacon St, Condo 7 (009B-07-47)",
      $: 588e3,
      owner1: "Llorente",
      owner2: "",
      current_taxes: 2386.19,
      "18m_override_total": 2515.28,
      "18m_override_increase": 129.09,
      "25m_override_total": 2565.39,
      "25m_override_increase": 179.2
    },
    {
      "#": "1064 Beacon St, Condo 8 & Prk (009B-07-48)",
      $: 571200,
      owner1: "Tsang Trs",
      owner2: "Poon",
      current_taxes: 5849.09,
      "18m_override_total": 6165.53,
      "18m_override_increase": 316.44,
      "25m_override_total": 6288.36,
      "25m_override_increase": 439.27
    },
    {
      "#": "1064 Beacon St, Condo 9 & Prk (009B-07-49)",
      $: 783e3,
      owner1: "Troxell Tr",
      owner2: "",
      current_taxes: 8017.92,
      "18m_override_total": 8451.69,
      "18m_override_increase": 433.77,
      "25m_override_total": 8620.07,
      "25m_override_increase": 602.15
    },
    {
      "#": "1064 Beacon St, Condo A (009B-07-39)",
      $: 349500,
      owner1: "Fortunato Trs",
      owner2: "",
      current_taxes: 3578.88,
      "18m_override_total": 3772.5,
      "18m_override_increase": 193.62,
      "25m_override_total": 3847.65,
      "25m_override_increase": 268.77
    },
    {
      "#": "1064 Beacon St, Condo B (009B-07-57)",
      $: 378400,
      owner1: "Beacon Gate Condo Association",
      owner2: "C/O Certified Property Mgmt",
      current_taxes: 3874.82,
      "18m_override_total": 4084.45,
      "18m_override_increase": 209.63,
      "25m_override_total": 4165.82,
      "25m_override_increase": 291
    },
    {
      "#": "1064 Beacon St, Condo C (009B-07-58)",
      $: 326300,
      owner1: "Beacon Gate Condo Association",
      owner2: "C/O Certified Property Mgmt",
      current_taxes: 3341.31,
      "18m_override_total": 3522.07,
      "18m_override_increase": 180.76,
      "25m_override_total": 3592.24,
      "25m_override_increase": 250.93
    },
    {
      "#": "1064 Beacon St, Condo D (009B-07-40)",
      $: 390800,
      owner1: "Einhorn",
      owner2: "",
      current_taxes: 4001.79,
      "18m_override_total": 4218.29,
      "18m_override_increase": 216.5,
      "25m_override_total": 4302.32,
      "25m_override_increase": 300.53
    },
    {
      "#": "1070 Beacon St (009B-09-00)",
      $: 12960600,
      owner1: "Ten Seventy Tenants Housing Co",
      owner2: "C/O Jennifer Porter",
      current_taxes: 132716.54,
      "18m_override_total": 139896.5,
      "18m_override_increase": 7179.96,
      "25m_override_total": 142683.55,
      "25m_override_increase": 9967.01
    },
    {
      "#": "1080 Beacon St, Condo 1A (009B-10-03)",
      $: 1578100,
      owner1: "Haselwandter Tr",
      owner2: "",
      current_taxes: 16159.74,
      "18m_override_total": 17033.98,
      "18m_override_increase": 874.24,
      "25m_override_total": 17373.34,
      "25m_override_increase": 1213.6
    },
    {
      "#": "1080 Beacon St, Condo 1B (009B-10-04)",
      $: 659900,
      owner1: "Omary",
      owner2: "",
      current_taxes: 6757.38,
      "18m_override_total": 7122.95,
      "18m_override_increase": 365.57,
      "25m_override_total": 7264.86,
      "25m_override_increase": 507.48
    },
    {
      "#": "1080 Beacon St, Condo 1C (009B-10-05)",
      $: 541600,
      owner1: "Devaney",
      owner2: "",
      current_taxes: 5545.98,
      "18m_override_total": 5846.02,
      "18m_override_increase": 300.04,
      "25m_override_total": 5962.48,
      "25m_override_increase": 416.5
    },
    {
      "#": "1080 Beacon St, Condo 1D (009B-10-06)",
      $: 659600,
      owner1: "Shen",
      owner2: "",
      current_taxes: 6754.3,
      "18m_override_total": 7119.71,
      "18m_override_increase": 365.41,
      "25m_override_total": 7261.55,
      "25m_override_increase": 507.25
    },
    {
      "#": "1080 Beacon St, Condo 2A (009B-10-07)",
      $: 1788300,
      owner1: "Hu Trs",
      owner2: "",
      current_taxes: 14677.26,
      "18m_override_total": 15471.3,
      "18m_override_increase": 794.04,
      "25m_override_total": 15779.52,
      "25m_override_increase": 1102.26
    },
    {
      "#": "1080 Beacon St, Condo 2B (009B-10-08)",
      $: 722900,
      owner1: "Zhang",
      owner2: "Lu",
      current_taxes: 3767.56,
      "18m_override_total": 3971.38,
      "18m_override_increase": 203.82,
      "25m_override_total": 4050.5,
      "25m_override_increase": 282.94
    },
    {
      "#": "1080 Beacon St, Condo 2C (009B-10-09)",
      $: 563400,
      owner1: "He",
      owner2: "Xu",
      current_taxes: 5769.22,
      "18m_override_total": 6081.33,
      "18m_override_increase": 312.11,
      "25m_override_total": 6202.49,
      "25m_override_increase": 433.27
    },
    {
      "#": "1080 Beacon St, Condo 2D (009B-10-10)",
      $: 807200,
      owner1: "Nelson",
      owner2: "Stern",
      current_taxes: 4630.79,
      "18m_override_total": 4881.32,
      "18m_override_increase": 250.53,
      "25m_override_total": 4978.56,
      "25m_override_increase": 347.77
    },
    {
      "#": "1080 Beacon St, Condo 3A (009B-10-11)",
      $: 824300,
      owner1: "Cardozo",
      owner2: "",
      current_taxes: 8440.83,
      "18m_override_total": 8897.48,
      "18m_override_increase": 456.65,
      "25m_override_total": 9074.74,
      "25m_override_increase": 633.91
    },
    {
      "#": "1080 Beacon St, Condo 3B (009B-10-12)",
      $: 973200,
      owner1: "Anghelescu",
      owner2: "",
      current_taxes: 9965.57,
      "18m_override_total": 10504.71,
      "18m_override_increase": 539.14,
      "25m_override_total": 10713.98,
      "25m_override_increase": 748.41
    },
    {
      "#": "1080 Beacon St, Condo 3C (009B-10-13)",
      $: 73e4,
      owner1: "Bajic",
      owner2: "",
      current_taxes: 7475.2,
      "18m_override_total": 7879.61,
      "18m_override_increase": 404.41,
      "25m_override_total": 8036.59,
      "25m_override_increase": 561.39
    },
    {
      "#": "1080 Beacon St, Condo 3D (009B-10-14)",
      $: 575200,
      owner1: "Noiman",
      owner2: "",
      current_taxes: 5890.05,
      "18m_override_total": 6208.7,
      "18m_override_increase": 318.65,
      "25m_override_total": 6332.39,
      "25m_override_increase": 442.34
    },
    {
      "#": "1080 Beacon St, Condo 3E (009B-10-15)",
      $: 809900,
      owner1: "Levitt",
      owner2: "",
      current_taxes: 4658.44,
      "18m_override_total": 4910.46,
      "18m_override_increase": 252.02,
      "25m_override_total": 5008.29,
      "25m_override_increase": 349.85
    },
    {
      "#": "1080 Beacon St, Condo 4A (009B-10-16)",
      $: 819e3,
      owner1: "Benade",
      owner2: "",
      current_taxes: 4751.63,
      "18m_override_total": 5008.69,
      "18m_override_increase": 257.06,
      "25m_override_total": 5108.48,
      "25m_override_increase": 356.85
    },
    {
      "#": "1080 Beacon St, Condo 4B (009B-10-17)",
      $: 1040700,
      owner1: "Nathan",
      owner2: "Tarantal",
      current_taxes: 7021.83,
      "18m_override_total": 7401.71,
      "18m_override_increase": 379.88,
      "25m_override_total": 7549.17,
      "25m_override_increase": 527.34
    },
    {
      "#": "1080 Beacon St, Condo 4C (009B-10-18)",
      $: 729100,
      owner1: "Walker",
      owner2: "",
      current_taxes: 3831.05,
      "18m_override_total": 4038.31,
      "18m_override_increase": 207.26,
      "25m_override_total": 4118.76,
      "25m_override_increase": 287.71
    },
    {
      "#": "1080 Beacon St, Condo 4D (009B-10-19)",
      $: 556600,
      owner1: "Otten",
      owner2: "",
      current_taxes: 5699.58,
      "18m_override_total": 6007.93,
      "18m_override_increase": 308.35,
      "25m_override_total": 6127.62,
      "25m_override_increase": 428.04
    },
    {
      "#": "1080 Beacon St, Condo 4E (009B-10-20)",
      $: 789800,
      owner1: "Leikhim",
      owner2: "",
      current_taxes: 4452.62,
      "18m_override_total": 4693.51,
      "18m_override_increase": 240.89,
      "25m_override_total": 4787.01,
      "25m_override_increase": 334.39
    },
    {
      "#": "1080 Beacon St, Condo 5A (009B-10-21)",
      $: 831800,
      owner1: "Schorge",
      owner2: "",
      current_taxes: 8517.63,
      "18m_override_total": 8978.43,
      "18m_override_increase": 460.8,
      "25m_override_total": 9157.3,
      "25m_override_increase": 639.67
    },
    {
      "#": "1080 Beacon St, Condo 5B (009B-10-22)",
      $: 1039500,
      owner1: "Tempero",
      owner2: "",
      current_taxes: 7009.55,
      "18m_override_total": 7388.77,
      "18m_override_increase": 379.22,
      "25m_override_total": 7535.97,
      "25m_override_increase": 526.42
    },
    {
      "#": "1080 Beacon St, Condo 5C (009B-10-23)",
      $: 761200,
      owner1: "Chang Trs",
      owner2: "",
      current_taxes: 7794.69,
      "18m_override_total": 8216.38,
      "18m_override_increase": 421.69,
      "25m_override_total": 8380.07,
      "25m_override_increase": 585.38
    },
    {
      "#": "1080 Beacon St, Condo 5D (009B-10-24)",
      $: 703700,
      owner1: "Chu",
      owner2: "",
      current_taxes: 3570.95,
      "18m_override_total": 3764.14,
      "18m_override_increase": 193.19,
      "25m_override_total": 3839.13,
      "25m_override_increase": 268.18
    },
    {
      "#": "1080 Beacon St, Condo 5E (009B-10-25)",
      $: 811500,
      owner1: "Dequeant",
      owner2: "",
      current_taxes: 8309.76,
      "18m_override_total": 8759.32,
      "18m_override_increase": 449.56,
      "25m_override_total": 8933.82,
      "25m_override_increase": 624.06
    },
    {
      "#": "1080 Beacon St, Condo 6A (009B-10-26)",
      $: 2008600,
      owner1: "Lyons Tr",
      owner2: "",
      current_taxes: 20568.06,
      "18m_override_total": 21680.79,
      "18m_override_increase": 1112.73,
      "25m_override_total": 22112.72,
      "25m_override_increase": 1544.66
    },
    {
      "#": "1080 Beacon St, Condo 6B (009B-10-27)",
      $: 841600,
      owner1: "Sullivan",
      owner2: "",
      current_taxes: 8617.98,
      "18m_override_total": 9084.21,
      "18m_override_increase": 466.23,
      "25m_override_total": 9265.19,
      "25m_override_increase": 647.21
    },
    {
      "#": "1080 Beacon St, Condo 6C (009B-10-28)",
      $: 635200,
      owner1: "Sullivan",
      owner2: "",
      current_taxes: 6504.45,
      "18m_override_total": 6856.34,
      "18m_override_increase": 351.89,
      "25m_override_total": 6992.93,
      "25m_override_increase": 488.48
    },
    {
      "#": "1080 Beacon St, Condo 6D (009B-10-29)",
      $: 802600,
      owner1: "Walsh Stevenson",
      owner2: "",
      current_taxes: 4583.69,
      "18m_override_total": 4831.67,
      "18m_override_increase": 247.98,
      "25m_override_total": 4927.93,
      "25m_override_increase": 344.24
    },
    {
      "#": "1080 Beacon St, Condo G1B1 (009B-10-30)",
      $: 670300,
      owner1: "Felling",
      owner2: "C/O Capitol Realty Group",
      current_taxes: 6863.87,
      "18m_override_total": 7235.21,
      "18m_override_increase": 371.34,
      "25m_override_total": 7379.35,
      "25m_override_increase": 515.48
    },
    {
      "#": "1080 Beacon St, Condo G2B2 (009B-10-01)",
      $: 845500,
      owner1: "Moraes",
      owner2: "",
      current_taxes: 5022.99,
      "18m_override_total": 5294.73,
      "18m_override_increase": 271.74,
      "25m_override_total": 5400.22,
      "25m_override_increase": 377.23
    },
    {
      "#": "1080 Beacon St, Condo G3B3 (009B-10-02)",
      $: 588400,
      owner1: "Argilagos",
      owner2: "Bruett",
      current_taxes: 6025.22,
      "18m_override_total": 6351.18,
      "18m_override_increase": 325.96,
      "25m_override_total": 6477.71,
      "25m_override_increase": 452.49
    },
    {
      "#": "1090 Beacon St (009B-11-00)",
      $: 8425200,
      owner1: "Amory Gardens Realty Llc",
      owner2: "C/O Garrett And Jesse Christopher",
      current_taxes: 86274.05,
      "18m_override_total": 90941.48,
      "18m_override_increase": 4667.43,
      "25m_override_total": 92753.23,
      "25m_override_increase": 6479.18
    },
    {
      "#": "1100 Beacon St (009B-12-00)",
      $: 8955e3,
      owner1: "Amory Gardens Realty Llc",
      owner2: "C/O Garrett And Jesse Christopher",
      current_taxes: 91699.2,
      "18m_override_total": 96660.13,
      "18m_override_increase": 4960.93,
      "25m_override_total": 98585.81,
      "25m_override_increase": 6886.61
    },
    {
      "#": "1110 Beacon St (009B-13-00)",
      $: 7935700,
      owner1: "1110-1120 Beacon Street Llc",
      owner2: "C/O Dannin Management Corp",
      current_taxes: 81261.57,
      "18m_override_total": 85657.82,
      "18m_override_increase": 4396.25,
      "25m_override_total": 87364.31,
      "25m_override_increase": 6102.74
    },
    {
      "#": "1120 Beacon St (009B-14-00)",
      $: 9659200,
      owner1: "1110-1120 Beacon Street Llc",
      owner2: "C/O Dannin Management Corp",
      current_taxes: 98910.21,
      "18m_override_total": 104261.25,
      "18m_override_increase": 5351.04,
      "25m_override_total": 106338.37,
      "25m_override_increase": 7428.16
    },
    {
      "#": "1122 Beacon St (009-03-00)",
      $: 1966800,
      owner1: "Town Of Brookline",
      owner2: "C/O Halls Pond",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "1126 Beacon St, Condo 1 (010-01-02)",
      $: 1850700,
      owner1: "Herman",
      owner2: "",
      current_taxes: 15316.23,
      "18m_override_total": 16144.84,
      "18m_override_increase": 828.61,
      "25m_override_total": 16466.48,
      "25m_override_increase": 1150.25
    },
    {
      "#": "1126 Beacon St, Condo 2 & P1-2 (010-01-03)",
      $: 1979600,
      owner1: "Swartz",
      owner2: "",
      current_taxes: 16636.17,
      "18m_override_total": 17536.19,
      "18m_override_increase": 900.02,
      "25m_override_total": 17885.55,
      "25m_override_increase": 1249.38
    },
    {
      "#": "1126 Beacon St, Condo P3 (010-01-04)",
      $: 51600,
      owner1: "Schorge",
      owner2: "",
      current_taxes: 528.38,
      "18m_override_total": 556.97,
      "18m_override_increase": 28.59,
      "25m_override_total": 568.06,
      "25m_override_increase": 39.68
    },
    {
      "#": "1126 Beacon St, Condo P4 (010-01-05)",
      $: 51600,
      owner1: "Tempero",
      owner2: "",
      current_taxes: 528.38,
      "18m_override_total": 556.97,
      "18m_override_increase": 28.59,
      "25m_override_total": 568.06,
      "25m_override_increase": 39.68
    },
    {
      "#": "1126 Beacon St, Condo P5 (010-01-06)",
      $: 52300,
      owner1: "Haselwandter Tr",
      owner2: "",
      current_taxes: 535.55,
      "18m_override_total": 564.52,
      "18m_override_increase": 28.97,
      "25m_override_total": 575.77,
      "25m_override_increase": 40.22
    },
    {
      "#": "1128 Beacon St (010-01-01)",
      $: 2786e3,
      owner1: "Hagopian Trs",
      owner2: "Sarkissian",
      current_taxes: 24893.71,
      "18m_override_total": 26240.46,
      "18m_override_increase": 1346.75,
      "25m_override_total": 26763.23,
      "25m_override_increase": 1869.52
    },
    {
      "#": "1140 Beacon St, Condo 101 G19-20-21 (010-02-05)",
      $: 3375800,
      owner1: "Axelrod",
      owner2: "Marks",
      current_taxes: 30933.26,
      "18m_override_total": 32606.75,
      "18m_override_increase": 1673.49,
      "25m_override_total": 33256.35,
      "25m_override_increase": 2323.09
    },
    {
      "#": "1140 Beacon St, Condo 102 G13-14 (010-02-06)",
      $: 2769600,
      owner1: "Lucas",
      owner2: "",
      current_taxes: 24725.77,
      "18m_override_total": 26063.43,
      "18m_override_increase": 1337.66,
      "25m_override_total": 26582.68,
      "25m_override_increase": 1856.91
    },
    {
      "#": "1140 Beacon St, Condo 103 &G3-G4 (010-02-07)",
      $: 2417e3,
      owner1: "Levy Tr",
      owner2: "",
      current_taxes: 21115.15,
      "18m_override_total": 22257.48,
      "18m_override_increase": 1142.33,
      "25m_override_total": 22700.9,
      "25m_override_increase": 1585.75
    },
    {
      "#": "1140 Beacon St, Condo 104 & G1-2 (010-02-08)",
      $: 2907300,
      owner1: "Wong Trs",
      owner2: "Kubo",
      current_taxes: 29770.75,
      "18m_override_total": 31381.35,
      "18m_override_increase": 1610.6,
      "25m_override_total": 32006.53,
      "25m_override_increase": 2235.78
    },
    {
      "#": "1140 Beacon St, Condo 105 G9-10-27 (010-02-09)",
      $: 3675900,
      owner1: "Cohen",
      owner2: "",
      current_taxes: 37641.22,
      "18m_override_total": 39677.61,
      "18m_override_increase": 2036.39,
      "25m_override_total": 40468.08,
      "25m_override_increase": 2826.86
    },
    {
      "#": "1140 Beacon St, Condo 201 G23&24 (010-02-10)",
      $: 3091500,
      owner1: "Landay Life Estate",
      owner2: "",
      current_taxes: 31656.96,
      "18m_override_total": 33369.6,
      "18m_override_increase": 1712.64,
      "25m_override_total": 34034.4,
      "25m_override_increase": 2377.44
    },
    {
      "#": "1140 Beacon St, Condo 202 G15-16 (010-02-11)",
      $: 2793100,
      owner1: "Ullian",
      owner2: "",
      current_taxes: 24966.41,
      "18m_override_total": 26317.09,
      "18m_override_increase": 1350.68,
      "25m_override_total": 26841.39,
      "25m_override_increase": 1874.98
    },
    {
      "#": "1140 Beacon St, Condo 203 G5-6 (010-02-12)",
      $: 3088e3,
      owner1: "Harrington Trs",
      owner2: "",
      current_taxes: 27986.19,
      "18m_override_total": 29500.24,
      "18m_override_increase": 1514.05,
      "25m_override_total": 30087.95,
      "25m_override_increase": 2101.76
    },
    {
      "#": "1140 Beacon St, Condo 204 G30&31 (010-02-13)",
      $: 2842300,
      owner1: "Suryamega, Tr",
      owner2: "",
      current_taxes: 29105.15,
      "18m_override_total": 30679.74,
      "18m_override_increase": 1574.59,
      "25m_override_total": 31290.95,
      "25m_override_increase": 2185.8
    },
    {
      "#": "1140 Beacon St, Condo 301 & 3 G (010-02-14)",
      $: 3173200,
      owner1: "Tovar, Tr",
      owner2: "",
      current_taxes: 32493.57,
      "18m_override_total": 34251.47,
      "18m_override_increase": 1757.9,
      "25m_override_total": 34933.84,
      "25m_override_increase": 2440.27
    },
    {
      "#": "1140 Beacon St, Condo 302 G25&26 (010-02-15)",
      $: 2791100,
      owner1: "Cohen Tr",
      owner2: "",
      current_taxes: 28580.86,
      "18m_override_total": 30127.08,
      "18m_override_increase": 1546.22,
      "25m_override_total": 30727.28,
      "25m_override_increase": 2146.42
    },
    {
      "#": "1140 Beacon St, Condo 303 G11&12 (010-02-16)",
      $: 3149500,
      owner1: "Glazman",
      owner2: "Roytberg",
      current_taxes: 28615.95,
      "18m_override_total": 30164.07,
      "18m_override_increase": 1548.12,
      "25m_override_total": 30765.01,
      "25m_override_increase": 2149.06
    },
    {
      "#": "1140 Beacon St, Condo 304  G7-8 (010-02-17)",
      $: 2998500,
      owner1: "Tanashian Trs",
      owner2: "",
      current_taxes: 30704.64,
      "18m_override_total": 32365.76,
      "18m_override_increase": 1661.12,
      "25m_override_total": 33010.56,
      "25m_override_increase": 2305.92
    },
    {
      "#": "1140 Beacon St, Condo 305 G28-29 (010-02-18)",
      $: 2852600,
      owner1: "Olstein",
      owner2: "",
      current_taxes: 25575.69,
      "18m_override_total": 26959.33,
      "18m_override_increase": 1383.64,
      "25m_override_total": 27496.42,
      "25m_override_increase": 1920.73
    },
    {
      "#": "1160 Beacon St, Condo 101 & 4 Pk (011-01-06)",
      $: 3139600,
      owner1: "Modigliani",
      owner2: "",
      current_taxes: 28514.57,
      "18m_override_total": 30057.21,
      "18m_override_increase": 1542.64,
      "25m_override_total": 30656.01,
      "25m_override_increase": 2141.44
    },
    {
      "#": "1160 Beacon St, Condo 102&G18&24 (011-01-07)",
      $: 2366500,
      owner1: "Rosenthal Tr",
      owner2: "C/O Northern Trust Attn Sharon Cohen",
      current_taxes: 24232.96,
      "18m_override_total": 25543.96,
      "18m_override_increase": 1311,
      "25m_override_total": 26052.86,
      "25m_override_increase": 1819.9
    },
    {
      "#": "1160 Beacon St, Condo 103 P3&12 (011-01-08)",
      $: 1854300,
      owner1: "Chinman, Trs",
      owner2: "",
      current_taxes: 15353.1,
      "18m_override_total": 16183.7,
      "18m_override_increase": 830.6,
      "25m_override_total": 16506.12,
      "25m_override_increase": 1153.02
    },
    {
      "#": "1160 Beacon St, Condo 104 P7&17 (011-01-09)",
      $: 2047200,
      owner1: "Lipsett",
      owner2: "",
      current_taxes: 17328.39,
      "18m_override_total": 18265.86,
      "18m_override_increase": 937.47,
      "25m_override_total": 18629.75,
      "25m_override_increase": 1301.36
    },
    {
      "#": "1160 Beacon St, Condo 201 P5-25 (011-01-10)",
      $: 2833e3,
      owner1: "Grossman Trs",
      owner2: "",
      current_taxes: 29009.92,
      "18m_override_total": 30579.36,
      "18m_override_increase": 1569.44,
      "25m_override_total": 31188.56,
      "25m_override_increase": 2178.64
    },
    {
      "#": "1160 Beacon St, Condo 202 & P15 (011-01-11)",
      $: 2301700,
      owner1: "Hagopian",
      owner2: "Messina",
      current_taxes: 23569.41,
      "18m_override_total": 24844.52,
      "18m_override_increase": 1275.11,
      "25m_override_total": 25339.47,
      "25m_override_increase": 1770.06
    },
    {
      "#": "1160 Beacon St, Condo 203 & P2 (011-01-12)",
      $: 1794700,
      owner1: "Sokoloff Trs",
      owner2: "",
      current_taxes: 18377.73,
      "18m_override_total": 19371.97,
      "18m_override_increase": 994.24,
      "25m_override_total": 19757.9,
      "25m_override_increase": 1380.17
    },
    {
      "#": "1160 Beacon St, Condo 204 & P19 (011-01-13)",
      $: 1947700,
      owner1: "Assarat",
      owner2: "",
      current_taxes: 19944.45,
      "18m_override_total": 21023.44,
      "18m_override_increase": 1078.99,
      "25m_override_total": 21442.28,
      "25m_override_increase": 1497.83
    },
    {
      "#": "1160 Beacon St, Condo 205 & P14 (011-01-14)",
      $: 2592500,
      owner1: "Harmony Amory Llc",
      owner2: "",
      current_taxes: 26547.2,
      "18m_override_total": 27983.4,
      "18m_override_increase": 1436.2,
      "25m_override_total": 28540.89,
      "25m_override_increase": 1993.69
    },
    {
      "#": "1160 Beacon St, Condo 301 P21&22 (011-01-15)",
      $: 2847500,
      owner1: "Freishtat Trs",
      owner2: "",
      current_taxes: 29158.4,
      "18m_override_total": 30735.87,
      "18m_override_increase": 1577.47,
      "25m_override_total": 31348.2,
      "25m_override_increase": 2189.8
    },
    {
      "#": "1160 Beacon St, Condo 302 & P4 (011-01-16)",
      $: 2289100,
      owner1: "Gittinger",
      owner2: "",
      current_taxes: 19805.45,
      "18m_override_total": 20876.92,
      "18m_override_increase": 1071.47,
      "25m_override_total": 21292.84,
      "25m_override_increase": 1487.39
    },
    {
      "#": "1160 Beacon St, Condo 303 G6&13 (011-01-17)",
      $: 3499300,
      owner1: "Caplan Tr",
      owner2: "",
      current_taxes: 32197.9,
      "18m_override_total": 33939.81,
      "18m_override_increase": 1741.91,
      "25m_override_total": 34615.96,
      "25m_override_increase": 2418.06
    },
    {
      "#": "1160 Beacon St, Condo 304 P20&23 (011-01-18)",
      $: 2700900,
      owner1: "Nemzoff Berman Tr",
      owner2: "",
      current_taxes: 24022.28,
      "18m_override_total": 25321.89,
      "18m_override_increase": 1299.61,
      "25m_override_total": 25826.35,
      "25m_override_increase": 1804.07
    },
    {
      "#": "1160 Beacon St, Condo Pha P10&11 (011-01-19)",
      $: 2976600,
      owner1: "Benson Tr",
      owner2: "",
      current_taxes: 26845.45,
      "18m_override_total": 28297.79,
      "18m_override_increase": 1452.34,
      "25m_override_total": 28861.54,
      "25m_override_increase": 2016.09
    },
    {
      "#": "1160 Beacon St, Condo Phb P8&9 (011-01-20)",
      $: 3217100,
      owner1: "Ungerleider",
      owner2: "",
      current_taxes: 29308.17,
      "18m_override_total": 30893.74,
      "18m_override_increase": 1585.57,
      "25m_override_total": 31509.21,
      "25m_override_increase": 2201.04
    },
    {
      "#": "1170 Beacon St, Condo Office (011-01-05)",
      $: 3148e3,
      owner1: "Brookline Property  Management",
      owner2: "",
      current_taxes: 54019.68,
      "18m_override_total": 56942.14,
      "18m_override_increase": 2922.46,
      "25m_override_total": 58076.56,
      "25m_override_increase": 4056.88
    },
    {
      "#": "67 Carlton St, Condo 1 & P1 (001-15-04)",
      $: 1292300,
      owner1: "Toy",
      owner2: "",
      current_taxes: 13233.15,
      "18m_override_total": 13949.06,
      "18m_override_increase": 715.91,
      "25m_override_total": 14226.96,
      "25m_override_increase": 993.81
    },
    {
      "#": "67 Carlton St, Condo 2 & P2 (001-15-01)",
      $: 1317700,
      owner1: "Peak",
      owner2: "Arai",
      current_taxes: 9858.31,
      "18m_override_total": 10391.64,
      "18m_override_increase": 533.33,
      "25m_override_total": 10598.67,
      "25m_override_increase": 740.36
    },
    {
      "#": "67 Carlton St, Condo 3 (001-15-02)",
      $: 1150500,
      owner1: "Stickells",
      owner2: "",
      current_taxes: 8146.19,
      "18m_override_total": 8586.9,
      "18m_override_increase": 440.71,
      "25m_override_total": 8757.97,
      "25m_override_increase": 611.78
    },
    {
      "#": "67 Carlton St, Condo 4 & P4-P5 (001-15-03)",
      $: 1149400,
      owner1: "Stickells",
      owner2: "",
      current_taxes: 11769.86,
      "18m_override_total": 12406.61,
      "18m_override_increase": 636.75,
      "25m_override_total": 12653.78,
      "25m_override_increase": 883.92
    },
    {
      "#": "71 Carlton St (001-16-00)",
      $: 2881100,
      owner1: "Warren",
      owner2: "Evenson",
      current_taxes: 25867.53,
      "18m_override_total": 27266.96,
      "18m_override_increase": 1399.43,
      "25m_override_total": 27810.18,
      "25m_override_increase": 1942.65
    },
    {
      "#": "79 Carlton St (001-17-00)",
      $: 4464e3,
      owner1: "Ericsson",
      owner2: "",
      current_taxes: 42076.43,
      "18m_override_total": 44352.76,
      "18m_override_increase": 2276.33,
      "25m_override_total": 45236.37,
      "25m_override_increase": 3159.94
    },
    {
      "#": "82 Carlton St (009A-07-00)",
      $: 4131500,
      owner1: "Mazandi-Iseke, Et Al",
      owner2: "",
      current_taxes: 38671.63,
      "18m_override_total": 40763.77,
      "18m_override_increase": 2092.14,
      "25m_override_total": 41575.87,
      "25m_override_increase": 2904.24
    },
    {
      "#": "89 Carlton St (001-18-00)",
      $: 3985e3,
      owner1: "Kanes",
      owner2: "Moore",
      current_taxes: 37171.47,
      "18m_override_total": 39182.45,
      "18m_override_increase": 2010.98,
      "25m_override_total": 39963.05,
      "25m_override_increase": 2791.58
    },
    {
      "#": "90 Carlton St (009A-06-00)",
      $: 3575900,
      owner1: "Higgins",
      owner2: "Kane",
      current_taxes: 32982.28,
      "18m_override_total": 34766.62,
      "18m_override_increase": 1784.34,
      "25m_override_total": 35459.25,
      "25m_override_increase": 2476.97
    },
    {
      "#": "95 Carlton St (001-19-00)",
      $: 5709e3,
      owner1: "Tempel",
      owner2: "Wilson",
      current_taxes: 54825.23,
      "18m_override_total": 57791.27,
      "18m_override_increase": 2966.04,
      "25m_override_total": 58942.6,
      "25m_override_increase": 4117.37
    },
    {
      "#": "98 Carlton St (009A-05-00)",
      $: 5259900,
      owner1: "Chaudhuri",
      owner2: "",
      current_taxes: 50226.44,
      "18m_override_total": 52943.69,
      "18m_override_increase": 2717.25,
      "25m_override_total": 53998.45,
      "25m_override_increase": 3772.01
    },
    {
      "#": "111 Carlton St (002-06-00)",
      $: 3877e3,
      owner1: "Sulak",
      owner2: "",
      current_taxes: 36065.55,
      "18m_override_total": 38016.7,
      "18m_override_increase": 1951.15,
      "25m_override_total": 38774.07,
      "25m_override_increase": 2708.52
    },
    {
      "#": "121 Carlton St (002-07-00)",
      $: 3907600,
      owner1: "Rdf Corporation",
      owner2: "",
      current_taxes: 40013.82,
      "18m_override_total": 42178.57,
      "18m_override_increase": 2164.75,
      "25m_override_total": 43018.86,
      "25m_override_increase": 3005.04
    },
    {
      "#": "122 Carlton St (003-05-00)",
      $: 3126e3,
      owner1: "Bogoch",
      owner2: "",
      current_taxes: 32010.24,
      "18m_override_total": 33741.99,
      "18m_override_increase": 1731.75,
      "25m_override_total": 34414.21,
      "25m_override_increase": 2403.97
    },
    {
      "#": "131 Carlton St (005-15-00)",
      $: 5217300,
      owner1: "Lieberman",
      owner2: "",
      current_taxes: 49790.22,
      "18m_override_total": 52483.87,
      "18m_override_increase": 2693.65,
      "25m_override_total": 53529.47,
      "25m_override_increase": 3739.25
    },
    {
      "#": "132 Carlton St (004-04-00)",
      $: 4633200,
      owner1: "Ledbetter",
      owner2: "",
      current_taxes: 43809.03,
      "18m_override_total": 46179.1,
      "18m_override_increase": 2370.07,
      "25m_override_total": 47099.09,
      "25m_override_increase": 3290.06
    },
    {
      "#": "141 Carlton St (005-01-00)",
      $: 4523700,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "146 Carlton St (004-03-00)",
      $: 2485800,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 25454.59,
      "18m_override_total": 26831.68,
      "18m_override_increase": 1377.09,
      "25m_override_total": 27366.23,
      "25m_override_increase": 1911.64
    },
    {
      "#": "6 Chilton St (009-07-00)",
      $: 4998800,
      owner1: "Kotler Tr",
      owner2: "",
      current_taxes: 47552.78,
      "18m_override_total": 50125.39,
      "18m_override_increase": 2572.61,
      "25m_override_total": 51123.99,
      "25m_override_increase": 3571.21
    },
    {
      "#": "7 Chilton St (009A-01-00)",
      $: 3326700,
      owner1: "Chasen",
      owner2: "",
      current_taxes: 30430.47,
      "18m_override_total": 32076.76,
      "18m_override_increase": 1646.29,
      "25m_override_total": 32715.8,
      "25m_override_increase": 2285.33
    },
    {
      "#": "15 Chilton St (009A-02-00)",
      $: 3410100,
      owner1: "Sanders",
      owner2: "",
      current_taxes: 31284.49,
      "18m_override_total": 32976.98,
      "18m_override_increase": 1692.49,
      "25m_override_total": 33633.96,
      "25m_override_increase": 2349.47
    },
    {
      "#": "16 Chilton St (009-06-00)",
      $: 501e4,
      owner1: "Moghtader",
      owner2: "",
      current_taxes: 47667.47,
      "18m_override_total": 50246.28,
      "18m_override_increase": 2578.81,
      "25m_override_total": 51247.3,
      "25m_override_increase": 3579.83
    },
    {
      "#": "21 Chilton St (009A-03-00)",
      $: 4210900,
      owner1: "Volpe Trs",
      owner2: "",
      current_taxes: 39484.68,
      "18m_override_total": 41620.8,
      "18m_override_increase": 2136.12,
      "25m_override_total": 42449.98,
      "25m_override_increase": 2965.3
    },
    {
      "#": "26 Chilton St (009-04-05)",
      $: 5208500,
      owner1: "Bae Trs",
      owner2: "Kwak Trs",
      current_taxes: 49700.11,
      "18m_override_total": 52388.89,
      "18m_override_increase": 2688.78,
      "25m_override_total": 53432.59,
      "25m_override_increase": 3732.48
    },
    {
      "#": "27 Chilton St (009A-04-00)",
      $: 3849200,
      owner1: "Arnstein",
      owner2: "",
      current_taxes: 35780.87,
      "18m_override_total": 37716.62,
      "18m_override_increase": 1935.75,
      "25m_override_total": 38468.01,
      "25m_override_increase": 2687.14
    },
    {
      "#": "6 Churchill St (009B-06-00)",
      $: 3015200,
      owner1: "Weiner Tr",
      owner2: "",
      current_taxes: 27240.71,
      "18m_override_total": 28714.43,
      "18m_override_increase": 1473.72,
      "25m_override_total": 29286.49,
      "25m_override_increase": 2045.78
    },
    {
      "#": "12 Churchill St (009B-05-00)",
      $: 3070100,
      owner1: "Dreyer Trs",
      owner2: "Cutler",
      current_taxes: 27802.89,
      "18m_override_total": 29307.03,
      "18m_override_increase": 1504.14,
      "25m_override_total": 29890.89,
      "25m_override_increase": 2088
    },
    {
      "#": "18 Churchill St (009B-04-00)",
      $: 2571900,
      owner1: "Kwan",
      owner2: "Moulton",
      current_taxes: 22701.32,
      "18m_override_total": 23929.46,
      "18m_override_increase": 1228.14,
      "25m_override_total": 24406.19,
      "25m_override_increase": 1704.87
    },
    {
      "#": "24 Churchill St (009B-03-00)",
      $: 2152800,
      owner1: "Resler",
      owner2: "Lutcavage",
      current_taxes: 18409.74,
      "18m_override_total": 19405.71,
      "18m_override_increase": 995.97,
      "25m_override_total": 19792.31,
      "25m_override_increase": 1382.57
    },
    {
      "#": "30 Churchill St (009B-01-00)",
      $: 2607300,
      owner1: "Christopher, Tr",
      owner2: "C/O Garrett Or Jesse Christopher ",
      current_taxes: 26698.75,
      "18m_override_total": 28143.15,
      "18m_override_increase": 1444.4,
      "25m_override_total": 28703.83,
      "25m_override_increase": 2005.08
    },
    {
      "#": "730 Commonwealth Ave (007-05-09)",
      $: 56994600,
      owner1: "Trustees Of Boston University",
      owner2: "",
      current_taxes: 78242.53,
      "18m_override_total": 82475.45,
      "18m_override_increase": 4232.92,
      "25m_override_total": 84118.54,
      "25m_override_increase": 5876.01
    },
    {
      "#": "808 Commonwealth Ave (017-01-00)",
      $: 57203200,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "820 Commonwealth Ave (017-02-07)",
      $: 59140800,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "830 Commonwealth Ave (017-03-00)",
      $: 7938500,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 68112.33,
      "18m_override_total": 71797.21,
      "18m_override_increase": 3684.88,
      "25m_override_total": 73227.57,
      "25m_override_increase": 5115.24
    },
    {
      "#": "850 Commonwealth Ave (017-04-00)",
      $: 3111600,
      owner1: "Heraiki",
      owner2: "",
      current_taxes: 53395.06,
      "18m_override_total": 56283.73,
      "18m_override_increase": 2888.67,
      "25m_override_total": 57405.03,
      "25m_override_increase": 4009.97
    },
    {
      "#": "860 Commonwealth Ave (018-04-05)",
      $: 20702200,
      owner1: "Grossman",
      owner2: "C/O The Grossman Companies",
      current_taxes: 355249.75,
      "18m_override_total": 374468.76,
      "18m_override_increase": 19219.01,
      "25m_override_total": 381929.01,
      "25m_override_increase": 26679.26
    },
    {
      "#": "874 Commonwealth Ave (018-03-00)",
      $: 14574500,
      owner1: "290 Mcclellan Highway Llc",
      owner2: "",
      current_taxes: 250098.42,
      "18m_override_total": 263628.74,
      "18m_override_increase": 13530.32,
      "25m_override_total": 268880.81,
      "25m_override_increase": 18782.39
    },
    {
      "#": "882 Commonwealth Ave (018-02-00)",
      $: 30324200,
      owner1: "Trustees Of Boston University",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 125912.19,
      "18m_override_total": 132724.04,
      "18m_override_increase": 6811.85,
      "25m_override_total": 135368.2,
      "25m_override_increase": 9456.01
    },
    {
      "#": "890 Commonwealth Ave (018-01-00)",
      $: 17613e3,
      owner1: "Trustees Of Boston University",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "900 Commonwealth Ave (019-01-00)",
      $: 27830300,
      owner1: "Howe Tr",
      owner2: "C/O Sis Property Management",
      current_taxes: 76380.81,
      "18m_override_total": 80513.01,
      "18m_override_increase": 4132.2,
      "25m_override_total": 82117.01,
      "25m_override_increase": 5736.2
    },
    {
      "#": "910 Commonwealth Ave (019-10-00)",
      $: 7511800,
      owner1: "Trustees Of Boston University",
      owner2: "C/O General Accounting 4Th Fl",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "916 Commonwealth Ave (019-08-09)",
      $: 16259600,
      owner1: "Howe Tr",
      owner2: "C/O Sis Property Management",
      current_taxes: 242817.07,
      "18m_override_total": 255953.47,
      "18m_override_increase": 13136.4,
      "25m_override_total": 261052.63,
      "25m_override_increase": 18235.56
    },
    {
      "#": "928 Commonwealth Ave (019-07-00)",
      $: 14069300,
      owner1: "Trustees Of Boston University",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "930 Commonwealth Ave (019-05-12)",
      $: 48318400,
      owner1: "Howe Tr",
      owner2: "C/O Sis Property Management",
      current_taxes: 82734.54,
      "18m_override_total": 87210.48,
      "18m_override_increase": 4475.94,
      "25m_override_total": 88947.9,
      "25m_override_increase": 6213.36
    },
    {
      "#": " Commonwealth Ave (007-01-00)",
      $: 54955900,
      owner1: "Commonwealth Of Massachusetts",
      owner2: "C/O Mass Turnpike Authority",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "10 Cottage Farm Rd (012-05-01)",
      $: 7319300,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 74949.63,
      "18m_override_total": 79004.4,
      "18m_override_increase": 4054.77,
      "25m_override_total": 80578.35,
      "25m_override_increase": 5628.72
    },
    {
      "#": "24 Cottage Farm Rd (012-05-00)",
      $: 10131600,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 103747.58,
      "18m_override_total": 109360.32,
      "18m_override_increase": 5612.74,
      "25m_override_total": 111539.02,
      "25m_override_increase": 7791.44
    },
    {
      "#": "43 Cottage Farm Rd (015-01-00)",
      $: 4406700,
      owner1: "Sheldon Trs",
      owner2: "",
      current_taxes: 41489.67,
      "18m_override_total": 43734.26,
      "18m_override_increase": 2244.59,
      "25m_override_total": 44605.54,
      "25m_override_increase": 3115.87
    },
    {
      "#": "51 Cottage Farm Rd (015-02-00)",
      $: 2533e3,
      owner1: "Olafsson  Life Estate",
      owner2: "",
      current_taxes: 22302.99,
      "18m_override_total": 23509.58,
      "18m_override_increase": 1206.59,
      "25m_override_total": 23977.94,
      "25m_override_increase": 1674.95
    },
    {
      "#": "54 Cottage Farm Rd (016-03-00)",
      $: 3176100,
      owner1: "Mufson Trs",
      owner2: "",
      current_taxes: 28888.33,
      "18m_override_total": 30451.19,
      "18m_override_increase": 1562.86,
      "25m_override_total": 31057.84,
      "25m_override_increase": 2169.51
    },
    {
      "#": "55 Cottage Farm Rd (015-02-01)",
      $: 2464900,
      owner1: "Pmu Realty Llc",
      owner2: "",
      current_taxes: 25240.58,
      "18m_override_total": 26606.1,
      "18m_override_increase": 1365.52,
      "25m_override_total": 27136.15,
      "25m_override_increase": 1895.57
    },
    {
      "#": "10 Dummer St (015-03-01)",
      $: 3211100,
      owner1: "10 Dummer Street Realty Llc",
      owner2: "",
      current_taxes: 32881.66,
      "18m_override_total": 34660.56,
      "18m_override_increase": 1778.9,
      "25m_override_total": 35351.07,
      "25m_override_increase": 2469.41
    },
    {
      "#": "14 Dummer St (015-03-00)",
      $: 2369e3,
      owner1: "Mab Community Services Inc",
      owner2: "",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "40 Dummer St (016-02-00)",
      $: 2015900,
      owner1: "Pazam Llc",
      owner2: "",
      current_taxes: 20642.82,
      "18m_override_total": 21759.6,
      "18m_override_increase": 1116.78,
      "25m_override_total": 22193.1,
      "25m_override_increase": 1550.28
    },
    {
      "#": "47 Dummer St (017-06-00)",
      $: 4425300,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 22781.44,
      "18m_override_total": 24013.92,
      "18m_override_increase": 1232.48,
      "25m_override_total": 24492.33,
      "25m_override_increase": 1710.89
    },
    {
      "#": "86 Dummer St (021-16-00)",
      $: 10295e3,
      owner1: "86 Dummer Llc",
      owner2: "C/O Brookline Housing Authority",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "115 Dummer St (019-02-00)",
      $: 5402200,
      owner1: "National Studios Llc",
      owner2: "",
      current_taxes: 92701.75,
      "18m_override_total": 97716.91,
      "18m_override_increase": 5015.16,
      "25m_override_total": 99663.65,
      "25m_override_increase": 6961.9
    },
    {
      "#": "121 Dummer St (019-11-00)",
      $: 8990400,
      owner1: "Culbert, Et Al Trs",
      owner2: "C/O Sis Property Management",
      current_taxes: 154275.26,
      "18m_override_total": 162621.55,
      "18m_override_increase": 8346.29,
      "25m_override_total": 165861.33,
      "25m_override_increase": 11586.07
    },
    {
      "#": "14 Egmont St, Condo A1-1 (022-05-01)",
      $: 1271200,
      owner1: "Pant",
      owner2: "",
      current_taxes: 9382.15,
      "18m_override_total": 9889.72,
      "18m_override_increase": 507.57,
      "25m_override_total": 10086.75,
      "25m_override_increase": 704.6
    },
    {
      "#": "14 Egmont St, Condo A1-2 (022-05-02)",
      $: 1305600,
      owner1: "Feith Tr",
      owner2: "",
      current_taxes: 9734.41,
      "18m_override_total": 10261.04,
      "18m_override_increase": 526.63,
      "25m_override_total": 10465.46,
      "25m_override_increase": 731.05
    },
    {
      "#": "14 Egmont St, Condo A1-3 (022-05-03)",
      $: 1832300,
      owner1: "Miller",
      owner2: "",
      current_taxes: 15127.82,
      "18m_override_total": 15946.24,
      "18m_override_increase": 818.42,
      "25m_override_total": 16263.92,
      "25m_override_increase": 1136.1
    },
    {
      "#": "14 Egmont St, Condo A2-1 (022-05-04)",
      $: 1170700,
      owner1: "Edelson",
      owner2: "",
      current_taxes: 8353.03,
      "18m_override_total": 8804.93,
      "18m_override_increase": 451.9,
      "25m_override_total": 8980.34,
      "25m_override_increase": 627.31
    },
    {
      "#": "14 Egmont St, Condo A2-2 (022-05-05)",
      $: 1259200,
      owner1: "Chowdhury",
      owner2: "",
      current_taxes: 12894.21,
      "18m_override_total": 13591.79,
      "18m_override_increase": 697.58,
      "25m_override_total": 13862.57,
      "25m_override_increase": 968.36
    },
    {
      "#": "14 Egmont St, Condo A2-3 (022-05-06)",
      $: 1261400,
      owner1: "Gilman",
      owner2: "",
      current_taxes: 9281.8,
      "18m_override_total": 9783.95,
      "18m_override_increase": 502.15,
      "25m_override_total": 9978.86,
      "25m_override_increase": 697.06
    },
    {
      "#": "20 Egmont St, Condo B1-1 (022-03-01)",
      $: 1212700,
      owner1: "Grinberg Tr",
      owner2: "",
      current_taxes: 8783.11,
      "18m_override_total": 9258.28,
      "18m_override_increase": 475.17,
      "25m_override_total": 9442.72,
      "25m_override_increase": 659.61
    },
    {
      "#": "20 Egmont St, Condo B1-2 (022-03-02)",
      $: 1224900,
      owner1: "Babadustov",
      owner2: "",
      current_taxes: 8908.04,
      "18m_override_total": 9389.96,
      "18m_override_increase": 481.92,
      "25m_override_total": 9577.03,
      "25m_override_increase": 668.99
    },
    {
      "#": "20 Egmont St, Condo B1-3 (022-03-03)",
      $: 1270700,
      owner1: "Han",
      owner2: "",
      current_taxes: 13011.97,
      "18m_override_total": 13715.92,
      "18m_override_increase": 703.95,
      "25m_override_total": 13989.17,
      "25m_override_increase": 977.2
    },
    {
      "#": "20 Egmont St, Condo B2-1 (022-03-04)",
      $: 1197e3,
      owner1: "Springer",
      owner2: "Brenner",
      current_taxes: 8622.35,
      "18m_override_total": 9088.82,
      "18m_override_increase": 466.47,
      "25m_override_total": 9269.89,
      "25m_override_increase": 647.54
    },
    {
      "#": "20 Egmont St, Condo B2-2 (022-03-05)",
      $: 1270700,
      owner1: "Dewinter Trs",
      owner2: "",
      current_taxes: 9377.03,
      "18m_override_total": 9884.33,
      "18m_override_increase": 507.3,
      "25m_override_total": 10081.24,
      "25m_override_increase": 704.21
    },
    {
      "#": "20 Egmont St, Condo B2-3 (022-03-06)",
      $: 1270700,
      owner1: "Desai",
      owner2: "Simmons",
      current_taxes: 9377.03,
      "18m_override_total": 9884.33,
      "18m_override_increase": 507.3,
      "25m_override_total": 10081.24,
      "25m_override_increase": 704.21
    },
    {
      "#": "26 Egmont St, Condo C1-1 (022-01-01)",
      $: 1242700,
      owner1: "Madva",
      owner2: "Mcdermott",
      current_taxes: 9090.31,
      "18m_override_total": 9582.1,
      "18m_override_increase": 491.79,
      "25m_override_total": 9772.99,
      "25m_override_increase": 682.68
    },
    {
      "#": "26 Egmont St, Condo C1-2 & Pk (022-01-02)",
      $: 1270700,
      owner1: "Mantovanelli",
      owner2: "Griwert",
      current_taxes: 9377.03,
      "18m_override_total": 9884.33,
      "18m_override_increase": 507.3,
      "25m_override_total": 10081.24,
      "25m_override_increase": 704.21
    },
    {
      "#": "26 Egmont St, Condo C1-3 (022-01-03)",
      $: 1270700,
      owner1: "Yu",
      owner2: "Lichterfeld",
      current_taxes: 9377.03,
      "18m_override_total": 9884.33,
      "18m_override_increase": 507.3,
      "25m_override_total": 10081.24,
      "25m_override_increase": 704.21
    },
    {
      "#": "26 Egmont St, Condo C2-1 (022-01-04)",
      $: 1288200,
      owner1: "Wang",
      owner2: "",
      current_taxes: 13191.17,
      "18m_override_total": 13904.81,
      "18m_override_increase": 713.64,
      "25m_override_total": 14181.83,
      "25m_override_increase": 990.66
    },
    {
      "#": "26 Egmont St, Condo C2-2 (022-01-05)",
      $: 1305700,
      owner1: "Xu",
      owner2: "Weng",
      current_taxes: 13370.37,
      "18m_override_total": 14093.71,
      "18m_override_increase": 723.34,
      "25m_override_total": 14374.48,
      "25m_override_increase": 1004.11
    },
    {
      "#": "26 Egmont St, Condo C2-3 (022-01-07)",
      $: 1305800,
      owner1: "Bolinger",
      owner2: "Kronenberg",
      current_taxes: 9736.46,
      "18m_override_total": 10263.2,
      "18m_override_increase": 526.74,
      "25m_override_total": 10467.67,
      "25m_override_increase": 731.21
    },
    {
      "#": "89 Essex St (008-04-01)",
      $: 4007200,
      owner1: "Anders",
      owner2: "",
      current_taxes: 37398.79,
      "18m_override_total": 39422.06,
      "18m_override_increase": 2023.27,
      "25m_override_total": 40207.44,
      "25m_override_increase": 2808.65
    },
    {
      "#": "130 Essex St (015-04-00)",
      $: 3729600,
      owner1: "Cutler",
      owner2: "Landrum",
      current_taxes: 34556.17,
      "18m_override_total": 36425.66,
      "18m_override_increase": 1869.49,
      "25m_override_total": 37151.34,
      "25m_override_increase": 2595.17
    },
    {
      "#": "143 Essex St (006A-05-00)",
      $: 2964e3,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "2 Euston St, Condo 1 (002-16-07)",
      $: 636800,
      owner1: "Zhou",
      owner2: "Sheng",
      current_taxes: 6520.83,
      "18m_override_total": 6873.61,
      "18m_override_increase": 352.78,
      "25m_override_total": 7010.54,
      "25m_override_increase": 489.71
    },
    {
      "#": "2 Euston St, Condo 2 (002-16-01)",
      $: 710700,
      owner1: "Diaz",
      owner2: "",
      current_taxes: 3642.63,
      "18m_override_total": 3839.7,
      "18m_override_increase": 197.07,
      "25m_override_total": 3916.19,
      "25m_override_increase": 273.56
    },
    {
      "#": "2 Euston St, Condo 3 (002-16-02)",
      $: 663100,
      owner1: "Tseng",
      owner2: "",
      current_taxes: 6790.14,
      "18m_override_total": 7157.49,
      "18m_override_increase": 367.35,
      "25m_override_total": 7300.08,
      "25m_override_increase": 509.94
    },
    {
      "#": "2 Euston St, Condo 4 (002-16-03)",
      $: 814300,
      owner1: "Dennery",
      owner2: "",
      current_taxes: 4703.5,
      "18m_override_total": 4957.96,
      "18m_override_increase": 254.46,
      "25m_override_total": 5056.73,
      "25m_override_increase": 353.23
    },
    {
      "#": "2 Euston St, Condo 5 (002-16-04)",
      $: 778500,
      owner1: "Galvin Tr",
      owner2: "",
      current_taxes: 7971.84,
      "18m_override_total": 8403.12,
      "18m_override_increase": 431.28,
      "25m_override_total": 8570.53,
      "25m_override_increase": 598.69
    },
    {
      "#": "2 Euston St, Condo 6 (002-16-05)",
      $: 824100,
      owner1: "Krasik",
      owner2: "",
      current_taxes: 8438.78,
      "18m_override_total": 8895.32,
      "18m_override_increase": 456.54,
      "25m_override_total": 9072.53,
      "25m_override_increase": 633.75
    },
    {
      "#": "2 Euston St, Condo 7 (002-16-06)",
      $: 384800,
      owner1: "Montero",
      owner2: "",
      current_taxes: 3940.35,
      "18m_override_total": 4153.52,
      "18m_override_increase": 213.17,
      "25m_override_total": 4236.27,
      "25m_override_increase": 295.92
    },
    {
      "#": "3 Euston St, Condo 1 (005-06-01)",
      $: 679400,
      owner1: "Aziz",
      owner2: "Nguyen",
      current_taxes: 6957.06,
      "18m_override_total": 7333.44,
      "18m_override_increase": 376.38,
      "25m_override_total": 7479.54,
      "25m_override_increase": 522.48
    },
    {
      "#": "3 Euston St, Condo 2 (005-06-02)",
      $: 753600,
      owner1: "Guglielmino",
      owner2: "Mintcheva",
      current_taxes: 7716.86,
      "18m_override_total": 8134.34,
      "18m_override_increase": 417.48,
      "25m_override_total": 8296.4,
      "25m_override_increase": 579.54
    },
    {
      "#": "3 Euston St, Condo 3 (005-06-03)",
      $: 735400,
      owner1: "Lee-Hood",
      owner2: "",
      current_taxes: 3895.56,
      "18m_override_total": 4106.31,
      "18m_override_increase": 210.75,
      "25m_override_total": 4188.12,
      "25m_override_increase": 292.56
    },
    {
      "#": "3 Euston St, Condo 4 (005-06-04)",
      $: 702900,
      owner1: "Nobari",
      owner2: "",
      current_taxes: 7197.7,
      "18m_override_total": 7587.1,
      "18m_override_increase": 389.4,
      "25m_override_total": 7738.25,
      "25m_override_increase": 540.55
    },
    {
      "#": "3 Euston St, Condo 5 (005-06-05)",
      $: 1318100,
      owner1: "Dong",
      owner2: "",
      current_taxes: 13497.34,
      "18m_override_total": 14227.55,
      "18m_override_increase": 730.21,
      "25m_override_total": 14510.99,
      "25m_override_increase": 1013.65
    },
    {
      "#": "3 Euston St, Condo B (005-06-06)",
      $: 502200,
      owner1: "He",
      owner2: "",
      current_taxes: 5142.53,
      "18m_override_total": 5420.74,
      "18m_override_increase": 278.21,
      "25m_override_total": 5528.73,
      "25m_override_increase": 386.2
    },
    {
      "#": "4 Euston St, Condo 1 (002-15-03)",
      $: 1019900,
      owner1: "Zahlten",
      owner2: "",
      current_taxes: 6808.84,
      "18m_override_total": 7177.2,
      "18m_override_increase": 368.36,
      "25m_override_total": 7320.18,
      "25m_override_increase": 511.34
    },
    {
      "#": "4 Euston St, Condo 2 (002-15-01)",
      $: 1062700,
      owner1: "Goldsmith Iii",
      owner2: "",
      current_taxes: 7247.11,
      "18m_override_total": 7639.18,
      "18m_override_increase": 392.07,
      "25m_override_total": 7791.37,
      "25m_override_increase": 544.26
    },
    {
      "#": "4 Euston St, Condo 3 (002-15-02)",
      $: 1042400,
      owner1: "Cook Trs",
      owner2: "",
      current_taxes: 7039.24,
      "18m_override_total": 7420.06,
      "18m_override_increase": 380.82,
      "25m_override_total": 7567.89,
      "25m_override_increase": 528.65
    },
    {
      "#": "5 Euston St (005-07-00)",
      $: 3646300,
      owner1: "Lew, Trs",
      owner2: "",
      current_taxes: 37338.11,
      "18m_override_total": 39358.1,
      "18m_override_increase": 2019.99,
      "25m_override_total": 40142.2,
      "25m_override_increase": 2804.09
    },
    {
      "#": "7 Euston St (005-08-00)",
      $: 4095800,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 41940.99,
      "18m_override_total": 44210,
      "18m_override_increase": 2269.01,
      "25m_override_total": 45090.76,
      "25m_override_increase": 3149.77
    },
    {
      "#": "8 Euston St, Condo 1 & P-C (002-14-06)",
      $: 734e3,
      owner1: "Banalieva",
      owner2: "",
      current_taxes: 7516.16,
      "18m_override_total": 7922.78,
      "18m_override_increase": 406.62,
      "25m_override_total": 8080.62,
      "25m_override_increase": 564.46
    },
    {
      "#": "8 Euston St, Condo 2 (002-14-01)",
      $: 598100,
      owner1: "Wingerter",
      owner2: "",
      current_taxes: 2489.61,
      "18m_override_total": 2624.3,
      "18m_override_increase": 134.69,
      "25m_override_total": 2676.58,
      "25m_override_increase": 186.97
    },
    {
      "#": "8 Euston St, Condo 3 & Pk  D (002-14-02)",
      $: 845200,
      owner1: "Li",
      owner2: "",
      current_taxes: 8654.85,
      "18m_override_total": 9123.08,
      "18m_override_increase": 468.23,
      "25m_override_total": 9304.83,
      "25m_override_increase": 649.98
    },
    {
      "#": "8 Euston St, Condo 4 & P-B (002-14-03)",
      $: 711500,
      owner1: "Ye",
      owner2: "",
      current_taxes: 7285.76,
      "18m_override_total": 7679.92,
      "18m_override_increase": 394.16,
      "25m_override_total": 7832.92,
      "25m_override_increase": 547.16
    },
    {
      "#": "8 Euston St, Condo 5 & P- A (002-14-04)",
      $: 830900,
      owner1: "Wan",
      owner2: "",
      current_taxes: 4873.48,
      "18m_override_total": 5137.14,
      "18m_override_increase": 263.66,
      "25m_override_total": 5239.48,
      "25m_override_increase": 366
    },
    {
      "#": "8 Euston St, Condo 6 (002-14-05)",
      $: 598e3,
      owner1: "Khouw",
      owner2: "",
      current_taxes: 6123.52,
      "18m_override_total": 6454.8,
      "18m_override_increase": 331.28,
      "25m_override_total": 6583.4,
      "25m_override_increase": 459.88
    },
    {
      "#": "11 Euston St (005-09-00)",
      $: 3439200,
      owner1: "11 Euston Street Llc",
      owner2: "",
      current_taxes: 35217.41,
      "18m_override_total": 37122.67,
      "18m_override_increase": 1905.26,
      "25m_override_total": 37862.24,
      "25m_override_increase": 2644.83
    },
    {
      "#": "12 Euston St, Condo 1 (002-13-03)",
      $: 1215900,
      owner1: "Sonnabend, Tr",
      owner2: "",
      current_taxes: 12450.82,
      "18m_override_total": 13124.41,
      "18m_override_increase": 673.59,
      "25m_override_total": 13385.88,
      "25m_override_increase": 935.06
    },
    {
      "#": "12 Euston St, Condo 2 (002-13-01)",
      $: 1443500,
      owner1: "Ashton-Rickardt",
      owner2: "",
      current_taxes: 11146.51,
      "18m_override_total": 11749.54,
      "18m_override_increase": 603.03,
      "25m_override_total": 11983.61,
      "25m_override_increase": 837.1
    },
    {
      "#": "12 Euston St, Condo 3 (002-13-02)",
      $: 1261500,
      owner1: "Thayre",
      owner2: "",
      current_taxes: 9282.83,
      "18m_override_total": 9785.03,
      "18m_override_increase": 502.2,
      "25m_override_total": 9979.97,
      "25m_override_increase": 697.14
    },
    {
      "#": "15 Euston St, Condo 1 (005-10-02)",
      $: 1890400,
      owner1: "Kim",
      owner2: "Falato",
      current_taxes: 15722.76,
      "18m_override_total": 16573.36,
      "18m_override_increase": 850.6,
      "25m_override_total": 16903.54,
      "25m_override_increase": 1180.78
    },
    {
      "#": "15 Euston St, Condo 1A (005-10-01)",
      $: 1011600,
      owner1: "Noda Tr",
      owner2: "",
      current_taxes: 10358.78,
      "18m_override_total": 10919.19,
      "18m_override_increase": 560.41,
      "25m_override_total": 11136.72,
      "25m_override_increase": 777.94
    },
    {
      "#": "15 Euston St, Condo 2 (005-10-03)",
      $: 2024600,
      owner1: "Farzan",
      owner2: "Choe",
      current_taxes: 20731.9,
      "18m_override_total": 21853.5,
      "18m_override_increase": 1121.6,
      "25m_override_total": 22288.87,
      "25m_override_increase": 1556.97
    },
    {
      "#": "15 Euston St, Condo 3 (005-10-04)",
      $: 2073600,
      owner1: "Phan",
      owner2: "",
      current_taxes: 21233.66,
      "18m_override_total": 22382.4,
      "18m_override_increase": 1148.74,
      "25m_override_total": 22828.31,
      "25m_override_increase": 1594.65
    },
    {
      "#": "16 Euston St (002-12-00)",
      $: 4243800,
      owner1: "Nora Llc",
      owner2: "C/O Alpha Management",
      current_taxes: 43456.51,
      "18m_override_total": 45807.51,
      "18m_override_increase": 2351,
      "25m_override_total": 46720.09,
      "25m_override_increase": 3263.58
    },
    {
      "#": "18 Euston St (002-11-00)",
      $: 4243800,
      owner1: "Nora Llc",
      owner2: "",
      current_taxes: 43456.51,
      "18m_override_total": 45807.51,
      "18m_override_increase": 2351,
      "25m_override_total": 46720.09,
      "25m_override_increase": 3263.58
    },
    {
      "#": "19 Euston St (005-11-00)",
      $: 3238800,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 33165.31,
      "18m_override_total": 34959.55,
      "18m_override_increase": 1794.24,
      "25m_override_total": 35656.02,
      "25m_override_increase": 2490.71
    },
    {
      "#": "21 Euston St (005-12-00)",
      $: 3277200,
      owner1: "Nora Llc",
      owner2: "",
      current_taxes: 33558.53,
      "18m_override_total": 35374.05,
      "18m_override_increase": 1815.52,
      "25m_override_total": 36078.78,
      "25m_override_increase": 2520.25
    },
    {
      "#": "22 Euston St (002-10-00)",
      $: 4243800,
      owner1: "Nora Llc",
      owner2: "C/O Alpha Management",
      current_taxes: 43456.51,
      "18m_override_total": 45807.51,
      "18m_override_increase": 2351,
      "25m_override_total": 46720.09,
      "25m_override_increase": 3263.58
    },
    {
      "#": "24 Euston St, Condo 1 & P4-P5 (002-09-03)",
      $: 1880200,
      owner1: "Latif",
      owner2: "",
      current_taxes: 19253.25,
      "18m_override_total": 20294.85,
      "18m_override_increase": 1041.6,
      "25m_override_total": 20699.17,
      "25m_override_increase": 1445.92
    },
    {
      "#": "24 Euston St, Condo 2 (002-09-01)",
      $: 1563500,
      owner1: "Albuquerque",
      owner2: "",
      current_taxes: 12375.31,
      "18m_override_total": 13044.81,
      "18m_override_increase": 669.5,
      "25m_override_total": 13304.7,
      "25m_override_increase": 929.39
    },
    {
      "#": "24 Euston St, Condo 3 (002-09-02)",
      $: 1550500,
      owner1: "Wine",
      owner2: "Raz",
      current_taxes: 12242.19,
      "18m_override_total": 12904.49,
      "18m_override_increase": 662.3,
      "25m_override_total": 13161.58,
      "25m_override_increase": 919.39
    },
    {
      "#": "25 Euston St, Condo 1 & P1-2 (005-13-01)",
      $: 2526800,
      owner1: "Kim",
      owner2: "",
      current_taxes: 22239.5,
      "18m_override_total": 23442.66,
      "18m_override_increase": 1203.16,
      "25m_override_total": 23909.69,
      "25m_override_increase": 1670.19
    },
    {
      "#": "25 Euston St, Condo 2 & P3 (005-13-02)",
      $: 1826100,
      owner1: "Zhan",
      owner2: "",
      current_taxes: 15064.33,
      "18m_override_total": 15879.31,
      "18m_override_increase": 814.98,
      "25m_override_total": 16195.66,
      "25m_override_increase": 1131.33
    },
    {
      "#": "25 Euston St, Condo 3 & P4 (005-13-03)",
      $: 1842500,
      owner1: "Schneider",
      owner2: "",
      current_taxes: 15232.27,
      "18m_override_total": 16056.34,
      "18m_override_increase": 824.07,
      "25m_override_total": 16376.21,
      "25m_override_increase": 1143.94
    },
    {
      "#": "33 Euston St (005-14-00)",
      $: 4691700,
      owner1: "Schemmer",
      owner2: "",
      current_taxes: 44408.07,
      "18m_override_total": 46810.55,
      "18m_override_increase": 2402.48,
      "25m_override_total": 47743.12,
      "25m_override_increase": 3335.05
    },
    {
      "#": "36 Euston St (002-08-00)",
      $: 3229700,
      owner1: "Chin Trs",
      owner2: "",
      current_taxes: 29437.19,
      "18m_override_total": 31029.74,
      "18m_override_increase": 1592.55,
      "25m_override_total": 31647.92,
      "25m_override_increase": 2210.73
    },
    {
      "#": "58 Euston St (003-04-00)",
      $: 6342400,
      owner1: "Toscani",
      owner2: "",
      current_taxes: 61311.24,
      "18m_override_total": 64628.18,
      "18m_override_increase": 3316.94,
      "25m_override_total": 65915.71,
      "25m_override_increase": 4604.47
    },
    {
      "#": "95 Freeman St (012-03-00)",
      $: 7692900,
      owner1: "Town Of Brookline",
      owner2: "C/O Amory Woods Sanctuary",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "0 Ivy St (012-01-00)",
      $: 2670100,
      owner1: "Mass Assoc For The Blind",
      owner2: "",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "80 Ivy St (001-23-00)",
      $: 13405200,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 137269.25,
      "18m_override_total": 144695.52,
      "18m_override_increase": 7426.27,
      "25m_override_total": 147578.17,
      "25m_override_increase": 10308.92
    },
    {
      "#": "83 Ivy St, Condo 11 (002-01-01)",
      $: 832200,
      owner1: "Ravunniarath",
      owner2: "Bensson-Ravunniarath",
      current_taxes: 8521.73,
      "18m_override_total": 8982.76,
      "18m_override_increase": 461.03,
      "25m_override_total": 9161.71,
      "25m_override_increase": 639.98
    },
    {
      "#": "83 Ivy St, Condo 12 (002-01-02)",
      $: 789e3,
      owner1: "Lin",
      owner2: "",
      current_taxes: 4444.43,
      "18m_override_total": 4684.87,
      "18m_override_increase": 240.44,
      "25m_override_total": 4778.21,
      "25m_override_increase": 333.78
    },
    {
      "#": "83 Ivy St, Condo 13 (002-01-03)",
      $: 862e3,
      owner1: "Jalette",
      owner2: "Pan",
      current_taxes: 5191.95,
      "18m_override_total": 5472.83,
      "18m_override_increase": 280.88,
      "25m_override_total": 5581.87,
      "25m_override_increase": 389.92
    },
    {
      "#": "83 Ivy St, Condo 14 (002-01-04)",
      $: 701400,
      owner1: "Mucha",
      owner2: "",
      current_taxes: 7182.34,
      "18m_override_total": 7570.9,
      "18m_override_increase": 388.56,
      "25m_override_total": 7721.73,
      "25m_override_increase": 539.39
    },
    {
      "#": "83 Ivy St, Condo 21 (002-01-05)",
      $: 853300,
      owner1: "Lokshin",
      owner2: "",
      current_taxes: 5102.86,
      "18m_override_total": 5378.92,
      "18m_override_increase": 276.06,
      "25m_override_total": 5486.08,
      "25m_override_increase": 383.22
    },
    {
      "#": "83 Ivy St, Condo 22 (002-01-06)",
      $: 782900,
      owner1: "Ureneck",
      owner2: "",
      current_taxes: 4381.96,
      "18m_override_total": 4619.02,
      "18m_override_increase": 237.06,
      "25m_override_total": 4711.05,
      "25m_override_increase": 329.09
    },
    {
      "#": "83 Ivy St, Condo 23 (002-01-07)",
      $: 870200,
      owner1: "Maltes",
      owner2: "Andraca",
      current_taxes: 5275.91,
      "18m_override_total": 5561.34,
      "18m_override_increase": 285.43,
      "25m_override_total": 5672.13,
      "25m_override_increase": 396.22
    },
    {
      "#": "83 Ivy St, Condo 24 (002-01-08)",
      $: 712e3,
      owner1: "Trustees Of Boston University",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 7290.88,
      "18m_override_total": 7685.32,
      "18m_override_increase": 394.44,
      "25m_override_total": 7838.43,
      "25m_override_increase": 547.55
    },
    {
      "#": "83 Ivy St, Condo 31 (002-01-09)",
      $: 835800,
      owner1: "Floyd Tr",
      owner2: "",
      current_taxes: 8558.59,
      "18m_override_total": 9021.61,
      "18m_override_increase": 463.02,
      "25m_override_total": 9201.34,
      "25m_override_increase": 642.75
    },
    {
      "#": "83 Ivy St, Condo 32 (002-01-10)",
      $: 782900,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 8016.9,
      "18m_override_total": 8450.61,
      "18m_override_increase": 433.71,
      "25m_override_total": 8618.97,
      "25m_override_increase": 602.07
    },
    {
      "#": "83 Ivy St, Condo 33 (002-01-11)",
      $: 862e3,
      owner1: "Carroll",
      owner2: "",
      current_taxes: 8826.88,
      "18m_override_total": 9304.41,
      "18m_override_increase": 477.53,
      "25m_override_total": 9489.78,
      "25m_override_increase": 662.9
    },
    {
      "#": "83 Ivy St, Condo 34 (002-01-12)",
      $: 712e3,
      owner1: "Terrell",
      owner2: "",
      current_taxes: 3655.95,
      "18m_override_total": 3853.74,
      "18m_override_increase": 197.79,
      "25m_override_total": 3930.51,
      "25m_override_increase": 274.56
    },
    {
      "#": "83 Ivy St, Condo 41 (002-01-13)",
      $: 858300,
      owner1: "Walker Life Estate",
      owner2: "",
      current_taxes: 8788.99,
      "18m_override_total": 9264.47,
      "18m_override_increase": 475.48,
      "25m_override_total": 9449.04,
      "25m_override_increase": 660.05
    },
    {
      "#": "83 Ivy St, Condo 42 (002-01-14)",
      $: 770300,
      owner1: "Chobanian Jr",
      owner2: "",
      current_taxes: 4252.94,
      "18m_override_total": 4483.02,
      "18m_override_increase": 230.08,
      "25m_override_total": 4572.34,
      "25m_override_increase": 319.4
    },
    {
      "#": "83 Ivy St, Condo 43 (002-01-15)",
      $: 901300,
      owner1: "Lin",
      owner2: "Li",
      current_taxes: 9229.31,
      "18m_override_total": 9728.62,
      "18m_override_increase": 499.31,
      "25m_override_total": 9922.43,
      "25m_override_increase": 693.12
    },
    {
      "#": "83 Ivy St, Condo 44 (002-01-16)",
      $: 743500,
      owner1: "Aftahi",
      owner2: "",
      current_taxes: 7613.44,
      "18m_override_total": 8025.33,
      "18m_override_increase": 411.89,
      "25m_override_total": 8185.21,
      "25m_override_increase": 571.77
    },
    {
      "#": "83 Ivy St, Condo B-1 (002-01-17)",
      $: 590700,
      owner1: "San",
      owner2: "",
      current_taxes: 6048.77,
      "18m_override_total": 6376.01,
      "18m_override_increase": 327.24,
      "25m_override_total": 6503.03,
      "25m_override_increase": 454.26
    },
    {
      "#": "87 Ivy St (002-02-00)",
      $: 2943400,
      owner1: "Weisel Tr",
      owner2: "",
      current_taxes: 26505.48,
      "18m_override_total": 27939.43,
      "18m_override_increase": 1433.95,
      "25m_override_total": 28496.04,
      "25m_override_increase": 1990.56
    },
    {
      "#": "90 Ivy St (001-22-00)",
      $: 3291200,
      owner1: "Ivy Brookline Development Llc",
      owner2: "",
      current_taxes: 33701.89,
      "18m_override_total": 35525.16,
      "18m_override_increase": 1823.27,
      "25m_override_total": 36232.9,
      "25m_override_increase": 2531.01
    },
    {
      "#": "93 Ivy St (002-03-00)",
      $: 4420700,
      owner1: "Moyer",
      owner2: "",
      current_taxes: 45267.97,
      "18m_override_total": 47716.97,
      "18m_override_increase": 2449,
      "25m_override_total": 48667.59,
      "25m_override_increase": 3399.62
    },
    {
      "#": "96 Ivy St (001-21-00)",
      $: 4834400,
      owner1: "Hirsch Trs",
      owner2: "",
      current_taxes: 45869.32,
      "18m_override_total": 48350.85,
      "18m_override_increase": 2481.53,
      "25m_override_total": 49314.11,
      "25m_override_increase": 3444.79
    },
    {
      "#": "101 Ivy St (002-04-00)",
      $: 4296e3,
      owner1: "Thorn",
      owner2: "Quasha",
      current_taxes: 40356.11,
      "18m_override_total": 42539.38,
      "18m_override_increase": 2183.27,
      "25m_override_total": 43386.85,
      "25m_override_increase": 3030.74
    },
    {
      "#": "108 Ivy St (001-20-00)",
      $: 5099800,
      owner1: "Sollami",
      owner2: "",
      current_taxes: 52221.95,
      "18m_override_total": 55047.16,
      "18m_override_increase": 2825.21,
      "25m_override_total": 56143.82,
      "25m_override_increase": 3921.87
    },
    {
      "#": "111 Ivy St (002-05-00)",
      $: 4414700,
      owner1: "Minsky",
      owner2: "",
      current_taxes: 41571.59,
      "18m_override_total": 43820.61,
      "18m_override_increase": 2249.02,
      "25m_override_total": 44693.62,
      "25m_override_increase": 3122.03
    },
    {
      "#": "135 Ivy St (003-01-00)",
      $: 9825600,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 100614.14,
      "18m_override_total": 106057.36,
      "18m_override_increase": 5443.22,
      "25m_override_total": 108170.26,
      "25m_override_increase": 7556.12
    },
    {
      "#": "156 Ivy St (009-02-00)",
      $: 7745600,
      owner1: "Mcloughlin",
      owner2: "",
      current_taxes: 75680.01,
      "18m_override_total": 79774.3,
      "18m_override_increase": 4094.29,
      "25m_override_total": 81363.58,
      "25m_override_increase": 5683.57
    },
    {
      "#": "157 Ivy St (008-03-01)",
      $: 3234500,
      owner1: "Lang Tr",
      owner2: "",
      current_taxes: 29486.35,
      "18m_override_total": 31081.56,
      "18m_override_increase": 1595.21,
      "25m_override_total": 31700.77,
      "25m_override_increase": 2214.42
    },
    {
      "#": "165 Ivy St (008-04-00)",
      $: 3031900,
      owner1: "Dane",
      owner2: "",
      current_taxes: 31046.66,
      "18m_override_total": 32726.28,
      "18m_override_increase": 1679.62,
      "25m_override_total": 33378.26,
      "25m_override_increase": 2331.6
    },
    {
      "#": "170 Ivy St (009-01-00)",
      $: 6000500,
      owner1: "Roh Tr",
      owner2: "",
      current_taxes: 57810.19,
      "18m_override_total": 60937.72,
      "18m_override_increase": 3127.53,
      "25m_override_total": 62151.74,
      "25m_override_increase": 4341.55
    },
    {
      "#": "178 Ivy St (012-04-01)",
      $: 4200500,
      owner1: "Dodson",
      owner2: "",
      current_taxes: 43013.12,
      "18m_override_total": 45340.13,
      "18m_override_increase": 2327.01,
      "25m_override_total": 46243.41,
      "25m_override_increase": 3230.29
    },
    {
      "#": "180 Ivy St (012-04-00)",
      $: 5536500,
      owner1: "Gordon",
      owner2: "C/O Amcel Center",
      current_taxes: 56693.76,
      "18m_override_total": 59760.89,
      "18m_override_increase": 3067.13,
      "25m_override_total": 60951.46,
      "25m_override_increase": 4257.7
    },
    {
      "#": "190 Ivy St (012-02-01)",
      $: 7115500,
      owner1: "Calhoun Tr",
      owner2: "",
      current_taxes: 72862.72,
      "18m_override_total": 76804.59,
      "18m_override_increase": 3941.87,
      "25m_override_total": 78334.71,
      "25m_override_increase": 5471.99
    },
    {
      "#": "200 Ivy St (012-02-00)",
      $: 9263800,
      owner1: "Mass Assoc For The Blind",
      owner2: "",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": " Ivy St (001-19-02)",
      $: 22900,
      owner1: "Sollami",
      owner2: "Tempel Et Al",
      current_taxes: 234.5,
      "18m_override_total": 247.19,
      "18m_override_increase": 12.69,
      "25m_override_total": 252.11,
      "25m_override_increase": 17.61
    },
    {
      "#": " Ivy St (001-19-04)",
      $: 146500,
      owner1: "Tempel",
      owner2: "Wilson",
      current_taxes: 1500.16,
      "18m_override_total": 1581.32,
      "18m_override_increase": 81.16,
      "25m_override_total": 1612.82,
      "25m_override_increase": 112.66
    },
    {
      "#": " Ivy St (001-31-02)",
      $: 77100,
      owner1: "Sollami",
      owner2: "",
      current_taxes: 789.5,
      "18m_override_total": 832.21,
      "18m_override_increase": 42.71,
      "25m_override_total": 848.79,
      "25m_override_increase": 59.29
    },
    {
      "#": "10 Lenox St (004-02-00)",
      $: 10847e3,
      owner1: "Boston University Trs",
      owner2: "C/O General  Accounting 4Th Fl",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "25 Lenox St (006A-03-00)",
      $: 4799800,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 49149.95,
      "18m_override_total": 51808.96,
      "18m_override_increase": 2659.01,
      "25m_override_total": 52841.11,
      "25m_override_increase": 3691.16
    },
    {
      "#": "39 Lenox St (006A-04-00)",
      $: 2479600,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 25391.1,
      "18m_override_total": 26764.76,
      "18m_override_increase": 1373.66,
      "25m_override_total": 27297.97,
      "25m_override_increase": 1906.87
    },
    {
      "#": "170 Lenox St (006A-02-00)",
      $: 1861800,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 19064.83,
      "18m_override_total": 20096.24,
      "18m_override_increase": 1031.41,
      "25m_override_total": 20496.6,
      "25m_override_increase": 1431.77
    },
    {
      "#": "1 Mason St (014-04-00)",
      $: 6973800,
      owner1: "Gajdecki",
      owner2: "",
      current_taxes: 67776.78,
      "18m_override_total": 71443.5,
      "18m_override_increase": 3666.72,
      "25m_override_total": 72866.82,
      "25m_override_increase": 5090.04
    },
    {
      "#": "8 Mason St (013-01-00)",
      $: 5157100,
      owner1: "Town Of Brookline",
      owner2: "C/O Mason Square",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "11 Mason St (014-05-00)",
      $: 5194200,
      owner1: "Hawthorne",
      owner2: "Baldwin",
      current_taxes: 49553.67,
      "18m_override_total": 52234.52,
      "18m_override_increase": 2680.85,
      "25m_override_total": 53275.15,
      "25m_override_increase": 3721.48
    },
    {
      "#": "21 Mason St (014-06-00)",
      $: 6816700,
      owner1: "Saperstone",
      owner2: "",
      current_taxes: 69803.01,
      "18m_override_total": 73579.35,
      "18m_override_increase": 3776.34,
      "25m_override_total": 75045.22,
      "25m_override_increase": 5242.21
    },
    {
      "#": "138 Mountfort St (005-03-00)",
      $: 3245100,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "150 Mountfort St (005-02-00)",
      $: 2382100,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 24392.7,
      "18m_override_total": 25712.35,
      "18m_override_increase": 1319.65,
      "25m_override_total": 26224.59,
      "25m_override_increase": 1831.89
    },
    {
      "#": "11 Powell St (011-05-00)",
      $: 3209400,
      owner1: "Livingston",
      owner2: "Rabb",
      current_taxes: 29229.32,
      "18m_override_total": 30810.63,
      "18m_override_increase": 1581.31,
      "25m_override_total": 31424.44,
      "25m_override_increase": 2195.12
    },
    {
      "#": "19 Powell St (011-06-00)",
      $: 4483300,
      owner1: "Wolraich",
      owner2: "Weinrib",
      current_taxes: 42274.06,
      "18m_override_total": 44561.09,
      "18m_override_increase": 2287.03,
      "25m_override_total": 45448.84,
      "25m_override_increase": 3174.78
    },
    {
      "#": "29 Powell St (011-07-00)",
      $: 4199600,
      owner1: "D Arbeloff",
      owner2: "Lavin",
      current_taxes: 43003.9,
      "18m_override_total": 45330.41,
      "18m_override_increase": 2326.51,
      "25m_override_total": 46233.49,
      "25m_override_increase": 3229.59
    },
    {
      "#": "33 Powell St (011-08-00)",
      $: 3463400,
      owner1: "Kanarek Trs",
      owner2: "",
      current_taxes: 31830.28,
      "18m_override_total": 33552.3,
      "18m_override_increase": 1722.02,
      "25m_override_total": 34220.73,
      "25m_override_increase": 2390.45
    },
    {
      "#": "41 Powell St (011-09-00)",
      $: 3337e3,
      owner1: "Noyes",
      owner2: "",
      current_taxes: 30535.95,
      "18m_override_total": 32187.94,
      "18m_override_increase": 1651.99,
      "25m_override_total": 32829.2,
      "25m_override_increase": 2293.25
    },
    {
      "#": "45 Powell St (011-10-00)",
      $: 5189200,
      owner1: "Galvin Tr",
      owner2: "",
      current_taxes: 49502.47,
      "18m_override_total": 52180.55,
      "18m_override_increase": 2678.08,
      "25m_override_total": 53220.11,
      "25m_override_increase": 3717.64
    },
    {
      "#": "53 Powell St (011-11-00)",
      $: 4435200,
      owner1: "Parafestas Tr",
      owner2: "",
      current_taxes: 45416.45,
      "18m_override_total": 47873.48,
      "18m_override_increase": 2457.03,
      "25m_override_total": 48827.23,
      "25m_override_increase": 3410.78
    },
    {
      "#": "63 Powell St (011-12-00)",
      $: 3713700,
      owner1: "Feinstein",
      owner2: "",
      current_taxes: 34393.35,
      "18m_override_total": 36254.03,
      "18m_override_increase": 1860.68,
      "25m_override_total": 36976.29,
      "25m_override_increase": 2582.94
    },
    {
      "#": "65 Powell St (011-13-00)",
      $: 1709e3,
      owner1: "Dhanda Trs",
      owner2: "",
      current_taxes: 17500.16,
      "18m_override_total": 18446.92,
      "18m_override_increase": 946.76,
      "25m_override_total": 18814.42,
      "25m_override_increase": 1314.26
    },
    {
      "#": "67 Powell St (011-14-00)",
      $: 3145800,
      owner1: "Dhanda Trs",
      owner2: "",
      current_taxes: 32212.99,
      "18m_override_total": 33955.71,
      "18m_override_increase": 1742.72,
      "25m_override_total": 34632.19,
      "25m_override_increase": 2419.2
    },
    {
      "#": "81 Powell St (011-15-00)",
      $: 1584100,
      owner1: "Dhanda Trs",
      owner2: "",
      current_taxes: 16221.18,
      "18m_override_total": 17098.75,
      "18m_override_increase": 877.57,
      "25m_override_total": 17439.39,
      "25m_override_increase": 1218.21
    },
    {
      "#": "9 Prescott St (008-01-00)",
      $: 8965e3,
      owner1: "New England Hebrew Academy",
      owner2: "",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "16 Prescott St (004-01-00)",
      $: 8846600,
      owner1: "De Icaza Trs",
      owner2: "",
      current_taxes: 90589.18,
      "18m_override_total": 95490.05,
      "18m_override_increase": 4900.87,
      "25m_override_total": 97392.43,
      "25m_override_increase": 6803.25
    },
    {
      "#": "23 Prescott St (008-02-05)",
      $: 12315900,
      owner1: "Colasacco, Tr",
      owner2: "",
      current_taxes: 126114.82,
      "18m_override_total": 132937.63,
      "18m_override_increase": 6822.81,
      "25m_override_total": 135586.04,
      "25m_override_increase": 9471.22
    },
    {
      "#": "30 Prescott St (003-03-00)",
      $: 5698600,
      owner1: "Glashow Trs",
      owner2: "",
      current_taxes: 54718.73,
      "18m_override_total": 57679.01,
      "18m_override_increase": 2960.28,
      "25m_override_total": 58828.11,
      "25m_override_increase": 4109.38
    },
    {
      "#": "35 Prescott St (008-03-00)",
      $: 3675500,
      owner1: "Williams",
      owner2: "",
      current_taxes: 34002.19,
      "18m_override_total": 35841.71,
      "18m_override_increase": 1839.52,
      "25m_override_total": 36555.75,
      "25m_override_increase": 2553.56
    },
    {
      "#": "40 Prescott St (003-02-00)",
      $: 5944e3,
      owner1: "Burns",
      owner2: "",
      current_taxes: 57231.63,
      "18m_override_total": 60327.86,
      "18m_override_increase": 3096.23,
      "25m_override_total": 61529.73,
      "25m_override_increase": 4298.1
    },
    {
      "#": "15 St Marys Ct (001-26-00)",
      $: 3194700,
      owner1: "15 St Mary`S Ct Llc",
      owner2: "C/O Glanz Properties Inc",
      current_taxes: 32713.73,
      "18m_override_total": 34483.54,
      "18m_override_increase": 1769.81,
      "25m_override_total": 35170.53,
      "25m_override_increase": 2456.8
    },
    {
      "#": "19 St Marys Ct (001-27-00)",
      $: 2461e3,
      owner1: "Arendt",
      owner2: "",
      current_taxes: 21565.71,
      "18m_override_total": 22732.41,
      "18m_override_increase": 1166.7,
      "25m_override_total": 23185.29,
      "25m_override_increase": 1619.58
    },
    {
      "#": "23 St Marys Ct (001-28-00)",
      $: 1956200,
      owner1: "Politman, Trs",
      owner2: "",
      current_taxes: 16396.55,
      "18m_override_total": 17283.6,
      "18m_override_increase": 887.05,
      "25m_override_total": 17627.93,
      "25m_override_increase": 1231.38
    },
    {
      "#": "25 St Marys Ct (001-29-00)",
      $: 1867200,
      owner1: "25 St Marys Court Llc",
      owner2: "",
      current_taxes: 19120.13,
      "18m_override_total": 20154.53,
      "18m_override_increase": 1034.4,
      "25m_override_total": 20556.05,
      "25m_override_increase": 1435.92
    },
    {
      "#": "27 St Marys Ct (001-30-00)",
      $: 2309600,
      owner1: "Tracy",
      owner2: "",
      current_taxes: 23650.3,
      "18m_override_total": 24929.78,
      "18m_override_increase": 1279.48,
      "25m_override_total": 25426.44,
      "25m_override_increase": 1776.14
    },
    {
      "#": "29 St Marys Ct (001-31-00)",
      $: 1869e3,
      owner1: "Adireksarn",
      owner2: "",
      current_taxes: 19138.56,
      "18m_override_total": 20173.96,
      "18m_override_increase": 1035.4,
      "25m_override_total": 20575.87,
      "25m_override_increase": 1437.31
    },
    {
      "#": "29 St Marys St, Unit A (001-31-01)",
      $: 5e4,
      owner1: "Adireksarn",
      owner2: "",
      current_taxes: 512,
      "18m_override_total": 539.7,
      "18m_override_increase": 27.7,
      "25m_override_total": 550.45,
      "25m_override_increase": 38.45
    },
    {
      "#": "37 St Marys St (005-04-00)",
      $: 13122100,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Flr",
      current_taxes: 134370.3,
      "18m_override_total": 141639.73,
      "18m_override_increase": 7269.43,
      "25m_override_total": 144461.51,
      "25m_override_increase": 10091.21
    },
    {
      "#": "49 St Marys St (005-05-00)",
      $: 3391400,
      owner1: "Chin Trs",
      owner2: "",
      current_taxes: 34727.94,
      "18m_override_total": 36606.72,
      "18m_override_increase": 1878.78,
      "25m_override_total": 37336.01,
      "25m_override_increase": 2608.07
    },
    {
      "#": "65 St Marys St (002-17-00)",
      $: 4078800,
      owner1: "Yee Trs",
      owner2: "",
      current_taxes: 41766.91,
      "18m_override_total": 44026.5,
      "18m_override_increase": 2259.59,
      "25m_override_total": 44903.6,
      "25m_override_increase": 3136.69
    },
    {
      "#": "71 St Marys St, Condo 1 & P1 (002-18-03)",
      $: 1346900,
      owner1: "Gregory",
      owner2: "",
      current_taxes: 10157.32,
      "18m_override_total": 10706.83,
      "18m_override_increase": 549.51,
      "25m_override_total": 10920.13,
      "25m_override_increase": 762.81
    },
    {
      "#": "71 St Marys St, Condo 2 & P2 (002-18-01)",
      $: 1424400,
      owner1: "Zucker Tr",
      owner2: "",
      current_taxes: 10950.92,
      "18m_override_total": 11543.36,
      "18m_override_increase": 592.44,
      "25m_override_total": 11773.33,
      "25m_override_increase": 822.41
    },
    {
      "#": "71 St Marys St, Condo 3 & P-3 (002-18-02)",
      $: 1424500,
      owner1: "Gonczarowski",
      owner2: "",
      current_taxes: 10951.95,
      "18m_override_total": 11544.45,
      "18m_override_increase": 592.5,
      "25m_override_total": 11774.44,
      "25m_override_increase": 822.49
    },
    {
      "#": "338 St Paul St (020-01-00)",
      $: 26769800,
      owner1: "Brookline Housing Authority",
      owner2: "",
      current_taxes: 0,
      "18m_override_total": 0,
      "18m_override_increase": 0,
      "25m_override_total": 0,
      "25m_override_increase": 0
    },
    {
      "#": "3 Worthington Rd (015-05-00)",
      $: 5139400,
      owner1: "Delong, Tr",
      owner2: "",
      current_taxes: 48992.52,
      "18m_override_total": 51643.02,
      "18m_override_increase": 2650.5,
      "25m_override_total": 52671.86,
      "25m_override_increase": 3679.34
    },
    {
      "#": "4 Worthington Rd (014-03-00)",
      $: 5288500,
      owner1: "Sitkoff",
      owner2: "",
      current_taxes: 50519.31,
      "18m_override_total": 53252.4,
      "18m_override_increase": 2733.09,
      "25m_override_total": 54313.31,
      "25m_override_increase": 3794
    },
    {
      "#": "11 Worthington Rd (015-06-00)",
      $: 4001100,
      owner1: "Nogi",
      owner2: "",
      current_taxes: 37336.33,
      "18m_override_total": 39356.23,
      "18m_override_increase": 2019.9,
      "25m_override_total": 40140.29,
      "25m_override_increase": 2803.96
    },
    {
      "#": "12 Worthington Rd (014-02-00)",
      $: 5297800,
      owner1: "Parafestas Tr",
      owner2: "",
      current_taxes: 54249.47,
      "18m_override_total": 57184.37,
      "18m_override_increase": 2934.9,
      "25m_override_total": 58323.61,
      "25m_override_increase": 4074.14
    },
    {
      "#": "22 Worthington Rd (014-01-00)",
      $: 7793500,
      owner1: "Forrester",
      owner2: "",
      current_taxes: 76170.51,
      "18m_override_total": 80291.33,
      "18m_override_increase": 4120.82,
      "25m_override_total": 81890.92,
      "25m_override_increase": 5720.41
    },
    {
      "#": "39 Worthington Rd (016-04-04)",
      $: 6536100,
      owner1: "Gordon",
      owner2: "",
      current_taxes: 66929.66,
      "18m_override_total": 70550.55,
      "18m_override_increase": 3620.89,
      "25m_override_total": 71956.08,
      "25m_override_increase": 5026.42
    },
    {
      "#": "49 Worthington Rd (016-05-00)",
      $: 5941500,
      owner1: "Van Hook Tr",
      owner2: "Woolf Tr",
      current_taxes: 57206.03,
      "18m_override_total": 60300.88,
      "18m_override_increase": 3094.85,
      "25m_override_total": 61502.2,
      "25m_override_increase": 4296.17
    },
    {
      "#": "50 Worthington Rd (012-06-00)",
      $: 12908e3,
      owner1: "Boston University Trs",
      owner2: "C/O General Accounting 4Th Fl",
      current_taxes: 132177.92,
      "18m_override_total": 139328.75,
      "18m_override_increase": 7150.83,
      "25m_override_total": 142104.48,
      "25m_override_increase": 9926.56
    },
    {
      "#": "53 Worthington Rd (016-01-02)",
      $: 3769700,
      owner1: "Dagostino",
      owner2: "",
      current_taxes: 38601.73,
      "18m_override_total": 40690.08,
      "18m_override_increase": 2088.35,
      "25m_override_total": 41500.72,
      "25m_override_increase": 2898.99
    }
  ];

  // src/use-calculator.ts
  var DEFAULT_OVERRIDE_AMOUNT = 1e7;
  var TEST_VALUE = "jiminy cricket";
  var DEFAULT_ASSESSED_VALUE = 765770;
  var CURRENT_TAX_RATE = 10.24;
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
    const [testOwner1, setTestOwner1] = d2(TEST_VALUE);
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
      estimatedTaxImpactDaily: "",
      owner1: "",
      /** Second owner's last name */
      owner2: "",
      /** Estimated annual tax total under the lowest override amount (formatted as currency) */
      yearlyTotalOverride1: "",
      /** Estimated annual tax total under the next-highest override amount (formatted as currency) */
      yearlyTotalOverride2: "",
      /** Estimated annual tax increase under the lowest override amount (formatted as currency) */
      yearlyImpactOverride1: "",
      /** Estimated annual tax increase under the next-highest override amount (formatted as currency) */
      yearlyImpactOverride2: ""
    });
    const fetchSuggestions = q2(async (searchQuery) => {
      setIsLoading(true);
      try {
        const data = fuse.search(searchQuery).slice(0, 10).map(({ item }) => ({
          address: item["#"],
          value: item.$,
          owner1: item.owner1
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
      const rateImpact = Math.abs(
        Math.ceil(
          100 * (RATE_IMPACT_SLOPE * currentOverride + RATE_IMPACT_INTERCEPT)
        ) / 100
      );
      const proposedNewTaxRate = CURRENT_TAX_RATE + rateImpact;
      const yearlyTotalOverride1 = 1.1111;
      const yearlyTotalOverride2 = 2.2222;
      const yearlyImpactOverride1 = 3.3333;
      const yearlyImpactOverride2 = 4.4444;
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
        estimatedTaxImpactDaily: formatDollars(taxBillImpactDaily),
        owner1: testOwner1,
        owner2: "",
        yearlyTotalOverride1: formatDollars(yearlyTotalOverride1),
        //   TODO Fix this so that it's a separate variable for the second override
        yearlyTotalOverride2: formatDollars(yearlyTotalOverride2),
        yearlyImpactOverride1: formatDollars(yearlyImpactOverride1),
        //   TODO Fix this so that it's a separate variable for the second override
        yearlyImpactOverride2: formatDollars(yearlyImpactOverride2)
      });
    }, [assessedValue, overrideValue]);
    const onPropertyChange = q2((property) => {
      setSelectedProperty(property);
      if (property) {
        setAssessedValue(property.value);
        setQuery(property.address);
        setTestOwner1(property.owner1);
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
              " increase )"
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
        /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Your Increase in Dollars" }),
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
            ] }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: [
              calculator.calculatedValues.owner1,
              " per quarter"
            ] }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: [
              calculator.calculatedValues.yearlyTotalOverride2,
              " per quarter"
            ] }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: [
              calculator.calculatedValues.yearlyImpactOverride1,
              " per quarter"
            ] }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: [
              calculator.calculatedValues.yearlyImpactOverride2,
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
    J(/* @__PURE__ */ u16(Calculator, {}), document.getElementById(targetElementId));
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
