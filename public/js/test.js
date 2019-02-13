if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    var n = [],
        i = t.document,
        o = n.slice,
        s = n.concat,
        r = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        h = l.hasOwnProperty,
        u = {},
        p = "2.2.4",
        d = function(t, e) {
            return new d.fn.init(t, e)
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        g = /^-ms-/,
        v = /-([\da-z])/gi,
        m = function(t, e) {
            return e.toUpperCase()
        };

    function y(t) {
        var e = !!t && "length" in t && t.length,
            n = d.type(t);
        return "function" !== n && !d.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    d.fn = d.prototype = {
        jquery: p,
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : o.call(this)
        },
        pushStack: function(t) {
            var e = d.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return d.each(this, t)
        },
        map: function(t) {
            return this.pushStack(d.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: r,
        sort: n.sort,
        splice: n.splice
    }, d.extend = d.fn.extend = function() {
        var t, e, n, i, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || d.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = r[e], r !== (i = t[e]) && (c && i && (d.isPlainObject(i) || (o = d.isArray(i))) ? (o ? (o = !1, s = n && d.isArray(n) ? n : []) : s = n && d.isPlainObject(n) ? n : {}, r[e] = d.extend(c, s, i)) : void 0 !== i && (r[e] = i));
        return r
    }, d.extend({
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === d.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !d.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== d.type(t) || t.nodeType || d.isWindow(t)) return !1;
            if (t.constructor && !h.call(t, "constructor") && !h.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t);
            return void 0 === e || h.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            (t = d.trim(t)) && (1 === t.indexOf("use strict") ? ((e = i.createElement("script")).text = t, i.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(g, "ms-").replace(v, m)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, i = 0;
            if (y(t))
                for (n = t.length; n > i && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(f, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (y(Object(t)) ? d.merge(n, "string" == typeof t ? [t] : t) : r.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : a.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, s = t.length, r = !n; s > o; o++) !e(t[o], o) !== r && i.push(t[o]);
            return i
        },
        map: function(t, e, n) {
            var i, o, r = 0,
                a = [];
            if (y(t))
                for (i = t.length; i > r; r++) null != (o = e(t[r], r, n)) && a.push(o);
            else
                for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
            return s.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, s;
            return "string" == typeof e && (n = t[e], e = t, t = n), d.isFunction(t) ? (i = o.call(arguments, 2), (s = function() {
                return t.apply(e || this, i.concat(o.call(arguments)))
            }).guid = t.guid = t.guid || d.guid++, s) : void 0
        },
        now: Date.now,
        support: u
    }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    });
    var b = function(t) {
        var e, n, i, o, s, r, a, l, c, h, u, p, d, f, g, v, m, y, b, w = "sizzle" + 1 * new Date,
            x = t.document,
            _ = 0,
            C = 0,
            T = st(),
            $ = st(),
            k = st(),
            S = function(t, e) {
                return t === e && (u = !0), 0
            },
            E = 1 << 31,
            A = {}.hasOwnProperty,
            D = [],
            N = D.pop,
            j = D.push,
            O = D.push,
            P = D.slice,
            L = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = "\\[" + R + "*(" + H + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]",
            M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            q = new RegExp(R + "+", "g"),
            z = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            W = new RegExp("^" + R + "*," + R + "*"),
            B = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
            X = new RegExp(M),
            V = new RegExp("^" + H + "$"),
            Q = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            tt = /'|\\/g,
            et = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            nt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            it = function() {
                p()
            };
        try {
            O.apply(D = P.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
        } catch (t) {
            O = {
                apply: D.length ? function(t, e) {
                    j.apply(t, P.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function ot(t, e, i, o) {
            var s, a, c, h, u, f, m, y, _ = e && e.ownerDocument,
                C = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return i;
            if (!o && ((e ? e.ownerDocument || e : x) !== d && p(e), e = e || d, g)) {
                if (11 !== C && (f = J.exec(t)))
                    if (s = f[1]) {
                        if (9 === C) {
                            if (!(c = e.getElementById(s))) return i;
                            if (c.id === s) return i.push(c), i
                        } else if (_ && (c = _.getElementById(s)) && b(e, c) && c.id === s) return i.push(c), i
                    } else {
                        if (f[2]) return O.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return O.apply(i, e.getElementsByClassName(s)), i
                    }
                if (n.qsa && !k[t + " "] && (!v || !v.test(t))) {
                    if (1 !== C) _ = e, y = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((h = e.getAttribute("id")) ? h = h.replace(tt, "\\$&") : e.setAttribute("id", h = w), a = (m = r(t)).length, u = V.test(h) ? "#" + h : "[id='" + h + "']"; a--;) m[a] = u + " " + gt(m[a]);
                        y = m.join(","), _ = K.test(t) && dt(e.parentNode) || e
                    }
                    if (y) try {
                        return O.apply(i, _.querySelectorAll(y)), i
                    } catch (t) {} finally {
                        h === w && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(z, "$1"), e, i, o)
        }

        function st() {
            var t = [];
            return function e(n, o) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
        }

        function rt(t) {
            return t[w] = !0, t
        }

        function at(t) {
            var e = d.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function lt(t, e) {
            for (var n = t.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = e
        }

        function ct(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || E) - (~t.sourceIndex || E);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ht(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ut(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function pt(t) {
            return rt(function(e) {
                return e = +e, rt(function(n, i) {
                    for (var o, s = t([], n.length, e), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function dt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = ot.support = {}, s = ot.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, p = ot.setDocument = function(t) {
            var e, o, r = t ? t.ownerDocument || t : x;
            return r !== d && 9 === r.nodeType && r.documentElement ? (f = (d = r).documentElement, g = !s(d), (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.attributes = at(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), n.getElementsByTagName = at(function(t) {
                return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
            }), n.getElementsByClassName = Z.test(d.getElementsByClassName), n.getById = at(function(t) {
                return f.appendChild(t).id = w, !d.getElementsByName || !d.getElementsByName(w).length
            }), n.getById ? (i.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, i.filter.ID = function(t) {
                var e = t.replace(et, nt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete i.find.ID, i.filter.ID = function(t) {
                var e = t.replace(et, nt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    o = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && g ? e.getElementsByClassName(t) : void 0
            }, m = [], v = [], (n.qsa = Z.test(d.querySelectorAll)) && (at(function(t) {
                f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]")
            }), at(function(t) {
                var e = d.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
            })), (n.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(t) {
                n.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), m.push("!=", M)
            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), e = Z.test(f.compareDocumentPosition), b = e || Z.test(f.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, S = e ? function(t, e) {
                if (t === e) return u = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === d || t.ownerDocument === x && b(x, t) ? -1 : e === d || e.ownerDocument === x && b(x, e) ? 1 : h ? L(h, t) - L(h, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return u = !0, 0;
                var n, i = 0,
                    o = t.parentNode,
                    s = e.parentNode,
                    r = [t],
                    a = [e];
                if (!o || !s) return t === d ? -1 : e === d ? 1 : o ? -1 : s ? 1 : h ? L(h, t) - L(h, e) : 0;
                if (o === s) return ct(t, e);
                for (n = t; n = n.parentNode;) r.unshift(n);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (; r[i] === a[i];) i++;
                return i ? ct(r[i], a[i]) : r[i] === x ? -1 : a[i] === x ? 1 : 0
            }, d) : d
        }, ot.matches = function(t, e) {
            return ot(t, null, null, e)
        }, ot.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== d && p(t), e = e.replace(U, "='$1']"), n.matchesSelector && g && !k[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))) try {
                var i = y.call(t, e);
                if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (t) {}
            return ot(e, d, null, [t]).length > 0
        }, ot.contains = function(t, e) {
            return (t.ownerDocument || t) !== d && p(t), b(t, e)
        }, ot.attr = function(t, e) {
            (t.ownerDocument || t) !== d && p(t);
            var o = i.attrHandle[e.toLowerCase()],
                s = o && A.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
            return void 0 !== s ? s : n.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }, ot.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, ot.uniqueSort = function(t) {
            var e, i = [],
                o = 0,
                s = 0;
            if (u = !n.detectDuplicates, h = !n.sortStable && t.slice(0), t.sort(S), u) {
                for (; e = t[s++];) e === t[s] && (o = i.push(s));
                for (; o--;) t.splice(i[o], 1)
            }
            return h = null, t
        }, o = ot.getText = function(t) {
            var e, n = "",
                i = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[i++];) n += o(e);
            return n
        }, (i = ot.selectors = {
            cacheLength: 50,
            createPseudo: rt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = r(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(et, nt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = T[t + " "];
                    return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && T(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, e, n) {
                    return function(i) {
                        var o = ot.attr(i, t);
                        return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var s = "nth" !== t.slice(0, 3),
                        r = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var c, h, u, p, d, f, g = s !== r ? "nextSibling" : "previousSibling",
                            v = e.parentNode,
                            m = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (v) {
                            if (s) {
                                for (; g;) {
                                    for (p = e; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? v.firstChild : v.lastChild], r && y) {
                                for (b = (d = (c = (h = (u = (p = v)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === _ && c[1]) && c[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || f.pop();)
                                    if (1 === p.nodeType && ++b && p === e) {
                                        h[t] = [_, d, b];
                                        break
                                    }
                            } else if (y && (b = d = (c = (h = (u = (p = e)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === _ && c[1]), !1 === b)
                                for (;
                                    (p = ++d && p && p[g] || (b = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((h = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] = [_, b]), p !== e)););
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, e) {
                    var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                    return o[w] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function(t, n) {
                        for (var i, s = o(t, e), r = s.length; r--;) t[i = L(t, s[r])] = !(n[i] = s[r])
                    }) : function(t) {
                        return o(t, 0, n)
                    }) : o
                }
            },
            pseudos: {
                not: rt(function(t) {
                    var e = [],
                        n = [],
                        i = a(t.replace(z, "$1"));
                    return i[w] ? rt(function(t, e, n, o) {
                        for (var s, r = i(t, null, o, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, o, s) {
                        return e[0] = t, i(e, null, s, n), e[0] = null, !n.pop()
                    }
                }),
                has: rt(function(t) {
                    return function(e) {
                        return ot(t, e).length > 0
                    }
                }),
                contains: rt(function(t) {
                    return t = t.replace(et, nt),
                        function(e) {
                            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                        }
                }),
                lang: rt(function(t) {
                    return V.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                        function(e) {
                            var n;
                            do {
                                if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === f
                },
                focus: function(t) {
                    return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !i.pseudos.empty(t)
                },
                header: function(t) {
                    return G.test(t.nodeName)
                },
                input: function(t) {
                    return Y.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: pt(function() {
                    return [0]
                }),
                last: pt(function(t, e) {
                    return [e - 1]
                }),
                eq: pt(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: pt(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: pt(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: pt(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: pt(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[e] = ht(e);
        for (e in {
            submit: !0,
            reset: !0
        }) i.pseudos[e] = ut(e);

        function ft() {}

        function gt(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function vt(t, e, n) {
            var i = e.dir,
                o = n && "parentNode" === i,
                s = C++;
            return e.first ? function(e, n, s) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, s)
            } : function(e, n, r) {
                var a, l, c, h = [_, s];
                if (r) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, r)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) {
                            if ((a = (l = (c = e[w] || (e[w] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[i]) && a[0] === _ && a[1] === s) return h[2] = a[2];
                            if (l[i] = h, h[2] = t(e, n, r)) return !0
                        }
            }
        }

        function mt(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function yt(t, e, n, i, o) {
            for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (n && !n(s, i, o) || (r.push(s), c && e.push(a)));
            return r
        }

        function bt(t, e, n, i, o, s) {
            return i && !i[w] && (i = bt(i)), o && !o[w] && (o = bt(o, s)), rt(function(s, r, a, l) {
                var c, h, u, p = [],
                    d = [],
                    f = r.length,
                    g = s || function(t, e, n) {
                        for (var i = 0, o = e.length; o > i; i++) ot(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !s && e ? g : yt(g, p, t, a, l),
                    m = n ? o || (s ? t : f || i) ? [] : r : v;
                if (n && n(v, m, a, l), i)
                    for (c = yt(m, d), i(c, [], a, l), h = c.length; h--;)(u = c[h]) && (m[d[h]] = !(v[d[h]] = u));
                if (s) {
                    if (o || t) {
                        if (o) {
                            for (c = [], h = m.length; h--;)(u = m[h]) && c.push(v[h] = u);
                            o(null, m = [], c, l)
                        }
                        for (h = m.length; h--;)(u = m[h]) && (c = o ? L(s, u) : p[h]) > -1 && (s[c] = !(r[c] = u))
                    }
                } else m = yt(m === r ? m.splice(f, m.length) : m), o ? o(null, r, m, l) : O.apply(r, m)
            })
        }

        function wt(t) {
            for (var e, n, o, s = t.length, r = i.relative[t[0].type], a = r || i.relative[" "], l = r ? 1 : 0, h = vt(function(t) {
                return t === e
            }, a, !0), u = vt(function(t) {
                return L(e, t) > -1
            }, a, !0), p = [function(t, n, i) {
                var o = !r && (i || n !== c) || ((e = n).nodeType ? h(t, n, i) : u(t, n, i));
                return e = null, o
            }]; s > l; l++)
                if (n = i.relative[t[l].type]) p = [vt(mt(p), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
                        for (o = ++l; s > o && !i.relative[t[o].type]; o++);
                        return bt(l > 1 && mt(p), l > 1 && gt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, o > l && wt(t.slice(l, o)), s > o && wt(t = t.slice(o)), s > o && gt(t))
                    }
                    p.push(n)
                }
            return mt(p)
        }
        return ft.prototype = i.filters = i.pseudos, i.setFilters = new ft, r = ot.tokenize = function(t, e) {
            var n, o, s, r, a, l, c, h = $[t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (a = t, l = [], c = i.preFilter; a;) {
                for (r in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = B.exec(a)) && (n = o.shift(), s.push({
                    value: n,
                    type: o[0].replace(z, " ")
                }), a = a.slice(n.length)), i.filter) !(o = Q[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? ot.error(t) : $(t, l).slice(0)
        }, a = ot.compile = function(t, e) {
            var n, o, s, a, l, h, u = [],
                f = [],
                v = k[t + " "];
            if (!v) {
                for (e || (e = r(t)), n = e.length; n--;)(v = wt(e[n]))[w] ? u.push(v) : f.push(v);
                (v = k(t, (o = f, a = (s = u).length > 0, l = o.length > 0, h = function(t, e, n, r, h) {
                    var u, f, v, m = 0,
                        y = "0",
                        b = t && [],
                        w = [],
                        x = c,
                        C = t || l && i.find.TAG("*", h),
                        T = _ += null == x ? 1 : Math.random() || .1,
                        $ = C.length;
                    for (h && (c = e === d || e || h); y !== $ && null != (u = C[y]); y++) {
                        if (l && u) {
                            for (f = 0, e || u.ownerDocument === d || (p(u), n = !g); v = o[f++];)
                                if (v(u, e || d, n)) {
                                    r.push(u);
                                    break
                                }
                            h && (_ = T)
                        }
                        a && ((u = !v && u) && m--, t && b.push(u))
                    }
                    if (m += y, a && y !== m) {
                        for (f = 0; v = s[f++];) v(b, w, e, n);
                        if (t) {
                            if (m > 0)
                                for (; y--;) b[y] || w[y] || (w[y] = N.call(r));
                            w = yt(w)
                        }
                        O.apply(r, w), h && !t && w.length > 0 && m + s.length > 1 && ot.uniqueSort(r)
                    }
                    return h && (_ = T, c = x), b
                }, a ? rt(h) : h))).selector = t
            }
            return v
        }, l = ot.select = function(t, e, o, s) {
            var l, c, h, u, p, d = "function" == typeof t && t,
                f = !s && r(t = d.selector || t);
            if (o = o || [], 1 === f.length) {
                if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (h = c[0]).type && n.getById && 9 === e.nodeType && g && i.relative[c[1].type]) {
                    if (!(e = (i.find.ID(h.matches[0].replace(et, nt), e) || [])[0])) return o;
                    d && (e = e.parentNode), t = t.slice(c.shift().value.length)
                }
                for (l = Q.needsContext.test(t) ? 0 : c.length; l-- && (h = c[l], !i.relative[u = h.type]);)
                    if ((p = i.find[u]) && (s = p(h.matches[0].replace(et, nt), K.test(c[0].type) && dt(e.parentNode) || e))) {
                        if (c.splice(l, 1), !(t = s.length && gt(c))) return O.apply(o, s), o;
                        break
                    }
            }
            return (d || a(t, f))(s, e, !g, o, !e || K.test(t) && dt(e.parentNode) || e), o
        }, n.sortStable = w.split("").sort(S).join("") === w, n.detectDuplicates = !!u, p(), n.sortDetached = at(function(t) {
            return 1 & t.compareDocumentPosition(d.createElement("div"))
        }), at(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), n.attributes && at(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || lt("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), at(function(t) {
            return null == t.getAttribute("disabled")
        }) || lt(I, function(t, e, n) {
            var i;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), ot
    }(t);
    d.find = b, d.expr = b.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = b.uniqueSort, d.text = b.getText, d.isXMLDoc = b.isXML, d.contains = b.contains;
    var w = function(t, e, n) {
            for (var i = [], o = void 0 !== n;
                 (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && d(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        x = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        _ = d.expr.match.needsContext,
        C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        T = /^.[^:#\[\.,]*$/;

    function $(t, e, n) {
        if (d.isFunction(e)) return d.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return d.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (T.test(e)) return d.filter(e, t, n);
            e = d.filter(e, t)
        }
        return d.grep(t, function(t) {
            return a.call(e, t) > -1 !== n
        })
    }
    d.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? d.find.matchesSelector(i, t) ? [i] : [] : d.find.matches(t, d.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, d.fn.extend({
        find: function(t) {
            var e, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof t) return this.pushStack(d(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (d.contains(o[e], this)) return !0
            }));
            for (e = 0; n > e; e++) d.find(t, o[e], i);
            return (i = this.pushStack(n > 1 ? d.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack($(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack($(this, t || [], !0))
        },
        is: function(t) {
            return !!$(this, "string" == typeof t && _.test(t) ? d(t) : t || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(t, e, n) {
        var o, s;
        if (!t) return this;
        if (n = n || k, "string" == typeof t) {
            if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : S.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (o[1]) {
                if (e = e instanceof d ? e[0] : e, d.merge(this, d.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), C.test(o[1]) && d.isPlainObject(e))
                    for (o in e) d.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                return this
            }
            return (s = i.getElementById(o[2])) && s.parentNode && (this.length = 1, this[0] = s), this.context = i, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : d.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(d) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), d.makeArray(t, this))
    }).prototype = d.fn, k = d(i);
    var E = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    d.fn.extend({
        has: function(t) {
            var e = d(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (d.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, s = [], r = _.test(t) || "string" != typeof t ? d(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, t))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? d.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? a.call(d(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), d.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return w(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return w(t, "parentNode", n)
        },
        next: function(t) {
            return D(t, "nextSibling")
        },
        prev: function(t) {
            return D(t, "previousSibling")
        },
        nextAll: function(t) {
            return w(t, "nextSibling")
        },
        prevAll: function(t) {
            return w(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return w(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return w(t, "previousSibling", n)
        },
        siblings: function(t) {
            return x((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return x(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || d.merge([], t.childNodes)
        }
    }, function(t, e) {
        d.fn[t] = function(n, i) {
            var o = d.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = d.filter(i, o)), this.length > 1 && (A[t] || d.uniqueSort(o), E.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var N, j = /\S+/g;

    function O() {
        i.removeEventListener("DOMContentLoaded", O), t.removeEventListener("load", O), d.ready()
    }
    d.Callbacks = function(t) {
        var e, n;
        t = "string" == typeof t ? (e = t, n = {}, d.each(e.match(j) || [], function(t, e) {
            n[e] = !0
        }), n) : d.extend({}, t);
        var i, o, s, r, a = [],
            l = [],
            c = -1,
            h = function() {
                for (r = t.once, s = i = !0; l.length; c = -1)
                    for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && t.stopOnFalse && (c = a.length, o = !1);
                t.memory || (o = !1), i = !1, r && (a = o ? [] : "")
            },
            u = {
                add: function() {
                    return a && (o && !i && (c = a.length - 1, l.push(o)), function e(n) {
                        d.each(n, function(n, i) {
                            d.isFunction(i) ? t.unique && u.has(i) || a.push(i) : i && i.length && "string" !== d.type(i) && e(i)
                        })
                    }(arguments), o && !i && h()), this
                },
                remove: function() {
                    return d.each(arguments, function(t, e) {
                        for (var n;
                             (n = d.inArray(e, a, n)) > -1;) a.splice(n, 1), c >= n && c--
                    }), this
                },
                has: function(t) {
                    return t ? d.inArray(t, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = l = [], a = o = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = l = [], o || (a = o = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, e) {
                    return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || h()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return u
    }, d.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", d.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return d.Deferred(function(n) {
                            d.each(e, function(e, s) {
                                var r = d.isFunction(t[e]) && t[e];
                                o[s[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && d.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? d.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, d.each(e, function(t, s) {
                var r = s[2],
                    a = s[3];
                i[s[1]] = r.add, a && r.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? i : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, i, s = 0,
                r = o.call(arguments),
                a = r.length,
                l = 1 !== a || t && d.isFunction(t.promise) ? a : 0,
                c = 1 === l ? t : d.Deferred(),
                h = function(t, n, i) {
                    return function(s) {
                        n[t] = this, i[t] = arguments.length > 1 ? o.call(arguments) : s, i === e ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), i = new Array(a); a > s; s++) r[s] && d.isFunction(r[s].promise) ? r[s].promise().progress(h(s, n, e)).done(h(s, i, r)).fail(c.reject) : --l;
            return l || c.resolveWith(i, r), c.promise()
        }
    }), d.fn.ready = function(t) {
        return d.ready.promise().done(t), this
    }, d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? d.readyWait++ : d.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== t && --d.readyWait > 0 || (N.resolveWith(i, [d]), d.fn.triggerHandler && (d(i).triggerHandler("ready"), d(i).off("ready"))))
        }
    }), d.ready.promise = function(e) {
        return N || (N = d.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(d.ready) : (i.addEventListener("DOMContentLoaded", O), t.addEventListener("load", O))), N.promise(e)
    }, d.ready.promise();
    var P = function(t, e, n, i, o, s, r) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === d.type(n))
                for (a in o = !0, n) P(t, e, a, n[a], !0, s, r);
            else if (void 0 !== i && (o = !0, d.isFunction(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                return c.call(d(t), n)
            })), e))
                for (; l > a; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : s
        },
        L = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

    function I() {
        this.expando = d.expando + I.uid++
    }
    I.uid = 1, I.prototype = {
        register: function(t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!L(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, L(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e) o[e] = n;
            else
                for (i in e) o[i] = e[i];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (i = this.get(t, e)) ? i : this.get(t, d.camelCase(e)) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, o, s = t[this.expando];
            if (void 0 !== s) {
                if (void 0 === e) this.register(t);
                else {
                    d.isArray(e) ? i = e.concat(e.map(d.camelCase)) : (o = d.camelCase(e), e in s ? i = [e, o] : i = (i = o) in s ? [i] : i.match(j) || []), n = i.length;
                    for (; n--;) delete s[i[n]]
                }(void 0 === e || d.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !d.isEmptyObject(e)
        }
    };
    var R = new I,
        H = new I,
        F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        M = /[A-Z]/g;

    function q(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(M, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? d.parseJSON(n) : n)
                } catch (t) {}
                H.set(t, e, n)
            } else n = void 0;
        return n
    }
    d.extend({
        hasData: function(t) {
            return H.hasData(t) || R.hasData(t)
        },
        data: function(t, e, n) {
            return H.access(t, e, n)
        },
        removeData: function(t, e) {
            H.remove(t, e)
        },
        _data: function(t, e, n) {
            return R.access(t, e, n)
        },
        _removeData: function(t, e) {
            R.remove(t, e)
        }
    }), d.fn.extend({
        data: function(t, e) {
            var n, i, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (o = H.get(s), 1 === s.nodeType && !R.get(s, "hasDataAttrs"))) {
                    for (n = r.length; n--;) r[n] && (0 === (i = r[n].name).indexOf("data-") && (i = d.camelCase(i.slice(5)), q(s, i, o[i])));
                    R.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                H.set(this, t)
            }) : P(this, function(e) {
                var n, i;
                if (s && void 0 === e) {
                    if (void 0 !== (n = H.get(s, t) || H.get(s, t.replace(M, "-$&").toLowerCase()))) return n;
                    if (i = d.camelCase(t), void 0 !== (n = H.get(s, i))) return n;
                    if (void 0 !== (n = q(s, i, void 0))) return n
                } else i = d.camelCase(t), this.each(function() {
                    var n = H.get(this, i);
                    H.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && H.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                H.remove(this, t)
            })
        }
    }), d.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = R.get(t, e), n && (!i || d.isArray(n) ? i = R.access(t, e, d.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = d.queue(t, e),
                i = n.length,
                o = n.shift(),
                s = d._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, function() {
                d.dequeue(t, e)
            }, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return R.get(t, n) || R.access(t, n, {
                empty: d.Callbacks("once memory").add(function() {
                    R.remove(t, [e + "queue", n])
                })
            })
        }
    }), d.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? d.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = d.queue(this, t, e);
                d._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && d.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                d.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                o = d.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(n = R.get(s[r], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        W = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
        B = ["Top", "Right", "Bottom", "Left"],
        U = function(t, e) {
            return t = e || t, "none" === d.css(t, "display") || !d.contains(t.ownerDocument, t)
        };

    function X(t, e, n, i) {
        var o, s = 1,
            r = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return d.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (d.cssNumber[e] ? "" : "px"),
            h = (d.cssNumber[e] || "px" !== c && +l) && W.exec(d.css(t, e));
        if (h && h[3] !== c)
            for (c = c || h[3], n = n || [], h = +l || 1; h /= s = s || ".5", d.style(t, e, h + c), s !== (s = a() / l) && 1 !== s && --r;);
        return n && (h = +h || +l || 0, o = n[1] ? h + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = h, i.end = o)), o
    }
    var V = /^(?:checkbox|radio)$/i,
        Q = /<([\w:-]+)/,
        Y = /^$|\/(?:java|ecma)script/i,
        G = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function Z(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && d.nodeName(t, e) ? d.merge([t], n) : n
    }

    function J(t, e) {
        for (var n = 0, i = t.length; i > n; n++) R.set(t[n], "globalEval", !e || R.get(e[n], "globalEval"))
    }
    G.optgroup = G.option, G.tbody = G.tfoot = G.colgroup = G.caption = G.thead, G.th = G.td;
    var K, tt, et = /<|&#?\w+;/;

    function nt(t, e, n, i, o) {
        for (var s, r, a, l, c, h, u = e.createDocumentFragment(), p = [], f = 0, g = t.length; g > f; f++)
            if ((s = t[f]) || 0 === s)
                if ("object" === d.type(s)) d.merge(p, s.nodeType ? [s] : s);
                else if (et.test(s)) {
                    for (r = r || u.appendChild(e.createElement("div")), a = (Q.exec(s) || ["", ""])[1].toLowerCase(), l = G[a] || G._default, r.innerHTML = l[1] + d.htmlPrefilter(s) + l[2], h = l[0]; h--;) r = r.lastChild;
                    d.merge(p, r.childNodes), (r = u.firstChild).textContent = ""
                } else p.push(e.createTextNode(s));
        for (u.textContent = "", f = 0; s = p[f++];)
            if (i && d.inArray(s, i) > -1) o && o.push(s);
            else if (c = d.contains(s.ownerDocument, s), r = Z(u.appendChild(s), "script"), c && J(r), n)
                for (h = 0; s = r[h++];) Y.test(s.type || "") && n.push(s);
        return u
    }
    K = i.createDocumentFragment().appendChild(i.createElement("div")), (tt = i.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), K.appendChild(tt), u.checkClone = K.cloneNode(!0).cloneNode(!0).lastChild.checked, K.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!K.cloneNode(!0).lastChild.defaultValue;
    var it = /^key/,
        ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        st = /^([^.]*)(?:\.(.+)|)/;

    function rt() {
        return !0
    }

    function at() {
        return !1
    }

    function lt() {
        try {
            return i.activeElement
        } catch (t) {}
    }

    function ct(t, e, n, i, o, s) {
        var r, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) ct(t, a, n, i, e[a], s);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = at;
        else if (!o) return t;
        return 1 === s && (r = o, (o = function(t) {
            return d().off(t), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = d.guid++)), t.each(function() {
            d.event.add(this, e, o, i, n)
        })
    }
    d.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var s, r, a, l, c, h, u, p, f, g, v, m = R.get(t);
            if (m)
                for (n.handler && (n = (s = n).handler, o = s.selector), n.guid || (n.guid = d.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(e) {
                    return void 0 !== d && d.event.triggered !== e.type ? d.event.dispatch.apply(t, arguments) : void 0
                }), c = (e = (e || "").match(j) || [""]).length; c--;) f = v = (a = st.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), f && (u = d.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = d.event.special[f] || {}, h = d.extend({
                    type: f,
                    origType: v,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && d.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, g, r) || t.addEventListener && t.addEventListener(f, r)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, h) : p.push(h), d.event.global[f] = !0)
        },
        remove: function(t, e, n, i, o) {
            var s, r, a, l, c, h, u, p, f, g, v, m = R.hasData(t) && R.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(j) || [""]).length; c--;)
                    if (f = v = (a = st.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), f) {
                        for (u = d.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) h = p[s], !o && v !== h.origType || n && n.guid !== h.guid || a && !a.test(h.namespace) || i && i !== h.selector && ("**" !== i || !h.selector) || (p.splice(s, 1), h.selector && p.delegateCount--, u.remove && u.remove.call(t, h));
                        r && !p.length && (u.teardown && !1 !== u.teardown.call(t, g, m.handle) || d.removeEvent(t, f, m.handle), delete l[f])
                    } else
                        for (f in l) d.event.remove(t, f + e[c], n, i, !0);
                d.isEmptyObject(l) && R.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = d.event.fix(t);
            var e, n, i, s, r, a = [],
                l = o.call(arguments),
                c = (R.get(this, "events") || {})[t.type] || [],
                h = d.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                for (a = d.event.handlers.call(this, t, c), e = 0;
                     (s = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, n = 0;
                         (r = s.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, void 0 !== (i = ((d.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, s, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (i = [], n = 0; a > n; n++) void 0 === i[o = (s = e[n]).selector + " "] && (i[o] = s.needsContext ? d(o, this).index(l) > -1 : d.find(o, this, null, [l]).length), i[o] && i.push(s);
                        i.length && r.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, o, s, r = e.button;
                return null == t.pageX && null != e.clientX && (o = (n = t.target.ownerDocument || i).documentElement, s = n.body, t.pageX = e.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[d.expando]) return t;
            var e, n, o, s = t.type,
                r = t,
                a = this.fixHooks[s];
            for (a || (this.fixHooks[s] = a = ot.test(s) ? this.mouseHooks : it.test(s) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, t = new d.Event(r), e = o.length; e--;) t[n = o[e]] = r[n];
            return t.target || (t.target = i), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== lt() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === lt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return d.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, d.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, d.Event = function(t, e) {
        return this instanceof d.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? rt : at) : this.type = t, e && d.extend(this, e), this.timeStamp = t && t.timeStamp || d.now(), void(this[d.expando] = !0)) : new d.Event(t, e)
    }, d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: at,
        isPropagationStopped: at,
        isImmediatePropagationStopped: at,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = rt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = rt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = rt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        d.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = t.relatedTarget,
                    o = t.handleObj;
                return i && (i === this || d.contains(this, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), d.fn.extend({
        on: function(t, e, n, i) {
            return ct(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return ct(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, d(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = at), this.each(function() {
                d.event.remove(this, t, n, e)
            })
        }
    });
    var ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ut = /<script|<style|<link/i,
        pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dt = /^true\/(.*)/,
        ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function gt(t, e) {
        return d.nodeName(t, "table") && d.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function vt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function mt(t) {
        var e = dt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function yt(t, e) {
        var n, i, o, s, r, a, l, c;
        if (1 === e.nodeType) {
            if (R.hasData(t) && (s = R.access(t), r = R.set(e, s), c = s.events))
                for (o in delete r.handle, r.events = {}, c)
                    for (n = 0, i = c[o].length; i > n; n++) d.event.add(e, o, c[o][n]);
            H.hasData(t) && (a = H.access(t), l = d.extend({}, a), H.set(e, l))
        }
    }

    function bt(t, e, n, i) {
        e = s.apply([], e);
        var o, r, a, l, c, h, p = 0,
            f = t.length,
            g = f - 1,
            v = e[0],
            m = d.isFunction(v);
        if (m || f > 1 && "string" == typeof v && !u.checkClone && pt.test(v)) return t.each(function(o) {
            var s = t.eq(o);
            m && (e[0] = v.call(this, o, s.html())), bt(s, e, n, i)
        });
        if (f && (r = (o = nt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (a = d.map(Z(o, "script"), vt)).length; f > p; p++) c = o, p !== g && (c = d.clone(c, !0, !0), l && d.merge(a, Z(c, "script"))), n.call(t[p], c, p);
            if (l)
                for (h = a[a.length - 1].ownerDocument, d.map(a, mt), p = 0; l > p; p++) c = a[p], Y.test(c.type || "") && !R.access(c, "globalEval") && d.contains(h, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval(c.textContent.replace(ft, "")))
        }
        return t
    }

    function wt(t, e, n) {
        for (var i, o = e ? d.filter(e, t) : t, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || d.cleanData(Z(i)), i.parentNode && (n && d.contains(i.ownerDocument, i) && J(Z(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    d.extend({
        htmlPrefilter: function(t) {
            return t.replace(ht, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, o, s, r, a, l, c, h = t.cloneNode(!0),
                p = d.contains(t.ownerDocument, t);
            if (!(u.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || d.isXMLDoc(t)))
                for (r = Z(h), i = 0, o = (s = Z(t)).length; o > i; i++) a = s[i], l = r[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && V.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (s = s || Z(t), r = r || Z(h), i = 0, o = s.length; o > i; i++) yt(s[i], r[i]);
                else yt(t, h);
            return (r = Z(h, "script")).length > 0 && J(r, !p && Z(t, "script")), h
        },
        cleanData: function(t) {
            for (var e, n, i, o = d.event.special, s = 0; void 0 !== (n = t[s]); s++)
                if (L(n)) {
                    if (e = n[R.expando]) {
                        if (e.events)
                            for (i in e.events) o[i] ? d.event.remove(n, i) : d.removeEvent(n, i, e.handle);
                        n[R.expando] = void 0
                    }
                    n[H.expando] && (n[H.expando] = void 0)
                }
        }
    }), d.fn.extend({
        domManip: bt,
        detach: function(t) {
            return wt(this, t, !0)
        },
        remove: function(t) {
            return wt(this, t)
        },
        text: function(t) {
            return P(this, function(t) {
                return void 0 === t ? d.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return bt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || gt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return bt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = gt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return bt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return bt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (d.cleanData(Z(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return d.clone(this, t, e)
            })
        },
        html: function(t) {
            return P(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ut.test(t) && !G[(Q.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = d.htmlPrefilter(t);
                    try {
                        for (; i > n; n++) 1 === (e = this[n] || {}).nodeType && (d.cleanData(Z(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return bt(this, arguments, function(e) {
                var n = this.parentNode;
                d.inArray(this, t) < 0 && (d.cleanData(Z(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        d.fn[t] = function(t) {
            for (var n, i = [], o = d(t), s = o.length - 1, a = 0; s >= a; a++) n = a === s ? this : this.clone(!0), d(o[a])[e](n), r.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var xt, _t = {
        HTML: "block",
        BODY: "block"
    };

    function Ct(t, e) {
        var n = d(e.createElement(t)).appendTo(e.body),
            i = d.css(n[0], "display");
        return n.detach(), i
    }

    function Tt(t) {
        var e = i,
            n = _t[t];
        return n || ("none" !== (n = Ct(t, e)) && n || ((e = (xt = (xt || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), n = Ct(t, e), xt.detach()), _t[t] = n), n
    }
    var $t = /^margin/,
        kt = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
        St = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Et = function(t, e, n, i) {
            var o, s, r = {};
            for (s in e) r[s] = t.style[s], t.style[s] = e[s];
            for (s in o = n.apply(t, i || []), e) t.style[s] = r[s];
            return o
        },
        At = i.documentElement;

    function Dt(t, e, n) {
        var i, o, s, r, a = t.style;
        return "" !== (r = (n = n || St(t)) ? n.getPropertyValue(e) || n[e] : void 0) && void 0 !== r || d.contains(t.ownerDocument, t) || (r = d.style(t, e)), n && !u.pixelMarginRight() && kt.test(r) && $t.test(e) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
    }

    function Nt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }! function() {
        var e, n, o, s, r = i.createElement("div"),
            a = i.createElement("div");
        if (a.style) {
            function l() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", At.appendChild(r);
                var i = t.getComputedStyle(a);
                e = "1%" !== i.top, s = "2px" === i.marginLeft, n = "4px" === i.width, a.style.marginRight = "50%", o = "4px" === i.marginRight, At.removeChild(r)
            }
            a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), d.extend(u, {
                pixelPosition: function() {
                    return l(), e
                },
                boxSizingReliable: function() {
                    return null == n && l(), n
                },
                pixelMarginRight: function() {
                    return null == n && l(), o
                },
                reliableMarginLeft: function() {
                    return null == n && l(), s
                },
                reliableMarginRight: function() {
                    var e, n = a.appendChild(i.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", At.appendChild(r), e = !parseFloat(t.getComputedStyle(n).marginRight), At.removeChild(r), a.removeChild(n), e
                }
            })
        }
    }();
    var jt = /^(none|table(?!-c[ea]).+)/,
        Ot = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Pt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Lt = ["Webkit", "O", "Moz", "ms"],
        It = i.createElement("div").style;

    function Rt(t) {
        if (t in It) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = Lt.length; n--;)
            if ((t = Lt[n] + e) in It) return t
    }

    function Ht(t, e, n) {
        var i = W.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Ft(t, e, n, i, o) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === n && (r += d.css(t, n + B[s], !0, o)), i ? ("content" === n && (r -= d.css(t, "padding" + B[s], !0, o)), "margin" !== n && (r -= d.css(t, "border" + B[s] + "Width", !0, o))) : (r += d.css(t, "padding" + B[s], !0, o), "padding" !== n && (r += d.css(t, "border" + B[s] + "Width", !0, o)));
        return r
    }

    function Mt(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = St(t),
            r = "border-box" === d.css(t, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if ((0 > (o = Dt(t, e, s)) || null == o) && (o = t.style[e]), kt.test(o)) return o;
            i = r && (u.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + Ft(t, e, n || (r ? "border" : "content"), i, s) + "px"
    }

    function qt(t, e) {
        for (var n, i, o, s = [], r = 0, a = t.length; a > r; r++)(i = t[r]).style && (s[r] = R.get(i, "olddisplay"), n = i.style.display, e ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && U(i) && (s[r] = R.access(i, "olddisplay", Tt(i.nodeName)))) : (o = U(i), "none" === n && o || R.set(i, "olddisplay", o ? n : d.css(i, "display"))));
        for (r = 0; a > r; r++)(i = t[r]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[r] || "" : "none"));
        return t
    }

    function zt(t, e, n, i, o) {
        return new zt.prototype.init(t, e, n, i, o)
    }
    d.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Dt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, s, r, a = d.camelCase(e),
                    l = t.style;
                return e = d.cssProps[a] || (d.cssProps[a] = Rt(a) || a), r = d.cssHooks[e] || d.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : l[e] : ("string" === (s = typeof n) && (o = W.exec(n)) && o[1] && (n = X(t, e, o), s = "number"), void(null != n && n == n && ("number" === s && (n += o && o[3] || (d.cssNumber[a] ? "" : "px")), u.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (n = r.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var o, s, r, a = d.camelCase(e);
            return e = d.cssProps[a] || (d.cssProps[a] = Rt(a) || a), (r = d.cssHooks[e] || d.cssHooks[a]) && "get" in r && (o = r.get(t, !0, n)), void 0 === o && (o = Dt(t, e, i)), "normal" === o && e in Pt && (o = Pt[e]), "" === n || n ? (s = parseFloat(o), !0 === n || isFinite(s) ? s || 0 : o) : o
        }
    }), d.each(["height", "width"], function(t, e) {
        d.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? jt.test(d.css(t, "display")) && 0 === t.offsetWidth ? Et(t, Ot, function() {
                    return Mt(t, e, i)
                }) : Mt(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o, s = i && St(t),
                    r = i && Ft(t, e, i, "border-box" === d.css(t, "boxSizing", !1, s), s);
                return r && (o = W.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = d.css(t, e)), Ht(0, n, r)
            }
        }
    }), d.cssHooks.marginLeft = Nt(u.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(Dt(t, "marginLeft")) || t.getBoundingClientRect().left - Et(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), d.cssHooks.marginRight = Nt(u.reliableMarginRight, function(t, e) {
        return e ? Et(t, {
            display: "inline-block"
        }, Dt, [t, "marginRight"]) : void 0
    }), d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        d.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + B[i] + e] = s[i] || s[i - 2] || s[0];
                return o
            }
        }, $t.test(t) || (d.cssHooks[t + e].set = Ht)
    }), d.fn.extend({
        css: function(t, e) {
            return P(this, function(t, e, n) {
                var i, o, s = {},
                    r = 0;
                if (d.isArray(e)) {
                    for (i = St(t), o = e.length; o > r; r++) s[e[r]] = d.css(t, e[r], !1, i);
                    return s
                }
                return void 0 !== n ? d.style(t, e, n) : d.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return qt(this, !0)
        },
        hide: function() {
            return qt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                U(this) ? d(this).show() : d(this).hide()
            })
        }
    }), d.Tween = zt, (zt.prototype = {
        constructor: zt,
        init: function(t, e, n, i, o, s) {
            this.elem = t, this.prop = n, this.easing = o || d.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (d.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = zt.propHooks[this.prop];
            return t && t.get ? t.get(this) : zt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = zt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = d.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : zt.propHooks._default.set(this), this
        }
    }).init.prototype = zt.prototype, (zt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = d.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                d.fx.step[t.prop] ? d.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[d.cssProps[t.prop]] && !d.cssHooks[t.prop] ? t.elem[t.prop] = t.now : d.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = zt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, d.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, d.fx = zt.prototype.init, d.fx.step = {};
    var Wt, Bt, Ut, Xt, Vt, Qt = /^(?:toggle|show|hide)$/,
        Yt = /queueHooks$/;

    function Gt() {
        return t.setTimeout(function() {
            Wt = void 0
        }), Wt = d.now()
    }

    function Zt(t, e) {
        var n, i = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) o["margin" + (n = B[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function Jt(t, e, n) {
        for (var i, o = (Kt.tweeners[e] || []).concat(Kt.tweeners["*"]), s = 0, r = o.length; r > s; s++)
            if (i = o[s].call(n, e, t)) return i
    }

    function Kt(t, e, n) {
        var i, o, s = 0,
            r = Kt.prefilters.length,
            a = d.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Wt || Gt(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; r > s; s++) c.tweens[s].run(i);
                return a.notifyWith(t, [c, i, n]), 1 > i && r ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: d.extend({}, e),
                opts: d.extend(!0, {
                    specialEasing: {},
                    easing: d.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Wt || Gt(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = d.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            h = c.props;
        for (function(t, e) {
            var n, i, o, s, r;
            for (n in t)
                if (o = e[i = d.camelCase(n)], s = t[n], d.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (r = d.cssHooks[i]) && "expand" in r)
                    for (n in s = r.expand(s), delete t[i], s) n in t || (t[n] = s[n], e[n] = o);
                else e[i] = o
        }(h, c.opts.specialEasing); r > s; s++)
            if (i = Kt.prefilters[s].call(c, t, h, c.opts)) return d.isFunction(i.stop) && (d._queueHooks(c.elem, c.opts.queue).stop = d.proxy(i.stop, i)), i;
        return d.map(h, Jt, c), d.isFunction(c.opts.start) && c.opts.start.call(t, c), d.fx.timer(d.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    d.Animation = d.extend(Kt, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return X(n.elem, t, W.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            d.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(j);
            for (var n, i = 0, o = t.length; o > i; i++) n = t[i], Kt.tweeners[n] = Kt.tweeners[n] || [], Kt.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var i, o, s, r, a, l, c, h = this,
                u = {},
                p = t.style,
                f = t.nodeType && U(t),
                g = R.get(t, "fxshow");
            for (i in n.queue || (null == (a = d._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, d.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = d.css(t, "display")) ? R.get(t, "olddisplay") || Tt(t.nodeName) : c) && "none" === d.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), e)
                if (o = e[i], Qt.exec(o)) {
                    if (delete e[i], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        f = !0
                    }
                    u[i] = g && g[i] || d.style(t, i)
                } else c = void 0;
            if (d.isEmptyObject(u)) "inline" === ("none" === c ? Tt(t.nodeName) : c) && (p.display = c);
            else
                for (i in g ? "hidden" in g && (f = g.hidden) : g = R.access(t, "fxshow", {}), s && (g.hidden = !f), f ? d(t).show() : h.done(function() {
                    d(t).hide()
                }), h.done(function() {
                    var e;
                    for (e in R.remove(t, "fxshow"), u) d.style(t, e, u[e])
                }), u) r = Jt(f ? g[i] : 0, i, h), i in g || (g[i] = r.start, f && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }],
        prefilter: function(t, e) {
            e ? Kt.prefilters.unshift(t) : Kt.prefilters.push(t)
        }
    }), d.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? d.extend({}, t) : {
            complete: n || !n && e || d.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !d.isFunction(e) && e
        };
        return i.duration = d.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in d.fx.speeds ? d.fx.speeds[i.duration] : d.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            d.isFunction(i.old) && i.old.call(this), i.queue && d.dequeue(this, i.queue)
        }, i
    }, d.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = d.isEmptyObject(t),
                s = d.speed(e, n, i),
                r = function() {
                    var e = Kt(this, d.extend({}, t), s);
                    (o || R.get(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    o = null != t && t + "queueHooks",
                    s = d.timers,
                    r = R.get(this);
                if (o) r[o] && r[o].stop && i(r[o]);
                else
                    for (o in r) r[o] && r[o].stop && Yt.test(o) && i(r[o]);
                for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(n), e = !1, s.splice(o, 1));
                !e && n || d.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, n = R.get(this),
                    i = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    s = d.timers,
                    r = i ? i.length : 0;
                for (n.finish = !0, d.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; r > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), d.each(["toggle", "show", "hide"], function(t, e) {
        var n = d.fn[e];
        d.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Zt(e, !0), t, i, o)
        }
    }), d.each({
        slideDown: Zt("show"),
        slideUp: Zt("hide"),
        slideToggle: Zt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        d.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), d.timers = [], d.fx.tick = function() {
        var t, e = 0,
            n = d.timers;
        for (Wt = d.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || d.fx.stop(), Wt = void 0
    }, d.fx.timer = function(t) {
        d.timers.push(t), t() ? d.fx.start() : d.timers.pop()
    }, d.fx.interval = 13, d.fx.start = function() {
        Bt || (Bt = t.setInterval(d.fx.tick, d.fx.interval))
    }, d.fx.stop = function() {
        t.clearInterval(Bt), Bt = null
    }, d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, d.fn.delay = function(e, n) {
        return e = d.fx && d.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(o)
            }
        })
    }, Ut = i.createElement("input"), Xt = i.createElement("select"), Vt = Xt.appendChild(i.createElement("option")), Ut.type = "checkbox", u.checkOn = "" !== Ut.value, u.optSelected = Vt.selected, Xt.disabled = !0, u.optDisabled = !Vt.disabled, (Ut = i.createElement("input")).value = "t", Ut.type = "radio", u.radioValue = "t" === Ut.value;
    var te, ee = d.expr.attrHandle;
    d.fn.extend({
        attr: function(t, e) {
            return P(this, d.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                d.removeAttr(this, t)
            })
        }
    }), d.extend({
        attr: function(t, e, n) {
            var i, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? d.prop(t, e, n) : (1 === s && d.isXMLDoc(t) || (e = e.toLowerCase(), o = d.attrHooks[e] || (d.expr.match.bool.test(e) ? te : void 0)), void 0 !== n ? null === n ? void d.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = d.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!u.radioValue && "radio" === e && d.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
                s = e && e.match(j);
            if (s && 1 === t.nodeType)
                for (; n = s[o++];) i = d.propFix[n] || n, d.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        }
    }), te = {
        set: function(t, e, n) {
            return !1 === e ? d.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, d.each(d.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ee[e] || d.find.attr;
        ee[e] = function(t, e, i) {
            var o, s;
            return i || (s = ee[e], ee[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ee[e] = s), o
        }
    });
    var ne = /^(?:input|select|textarea|button)$/i,
        ie = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(t, e) {
            return P(this, d.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[d.propFix[t] || t]
            })
        }
    }), d.extend({
        prop: function(t, e, n) {
            var i, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && d.isXMLDoc(t) || (e = d.propFix[e] || e, o = d.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = d.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ne.test(t.nodeName) || ie.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), u.optSelected || (d.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        d.propFix[this.toLowerCase()] = this
    });
    var oe = /[\t\r\n\f]/g;

    function se(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    d.fn.extend({
        addClass: function(t) {
            var e, n, i, o, s, r, a, l = 0;
            if (d.isFunction(t)) return this.each(function(e) {
                d(this).addClass(t.call(this, e, se(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(j) || []; n = this[l++];)
                    if (o = se(n), i = 1 === n.nodeType && (" " + o + " ").replace(oe, " ")) {
                        for (r = 0; s = e[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        o !== (a = d.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, s, r, a, l = 0;
            if (d.isFunction(t)) return this.each(function(e) {
                d(this).removeClass(t.call(this, e, se(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(j) || []; n = this[l++];)
                    if (o = se(n), i = 1 === n.nodeType && (" " + o + " ").replace(oe, " ")) {
                        for (r = 0; s = e[r++];)
                            for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                        o !== (a = d.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : d.isFunction(t) ? this.each(function(n) {
                d(this).toggleClass(t.call(this, n, se(this), e), e)
            }) : this.each(function() {
                var e, i, o, s;
                if ("string" === n)
                    for (i = 0, o = d(this), s = t.match(j) || []; e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = se(this)) && R.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : R.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + se(n) + " ").replace(oe, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var re = /\r/g,
        ae = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = d.isFunction(t), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? t.call(this, n, d(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : d.isArray(o) && (o = d.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), (e = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = d.valHooks[o.type] || d.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(re, "") : null == n ? "" : n : void 0
        }
    }), d.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = d.find.attr(t, "value");
                    return null != e ? e : d.trim(d.text(t)).replace(ae, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (((n = i[l]).selected || l === o) && (u.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                            if (e = d(n).val(), s) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, s = d.makeArray(e), r = o.length; r--;)((i = o[r]).selected = d.inArray(d.valHooks.option.get(i), s) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), s
                }
            }
        }
    }), d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(t, e) {
                return d.isArray(e) ? t.checked = d.inArray(d(t).val(), e) > -1 : void 0
            }
        }, u.checkOn || (d.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var le = /^(?:focusinfocus|focusoutblur)$/;
    d.extend(d.event, {
        trigger: function(e, n, o, s) {
            var r, a, l, c, u, p, f, g = [o || i],
                v = h.call(e, "type") ? e.type : e,
                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !le.test(v + d.event.triggered) && (v.indexOf(".") > -1 && (v = (m = v.split(".")).shift(), m.sort()), u = v.indexOf(":") < 0 && "on" + v, (e = e[d.expando] ? e : new d.Event(v, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : d.makeArray(n, [e]), f = d.event.special[v] || {}, s || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!s && !f.noBubble && !d.isWindow(o)) {
                    for (c = f.delegateType || v, le.test(c + v) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                    l === (o.ownerDocument || i) && g.push(l.defaultView || l.parentWindow || t)
                }
                for (r = 0;
                     (a = g[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? c : f.bindType || v, (p = (R.get(a, "events") || {})[e.type] && R.get(a, "handle")) && p.apply(a, n), (p = u && a[u]) && p.apply && L(a) && (e.result = p.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = v, s || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), n) || !L(o) || u && d.isFunction(o[v]) && !d.isWindow(o) && ((l = o[u]) && (o[u] = null), d.event.triggered = v, o[v](), d.event.triggered = void 0, l && (o[u] = l)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = d.extend(new d.Event, n, {
                type: t,
                isSimulated: !0
            });
            d.event.trigger(i, null, e)
        }
    }), d.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                d.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? d.event.trigger(t, e, n, !0) : void 0
        }
    }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        d.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), d.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), u.focusin = "onfocusin" in t, u.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            d.event.simulate(e, t.target, d.event.fix(t))
        };
        d.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = R.access(i, e);
                o || i.addEventListener(t, n, !0), R.access(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = R.access(i, e) - 1;
                o ? R.access(i, e, o) : (i.removeEventListener(t, n, !0), R.remove(i, e))
            }
        }
    });
    var ce = t.location,
        he = d.now(),
        ue = /\?/;
    d.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, d.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + e), n
    };
    var pe = /#.*$/,
        de = /([?&])_=[^&]*/,
        fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ge = /^(?:GET|HEAD)$/,
        ve = /^\/\//,
        me = {},
        ye = {},
        be = "*/".concat("*"),
        we = i.createElement("a");

    function xe(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                s = e.toLowerCase().match(j) || [];
            if (d.isFunction(n))
                for (; i = s[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function _e(t, e, n, i) {
        var o = {},
            s = t === ye;

        function r(a) {
            var l;
            return o[a] = !0, d.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function Ce(t, e) {
        var n, i, o = d.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && d.extend(!0, t, i), t
    }
    we.href = ce.href, d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ce.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ce.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Ce(Ce(t, d.ajaxSettings), e) : Ce(d.ajaxSettings, t)
        },
        ajaxPrefilter: xe(me),
        ajaxTransport: xe(ye),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var o, s, r, a, l, c, h, u, p = d.ajaxSetup({}, n),
                f = p.context || p,
                g = p.context && (f.nodeType || f.jquery) ? d(f) : d.event,
                v = d.Deferred(),
                m = d.Callbacks("once memory"),
                y = p.statusCode || {},
                b = {},
                w = {},
                x = 0,
                _ = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; e = fe.exec(r);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = w[n] = w[n] || t, b[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t) y[e] = [y[e], t[e]];
                            else C.always(t[C.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return o && o.abort(e), T(0, e), this
                    }
                };
            if (v.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || ce.href) + "").replace(pe, "").replace(ve, ce.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = d.trim(p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = we.protocol + "//" + we.host != c.protocol + "//" + c.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = d.param(p.data, p.traditional)), _e(me, p, n, C), 2 === x) return C;
            for (u in (h = d.event && p.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ge.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (ue.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = de.test(s) ? s.replace(de, "$1_=" + he++) : s + (ue.test(s) ? "&" : "?") + "_=" + he++)), p.ifModified && (d.lastModified[s] && C.setRequestHeader("If-Modified-Since", d.lastModified[s]), d.etag[s] && C.setRequestHeader("If-None-Match", d.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + be + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || 2 === x)) return C.abort();
            for (u in _ = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) C[u](p[u]);
            if (o = _e(ye, p, n, C)) {
                if (C.readyState = 1, h && g.trigger("ajaxSend", [C, p]), 2 === x) return C;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, o.send(b, T)
                } catch (t) {
                    if (!(2 > x)) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(e, n, i, a) {
                var c, u, b, w, _, T = n;
                2 !== x && (x = 2, l && t.clearTimeout(l), o = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, i && (w = function(t, e, n) {
                    for (var i, o, s, r, a = t.contents, l = t.dataTypes;
                         "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in n) s = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                s = o;
                                break
                            }
                            r || (r = o)
                        }
                        s = s || r
                    }
                    return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
                }(p, C, i)), w = function(t, e, n, i) {
                    var o, s, r, a, l, c = {},
                        h = t.dataTypes.slice();
                    if (h[1])
                        for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                    for (s = h.shift(); s;)
                        if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                                if (!(r = c[l + " " + s] || c["* " + s]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], h.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== r)
                                    if (r && t.throws) e = r(e);
                                    else try {
                                        e = r(e)
                                    } catch (t) {
                                        return {
                                            state: "parsererror",
                                            error: r ? t : "No conversion from " + l + " to " + s
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, w, C, c), c ? (p.ifModified && ((_ = C.getResponseHeader("Last-Modified")) && (d.lastModified[s] = _), (_ = C.getResponseHeader("etag")) && (d.etag[s] = _)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, u = w.data, c = !(b = w.error))) : (b = T, !e && T || (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", c ? v.resolveWith(f, [u, T, C]) : v.rejectWith(f, [C, T, b]), C.statusCode(y), y = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? u : b]), m.fireWith(f, [C, T]), h && (g.trigger("ajaxComplete", [C, p]), --d.active || d.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(t, e, n) {
            return d.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return d.get(t, void 0, e, "script")
        }
    }), d.each(["get", "post"], function(t, e) {
        d[e] = function(t, n, i, o) {
            return d.isFunction(n) && (o = o || i, i = n, n = void 0), d.ajax(d.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, d.isPlainObject(t) && t))
        }
    }), d._evalUrl = function(t) {
        return d.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, d.fn.extend({
        wrapAll: function(t) {
            var e;
            return d.isFunction(t) ? this.each(function(e) {
                d(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = d(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return d.isFunction(t) ? this.each(function(e) {
                d(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = d(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = d.isFunction(t);
            return this.each(function(n) {
                d(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    }), d.expr.filters.hidden = function(t) {
        return !d.expr.filters.visible(t)
    }, d.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Te = /%20/g,
        $e = /\[\]$/,
        ke = /\r?\n/g,
        Se = /^(?:submit|button|image|reset|file)$/i,
        Ee = /^(?:input|select|textarea|keygen)/i;

    function Ae(t, e, n, i) {
        var o;
        if (d.isArray(e)) d.each(e, function(e, o) {
            n || $e.test(t) ? i(t, o) : Ae(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== d.type(e)) i(t, e);
        else
            for (o in e) Ae(t + "[" + o + "]", e[o], n, i)
    }
    d.param = function(t, e) {
        var n, i = [],
            o = function(t, e) {
                e = d.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(t) || t.jquery && !d.isPlainObject(t)) d.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) Ae(n, t[n], e, o);
        return i.join("&").replace(Te, "+")
    }, d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = d.prop(this, "elements");
                return t ? d.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !d(this).is(":disabled") && Ee.test(this.nodeName) && !Se.test(t) && (this.checked || !V.test(t))
            }).map(function(t, e) {
                var n = d(this).val();
                return null == n ? null : d.isArray(n) ? d.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(ke, "\r\n")
                }
            }).get()
        }
    }), d.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var De = {
            0: 200,
            1223: 204
        },
        Ne = d.ajaxSettings.xhr();
    u.cors = !!Ne && "withCredentials" in Ne, u.ajax = Ne = !!Ne, d.ajaxTransport(function(e) {
        var n, i;
        return u.cors || Ne && !e.crossDomain ? {
            send: function(o, s) {
                var r, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) a[r] = e.xhrFields[r];
                for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(r, o[r]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(De[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return d.globalEval(t), t
            }
        }
    }), d.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), d.ajaxTransport("script", function(t) {
        var e, n;
        if (t.crossDomain) return {
            send: function(o, s) {
                e = d("<script>").prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function(t) {
                    e.remove(), n = null, t && s("error" === t.type ? 404 : 200, t.type)
                }), i.head.appendChild(e[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var je = [],
        Oe = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = je.pop() || d.expando + "_" + he++;
            return this[t] = !0, t
        }
    }), d.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, s, r, a = !1 !== e.jsonp && (Oe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = d.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Oe, "$1" + o) : !1 !== e.jsonp && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return r || d.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
            r = arguments
        }, i.always(function() {
            void 0 === s ? d(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = n.jsonpCallback, je.push(o)), r && d.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), d.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || i;
        var o = C.exec(t),
            s = !n && [];
        return o ? [e.createElement(o[1])] : (o = nt([t], e, s), s && s.length && d(s).remove(), d.merge([], o.childNodes))
    };
    var Pe = d.fn.load;

    function Le(t) {
        return d.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    d.fn.load = function(t, e, n) {
        if ("string" != typeof t && Pe) return Pe.apply(this, arguments);
        var i, o, s, r = this,
            a = t.indexOf(" ");
        return a > -1 && (i = d.trim(t.slice(a)), t = t.slice(0, a)), d.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && d.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, r.html(i ? d("<div>").append(d.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            r.each(function() {
                n.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        d.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), d.expr.filters.animated = function(t) {
        return d.grep(d.timers, function(e) {
            return t === e.elem
        }).length
    }, d.offset = {
        setOffset: function(t, e, n) {
            var i, o, s, r, a, l, c = d.css(t, "position"),
                h = d(t),
                u = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), s = d.css(t, "top"), l = d.css(t, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (r = (i = h.position()).top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), d.isFunction(e) && (e = e.call(t, n, d.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + o), "using" in e ? e.using.call(t, u) : h.css(u)
        }
    }, d.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                d.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                s = i && i.ownerDocument;
            return s ? (e = s.documentElement, d.contains(e, i) ? (o = i.getBoundingClientRect(), n = Le(s), {
                top: o.top + n.pageYOffset - e.clientTop,
                left: o.left + n.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === d.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), d.nodeName(t[0], "html") || (i = t.offset()), i.top += d.css(t[0], "borderTopWidth", !0), i.left += d.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - d.css(n, "marginTop", !0),
                    left: e.left - i.left - d.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === d.css(t, "position");) t = t.offsetParent;
                return t || At
            })
        }
    }), d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        d.fn[t] = function(i) {
            return P(this, function(t, i, o) {
                var s = Le(t);
                return void 0 === o ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : t[i] = o)
            }, t, i, arguments.length)
        }
    }), d.each(["top", "left"], function(t, e) {
        d.cssHooks[e] = Nt(u.pixelPosition, function(t, n) {
            return n ? (n = Dt(t, e), kt.test(n) ? d(t).position()[e] + "px" : n) : void 0
        })
    }), d.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        d.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            d.fn[i] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    r = n || (!0 === i || !0 === o ? "margin" : "border");
                return P(this, function(e, n, i) {
                    var o;
                    return d.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? d.css(e, n, r) : d.style(e, n, i, r)
                }, e, s ? i : void 0, s, null)
            }
        })
    }), d.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function() {
            return this.length
        }
    }), d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var Ie = t.jQuery,
        Re = t.$;
    return d.noConflict = function(e) {
        return t.$ === d && (t.$ = Re), e && t.jQuery === d && (t.jQuery = Ie), d
    }, e || (t.jQuery = t.$ = d), d
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(), function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        return setTimeout(function() {
            n || t(i).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function(n) {
            t(n).on("click", e, this.close)
        };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            s = o.attr("data-target");
        s || (s = (s = o.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === s ? [] : s);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var i = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery), function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                s = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            s = i.data();
        e += "Text", null == s.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            o || i.data("bs.carousel", o = new n(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
        var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            s = i || this.getItemForDirection(e, o),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var c = s[0],
            h = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(s)]);
                u && u.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() {
                s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = t(this),
            s = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || n.data("bs.collapse", o = new i(this, s)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && ((e = o.data("bs.collapse")) && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var s = e(o),
            r = s.data("bs.collapse") ? "toggle" : o.data();
        n.call(s, r)
    })
}(jQuery), function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(i).remove(), t(o).each(function() {
            var i = t(this),
                o = e(i),
                s = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }
    var i = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = e(o),
                r = s.hasClass("open");
            if (n(), !r) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var s = e(i),
                    r = s.hasClass("open");
                if (!r && 27 != n.which || r && 27 == n.which) return 27 == n.which && s.find(o).trigger("focus"), i.trigger("click");
                var a = s.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.modal"),
                r = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new n(this, r)), "string" == typeof e ? s[e](i) : r.show && s.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            s = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, s.data(), i.data());
        i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery), function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, e.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, e.prototype.show = function() {
        var n = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(n);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (n.isDefaultPrevented() || !i) return;
            var o = this,
                s = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition(),
                u = s[0].offsetWidth,
                p = s[0].offsetHeight;
            if (c) {
                var d = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && h.bottom + p > f.bottom ? "top" : "top" == a && h.top - p < f.top ? "bottom" : "right" == a && h.right + u > f.width ? "left" : "left" == a && h.left - u < f.left ? "right" : a, s.removeClass(d).addClass(a)
            }
            var g = this.getCalculatedOffset(a, h, u, p);
            this.applyPlacement(g, a);
            var v = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
        }
    }, e.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            s = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != s && (e.top = e.top + s - c);
        var h = this.getViewportAdjustedDelta(n, e, l, c);
        h.left ? e.left += h.left : e.top += h.top;
        var u = /top|bottom/.test(n),
            p = u ? 2 * h.left - o + l : 2 * h.top - s + c,
            d = u ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][d], u)
    }, e.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(n) {
        function i() {
            "in" != o.hoverState && s.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), n && n()
        }
        var o = this,
            s = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(e.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var n = (e = e || this.$element)[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var s = window.SVGElement && n instanceof window.SVGElement,
            r = i ? {
                top: 0,
                left: 0
            } : s ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, r)
    }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + i;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var c = e.left - s,
                h = e.left + s + n;
            c < r.left ? o.left = r.left - c : h > r.right && (o.left = r.left + r.width - h)
        }
        return o
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                s = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.tooltip", o = new e(this, s)), "string" == typeof n && o[n]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                s = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new e(this, s)), "string" == typeof n && o[n]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                s = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, s)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [
                [s[n]().top + i, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = i.find("> .active"),
            a = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                s = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : s.top;
        return null != n && o <= n ? "top" : null != i && l + (a ? r : e) >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                s = i.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (s = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof s && (s = i.bottom(this.$element));
            var a = this.getState(r, e, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - e - s
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), function(t, e, n, i) {
    function o(e, n) {
        this.settings = null, this.options = t.extend({}, o.Defaults, n), this.$element = t(e), this.drag = t.extend({}, a), this.state = t.extend({}, l), this.e = t.extend({}, c), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(o.Plugins, t.proxy(function(t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Pipe, t.proxy(function(e, n) {
            this._pipe.push({
                filter: n.filter,
                run: t.proxy(n.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function s(t) {
        if (t.touches !== i) return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
        };
        if (t.touches === i) {
            if (t.pageX !== i) return {
                x: t.pageX,
                y: t.pageY
            };
            if (t.pageX === i) return {
                x: t.clientX,
                y: t.clientY
            }
        }
    }

    function r(t) {
        var e, i, o = n.createElement("div"),
            s = t;
        for (e in s)
            if (i = s[e], void 0 !== o.style[i]) return o = null, [i, e];
        return [!1]
    }
    var a, l, c;
    a = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, l = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, c = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Plugins = {}, o.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = this._clones;
            (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t, e, n = this._clones,
                i = this._items,
                o = this.settings.loop ? n.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(o / 2); e > t; t++) o > 0 ? (this.$stage.children().eq(i.length + n.length - 1).remove(), n.pop(), this.$stage.children().eq(0).remove(), n.pop()) : (n.push(n.length / 2), this.$stage.append(i[n[n.length - 1]].clone().addClass("cloned")), n.push(i.length - 1 - (n.length - 1) / 2), this.$stage.prepend(i[n[n.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, e, n, i = this.settings.rtl ? 1 : -1,
                o = (this.width() / this.settings.items).toFixed(3),
                s = 0;
            for (this._coordinates = [], e = 0, n = this._clones.length + this._items.length; n > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * i, this._coordinates.push(s)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e, n, i = (this.width() / this.settings.items).toFixed(3),
                o = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(o), (o = {
                width: this.settings.autoWidth ? "auto" : i - this.settings.margin
            })[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                return t > 1
            }).length > 0)
                for (e = 0, n = this._coordinates.length; n > e; e++) o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o);
            else this.$stage.children().css(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, n, i, o = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + s,
                a = r + this.width() * o,
                l = [];
            for (n = 0, i = this._coordinates.length; i > n; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(n);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], o.prototype.initialize = function() {
        var e, n, o;
        if ((this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) && (e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, o = this.$element.children(n).width(), e.length && 0 >= o)) return this.preloadAutoWidthImages(e), !1;
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, o.prototype.setup = function() {
        var e = this.viewport(),
            n = this.options.responsive,
            i = -1,
            o = null;
        n ? (t.each(n, function(t) {
            e >= t && t > i && (i = Number(t))
        }), delete(o = t.extend({}, this.options, n[i])).responsive, o.responsiveClass && this.$element.attr("class", function(t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + i)) : o = t.extend({}, this.options), (null === this.settings || this._breakpoint !== i) && (this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = i, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, o.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function(e) {
        var n = this.trigger("prepare", {
            content: e
        });
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, o.prototype.update = function() {
        for (var e = 0, n = this._pipe.length, i = t.proxy(function(t) {
            return this[t]
        }, this._invalidated), o = {}; n > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}
    }, o.prototype.width = function(t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, o.prototype.eventsCall = function() {
        this.e._onDragStart = t.proxy(function(t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function(t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function(t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function(t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function(t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function(t) {
            this.preventClick(t)
        }, this)
    }, o.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
    }, o.prototype.eventsRouter = function(t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, o.prototype.internalEvents = function() {
        var n = ("ontouchstart" in e || navigator.msMaxTouchPoints, e.navigator.msPointerEnabled);
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !n && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, o.prototype.onDragStart = function(i) {
        var o, r, a, l;
        if (3 === (o = i.originalEvent || i || e.event).which || this.state.isTouch) return !1;
        if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = s(o).x, a = s(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(n).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this))
    }, o.prototype.onDragMove = function(t) {
        var n, o, r, a, l, c;
        this.state.isTouch && (this.state.isScrolling || (o = s(n = t.originalEvent || t || e.event).x, r = s(n).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), c = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + c), l + c)), (this.drag.distance > 8 || this.drag.distance < -8) && (n.preventDefault !== i ? n.preventDefault() : n.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, o.prototype.onDragEnd = function(e) {
        var i, o;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), i = this.drag.endTime - this.drag.startTime, (Math.abs(this.drag.distance) > 3 || i > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(n).off(".owl.dragEvents")
        }
    }, o.prototype.removeClick = function(n) {
        this.drag.targetEl = n, t(n).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
            t(n).off("click.preventClick")
        }, 300)
    }, o.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, o.prototype.getTransformProperty = function() {
        var t;
        return !0 !== (16 === (t = (t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform")).replace(/matrix(3d)?\(|\)/g, "").split(",")).length) ? t[4] : t[12]
    }, o.prototype.closest = function(e) {
        var n = -1,
            i = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, s) {
            return e > s - 30 && s + 30 > e ? n = t : this.op(e, "<", s) && this.op(e, ">", o[t + 1] || s - i) && (n = "left" === this.state.direction ? t + 1 : t), -1 === n
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
    }, o.prototype.animate = function(e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: e + "px"
        }) : this.$stage.animate({
            left: e
        }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, o.prototype.current = function(t) {
        if (t === i) return this._current;
        if (0 === this._items.length) return i;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function(t) {
        this._invalidated[t] = !0
    }, o.prototype.reset = function(t) {
        (t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function(e, n) {
        var o = n ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > o ? i : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(n), Math.min(this.maximum(n), e))
    }, o.prototype.relative = function(t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function(t) {
        var e, n, i, o = 0,
            s = this.settings;
        if (t) return this._items.length - 1;
        if (!s.loop && s.center) e = this._items.length - 1;
        else if (s.loop || s.center)
            if (s.loop || s.center) e = this._items.length + s.items;
            else {
                if (!s.autoWidth && !s.merge) throw "Can not detect maximum absolute position.";
                for (revert = s.rtl ? 1 : -1, n = this.$stage.width() - this.$element.width();
                     (i = this.coordinates(o)) && !(i * revert >= n);) e = ++o
            } else e = this._items.length - s.items;
        return e
    }, o.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function(t) {
        return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function(t) {
        return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function(e) {
        var n = this._clones.length / 2,
            o = n + this._items.length,
            s = function(t) {
                return t % 2 == 0 ? o + t / 2 : n - (t + 1) / 2
            };
        return e === i ? t.map(this._clones, function(t, e) {
            return s(e)
        }) : t.map(this._clones, function(t, n) {
            return t === e ? s(n) : null
        })
    }, o.prototype.speed = function(t) {
        return t !== i && (this._speed = t), this._speed
    }, o.prototype.coordinates = function(e) {
        var n = null;
        return e === i ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (n = this._coordinates[e], n += (this.width() - n + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : n = this._coordinates[e - 1] || 0, n)
    }, o.prototype.duration = function(t, e, n) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, o.prototype.to = function(n, i) {
        if (this.settings.loop) {
            var o = n - this.relative(this.current()),
                s = this.current(),
                r = this.current(),
                a = this.current() + o,
                l = 0 > r - a,
                c = this._clones.length + this._items.length;
            a < this.settings.items && !1 === l ? (s = r + this._items.length, this.reset(s)) : a >= c - this.settings.items && !0 === l && (s = r - this._items.length, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                this.speed(this.duration(this.current(), s + o, i)), this.current(s + o), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), n, i)), this.current(n), this.update()
    }, o.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.transitionEnd = function(t) {
        return (t === i || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
    }, o.prototype.viewport = function() {
        var i;
        if (this.options.responsiveBaseElement !== e) i = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) i = e.innerWidth;
        else {
            if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
            i = n.documentElement.clientWidth
        }
        return i
    }, o.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function(t, e) {
        e = e === i ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, o.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, n) {
            return t.proxy(function(t) {
                t.relatedTarget !== this && (this.suppress([n]), e.apply(this, [].slice.call(arguments, 1)), this.release([n]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function(t, n) {
            this.$element.on(t + ".owl.carousel", e(n, t + ".owl.carousel"))
        }, this))
    }, o.prototype.watchVisibility = function() {
        function n(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }
        n(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(function() {
            n(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }, this), 500))
    }, o.prototype.preloadAutoWidthImages = function(e) {
        var n, i, o, s;
        n = 0, i = this, e.each(function(r, a) {
            o = t(a), (s = new Image).onload = function() {
                n++, o.attr("src", s.src), o.css("opacity", 1), n >= e.length && (i.state.imagesLoaded = !0, i.initialize())
            }, s.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
        })
    }, o.prototype.destroy = function() {
        for (var i in this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd), this._plugins) this._plugins[i].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(n).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, o.prototype.op = function(t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
            case "<":
                return i ? t > n : n > t;
            case ">":
                return i ? n > t : t > n;
            case ">=":
                return i ? n >= t : t >= n;
            case "<=":
                return i ? t >= n : n >= t
        }
    }, o.prototype.on = function(t, e, n, i) {
        t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }, o.prototype.off = function(t, e, n, i) {
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }, o.prototype.trigger = function(e, n, i) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            s = t.camelCase(t.grep(["on", e, i], function(t) {
                return t
            }).join("-").toLowerCase()),
            r = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, o, n));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(r)
        }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[s] && this.settings[s].apply(this, r)), r
    }, o.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.browserSupport = function() {
        if (this.support3d = r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0], this.support3d) {
            this.transformVendor = r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
            this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) {
        return this.each(function() {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e))
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document), function(t, e) {
    var n = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, o = n.center && -1 * i || 0, s = (e.property && e.property.value || this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function(t, e) {
                        this.load(e)
                    }, this); o++ < i;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s++)), a)
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    }, n.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n),
            o = i && i.find(".owl-lazy");
        !o || t.inArray(i.get(0), this._loaded) > -1 || (o.each(t.proxy(function(n, i) {
            var o, s = t(i),
                r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", {
                element: s,
                url: r
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
                s.css("opacity", 1), this._core.trigger("loaded", {
                    element: s,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : ((o = new Image).onload = t.proxy(function() {
                s.css({
                    "background-image": "url(" + r + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: s,
                    url: r
                }, "lazy")
            }, this), o.src = r)
        }, this)), this._loaded.push(i.get(0)))
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document), function(t) {
    var e = function(n) {
        this._core = n, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function(t, e, n) {
    var i = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": t.proxy(function(t) {
                this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var n = t(e.content).find(".owl-video");
                n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, i.prototype.fetch = function(t, e) {
        var n = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
            i = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((i = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube";
        else {
            if (!(i[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            n = "vimeo"
        }
        i = i[6], this._videos[r] = {
            type: n,
            id: i,
            width: o,
            height: s
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, i.prototype.thumbnail = function(e, n) {
        var i, o, s = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
            r = e.find("img"),
            a = "src",
            l = "",
            c = this._core.settings,
            h = function(t) {
                '<div class="owl-video-play-icon"></div>', i = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after('<div class="owl-video-play-icon"></div>')
            };
        return e.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), r.length ? (h(r.attr(a)), r.remove(), !1) : void("youtube" === n.type ? (o = "http://img.youtube.com/vi/" + n.id + "/hqdefault.jpg", h(o)) : "vimeo" === n.type && t.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, h(o)
            }
        }))
    }, i.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, i.prototype.play = function(e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var n, i, o = t(e.target || e.srcElement),
            s = o.closest("." + this._core.settings.itemClass),
            r = this._videos[s.attr("data-video")],
            a = r.width || "100%",
            l = r.height || this._core.$stage.height();
        "youtube" === r.type ? n = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (n = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, i = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + n + "</div>"), o.after(i)
    }, i.prototype.isInFullScreen = function() {
        var i = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return i && t(i).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(i && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
    var o = function(e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                this.swapping = "translated" == t.type
            }, this),
            "translate.owl.carousel": t.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, o.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, n = t.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                s = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n)), s && o.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n))
        }
    }, o.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document), function(t, e, n) {
    var i = function(e) {
        this.core = e, this.core.options = t.extend({}, i.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, n) {
                this.play(e, n)
            }, this),
            "stop.owl.autoplay": t.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, i.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, i.prototype.play = function() {
        return !0 === n.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, i.prototype.stop = function() {
        e.clearInterval(this.interval)
    }, i.prototype.pause = function() {
        e.clearInterval(this.interval)
    }, i.prototype.destroy = function() {
        var t, n;
        for (t in e.clearInterval(this.interval), this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document), function(t) {
    "use strict";
    var e = function(n) {
        this._core = n, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(),
                        n = this._core.maximum(),
                        i = this._core.minimum();
                    t.data = t.property.value > n ? e >= n ? i : n : t.property.value < i ? n : t.property.value
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": t.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, e.prototype.initialize = function() {
        var e, n, i = this._core.settings;
        for (n in i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), i.navContainer && i.dotsContainer || (this._controls.$container = t("<div>").addClass(i.controlsClass).appendTo(this.$element)), this._controls.$indicators = i.dotsContainer ? t(i.dotsContainer) : t("<div>").hide().addClass(i.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
            var n = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed)
        }, this)), e = i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + i.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(i.navClass[0]).html(i.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next.addClass(i.navClass[1]).html(i.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
            this.next(i.navSpeed)
        }, this)), this._overrides) this._core[n] = t.proxy(this[n], this)
    }, e.prototype.destroy = function() {
        var t, e, n, i;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.prototype.update = function() {
        var t, e, n = this._core.settings,
            i = this._core.clones().length / 2,
            o = i + this._core.items().length,
            s = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
            for (this._pages = [], t = i, e = 0, 0; o > t; t++)(e >= s || 0 === e) && (this._pages.push({
                start: t - i,
                end: t - i + s - 1
            }), e = 0, 0), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function() {
        var e, n, i = "",
            o = this._core.settings,
            s = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= s), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
                for (n = 0; n < this._controls.$indicators.children().length; n++) i += this._templates[this._core.relative(n)];
                this._controls.$indicators.html(i)
            } else e > 0 ? (i = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(i)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(o.dots)
    }, e.prototype.onTrigger = function(e) {
        var n = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items)
        }
    }, e.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function(t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function(e) {
        var n, i, o = this._core.settings;
        return "page" == o.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += o.slideBy : n -= o.slideBy), n
    }, e.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function(e, n, i) {
        var o;
        i ? t.proxy(this._overrides.to, this._core)(e, n) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, n))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function(t, e) {
    "use strict";
    var n = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var n = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[n] = e.content
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1),
                n = this._core.$stage.children(),
                i = this._hashes[t] && n.index(this._hashes[t]) || 0;
            return !!t && void this._core.to(i, !1, !0)
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function() {
        var n, i;
        for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document), function() {
    var t, e, n, i, o, s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        r = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function(t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, n, i, o;
            for (e = n = 0, i = (o = this.keys).length; i > n; e = ++n)
                if (o[e] === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var n, i, o, s;
            for (n = i = 0, o = (s = this.keys).length; o > i; n = ++i)
                if (s[n] === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), i = this.getComputedStyle || function(t) {
        return this.getPropertyValue = function(e) {
            var n;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                return e.toUpperCase()
            }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, n, i, o, s;
            if (this.stopped = !1, this.boxes = function() {
                var t, n, i, o;
                for (o = [], t = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; n > t; t++) e = i[t], o.push(e);
                return o
            }.call(this), this.all = function() {
                var t, n, i, o;
                for (o = [], t = 0, n = (i = this.boxes).length; n > t; t++) e = i[t], o.push(e);
                return o
            }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (n = 0, i = (o = this.boxes).length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t((s = this, function(t) {
                var e, n, i, o, r;
                for (r = [], e = 0, n = t.length; n > e; e++) o = t[e], r.push(function() {
                    var t, e, n, s;
                    for (s = [], t = 0, e = (n = o.addedNodes || []).length; e > t; t++) i = n[t], s.push(this.doSync(i));
                    return s
                }.call(s));
                return r
            })).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, o.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function() {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(t) {
            var e, n, i, o, s;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (s = [], n = 0, i = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i > n; n++) e = o[n], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), s.push(this.scrolled = !0)) : s.push(void 0);
                return s
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
            var n, i, o, s;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate((s = this, function() {
                return s.customStyle(t, e, i, n, o)
            }))
        }, o.prototype.animate = "requestAnimationFrame" in window ? function(t) {
            return window.requestAnimationFrame(t)
        } : function(t) {
            return t()
        }, o.prototype.resetStyle = function() {
            var t, e, n, i, o;
            for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function(t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
        }, o.prototype.customStyle = function(t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                animationDuration: n
            }), i && this.vendorSet(t.style, {
                animationDelay: i
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var n, i, o, s;
            for (n in i = [], e) o = e[n], t["" + n] = o, i.push(function() {
                var e, i, r, a;
                for (a = [], e = 0, i = (r = this.vendors).length; i > e; e++) s = r[e], a.push(t["" + s + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                return a
            }.call(this));
            return i
        }, o.prototype.vendorCSS = function(t, e) {
            var n, o, s, r, a, l;
            for (r = (a = i(t)).getPropertyCSSValue(e), n = 0, o = (s = this.vendors).length; o > n; n++) l = s[n], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
            return r
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, n, i, o;
                for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)(t = i[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, n, i, o, s;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, o = (s = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, e = (i = this.offsetTop(t)) + t.clientHeight, o >= i && e >= s
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}.call(this), function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = t()
    }
}(function() {
    return function t(e, n, i) {
        function o(r, a) {
            if (!n[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var h = n[r] = {
                    exports: {}
                };
                e[r][0].call(h.exports, function(t) {
                    var n = e[r][1][t];
                    return o(n || t)
                }, h, h.exports, t, e, n, i)
            }
            return n[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
        return o
    }({
        1: [function(t, e, n) {
            var i = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var o = Element.prototype;
                o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
            }
            e.exports = function(t, e) {
                for (; t && t.nodeType !== i;) {
                    if (t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        }, {}],
        2: [function(t, e, n) {
            var i = t("./closest");
            e.exports = function(t, e, n, o, s) {
                var r = function(t, e, n, o) {
                    return function(n) {
                        n.delegateTarget = i(n.target, e), n.delegateTarget && o.call(t, n)
                    }
                }.apply(this, arguments);
                return t.addEventListener(n, r, s), {
                    destroy: function() {
                        t.removeEventListener(n, r, s)
                    }
                }
            }
        }, {
            "./closest": 1
        }],
        3: [function(t, e, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function(t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, {}],
        4: [function(t, e, n) {
            var i = t("./is"),
                o = t("delegate");
            e.exports = function(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!i.string(e)) throw new TypeError("Second argument must be a String");
                if (!i.fn(n)) throw new TypeError("Third argument must be a Function");
                if (i.node(t)) return r = e, a = n, (s = t).addEventListener(r, a), {
                    destroy: function() {
                        s.removeEventListener(r, a)
                    }
                };
                var s, r, a, l, c, h, u, p, d;
                if (i.nodeList(t)) return l = t, c = e, h = n, Array.prototype.forEach.call(l, function(t) {
                    t.addEventListener(c, h)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(l, function(t) {
                            t.removeEventListener(c, h)
                        })
                    }
                };
                if (i.string(t)) return u = t, p = e, d = n, o(document.body, u, p, d);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(t, e, n) {
            e.exports = function(t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");
                    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var i = window.getSelection(),
                        o = document.createRange();
                    o.selectNodeContents(t), i.removeAllRanges(), i.addRange(o), e = i.toString()
                }
                return e
            }
        }, {}],
        6: [function(t, e, n) {
            function i() {}
            i.prototype = {
                on: function(t, e, n) {
                    var i = this.e || (this.e = {});
                    return (i[t] || (i[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function(t, e, n) {
                    function i() {
                        o.off(t, i), e.apply(n, arguments)
                    }
                    var o = this;
                    return i._ = e, this.on(t, i, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, o = n.length; i < o; i++) n[i].fn.apply(n[i].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        i = n[t],
                        o = [];
                    if (i && e)
                        for (var s = 0, r = i.length; s < r; s++) i[s].fn !== e && i[s].fn._ !== e && o.push(i[s]);
                    return o.length ? n[t] = o : delete n[t], this
                }
            }, e.exports = i
        }, {}],
        7: [function(t, e, n) {
            ! function(i, o) {
                if (void 0 !== n) o(e, t("select"));
                else {
                    var s = {
                        exports: {}
                    };
                    o(s, i.select), i.clipboardAction = s.exports
                }
            }(this, function(t, e) {
                "use strict";
                var n, i = (n = e) && n.__esModule ? n : {
                        default: n
                    },
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    s = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    r = function() {
                        function t(e) {
                            (function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            })(this, t), this.resolveOptions(e), this.initSelection()
                        }
                        return s(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = t.action, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function() {
                                var t = this,
                                    e = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return t.removeFake()
                                }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = (0, i.default)(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function() {
                                var t = void 0;
                                try {
                                    t = document.execCommand(this.action)
                                } catch (e) {
                                    t = !1
                                }
                                this.handleResult(t)
                            }
                        }, {
                            key: "handleResult",
                            value: function(t) {
                                this.emitter.emit(t ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function() {
                                this.target && this.target.blur(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(t) {
                                if (void 0 !== t) {
                                    if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = t
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), t
                    }();
                t.exports = r
            })
        }, {
            select: 5
        }],
        8: [function(t, e, n) {
            ! function(i, o) {
                if (void 0 !== n) o(e, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
                else {
                    var s = {
                        exports: {}
                    };
                    o(s, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = s.exports
                }
            }(this, function(t, e, n, i) {
                "use strict";

                function o(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function s(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n)) return e.getAttribute(n)
                }
                var r = o(e),
                    a = o(n),
                    l = o(i),
                    c = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    h = function(t) {
                        function e(t, n) {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e);
                            var i = function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" != typeof e && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return i.resolveOptions(n), i.listenClick(t), i
                        }
                        return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(e, a.default), c(e, [{
                            key: "resolveOptions",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText
                            }
                        }, {
                            key: "listenClick",
                            value: function(t) {
                                var e = this;
                                this.listener = (0, l.default)(t, "click", function(t) {
                                    return e.onClick(t)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function(t) {
                                var e = t.delegateTarget || t.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new r.default({
                                    action: this.action(e),
                                    target: this.target(e),
                                    text: this.text(e),
                                    trigger: e,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(t) {
                                return s("action", t)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(t) {
                                var e = s("target", t);
                                if (e) return document.querySelector(e)
                            }
                        }, {
                            key: "defaultText",
                            value: function(t) {
                                return s("text", t)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    e = "string" == typeof t ? [t] : t,
                                    n = !!document.queryCommandSupported;
                                return e.forEach(function(t) {
                                    n = n && !!document.queryCommandSupported(t)
                                }), n
                            }
                        }]), e
                    }();
                t.exports = h
            })
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        }]
    }, {}, [8])(8)
}), "function" == typeof WOW) {
    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 150,
        mobile: !1,
        live: !0
    });
    wow.init()
}

function fixHeight() {
    var t = $("#mainNav").outerHeight();
    $("#frame").attr("height", $(window).height() - 0 - t + "px")
}
