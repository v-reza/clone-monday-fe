/*!
 * Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 * Copyright 2022 Fonticons, Inc.
 */
!(function () {
  "use strict";
  function n(a, t) {
    var e,
      n = Object.keys(a);
    return (
      Object.getOwnPropertySymbols &&
        ((e = Object.getOwnPropertySymbols(a)),
        t &&
          (e = e.filter(function (t) {
            return Object.getOwnPropertyDescriptor(a, t).enumerable;
          })),
        n.push.apply(n, e)),
      n
    );
  }
  function k(a) {
    for (var t = 1; t < arguments.length; t++) {
      var e = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? n(Object(e), !0).forEach(function (t) {
            s(a, t, e[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e))
        : n(Object(e)).forEach(function (t) {
            Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(e, t));
          });
    }
    return a;
  }
  function i(t) {
    return (i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function r(t, a) {
    for (var e = 0; e < a.length; e++) {
      var n = a[e];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function s(t, a, e) {
    return (
      a in t
        ? Object.defineProperty(t, a, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[a] = e),
      t
    );
  }
  function m(t, a) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, a) {
        var e =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != e) {
          var n,
            i,
            r = [],
            o = !0,
            s = !1;
          try {
            for (
              e = e.call(t);
              !(o = (n = e.next()).done) &&
              (r.push(n.value), !a || r.length !== a);
              o = !0
            );
          } catch (t) {
            (s = !0), (i = t);
          } finally {
            try {
              o || null == e.return || e.return();
            } finally {
              if (s) throw i;
            }
          }
          return r;
        }
      })(t, a) ||
      e(t, a) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function l(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return o(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      e(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function e(t, a) {
    if (t) {
      if ("string" == typeof t) return o(t, a);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      return "Map" ===
        (e = "Object" === e && t.constructor ? t.constructor.name : e) ||
        "Set" === e
        ? Array.from(t)
        : "Arguments" === e ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        ? o(t, a)
        : void 0;
    }
  }
  function o(t, a) {
    (null == a || a > t.length) && (a = t.length);
    for (var e = 0, n = new Array(a); e < a; e++) n[e] = t[e];
    return n;
  }
  function t() {}
  var a = {},
    c = {},
    f = null,
    u = { mark: t, measure: t };
  try {
    "undefined" != typeof window && (a = window),
      "undefined" != typeof document && (c = document),
      "undefined" != typeof MutationObserver && (f = MutationObserver),
      "undefined" != typeof performance && (u = performance);
  } catch (t) {}
  var d = (a.navigator || {}).userAgent,
    b = void 0 === d ? "" : d,
    g = a,
    h = c,
    v = f,
    d = u,
    p = !!g.document,
    y =
      !!h.documentElement &&
      !!h.head &&
      "function" == typeof h.addEventListener &&
      "function" == typeof h.createElement,
    w = ~b.indexOf("MSIE") || ~b.indexOf("Trident/"),
    a = "___FONT_AWESOME___",
    x = 16,
    A = "svg-inline--fa",
    O = "data-fa-i2svg",
    N = "data-fa-pseudo-element",
    P = "data-fa-pseudo-element-pending",
    C = "data-prefix",
    S = "data-icon",
    j = "fontawesome-i2svg",
    E = "async",
    z = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    M = (function () {
      try {
        return !0;
      } catch (t) {
        return !1;
      }
    })(),
    I = "classic",
    L = "sharp",
    Y = [I, L];
  function R(t) {
    return new Proxy(t, {
      get: function (t, a) {
        return a in t ? t[a] : t[I];
      },
    });
  }
  var T = R(
      (s((c = {}), I, {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
        fak: "kit",
        "fa-kit": "kit",
      }),
      s(c, L, { fa: "solid", fass: "solid", "fa-solid": "solid" }),
      c)
    ),
    D = R(
      (s((f = {}), I, {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        duotone: "fad",
        brands: "fab",
        kit: "fak",
      }),
      s(f, L, { solid: "fass" }),
      f)
    ),
    F = R(
      (s((u = {}), I, {
        fab: "fa-brands",
        fad: "fa-duotone",
        fak: "fa-kit",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin",
      }),
      s(u, L, { fass: "fa-solid" }),
      u)
    ),
    H = R(
      (s((b = {}), I, {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-kit": "fak",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat",
      }),
      s(b, L, { "fa-solid": "fass" }),
      b)
    ),
    W = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,
    _ = "fa-layers-text",
    U =
      /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
    X = R(
      (s((c = {}), I, {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat",
      }),
      s(c, L, { 900: "fass" }),
      c)
    ),
    f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    u = f.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    B = [
      "class",
      "data-prefix",
      "data-icon",
      "data-fa-transform",
      "data-fa-mask",
    ],
    q = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary",
    },
    b = new Set();
  Object.keys(D[I]).map(b.add.bind(b)), Object.keys(D[L]).map(b.add.bind(b));
  var V = []
      .concat(Y, l(b), [
        "2xs",
        "xs",
        "sm",
        "lg",
        "xl",
        "2xl",
        "beat",
        "border",
        "fade",
        "beat-fade",
        "bounce",
        "flip-both",
        "flip-horizontal",
        "flip-vertical",
        "flip",
        "fw",
        "inverse",
        "layers-counter",
        "layers-text",
        "layers",
        "li",
        "pull-left",
        "pull-right",
        "pulse",
        "rotate-180",
        "rotate-270",
        "rotate-90",
        "rotate-by",
        "shake",
        "spin-pulse",
        "spin-reverse",
        "spin",
        "stack-1x",
        "stack-2x",
        "stack",
        "ul",
        q.GROUP,
        q.SWAP_OPACITY,
        q.PRIMARY,
        q.SECONDARY,
      ])
      .concat(
        f.map(function (t) {
          return "".concat(t, "x");
        })
      )
      .concat(
        u.map(function (t) {
          return "w-".concat(t);
        })
      ),
    G = g.FontAwesomeConfig || {};
  h &&
    "function" == typeof h.querySelector &&
    [
      ["data-family-prefix", "familyPrefix"],
      ["data-css-prefix", "cssPrefix"],
      ["data-family-default", "familyDefault"],
      ["data-style-default", "styleDefault"],
      ["data-replacement-class", "replacementClass"],
      ["data-auto-replace-svg", "autoReplaceSvg"],
      ["data-auto-add-css", "autoAddCss"],
      ["data-auto-a11y", "autoA11y"],
      ["data-search-pseudo-elements", "searchPseudoElements"],
      ["data-observe-mutations", "observeMutations"],
      ["data-mutate-approach", "mutateApproach"],
      ["data-keep-original-source", "keepOriginalSource"],
      ["data-measure-performance", "measurePerformance"],
      ["data-show-missing-icons", "showMissingIcons"],
    ].forEach(function (t) {
      var a = m(t, 2),
        t = a[0],
        a = a[1],
        t =
          "" ===
            (t = (function (t) {
              var a = h.querySelector("script[" + t + "]");
              if (a) return a.getAttribute(t);
            })(t)) ||
          ("false" !== t && ("true" === t || t));
      null != t && (G[a] = t);
    });
  c = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: "fa",
    replacementClass: A,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0,
  };
  G.familyPrefix && (G.cssPrefix = G.familyPrefix);
  var K = k(k({}, c), G);
  K.autoReplaceSvg || (K.observeMutations = !1);
  var J = {};
  Object.keys(c).forEach(function (a) {
    Object.defineProperty(J, a, {
      enumerable: !0,
      set: function (t) {
        (K[a] = t),
          Q.forEach(function (t) {
            return t(J);
          });
      },
      get: function () {
        return K[a];
      },
    });
  }),
    Object.defineProperty(J, "familyPrefix", {
      enumerable: !0,
      set: function (t) {
        (K.cssPrefix = t),
          Q.forEach(function (t) {
            return t(J);
          });
      },
      get: function () {
        return K.cssPrefix;
      },
    }),
    (g.FontAwesomeConfig = J);
  var Q = [];
  var Z = x,
    $ = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
  var tt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function at() {
    for (var t = 12, a = ""; 0 < t--; ) a += tt[(62 * Math.random()) | 0];
    return a;
  }
  function et(t) {
    for (var a = [], e = (t || []).length >>> 0; e--; ) a[e] = t[e];
    return a;
  }
  function nt(t) {
    return t.classList
      ? et(t.classList)
      : (t.getAttribute("class") || "").split(" ").filter(function (t) {
          return t;
        });
  }
  function it(t) {
    return ""
      .concat(t)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function rt(e) {
    return Object.keys(e || {}).reduce(function (t, a) {
      return t + "".concat(a, ": ").concat(e[a].trim(), ";");
    }, "");
  }
  function ot(t) {
    return (
      t.size !== $.size ||
      t.x !== $.x ||
      t.y !== $.y ||
      t.rotate !== $.rotate ||
      t.flipX ||
      t.flipY
    );
  }
  function st() {
    var t,
      a,
      e = A,
      n = J.cssPrefix,
      i = J.replacementClass,
      r =
        ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}';
    return (
      ("fa" === n && i === e) ||
        ((t = new RegExp("\\.".concat("fa", "\\-"), "g")),
        (a = new RegExp("\\--".concat("fa", "\\-"), "g")),
        (e = new RegExp("\\.".concat(e), "g")),
        (r = r
          .replace(t, ".".concat(n, "-"))
          .replace(a, "--".concat(n, "-"))
          .replace(e, ".".concat(i)))),
      r
    );
  }
  var ct = !1;
  function ft() {
    J.autoAddCss &&
      !ct &&
      ((function (t) {
        if (t && y) {
          var a = h.createElement("style");
          a.setAttribute("type", "text/css"), (a.innerHTML = t);
          for (
            var e = h.head.childNodes, n = null, i = e.length - 1;
            -1 < i;
            i--
          ) {
            var r = e[i],
              o = (r.tagName || "").toUpperCase();
            -1 < ["STYLE", "LINK"].indexOf(o) && (n = r);
          }
          h.head.insertBefore(a, n);
        }
      })(st()),
      (ct = !0));
  }
  (b = {
    mixout: function () {
      return { dom: { css: st, insertCss: ft } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          ft();
        },
        beforeI2svg: function () {
          ft();
        },
      };
    },
  }),
    (f = g || {});
  f[a] || (f[a] = {}),
    f[a].styles || (f[a].styles = {}),
    f[a].hooks || (f[a].hooks = {}),
    f[a].shims || (f[a].shims = []);
  function lt() {
    h.removeEventListener("DOMContentLoaded", lt),
      (dt = 1),
      mt.map(function (t) {
        return t();
      });
  }
  var ut = f[a],
    mt = [],
    dt = !1;
  function bt(t) {
    y && (dt ? setTimeout(t, 0) : mt.push(t));
  }
  function vt(t) {
    var e,
      a = t.tag,
      n = t.attributes,
      i = void 0 === n ? {} : n,
      n = t.children,
      n = void 0 === n ? [] : n;
    return "string" == typeof t
      ? it(t)
      : "<"
          .concat(a, " ")
          .concat(
            ((e = i),
            Object.keys(e || {})
              .reduce(function (t, a) {
                return t + "".concat(a, '="').concat(it(e[a]), '" ');
              }, "")
              .trim()),
            ">"
          )
          .concat(n.map(vt).join(""), "</")
          .concat(a, ">");
  }
  function pt(t, a, e) {
    if (t && t[a] && t[a][e]) return { prefix: a, iconName: e, icon: t[a][e] };
  }
  y &&
    ((dt = (h.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
      h.readyState
    )) ||
      h.addEventListener("DOMContentLoaded", lt));
  function gt(t, a, e, n) {
    for (
      var i,
        r,
        o = Object.keys(t),
        s = o.length,
        c = void 0 !== n ? ht(a, n) : a,
        f = void 0 === e ? ((i = 1), t[o[0]]) : ((i = 0), e);
      i < s;
      i++
    )
      f = c(f, t[(r = o[i])], r, t);
    return f;
  }
  var ht = function (i, r) {
    return function (t, a, e, n) {
      return i.call(r, t, a, e, n);
    };
  };
  function yt(t) {
    t = (function (t) {
      for (var a = [], e = 0, n = t.length; e < n; ) {
        var i,
          r = t.charCodeAt(e++);
        55296 <= r && r <= 56319 && e < n
          ? 56320 == (64512 & (i = t.charCodeAt(e++)))
            ? a.push(((1023 & r) << 10) + (1023 & i) + 65536)
            : (a.push(r), e--)
          : a.push(r);
      }
      return a;
    })(t);
    return 1 === t.length ? t[0].toString(16) : null;
  }
  function kt(n) {
    return Object.keys(n).reduce(function (t, a) {
      var e = n[a];
      return !!e.icon ? (t[e.iconName] = e.icon) : (t[a] = e), t;
    }, {});
  }
  function wt(t, a, e) {
    var n = (2 < arguments.length && void 0 !== e ? e : {}).skipHooks,
      e = void 0 !== n && n,
      n = kt(a);
    "function" != typeof ut.hooks.addPack || e
      ? (ut.styles[t] = k(k({}, ut.styles[t] || {}), n))
      : ut.hooks.addPack(t, kt(a)),
      "fas" === t && wt("fa", a);
  }
  var xt = ut.styles,
    At = ut.shims,
    Ot = (s((u = {}), I, Object.values(F[I])), s(u, L, Object.values(F[L])), u),
    Nt = null,
    Pt = {},
    Ct = {},
    St = {},
    jt = {},
    Et = {},
    zt = (s((c = {}), I, Object.keys(T[I])), s(c, L, Object.keys(T[L])), c);
  function Mt(t, a) {
    var e = a.split("-"),
      a = e[0],
      e = e.slice(1).join("-");
    return a !== t || "" === e || ~V.indexOf(e) ? null : e;
  }
  function It() {
    function t(n) {
      return gt(
        xt,
        function (t, a, e) {
          return (t[e] = gt(a, n, {})), t;
        },
        {}
      );
    }
    (Pt = t(function (a, t, e) {
      return (
        t[3] && (a[t[3]] = e),
        t[2] &&
          t[2]
            .filter(function (t) {
              return "number" == typeof t;
            })
            .forEach(function (t) {
              a[t.toString(16)] = e;
            }),
        a
      );
    })),
      (Ct = t(function (a, t, e) {
        return (
          (a[e] = e),
          t[2] &&
            t[2]
              .filter(function (t) {
                return "string" == typeof t;
              })
              .forEach(function (t) {
                a[t] = e;
              }),
          a
        );
      })),
      (Et = t(function (a, t, e) {
        t = t[2];
        return (
          (a[e] = e),
          t.forEach(function (t) {
            a[t] = e;
          }),
          a
        );
      }));
    var i = "far" in xt || J.autoFetchSvg,
      a = gt(
        At,
        function (t, a) {
          var e = a[0],
            n = a[1],
            a = a[2];
          return (
            "far" !== n || i || (n = "fas"),
            "string" == typeof e && (t.names[e] = { prefix: n, iconName: a }),
            "number" == typeof e &&
              (t.unicodes[e.toString(16)] = { prefix: n, iconName: a }),
            t
          );
        },
        { names: {}, unicodes: {} }
      );
    (St = a.names),
      (jt = a.unicodes),
      (Nt = Dt(J.styleDefault, { family: J.familyDefault }));
  }
  function Lt(t, a) {
    return (Pt[t] || {})[a];
  }
  function Yt(t, a) {
    return (Et[t] || {})[a];
  }
  function Rt(t) {
    return St[t] || { prefix: null, iconName: null };
  }
  (f = function (t) {
    Nt = Dt(t.styleDefault, { family: J.familyDefault });
  }),
    Q.push(f),
    It();
  function Tt() {
    return { prefix: null, iconName: null, rest: [] };
  }
  function Dt(t, a) {
    var e = (1 < arguments.length && void 0 !== a ? a : {}).family,
      a = void 0 === e ? I : e,
      e = T[a][t],
      e = D[a][t] || D[a][e],
      t = t in ut.styles ? t : null;
    return e || t || null;
  }
  var Ft = (s((a = {}), I, Object.keys(F[I])), s(a, L, Object.keys(F[L])), a);
  function Ht(t, a) {
    var a = (1 < arguments.length && void 0 !== a ? a : {}).skipLookups,
      n = void 0 !== a && a,
      i =
        (s((a = {}), I, "".concat(J.cssPrefix, "-").concat(I)),
        s(a, L, "".concat(J.cssPrefix, "-").concat(L)),
        a),
      r = null,
      o = I;
    (t.includes(i[I]) ||
      t.some(function (t) {
        return Ft[I].includes(t);
      })) &&
      (o = I),
      (t.includes(i[L]) ||
        t.some(function (t) {
          return Ft[L].includes(t);
        })) &&
        (o = L);
    a = t.reduce(function (t, a) {
      var e = Mt(J.cssPrefix, a);
      return (
        xt[a]
          ? ((a = Ot[o].includes(a) ? H[o][a] : a), (r = a), (t.prefix = a))
          : -1 < zt[o].indexOf(a)
          ? ((r = a), (t.prefix = Dt(a, { family: o })))
          : e
          ? (t.iconName = e)
          : a !== J.replacementClass &&
            a !== i[I] &&
            a !== i[L] &&
            t.rest.push(a),
        !n &&
          t.prefix &&
          t.iconName &&
          ((e = "fa" === r ? Rt(t.iconName) : {}),
          (a = Yt(t.prefix, t.iconName)),
          e.prefix && (r = null),
          (t.iconName = e.iconName || a || t.iconName),
          (t.prefix = e.prefix || t.prefix),
          "far" !== t.prefix ||
            xt.far ||
            !xt.fas ||
            J.autoFetchSvg ||
            (t.prefix = "fas")),
        t
      );
    }, Tt());
    return (
      (t.includes("fa-brands") || t.includes("fab")) && (a.prefix = "fab"),
      (t.includes("fa-duotone") || t.includes("fad")) && (a.prefix = "fad"),
      a.prefix ||
        o !== L ||
        (!xt.fass && !J.autoFetchSvg) ||
        ((a.prefix = "fass"),
        (a.iconName = Yt(a.prefix, a.iconName) || a.iconName)),
      ("fa" !== a.prefix && "fa" !== r) || (a.prefix = Nt || "fas"),
      a
    );
  }
  var u = (function () {
      function t() {
        !(function (t, a) {
          if (!(t instanceof a))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.definitions = {});
      }
      var a, e, n;
      return (
        (a = t),
        (e = [
          {
            key: "add",
            value: function () {
              for (
                var e = this, t = arguments.length, a = new Array(t), n = 0;
                n < t;
                n++
              )
                a[n] = arguments[n];
              var i = a.reduce(this._pullDefinitions, {});
              Object.keys(i).forEach(function (t) {
                (e.definitions[t] = k(k({}, e.definitions[t] || {}), i[t])),
                  wt(t, i[t]);
                var a = F[I][t];
                a && wt(a, i[t]), It();
              });
            },
          },
          {
            key: "reset",
            value: function () {
              this.definitions = {};
            },
          },
          {
            key: "_pullDefinitions",
            value: function (i, t) {
              var r = t.prefix && t.iconName && t.icon ? { 0: t } : t;
              return (
                Object.keys(r).map(function (t) {
                  var a = r[t],
                    e = a.prefix,
                    t = a.iconName,
                    n = a.icon,
                    a = n[2];
                  i[e] || (i[e] = {}),
                    0 < a.length &&
                      a.forEach(function (t) {
                        "string" == typeof t && (i[e][t] = n);
                      }),
                    (i[e][t] = n);
                }),
                i
              );
            },
          },
        ]) && r(a.prototype, e),
        n && r(a, n),
        Object.defineProperty(a, "prototype", { writable: !1 }),
        t
      );
    })(),
    c = [],
    Wt = {},
    _t = {},
    Ut = Object.keys(_t);
  function Xt(t, a) {
    for (
      var e = arguments.length, n = new Array(2 < e ? e - 2 : 0), i = 2;
      i < e;
      i++
    )
      n[i - 2] = arguments[i];
    return (
      (Wt[t] || []).forEach(function (t) {
        a = t.apply(null, [a].concat(n));
      }),
      a
    );
  }
  function Bt(t) {
    for (
      var a = arguments.length, e = new Array(1 < a ? a - 1 : 0), n = 1;
      n < a;
      n++
    )
      e[n - 1] = arguments[n];
    (Wt[t] || []).forEach(function (t) {
      t.apply(null, e);
    });
  }
  function qt(t) {
    var a = t,
      t = Array.prototype.slice.call(arguments, 1);
    return _t[a] ? _t[a].apply(null, t) : void 0;
  }
  function Vt(t) {
    "fa" === t.prefix && (t.prefix = "fas");
    var a = t.iconName,
      t = t.prefix || Nt;
    if (a)
      return (
        (a = Yt(t, a) || a), pt(Gt.definitions, t, a) || pt(ut.styles, t, a)
      );
  }
  var Gt = new u(),
    Kt = {
      noAuto: function () {
        (J.autoReplaceSvg = !1), (J.observeMutations = !1), Bt("noAuto");
      },
      config: J,
      dom: {
        i2svg: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          return y
            ? (Bt("beforeI2svg", t),
              qt("pseudoElements2svg", t),
              qt("i2svg", t))
            : Promise.reject("Operation requires a DOM of some kind.");
        },
        watch: function () {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            a = t.autoReplaceSvgRoot;
          !1 === J.autoReplaceSvg && (J.autoReplaceSvg = !0),
            (J.observeMutations = !0),
            bt(function () {
              Jt({ autoReplaceSvgRoot: a }), Bt("watch", t);
            });
        },
      },
      parse: {
        icon: function (t) {
          if (null === t) return null;
          if ("object" === i(t) && t.prefix && t.iconName)
            return {
              prefix: t.prefix,
              iconName: Yt(t.prefix, t.iconName) || t.iconName,
            };
          if (Array.isArray(t) && 2 === t.length) {
            var a = 0 === t[1].indexOf("fa-") ? t[1].slice(3) : t[1],
              e = Dt(t[0]);
            return { prefix: e, iconName: Yt(e, a) || a };
          }
          if (
            "string" == typeof t &&
            (-1 < t.indexOf("".concat(J.cssPrefix, "-")) || t.match(W))
          ) {
            a = Ht(t.split(" "), { skipLookups: !0 });
            return {
              prefix: a.prefix || Nt,
              iconName: Yt(a.prefix, a.iconName) || a.iconName,
            };
          }
          return "string" == typeof t
            ? { prefix: Nt, iconName: Yt(Nt, t) || t }
            : void 0;
        },
      },
      library: Gt,
      findIconDefinition: Vt,
      toHtml: vt,
    },
    Jt = function () {
      var t = (
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        ).autoReplaceSvgRoot,
        t = void 0 === t ? h : t;
      (0 < Object.keys(ut.styles).length || J.autoFetchSvg) &&
        y &&
        J.autoReplaceSvg &&
        Kt.dom.i2svg({ node: t });
    };
  function Qt(a, t) {
    return (
      Object.defineProperty(a, "abstract", { get: t }),
      Object.defineProperty(a, "html", {
        get: function () {
          return a.abstract.map(vt);
        },
      }),
      Object.defineProperty(a, "node", {
        get: function () {
          if (y) {
            var t = h.createElement("div");
            return (t.innerHTML = a.html), t.children;
          }
        },
      }),
      a
    );
  }
  function Zt(t) {
    var a = t.icons,
      e = a.main,
      n = a.mask,
      i = t.prefix,
      r = t.iconName,
      o = t.transform,
      s = t.symbol,
      c = t.title,
      f = t.maskId,
      l = t.titleId,
      u = t.extra,
      m = t.watchable,
      d = void 0 !== m && m,
      b = n.found ? n : e,
      a = b.width,
      t = b.height,
      m = "fak" === i,
      b = [J.replacementClass, r ? "".concat(J.cssPrefix, "-").concat(r) : ""]
        .filter(function (t) {
          return -1 === u.classes.indexOf(t);
        })
        .filter(function (t) {
          return "" !== t || !!t;
        })
        .concat(u.classes)
        .join(" "),
      b = {
        children: [],
        attributes: k(
          k({}, u.attributes),
          {},
          {
            "data-prefix": i,
            "data-icon": r,
            class: b,
            role: u.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(a, " ").concat(t),
          }
        ),
      },
      t =
        m && !~u.classes.indexOf("fa-fw")
          ? { width: "".concat((a / t) * 16 * 0.0625, "em") }
          : {};
    d && (b.attributes[O] = ""),
      c &&
        (b.children.push({
          tag: "title",
          attributes: {
            id: b.attributes["aria-labelledby"] || "title-".concat(l || at()),
          },
          children: [c],
        }),
        delete b.attributes.title);
    var v,
      p,
      g,
      h,
      y,
      t = k(
        k({}, b),
        {},
        {
          prefix: i,
          iconName: r,
          main: e,
          mask: n,
          maskId: f,
          transform: o,
          symbol: s,
          styles: k(k({}, t), u.styles),
        }
      ),
      n =
        n.found && e.found
          ? qt("generateAbstractMask", t) || { children: [], attributes: {} }
          : qt("generateAbstractIcon", t) || { children: [], attributes: {} },
      e = n.children,
      n = n.attributes;
    return (
      (t.children = e),
      (t.attributes = n),
      s
        ? ((p = (v = t).prefix),
          (g = v.iconName),
          (h = v.children),
          (y = v.attributes),
          (v =
            !0 === (v = v.symbol)
              ? "".concat(p, "-").concat(J.cssPrefix, "-").concat(g)
              : v),
          [
            {
              tag: "svg",
              attributes: { style: "display: none;" },
              children: [
                {
                  tag: "symbol",
                  attributes: k(k({}, y), {}, { id: v }),
                  children: h,
                },
              ],
            },
          ])
        : ((g = (p = t).children),
          (y = p.main),
          (v = p.mask),
          (h = p.attributes),
          (t = p.styles),
          ot((p = p.transform)) &&
            y.found &&
            !v.found &&
            ((v = y.width / y.height / 2),
            (y = 0.5),
            (h.style = rt(
              k(
                k({}, t),
                {},
                {
                  "transform-origin": ""
                    .concat(v + p.x / 16, "em ")
                    .concat(y + p.y / 16, "em"),
                }
              )
            ))),
          [{ tag: "svg", attributes: h, children: g }])
    );
  }
  function $t(t) {
    var a = t.content,
      e = t.width,
      n = t.height,
      i = t.transform,
      r = t.title,
      o = t.extra,
      s = t.watchable,
      c = void 0 !== s && s,
      t = k(
        k(k({}, o.attributes), r ? { title: r } : {}),
        {},
        { class: o.classes.join(" ") }
      );
    c && (t[O] = "");
    s = k({}, o.styles);
    ot(i) &&
      ((s.transform =
        ((o = (c = { transform: i, startCentered: !0, width: e, height: n })
          .transform),
        (i = c.width),
        (n = void 0 === (e = c.height) ? x : e),
        (c = void 0 !== (e = c.startCentered) && e),
        (e = ""),
        (e +=
          c && w
            ? "translate("
                .concat(o.x / Z - (void 0 === i ? x : i) / 2, "em, ")
                .concat(o.y / Z - n / 2, "em) ")
            : c
            ? "translate(calc(-50% + "
                .concat(o.x / Z, "em), calc(-50% + ")
                .concat(o.y / Z, "em)) ")
            : "translate(".concat(o.x / Z, "em, ").concat(o.y / Z, "em) ")),
        (e += "scale("
          .concat((o.size / Z) * (o.flipX ? -1 : 1), ", ")
          .concat((o.size / Z) * (o.flipY ? -1 : 1), ") ")),
        (e += "rotate(".concat(o.rotate, "deg) ")))),
      (s["-webkit-transform"] = s.transform));
    s = rt(s);
    0 < s.length && (t.style = s);
    s = [];
    return (
      s.push({ tag: "span", attributes: t, children: [a] }),
      r &&
        s.push({
          tag: "span",
          attributes: { class: "sr-only" },
          children: [r],
        }),
      s
    );
  }
  var ta = ut.styles;
  function aa(t) {
    var a = t[0],
      e = t[1],
      t = m(t.slice(4), 1)[0];
    return {
      found: !0,
      width: a,
      height: e,
      icon: Array.isArray(t)
        ? {
            tag: "g",
            attributes: { class: "".concat(J.cssPrefix, "-").concat(q.GROUP) },
            children: [
              {
                tag: "path",
                attributes: {
                  class: "".concat(J.cssPrefix, "-").concat(q.SECONDARY),
                  fill: "currentColor",
                  d: t[0],
                },
              },
              {
                tag: "path",
                attributes: {
                  class: "".concat(J.cssPrefix, "-").concat(q.PRIMARY),
                  fill: "currentColor",
                  d: t[1],
                },
              },
            ],
          }
        : { tag: "path", attributes: { fill: "currentColor", d: t } },
    };
  }
  var ea = { found: !1, width: 512, height: 512 };
  function na(i, r) {
    var o = r;
    return (
      "fa" === r && null !== J.styleDefault && (r = Nt),
      new Promise(function (t, a) {
        var e, n;
        qt("missingIconAbstract");
        if (
          ("fa" === o &&
            ((n = Rt(i) || {}), (i = n.iconName || i), (r = n.prefix || r)),
          i && r && ta[r] && ta[r][i])
        )
          return t(aa(ta[r][i]));
        (e = i),
          (n = r),
          M ||
            J.showMissingIcons ||
            !e ||
            console.error(
              'Icon with name "'
                .concat(e, '" and prefix "')
                .concat(n, '" is missing.')
            ),
          t(
            k(
              k({}, ea),
              {},
              {
                icon:
                  (J.showMissingIcons && i && qt("missingIconAbstract")) || {},
              }
            )
          );
      })
    );
  }
  function ia() {}
  function ra(t) {
    oa.mark("".concat(sa, " ").concat(t, " ends")),
      oa.measure(
        "".concat(sa, " ").concat(t),
        "".concat(sa, " ").concat(t, " begins"),
        "".concat(sa, " ").concat(t, " ends")
      );
  }
  var oa =
      J.measurePerformance && d && d.mark && d.measure
        ? d
        : { mark: ia, measure: ia },
    sa = 'FA "6.2.1"',
    ca = {
      begin: function (t) {
        return (
          oa.mark("".concat(sa, " ").concat(t, " begins")),
          function () {
            return ra(t);
          }
        );
      },
      end: ra,
    },
    fa = function () {};
  function la(t) {
    return "string" == typeof (t.getAttribute ? t.getAttribute(O) : null);
  }
  function ua(t) {
    return h.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function ma(t) {
    return h.createElement(t);
  }
  var da = {
    replace: function (t) {
      var a = t[0];
      a.parentNode &&
        (t[1].forEach(function (t) {
          a.parentNode.insertBefore(
            (function a(e, t) {
              var t = (1 < arguments.length && void 0 !== t ? t : {}).ceFn,
                n = void 0 === t ? ("svg" === e.tag ? ua : ma) : t;
              if ("string" == typeof e) return h.createTextNode(e);
              var i = n(e.tag);
              return (
                Object.keys(e.attributes || []).forEach(function (t) {
                  i.setAttribute(t, e.attributes[t]);
                }),
                (e.children || []).forEach(function (t) {
                  i.appendChild(a(t, { ceFn: n }));
                }),
                i
              );
            })(t),
            a
          );
        }),
        null === a.getAttribute(O) && J.keepOriginalSource
          ? ((t = h.createComment(" ".concat(a.outerHTML, " "))),
            a.parentNode.replaceChild(t, a))
          : a.remove());
    },
    nest: function (t) {
      var a = t[0],
        e = t[1];
      if (~nt(a).indexOf(J.replacementClass)) return da.replace(t);
      var n = new RegExp("".concat(J.cssPrefix, "-.*"));
      delete e[0].attributes.id,
        e[0].attributes.class &&
          ((t = e[0].attributes.class.split(" ").reduce(
            function (t, a) {
              return (
                (a === J.replacementClass || a.match(n)
                  ? t.toSvg
                  : t.toNode
                ).push(a),
                t
              );
            },
            { toNode: [], toSvg: [] }
          )),
          (e[0].attributes.class = t.toSvg.join(" ")),
          0 === t.toNode.length
            ? a.removeAttribute("class")
            : a.setAttribute("class", t.toNode.join(" ")));
      e = e.map(vt).join("\n");
      a.setAttribute(O, ""), (a.innerHTML = e);
    },
  };
  function ba(t) {
    t();
  }
  function va(e, t) {
    var n = "function" == typeof t ? t : fa;
    0 === e.length
      ? n()
      : (J.mutateApproach === E ? g.requestAnimationFrame || ba : ba)(
          function () {
            var t =
                (!0 !== J.autoReplaceSvg && da[J.autoReplaceSvg]) || da.replace,
              a = ca.begin("mutate");
            e.map(t), a(), n();
          }
        );
  }
  var pa = !1;
  function ga() {
    pa = !0;
  }
  function ha() {
    pa = !1;
  }
  var ya = null;
  function ka(t) {
    var r, o, a, s;
    v &&
      J.observeMutations &&
      ((a = t.treeCallback),
      (r = void 0 === a ? fa : a),
      (a = t.nodeCallback),
      (o = void 0 === a ? fa : a),
      (a = t.pseudoElementsCallback),
      (s = void 0 === a ? fa : a),
      (t = void 0 === (t = t.observeMutationsRoot) ? h : t),
      (ya = new v(function (t) {
        var i;
        pa ||
          ((i = Nt),
          et(t).forEach(function (t) {
            var a, e, n;
            "childList" === t.type &&
              0 < t.addedNodes.length &&
              !la(t.addedNodes[0]) &&
              (J.searchPseudoElements && s(t.target), r(t.target)),
              "attributes" === t.type &&
                t.target.parentNode &&
                J.searchPseudoElements &&
                s(t.target.parentNode),
              "attributes" === t.type &&
                la(t.target) &&
                ~B.indexOf(t.attributeName) &&
                ("class" === t.attributeName &&
                ((e = t.target),
                (n = e.getAttribute ? e.getAttribute(C) : null),
                (e = e.getAttribute ? e.getAttribute(S) : null),
                n && e)
                  ? ((e = (a = Ht(nt(t.target))).prefix),
                    (a = a.iconName),
                    t.target.setAttribute(C, e || i),
                    a && t.target.setAttribute(S, a))
                  : (a = t.target) &&
                    a.classList &&
                    a.classList.contains &&
                    a.classList.contains(J.replacementClass) &&
                    o(t.target));
          }));
      })),
      y &&
        ya.observe(t, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        }));
  }
  function wa(t) {
    var a = t.getAttribute("data-prefix"),
      e = t.getAttribute("data-icon"),
      n = void 0 !== t.innerText ? t.innerText.trim() : "",
      i = Ht(nt(t));
    return (
      i.prefix || (i.prefix = Nt),
      a && e && ((i.prefix = a), (i.iconName = e)),
      (i.iconName && i.prefix) ||
        (i.prefix &&
          0 < n.length &&
          (i.iconName =
            ((e = i.prefix),
            (n = t.innerText),
            (Ct[e] || {})[n] || Lt(i.prefix, yt(t.innerText)))),
        !i.iconName &&
          J.autoFetchSvg &&
          t.firstChild &&
          t.firstChild.nodeType === Node.TEXT_NODE &&
          (i.iconName = t.firstChild.data)),
      i
    );
  }
  function xa(t, a) {
    var e = 1 < arguments.length && void 0 !== a ? a : { styleParser: !0 },
      n = wa(t),
      i = n.iconName,
      r = n.prefix,
      o = n.rest,
      s =
        ((a = et((s = t).attributes).reduce(function (t, a) {
          return (
            "class" !== t.name && "style" !== t.name && (t[a.name] = a.value), t
          );
        }, {})),
        (n = s.getAttribute("title")),
        (s = s.getAttribute("data-fa-title-id")),
        J.autoA11y &&
          (n
            ? (a["aria-labelledby"] = ""
                .concat(J.replacementClass, "-title-")
                .concat(s || at()))
            : ((a["aria-hidden"] = "true"), (a.focusable = "false"))),
        a),
      a = Xt("parseNodeAttributes", {}, t),
      c = e.styleParser
        ? ((e = (c = t).getAttribute("style")),
          (c = []),
          (c = e
            ? e.split(";").reduce(function (t, a) {
                var e = a.split(":"),
                  a = e[0],
                  e = e.slice(1);
                return a && 0 < e.length && (t[a] = e.join(":").trim()), t;
              }, {})
            : c))
        : [];
    return k(
      {
        iconName: i,
        title: t.getAttribute("title"),
        titleId: t.getAttribute("data-fa-title-id"),
        prefix: r,
        transform: $,
        mask: { iconName: null, prefix: null, rest: [] },
        maskId: null,
        symbol: !1,
        extra: { classes: o, styles: c, attributes: s },
      },
      a
    );
  }
  var Aa = ut.styles;
  function Oa(t) {
    var a = "nest" === J.autoReplaceSvg ? xa(t, { styleParser: !1 }) : xa(t);
    return ~a.extra.classes.indexOf(_)
      ? qt("generateLayersText", t, a)
      : qt("generateSvgReplacementMutation", t, a);
  }
  var Na = new Set();
  function Pa(t) {
    var n =
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    if (!y) return Promise.resolve();
    function i(t) {
      return a.add("".concat(j, "-").concat(t));
    }
    function r(t) {
      return a.remove("".concat(j, "-").concat(t));
    }
    var a = h.documentElement.classList,
      e = J.autoFetchSvg
        ? Na
        : Y.map(function (t) {
            return "fa-".concat(t);
          }).concat(Object.keys(Aa));
    e.includes("fa") || e.push("fa");
    var o = [".".concat(_, ":not([").concat(O, "])")]
      .concat(
        e.map(function (t) {
          return ".".concat(t, ":not([").concat(O, "])");
        })
      )
      .join(", ");
    if (0 === o.length) return Promise.resolve();
    e = [];
    try {
      e = et(t.querySelectorAll(o));
    } catch (t) {}
    if (!(0 < e.length)) return Promise.resolve();
    i("pending"), r("complete");
    var s = ca.begin("onTree"),
      c = e.reduce(function (t, a) {
        try {
          var e = Oa(a);
          e && t.push(e);
        } catch (t) {
          M || ("MissingIcon" === t.name && console.error(t));
        }
        return t;
      }, []);
    return new Promise(function (a, e) {
      Promise.all(c)
        .then(function (t) {
          va(t, function () {
            i("active"),
              i("complete"),
              r("pending"),
              "function" == typeof n && n(),
              s(),
              a();
          });
        })
        .catch(function (t) {
          s(), e(t);
        });
    });
  }
  function Ca(t) {
    var a =
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    Oa(t).then(function (t) {
      t && va([t], a);
    });
  }
  Y.map(function (t) {
    Na.add("fa-".concat(t));
  }),
    Object.keys(T[I]).map(Na.add.bind(Na)),
    Object.keys(T[L]).map(Na.add.bind(Na));
  function Sa(t) {
    var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      e = a.transform,
      n = void 0 === e ? $ : e,
      i = void 0 !== (e = a.symbol) && e,
      r = void 0 === (e = a.mask) ? null : e,
      o = void 0 === (e = a.maskId) ? null : e,
      s = void 0 === (e = a.title) ? null : e,
      c = void 0 === (e = a.titleId) ? null : e,
      f = void 0 === (e = a.classes) ? [] : e,
      l = void 0 === (e = a.attributes) ? {} : e,
      u = void 0 === (e = a.styles) ? {} : e;
    if (t) {
      var m = t.prefix,
        d = t.iconName,
        b = t.icon;
      return Qt(k({ type: "icon" }, t), function () {
        return (
          Bt("beforeDOMElementCreation", { iconDefinition: t, params: a }),
          J.autoA11y &&
            (s
              ? (l["aria-labelledby"] = ""
                  .concat(J.replacementClass, "-title-")
                  .concat(c || at()))
              : ((l["aria-hidden"] = "true"), (l.focusable = "false"))),
          Zt({
            icons: {
              main: aa(b),
              mask: r
                ? aa(r.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: m,
            iconName: d,
            transform: k(k({}, $), n),
            symbol: i,
            title: s,
            maskId: o,
            titleId: c,
            extra: { attributes: l, styles: u, classes: f },
          })
        );
      });
    }
  }
  var Na = l(Na),
    f = {
      mixout: function () {
        return {
          icon:
            ((n = Sa),
            function (t) {
              var a =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                e = (t || {}).icon ? t : Vt(t || {}),
                t = (t = a.mask) && ((t || {}).icon ? t : Vt(t || {}));
              return n(e, k(k({}, a), {}, { mask: t }));
            }),
        };
        var n;
      },
      hooks: function () {
        return {
          mutationObserverCallbacks: function (t) {
            return (t.treeCallback = Pa), (t.nodeCallback = Ca), t;
          },
        };
      },
      provides: function (t) {
        (t.i2svg = function (t) {
          var a = t.node,
            t = t.callback;
          return Pa(void 0 === a ? h : a, void 0 === t ? function () {} : t);
        }),
          (t.generateSvgReplacementMutation = function (n, t) {
            var i = t.iconName,
              r = t.title,
              o = t.titleId,
              s = t.prefix,
              c = t.transform,
              f = t.symbol,
              a = t.mask,
              l = t.maskId,
              u = t.extra;
            return new Promise(function (e, t) {
              Promise.all([
                na(i, s),
                a.iconName
                  ? na(a.iconName, a.prefix)
                  : Promise.resolve({
                      found: !1,
                      width: 512,
                      height: 512,
                      icon: {},
                    }),
              ])
                .then(function (t) {
                  var a = m(t, 2),
                    t = a[0],
                    a = a[1];
                  e([
                    n,
                    Zt({
                      icons: { main: t, mask: a },
                      prefix: s,
                      iconName: i,
                      transform: c,
                      symbol: f,
                      maskId: l,
                      title: r,
                      titleId: o,
                      extra: u,
                      watchable: !0,
                    }),
                  ]);
                })
                .catch(t);
            });
          }),
          (t.generateAbstractIcon = function (t) {
            var a,
              e = t.children,
              n = t.attributes,
              i = t.main,
              r = t.transform,
              t = rt(t.styles);
            return (
              0 < t.length && (n.style = t),
              ot(r) &&
                (a = qt("generateAbstractTransformGrouping", {
                  main: i,
                  transform: r,
                  containerWidth: i.width,
                  iconWidth: i.width,
                })),
              e.push(a || i.icon),
              { children: e, attributes: n }
            );
          });
      },
    },
    a = {
      mixout: function () {
        return {
          layer: function (t) {
            var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = e.classes,
              n = void 0 === a ? [] : a;
            return Qt({ type: "layer" }, function () {
              Bt("beforeDOMElementCreation", { assembler: t, params: e });
              var a = [];
              return (
                t(function (t) {
                  Array.isArray(t)
                    ? t.map(function (t) {
                        a = a.concat(t.abstract);
                      })
                    : (a = a.concat(t.abstract));
                }),
                [
                  {
                    tag: "span",
                    attributes: {
                      class: ["".concat(J.cssPrefix, "-layers")]
                        .concat(l(n))
                        .join(" "),
                    },
                    children: a,
                  },
                ]
              );
            });
          },
        };
      },
    },
    u = {
      mixout: function () {
        return {
          counter: function (i) {
            var r =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = r.title,
              o = void 0 === t ? null : t,
              t = r.classes,
              s = void 0 === t ? [] : t,
              t = r.attributes,
              c = void 0 === t ? {} : t,
              t = r.styles,
              f = void 0 === t ? {} : t;
            return Qt({ type: "counter", content: i }, function () {
              return (
                Bt("beforeDOMElementCreation", { content: i, params: r }),
                (t = {
                  content: i.toString(),
                  title: o,
                  extra: {
                    attributes: c,
                    styles: f,
                    classes: ["".concat(J.cssPrefix, "-layers-counter")].concat(
                      l(s)
                    ),
                  },
                }),
                (a = t.content),
                (e = t.title),
                (n = t.extra),
                (t = k(
                  k(k({}, n.attributes), e ? { title: e } : {}),
                  {},
                  { class: n.classes.join(" ") }
                )),
                0 < (n = rt(n.styles)).length && (t.style = n),
                (n = []).push({ tag: "span", attributes: t, children: [a] }),
                e &&
                  n.push({
                    tag: "span",
                    attributes: { class: "sr-only" },
                    children: [e],
                  }),
                n
              );
              var t, a, e, n;
            });
          },
        };
      },
    },
    d = {
      mixout: function () {
        return {
          text: function (t) {
            var a =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              e = a.transform,
              n = void 0 === e ? $ : e,
              e = a.title,
              i = void 0 === e ? null : e,
              e = a.classes,
              r = void 0 === e ? [] : e,
              e = a.attributes,
              o = void 0 === e ? {} : e,
              e = a.styles,
              s = void 0 === e ? {} : e;
            return Qt({ type: "text", content: t }, function () {
              return (
                Bt("beforeDOMElementCreation", { content: t, params: a }),
                $t({
                  content: t,
                  transform: k(k({}, $), n),
                  title: i,
                  extra: {
                    attributes: o,
                    styles: s,
                    classes: ["".concat(J.cssPrefix, "-layers-text")].concat(
                      l(r)
                    ),
                  },
                })
              );
            });
          },
        };
      },
      provides: function (t) {
        t.generateLayersText = function (t, a) {
          var e,
            n = a.title,
            i = a.transform,
            r = a.extra,
            o = null,
            s = null;
          return (
            w &&
              ((e = parseInt(getComputedStyle(t).fontSize, 10)),
              (o = (a = t.getBoundingClientRect()).width / e),
              (s = a.height / e)),
            J.autoA11y && !n && (r.attributes["aria-hidden"] = "true"),
            Promise.resolve([
              t,
              $t({
                content: t.innerHTML,
                width: o,
                height: s,
                transform: i,
                title: n,
                extra: r,
                watchable: !0,
              }),
            ])
          );
        };
      },
    },
    ja = new RegExp('"', "ug"),
    Ea = [1105920, 1112319];
  function za(b, v) {
    var p = "".concat(P).concat(v.replace(":", "-"));
    return new Promise(function (e, t) {
      if (null !== b.getAttribute(p)) return e();
      var n,
        i,
        r,
        o,
        a,
        s,
        c,
        f = et(b.children).filter(function (t) {
          return t.getAttribute(N) === v;
        })[0],
        l = g.getComputedStyle(b, v),
        u = l.getPropertyValue("font-family").match(U),
        m = l.getPropertyValue("font-weight"),
        d = l.getPropertyValue("content");
      if (f && !u) return b.removeChild(f), e();
      u && "none" !== d && "" !== d
        ? ((s = l.getPropertyValue("content")),
          (a = ~["Sharp"].indexOf(u[2]) ? L : I),
          (n = ~[
            "Solid",
            "Regular",
            "Light",
            "Thin",
            "Duotone",
            "Brands",
            "Kit",
          ].indexOf(u[2])
            ? D[a][u[2].toLowerCase()]
            : X[a][m]),
          (d = (l =
            ((l = (d = s).replace(ja, "")),
            (a = 0),
            (s = (m = l).length),
            (c =
              55296 <= (d = m.charCodeAt(a)) &&
              d <= 56319 &&
              a + 1 < s &&
              56320 <= (c = m.charCodeAt(a + 1)) &&
              c <= 57343
                ? 1024 * (d - 55296) + c - 56320 + 65536
                : d),
            (d = Ea[0] <= c && c <= Ea[1]),
            {
              value: yt((c = 2 === l.length && l[0] === l[1]) ? l[0] : l),
              isSecondary: d || c,
            })).value),
          (c = l.isSecondary),
          (l = u[0].startsWith("FontAwesome")),
          (u = Lt(n, d)),
          (i = u),
          l &&
            ((d = jt[(l = d)]),
            (l = Lt("fas", l)),
            (l = d ||
              (l ? { prefix: "fas", iconName: l } : null) || {
                prefix: null,
                iconName: null,
              }).iconName &&
              l.prefix &&
              ((u = l.iconName), (n = l.prefix))),
          !u || c || (f && f.getAttribute(C) === n && f.getAttribute(S) === i)
            ? e()
            : (b.setAttribute(p, i),
              f && b.removeChild(f),
              ((o = (r = {
                iconName: null,
                title: null,
                titleId: null,
                prefix: null,
                transform: $,
                symbol: !1,
                mask: { iconName: null, prefix: null, rest: [] },
                maskId: null,
                extra: { classes: [], styles: {}, attributes: {} },
              }).extra).attributes[N] = v),
              na(u, n)
                .then(function (t) {
                  var a = Zt(
                      k(
                        k({}, r),
                        {},
                        {
                          icons: { main: t, mask: Tt() },
                          prefix: n,
                          iconName: i,
                          extra: o,
                          watchable: !0,
                        }
                      )
                    ),
                    t = h.createElement("svg");
                  "::before" === v
                    ? b.insertBefore(t, b.firstChild)
                    : b.appendChild(t),
                    (t.outerHTML = a.map(vt).join("\n")),
                    b.removeAttribute(p),
                    e();
                })
                .catch(t)))
        : e();
    });
  }
  function Ma(t) {
    return Promise.all([za(t, "::before"), za(t, "::after")]);
  }
  function Ia(t) {
    return !(
      t.parentNode === document.head ||
      ~z.indexOf(t.tagName.toUpperCase()) ||
      t.getAttribute(N) ||
      (t.parentNode && "svg" === t.parentNode.tagName)
    );
  }
  function La(i) {
    if (y)
      return new Promise(function (t, a) {
        var e = et(i.querySelectorAll("*")).filter(Ia).map(Ma),
          n = ca.begin("searchPseudoElements");
        ga(),
          Promise.all(e)
            .then(function () {
              n(), ha(), t();
            })
            .catch(function () {
              n(), ha(), a();
            });
      });
  }
  function Ya(t) {
    return t
      .toLowerCase()
      .split(" ")
      .reduce(
        function (t, a) {
          var e = a.toLowerCase().split("-"),
            a = e[0],
            n = e.slice(1).join("-");
          if (a && "h" === n) return (t.flipX = !0), t;
          if (a && "v" === n) return (t.flipY = !0), t;
          if (((n = parseFloat(n)), isNaN(n))) return t;
          switch (a) {
            case "grow":
              t.size = t.size + n;
              break;
            case "shrink":
              t.size = t.size - n;
              break;
            case "left":
              t.x = t.x - n;
              break;
            case "right":
              t.x = t.x + n;
              break;
            case "up":
              t.y = t.y - n;
              break;
            case "down":
              t.y = t.y + n;
              break;
            case "rotate":
              t.rotate = t.rotate + n;
          }
          return t;
        },
        { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
      );
  }
  var Ra = !1,
    Ta = { x: 0, y: 0, width: "100%", height: "100%" };
  function Da(t) {
    return (
      t.attributes &&
        (t.attributes.fill ||
          !(1 < arguments.length && void 0 !== arguments[1]) ||
          arguments[1]) &&
        (t.attributes.fill = "black"),
      t
    );
  }
  var Fa;
  (Fa = { mixoutsTo: Kt }.mixoutsTo),
    (c = [
      b,
      f,
      a,
      u,
      d,
      {
        hooks: function () {
          return {
            mutationObserverCallbacks: function (t) {
              return (t.pseudoElementsCallback = La), t;
            },
          };
        },
        provides: function (t) {
          t.pseudoElements2svg = function (t) {
            t = t.node;
            J.searchPseudoElements && La(void 0 === t ? h : t);
          };
        },
      },
      {
        mixout: function () {
          return {
            dom: {
              unwatch: function () {
                ga(), (Ra = !0);
              },
            },
          };
        },
        hooks: function () {
          return {
            bootstrap: function () {
              ka(Xt("mutationObserverCallbacks", {}));
            },
            noAuto: function () {
              ya && ya.disconnect();
            },
            watch: function (t) {
              t = t.observeMutationsRoot;
              Ra
                ? ha()
                : ka(
                    Xt("mutationObserverCallbacks", { observeMutationsRoot: t })
                  );
            },
          };
        },
      },
      {
        mixout: function () {
          return { parse: { transform: Ya } };
        },
        hooks: function () {
          return {
            parseNodeAttributes: function (t, a) {
              a = a.getAttribute("data-fa-transform");
              return a && (t.transform = Ya(a)), t;
            },
          };
        },
        provides: function (t) {
          t.generateAbstractTransformGrouping = function (t) {
            var a = t.main,
              e = t.transform,
              n = t.containerWidth,
              i = t.iconWidth,
              r = { transform: "translate(".concat(n / 2, " 256)") },
              t = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
              n = "scale("
                .concat((e.size / 16) * (e.flipX ? -1 : 1), ", ")
                .concat((e.size / 16) * (e.flipY ? -1 : 1), ") "),
              e = "rotate(".concat(e.rotate, " 0 0)"),
              i = {
                outer: r,
                inner: {
                  transform: "".concat(t, " ").concat(n, " ").concat(e),
                },
                path: {
                  transform: "translate(".concat((i / 2) * -1, " -256)"),
                },
              };
            return {
              tag: "g",
              attributes: k({}, i.outer),
              children: [
                {
                  tag: "g",
                  attributes: k({}, i.inner),
                  children: [
                    {
                      tag: a.icon.tag,
                      children: a.icon.children,
                      attributes: k(k({}, a.icon.attributes), i.path),
                    },
                  ],
                },
              ],
            };
          };
        },
      },
      {
        hooks: function () {
          return {
            parseNodeAttributes: function (t, a) {
              var e = a.getAttribute("data-fa-mask"),
                e = e
                  ? Ht(
                      e.split(" ").map(function (t) {
                        return t.trim();
                      })
                    )
                  : Tt();
              return (
                e.prefix || (e.prefix = Nt),
                (t.mask = e),
                (t.maskId = a.getAttribute("data-fa-mask-id")),
                t
              );
            },
          };
        },
        provides: function (t) {
          t.generateAbstractMask = function (t) {
            var a = t.children,
              e = t.attributes,
              n = t.main,
              i = t.mask,
              r = t.maskId,
              o = t.transform,
              s = n.width,
              c = n.icon,
              f = i.width,
              t = i.icon,
              o =
                ((i = (n = { transform: o, containerWidth: f, iconWidth: s })
                  .transform),
                (o = n.containerWidth),
                (f = n.iconWidth),
                (s = { transform: "translate(".concat(o / 2, " 256)") }),
                (n = "translate("
                  .concat(32 * i.x, ", ")
                  .concat(32 * i.y, ") ")),
                (o = "scale("
                  .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
                  .concat((i.size / 16) * (i.flipY ? -1 : 1), ") ")),
                (i = "rotate(".concat(i.rotate, " 0 0)")),
                {
                  outer: s,
                  inner: {
                    transform: "".concat(n, " ").concat(o, " ").concat(i),
                  },
                  path: {
                    transform: "translate(".concat((f / 2) * -1, " -256)"),
                  },
                }),
              i = {
                tag: "rect",
                attributes: k(k({}, Ta), {}, { fill: "white" }),
              },
              f = c.children ? { children: c.children.map(Da) } : {},
              f = {
                tag: "g",
                attributes: k({}, o.inner),
                children: [
                  Da(
                    k(
                      {
                        tag: c.tag,
                        attributes: k(k({}, c.attributes), o.path),
                      },
                      f
                    )
                  ),
                ],
              },
              o = { tag: "g", attributes: k({}, o.outer), children: [f] },
              f = "mask-".concat(r || at()),
              r = "clip-".concat(r || at()),
              o = {
                tag: "mask",
                attributes: k(
                  k({}, Ta),
                  {},
                  {
                    id: f,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse",
                  }
                ),
                children: [i, o],
              },
              o = {
                tag: "defs",
                children: [
                  {
                    tag: "clipPath",
                    attributes: { id: r },
                    children: "g" === (t = t).tag ? t.children : [t],
                  },
                  o,
                ],
              };
            return (
              a.push(o, {
                tag: "rect",
                attributes: k(
                  {
                    fill: "currentColor",
                    "clip-path": "url(#".concat(r, ")"),
                    mask: "url(#".concat(f, ")"),
                  },
                  Ta
                ),
              }),
              { children: a, attributes: e }
            );
          };
        },
      },
      {
        provides: function (t) {
          var r = !1;
          g.matchMedia &&
            (r = g.matchMedia("(prefers-reduced-motion: reduce)").matches),
            (t.missingIconAbstract = function () {
              var t = [],
                a = { fill: "currentColor" },
                e = {
                  attributeType: "XML",
                  repeatCount: "indefinite",
                  dur: "2s",
                };
              t.push({
                tag: "path",
                attributes: k(
                  k({}, a),
                  {},
                  {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                  }
                ),
              });
              var n = k(k({}, e), {}, { attributeName: "opacity" }),
                i = {
                  tag: "circle",
                  attributes: k(
                    k({}, a),
                    {},
                    { cx: "256", cy: "364", r: "28" }
                  ),
                  children: [],
                };
              return (
                r ||
                  i.children.push(
                    {
                      tag: "animate",
                      attributes: k(
                        k({}, e),
                        {},
                        { attributeName: "r", values: "28;14;28;28;14;28;" }
                      ),
                    },
                    {
                      tag: "animate",
                      attributes: k(k({}, n), {}, { values: "1;0;1;1;0;1;" }),
                    }
                  ),
                t.push(i),
                t.push({
                  tag: "path",
                  attributes: k(
                    k({}, a),
                    {},
                    {
                      opacity: "1",
                      d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                    }
                  ),
                  children: r
                    ? []
                    : [
                        {
                          tag: "animate",
                          attributes: k(
                            k({}, n),
                            {},
                            { values: "1;0;0;0;0;1;" }
                          ),
                        },
                      ],
                }),
                r ||
                  t.push({
                    tag: "path",
                    attributes: k(
                      k({}, a),
                      {},
                      {
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                      }
                    ),
                    children: [
                      {
                        tag: "animate",
                        attributes: k(k({}, n), {}, { values: "0;0;1;1;0;0;" }),
                      },
                    ],
                  }),
                { tag: "g", attributes: { class: "missing" }, children: t }
              );
            });
        },
      },
      {
        hooks: function () {
          return {
            parseNodeAttributes: function (t, a) {
              a = a.getAttribute("data-fa-symbol");
              return (t.symbol = null !== a && ("" === a || a)), t;
            },
          };
        },
      },
    ]),
    (Wt = {}),
    Object.keys(_t).forEach(function (t) {
      -1 === Ut.indexOf(t) && delete _t[t];
    }),
    c.forEach(function (t) {
      var a,
        e = t.mixout ? t.mixout() : {};
      Object.keys(e).forEach(function (a) {
        "function" == typeof e[a] && (Fa[a] = e[a]),
          "object" === i(e[a]) &&
            Object.keys(e[a]).forEach(function (t) {
              Fa[a] || (Fa[a] = {}), (Fa[a][t] = e[a][t]);
            });
      }),
        t.hooks &&
          ((a = t.hooks()),
          Object.keys(a).forEach(function (t) {
            Wt[t] || (Wt[t] = []), Wt[t].push(a[t]);
          })),
        t.provides && t.provides(_t);
    }),
    (function (t) {
      try {
        for (
          var a = arguments.length, e = new Array(1 < a ? a - 1 : 0), n = 1;
          n < a;
          n++
        )
          e[n - 1] = arguments[n];
        t.apply(void 0, e);
      } catch (t) {
        if (!M) throw t;
      }
    })(function (t) {
      p &&
        (g.FontAwesome || (g.FontAwesome = Kt),
        bt(function () {
          Jt(), Bt("bootstrap");
        })),
        (ut.hooks = k(
          k({}, ut.hooks),
          {},
          {
            addPack: function (t, a) {
              (ut.styles[t] = k(k({}, ut.styles[t] || {}), a)), It(), Jt();
            },
            addPacks: function (t) {
              t.forEach(function (t) {
                var a = m(t, 2),
                  t = a[0],
                  a = a[1];
                ut.styles[t] = k(k({}, ut.styles[t] || {}), a);
              }),
                It(),
                Jt();
            },
            addShims: function (t) {
              var a;
              (a = ut.shims).push.apply(a, l(t)), It(), Jt();
            },
          }
        ));
    });
})();
