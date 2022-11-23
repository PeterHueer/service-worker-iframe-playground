(window.__twttrll = window.__twttrll || []).push([[8], {
  171: function (t, e, r) {
    var i = r(40), n = r(173), a = r(7);
    (i = Object.create(i)).build = a(i.build, null, n), t.exports = i
  }, 172: function (t, e, r) {
    var i = r(43), n = r(39), a = r(20), s = r(36), o = r(0), c = r(7), d = r(34), u = r(5), l = r(176);
    t.exports = function (t) {
      t.params({partner: {fallback: c(d.val, d, "partner")}}), t.define("scribeItems", function () {
        return {}
      }), t.define("scribeNamespace", function () {
        return {client: "tfw"}
      }), t.define("scribeData", function () {
        return {
          widget_origin: s.rootDocumentLocation(),
          widget_frame: s.isFramed() && s.currentDocumentLocation(),
          widget_partner: this.params.partner,
          widget_site_screen_name: l(d.val("site")),
          widget_site_user_id: u.asNumber(d.val("site:id")),
          widget_creator_screen_name: l(d.val("creator")),
          widget_creator_user_id: u.asNumber(d.val("creator:id"))
        }
      }), t.define("scribe", function (t, e, r) {
        var n = this;
        return a.getHorizonSettings().then(function (a) {
          var s = {session_id: a.sessionId};
          t = o.aug(n.scribeNamespace(), t || {}), e = o.aug(n.scribeData(), e || {}), i.clientEvent(t, e, !1, r, s)
        })
      }), t.define("scribeInteraction", function (t, e, r) {
        var i = n.extractTermsFromDOM(t.target);
        return i.action = t.type, "url" === i.element && (i.element = n.clickEventElement(t.target)), this.scribe(i, e, r)
      })
    }
  }, 173: function (t, e, r) {
    var i = r(41), n = r(0), a = r(174);

    function s() {
      i.apply(this, arguments), this.Widget = this.Component
    }

    s.prototype = Object.create(i.prototype), n.aug(s.prototype, {
      factory: a, build: function () {
        return i.prototype.build.apply(this, arguments)
      }, selectors: function (t) {
        var e = this.Widget.prototype.selectors;
        t = t || {}, this.Widget.prototype.selectors = n.aug({}, t, e)
      }
    }), t.exports = s
  }, 174: function (t, e, r) {
    var i = r(6), n = r(37), a = r(42), s = r(0), o = r(7), c = r(175), d = "twitter-widget-";
    t.exports = function () {
      var t = a();

      function e(e, r) {
        t.apply(this, arguments), this.id = d + c(), this.sandbox = r
      }

      return e.prototype = Object.create(t.prototype), s.aug(e.prototype, {
        selectors: {}, hydrate: function () {
          return i.resolve()
        }, prepForInsertion: function () {
        }, render: function () {
          return i.resolve()
        }, show: function () {
          return i.resolve()
        }, resize: function () {
          return i.resolve()
        }, select: function (t, e) {
          return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, s.toRealArray(t.querySelectorAll(e))) : []
        }, selectOne: function () {
          return this.select.apply(this, arguments)[0]
        }, selectLast: function () {
          return this.select.apply(this, arguments).pop()
        }, on: function (t, e, r) {
          var i, a = this.el;
          this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? r = e : i = e, i = this.selectors[i] || i, r = o(r, this), t.forEach(i ? function (t) {
            n.delegate(a, t, i, r)
          } : function (t) {
            a.addEventListener(t, r, !1)
          }))
        }
      }), e
    }
  }, 175: function (t, e) {
    var r = 0;
    t.exports = function () {
      return String(r++)
    }
  }, 176: function (t, e) {
    t.exports = function (t) {
      return t && "@" === t[0] ? t.substr(1) : t
    }
  }, 177: function (t, e, r) {
    var i = r(5), n = r(0);
    t.exports = function (t) {
      t.define("widgetDataAttributes", function () {
        return {}
      }), t.define("setDataAttributes", function () {
        var t = this.sandbox.sandboxEl;
        n.forIn(this.widgetDataAttributes(), function (e, r) {
          i.hasValue(r) && t.setAttribute("data-" + e, r)
        })
      }), t.after("render", function () {
        this.setDataAttributes()
      })
    }
  }, 178: function (t, e, r) {
    var i = r(0);
    t.exports = function (t) {
      return i.isType("string", t)
    }
  }, 182: function (t, e, r) {
    var i = r(4), n = r(5), a = i.createElement("div");
    t.exports = function (t) {
      return n.isNumber(t) && (t += "px"), a.style.width = "", a.style.width = t, a.style.width || null
    }
  }, 185: function (t, e) {
    var r = /^(dark|light)$/;
    t.exports = function (t) {
      return r.test(t)
    }
  }, 186: function (t, e, r) {
    var i = r(4), n = r(171),
      a = ["http://localhost:8080", "http://localhost:8080", "http://localhost:8080", "http://localhost:8080", "http://localhost:8080", "http://localhost:8080", "http://localhost:8080"],
      s = !1, o = function (t) {
        return a.some(function (e) {
          return 0 === t.indexOf(e)
        })
      };
    t.exports = n.couple(r(172), function (t) {
      t.define("scribeSecurityPolicyViolation", function (t) {
        !s && o(t.blockedURI) && (s = !0, this.scribe({component: "error", action: "security-policy-error"}))
      }), t.before("hydrate", function () {
        i.addEventListener && i.addEventListener("securitypolicyviolation", this.scribeSecurityPolicyViolation.bind(this))
      })
    })
  }, 242: function (t, e, r) {
    var i = r(6), n = r(44), a = r(12), s = r(171), o = r(19), c = r(22), d = r(0), u = r(11), l = r(39), f = r(20),
      p = r(243), h = r(244), m = "Twitter Tweet", b = n.version;
    t.exports = s.couple(r(172), r(177), function (t) {
      t.params(p), t.define("getUrlParams", function (t, e) {
        var r = this.scribeData();
        return d.compact({
          dnt: c.enabled(),
          features: f.encodeFeatures(t),
          hideCard: this.params.hideCard,
          hideThread: this.params.hideThread,
          id: this.params.tweetId,
          lang: this.params.lang,
          embedId: this.id,
          theme: this.params.theme,
          partner: this.params.partner,
          widgetsVersion: b,
          width: this.params.width,
          origin: r.widget_origin,
          frame: r.widget_frame,
          sessionId: e,
          siteScreenName: r.widget_site_screen_name,
          siteUserId: r.widget_site_user_id,
          creatorScreenName: r.widget_creator_screen_name,
          creatorUserId: r.widget_creator_user_id
        })
      }), t.around("scribeItems", function (t) {
        return d.aug(t(), l.formatHorizonTweetData(this.params.tweetId))
      }), t.around("scribeNamespace", function (t) {
        return d.aug(t(), {page: "tweet"})
      }), t.around("scribeData", function (t) {
        return d.aug(t(), {context: "horizon", widget_iframe_version: this.sandbox.iframeVersion})
      }), t.around("widgetDataAttributes", function (t) {
        return d.aug({"tweet-id": this.params.tweetId}, t())
      }), t.define("styleSandboxWrapper", function (t) {
        var e = this;
        return o.write(function () {
          d.forIn(t, function (t, r) {
            e._sandboxWrapperEl.style[t] = r
          })
        })
      }), t.override("render", function () {
        var t = this;
        return f.getHorizonSettings().then(function (e) {
          var r = t.getUrlParams(e.features, e.sessionId), n = a.embedIframe(["Tweet"], e.features), s = u.url(n, r);
          return h(e.features, t.params.tweetId, e.sessionId), t.sandbox.setWaitToSwapUntilRendered(!0), i.all([t.sandbox.setTitle(m), t.styleSandboxWrapper({
            display: "flex",
            maxWidth: t.params.width,
            width: "100%",
            marginTop: "10px",
            marginBottom: "10px"
          }), t.sandbox.styleSelf({display: "block", flexGrow: "1"}), t.sandbox.loadDocument(s)])
        })
      }), t.after("render", function () {
        var t = this.sandbox;
        return t.getResultsPromise().then(function () {
          t.makeVisible()
        }).then(function () {
          return t.getRenderedPromise()
        })
      })
    })
  }, 243: function (t, e, r) {
    var i = r(182), n = r(7), a = r(73), s = r(178), o = r(185), c = r(34), d = r(5), u = {
      tweetId: {required: !0, validate: s},
      id: {validate: s},
      lang: {required: !0, transform: a.matchLanguage, fallback: "en"},
      width: {required: !0, fallback: "550px", validate: i, transform: i},
      theme: {fallback: [n(c.val, c, "widgets:theme"), "light"], validate: o},
      hideCard: {fallback: !1, transform: d.asBoolean},
      hideThread: {fallback: !1, transform: d.asBoolean},
      partner: {fallback: n(c.val, c, "partner")}
    };
    t.exports = u
  }, 244: function (t, e, r) {
    var i = r(83), n = r(39), a = "tfw_team_holdback_11929";
    t.exports = function (t, e, r) {
      var s;
      t && (s = t[a]) && s.bucket && i(a, s.bucket, s.version, n.formatHorizonTweetData(e), r)
    }
  }, 245: function (t, e, r) {
    var i = r(178);
    t.exports = function (t) {
      t.params({
        align: {required: !1},
        width: {required: !1},
        floatedWidth: {fallback: "350px", validate: i},
        centeredWidth: {fallback: "70%", validate: i}
      }), t.before("render", function () {
        var t, e, r, i, n = this.params.align;
        switch (n && n.toLowerCase()) {
          case"center":
            t = this.params.width || this.params.centeredWidth, e = "auto", r = "auto";
            break;
          case"left":
            t = this.params.width || this.params.floatedWidth, r = "10px", i = "left";
            break;
          case"right":
            t = this.params.width || this.params.floatedWidth, e = "10px", i = "right";
            break;
          default:
            return
        }
        return this.styleSandboxWrapper && this._sandboxWrapperEl ? this.styleSandboxWrapper({
          width: t,
          marginLeft: e,
          marginRight: r,
          cssFloat: i
        }) : this.sandbox.styleSelf({width: t, marginLeft: e, marginRight: r, cssFloat: i})
      })
    }
  }, 90: function (t, e, r) {
    var i = r(171);
    t.exports = i.build([r(242), r(245), r(186)])
  }
}]);