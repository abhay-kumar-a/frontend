gapi.loaded_1(function(_) {
    var window = this;
    _.yh = (window.gapi || {}).load;
    _.Ko = _.lf(_.yf, "rw", _.mf());
    var Lo = function(a, b) {
        (a = _.Ko[a]) && a.state < b && (a.state = b)
    };
    var Mo = function(a) {
        a = (a = _.Ko[a]) ? a.oid : void 0;
        if (a) {
            var b = _.hf.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete _.Ko[a];
            Mo(a)
        }
    };
    _.No = function(a) {
        a = a.container;
        "string" === typeof a && (a = document.getElementById(a));
        return a
    }
    ;
    _.Oo = function(a) {
        var b = a.clientWidth;
        return "position:absolute;top:-10000px;width:" + (b ? b + "px" : a.style.width || "300px") + ";margin:0px;border-style:none;"
    }
    ;
    _.Po = function(a, b) {
        var c = {}
          , d = a.Gc()
          , e = b && b.width
          , f = b && b.height
          , h = b && b.verticalAlign;
        h && (c.verticalAlign = h);
        e || (e = d.width || a.width);
        f || (f = d.height || a.height);
        d.width = c.width = e;
        d.height = c.height = f;
        d = a.getIframeEl();
        e = a.getId();
        Lo(e, 2);
        a: {
            e = a.getSiteEl();
            c = c || {};
            if (_.yf.oa) {
                var k = d.id;
                if (k) {
                    f = (f = _.Ko[k]) ? f.state : void 0;
                    if (1 === f || 4 === f)
                        break a;
                    Mo(k)
                }
            }
            (f = e.nextSibling) && f.dataset && f.dataset.gapistub && (e.parentNode.removeChild(f),
            e.style.cssText = "");
            f = c.width;
            h = c.height;
            var l = e.style;
            l.textIndent = "0";
            l.margin = "0";
            l.padding = "0";
            l.background = "transparent";
            l.borderStyle = "none";
            l.cssFloat = "none";
            l.styleFloat = "none";
            l.lineHeight = "normal";
            l.fontSize = "1px";
            l.verticalAlign = "baseline";
            e = e.style;
            e.display = "inline-block";
            d = d.style;
            d.position = "static";
            d.left = "0";
            d.top = "0";
            d.visibility = "visible";
            f && (e.width = d.width = f + "px");
            h && (e.height = d.height = h + "px");
            c.verticalAlign && (e.verticalAlign = c.verticalAlign);
            k && Lo(k, 3)
        }
        (k = b ? b.title : null) && a.getIframeEl().setAttribute("title", k);
        (b = b ? b.ariaLabel : null) && a.getIframeEl().setAttribute("aria-label", b)
    }
    ;
    _.Qo = function(a) {
        var b = a.getSiteEl();
        b && b.removeChild(a.getIframeEl())
    }
    ;
    _.Ro = function(a) {
        a.where = _.No(a);
        var b = a.messageHandlers = a.messageHandlers || {}
          , c = function(e) {
            _.Po(this, e)
        };
        b._ready = c;
        b._renderstart = c;
        var d = a.onClose;
        a.onClose = function(e) {
            d && d.call(this, e);
            _.Qo(this)
        }
        ;
        a.onCreate = function(e) {
            e = e.getIframeEl();
            e.style.cssText = _.Oo(e)
        }
    }
    ;
    _.Bj = function(a) {
        var b = window;
        a = (a || b.location.href).match(RegExp(".*(\\?|#|&)usegapi=([^&#]+)")) || [];
        return "1" === decodeURIComponent(a[a.length - 1] || "")
    }
    ;
    _.So = function(a, b) {
        a.T.where = b;
        return a
    }
    ;
    _.To = function() {
        _.yk.apply(this, arguments)
    }
    ;
    _.C(_.To, _.yk);
    _.Uo = _.mf();
    _.Vo = {};
    window.iframer = _.Vo;
    var Zo = function(a) {
        var b = [new Wo(Xo[0].toLowerCase(),Yo)];
        if (0 === b.length)
            throw Error("q");
        if (b.map(function(c) {
            if (c instanceof Wo)
                c = c.hY;
            else
                throw Error("q");
            return c
        }).every(function(c) {
            return 0 !== "data-gapiscan".indexOf(c)
        }))
            throw Error("r`data-gapiscan");
        a.setAttribute("data-gapiscan", "true")
    }, Yo = {}, $o = function() {}, Wo = function(a) {
        this.hY = a
    }, ap, bp, cp, dp, ep, ip, jp;
    _.C(Wo, $o);
    Wo.prototype.toString = function() {
        return this.hY
    }
    ;
    ap = function(a) {
        if (_.kf.test(Object.keys))
            return Object.keys(a);
        var b = [], c;
        for (c in a)
            _.nf(a, c) && b.push(c);
        return b
    }
    ;
    bp = {
        button: !0,
        div: !0,
        span: !0
    };
    cp = function(a) {
        var b = _.lf(_.yf, "sws", []);
        return 0 <= _.kn.call(b, a)
    }
    ;
    dp = function(a) {
        return _.lf(_.yf, "watt", _.mf())[a]
    }
    ;
    ep = function(a) {
        return function(b, c) {
            return a ? _.Rm()[c] || a[c] || "" : _.Rm()[c] || ""
        }
    }
    ;
    _.fp = {
        callback: 1,
        clientid: 1,
        cookiepolicy: 1,
        openidrealm: -1,
        includegrantedscopes: -1,
        requestvisibleactions: 1,
        scope: 1
    };
    _.gp = !1;
    _.hp = function() {
        if (!_.gp) {
            for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                var c = a[b].name.toLowerCase();
                if (_.ed(c, "google-signin-")) {
                    c = c.substring(14);
                    var d = a[b].content;
                    _.fp[c] && d && (_.Uo[c] = d)
                }
            }
            if (window.self !== window.top) {
                a = document.location.toString();
                for (var e in _.fp)
                    0 < _.fp[e] && (b = _.qf(a, e, "")) && (_.Uo[e] = b)
            }
            _.gp = !0
        }
        e = _.mf();
        _.of(_.Uo, e);
        return e
    }
    ;
    ip = function(a) {
        var b;
        a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
        a = b ? b : a;
        return _.xm(document, a)
    }
    ;
    jp = function(a) {
        a = a || "canonical";
        for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
            var e = b[c]
              , f = e.getAttribute("rel");
            if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = ip(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i))
                return e
        }
        return window.location.href
    }
    ;
    _.kp = function() {
        return window.location.origin || window.location.protocol + "//" + window.location.host
    }
    ;
    _.lp = function(a, b, c, d) {
        return (a = "string" == typeof a ? a : void 0) ? ip(a) : jp(d)
    }
    ;
    _.mp = function(a, b, c) {
        null == a && c && (a = c.db,
        null == a && (a = c.gwidget && c.gwidget.db));
        return a || void 0
    }
    ;
    _.np = function(a, b, c) {
        null == a && c && (a = c.ecp,
        null == a && (a = c.gwidget && c.gwidget.ecp));
        return a || void 0
    }
    ;
    _.op = function(a, b, c) {
        return _.lp(a, b, c, b.action ? void 0 : "publisher")
    }
    ;
    var pp, qp, rp, sp, tp, up, wp, vp;
    pp = {
        se: "0"
    };
    qp = {
        post: !0
    };
    rp = {
        style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
    };
    sp = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" ");
    tp = _.lf(_.yf, "WI", _.mf());
    up = ["style", "data-gapiscan"];
    wp = function(a) {
        for (var b = _.mf(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = a.attributes.length, e = 0; e < d; e++) {
            var f = a.attributes[e]
              , h = f.name
              , k = f.value;
            0 <= _.kn.call(up, h) || c && 0 != h.indexOf("data-") || "null" === k || "specified"in f && !f.specified || (c && (h = h.substr(5)),
            b[h.toLowerCase()] = k)
        }
        a = a.style;
        (c = vp(a && a.height)) && (b.height = String(c));
        (a = vp(a && a.width)) && (b.width = String(a));
        return b
    }
    ;
    _.yp = function(a, b, c, d, e, f) {
        if (c.rd)
            var h = b;
        else
            h = document.createElement("div"),
            b.dataset.gapistub = !0,
            h.style.cssText = "position:absolute;width:450px;left:-10000px;",
            b.parentNode.insertBefore(h, b);
        f.siteElement = h;
        h.id || (h.id = _.xp(a));
        b = _.mf();
        b[">type"] = a;
        _.of(c, b);
        a = _.Vm(d, h, e);
        f.iframeNode = a;
        f.id = a.getAttribute("id")
    }
    ;
    _.xp = function(a) {
        _.lf(tp, a, 0);
        return "___" + a + "_" + tp[a]++
    }
    ;
    vp = function(a) {
        var b = void 0;
        "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
        return b
    }
    ;
    var Xo = _.wk(["data-"]), zp, Ap, Bp, Cp, Dp = /(?:^|\s)g-((\S)*)(?:$|\s)/, Ep = {
        plusone: !0,
        autocomplete: !0,
        profile: !0,
        signin: !0,
        signin2: !0
    };
    zp = _.lf(_.yf, "SW", _.mf());
    Ap = _.lf(_.yf, "SA", _.mf());
    Bp = _.lf(_.yf, "SM", _.mf());
    Cp = _.lf(_.yf, "FW", []);
    var Fp = function(a, b) {
        return ("string" === typeof a ? document.getElementById(a) : a) || b
    }
      , Jp = function(a, b) {
        var c;
        Gp.ps0 = (new Date).getTime();
        Hp("ps0");
        a = Fp(a, _.hf);
        var d = _.hf.documentMode;
        if (a.querySelectorAll && (!d || 8 < d)) {
            d = b ? [b] : ap(zp).concat(ap(Ap)).concat(ap(Bp));
            for (var e = [], f = 0; f < d.length; f++) {
                var h = d[f];
                e.push(".g-" + h, "g\\:" + h)
            }
            d = a.querySelectorAll(e.join(","))
        } else
            d = a.getElementsByTagName("*");
        a = _.mf();
        for (e = 0; e < d.length; e++) {
            f = d[e];
            var k = f;
            h = b;
            var l = k.nodeName.toLowerCase()
              , m = void 0;
            if (k.hasAttribute("data-gapiscan"))
                h = null;
            else {
                var n = l.indexOf("g:");
                0 == n ? m = l.substr(2) : (n = (n = String(k.className || k.getAttribute("class"))) && Dp.exec(n)) && (m = n[1]);
                h = !m || !(zp[m] || Ap[m] || Bp[m]) || h && m !== h ? null : m
            }
            h && (Ep[h] || 0 == f.nodeName.toLowerCase().indexOf("g:") || 0 != ap(wp(f)).length) && (Zo(f),
            _.lf(a, h, []).push(f))
        }
        for (p in a)
            Cp.push(p);
        Gp.ps1 = (new Date).getTime();
        Hp("ps1");
        if (b = Cp.join(":"))
            try {
                _.pf.load(b, void 0)
            } catch (q) {
                _.Pg.log(q);
                return
            }
        e = [];
        for (c in a) {
            d = a[c];
            var p = 0;
            for (b = d.length; p < b; p++)
                f = d[p],
                Ip(c, f, wp(f), e, b)
        }
    };
    var Kp = function(a, b) {
        var c = dp(a);
        b && c ? (c(b),
        (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : _.pf.load(a, function() {
            var d = dp(a)
              , e = b && b.iframeNode
              , f = b && b.userParams;
            e && d ? (d(b),
            e.setAttribute("data-gapiattached", !0)) : (d = _.pf[a].go,
            "signin2" == a ? d(e, f) : d(e && e.parentNode, f))
        })
    }
      , Ip = function(a, b, c, d, e, f, h) {
        switch (Lp(b, a, f)) {
        case 0:
            a = Bp[a] ? a + "_annotation" : a;
            d = {};
            d.iframeNode = b;
            d.userParams = c;
            Kp(a, d);
            break;
        case 1:
            if (b.parentNode) {
                for (var k in c) {
                    if (f = _.nf(c, k))
                        f = c[k],
                        f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                    if (f)
                        try {
                            c[k] = _.Lg(c[k])
                        } catch (w) {
                            delete c[k]
                        }
                }
                k = !0;
                c.dontclear && (k = !1);
                delete c.dontclear;
                var l;
                f = {};
                var m = l = a;
                "plus" == a && c.action && (l = a + "_" + c.action,
                m = a + "/" + c.action);
                (l = _.Gf("iframes/" + l + "/url")) || (l = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + m + "?usegapi=1");
                for (n in pp)
                    f[n] = n + "/" + (c[n] || pp[n]) + "/";
                var n = _.xm(_.hf, l.replace(_.Qm, ep(f)));
                m = "iframes/" + a + "/params/";
                f = {};
                _.of(c, f);
                (l = _.Gf("lang") || _.Gf("gwidget/lang")) && (f.hl = l);
                qp[a] || (f.origin = _.kp());
                f.exp = _.Gf(m + "exp");
                if (m = _.Gf(m + "location"))
                    for (l = 0; l < m.length; l++) {
                        var p = m[l];
                        f[p] = _.gf.location[p]
                    }
                switch (a) {
                case "plus":
                case "follow":
                    f.url = _.op(f.href, c, null);
                    delete f.href;
                    break;
                case "plusone":
                    m = (m = c.href) ? ip(m) : jp();
                    f.url = m;
                    f.db = _.mp(c.db, void 0, _.Gf());
                    f.ecp = _.np(c.ecp, void 0, _.Gf());
                    delete f.href;
                    break;
                case "signin":
                    f.url = jp()
                }
                _.yf.ILI && (f.iloader = "1");
                delete f["data-onload"];
                delete f.rd;
                for (var q in pp)
                    f[q] && delete f[q];
                f.gsrc = _.Gf("iframes/:source:");
                q = _.Gf("inline/css");
                "undefined" !== typeof q && 0 < e && q >= e && (f.ic = "1");
                q = /^#|^fr-/;
                e = {};
                for (var t in f)
                    _.nf(f, t) && q.test(t) && (e[t.replace(q, "")] = f[t],
                    delete f[t]);
                t = "q" == _.Gf("iframes/" + a + "/params/si") ? f : e;
                q = _.hp();
                for (var v in q)
                    !_.nf(q, v) || _.nf(f, v) || _.nf(e, v) || (t[v] = q[v]);
                v = [].concat(sp);
                t = _.Gf("iframes/" + a + "/methods");
                _.jn(t) && (v = v.concat(t));
                for (u in c)
                    _.nf(c, u) && /^on/.test(u) && ("plus" != a || "onconnect" != u) && (v.push(u),
                    delete f[u]);
                delete f.callback;
                e._methods = v.join(",");
                var u = _.wm(n, f, e);
                v = h || {};
                v.allowPost = 1;
                v.attributes = rp;
                v.dontclear = !k;
                h = {};
                h.userParams = c;
                h.url = u;
                h.type = a;
                _.yp(a, b, c, u, v, h);
                b = h.id;
                c = _.mf();
                c.id = b;
                c.userParams = h.userParams;
                c.url = h.url;
                c.type = h.type;
                c.state = 1;
                _.Ko[b] = c;
                b = h
            } else
                b = null;
            b && ((c = b.id) && d.push(c),
            Kp(a, b))
        }
    }
      , Lp = function(a, b, c) {
        if (a && 1 === a.nodeType && b) {
            if (c)
                return 1;
            if (Bp[b]) {
                if (bp[a.nodeName.toLowerCase()])
                    return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
            } else {
                if (Ap[b])
                    return 0;
                if (zp[b])
                    return 1
            }
        }
        return null
    };
    _.lf(_.pf, "platform", {}).go = function(a, b) {
        Jp(a, b)
    }
    ;
    var Mp = _.lf(_.yf, "perf", _.mf()), Gp = _.lf(Mp, "g", _.mf()), Np = _.lf(Mp, "i", _.mf()), Op, Pp, Qp, Hp, Sp, Tp, Up;
    _.lf(Mp, "r", []);
    Op = _.mf();
    Pp = _.mf();
    Qp = function(a, b, c, d) {
        Op[c] = Op[c] || !!d;
        _.lf(Pp, c, []);
        Pp[c].push([a, b])
    }
    ;
    Hp = function(a, b, c) {
        var d = Mp.r;
        "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
    }
    ;
    Sp = function(a, b, c, d) {
        if ("_p" == b)
            throw Error("Q");
        _.Rp(a, b, c, d)
    }
    ;
    _.Rp = function(a, b, c, d) {
        Tp(b, c)[a] = d || (new Date).getTime();
        Hp(a, b, c)
    }
    ;
    Tp = function(a, b) {
        a = _.lf(Np, a, _.mf());
        return _.lf(a, b, _.mf())
    }
    ;
    Up = function(a, b, c) {
        var d = null;
        b && c && (d = Tp(b, c)[a]);
        return d || Gp[a]
    }
    ;
    (function() {
        function a(h) {
            this.t = {};
            this.tick = function(k, l, m) {
                this.t[k] = [void 0 != m ? m : (new Date).getTime(), l];
                if (void 0 == m)
                    try {
                        window.console.timeStamp("CSI/" + k)
                    } catch (n) {}
            }
            ;
            this.getStartTickTime = function() {
                return this.t.start[0]
            }
            ;
            this.tick("start", null, h)
        }
        var b;
        if (window.performance)
            var c = (b = window.performance.timing) && b.responseStart;
        var d = 0 < c ? new a(c) : new a;
        window.__gapi_jstiming__ = {
            Timer: a,
            load: d
        };
        if (b) {
            var e = b.navigationStart;
            0 < e && c >= e && (window.__gapi_jstiming__.srt = c - e)
        }
        if (b) {
            var f = window.__gapi_jstiming__.load;
            0 < e && c >= e && (f.tick("_wtsrt", void 0, e),
            f.tick("wtsrt_", "_wtsrt", c),
            f.tick("tbsd_", "wtsrt_"))
        }
        try {
            b = null,
            window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT),
            f && 0 < e && (f.tick("_tbnd", void 0, window.chrome.csi().startE),
            f.tick("tbnd_", "_tbnd", e))),
            null == b && window.gtbExternal && (b = window.gtbExternal.pageT()),
            null == b && window.external && (b = window.external.pageT,
            f && 0 < e && (f.tick("_tbnd", void 0, window.external.startE),
            f.tick("tbnd_", "_tbnd", e))),
            b && (window.__gapi_jstiming__.pt = b)
        } catch (h) {}
    }
    )();
    if (window.__gapi_jstiming__) {
        window.__gapi_jstiming__.yP = {};
        window.__gapi_jstiming__.Mda = 1;
        var Vp = function(a, b, c) {
            var d = a.t[b]
              , e = a.t.start;
            if (d && (e || c))
                return d = a.t[b][0],
                e = void 0 != c ? c : e[0],
                Math.round(d - e)
        }
          , Wp = function(a, b, c) {
            var d = "";
            window.__gapi_jstiming__.srt && (d += "&srt=" + window.__gapi_jstiming__.srt,
            delete window.__gapi_jstiming__.srt);
            window.__gapi_jstiming__.pt && (d += "&tbsrt=" + window.__gapi_jstiming__.pt,
            delete window.__gapi_jstiming__.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (p) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes) && "function" === typeof e && (e = e())) {
                e.wasFetchedViaSpdy && (d += "&p=s");
                if (e.wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e.npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                }
                e.wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var h = a.t
              , k = h.start;
            e = [];
            f = [];
            for (var l in h)
                if ("start" != l && 0 != l.indexOf("_")) {
                    var m = h[l][1];
                    m ? h[m] && f.push(l + "." + Vp(a, l, h[m][0])) : k && e.push(l + "." + Vp(a, l))
                }
            delete h.start;
            if (b)
                for (var n in b)
                    d += "&" + n + "=" + b[n];
            (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.__gapi_jstiming__.sn || "gwidget") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        }
          , Xp = function(a, b, c) {
            a = Wp(a, b, c);
            if (!a)
                return "";
            b = new Image;
            var d = window.__gapi_jstiming__.Mda++;
            window.__gapi_jstiming__.yP[d] = b;
            b.onload = b.onerror = function() {
                window.__gapi_jstiming__ && delete window.__gapi_jstiming__.yP[d]
            }
            ;
            b.src = a;
            b = null;
            return a
        };
        window.__gapi_jstiming__.report = function(a, b, c) {
            var d = document.visibilityState
              , e = "visibilitychange";
            d || (d = document.webkitVisibilityState,
            e = "webkitvisibilitychange");
            if ("prerender" == d) {
                var f = !1
                  , h = function() {
                    if (!f) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        if ("prerender" == (document.visibilityState || document.webkitVisibilityState))
                            var k = !1;
                        else
                            Xp(a, b, c),
                            k = !0;
                        k && (f = !0,
                        document.removeEventListener(e, h, !1))
                    }
                };
                document.addEventListener(e, h, !1);
                return ""
            }
            return Xp(a, b, c)
        }
    }
    ;var Yp = {
        g: "gapi_global",
        m: "gapi_module",
        w: "gwidget"
    }
      , Zp = function(a, b) {
        this.type = a ? "_p" == a ? "m" : "w" : "g";
        this.name = a;
        this.Zs = b
    };
    Zp.prototype.key = function() {
        switch (this.type) {
        case "g":
            return this.type;
        case "m":
            return this.type + "." + this.Zs;
        case "w":
            return this.type + "." + this.name + this.Zs
        }
    }
    ;
    var $p = new Zp
      , aq = navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/)
      , bq = _.lf(Mp, "_c", _.mf())
      , cq = Math.random() < (_.Gf("csi/rate") || 0)
      , eq = function(a, b, c) {
        for (var d = new Zp(b,c), e = _.lf(bq, d.key(), _.mf()), f = Pp[a] || [], h = 0; h < f.length; ++h) {
            var k = f[h]
              , l = k[0]
              , m = a
              , n = b
              , p = c;
            k = Up(k[1], n, p);
            m = Up(m, n, p);
            e[l] = k && m ? m - k : null
        }
        Op[a] && cq && (dq($p),
        dq(d))
    }
      , fq = function(a, b) {
        b = b || [];
        for (var c = [], d = 0; d < b.length; d++)
            c.push(a + b[d]);
        return c
    }
      , dq = function(a) {
        var b = _.gf.__gapi_jstiming__;
        b.sn = Yp[a.type];
        var c = new b.Timer(0);
        a: {
            switch (a.type) {
            case "g":
                var d = "global";
                break a;
            case "m":
                d = a.Zs;
                break a;
            case "w":
                d = a.name;
                break a
            }
            d = void 0
        }
        c.name = d;
        d = !1;
        var e = a.key()
          , f = bq[e];
        c.tick("_start", null, 0);
        for (var h in f)
            c.tick(h, "_start", f[h]),
            d = !0;
        bq[e] = _.mf();
        d && (h = [],
        h.push("l" + (_.Gf("isPlusUser") ? "1" : "0")),
        d = "m" + (aq ? "1" : "0"),
        h.push(d),
        "m" == a.type ? h.push("p" + a.Zs) : "w" == a.type && (e = "n" + a.Zs,
        h.push(e),
        "0" == a.Zs && h.push(d + e)),
        h.push("u" + (_.Gf("isLoggedIn") ? "1" : "0")),
        a = fq("", h),
        a = fq("abc_", a).join(","),
        b.report(c, {
            e: a
        }))
    };
    Qp("blt", "bs0", "bs1");
    Qp("psi", "ps0", "ps1");
    Qp("rpcqi", "rqe", "rqd");
    Qp("bsprt", "bsrt0", "bsrt1");
    Qp("bsrqt", "bsrt1", "bsrt2");
    Qp("bsrst", "bsrt2", "bsrt3");
    Qp("mli", "ml0", "ml1");
    Qp("mei", "me0", "me1", !0);
    Qp("wcdi", "wrs", "wcdi");
    Qp("wci", "wrs", "wdc");
    Qp("wdi", "wrs", "wrdi");
    Qp("wdt", "bs0", "wrdt");
    Qp("wri", "wrs", "wrri", !0);
    Qp("wrt", "bs0", "wrrt");
    Qp("wji", "wje0", "wje1", !0);
    Qp("wjli", "wjl0", "wjl1");
    Qp("whi", "wh0", "wh1", !0);
    Qp("wai", "waaf0", "waaf1", !0);
    Qp("wadi", "wrs", "waaf1", !0);
    Qp("wadt", "bs0", "waaf1", !0);
    Qp("wprt", "wrt0", "wrt1");
    Qp("wrqt", "wrt1", "wrt2");
    Qp("wrst", "wrt2", "wrt3", !0);
    Qp("fbprt", "fsrt0", "fsrt1");
    Qp("fbrqt", "fsrt1", "fsrt2");
    Qp("fbrst", "fsrt2", "fsrt3", !0);
    Qp("fdns", "fdns0", "fdns1");
    Qp("fcon", "fcon0", "fcon1");
    Qp("freq", "freq0", "freq1");
    Qp("frsp", "frsp0", "frsp1");
    Qp("fttfb", "fttfb0", "fttfb1");
    Qp("ftot", "ftot0", "ftot1", !0);
    var gq = Mp.r;
    if ("function" !== typeof gq) {
        for (var hq; hq = gq.shift(); )
            eq.apply(null, hq);
        Mp.r = eq
    }
    ;var iq = ["div"], jq = "onload", kq = !0, lq = !0, mq = function(a) {
        return a
    }, nq = null, oq = function(a) {
        var b = _.Gf(a);
        return "undefined" !== typeof b ? b : _.Gf("gwidget/" + a)
    }, sq, tq, uq, vq, wq, xq, yq, Eq, zq, Fq, Gq, Hq, Iq, Jq, Aq, Cq, Kq, Bq, Lq, Mq, Nq, Oq, Pq, Qq;
    nq = _.Gf();
    _.Gf("gwidget");
    var pq = oq("parsetags");
    jq = "explicit" === pq || "onload" === pq ? pq : jq;
    var qq = oq("google_analytics");
    "undefined" !== typeof qq && (kq = !!qq);
    var rq = oq("data_layer");
    "undefined" !== typeof rq && (lq = !!rq);
    sq = function() {
        var a = this && this.getId();
        a && (_.yf.drw = a)
    }
    ;
    tq = function() {
        _.yf.drw = null
    }
    ;
    uq = function(a) {
        return function(b) {
            var c = a;
            "number" === typeof b ? c = b : "string" === typeof b && (c = b.indexOf("px"),
            -1 != c && (b = b.substring(0, c)),
            c = parseInt(b, 10));
            return c
        }
    }
    ;
    vq = function(a) {
        "string" === typeof a && (a = window[a]);
        return "function" === typeof a ? a : null
    }
    ;
    wq = function() {
        return oq("lang") || "en-US"
    }
    ;
    xq = function(a) {
        if (!_.La.Cb("attach")) {
            var b = {}, c = _.La.Cb("inline"), d;
            for (d in c)
                c.hasOwnProperty(d) && (b[d] = c[d]);
            b.open = function(e) {
                var f = e.Gc().renderData.id;
                f = document.getElementById(f);
                if (!f)
                    throw Error("R");
                return c.attach(e, f)
            }
            ;
            _.La.Qc("attach", b)
        }
        a.style = "attach"
    }
    ;
    yq = function() {
        var a = {};
        a.width = [uq(450)];
        a.height = [uq(24)];
        a.onready = [vq];
        a.lang = [wq, "hl"];
        a.iloader = [function() {
            return _.yf.ILI
        }
        , "iloader"];
        return a
    }();
    Eq = function(a) {
        var b = {};
        b.Ze = a[0];
        b.uq = -1;
        b.vsa = "___" + b.Ze + "_";
        b.Nga = "g:" + b.Ze;
        b.yqa = "g-" + b.Ze;
        b.CY = [];
        b.config = {};
        b.Cy = [];
        b.M0 = {};
        b.ND = {};
        var c = function(e) {
            for (var f in e)
                if (_.nf(e, f)) {
                    b.config[f] = [vq];
                    b.Cy.push(f);
                    var h = e[f]
                      , k = null
                      , l = null
                      , m = null;
                    "function" === typeof h ? k = h : h && "object" === typeof h && (k = h.mqa,
                    l = h.OD,
                    m = h.HN);
                    m && (b.Cy.push(m),
                    b.config[m] = [vq],
                    b.M0[f] = m);
                    k && (b.config[f] = [k]);
                    l && (b.ND[f] = l)
                }
        }
          , d = function(e) {
            for (var f = {}, h = 0; h < e.length; ++h)
                f[e[h].toLowerCase()] = 1;
            f[b.Nga] = 1;
            b.Lba = f
        };
        a[1] && (b.parameters = a[1]);
        (function(e) {
            b.config = e;
            for (var f in yq)
                yq.hasOwnProperty(f) && !b.config.hasOwnProperty(f) && (b.config[f] = yq[f])
        }
        )(a[2] || {});
        a[3] && c(a[3]);
        a[4] && d(a[4]);
        a[5] && (b.wn = a[5]);
        b.osa = !0 === a[6];
        b.mda = a[7];
        b.Bga = a[8];
        b.Lba || d(iq);
        b.AJ = function(e) {
            b.uq++;
            Sp("wrs", b.Ze, String(b.uq));
            var f = []
              , h = e.element
              , k = e.config
              , l = ":" + b.Ze;
            ":plus" == l && e.Qd && e.Qd.action && (l += "_" + e.Qd.action);
            var m = zq(b, k)
              , n = {};
            _.of(_.hp(), n);
            for (var p in e.Qd)
                null != e.Qd[p] && (n[p] = e.Qd[p]);
            p = {
                container: h.id,
                renderData: e.Hda,
                style: "inline",
                height: k.height,
                width: k.width
            };
            xq(p);
            b.wn && (f[2] = p,
            f[3] = n,
            f[4] = m,
            b.wn("i", f));
            l = _.La.open(l, p, n, m);
            e = e.b7;
            Aq(l, k);
            Bq(l, h);
            Cq(b, l, e);
            Dq(b.Ze, b.uq.toString(), l);
            f[5] = l;
            b.wn && b.wn("e", f)
        }
        ;
        return b
    }
    ;
    zq = function(a, b) {
        for (var c = {}, d = a.Cy.length - 1; 0 <= d; --d) {
            var e = a.Cy[d]
              , f = b[a.M0[e] || e] || b[e]
              , h = b[e];
            h && f !== h && (f = function(l, m) {
                return function(n) {
                    m.apply(this, arguments);
                    l.apply(this, arguments)
                }
            }(f, h));
            f && (c[e] = f)
        }
        for (var k in a.ND)
            a.ND.hasOwnProperty(k) && (c[k] = Fq(c[k] || function() {}
            , a.ND[k]));
        c.drefresh = sq;
        c.erefresh = tq;
        return c
    }
    ;
    Fq = function(a, b) {
        return function(c) {
            var d = b(c);
            if (d) {
                var e = c.href || null;
                if (kq) {
                    if (window._gat)
                        try {
                            var f = window._gat._getTrackerByName("~0");
                            f && "UA-XXXXX-X" != f._getAccount() ? f._trackSocial("Google", d, e) : window._gaq && window._gaq.push(["_trackSocial", "Google", d, e])
                        } catch (k) {}
                    if (window.ga && window.ga.getAll)
                        try {
                            var h = window.ga.getAll();
                            for (f = 0; f < h.length; f++)
                                h[f].send("social", "Google", d, e)
                        } catch (k) {}
                }
                if (lq && window.dataLayer)
                    try {
                        window.dataLayer.push({
                            event: "social",
                            socialNetwork: "Google",
                            socialAction: d,
                            socialTarget: e
                        })
                    } catch (k) {}
            }
            a.call(this, c)
        }
    }
    ;
    Gq = function(a) {
        return _.ho && a instanceof _.ho
    }
    ;
    Hq = function(a) {
        return Gq(a) ? "_renderstart" : "renderstart"
    }
    ;
    Iq = function(a) {
        return Gq(a) ? "_ready" : "ready"
    }
    ;
    Jq = function() {
        return !0
    }
    ;
    Aq = function(a, b) {
        if (b.onready) {
            var c = !1
              , d = function() {
                c || (c = !0,
                b.onready.call(null))
            };
            a.register(Iq(a), d, Jq);
            a.register(Hq(a), d, Jq)
        }
    }
    ;
    Cq = function(a, b, c) {
        var d = a.Ze
          , e = String(a.uq)
          , f = !1
          , h = function() {
            f || (f = !0,
            b.getIframeEl(),
            c && Sp("wrdt", d, e),
            Sp("wrdi", d, e))
        };
        b.register(Hq(b), h, Jq);
        var k = !1;
        a = function() {
            k || (k = !0,
            h(),
            c && Sp("wrrt", d, e),
            Sp("wrri", d, e))
        }
        ;
        b.register(Iq(b), a, Jq);
        Gq(b) ? b.register("widget-interactive-" + b.id, a, Jq) : _.Ug.register("widget-interactive-" + b.id, a);
        _.Ug.register("widget-csi-tick-" + b.id, function(l, m, n) {
            "wdc" === l ? Sp("wdc", d, e, n) : "wje0" === l ? Sp("wje0", d, e, n) : "wje1" === l ? Sp("wje1", d, e, n) : "wh0" == l ? _.Rp("wh0", d, e, n) : "wh1" == l ? _.Rp("wh1", d, e, n) : "wcdi" == l && _.Rp("wcdi", d, e, n)
        })
    }
    ;
    Kq = function(a) {
        return "number" == typeof a ? a + "px" : "100%" == a ? a : null
    }
    ;
    Bq = function(a, b) {
        var c = function(d) {
            d = d || a;
            var e = Kq(d.width);
            e && b.style.width != e && (b.style.width = e);
            (d = Kq(d.height)) && b.style.height != d && (b.style.height = d)
        };
        Gq(a) ? a.setParam("onRestyle", c) : (a.register("ready", c, Jq),
        a.register("renderstart", c, Jq),
        a.register("resize", c, Jq))
    }
    ;
    Lq = function(a, b) {
        for (var c in yq)
            if (yq.hasOwnProperty(c)) {
                var d = yq[c][1];
                d && !b.hasOwnProperty(d) && (b[d] = a[d])
            }
        return b
    }
    ;
    Mq = function(a, b) {
        var c = {}, d;
        for (d in a)
            a.hasOwnProperty(d) && (c[a[d][1] || d] = (a[d] && a[d][0] || mq)(b[d.toLowerCase()], b, nq));
        return c
    }
    ;
    Nq = function(a) {
        if (a = a.mda)
            for (var b = 0; b < a.length; b++)
                (new Image).src = a[b]
    }
    ;
    Oq = function(a, b) {
        var c = b.userParams
          , d = b.siteElement;
        d || (d = (d = b.iframeNode) && d.parentNode);
        if (d && 1 === d.nodeType) {
            var e = Mq(a.config, c);
            a.CY.push({
                element: d,
                config: e,
                Qd: Lq(e, Mq(a.parameters, c)),
                sra: 3,
                b7: !!c["data-onload"],
                Hda: b
            })
        }
        b = a.CY;
        for (a = a.AJ; 0 < b.length; )
            a(b.shift())
    }
    ;
    Pq = function(a, b) {
        a.uq++;
        Sp("wrs", a.Ze, String(a.uq));
        var c = b.userParams
          , d = Mq(a.config, c)
          , e = []
          , f = b.iframeNode
          , h = b.siteElement
          , k = zq(a, d)
          , l = Mq(a.parameters, c);
        _.of(_.hp(), l);
        l = Lq(d, l);
        c = !!c["data-onload"];
        var m = _.yn
          , n = _.mf();
        n.renderData = b;
        n.height = d.height;
        n.width = d.width;
        n.id = b.id;
        n.url = b.url;
        n.iframeEl = f;
        n.where = n.container = h;
        n.apis = ["_open"];
        n.messageHandlers = k;
        n.messageHandlersFilter = _.Bn;
        _.Ro(n);
        f = l;
        a.wn && (e[2] = n,
        e[3] = f,
        e[4] = k,
        a.wn("i", e));
        k = m.attach(n);
        k.id = b.id;
        k.YL(k, n);
        Aq(k, d);
        Bq(k, h);
        Cq(a, k, c);
        Dq(a.Ze, a.uq.toString(), k);
        e[5] = k;
        a.wn && a.wn("e", e)
    }
    ;
    Qq = function(a, b) {
        var c = b.url;
        a.Bga || _.Bj(c) ? Pq(a, b) : _.La.open ? Oq(a, b) : (0,
        _.yh)("iframes", function() {
            Oq(a, b)
        })
    }
    ;
    _.Rq = function(a) {
        var b = Eq(a);
        Nq(b);
        _.Sg(b.Ze, function(d) {
            Qq(b, d)
        });
        zp[b.Ze] = !0;
        var c = {
            Ba: function(d, e, f) {
                var h = e || {};
                h.type = b.Ze;
                e = h.type;
                delete h.type;
                var k = Fp(d);
                if (k) {
                    d = {};
                    for (var l in h)
                        _.nf(h, l) && (d[l.toLowerCase()] = h[l]);
                    d.rd = 1;
                    (l = !!d.ri) && delete d.ri;
                    Ip(e, k, d, [], 0, l, f)
                } else
                    _.Pg.log("string" === "gapi." + e + ".render: missing element " + typeof d ? d : "")
            },
            go: function(d) {
                Jp(d, b.Ze)
            },
            vra: function() {
                var d = _.lf(_.yf, "WI", _.mf()), e;
                for (e in d)
                    delete d[e]
            }
        };
        a = function() {
            "onload" === jq && c.go()
        }
        ;
        if (!cp(b.Ze)) {
            if (!_.Qg())
                try {
                    a()
                } catch (d) {}
            _.Rg(a)
        }
        _.r("gapi." + b.Ze + ".go", c.go);
        _.r("gapi." + b.Ze + ".render", c.Ba);
        return c
    }
    ;
    var Sq = function() {
        var a = window;
        return !!a.performance && !!a.performance.getEntries
    }
      , Dq = function(a, b, c) {
        if (Sq()) {
            var d = function() {
                var f = !1;
                return function() {
                    if (f)
                        return !0;
                    f = !0;
                    return !1
                }
            }()
              , e = function() {
                d() || window.setTimeout(function() {
                    var f = c.getIframeEl().src;
                    var h = f.indexOf("#");
                    -1 != h && (f = f.substring(0, h));
                    f = window.performance.getEntriesByName(f);
                    1 > f.length ? f = null : (f = f[0],
                    f = 0 == f.responseStart ? null : f);
                    if (f) {
                        h = Math.round(f.requestStart);
                        var k = Math.round(f.responseStart)
                          , l = Math.round(f.responseEnd);
                        Sp("wrt0", a, b, Math.round(f.startTime));
                        Sp("wrt1", a, b, h);
                        Sp("wrt2", a, b, k);
                        Sp("wrt3", a, b, l)
                    }
                }, 1E3)
            };
            c.register(Hq(c), e, Jq);
            c.register(Iq(c), e, Jq)
        }
    };
    _.r("gapi.widget.make", _.Rq);
    _.Yf = _.Yf || {};
    _.Yf.Mv = function(a, b, c) {
        for (var d = [], e = 2, f = arguments.length; e < f; ++e)
            d.push(arguments[e]);
        return function() {
            for (var h = d.slice(), k = 0, l = arguments.length; k < l; ++k)
                h.push(arguments[k]);
            return b.apply(a, h)
        }
    }
    ;
    _.Yf.wB = function(a) {
        var b, c, d = {};
        for (b = 0; c = a[b]; ++b)
            d[c] = c;
        return d
    }
    ;
    _.Yf = _.Yf || {};
    (function() {
        function a(c, d) {
            return String.fromCharCode(d)
        }
        var b = {
            0: !1,
            10: !0,
            13: !0,
            34: !0,
            39: !0,
            60: !0,
            62: !0,
            92: !0,
            8232: !0,
            8233: !0,
            65282: !0,
            65287: !0,
            65308: !0,
            65310: !0,
            65340: !0
        };
        _.Yf.escape = function(c, d) {
            if (c) {
                if ("string" === typeof c)
                    return _.Yf.bG(c);
                if ("Array" === typeof c) {
                    var e = 0;
                    for (d = c.length; e < d; ++e)
                        c[e] = _.Yf.escape(c[e])
                } else if ("object" === typeof c && d) {
                    d = {};
                    for (e in c)
                        c.hasOwnProperty(e) && (d[_.Yf.bG(e)] = _.Yf.escape(c[e], !0));
                    return d
                }
            }
            return c
        }
        ;
        _.Yf.bG = function(c) {
            if (!c)
                return c;
            for (var d = [], e, f, h = 0, k = c.length; h < k; ++h)
                e = c.charCodeAt(h),
                f = b[e],
                !0 === f ? d.push("&#", e, ";") : !1 !== f && d.push(c.charAt(h));
            return d.join("")
        }
        ;
        _.Yf.psa = function(c) {
            return c ? c.replace(/&#([0-9]+);/g, a) : c
        }
    }
    )();
    _.La.Qa = {};
    _.La.Qa.Zi = {};
    _.La.Qa.Zi.r6 = function(a) {
        try {
            return !!a.document
        } catch (b) {}
        return !1
    }
    ;
    _.La.Qa.Zi.vT = function(a) {
        var b = a.parent;
        return a != b && _.La.Qa.Zi.r6(b) ? _.La.Qa.Zi.vT(b) : a
    }
    ;
    _.La.Qa.Zi.nqa = function(a) {
        var b = a.userAgent || "";
        a = a.product || "";
        return 0 != b.indexOf("Opera") && -1 == b.indexOf("WebKit") && "Gecko" == a && 0 < b.indexOf("rv:1.")
    }
    ;
    _.La.Qa.Zi.Mv = function(a, b, c) {
        for (var d = [], e = 2, f = arguments.length; e < f; ++e)
            d.push(arguments[e]);
        return function() {
            for (var h = d.slice(), k = 0, l = arguments.length; k < l; ++k)
                h.push(arguments[k]);
            return b.apply(a, h)
        }
    }
    ;
    var Zq, $q, ar, br, er, fr, gr, hr, ir, jr, kr;
    Zq = function() {
        _.Ug.register("_noop_echo", function() {
            this.callback(_.La.k9(_.La.Qm[this.f]))
        })
    }
    ;
    $q = function() {
        window.setTimeout(function() {
            _.Ug.call("..", "_noop_echo", _.La.Wca)
        }, 0)
    }
    ;
    ar = function(a, b, c) {
        var d = function(e) {
            var f = Array.prototype.slice.call(arguments, 0)
              , h = f[f.length - 1];
            if ("function" === typeof h) {
                var k = h;
                f.pop()
            }
            f.unshift(b, a, k, c);
            _.Ug.call.apply(_.Ug, f)
        };
        d._iframe_wrapped_rpc_ = !0;
        return d
    }
    ;
    br = function(a) {
        _.La.Qj[a] || (_.La.Qj[a] = {},
        _.Ug.register(a, function(b, c) {
            var d = this.f;
            if (!("string" != typeof b || b in {} || d in {})) {
                var e = this.callback, f = _.La.Qj[a][d], h;
                f && Object.hasOwnProperty.call(f, b) ? h = f[b] : Object.hasOwnProperty.call(_.La.wr, a) && (h = _.La.wr[a]);
                if (h)
                    return d = Array.prototype.slice.call(arguments, 1),
                    h._iframe_wrapped_rpc_ && e && d.push(e),
                    h.apply({}, d)
            }
            _.Pg.error(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', b, '" from frame "', d, '".'].join(""));
            return null
        }));
        return _.La.Qj[a]
    }
    ;
    _.cr = function() {
        var a = {};
        var b = window.location.href;
        var c = b.indexOf("?")
          , d = b.indexOf("#");
        b = (-1 === d ? b.substr(c + 1) : [b.substr(c + 1, d - c - 1), "&", b.substr(d + 1)].join("")).split("&");
        c = window.decodeURIComponent ? decodeURIComponent : unescape;
        d = 0;
        for (var e = b.length; d < e; ++d) {
            var f = b[d].indexOf("=");
            if (-1 !== f) {
                var h = b[d].substring(0, f);
                f = b[d].substring(f + 1);
                f = f.replace(/\+/g, " ");
                try {
                    a[h] = c(f)
                } catch (k) {}
            }
        }
        return a
    }
    ;
    _.dr = function() {
        return _.gf.location.origin || _.gf.location.protocol + "//" + _.gf.location.host
    }
    ;
    er = function(a) {
        _.yf.h = a
    }
    ;
    fr = function(a) {
        _.yf.bsh = a
    }
    ;
    gr = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    }
    ;
    hr = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    }
    ;
    ir = function(a, b, c) {
        if (b && "object" === typeof b)
            for (var d in b)
                !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !hr(a[d]) && !hr(b[d]) ? ir(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = hr(b[d]) ? [] : {},
                ir(a[d], b[d])) : a[d] = b[d])
    }
    ;
    jr = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1); )
                a = a.substring(0, a.length - 1);
            try {
                var b = window.JSON.parse(a)
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (c) {}
            return "object" === typeof b ? b : {}
        }
    }
    ;
    kr = function(a, b) {
        var c = {
            ___goc: void 0
        };
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
        ir(c, b);
        a.push(c)
    }
    ;
    _.lr = function(a, b) {
        var c;
        if ("string" === typeof a) {
            var d = c = {};
            a = a.split("/");
            for (var e = 0, f = a.length; e < f - 1; ++e) {
                var h = {};
                d = d[a[e]] = h
            }
            d[a[e]] = b
        } else
            c = a;
        _.Qi(!0);
        d = window.___gcfg;
        b = gr("cu");
        a = window.___gu;
        d && d !== a && (kr(b, d),
        window.___gu = d);
        d = gr("cu");
        e = document.scripts || document.getElementsByTagName("script") || [];
        a = [];
        f = [];
        f.push.apply(f, gr("us"));
        for (h = 0; h < e.length; ++h)
            for (var k = e[h], l = 0; l < f.length; ++l)
                k.src && 0 == k.src.indexOf(f[l]) && a.push(k);
        0 == a.length && 0 < e.length && e[e.length - 1].src && a.push(e[e.length - 1]);
        for (e = 0; e < a.length; ++e)
            a[e].getAttribute("gapi_processed") || (a[e].setAttribute("gapi_processed", !0),
            (f = a[e]) ? (h = f.nodeType,
            f = 3 == h || 4 == h ? f.nodeValue : f.textContent || "") : f = void 0,
            (f = jr(f)) && d.push(f));
        c && kr(b, c);
        a = gr("cd");
        c = 0;
        for (d = a.length; c < d; ++c)
            ir(_.Qi(), a[c], !0);
        a = gr("ci");
        c = 0;
        for (d = a.length; c < d; ++c)
            ir(_.Qi(), a[c], !0);
        c = 0;
        for (d = b.length; c < d; ++c)
            ir(_.Qi(), b[c], !0)
    }
    ;
    var mr, nr = window.location.href, or = nr.indexOf("?"), pr = nr.indexOf("#");
    mr = (-1 === pr ? nr.substr(or + 1) : [nr.substr(or + 1, pr - or - 1), "&", nr.substr(pr + 1)].join("")).split("&");
    for (var qr = window.decodeURIComponent ? decodeURIComponent : unescape, rr = 0, sr = mr.length; rr < sr; ++rr) {
        var tr = mr[rr].indexOf("=");
        if (-1 !== tr) {
            var ur = mr[rr].substring(tr + 1);
            ur = ur.replace(/\+/g, " ");
            try {
                qr(ur)
            } catch (a) {}
        }
    }
    ;if (window.ToolbarApi)
        vr = window.ToolbarApi,
        vr.Pa = window.ToolbarApi.getInstance,
        vr.prototype = window.ToolbarApi.prototype,
        _.g = vr.prototype,
        _.g.openWindow = vr.prototype.openWindow,
        _.g.cQ = vr.prototype.closeWindow,
        _.g.LZ = vr.prototype.setOnCloseHandler,
        _.g.NP = vr.prototype.canClosePopup,
        _.g.LY = vr.prototype.resizeWindow;
    else {
        var vr = function() {};
        vr.Pa = function() {
            !wr && window.external && window.external.GTB_IsToolbar && (wr = new vr);
            return wr
        }
        ;
        _.g = vr.prototype;
        _.g.openWindow = function(a) {
            return window.external.GTB_OpenPopup && window.external.GTB_OpenPopup(a)
        }
        ;
        _.g.cQ = function(a) {
            window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
        }
        ;
        _.g.LZ = function(a, b) {
            window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, b)
        }
        ;
        _.g.NP = function(a) {
            return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
        }
        ;
        _.g.LY = function(a, b) {
            return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, b)
        }
        ;
        var wr = null;
        window.ToolbarApi = vr;
        window.ToolbarApi.getInstance = vr.Pa
    }
    ;var xr = /^[-_.0-9A-Za-z]+$/, yr = {
        open: "open",
        onready: "ready",
        close: "close",
        onresize: "resize",
        onOpen: "open",
        onReady: "ready",
        onClose: "close",
        onResize: "resize",
        onRenderStart: "renderstart"
    }, zr = {
        onBeforeParentOpen: "beforeparentopen"
    }, Ar = {
        onOpen: function(a) {
            var b = a.Gc();
            a.yh(b.container || b.element);
            return a
        },
        onClose: function(a) {
            a.remove()
        }
    }, Br = function() {
        _.La.FU++;
        return ["I", _.La.FU, "_", (new Date).getTime()].join("")
    }, Cr, Dr, Er, Hr, Ir, Jr, Kr, Mr, Lr;
    _.La.Ho = function(a) {
        var b = _.mf();
        _.of(_.Hm, b);
        _.of(a, b);
        return b
    }
    ;
    Cr = function(a) {
        return a instanceof Array ? a.join(",") : a instanceof Object ? _.Lg(a) : a
    }
    ;
    Dr = function(a) {
        var b = _.Ri("googleapis.config/elog");
        if (b)
            try {
                b(a)
            } catch (c) {}
    }
    ;
    Er = function(a) {
        a && a.match(xr) && _.lr("googleapis.config/gcv", a)
    }
    ;
    _.Fr = function(a, b) {
        b = b || {};
        for (var c in a)
            a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }
    ;
    _.Gr = function(a, b, c, d, e) {
        var f = [], h;
        for (h in a)
            if (a.hasOwnProperty(h)) {
                var k = b
                  , l = c
                  , m = a[h]
                  , n = d
                  , p = br(h);
                p[k] = p[k] || {};
                n = _.La.Qa.Zi.Mv(n, m);
                m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_ = !0);
                p[k][l] = n;
                f.push(h)
            }
        if (e)
            for (var q in _.La.wr)
                _.La.wr.hasOwnProperty(q) && f.push(q);
        return f.join(",")
    }
    ;
    Hr = function(a, b, c) {
        var d = {};
        if (a && a._methods) {
            a = a._methods.split(",");
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                d[f] = ar(f, b, c)
            }
        }
        return d
    }
    ;
    Ir = function(a) {
        if (a && a.disableMultiLevelParentRelay)
            a = !1;
        else {
            var b;
            if (b = _.Vo && _.Vo._open && "inline" != a.style && !0 !== a.inline)
                a = a.container,
                b = !(a && ("string" == typeof a && document.getElementById(a) || document == (a.ownerDocument || a.document)));
            a = b
        }
        return a
    }
    ;
    Jr = function(a, b) {
        var c = {};
        b = b.params || {};
        for (var d in a)
            "#" == d.charAt(0) && (c[d.substring(1)] = a[d]),
            0 == d.indexOf("fr-") && (c[d.substring(3)] = a[d]),
            "#" == b[d] && (c[d] = a[d]);
        for (var e in c)
            delete a["fr-" + e],
            delete a["#" + e],
            delete a[e];
        return c
    }
    ;
    Kr = function(a) {
        if (":" == a.charAt(0)) {
            var b = _.Ri("iframes/" + a.substring(1));
            a = {};
            _.of(b, a);
            (b = a.url) && (a.url = _.Tm(b));
            a.params || (a.params = {});
            return a
        }
        return {
            url: _.Tm(a)
        }
    }
    ;
    Mr = function(a) {
        function b() {}
        b.prototype = Lr.prototype;
        a.prototype = new b
    }
    ;
    Lr = function(a, b, c, d, e, f, h, k) {
        this.config = Kr(a);
        this.openParams = this.SB = b || {};
        this.params = c || {};
        this.methods = d;
        this.FD = !1;
        Nr(this, b.style);
        this.callbacks = {};
        Or(this, function() {
            var l;
            (l = this.SB.style) && _.La.Ww[l] ? l = _.La.Ww[l] : l ? (_.Pg.warn(['Missing handler for style "', l, '". Continuing with default handler.'].join("")),
            l = null) : l = Ar;
            if (l) {
                if ("function" === typeof l)
                    var m = l(this);
                else {
                    var n = {};
                    for (m in l) {
                        var p = l[m];
                        n[m] = "function" === typeof p ? _.La.Qa.Zi.Mv(l, p, this) : p
                    }
                    m = n
                }
                for (var q in e)
                    l = m[q],
                    "function" === typeof l && Pr(this, e[q], _.La.Qa.Zi.Mv(m, l))
            }
            f && Pr(this, "close", f)
        });
        this.jl = this.ac = h;
        this.HJ = (k || []).slice();
        h && this.HJ.unshift(h.getId())
    }
    ;
    Lr.prototype.Gc = function() {
        return this.SB
    }
    ;
    Lr.prototype.ZG = function() {
        return this.params
    }
    ;
    Lr.prototype.Yz = function() {
        return this.methods
    }
    ;
    Lr.prototype.yd = function() {
        return this.jl
    }
    ;
    var Nr = function(a, b) {
        a.FD || ((b = b && !_.La.Ww[b] && _.La.LF[b]) ? (a.KF = [],
        b(function() {
            a.FD = !0;
            for (var c = a.KF.length, d = 0; d < c; ++d)
                a.KF[d].call(a)
        })) : a.FD = !0)
    }
      , Or = function(a, b) {
        a.FD ? b.call(a) : a.KF.push(b)
    };
    Lr.prototype.mb = function(a, b) {
        Or(this, function() {
            Pr(this, a, b)
        })
    }
    ;
    var Pr = function(a, b, c) {
        a.callbacks[b] = a.callbacks[b] || [];
        a.callbacks[b].push(c)
    };
    Lr.prototype.Kp = function(a, b) {
        Or(this, function() {
            var c = this.callbacks[a];
            if (c)
                for (var d = c.length, e = 0; e < d; ++e)
                    if (c[e] === b) {
                        c.splice(e, 1);
                        break
                    }
        })
    }
    ;
    Lr.prototype.zi = function(a, b) {
        var c = this.callbacks[a];
        if (c)
            for (var d = Array.prototype.slice.call(arguments, 1), e = c.length, f = 0; f < e; ++f)
                try {
                    var h = c[f].apply({}, d)
                } catch (k) {
                    _.Pg.error(['Exception when calling callback "', a, '" with exception "', k.name, ": ", k.message, '".'].join("")),
                    Dr(k)
                }
        return h
    }
    ;
    var Rr = function(a) {
        return "number" == typeof a ? {
            value: a,
            vG: a + "px"
        } : "100%" == a ? {
            value: 100,
            vG: "100%",
            qV: !0
        } : null
    };
    Lr.prototype.send = function(a, b, c) {
        _.La.gZ(this, a, b, c)
    }
    ;
    Lr.prototype.register = function(a, b) {
        var c = this;
        c.mb(a, function(d) {
            b.call(c, d)
        })
    }
    ;
    var Sr = function(a, b, c, d, e, f, h) {
        var k = this;
        Lr.call(this, a, b, c, d, yr, e, f, h);
        this.id = b.id || Br();
        this.tw = b.rpctoken && String(b.rpctoken) || Math.round(1E9 * _.qj());
        this.gaa = Jr(this.params, this.config);
        this.iG = {};
        Or(this, function() {
            k.zi("open");
            _.Fr(k.iG, k)
        })
    };
    Mr(Sr);
    _.g = Sr.prototype;
    _.g.yh = function(a, b) {
        if (!this.config.url)
            return _.Pg.error("Cannot open iframe, empty URL."),
            this;
        var c = this.id;
        _.La.Qm[c] = this;
        var d = _.Fr(this.methods);
        d._ready = this.RB;
        d._close = this.close;
        d._open = this.mX;
        d._resizeMe = this.MY;
        d._renderstart = this.fX;
        var e = this.gaa;
        this.tw && (e.rpctoken = this.tw);
        e._methods = _.Gr(d, c, "", this, !0);
        this.el = a = "string" === typeof a ? document.getElementById(a) : a;
        d = {
            id: c
        };
        if (b) {
            d.attributes = b;
            var f = b.style;
            if ("string" === typeof f) {
                if (f) {
                    var h = [];
                    f = f.split(";");
                    for (var k = f.length, l = 0; l < k; ++l) {
                        var m = f[l];
                        if (0 != m.length || l + 1 != k)
                            m = m.split(":"),
                            2 == m.length && m[0].match(/^[ a-zA-Z_-]+$/) && m[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ? h.push(m.join(":")) : _.Pg.error(['Iframe style "', f[l], '" not allowed.'].join(""))
                    }
                    h = h.join(";")
                } else
                    h = "";
                b.style = h
            }
        }
        this.Gc().allowPost && (d.allowPost = !0);
        this.Gc().forcePost && (d.forcePost = !0);
        d.queryParams = this.params;
        d.fragmentParams = e;
        d.paramsSerializer = Cr;
        this.Bi = _.Vm(this.config.url, a, d);
        a = this.Bi.getAttribute("data-postorigin") || this.Bi.src;
        _.La.Qm[c] = this;
        _.Ug.ZC(this.id, this.tw);
        _.Ug.ek(this.id, a);
        return this
    }
    ;
    _.g.ii = function(a, b) {
        this.iG[a] = b
    }
    ;
    _.g.getId = function() {
        return this.id
    }
    ;
    _.g.getIframeEl = function() {
        return this.Bi
    }
    ;
    _.g.getSiteEl = function() {
        return this.el
    }
    ;
    _.g.setSiteEl = function(a) {
        this.el = a
    }
    ;
    _.g.RB = function(a) {
        var b = Hr(a, this.id, "");
        this.jl && "function" == typeof this.methods._ready && (a._methods = _.Gr(b, this.jl.getId(), this.id, this, !1),
        this.methods._ready(a));
        _.Fr(a, this);
        _.Fr(b, this);
        this.zi("ready", a)
    }
    ;
    _.g.fX = function(a) {
        this.zi("renderstart", a)
    }
    ;
    _.g.close = function(a) {
        a = this.zi("close", a);
        delete _.La.Qm[this.id];
        return a
    }
    ;
    _.g.remove = function() {
        var a = document.getElementById(this.id);
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    ;
    _.g.mX = function(a) {
        var b = Hr(a.params, this.id, a.proxyId);
        delete a.params._methods;
        "_parent" == a.openParams.anchor && (a.openParams.anchor = this.el);
        if (Ir(a.openParams))
            new Tr(a.url,a.openParams,a.params,b,b._onclose,this,a.openedByProxyChain);
        else {
            var c = new Sr(a.url,a.openParams,a.params,b,b._onclose,this,a.openedByProxyChain)
              , d = this;
            Or(c, function() {
                var e = {
                    childId: c.getId()
                }
                  , f = c.iG;
                f._toclose = c.close;
                e._methods = _.Gr(f, d.id, c.id, c, !1);
                b._onopen(e)
            })
        }
    }
    ;
    _.g.MY = function(a) {
        if (void 0 === this.zi("resize", a) && this.Bi) {
            var b = Rr(a.width);
            null != b && (this.Bi.style.width = b.vG);
            a = Rr(a.height);
            null != a && (this.Bi.style.height = a.vG);
            this.Bi.parentElement && (null != b && b.qV || null != a && a.qV) && (this.Bi.parentElement.style.display = "block")
        }
    }
    ;
    var Tr = function(a, b, c, d, e, f, h) {
        var k = this;
        Lr.call(this, a, b, c, d, zr, e, f, h);
        this.url = a;
        this.lq = null;
        this.bK = Br();
        Or(this, function() {
            k.zi("beforeparentopen");
            var l = _.Fr(k.methods);
            l._onopen = k.Mca;
            l._ready = k.RB;
            l._onclose = k.Kca;
            k.params._methods = _.Gr(l, "..", k.bK, k, !0);
            l = {};
            for (var m in k.params)
                l[m] = Cr(k.params[m]);
            _.Vo._open({
                url: k.config.url,
                openParams: k.SB,
                params: l,
                proxyId: k.bK,
                openedByProxyChain: k.HJ
            })
        })
    };
    Mr(Tr);
    Tr.prototype.x9 = function() {
        return this.lq
    }
    ;
    Tr.prototype.Mca = function(a) {
        this.lq = a.childId;
        var b = Hr(a, "..", this.lq);
        _.Fr(b, this);
        this.close = b._toclose;
        _.La.Qm[this.lq] = this;
        this.jl && this.methods._onopen && (a._methods = _.Gr(b, this.jl.getId(), this.lq, this, !1),
        this.methods._onopen(a))
    }
    ;
    Tr.prototype.RB = function(a) {
        var b = String(this.lq)
          , c = Hr(a, "..", b);
        _.Fr(a, this);
        _.Fr(c, this);
        this.zi("ready", a);
        this.jl && this.methods._ready && (a._methods = _.Gr(c, this.jl.getId(), b, this, !1),
        this.methods._ready(a))
    }
    ;
    Tr.prototype.Kca = function(a) {
        if (this.jl && this.methods._onclose)
            this.methods._onclose(a);
        else
            return a = this.zi("close", a),
            delete _.La.Qm[this.lq],
            a
    }
    ;
    var Ur = function(a, b, c, d, e, f, h) {
        Lr.call(this, a, b, c, d, zr, f, h);
        this.id = b.id || Br();
        this.mga = e;
        d._close = this.close;
        this.onClosed = this.YW;
        this.b1 = 0;
        Or(this, function() {
            this.zi("beforeparentopen");
            var k = _.Fr(this.methods);
            this.params._methods = _.Gr(k, "..", this.bK, this, !0);
            k = {};
            k.queryParams = this.params;
            a = _.Mm(_.hf, this.config.url, this.id, k);
            var l = e.openWindow(a);
            this.canAutoClose = function(m) {
                m(e.NP(l))
            }
            ;
            e.LZ(l, this);
            this.b1 = l
        })
    };
    Mr(Ur);
    Ur.prototype.close = function(a) {
        a = this.zi("close", a);
        this.mga.cQ(this.b1);
        return a
    }
    ;
    Ur.prototype.YW = function() {
        this.zi("close")
    }
    ;
    _.Vo.send = function(a, b, c) {
        _.La.gZ(_.Vo, a, b, c)
    }
    ;
    (function() {
        function a(h) {
            return _.La.Ww[h]
        }
        function b(h, k) {
            _.La.Ww[h] = k
        }
        function c(h) {
            h = h || {};
            "auto" === h.height && (h.height = _.Xm());
            var k = window && vr && vr.Pa();
            k ? k.LY(h.width || 0, h.height || 0) : _.Vo && _.Vo._resizeMe && _.Vo._resizeMe(h)
        }
        function d(h) {
            Er(h)
        }
        _.La.Qm = {};
        _.La.Ww = {};
        _.La.LF = {};
        _.La.FU = 0;
        _.La.Qj = {};
        _.La.wr = {};
        _.La.cC = null;
        _.La.bC = [];
        _.La.Wca = function(h) {
            var k = !1;
            try {
                if (null != h) {
                    var l = window.parent.frames[h.id];
                    k = l.iframer.id == h.id && l.iframes.openedId_(_.Vo.id)
                }
            } catch (m) {}
            try {
                _.La.cC = {
                    origin: this.origin,
                    referer: this.referer,
                    claimedOpenerId: h && h.id,
                    claimedOpenerProxyChain: h && h.proxyChain || [],
                    sameOrigin: k
                };
                for (h = 0; h < _.La.bC.length; ++h)
                    _.La.bC[h](_.La.cC);
                _.La.bC = []
            } catch (m) {
                Dr(m)
            }
        }
        ;
        _.La.k9 = function(h) {
            var k = h && h.jl
              , l = null;
            k && (l = {},
            l.id = k.getId(),
            l.proxyChain = h.HJ);
            return l
        }
        ;
        Zq();
        if (window.parent != window) {
            var e = _.cr();
            e.gcv && Er(e.gcv);
            var f = e.jsh;
            f && er(f);
            _.Fr(Hr(e, "..", ""), _.Vo);
            _.Fr(e, _.Vo);
            $q()
        }
        _.La.Cb = a;
        _.La.Qc = b;
        _.La.cfa = d;
        _.La.resize = c;
        _.La.A8 = function(h) {
            return _.La.LF[h]
        }
        ;
        _.La.fL = function(h, k) {
            _.La.LF[h] = k
        }
        ;
        _.La.KY = c;
        _.La.yfa = d;
        _.La.zA = {};
        _.La.zA.get = a;
        _.La.zA.set = b;
        _.La.allow = function(h, k) {
            br(h);
            _.La.wr[h] = k || window[h]
        }
        ;
        _.La.npa = function(h) {
            delete _.La.wr[h]
        }
        ;
        _.La.open = function(h, k, l, m, n, p) {
            3 == arguments.length ? m = {} : 4 == arguments.length && "function" === typeof m && (n = m,
            m = {});
            var q = "bubble" === k.style && vr ? vr.Pa() : null;
            return q ? new Ur(h,k,l,m,q,n,p) : Ir(k) ? new Tr(h,k,l,m,n,p) : new Sr(h,k,l,m,n,p)
        }
        ;
        _.La.close = function(h, k) {
            _.Vo && _.Vo._close && _.Vo._close(h, k)
        }
        ;
        _.La.ready = function(h, k, l) {
            2 == arguments.length && "function" === typeof k && (l = k,
            k = {});
            var m = h || {};
            "height"in m || (m.height = _.Xm());
            m._methods = _.Gr(k || {}, "..", "", _.Vo, !0);
            _.Vo && _.Vo._ready && _.Vo._ready(m, l)
        }
        ;
        _.La.gT = function(h) {
            _.La.cC ? h(_.La.cC) : _.La.bC.push(h)
        }
        ;
        _.La.Oca = function(h) {
            return !!_.La.Qm[h]
        }
        ;
        _.La.M8 = function() {
            return ["https://ssl.gstatic.com/gb/js/", _.Ri("googleapis.config/gcv")].join("")
        }
        ;
        _.La.iY = function(h) {
            var k = {
                mouseover: 1,
                mouseout: 1
            };
            if (_.Vo._event)
                for (var l = 0; l < h.length; l++) {
                    var m = h[l];
                    m in k && document.addEventListener(m, function(n) {
                        _.Vo._event({
                            event: n.type,
                            timestamp: (new Date).getTime()
                        })
                    }, !0)
                }
        }
        ;
        _.La.gZ = function(h, k, l, m) {
            var n = this
              , p = [];
            void 0 !== l && p.push(l);
            m && p.push(function(q) {
                m.call(n, [q])
            });
            h[k] && h[k].apply(h, p)
        }
        ;
        _.La.CROSS_ORIGIN_IFRAMES_FILTER = function() {
            return !0
        }
        ;
        _.La.q6 = function(h, k, l) {
            var m = Array.prototype.slice.call(arguments);
            _.La.gT(function(n) {
                n.sameOrigin && (m.unshift("/" + n.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host),
                _.Ug.call.apply(_.Ug, m))
            })
        }
        ;
        _.La.Ada = function(h, k) {
            _.Ug.register(h, k)
        }
        ;
        _.La.ifa = er;
        _.La.oZ = fr;
        _.La.dW = Dr;
        _.La.GU = _.Vo
    }
    )();
    _.r("iframes.allow", _.La.allow);
    _.r("iframes.callSiblingOpener", _.La.q6);
    _.r("iframes.registerForOpenedSibling", _.La.Ada);
    _.r("iframes.close", _.La.close);
    _.r("iframes.getGoogleConnectJsUri", _.La.M8);
    _.r("iframes.getHandler", _.La.Cb);
    _.r("iframes.getDeferredHandler", _.La.A8);
    _.r("iframes.getParentInfo", _.La.gT);
    _.r("iframes.iframer", _.La.GU);
    _.r("iframes.open", _.La.open);
    _.r("iframes.openedId_", _.La.Oca);
    _.r("iframes.propagate", _.La.iY);
    _.r("iframes.ready", _.La.ready);
    _.r("iframes.resize", _.La.resize);
    _.r("iframes.setGoogleConnectJsVersion", _.La.cfa);
    _.r("iframes.setBootstrapHint", _.La.oZ);
    _.r("iframes.setJsHint", _.La.ifa);
    _.r("iframes.setHandler", _.La.Qc);
    _.r("iframes.setDeferredHandler", _.La.fL);
    _.r("IframeBase", Lr);
    _.r("IframeBase.prototype.addCallback", Lr.prototype.mb);
    _.r("IframeBase.prototype.getMethods", Lr.prototype.Yz);
    _.r("IframeBase.prototype.getOpenerIframe", Lr.prototype.yd);
    _.r("IframeBase.prototype.getOpenParams", Lr.prototype.Gc);
    _.r("IframeBase.prototype.getParams", Lr.prototype.ZG);
    _.r("IframeBase.prototype.removeCallback", Lr.prototype.Kp);
    _.r("Iframe", Sr);
    _.r("Iframe.prototype.close", Sr.prototype.close);
    _.r("Iframe.prototype.exposeMethod", Sr.prototype.ii);
    _.r("Iframe.prototype.getId", Sr.prototype.getId);
    _.r("Iframe.prototype.getIframeEl", Sr.prototype.getIframeEl);
    _.r("Iframe.prototype.getSiteEl", Sr.prototype.getSiteEl);
    _.r("Iframe.prototype.openInto", Sr.prototype.yh);
    _.r("Iframe.prototype.remove", Sr.prototype.remove);
    _.r("Iframe.prototype.setSiteEl", Sr.prototype.setSiteEl);
    _.r("Iframe.prototype.addCallback", Sr.prototype.mb);
    _.r("Iframe.prototype.getMethods", Sr.prototype.Yz);
    _.r("Iframe.prototype.getOpenerIframe", Sr.prototype.yd);
    _.r("Iframe.prototype.getOpenParams", Sr.prototype.Gc);
    _.r("Iframe.prototype.getParams", Sr.prototype.ZG);
    _.r("Iframe.prototype.removeCallback", Sr.prototype.Kp);
    _.r("IframeProxy", Tr);
    _.r("IframeProxy.prototype.getTargetIframeId", Tr.prototype.x9);
    _.r("IframeProxy.prototype.addCallback", Tr.prototype.mb);
    _.r("IframeProxy.prototype.getMethods", Tr.prototype.Yz);
    _.r("IframeProxy.prototype.getOpenerIframe", Tr.prototype.yd);
    _.r("IframeProxy.prototype.getOpenParams", Tr.prototype.Gc);
    _.r("IframeProxy.prototype.getParams", Tr.prototype.ZG);
    _.r("IframeProxy.prototype.removeCallback", Tr.prototype.Kp);
    _.r("IframeWindow", Ur);
    _.r("IframeWindow.prototype.close", Ur.prototype.close);
    _.r("IframeWindow.prototype.onClosed", Ur.prototype.YW);
    _.r("iframes.util.getTopMostAccessibleWindow", _.La.Qa.Zi.vT);
    _.r("iframes.handlers.get", _.La.zA.get);
    _.r("iframes.handlers.set", _.La.zA.set);
    _.r("iframes.resizeMe", _.La.KY);
    _.r("iframes.setVersionOverride", _.La.yfa);
    _.r("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.La.CROSS_ORIGIN_IFRAMES_FILTER);
    _.r("IframeBase.prototype.send", Lr.prototype.send);
    _.r("IframeBase.prototype.register", Lr.prototype.register);
    _.r("Iframe.prototype.send", Sr.prototype.send);
    _.r("Iframe.prototype.register", Sr.prototype.register);
    _.r("IframeProxy.prototype.send", Tr.prototype.send);
    _.r("IframeProxy.prototype.register", Tr.prototype.register);
    _.r("IframeWindow.prototype.send", Ur.prototype.send);
    _.r("IframeWindow.prototype.register", Ur.prototype.register);
    _.r("iframes.iframer.send", _.La.GU.send);
    var cu = _.La.Qc
      , du = {
        open: function(a) {
            var b = _.No(a.Gc());
            return a.yh(b, {
                style: _.Oo(b)
            })
        },
        attach: function(a, b) {
            var c = _.No(a.Gc())
              , d = b.id
              , e = b.getAttribute("data-postorigin") || b.src
              , f = /#(?:.*&)?rpctoken=(\d+)/.exec(e);
            f = f && f[1];
            a.id = d;
            a.tw = f;
            a.el = c;
            a.Bi = b;
            _.La.Qm[d] = a;
            b = _.Fr(a.methods);
            b._ready = a.RB;
            b._close = a.close;
            b._open = a.mX;
            b._resizeMe = a.MY;
            b._renderstart = a.fX;
            _.Gr(b, d, "", a, !0);
            _.Ug.ZC(a.id, a.tw);
            _.Ug.ek(a.id, e);
            c = _.La.Ho({
                style: _.Oo(c)
            });
            for (var h in c)
                Object.prototype.hasOwnProperty.call(c, h) && ("style" == h ? a.Bi.style.cssText = c[h] : a.Bi.setAttribute(h, c[h]))
        }
    };
    du.onready = _.Po;
    du.onRenderStart = _.Po;
    du.close = _.Qo;
    cu("inline", du);
    _.qi = function(a) {
        for (var b in a)
            return !1;
        return !0
    }
    ;
    _.ri = function(a) {
        var b, c;
        return (a = null == (c = (b = a.document).querySelector) ? void 0 : c.call(b, "script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : ""
    }
    ;
    _.si = function(a, b) {
        a.src = _.Lc(b);
        (b = _.ri(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    }
    ;
    _.ti = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        return b
    }
    ;
    var ui, vi, xi;
    ui = {};
    vi = null;
    _.wi = _.de || _.ee || !_.pi && !_.Zd && "function" == typeof _.Qa.atob;
    _.yi = function(a, b) {
        void 0 === b && (b = 0);
        xi();
        b = ui[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var h = a[e]
              , k = a[e + 1]
              , l = a[e + 2]
              , m = b[h >> 2];
            h = b[(h & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = m + h + k + l
        }
        m = 0;
        l = d;
        switch (a.length - e) {
        case 2:
            m = a[e + 1],
            l = b[(m & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
        }
        return c.join("")
    }
    ;
    _.zi = function(a, b) {
        function c(l) {
            for (; d < a.length; ) {
                var m = a.charAt(d++)
                  , n = vi[m];
                if (null != n)
                    return n;
                if (!_.fd(m))
                    throw Error("F`" + m);
            }
            return l
        }
        xi();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , h = c(64)
              , k = c(64);
            if (64 === k && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2),
            64 != k && b(h << 6 & 192 | k))
        }
    }
    ;
    xi = function() {
        if (!vi) {
            vi = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                ui[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === vi[f] && (vi[f] = e)
                }
            }
        }
    }
    ;
    _.Vi = {};
    var Xi;
    _.Wi = function(a) {
        this.Hb = a || {
            cookie: ""
        }
    }
    ;
    _.g = _.Wi.prototype;
    _.g.isEnabled = function() {
        if (!_.Qa.navigator.cookieEnabled)
            return !1;
        if (!this.isEmpty())
            return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            UI: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED"))
            return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    }
    ;
    _.g.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Bra;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var h = c.path || void 0;
            var k = c.UI
        }
        if (/[;=\s]/.test(a))
            throw Error("I`" + a);
        if (/[;\r\n]/.test(b))
            throw Error("J`" + b);
        void 0 === k && (k = -1);
        this.Hb.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (h ? ";path=" + h : "") + (0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * k)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    _.g.get = function(a, b) {
        for (var c = a + "=", d = (this.Hb.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = (0,
            _.gd)(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    _.g.remove = function(a, b, c) {
        var d = this.fj(a);
        this.set(a, "", {
            UI: 0,
            path: b,
            domain: c
        });
        return d
    }
    ;
    _.g.Gg = function() {
        return Xi(this).keys
    }
    ;
    _.g.Ld = function() {
        return Xi(this).values
    }
    ;
    _.g.isEmpty = function() {
        return !this.Hb.cookie
    }
    ;
    _.g.Tb = function() {
        return this.Hb.cookie ? (this.Hb.cookie || "").split(";").length : 0
    }
    ;
    _.g.fj = function(a) {
        return void 0 !== this.get(a)
    }
    ;
    _.g.zk = function(a) {
        for (var b = Xi(this).values, c = 0; c < b.length; c++)
            if (b[c] == a)
                return !0;
        return !1
    }
    ;
    _.g.clear = function() {
        for (var a = Xi(this).keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    Xi = function(a) {
        a = (a.Hb.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = (0,
            _.gd)(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    ;
    _.Yi = new _.Wi("undefined" == typeof document ? null : document);
    _.ij = {};
    _.jj = function(a) {
        return _.ij[a || "token"] || null
    }
    ;
    _.Cj = function(a) {
        a && "function" == typeof a.Ja && a.Ja()
    }
    ;
    _.Dj = function() {
        this.eh = this.eh;
        this.yp = this.yp
    }
    ;
    _.Dj.prototype.eh = !1;
    _.Dj.prototype.isDisposed = function() {
        return this.eh
    }
    ;
    _.Dj.prototype.Ja = function() {
        this.eh || (this.eh = !0,
        this.va())
    }
    ;
    _.Fj = function(a, b) {
        _.Ej(a, _.Xa(_.Cj, b))
    }
    ;
    _.Ej = function(a, b) {
        a.eh ? b() : (a.yp || (a.yp = []),
        a.yp.push(b))
    }
    ;
    _.Dj.prototype.va = function() {
        if (this.yp)
            for (; this.yp.length; )
                this.yp.shift()()
    }
    ;
    var Kj = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    };
    _.Ge.prototype.O = _.ib(1, function(a) {
        return _.Je(this.Hb, a)
    });
    _.Lj = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    ;
    _.Mj = function(a, b, c) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
    }
    ;
    _.Oj = function(a, b) {
        this.type = "function" == typeof _.Nj && a instanceof _.Nj ? String(a) : a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.hw = !1
    }
    ;
    _.Oj.prototype.stopPropagation = function() {
        this.hw = !0
    }
    ;
    _.Oj.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var Pj = function() {
        if (!_.Qa.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            var c = function() {};
            _.Qa.addEventListener("test", c, b);
            _.Qa.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();
    _.Qj = function(a, b) {
        _.Oj.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.UJ = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.timeStamp = 0;
        this.uf = null;
        a && this.Ad(a, b)
    }
    ;
    _.Ya(_.Qj, _.Oj);
    var Rj = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    _.Qj.prototype.Ad = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? _.de && (_.Xd(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.offsetX = _.ee || void 0 !== a.offsetX ? a.offsetX : a.layerX,
        this.offsetY = _.ee || void 0 !== a.offsetY ? a.offsetY : a.layerY,
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.UJ = _.ge ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Rj[a.pointerType] || "";
        this.state = a.state;
        this.timeStamp = a.timeStamp;
        this.uf = a;
        a.defaultPrevented && _.Qj.N.preventDefault.call(this)
    }
    ;
    _.Qj.prototype.stopPropagation = function() {
        _.Qj.N.stopPropagation.call(this);
        this.uf.stopPropagation ? this.uf.stopPropagation() : this.uf.cancelBubble = !0
    }
    ;
    _.Qj.prototype.preventDefault = function() {
        _.Qj.N.preventDefault.call(this);
        var a = this.uf;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    _.Sj = "closure_listenable_" + (1E6 * Math.random() | 0);
    _.Tj = function(a) {
        return !(!a || !a[_.Sj])
    }
    ;
    var Uj = 0;
    var Vj = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Wf = e;
        this.key = ++Uj;
        this.mw = this.Ay = !1
    }
      , Wj = function(a) {
        a.mw = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Wf = null
    };
    var Xj = function(a) {
        this.src = a;
        this.Be = {};
        this.wx = 0
    };
    Xj.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.Be[f];
        a || (a = this.Be[f] = [],
        this.wx++);
        var h = Yj(a, b, d, e);
        -1 < h ? (b = a[h],
        c || (b.Ay = !1)) : (b = new Vj(b,this.src,f,!!d,e),
        b.Ay = c,
        a.push(b));
        return b
    }
    ;
    Xj.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.Be))
            return !1;
        var e = this.Be[a];
        b = Yj(e, b, c, d);
        return -1 < b ? (Wj(e[b]),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.Be[a],
        this.wx--),
        !0) : !1
    }
    ;
    var Zj = function(a, b) {
        var c = b.type;
        if (!(c in a.Be))
            return !1;
        var d = _.pb(a.Be[c], b);
        d && (Wj(b),
        0 == a.Be[c].length && (delete a.Be[c],
        a.wx--));
        return d
    };
    Xj.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.Be)
            if (!a || c == a) {
                for (var d = this.Be[c], e = 0; e < d.length; e++)
                    ++b,
                    Wj(d[e]);
                delete this.Be[c];
                this.wx--
            }
        return b
    }
    ;
    Xj.prototype.kr = function(a, b, c, d) {
        a = this.Be[a.toString()];
        var e = -1;
        a && (e = Yj(a, b, c, d));
        return -1 < e ? a[e] : null
    }
    ;
    Xj.prototype.hasListener = function(a, b) {
        var c = void 0 !== a
          , d = c ? a.toString() : ""
          , e = void 0 !== b;
        return Kj(this.Be, function(f) {
            for (var h = 0; h < f.length; ++h)
                if (!(c && f[h].type != d || e && f[h].capture != b))
                    return !0;
            return !1
        })
    }
    ;
    var Yj = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.mw && f.listener == b && f.capture == !!c && f.Wf == d)
                return e
        }
        return -1
    };
    var ak, bk, ck, gk, ik, jk, kk, nk;
    ak = "closure_lm_" + (1E6 * Math.random() | 0);
    bk = {};
    ck = 0;
    _.ek = function(a, b, c, d, e) {
        if (d && d.once)
            return _.dk(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                _.ek(a, b[f], c, d, e);
            return null
        }
        c = _.fk(c);
        return _.Tj(a) ? a.ma(b, c, _.qc(d) ? !!d.capture : !!d, e) : gk(a, b, c, !1, d, e)
    }
    ;
    gk = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("K");
        var h = _.qc(e) ? !!e.capture : !!e
          , k = _.hk(a);
        k || (a[ak] = k = new Xj(a));
        c = k.add(b, c, d, h, f);
        if (c.proxy)
            return c;
        d = ik();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            Pj || (e = h),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(jk(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("L");
        ck++;
        return c
    }
    ;
    ik = function() {
        var a = kk
          , b = function(c) {
            return a.call(b.src, b.listener, c)
        };
        return b
    }
    ;
    _.dk = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                _.dk(a, b[f], c, d, e);
            return null
        }
        c = _.fk(c);
        return _.Tj(a) ? a.Sr(b, c, _.qc(d) ? !!d.capture : !!d, e) : gk(a, b, c, !0, d, e)
    }
    ;
    _.lk = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                _.lk(a, b[f], c, d, e);
        else
            d = _.qc(d) ? !!d.capture : !!d,
            c = _.fk(c),
            _.Tj(a) ? a.Kc(b, c, d, e) : a && (a = _.hk(a)) && (b = a.kr(b, c, d, e)) && _.mk(b)
    }
    ;
    _.mk = function(a) {
        if ("number" === typeof a || !a || a.mw)
            return !1;
        var b = a.src;
        if (_.Tj(b))
            return b.uN(a);
        var c = a.type
          , d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(jk(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        ck--;
        (c = _.hk(b)) ? (Zj(c, a),
        0 == c.wx && (c.src = null,
        b[ak] = null)) : Wj(a);
        return !0
    }
    ;
    jk = function(a) {
        return a in bk ? bk[a] : bk[a] = "on" + a
    }
    ;
    kk = function(a, b) {
        if (a.mw)
            a = !0;
        else {
            b = new _.Qj(b,this);
            var c = a.listener
              , d = a.Wf || a.src;
            a.Ay && _.mk(a);
            a = c.call(d, b)
        }
        return a
    }
    ;
    _.hk = function(a) {
        a = a[ak];
        return a instanceof Xj ? a : null
    }
    ;
    nk = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.fk = function(a) {
        if ("function" === typeof a)
            return a;
        a[nk] || (a[nk] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[nk]
    }
    ;
    _.Jj(function(a) {
        kk = a(kk)
    });
    _.ok = function() {
        _.Dj.call(this);
        this.Kk = new Xj(this);
        this.I5 = this;
        this.MJ = null
    }
    ;
    _.Ya(_.ok, _.Dj);
    _.ok.prototype[_.Sj] = !0;
    _.g = _.ok.prototype;
    _.g.Ko = function() {
        return this.MJ
    }
    ;
    _.g.lD = function(a) {
        this.MJ = a
    }
    ;
    _.g.addEventListener = function(a, b, c, d) {
        _.ek(this, a, b, c, d)
    }
    ;
    _.g.removeEventListener = function(a, b, c, d) {
        _.lk(this, a, b, c, d)
    }
    ;
    _.g.dispatchEvent = function(a) {
        var b, c = this.Ko();
        if (c)
            for (b = []; c; c = c.Ko())
                b.push(c);
        c = this.I5;
        var d = a.type || a;
        if ("string" === typeof a)
            a = new _.Oj(a,c);
        else if (a instanceof _.Oj)
            a.target = a.target || c;
        else {
            var e = a;
            a = new _.Oj(d,c);
            _.yb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.hw && 0 <= f; f--) {
                var h = a.currentTarget = b[f];
                e = h.xu(d, !0, a) && e
            }
        a.hw || (h = a.currentTarget = c,
        e = h.xu(d, !0, a) && e,
        a.hw || (e = h.xu(d, !1, a) && e));
        if (b)
            for (f = 0; !a.hw && f < b.length; f++)
                h = a.currentTarget = b[f],
                e = h.xu(d, !1, a) && e;
        return e
    }
    ;
    _.g.va = function() {
        _.ok.N.va.call(this);
        this.mK();
        this.MJ = null
    }
    ;
    _.g.ma = function(a, b, c, d) {
        return this.Kk.add(String(a), b, !1, c, d)
    }
    ;
    _.g.Sr = function(a, b, c, d) {
        return this.Kk.add(String(a), b, !0, c, d)
    }
    ;
    _.g.Kc = function(a, b, c, d) {
        return this.Kk.remove(String(a), b, c, d)
    }
    ;
    _.g.uN = function(a) {
        return Zj(this.Kk, a)
    }
    ;
    _.g.mK = function() {
        this.Kk && this.Kk.removeAll(void 0)
    }
    ;
    _.g.xu = function(a, b, c) {
        a = this.Kk.Be[String(a)];
        if (!a)
            return !0;
        a = a.concat();
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.mw && f.capture == b) {
                var h = f.listener
                  , k = f.Wf || f.src;
                f.Ay && this.uN(f);
                d = !1 !== h.call(k, c) && d
            }
        }
        return d && !c.defaultPrevented
    }
    ;
    _.g.kr = function(a, b, c, d) {
        return this.Kk.kr(String(a), b, c, d)
    }
    ;
    _.g.hasListener = function(a, b) {
        return this.Kk.hasListener(void 0 !== a ? String(a) : void 0, b)
    }
    ;
    var Vr;
    Vr = function() {
        var a = _.Ab();
        if (_.Lb())
            return _.Ub(a);
        a = _.Ib(a);
        var b = _.Tb(a);
        return _.Kb() ? b(["Version", "Opera"]) : _.Mb() ? b(["Edge"]) : _.Nb() ? b(["Edg"]) : _.Gb("Silk") ? b(["Silk"]) : _.Qb() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    }
    ;
    _.Wr = function(a) {
        return 0 <= _.rd(Vr(), a)
    }
    ;
    _.Yr = function() {
        return _.Cb && _.Db ? _.Db.mobile : !_.Xr() && (_.Gb("iPod") || _.Gb("iPhone") || _.Gb("Android") || _.Gb("IEMobile"))
    }
    ;
    _.Xr = function() {
        return _.Cb && _.Db ? !_.Db.mobile && (_.Gb("iPad") || _.Gb("Android") || _.Gb("Silk")) : _.Gb("iPad") || _.Gb("Android") && !_.Gb("Mobile") || _.Gb("Silk")
    }
    ;
    _.Zr = function() {
        return !_.Yr() && !_.Xr()
    }
    ;
    var qt;
    qt = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    ;
    _.rt = function(a, b, c, d) {
        return Array.prototype.splice.apply(a, qt(arguments, 1))
    }
    ;
    _.st = function(a, b, c) {
        if (null !== a && b in a)
            throw Error("k`" + b);
        a[b] = c
    }
    ;
    _.tt = function(a, b) {
        var c = b || document;
        if (c.getElementsByClassName)
            a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.Ke(c, "*", a, b)[0] || null
        }
        return a || null
    }
    ;
    _.ut = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    ;
    _.vt = function(a) {
        var b;
        if (_.xe && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return _.bf(b) ? b : null
    }
    ;
    _.wt = function(a, b, c) {
        a && !c && (a = a.parentNode);
        for (c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    ;
    _.xt = function(a) {
        _.Dj.call(this);
        this.Ne = a;
        this.mc = {}
    }
    ;
    _.Ya(_.xt, _.Dj);
    var zt = [];
    _.xt.prototype.ma = function(a, b, c, d) {
        return this.Iv(a, b, c, d)
    }
    ;
    _.xt.prototype.Iv = function(a, b, c, d, e) {
        Array.isArray(b) || (b && (zt[0] = b.toString()),
        b = zt);
        for (var f = 0; f < b.length; f++) {
            var h = _.ek(a, b[f], c || this.handleEvent, d || !1, e || this.Ne || this);
            if (!h)
                break;
            this.mc[h.key] = h
        }
        return this
    }
    ;
    _.xt.prototype.Sr = function(a, b, c, d) {
        return At(this, a, b, c, d)
    }
    ;
    var At = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var h = 0; h < c.length; h++)
                At(a, b, c[h], d, e, f);
        else {
            b = _.dk(b, c, d || a.handleEvent, e, f || a.Ne || a);
            if (!b)
                return a;
            a.mc[b.key] = b
        }
        return a
    };
    _.xt.prototype.Kc = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                this.Kc(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            d = _.qc(d) ? !!d.capture : !!d,
            e = e || this.Ne || this,
            c = _.fk(c),
            d = !!d,
            b = _.Tj(a) ? a.kr(b, c, d, e) : a ? (a = _.hk(a)) ? a.kr(b, c, d, e) : null : null,
            b && (_.mk(b),
            delete this.mc[b.key]);
        return this
    }
    ;
    _.xt.prototype.removeAll = function() {
        _.sb(this.mc, function(a, b) {
            this.mc.hasOwnProperty(b) && _.mk(a)
        }, this);
        this.mc = {}
    }
    ;
    _.xt.prototype.va = function() {
        _.xt.N.va.call(this);
        this.removeAll()
    }
    ;
    _.xt.prototype.handleEvent = function() {
        throw Error("T");
    }
    ;
    var bv, cv, dv, ev, fv, hv, iv, jv, kv, mv;
    _.$u = function(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c])
                return !1;
        for (var d in b)
            if (!(d in a))
                return !1;
        return !0
    }
    ;
    _.av = !1;
    bv = function(a) {
        try {
            _.av && window.console && window.console.log && window.console.log(a)
        } catch (b) {}
    }
    ;
    cv = function(a) {
        try {
            window.console && window.console.warn && window.console.warn(a)
        } catch (b) {}
    }
    ;
    dv = function(a, b) {
        if (!a)
            return -1;
        if (a.indexOf)
            return a.indexOf(b, void 0);
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b)
                return c;
        return -1
    }
    ;
    ev = function(a, b) {
        function c() {}
        if (!a)
            throw Error("W");
        if (!b)
            throw Error("X");
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    ;
    fv = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    }
    ;
    _.gv = function(a) {
        var b = {};
        if (a)
            for (var c in a)
                a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }
    ;
    hv = function(a) {
        var b = location.hash;
        a = new RegExp("[&#]" + a + "=([^&]*)");
        b = decodeURIComponent(b);
        b = a.exec(b);
        return null == b ? "" : b[1].replace(/\+/g, " ")
    }
    ;
    iv = function(a, b, c) {
        if (a.addEventListener)
            a.addEventListener(b, c, !1);
        else if (a.attachEvent)
            a.attachEvent("on" + b, c);
        else
            throw Error("Y`" + b);
    }
    ;
    jv = {
        token: 1,
        id_token: 1
    };
    kv = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10)
    }
    ;
    _.lv = window.JSON;
    mv = function(a) {
        this.JN = a || [];
        this.xc = {}
    }
    ;
    mv.prototype.addEventListener = function(a, b) {
        if (!(0 <= dv(this.JN, a)))
            throw Error("$`" + a);
        if (!fv(b))
            throw Error("aa`" + a);
        this.xc[a] || (this.xc[a] = []);
        0 > dv(this.xc[a], b) && this.xc[a].push(b)
    }
    ;
    mv.prototype.removeEventListener = function(a, b) {
        if (!(0 <= dv(this.JN, a)))
            throw Error("$`" + a);
        fv(b) && this.xc[a] && this.xc[a].length && (b = dv(this.xc[a], b),
        0 <= b && this.xc[a].splice(b, 1))
    }
    ;
    mv.prototype.dispatchEvent = function(a) {
        var b = a.type;
        if (!(b && 0 <= dv(this.JN, b)))
            throw Error("ba`" + b);
        if (this.xc[b] && this.xc[b].length)
            for (var c = this.xc[b].length, d = 0; d < c; d++)
                this.xc[b][d](a)
    }
    ;
    var nv, ov, pv, tv, uv, Lv, Mv, Ov, Pv, Rv, Vv, Wv, Xv, aw;
    nv = {};
    ov = {};
    pv = {
        google: {
            fedcmConfigUrl: "https://accounts.google.com/o/fedcm/config.json",
            authServerUrl: "https://accounts.google.com/o/oauth2/auth",
            idpIFrameUrl: "https://accounts.google.com/o/oauth2/iframe"
        }
    };
    _.qv = function(a, b) {
        if (a = pv[a])
            return a[b]
    }
    ;
    _.rv = function(a, b) {
        if (!a)
            throw Error("ca");
        if (!b.authServerUrl)
            throw Error("da");
        if (!b.idpIFrameUrl)
            throw Error("ea");
        pv[a] = {
            authServerUrl: b.authServerUrl,
            idpIFrameUrl: b.idpIFrameUrl
        };
        b.fedcmConfigUrl ? pv[a].fedcmConfigUrl = b.fedcmConfigUrl : "google" === a && (pv[a].fedcmConfigUrl = "https://accounts.google.com/o/fedcm/config.json")
    }
    ;
    _.sv = void 0;
    tv = function(a) {
        a.style.position = "absolute";
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.left = "-9999px";
        a.style.top = "-9999px";
        a.style.right = "-9999px";
        a.style.bottom = "-9999px";
        a.style.display = "none";
        a.setAttribute("aria-hidden", "true")
    }
    ;
    uv = function() {
        this.Xi = window;
        this.Wy = this.Zn = this.ew = this.Mi = null
    }
    ;
    uv.prototype.open = function(a, b, c, d) {
        vv(this);
        this.ew ? (this.Zn && (this.Zn(),
        this.Zn = null),
        wv(this)) : this.ew = "authPopup" + Math.floor(1E6 * Math.random() + 1);
        a: {
            this.Mi = this.Xi.open(a, this.ew, b);
            try {
                this.Mi.focus();
                if (this.Mi.closed || "undefined" == typeof this.Mi.closed)
                    throw Error("ga");
                _.sv = this.Mi
            } catch (e) {
                d && setTimeout(d, 0);
                this.Mi = null;
                break a
            }
            c && (this.Zn = c,
            xv(this))
        }
    }
    ;
    var vv = function(a) {
        try {
            if (null == a.Mi || a.Mi.closed)
                a.Mi = null,
                a.ew = null,
                wv(a),
                a.Zn && (a.Zn(),
                a.Zn = null)
        } catch (b) {
            a.Mi = null,
            a.ew = null,
            wv(a)
        }
    }
      , xv = function(a) {
        a.Wy = window.setInterval(function() {
            vv(a)
        }, 300)
    }
      , wv = function(a) {
        a.Wy && (window.clearInterval(a.Wy),
        a.Wy = null)
    };
    ov = ov || {};
    var yv = function(a, b) {
        this.qc = a;
        this.gI = b;
        this.Sd = null;
        this.So = !1
    };
    yv.prototype.start = function() {
        if (!this.So && !this.Sd) {
            var a = this;
            this.Sd = window.setTimeout(function() {
                a.clear();
                a.So || (a.qc(),
                a.So = !0)
            }, ov.tT(this.gI))
        }
    }
    ;
    yv.prototype.clear = function() {
        this.Sd && (window.clearTimeout(this.Sd),
        this.Sd = null)
    }
    ;
    var zv = function(a, b) {
        var c = ov.Dt;
        this.haa = ov.vt;
        this.U0 = c;
        this.qc = a;
        this.gI = b;
        this.Sd = null;
        this.So = !1;
        var d = this;
        this.V0 = function() {
            document[d.haa] || (d.clear(),
            d.start())
        }
    };
    zv.prototype.start = function() {
        if (!this.So && !this.Sd) {
            iv(document, this.U0, this.V0);
            var a = this;
            this.Sd = window.setTimeout(function() {
                a.clear();
                a.So || (a.qc(),
                a.So = !0)
            }, ov.tT(this.gI))
        }
    }
    ;
    zv.prototype.clear = function() {
        var a = this.U0
          , b = this.V0
          , c = document;
        if (c.removeEventListener)
            c.removeEventListener(a, b, !1);
        else if (c.detachEvent)
            c.detachEvent("on" + a, b);
        else
            throw Error("Z`" + a);
        this.Sd && (window.clearTimeout(this.Sd),
        this.Sd = null)
    }
    ;
    ov.vt = null;
    ov.Dt = null;
    ov.Laa = function() {
        var a = document;
        "undefined" !== typeof a.hidden ? (ov.vt = "hidden",
        ov.Dt = "visibilitychange") : "undefined" !== typeof a.msHidden ? (ov.vt = "msHidden",
        ov.Dt = "msvisibilitychange") : "undefined" !== typeof a.webkitHidden && (ov.vt = "webkitHidden",
        ov.Dt = "webkitvisibilitychange")
    }
    ;
    ov.Laa();
    ov.Z6 = function(a, b) {
        return ov.vt && ov.Dt ? new zv(a,b) : new yv(a,b)
    }
    ;
    ov.tT = function(a) {
        return Math.max(1, a - (new Date).getTime())
    }
    ;
    var Av = function(a, b) {
        document.cookie = "G_ENABLED_IDPS=" + a + ";domain=." + b + ";expires=Fri, 31 Dec 9999 12:00:00 GMT;path=/"
    }
      , Bv = function() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            n = m = 0
        }
        function b(p) {
            for (var q = h, t = 0; 64 > t; t += 4)
                q[t / 4] = p[t] << 24 | p[t + 1] << 16 | p[t + 2] << 8 | p[t + 3];
            for (t = 16; 80 > t; t++)
                p = q[t - 3] ^ q[t - 8] ^ q[t - 14] ^ q[t - 16],
                q[t] = (p << 1 | p >>> 31) & 4294967295;
            p = e[0];
            var v = e[1]
              , u = e[2]
              , w = e[3]
              , x = e[4];
            for (t = 0; 80 > t; t++) {
                if (40 > t)
                    if (20 > t) {
                        var z = w ^ v & (u ^ w);
                        var G = 1518500249
                    } else
                        z = v ^ u ^ w,
                        G = 1859775393;
                else
                    60 > t ? (z = v & u | w & (v | u),
                    G = 2400959708) : (z = v ^ u ^ w,
                    G = 3395469782);
                z = ((p << 5 | p >>> 27) & 4294967295) + z + x + G + q[t] & 4294967295;
                x = w;
                w = u;
                u = (v << 30 | v >>> 2) & 4294967295;
                v = p;
                p = z
            }
            e[0] = e[0] + p & 4294967295;
            e[1] = e[1] + v & 4294967295;
            e[2] = e[2] + u & 4294967295;
            e[3] = e[3] + w & 4294967295;
            e[4] = e[4] + x & 4294967295
        }
        function c(p, q) {
            if ("string" === typeof p) {
                p = unescape(encodeURIComponent(p));
                for (var t = [], v = 0, u = p.length; v < u; ++v)
                    t.push(p.charCodeAt(v));
                p = t
            }
            q || (q = p.length);
            t = 0;
            if (0 == m)
                for (; t + 64 < q; )
                    b(p.slice(t, t + 64)),
                    t += 64,
                    n += 64;
            for (; t < q; )
                if (f[m++] = p[t++],
                n++,
                64 == m)
                    for (m = 0,
                    b(f); t + 64 < q; )
                        b(p.slice(t, t + 64)),
                        t += 64,
                        n += 64
        }
        function d() {
            var p = []
              , q = 8 * n;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var t = 63; 56 <= t; t--)
                f[t] = q & 255,
                q >>>= 8;
            b(f);
            for (t = q = 0; 5 > t; t++)
                for (var v = 24; 0 <= v; v -= 8)
                    p[q++] = e[t] >> v & 255;
            return p
        }
        for (var e = [], f = [], h = [], k = [128], l = 1; 64 > l; ++l)
            k[l] = 0;
        var m, n;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            hj: function() {
                for (var p = d(), q = "", t = 0; t < p.length; t++)
                    q += "0123456789ABCDEF".charAt(Math.floor(p[t] / 16)) + "0123456789ABCDEF".charAt(p[t] % 16);
                return q
            }
        }
    }
      , Cv = window.crypto
      , Dv = !1
      , Ev = 0
      , Fv = 1
      , Gv = 0
      , Hv = ""
      , Iv = function(a) {
        a = a || window.event;
        var b = a.screenX + a.clientX << 16;
        b += a.screenY + a.clientY;
        b *= (new Date).getTime() % 1E6;
        Fv = Fv * b % Gv;
        if (3 == ++Ev)
            if (a = window,
            b = Iv,
            a.removeEventListener)
                a.removeEventListener("mousemove", b, !1);
            else if (a.detachEvent)
                a.detachEvent("onmousemove", b);
            else
                throw Error("Z`mousemove");
    }
      , Jv = function(a) {
        var b = Bv();
        b.update(a);
        return b.hj()
    };
    Dv = !!Cv && "function" == typeof Cv.getRandomValues;
    Dv || (Gv = 1E6 * (screen.width * screen.width + screen.height),
    Hv = Jv(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + Math.random()),
    iv(window, "mousemove", Iv));
    nv = nv || {};
    nv.X2 = "ssIFrame_";
    _.Kv = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        this.Ib = a;
        if (!this.Ib)
            throw Error("ha");
        a = _.qv(a, "idpIFrameUrl");
        if (!a)
            throw Error("ia");
        this.DU = a;
        if (!b)
            throw Error("ja");
        this.Cn = b;
        a = this.DU;
        b = document.createElement("a");
        b.setAttribute("href", a);
        a = [b.protocol, "//", b.hostname];
        "http:" == b.protocol && "" != b.port && "0" != b.port && "80" != b.port ? (a.push(":"),
        a.push(b.port)) : "https:" == b.protocol && "" != b.port && "0" != b.port && "443" != b.port && (a.push(":"),
        a.push(b.port));
        this.RH = a.join("");
        this.lea = [location.protocol, "//", location.host].join("");
        this.jx = this.QH = this.Wo = !1;
        this.zU = null;
        this.QB = [];
        this.vs = [];
        this.uk = {};
        this.Xo = void 0;
        this.dt = c
    }
    ;
    _.g = _.Kv.prototype;
    _.g.show = function() {
        var a = this.Xo;
        a.style.position = "fixed";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.left = "0px";
        a.style.top = "0px";
        a.style.right = "0px";
        a.style.bottom = "0px";
        a.style.display = "block";
        a.style.zIndex = "9999999";
        a.style.overflow = "hidden";
        a.setAttribute("aria-hidden", "false")
    }
    ;
    _.g.lc = function() {
        tv(this.Xo)
    }
    ;
    _.g.sB = function(a) {
        if (this.Wo)
            a && a(this);
        else {
            if (!this.Xo) {
                var b = nv.X2 + this.Ib;
                var c = this.Ib;
                var d = location.hostname;
                var e, f = document.cookie.match("(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)");
                f && 2 < f.length && (e = f[2]);
                (f = e && 0 <= dv(e.split("|"), c)) ? Av(e, d) : Av(e ? e + "|" + c : c, d);
                c = !f;
                var h = this.DU
                  , k = this.lea;
                d = this.Cn;
                e = this.dt;
                e = void 0 === e ? !1 : e;
                f = document.createElement("iframe");
                f.setAttribute("id", b);
                b = f.setAttribute;
                var l = "allow-scripts allow-same-origin";
                document.requestStorageAccess && fv(document.requestStorageAccess) && (l += " allow-storage-access-by-user-activation");
                b.call(f, "sandbox", l);
                f.setAttribute("allow", "identity-credentials-get");
                tv(f);
                f.setAttribute("frame-border", "0");
                b = [h, "#origin=", encodeURIComponent(k)];
                b.push("&rpcToken=");
                b.push(encodeURIComponent(d));
                c && b.push("&clearCache=1");
                _.av && b.push("&debug=1");
                e && b.push("&supportBlocked3PCookies=1");
                document.body.appendChild(f);
                f.setAttribute("src", b.join(""));
                this.Xo = f
            }
            a && this.QB.push(a)
        }
    }
    ;
    _.g.AV = function() {
        return this.Wo && this.jx
    }
    ;
    _.g.Io = function() {
        return this.zU
    }
    ;
    Lv = function(a) {
        for (var b = 0; b < a.QB.length; b++)
            a.QB[b](a);
        a.QB = []
    }
    ;
    _.Nv = function(a, b, c, d) {
        if (a.Wo) {
            if (a.Wo && a.QH)
                throw a = "Failed to communicate with IDP IFrame due to unitialization error: " + a.Io(),
                bv(a),
                Error(a);
            Mv(a, {
                method: b,
                params: c
            }, d)
        } else
            a.vs.push({
                Op: {
                    method: b,
                    params: c
                },
                callback: d
            }),
            a.sB()
    }
    ;
    Mv = function(a, b, c) {
        if (c) {
            for (var d = b.id; !d || a.uk[d]; )
                d = (new Date).getMilliseconds() + "-" + (1E6 * Math.random() + 1);
            b.id = d;
            a.uk[d] = c
        }
        b.rpcToken = a.Cn;
        a.Xo.contentWindow.postMessage(_.lv.stringify(b), a.RH)
    }
    ;
    Ov = function(a) {
        if (a && 0 <= a.indexOf("::"))
            throw Error("ka");
    }
    ;
    _.Kv.prototype.Kj = function(a, b, c, d, e, f, h, k, l) {
        l = void 0 === l ? !1 : l;
        Ov(f);
        b = _.gv(b);
        _.Nv(this, "getTokenResponse", {
            clientId: a,
            loginHint: c,
            request: b,
            sessionSelector: d,
            forceRefresh: h,
            skipCache: k,
            id: f,
            userInteracted: l
        }, e)
    }
    ;
    _.Kv.prototype.qB = function(a, b, c, d, e) {
        b = _.gv(b);
        _.Nv(this, "listIdpSessions", {
            clientId: a,
            request: b,
            sessionSelector: c,
            forceRefresh: e
        }, d)
    }
    ;
    Pv = function(a, b, c) {
        Ov(b.identifier);
        _.Nv(a, "getSessionSelector", b, c)
    }
    ;
    _.Qv = function(a, b, c, d, e) {
        Ov(b.identifier);
        _.Nv(a, "setSessionSelector", {
            domain: b.domain,
            crossSubDomains: b.crossSubDomains,
            policy: b.policy,
            id: b.id,
            hint: d,
            disabled: !!c
        }, e)
    }
    ;
    Rv = function(a, b, c, d, e) {
        b = {
            clientId: b
        };
        c && (b.pluginName = c);
        d && (b.ackExtensionDate = d);
        _.Nv(a, "monitorClient", b, e)
    }
    ;
    _.Kv.prototype.revoke = _.fb(8);
    _.Kv.prototype.Rt = _.fb(10);
    nv.IA = {};
    nv.SG = function(a) {
        return nv.IA[a]
    }
    ;
    nv.sB = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = nv.SG(a);
        if (!d) {
            d = String;
            if (Dv) {
                var e = new window.Uint32Array(1);
                Cv.getRandomValues(e);
                e = Number("0." + e[0])
            } else
                e = Fv,
                e += parseInt(Hv.substr(0, 20), 16),
                Hv = Jv(Hv),
                e /= Gv + Math.pow(16, 20);
            d = new _.Kv(a,d(2147483647 * e),c);
            nv.IA[a] = d
        }
        d.sB(b)
    }
    ;
    nv.C8 = function(a) {
        for (var b in nv.IA) {
            var c = nv.SG(b);
            if (c && c.Xo && c.Xo.contentWindow == a.source && c.RH == a.origin)
                return c
        }
    }
    ;
    nv.m9 = function(a) {
        for (var b in nv.IA) {
            var c = nv.SG(b);
            if (c && c.RH == a)
                return c
        }
    }
    ;
    nv = nv || {};
    var Tv = function() {
        var a = [], b;
        for (b in _.Sv)
            a.push(_.Sv[b]);
        mv.call(this, a);
        this.Rm = {};
        bv("EventBus is ready.")
    };
    ev(Tv, mv);
    _.Sv = {
        J4: "sessionSelectorChanged",
        AE: "sessionStateChanged",
        rt: "authResult",
        V1: "displayIFrame"
    };
    Vv = function(a, b) {
        var c = Uv;
        a && b && (c.Rm[a] || (c.Rm[a] = []),
        0 > dv(c.Rm[a], b) && c.Rm[a].push(b))
    }
    ;
    Wv = function(a) {
        var b = Uv;
        a && (b.Rm[a] || (b.Rm[a] = []))
    }
    ;
    Xv = function(a, b, c) {
        return b && a.Rm[b] && 0 <= dv(a.Rm[b], c)
    }
    ;
    _.g = Tv.prototype;
    _.g.rda = function(a) {
        var b, c = !!a.source && (a.source === _.sv || a.source.opener === window);
        if (b = c ? nv.m9(a.origin) : nv.C8(a)) {
            try {
                var d = _.lv.parse(a.data)
            } catch (e) {
                bv("Bad event, an error happened when parsing data.");
                return
            }
            if (!c) {
                if (!d || !d.rpcToken || d.rpcToken != b.Cn) {
                    bv("Bad event, no RPC token.");
                    return
                }
                if (d.id && !d.method) {
                    c = d;
                    if (a = b.uk[c.id])
                        delete b.uk[c.id],
                        a(c.result, c.error);
                    return
                }
            }
            "fireIdpEvent" != d.method ? bv("Bad IDP event, method unknown.") : (a = d.params) && a.type && this.CU[a.type] ? (d = this.CU[a.type],
            c && !d.P5 ? bv("Bad IDP event. Source window cannot be a popup.") : d.lt && !d.lt.call(this, b, a) ? bv("Bad IDP event.") : d.Wf.call(this, b, a)) : bv("Bad IDP event.")
        } else
            bv("Bad event, no corresponding Idp Stub.")
    }
    ;
    _.g.Lea = function(a, b) {
        return Xv(this, a.Ib, b.clientId)
    }
    ;
    _.g.Kea = function(a, b) {
        a = a.Ib;
        b = b.clientId;
        return !b || Xv(this, a, b)
    }
    ;
    _.g.d6 = function(a, b) {
        return Xv(this, a.Ib, b.clientId)
    }
    ;
    _.g.wca = function(a, b) {
        a.Wo = !0;
        a.jx = !!b.cookieDisabled;
        Lv(a);
        for (b = 0; b < a.vs.length; b++)
            Mv(a, a.vs[b].Op, a.vs[b].callback);
        a.vs = []
    }
    ;
    _.g.vca = function(a, b) {
        b = {
            error: b.error
        };
        a.Wo = !0;
        a.QH = !0;
        a.zU = b;
        a.vs = [];
        Lv(a)
    }
    ;
    _.g.rC = function(a, b) {
        b.originIdp = a.Ib;
        this.dispatchEvent(b)
    }
    ;
    var Uv = new Tv
      , Yv = Uv
      , Zv = {};
    Zv.idpReady = {
        Wf: Yv.wca
    };
    Zv.idpError = {
        Wf: Yv.vca
    };
    Zv.sessionStateChanged = {
        Wf: Yv.rC,
        lt: Yv.Lea
    };
    Zv.sessionSelectorChanged = {
        Wf: Yv.rC,
        lt: Yv.Kea
    };
    Zv.authResult = {
        Wf: Yv.rC,
        lt: Yv.d6,
        P5: !0
    };
    Zv.displayIFrame = {
        Wf: Yv.rC
    };
    Uv.CU = Zv || {};
    iv(window, "message", function(a) {
        Uv.rda.call(Uv, a)
    });
    _.$v = function(a, b) {
        this.Xe = !1;
        if (!a)
            throw Error("la");
        var c = [], d;
        for (d in a)
            c.push(a[d]);
        mv.call(this, c);
        this.Od = [location.protocol, "//", location.host].join("");
        this.ue = b.crossSubDomains ? b.domain || this.Od : this.Od;
        if (!b)
            throw Error("ma");
        if (!b.idpId)
            throw Error("na");
        if (!_.qv(b.idpId, "authServerUrl") || !_.qv(b.idpId, "idpIFrameUrl"))
            throw Error("oa`" + b.idpId);
        this.Ib = b.idpId;
        this.Vb = void 0;
        this.h7 = !!b.disableTokenRefresh;
        this.a8 = !!b.forceTokenRefresh;
        this.Mfa = !!b.skipTokenCache;
        this.dt = !!b.supportBlocked3PCookies;
        b.pluginName && (this.gda = b.pluginName);
        b.ackExtensionDate && (this.D5 = b.ackExtensionDate);
        this.setOptions(b);
        this.du = [];
        this.jx = this.Wk = this.lV = !1;
        this.Dj = void 0;
        this.xY();
        this.ee = void 0;
        var e = this
          , f = function() {
            bv("Token Manager is ready.");
            if (e.du.length)
                for (var h = 0; h < e.du.length; h++)
                    e.du[h].call(e);
            e.lV = !0;
            e.du = []
        };
        nv.sB(this.Ib, function(h) {
            e.ee = h;
            h.Wo && h.QH ? (e.Wk = !0,
            e.Dj = h.Io(),
            e.hs(e.Dj)) : (e.jx = h.AV(),
            e.Vb ? Rv(e.ee, e.Vb, e.gda, e.D5, function(k) {
                var l = !!k.validOrigin
                  , m = !!k.blocked
                  , n = !!k.suppressed;
                k.invalidExtension ? (e.Dj = {
                    error: "Invalid value for ack_extension_date. Please refer to [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
                },
                e.Wk = !0,
                e.hs(e.Dj)) : l ? m ? n ? (cv("You have created a new client application that uses libraries for user authentication or authorization that are deprecated. New clients must use the new libraries instead. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."),
                Vv(e.Ib, e.Vb),
                f()) : (e.Dj = {
                    error: "You have created a new client application that uses libraries for user authentication or authorization that are deprecated. New clients must use the new libraries instead. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
                },
                e.Wk = !0,
                e.hs(e.Dj)) : (cv("Your client application uses libraries for user authentication or authorization that are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."),
                Vv(e.Ib, e.Vb),
                f()) : (e.Dj = {
                    error: "Not a valid origin for the client: " + e.Od + " has not been registered for client ID " + e.Vb + ". Please go to https://console.developers.google.com/ and register this origin for your project's client ID."
                },
                e.Wk = !0,
                e.hs(e.Dj))
            }) : (Wv(e.Ib),
            f()))
        }, this.dt)
    }
    ;
    ev(_.$v, mv);
    _.g = _.$v.prototype;
    _.g.setOptions = function() {}
    ;
    _.g.xY = function() {}
    ;
    _.g.hs = function() {}
    ;
    _.g.AV = function() {
        return this.jx
    }
    ;
    _.g.Io = function() {
        return this.Dj
    }
    ;
    aw = function(a, b, c) {
        return function() {
            b.apply(a, c)
        }
    }
    ;
    _.bw = function(a, b, c) {
        if (a.lV)
            b.apply(a, c);
        else {
            if (a.Wk)
                throw a.Dj;
            a.du.push(aw(a, b, c))
        }
    }
    ;
    _.$v.prototype.UP = _.fb(11);
    _.$v.prototype.Rt = _.fb(9);
    _.dw = function(a, b) {
        _.$v.call(this, a, b);
        this.QX = new uv;
        this.ql = this.Cp = null;
        cw(this)
    }
    ;
    ev(_.dw, _.$v);
    _.dw.prototype.setOptions = function() {}
    ;
    var ew = function(a, b) {
        a.Ue = {
            crossSubDomains: !!b.crossSubDomains,
            id: b.sessionSelectorId,
            domain: a.ue
        };
        b.crossSubDomains && (a.Ue.policy = b.policy)
    }
      , fw = function(a, b) {
        if (!b.authParameters)
            throw Error("pa");
        if (!b.authParameters.scope)
            throw Error("qa");
        if (!b.authParameters.response_type)
            throw Error("ra");
        a.Eq = b.authParameters;
        a.Eq.redirect_uri || (a.Eq.redirect_uri = [location.protocol, "//", location.host, location.pathname].join(""));
        a.Uj = _.gv(b.rpcAuthParameters || a.Eq);
        if (!a.Uj.scope)
            throw Error("sa");
        if (!a.Uj.response_type)
            throw Error("ta");
        a: {
            var c = a.Uj.response_type.split(" ");
            for (var d = 0, e = c.length; d < e; d++)
                if (c[d] && !jv[c[d]]) {
                    c = !0;
                    break a
                }
            c = !1
        }
        if (c)
            throw Error("ua");
        b.enableSerialConsent && (a.Uj.enable_serial_consent = !0);
        b.authResultIdentifier && (a.e6 = b.authResultIdentifier);
        b.spec_compliant && (a.Uj.spec_compliant = b.spec_compliant)
    };
    _.dw.prototype.xY = function() {
        var a = this;
        Uv.addEventListener(_.Sv.J4, function(b) {
            a.Xe && a.Ue && b.originIdp == a.Ib && !b.crossSubDomains == !a.Ue.crossSubDomains && b.domain == a.Ue.domain && b.id == a.Ue.id && a.hX(b)
        });
        Uv.addEventListener(_.Sv.AE, function(b) {
            a.Xe && b.originIdp == a.Ib && b.clientId == a.Vb && a.iX(b)
        });
        Uv.addEventListener(_.Sv.rt, function(b) {
            _.sv = void 0;
            a.Xe && b.originIdp == a.Ib && b.clientId == a.Vb && b.id == a.kl && (a.Cp && (window.clearTimeout(a.Cp),
            a.Cp = null),
            a.kl = void 0,
            a.xp(b))
        });
        Uv.addEventListener(_.Sv.V1, function(b) {
            a.Xe && b.originIdp == a.Ib && (b.lc ? a.ee.lc() : a.ee.show())
        })
    }
    ;
    _.dw.prototype.hX = function() {}
    ;
    _.dw.prototype.iX = function() {}
    ;
    _.dw.prototype.xp = function() {}
    ;
    var hw = function(a, b) {
        gw(a);
        a.h7 || (a.ql = ov.Z6(function() {
            a.Kj(!0)
        }, b - 3E5),
        navigator.onLine && a.ql.start())
    }
      , gw = function(a) {
        a.ql && (a.ql.clear(),
        a.ql = null)
    }
      , cw = function(a) {
        var b = window;
        kv() && (b = document.body);
        iv(b, "online", function() {
            a.ql && a.ql.start()
        });
        iv(b, "offline", function() {
            a.ql && a.ql.clear()
        })
    };
    _.dw.prototype.Kj = function() {}
    ;
    _.dw.prototype.KW = _.fb(12);
    _.dw.prototype.sba = function(a, b) {
        if (!this.Vb)
            throw Error("ya");
        this.ee.qB(this.Vb, this.Uj, this.Ue, a, b)
    }
    ;
    _.dw.prototype.qB = function(a, b) {
        _.bw(this, this.sba, [a, b])
    }
    ;
    _.jw = function(a) {
        this.Pe = void 0;
        this.Zh = !1;
        this.Fs = void 0;
        _.dw.call(this, iw, a)
    }
    ;
    ev(_.jw, _.dw);
    var iw = {
        pO: "noSessionBound",
        Ct: "userLoggedOut",
        j1: "activeSessionChanged",
        AE: "sessionStateChanged",
        j5: "tokenReady",
        i5: "tokenFailed",
        rt: "authResult",
        ERROR: "error"
    };
    _.jw.prototype.setOptions = function(a) {
        if (!a.clientId)
            throw Error("za");
        this.Vb = a.clientId;
        this.Ha = a.id;
        ew(this, a);
        fw(this, a)
    }
    ;
    _.jw.prototype.hs = function(a) {
        this.dispatchEvent({
            type: iw.ERROR,
            error: "idpiframe_initialization_failed",
            details: a.error,
            idpId: this.Ib
        })
    }
    ;
    var kw = function(a) {
        gw(a);
        a.Fs = void 0;
        a.EI = void 0
    };
    _.g = _.jw.prototype;
    _.g.hX = function(a) {
        var b = a.newValue || {};
        if (this.Pe != b.hint || this.Zh != !!b.disabled) {
            a = this.Pe;
            var c = !this.Pe || this.Zh;
            kw(this);
            this.Pe = b.hint;
            this.Zh = !!b.disabled;
            (b = !this.Pe || this.Zh) && !c ? this.dispatchEvent({
                type: iw.Ct,
                idpId: this.Ib
            }) : b || (a != this.Pe && this.dispatchEvent({
                type: iw.j1,
                idpId: this.Ib
            }),
            this.Pe && this.Kj())
        }
    }
    ;
    _.g.iX = function(a) {
        this.Zh || (this.Pe ? a.user || this.Fs ? a.user == this.Pe && (this.Fs ? a.sessionState ? this.Fs = a.sessionState : (kw(this),
        this.dispatchEvent({
            type: iw.Ct,
            idpId: this.Ib
        })) : a.sessionState && (this.Fs = a.sessionState,
        this.Kj())) : this.Kj() : this.dispatchEvent({
            type: iw.AE,
            idpId: this.Ib
        }))
    }
    ;
    _.g.xp = function(a) {
        this.dispatchEvent({
            type: iw.rt,
            authResult: a.authResult
        })
    }
    ;
    _.g.Ku = _.fb(14);
    _.g.Eu = function(a) {
        _.bw(this, this.FG, [a])
    }
    ;
    _.g.FG = function(a) {
        Pv(this.ee, this.Ue, a)
    }
    ;
    _.g.ED = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!a)
            throw Error("Aa");
        kw(this);
        this.Pe = a;
        this.Zh = !1;
        b && _.Qv(this.ee, this.Ue, !1, this.Pe);
        this.Xe = !0;
        this.Kj(c, !0, d)
    }
    ;
    _.g.start = function() {
        _.bw(this, this.Uw, [])
    }
    ;
    _.g.Uw = function() {
        var a = this.Vb == hv("client_id") ? hv("login_hint") : void 0;
        var b = this.Vb == hv("client_id") ? hv("state") : void 0;
        this.oJ = b;
        if (a)
            window.history.replaceState ? window.history.replaceState(null, document.title, window.location.href.split("#")[0]) : window.location.href.hash = "",
            this.ED(a, !0, !0, !0);
        else {
            var c = this;
            this.Eu(function(d) {
                c.Xe = !0;
                d && d.hint ? (kw(c),
                c.Pe = d.hint,
                c.Zh = !!d.disabled,
                c.Zh ? c.dispatchEvent({
                    type: iw.Ct,
                    idpId: c.Ib
                }) : c.ED(d.hint)) : (kw(c),
                c.Pe = void 0,
                c.Zh = !(!d || !d.disabled),
                c.dispatchEvent({
                    type: iw.pO,
                    autoOpenAuthUrl: !c.Zh,
                    idpId: c.Ib
                }))
            })
        }
    }
    ;
    _.g.X7 = function() {
        var a = this;
        this.Eu(function(b) {
            b && b.hint ? b.disabled ? a.dispatchEvent({
                type: iw.Ct,
                idpId: a.Ib
            }) : a.Kj(!0) : a.dispatchEvent({
                type: iw.pO,
                idpId: a.Ib
            })
        })
    }
    ;
    _.g.tS = function() {
        _.bw(this, this.X7, [])
    }
    ;
    _.g.Kj = function(a, b, c) {
        var d = this;
        this.ee.Kj(this.Vb, this.Uj, this.Pe, this.Ue, function(e, f) {
            (f = f || e.error) ? "user_logged_out" == f ? (kw(d),
            d.dispatchEvent({
                type: iw.Ct,
                idpId: d.Ib
            })) : (d.EI = null,
            d.dispatchEvent({
                type: iw.i5,
                idpId: d.Ib,
                error: f
            })) : (d.EI = e,
            d.Fs = e.session_state,
            hw(d, e.expires_at),
            e.idpId = d.Ib,
            b && d.oJ && (e.state = d.oJ,
            d.oJ = void 0),
            d.dispatchEvent({
                type: iw.j5,
                idpId: d.Ib,
                response: e
            }))
        }, this.Ha, a, !1, void 0 === c ? !1 : c)
    }
    ;
    _.g.revoke = _.fb(7);
    _.g.SY = _.fb(15);
    _.lw = function(a) {
        this.Sn = null;
        _.dw.call(this, {}, a);
        this.Xe = !0
    }
    ;
    ev(_.lw, _.dw);
    _.g = _.lw.prototype;
    _.g.setOptions = function(a) {
        if (!a.clientId)
            throw Error("za");
        this.Vb = a.clientId;
        this.Ha = a.id;
        ew(this, a);
        fw(this, a)
    }
    ;
    _.g.hs = function(a) {
        this.Sn && (this.Sn({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.error
            }
        }),
        this.Sn = null)
    }
    ;
    _.g.xp = function(a) {
        if (this.Sn) {
            var b = this.Sn;
            this.Sn = null;
            b(a)
        }
    }
    ;
    _.g.Ku = _.fb(13);
    _.g.Eu = function(a) {
        this.Wk ? a(this.Io()) : _.bw(this, this.FG, [a])
    }
    ;
    _.g.FG = function(a) {
        Pv(this.ee, this.Ue, a)
    }
    ;
    _.mw = function(a, b, c) {
        a.Wk ? c(a.Io()) : _.bw(a, a.Lca, [b, c])
    }
    ;
    _.lw.prototype.Lca = function(a, b) {
        this.ee.Kj(this.Vb, this.Uj, a, this.Ue, function(c, d) {
            d ? b({
                error: d
            }) : b(c)
        }, this.Ha, this.a8, this.Mfa)
    }
    ;
    _.lw.prototype.XV = _.fb(16);
    var nw = function(a, b) {
        b = _.bc(b);
        void 0 !== b && a.assign(b)
    }, ow = function(a) {
        return Array.prototype.concat.apply([], arguments)
    }, pw = function() {
        try {
            var a = Array.from((window.crypto || window.msCrypto).getRandomValues(new Uint8Array(64)))
        } catch (c) {
            a = [];
            for (var b = 0; 64 > b; b++)
                a[b] = Math.floor(256 * Math.random())
        }
        return _.yi(a, 3).substring(0, 64)
    }, qw = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (null === d || void 0 === d)
                    d = "";
                b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
        return b.join("&")
    }, rw = function(a) {
        window.addEventListener("hashchange", function() {
            location.hash.includes("client_id") && window.location.reload()
        });
        nw(window.location, _.ef(a))
    }, sw = function(a, b, c) {
        if (!a.Xe)
            throw Error("va");
        b ? _.Qv(a.ee, a.Ue, !0, void 0, c) : _.Qv(a.ee, a.Ue, !0, a.Pe, c)
    }, tw = function(a) {
        if (!a.Xe)
            throw Error("va");
        return a.EI
    }, uw, vw, ww, xw, yw, zw, Aw, Bw, Cw, Dw, Ew, Gw;
    _.lw.prototype.XV = _.ib(16, function(a, b) {
        var c = this.ee
          , d = this.Vb
          , e = this.Ue
          , f = _.gv(this.Uj);
        delete f.response_type;
        _.Nv(c, "getOnlineCode", {
            clientId: d,
            loginHint: a,
            request: f,
            sessionSelector: e
        }, b)
    });
    _.jw.prototype.SY = _.ib(15, function(a) {
        tw(this) && tw(this).access_token && (this.ee.revoke(this.Vb, tw(this).access_token, a),
        sw(this, !0))
    });
    _.jw.prototype.Ku = _.ib(14, function() {
        var a = this;
        return function(b) {
            b && b.authResult && b.authResult.login_hint && (a.nC ? (b.authResult.client_id = a.Vb,
            rw(a.nC + "#" + qw(b.authResult))) : a.ED(b.authResult.login_hint, a.Zh || b.authResult.login_hint != a.Pe, !0, !0))
        }
    });
    _.lw.prototype.Ku = _.ib(13, function(a) {
        var b = this;
        return function(c) {
            c && c.authResult && c.authResult.login_hint ? b.Eu(function(d) {
                _.Qv(b.ee, b.Ue, d && d.disabled, c.authResult.login_hint, function() {
                    _.mw(b, c.authResult.login_hint, a)
                })
            }) : a(c && c.authResult && c.authResult.error ? c.authResult : c && c.authResult && !c.authResult.login_hint ? {
                error: "wrong_response_type"
            } : {
                error: "unknown_error"
            })
        }
    });
    _.dw.prototype.KW = _.ib(12, function() {
        this.Vb && _.Nv(this.ee, "startPolling", {
            clientId: this.Vb,
            origin: this.Od,
            id: this.kl
        })
    });
    _.Kv.prototype.revoke = _.ib(8, function(a, b, c) {
        _.Nv(this, "revoke", {
            clientId: a,
            token: b
        }, c)
    });
    _.jw.prototype.revoke = _.ib(7, function(a) {
        _.bw(this, this.SY, [a])
    });
    uw = function() {
        var a = navigator.userAgent, b;
        if (b = !!a && -1 != a.indexOf("CriOS"))
            b = -1,
            (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1),
            b = 48 > b;
        return b
    }
    ;
    vw = function() {
        var a = navigator.userAgent.toLowerCase();
        if (!(-1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android")))
            return !1;
        var b = RegExp("version/(\\d+)\\.(\\d+)[\\.0-9]*").exec(navigator.userAgent.toLowerCase());
        if (!b || 3 > b.length)
            return !1;
        a = parseInt(b[1], 10);
        b = parseInt(b[2], 10);
        return 12 < a || 12 == a && 1 <= b
    }
    ;
    ww = function() {
        if (_.mc() && !_.Wr("118"))
            return !1;
        var a = _.Qb() && !_.Nb() && !_.Ob(), b = _.hc() || _.Zr(), c;
        if (c = "IdentityCredential"in window) {
            try {
                var d = window.self !== window.top
            } catch (e) {
                d = !0
            }
            c = !d
        }
        return c && a && b && _.Wr("123")
    }
    ;
    xw = function(a, b, c, d, e, f, h) {
        var k = _.qv(a, "authServerUrl");
        if (!k)
            throw Error("fa`" + a);
        a = _.gv(d);
        a.response_type = h || "permission";
        a.client_id = c;
        a.ss_domain = b;
        if (f && f.extraQueryParams)
            for (var l in f.extraQueryParams)
                a[l] = f.extraQueryParams[l];
        (b = e) && !(b = vw()) && (b = navigator.userAgent.toLowerCase(),
        -1 < b.indexOf("ipad;") || -1 < b.indexOf("iphone;") ? (b = RegExp("os (\\d+)_\\d+(_\\d+)? like mac os x").exec(navigator.userAgent.toLowerCase()),
        b = !b || 2 > b.length ? !1 : 14 <= parseInt(b[1], 10)) : b = !1);
        b && !a.prompt && (a.prompt = "select_account");
        return k + (0 > k.indexOf("?") ? "?" : "&") + qw(a)
    }
    ;
    yw = function(a, b, c, d) {
        if (!a.Vb)
            throw Error("wa");
        a.kl = c || a.e6 || "auth" + Math.floor(1E6 * Math.random() + 1);
        b = b || {};
        b.extraQueryParams = b.extraQueryParams || {};
        if (!b.extraQueryParams.redirect_uri) {
            var e = a.Od.split("//");
            c = b.extraQueryParams;
            var f = e[0]
              , h = f.indexOf(":");
            0 < h && (f = f.substring(0, h));
            e = ["storagerelay://", f, "/", e[1], "?"];
            e.push("id=" + a.kl);
            c.redirect_uri = e.join("")
        }
        return xw(a.Ib, a.ue, a.Vb, a.Eq, !0, b, d)
    }
    ;
    zw = function(a, b, c) {
        if (!a.Vb)
            throw Error("wa");
        return xw(a.Ib, a.ue, a.Vb, a.Eq, !1, b, c)
    }
    ;
    Aw = function(a, b) {
        a.Cp && window.clearTimeout(a.Cp);
        a.Cp = window.setTimeout(function() {
            a.kl == b && (_.sv = void 0,
            a.Cp = null,
            a.kl = void 0,
            a.xp({
                authResult: {
                    error: "popup_closed_by_user"
                }
            }))
        }, 1E3)
    }
    ;
    Bw = function(a, b, c) {
        if (!a.Vb)
            throw Error("xa");
        c = c || {};
        c = yw(a, c.sessionMeta, c.oneTimeId, c.responseType);
        (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject || uw()) && _.bw(a, a.KW, []);
        var d = a.kl;
        a.QX.open(c, b, function() {
            a.kl == d && Aw(a, d)
        }, function() {
            a.kl = void 0;
            a.xp({
                authResult: {
                    error: "popup_blocked_by_browser"
                }
            })
        })
    }
    ;
    Cw = function(a, b) {
        b = b || {};
        var c = _.gv(a.Eq);
        if (b.sessionMeta && b.sessionMeta.extraQueryParams)
            for (var d in b.sessionMeta.extraQueryParams)
                c[d] = b.sessionMeta.extraQueryParams[d];
        var e;
        b.sessionMeta.extraQueryParams.scope && (e = b.sessionMeta.extraQueryParams.scope.split(" "));
        !e && c.scope && (e = c.scope.split(" "));
        delete c.redirect_uri;
        delete c.origin;
        delete c.client_id;
        delete c.response_type;
        delete c.scope;
        "select_account" == c.prompt && delete c.prompt;
        c.gsiwebsdk = "fedcm";
        c.ss_domain = a.ue;
        c.nonce || (c.nonce = "notprovided");
        return {
            identity: {
                providers: [{
                    configURL: _.qv(a.Ib, "fedcmConfigUrl"),
                    clientId: a.Vb,
                    scope: e,
                    responseType: b.responseType.split(" "),
                    params: c
                }],
                mode: "button"
            },
            mediation: "required"
        }
    }
    ;
    Dw = function(a, b) {
        if (!a.Vb)
            throw Error("xa");
        b = Cw(a, b);
        navigator.credentials.get(b).then(function(c) {
            c = JSON.parse(c.token);
            var d = {
                client_id: c.client_id,
                login_hint: c.login_hint,
                expires_in: 3600,
                scope: c.scope
            };
            c.code && (d.code = c.code);
            c.id_token && (d.id_token = c.id_token);
            a.xp({
                type: _.Sv.rt,
                idpId: a.Ib,
                authResult: d
            })
        }, function(c) {
            a.xp({
                type: _.Sv.rt,
                idpId: a.Ib,
                authResult: {
                    error: c
                }
            })
        })
    }
    ;
    Ew = function(a, b, c) {
        a.Wk ? c(a.Io()) : _.bw(a, a.XV, [b, c])
    }
    ;
    _.Fw = function(a) {
        for (var b = [], c = 0, d = 0; c < a.length; ) {
            var e = a[c++];
            if (128 > e)
                b[d++] = String.fromCharCode(e);
            else if (191 < e && 224 > e) {
                var f = a[c++];
                b[d++] = String.fromCharCode((e & 31) << 6 | f & 63)
            } else if (239 < e && 365 > e) {
                f = a[c++];
                var h = a[c++]
                  , k = a[c++];
                e = ((e & 7) << 18 | (f & 63) << 12 | (h & 63) << 6 | k & 63) - 65536;
                b[d++] = String.fromCharCode(55296 + (e >> 10));
                b[d++] = String.fromCharCode(56320 + (e & 1023))
            } else
                f = a[c++],
                h = a[c++],
                b[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | h & 63)
        }
        return b.join("")
    }
    ;
    Gw = function(a) {
        var b = [];
        _.zi(a, function(c) {
            b.push(c)
        });
        return b
    }
    ;
    _.Hw = function(a, b) {
        _.ij[b || "token"] = a
    }
    ;
    _.Iw = function(a) {
        delete _.ij[a || "token"]
    }
    ;
    _.lv = {
        parse: function(a) {
            a = _.Kg("[" + String(a) + "]");
            if (!1 === a || 1 !== a.length)
                throw new SyntaxError("JSON parsing failed.");
            return a[0]
        },
        stringify: function(a) {
            return _.Lg(a)
        }
    };
    _.lw.prototype.qG = function(a, b) {
        _.bw(this, this.N7, [a, b])
    }
    ;
    _.lw.prototype.N7 = function(a, b) {
        this.ee.qG(this.Vb, a, this.Uj, this.Ue, b)
    }
    ;
    _.Kv.prototype.qG = function(a, b, c, d, e) {
        c = _.gv(c);
        _.Nv(this, "gsi:fetchLoginHint", {
            clientId: a,
            loginHint: b,
            request: c,
            sessionSelector: d
        }, e)
    }
    ;
    var Jw, Kw = ["client_id", "cookie_policy", "scope"], Lw = "client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent include_granted_scopes response_type session_selection plugin_name ack_extension_date gsiwebsdk".split(" "), Mw = ["authuser", "after_redirect", "access_type", "hl"], Nw = ["login_hint", "prompt"], Ow = {
        clientid: "client_id",
        cookiepolicy: "cookie_policy"
    }, Pw = ["approval_prompt", "authuser", "login_hint", "prompt", "hd"], Qw = ["login_hint", "g-oauth-window", "status"], Rw = Math.min(_.Gf("oauth-flow/authWindowWidth", 599), screen.width - 20), Sw = Math.min(_.Gf("oauth-flow/authWindowHeight", 600), screen.height - 30);
    var Tw = function(a) {
        _.kb.call(this, a)
    };
    _.C(Tw, _.kb);
    Tw.prototype.name = "gapi.auth2.ExternallyVisibleError";
    var Uw = function() {};
    Uw.prototype.select = function(a, b) {
        if (a.sessions && 1 == a.sessions.length && (a = a.sessions[0],
        a.login_hint)) {
            b(a);
            return
        }
        b()
    }
    ;
    var Vw = function() {};
    Vw.prototype.select = function(a, b) {
        if (a.sessions && a.sessions.length)
            for (var c = 0; c < a.sessions.length; c++) {
                var d = a.sessions[c];
                if (d.login_hint) {
                    b(d);
                    return
                }
            }
        b()
    }
    ;
    var Ww = function(a) {
        this.f6 = a
    };
    Ww.prototype.select = function(a, b) {
        if (a.sessions)
            for (var c = 0; c < a.sessions.length; c++) {
                var d = a.sessions[c];
                if (d.session_state && d.session_state.extraQueryParams && d.session_state.extraQueryParams.authuser == this.f6) {
                    d.login_hint ? b(d) : b();
                    return
                }
            }
        b()
    }
    ;
    var Xw = function(a) {
        this.Ge = a;
        this.XC = []
    };
    Xw.prototype.select = function(a) {
        var b = 0
          , c = this
          , d = function(e) {
            if (e)
                a(e);
            else {
                var f = c.XC[b];
                f ? (b++,
                c.Ge.qB(function(h) {
                    h ? f.select(h, d) : d()
                })) : a()
            }
        };
        d()
    }
    ;
    var Yw = function(a) {
        a = new Xw(a);
        a.XC.push(new Uw);
        return a
    }
      , Zw = function(a) {
        a = new Xw(a);
        a.XC.push(new Vw);
        return a
    }
      , $w = function(a, b) {
        void 0 === b || null === b ? b = Yw(a) : (a = new Xw(a),
        a.XC.push(new Ww(b)),
        b = a);
        return b
    };
    var ax = function(a) {
        this.Wf = a;
        this.isActive = !0
    };
    ax.prototype.remove = function() {
        this.isActive = !1
    }
    ;
    ax.prototype.trigger = function() {}
    ;
    var bx = function(a) {
        this.remove = function() {
            a.remove()
        }
        ;
        this.trigger = function() {
            a.trigger()
        }
    }
      , cx = function() {
        this.xc = []
    };
    cx.prototype.add = function(a) {
        this.xc.push(a)
    }
    ;
    cx.prototype.notify = function(a) {
        for (var b = this.xc, c = [], d = 0; d < b.length; d++) {
            var e = b[d];
            e.isActive && (c.push(e),
            _.Lk(dx(e.Wf, a)))
        }
        this.xc = c
    }
    ;
    var dx = function(a, b) {
        return function() {
            a(b)
        }
    };
    var fx = function(a) {
        this.Ca = null;
        this.Jga = new ex(this);
        this.xc = new cx;
        void 0 != a && this.set(a)
    };
    fx.prototype.set = function(a) {
        a != this.Ca && (this.Ca = a,
        this.Jga.value = a,
        this.xc.notify(this.Ca))
    }
    ;
    fx.prototype.get = function() {
        return this.Ca
    }
    ;
    fx.prototype.ma = function(a) {
        a = new gx(this,a);
        this.xc.add(a);
        return a
    }
    ;
    fx.prototype.get = fx.prototype.get;
    var gx = function(a, b) {
        ax.call(this, b);
        this.wba = a
    };
    _.C(gx, ax);
    gx.prototype.trigger = function() {
        var a = this.Wf;
        a(this.wba.get())
    }
    ;
    var ex = function(a) {
        this.value = null;
        this.ma = function(b) {
            return new bx(a.ma(b))
        }
    };
    var hx = {
        aja: "fetch_basic_profile",
        cka: "login_hint",
        Bla: "prompt",
        Hla: "redirect_uri",
        Zla: "scope",
        vna: "ux_mode",
        Lma: "state"
    }
      , ix = function(a) {
        this.Oa = {};
        if (a && !_.qi(a))
            if ("function" == typeof a.get)
                this.Oa = a.get();
            else
                for (var b in hx) {
                    var c = hx[b];
                    c in a && (this.Oa[c] = a[c])
                }
    };
    ix.prototype.get = function() {
        return this.Oa
    }
    ;
    ix.prototype.SZ = function(a) {
        this.Oa.scope = a;
        return this
    }
    ;
    ix.prototype.Tu = function() {
        return this.Oa.scope
    }
    ;
    var jx = function(a, b) {
        var c = a.Oa.scope;
        b = ow(b.split(" "), c ? c.split(" ") : []);
        _.Bk(b);
        a.Oa.scope = b.join(" ")
    };
    _.g = ix.prototype;
    _.g.mfa = function(a) {
        this.Oa.prompt = a;
        return this
    }
    ;
    _.g.o9 = function() {
        return this.Oa.prompt
    }
    ;
    _.g.Oea = function() {
        _.Pg.warn("Property app_package_name no longer supported and was not set");
        return this
    }
    ;
    _.g.k8 = function() {
        _.Pg.warn("Property app_package_name no longer supported")
    }
    ;
    _.g.Jf = function(a) {
        this.Oa.state = a
    }
    ;
    _.g.getState = function() {
        return this.Oa.state
    }
    ;
    var kx = function() {
        return ["toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + Rw, "height=" + Sw, "top=" + (screen.height - Sw) / 2, "left=" + (screen.width - Rw) / 2].join()
    }
      , lx = function(a) {
        a = a && a.id_token;
        if (!a || !a.split(".")[1])
            return null;
        a = (a.split(".")[1] + "...").replace(/^((....)+).?.?.?$/, "$1");
        return JSON.parse(_.Fw(Gw(a)))
    }
      , mx = function() {
        Jw = _.Gf("auth2/idpValue", "google");
        var a = _.Gf("oauth-flow/authUrl", "https://accounts.google.com/o/oauth2/auth")
          , b = _.Gf("oauth-flow/idpIframeUrl", "https://accounts.google.com/o/oauth2/iframe");
        a = {
            fedcmConfigUrl: _.Gf("oauth-flow/fedcmConfigUrl", "https://accounts.google.com/o/fedcm/config.json"),
            authServerUrl: a,
            idpIFrameUrl: b
        };
        _.rv(Jw, a)
    }
      , nx = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (d === b.length - 1) {
                a[e] = c;
                break
            }
            _.qc(a[e]) || (a[e] = {});
            a = a[e]
        }
    }
      , ox = function() {
        var a = window.location.origin;
        a || (a = window.location.protocol + "//" + window.location.host);
        return a
    }
      , qx = function() {
        var a = px();
        a.storage_path && window.sessionStorage.setItem(a.storage_path, ox() + window.location.pathname);
        if ("enforced" == a.status.toLowerCase())
            throw new Tw("gapi.auth2 is disabled on this website, but it is still used on page " + window.location.href);
        "informational" == a.status.toLowerCase() && _.Pg.warn("gapi.auth2 is disabled on this website, but it is still used on page " + window.location.href)
    };
    var rx = function(a) {
        var b = a ? (b = lx(a)) ? b.sub : null : null;
        this.Ha = b;
        this.Tc = a ? _.Ck(a) : null
    };
    _.g = rx.prototype;
    _.g.getId = function() {
        return this.Ha
    }
    ;
    _.g.OG = function() {
        var a = lx(this.Tc);
        return a ? a.hd : null
    }
    ;
    _.g.Lg = function() {
        return !!this.Tc
    }
    ;
    _.g.ym = function(a) {
        if (a)
            return this.Tc;
        a = sx;
        var b = _.Ck(this.Tc);
        !a.VA || a.LH || a.W$ || (delete b.access_token,
        delete b.scope);
        return b
    }
    ;
    _.g.kK = function() {
        return sx.kK()
    }
    ;
    _.g.Gl = function() {
        this.Tc = null
    }
    ;
    _.g.N8 = function() {
        return this.Tc ? this.Tc.scope : null
    }
    ;
    _.g.update = function(a) {
        this.Ha = a.Ha;
        this.Tc = a.Tc;
        this.Tc.id_token ? this.sy = new tx(this.Tc) : this.sy && (this.sy = null)
    }
    ;
    var ux = function(a) {
        return a.Tc && "object" == typeof a.Tc.session_state ? _.Ck(a.Tc.session_state.extraQueryParams || {}) : {}
    };
    _.g = rx.prototype;
    _.g.DG = function() {
        var a = ux(this);
        return a && void 0 !== a.authuser && null !== a.authuser ? a.authuser : null
    }
    ;
    _.g.Fl = function(a) {
        var b = sx
          , c = new ix(a);
        b.LH = c.Tu() ? !0 : !1;
        sx.VA && jx(c, "openid profile email");
        return new _.Wk(function(d, e) {
            var f = ux(this);
            f.login_hint = this.getId();
            f.scope = c.Tu();
            vx(b, d, e, f)
        }
        ,this)
    }
    ;
    _.g.Wu = function(a) {
        return new _.Wk(function(b, c) {
            var d = a || {}
              , e = sx;
            d.login_hint = this.getId();
            e.Wu(d).then(b, c)
        }
        ,this)
    }
    ;
    _.g.J9 = function(a) {
        return this.Fl(a)
    }
    ;
    _.g.disconnect = function() {
        return sx.disconnect()
    }
    ;
    _.g.m8 = function() {
        return this.sy
    }
    ;
    _.g.CA = function(a) {
        if (!this.Lg())
            return !1;
        var b = this.Tc && this.Tc.scope ? this.Tc.scope.split(" ") : "";
        return _.Xc(a ? a.split(" ") : [], function(c) {
            return _.ob(b, c)
        })
    }
    ;
    var tx = function(a) {
        a = lx(a);
        this.f8 = a.sub;
        this.hg = a.name;
        this.E9 = a.given_name;
        this.L7 = a.family_name;
        this.HU = a.picture;
        this.kz = a.email
    };
    _.g = tx.prototype;
    _.g.getId = function() {
        return this.f8
    }
    ;
    _.g.Hg = function() {
        return this.hg
    }
    ;
    _.g.L8 = function() {
        return this.E9
    }
    ;
    _.g.E8 = function() {
        return this.L7
    }
    ;
    _.g.U8 = function() {
        return this.HU
    }
    ;
    _.g.Co = function() {
        return this.kz
    }
    ;
    var px, wx;
    px = function() {
        var a = _.Yi.get("G_AUTH2_MIGRATION");
        if (!a)
            return {
                status: "none"
            };
        a = /(enforced|informational)(?::(.*))?/i.exec(a);
        return a ? {
            status: a[1].toLowerCase(),
            storage_path: a[2]
        } : (_.Pg.warn("The G_AUTH2_MIGRATION cookie value is not valid."),
        {
            status: "none"
        })
    }
    ;
    wx = function(a) {
        var b = location;
        if (a && "none" != a)
            return "single_host_origin" == a ? b.protocol + "//" + b.host : a
    }
    ;
    _.xx = function(a) {
        if (!a)
            throw new Tw("No cookiePolicy");
        var b = window.location.hostname;
        "single_host_origin" == a && (a = window.location.protocol + "//" + b);
        if ("none" == a)
            return null;
        var c = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a);
        if (!c)
            throw new Tw("Invalid cookiePolicy");
        a = c[2];
        c = c[1];
        var d = {};
        d.dotValue = a.split(".").length;
        d.isSecure = -1 != c.indexOf("https");
        d.domain = a;
        if (!_.Lj(b, "." + a) && !_.Lj(b, a))
            throw new Tw("Invalid cookiePolicy domain");
        return d
    }
    ;
    var zx = function(a) {
        var b = a || {}
          , c = yx();
        _.Sc(Lw, function(d) {
            "undefined" === typeof b[d] && "undefined" !== typeof c[d] && (b[d] = c[d])
        });
        return b
    }
      , yx = function() {
        for (var a = {}, b = document.getElementsByTagName("meta"), c = 0; c < b.length; ++c)
            if (b[c].name) {
                var d = b[c].name;
                if (0 == d.indexOf("google-signin-")) {
                    d = d.substring(14);
                    var e = b[c].content;
                    Ow[d] && (d = Ow[d]);
                    _.ob(Lw, d) && e && (a[d] = "true" == e ? !0 : "false" == e ? !1 : e)
                }
            }
        return a
    }
      , Ax = function(a) {
        return String(a).replace(/_([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
      , Bx = function(a) {
        _.Sc(Lw, function(b) {
            var c = Ax(b);
            "undefined" !== typeof a[c] && "undefined" === typeof a[b] && (a[b] = a[c],
            delete a[c])
        })
    }
      , Cx = function(a) {
        a = zx(a);
        Bx(a);
        a.cookie_policy || (a.cookie_policy = "single_host_origin");
        var b = Lw + Mw, c;
        for (c in a)
            0 > b.indexOf(c) && delete a[c];
        return a
    }
      , Dx = function(a, b) {
        if (!a)
            throw new Tw("Empty initial options.");
        for (var c = 0; c < Kw.length; ++c)
            if (!(b && "scope" == Kw[c] || a[Kw[c]]))
                throw new Tw("Missing required parameter '" + Kw[c] + "'");
        _.xx(a.cookie_policy)
    }
      , Fx = function(a) {
        var b = {
            authParameters: {
                redirect_uri: void 0,
                response_type: "token id_token",
                scope: a.scope,
                "openid.realm": a.openid_realm,
                include_granted_scopes: !0
            },
            clientId: a.client_id,
            crossSubDomains: !0,
            domain: wx(a.cookie_policy),
            disableTokenRefresh: !!a.disable_token_refresh,
            idpId: Jw
        };
        Ex(b, a);
        _.Sc(Nw, function(d) {
            a[d] && (b.authParameters[d] = a[d])
        });
        "boolean" == typeof a.enable_serial_consent && (b.enableSerialConsent = a.enable_serial_consent);
        if (a.plugin_name)
            b.pluginName = a.plugin_name;
        else {
            var c = _.Gf("auth2/pluginName");
            c && (b.pluginName = c)
        }
        a.ack_extension_date && (b.authParameters.ack_extension_date = a.ack_extension_date,
        b.ackExtensionDate = a.ack_extension_date);
        return b
    }
      , Ex = function(a, b) {
        var c = b.oidc_spec_compliant;
        b = b.nonce;
        c && (a.spec_compliant = c,
        b = b || pw());
        b && (a.authParameters.nonce = b,
        a.forceTokenRefresh = !0,
        a.skipTokenCache = !0)
    }
      , Kx = function(a) {
        var b = a.client_id
          , c = a.cookie_policy
          , d = a.scope
          , e = a.openid_realm
          , f = a.hosted_domain
          , h = a.oidc_spec_compliant
          , k = a.nonce
          , l = Gx(a)
          , m = {
            authParameters: {
                response_type: l,
                scope: d,
                "openid.realm": e
            },
            rpcAuthParameters: {
                response_type: l,
                scope: d,
                "openid.realm": e
            },
            clientId: b,
            crossSubDomains: !0,
            domain: wx(c),
            idpId: Jw
        };
        f && (m.authParameters.hd = f,
        m.rpcAuthParameters.hd = f);
        h && (m.rpcAuthParameters.spec_compliant = h,
        k = k || pw());
        k && (m.authParameters.nonce = k,
        m.rpcAuthParameters.nonce = k,
        m.forceTokenRefresh = !0,
        m.skipTokenCache = !0);
        _.Sc(Nw.concat(Mw), function(n) {
            a[n] && (m.authParameters[n] = a[n])
        });
        void 0 !== a.authuser && null !== a.authuser && (m.authParameters.authuser = a.authuser);
        "boolean" == typeof a.include_granted_scopes && (b = new Hx(a.response_type || "token"),
        Ix(b) && (m.authParameters.include_granted_scopes = a.include_granted_scopes),
        Jx(b) && (m.rpcAuthParameters.include_granted_scopes = a.include_granted_scopes,
        !1 === a.include_granted_scopes && (m.forceTokenRefresh = !0,
        m.skipTokenCache = !0)));
        "boolean" == typeof a.enable_serial_consent && (m.enableSerialConsent = a.enable_serial_consent);
        a.plugin_name ? m.pluginName = a.plugin_name : (b = _.Gf("auth2/pluginName")) && (m.pluginName = b);
        a.ack_extension_date && (m.authParameters.ack_extension_date = a.ack_extension_date,
        m.rpcAuthParameters.ack_extension_date = a.ack_extension_date,
        m.ackExtensionDate = a.ack_extension_date);
        return m
    }
      , Gx = function(a) {
        a = new Hx(a.response_type || "token");
        var b = [];
        Jx(a) && b.push("token");
        Lx(a, "id_token") && b.push("id_token");
        0 == b.length && (b = ["token", "id_token"]);
        return b.join(" ")
    }
      , Mx = ["permission", "id_token"]
      , Nx = /(^|[^_])token/
      , Hx = function(a) {
        this.zs = [];
        this.cI(a)
    };
    Hx.prototype.cI = function(a) {
        a ? ((0 <= a.indexOf("permission") || a.match(Nx)) && this.zs.push("permission"),
        0 <= a.indexOf("id_token") && this.zs.push("id_token"),
        0 <= a.indexOf("code") && this.zs.push("code")) : this.zs = Mx
    }
    ;
    var Ix = function(a) {
        return Lx(a, "code")
    }
      , Jx = function(a) {
        return Lx(a, "permission")
    };
    Hx.prototype.toString = function() {
        return this.zs.join(" ")
    }
    ;
    var Lx = function(a, b) {
        var c = !1;
        _.Sc(a.zs, function(d) {
            d == b && (c = !0)
        });
        return c
    };
    var Px = function(a, b, c) {
        this.wp = b;
        this.jca = a;
        for (var d in a)
            a.hasOwnProperty(d) && Ox(this, d);
        if (c && c.length)
            for (a = 0; a < c.length; a++)
                this[c[a]] = this.wp[c[a]]
    }
      , Ox = function(a, b) {
        a[b] = function() {
            return a.jca[b].apply(a.wp, arguments)
        }
    };
    Px.prototype.then = function(a, b, c) {
        var d = this;
        return _.$k().then(function() {
            return Qx(d.wp, a, b, c)
        })
    }
    ;
    _.Fk(Px);
    var sx, Rx, Tx;
    sx = null;
    _.Sx = function() {
        return sx ? Rx() : null
    }
    ;
    Rx = function() {
        return new Px(Tx.prototype,sx,["currentUser", "isSignedIn"])
    }
    ;
    Tx = function(a) {
        delete a.include_granted_scopes;
        this.Oa = Fx(a);
        this.W6 = a.cookie_policy;
        this.W$ = !!a.scope;
        (this.VA = !1 !== a.fetch_basic_profile) && (this.Oa.authParameters.scope = Ux(this, "openid profile email"));
        if (_.Vi.GSI_SUPPORT_BLOCKED_3P_COOKIES || "1" === _.Yi.get("GSI_ALLOW_3PCD"))
            this.Oa.supportBlocked3PCookies = !0;
        this.pv = a.hosted_domain;
        this.Gga = a.ux_mode || "popup";
        this.nC = a.redirect_uri || null;
        this.bp()
    }
    ;
    Tx.prototype.bp = function() {
        this.currentUser = new fx(new rx(null));
        this.isSignedIn = new fx(!1);
        this.Ge = new _.jw(this.Oa);
        this.bB = this.Kr = null;
        this.iba = new _.Wk(function(a, b) {
            this.Kr = a;
            this.bB = b
        }
        ,this);
        this.PB = {};
        this.zv = !0;
        Vx(this);
        this.Ge.start()
    }
    ;
    var Vx = function(a) {
        a.Ge.addEventListener("error", function(b) {
            a.zv && a.Kr && (a.zv = !1,
            a.bB({
                error: b.error,
                details: b.details
            }),
            a.Kr = null,
            a.bB = null)
        });
        a.Ge.addEventListener("authResult", function(b) {
            b && b.authResult && a.Qf(b);
            a.Ge.Ku()(b)
        });
        a.Ge.addEventListener("tokenReady", function(b) {
            var c = new rx(b.response);
            if (a.pv && a.pv != c.OG())
                a.Qf({
                    type: "tokenFailed",
                    reason: "Account domain does not match hosted_domain specified by gapi.auth2.init.",
                    accountDomain: c.OG(),
                    expectedDomain: a.pv
                });
            else {
                a.currentUser.get().update(c);
                var d = a.currentUser;
                d.xc.notify(d.Ca);
                a.isSignedIn.set(!0);
                c = c.DG();
                (d = _.xx(a.W6)) && c && _.Yi.set(["G_AUTHUSER_", "https:" === window.location.protocol && d.zf ? "S" : "H", d.jj].join(""), c, {
                    domain: d.domain,
                    secure: d.isSecure
                });
                _.Hw(b.response);
                a.Qf(b)
            }
        });
        a.Ge.addEventListener("noSessionBound", function(b) {
            a.zv && b.autoOpenAuthUrl ? (a.zv = !1,
            Yw(a.Ge).select(function(c) {
                if (c && c.login_hint) {
                    var d = a.Ge;
                    _.bw(d, d.ED, [c.login_hint, !0])
                } else
                    a.currentUser.set(new rx(null)),
                    a.isSignedIn.set(!1),
                    _.Iw(),
                    a.Qf(b)
            })) : (a.currentUser.set(new rx(null)),
            a.isSignedIn.set(!1),
            _.Iw(),
            a.Qf(b))
        });
        a.Ge.addEventListener("tokenFailed", function(b) {
            a.Qf(b)
        });
        a.Ge.addEventListener("userLoggedOut", function(b) {
            a.currentUser.get().Gl();
            var c = a.currentUser;
            c.xc.notify(c.Ca);
            a.isSignedIn.set(!1);
            _.Iw();
            a.Qf(b)
        })
    }
      , Qx = function(a, b, c, d) {
        return a.iba.then(function(e) {
            if (b)
                return b(e.H9)
        }, c, d)
    };
    Tx.prototype.Qf = function(a) {
        if (a) {
            this.zv = !1;
            var b = a.type || "";
            if (this.PB[b])
                this.PB[b](a);
            this.Kr && (this.Kr({
                H9: this
            }),
            this.bB = this.Kr = null)
        }
    }
    ;
    var Wx = function(a, b) {
        _.sb(b, function(c, d) {
            a.PB[d] = function(e) {
                a.PB = {};
                c(e)
            }
        })
    }
      , vx = function(a, b, c, d) {
        d = _.Ck(d);
        a.pv && (d.hd = a.pv);
        var e = d.ux_mode || a.Gga;
        delete d.ux_mode;
        delete d.app_package_name;
        var f = {
            sessionMeta: {
                extraQueryParams: d
            },
            responseType: "permission id_token"
        };
        "redirect" == e ? (d.redirect_uri || (d.redirect_uri = a.nC || ox() + window.location.pathname),
        Xx(a, f)) : (delete d.redirect_uri,
        Yx(a, f),
        Wx(a, {
            authResult: function(h) {
                h.authResult && h.authResult.error ? c(h.authResult) : Wx(a, {
                    tokenReady: function() {
                        b(a.currentUser.get())
                    },
                    tokenFailed: c
                })
            }
        }))
    };
    Tx.prototype.Fl = function(a) {
        return new _.Wk(function(b, c) {
            var d = new ix(a);
            this.LH = d.Tu() ? !0 : !1;
            this.VA ? (d.Oa.fetch_basic_profile = !0,
            jx(d, "email profile openid")) : d.Oa.fetch_basic_profile = !1;
            var e = Ux(this, d.Tu());
            d.SZ(e);
            vx(this, b, c, d.get())
        }
        ,this)
    }
    ;
    Tx.prototype.Wu = function(a) {
        var b = a || {};
        this.LH = !!b.scope;
        a = Ux(this, b.scope);
        if ("" == a)
            return _.al({
                error: "Missing required parameter: scope"
            });
        var c = {
            scope: a,
            access_type: "offline",
            include_granted_scopes: !0
        };
        _.Sc(Pw, function(d) {
            null != b[d] && (c[d] = b[d])
        });
        c.hasOwnProperty("prompt") || c.hasOwnProperty("approval_prompt") || (c.prompt = "consent");
        "postmessage" == b.redirect_uri || void 0 == b.redirect_uri ? a = Zx(this, c) : (c.redirect_uri = b.redirect_uri,
        Xx(this, {
            sessionMeta: {
                extraQueryParams: c
            },
            responseType: "code id_token"
        }),
        a = _.$k({
            message: "Redirecting to IDP."
        }));
        return a
    }
    ;
    var Zx = function(a, b) {
        b.origin = ox();
        delete b.redirect_uri;
        Yx(a, {
            sessionMeta: {
                extraQueryParams: b
            },
            responseType: "code permission id_token"
        });
        return new _.Wk(function(c, d) {
            Wx(this, {
                authResult: function(e) {
                    (e = e && e.authResult) && e.code ? c({
                        code: e.code
                    }) : d(e && e.error ? e : {
                        error: "unknown_error"
                    })
                }
            })
        }
        ,a)
    }
      , Yx = function(a, b) {
        nx(b, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
        a = a.Ge;
        var c = kx();
        a.dt && ww() ? Dw(a, b) : Bw(a, c, b)
    }
      , Xx = function(a, b) {
        nx(b, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
        a = a.Ge;
        b = b || {};
        a.dt && ww() ? (a.nC = b.sessionMeta.extraQueryParams.redirect_uri,
        Dw(a, b)) : window.location.assign(zw(a, b.sessionMeta, b.responseType))
    };
    Tx.prototype.Gl = function(a) {
        var b = a || !1;
        return new _.Wk(function(c) {
            sw(this.Ge, b, function() {
                c()
            })
        }
        ,this)
    }
    ;
    Tx.prototype.aT = function() {
        return this.Oa.authParameters.scope
    }
    ;
    var Ux = function(a, b) {
        a = a.aT();
        b = ow(b ? b.split(" ") : [], a ? a.split(" ") : []);
        _.Bk(b);
        return b.join(" ")
    };
    Tx.prototype.kK = function() {
        var a = this;
        return new _.Wk(function(b, c) {
            Wx(a, {
                noSessionBound: c,
                tokenFailed: c,
                userLoggedOut: c,
                tokenReady: function(d) {
                    b(d.response)
                }
            });
            a.Ge.tS()
        }
        )
    }
    ;
    Tx.prototype.uP = function(a, b, c, d) {
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            var e = this;
            _.ek(a, "click", function() {
                var f = b;
                "function" == typeof b && (f = b());
                e.Fl(f).then(function(h) {
                    c && c(h)
                }, function(h) {
                    d && d(h)
                })
            })
        } else
            d && d({
                error: "Could not attach click handler to the element. Reason: element not found."
            })
    }
    ;
    Tx.prototype.disconnect = function() {
        return new _.Wk(function(a) {
            this.Ge.revoke(function() {
                a()
            })
        }
        ,this)
    }
    ;
    Tx.prototype.attachClickHandler = Tx.prototype.uP;
    var $x;
    _.Wk.prototype["catch"] = _.Wk.prototype.ix;
    $x = null;
    _.ay = function(a) {
        qx();
        a = Cx(a);
        if (sx) {
            if (_.$u(a, $x || {}))
                return Rx();
            throw new Tw("gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init().");
        }
        Dx(a, !1 !== a.fetch_basic_profile);
        mx();
        $x = a;
        sx = new Tx(a);
        _.yf.ga = 1;
        return Rx()
    }
    ;
    var cy, ey, by, py, oy, qy;
    _.dy = function(a, b) {
        qx();
        mx();
        a = Cx(a);
        Dx(a);
        var c = Kx(a);
        if (_.Vi.GSI_SUPPORT_BLOCKED_3P_COOKIES || "1" === _.Yi.get("GSI_ALLOW_3PCD"))
            c.supportBlocked3PCookies = !0;
        var d = new _.lw(c);
        "none" == a.prompt ? by(d, a, function(e) {
            e.status = e.error ? {
                signed_in: !1,
                method: null,
                google_logged_in: !1
            } : {
                signed_in: !0,
                method: "AUTO",
                google_logged_in: !0
            };
            b(e)
        }) : cy(d, a, function(e) {
            if (e.error)
                e.status = {
                    signed_in: !1,
                    method: null,
                    google_logged_in: !1
                };
            else {
                var f = e.access_token || e.id_token;
                e.status = {
                    signed_in: !!f,
                    method: "PROMPT",
                    google_logged_in: !!f
                }
            }
            e["g-oauth-window"] = d.QX.Mi;
            b(e)
        })
    }
    ;
    cy = function(a, b, c) {
        var d = new Hx(b.response_type);
        c = ey(a, d, c);
        var e = {
            responseType: d.toString()
        };
        nx(e, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], b.gsiwebsdk || "2");
        Ix(d) && nx(e, ["sessionMeta", "extraQueryParams", "access_type"], b.access_type || "offline");
        b.redirect_uri && nx(e, ["sessionMeta", "extraQueryParams", "redirect_uri"], b.redirect_uri);
        b.state && nx(e, ["sessionMeta", "extraQueryParams", "state"], b.state);
        b = kx();
        a.Wk ? c({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.Io().error
            }
        }) : (a.Sn = c,
        a.dt && ww() ? Dw(a, e) : Bw(a, b, e))
    }
    ;
    ey = function(a, b, c) {
        if (Jx(b)) {
            var d = oy(c);
            return function(e) {
                e && e.authResult && !e.authResult.error ? a.Ku(function(f) {
                    f && !f.error ? (f = _.Ck(f),
                    Ix(b) && (f.code = e.authResult.code),
                    d(f)) : d(f ? f : {
                        error: "unknown_error"
                    })
                })(e) : d(e && e.authResult ? e.authResult : {
                    error: "unknown_error"
                })
            }
        }
        return function(e) {
            e && e.authResult && !e.authResult.error ? c(_.Ck(e.authResult)) : c(e && e.authResult ? e.authResult : {
                error: "unknown_error"
            })
        }
    }
    ;
    by = function(a, b, c) {
        if (Ix(new Hx(b.response_type)) && "offline" == b.access_type)
            c({
                error: "immediate_failed",
                error_subtype: "access_denied"
            });
        else {
            var d = oy(c);
            b.login_hint ? a.qG(b.login_hint, function(e) {
                e ? py(a, b, e, d) : c({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : void 0 !== b.authuser && null !== b.authuser ? $w(a, b.authuser).select(function(e) {
                e && e.login_hint ? py(a, b, e.login_hint, d) : d({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : a.Eu(function(e) {
                e && e.hint ? py(a, b, e.hint, d) : e && e.disabled ? d({
                    error: "immediate_failed",
                    error_subtype: "no_user_bound"
                }) : ("first_valid" == b.session_selection ? Zw(a) : Yw(a)).select(function(f) {
                    f && f.login_hint ? py(a, b, f.login_hint, d) : d({
                        error: "immediate_failed",
                        error_subtype: "no_user_bound"
                    })
                })
            })
        }
    }
    ;
    py = function(a, b, c, d) {
        b = new Hx(b.response_type);
        var e = 0
          , f = {}
          , h = function(k) {
            !k || k.error ? d(k) : (e--,
            _.yb(f, k),
            0 == e && d(f))
        };
        (Jx(b) || Lx(b, "id_token")) && e++;
        Ix(b) && e++;
        (Jx(b) || Lx(b, "id_token")) && _.mw(a, c, h);
        Ix(b) && Ew(a, c, h)
    }
    ;
    oy = function(a) {
        return function(b) {
            if (!b || b.error)
                _.Iw(),
                b ? a(b) : a({
                    error: "unknown_error"
                });
            else {
                if (b.access_token) {
                    var c = _.Ck(b);
                    qy(c);
                    delete c.id_token;
                    delete c.code;
                    _.Hw(c)
                }
                a(b)
            }
        }
    }
    ;
    qy = function(a) {
        _.Sc(Qw, function(b) {
            delete a[b]
        })
    }
    ;
    _.r("gapi.auth2.init", _.ay);
    _.r("gapi.auth2.authorize", function(a, b) {
        if (null != sx)
            throw new Tw("gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters).");
        _.dy(a, function(c) {
            qy(c);
            b(c)
        })
    });
    _.r("gapi.auth2._gt", function() {
        return _.jj()
    });
    _.r("gapi.auth2.enableDebugLogs", function(a) {
        a = !1 !== a;
        _.av = "0" != a && !!a
    });
    _.r("gapi.auth2.getAuthInstance", _.Sx);
    _.r("gapi.auth2.BasicProfile", tx);
    _.r("gapi.auth2.BasicProfile.prototype.getId", tx.prototype.getId);
    _.r("gapi.auth2.BasicProfile.prototype.getName", tx.prototype.Hg);
    _.r("gapi.auth2.BasicProfile.prototype.getGivenName", tx.prototype.L8);
    _.r("gapi.auth2.BasicProfile.prototype.getFamilyName", tx.prototype.E8);
    _.r("gapi.auth2.BasicProfile.prototype.getImageUrl", tx.prototype.U8);
    _.r("gapi.auth2.BasicProfile.prototype.getEmail", tx.prototype.Co);
    _.r("gapi.auth2.GoogleAuth", Tx);
    _.r("gapi.auth2.GoogleAuth.prototype.attachClickHandler", Tx.prototype.uP);
    _.r("gapi.auth2.GoogleAuth.prototype.disconnect", Tx.prototype.disconnect);
    _.r("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess", Tx.prototype.Wu);
    _.r("gapi.auth2.GoogleAuth.prototype.signIn", Tx.prototype.Fl);
    _.r("gapi.auth2.GoogleAuth.prototype.signOut", Tx.prototype.Gl);
    _.r("gapi.auth2.GoogleAuth.prototype.getInitialScopes", Tx.prototype.aT);
    _.r("gapi.auth2.GoogleUser", rx);
    _.r("gapi.auth2.GoogleUser.prototype.grant", rx.prototype.J9);
    _.r("gapi.auth2.GoogleUser.prototype.getId", rx.prototype.getId);
    _.r("gapi.auth2.GoogleUser.prototype.isSignedIn", rx.prototype.Lg);
    _.r("gapi.auth2.GoogleUser.prototype.getAuthResponse", rx.prototype.ym);
    _.r("gapi.auth2.GoogleUser.prototype.getBasicProfile", rx.prototype.m8);
    _.r("gapi.auth2.GoogleUser.prototype.getGrantedScopes", rx.prototype.N8);
    _.r("gapi.auth2.GoogleUser.prototype.getHostedDomain", rx.prototype.OG);
    _.r("gapi.auth2.GoogleUser.prototype.grantOfflineAccess", rx.prototype.Wu);
    _.r("gapi.auth2.GoogleUser.prototype.hasGrantedScopes", rx.prototype.CA);
    _.r("gapi.auth2.GoogleUser.prototype.reloadAuthResponse", rx.prototype.kK);
    _.r("gapi.auth2.LiveValue", fx);
    _.r("gapi.auth2.LiveValue.prototype.listen", fx.prototype.ma);
    _.r("gapi.auth2.LiveValue.prototype.get", fx.prototype.get);
    _.r("gapi.auth2.SigninOptionsBuilder", ix);
    _.r("gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName", ix.prototype.k8);
    _.r("gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName", ix.prototype.Oea);
    _.r("gapi.auth2.SigninOptionsBuilder.prototype.getScope", ix.prototype.Tu);
    _.r("gapi.auth2.SigninOptionsBuilder.prototype.setScope", ix.prototype.SZ);
    _.r("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt", ix.prototype.o9);
    _.r("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt", ix.prototype.mfa);
    _.r("gapi.auth2.SigninOptionsBuilder.prototype.get", ix.prototype.get);
    _.Yf = _.Yf || {};
    (function() {
        function a(b) {
            var c = "";
            if (3 == b.nodeType || 4 == b.nodeType)
                c = b.nodeValue;
            else if (b.innerText)
                c = b.innerText;
            else if (b.innerHTML)
                c = b.innerHTML;
            else if (b.firstChild) {
                c = [];
                for (b = b.firstChild; b; b = b.nextSibling)
                    c.push(a(b));
                c = c.join("")
            }
            return c
        }
        _.Yf.createElement = function(b) {
            if (!document.body || document.body.namespaceURI)
                try {
                    var c = document.createElementNS("http://www.w3.org/1999/xhtml", b)
                } catch (d) {}
            return c || document.createElement(b)
        }
        ;
        _.Yf.qQ = function(b) {
            var c = _.Yf.createElement("iframe");
            try {
                var d = ["<", "iframe"], e = b || {}, f;
                for (f in e)
                    e.hasOwnProperty(f) && (d.push(" "),
                    d.push(f),
                    d.push('="'),
                    d.push(_.Yf.bG(e[f])),
                    d.push('"'));
                d.push("></");
                d.push("iframe");
                d.push(">");
                var h = _.Yf.createElement(d.join(""));
                h && (!c || h.tagName == c.tagName && h.namespaceURI == c.namespaceURI) && (c = h)
            } catch (l) {}
            d = c;
            b = b || {};
            for (var k in b)
                b.hasOwnProperty(k) && (d[k] = b[k]);
            return c
        }
        ;
        _.Yf.FS = function() {
            if (document.body)
                return document.body;
            try {
                var b = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
                if (b && 1 == b.length)
                    return b[0]
            } catch (c) {}
            return document.documentElement || document
        }
        ;
        _.Yf.Opa = function(b) {
            return a(b)
        }
    }
    )();
    _.zh = window.gapi && window.gapi.util || {};
    _.zh = _.zh = {};
    _.zh.getOrigin = function(a) {
        return _.Bh(a)
    }
    ;
    _.Sy = function(a) {
        if (0 !== a.indexOf("GCSC"))
            return null;
        var b = {
            Ij: !1
        };
        a = a.substr(4);
        if (!a)
            return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if (-1 == d)
            return b;
        var e = _.Qy(a.substr(d + 1));
        if (null == e)
            return b;
        a = a.substring(0, d);
        if ("_" !== a.charAt(0))
            return b;
        d = "E" === c && e.zf;
        return !d && ("U" !== c || e.zf) || d && !_.Ry ? b : {
            Ij: !0,
            zf: d,
            K6: a.substr(1),
            domain: e.domain,
            jj: e.jj
        }
    }
    ;
    _.Ty = function(a, b) {
        this.hg = a;
        a = b || {};
        this.Nba = Number(a.maxAge) || 0;
        this.ue = a.domain;
        this.tn = a.path;
        this.zea = !!a.secure
    }
    ;
    _.Ty.prototype.read = function() {
        for (var a = this.hg + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (0 == d.indexOf(a))
                return d.substr(a.length)
        }
    }
    ;
    _.Ty.prototype.write = function(a, b) {
        if (!Uy.test(this.hg))
            throw "Invalid cookie name";
        if (!Vy.test(a))
            throw "Invalid cookie value";
        a = this.hg + "=" + a;
        this.ue && (a += ";domain=" + this.ue);
        this.tn && (a += ";path=" + this.tn);
        b = "number" === typeof b ? b : this.Nba;
        if (0 <= b) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.zea && (a += ";secure");
        document.cookie = a;
        return !0
    }
    ;
    _.Ty.prototype.clear = function() {
        this.write("", 0)
    }
    ;
    var Vy = /^[-+/_=.:|%&a-zA-Z0-9@]*$/
      , Uy = /^[A-Z_][A-Z0-9_]{0,63}$/;
    _.Ty.iterate = function(a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("=")
              , e = d.shift();
            a(e, d.join("="))
        }
    }
    ;
    _.Wy = function(a) {
        this.fe = a
    }
    ;
    _.Wy.prototype.read = function() {
        if (Xy.hasOwnProperty(this.fe))
            return Xy[this.fe]
    }
    ;
    _.Wy.prototype.write = function(a) {
        Xy[this.fe] = a;
        return !0
    }
    ;
    _.Wy.prototype.clear = function() {
        delete Xy[this.fe]
    }
    ;
    var Xy = {};
    _.Wy.iterate = function(a) {
        for (var b in Xy)
            Xy.hasOwnProperty(b) && a(b, Xy[b])
    }
    ;
    var Yy = function() {
        this.Ca = null;
        this.key = function() {
            return null
        }
        ;
        this.getItem = function() {
            return this.Ca
        }
        ;
        this.setItem = function(a, b) {
            this.Ca = b;
            this.length = 1
        }
        ;
        this.removeItem = function() {
            this.clear()
        }
        ;
        this.clear = function() {
            this.Ca = null;
            this.length = 0
        }
        ;
        this.length = 0
    }
      , Zy = function(a) {
        try {
            var b = a || window.sessionStorage;
            if (!b)
                return !1;
            b.setItem("gapi.sessionStorageTest", "gapi.sessionStorageTest" + b.length);
            b.removeItem("gapi.sessionStorageTest");
            return !0
        } catch (c) {
            return !1
        }
    }
      , $y = function(a, b) {
        this.hg = a;
        this.hN = Zy(b) ? b || window.sessionStorage : new Yy
    };
    $y.prototype.read = function() {
        return this.hN.getItem(this.hg)
    }
    ;
    $y.prototype.write = function(a) {
        try {
            this.hN.setItem(this.hg, a)
        } catch (b) {
            return !1
        }
        return !0
    }
    ;
    $y.prototype.clear = function() {
        this.hN.removeItem(this.hg)
    }
    ;
    $y.iterate = function(a) {
        if (Zy())
            for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
                var d = window.sessionStorage.key(b);
                a(d, window.sessionStorage[d])
            }
    }
    ;
    _.Ry = "https:" === window.location.protocol;
    _.az = _.Ry || "http:" === window.location.protocol ? _.Ty : _.Wy;
    _.Qy = function(a) {
        var b = a.substr(1)
          , c = ""
          , d = window.location.hostname;
        if ("" !== b) {
            c = parseInt(b, 10);
            if (isNaN(c))
                return null;
            b = d.split(".");
            if (b.length < c - 1)
                return null;
            b.length == c - 1 && (d = "." + d)
        } else
            d = "";
        return {
            zf: "S" == a.charAt(0),
            domain: d,
            jj: c
        }
    }
    ;
    var bz, cz, fz, gz;
    bz = _.mf();
    cz = _.mf();
    _.dz = _.mf();
    _.ez = _.mf();
    fz = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");
    gz = function(a) {
        this.KX = a;
        this.WI = null
    }
    ;
    gz.prototype.write = function(a) {
        var b = _.mf(), c = _.mf(), d = window.decodeURIComponent ? decodeURIComponent : unescape, e;
        for (e in a)
            if (_.nf(a, e)) {
                var f = a[e];
                f = f.replace(/\+/g, " ");
                c[e] = d(f);
                b[e] = a[e]
            }
        d = fz.length;
        for (e = 0; e < d; ++e)
            delete c[fz[e]];
        a = String(a.authuser || 0);
        d = _.mf();
        d[a] = c;
        c = _.Lg(d);
        this.KX.write(c);
        this.WI = b
    }
    ;
    gz.prototype.read = function() {
        return this.WI
    }
    ;
    gz.prototype.clear = function() {
        this.KX.clear();
        this.WI = _.mf()
    }
    ;
    _.hz = function(a) {
        return a ? {
            domain: a.domain,
            path: "/",
            secure: a.zf
        } : null
    }
    ;
    $y.iterate(function(a) {
        var b = _.Sy(a);
        b && b.Ij && (bz[a] = new gz(new $y(a)))
    });
    _.az.iterate(function(a) {
        bz[a] && (cz[a] = new _.az(a,_.hz(_.Sy(a))))
    });
    _.Zi = function() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            n = m = 0
        }
        function b(p) {
            for (var q = h, t = 0; 64 > t; t += 4)
                q[t / 4] = p[t] << 24 | p[t + 1] << 16 | p[t + 2] << 8 | p[t + 3];
            for (t = 16; 80 > t; t++)
                p = q[t - 3] ^ q[t - 8] ^ q[t - 14] ^ q[t - 16],
                q[t] = (p << 1 | p >>> 31) & 4294967295;
            p = e[0];
            var v = e[1]
              , u = e[2]
              , w = e[3]
              , x = e[4];
            for (t = 0; 80 > t; t++) {
                if (40 > t)
                    if (20 > t) {
                        var z = w ^ v & (u ^ w);
                        var G = 1518500249
                    } else
                        z = v ^ u ^ w,
                        G = 1859775393;
                else
                    60 > t ? (z = v & u | w & (v | u),
                    G = 2400959708) : (z = v ^ u ^ w,
                    G = 3395469782);
                z = ((p << 5 | p >>> 27) & 4294967295) + z + x + G + q[t] & 4294967295;
                x = w;
                w = u;
                u = (v << 30 | v >>> 2) & 4294967295;
                v = p;
                p = z
            }
            e[0] = e[0] + p & 4294967295;
            e[1] = e[1] + v & 4294967295;
            e[2] = e[2] + u & 4294967295;
            e[3] = e[3] + w & 4294967295;
            e[4] = e[4] + x & 4294967295
        }
        function c(p, q) {
            if ("string" === typeof p) {
                p = unescape(encodeURIComponent(p));
                for (var t = [], v = 0, u = p.length; v < u; ++v)
                    t.push(p.charCodeAt(v));
                p = t
            }
            q || (q = p.length);
            t = 0;
            if (0 == m)
                for (; t + 64 < q; )
                    b(p.slice(t, t + 64)),
                    t += 64,
                    n += 64;
            for (; t < q; )
                if (f[m++] = p[t++],
                n++,
                64 == m)
                    for (m = 0,
                    b(f); t + 64 < q; )
                        b(p.slice(t, t + 64)),
                        t += 64,
                        n += 64
        }
        function d() {
            var p = []
              , q = 8 * n;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var t = 63; 56 <= t; t--)
                f[t] = q & 255,
                q >>>= 8;
            b(f);
            for (t = q = 0; 5 > t; t++)
                for (var v = 24; 0 <= v; v -= 8)
                    p[q++] = e[t] >> v & 255;
            return p
        }
        for (var e = [], f = [], h = [], k = [128], l = 1; 64 > l; ++l)
            k[l] = 0;
        var m, n;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            hj: function() {
                for (var p = d(), q = "", t = 0; t < p.length; t++)
                    q += "0123456789ABCDEF".charAt(Math.floor(p[t] / 16)) + "0123456789ABCDEF".charAt(p[t] % 16);
                return q
            }
        }
    }
    ;
    var aj = function(a, b, c) {
        var d = String(_.Qa.location.href);
        return d && a && b ? [b, $i(_.Bh(d), a, c || null)].join(" ") : null
    }
      , $i = function(a, b, c) {
        var d = []
          , e = [];
        if (1 == (Array.isArray(c) ? 2 : 1))
            return e = [b, a],
            _.Sc(d, function(k) {
                e.push(k)
            }),
            bj(e.join(" "));
        var f = []
          , h = [];
        _.Sc(c, function(k) {
            h.push(k.key);
            f.push(k.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        _.Sc(d, function(k) {
            e.push(k)
        });
        a = bj(e.join(" "));
        a = [c, a];
        0 == h.length || a.push(h.join(""));
        return a.join("_")
    }
      , bj = function(a) {
        var b = _.Zi();
        b.update(a);
        return b.hj().toLowerCase()
    };
    var ej;
    _.cj = function(a) {
        return !!_.Vi.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    }
    ;
    _.dj = function(a) {
        a = void 0 === a ? !1 : a;
        var b = _.Qa.__SAPISID || _.Qa.__APISID || _.Qa.__3PSAPISID || _.Qa.__OVERRIDE_SID;
        _.cj(a) && (b = b || _.Qa.__1PSAPISID);
        if (b)
            return !0;
        if ("undefined" !== typeof document) {
            var c = new _.Wi(document);
            b = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID") || c.get("OSID");
            _.cj(a) && (b = b || c.get("__Secure-1PAPISID"))
        }
        return !!b
    }
    ;
    ej = function(a, b, c, d) {
        (a = _.Qa[a]) || "undefined" === typeof document || (a = (new _.Wi(document)).get(b));
        return a ? aj(a, c, d) : null
    }
    ;
    _.fj = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = _.Bh(String(_.Qa.location.href))
          , d = [];
        if (_.dj(b)) {
            c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:");
            var e = c ? _.Qa.__SAPISID : _.Qa.__APISID;
            e || "undefined" === typeof document || (e = new _.Wi(document),
            e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"));
            (e = e ? aj(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e);
            c && _.cj(b) && ((b = ej("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b),
            (a = ej("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a))
        }
        return 0 == d.length ? null : d.join(" ")
    }
    ;
    _.gj = function(a, b) {
        var c = {
            SAPISIDHASH: !0,
            SAPISID3PHASH: !0,
            APISIDHASH: !0
        };
        _.cj(void 0 === b ? !1 : b) && (c.SAPISID1PHASH = !0);
        return a && (a.OriginToken || a.Authorization && c[String(a.Authorization).split(" ")[0]]) ? !0 : !1
    }
    ;
    _.hj = {
        fU: _.gj,
        fba: _.dj,
        dT: function() {
            var a = null;
            _.dj() && (a = window.__PVT,
            null == a && (a = (new _.Wi(document)).get("BEAT")));
            return a
        },
        DS: _.fj
    };
    var Cs, Ds;
    _.ts = function(a) {
        var b = _.sc.apply(1, arguments);
        if (0 === b.length)
            return _.Pc(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return _.Pc(c)
    }
    ;
    _.us = function(a, b) {
        return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }
    ;
    _.vs = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    ;
    _.g = _.vs.prototype;
    _.g.clone = function() {
        return new _.vs(this.x,this.y)
    }
    ;
    _.g.equals = function(a) {
        return a instanceof _.vs && _.us(this, a)
    }
    ;
    _.g.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    _.g.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    _.g.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    _.g.translate = function(a, b) {
        a instanceof _.vs ? (this.x += a.x,
        this.y += a.y) : (this.x += Number(a),
        "number" === typeof b && (this.y += b));
        return this
    }
    ;
    _.g.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    }
    ;
    _.ws = function(a) {
        return a.scrollingElement ? a.scrollingElement : !_.ee && _.Pe(a) ? a.documentElement : a.body || a.documentElement
    }
    ;
    _.xs = function(a) {
        var b = _.ws(a);
        a = a.parentWindow || a.defaultView;
        return _.Zd && a.pageYOffset != b.scrollTop ? new _.vs(b.scrollLeft,b.scrollTop) : new _.vs(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    ;
    _.ys = function(a, b, c, d) {
        return _.Ke(a.Hb, b, c, d)
    }
    ;
    _.zs = function(a) {
        if (a instanceof _.td && a.constructor === _.td)
            return a.eY;
        _.wc(a);
        return "type_error:SafeStyle"
    }
    ;
    _.As = function(a) {
        if (a instanceof _.zd && a.constructor === _.zd)
            return a.dY;
        _.wc(a);
        return "type_error:SafeStyleSheet"
    }
    ;
    _.Bs = function(a) {
        return Number(_.we) >= a
    }
    ;
    Cs = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    ;
    Ds = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;
    _.Es = function(a, b, c) {
        return _.Te(document, arguments)
    }
    ;
    _.Fs = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ;
    _.g = _.Fs.prototype;
    _.g.Yb = function() {
        return this.right - this.left
    }
    ;
    _.g.Vc = function() {
        return this.bottom - this.top
    }
    ;
    _.g.clone = function() {
        return new _.Fs(this.top,this.right,this.bottom,this.left)
    }
    ;
    _.g.contains = function(a) {
        return this && a ? a instanceof _.Fs ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    _.g.expand = function(a, b, c, d) {
        _.qc(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += Number(b),
        this.bottom += Number(c),
        this.left -= Number(d));
        return this
    }
    ;
    _.g.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    _.g.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    _.g.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    _.g.translate = function(a, b) {
        a instanceof _.vs ? (this.left += a.x,
        this.right += a.x,
        this.top += a.y,
        this.bottom += a.y) : (this.left += a,
        this.right += a,
        "number" === typeof b && (this.top += b,
        this.bottom += b));
        return this
    }
    ;
    _.g.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    var Is, Gs, Ns, Qs, bt, Ps;
    _.Hs = function(a, b, c) {
        if ("string" === typeof b)
            (b = Gs(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = Gs(c, d);
                f && (c.style[f] = e)
            }
    }
    ;
    Is = {};
    Gs = function(a, b) {
        var c = Is[b];
        if (!c) {
            var d = Cs(b);
            c = d;
            void 0 === a.style[d] && (d = (_.ee ? "Webkit" : _.de ? "Moz" : _.Zd ? "ms" : null) + Ds(d),
            void 0 !== a.style[d] && (c = d));
            Is[b] = c
        }
        return c
    }
    ;
    _.Js = function(a, b) {
        var c = a.style[Cs(b)];
        return "undefined" !== typeof c ? c : a.style[Gs(a, b)] || ""
    }
    ;
    _.Ks = function(a, b) {
        var c = _.He(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    ;
    _.Ls = function(a, b) {
        return a.currentStyle ? a.currentStyle[b] : null
    }
    ;
    _.Ms = function(a, b) {
        return _.Ks(a, b) || _.Ls(a, b) || a.style && a.style[b]
    }
    ;
    Ns = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
    ;
    _.Rs = function(a, b) {
        b = b || _.ws(document);
        var c = b || _.ws(document);
        var d = _.Os(a)
          , e = _.Os(c);
        if (_.Zd && !_.Bs(9)) {
            var f = Ps(c, "borderLeft");
            var h = Ps(c, "borderRight");
            var k = Ps(c, "borderTop")
              , l = Ps(c, "borderBottom");
            h = new _.Fs(k,h,l,f)
        } else
            f = _.Ks(c, "borderLeftWidth"),
            h = _.Ks(c, "borderRightWidth"),
            k = _.Ks(c, "borderTopWidth"),
            l = _.Ks(c, "borderBottomWidth"),
            h = new _.Fs(parseFloat(k),parseFloat(h),parseFloat(l),parseFloat(f));
        c == _.ws(document) ? (f = d.x - c.scrollLeft,
        d = d.y - c.scrollTop,
        _.Zd && !_.Bs(10) && (f += h.left,
        d += h.top)) : (f = d.x - e.x - h.left,
        d = d.y - e.y - h.top);
        a = Qs(a);
        e = c.clientHeight - a.height;
        h = c.scrollLeft;
        k = c.scrollTop;
        h += Math.min(f, Math.max(f - (c.clientWidth - a.width), 0));
        k += Math.min(d, Math.max(d - e, 0));
        c = new _.vs(h,k);
        b.scrollLeft = c.x;
        b.scrollTop = c.y
    }
    ;
    _.Os = function(a) {
        var b = _.He(a)
          , c = new _.vs(0,0);
        var d = b ? _.He(b) : document;
        d = !_.Zd || _.Bs(9) || _.Pe(_.Ie(d).Hb) ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = Ns(a);
        b = _.xs(_.Ie(b).Hb);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    ;
    _.Ts = function(a, b) {
        var c = new _.vs(0,0)
          , d = _.Qe(_.He(a));
        if (!_.Xd(d, "parent"))
            return c;
        do {
            var e = d == b ? _.Os(a) : _.Ss(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
    ;
    _.Ss = function(a) {
        a = Ns(a);
        return new _.vs(a.left,a.top)
    }
    ;
    _.Vs = function(a, b, c) {
        if (b instanceof _.Ce)
            c = b.height,
            b = b.width;
        else if (void 0 == c)
            throw Error("S");
        a.style.width = _.Us(b, !0);
        a.style.height = _.Us(c, !0)
    }
    ;
    _.Us = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    ;
    _.Ws = function(a) {
        var b = Qs;
        if ("none" != _.Ms(a, "display"))
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    ;
    Qs = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = _.ee && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ns(a),
        new _.Ce(a.right - a.left,a.bottom - a.top)) : new _.Ce(b,c)
    }
    ;
    _.Xs = function(a, b) {
        a.style.display = b ? "" : "none"
    }
    ;
    _.Zs = function(a) {
        var b = _.Ie(void 0)
          , c = b.wb();
        if (_.Zd && c.createStyleSheet)
            b = c.createStyleSheet(),
            _.Ys(b, a);
        else {
            c = _.ys(b, "HEAD")[0];
            if (!c) {
                var d = _.ys(b, "BODY")[0];
                c = b.wa("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.wa("STYLE");
            var e;
            (e = _.Be('style[nonce],link[rel="stylesheet"][nonce]')) && d.setAttribute("nonce", e);
            _.Ys(d, a);
            b.appendChild(c, d)
        }
    }
    ;
    _.Ys = function(a, b) {
        b = _.As(b);
        _.Zd && void 0 !== a.cssText ? a.cssText = b : _.Qa.trustedTypes ? _.df(a, b) : a.innerHTML = b
    }
    ;
    _.$s = _.de ? "MozUserSelect" : _.ee || _.$d ? "WebkitUserSelect" : null;
    _.at = function(a, b) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var c = a.style.left
          , d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }
    ;
    bt = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    Ps = function(a, b) {
        if ("none" == _.Ls(a, b + "Style"))
            return 0;
        b = _.Ls(a, b + "Width");
        return b in bt ? bt[b] : _.at(a, b)
    }
    ;
    _.uy = function(a, b) {
        _.ok.call(this);
        this.Xm = a || 1;
        this.nx = b || _.Qa;
        this.EP = (0,
        _.B)(this.kga, this);
        this.OV = _.Ac()
    }
    ;
    _.Ya(_.uy, _.ok);
    _.g = _.uy.prototype;
    _.g.enabled = !1;
    _.g.Sc = null;
    _.g.setInterval = function(a) {
        this.Xm = a;
        this.Sc && this.enabled ? (this.stop(),
        this.start()) : this.Sc && this.stop()
    }
    ;
    _.g.kga = function() {
        if (this.enabled) {
            var a = _.Ac() - this.OV;
            0 < a && a < .8 * this.Xm ? this.Sc = this.nx.setTimeout(this.EP, this.Xm - a) : (this.Sc && (this.nx.clearTimeout(this.Sc),
            this.Sc = null),
            this.dispatchEvent("tick"),
            this.enabled && (this.stop(),
            this.start()))
        }
    }
    ;
    _.g.start = function() {
        this.enabled = !0;
        this.Sc || (this.Sc = this.nx.setTimeout(this.EP, this.Xm),
        this.OV = _.Ac())
    }
    ;
    _.g.stop = function() {
        this.enabled = !1;
        this.Sc && (this.nx.clearTimeout(this.Sc),
        this.Sc = null)
    }
    ;
    _.g.va = function() {
        _.uy.N.va.call(this);
        this.stop();
        delete this.nx
    }
    ;
    _.vy = function(a, b, c) {
        if ("function" === typeof a)
            c && (a = (0,
            _.B)(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = (0,
            _.B)(a.handleEvent, a);
        else
            throw Error("Ca");
        return 2147483647 < Number(b) ? -1 : _.Qa.setTimeout(a, b || 0)
    }
    ;
    _.wy = function(a) {
        _.Qa.clearTimeout(a)
    }
    ;
    _.iz = function(a) {
        _.Dj.call(this);
        this.fe = 1;
        this.hC = [];
        this.mC = 0;
        this.mg = [];
        this.ik = {};
        this.Z5 = !!a
    }
    ;
    _.Ya(_.iz, _.Dj);
    _.g = _.iz.prototype;
    _.g.subscribe = function(a, b, c) {
        var d = this.ik[a];
        d || (d = this.ik[a] = []);
        var e = this.fe;
        this.mg[e] = a;
        this.mg[e + 1] = b;
        this.mg[e + 2] = c;
        this.fe = e + 3;
        d.push(e);
        return e
    }
    ;
    _.g.Xw = _.fb(18);
    _.g.unsubscribe = function(a, b, c) {
        if (a = this.ik[a]) {
            var d = this.mg;
            if (a = a.find(function(e) {
                return d[e + 1] == b && d[e + 2] == c
            }))
                return this.Nl(a)
        }
        return !1
    }
    ;
    _.g.Nl = function(a) {
        var b = this.mg[a];
        if (b) {
            var c = this.ik[b];
            0 != this.mC ? (this.hC.push(a),
            this.mg[a + 1] = function() {}
            ) : (c && _.pb(c, a),
            delete this.mg[a],
            delete this.mg[a + 1],
            delete this.mg[a + 2])
        }
        return !!b
    }
    ;
    _.g.Ip = function(a, b) {
        var c = this.ik[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            if (this.Z5)
                for (e = 0; e < c.length; e++) {
                    var h = c[e];
                    jz(this.mg[h + 1], this.mg[h + 2], d)
                }
            else {
                this.mC++;
                try {
                    for (e = 0,
                    f = c.length; e < f && !this.isDisposed(); e++)
                        h = c[e],
                        this.mg[h + 1].apply(this.mg[h + 2], d)
                } finally {
                    if (this.mC--,
                    0 < this.hC.length && 0 == this.mC)
                        for (; c = this.hC.pop(); )
                            this.Nl(c)
                }
            }
            return 0 != e
        }
        return !1
    }
    ;
    var jz = function(a, b, c) {
        _.Tk(function() {
            a.apply(b, c)
        })
    };
    _.iz.prototype.clear = function(a) {
        if (a) {
            var b = this.ik[a];
            b && (b.forEach(this.Nl, this),
            delete this.ik[a])
        } else
            this.mg.length = 0,
            this.ik = {}
    }
    ;
    _.iz.prototype.Tb = function(a) {
        if (a) {
            var b = this.ik[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.ik)
            a += this.Tb(b);
        return a
    }
    ;
    _.iz.prototype.va = function() {
        _.iz.N.va.call(this);
        this.clear();
        this.hC.length = 0
    }
    ;
    _.kz = function(a) {
        this.nga = a
    }
    ;
    _.kz.prototype.toString = function() {
        return this.nga
    }
    ;
    _.lz = function(a) {
        _.Dj.call(this);
        this.De = new _.iz(a);
        _.Fj(this, this.De)
    }
    ;
    _.Ya(_.lz, _.Dj);
    _.g = _.lz.prototype;
    _.g.subscribe = function(a, b, c) {
        return this.De.subscribe(a.toString(), b, c)
    }
    ;
    _.g.Xw = _.fb(17);
    _.g.unsubscribe = function(a, b, c) {
        return this.De.unsubscribe(a.toString(), b, c)
    }
    ;
    _.g.Nl = function(a) {
        return this.De.Nl(a)
    }
    ;
    _.g.Ip = function(a, b) {
        return this.De.Ip(a.toString(), b)
    }
    ;
    _.g.clear = function(a) {
        this.De.clear(void 0 !== a ? a.toString() : void 0)
    }
    ;
    _.g.Tb = function(a) {
        return this.De.Tb(void 0 !== a ? a.toString() : void 0)
    }
    ;
    var mz = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        _.kb.call(this, c + a[d])
    }, nz = function(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }, pz = function(a) {
        return a.replace(_.wd, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(h, k, l) {
                f = k;
                return l
            });
            b = (oz(d) || _.dd).toString();
            return c + f + b + f + e
        })
    }, rz = function(a) {
        if (a instanceof _.$b)
            return 'url("' + _.ac(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof _.Hc)
            a = _.Ic(a);
        else {
            a = String(a);
            var b = a.replace(_.xd, "$1").replace(_.xd, "$1").replace(_.wd, "url");
            if (_.vd.test(b)) {
                if (b = !qz.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && nz(a)
                }
                a = b ? pz(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new mz("Value does not allow [{;}], got: %s.",[a]);
        return a
    }, sz, tz, uz, oz, qz, wz, xz, yz, zz, Az;
    _.Ya(mz, _.kb);
    mz.prototype.name = "AssertionError";
    sz = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    tz = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    uz = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    oz = function(a) {
        if (a instanceof _.$b)
            return a;
        a = String(a);
        uz.test(a) ? a = _.cd(a) : (a = String(a).replace(/(%0A|%0D)/g, ""),
        a = a.match(tz) ? _.cd(a) : null);
        return a
    }
    ;
    qz = /\/\*/;
    _.vz = function(a) {
        var b = "", c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c))
                    throw Error("m`" + c);
                var d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(rz).join(" ") : rz(d),
                b += c + ":" + d + ";")
            }
        return b ? new _.td(b,_.sd) : _.ud
    }
    ;
    wz = /^[a-zA-Z0-9-]+$/;
    xz = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    yz = function(a) {
        var b = _.Ed(_.Fd)
          , c = []
          , d = function(e) {
            Array.isArray(e) ? e.forEach(d) : (e = _.Ed(e),
            c.push(_.nc(e).toString()))
        };
        a.forEach(d);
        return _.dc(c.join(_.nc(b).toString()))
    }
    ;
    zz = function(a) {
        return yz(Array.prototype.slice.call(arguments))
    }
    ;
    Az = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    _.Bz = function(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.Hp + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        _.Hs(a, "transition", b.join(","))
    }
    ;
    _.Cz = _.Qc(function() {
        if (_.Zd)
            return !0;
        var a = _.Ue("DIV")
          , b = _.ee ? "-webkit" : _.de ? "-moz" : _.Zd ? "-ms" : null
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        c = {
            style: c
        };
        if (!wz.test("div"))
            throw Error("q");
        if ("DIV"in xz)
            throw Error("q");
        b = void 0;
        var d = "";
        if (c)
            for (h in c)
                if (Object.prototype.hasOwnProperty.call(c, h)) {
                    if (!wz.test(h))
                        throw Error("q");
                    var e = c[h];
                    if (null != e) {
                        var f = h;
                        if (e instanceof _.Hc)
                            e = _.Ic(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!_.qc(e))
                                throw Error("q");
                            e instanceof _.td || (e = _.vz(e));
                            e = _.zs(e)
                        } else {
                            if (/^on/i.test(f))
                                throw Error("q");
                            if (f.toLowerCase()in Az)
                                if (e instanceof _.Kc)
                                    e = _.Lc(e).toString();
                                else if (e instanceof _.$b)
                                    e = _.ac(e);
                                else if ("string" === typeof e)
                                    e = (oz(e) || _.dd).toString();
                                else
                                    throw Error("q");
                        }
                        f = f + '="' + _.pd(String(e)) + '"';
                        d += " " + f
                    }
                }
        var h = "<div" + d;
        null == b ? b = [] : Array.isArray(b) || (b = [b]);
        !0 === sz.div ? h += ">" : (b = zz(b),
        h += ">" + _.nc(b).toString() + "</div>");
        h = _.dc(h);
        _.ze(a, h);
        return "" != _.Js(a.firstChild, "transition")
    });
    _.Ez = function() {
        _.Dz = "oauth2relay" + String(2147483647 * (0,
        _.Hh)() | 0)
    }
    ;
    _.Fz = new _.lz;
    _.Gz = new _.kz("oauth");
    _.Ez();
    _.Gf("oauth-flow/client_id");
    var Hz = String(_.Gf("oauth-flow/redirectUri"));
    if (Hz)
        Hz.replace(/[#][\s\S]*/, "");
    else {
        var Iz = _.zh.getOrigin(window.location.href);
        _.Gf("oauth-flow/callbackUrl");
        encodeURIComponent(Iz)
    }
    _.zh.getOrigin(window.location.href);
    var Kz, Lz, Mz, Nz, Oz, Pz, Qz, Rz, Sz, Tz, Uz, Wz, Xz, Yz, Zz, $z, aA, bA, cA, dA, eA, fA, gA, hA, iA, jA, kA, lA, mA, nA, oA, pA, qA, rA, sA, tA, uA, vA, wA, xA, AA, zA, BA, CA, DA, EA, FA, GA, HA, IA, JA, LA;
    _.Jz = function(a, b) {
        if (_.wi && !b)
            return _.Qa.atob(a);
        var c = "";
        _.zi(a, function(d) {
            c += String.fromCharCode(d)
        });
        return c
    }
    ;
    Kz = function(a) {
        var b = String(a("immediate") || "");
        a = String(a("prompt") || "");
        return "true" === b || "none" === a
    }
    ;
    Lz = function(a) {
        return _.Ri("enableMultilogin") && a("cookie_policy") && !Kz(a) ? !0 : !1
    }
    ;
    Oz = function() {
        var a, b = null;
        _.az.iterate(function(c, d) {
            0 === c.indexOf("G_AUTHUSER_") && (c = _.Qy(c.substring(11)),
            !a || c.zf && !a.zf || c.zf == a.zf && c.jj > a.jj) && (a = c,
            b = d)
        });
        return {
            l6: a,
            authuser: b
        }
    }
    ;
    Pz = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
    Qz = function(a) {
        a = a.toUpperCase();
        for (var b = 0, c = Pz.length; b < c; ++b) {
            var d = a.split(Pz[b]);
            2 == d.length && "" === d[1] && (a = d[0])
        }
        a = a.replace(/-/g, "_").toUpperCase();
        40 < a.length && (b = new _.Gh,
        b.Bx(a),
        a = b.hj().toUpperCase());
        return a
    }
    ;
    Rz = function(a) {
        if (!a)
            return [];
        a = a.split("=");
        return a[1] ? a[1].split("|") : []
    }
    ;
    Sz = function(a) {
        a = a.split(":");
        return {
            clientId: a[0].split("=")[1],
            Mea: Rz(a[1]),
            Gqa: Rz(a[2]),
            xpa: Rz(a[3])
        }
    }
    ;
    Tz = function(a) {
        var b = Oz()
          , c = b.l6;
        b = b.authuser;
        var d = a && Qz(a);
        if (null !== b) {
            var e;
            _.az.iterate(function(h, k) {
                (h = _.Sy(h)) && h.Ij && (d && h.K6 != d || h.zf == c.zf && h.jj == c.jj && (e = k))
            });
            if (e) {
                var f = Sz(e);
                a = f && f.Mea[Number(b)];
                f = f && f.clientId;
                if (a)
                    return {
                        authuser: b,
                        Fra: a,
                        clientId: f
                    }
            }
        }
        return null
    }
    ;
    Uz = function(a, b) {
        a = _.jj(a);
        if (!a || !b && a.error)
            return null;
        b = Math.floor((new Date).getTime() / 1E3);
        return a.expires_at && b > a.expires_at ? null : a
    }
    ;
    _.Vz = function(a, b) {
        if (b) {
            var c = b;
            var d = a
        } else
            "string" === typeof a ? d = a : c = a;
        c ? _.Hw(c, d) : _.Iw(d)
    }
    ;
    Wz = function(a) {
        if (!a)
            return null;
        "single_host_origin" !== a && (a = _.Bh(a));
        var b = window.location.hostname
          , c = b
          , d = _.Ry;
        if ("single_host_origin" !== a) {
            c = a.split("://");
            if (2 == c.length)
                d = "https" === c.shift();
            else
                return _.Pg.log("WARNING invalid cookie_policy: " + a),
                null;
            c = c[0]
        }
        if (-1 !== c.indexOf(":"))
            c = b = "";
        else {
            a = "." + c;
            if (b.lastIndexOf(a) !== b.length - a.length)
                return _.Pg.log("Invalid cookie_policy domain: " + c),
                null;
            c = a;
            b = c.split(".").length - 1
        }
        return {
            domain: c,
            zf: d,
            jj: b
        }
    }
    ;
    Xz = function(a) {
        var b = Wz(a);
        if (!b)
            return new _.Wy("G_USERSTATE_");
        a = ["G_USERSTATE_", _.Ry && b.zf ? "S" : "H", b.jj].join("");
        var c = _.ez[a];
        c || (c = {
            UI: 63072E3
        },
        _.of(_.hz(b), c),
        c = new _.Ty(a,c),
        _.ez[a] = c,
        b = c.read(),
        "undefined" !== typeof b && null !== b && (document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/",
        c.write(b)));
        return c
    }
    ;
    Yz = function(a) {
        var b = Xz(a).read();
        a = _.mf();
        if (b) {
            b = b.split(":");
            for (var c; c = b.shift(); )
                c = c.split("="),
                a[c[0]] = c[1]
        }
        return a
    }
    ;
    Zz = function(a, b, c) {
        var d = Yz(b)
          , e = d[a];
        d[a] = "0";
        var f = [];
        _.mn(d, function(k, l) {
            f.push(l + "=" + k)
        });
        var h = f.join(":");
        b = Xz(b);
        h ? b.write(h) : b.clear();
        d[a] !== e && c && c()
    }
    ;
    $z = function(a) {
        a = Wz(a.g_user_cookie_policy);
        if (!a || a.zf && !_.Ry)
            a = null;
        else {
            var b = ["G_AUTHUSER_", _.Ry && a.zf ? "S" : "H", a.jj].join("")
              , c = _.dz[b];
            c || (c = new _.az(b,_.hz(a)),
            _.dz[b] = c);
            a = c
        }
        _.Hf("googleapis.config/sessionIndex", null);
        a.clear()
    }
    ;
    aA = function(a) {
        return Kz(function(b) {
            return a[b]
        })
    }
    ;
    bA = 0;
    cA = !1;
    dA = [];
    eA = {};
    fA = {};
    gA = null;
    hA = function(a) {
        var b = _.Dz;
        return function(c) {
            if (this.f == b && this.t == _.Ug.Ao(this.f) && this.origin == _.Ug.Oo(this.f))
                return a.apply(this, arguments)
        }
    }
    ;
    iA = function(a) {
        if (a && !decodeURIComponent(a).startsWith("m;/_/scs/"))
            throw Error("Ha");
    }
    ;
    jA = function(a) {
        var b = _.Yf.mh
          , c = b(a).jsh;
        if (null != c)
            return iA(c),
            a;
        if (b = String(b().jsh || _.yf.h || ""))
            iA(b),
            c = (a + "#").indexOf("#"),
            a = a.substr(0, c) + (-1 !== a.substr(0, c).indexOf("?") ? "&" : "?") + "jsh=" + encodeURIComponent(b) + a.substr(c);
        return a
    }
    ;
    kA = function() {
        return !!_.Gf("oauth-flow/usegapi")
    }
    ;
    lA = function(a, b) {
        kA() ? gA.unregister(a) : _.Ug.unregister(a + ":" + b)
    }
    ;
    mA = function(a, b, c) {
        kA() ? gA.register(a, c, _.Bn) : _.Ug.register(a + ":" + b, hA(c))
    }
    ;
    nA = function() {
        Mz.parentNode.removeChild(Mz)
    }
    ;
    oA = function(a) {
        var b = Mz;
        _.Bz(b, [{
            Hp: "-webkit-transform",
            duration: 1,
            timing: "ease",
            delay: 0
        }]);
        _.Bz(b, [{
            Hp: "transform",
            duration: 1,
            timing: "ease",
            delay: 0
        }]);
        _.vy(function() {
            b.style.webkitTransform = "translate3d(0px," + a + "px,0px)";
            b.style.transform = "translate3d(0px," + a + "px,0px)"
        }, 0)
    }
    ;
    pA = function() {
        var a = Nz + 88;
        oA(a);
        Nz = a
    }
    ;
    qA = function() {
        var a = Nz - 88;
        oA(a);
        Nz = a
    }
    ;
    rA = function(a) {
        var b = a ? pA : qA
          , c = a ? qA : pA;
        a = a ? "-" : "";
        Nz = parseInt(a + 88, 10);
        Mz.style.webkitTransform = "translate3d(0px," + a + 88 + "px,0px)";
        Mz.style.transform = "translate3d(0px," + a + 88 + "px,0px)";
        Mz.style.display = "";
        Mz.style.visibility = "visible";
        b();
        _.vy(c, 4E3);
        _.vy(nA, 5E3)
    }
    ;
    sA = function(a) {
        var b = _.Gf("oauth-flow/toast/position");
        "top" !== b && (b = "bottom");
        var c = document.createElement("div");
        Mz = c;
        c.style.cssText = "position:fixed;left:0px;z-index:1000;width:100%;";
        _.Hs(c, "visibility", "hidden");
        _.Hs(c, b, "-40px");
        _.Hs(c, "height", "128px");
        var d = c;
        if (_.Zr()) {
            d = document.createElement("div");
            d.style.cssText = "float:left;position:relative;left:50%;";
            c.appendChild(d);
            var e = document.createElement("div");
            e.style.cssText = "float:left;position:relative;left:-50%";
            d.appendChild(e);
            d = e
        }
        e = "top" == b ? "-" : "";
        Nz = parseInt(e + 88, 10);
        Mz.style.webkitTransform = "translate3d(0px," + e + 88 + "px,0px)";
        Mz.style.transform = "translate3d(0px," + e + 88 + "px,0px)";
        e = window;
        try {
            for (; e.parent != e && e.parent.document; )
                e = e.parent
        } catch (f) {}
        e = e.document.body;
        try {
            e.insertBefore(c, e.firstChild)
        } catch (f) {}
        _.yn.openChild({
            url: ":socialhost:/:session_prefix:_/widget/oauthflow/toast",
            queryParams: {
                clientId: a.client_id,
                idToken: a.id_token
            },
            where: d,
            onRestyle: function() {
                "top" === b ? rA(!0) : rA(!1)
            }
        })
    }
    ;
    tA = function(a) {
        var b = _.hp()
          , c = b && b.scope;
        b = a && a.scope;
        b = "string" === typeof b ? b.split(" ") : b || [];
        if (c) {
            c = c.split(" ");
            for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                -1 == _.kn.call(b, e) && b.push(e)
            }
            0 < b.length && (a.scope = b.join(" "))
        }
        return a
    }
    ;
    uA = function(a, b) {
        var c = null;
        a && b && (c = b.client_id = b.client_id || a.client_id,
        b.scope = b.scope || a.scope,
        b.g_user_cookie_policy = a.cookie_policy,
        b.cookie_policy = b.cookie_policy || a.cookie_policy,
        b.response_type = b.response_type || a.response_type);
        if (b) {
            b.issued_at || (b.issued_at = String(Math.floor((new Date).getTime() / 1E3)));
            var d = parseInt(b.expires_in, 10) || 86400;
            b.error && (d = _.Gf("oauth-flow/errorMaxAge") || 86400);
            b.expires_in = String(d);
            b.expires_at || (b.expires_at = String(Math.floor((new Date).getTime() / 1E3) + d));
            b._aa || b.error || null != Tz(c) || !aA(a) || (b._aa = "1");
            a = b.status = {};
            a.google_logged_in = !!b.session_state;
            c = a.signed_in = !!b.access_token;
            a.method = c ? b["g-oauth-window"] ? "PROMPT" : "AUTO" : null
        }
        return b
    }
    ;
    vA = function(a) {
        a = a && a.id_token;
        if (!a || !a.split(".")[1])
            return null;
        a = (a.split(".")[1] + "...").replace(/^((....)+)\.?\.?\.?$/, "$1");
        a = _.Kg(_.Jz(a, !0));
        if (!1 === a)
            throw Error("Ia");
        return a
    }
    ;
    wA = function(a) {
        return (a = vA(a)) ? a.sub : null
    }
    ;
    xA = function(a) {
        a && dA.push(a);
        a = _.Dz;
        var b = document.getElementById(a)
          , c = (new Date).getTime();
        if (b) {
            if (bA && 6E4 > c - bA)
                return;
            var d = _.Ug.Ao(a);
            d && (lA("oauth2relayReady", d),
            lA("oauth2callback", d));
            b.parentNode.removeChild(b);
            if (/Firefox/.test(navigator.userAgent))
                try {
                    window.frames[a] = void 0
                } catch (f) {}
            _.Ez();
            a = _.Dz
        }
        bA = c;
        var e = String(2147483647 * (0,
        _.Hh)() | 0);
        b = _.Gf("oauth-flow/proxyUrl") || _.Gf("oauth-flow/relayUrl");
        kA() ? gA = _.yn.openChild({
            where: _.Yf.FS(),
            url: b,
            id: a,
            attributes: {
                style: {
                    width: "1px",
                    height: "1px",
                    position: "absolute",
                    top: "-100px",
                    display: "none"
                },
                "aria-hidden": "true"
            },
            dontclear: !0
        }) : (b = [b, "?parent=", encodeURIComponent(_.zh.getOrigin(window.location.href)), "#rpctoken=", e, "&forcesecure=1"].join(""),
        c = _.Yf.FS(),
        d = _.Yf.qQ({
            name: a,
            id: a
        }),
        d.src = jA(b),
        d.style.width = "1px",
        d.style.height = "1px",
        d.style.position = "absolute",
        d.style.top = "-100px",
        d.tabIndex = -1,
        d.setAttribute("aria-hidden", "true"),
        c.appendChild(d),
        _.Ug.Mw(a));
        mA("oauth2relayReady", e, function() {
            lA("oauth2relayReady", e);
            var f = dA;
            if (null !== f) {
                dA = null;
                for (var h = f.length, k = 0; k < h; ++k)
                    f[k]()
            }
        });
        mA("oauth2callback", e, function(f) {
            var h = _.Yf.mh;
            h = h(f);
            var k = h.state;
            f = k.replace(/\|.*$/, "");
            f = {}.hasOwnProperty.call(fA, f) ? fA[f] : null;
            h.state = f;
            if (null != h.state) {
                f = eA[k];
                delete eA[k];
                k = f && f.key || "token";
                var l = h = uA(f && f.params, h)
                  , m = wA(l);
                if (m) {
                    var n = Yz(l.cookie_policy);
                    m = "0" == n[m] || "X" == n[m]
                } else
                    m = !1;
                !m && l && 0 <= (" " + (l.scope || "") + " ").indexOf(" https://www.googleapis.com/auth/plus.login ") && _.Gf("isLoggedIn") && "1" === (l && l._aa) && (l._aa = "0",
                cA || (cA = !0,
                sA(l)));
                _.Vz(k, h);
                h = Uz(k);
                if (f) {
                    k = f.popup;
                    l = f.after_redirect;
                    if (k && "keep_open" != l)
                        try {
                            k.close()
                        } catch (p) {}
                    f.callback && (f.callback(h),
                    f.callback = null)
                }
            }
        })
    }
    ;
    _.yA = function(a) {
        null !== dA ? xA(a) : a && a()
    }
    ;
    AA = function(a, b) {
        var c = zA
          , d = wA(a);
        d && ($z(a),
        Zz(d, b, function() {
            if (c) {
                var e = {
                    error: "user_signed_out"
                };
                e.client_id = a.client_id;
                e.g_user_cookie_policy = a.g_user_cookie_policy;
                e.scope = a.scope;
                e.response_type = a.response_type;
                e.session_state = a.session_state;
                e = uA(null, e);
                c(e)
            }
        }))
    }
    ;
    zA = function(a) {
        a || (a = Uz(void 0, !0));
        a && "object" === typeof a || (a = {
            error: "invalid_request",
            error_description: "no callback data"
        });
        var b = a.error_description;
        b && window.console && (window.console.error(a.error),
        window.console.error(b));
        a.error || (_.yf.drw = null);
        _.Vz(a);
        if (b = a.authuser)
            _.Gf("googleapis.config/sessionIndex"),
            _.Hf("googleapis.config/sessionIndex", b);
        _.Fz.Ip(_.Gz, a);
        return a
    }
    ;
    BA = ["client_id", "cookie_policy", "response_type"];
    CA = "client_id response_type login_hint authuser prompt include_granted_scopes after_redirect access_type hl state".split(" ");
    DA = function(a) {
        var b = _.Ck(a);
        b.session_state && b.session_state.extraQueryParams && (b.authuser = b.session_state.extraQueryParams.authuser);
        b.session_state = null;
        a.expires_at && (b.expires_at = parseInt(a.expires_at / 1E3).toString());
        a.expires_in && (b.expires_in = a.expires_in.toString());
        a.first_issued_at && (b.issued_at = parseInt(a.first_issued_at / 1E3).toString(),
        delete b.first_issued_at);
        _.Hw(b);
        return b
    }
    ;
    EA = function(a) {
        if (void 0 === a.include_granted_scopes) {
            var b = _.Gf("include_granted_scopes");
            a.include_granted_scopes = !!b
        }
    }
    ;
    FA = function(a) {
        window.console && ("function" === typeof window.console.warn ? window.console.warn(a) : "function" === typeof window.console.log && window.console.log(a))
    }
    ;
    GA = function(a) {
        var b = a || {}
          , c = {};
        _.Sc(CA, function(d) {
            null != b[d] && (c[d] = b[d])
        });
        a = _.Gf("googleapis/overrideClientId");
        null != a && (c.client_id = a);
        EA(c);
        "string" === typeof b.scope ? c.scope = b.scope : Array.isArray(b.scope) && (c.scope = b.scope.join(" "));
        null != b["openid.realm"] && (c.openid_realm = b["openid.realm"]);
        null != b.cookie_policy ? c.cookie_policy = b.cookie_policy : null != b.cookiepolicy && (c.cookie_policy = b.cookiepolicy);
        null == c.login_hint && null != b.user_id && (c.login_hint = b.user_id);
        try {
            _.xx(c.cookie_policy)
        } catch (d) {
            c.cookie_policy && FA("The cookie_policy configuration: '" + c.cookie_policy + "' is illegal, and thus ignored."),
            delete c.cookie_policy
        }
        null != b.hd && (c.hosted_domain = b.hd);
        null == c.prompt && (1 == b.immediate || "true" == b.immediate ? c.prompt = "none" : "force" == b.approval_prompt && (c.prompt = "consent"));
        "none" == c.prompt && (c.session_selection = "first_valid");
        "none" == c.prompt && "offline" == c.access_type && delete c.access_type;
        "undefined" === typeof c.authuser && (a = _.Ui(),
        null != a && (c.authuser = a));
        a = b.redirect_uri || _.Gf("oauth-flow/redirectUri");
        null != a && "postmessage" != a && (c.redirect_uri = a);
        c.gsiwebsdk = "shim";
        return c
    }
    ;
    HA = function(a, b) {
        var c = GA(a)
          , d = new _.Wk(function(e, f) {
            _.dy(c, function(h) {
                var k = h || {};
                _.Sc(BA, function(l) {
                    null == k[l] && (k[l] = c[l])
                });
                !c.include_granted_scopes && a && a.scope && (k.scope = a.scope);
                a && null != a.state && (k.state = a.state);
                k.error ? ("none" == c.prompt && "user_logged_out" == k.error && (k.error = "immediate_failed_user_logged_out"),
                f(k)) : (h = DA(k),
                null != h.authuser && _.Hf("googleapis.config/sessionIndex", h.authuser),
                e(h))
            })
        }
        );
        b && d.then(b, b);
        return d
    }
    ;
    IA = _.hj.DS;
    JA = null;
    _.MA = function(a, b) {
        if ("force" !== a.approvalprompt) {
            a = _.KA(a);
            a.prompt = "none";
            delete a.redirect_uri;
            delete a.approval_prompt;
            delete a.immediate;
            if (b = !b)
                JA ? (a.client_id !== JA.client_id && window.console && window.console.log && window.console.log("Ignoring mismatched page-level auth param client_id=" + a.client_id),
                b = !0) : (JA = a,
                b = !1);
            b || LA(a)
        }
    }
    ;
    _.KA = function(a) {
        var b = a.redirecturi || "postmessage"
          , c = (0,
        _.gd)((a.scope || "").replace(/[\s\xa0]+/g, " "));
        b = {
            client_id: a.clientid,
            redirect_uri: b,
            response_type: "code token id_token gsession",
            scope: c
        };
        a.approvalprompt && (b.approval_prompt = a.approvalprompt);
        a.state && (b.state = a.state);
        a.openidrealm && (b["openid.realm"] = a.openidrealm);
        c = "offline" == a.accesstype ? !0 : (c = a.redirecturi) && "postmessage" != c;
        c && (b.access_type = "offline");
        a.requestvisibleactions && (b.request_visible_actions = (0,
        _.gd)(a.requestvisibleactions.replace(/[\s\xa0]+/g, " ")));
        a.after_redirect && (b.after_redirect = a.after_redirect);
        a.cookiepolicy && "none" !== a.cookiepolicy && (b.cookie_policy = a.cookiepolicy);
        "undefined" != typeof a.includegrantedscopes && (b.include_granted_scopes = a.includegrantedscopes);
        a.e && (b.e = a.e);
        (a = a.authuser || _.Gf("googleapis.config/sessionIndex")) && (b.authuser = a);
        (a = _.Gf("useoriginassocialhost")) && (b.use_origin_as_socialhost = a);
        return b
    }
    ;
    LA = function(a) {
        _.Rp("waaf0", "signin", "0");
        HA(a, function(b) {
            _.Rp("waaf1", "signin", "0");
            zA(b)
        })
    }
    ;
    _.NA = function(a) {
        a = _.KA(a);
        _.Hf("oauth-flow/authWindowWidth", 445);
        _.Hf("oauth-flow/authWindowHeight", 615);
        LA(a)
    }
    ;
    _.OA = function(a) {
        _.Fz.unsubscribe(_.Gz, a);
        _.Fz.subscribe(_.Gz, a)
    }
    ;
    var VA, YA;
    _.QA = function(a) {
        return a.cookiepolicy ? !0 : (_.PA("cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information."),
        !1)
    }
    ;
    _.PA = function(a) {
        window.console && (window.console.error ? window.console.error(a) : window.console.log && window.console.log(a))
    }
    ;
    _.UA = function(a, b) {
        var c = _.hp();
        _.of(a, c);
        c = tA(c);
        if (_.QA(c)) {
            var d = _.RA();
            _.SA(c);
            b ? _.vf(b, "click", function() {
                _.TA(c, d)
            }) : _.TA(c, d)
        }
    }
    ;
    _.RA = function() {
        var a = new VA;
        _.OA(function(b) {
            a.VI && b && (b.access_token && _.Hf("isPlusUser", !0),
            b["g-oauth-window"] && (a.VI = !1,
            _.Pg.warn("OTA app install is no longer supported.")))
        });
        return a
    }
    ;
    VA = function() {
        this.VI = !1
    }
    ;
    _.SA = function(a) {
        a = _.WA(a);
        _.XA(a.callback);
        _.yA(function() {
            _.MA(a)
        })
    }
    ;
    _.WA = function(a) {
        YA(a);
        a.redirecturi && delete a.redirecturi;
        Lz(function(b) {
            return a[b]
        }) || (a.authuser = 0);
        return a
    }
    ;
    YA = function(a) {
        /^\s*$/.test(a.scope || "") && (a.scope = "https://www.googleapis.com/auth/plus.login")
    }
    ;
    _.XA = function(a) {
        if ("string" === typeof a)
            if (window[a])
                a = window[a];
            else {
                _.PA('Callback function named "' + a + '" not found');
                return
            }
        a && _.OA(a)
    }
    ;
    _.TA = function(a, b) {
        b.VI = !0;
        a = _.WA(a);
        _.NA(a)
    }
    ;
    _.r("gapi.auth.authorize", HA);
    _.r("gapi.auth.checkSessionState", function(a, b) {
        var c = _.mf();
        c.client_id = a.client_id;
        c.session_state = a.session_state;
        _.yA(function() {
            kA() ? gA.send("check_session_state", c, function(d) {
                b.call(null, d[0])
            }, _.Bn) : _.Ug.call(_.Dz, "check_session_state", hA(function(d) {
                b.call(null, d)
            }), c.session_state, c.client_id)
        })
    });
    _.r("gapi.auth.getAuthHeaderValueForFirstParty", IA);
    _.r("gapi.auth.getToken", Uz);
    _.r("gapi.auth.getVersionInfo", function(a, b) {
        _.yA(function() {
            var c = _.fj() || ""
              , d = null
              , e = null;
            c && (e = c.split(" "),
            2 == e.length && (d = e[1]));
            d ? kA() ? gA.send("get_versioninfo", {
                xapisidHash: d,
                sessionIndex: b
            }, function(f) {
                a(f[0])
            }, _.Bn) : _.Ug.call(_.Dz, "get_versioninfo", hA(function(f) {
                a(f)
            }), d, b) : a()
        })
    });
    _.r("gapi.auth.init", _.yA);
    _.r("gapi.auth.setToken", _.Vz);
    _.r("gapi.auth.signIn", function(a) {
        _.UA(a)
    });
    _.r("gapi.auth.signOut", function() {
        var a = Uz();
        a && AA(a, a.cookie_policy)
    });
    _.r("gapi.auth.unsafeUnpackIdToken", vA);
    _.r("gapi.auth._pimf", _.MA);
    _.r("gapi.auth._oart", sA);
    _.r("gapi.auth._guss", function(a) {
        return Xz(a).read()
    });
    var ZA = _.hp();
    ZA.clientid && ZA.scope && ZA.callback && !_.Gf("disableRealtimeCallback") && _.SA(ZA);
    var ry = function() {};
    ry.prototype.JP = null;
    ry.prototype.getOptions = function() {
        var a;
        (a = this.JP) || (a = this.JP = {});
        return a
    }
    ;
    var ty;
    ty = function() {}
    ;
    _.Ya(ty, ry);
    _.sy = new ty;
    _.Ai = function(a) {
        return null == a ? "" : String(a)
    }
    ;
    _.Ei = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    _.Fi = function(a, b) {
        if (!b)
            return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else
            e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }
    ;
    _.Gi = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++)
                _.Gi(a, String(b[d]), c);
        else
            null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }
    ;
    _.Hi = function(a) {
        var b = [], c;
        for (c in a)
            _.Gi(c, a[c], b);
        return b.join("&")
    }
    ;
    _.Ii = function(a, b) {
        b = _.Hi(b);
        return _.Fi(a, b)
    }
    ;
    var uj = function(a, b) {
        a = _.Yf.qQ({
            id: a,
            name: a
        });
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.position = "absolute";
        a.style.top = "-100px";
        a.style.display = "none";
        if (window.navigator) {
            var c = window.navigator.userAgent || "";
            var d = window.navigator.product || "";
            c = 0 != c.indexOf("Opera") && -1 == c.indexOf("WebKit") && "Gecko" == d && 0 < c.indexOf("rv:1.")
        } else
            c = !1;
        a.src = c ? "about:blank" : b;
        a.tabIndex = -1;
        "function" === typeof a.setAttribute ? a.setAttribute("aria-hidden", "true") : a["aria-hidden"] = "true";
        document.body.appendChild(a);
        c && (a.src = b);
        return a
    };
    _.hj = {
        fU: _.gj,
        fba: _.dj,
        dT: function() {
            var a = null;
            _.dj() && (a = window.__PVT,
            null == a && (a = (new _.Wi(document)).get("BEAT")));
            return a
        },
        DS: _.fj
    };
    var wj, vj;
    wj = function() {
        return !!vj("auth/useFirstPartyAuthV2")
    }
    ;
    vj = function(a) {
        return _.Gf("googleapis.config/" + a)
    }
    ;
    _.xj = function(a, b, c) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? window.location.href : b;
        c = void 0 === c ? "auto" : c;
        if ("none" == c)
            return a;
        var d = a.Authorization
          , e = a.OriginToken;
        if (!d && !e) {
            (e = _.jj()) && e.access_token && ("oauth2" == c || "auto" == c) && (d = String(e.token_type || "Bearer") + " " + e.access_token);
            if (e = !d)
                e = (!!vj("auth/useFirstPartyAuth") || "1p" == c) && "oauth2" != c;
            if (e && _.dj()) {
                if (wj()) {
                    d = vj("primaryEmail");
                    c = vj("appDomain");
                    e = vj("fogId");
                    var f = [];
                    d && f.push({
                        key: "e",
                        value: d
                    });
                    c && f.push({
                        key: "a",
                        value: c
                    });
                    e && f.push({
                        key: "u",
                        value: e
                    });
                    d = _.fj(f)
                } else
                    d = _.fj();
                d && (c = a["X-Goog-AuthUser"],
                b = _.Ui(b),
                b = c || b,
                _.fd(_.Ai(b)) && (!wj() || wj() && _.fd(_.Ai(vj("primaryEmail"))) && _.fd(_.Ai(vj("appDomain"))) && _.fd(_.Ai(vj("fogId")))) && (b = "0"),
                _.fd(_.Ai(b)) || (a["X-Goog-AuthUser"] = b))
            }
            d ? a.Authorization = d : !1 !== vj("auth/useOriginToken") && (e = _.hj.dT()) && (a.OriginToken = e)
        }
        return a
    }
    ;
    _.yj = function() {
        function a(n, p, q, t, v) {
            var u = f("proxy");
            if (t || !u) {
                u = f("root");
                var w = f("root-1p") || u;
                u = u || "https://content.googleapis.com";
                w = w || "https://clients6.google.com";
                var x = f("xd3") || "/static/proxy.html";
                u = (t || String(p ? w : u)) + x
            }
            u = String(u);
            q && (u += (0 <= u.indexOf("?") ? "&" : "?") + "usegapi=1");
            (p = _.Yf.mh().jsh || _.yf.h) && (u += (0 <= u.indexOf("?") ? "&" : "?") + "jsh=" + encodeURIComponent(p));
            u += "#parent=" + encodeURIComponent(null != v ? String(v) : _.zh.getOrigin(document.location.href));
            return u + ("&rpctoken=" + n)
        }
        function b(n, p, q, t, v) {
            var u = d(q, t, v);
            k[u] || (q = uj(u, p),
            _.Ug.register("ready:" + n, function() {
                _.Ug.unregister("ready:" + n);
                if (!l[u]) {
                    l[u] = !0;
                    var w = m[u];
                    m[u] = [];
                    for (var x = 0, z = w.length; x < z; ++x) {
                        var G = w[x];
                        e(G.Op, G.Rda, G.callback)
                    }
                }
            }),
            _.Ug.Mw(u, p),
            k[u] = q)
        }
        function c(n, p, q) {
            var t = String(2147483647 * _.qj() | 0)
              , v = a(t, n, p, q);
            _.Rg(function() {
                b(t, v, n, p, q)
            })
        }
        function d(n, p, q) {
            n = a("", n, p, q, "");
            q = h[n + p];
            if (!q) {
                q = new _.Gh;
                q.Bx(n);
                q = q.hj().toLowerCase();
                var t = _.qj();
                q += t;
                h[n + p] = q
            }
            return "apiproxy" + q
        }
        function e(n, p, q) {
            var t = void 0
              , v = !1;
            if ("makeHttpRequests" !== n)
                throw 'only "makeHttpRequests" RPCs are implemented';
            var u = function(E) {
                if (E) {
                    if ("undefined" != typeof t && "undefined" != typeof E.root && t != E.root)
                        throw "all requests in a batch must have the same root URL";
                    t = E.root || t;
                    v = _.hj.fU(E.headers)
                }
            };
            if (p)
                for (var w = 0, x = p.length; w < x; ++w) {
                    var z = p[w];
                    z && u(z.params)
                }
            u = !!f("useGapiForXd3");
            var G = d(v, u, t);
            k[G] || c(v, u, t);
            l[G] ? _.Ug.call(G, n, function(E) {
                if (this.f == G && this.t == _.Ug.Ao(this.f) && this.origin == _.Ug.Oo(this.f)) {
                    var W = _.Kg(E);
                    q(W, E)
                }
            }, p) : (m[G] || (m[G] = []),
            m[G].push({
                Op: n,
                Rda: p,
                callback: q
            }))
        }
        function f(n) {
            return _.Gf("googleapis.config/" + n)
        }
        var h = {}
          , k = {}
          , l = {}
          , m = {};
        return {
            Moa: function(n, p, q) {
                return _.xj(n, p, q)
            },
            Fn: e
        }
    }();
    var Oh = {
        hha: "Authorization",
        L1: "Content-ID",
        Fha: "Content-Transfer-Encoding",
        Gha: "Content-Type",
        lia: "Date",
        dla: "OriginToken",
        Aja: "hotrod-board-name",
        Bja: "hotrod-chrome-cpu-model",
        Cja: "hotrod-chrome-processors",
        Pna: "WWW-Authenticate",
        Rna: "X-Ad-Manager-Impersonation",
        Qna: "X-Ad-Manager-Debug-Info",
        Sna: "X-ClientDetails",
        Tna: "X-Compass-Routing-Destination",
        Wna: "X-Goog-AuthUser",
        aoa: "X-Goog-Encode-Response-If-Executable",
        Una: "X-Google-Consent",
        Vna: "X-Google-EOM",
        coa: "X-Goog-Meeting-ABR",
        doa: "X-Goog-Meeting-Botguardid",
        eoa: "X-Goog-Meeting-ClientInfo",
        foa: "X-Goog-Meeting-ClientVersion",
        goa: "X-Goog-Meeting-Debugid",
        hoa: "X-Goog-Meeting-Identifier",
        ioa: "X-Goog-Meeting-Interop-Cohorts",
        joa: "X-Goog-Meeting-Interop-Type",
        koa: "X-Goog-Meeting-OidcIdToken",
        loa: "X-Goog-Meeting-RtcClient",
        moa: "X-Goog-Meeting-StartSource",
        noa: "X-Goog-Meeting-Token",
        ooa: "X-Goog-Meeting-Viewer-Token",
        poa: "X-Goog-PageId",
        qoa: "X-Goog-Safety-Content-Type",
        roa: "X-Goog-Safety-Encoding",
        Yna: "X-Goog-Drive-Client-Version",
        Zna: "X-Goog-Drive-Resource-Keys",
        soa: "X-HTTP-Method-Override",
        toa: "X-JavaScript-User-Agent",
        uoa: "X-Origin",
        voa: "X-Referer",
        woa: "X-Requested-With",
        zoa: "X-Use-HTTP-Status-Code-Override",
        xoa: "X-Server-Timeout",
        boa: "X-Goog-First-Party-Reauth",
        yoa: "X-Server-Token",
        Xna: "x-goog-chat-space-id"
    }
      , Ph = "Accept Accept-Language Authorization Cache-Control cast-device-capabilities Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date developer-token EES-S7E-MODE financial-institution-id GData-Version google-cloud-resource-prefix hotrod-board-name hotrod-chrome-cpu-model hotrod-chrome-processors Host If-Match If-Modified-Since If-None-Match If-Unmodified-Since linked-customer-id login-customer-id MIME-Version Origin OriginToken Pragma Range request-id Slug Transfer-Encoding Want-Digest X-Ad-Manager-Impersonation X-Ad-Manager-Debug-Info x-alkali-account-key x-alkali-application-key x-alkali-auth-apps-namespace x-alkali-auth-entities-namespace x-alkali-auth-entity x-alkali-client-locale x-chrome-connected x-framework-xsrf-token X-Client-Data X-ClientDetails X-Client-Version x-debug-settings-metadata X-Firebase-Locale X-GData-Client X-GData-Key X-Goog-AuthUser X-Goog-PageId X-Goog-Encode-Response-If-Executable X-GoogApps-Allowed-Domains X-Goog-AdX-Buyer-Impersonation X-Goog-Api-Client X-Goog-Api-Key X-Google-EOM X-Goog-Visibilities X-Goog-Correlation-Id X-Goog-Request-Info X-Goog-Request-Reason X-Goog-Request-Time X-Goog-Experiments x-goog-ext-124712974-jspb x-goog-ext-251363160-jspb x-goog-ext-259736195-jspb x-goog-ext-467253834-jspb x-goog-ext-472780938-jspb x-goog-ext-477772811-jspb x-goog-ext-275505673-bin x-goog-ext-353267353-bin x-goog-ext-353267353-jspb x-goog-ext-496773601-bin x-goog-ext-328800237-bin x-goog-ext-359275022-bin x-goog-ext-202735639-bin x-goog-ext-223435598-bin x-goog-ext-174067345-bin x-goog-ext-525001598-jspb X-Goog-Firebase-Installations-Auth x-goog-greenenergyuserappservice-metadata X-Firebase-Client X-Firebase-Client-Log-Type X-Firebase-GMPID X-Firebase-Auth-Token X-Firebase-AppCheck X-Firebase-Token X-Goog-Drive-Client-Version X-Goog-Drive-Resource-Keys x-goog-iam-authority-selector x-goog-iam-authorization-token x-goog-request-params x-goog-sherlog-context X-Goog-Sn-Metadata X-Goog-Sn-PatientId X-Goog-Spatula X-Goog-Travel-Bgr X-Goog-Travel-Settings X-Goog-Upload-Command X-Goog-Upload-Content-Disposition X-Goog-Upload-Content-Length X-Goog-Upload-Content-Type X-Goog-Upload-File-Name X-Goog-Upload-Header-Content-Encoding X-Goog-Upload-Header-Content-Length X-Goog-Upload-Header-Content-Type X-Goog-Upload-Header-Transfer-Encoding X-Goog-Upload-Offset X-Goog-Upload-Protocol X-Goog-User-Project X-Goog-Visitor-Id X-Goog-FieldMask X-Google-Project-Override x-goog-maps-api-salt x-goog-maps-api-signature x-goog-maps-client-id x-goog-maps-channel-id x-goog-spanner-database-role X-HTTP-Method-Override X-JavaScript-User-Agent X-Pan-Versionid X-Proxied-User-IP X-Origin X-Referer X-Requested-With X-Stadia-Client-Context X-Upload-Content-Length X-Upload-Content-Type X-Use-Alt-Service X-Use-HTTP-Status-Code-Override X-Ios-Bundle-Identifier X-Android-Package X-Android-Cert X-Goog-Maps-Ios-Uuid X-Goog-Maps-Android-Uuid X-Ariane-Xsrf-Token X-Earth-Engine-App-ID-Token X-Earth-Engine-Computation-Profile X-Earth-Engine-Computation-Profiling X-Play-Console-Experiments-Override X-Play-Console-Session-Id X-YouTube-Bootstrap-Logged-In X-YouTube-VVT X-YouTube-Page-CL X-YouTube-Page-Timestamp X-Compass-Routing-Destination X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-Identifier X-Goog-Meeting-Interop-Cohorts X-Goog-Meeting-Interop-Type X-Goog-Meeting-OidcIdToken X-Goog-Meeting-RtcClient X-Goog-Meeting-StartSource X-Goog-Meeting-Token X-Goog-Meeting-Viewer-Token x-sdm-id-token X-Sfdc-Authorization X-Server-Timeout x-foyer-client-environment X-Goog-First-Party-Reauth X-Server-Token x-rfui-request-context".split(" ")
      , Qh = "Digest Cache-Control Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date ETag Expires Last-Modified Location Pragma Range Server Transfer-Encoding WWW-Authenticate Vary Unzipped-Content-MD5 X-Correlation-ID X-Debug-Tracking-Id X-Google-Consent X-Google-EOM X-Goog-Generation X-Goog-Metageneration X-Goog-Safety-Content-Type X-Goog-Safety-Encoding X-Google-Trace X-Goog-Upload-Chunk-Granularity X-Goog-Upload-Control-URL X-Goog-Upload-Size-Received X-Goog-Upload-Status X-Goog-Upload-URL X-Goog-Diff-Download-Range X-Goog-Hash X-Goog-Updated-Authorization X-Server-Object-Version X-Guploader-Customer X-Guploader-Upload-Result X-Guploader-Uploadid X-Google-Gfe-Backend-Request-Cost X-Earth-Engine-Computation-Profile X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-RtcClient X-Goog-Meeting-Token X-Goog-Meeting-Viewer-Token X-Compass-Routing-Destination x-goog-chat-space-id".split(" ");
    var Rh, Sh, Th, Uh, Wh, Xh, Yh, Zh, $h, ai, bi, ci;
    Rh = null;
    Sh = null;
    Th = null;
    Uh = function(a, b) {
        var c = a.length;
        if (c != b.length)
            return !1;
        for (var d = 0; d < c; ++d) {
            var e = a.charCodeAt(d)
              , f = b.charCodeAt(d);
            65 <= e && 90 >= e && (e += 32);
            65 <= f && 90 >= f && (f += 32);
            if (e != f)
                return !1
        }
        return !0
    }
    ;
    _.Vh = function(a) {
        a = String(a || "").split("\x00").join("");
        for (var b = [], c = !0, d = a.length, e = 0; e < d; ++e) {
            var f = a.charAt(e)
              , h = a.charCodeAt(e);
            if (55296 <= h && 56319 >= h && e + 1 < d) {
                var k = a.charAt(e + 1)
                  , l = a.charCodeAt(e + 1);
                56320 <= l && 57343 >= l && (f += k,
                h = 65536 + (h - 55296 << 10) + (l - 56320),
                ++e)
            }
            if (!(0 <= h && 1114109 >= h) || 55296 <= h && 57343 >= h || 64976 <= h && 65007 >= h || 65534 == (h & 65534))
                h = 65533,
                f = String.fromCharCode(h);
            k = !(32 <= h && 126 >= h) || " " == f || c && ":" == f || "\\" == f;
            !c || "/" != f && "?" != f || (c = !1);
            "%" == f && (e + 2 >= d ? k = !0 : (l = 16 * parseInt(a.charAt(e + 1), 16) + parseInt(a.charAt(e + 2), 16),
            0 <= l && 255 >= l ? (h = l,
            f = 0 == h ? "" : "%" + (256 + l).toString(16).toUpperCase().substr(1),
            e += 2) : k = !0));
            k && (f = encodeURIComponent(f),
            1 >= f.length && (0 <= h && 127 >= h ? f = "%" + (256 + h).toString(16).toUpperCase().substr(1) : (h = 65533,
            f = encodeURIComponent(String.fromCharCode(h)))));
            b.push(f)
        }
        a = b.join("");
        a = a.split("#")[0];
        a = a.split("?");
        b = a[0].split("/");
        c = [];
        d = b.length;
        for (e = 0; e < d; ++e)
            f = b[e],
            h = f.split("%2E").join("."),
            h = h.split(encodeURIComponent("\uff0e")).join("."),
            "." == h ? e + 1 == d && c.push("") : ".." == h ? (0 < c.length && c.pop(),
            e + 1 == d && c.push("")) : c.push(f);
        a[0] = c.join("/");
        for (a = a.join("?"); a && "/" == a.charAt(0); )
            a = a.substr(1);
        return "/" + a
    }
    ;
    Wh = {
        "access-control-allow-origin": !0,
        "access-control-allow-credentials": !0,
        "access-control-expose-headers": !0,
        "access-control-max-age": !0,
        "access-control-allow-headers": !0,
        "access-control-allow-methods": !0,
        p3p: !0,
        "proxy-authenticate": !0,
        "set-cookie": !0,
        "set-cookie2": !0,
        status: !0,
        tsv: !0,
        "": !0
    };
    Xh = {
        "accept-charset": !0,
        "accept-encoding": !0,
        "access-control-request-headers": !0,
        "access-control-request-method": !0,
        "client-ip": !0,
        clientip: !0,
        connection: !0,
        "content-length": !0,
        cookie: !0,
        cookie2: !0,
        date: !0,
        dnt: !0,
        expect: !0,
        forwarded: !0,
        "forwarded-for": !0,
        "front-end-https": !0,
        host: !0,
        "keep-alive": !0,
        "max-forwards": !0,
        method: !0,
        origin: !0,
        "raw-post-data": !0,
        referer: !0,
        te: !0,
        trailer: !0,
        "transfer-encoding": !0,
        upgrade: !0,
        url: !0,
        "user-agent": !0,
        version: !0,
        via: !0,
        "x-att-deviceid": !0,
        "x-chrome-connected": !0,
        "x-client-data": !0,
        "x-client-ip": !0,
        "x-do-not-track": !0,
        "x-forwarded-by": !0,
        "x-forwarded-for": !0,
        "x-forwarded-host": !0,
        "x-forwarded-proto": !0,
        "x-geo": !0,
        "x-googapps-allowed-domains": !0,
        "x-origin": !0,
        "x-proxyuser-ip": !0,
        "x-real-ip": !0,
        "x-referer": !0,
        "x-uidh": !0,
        "x-user-ip": !0,
        "x-wap-profile": !0,
        "": !0
    };
    Yh = function(a) {
        if (!_.xc(a))
            return null;
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c];
            if ("string" === typeof d && d) {
                var e = d.toLowerCase();
                Uh(d, e) && (b[e] = d)
            }
        }
        for (var f in Oh)
            Object.prototype.hasOwnProperty.call(Oh, f) && (a = Oh[f],
            c = a.toLowerCase(),
            Uh(a, c) && Object.prototype.hasOwnProperty.call(b, c) && (b[c] = a));
        return b
    }
    ;
    Zh = new RegExp("(" + /[\t -~\u00A0-\u2027\u202A-\uD7FF\uE000-\uFFFF]/.source + "|" + /[\uD800-\uDBFF][\uDC00-\uDFFF]/.source + "){1,100}","g");
    $h = /[ \t]*(\r?\n[ \t]+)+/g;
    ai = /^[ \t]+|[ \t]+$/g;
    bi = function(a, b) {
        if (!b && "object" === typeof a && a && "number" === typeof a.length) {
            b = a;
            a = "";
            for (var c = b.length, d = 0; d < c; ++d) {
                var e = bi(b[d], !0);
                e && (a && (e = a + ", " + e),
                a = e)
            }
        }
        if ("string" === typeof a && (a = a.replace($h, " "),
        a = a.replace(ai, ""),
        "" == a.replace(Zh, "") && a))
            return a
    }
    ;
    ci = /^[-0-9A-Za-z!#\$%&'\*\+\.\^_`\|~]+$/g;
    _.di = function(a) {
        if ("string" !== typeof a || !a || !a.match(ci))
            return null;
        a = a.toLowerCase();
        if (null == Th) {
            var b = []
              , c = _.Gf("googleapis/headers/response");
            c && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.Gf("client/headers/response")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(Qh);
            (c = _.Gf("googleapis/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.Gf("client/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(Ph);
            for (var d in Oh)
                Object.prototype.hasOwnProperty.call(Oh, d) && b.push(Oh[d]);
            Th = Yh(b)
        }
        return null != Th && Th.hasOwnProperty(a) ? Th[a] : a
    }
    ;
    _.ei = function(a, b) {
        if (!_.di(a) || !bi(b))
            return null;
        a = a.toLowerCase();
        if (a.match(/^x-google|^x-gfe|^proxy-|^sec-/i) || Xh[a])
            return null;
        if (null == Rh) {
            b = [];
            var c = _.Gf("googleapis/headers/request");
            c && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.Gf("client/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(Ph);
            Rh = Yh(b)
        }
        return null != Rh && Rh.hasOwnProperty(a) ? Rh[a] : null
    }
    ;
    _.fi = function(a, b) {
        if (!_.di(a) || !bi(b))
            return null;
        a = a.toLowerCase();
        if (Wh[a])
            return null;
        if (null == Sh) {
            b = [];
            var c = _.Gf("googleapis/headers/response");
            c && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.Gf("client/headers/response")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(Qh);
            Sh = Yh(b)
        }
        return null != Sh && Sh.hasOwnProperty(a) ? a : null
    }
    ;
    _.gi = function(a, b) {
        if (_.di(b) && null != a && "object" === typeof a) {
            var c = void 0, d;
            for (d in a)
                if (Object.prototype.hasOwnProperty.call(a, d) && Uh(d, b)) {
                    var e = bi(a[d]);
                    e && (void 0 !== c && (e = c + ", " + e),
                    c = e)
                }
            return c
        }
    }
    ;
    _.hi = function(a, b, c, d) {
        var e = _.di(b);
        if (e) {
            c && (c = bi(c));
            b = b.toLowerCase();
            for (var f in a)
                Object.prototype.hasOwnProperty.call(a, f) && Uh(f, b) && delete a[f];
            c && (d || (b = e),
            a[b] = c)
        }
    }
    ;
    _.ii = function(a, b) {
        var c = {};
        if (!a)
            return c;
        a = a.split("\r\n");
        for (var d = a.length, e = 0; e < d; ++e) {
            var f = a[e];
            if (!f)
                break;
            var h = f.indexOf(":");
            if (!(0 >= h)) {
                var k = f.substring(0, h);
                if (k = _.di(k)) {
                    for (f = f.substring(h + 1); e + 1 < d && a[e + 1].match(/^[ \t]/); )
                        f += "\r\n" + a[e + 1],
                        ++e;
                    if (f = bi(f))
                        if (k = _.fi(k, f) || (b ? void 0 : k))
                            k = k.toLowerCase(),
                            h = _.gi(c, k),
                            void 0 !== h && (f = h + ", " + f),
                            _.hi(c, k, f, !0)
                }
            }
        }
        return c
    }
    ;
    /\uffff/.test("\uffff");
    var zy;
    _.xy = function(a, b) {
        var c = _.xc(b)
          , d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a)
                return;
            a = a[d[c]]
        }
        return a
    }
    ;
    _.yy = function(a) {
        if (!a || "object" !== typeof a)
            return a;
        if ("function" === typeof a.clone)
            return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map)
            return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set)
            return new Set(a);
        if (a instanceof Date)
            return new Date(a.getTime());
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length), c;
        for (c in a)
            b[c] = _.yy(a[c]);
        return b
    }
    ;
    zy = function(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2)
            _.Gi(a[b], a[b + 1], c);
        return c.join("&")
    }
    ;
    _.Ay = function(a, b) {
        var c = 2 == arguments.length ? zy(arguments[1], 0) : zy(arguments, 1);
        return _.Fi(a, c)
    }
    ;
    _.By = function(a, b) {
        _.Lj(a, "/") && (a = a.slice(0, -1));
        _.ed(b, "/") && (b = b.slice(1));
        return a + "/" + b
    }
    ;
    _.Cy = function(a) {
        switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            return !0;
        default:
            return !1
        }
    }
    ;
    var Ey, Fy, Gy;
    _.Dy = function(a) {
        _.ok.call(this);
        this.headers = new Map;
        this.f1 = a || null;
        this.vg = !1;
        this.cE = this.Sa = null;
        this.oB = "";
        this.Mr = 0;
        this.Zo = this.YH = this.LA = this.aG = !1;
        this.mq = 0;
        this.Sd = null;
        this.An = "";
        this.EN = this.Jh = !1;
        this.OE = this.tN = null
    }
    ;
    _.Ya(_.Dy, _.ok);
    _.Dy.prototype.Db = null;
    Ey = /^https?$/i;
    Fy = ["POST", "PUT"];
    Gy = [];
    _.Hy = function(a, b, c, d, e, f, h) {
        var k = new _.Dy;
        Gy.push(k);
        b && k.ma("complete", b);
        k.Sr("ready", k.D6);
        f && k.xD(f);
        h && (k.Jh = h);
        k.send(a, c, d, e)
    }
    ;
    _.g = _.Dy.prototype;
    _.g.D6 = function() {
        this.Ja();
        _.pb(Gy, this)
    }
    ;
    _.g.xD = function(a) {
        this.mq = Math.max(0, a)
    }
    ;
    _.g.setTrustToken = function(a) {
        this.tN = a
    }
    ;
    _.g.setAttributionReporting = function(a) {
        this.OE = a
    }
    ;
    _.g.send = function(a, b, c, d) {
        if (this.Sa)
            throw Error("Ea`" + this.oB + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.oB = a;
        this.Mr = 0;
        this.aG = !1;
        this.vg = !0;
        this.Sa = new XMLHttpRequest;
        this.cE = this.f1 ? this.f1.getOptions() : _.sy.getOptions();
        this.Sa.onreadystatechange = (0,
        _.B)(this.dX, this);
        try {
            this.YH = !0,
            this.Sa.open(b, String(a), !0),
            this.YH = !1
        } catch (h) {
            this.qz(5, h);
            return
        }
        a = c || "";
        c = new Map(this.headers);
        if (d)
            if (Object.getPrototypeOf(d) === Object.prototype)
                for (var e in d)
                    c.set(e, d[e]);
            else if ("function" === typeof d.keys && "function" === typeof d.get) {
                e = _.ua(d.keys());
                for (var f = e.next(); !f.done; f = e.next())
                    f = f.value,
                    c.set(f, d.get(f))
            } else
                throw Error("Fa`" + String(d));
        d = Array.from(c.keys()).find(function(h) {
            return "content-type" == h.toLowerCase()
        });
        e = _.Qa.FormData && a instanceof _.Qa.FormData;
        !_.ob(Fy, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = _.ua(c);
        for (d = b.next(); !d.done; d = b.next())
            c = _.ua(d.value),
            d = c.next().value,
            c = c.next().value,
            this.Sa.setRequestHeader(d, c);
        this.An && (this.Sa.responseType = this.An);
        "withCredentials"in this.Sa && this.Sa.withCredentials !== this.Jh && (this.Sa.withCredentials = this.Jh);
        if ("setTrustToken"in this.Sa && this.tN)
            try {
                this.Sa.setTrustToken(this.tN)
            } catch (h) {}
        if ("setAttributionReporting"in this.Sa && this.OE)
            try {
                this.Sa.setAttributionReporting(this.OE)
            } catch (h) {}
        try {
            Iy(this),
            0 < this.mq && ((this.EN = Jy(this.Sa)) ? (this.Sa.timeout = this.mq,
            this.Sa.ontimeout = (0,
            _.B)(this.Gh, this)) : this.Sd = _.vy(this.Gh, this.mq, this)),
            this.LA = !0,
            this.Sa.send(a),
            this.LA = !1
        } catch (h) {
            this.qz(5, h)
        }
    }
    ;
    var Jy = function(a) {
        return _.Zd && "number" === typeof a.timeout && void 0 !== a.ontimeout
    };
    _.Dy.prototype.Gh = function() {
        "undefined" != typeof _.Ma && this.Sa && (this.Mr = 8,
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    _.Dy.prototype.qz = function(a) {
        this.vg = !1;
        this.Sa && (this.Zo = !0,
        this.Sa.abort(),
        this.Zo = !1);
        this.Mr = a;
        Ky(this);
        Ly(this)
    }
    ;
    var Ky = function(a) {
        a.aG || (a.aG = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    };
    _.Dy.prototype.abort = function(a) {
        this.Sa && this.vg && (this.vg = !1,
        this.Zo = !0,
        this.Sa.abort(),
        this.Zo = !1,
        this.Mr = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        Ly(this))
    }
    ;
    _.Dy.prototype.va = function() {
        this.Sa && (this.vg && (this.vg = !1,
        this.Zo = !0,
        this.Sa.abort(),
        this.Zo = !1),
        Ly(this, !0));
        _.Dy.N.va.call(this)
    }
    ;
    _.Dy.prototype.dX = function() {
        this.isDisposed() || (this.YH || this.LA || this.Zo ? My(this) : this.zJ())
    }
    ;
    _.Dy.prototype.zJ = function() {
        My(this)
    }
    ;
    var My = function(a) {
        if (a.vg && "undefined" != typeof _.Ma && (!a.cE[1] || 4 != _.Ny(a) || 2 != a.getStatus()))
            if (a.LA && 4 == _.Ny(a))
                _.vy(a.dX, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            4 == _.Ny(a)) {
                a.vg = !1;
                try {
                    a.jp() ? (a.dispatchEvent("complete"),
                    a.dispatchEvent("success")) : (a.Mr = 6,
                    a.getStatus(),
                    Ky(a))
                } finally {
                    Ly(a)
                }
            }
    }
      , Ly = function(a, b) {
        if (a.Sa) {
            Iy(a);
            var c = a.Sa
              , d = a.cE[0] ? function() {}
            : null;
            a.Sa = null;
            a.cE = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
      , Iy = function(a) {
        a.Sa && a.EN && (a.Sa.ontimeout = null);
        a.Sd && (_.wy(a.Sd),
        a.Sd = null)
    };
    _.Dy.prototype.isActive = function() {
        return !!this.Sa
    }
    ;
    _.Dy.prototype.jp = function() {
        var a = this.getStatus(), b;
        if (!(b = _.Cy(a))) {
            if (a = 0 === a)
                a = String(this.oB).match(_.Ei)[1] || null,
                !a && _.Qa.self && _.Qa.self.location && (a = _.Qa.self.location.protocol.slice(0, -1)),
                a = !Ey.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    }
    ;
    _.Ny = function(a) {
        return a.Sa ? a.Sa.readyState : 0
    }
    ;
    _.Dy.prototype.getStatus = function() {
        try {
            return 2 < _.Ny(this) ? this.Sa.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    _.Oy = function(a) {
        try {
            return a.Sa ? a.Sa.responseText : ""
        } catch (b) {
            return ""
        }
    }
    ;
    _.Py = function(a) {
        try {
            if (!a.Sa)
                return null;
            if ("response"in a.Sa)
                return a.Sa.response;
            switch (a.An) {
            case "":
            case "text":
                return a.Sa.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer"in a.Sa)
                    return a.Sa.mozResponseArrayBuffer
            }
            return null
        } catch (b) {
            return null
        }
    }
    ;
    _.Dy.prototype.getResponseHeader = function(a) {
        if (this.Sa && 4 == _.Ny(this))
            return a = this.Sa.getResponseHeader(a),
            null === a ? void 0 : a
    }
    ;
    _.Dy.prototype.getAllResponseHeaders = function() {
        return this.Sa && 2 <= _.Ny(this) ? this.Sa.getAllResponseHeaders() || "" : ""
    }
    ;
    _.Jj(function(a) {
        _.Dy.prototype.zJ = a(_.Dy.prototype.zJ)
    });
    _.yu = function(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
    ;
    _.zu = function(a) {
        if (a.Ld && "function" == typeof a.Ld)
            return a.Ld();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
            return Array.from(a.values());
        if ("string" === typeof a)
            return a.split("");
        if (_.xc(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return _.tb(a)
    }
    ;
    _.Au = function(a) {
        if (a.Gg && "function" == typeof a.Gg)
            return a.Gg();
        if (!a.Ld || "function" != typeof a.Ld) {
            if ("undefined" !== typeof Map && a instanceof Map)
                return Array.from(a.keys());
            if (!("undefined" !== typeof Set && a instanceof Set)) {
                if (_.xc(a) || "string" === typeof a) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++)
                        b.push(c);
                    return b
                }
                return _.ub(a)
            }
        }
    }
    ;
    var Cu, Gu, Tu, Ou, Xu, Pu, Ru, Qu, Uu, Su, Yu;
    _.Bu = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ _.Ac()).toString(36)
    }
    ;
    Cu = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }
    ;
    _.Du = function(a, b, c) {
        for (var d = 0, e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
            var f = a.charCodeAt(d - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(d + e),
                !f || 61 == f || 38 == f || 35 == f)
                    return d;
            d += e + 1
        }
        return -1
    }
    ;
    _.Eu = /#|$/;
    _.Fu = function(a, b) {
        var c = a.search(_.Eu)
          , d = _.Du(a, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    ;
    Gu = function(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach)
            a.forEach(b, c);
        else if (_.xc(a) || "string" === typeof a)
            Array.prototype.forEach.call(a, b, c);
        else
            for (var d = _.Au(a), e = _.zu(a), f = e.length, h = 0; h < f; h++)
                b.call(c, e[h], d && d[h], a)
    }
    ;
    _.Hu = function(a, b) {
        this.ue = this.Ih = this.Qi = "";
        this.Qg = null;
        this.wG = this.tn = "";
        this.nh = !1;
        var c;
        a instanceof _.Hu ? (this.nh = void 0 !== b ? b : a.nh,
        _.Iu(this, a.Qi),
        _.Ju(this, a.Ih),
        _.Ku(this, a.hh()),
        _.Lu(this, a.Qg),
        this.setPath(a.getPath()),
        _.Mu(this, a.je.clone()),
        this.Bl(a.Pz())) : a && (c = String(a).match(_.Ei)) ? (this.nh = !!b,
        _.Iu(this, c[1] || "", !0),
        _.Ju(this, c[2] || "", !0),
        _.Ku(this, c[3] || "", !0),
        _.Lu(this, c[4]),
        this.setPath(c[5] || "", !0),
        _.Mu(this, c[6] || "", !0),
        this.Bl(c[7] || "", !0)) : (this.nh = !!b,
        this.je = new _.Nu(null,this.nh))
    }
    ;
    _.Hu.prototype.toString = function() {
        var a = []
          , b = this.Qi;
        b && a.push(Ou(b, Pu, !0), ":");
        var c = this.hh();
        if (c || "file" == b)
            a.push("//"),
            (b = this.Ih) && a.push(Ou(b, Pu, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.Qg,
            null != c && a.push(":", String(c));
        if (c = this.getPath())
            this.ue && "/" != c.charAt(0) && a.push("/"),
            a.push(Ou(c, "/" == c.charAt(0) ? Qu : Ru, !0));
        (c = this.je.toString()) && a.push("?", c);
        (c = this.Pz()) && a.push("#", Ou(c, Su));
        return a.join("")
    }
    ;
    _.Hu.prototype.resolve = function(a) {
        var b = this.clone()
          , c = !!a.Qi;
        c ? _.Iu(b, a.Qi) : c = !!a.Ih;
        c ? _.Ju(b, a.Ih) : c = !!a.ue;
        c ? _.Ku(b, a.hh()) : c = null != a.Qg;
        var d = a.getPath();
        if (c)
            _.Lu(b, a.Qg);
        else if (c = !!a.tn) {
            if ("/" != d.charAt(0))
                if (this.ue && !this.tn)
                    d = "/" + d;
                else {
                    var e = b.getPath().lastIndexOf("/");
                    -1 != e && (d = b.getPath().slice(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (_.Eb(e, "./") || _.Eb(e, "/.")) {
                d = _.ed(e, "/");
                e = e.split("/");
                for (var f = [], h = 0; h < e.length; ) {
                    var k = e[h++];
                    "." == k ? d && h == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && h == e.length && f.push("")) : (f.push(k),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? b.setPath(d) : c = a.zr();
        c ? _.Mu(b, a.je.clone()) : c = !!a.wG;
        c && b.Bl(a.Pz());
        return b
    }
    ;
    _.Hu.prototype.clone = function() {
        return new _.Hu(this)
    }
    ;
    _.Iu = function(a, b, c) {
        a.Qi = c ? Tu(b, !0) : b;
        a.Qi && (a.Qi = a.Qi.replace(/:$/, ""));
        return a
    }
    ;
    _.Ju = function(a, b, c) {
        a.Ih = c ? Tu(b) : b;
        return a
    }
    ;
    _.Hu.prototype.hh = function() {
        return this.ue
    }
    ;
    _.Ku = function(a, b, c) {
        a.ue = c ? Tu(b, !0) : b;
        return a
    }
    ;
    _.Lu = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("U`" + b);
            a.Qg = b
        } else
            a.Qg = null;
        return a
    }
    ;
    _.Hu.prototype.getPath = function() {
        return this.tn
    }
    ;
    _.Hu.prototype.setPath = function(a, b) {
        this.tn = b ? Tu(a, !0) : a;
        return this
    }
    ;
    _.Hu.prototype.zr = function() {
        return "" !== this.je.toString()
    }
    ;
    _.Mu = function(a, b, c) {
        b instanceof _.Nu ? (a.je = b,
        a.je.BL(a.nh)) : (c || (b = Ou(b, Uu)),
        a.je = new _.Nu(b,a.nh));
        return a
    }
    ;
    _.Hu.prototype.ob = function(a, b) {
        return _.Mu(this, a, b)
    }
    ;
    _.Hu.prototype.getQuery = function() {
        return this.je.toString()
    }
    ;
    _.Vu = function(a, b, c) {
        a.je.set(b, c);
        return a
    }
    ;
    _.g = _.Hu.prototype;
    _.g.ui = function(a) {
        return this.je.get(a)
    }
    ;
    _.g.Pz = function() {
        return this.wG
    }
    ;
    _.g.Bl = function(a, b) {
        this.wG = b ? Tu(a) : a;
        return this
    }
    ;
    _.g.removeParameter = function(a) {
        this.je.remove(a);
        return this
    }
    ;
    _.g.BL = function(a) {
        this.nh = a;
        this.je && this.je.BL(a)
    }
    ;
    _.Wu = function(a, b) {
        return a instanceof _.Hu ? a.clone() : new _.Hu(a,b)
    }
    ;
    Tu = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
    ;
    Ou = function(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Xu),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
    ;
    Xu = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    ;
    Pu = /[#\/\?@]/g;
    Ru = /[#\?:]/g;
    Qu = /[#\?]/g;
    Uu = /[#\?@]/g;
    Su = /#/g;
    _.Nu = function(a, b) {
        this.Ke = this.Wc = null;
        this.Eg = a || null;
        this.nh = !!b
    }
    ;
    Yu = function(a) {
        a.Wc || (a.Wc = new Map,
        a.Ke = 0,
        a.Eg && Cu(a.Eg, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
    ;
    _.g = _.Nu.prototype;
    _.g.Tb = function() {
        Yu(this);
        return this.Ke
    }
    ;
    _.g.add = function(a, b) {
        Yu(this);
        this.Eg = null;
        a = Zu(this, a);
        var c = this.Wc.get(a);
        c || this.Wc.set(a, c = []);
        c.push(b);
        this.Ke += 1;
        return this
    }
    ;
    _.g.remove = function(a) {
        Yu(this);
        a = Zu(this, a);
        return this.Wc.has(a) ? (this.Eg = null,
        this.Ke -= this.Wc.get(a).length,
        this.Wc.delete(a)) : !1
    }
    ;
    _.g.clear = function() {
        this.Wc = this.Eg = null;
        this.Ke = 0
    }
    ;
    _.g.isEmpty = function() {
        Yu(this);
        return 0 == this.Ke
    }
    ;
    _.g.fj = function(a) {
        Yu(this);
        a = Zu(this, a);
        return this.Wc.has(a)
    }
    ;
    _.g.zk = function(a) {
        var b = this.Ld();
        return _.ob(b, a)
    }
    ;
    _.g.forEach = function(a, b) {
        Yu(this);
        this.Wc.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    _.g.Gg = function() {
        Yu(this);
        for (var a = Array.from(this.Wc.values()), b = Array.from(this.Wc.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    _.g.Ld = function(a) {
        Yu(this);
        var b = [];
        if ("string" === typeof a)
            this.fj(a) && (b = b.concat(this.Wc.get(Zu(this, a))));
        else {
            a = Array.from(this.Wc.values());
            for (var c = 0; c < a.length; c++)
                b = b.concat(a[c])
        }
        return b
    }
    ;
    _.g.set = function(a, b) {
        Yu(this);
        this.Eg = null;
        a = Zu(this, a);
        this.fj(a) && (this.Ke -= this.Wc.get(a).length);
        this.Wc.set(a, [b]);
        this.Ke += 1;
        return this
    }
    ;
    _.g.get = function(a, b) {
        if (!a)
            return b;
        a = this.Ld(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    _.g.setValues = function(a, b) {
        this.remove(a);
        0 < b.length && (this.Eg = null,
        this.Wc.set(Zu(this, a), _.qb(b)),
        this.Ke += b.length)
    }
    ;
    _.g.toString = function() {
        if (this.Eg)
            return this.Eg;
        if (!this.Wc)
            return "";
        for (var a = [], b = Array.from(this.Wc.keys()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.Ld(d);
            for (var f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        }
        return this.Eg = a.join("&")
    }
    ;
    _.g.clone = function() {
        var a = new _.Nu;
        a.Eg = this.Eg;
        this.Wc && (a.Wc = new Map(this.Wc),
        a.Ke = this.Ke);
        return a
    }
    ;
    var Zu = function(a, b) {
        b = String(b);
        a.nh && (b = b.toLowerCase());
        return b
    };
    _.Nu.prototype.BL = function(a) {
        a && !this.nh && (Yu(this),
        this.Eg = null,
        this.Wc.forEach(function(b, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c),
            this.setValues(d, b))
        }, this));
        this.nh = a
    }
    ;
    _.Nu.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++)
            Gu(arguments[b], function(c, d) {
                this.add(d, c)
            }, this)
    }
    ;
    var aB = function(a) {
        if (!a || "function" !== typeof a)
            throw new $A("Must provide a function.");
        this.Rg = null;
        this.H7 = a
    }
      , bB = !1;
    bB = !1;
    var cB = function(a) {
        return new _.Wk(function(b) {
            var c = a.length
              , d = [];
            if (c)
                for (var e = function(k, l, m) {
                    c--;
                    d[k] = l ? {
                        Cz: !0,
                        value: m
                    } : {
                        Cz: !1,
                        reason: m
                    };
                    0 == c && b(d)
                }, f = 0, h; f < a.length; f++)
                    h = a[f],
                    _.cl(h, _.Xa(e, f, !0), _.Xa(e, f, !1));
            else
                b(d)
        }
        )
    }, dB, eB, fB, gB = {
        AP: function(a) {
            dB = a;
            try {
                delete gB.AP
            } catch (b) {}
        },
        BP: function(a) {
            eB = a;
            try {
                delete gB.BP
            } catch (b) {}
        },
        CP: function(a) {
            fB = a;
            try {
                delete gB.CP
            } catch (b) {}
        }
    }, hB = function(a) {
        return _.Cy(a.status)
    }, iB = function() {
        var a = !0
          , b = new XMLHttpRequest;
        b && void 0 !== b.withCredentials || (a = !1);
        return a
    }, jB = function(a, b) {
        if (null == b)
            return b;
        b = String(b);
        b.match(/^\/\/.*/) && (b = ("http:" == window.location.protocol ? "http:" : "https:") + b);
        b.match(/^\/([^\/].*)?$/) && window.location.host && String(window.location.protocol).match(/^https?:$/) && (b = window.location.protocol + "//" + window.location.host + b);
        var c = b.match(/^(https?:)(\/\/)?(\/([^\/].*)?)?$/i);
        c && window.location.host && String(window.location.protocol).match(/^https?:$/) && (b = c[1] + "//" + window.location.host + (c[3] || ""));
        b = b.replace(/^(https?:\/\/[^\/?#@]*)\/$/i, "$1");
        b = b.replace(/^(http:\/\/[-_a-z0-9.]+):0*80([\/?#].*)?$/i, "$1$2");
        b = b.replace(/^(https:\/\/[-_a-z0-9.]+):0*443([\/?#].*)?$/i, "$1$2");
        b.match(/^https?:\/\/[-_a-z0-9.]*[-_a-z][-_a-z0-9.]*$/i) && (b = b.toLowerCase());
        c = _.Gf("client/rewrite");
        _.qc(c) && Object.prototype.hasOwnProperty.call(c, b) ? b = String(c[b] || b) : (b = b.replace(/^(https?):\/\/www\.googleapis\.com$/, "$1://content.googleapis.com"),
        b = b.replace(/^(https?):\/\/www-(googleapis-[-_a-z0-9]+\.[-_a-z0-9]+\.google\.com)$/, "$1://content-$2"),
        b.match(/^https?:\/\/content(-[-_a-z0-9.]+)?\.googleapis\.com$/) || (b = b.replace(/^(https?):\/\/([-_a-z0-9]+(\.[-_a-z0-9]+)?\.googleapis\.com)$/, "$1://content-$2")));
        a && (a = _.Gf("client/firstPartyRewrite"),
        _.qc(a) && Object.prototype.hasOwnProperty.call(a, b) ? b = String(a[b] || b) : (b = b.replace(/^(https?):\/\/content\.googleapis\.com$/, "$1://clients6.google.com"),
        b = b.replace(/^(https?):\/\/content-([-a-z0-9]+)\.([-a-z0-9]+)\.googleapis\.com$/, "$1://$2-googleapis.$3.google.com"),
        b = b.replace(/^(https?):\/\/content-([-a-z0-9]+)\.googleapis\.com$/, "$1://$2.clients6.google.com"),
        b = b.replace(/^(https?):\/\/([-a-z0-9]+)-www-googleapis\.([-a-z0-9]+).google.com$/, "$1://content-googleapis-$2.$3.google.com")));
        return b
    }, $A = function(a) {
        _.kb.call(this, a)
    };
    _.C($A, _.kb);
    $A.prototype.name = "gapix.client.GapiClientError";
    aB.prototype.then = function(a, b, c) {
        this.Rg || (this.Rg = this.H7());
        return this.Rg.then(a, b, c)
    }
    ;
    aB.prototype.nD = function(a) {
        this.Rg || (this.Rg = a)
    }
    ;
    var kB = function(a) {
        var b = {}, c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = _.gi(a, c);
                d && (c = _.fi(c, d)) && _.hi(b, c, d, !0)
            }
        return b
    }
      , lB = {
        error: {
            code: -1,
            message: "A network error occurred and the request could not be completed."
        }
    }
      , mB = function(a, b, c, d) {
        _.Dy.call(this);
        this.Td = a;
        this.ZI = b;
        this.Wd = c;
        a = {};
        if (d)
            for (var e in d)
                Object.prototype.hasOwnProperty.call(d, e) && (b = _.gi(d, e),
                void 0 !== b && (e = _.ei(e, b)) && _.hi(a, e, b));
        d = {};
        for (e in a)
            Object.prototype.hasOwnProperty.call(a, e) && (d[unescape(encodeURIComponent(e))] = unescape(encodeURIComponent(a[e])));
        this.kv = d;
        this.Rg = null
    };
    _.C(mB, _.Dy);
    mB.prototype.then = function(a) {
        this.Rg || (this.Rg = (new _.Wk(function(b, c) {
            this.ma("error", (0,
            _.B)(function() {
                c(nB(this))
            }, this));
            this.ma("success", (0,
            _.B)(function() {
                b(nB(this))
            }, this));
            this.send(this.Td, this.ZI, this.Wd, this.kv)
        }
        ,this)).then(function(b) {
            b.headers = kB(b.headers);
            return b
        }, function(b) {
            return b.status ? (b.headers = kB(b.headers),
            _.al(b)) : _.al({
                result: lB,
                body: '{"error":{"code":-1,"message":"A network error occurred and the request could not be completed."}}',
                headers: null,
                status: null,
                statusText: null
            })
        }));
        return this.Rg.then.apply(this.Rg, arguments)
    }
    ;
    var nB = function(a) {
        var b = a.getStatus()
          , c = _.Oy(a);
        var d = 204 == b ? !1 : "" == a.An ? _.Kg(c) : _.Py(a);
        var e = a.getAllResponseHeaders();
        e = _.ii(e, !1);
        try {
            var f = 2 < _.Ny(a) ? a.Sa.statusText : ""
        } catch (h) {
            f = ""
        }
        return {
            result: d,
            body: c,
            headers: e,
            status: b,
            statusText: f
        }
    }
      , oB = /;\s*charset\s*=\s*("utf-?8"|utf-?8)\s*(;|$)/i
      , pB = /^(text\/[^\s;\/""]+|application\/(json(\+[^\s;\/""]*)?|([^\s;\/""]*\+)?xml))\s*(;|$)/i
      , qB = /;\s*charset\s*=/i
      , rB = /(([\r\n]{0,2}[A-Za-z0-9+\/]){4,4}){0,1024}([\r\n]{0,2}[A-Za-z0-9+\/][\r\n]{0,2}[AQgw]([\r\n]{0,2}=){2,2}|([\r\n]{0,2}[A-Za-z0-9+\/]){2,2}[\r\n]{0,2}[AEIMQUYcgkosw048][\r\n]{0,2}=|([\r\n]{0,2}[A-Za-z0-9+\/]){4,4})[\r\n]{0,2}/g
      , sB = function(a) {
        var b = [];
        a = a.replace(rB, function(c) {
            b.push(_.Jz(c));
            return ""
        });
        if (a.length)
            throw Error("Ga");
        return b.join("")
    }
      , tB = function(a) {
        var b = a.headers;
        if (b && "base64" === _.gi(b, "X-Goog-Safety-Encoding")) {
            var c = sB(a.body)
              , d = _.gi(b, "X-Goog-Safety-Content-Type");
            b["Content-Type"] = d;
            if (d.match(oB) || d.match(pB) && !d.match(qB))
                c = _.Fw(_.ti(c));
            _.hi(b, "X-Goog-Safety-Encoding");
            _.hi(b, "X-Goog-Safety-Content-Type");
            a.body = c
        }
    }
      , uB = function(a, b, c) {
        c || ((c = _.Gf("googleapis.config/proxy")) && (c = String(c).replace(/\/static\/proxy\.html$/, "") || "/"),
        c = String(c || ""));
        c || (c = _.Gf("googleapis.config/root"),
        b && (c = _.Gf("googleapis.config/root-1p") || c),
        c = String(c || ""));
        c = String(jB(b, c) || c);
        return a = _.By(c, a)
    }
      , vB = function(a, b) {
        var c = a.params || _.mf();
        c.url = c.path;
        var d = c.root;
        d = uB("/", _.gj(c.headers), d);
        d.match(/^(.*[^\/])?\/$/) && (d = d.substr(0, d.length - 1));
        c.root = d;
        a.params = c;
        _.yj.Fn("makeHttpRequests", [a], function(e, f) {
            e && e.gapiRequest ? (e.gapiRequest.data ? tB(e.gapiRequest.data) : tB(e),
            b(e, _.Lg(e))) : b(e, f)
        })
    }
      , wB = function(a) {
        var b = _.xy(a, "params", "headers");
        b && "object" === typeof b || (b = {});
        a = {};
        for (var c in b)
            if (Object.prototype.hasOwnProperty.call(b, c)) {
                var d = _.gi(b, c);
                d && (_.ei(c, d),
                _.hi(a, c, d))
            }
        c = "chrome-extension" == (window.location.href.match(_.Ei)[1] || null);
        a = _.gj(a);
        return !(c && a) && iB()
    }
      , xB = function(a) {
        return new _.Wk(function(b, c) {
            var d = function(e) {
                e && e.gapiRequest ? e = e.gapiRequest.data || e : c(e);
                e = {
                    result: 204 != e.status && _.Kg(e.body),
                    body: e.body,
                    headers: e.headers || null,
                    status: e.status || null,
                    statusText: e.statusText || null
                };
                hB(e) ? b(e) : c(e)
            };
            try {
                vB(a, d)
            } catch (e) {
                c(e)
            }
        }
        )
    }
      , yB = function(a) {
        var b = !_.Gf("client/cors") || !!_.Gf("client/xd4")
          , c = {};
        _.mn(a, function(d, e) {
            (d = _.ei(e, d)) || b || (d = _.di(e));
            d && (e = _.gi(a, d)) && _.hi(c, d, e)
        });
        return c
    }
      , zB = function(a) {
        var b = a.params || _.mf();
        a = _.Ck(b.headers || {});
        var c = b.httpMethod || "GET"
          , d = String(b.url || "")
          , e = encodeURIComponent("$unique");
        if (!("POST" === c || 0 <= _.Du(d, "$unique", d.search(_.Eu)) || 0 <= _.Du(d, e, d.search(_.Eu)))) {
            var f = [];
            for (h in a)
                Object.prototype.hasOwnProperty.call(a, h) && f.push(h.toLowerCase());
            f.sort();
            f.push(_.Bh(location.href));
            var h = f.join(":");
            f = _.Zi();
            f.update(h);
            h = f.hj().toLowerCase().substr(0, 7);
            h = String(parseInt(h, 16) % 1E3 + 1E3).substr(1);
            d = _.Ay(d, e, "gc" + h)
        }
        e = b.body || null;
        h = b.responseType || null;
        b = _.gj(a) || "1p" == b.authType;
        f = !!_.Gf("googleapis.config/auth/useUberProxyAuth") || !!_.Gf("client/withCredentials");
        _.hi(a, "X-Referer");
        a = yB(a);
        var k = new mB(d,c,e,a);
        k.Jh = b || f;
        h && (k.An = h);
        return new _.Wk(function(l, m) {
            k.then(function(n) {
                tB(n);
                l(n)
            }, function(n) {
                m(n)
            })
        }
        )
    }
      , AB = function(a, b) {
        var c = function(d) {
            d = _.Ck(d);
            delete d.result;
            d = {
                gapiRequest: {
                    data: d
                }
            };
            b && b(d, _.Lg(d))
        };
        zB(a).then(c, c)
    }
      , BB = function(a, b) {
        (_.Gf("client/cors") || _.Gf("client/xd4")) && wB(a) ? AB(a, b) : vB(a, b)
    }
      , CB = function(a) {
        this.zn = a;
        this.vg = !1;
        this.promise = {
            then: (0,
            _.B)(function(b, c, d) {
                this.vg || (this.vg = !0);
                this.ow && !this.lw ? this.zn.resolve(this.ow) : this.lw && !this.ow && this.zn.reject(this.lw);
                return this.zn.promise.then(b, c, d)
            }, this)
        }
    };
    CB.prototype.resolve = function(a) {
        this.vg ? this.zn.resolve(a) : this.ow || this.lw || (this.ow = a)
    }
    ;
    CB.prototype.reject = function(a) {
        this.vg ? this.zn.reject(a) : this.ow || this.lw || (this.lw = a)
    }
    ;
    var DB = function(a) {
        a = _.yy(a.error);
        return {
            code: a.code,
            data: a.errors,
            message: a.message
        }
    }
      , EB = function(a) {
        throw Error("Ja`" + a);
    };
    var FB = function(a) {
        aB.call(this, FB.prototype.Gp);
        if (!a || "object" != typeof a && "string" != typeof a)
            throw new $A("Missing required parameters");
        if ("string" === typeof a) {
            var b = {};
            b.path = a
        } else
            b = a;
        if (!b.path)
            throw new $A('Missing required parameter: "path"');
        this.Pi = {};
        this.Pi.path = b.path;
        this.Pi.method = b.method || "GET";
        this.Pi.params = b.params || {};
        this.Pi.headers = b.headers || {};
        this.Pi.body = b.body;
        this.Pi.root = b.root;
        this.Pi.responseType = b.responseType;
        this.Pi.apiId = b.apiId;
        this.Tn = b.authType || "auto";
        this.nba = !!b.isXd4;
        this.iV = !1;
        this.Xj(this.Tn);
        this.GY = !1
    };
    _.C(FB, aB);
    FB.prototype.wf = function() {
        return this.Pi
    }
    ;
    FB.prototype.Xj = function(a) {
        this.Tn = a;
        this.iV = "1p" === this.Tn
    }
    ;
    FB.prototype.Qu = function() {
        return this.iV
    }
    ;
    FB.prototype.nl = function() {
        if (!this.GY) {
            this.GY = !0;
            var a = this.Pi
              , b = a.headers = a.headers || {}
              , c = []
              , d = [];
            for (h in b)
                if (Object.prototype.hasOwnProperty.call(b, h)) {
                    c.push(h);
                    var e = h
                      , f = _.gi(b, e);
                    f && (e = _.ei(e, f) || _.di(e)) && d.push([e, f])
                }
            var h = 0;
            for (e = c.length; h < e; ++h)
                delete b[c[h]];
            c = 0;
            for (h = d.length; c < h; ++c)
                _.hi(b, d[c][0], d[c][1]);
            if (this.nba)
                d = "1p" == this.Tn;
            else {
                d = b;
                c = String(_.Gf("client/version", "1.1.0"));
                h = String(_.Gf("client/name", "google-api-javascript-client"));
                h = !0 === GB[h] ? h : "google-api-javascript-client";
                e = String(_.Gf("client/appName", ""));
                f = [];
                e && (f.push(e),
                f.push(" "));
                f.push(h);
                c && (f.push("/"),
                f.push(c));
                _.hi(d, "X-JavaScript-User-Agent", f.join(""));
                _.hi(b, "X-Requested-With", "XMLHttpRequest");
                d = _.gi(b, "Content-Type");
                a.body && !d && _.hi(b, "Content-Type", "application/json");
                _.Gf("client/allowExecutableResponse") || _.hi(b, "X-Goog-Encode-Response-If-Executable", "base64");
                (d = _.gi(b, "Content-Type")) && "application/json" == d.toLowerCase() && !a.params.alt && (a.params.alt = "json");
                (d = a.body || null) && _.qc(d) && (a.body = _.Lg(d));
                a.key = a.id;
                b = _.xj(b, void 0, this.Tn);
                d = _.gj(b);
                if ((c = b) && window.navigator) {
                    h = [];
                    for (e = 0; e < HB.length; e++)
                        (f = window.navigator[HB[e]]) && h.push(encodeURIComponent(HB[e]) + "=" + encodeURIComponent(f));
                    _.hi(c, "X-ClientDetails", h.join("&"))
                }
                (c = _.Gf("client/apiKey")) && void 0 === a.params.key && (a.params.key = c);
                (c = _.Gf("client/trace")) && !a.params.trace && (a.params.trace = c)
            }
            "auto" == this.Tn && (d ? this.Xj("1p") : (b = _.gi(b, "Authorization")) && String(b).match(/^(Bearer|MAC)[ \t]/i) ? this.Xj("oauth2") : this.Xj("none"));
            if ((b = String(a.path || "").match(/^(https?:\/\/[^\/?#]+)([\/?#].*)?$/i)) && !a.root)
                if (a.root = String(b[1]),
                a.path = String(b[2] || "/"),
                a.path.match(/^\/_ah\/api(\/.*)?$/))
                    a.root += "/_ah/api",
                    a.path = a.path.substr(8);
                else {
                    b = _.Gf("googleapis.config/root");
                    d && (b = _.Gf("googleapis.config/root-1p") || b);
                    b = String(b || "");
                    c = a.root + a.path;
                    if (h = b && c.substr(0, b.length) === b)
                        h = _.Wu(b),
                        e = _.Wu(c),
                        h = (!h.ue && !e.ue || h.hh() == e.hh()) && (null == h.Qg && null == e.Qg || h.Qg == e.Qg);
                    h && (a.path = c.substr(b.length),
                    a.root = b)
                }
            b = a.params;
            c = _.Vh(a.path);
            h = String(_.Gf("googleapis.config/xd3") || "");
            18 <= h.length && "/static/proxy.html" == h.substring(h.length - 18) && (h = h.substring(0, h.length - 18));
            h || (h = "/");
            e = _.Vh(h);
            if (h != e)
                throw Error("G");
            "/" != h.charAt(h.length - 1) && (h += "/");
            c = _.By(h, c);
            _.Lj(c, "/") && (c = c.substring(0, c.length - 1));
            h = _.mf();
            for (var k in b)
                Object.prototype.hasOwnProperty.call(b, k) && (e = encodeURIComponent(k),
                h[e] = b[k]);
            c = _.Ii(c, h);
            a.path = c;
            a.root = jB(!!d, a.root);
            a.url = uB(a.path, !!d, a.root)
        }
    }
    ;
    var IB = function(a) {
        a.nl();
        var b = a.Pi;
        return {
            key: "gapiRequest",
            params: {
                id: b.id,
                key: b.key,
                url: b.url,
                path: b.path,
                httpMethod: b.method,
                body: b.body || "",
                headers: b.headers || {},
                urlParams: {},
                root: b.root,
                authType: a.Tn
            }
        }
    };
    FB.prototype.execute = function(a) {
        var b = IB(this);
        BB(b, function(c, d) {
            var e = c;
            c.gapiRequest && (e = c.gapiRequest);
            e && e.data && (e = e.data);
            c = e;
            c = c instanceof Array ? c[0] : c;
            if (204 != c.status && c.body)
                try {
                    var f = _.Kg(c.body)
                } catch (h) {}
            a && a(f, d)
        })
    }
    ;
    FB.prototype.Gp = function() {
        var a = IB(this);
        return (_.Gf("client/cors") || _.Gf("client/xd4")) && wB(a) ? zB(a) : xB(a)
    }
    ;
    FB.prototype.yj = function() {
        return this.Gp()
    }
    ;
    var HB = ["appVersion", "platform", "userAgent"]
      , GB = {
        "google-api-gwt-client": !0,
        "google-api-javascript-client": !0
    };
    FB.prototype.execute = FB.prototype.execute;
    FB.prototype.then = FB.prototype.then;
    FB.prototype.getPromise = FB.prototype.yj;
    var JB = function(a) {
        if (!a || "object" != typeof a)
            throw new $A("Missing rpc parameters");
        if (!a.method)
            throw new $A("Missing rpc method");
        this.FC = a
    };
    JB.prototype.Zd = function() {
        var a = this.FC.transport;
        return a ? a.root || null : null
    }
    ;
    JB.prototype.execute = function(a) {
        var b = eB();
        b.add(this, {
            id: "gapiRpc",
            callback: this.Lv(a)
        });
        b.execute()
    }
    ;
    JB.prototype.xB = function(a) {
        var b = this.FC.method, c = String, d;
        (d = this.FC.apiVersion) || (d = String(b).split(".")[0],
        d = _.Gf("googleapis.config/versions/" + b) || _.Gf("googleapis.config/versions/" + d) || "v1",
        d = String(d));
        a = {
            jsonrpc: "2.0",
            id: a,
            method: b,
            apiVersion: c(d)
        };
        (b = this.FC.rpcParams) && (a.params = b);
        return a
    }
    ;
    JB.prototype.Lv = function(a) {
        return function(b, c) {
            if (b)
                if (b.error) {
                    var d = b.error;
                    null == d.error && (d.error = _.Ck(b.error))
                } else
                    d = b.result || b.data,
                    _.qc(d) && null == d.result && (d.result = _.Ck(b.result || b.data));
            else
                d = !1;
            a(d, c)
        }
    }
    ;
    JB.prototype.execute = JB.prototype.execute;
    var LB = function(a, b) {
        this.Le = b || 0;
        2 == this.Le ? (b = null,
        null != a && _.qc(a) && (b = {},
        b.method = a.method,
        b.rpcParams = a.rpcParams,
        b.transport = a.transport,
        b.root = a.root,
        b.apiVersion = a.apiVersion,
        b.authType = a.authType),
        this.Eb = new JB(b)) : (0 == this.Le && (b = a && a.callback) && (a.callback = KB(b)),
        b = null,
        null != a && (_.qc(a) ? (b = {},
        b.path = a.path,
        b.method = a.method,
        b.params = a.params,
        b.headers = a.headers,
        b.body = a.body,
        b.root = a.root,
        b.responseType = a.responseType,
        b.authType = a.authType,
        b.apiId = a.apiId) : "string" === typeof a && (b = a)),
        this.Eb = new FB(b))
    }
      , KB = function(a) {
        return function(b) {
            if (null != b && _.qc(b) && b.error) {
                var c = DB(b);
                b = _.Lg([{
                    id: "gapiRpc",
                    error: c
                }]);
                c.error = _.yy(c)
            } else
                null == b && (b = {}),
                c = _.yy(b),
                c.result = _.yy(b),
                b = _.Lg([{
                    id: "gapiRpc",
                    result: b
                }]);
            a(c, b)
        }
    };
    _.g = LB.prototype;
    _.g.getFormat = function() {
        return this.Le
    }
    ;
    _.g.execute = function(a) {
        this.Eb.execute(a && 1 == this.Le ? KB(a) : a)
    }
    ;
    _.g.then = function(a, b, c) {
        2 == this.Le && EB('The "then" method is not available on this object.');
        return this.Eb.then(a, b, c)
    }
    ;
    _.g.nD = function(a) {
        this.Eb.nD && this.Eb.nD(a)
    }
    ;
    _.g.wf = function() {
        if (this.Eb.wf)
            return this.Eb.wf()
    }
    ;
    _.g.nl = function() {
        this.Eb.wf && this.Eb.nl()
    }
    ;
    _.g.Zd = function() {
        if (this.Eb.Zd)
            return this.Eb.Zd()
    }
    ;
    _.g.xB = function(a) {
        if (this.Eb.xB)
            return this.Eb.xB(a)
    }
    ;
    _.g.Xj = function(a) {
        this.Eb.Xj && this.Eb.Xj(a)
    }
    ;
    _.g.Qu = function() {
        return this.Eb.Qu()
    }
    ;
    _.g.yj = function() {
        if (this.Eb.yj)
            return this.Eb.yj()
    }
    ;
    LB.prototype.execute = LB.prototype.execute;
    LB.prototype.then = LB.prototype.then;
    LB.prototype.getPromise = LB.prototype.yj;
    var MB = /<response-(.*)>/
      , NB = /^application\/http(;.+$|$)/
      , OB = ["clients6.google.com", "content.googleapis.com", "www.googleapis.com"]
      , PB = function(a, b) {
        a = _.gi(a, b);
        if (!a)
            throw new $A("Unable to retrieve header.");
        return a
    }
      , QB = function(a) {
        var b = void 0;
        a = _.ua(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value.wf().apiId;
            if ("string" !== typeof c)
                return "batch";
            if (void 0 === b)
                b = c;
            else if (b != c)
                return "batch"
        }
        b = _.Gf("client/batchPath/" + b) || "batch/" + b.split(":").join("/");
        return String(b)
    }
      , RB = function(a) {
        a = a.map(function(b) {
            return b.request
        });
        return QB(a)
    }
      , SB = function(a, b) {
        var c = [];
        a = a.wf();
        var d = function(f, h) {
            _.mn(f, function(k, l) {
                h.push(l + ": " + k)
            })
        }
          , e = {
            "Content-Type": "application/http",
            "Content-Transfer-Encoding": "binary"
        };
        e["Content-ID"] = "<" + b + ">";
        d(e, c);
        c.push("");
        c.push(a.method + " " + a.path);
        d(a.headers, c);
        c.push("");
        a.body && c.push(a.body);
        return c.join("\r\n")
    }
      , VB = function(a, b) {
        a = TB(a, b);
        var c = {};
        _.sb(a, function(d, e) {
            c[e] = UB(d, e)
        });
        return c
    }
      , UB = function(a, b) {
        return {
            result: a.result || a.body,
            rawResult: _.Lg({
                id: b,
                result: a.result || a.body
            }),
            id: b
        }
    }
      , TB = function(a, b) {
        a = (0,
        _.gd)(a);
        _.Lj(a, "--") && (a = a.substring(0, a.length - 2));
        a = a.split(b);
        b = _.mf();
        for (var c = 0; c < a.length; c++)
            if (a[c]) {
                var d;
                if (d = a[c]) {
                    _.Lj(d, "\r\n") && (d = d.substring(0, d.length - 2));
                    if (d) {
                        d = d.split("\r\n");
                        for (var e = 0, f = {
                            headers: {},
                            body: ""
                        }; e < d.length && "" == d[e]; )
                            e++;
                        for (f.outerHeaders = WB(d, e); e < d.length && "" != d[e]; )
                            e++;
                        e++;
                        var h = d[e++].split(" ");
                        f.status = Number(h[1]);
                        f.statusText = h.slice(2).join(" ");
                        for (f.headers = WB(d, e); e < d.length && "" != d[e]; )
                            e++;
                        e++;
                        f.body = d.slice(e).join("\r\n");
                        tB(f);
                        d = f
                    } else
                        d = null;
                    e = _.mf();
                    f = PB(d.outerHeaders, "Content-Type");
                    if (null == NB.exec(f))
                        throw new $A("Unexpected Content-Type <" + f + ">");
                    f = PB(d.outerHeaders, "Content-ID");
                    f = MB.exec(f);
                    if (!f)
                        throw new $A("Unable to recognize Content-Id.");
                    e.id = decodeURIComponent(f[1].split("@")[0].replace(/^.*[+]/, ""));
                    e.response = {
                        status: d.status,
                        statusText: d.statusText,
                        headers: d.headers
                    };
                    204 != d.status && (e.response.body = d.body,
                    e.response.result = _.Kg(d.body));
                    d = e
                } else
                    d = null;
                d && d.id && (b[d.id] = d.response)
            }
        return b
    }
      , WB = function(a, b) {
        for (var c = []; b < a.length && a[b]; b++)
            c.push(a[b]);
        return _.ii(c.join("\r\n"), !1)
    }
      , XB = function(a, b, c) {
        a = a || b;
        if (!a || "https" !== _.Wu(a).Qi)
            if (a = c ? _.Gf("googleapis.config/root-1p") : _.Gf("googleapis.config/root"),
            !a)
                return !1;
        a = jB(c, String(a)) || a;
        return OB.includes(_.Wu(a).hh())
    };
    var YB = function(a) {
        aB.call(this, YB.prototype.Gp);
        this.Jk = {};
        this.ty = {};
        this.xn = [];
        this.Hf = a;
        this.Mba = !!a;
        this.hU = this.BA = !1
    };
    _.C(YB, aB);
    var ZB = function(a, b) {
        a = _.ua(Object.values(a.Jk));
        for (var c = a.next(); !c.done; c = a.next())
            if (c.value.map(function(d) {
                return d.id
            }).includes(b))
                return !0;
        return !1
    };
    YB.prototype.Dq = function(a) {
        (function(b) {
            setTimeout(function() {
                throw b;
            })
        }
        )(a)
    }
    ;
    YB.prototype.add = function(a, b) {
        var c = b || _.mf();
        b = _.mf();
        if (!a)
            throw new $A("Batch entry " + (_.nf(c, "id") ? '"' + c.id + '" ' : "") + "is missing a request method");
        a.nl();
        b.request = a;
        var d = _.fl();
        d = new CB(d);
        b.AC = d;
        a.nD(b.AC.promise);
        d = a.wf().headers;
        _.gj(d) && (this.BA = !0);
        (d = String((d || {}).Authorization || "") || null) && d.match(/^Bearer|MAC[ \t]/i) && (this.hU = !0);
        d = a.wf().root;
        if (!this.Mba) {
            if (d && this.Hf && d != this.Hf)
                throw new $A('The "root" provided in this request is not consistent with that of existing requests in the batch.');
            this.Hf = d || this.Hf
        }
        if (_.nf(c, "id")) {
            d = c.id;
            if (ZB(this, d))
                throw new $A('Batch ID "' + d + '" already in use, please use another.');
            b.id = d
        } else {
            do
                b.id = String(Math.round(2147483647 * _.qj()));
            while (ZB(this, b.id))
        }
        b.callback = c.callback;
        c = "batch";
        XB(this.Hf, a.wf().path, this.BA) && (c = RB([b]));
        this.Jk[c] = this.Jk[c] || [];
        this.Jk[c].push(b);
        this.ty[b.id] = b;
        return b.id
    }
    ;
    var $B = function(a) {
        var b = []
          , c = XB(a.Hf, void 0, a.BA);
        1 < Object.entries(a.Jk).length && _.Pg.warn("Heterogeneous batch requests are deprecated. See https://developers.googleblog.com/2018/03/discontinuing-support-for-json-rpc-and.html");
        for (var d = _.ua(Object.entries(a.Jk)), e = d.next(); !e.done; e = d.next()) {
            e = _.ua(e.value);
            var f = e.next().value;
            e = e.next().value;
            for (var h = !0, k = _.ua(e), l = k.next(); !l.done; l = k.next())
                l = l.value,
                l.request.nl(),
                "batch" === f && c && (h = !1,
                l.gba = !0,
                l.request.wf.root = a.Hf,
                b.push(l.request),
                a.xn.push([l]));
            if (h) {
                var m = e;
                f = a.Hf;
                h = a.BA;
                k = a.hU;
                l = "batch" + String(Math.round(2147483647 * _.qj())) + String(Math.round(2147483647 * _.qj()));
                var n = "--" + l;
                l = "multipart/mixed; boundary=" + l;
                for (var p = {
                    path: RB(m),
                    method: "POST"
                }, q = [], t = 0; t < m.length; t++)
                    q.push(SB(m[t].request, [n.substr(n.indexOf("--") + 2), "+", encodeURIComponent(m[t].id).split("(").join("%28").split(")").join("%29").split(".").join("%2E"), "@googleapis.com"].join("")));
                p.body = [n, q.join("\r\n" + n + "\r\n"), n + "--"].join("\r\n") + "\r\n";
                p.root = f || null;
                _.Gf("client/xd4") && iB() ? (p.isXd4 = !0,
                p.params = {
                    $ct: l
                },
                p.headers = {},
                _.hi(p.headers, "Content-Type", "text/plain; charset=UTF-8"),
                h ? p.authType = "1p" : k && (p.authType = "oauth2"),
                f = new FB(p)) : (p.headers = {},
                _.hi(p.headers, "Content-Type", l),
                f = fB(p));
                b.push(f);
                a.xn.push(e)
            }
        }
        return b
    };
    YB.prototype.execute = function(a) {
        if (!(1 > Object.keys(this.Jk).length)) {
            var b = this.Lv(a);
            a = $B(this);
            var c = []
              , d = a.map(function(e) {
                return new _.Wk(function(f) {
                    try {
                        e.execute(function(h, k) {
                            return f({
                                xP: h,
                                wda: k
                            })
                        })
                    } catch (h) {
                        c.push(h),
                        f({
                            xP: {
                                Cz: !1,
                                reason: h
                            }
                        })
                    }
                }
                )
            });
            if (0 < c.length && c.length === a.length)
                throw c[0];
            _.dl(d).then(function(e) {
                var f = e.map(function(h) {
                    return h.wda
                });
                e = e.map(function(h) {
                    return h.xP
                });
                b(e, f)
            })
        }
    }
    ;
    YB.prototype.Gp = function() {
        var a = this;
        if (1 > Object.keys(this.Jk).length)
            return _.$k({});
        var b = $B(this).map(function(c) {
            return new _.Wk(function(d, e) {
                return c.yj().then(d, e)
            }
            )
        });
        return cB(b).then(function(c) {
            c = c.map(function(d) {
                return d.Cz ? d.value : d
            });
            return aC(a, c, !0)
        })
    }
    ;
    YB.prototype.DX = function(a, b, c, d) {
        var e = {};
        if (c) {
            e = b ? TB : VB;
            b = PB(a.headers, "Content-Type").split("boundary=")[1];
            if (!b)
                throw new $A("Boundary not indicated in response.");
            e = e(a.body, "--" + b)
        } else
            b ? (a.result = _.Kg(a.body),
            e[d] = a) : e[d] = UB(a, d);
        a = {};
        e = _.ua(Object.entries(e));
        for (b = e.next(); !b.done; b = e.next())
            if (c = _.ua(b.value),
            b = c.next().value,
            c = c.next().value,
            a[b] = c,
            !this.ty[b])
                throw new $A("Could not find batch entry for id " + b + ".");
        return a
    }
    ;
    var aC = function(a, b, c, d, e) {
        for (var f = !1, h = {}, k, l = 0, m = 0; m < b.length; m++) {
            var n = b[m];
            if (!1 === n.Cz) {
                l++;
                b[m] = n.reason;
                n = bC([b[m]]);
                for (var p = _.ua(a.xn[m]), q = p.next(); !q.done; q = p.next())
                    h[q.value.id] = n
            } else {
                if (1 > a.xn[m].length)
                    throw new $A("Error processing batch responses.");
                try {
                    var t = !(1 === a.xn[m].length && a.xn[m][0].gba)
                      , v = a.xn[m][0].id;
                    if (!c) {
                        p = n;
                        q = t;
                        var u = d[m]
                          , w = p;
                        if (u && (!w || !q)) {
                            var x = _.Kg(u);
                            x && (w = x.gapiRequest ? x.gapiRequest.data : x,
                            !q && p && (w.body = p))
                        }
                        if (!w)
                            throw new $A("The batch response is missing.");
                        n = w
                    }
                    p = void 0;
                    if (q = n) {
                        var z = q.headers;
                        if (z) {
                            var G = _.mf();
                            for (p in z)
                                if (Object.prototype.hasOwnProperty.call(z, p)) {
                                    var E = _.gi(z, p);
                                    _.hi(G, p, E, !0)
                                }
                            q.headers = G
                        }
                    }
                    if (t && 0 != PB(n.headers, "Content-Type").indexOf("multipart/mixed"))
                        throw new $A("The response's Content-Type is not multipart/mixed.");
                    k = k || _.yy(n);
                    var W = hB(n);
                    W && !hB(k) && (k.status = n.status,
                    k.statusText = n.statusText);
                    if (W || c || !t)
                        f = !0,
                        h = Object.assign(h, a.DX(n, c, t, v))
                } catch (N) {
                    for (l++,
                    b[m] = N,
                    n = bC([N]),
                    p = _.ua(a.xn[m]),
                    q = p.next(); !q.done; q = p.next())
                        h[q.value.id] = n
                }
            }
        }
        if (l === b.length) {
            d = bC(b);
            h = _.Lg(d);
            k = 0;
            a = Array.from(Object.values(a.Jk)).flat();
            f = _.ua(a);
            for (l = f.next(); !l.done; l = f.next())
                if (l = l.value,
                c)
                    l.AC.reject(d);
                else if (l.callback)
                    try {
                        k++,
                        l.callback(d, h)
                    } catch (N) {
                        YB.prototype.Dq(N)
                    }
            if (e)
                try {
                    e(d, h)
                } catch (N) {
                    YB.prototype.Dq(N)
                }
            else if (k !== a.length)
                throw 1 === b.length ? b[0] : d;
        } else {
            if (f)
                for (f = _.ua(Object.entries(h)),
                l = f.next(); !l.done; l = f.next())
                    if (l = _.ua(l.value),
                    m = l.next().value,
                    l = l.next().value,
                    c)
                        m = a.ty[m],
                        l && hB(l) ? m.AC.resolve(l) : m.AC.reject(l);
                    else if (m = a.ty[m],
                    m.callback) {
                        if (l && l.rawResult)
                            try {
                                delete l.rawResult
                            } catch (N) {}
                        try {
                            m.callback(l || !1, _.Lg(l))
                        } catch (N) {
                            YB.prototype.Dq(N)
                        }
                    }
            k.result = h || {};
            k.body = 1 === b.length ? k.body : "";
            if (e)
                try {
                    e(h || null, 1 === d.length ? d[0] : null)
                } catch (N) {
                    YB.prototype.Dq(N)
                }
            return k
        }
    }
      , bC = function(a) {
        var b = {
            error: {
                code: 0,
                message: "The batch request could not be fulfilled.  "
            }
        };
        a = _.ua(a);
        for (var c = a.next(); !c.done; c = a.next())
            (c = c.value) && c.message || c instanceof Error && c.message ? b.error.message += (c.message || c instanceof Error && c.message) + "  " : c && c.error && c.error.message && (b.error.message += c.error.message + "  ",
            b.error.code = c.error.code || b.error.code || 0);
        b.error.message = b.error.message.trim();
        return {
            result: b,
            body: _.Lg(b),
            headers: null,
            status: null,
            statusText: null
        }
    };
    YB.prototype.Lv = function(a) {
        var b = this;
        return function(c, d) {
            b.UE(c, d, a)
        }
    }
    ;
    YB.prototype.UE = function(a, b, c) {
        aC(this, a, !1, b, c)
    }
    ;
    YB.prototype.add = YB.prototype.add;
    YB.prototype.execute = YB.prototype.execute;
    YB.prototype.then = YB.prototype.then;
    var cC = function() {
        this.rm = [];
        this.Hf = this.Ef = null
    };
    cC.prototype.add = function(a, b) {
        b = b || {};
        var c = {}
          , d = Object.prototype.hasOwnProperty;
        if (a)
            c.Op = a;
        else
            throw new $A("Batch entry " + (d.call(b, "id") ? '"' + b.id + '" ' : "") + "is missing a request method");
        if (d.call(b, "id")) {
            a = b.id;
            for (d = 0; d < this.rm.length; d++)
                if (this.rm[d].id == a)
                    throw new $A('Batch ID "' + a + '" already in use, please use another.');
            c.id = a
        } else {
            do
                c.id = String(2147483647 * _.qj() | 0);
            while (d.call(this.rm, c.id))
        }
        c.callback = b.callback;
        this.rm.push(c);
        return c.id
    }
    ;
    var dC = function(a) {
        return function(b) {
            var c = b.body;
            if (b = b.result) {
                for (var d = {}, e = 0, f = b.length; e < f; ++e)
                    d[b[e].id] = b[e];
                a(d, c)
            } else
                a(b, c)
        }
    };
    cC.prototype.execute = function(a) {
        this.Ef = [];
        for (var b, c, d = 0; d < this.rm.length; d++)
            b = this.rm[d],
            c = b.Op,
            this.Ef.push(c.xB(b.id)),
            this.Hf = c.Zd() || this.Hf;
        c = this.Lv(a);
        a = {
            requests: this.Ef,
            root: this.Hf
        };
        b = {};
        d = a.headers || {};
        for (var e in d) {
            var f = e;
            if (Object.prototype.hasOwnProperty.call(d, f)) {
                var h = _.gi(d, f);
                h && (f = _.ei(f, h) || _.di(f)) && _.hi(b, f, h)
            }
        }
        _.hi(b, "Content-Type", "application/json");
        e = dC(c);
        fB({
            method: "POST",
            root: a.root || void 0,
            path: "/rpc",
            params: a.urlParams,
            headers: b,
            body: a.requests || []
        }).then(e, e)
    }
    ;
    cC.prototype.Lv = function(a) {
        var b = this;
        return function(c, d) {
            b.UE(c, d, a)
        }
    }
    ;
    cC.prototype.UE = function(a, b, c) {
        a || (a = {});
        for (var d = 0; d < this.rm.length; d++) {
            var e = this.rm[d];
            e.callback && e.callback(a[e.id] || !1, b)
        }
        c && c(a, b)
    }
    ;
    gB.BP(function() {
        return new cC
    });
    cC.prototype.add = cC.prototype.add;
    cC.prototype.execute = cC.prototype.execute;
    var eC = function(a, b) {
        this.Rca = a;
        this.Le = b || null;
        this.Pf = null
    };
    eC.prototype.cI = function(a) {
        this.Le = a;
        this.Pf = 2 == this.Le ? new cC : new YB(this.Rca)
    }
    ;
    eC.prototype.add = function(a, b) {
        if (!a)
            throw a = b || _.mf(),
            new $A("Batch entry " + (_.nf(a, "id") ? '"' + a.id + '" ' : "") + "is missing a request method");
        null === this.Le && this.cI(a.getFormat());
        this.Le !== a.getFormat() && EB("Unable to add item to batch.");
        var c = b && b.callback;
        1 == this.Le && c && (b.callback = function(d) {
            d = fC(d);
            var e = _.Lg([d]);
            c(d, e)
        }
        );
        return this.Pf.add(a, b)
    }
    ;
    eC.prototype.execute = function(a) {
        var b = a && 1 == this.Le ? function(c) {
            var d = [];
            _.mn(c, function(f, h) {
                f = fC(f);
                c[h] = f;
                d.push(f)
            });
            var e = _.Lg(d);
            a(c, e)
        }
        : a;
        this.Pf && this.Pf.execute(b)
    }
    ;
    var fC = function(a) {
        var b = a ? _.xy(a, "result") : null;
        _.qc(b) && null != b.error && (b = DB(b),
        a = {
            id: a.id,
            error: b
        });
        return a
    };
    eC.prototype.then = function(a, b, c) {
        2 == this.Le && EB('The "then" method is not available on this object.');
        return this.Pf.then(a, b, c)
    }
    ;
    eC.prototype.add = eC.prototype.add;
    eC.prototype.execute = eC.prototype.execute;
    eC.prototype.then = eC.prototype.then;
    var gC = function(a) {
        aB.call(this, gC.prototype.Gp);
        this.Eb = a
    };
    _.C(gC, aB);
    var hC = function(a) {
        a.Eb.nl();
        var b = a.Eb
          , c = b.wf();
        return !(XB(c.root, c.path, a.Eb.Qu()) ? "batch" !== QB([b]) : 1)
    };
    _.g = gC.prototype;
    _.g.execute = function(a) {
        var b = this;
        if (hC(this))
            this.Eb.execute(a);
        else {
            var c = function(d) {
                if ("function" === typeof a) {
                    var e = {
                        gapiRequest: {
                            data: {
                                status: d && d.status,
                                statusText: d && d.statusText,
                                headers: d && d.headers,
                                body: d && d.body
                            }
                        }
                    };
                    if (1 === b.getFormat()) {
                        a = KB(a);
                        var f = {}
                    }
                    var h = d ? d.result : !1;
                    d && 204 == d.status && (h = f,
                    delete e.gapiRequest.data.body);
                    a(h, _.Lg(e))
                }
            };
            this.yj().then(c, c)
        }
    }
    ;
    _.g.Gp = function() {
        return hC(this) ? this.Eb.yj() : new _.Wk(function(a, b) {
            var c = dB()
              , d = c.add(this.Eb, {
                id: "gapiRequest"
            });
            c.then(function(e) {
                var f = e.result;
                if (f && (f = f[d])) {
                    Object.prototype.hasOwnProperty.call(f, "result") || (f.result = !1);
                    Object.prototype.hasOwnProperty.call(f, "body") || (f.body = "");
                    hB(f) ? a(f) : b(f);
                    return
                }
                b(e)
            }, b)
        }
        ,this)
    }
    ;
    _.g.wf = function() {
        if (this.Eb.wf)
            return this.Eb.wf()
    }
    ;
    _.g.nl = function() {
        this.Eb.nl && this.Eb.nl()
    }
    ;
    _.g.Zd = function() {
        if (this.Eb.Zd)
            return this.Eb.Zd()
    }
    ;
    _.g.Xj = function(a) {
        this.Eb.Xj && this.Eb.Xj(a)
    }
    ;
    _.g.Qu = function() {
        return this.Eb.Qu()
    }
    ;
    _.g.getFormat = function() {
        return this.Eb.getFormat ? this.Eb.getFormat() : 0
    }
    ;
    _.g.yj = function() {
        return this.Gp()
    }
    ;
    gC.prototype.execute = gC.prototype.execute;
    gC.prototype.then = gC.prototype.then;
    gC.prototype.getPromise = gC.prototype.yj;
    var iC = "/rest?fields=" + encodeURIComponent("kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id") + "&pp=0"
      , jC = function(a, b) {
        return "/discovery/v1/apis/" + (encodeURIComponent(a) + "/" + encodeURIComponent(b) + iC)
    }
      , lC = function(a, b, c, d) {
        if (_.qc(a)) {
            var e = a;
            var f = a.name;
            a = a.version || "v1"
        } else
            f = a,
            a = b;
        if (!f || !a)
            throw new $A("Missing required parameters.");
        var h = c || function() {}
          , k = _.qc(d) ? d : {};
        c = function(l) {
            var m = l && l.result;
            if (!m || m.error || !m.name || !l || l.error || l.message || l.message)
                h(m && m.error ? m : l && (l.error || l.message || l.message) ? l : new $A("API discovery response missing required fields."));
            else {
                l = k.root;
                l = null != m.rootUrl ? String(m.rootUrl) : l;
                l = "string" === typeof l ? l.replace(/([^\/])\/$/, "$1") : void 0;
                k.root = l;
                m.name && m.version && !m.id && (m.id = [m.name, m.version].join(":"));
                m.id && (k.apiId = m.id,
                l = "client/batchPath/" + m.id,
                m.batchPath && !_.Gf(l) && _.Hf(l, m.batchPath));
                var n = m.servicePath
                  , p = m.parameters
                  , q = function(v) {
                    _.mn(v, function(u) {
                        if (!(u && u.id && u.path && u.httpMethod))
                            throw new $A("Missing required parameters");
                        var w = u.id.split("."), x = window.gapi.client, z;
                        for (z = 0; z < w.length - 1; z++) {
                            var G = w[z];
                            x[G] = x[G] || {};
                            x = x[G]
                        }
                        var E, W;
                        k && (k.hasOwnProperty("root") && (E = k.root),
                        k.hasOwnProperty("apiId") && (W = k.apiId));
                        G = window.gapi.client[w[0]];
                        G.UN || (G.UN = {
                            servicePath: n || "",
                            parameters: p,
                            apiId: W
                        });
                        w = w[z];
                        x[w] || (x[w] = _.Xa(kC, {
                            path: "string" === typeof u.path ? u.path : null,
                            httpMethod: "string" === typeof u.httpMethod ? u.httpMethod : null,
                            parameters: u.parameters,
                            parameterName: (u.request || {}).parameterName || "",
                            request: u.request,
                            root: E
                        }, G.UN))
                    })
                }
                  , t = function(v) {
                    _.mn(v, function(u) {
                        q(u.methods);
                        t(u.resources)
                    })
                };
                t(m.resources);
                q(m.methods);
                h.call()
            }
        }
        ;
        e ? c({
            result: e
        }) : 0 < f.indexOf("://") ? fB({
            path: f,
            params: {
                pp: 0,
                fields: 0 <= ("/" + f).indexOf("/discovery/v1/apis/") ? "kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id" : 'fields["kind"],fields["name"],fields["version"],fields["rootUrl"],fields["servicePath"],fields["resources"],fields["parameters"],fields["methods"],fields["batchPath"],fields["id"]'
            }
        }).then(c, c) : fB({
            path: jC(f, a),
            root: d && d.root
        }).then(c, c)
    }
      , kC = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        var f = b.servicePath || "";
        _.ed(f, "/") || (f = "/" + f);
        var h = mC(a.path, [a.parameters, b.parameters], c || {});
        c = h.Qd;
        var k = h.xga;
        f = _.By(f, h.path);
        h = k.root;
        delete k.root;
        var l = a.parameterName;
        !l && 1 == _.yu(k) && k.hasOwnProperty("resource") && (l = "resource");
        if (l) {
            var m = k[l];
            delete k[l]
        }
        null == m && (m = d);
        null == m && a.request && (_.qi(k) && (k = void 0),
        m = k);
        e = e || {};
        l = a.httpMethod;
        "GET" == l && void 0 !== m && "" != String(m) && (_.hi(e, "X-HTTP-Method-Override", l),
        l = "POST");
        if ((null == m || null != d) && k)
            for (var n in k)
                "string" === typeof k[n] && (c[n] = k[n]);
        return fB({
            path: f,
            method: l,
            params: c,
            headers: e,
            body: m,
            root: h || a.root,
            apiId: b.apiId
        }, 1)
    }
      , mC = function(a, b, c) {
        c = _.Ck(c);
        var d = {};
        _.ln(b, function(e) {
            _.mn(e, function(f, h) {
                var k = f.required;
                if ("path" == f.location)
                    if (Object.prototype.hasOwnProperty.call(c, h))
                        _.Eb(a, "{" + h + "}") ? (f = encodeURIComponent(String(c[h])),
                        a = a.replace("{" + h + "}", f)) : _.Eb(a, "{+" + h + "}") && (f = encodeURI(String(c[h])),
                        a = a.replace("{+" + h + "}", f)),
                        delete c[h];
                    else {
                        if (k)
                            throw new $A("Required path parameter " + h + " is missing.");
                    }
                else
                    "query" == f.location && Object.prototype.hasOwnProperty.call(c, h) && (d[h] = c[h],
                    delete c[h])
            })
        });
        if (b = c.trace)
            d.trace = b,
            delete c.trace;
        return {
            path: a,
            Qd: d,
            xga: c
        }
    };
    var nC = function(a, b, c, d) {
        var e = b || "v1"
          , f = _.qc(d) ? d : {
            root: d
        };
        if (c)
            lC(a, e, function(h) {
                if (h)
                    if (h.error)
                        c(h);
                    else {
                        var k = "API discovery was unsuccessful.";
                        if (h.message || h.message)
                            k = h.message || h.message;
                        c({
                            error: k,
                            code: 0
                        })
                    }
                else
                    c()
            }, f);
        else
            return new _.Wk(function(h, k) {
                var l = function(m) {
                    m ? k(m) : h()
                };
                try {
                    lC(a, e, l, f)
                } catch (m) {
                    k(m)
                }
            }
            )
    }
      , oC = new RegExp(/^((([Hh][Tt][Tt][Pp][Ss]?:)?\/\/[^\/?#]*)?\/)?/.source + /(_ah\/api\/)?(batch|rpc)(\/|\?|#|$)/.source)
      , pC = function(a, b) {
        if (!a)
            throw new $A("Missing required parameters");
        var c = "object" === typeof a ? a : {
            path: a
        };
        a = c.callback;
        delete c.callback;
        b = new LB(c,b);
        if (c = !!_.Gf("client/xd4") && iB()) {
            var d = b.wf();
            c = d.path;
            (d = d.root) && "/" !== d.charAt(d.length - 1) && (d += "/");
            d && c && c.substr(0, d.length) === d && (c = c.substr(d.length));
            c = !c.match(oC)
        }
        c && (b = new gC(b));
        return a ? (b.execute(a),
        null) : b
    };
    gB.CP(function(a) {
        return pC.apply(null, arguments)
    });
    var qC = function(a, b) {
        if (!a)
            throw new $A("Missing required parameters");
        for (var c = a.split("."), d = window.gapi.client, e = 0; e < c.length - 1; e++) {
            var f = c[e];
            d[f] = d[f] || {};
            d = d[f]
        }
        c = c[c.length - 1];
        if (!d[c]) {
            var h = b || {};
            d[c] = function(k) {
                var l = "string" == typeof h ? h : h.root;
                k && k.root && (l = k.root);
                return new LB({
                    method: a,
                    apiVersion: h.apiVersion,
                    rpcParams: k,
                    transport: {
                        name: "googleapis",
                        root: l
                    }
                },2)
            }
        }
    }
      , rC = function(a) {
        return new eC(a)
    };
    gB.AP(function(a) {
        return rC.apply(null, arguments)
    });
    var sC = function(a) {
        if (_.Vi.JSONRPC_ERROR_MOD)
            throw new $A(a + " is discontinued. See https://developers.googleblog.com/2018/03/discontinuing-support-for-json-rpc-and.html");
        _.Pg.log(a + " is deprecated. See https://developers.google.com/api-client-library/javascript/reference/referencedocs")
    };
    _.r("gapi.client.init", function(a) {
        a.apiKey && _.Hf("client/apiKey", a.apiKey);
        var b = _.Uc(a.discoveryDocs || [], function(d) {
            return nC(d)
        });
        if ((a.clientId || a.client_id) && a.scope) {
            var c = new _.Wk(function(d, e) {
                var f = function() {
                    _.Qa.gapi.auth2.init.call(_.Qa.gapi.auth2, a).then(function() {
                        d()
                    }, e)
                };
                bB ? f() : _.Qa.gapi.load("auth2", {
                    callback: function() {
                        f()
                    },
                    onerror: function(h) {
                        e(h || Error("Ka"))
                    }
                })
            }
            );
            b.push(c)
        } else
            (a.clientId || a.client_id || a.scope) && _.Pg.log("client_id and scope must both be provided to initialize OAuth.");
        return _.dl(b).then(function() {})
    });
    _.r("gapi.client.load", nC);
    _.r("gapi.client.newBatch", rC);
    _.r("gapi.client.newRpcBatch", function() {
        sC("gapi.client.newRpcBatch");
        return rC()
    });
    _.r("gapi.client.newHttpBatch", function(a) {
        sC("gapi.client.newHttpBatch");
        return new eC(a,0)
    });
    _.r("gapi.client.register", function(a, b) {
        sC("gapi.client.register");
        var c;
        b && (c = {
            apiVersion: b.apiVersion,
            root: b.root
        });
        qC(a, c)
    });
    _.r("gapi.client.request", pC);
    _.r("gapi.client.rpcRequest", function(a, b, c) {
        sC("gapi.client.rpcRequest");
        if (!a)
            throw new $A('Missing required parameter "method".');
        return new LB({
            method: a,
            apiVersion: b,
            rpcParams: c,
            transport: {
                name: "googleapis",
                root: c && c.root || ""
            }
        },2)
    });
    _.r("gapi.client.setApiKey", function(a) {
        _.Hf("client/apiKey", a);
        _.Hf("googleapis.config/developerKey", a)
    });
    _.r("gapi.client.setApiVersions", function(a) {
        sC("gapi.client.setApiVersions");
        _.Hf("googleapis.config/versions", a)
    });
    _.r("gapi.client.getToken", function(a) {
        return _.jj(a)
    });
    _.r("gapi.client.setToken", function(a, b) {
        a ? _.Hw(a, b) : _.Iw(b)
    });
    _.r("gapi.client.AuthType", {
        iha: "auto",
        NONE: "none",
        Wka: "oauth2",
        dja: "1p"
    });
    _.r("gapi.client.AuthType.AUTO", "auto");
    _.r("gapi.client.AuthType.NONE", "none");
    _.r("gapi.client.AuthType.OAUTH2", "oauth2");
    _.r("gapi.client.AuthType.FIRST_PARTY", "1p");
    _.Vi.FPA_SAMESITE_PHASE2_MOD = !0;
});
// Google Inc.


this.gbar_ = this.gbar_ || {};
(function(_) {
    var window = this;
    try {
        _.kd = function(a, b, c) {
            if (!a.j)
                if (c instanceof Array)
                    for (var d of c)
                        _.kd(a, b, d);
                else {
                    d = (0,
                    _.y)(a.C, a, b);
                    const e = a.v + c;
                    a.v++;
                    b.dataset.eqid = e;
                    a.B[e] = d;
                    b && b.addEventListener ? b.addEventListener(c, d, !1) : b && b.attachEvent ? b.attachEvent("on" + c, d) : a.o.log(Error("y`" + b))
                }
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ld = function() {
            if (!_.q.addEventListener || !Object.defineProperty)
                return !1;
            var a = !1
              , b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            try {
                const c = ()=>{}
                ;
                _.q.addEventListener("test", c, b);
                _.q.removeEventListener("test", c, b)
            } catch (c) {}
            return a
        }();
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var md = document.querySelector(".gb_k .gb_d")
          , nd = document.querySelector("#gb.gb_Zc");
        md && !nd && _.kd(_.Vc, md, "click");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var rd;
        _.od = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }
        ;
        _.pd = function(a, b) {
            if (void 0 !== a.i || void 0 !== a.j)
                throw Error("A");
            a.j = b;
            _.Lc(a)
        }
        ;
        _.qd = class extends _.Q {
            constructor(a) {
                super(a)
            }
        }
        ;
        rd = class extends _.Zc {
        }
        ;
        _.sd = function(a, b) {
            if (b in a.i)
                return a.i[b];
            throw new rd;
        }
        ;
        _.td = function(a) {
            return _.sd(_.Wc.i(), a)
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

 SPDX-License-Identifier: Apache-2.0
*/
        var zd, Id, Kd;
        _.ud = function(a) {
            if (null == a)
                return a;
            if ("string" === typeof a) {
                if (!a)
                    return;
                a = +a
            }
            if ("number" === typeof a)
                return Number.isFinite(a) ? a | 0 : void 0
        }
        ;
        _.vd = function(a) {
            const b = a.length;
            if (0 < b) {
                const c = Array(b);
                for (let d = 0; d < b; d++)
                    c[d] = a[d];
                return c
            }
            return []
        }
        ;
        _.xd = function(a) {
            if (a instanceof _.wd)
                return a.i;
            throw Error("C");
        }
        ;
        zd = function(a) {
            return new yd(b=>b.substr(0, a.length + 1).toLowerCase() === a + ":")
        }
        ;
        _.Bd = function(a, b=_.Ad) {
            if (a instanceof _.wd)
                return a;
            for (let c = 0; c < b.length; ++c) {
                const d = b[c];
                if (d instanceof yd && d.Yg(a))
                    return new _.wd(a)
            }
        }
        ;
        _.Dd = function(a) {
            if (Cd.test(a))
                return a
        }
        ;
        _.Ed = function(a) {
            return a instanceof _.wd ? _.xd(a) : _.Dd(a)
        }
        ;
        _.Fd = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        }
        ;
        _.Gd = function(a, b, c) {
            return void 0 !== _.ib(a, b, c, !1)
        }
        ;
        _.Hd = function(a, b) {
            return _.ud(_.rc(a, b))
        }
        ;
        _.R = function(a, b) {
            a = _.rc(a, b);
            return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
        }
        ;
        _.S = function(a, b, c=0) {
            return _.jb(_.Hd(a, b), c)
        }
        ;
        Id = 0;
        _.Jd = function(a) {
            return Object.prototype.hasOwnProperty.call(a, _.vb) && a[_.vb] || (a[_.vb] = ++Id)
        }
        ;
        Kd = function(a) {
            return a
        }
        ;
        _.Ld = function(a) {
            var b = null
              , c = _.q.trustedTypes;
            if (!c || !c.createPolicy)
                return b;
            try {
                b = c.createPolicy(a, {
                    createHTML: Kd,
                    createScript: Kd,
                    createScriptURL: Kd
                })
            } catch (d) {
                _.q.console && _.q.console.error(d.message)
            }
            return b
        }
        ;
        _.Md = function(a, b) {
            return 0 == a.lastIndexOf(b, 0)
        }
        ;
        _.Nd = function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        }
        ;
        try {
            (new self.OffscreenCanvas(0,0)).getContext("2d")
        } catch (a) {}
        ;var Od;
        _.Pd = function() {
            void 0 === Od && (Od = _.Ld("ogb-qtm#html"));
            return Od
        }
        ;
        var Sd;
        _.Qd = class {
            constructor(a) {
                this.i = a
            }
            toString() {
                return this.i + ""
            }
        }
        ;
        _.Rd = function(a) {
            return a instanceof _.Qd && a.constructor === _.Qd ? a.i : "type_error:TrustedResourceUrl"
        }
        ;
        Sd = {};
        _.Td = function(a) {
            const b = _.Pd();
            a = b ? b.createScriptURL(a) : a;
            return new _.Qd(a,Sd)
        }
        ;
        _.wd = class {
            constructor(a) {
                this.i = a
            }
            toString() {
                return this.i
            }
        }
        ;
        _.Ud = new _.wd("about:invalid#zClosurez");
        var yd, Cd;
        yd = class {
            constructor(a) {
                this.Yg = a
            }
        }
        ;
        _.Ad = [zd("data"), zd("http"), zd("https"), zd("mailto"), zd("ftp"), new yd(a=>/^[^:]*([/?#]|$)/.test(a))];
        Cd = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
        _.Vd = {};
        _.Wd = class {
            constructor(a) {
                this.i = a
            }
            toString() {
                return this.i.toString()
            }
        }
        ;
        _.Xd = new _.Wd("",_.Vd);
        _.Yd = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
        _.Zd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
        _.$d = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
        var ae;
        ae = {};
        _.ce = function(a) {
            return a instanceof _.be && a.constructor === _.be ? a.i : "type_error:SafeHtml"
        }
        ;
        _.de = function(a) {
            const b = _.Pd();
            a = b ? b.createHTML(a) : a;
            return new _.be(a,ae)
        }
        ;
        _.be = class {
            constructor(a) {
                this.i = a
            }
            toString() {
                return this.i.toString()
            }
        }
        ;
        _.ee = new _.be(_.q.trustedTypes && _.q.trustedTypes.emptyHTML || "",ae);
        _.fe = _.de("<br>");
        var he;
        _.ge = function(a) {
            let b = !1, c;
            return function() {
                b || (c = a(),
                b = !0);
                return c
            }
        }(function() {
            var a = document.createElement("div")
              , b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = _.ce(_.ee);
            return !b.parentElement
        });
        he = /^[\w+/_-]+[=]{0,2}$/;
        _.ie = function(a) {
            a = (a || _.q).document;
            return a.querySelector ? (a = a.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (a = a.nonce || a.getAttribute("nonce")) && he.test(a) ? a : "" : ""
        }
        ;
        _.je = function(a, b) {
            this.width = a;
            this.height = b
        }
        ;
        _.m = _.je.prototype;
        _.m.aspectRatio = function() {
            return this.width / this.height
        }
        ;
        _.m.Eb = function() {
            return !(this.width * this.height)
        }
        ;
        _.m.ceil = function() {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        }
        ;
        _.m.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        }
        ;
        _.m.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        }
        ;
        _.T = function(a, b) {
            var c = b || document;
            if (c.getElementsByClassName)
                a = c.getElementsByClassName(a)[0];
            else {
                c = document;
                var d = b || c;
                a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.ke(c, a, b)[0] || null
            }
            return a || null
        }
        ;
        _.ke = function(a, b, c) {
            var d;
            a = c || a;
            if (a.querySelectorAll && a.querySelector && b)
                return a.querySelectorAll(b ? "." + b : "");
            if (b && a.getElementsByClassName) {
                var e = a.getElementsByClassName(b);
                return e
            }
            e = a.getElementsByTagName("*");
            if (b) {
                var f = {};
                for (c = d = 0; a = e[c]; c++) {
                    var g = a.className;
                    "function" == typeof g.split && _.sa(g.split(/\s+/), b) && (f[d++] = a)
                }
                f.length = d;
                return f
            }
            return e
        }
        ;
        _.me = function(a) {
            return _.le(document, a)
        }
        ;
        _.le = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }
        ;
        _.ne = function(a) {
            for (var b; b = a.firstChild; )
                a.removeChild(b)
        }
        ;
        _.oe = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.pe = function(a) {
            return _.od(a) && 1 == a.nodeType
        }
        ;
        _.qe = function(a, b) {
            if ("textContent"in a)
                a.textContent = b;
            else if (3 == a.nodeType)
                a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild; )
                    a.removeChild(a.lastChild);
                a.firstChild.data = String(b)
            } else
                _.ne(a),
                a.appendChild(_.oe(a).createTextNode(String(b)))
        }
        ;
        var re;
        _.se = function(a, b, c) {
            Array.isArray(c) && (c = c.join(" "));
            var d = "aria-" + b;
            "" === c || void 0 == c ? (re || (re = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }),
            c = re,
            b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
        }
        ;
        var we;
        _.ve = function(a, b, c, d, e, f) {
            if (_.Kb && e)
                return _.te(a);
            if (e && !d)
                return !1;
            if (!_.Ib) {
                "number" === typeof b && (b = _.ue(b));
                var g = 17 == b || 18 == b || _.Kb && 91 == b;
                if ((!c || _.Kb) && g || _.Kb && 16 == b && (d || f))
                    return !1
            }
            if ((_.Jb || _.Gb) && d && c)
                switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
                }
            if (_.B && d && b == a)
                return !1;
            switch (a) {
            case 13:
                return _.Ib ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(_.Jb || _.Gb || _.Ib)
            }
            return _.Ib && (d || e || f) ? !1 : _.te(a)
        }
        ;
        _.te = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (_.Jb || _.Gb) && 0 == a)
                return !0;
            switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
            case 58:
                return !0;
            case 173:
            case 171:
                return _.Ib;
            default:
                return !1
            }
        }
        ;
        _.ue = function(a) {
            if (_.Ib)
                a = we(a);
            else if (_.Kb && _.Jb)
                switch (a) {
                case 93:
                    a = 91
                }
            return a
        }
        ;
        we = function(a) {
            switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
            }
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var xe, ye, ze;
        xe = function(a) {
            return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
        }
        ;
        ye = function(a) {
            return a.classList ? a.classList : xe(a).match(/\S+/g) || []
        }
        ;
        ze = function(a, b) {
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
        ;
        _.U = function(a, b) {
            return a.classList ? a.classList.contains(b) : _.sa(ye(a), b)
        }
        ;
        _.Ae = function(a, b) {
            if (a.classList)
                a.classList.add(b);
            else if (!_.U(a, b)) {
                var c = xe(a);
                ze(a, c + (0 < c.length ? " " + b : b))
            }
        }
        ;
        _.Be = function(a, b) {
            if (a.classList)
                Array.prototype.forEach.call(b, function(e) {
                    _.Ae(a, e)
                });
            else {
                var c = {};
                Array.prototype.forEach.call(ye(a), function(e) {
                    c[e] = !0
                });
                Array.prototype.forEach.call(b, function(e) {
                    c[e] = !0
                });
                b = "";
                for (var d in c)
                    b += 0 < b.length ? " " + d : d;
                ze(a, b)
            }
        }
        ;
        _.Ce = function(a, b) {
            a.classList ? a.classList.remove(b) : _.U(a, b) && ze(a, Array.prototype.filter.call(ye(a), function(c) {
                return c != b
            }).join(" "))
        }
        ;
        _.De = function(a, b) {
            a.classList ? Array.prototype.forEach.call(b, function(c) {
                _.Ce(a, c)
            }) : ze(a, Array.prototype.filter.call(ye(a), function(c) {
                return !_.sa(b, c)
            }).join(" "))
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Ge;
        _.Ee = function(a, b) {
            b = _.ra(a, b);
            let c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        }
        ;
        _.Fe = function(a, b, c) {
            for (const d in a)
                b.call(c, a[d], d, a)
        }
        ;
        Ge = function(a, b) {
            for (const c in a)
                if (b.call(void 0, a[c], c, a))
                    return !0;
            return !1
        }
        ;
        _.He = function(a, b) {
            try {
                return _.Eb(a[b]),
                !0
            } catch (c) {}
            return !1
        }
        ;
        _.Je = function(a, b) {
            this.type = "function" == typeof _.Ie && a instanceof _.Ie ? String(a) : a;
            this.currentTarget = this.target = b;
            this.defaultPrevented = this.i = !1
        }
        ;
        _.Je.prototype.stopPropagation = function() {
            this.i = !0
        }
        ;
        _.Je.prototype.preventDefault = function() {
            this.defaultPrevented = !0
        }
        ;
        _.Ke = function(a, b) {
            _.Je.call(this, a ? a.type : "");
            this.relatedTarget = this.currentTarget = this.target = null;
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
            this.key = "";
            this.charCode = this.keyCode = 0;
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.state = null;
            this.pointerId = 0;
            this.pointerType = "";
            this.timeStamp = 0;
            this.Ta = null;
            a && this.init(a, b)
        }
        ;
        _.A(_.Ke, _.Je);
        var Le = {
            2: "touch",
            3: "pen",
            4: "mouse"
        };
        _.Ke.prototype.init = function(a, b) {
            var c = this.type = a.type
              , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ? _.Ib && (_.He(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
            this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
            this.screenX = d.screenX || 0,
            this.screenY = d.screenY || 0) : (this.offsetX = _.Jb || void 0 !== a.offsetX ? a.offsetX : a.layerX,
            this.offsetY = _.Jb || void 0 !== a.offsetY ? a.offsetY : a.layerY,
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
            this.screenX = a.screenX || 0,
            this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Le[a.pointerType] || "";
            this.state = a.state;
            this.timeStamp = a.timeStamp;
            this.Ta = a;
            a.defaultPrevented && _.Ke.W.preventDefault.call(this)
        }
        ;
        _.Ke.prototype.stopPropagation = function() {
            _.Ke.W.stopPropagation.call(this);
            this.Ta.stopPropagation ? this.Ta.stopPropagation() : this.Ta.cancelBubble = !0
        }
        ;
        _.Ke.prototype.preventDefault = function() {
            _.Ke.W.preventDefault.call(this);
            var a = this.Ta;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }
        ;
        _.Me = "closure_listenable_" + (1E6 * Math.random() | 0);
        _.Ne = function(a) {
            return !(!a || !a[_.Me])
        }
        ;
        var Oe = 0;
        var Pe;
        Pe = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Dd = e;
            this.key = ++Oe;
            this.od = this.vd = !1
        }
        ;
        _.Qe = function(a) {
            a.od = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.Dd = null
        }
        ;
        _.Re = function(a) {
            this.src = a;
            this.i = {};
            this.j = 0
        }
        ;
        _.Re.prototype.add = function(a, b, c, d, e) {
            var f = a.toString();
            a = this.i[f];
            a || (a = this.i[f] = [],
            this.j++);
            var g = Se(a, b, d, e);
            -1 < g ? (b = a[g],
            c || (b.vd = !1)) : (b = new Pe(b,this.src,f,!!d,e),
            b.vd = c,
            a.push(b));
            return b
        }
        ;
        _.Re.prototype.remove = function(a, b, c, d) {
            a = a.toString();
            if (!(a in this.i))
                return !1;
            var e = this.i[a];
            b = Se(e, b, c, d);
            return -1 < b ? (_.Qe(e[b]),
            Array.prototype.splice.call(e, b, 1),
            0 == e.length && (delete this.i[a],
            this.j--),
            !0) : !1
        }
        ;
        _.Te = function(a, b) {
            var c = b.type;
            if (!(c in a.i))
                return !1;
            var d = _.Ee(a.i[c], b);
            d && (_.Qe(b),
            0 == a.i[c].length && (delete a.i[c],
            a.j--));
            return d
        }
        ;
        _.Re.prototype.Ad = function(a, b) {
            a = this.i[a.toString()];
            var c = [];
            if (a)
                for (var d = 0; d < a.length; ++d) {
                    var e = a[d];
                    e.capture == b && c.push(e)
                }
            return c
        }
        ;
        _.Re.prototype.Zc = function(a, b, c, d) {
            a = this.i[a.toString()];
            var e = -1;
            a && (e = Se(a, b, c, d));
            return -1 < e ? a[e] : null
        }
        ;
        _.Re.prototype.hasListener = function(a, b) {
            var c = void 0 !== a
              , d = c ? a.toString() : ""
              , e = void 0 !== b;
            return Ge(this.i, function(f) {
                for (var g = 0; g < f.length; ++g)
                    if (!(c && f[g].type != d || e && f[g].capture != b))
                        return !0;
                return !1
            })
        }
        ;
        var Se = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.od && f.listener == b && f.capture == !!c && f.Dd == d)
                    return e
            }
            return -1
        };
        var Ue, Ve, We, Ze, af, cf, df, gf;
        Ue = "closure_lm_" + (1E6 * Math.random() | 0);
        Ve = {};
        We = 0;
        _.V = function(a, b, c, d, e) {
            if (d && d.once)
                return _.Xe(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++)
                    _.V(a, b[f], c, d, e);
                return null
            }
            c = _.Ye(c);
            return _.Ne(a) ? a.listen(b, c, _.od(d) ? !!d.capture : !!d, e) : Ze(a, b, c, !1, d, e)
        }
        ;
        Ze = function(a, b, c, d, e, f) {
            if (!b)
                throw Error("G");
            var g = _.od(e) ? !!e.capture : !!e
              , h = _.$e(a);
            h || (a[Ue] = h = new _.Re(a));
            c = h.add(b, c, d, g, f);
            if (c.proxy)
                return c;
            d = af();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)
                _.ld || (e = g),
                void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent)
                a.attachEvent(cf(b.toString()), d);
            else if (a.addListener && a.removeListener)
                a.addListener(d);
            else
                throw Error("H");
            We++;
            return c
        }
        ;
        af = function() {
            const a = df
              , b = function(c) {
                return a.call(b.src, b.listener, c)
            };
            return b
        }
        ;
        _.Xe = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++)
                    _.Xe(a, b[f], c, d, e);
                return null
            }
            c = _.Ye(c);
            return _.Ne(a) ? a.Ha(b, c, _.od(d) ? !!d.capture : !!d, e) : Ze(a, b, c, !0, d, e)
        }
        ;
        _.ef = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++)
                    _.ef(a, b[f], c, d, e);
            else
                d = _.od(d) ? !!d.capture : !!d,
                c = _.Ye(c),
                _.Ne(a) ? a.Ca(b, c, d, e) : a && (a = _.$e(a)) && (b = a.Zc(b, c, d, e)) && _.ff(b)
        }
        ;
        _.ff = function(a) {
            if ("number" === typeof a || !a || a.od)
                return !1;
            var b = a.src;
            if (_.Ne(b))
                return b.Be(a);
            var c = a.type
              , d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(cf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            We--;
            (c = _.$e(b)) ? (_.Te(c, a),
            0 == c.j && (c.src = null,
            b[Ue] = null)) : _.Qe(a);
            return !0
        }
        ;
        cf = function(a) {
            return a in Ve ? Ve[a] : Ve[a] = "on" + a
        }
        ;
        df = function(a, b) {
            if (a.od)
                a = !0;
            else {
                b = new _.Ke(b,this);
                var c = a.listener
                  , d = a.Dd || a.src;
                a.vd && _.ff(a);
                a = c.call(d, b)
            }
            return a
        }
        ;
        _.$e = function(a) {
            a = a[Ue];
            return a instanceof _.Re ? a : null
        }
        ;
        gf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
        _.Ye = function(a) {
            if ("function" === typeof a)
                return a;
            a[gf] || (a[gf] = function(b) {
                return a.handleEvent(b)
            }
            );
            return a[gf]
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var hf = function() {}
          , jf = function(a, b) {
            a.v(b);
            100 > a.j && (a.j++,
            b.next = a.i,
            a.i = b)
        }
          , kf = class {
            constructor(a, b) {
                this.o = a;
                this.v = b;
                this.j = 0;
                this.i = null
            }
            get() {
                let a;
                0 < this.j ? (this.j--,
                a = this.i,
                this.i = a.next,
                a.next = null) : a = this.o();
                return a
            }
        }
        ;
        var lf, mf = function() {
            var a = _.q.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.u("Presto") && (a = function() {
                var e = _.me("IFRAME");
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.close();
                var g = "callImmediate" + Math.random()
                  , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = (0,
                _.y)(function(k) {
                    if (("*" == h || k.origin == h) && k.data == g)
                        this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        f.postMessage(g, h)
                    }
                }
            }
            );
            if ("undefined" !== typeof a && !_.ja()) {
                var b = new a
                  , c = {}
                  , d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.Ke;
                        c.Ke = null;
                        e()
                    }
                }
                ;
                return function(e) {
                    d.next = {
                        Ke: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function(e) {
                _.q.setTimeout(e, 0)
            }
        };
        var of = class {
            constructor() {
                this.j = this.i = null
            }
            add(a, b) {
                const c = nf.get();
                c.set(a, b);
                this.j ? this.j.next = c : this.i = c;
                this.j = c
            }
            remove() {
                let a = null;
                this.i && (a = this.i,
                this.i = this.i.next,
                this.i || (this.j = null),
                a.next = null);
                return a
            }
        }
          , nf = new kf(()=>new pf,a=>a.reset())
          , pf = class {
            constructor() {
                this.next = this.scope = this.i = null
            }
            set(a, b) {
                this.i = a;
                this.scope = b;
                this.next = null
            }
            reset() {
                this.next = this.scope = this.i = null
            }
        }
        ;
        var qf, rf = !1, sf = new of, uf = (a,b)=>{
            qf || tf();
            rf || (qf(),
            rf = !0);
            sf.add(a, b)
        }
        , tf = ()=>{
            if (_.q.Promise && _.q.Promise.resolve) {
                const a = _.q.Promise.resolve(void 0);
                qf = ()=>{
                    a.then(vf)
                }
            } else
                qf = ()=>{
                    var a = vf;
                    "function" !== typeof _.q.setImmediate || _.q.Window && _.q.Window.prototype && (_.ha() || !_.u("Edge")) && _.q.Window.prototype.setImmediate == _.q.setImmediate ? (lf || (lf = mf()),
                    lf(a)) : _.q.setImmediate(a)
                }
        }
        , vf = ()=>{
            let a;
            for (; a = sf.remove(); ) {
                try {
                    a.i.call(a.scope)
                } catch (b) {
                    _.ba(b)
                }
                jf(nf, a)
            }
            rf = !1
        }
        ;
        _.wf = function(a) {
            if (!a)
                return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        }
        ;
        var zf, Gf, Lf, Kf, Mf;
        _.yf = function(a) {
            this.i = 0;
            this.C = void 0;
            this.v = this.j = this.o = null;
            this.A = this.B = !1;
            if (a != hf)
                try {
                    var b = this;
                    a.call(void 0, function(c) {
                        xf(b, 2, c)
                    }, function(c) {
                        xf(b, 3, c)
                    })
                } catch (c) {
                    xf(this, 3, c)
                }
        }
        ;
        zf = function() {
            this.next = this.o = this.j = this.v = this.i = null;
            this.A = !1
        }
        ;
        zf.prototype.reset = function() {
            this.o = this.j = this.v = this.i = null;
            this.A = !1
        }
        ;
        var Af = new kf(function() {
            return new zf
        }
        ,function(a) {
            a.reset()
        }
        )
          , Bf = function(a, b, c) {
            var d = Af.get();
            d.v = a;
            d.j = b;
            d.o = c;
            return d
        };
        _.yf.prototype.then = function(a, b, c) {
            return Cf(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
        }
        ;
        _.yf.prototype.$goog_Thenable = !0;
        _.yf.prototype.D = function(a, b) {
            return Cf(this, null, a, b)
        }
        ;
        _.yf.prototype.catch = _.yf.prototype.D;
        _.yf.prototype.cancel = function(a) {
            if (0 == this.i) {
                var b = new _.Df(a);
                uf(function() {
                    Ef(this, b)
                }, this)
            }
        }
        ;
        var Ef = function(a, b) {
            if (0 == a.i)
                if (a.o) {
                    var c = a.o;
                    if (c.j) {
                        for (var d = 0, e = null, f = null, g = c.j; g && (g.A || (d++,
                        g.i == a && (e = g),
                        !(e && 1 < d))); g = g.next)
                            e || (f = g);
                        e && (0 == c.i && 1 == d ? Ef(c, b) : (f ? (d = f,
                        d.next == c.v && (c.v = d),
                        d.next = d.next.next) : Ff(c),
                        Gf(c, e, 3, b)))
                    }
                    a.o = null
                } else
                    xf(a, 3, b)
        }
          , If = function(a, b) {
            a.j || 2 != a.i && 3 != a.i || Hf(a);
            a.v ? a.v.next = b : a.j = b;
            a.v = b
        }
          , Cf = function(a, b, c, d) {
            var e = Bf(null, null, null);
            e.i = new _.yf(function(f, g) {
                e.v = b ? function(h) {
                    try {
                        var k = b.call(d, h);
                        f(k)
                    } catch (l) {
                        g(l)
                    }
                }
                : f;
                e.j = c ? function(h) {
                    try {
                        var k = c.call(d, h);
                        void 0 === k && h instanceof _.Df ? g(h) : f(k)
                    } catch (l) {
                        g(l)
                    }
                }
                : g
            }
            );
            e.i.o = a;
            If(a, e);
            return e.i
        };
        _.yf.prototype.G = function(a) {
            this.i = 0;
            xf(this, 2, a)
        }
        ;
        _.yf.prototype.J = function(a) {
            this.i = 0;
            xf(this, 3, a)
        }
        ;
        var xf = function(a, b, c) {
            if (0 == a.i) {
                a === c && (b = 3,
                c = new TypeError("I"));
                a.i = 1;
                a: {
                    var d = c
                      , e = a.G
                      , f = a.J;
                    if (d instanceof _.yf) {
                        If(d, Bf(e || hf, f || null, a));
                        var g = !0
                    } else if (_.wf(d))
                        d.then(e, f, a),
                        g = !0;
                    else {
                        if (_.od(d))
                            try {
                                var h = d.then;
                                if ("function" === typeof h) {
                                    Jf(d, h, e, f, a);
                                    g = !0;
                                    break a
                                }
                            } catch (k) {
                                f.call(a, k);
                                g = !0;
                                break a
                            }
                        g = !1
                    }
                }
                g || (a.C = c,
                a.i = b,
                a.o = null,
                Hf(a),
                3 != b || c instanceof _.Df || Kf(a, c))
            }
        }
          , Jf = function(a, b, c, d, e) {
            var f = !1
              , g = function(k) {
                f || (f = !0,
                c.call(e, k))
            }
              , h = function(k) {
                f || (f = !0,
                d.call(e, k))
            };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        }
          , Hf = function(a) {
            a.B || (a.B = !0,
            uf(a.F, a))
        }
          , Ff = function(a) {
            var b = null;
            a.j && (b = a.j,
            a.j = b.next,
            b.next = null);
            a.j || (a.v = null);
            return b
        };
        _.yf.prototype.F = function() {
            for (var a; a = Ff(this); )
                Gf(this, a, this.i, this.C);
            this.B = !1
        }
        ;
        Gf = function(a, b, c, d) {
            if (3 == c && b.j && !b.A)
                for (; a && a.A; a = a.o)
                    a.A = !1;
            if (b.i)
                b.i.o = null,
                Lf(b, c, d);
            else
                try {
                    b.A ? b.v.call(b.o) : Lf(b, c, d)
                } catch (e) {
                    Mf.call(null, e)
                }
            jf(Af, b)
        }
        ;
        Lf = function(a, b, c) {
            2 == b ? a.v.call(a.o, c) : a.j && a.j.call(a.o, c)
        }
        ;
        Kf = function(a, b) {
            a.A = !0;
            uf(function() {
                a.A && Mf.call(null, b)
            })
        }
        ;
        Mf = _.ba;
        _.Df = function(a) {
            _.aa.call(this, a)
        }
        ;
        _.A(_.Df, _.aa);
        _.Df.prototype.name = "cancel";
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Vf, Pf, Yf, dg, hg;
        _.Nf = function(a) {
            a && "function" == typeof a.fa && a.fa()
        }
        ;
        _.Of = function(a, b) {
            void 0 == b && (b = 0);
            return null != a ? a : b
        }
        ;
        _.Qf = function(a, b) {
            let c, d;
            for (let e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d)
                    a[c] = d[c];
                for (let f = 0; f < Pf.length; f++)
                    c = Pf[f],
                    Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        }
        ;
        _.Rf = function(a) {
            var b = _.La(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }
        ;
        _.Sf = function(a, b) {
            a.Da ? b() : (a.ha || (a.ha = []),
            a.ha.push(b))
        }
        ;
        _.Tf = function(a, b) {
            _.Sf(a, _.Fd(_.Nf, b))
        }
        ;
        _.Uf = function(a) {
            var b = 0, c;
            for (c in a.i) {
                for (var d = a.i[c], e = 0; e < d.length; e++)
                    ++b,
                    _.Qe(d[e]);
                delete a.i[c];
                a.j--
            }
        }
        ;
        _.Wf = function(a) {
            return /^[\s\xa0]*$/.test(a)
        }
        ;
        Pf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        _.Xf = function(a, b) {
            return "string" === typeof b ? a.getElementById(b) : b
        }
        ;
        Yf = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        };
        _.Zf = function(a, b) {
            _.Fe(b, function(c, d) {
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Yf.hasOwnProperty(d) ? a.setAttribute(Yf[d], c) : _.Md(d, "aria-") || _.Md(d, "data-") ? a.setAttribute(d, c) : a[d] = c
            })
        }
        ;
        _.$f = function(a) {
            return "CSS1Compat" == a.compatMode
        }
        ;
        _.ag = function(a) {
            a = a.document;
            a = _.$f(a) ? a.documentElement : a.body;
            return new _.je(a.clientWidth,a.clientHeight)
        }
        ;
        _.bg = function(a) {
            return a.parentWindow || a.defaultView
        }
        ;
        _.cg = function(a) {
            return a ? _.bg(a) : window
        }
        ;
        dg = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                if (!_.Rf(f) || _.od(f) && 0 < f.nodeType)
                    d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (_.od(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    _.Db(g ? _.vd(f) : f, d)
                }
            }
        }
        ;
        _.eg = function(a, b) {
            var c = b[1]
              , d = _.le(a, String(b[0]));
            c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : _.Zf(d, c));
            2 < b.length && dg(a, d, b);
            return d
        }
        ;
        _.fg = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        }
        ;
        _.gg = function(a, b) {
            if (!a || !b)
                return !1;
            if (a.contains && 1 == b.nodeType)
                return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition)
                return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b; )
                b = b.parentNode;
            return b == a
        }
        ;
        hg = function(a) {
            this.i = a || _.q.document || document
        }
        ;
        _.m = hg.prototype;
        _.m.H = function(a) {
            return _.Xf(this.i, a)
        }
        ;
        _.m.eb = function(a, b, c) {
            return _.eg(this.i, arguments)
        }
        ;
        _.m.appendChild = function(a, b) {
            a.appendChild(b)
        }
        ;
        _.m.Ce = _.ne;
        _.m.Wf = _.fg;
        _.m.Vf = _.gg;
        _.ig = function(a) {
            return a ? new hg(_.oe(a)) : Vf || (Vf = new hg)
        }
        ;
        _.W = function() {
            _.Cc.call(this);
            this.ab = new _.Re(this);
            this.lg = this;
            this.md = null
        }
        ;
        _.A(_.W, _.Cc);
        _.W.prototype[_.Me] = !0;
        _.m = _.W.prototype;
        _.m.Og = function() {
            return this.md
        }
        ;
        _.m.Bc = function(a) {
            this.md = a
        }
        ;
        _.m.addEventListener = function(a, b, c, d) {
            _.V(this, a, b, c, d)
        }
        ;
        _.m.removeEventListener = function(a, b, c, d) {
            _.ef(this, a, b, c, d)
        }
        ;
        _.m.dispatchEvent = function(a) {
            var b, c = this.md;
            if (c)
                for (b = []; c; c = c.md)
                    b.push(c);
            c = this.lg;
            var d = a.type || a;
            if ("string" === typeof a)
                a = new _.Je(a,c);
            else if (a instanceof _.Je)
                a.target = a.target || c;
            else {
                var e = a;
                a = new _.Je(d,c);
                _.Qf(a, e)
            }
            e = !0;
            if (b)
                for (var f = b.length - 1; !a.i && 0 <= f; f--) {
                    var g = a.currentTarget = b[f];
                    e = jg(g, d, !0, a) && e
                }
            a.i || (g = a.currentTarget = c,
            e = jg(g, d, !0, a) && e,
            a.i || (e = jg(g, d, !1, a) && e));
            if (b)
                for (f = 0; !a.i && f < b.length; f++)
                    g = a.currentTarget = b[f],
                    e = jg(g, d, !1, a) && e;
            return e
        }
        ;
        _.m.P = function() {
            _.W.W.P.call(this);
            this.ab && _.Uf(this.ab);
            this.md = null
        }
        ;
        _.m.listen = function(a, b, c, d) {
            return this.ab.add(String(a), b, !1, c, d)
        }
        ;
        _.m.Ha = function(a, b, c, d) {
            return this.ab.add(String(a), b, !0, c, d)
        }
        ;
        _.m.Ca = function(a, b, c, d) {
            this.ab.remove(String(a), b, c, d)
        }
        ;
        _.m.Be = function(a) {
            return _.Te(this.ab, a)
        }
        ;
        var jg = function(a, b, c, d) {
            b = a.ab.i[String(b)];
            if (!b)
                return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.od && g.capture == c) {
                    var h = g.listener
                      , k = g.Dd || g.src;
                    g.vd && a.Be(g);
                    e = !1 !== h.call(k, d) && e
                }
            }
            return e && !d.defaultPrevented
        };
        _.W.prototype.Ad = function(a, b) {
            return this.ab.Ad(String(a), b)
        }
        ;
        _.W.prototype.Zc = function(a, b, c, d) {
            return this.ab.Zc(String(a), b, c, d)
        }
        ;
        _.W.prototype.hasListener = function(a, b) {
            return this.ab.hasListener(void 0 !== a ? String(a) : void 0, b)
        }
        ;
        _.kg = function(a, b) {
            _.W.call(this);
            this.j = a || 1;
            this.i = b || _.q;
            this.o = (0,
            _.y)(this.Gh, this);
            this.v = Date.now()
        }
        ;
        _.A(_.kg, _.W);
        _.m = _.kg.prototype;
        _.m.Zb = !1;
        _.m.fb = null;
        _.m.Gh = function() {
            if (this.Zb) {
                var a = Date.now() - this.v;
                0 < a && a < .8 * this.j ? this.fb = this.i.setTimeout(this.o, this.j - a) : (this.fb && (this.i.clearTimeout(this.fb),
                this.fb = null),
                this.dispatchEvent("tick"),
                this.Zb && (this.stop(),
                this.start()))
            }
        }
        ;
        _.m.start = function() {
            this.Zb = !0;
            this.fb || (this.fb = this.i.setTimeout(this.o, this.j),
            this.v = Date.now())
        }
        ;
        _.m.stop = function() {
            this.Zb = !1;
            this.fb && (this.i.clearTimeout(this.fb),
            this.fb = null)
        }
        ;
        _.m.P = function() {
            _.kg.W.P.call(this);
            this.stop();
            delete this.i
        }
        ;
        _.lg = function(a, b, c) {
            if ("function" === typeof a)
                c && (a = (0,
                _.y)(a, c));
            else if (a && "function" == typeof a.handleEvent)
                a = (0,
                _.y)(a.handleEvent, a);
            else
                throw Error("J");
            return 2147483647 < Number(b) ? -1 : _.q.setTimeout(a, b || 0)
        }
        ;
        _.mg = function(a) {
            _.q.clearTimeout(a)
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ng = function(a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        }
        ;
        _.og = function(a) {
            _.Cc.call(this);
            this.L = a;
            this.J = {}
        }
        ;
        _.A(_.og, _.Cc);
        var pg = [];
        _.og.prototype.listen = function(a, b, c, d) {
            return qg(this, a, b, c, d)
        }
        ;
        _.og.prototype.o = function(a, b, c, d, e) {
            return qg(this, a, b, c, d, e)
        }
        ;
        var qg = function(a, b, c, d, e, f) {
            Array.isArray(c) || (c && (pg[0] = c.toString()),
            c = pg);
            for (var g = 0; g < c.length; g++) {
                var h = _.V(b, c[g], d || a.handleEvent, e || !1, f || a.L || a);
                if (!h)
                    break;
                a.J[h.key] = h
            }
            return a
        };
        _.og.prototype.Ha = function(a, b, c, d) {
            return rg(this, a, b, c, d)
        }
        ;
        var rg = function(a, b, c, d, e, f) {
            if (Array.isArray(c))
                for (var g = 0; g < c.length; g++)
                    rg(a, b, c[g], d, e, f);
            else {
                b = _.Xe(b, c, d || a.handleEvent, e, f || a.L || a);
                if (!b)
                    return a;
                a.J[b.key] = b
            }
            return a
        };
        _.og.prototype.Ca = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++)
                    this.Ca(a, b[f], c, d, e);
            else
                c = c || this.handleEvent,
                d = _.od(d) ? !!d.capture : !!d,
                e = e || this.L || this,
                c = _.Ye(c),
                d = !!d,
                b = _.Ne(a) ? a.Zc(b, c, d, e) : a ? (a = _.$e(a)) ? a.Zc(b, c, d, e) : null : null,
                b && (_.ff(b),
                delete this.J[b.key])
        }
        ;
        _.sg = function(a) {
            _.Fe(a.J, function(b, c) {
                this.J.hasOwnProperty(c) && _.ff(b)
            }, a);
            a.J = {}
        }
        ;
        _.og.prototype.P = function() {
            _.og.W.P.call(this);
            _.sg(this)
        }
        ;
        _.og.prototype.handleEvent = function() {
            throw Error("K");
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var vg;
        _.tg = function(a) {
            return new _.je(a.width,a.height)
        }
        ;
        _.ug = function(a, b) {
            return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
        }
        ;
        vg = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        }
        ;
        _.wg = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        }
        ;
        _.xg = function() {
            return _.Jb ? "Webkit" : _.Ib ? "Moz" : _.B ? "ms" : null
        }
        ;
        var zg, yg;
        _.Y = function(a, b, c) {
            if ("string" === typeof b)
                (b = yg(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d]
                      , f = yg(c, d);
                    f && (c.style[f] = e)
                }
        }
        ;
        zg = {};
        yg = function(a, b) {
            var c = zg[b];
            if (!c) {
                var d = vg(b);
                c = d;
                void 0 === a.style[d] && (d = _.xg() + _.wg(d),
                void 0 !== a.style[d] && (c = d));
                zg[b] = c
            }
            return c
        }
        ;
        _.Ag = function(a, b) {
            var c = a.style[vg(b)];
            return "undefined" !== typeof c ? c : a.style[yg(a, b)] || ""
        }
        ;
        _.Bg = function(a, b) {
            var c = _.oe(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        }
        ;
        _.Cg = function(a, b) {
            return _.Bg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        }
        ;
        _.Dg = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        }
        ;
        _.Fg = function(a) {
            var b = _.Eg;
            if ("none" != _.Cg(a, "display"))
                return b(a);
            var c = a.style
              , d = c.display
              , e = c.visibility
              , f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        }
        ;
        _.Eg = function(a) {
            var b = a.offsetWidth
              , c = a.offsetHeight
              , d = _.Jb && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = _.Dg(a),
            new _.je(a.right - a.left,a.bottom - a.top)) : new _.je(b,c)
        }
        ;
        _.Gg = function(a, b) {
            a.style.display = b ? "" : "none"
        }
        ;
        _.Hg = _.Ib ? "MozUserSelect" : _.Jb || _.Gb ? "WebkitUserSelect" : null;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Ig, Kg;
        Ig = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        }
        ;
        _.Jg = function(a, b, c, d) {
            Array.prototype.splice.apply(a, Ig(arguments, 1))
        }
        ;
        Kg = function(a, b) {
            return null !== a && b in a ? a[b] : void 0
        }
        ;
        _.Lg = function() {}
        ;
        _.Lg.uc = void 0;
        _.Lg.i = function() {
            return _.Lg.uc ? _.Lg.uc : _.Lg.uc = new _.Lg
        }
        ;
        _.Lg.prototype.i = 0;
        _.Mg = function(a) {
            return ":" + (a.i++).toString(36)
        }
        ;
        var Ng;
        _.Og = function(a) {
            _.W.call(this);
            this.o = a || _.ig();
            this.Y = Ng;
            this.T = null;
            this.ya = !1;
            this.i = null;
            this.J = void 0;
            this.F = this.A = this.j = this.B = null;
            this.ua = !1
        }
        ;
        _.A(_.Og, _.W);
        _.Og.prototype.Ya = _.Lg.i();
        Ng = null;
        _.Pg = function(a) {
            return a.T || (a.T = _.Mg(a.Ya))
        }
        ;
        _.Og.prototype.H = function() {
            return this.i
        }
        ;
        var Qg = function(a, b) {
            if (a == b)
                throw Error("M");
            var c;
            if (c = b && a.j && a.T) {
                c = a.j;
                var d = a.T;
                c = c.F && d ? Kg(c.F, d) || null : null
            }
            if (c && a.j != b)
                throw Error("M");
            a.j = b;
            _.Og.W.Bc.call(a, b)
        };
        _.Og.prototype.Bc = function(a) {
            if (this.j && this.j != a)
                throw Error("N");
            _.Og.W.Bc.call(this, a)
        }
        ;
        _.Og.prototype.bc = function() {
            this.i = _.le(this.o.i, "DIV")
        }
        ;
        _.Og.prototype.render = function(a) {
            Rg(this, a)
        }
        ;
        var Rg = function(a, b, c) {
            if (a.ya)
                throw Error("O");
            a.i || a.bc();
            b ? b.insertBefore(a.i, c || null) : a.o.i.body.appendChild(a.i);
            a.j && !a.j.ya || a.Ka()
        };
        _.m = _.Og.prototype;
        _.m.Xc = function(a) {
            this.i = a
        }
        ;
        _.m.Ka = function() {
            this.ya = !0;
            _.Sg(this, function(a) {
                !a.ya && a.H() && a.Ka()
            })
        }
        ;
        _.m.ub = function() {
            _.Sg(this, function(a) {
                a.ya && a.ub()
            });
            this.J && _.sg(this.J);
            this.ya = !1
        }
        ;
        _.m.P = function() {
            this.ya && this.ub();
            this.J && (this.J.fa(),
            delete this.J);
            _.Sg(this, function(a) {
                a.fa()
            });
            !this.ua && this.i && _.fg(this.i);
            this.j = this.B = this.i = this.F = this.A = null;
            _.Og.W.P.call(this)
        }
        ;
        _.m.nc = function(a, b, c) {
            if (a.ya && (c || !this.ya))
                throw Error("O");
            if (0 > b || b > _.Tg(this))
                throw Error("Q");
            this.F && this.A || (this.F = {},
            this.A = []);
            if (a.j == this) {
                var d = this.F
                  , e = _.Pg(a);
                d[e] = a;
                _.Ee(this.A, a)
            } else {
                d = this.F;
                e = _.Pg(a);
                if (null !== d && e in d)
                    throw Error("B`" + e);
                d[e] = a
            }
            Qg(a, this);
            _.Jg(this.A, b, 0, a);
            a.ya && this.ya && a.j == this ? (c = this.i,
            (c.childNodes[b] || null) != a.H() && (a.H().parentElement == c && c.removeChild(a.H()),
            b = c.childNodes[b] || null,
            c.insertBefore(a.H(), b))) : c ? (this.i || this.bc(),
            b = _.Ug(this, b + 1),
            Rg(a, this.i, b ? b.i : null)) : this.ya && !a.ya && a.i && a.i.parentNode && 1 == a.i.parentNode.nodeType && a.Ka()
        }
        ;
        _.Tg = function(a) {
            return a.A ? a.A.length : 0
        }
        ;
        _.Ug = function(a, b) {
            return a.A ? a.A[b] || null : null
        }
        ;
        _.Sg = function(a, b, c) {
            a.A && a.A.forEach(b, c)
        }
        ;
        _.Og.prototype.Pc = function(a, b) {
            if (a) {
                var c = "string" === typeof a ? a : _.Pg(a);
                a = this.F && c ? Kg(this.F, c) || null : null;
                if (c && a) {
                    var d = this.F;
                    c in d && delete d[c];
                    _.Ee(this.A, a);
                    b && (a.ub(),
                    a.i && _.fg(a.i));
                    Qg(a, null)
                }
            }
            if (!a)
                throw Error("R");
            return a
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Vg;
        Vg = function(a, b, c) {
            if (a.j)
                return null;
            if (c instanceof Array) {
                var d = null;
                for (var e of c)
                    (c = Vg(a, b, e)) && (d = c);
                return d
            }
            d = null;
            a.i && a.i.type == c && a.A == b && (d = a.i,
            a.i = null);
            if (e = b.dataset.eqid)
                delete b.dataset.eqid,
                (e = a.B[e]) ? b.removeEventListener ? b.removeEventListener(c, e, !1) : b.detachEvent && b.detachEvent("on" + c, e) : a.o.log(Error("z`" + b));
            return d
        }
        ;
        _.Wg = function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        }
        ;
        _.Xg = function(a, b, c) {
            return function() {
                try {
                    return b.apply(c, arguments)
                } catch (d) {
                    a.log(d)
                }
            }
        }
        ;
        _.Zg = function(a, b, c, d, e, f) {
            d = _.Xg(a, d, f);
            a = _.V(b, c, d, e, f);
            _.Yg(b, c);
            return a
        }
        ;
        _.Yg = function(a, b) {
            if (a instanceof Element && (b = Vg(_.td("eq"), a, b || [])))
                if (_.B && b instanceof MouseEvent && a.dispatchEvent) {
                    var c = document.createEvent("MouseEvent");
                    c.initMouseEvent(b.type, !0, !0, b.view, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);
                    a.dispatchEvent(c)
                } else
                    a.dispatchEvent && a.dispatchEvent(b)
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var $g;
        $g = function(a) {
            return Array.isArray(a) ? _.Wg(a, $g) : "string" === typeof a ? a : a ? a.toString() : a
        }
        ;
        _.ah = class extends _.og {
            constructor(a, b) {
                super(b);
                this.C = a;
                this.qa = b || this
            }
            listen(a, b, c, d) {
                if (c) {
                    if ("function" != typeof c)
                        throw new TypeError("S");
                    c = _.Xg(this.C, c, this.qa);
                    c = super.listen(a, b, c, d);
                    _.Yg(a, $g(b));
                    return c
                }
                return super.listen(a, b, c, d)
            }
            o(a, b, c, d, e) {
                if (c) {
                    if ("function" != typeof c)
                        throw new TypeError("S");
                    c = _.Xg(this.C, c, e || this.qa);
                    c = super.o(a, b, c, d, e);
                    _.Yg(a, $g(b));
                    return c
                }
                return super.o(a, b, c, d, e)
            }
            Ha(a, b, c, d) {
                if (c) {
                    if ("function" != typeof c)
                        throw new TypeError("S");
                    c = _.Xg(this.C, c, this.qa);
                    c = super.Ha(a, b, c, d);
                    _.Yg(a, $g(b));
                    return c
                }
                return super.Ha(a, b, c, d)
            }
        }
        ;
        _.ch = class extends _.ah {
            constructor(a, b) {
                super(b);
                this.j = a
            }
            H() {
                return this.j
            }
            P() {
                this.j = null;
                super.P()
            }
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.dh = class extends _.ch {
            constructor(a) {
                super(a, _.Ec)
            }
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.eh = function(a) {
            a = _.Ed(a);
            return void 0 === a ? _.Ud.toString() : a
        }
        ;
        _.gh = function(a, b, c) {
            _.fh.listen(b, c, void 0, a.L || a, a)
        }
        ;
        _.hh = function(a, b) {
            a.href = _.eh(b)
        }
        ;
        _.ih = function(a, b) {
            var c = b || document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : _.ke(document, a, b)
        }
        ;
        _.jh = function(a, b) {
            for (var c = 0; a; ) {
                if (b(a))
                    return a;
                a = a.parentNode;
                c++
            }
            return null
        }
        ;
        _.kh = function(a, b) {
            return b ? _.jh(a, function(c) {
                return !b || "string" === typeof c.className && _.sa(c.className.split(/\s+/), b)
            }) : null
        }
        ;
        var lh, mh;
        lh = function() {}
        ;
        _.fh = new lh;
        mh = ["click", "keydown", "keyup"];
        lh.prototype.listen = function(a, b, c, d, e) {
            var f = function(g) {
                var h = _.Ye(b)
                  , k = _.pe(g.target) ? g.target.getAttribute("role") || null : null;
                "click" != g.type || 0 != g.Ta.button || _.Kb && g.ctrlKey ? 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "button" != k && "tab" != k && "radio" != k || ("keyup" == g.type && h.call(d, g),
                g.preventDefault()) : (g.type = "keypress",
                h.call(d, g)) : h.call(d, g)
            };
            f.lb = b;
            f.zh = d;
            e ? e.listen(a, mh, f, c) : _.V(a, mh, f, c)
        }
        ;
        lh.prototype.Ca = function(a, b, c, d, e) {
            for (var f, g = 0; f = mh[g]; g++) {
                var h = a;
                var k = f;
                var l = !!c;
                k = _.Ne(h) ? h.Ad(k, l) : h ? (h = _.$e(h)) ? h.Ad(k, l) : [] : [];
                for (h = 0; l = k[h]; h++) {
                    var n = l.listener;
                    if (n.lb == b && n.zh == d) {
                        e ? e.Ca(a, f, l.listener, c, d) : _.ef(a, f, l.listener, c, d);
                        break
                    }
                }
            }
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Z = function(a, b, c) {
            c ? _.Ae(a, b) : _.Ce(a, b)
        }
        ;
        _.nh = function(a) {
            return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function(b) {
                return 1 == b.nodeType
            })
        }
        ;
        _.oh = !_.B && !_.ma();
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ph = function(a) {
            return null == a ? "" : String(a)
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.qh = function(a) {
            const b = [];
            let c = 0;
            for (const d in a)
                b[c++] = a[d];
            return b
        }
        ;
        _.rh = function(a) {
            if (a.o)
                return a.o;
            for (const b in a.i)
                if (a.i[b].na() && a.i[b].B())
                    return a.i[b];
            return null
        }
        ;
        _.sh = function(a, b) {
            a.i[b.K()] = b
        }
        ;
        var th = new class extends _.Cc {
            constructor() {
                var a = _.Ec;
                super();
                this.B = a;
                this.o = null;
                this.j = {};
                this.C = {};
                this.i = {};
                this.v = null
            }
            A(a) {
                this.i[a] && (_.rh(this) && _.rh(this).K() == a || this.i[a].O(!0))
            }
            Wa(a) {
                this.v = a;
                for (const b in this.i)
                    this.i[b].na() && this.i[b].Wa(a)
            }
            qc(a) {
                return a in this.i ? this.i[a] : null
            }
        }
        ;
        _.Yc("dd", th);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var vh, Fh, Gh, Hh, Ih, Kh, Mh, Nh, wh, Oh, xh, uh, Ph, Qh, Rh, Sh, Th, Uh, Vh, Wh, Xh, Yh, Zh, $h, ai, bi, ci, di;
        vh = function(a) {
            return null != _.jh(a, function(b) {
                return 1 == b.nodeType && "true" == uh(b, "hidden")
            })
        }
        ;
        _.yh = function(a) {
            return a ? wh(a, function(b) {
                return 1 == b.nodeType && xh(b) && !vh(b)
            }) : []
        }
        ;
        _.zh = function(a, b) {
            a && b && _.hh(a, a.href.replace(/([?&](continue|followup)=)[^&]*/g, "$1" + encodeURIComponent(b)))
        }
        ;
        _.Eh = function() {
            _.z("gbar.I", _.Ah);
            _.Ah.prototype.ia = _.Ah.prototype.T;
            _.Ah.prototype.ib = _.Ah.prototype.H;
            _.Ah.prototype.ic = _.Ah.prototype.qa;
            _.z("gbar.J", _.Bh);
            _.Bh.prototype.ja = _.Bh.prototype.U;
            _.Bh.prototype.jb = _.Bh.prototype.S;
            _.z("gbar.K", _.Ch);
            _.z("gbar.L", _.Dh);
            _.Dh.prototype.la = _.Dh.prototype.j
        }
        ;
        Fh = function(a, b) {
            b.xa = b.type;
            b.xb = b.target;
            return a.call(this, b)
        }
        ;
        Gh = class {
            constructor(a, b, c) {
                this.j = a;
                this.i = {};
                a = 0;
                for (var d = b.length; a < d; a++)
                    this.i[b[a]] = !0;
                this.o = c;
                this.v = _.q
            }
        }
        ;
        Hh = function(a, b, c) {
            a = _.T("gb_Oc", a.H());
            if ("" != b || "" != c)
                _.U(a, "gb_Qa") ? "" != _.Ag(a, "background-image") && (b = "" != c ? c : b,
                _.Y(a, "background-image", "url('" + b + "')"),
                a = _.T("gb_Nc", a),
                null !== a && "IMG" == a.tagName && (a.src = b)) : "IMG" == a.tagName && (a.src = "" != b ? b : c,
                b != c && (c = "" != c ? c + " 2x " : "",
                "" != b && (c = c + ("" == c ? "" : ",") + (b + " 1x")),
                a.setAttribute("srcset", c)))
        }
        ;
        Ih = function(a, b, c) {
            _.Cc.call(this);
            this.lb = a;
            this.o = b || 0;
            this.i = c;
            this.j = (0,
            _.y)(this.Xf, this)
        }
        ;
        _.A(Ih, _.Cc);
        _.m = Ih.prototype;
        _.m.Qc = 0;
        _.m.P = function() {
            Ih.W.P.call(this);
            this.stop();
            delete this.lb;
            delete this.i
        }
        ;
        _.m.start = function(a) {
            this.stop();
            this.Qc = _.lg(this.j, void 0 !== a ? a : this.o)
        }
        ;
        _.m.stop = function() {
            this.isActive() && _.mg(this.Qc);
            this.Qc = 0
        }
        ;
        _.m.isActive = function() {
            return 0 != this.Qc
        }
        ;
        _.m.Xf = function() {
            this.Qc = 0;
            this.lb && this.lb.call(this.i)
        }
        ;
        _.Jh = function(a, b) {
            b && _.rh(a) && b != _.rh(a) && _.rh(a).O(!1);
            a.o = b
        }
        ;
        Kh = function(a) {
            var b = _.Wc.i()
              , c = ["asl"];
            if (c.length != a.length)
                throw new _.aa;
            var d = [];
            for (let f = 0, g = c.length; f < g; f++) {
                var e = c[f];
                b.i[e] || d.push(e)
            }
            if (0 == d.length) {
                d = c.length;
                e = Array(d);
                for (let f = 0; f < d; f++)
                    e[f] = b.i[c[f]];
                a.apply(_.q, e)
            } else {
                a = new Gh(c,d,a);
                for (let f = 0, g = d.length; f < g; f++)
                    c = d[f],
                    (e = b.j[c]) || (b.j[c] = e = []),
                    e.push(a)
            }
        }
        ;
        _.Lh = function(a) {
            return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
        }
        ;
        Mh = function(a, b, c, d) {
            if (null != a)
                for (a = a.firstChild; a; ) {
                    if (b(a) && (c.push(a),
                    d) || Mh(a, b, c, d))
                        return !0;
                    a = a.nextSibling
                }
            return !1
        }
        ;
        Nh = function(a, b) {
            var c = [];
            return Mh(a, b, c, !0) ? c[0] : void 0
        }
        ;
        wh = function(a, b) {
            var c = [];
            Mh(a, b, c, !1);
            return c
        }
        ;
        Oh = function(a) {
            a = a.tabIndex;
            return "number" === typeof a && 0 <= a && 32768 > a
        }
        ;
        xh = function(a) {
            var b;
            if ((b = "A" == a.tagName && a.hasAttribute("href") || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!a.hasAttribute("tabindex") || Oh(a)) : a.hasAttribute("tabindex") && Oh(a)) && _.B) {
                var c;
                "function" !== typeof a.getBoundingClientRect || _.B && null == a.parentElement ? c = {
                    height: a.offsetHeight,
                    width: a.offsetWidth
                } : c = a.getBoundingClientRect();
                a = null != c && 0 < c.height && 0 < c.width
            } else
                a = b;
            return a
        }
        ;
        uh = function(a, b) {
            a = a.getAttribute("aria-" + b);
            return null == a || void 0 == a ? "" : String(a)
        }
        ;
        Ph = function(a) {
            a.j || (a.j = _.V(a.i, "keydown", a.o, !1, a))
        }
        ;
        Qh = function(a) {
            a.j && (_.ff(a.j),
            a.j = null)
        }
        ;
        Rh = function(a) {
            Qh(a);
            _.Z(a.i, "gb_X", !1)
        }
        ;
        Sh = class {
            constructor(a) {
                this.i = a;
                this.j = null
            }
            o(a) {
                9 != a.keyCode || _.U(this.i, "gb_X") || (_.Z(this.i, "gb_X", !0),
                Qh(this))
            }
        }
        ;
        _.Ah = class extends _.W {
            constructor(a, b) {
                super();
                this.v = a;
                b && (this.v.id = b)
            }
            H() {
                return this.v
            }
            T() {
                return this.v.id
            }
            qa() {
                let a = this.v.id;
                a || (a = "gb$" + _.Mg(_.Lg.i()),
                this.v.id = a);
                return a
            }
            P() {
                _.fg(this.v);
                super.P()
            }
        }
        ;
        _.Ah.prototype.K = function() {
            return this.H()
        }
        ;
        Th = function(a) {
            return Nh(a, function(b) {
                return _.pe(b) && xh(b)
            })
        }
        ;
        Uh = function(a) {
            (a = Th(a)) && a.focus()
        }
        ;
        Vh = {
            Bi: "gb_Sa",
            Si: "gb_wd",
            Wh: "gb_2c"
        };
        _.Bh = class extends _.Ah {
            constructor(a) {
                super(a);
                this.A = [];
                this.D = {}
            }
            U(a) {
                let b = this.D[a];
                if (b)
                    return b;
                const c = document.getElementById(a);
                if (c)
                    for (let d = 0, e = this.A.length; d < e; ++d)
                        if (b = this.A[d],
                        b.H() == c)
                            return this.D[a] = b;
                return null
            }
            S() {
                for (let a = 0, b = this.A.length; a < b; a++)
                    this.A[a].fa();
                this.D = {};
                this.A = []
            }
        }
        ;
        Wh = function(a) {
            var b;
            if (b = a instanceof HTMLElement)
                b = /-[a-z]/.test("ogobm") ? !1 : _.oh && a.dataset ? "ogobm"in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + _.Lh("ogobm")) : !!a.getAttribute("data-" + _.Lh("ogobm"));
            return b
        }
        ;
        Xh = "click mousedown scroll touchstart wheel keydown".split(" ");
        Yh = class {
        }
        ;
        Zh = function(a) {
            _.gh(a.j, a.H(), a.Y);
            a.H().addEventListener("keydown", function(c) {
                32 == c.keyCode && c.preventDefault()
            });
            a.j.listen(a.i, "keydown", a.da);
            a.j.listen(a.i, "keyup", a.ta);
            const b = new Map;
            b.set("close", "cbc");
            b.set("back", "bbc");
            b.forEach((c,d)=>{
                _.gh(a.j, a.C.get(d), function() {
                    this.dispatchEvent(c)
                })
            }
            );
            if (_.U(a.i, "gb_Sa") || _.U(a.i, "gb_wd"))
                a.j.listen(window, "resize", a.N),
                a.N();
            _.U(a.i, "gb_Wc") || a.j.Ha(window, "touchstart", ()=>{
                _.Y(a.i, "overflow-y", "auto")
            }
            )
        }
        ;
        $h = function(a) {
            a.j.Ca(document.body, Xh, a.M, !1, a);
            a.j.Ca(document.body, "focusin", a.L)
        }
        ;
        ai = function(a, b) {
            (a = a.C.get(b)) && _.Ce(a, "gb_r")
        }
        ;
        bi = function(a) {
            a.C.forEach(b=>{
                _.Ae(b, "gb_r")
            }
            )
        }
        ;
        ci = function(a) {
            return !_.U(a.i, "gb_1c") || _.U(a.i, "gb_Sa") || _.U(a.i, "gb_wd")
        }
        ;
        di = class extends _.Bh {
            constructor(a, b, c, d, e) {
                const f = a.get("menu");
                super(f);
                this.i = b;
                this.R = f;
                this.C = a;
                this.V = a.get("back");
                this.B = _.T("gb_Rc");
                this.G = c;
                this.F = _.T("gb_3c", this.i);
                this.J = new Sh(this.F);
                this.ua = [];
                this.na = d || !1;
                this.O = e || !1;
                this.j = new _.og(this);
                Zh(this)
            }
            P() {
                super.P();
                $h(this)
            }
            K() {
                return this.F
            }
            X() {
                return _.T("gb_9d", this.i)
            }
            Z(a) {
                _.Z(this.i, "gb_1c", 1 == a);
                this.dispatchEvent("msc")
            }
            getStyle() {
                return ci(this) ? 0 : 1
            }
            Aa(a) {
                this.B || (this.B = _.T("gb_Rc"));
                this.B && a && _.qe(this.B, a)
            }
            isVisible(a) {
                return (a = this.C.get(a)) ? !_.U(a, "gb_r") : !1
            }
            open(a) {
                this.G || (a && _.Y(this.i, "transition", "none"),
                this.dispatchEvent("beforeshow"),
                _.Ae(this.i, "gb_Na"),
                _.se(this.H(), "expanded", !0),
                Uh(this.F),
                Ph(this.J),
                this.dispatchEvent("open"),
                this.j.o(document.body, Xh, this.M, !0, this),
                this.j.listen(document.body, "focusin", this.L),
                a && _.lg(function() {
                    _.Y(this.i, "transition", "")
                }, 0, this))
            }
            va(a) {
                this.G && _.se(this.H(), "expanded", a)
            }
            close(a) {
                this.G || (a && _.Y(this.i, "transition", "none"),
                _.Ce(this.i, "gb_Na"),
                _.se(this.H(), "expanded", !1),
                document.activeElement == this.H() && this.H().blur(),
                Rh(this.J),
                this.dispatchEvent("close"),
                $h(this),
                a && _.lg(function() {
                    _.Y(this.i, "transition", "")
                }, 0, this))
            }
            o() {
                return _.U(this.i, "gb_Na")
            }
            N() {
                const a = window.visualViewport ? window.visualViewport.height : window.innerHeight;
                a && _.Y(this.i, "height", `calc(${a}px - 100%)`)
            }
            Y() {
                this.dispatchEvent("mbc");
                if (!this.G) {
                    if (this.o()) {
                        this.close();
                        var a = !0
                    } else
                        this.open(),
                        a = !1;
                    a && this.H().focus()
                }
            }
            ta(a) {
                9 === a.keyCode && this.o() && (a = this.J,
                _.Z(a.i, "gb_X", !0),
                Qh(a))
            }
            da(a) {
                a: {
                    if (36 == a.keyCode || 35 == a.keyCode) {
                        var b = _.yh(this.i);
                        if (0 < b.length) {
                            var c = b[b.length - 1];
                            36 == a.keyCode && (c = !ci(this) && 1 < b.length ? b[1] : b[0]);
                            c.focus();
                            a.preventDefault();
                            break a
                        }
                    }
                    27 != a.keyCode || this.na && !ci(this) || (this.close(),
                    null != this.R && this.R.focus())
                }
                9 === a.keyCode && this.o() && ci(this) && (b = a.target,
                c = _.yh(this.i),
                0 < c.length && (b == c[0] && a.shiftKey ? (c[c.length - 1].focus(),
                a.preventDefault()) : b != c[c.length - 1] || a.shiftKey || (c[0].focus(),
                a.preventDefault())))
            }
            M(a) {
                this.o() && a.target instanceof Node && !(!ci(this) || this.O && _.jh(a.target, Wh)) && ("keydown" == a.type ? 27 == a.keyCode && (a.preventDefault(),
                a.stopPropagation(),
                this.close(),
                this.H().focus()) : _.kh(a.target, "gb_7") || _.kh(a.target, "gb_Pc") || _.gg(this.i, a.target) || ("touchstart" == a.type && (a.preventDefault(),
                a.stopPropagation()),
                this.close()))
            }
            L() {
                this.o() && (!ci(this) || "IFRAME" != document.activeElement.tagName && (this.O && _.jh(document.activeElement, Wh) || _.kh(document.activeElement, "gb_Vc") || _.kh(document.activeElement, "gb_7") || Uh(this.F)))
            }
            ea() {
                this.ua.push(new Yh)
            }
        }
        ;
        _.Ch = class extends _.Ah {
            constructor(a) {
                super(a);
                _.fh.listen(a, this.i, !1, this)
            }
            i(a) {
                this.dispatchEvent("click") || a.preventDefault()
            }
        }
        ;
        var ei = class {
            constructor() {
                this.i = null
            }
            ed() {
                return this.i
            }
        }
        ;
        var fi = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.o = c || _.q
            }
        }
        ;
        var gi = class {
            constructor(a) {
                this.i = [];
                this.v = a || this
            }
            j(a, b, c) {
                this.A(a, b, c);
                this.i.push(new fi(a,b,c))
            }
            A(a, b, c) {
                c = c || _.q;
                for (var d = 0, e = this.i.length; d < e; d++) {
                    var f = this.i[d];
                    if (f.i == a && f.j == b && f.o == c) {
                        this.i.splice(d, 1);
                        break
                    }
                }
            }
            o(a) {
                a.i = this.v;
                for (var b = 0, c = this.i.length; b < c; b++) {
                    var d = this.i[b];
                    "catc" == d.i && d.j.call(d.o, a)
                }
            }
        }
        ;
        var ii = function(a, b) {
            _.W.call(this);
            this.i = a;
            this.o = hi(this.i);
            this.C = b || 100;
            this.v = _.V(a, "resize", this.A, !1, this)
        };
        _.A(ii, _.W);
        ii.prototype.P = function() {
            _.ff(this.v);
            ii.W.P.call(this)
        }
        ;
        ii.prototype.A = function() {
            this.j || (this.j = new Ih(this.B,this.C,this),
            _.Tf(this, this.j));
            this.j.start()
        }
        ;
        ii.prototype.B = function() {
            if (!this.i.isDisposed()) {
                var a = this.o
                  , b = hi(this.i);
                this.o = b;
                if (a) {
                    var c = !1;
                    a.width != b.width && (this.dispatchEvent("b"),
                    c = !0);
                    a.height != b.height && (this.dispatchEvent("a"),
                    c = !0);
                    c && this.dispatchEvent("resize")
                } else
                    this.dispatchEvent("a"),
                    this.dispatchEvent("b"),
                    this.dispatchEvent("resize")
            }
        }
        ;
        var ji = function(a) {
            _.W.call(this);
            this.j = a || window;
            this.o = _.V(this.j, "resize", this.v, !1, this);
            this.i = _.ag(this.j || window)
        };
        _.A(ji, _.W);
        var li = function() {
            var a = window
              , b = _.Jd(a);
            return ki[b] = ki[b] || new ji(a)
        }
          , ki = {}
          , hi = function(a) {
            return a.i ? _.tg(a.i) : null
        };
        ji.prototype.P = function() {
            ji.W.P.call(this);
            this.o && (_.ff(this.o),
            this.o = null);
            this.i = this.j = null
        }
        ;
        ji.prototype.v = function() {
            var a = _.ag(this.j || window);
            _.ug(a, this.i) || (this.i = a,
            this.dispatchEvent("resize"))
        }
        ;
        var mi = function(a, b) {
            for (var c = 0, d = b.length - 1, e = b[0]; c < d; ) {
                if (a <= e.max)
                    return e.id;
                e = b[++c]
            }
            return b[d].id
        }
          , ni = class {
            constructor(a, b) {
                this.v = new gi(this);
                this.D = a;
                this.B = b;
                this.i = mi(a.offsetWidth, this.B);
                this.F = new ii(li(),10);
                _.V(this.F, "b", function() {
                    window.requestAnimationFrame ? window.requestAnimationFrame((0,
                    _.y)(this.C, this)) : this.C()
                }, !1, this)
            }
            C() {
                var a = mi(this.D.offsetWidth, this.B);
                a != this.i && (this.i = a,
                this.o(new ei))
            }
            j(a, b, c) {
                this.v.j(a, b, c)
            }
            A(a, b) {
                this.v.A(a, b)
            }
            o(a) {
                this.v.o(a)
            }
        }
        ;
        _.Dh = class extends _.Ah {
            constructor(a) {
                super(a);
                _.V(a, "click", this.i, !1, this)
            }
            j() {
                var a = this.H().getAttribute("aria-pressed");
                return (null == a ? a : "boolean" === typeof a ? a : "true" == a) || !1
            }
            i(a) {
                a = a.currentTarget;
                var b = uh(a, "pressed");
                _.Wf(_.ph(b)) || "true" == b || "false" == b ? _.se(a, "pressed", "true" == b ? "false" : "true") : a.removeAttribute("aria-pressed");
                this.dispatchEvent("click")
            }
        }
        ;
        var oi, pi, qi, ri, Ai, xi, Bi, Ci, yi, si, ti, ui, wi, zi, Ei, Fi, Ji, Ii, Gi, Hi;
        oi = function(a, b) {
            if (a = _.T(b ? "gb_ie" : "gb_je", a.o)) {
                var c = a.offsetWidth;
                _.Db(a.children, function(d) {
                    _.U(d, "gb_r") && (c -= d.offsetWidth)
                });
                return c
            }
            return 0
        }
        ;
        pi = function(a, b) {
            null == a.A ? a.M.log(Error("$")) : a.X ? a.M.log(Error("aa")) : a.yb = 0 > b ? 0 : b
        }
        ;
        qi = function(a, b, c) {
            var d = 320
              , e = _.Of(_.Hd(a.j, 29), 0);
            0 < e && (d = e);
            e = d + 2 * Math.max(b, c);
            b = d + b + c;
            return e != b && a.X ? [{
                id: 1,
                max: b
            }, {
                id: 2,
                max: e
            }, {
                id: 3
            }] : [{
                id: 1,
                max: b
            }, {
                id: 3
            }]
        }
        ;
        ri = function(a) {
            var b = _.Pc.i();
            a.v || _.pd(b.i, Error("V"));
            _.w(_.D(a.j, 7)) || _.pd(b.D, Error("W"));
            _.w(_.D(a.j, 12)) || _.pd(b.B, Error("X"));
            _.w(_.D(a.j, 13)) || _.pd(b.C, Error("Y"))
        }
        ;
        Ai = function(a, b) {
            !a.i && a.v && si(a);
            a.i && !a.N && a.G("default");
            a.i && a.Sb && a.G("none");
            ti(a);
            if (a.fc)
                a.K = !0;
            else if (a.hc)
                a.K = !1;
            else if (a.Y)
                a.K = !0;
            else if (a.V)
                a.K = !1;
            else {
                var c = "gb_Sa" === b
                  , d = _.w(_.D(a.j, 5), !1)
                  , e = _.w(_.D(a.j, 7), !1);
                a.K = !(c && (d || e))
            }
            c = "gb_Sa" == b;
            d = "gb_wd" == b;
            a.Rb && a.U && _.Z(a.U, "gb_r", c || d);
            e = ui(a, b);
            a.i && e ? _.vi(a) || null == a.R || (e = _.T("gb_7c"),
            a.R.parentNode != e && e.insertBefore(a.R, e.childNodes[0] || null),
            _.Ae(a.B, "gb_Dd"),
            a.na(),
            a.dispatchEvent("upi")) : _.vi(a) && a.v && null != a.R && (e = a.he,
            e.insertBefore(a.R, e.childNodes[0] || null),
            _.Ce(a.B, "gb_Dd"),
            a.na(),
            a.dispatchEvent("upo"));
            _.I(a.j, 44) && !a.Y && !_.I(a.j, 10) && 1 < wi(a).length && a.U && a.B && (_.Z(a.U, "gb_r", c),
            _.Z(a.B, "gb_Dd", c));
            if (a.D && !a.Y) {
                e = a.D.H();
                var f = !a.V;
                _.Z(e, "gb_r", !f);
                f && xi(a, a.K)
            }
            a.i && (a.i.isVisible("menu") || a.i.isVisible("back")) && !ci(a.i) && (a.nb = a.i.o());
            e = _.qh(Vh);
            _.De(a.o, e);
            _.Ae(a.o, b);
            _.D(a.j, 7);
            if (a.X && null != a.C)
                if ("gb_2c" != b)
                    _.Y(a.C, "min-width", ""),
                    _.Y(a.B, "min-width", "");
                else {
                    f = _.Fg(a.C).width;
                    var g = _.Fg(a.B).width;
                    f = Math.max(f, g);
                    _.Y(a.C, "min-width", f + "px");
                    _.Y(a.B, "min-width", f + "px")
                }
            c ? a.O || (a.O = !0,
            yi(a, a.O)) : (a.O = !1,
            a.ua());
            null != a.A && (_.Z(a.A, "gb_Ze", !c && !d),
            _.Z(a.A, "gb_Xe", c || d));
            a.i && (c = a.i.i,
            _.De(c, e),
            _.Ae(c, b),
            ci(a.i) ? _.T("gb_Id").appendChild(c) : a.o.appendChild(c),
            a.i.isVisible("menu") || a.i.isVisible("back")) && (b = !ci(a.i),
            c = a.i.o(),
            b && !c && a.nb ? a.i.open() : !b && c && a.i.close());
            zi(a)
        }
        ;
        xi = function(a, b) {
            const c = _.T("gb_Oc", a.D.H());
            _.Z(c, "gb_r", !b);
            a = _.T("gb_pd", a.D.H());
            null != a && _.Z(a, "gb_8d", !b)
        }
        ;
        Bi = function(a) {
            a = a.Z[0];
            return a.classList.contains("gb_Qc") ? 1 : a.classList.contains("gb_Nd") ? 2 : 0
        }
        ;
        Ci = function(a, b) {
            if (a.D) {
                if (2 == b) {
                    b = _.x(_.G(a.j, 24), "");
                    var c = _.x(_.G(a.j, 27), "")
                } else
                    1 == b ? (b = _.x(_.G(a.j, 23), ""),
                    c = _.x(_.G(a.j, 26), "")) : (b = _.x(_.G(a.j, 22), ""),
                    c = _.x(_.G(a.j, 25), ""));
                "" == b && "" == c || Hh(a.D, b, c)
            }
        }
        ;
        _.Di = function(a, b, c) {
            a.i && (ci(a.i) && (c = b = !1),
            a = document.body,
            _.Z(a, "gb_de", b),
            _.Z(a, "gb_ce", c))
        }
        ;
        yi = function(a, b) {
            if (_.I(a.j, 7) && (!a.O || b)) {
                if (a.X) {
                    var c = _.T("gb_ie", a.o);
                    if (c) {
                        var d = _.T("gb_je", a.o)
                          , e = "gb_2c" != a.F.i || b ? "" : a.lc + "px";
                        _.Y(c, "min-width", e);
                        _.Y(d, "min-width", e)
                    }
                }
                _.U(a.A, "gb_Ie") != b && (_.Z(a.A, "gb_Ie", b),
                b ? a.dispatchEvent("sfi") : a.dispatchEvent("sfu"),
                _.Z(_.T("gb_1d", a.A), "gb_Ie", b),
                b && a.ta())
            }
        }
        ;
        si = function(a) {
            var b = _.T("gb_Vc");
            if (b) {
                var c = new Map;
                c.set("menu", _.T("gb_Pc", a.o));
                c.set("back", _.T("gb_Sc"));
                c.set("close", _.T("gb_Tc"));
                var d = !1;
                c.forEach(e=>{
                    e || (a.M.log(Error("T")),
                    d = !0)
                }
                );
                if (!d) {
                    a.i = new di(c,b,_.w(_.D(a.j, 16), !1),_.w(_.D(a.j, 9), !1),_.w(_.D(a.j, 33), !1));
                    a.i.listen("open", a.Pb, !1, a);
                    a.i.listen("close", a.Ob, !1, a);
                    a.i.listen("msc", a.Qb, !1, a);
                    switch (_.R(a.j, 32)) {
                    case 1:
                        a.G("back");
                        break;
                    case 2:
                        a.G("close");
                        break;
                    case 3:
                        a.G("none");
                        break;
                    default:
                        a.G("default")
                    }
                    _.Eh();
                    _.z("gbar.C", di);
                    di.prototype.ca = di.prototype.K;
                    di.prototype.cc = di.prototype.ea;
                    di.prototype.cd = di.prototype.Z;
                    di.prototype.cf = di.prototype.open;
                    di.prototype.cg = di.prototype.close;
                    di.prototype.ch = di.prototype.getStyle;
                    di.prototype.ck = di.prototype.o;
                    di.prototype.cl = di.prototype.va;
                    di.prototype.cm = di.prototype.X;
                    di.prototype.cn = di.prototype.Aa;
                    _.Pc.i().i.resolve(a.i)
                }
            } else
                a.M.log(Error("U"))
        }
        ;
        ti = function(a) {
            null != a.C && ("gb_Sa" == a.F.i ? _.Y(a.C, "min-width", "") : null != a.yb && _.Y(a.C, "min-width", a.yb + "px"))
        }
        ;
        ui = function(a, b) {
            var c = "gb_Sa" == b;
            b = "gb_wd" == b;
            var d = _.w(_.D(a.j, 5), !1)
              , e = _.w(_.D(a.j, 2), !1);
            return !(_.w(_.D(a.j, 10), !1) || a.Y || _.w(_.D(a.j, 44), !1)) && e && (c || b && (d || a.V))
        }
        ;
        wi = function(a) {
            var b = _.T("gb_ie", a.o)
              , c = _.T("gb_je", a.o)
              , d = [];
            b && _.Db(b.children, function(e) {
                d.push(e)
            });
            _.w(_.D(a.j, 7), !1) && (a = _.T("gb_Ie", a.A)) && (a = _.T("gb_Ke", a),
            a.j = !0,
            d.push(a));
            c && _.Db(c.children, function(e) {
                d.push(e)
            });
            return d
        }
        ;
        zi = function(a) {
            var b = a.o.offsetHeight + "px";
            a.ob != b && (a.ob = b,
            a.rb && (a.rb.style.height = b),
            a.dispatchEvent("resize"))
        }
        ;
        Ei = function(a, b, c) {
            b = _.ng(b, function(e) {
                return _.U(e, "gb_le") ? (_.Ae(e, "gb_r"),
                !1) : !0
            }, a);
            for (a = 0; a < b.length; a++) {
                var d = b[a];
                a >= c ? _.Ae(d, "gb_r") : _.Ce(d, "gb_r")
            }
        }
        ;
        _.vi = function(a) {
            return !!a.i && _.U(a.B, "gb_Dd")
        }
        ;
        Fi = function(a, b) {
            _.De(a, ["gb_Nd", "gb_Qc"]);
            1 == b ? _.Ae(a, "gb_Qc") : 2 == b && _.Ae(a, "gb_Nd")
        }
        ;
        Ji = class extends _.W {
            constructor(a, b, c, d) {
                super();
                this.o = a;
                _.Ce(this.o, "gb_qd");
                this.j = b;
                this.M = c;
                this.ob = "";
                this.rb = d;
                this.D = this.i = null;
                this.nb = this.N = this.K = !1;
                this.Y = _.w(_.D(this.j, 16), !1);
                this.T = new _.og(this);
                this.Aa = _.T("gb_fd", this.o);
                this.U = _.T("gb_k", this.o);
                this.V = _.w(_.D(b, 6), !1);
                this.Sc = _.T("gb_jd", this.Aa);
                this.v = _.T("gb_sd", this.o);
                this.L = _.T("gb_zd", this.o);
                (this.qa = _.w(_.D(this.j, 21), !1)) && this.v && (this.va = _.T("gb_re", this.o),
                this.kd = _.T("gb_ve", this.o),
                this.da = _.T("gb_se", this.o));
                this.B = _.T("gb_Cd", this.o);
                this.R = _.T("gb_8c", this.o);
                this.he = _.T("gb_Vd", this.o);
                this.C = _.T("gb_hd", this.o);
                this.A = _.T("gb_Bd", this.o);
                this.Z = Array.prototype.slice.call(_.ih("gb_ld", this.o));
                this.O = !1;
                this.fc = _.w(_.D(this.j, 19), !1);
                this.Sb = _.w(_.D(this.j, 20), !1);
                this.Rb = _.w(_.D(this.j, 45), !1);
                this.hc = _.w(_.D(this.j, 46), !1);
                a = oi(this, !0);
                b = oi(this, !1);
                this.lc = Math.max(a, b);
                this.X = _.D(this.j, 15);
                c = _.Of(_.Hd(this.j, 30), 0);
                0 != c && pi(this, c);
                a = qi(this, a, b);
                this.F = new ni(document.body,Gi);
                this.Kb = _.x(_.G(this.j, 37));
                this.Jb = _.x(_.G(this.j, 38));
                _.U(this.o, "gb_md");
                this.Vc = _.w(_.D(this.j, 39));
                this.qa && this.v && (this.qb = new ni(this.o,Hi),
                this.qb.j("catc", this.ta, this),
                this.ta(),
                _.gh(this.T, this.va, function() {
                    var e = this.kd
                      , f = !_.U(e, "gb_r");
                    _.Z(e, "gb_r", f)
                }));
                this.kc = _.w(_.D(this.j, 1), !1);
                this.jc = _.w(_.D(this.j, 40), !1);
                ri(this);
                Ai(this, this.F.i);
                this.F.j("catc", this.Nb, this);
                _.I(this.j, 8) && document.addEventListener("scroll", (0,
                _.y)(function() {
                    _.Z(this.o, "gb_ud", 0 < window.scrollY)
                }, this));
                null != this.A && _.I(this.j, 7) && (this.ea = new ni(this.A,a),
                this.ea.j("catc", this.ua, this),
                this.ua());
                this.J = null;
                if (this.S = _.T("gb_Fa", this.o))
                    this.J = _.T("gb_Qa", this.S),
                    this.T.o(this.J, "error", this.Mb, !1, this)
            }
            Mb() {
                null != this.J && (this.J.src = "https://www.gstatic.com/images/icons/material/system/1x/broken_image_grey600_18dp.png",
                this.J.srcset = "https://www.gstatic.com/images/icons/material/system/1x/broken_image_grey600_18dp.png 1x, https://www.gstatic.com/images/icons/material/system/2x/broken_image_grey600_18dp.png 2x",
                _.Y(this.J, "width", "auto"),
                _.Ae(this.J.parentElement, "gb_Pa"))
            }
            H() {
                return this.o
            }
            Rd(a) {
                this.D = a;
                xi(this, this.K);
                a = Bi(this);
                0 != a && Ci(this, a)
            }
            Sd(a, b) {
                this.D && Hh(this.D, a, b)
            }
            Wa(a) {
                this.Ab(a || this.Vc ? 1 : 0);
                _.U(this.H(), "gb_Md") || this.Oa(a ? this.Kb : this.Jb);
                _.Z(this.H(), "gb_i", a);
                const b = _.T("gb_Pd");
                null != b && _.Z(b, "gb_i", a);
                this.i && this.jc && _.Z(this.i.i, "gb_0c", a);
                this.S && _.Z(this.S, "gb_i", a);
                _.td("dd").Wa(a)
            }
            Yd(a) {
                this.Aa && (_.qe(this.Sc, a || ""),
                _.Z(this.Aa, "gb_r", !a),
                this.V = !!a,
                Ai(this, this.F.i))
            }
            Ib() {
                return _.T("gb_9d", this.v)
            }
            ua() {
                if (null != this.ea) {
                    var a = this.ea.i;
                    3 == a ? yi(this, !1) : 1 == a ? yi(this, !0) : yi(this, "gb_2c" == this.F.i)
                }
            }
            ta() {
                if (this.qa && this.v) {
                    var a = wi(this)
                      , b = !1;
                    a = _.ng(a, function(f) {
                        b = b || _.U(f, "gb_le");
                        return _.U(f, "gb_ne") || _.U(f, "gb_ee") || _.U(f, "gb_Ke")
                    });
                    var c = this.qb.i.Jd
                      , d = !1;
                    if (a.length > c || b)
                        d = !0,
                        c--;
                    var e = a.length - c;
                    if (d != !_.U(this.va, "gb_r") || e != this.da.children) {
                        _.Z(this.va, "gb_r", !d);
                        if (d)
                            for (; this.da.firstChild; )
                                this.da.removeChild(this.da.firstChild);
                        Ei(this, a, c);
                        d ? this.T.o(document.body, Ii, this.Ya, !0, this) : this.T.Ca(document.body, Ii, this.Ya, !1, this)
                    }
                }
            }
            Ya(a) {
                !_.U(this.kd, "gb_r") && a.target instanceof Node && ("keydown" == a.type ? 27 == a.keyCode && (a.preventDefault(),
                a.stopPropagation(),
                _.Ae(this.kd, "gb_r"),
                this.H().focus()) : _.gg(this.kd, a.target) || ("touchstart" == a.type && (a.preventDefault(),
                a.stopPropagation()),
                _.Ae(this.kd, "gb_r")))
            }
            Nb() {
                Ai(this, this.F.i);
                this.i && _.Di(this, this.i.o(), !1);
                this.dispatchEvent("ffc")
            }
            Pb() {
                _.Di(this, !0, !0)
            }
            Ob() {
                _.Di(this, !1, !0)
            }
            Qb() {
                var a = ci(this.i)
                  , b = this.i.i;
                a ? _.T("gb_Id").appendChild(b) : this.o.appendChild(b)
            }
            G(a) {
                var b = !1;
                switch (a) {
                case "back":
                    this.N = !0;
                    bi(this.i);
                    ai(this.i, "back");
                    b = !0;
                    break;
                case "close":
                    this.N = !0;
                    bi(this.i);
                    ai(this.i, "close");
                    b = !0;
                    break;
                case "default":
                    this.N = !1;
                    ui(this, this.F.i) || this.kc ? (this.i && !this.i.isVisible("menu") && (bi(this.i),
                    ai(this.i, "menu")),
                    b = !0) : (this.i && this.i.isVisible("back") && bi(this.i),
                    this.i && this.i.isVisible("menu") ? (a = this.i,
                    a.close(),
                    _.Ae(a.H(), "gb_r"),
                    !_.U(a.V, "gb_r") && _.Ce(a.H(), "gb_Uc")) : (a = _.T("gb_Pc", this.o)) && _.Ae(a, "gb_r"),
                    b = !1);
                    break;
                case "none":
                    this.N = !0,
                    bi(this.i),
                    b = !1
                }
                null != this.C && _.Z(this.C, "gb_id", b)
            }
            Hb() {
                return this.o.offsetHeight
            }
            mc() {
                this.L && zi(this)
            }
            Lb() {
                if (!this.L) {
                    var a = _.me("DIV");
                    _.Be(a, ["gb_zd", "gb_ld"]);
                    Fi(a, Bi(this));
                    a.style.backgroundColor = this.o.style.backgroundColor;
                    this.Z.push(a);
                    var b = this.v;
                    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
                    this.L = a
                }
                return this.L
            }
            Tc() {
                _.fg(this.L);
                this.L = null;
                zi(this)
            }
            Ab(a) {
                2 == a && (a = 0);
                for (var b = 0; b < this.Z.length; b++)
                    Fi(this.Z[b], a);
                Ci(this, a)
            }
            Oa(a) {
                this.o.style.backgroundColor = a
            }
            Gb() {
                return this.o.style.backgroundColor
            }
            na() {
                var a = _.td("dd");
                _.rh(a) && _.rh(a).O(!1);
                _.Jh(a, null)
            }
            Wc(a) {
                pi(this, a - 8 - 10);
                ti(this)
            }
            Vd(a) {
                _.Z(_.T("gb_Ic", this.v), "gb_r", !a)
            }
            Lc() {
                Kh(a=>{
                    a && a.Lc()
                }
                )
            }
            Uc(a) {
                a && (_.zh(_.T("gb_Pd"), a),
                _.Pc.i().j.then(b=>void b.Md(a)))
            }
        }
        ;
        Ii = "click mousedown scroll touchstart wheel keydown".split(" ");
        Gi = [{
            id: "gb_Sa",
            max: 599
        }, {
            id: "gb_wd",
            max: 1023
        }, {
            id: "gb_2c"
        }];
        Hi = [{
            id: {
                id: "oneProductControl",
                Jd: 1
            },
            max: 320
        }, {
            id: {
                id: "twoProductControl",
                Jd: 2
            },
            max: 360
        }, {
            id: {
                id: "threeProductControl",
                Jd: 3
            },
            max: 410
        }, {
            id: {
                id: "unlimitedProductControl",
                Jd: Number.MAX_SAFE_INTEGER
            }
        }];
        var Ki;
        _.W.prototype.za = _.Fd(function(a, b, c, d, e) {
            return a.call(this, b, _.Fd(Fh, c), d, e)
        }, _.W.prototype.listen);
        _.W.prototype.zb = _.W.prototype.Og;
        var Li = _.T("gb_Ra");
        if (null == Li)
            Ki = null;
        else {
            var Mi = _.E(_.Qc, _.qd, 6) || new _.qd
              , Ni = new Ji(Li,Mi,_.Ec,_.T("gb_vd"));
            _.z("gbar.P", Ji);
            Ji.prototype.pa = Ji.prototype.Hb;
            Ji.prototype.pb = Ji.prototype.Yd;
            Ji.prototype.pc = Ji.prototype.Ab;
            Ji.prototype.pd = Ji.prototype.Oa;
            Ji.prototype.pe = Ji.prototype.Lb;
            Ji.prototype.pf = Ji.prototype.mc;
            Ji.prototype.pg = Ji.prototype.Tc;
            Ji.prototype.ph = Ji.prototype.Ib;
            Ji.prototype.pi = Ji.prototype.na;
            Ji.prototype.pj = Ji.prototype.Wc;
            Ji.prototype.pk = Ji.prototype.Vd;
            Ji.prototype.pl = Ji.prototype.Uc;
            Ji.prototype.pm = Ji.prototype.G;
            Ji.prototype.pn = Ji.prototype.Gb;
            Ji.prototype.po = Ji.prototype.Sd;
            Ji.prototype.pp = Ji.prototype.Wa;
            Ji.prototype.pq = Ji.prototype.Lc;
            _.Pc.i().v.resolve(Ni);
            Ki = Ni
        }
        _.Oi = Ki;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Pi = function(a, b) {
            return _.K(a, 36, b)
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Qi = document.querySelector(".gb_b .gb_d")
          , Ri = document.querySelector("#gb.gb_Zc");
        Qi && !Ri && _.kd(_.Vc, Qi, "click");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Pc.i().v.then(function(a) {
            if (a) {
                var b = _.T("gb_Ic", a.v);
                b && (b = new _.dh(b),
                a.Rd(b))
            }
        });
    } catch (e) {
        _._DumpException(e)
    }
}
)(this.gbar_);
// Google Inc.

//# sourceURL=http://og/ab.js

