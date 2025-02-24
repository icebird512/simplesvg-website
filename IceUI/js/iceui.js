/******
Ice-UI
Version 0.0.1-beta3
Copyright 2023 Icebird
官网: https://iceui.netlify.app/
******/

/*
log
输出
*/
function log(str) {
    console.log(str);
}

/*
waves
涟漪

原开源Github项目代码
 * Waves v0.7.6
 * http://fian.my.id/Waves 
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors 
 * Released under the MIT license 
 * https://github.com/fians/Waves/blob/master/LICENSE 
*/
! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function() {
        return t.Waves = e.call(t), t.Waves
    }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
}("object" == typeof global ? global : this, function() {
    "use strict";
    var e = e || {},
        o = document.querySelectorAll.bind(document),
        r = Object.prototype.toString,
        s = "ontouchstart" in window;

    function a(t) {
        var e = typeof t;
        return "function" == e || "object" == e && !!t
    }

    function l(t) {
        var e, n = r.call(t);
        return "[object String]" === n ? o(t) : a(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n) && t.hasOwnProperty("length") ? t : a(e = t) && 0 < e.nodeType ? [t] : []
    }

    function d(t) {
        var e, n, o, a = {
                top: 0,
                left: 0
            },
            i = t && t.ownerDocument,
            r = i.documentElement;
        return void 0 !== t.getBoundingClientRect && (a = t.getBoundingClientRect()), e = null !== (o = n = i) && o === o.window ? n : 9 === n.nodeType && n.defaultView, {
            top: a.top + e.pageYOffset - r.clientTop,
            left: a.left + e.pageXOffset - r.clientLeft
        }
    }

    function m(t) {
        var e = "";
        for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
        return e
    }
    var f = {
            duration: 750,
            delay: 200,
            show: function(t, e, n) {
                if (2 === t.button) return !1;
                e = e || this;
                var o = document.createElement("div");
                o.className = "waves-ripple waves-rippling", e.appendChild(o);
                var a = d(e),
                    i = 0,
                    r = 0;
                r = 0 <= (r = "touches" in t && t.touches.length ? (i = t.touches[0].pageY - a.top, t.touches[0].pageX - a.left) : (i = t.pageY - a.top, t.pageX - a.left)) ? r : 0, i = 0 <= i ? i : 0;
                var s = "scale(" + e.clientWidth / 100 * 3 + ")",
                    u = "translate(0,0)";
                n && (u = "translate(" + n.x + "px, " + n.y + "px)"), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-x", r), o.setAttribute("data-y", i), o.setAttribute("data-scale", s), o.setAttribute("data-translate", u);
                var c = {
                    top: i + "px",
                    left: r + "px"
                };
                o.classList.add("waves-notransition"), o.setAttribute("style", m(c)), o.classList.remove("waves-notransition"), c["-webkit-transform"] = s + " " + u, c["-moz-transform"] = s + " " + u, c["-ms-transform"] = s + " " + u, c["-o-transform"] = s + " " + u, c.transform = s + " " + u, c.opacity = "1";
                var l = "mousemove" === t.type ? 2500 : f.duration;
                c["-webkit-transition-duration"] = l + "ms", c["-moz-transition-duration"] = l + "ms", c["-o-transition-duration"] = l + "ms", c["transition-duration"] = l + "ms", o.setAttribute("style", m(c))
            },
            hide: function(t, e) {
                for (var n = (e = e || this).getElementsByClassName("waves-rippling"), o = 0, a = n.length; o < a; o++) i(t, e, n[o]);
                s && (e.removeEventListener("touchend", f.hide), e.removeEventListener("touchcancel", f.hide)), e.removeEventListener("mouseup", f.hide), e.removeEventListener("mouseleave", f.hide)
            }
        },
        u = {
            input: function(t) {
                var e, n, o, a, i = t.parentNode;
                "i" === i.tagName.toLowerCase() && i.classList.contains("waves-effect") || ((e = document.createElement("i")).className = t.className + " waves-input-wrapper", t.className = "waves-button-input", i.replaceChild(e, t), e.appendChild(t), o = (n = window.getComputedStyle(t, null)).color, a = n.backgroundColor, e.setAttribute("style", "color:" + o + ";background:" + a), t.setAttribute("style", "background-color:rgba(0,0,0,0);"))
            },
            img: function(t) {
                var e, n = t.parentNode;
                "i" === n.tagName.toLowerCase() && n.classList.contains("waves-effect") || (e = document.createElement("i"), n.replaceChild(e, t), e.appendChild(t))
            }
        };

    function i(t, e, n) {
        var o, a, i, r, s, u;
        n && (n.classList.remove("waves-rippling"), o = n.getAttribute("data-x"), a = n.getAttribute("data-y"), i = n.getAttribute("data-scale"), r = n.getAttribute("data-translate"), (s = 350 - (Date.now() - Number(n.getAttribute("data-hold")))) < 0 && (s = 0), "mousemove" === t.type && (s = 150), u = "mousemove" === t.type ? 2500 : f.duration, setTimeout(function() {
            var t = {
                top: a + "px",
                left: o + "px",
                opacity: "0",
                "-webkit-transition-duration": u + "ms",
                "-moz-transition-duration": u + "ms",
                "-o-transition-duration": u + "ms",
                "transition-duration": u + "ms",
                "-webkit-transform": i + " " + r,
                "-moz-transform": i + " " + r,
                "-ms-transform": i + " " + r,
                "-o-transform": i + " " + r,
                transform: i + " " + r
            };
            n.setAttribute("style", m(t)), setTimeout(function() {
                try {
                    e.removeChild(n)
                } catch (t) {
                    return !1
                }
            }, u)
        }, s))
    }
    var c = {
        touches: 0,
        allowEvent: function(t) {
            var e = !0;
            return /^(mousedown|mousemove)$/.test(t.type) && c.touches && (e = !1), e
        },
        registerEvent: function(t) {
            var e = t.type;
            "touchstart" === e ? c.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function() {
                c.touches && --c.touches
            }, 500)
        }
    };

    function n(e) {
        var n, o, a, t, i, r = function(t) {
            if (!1 === c.allowEvent(t)) return null;
            for (var e = null, n = t.target || t.srcElement; n.parentElement;) {
                if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                    e = n;
                    break
                }
                n = n.parentElement
            }
            return e
        }(e);
        if (null !== r) {
            if (r.disabled || r.getAttribute("disabled") || r.classList.contains("disabled")) return;
            c.registerEvent(e), "touchstart" === e.type && f.delay ? (n = !1, o = setTimeout(function() {
                o = null, f.show(e, r)
            }, f.delay), a = function(t) {
                o && (clearTimeout(o), o = null, f.show(e, r)), n || (n = !0, f.hide(t, r)), i()
            }, t = function(t) {
                o && (clearTimeout(o), o = null), a(t), i()
            }, r.addEventListener("touchmove", t, !1), r.addEventListener("touchend", a, !1), r.addEventListener("touchcancel", a, !1), i = function() {
                r.removeEventListener("touchmove", t), r.removeEventListener("touchend", a), r.removeEventListener("touchcancel", a)
            }) : (f.show(e, r), s && (r.addEventListener("touchend", f.hide, !1), r.addEventListener("touchcancel", f.hide, !1)), r.addEventListener("mouseup", f.hide, !1), r.addEventListener("mouseleave", f.hide, !1))
        }
    }
    return e.init = function(t) {
        var e = document.body;
        "duration" in (t = t || {}) && (f.duration = t.duration), "delay" in t && (f.delay = t.delay), s && (e.addEventListener("touchstart", n, !1), e.addEventListener("touchcancel", c.registerEvent, !1), e.addEventListener("touchend", c.registerEvent, !1)), e.addEventListener("mousedown", n, !1)
    }, e.attach = function(t, e) {
        var n, o;
        t = l(t), "[object Array]" === r.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
        for (var a = 0, i = t.length; a < i; a++) o = (n = t[a]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (u[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e)
    }, e.ripple = function(t, e) {
        var n = (t = l(t)).length;
        if ((e = e || {}).wait = e.wait || 0, e.position = e.position || null, n)
            for (var o = {}, a = 0, i = {
                    type: "mousedown",
                    button: 1
                }, r = function(t, e) {
                    return function() {
                        f.hide(t, e)
                    }
                }; a < n; a++) {
                var s = t[a],
                    u = e.position || {
                        x: s.clientWidth / 2,
                        y: s.clientHeight / 2
                    },
                    c = d(s);
                o.x = c.left + u.x, o.y = c.top + u.y, i.pageX = o.x, i.pageY = o.y, f.show(i, s), 0 <= e.wait && null !== e.wait && setTimeout(r({
                    type: "mouseup",
                    button: 1
                }, s), e.wait)
            }
    }, e.calm = function(t) {
        for (var e = {
                type: "mouseup",
                button: 1
            }, n = 0, o = (t = l(t)).length; n < o; n++) f.hide(e, t[n])
    }, e.displayEffect = function(t) {
        e.init(t)
    }, e
});
//# sourceMappingURL=waves.min.js.map

/**Github**
https://github.com/fians/Waves/
*/
var config = {
    duration: 1000,
    delay: 0
};

Waves.init(config);
Waves.attach('.waves-block', ['waves-block']);
Waves.attach('.waves-circle', ['waves-circle']);
Waves.attach('.waves-light', ['waves-light']);
Waves.attach('.waves-classic', ['waves-classic']);
Waves.init(config);