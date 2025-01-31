"use strict"
define("open-ethereum-pool/app", ["exports", "open-ethereum-pool/resolver", "ember-load-initializers", "open-ethereum-pool/config/environment"], function (e, t, a, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n
    Ember.MODEL_FACTORY_INJECTIONS = !0, n = Ember.Application.extend({
        modulePrefix: r.default.modulePrefix,
        podModulePrefix: r.default.podModulePrefix,
        Resolver: t.default
    }), (0, a.default)(n, r.default.modulePrefix)
    var l = n
    e.default = l
}), define("open-ethereum-pool/cldrs/en", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = [{
        locale: "en-IN",
        parentLocale: "en-001"
    }, {
        locale: "en-001",
        parentLocale: "en",
        fields: {
            year: {
                displayName: "year",
                relative: {
                    0: "this year",
                    1: "next year",
                    "-1": "last year"
                },
                relativeTime: {
                    future: {
                        one: "in {0} year",
                        other: "in {0} years"
                    },
                    past: {
                        one: "{0} year ago",
                        other: "{0} years ago"
                    }
                }
            },
            "year-short": {
                displayName: "yr",
                relative: {
                    0: "this yr.",
                    1: "next yr.",
                    "-1": "last yr."
                },
                relativeTime: {
                    future: {
                        one: "in {0} yr",
                        other: "in {0} yr"
                    },
                    past: {
                        one: "{0} yr ago",
                        other: "{0} yr ago"
                    }
                }
            },
            month: {
                displayName: "month",
                relative: {
                    0: "this month",
                    1: "next month",
                    "-1": "last month"
                },
                relativeTime: {
                    future: {
                        one: "in {0} month",
                        other: "in {0} months"
                    },
                    past: {
                        one: "{0} month ago",
                        other: "{0} months ago"
                    }
                }
            },
            "month-short": {
                displayName: "mo",
                relative: {
                    0: "this mo.",
                    1: "next mo.",
                    "-1": "last mo."
                },
                relativeTime: {
                    future: {
                        one: "in {0} mo",
                        other: "in {0} mo"
                    },
                    past: {
                        one: "{0} mo ago",
                        other: "{0} mo ago"
                    }
                }
            },
            day: {
                displayName: "day",
                relative: {
                    0: "today",
                    1: "tomorrow",
                    "-1": "yesterday"
                },
                relativeTime: {
                    future: {
                        one: "in {0} day",
                        other: "in {0} days"
                    },
                    past: {
                        one: "{0} day ago",
                        other: "{0} days ago"
                    }
                }
            },
            "day-short": {
                displayName: "day",
                relative: {
                    0: "today",
                    1: "tomorrow",
                    "-1": "yesterday"
                },
                relativeTime: {
                    future: {
                        one: "in {0} day",
                        other: "in {0} days"
                    },
                    past: {
                        one: "{0} day ago",
                        other: "{0} days ago"
                    }
                }
            },
            hour: {
                displayName: "hour",
                relative: {
                    0: "this hour"
                },
                relativeTime: {
                    future: {
                        one: "in {0} hour",
                        other: "in {0} hours"
                    },
                    past: {
                        one: "{0} hour ago",
                        other: "{0} hours ago"
                    }
                }
            },
            "hour-short": {
                displayName: "hr",
                relative: {
                    0: "this hour"
                },
                relativeTime: {
                    future: {
                        one: "in {0} hr",
                        other: "in {0} hr"
                    },
                    past: {
                        one: "{0} hr ago",
                        other: "{0} hr ago"
                    }
                }
            },
            minute: {
                displayName: "minute",
                relative: {
                    0: "this minute"
                },
                relativeTime: {
                    future: {
                        one: "in {0} minute",
                        other: "in {0} minutes"
                    },
                    past: {
                        one: "{0} minute ago",
                        other: "{0} minutes ago"
                    }
                }
            },
            "minute-short": {
                displayName: "min",
                relative: {
                    0: "this minute"
                },
                relativeTime: {
                    future: {
                        one: "in {0} min",
                        other: "in {0} min"
                    },
                    past: {
                        one: "{0} min ago",
                        other: "{0} min ago"
                    }
                }
            },
            second: {
                displayName: "second",
                relative: {
                    0: "now"
                },
                relativeTime: {
                    future: {
                        one: "in {0} second",
                        other: "in {0} seconds"
                    },
                    past: {
                        one: "{0} second ago",
                        other: "{0} seconds ago"
                    }
                }
            },
            "second-short": {
                displayName: "sec",
                relative: {
                    0: "now"
                },
                relativeTime: {
                    future: {
                        one: "in {0} sec",
                        other: "in {0} sec"
                    },
                    past: {
                        one: "{0} sec ago",
                        other: "{0} sec ago"
                    }
                }
            }
        }
    }, {
        locale: "en",
        pluralRuleFunction: function (e, t) {
            var a = String(e).split("."),
                r = !a[1],
                n = Number(a[0]) == e,
                l = n && a[0].slice(-1),
                d = n && a[0].slice(-2)
            return t ? 1 == l && 11 != d ? "one" : 2 == l && 12 != d ? "two" : 3 == l && 13 != d ? "few" : "other" : 1 == e && r ? "one" : "other"
        },
        fields: {
            year: {
                displayName: "year",
                relative: {
                    0: "this year",
                    1: "next year",
                    "-1": "last year"
                },
                relativeTime: {
                    future: {
                        one: "in {0} year",
                        other: "in {0} years"
                    },
                    past: {
                        one: "{0} year ago",
                        other: "{0} years ago"
                    }
                }
            },
            "year-short": {
                displayName: "yr.",
                relative: {
                    0: "this yr.",
                    1: "next yr.",
                    "-1": "last yr."
                },
                relativeTime: {
                    future: {
                        one: "in {0} yr.",
                        other: "in {0} yr."
                    },
                    past: {
                        one: "{0} yr. ago",
                        other: "{0} yr. ago"
                    }
                }
            },
            month: {
                displayName: "month",
                relative: {
                    0: "this month",
                    1: "next month",
                    "-1": "last month"
                },
                relativeTime: {
                    future: {
                        one: "in {0} month",
                        other: "in {0} months"
                    },
                    past: {
                        one: "{0} month ago",
                        other: "{0} months ago"
                    }
                }
            },
            "month-short": {
                displayName: "mo.",
                relative: {
                    0: "this mo.",
                    1: "next mo.",
                    "-1": "last mo."
                },
                relativeTime: {
                    future: {
                        one: "in {0} mo.",
                        other: "in {0} mo."
                    },
                    past: {
                        one: "{0} mo. ago",
                        other: "{0} mo. ago"
                    }
                }
            },
            day: {
                displayName: "day",
                relative: {
                    0: "today",
                    1: "tomorrow",
                    "-1": "yesterday"
                },
                relativeTime: {
                    future: {
                        one: "in {0} day",
                        other: "in {0} days"
                    },
                    past: {
                        one: "{0} day ago",
                        other: "{0} days ago"
                    }
                }
            },
            "day-short": {
                displayName: "day",
                relative: {
                    0: "today",
                    1: "tomorrow",
                    "-1": "yesterday"
                },
                relativeTime: {
                    future: {
                        one: "in {0} day",
                        other: "in {0} days"
                    },
                    past: {
                        one: "{0} day ago",
                        other: "{0} days ago"
                    }
                }
            },
            hour: {
                displayName: "hour",
                relative: {
                    0: "this hour"
                },
                relativeTime: {
                    future: {
                        one: "in {0} hour",
                        other: "in {0} hours"
                    },
                    past: {
                        one: "{0} hour ago",
                        other: "{0} hours ago"
                    }
                }
            },
            "hour-short": {
                displayName: "hr.",
                relative: {
                    0: "this hour"
                },
                relativeTime: {
                    future: {
                        one: "in {0} hr.",
                        other: "in {0} hr."
                    },
                    past: {
                        one: "{0} hr. ago",
                        other: "{0} hr. ago"
                    }
                }
            },
            minute: {
                displayName: "minute",
                relative: {
                    0: "this minute"
                },
                relativeTime: {
                    future: {
                        one: "in {0} minute",
                        other: "in {0} minutes"
                    },
                    past: {
                        one: "{0} minute ago",
                        other: "{0} minutes ago"
                    }
                }
            },
            "minute-short": {
                displayName: "min.",
                relative: {
                    0: "this minute"
                },
                relativeTime: {
                    future: {
                        one: "in {0} min.",
                        other: "in {0} min."
                    },
                    past: {
                        one: "{0} min. ago",
                        other: "{0} min. ago"
                    }
                }
            },
            second: {
                displayName: "second",
                relative: {
                    0: "now"
                },
                relativeTime: {
                    future: {
                        one: "in {0} second",
                        other: "in {0} seconds"
                    },
                    past: {
                        one: "{0} second ago",
                        other: "{0} seconds ago"
                    }
                }
            },
            "second-short": {
                displayName: "sec.",
                relative: {
                    0: "now"
                },
                relativeTime: {
                    future: {
                        one: "in {0} sec.",
                        other: "in {0} sec."
                    },
                    past: {
                        one: "{0} sec. ago",
                        other: "{0} sec. ago"
                    }
                }
            }
        },
        numbers: {
            decimal: {
                long: [
                    [1e3, {
                        one: ["0 thousand", 1],
                        other: ["0 thousand", 1]
                    }],
                    [1e4, {
                        one: ["00 thousand", 2],
                        other: ["00 thousand", 2]
                    }],
                    [1e5, {
                        one: ["000 thousand", 3],
                        other: ["000 thousand", 3]
                    }],
                    [1e6, {
                        one: ["0 million", 1],
                        other: ["0 million", 1]
                    }],
                    [1e7, {
                        one: ["00 million", 2],
                        other: ["00 million", 2]
                    }],
                    [1e8, {
                        one: ["000 million", 3],
                        other: ["000 million", 3]
                    }],
                    [1e9, {
                        one: ["0 billion", 1],
                        other: ["0 billion", 1]
                    }],
                    [1e10, {
                        one: ["00 billion", 2],
                        other: ["00 billion", 2]
                    }],
                    [1e11, {
                        one: ["000 billion", 3],
                        other: ["000 billion", 3]
                    }],
                    [1e12, {
                        one: ["0 trillion", 1],
                        other: ["0 trillion", 1]
                    }],
                    [1e13, {
                        one: ["00 trillion", 2],
                        other: ["00 trillion", 2]
                    }],
                    [1e14, {
                        one: ["000 trillion", 3],
                        other: ["000 trillion", 3]
                    }]
                ],
                short: [
                    [1e3, {
                        one: ["0K", 1],
                        other: ["0K", 1]
                    }],
                    [1e4, {
                        one: ["00K", 2],
                        other: ["00K", 2]
                    }],
                    [1e5, {
                        one: ["000K", 3],
                        other: ["000K", 3]
                    }],
                    [1e6, {
                        one: ["0M", 1],
                        other: ["0M", 1]
                    }],
                    [1e7, {
                        one: ["00M", 2],
                        other: ["00M", 2]
                    }],
                    [1e8, {
                        one: ["000M", 3],
                        other: ["000M", 3]
                    }],
                    [1e9, {
                        one: ["0B", 1],
                        other: ["0B", 1]
                    }],
                    [1e10, {
                        one: ["00B", 2],
                        other: ["00B", 2]
                    }],
                    [1e11, {
                        one: ["000B", 3],
                        other: ["000B", 3]
                    }],
                    [1e12, {
                        one: ["0T", 1],
                        other: ["0T", 1]
                    }],
                    [1e13, {
                        one: ["00T", 2],
                        other: ["00T", 2]
                    }],
                    [1e14, {
                        one: ["000T", 3],
                        other: ["000T", 3]
                    }]
                ]
            }
        }
    }, {
        locale: "en-US",
        parentLocale: "en"
    }]
    e.default = t
}), define("open-ethereum-pool/components/active-li", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.getOwner,
        a = Ember.Component.extend({
            tagName: "li",
            classNameBindings: ["isActive:active:inactive"],
            router: function () {
                return t(this).lookup("router:main")
            }.property(),
            isActive: function () {
                var e = this.get("currentWhen")
                return this.get("router").isActive(e)
            }.property("router.url", "currentWhen")
        })
    e.default = a
}), define("open-ethereum-pool/components/submit_threshold", [], function () { }), define("open-ethereum-pool/components/twbs-popover", ["exports", "ember-cli-bootstrap3-popover/components/twbs-popover"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/components/twbs-popover/content", ["exports", "ember-cli-bootstrap3-popover/components/twbs-popover/content"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/components/twbs-popover/title", ["exports", "ember-cli-bootstrap3-popover/components/twbs-popover/title"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/components/twbs-popover/trigger", ["exports", "ember-cli-bootstrap3-popover/components/twbs-popover/trigger"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/components/twitter-feed", ["exports", "ember-cli-twitter-feed/components/twitter-feed"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/controllers/about", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/controllers/account", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        applicationController: Ember.inject.controller("application"),
        stats: Ember.computed.reads("applicationController.model.stats"),
        config: Ember.computed.reads("applicationController.config"),
        roundPercent: Ember.computed("stats", "model", {
            get: function () {
                var e = this.get("model.roundShares") / this.get("stats.nShares")
                return e ? e > 100 ? 100 : e : 0
            }
        }),
        payoutthreshold: Ember.computed("model", {
            get: function () {
                var e = t.default.APP.PayoutThreshold
                return this.getWithDefault("model.stats.payoutthreshold", e)
            }
        }),
        paymentPercent: Ember.computed("model", {
            get: function () {
                var e = t.default.APP.PayoutThreshold
                e *= 1e9
                var a = this.getWithDefault("model.stats.payoutthreshold", e),
                    r = this.get("model.stats.balance"),
                    n = 100
                return a *= 1e-9, r *= 1e-9, n = 100 * r / a, n ? n > 100 ? 100 : n.toFixed(2) : 0
            }
        })
    })
    e.default = a
}), define("open-ethereum-pool/controllers/account/index", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/controllers/account/payouts", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/controllers/account/rewards", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/controllers/application", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        },
        height: Ember.computed("model.nodes", {
            get: function () {
                var e = this.get("bestNode")
                return e ? e.height : 0
            }
        }),
        roundShares: Ember.computed("model.stats", {
            get: function () {
                return parseInt(this.get("model.stats.roundShares"))
            }
        }),
        ethinr: Ember.computed("stats", {
            get: function () {
                return parseFloat(this.get("model.exchangedata.price_inr"))
            }
        }),
        ethusd: Ember.computed("stats", {
            get: function () {
                return parseFloat(this.get("model.exchangedata.price_usd"))
            }
        }),
        difficulty: Ember.computed("model.nodes", {
            get: function () {
                var e = this.get("bestNode")
                return e ? e.difficulty : 0
            }
        }),
        hashrate: Ember.computed("difficulty", {
            get: function () {
                return this.getWithDefault("difficulty", 0) / t.default.APP.BlockTime
            }
        }),
        immatureTotal: Ember.computed("model", {
            get: function () {
                return this.getWithDefault("model.immatureTotal", 0) + this.getWithDefault("model.candidatesTotal", 0)
            }
        }),
        bestNode: Ember.computed("model.nodes", {
            get: function () {
                var e = null
                return this.get("model.nodes").forEach(function (t) {
                    e || (e = t), e.height < t.height && (e = t)
                }), e
            }
        }),
        lastBlockFound: Ember.computed("model", {
            get: function () {
                return parseInt(this.get("model.lastBlockFound")) || 0
            }
        }),
        roundVariance: Ember.computed("model", {
            get: function () {
                var e = this.get("model.stats.currentRoundShares") * this.get("config").ShareDifficulty / this.get("difficulty")
                return e ? e.toFixed(2) : 0
            }
        }),
        nextEpoch: Ember.computed("height", {
            get: function () {
                var e = 1e3 * (3e4 - this.getWithDefault("height", 1) % 3e4) * this.get("config").BlockTime
                return Date.now() + e
            }
        })
    })
    e.default = a
}), define("open-ethereum-pool/controllers/blocks/block", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/controllers/blocks/immature", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/controllers/blocks/index", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/controllers/blocks/mature", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/controllers/blocks/pending", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/controllers/help", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.Controller.extend({
        applicationController: Ember.inject.controller("application"),
        config: Ember.computed.reads("applicationController.config")
    })
    e.default = t
}), define("open-ethereum-pool/controllers/index", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.Controller.extend({
        applicationController: Ember.inject.controller("application"),
        stats: Ember.computed.reads("applicationController"),
        config: Ember.computed.reads("applicationController.config"),
        cachedLogin: Ember.computed("login", {
            get: function () {
                return this.get("login") || Ember.$.cookie("login")
            },
            set: function (e, t) {
                return Ember.$.cookie("login", t), this.set("model.login", t), t
            }
        })
    })
    e.default = t
}), define("open-ethereum-pool/controllers/payments", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Controller.extend({
        get config() {
            return t.default.APP
        }
    })
    e.default = a
}), define("open-ethereum-pool/formats", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    },
        a = {
            time: {
                hhmmss: t
            },
            date: {
                hhmmss: t
            },
            number: {
                EUR: {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                },
                USD: {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                },
                INR: {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                    useGrouping: !1
                }
            }
        }
    e.default = a
}), define("open-ethereum-pool/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "and", {
        enumerable: !0,
        get: function () {
            return t.and
        }
    })
}), define("open-ethereum-pool/helpers/app-version", ["exports", "open-ethereum-pool/config/environment", "ember-cli-app-version/utils/regexp"], function (e, t, a) {
    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return t.hideSha ? n.match(a.versionRegExp)[0] : t.hideVersion ? n.match(a.shaRegExp)[0] : n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.appVersion = r, e.default = void 0
    var n = t.default.APP.version,
        l = Ember.Helper.helper(r)
    e.default = l
}), define("open-ethereum-pool/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "equal", {
        enumerable: !0,
        get: function () {
            return t.equal
        }
    })
}), define("open-ethereum-pool/helpers/format-balance", ["exports"], function (e) {
    function t(e) {
        return e *= 1e-9, e.toFixed(8)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatBalance = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/format-date-locale", ["exports"], function (e) {
    function t(e) {
        return new Date(1e3 * e).toLocaleString()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatDateLocale = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/format-date", ["exports", "ember-intl/helpers/format-date"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
})
define("open-ethereum-pool/helpers/format-ethinr", ["exports"], function (e) {
    function t(e) {
        var t = e[0],
            a = e[1],
            r = 1e-9 * t,
            n = r * a
        return isNaN(n) ? "" : "₹" + n.toFixed(2)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatEthInr = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/format-ethusd", ["exports"], function (e) {
    function t(e) {
        var t = e[0],
            a = e[1],
            r = 1e-9 * t,
            n = r * a
        return isNaN(n) ? "" : "US$" + n.toFixed(2)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatEthUsd = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/format-hashrate", ["exports"], function (e) {
    function t(e) {
        for (var t = e[0], a = 0, r = ["H", "KH", "MH", "GH", "TH", "PH"]; t > 1e3;) t /= 1e3, a++
        return t.toFixed(2) + " " + r[a]
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatHashrate = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/format-message", ["exports", "ember-intl/helpers/format-message"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/helpers/format-money", ["exports", "accounting/helpers/format-money"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = t.default
    e.default = a
}), define("open-ethereum-pool/helpers/format-number", ["exports", "accounting/helpers/format-number"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = t.default
    e.default = a
}), define("open-ethereum-pool/helpers/format-relative", ["exports", "ember-intl/helpers/format-relative"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/helpers/format-time", ["exports", "ember-intl/helpers/format-time"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/helpers/format-tx", ["exports"], function (e) {
    function t(e) {
        return e[0].substring(2, 26) + "..." + e[0].substring(42)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatTx = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/format-txcharges", ["exports"], function (e) {
    function t(e) {
        return e = 1e-9 * e * 1e-9, e.toFixed(8)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatTxCharges = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "gt", {
        enumerable: !0,
        get: function () {
            return t.gt
        }
    })
}), define("open-ethereum-pool/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "gte", {
        enumerable: !0,
        get: function () {
            return t.gte
        }
    })
}), define("open-ethereum-pool/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "isArray", {
        enumerable: !0,
        get: function () {
            return t.isArray
        }
    })
}), define("open-ethereum-pool/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "isEqual", {
        enumerable: !0,
        get: function () {
            return t.isEqual
        }
    })
}), define("open-ethereum-pool/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "lt", {
        enumerable: !0,
        get: function () {
            return t.lt
        }
    })
}), define("open-ethereum-pool/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "lte", {
        enumerable: !0,
        get: function () {
            return t.lte
        }
    })
}), define("open-ethereum-pool/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "notEq", {
        enumerable: !0,
        get: function () {
            return t.notEq
        }
    })
}), define("open-ethereum-pool/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "not", {
        enumerable: !0,
        get: function () {
            return t.not
        }
    })
}), define("open-ethereum-pool/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "or", {
        enumerable: !0,
        get: function () {
            return t.or
        }
    })
}), define("open-ethereum-pool/helpers/seconds-to-ms", ["exports"], function (e) {
    function t(e) {
        return 1e3 * e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.secondsToMs = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/string-to-int", ["exports"], function (e) {
    function t(e) {
        return parseInt(e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.stringToInt = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/t", ["exports", "ember-intl/helpers/t"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/helpers/with-metric-prefix", ["exports"], function (e) {
    function t(e) {
        var t = e[0]
        if (t < 1e3) return t
        for (var a = 0, r = ["K", "M", "G", "T", "P"]; t > 1e3;) t /= 1e3, a++
        return t.toFixed(3) + " " + r[a - 1]
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.withMetricPrefix = t, e.default = void 0
    var a = Ember.Helper.helper(t)
    e.default = a
}), define("open-ethereum-pool/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    }), Object.defineProperty(e, "xor", {
        enumerable: !0,
        get: function () {
            return t.xor
        }
    })
}), define("open-ethereum-pool/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "open-ethereum-pool/config/environment"], function (e, t, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = a.default.APP,
        n = r.name,
        l = r.version,
        d = {
            name: "App Version",
            initialize: (0, t.default)(n, l)
        }
    e.default = d
}), define("open-ethereum-pool/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = {
        name: "container-debug-adapter",
        initialize: function () {
            var e = arguments[1] || arguments[0]
            e.register("container-debug-adapter:main", t.default), e.inject("container-debug-adapter:main", "namespace", "application:main")
        }
    }
    e.default = a
}), define("open-ethereum-pool/initializers/cookie", ["exports", "open-ethereum-pool/lib/cookie"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = {
        name: "cookie",
        initialize: function () {
            (arguments[1] || arguments[0]).register("cookie:main", t.default)
        }
    }
    e.default = a
}), define("open-ethereum-pool/initializers/export-application-global", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    function a() {
        var e = arguments[1] || arguments[0]
        if (!1 !== t.default.exportApplicationGlobal) {
            var a
            if ("undefined" != typeof window) a = window
            else if ("undefined" != typeof global) a = global
            else {
                if ("undefined" == typeof self) return
                a = self
            }
            var r, n = t.default.exportApplicationGlobal
            r = "string" == typeof n ? n : Ember.String.classify(t.default.modulePrefix), a[r] || (a[r] = e, e.reopen({
                willDestroy: function () {
                    this._super.apply(this, arguments), delete a[r]
                }
            }))
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.initialize = a, e.default = void 0
    var r = {
        name: "export-application-global",
        initialize: a
    }
    e.default = r
}), define("open-ethereum-pool/lib/cookie", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.Object.extend({
        setCookie: function (e, t, a) {
            return new Ember.RSVP.Promise(function (r, n) {
                try {
                    Ember.$.cookie(e, t, a), Ember.run(null, r)
                } catch (e) {
                    Ember.run(null, n, e)
                }
            })
        },
        getCookie: function (e) {
            return Ember.$.cookie(e)
        },
        removeCookie: function (e, t) {
            return Ember.$.removeCookie(e, t)
        }
    })
    e.default = t
})
define("open-ethereum-pool/models/block", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.Object.extend({
        variance: Ember.computed("difficulty", "shares", function () {
            var e = this.get("shares") / this.get("difficulty")
            return e || 0
        }),
        isLucky: Ember.computed("variance", function () {
            return this.get("variance") <= 1
        }),
        isOk: Ember.computed("orphan", "uncle", function () {
            return !this.get("orphan")
        }),
        formatReward: Ember.computed("reward", function () {
            return this.get("orphan") ? 0 : (1e-18 * parseInt(this.get("reward"))).toFixed(6)
        })
    }),
        a = t
    e.default = a
}), define("open-ethereum-pool/models/payment", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.Object.extend({
        formatAmount: Ember.computed("amount", function () {
            return (1e-9 * parseInt(this.get("amount"))).toFixed(8)
        })
    }),
        a = t
    e.default = a
}), define("open-ethereum-pool/models/settings", [], function () { }), define("open-ethereum-pool/resolver", ["exports", "ember-resolver"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = t.default
    e.default = a
}), define("open-ethereum-pool/router", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Router.extend({
        location: t.default.locationType
    })
    a.map(function () {
        this.route("account", {
            path: "/account/:login"
        }, function () {
            this.route("payouts"), this.route("rewards"), this.route("settings")
        }), this.route("not-found"), this.route("blocks", function () {
            this.route("mature"), this.route("immature"), this.route("pending")
        }), this.route("help"), this.route("payments"), this.route("miners"), this.route("exchange"), this.route("about"), this.route("helpdesk", {
            path: "http://helpdesk.miningpoolindia.com"
        })
    })
    var r = a
    e.default = r
}), define("open-ethereum-pool/routes/account", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Route.extend({
        model: function (e) {
            var a = t.default.APP.ApiUrl + "api/accounts/" + e.login
            return Ember.$.getJSON(a).then(function (t) {
                return t.login = e.login, Ember.Object.create(t)
            })
        },
        setupController: function (e, t) {
            this._super(e, t), Ember.run.later(this, this.refresh, 5e3)
        },
        actions: {
            error: function (e) {
                if (404 === e.status) return this.transitionTo("not-found")
            },
            saveSettings: function () { }
        }
    })
    e.default = a
}), define("open-ethereum-pool/routes/application", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Route.extend({
        intl: Ember.inject.service(),
        beforeModel: function () {
            this.get("intl").setLocale("en-in")
        },
        model: function () {
            var e = t.default.APP.ApiUrl + "api/stats"
            return Ember.$.getJSON(e).then(function (e) {
                return Ember.Object.create(e)
            })
        },
        setupController: function (e, t) {
            this._super(e, t), Ember.run.later(this, this.refresh, 5e3)
        }
    })
    e.default = a
}), define("open-ethereum-pool/routes/blocks", ["exports", "open-ethereum-pool/models/block", "open-ethereum-pool/config/environment"], function (e, t, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = Ember.Route.extend({
        model: function () {
            var e = a.default.APP.ApiUrl + "api/blocks"
            return Ember.$.getJSON(e).then(function (e) {
                return e.candidates && (e.candidates = e.candidates.map(function (e) {
                    return t.default.create(e)
                })), e.immature && (e.immature = e.immature.map(function (e) {
                    return t.default.create(e)
                })), e.matured && (e.matured = e.matured.map(function (e) {
                    return t.default.create(e)
                })), e
            })
        },
        setupController: function (e, t) {
            this._super(e, t), Ember.run.later(this, this.refresh, 5e3)
        }
    })
    e.default = r
}), define("open-ethereum-pool/routes/index", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.Route.extend({
        actions: {
            lookup: function (e) {
                if (!Ember.isEmpty(e)) return this.transitionTo("account", e)
            }
        }
    })
    e.default = t
}), define("open-ethereum-pool/routes/miners", ["exports", "open-ethereum-pool/config/environment"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = Ember.Route.extend({
        model: function () {
            var e = t.default.APP.ApiUrl + "api/miners"
            return Ember.$.getJSON(e).then(function (e) {
                return e.miners && (e.miners = Object.keys(e.miners).map(function (t) {
                    var a = e.miners[t]
                    return a.login = t, a
                }), e.miners = e.miners.sort(function (e, t) {
                    return e.hr < t.hr ? 1 : e.hr > t.hr ? -1 : 0
                })), e
            })
        },
        setupController: function (e, t) {
            this._super(e, t), Ember.run.later(this, this.refresh, 5e3)
        }
    })
    e.default = a
}), define("open-ethereum-pool/routes/payments", ["exports", "open-ethereum-pool/models/payment", "open-ethereum-pool/config/environment"], function (e, t, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = Ember.Route.extend({
        model: function () {
            var e = a.default.APP.ApiUrl + "api/payments"
            return Ember.$.getJSON(e).then(function (e) {
                return e.payments && (e.payments = e.payments.map(function (e) {
                    return t.default.create(e)
                })), e
            })
        },
        setupController: function (e, t) {
            this._super(e, t), Ember.run.later(this, this.refresh, 5e3)
        }
    })
    e.default = r
}), define("open-ethereum-pool/services/ajax", ["exports", "ember-ajax/services/ajax"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/services/intl", ["exports", "ember-intl/services/intl"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/templates/about", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 30,
                            column: 29
                        },
                        end: {
                            line: 35,
                            column: 29
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/about.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("                             ")
                    e.appendChild(t, a)
                    var a = e.createElement("li")
                    e.setAttribute(a, "class", "list-group-item")
                    var r = e.createTextNode("\n                                 Having the name india in the domain name, it doesnt state that the pool belongs to india, the customization of various values are done for the INR value . All the other country citizen can also participate in the pool. \n                                 \n                             ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function () {
                    return []
                },
                statements: [],
                locals: [],
                templates: []
            }
        }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 179,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/about.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "id", "page-wrapper")
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row align-middle"), e.setAttribute(r, "style", "padding-top:50px;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-5")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "class", "text-blue"), e.setAttribute(l, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px; ")
                var d = e.createTextNode("TERMS AND CONDITIONS")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("       \n          ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-7"), e.setAttribute(n, "style", "margin-bottom: 20px;")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Lobster; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode('The following Terms and Condition apply to any use of the mining pool services ("Services") offered over the websites ("')
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode('") mentioned above concerning the mining of the cryptocurrencies "')
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode('". By accessing and using the Services, you confirm that you have read these Terms and Condition and accept and agree to be bound by its provisions. Any factual participation in the Services will constitute such acceptance. If you do not agree to abide by these Terms and Condition you are not allowed to use the Services.\n                ')
                e.appendChild(l, d)
                var d = e.createElement("br")
                e.appendChild(l, d)
                var d = e.createTextNode("In order to use the Services, a mining software working with the operating system on your computer is necessary. Download links are available directly on the Websites. .\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("  \n")
                e.appendChild(a, r)
                var r = e.createElement("br")
                e.appendChild(a, r)
                var r = e.createElement("br")
                e.appendChild(a, r)
                var r = e.createTextNode("\n   \n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row"), e.setAttribute(r, "style", "max-height: 900px; overflow-y: scroll;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-12")
                var l = e.createTextNode("\n               ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel-group")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel panel-success")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "panel-heading")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("h4")
                e.setAttribute(o, "class", "panel-title")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createElement("a")
                e.setAttribute(p, "data-toggle", "collapse"), e.setAttribute(p, "href", "#term")
                var c = e.createElement("i")
                e.setAttribute(c, "class", "fa fa-bullseye fa-fw"), e.appendChild(p, c)
                var c = e.createTextNode(" Liability")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode(" \n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "id", "term"), e.setAttribute(i, "class", "panel-collapse")
                var o = e.createTextNode("\n                         ")
                e.appendChild(i, o)
                var o = e.createElement("ul")
                e.setAttribute(o, "class", "list-group")
                var p = e.createTextNode("\n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                                 The pool is continually implementing security standards complying with the latest state-of-the-art technology. All operated servers are distributed-denial-of-service (DDOS) protected to ensure an incessant availability of the Services and a payout process without unwanted interruptions. The Services are also designed to pay out rewards as soon as possible in order to keep the pool balance low. \n                                 \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("                              ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                                   Despite such protective mechanisms, the pool cannot fully guarantee that the Websites will never be subject to hacker attacks or similar problems. Therefore, the pool shall not be obliged to compensate any losses due to stolen pool balance or temporary unavailability of the Services. The pool explicitly reserves the right to shut down services from time to time for maintenance reasons.\n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("                                 \n                             Furthermore, the pool shall not be liable for any damages of your hardware (computer and its components) or software (operating system, programs, stored data etc.) occurring while using the Services. The intensity of the mining tasks is highly demanding; hardware components may – exceptionally – be destroyed completely. As the hardware setup of each Worker is individually compiled, you must assess (and bear) the risk associated with such high electrical load by yourself. \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                                 Attacks on the system may also cause data loss. As far as sensitive data is collected ), the pool  shall not be held responsible for any loss that cannot be reduced to security issues or other culpability by the pool . \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                                ")
                e.appendChild(p, c)
                var c = e.createComment("")
                e.appendChild(p, c)
                var c = e.createTextNode(" are highly experimental crypto software. Damages or loss of cryptocurrency units arising from software errors therefore remain possible. As the pool  has no influence on the underlying software, he shall not in any case be exposed to claims relating to such errors. \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                           \n                             \n                         ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row"), e.setAttribute(r, "style", "max-height: 900px; overflow-y: scroll;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-12")
                var l = e.createTextNode("\n               ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel-group")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel panel-success")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "panel-heading")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("h4")
                e.setAttribute(o, "class", "panel-title")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createElement("a")
                e.setAttribute(p, "data-toggle", "collapse"), e.setAttribute(p, "href", "#term1")
                var c = e.createElement("i")
                e.setAttribute(c, "class", "fa fa-credit-card-alt fa-fw"), e.appendChild(p, c)
                var c = e.createTextNode(" Terms of Payment ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode(" \n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "id", "term1"), e.setAttribute(i, "class", "panel-collapse collapse")
                var o = e.createTextNode("\n                         ")
                e.appendChild(i, o)
                var o = e.createElement("ul")
                e.setAttribute(o, "class", "list-group")
                var p = e.createTextNode("\n                              \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                               \nAs mining is an intensive task for the hardware of your computer (CPU, GPU), the process can cause high costs for electricity. The pool shall not be responsible for any such costs. The Services are conducted at the sole discretion of the user in type, extent and frequency. All expenses arising are to be borne by the Worker.  \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                               \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode('\n                                \nPool pays using the  Dynamic Pay-Per-Last-N-Shares ("PPLNS") payout scheme. This reward system is round based, whereby one round has an arbitrary number (N) of shares, N value are decided at the beginning of each round based on the Network difficulty, N = (2* Network Difficulty)/(Share Difficulty). When a block has been found by the pool, the block reward is distributed according to the number of the shares present in the last N Shares. Payout takes place immediately after the minimum payout has been reached. However, the payout threshold is customizable by sending mail to the pool helpdesk. \n                             ')
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                               \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                               \n                            The pool fee is waived off as a introductory offer\n\n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n \n                            ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                               \n                            Transaction fees of the block are retained by the pool till the pool fee is fixed \n \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                          \n                            Gas charges for the transaction will be deducted during the Payout, the gas charges are calculated automatically during the payout time with the scope of standard 21000 gas limit\n \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                              ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                               \n                            Mining into the contract account is not allowed, if found the miner will be banned and the extra transaction charges incured for the payout will be retained from the immature balance\n \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                             \n                            \n                          \n                         ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row"), e.setAttribute(r, "style", "max-height: 900px; overflow-y: scroll;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-12")
                var l = e.createTextNode("\n               ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel-group")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel panel-success")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "panel-heading")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("h4")
                e.setAttribute(o, "class", "panel-title")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createElement("a")
                e.setAttribute(p, "data-toggle", "collapse"), e.setAttribute(p, "href", "#term2")
                var c = e.createElement("i")
                e.setAttribute(c, "class", "fa fa-user-secret fa-fw"), e.appendChild(p, c)
                var c = e.createTextNode(" Privacy Policy")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode(" \n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "id", "term2"), e.setAttribute(i, "class", "panel-collapse collapse")
                var o = e.createTextNode("\n                         ")
                e.appendChild(i, o)
                var o = e.createElement("ul")
                e.setAttribute(o, "class", "list-group")
                var p = e.createTextNode("\n                                 \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                                The Websites are designed as anonymous mining pools. The collection of personal data is strictly limited. \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                               \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                                By accessing the Websites, the external IP address of your computer and http specific information (request, referrer and user agent) will be logged for statistical purposes. By using the Services (mining on the pools), the external IP address of your computer will be logged for verification purposes as well as to allow you to change specific settings (indication of email  address, modification of minimum payout amount). Such data may potentially link to personally identifiable information. \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                               \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                               Indicating your email or mobile number address is no requirement to use the Services. However, you may leave such address in order to get notified if, for example, the Services are temporarily unavailable or the mining pools are experiencing technical problems. Such data will not be shared with third parties as outlined below or used for any other purpose apart from providing relevant information concerning the Services or these Terms.  \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                               \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode('\n                                The pool uses services of Twitter Inc., 1355 Market St, Suite 900, San Francisco, CA 94103, USA ("Twitter") on the Websites in order to provide important information by embedding his official Twitter account "miningpoolindia". The timeline is integrated as list template and allows the Workers to directly share or like tweets on Twitter. By accessing the Websites, your browser will instantly communicate with the servers of Twitter in the USA. Thereby, certain data will be transferred and stored. If you are not logged in to Twitter or do not have a Twitter account, the information solely refers to your IP address and the fact that the Websites have been visited. If you are logged in to Twitter, this information can be associated with your account and thus your person. If you do not want Twitter to allocate such collected data to your account, you must log out of your profile before visiting the Websites. When using the liking/sharing function information will be transmitted as well and furthermore visible on Twitter. For advice or information regarding the purpose and scope of data collection, further processing and use of data by Twitter as well as your specific rights and adjustable settings for privacy protection you may visit https://twitter.com/privacy?lang=en to review the privacy policy of Twitter. However, as an alternative, you can force your browser not to load the Twitter timeline by installing add-ons, for example, the script blocker "NoScript" available under http://noscript.net/. \n                             ')
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                               \n                             ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                                None of the information transmitted will be shared with third parties. However, you need to download and install third party software on your computer in order to use the Services and mine cryptocurrency. The pool has no influence on any data collected by these third parties. Hence, it is recommended to review available terms and conditions and privacy policies of such third parties carefully as well. \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                             \n                               ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                                So called botnets are strictly prohibited from participating in the mining pools. The term refers to computers used for mining, although their actual owners are unaware of it. Your computer may fall victim to a botnet due to insufficient security measures. It is hence recommended to \npay utmost attention to adequate protection. poolSP generally reserves the right to exclude Workers from using the Service without prior notice. \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                              ")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\n                                So called botnets are strictly prohibited from participating in the mining pools. The term refers to computers used for mining, although their actual owners are unaware of it. Your computer may fall victim to a botnet due to insufficient security measures. It is hence recommended to \npay utmost attention to adequate protection. poolSP generally reserves the right to exclude Workers from using the Service without prior notice. \n                             ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                             \n                               \n")
                e.appendChild(o, p)
                var p = e.createElement("li")
                e.setAttribute(p, "class", "list-group-item")
                var c = e.createTextNode("\nThe pool may change these Terms and Condition if necessary. Your continued use of the Services will signify your acceptance to any adjustment of these terms. The fact that the text respectively content has been changed will be visibly announced on the Websites. You should read these Terms and Condition again on a regular basis. \n  ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                          \n                         ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n\n")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = e.childAt(r, [1, 3, 1]),
                    l = e.childAt(r, [6, 1, 1, 1, 3, 1]),
                    d = new Array(4)
                return d[0] = e.createMorphAt(n, 1, 1), d[1] = e.createMorphAt(n, 3, 3), d[2] = e.createMorphAt(l, 3, 3), d[3] = e.createMorphAt(e.childAt(l, [11]), 1, 1), d
            },
            statements: [
                ["content", "config.WebsiteName", ["loc", [null, [7, 207],
                    [7, 229]
                ]], 0, 0, 0, 0],
                ["content", "config.CoinName", ["loc", [null, [7, 295],
                    [7, 314]
                ]], 0, 0, 0, 0],
                ["block", "if", [
                    ["subexpr", "eq", [
                        ["get", "config.Currency", ["loc", [null, [30, 39],
                            [30, 54]
                        ]], 0, 0, 0, 0], "INR"
                    ],
                        [],
                        ["loc", [null, [30, 35],
                            [30, 61]
                        ]], 0, 0
                    ]
                ],
                    [], 0, null, ["loc", [null, [30, 29],
                        [35, 36]
                    ]]
                ],
                ["content", "config.CoinName", ["loc", [null, [47, 32],
                    [47, 51]
                ]], 0, 0, 0, 0]
            ],
            locals: [],
            templates: [e]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/account", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 95,
                            column: 24
                        },
                        end: {
                            line: 97,
                            column: 24
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/account.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("                        ")
                    e.appendChild(t, a)
                    var a = e.createComment("")
                    e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(t, 1, 1, a), r
                },
                statements: [
                    ["inline", "format-ethusd", [
                        ["get", "model.stats.paid", ["loc", [null, [96, 41],
                            [96, 57]
                        ]], 0, 0, 0, 0],
                        ["get", "model.exchangedata.price_usd", ["loc", [null, [96, 58],
                            [96, 86]
                        ]], 0, 0, 0, 0]
                    ],
                        [],
                        ["loc", [null, [96, 24],
                            [96, 89]
                        ]], 0, 0
                    ]
                ],
                locals: [],
                templates: []
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 97,
                                column: 24
                            },
                            end: {
                                line: 99,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["inline", "format-ethinr", [
                            ["get", "model.stats.paid", ["loc", [null, [98, 41],
                                [98, 57]
                            ]], 0, 0, 0, 0],
                            ["get", "model.exchangedata.price_inr", ["loc", [null, [98, 58],
                                [98, 86]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [98, 24],
                                [98, 89]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            a = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 137,
                                column: 24
                            },
                            end: {
                                line: 139,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createElement("br")
                        e.appendChild(t, a)
                        var a = e.createTextNode(" ")
                        e.appendChild(t, a)
                        var a = e.createElement("small"),
                            r = e.createTextNode("Payout threshold: ")
                        e.appendChild(a, r)
                        var r = e.createComment("")
                        e.appendChild(a, r)
                        var r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [3]),
                            n = new Array(2)
                        return n[0] = e.createMorphAt(r, 1, 1), n[1] = e.createMorphAt(r, 2, 2), n
                    },
                    statements: [
                        ["inline", "format-balance", [
                            ["get", "model.stats.payoutthreshold", ["loc", [null, [138, 72],
                                [138, 99]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [138, 55],
                                [138, 101]
                            ]], 0, 0
                        ],
                        ["content", "config.CoinShortName", ["loc", [null, [138, 101],
                            [138, 125]
                        ]], 0, 0, 0, 0]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            r = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 139,
                                column: 24
                            },
                            end: {
                                line: 141,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createElement("br")
                        e.appendChild(t, a)
                        var a = e.createTextNode(" ")
                        e.appendChild(t, a)
                        var a = e.createElement("small"),
                            r = e.createTextNode("Payout threshold: ")
                        e.appendChild(a, r)
                        var r = e.createComment("")
                        e.appendChild(a, r)
                        var r = e.createTextNode(" ")
                        e.appendChild(a, r)
                        var r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [3]),
                            n = new Array(2)
                        return n[0] = e.createMorphAt(r, 1, 1), n[1] = e.createMorphAt(r, 3, 3), n
                    },
                    statements: [
                        ["content", "config.PayoutThreshold", ["loc", [null, [140, 55],
                            [140, 81]
                        ]], 0, 0, 0, 0],
                        ["content", "config.CoinShortName", ["loc", [null, [140, 82],
                            [140, 106]
                        ]], 0, 0, 0, 0]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            n = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 144,
                                column: 20
                            },
                            end: {
                                line: 150,
                                column: 20
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                    ")
                        e.appendChild(t, a)
                        var a = e.createElement("li")
                        e.setAttribute(a, "href", "#"), e.setAttribute(a, "class", "list-group-item")
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("i")
                        e.setAttribute(r, "class", "fa fa-thumbs-up fa-fw"), e.appendChild(a, r)
                        var r = e.createTextNode(" Current Payment:\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("span")
                        e.setAttribute(r, "class", "pull-right text-muted small")
                        var n = e.createElement("em"),
                            l = e.createComment("")
                        e.appendChild(n, l), e.appendChild(r, n)
                        var n = e.createTextNode("\n                        ")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                    ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(e.childAt(t, [1, 3, 0]), 0, 0), r
                    },
                    statements: [
                        ["inline", "format-balance", [
                            ["get", "model.stats.pending", ["loc", [null, [147, 87],
                                [147, 106]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [147, 70],
                                [147, 108]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            l = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 199,
                                column: 20
                            },
                            end: {
                                line: 201,
                                column: 20
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                    ")
                        e.appendChild(t, a)
                        var a = e.createElement("a")
                        e.setAttribute(a, "class", "twitter-timeline")
                        var r = e.createTextNode("Tweets by ")
                        e.appendChild(a, r)
                        var r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = new Array(2)
                        return n[0] = e.createAttrMorph(r, "href"), n[1] = e.createMorphAt(r, 1, 1), n
                    },
                    statements: [
                        ["attribute", "href", ["concat", [
                            ["get", "config.TwitterURL", ["loc", [null, [200, 56],
                                [200, 73]
                            ]], 0, 0, 0, 0],
                            ["get", "config.TwitterHash", ["loc", [null, [200, 77],
                                [200, 95]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["content", "config.TwitterHash", ["loc", [null, [200, 109],
                            [200, 131]
                        ]], 0, 0, 0, 0]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            d = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 220,
                                    column: 24
                                },
                                end: {
                                    line: 220,
                                    column: 124
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/account.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("Workers ")
                            e.appendChild(t, a)
                            var a = e.createElement("span")
                            e.setAttribute(a, "class", "badge alert-danger")
                            var r = e.createComment("")
                            return e.appendChild(a, r), e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                        },
                        statements: [
                            ["content", "model.workersOffline", ["loc", [null, [220, 93],
                                [220, 117]
                            ]], 0, 0, 0, 0]
                        ],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 219,
                                column: 24
                            },
                            end: {
                                line: 221,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["block", "link-to", ["account.index"],
                            [], 0, null, ["loc", [null, [220, 24],
                                [220, 136]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            i = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 223,
                                    column: 24
                                },
                                end: {
                                    line: 223,
                                    column: 61
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/account.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("Rewards")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function () {
                            return []
                        },
                        statements: [],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 222,
                                column: 24
                            },
                            end: {
                                line: 224,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["block", "link-to", ["account.rewards"],
                            [], 0, null, ["loc", [null, [223, 24],
                                [223, 73]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            o = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 226,
                                    column: 24
                                },
                                end: {
                                    line: 226,
                                    column: 61
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/account.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("Payouts")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function () {
                            return []
                        },
                        statements: [],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 225,
                                column: 24
                            },
                            end: {
                                line: 227,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["block", "link-to", ["account.payouts"],
                            [], 0, null, ["loc", [null, [226, 24],
                                [226, 73]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 241,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/account.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "id", "page-wrapper")
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row align-middle"), e.setAttribute(r, "style", "padding-top:50px;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-4")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "class", "text-blue"), e.setAttribute(l, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px;")
                var d = e.createTextNode("MINERS STATISTICS")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-8 pull-left")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "class", "text-green"), e.setAttribute(l, "style", "font-family: 'Merriweather Sans';font-size: 25px;margin-top:50px;")
                var d = e.createElement("i")
                e.setAttribute(d, "class", "fa fa-address-book-o"), e.appendChild(l, d)
                var d = e.createTextNode(" ")
                e.appendChild(l, d)
                var d = e.createElement("a")
                e.setAttribute(d, "class", "text-green"), e.setAttribute(d, "target", "_blank")
                var i = e.createComment("")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("                                       \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-12 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("  \n\n    ")
                e.appendChild(a, r)
                var r = e.createComment(" /.row ")
                e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row")
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-3 col-md-6")
                var l = e.createTextNode(" \n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-blue")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n                         ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode(" ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("                     \n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode("   ")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode("  ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("              \n\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-dashboard"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-footer text-center")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "text-blue")
                var o = e.createTextNode("HASHRATE 1 Hour/ 30 Minute Avg")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "pull-right"), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "clearfix"), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-3 col-md-6")
                var l = e.createTextNode(" \n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-green")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode(" ACTIVE WORKERS   ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-server"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-footer text-center")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "text-green")
                var o = e.createTextNode("ACTIVE WORKERS")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "pull-right"), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "clearfix"), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-3 col-md-6")
                var l = e.createTextNode(" \n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-yellow")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white"), e.setAttribute(o, "style", "font-size: 30px;")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode(" \n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-clock-o"), e.appendChild(i, o)
                var o = e.createTextNode(" Immature : ")
                e.appendChild(i, o)
                var o = e.createElement("span"),
                    p = e.createComment("")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-hourglass-half"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-footer text-center"), e.setAttribute(d, "style", "margin:0px;padding:0px;")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "progress"), e.setAttribute(i, "style", "margin:0px;height:40px;")
                var o = e.createElement("span")
                e.setAttribute(o, "class", "text-center text-blue bold"), e.setAttribute(o, "style", "margin-top:10px;")
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p)
                var p = e.createElement("div")
                e.setAttribute(p, "class", "progress-bar progress-bar-warning progress-bar-striped active"), e.setAttribute(p, "role", "progressbar"), e.setAttribute(p, "aria-valuenow", "9"), e.setAttribute(p, "aria-valuemin", "0"), e.setAttribute(p, "aria-valuemax", "100")
                var c = e.createTextNode("    \n                            \n                        ")
                e.appendChild(p, c), e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                         \n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-3 col-md-6")
                var l = e.createTextNode(" \n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-red")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white"), e.setAttribute(o, "style", "font-size: 30px;")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode("  ≅ \n                        \n")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode("                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-credit-card"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-footer text-center")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "text-red")
                var o = e.createTextNode("TOTAL PAYMENTS")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "pull-right"), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "clearfix"), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createComment(" /.row ")
                e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row")
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-4")
                var l = e.createTextNode("  \n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel panel-info")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-info-circle fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" Miner Information Panel\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-heading ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "list-group")
                var i = e.createTextNode("\n\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("li")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-hourglass-1 fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Immature Balance\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small align-middle")
                var p = e.createElement("span")
                e.setAttribute(p, "class", "")
                var c = e.createElement("em"),
                    s = e.createComment("")
                e.appendChild(c, s), e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("br")
                e.appendChild(i, o)
                var o = e.createElement("small"),
                    p = e.createTextNode("Preliminary balance awaiting blocks to mature.")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("li")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-hourglass-2 fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Pending Balance\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small align-middle")
                var p = e.createElement("span")
                e.setAttribute(p, "class", "")
                var c = e.createElement("em"),
                    s = e.createComment("")
                e.appendChild(c, s), e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n")
                e.appendChild(d, i)
                var i = e.createComment("")
                e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("li")
                e.setAttribute(i, "href", "#"), e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-spinner fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Your contribution in Last 'N'\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("li")
                e.setAttribute(i, "href", "#"), e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-thermometer fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" My Shares in the last 'N'\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    \n                    ")
                e.appendChild(d, i)
                var i = e.createElement("li")
                e.setAttribute(i, "href", "#"), e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-cubes fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Blocks Found\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("li")
                e.setAttribute(i, "href", "#"), e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-share-square-o fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Last share submitted\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("li")
                e.setAttribute(i, "href", "#"), e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-money fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Total Payments\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("                  \n                    ")
                e.appendChild(d, i)
                var i = e.createElement("li")
                e.setAttribute(i, "href", "#"), e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-clock-o fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Epoch Switch\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.list-group ")
                e.appendChild(l, d)
                var d = e.createTextNode("                    \n\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-body ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "chat-panel panel panel-success hidden-md hidden-sm")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-twitter fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" UPDATES\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "btn-group pull-right")
                var o = e.createTextNode("\n\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-heading ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-body hidden-sm ")
                var i = e.createTextNode("\n")
                e.appendChild(d, i)
                var i = e.createComment("")
                e.appendChild(d, i)
                var i = e.createTextNode("                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-body ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-footer ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createComment(" /.panel .chat-panel ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-4 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-8")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel panel-success")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-database fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" MINERS DEATAILED STATISTICS STATUS                    \n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-body")
                var i = e.createTextNode("\n\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("ul")
                e.setAttribute(i, "class", "nav nav-tabs")
                var o = e.createTextNode("\n")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode("                        \n\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                    ")
                e.appendChild(d, i)
                var i = e.createComment("")
                e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-8 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n\n\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createComment(" /.row ")
                e.appendChild(a, r)
                var r = e.createTextNode("\n")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = e.childAt(r, [1, 3, 1, 2]),
                    l = e.childAt(r, [5]),
                    d = e.childAt(l, [1, 3, 1]),
                    i = e.childAt(l, [5, 3]),
                    o = e.childAt(i, [1]),
                    p = e.childAt(i, [5, 1, 0, 1]),
                    c = e.childAt(l, [7, 3, 1]),
                    s = e.childAt(r, [9]),
                    h = e.childAt(s, [1]),
                    u = e.childAt(h, [1, 5]),
                    m = e.childAt(u, [3]),
                    v = e.childAt(s, [5, 1, 3]),
                    C = e.childAt(v, [1]),
                    b = new Array(25)
                return b[0] = e.createAttrMorph(n, "href"), b[1] = e.createMorphAt(n, 0, 0), b[2] = e.createMorphAt(e.childAt(d, [1, 0]), 1, 1), b[3] = e.createMorphAt(e.childAt(d, [3]), 1, 1), b[4] = e.createMorphAt(e.childAt(l, [3, 3, 1, 1, 0]), 1, 1), b[5] = e.createMorphAt(e.childAt(o, [1, 0]), 1, 1), b[6] = e.createMorphAt(e.childAt(o, [3, 3]), 0, 0), b[7] = e.createAttrMorph(p, "style"), b[8] = e.createMorphAt(e.childAt(c, [1, 0]), 1, 1), b[9] = e.createMorphAt(e.childAt(c, [3]), 1, 1), b[10] = e.createMorphAt(e.childAt(u, [1, 3, 0, 0]), 0, 0), b[11] = e.createMorphAt(e.childAt(m, [3, 0, 0]), 0, 0), b[12] = e.createMorphAt(m, 5, 5), b[13] = e.createMorphAt(u, 5, 5), b[14] = e.createMorphAt(e.childAt(u, [7, 3, 0]), 0, 0), b[15] = e.createMorphAt(e.childAt(u, [9, 3, 0]), 0, 0), b[16] = e.createMorphAt(e.childAt(u, [11, 3, 0]), 0, 0), b[17] = e.createMorphAt(e.childAt(u, [13, 3, 0]), 0, 0), b[18] = e.createMorphAt(e.childAt(u, [15, 3, 0]), 0, 0), b[19] = e.createMorphAt(e.childAt(u, [17, 3, 0]), 0, 0), b[20] = e.createMorphAt(e.childAt(h, [3, 5]), 1, 1), b[21] = e.createMorphAt(C, 1, 1), b[22] = e.createMorphAt(C, 2, 2), b[23] = e.createMorphAt(C, 3, 3), b[24] = e.createMorphAt(v, 3, 3), b
            },
            statements: [
                ["attribute", "href", ["concat", [
                    ["get", "config.ChainAddress", ["loc", [null, [7, 178],
                        [7, 197]
                    ]], 0, 0, 0, 0],
                    ["get", "model.login", ["loc", [null, [7, 201],
                        [7, 212]
                    ]], 0, 0, 0, 0]
                ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                ["content", "model.login", ["loc", [null, [7, 232],
                    [7, 247]
                ]], 0, 0, 0, 0],
                ["inline", "format-hashrate", [
                    ["get", "model.currentHashrate", ["loc", [null, [21, 43],
                        [21, 64]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [21, 25],
                        [21, 66]
                    ]], 0, 0
                ],
                ["inline", "format-hashrate", [
                    ["get", "model.hashrate", ["loc", [null, [22, 44],
                        [22, 58]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [22, 26],
                        [22, 60]
                    ]], 0, 0
                ],
                ["inline", "format-number", [
                    ["get", "model.workersOnline", ["loc", [null, [43, 44],
                        [43, 63]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [43, 28],
                        [43, 65]
                    ]], 0, 0
                ],
                ["inline", "format-balance", [
                    ["get", "model.stats.balance", ["loc", [null, [64, 45],
                        [64, 64]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [64, 28],
                        [64, 66]
                    ]], 0, 0
                ],
                ["inline", "format-balance", [
                    ["get", "model.stats.immature", ["loc", [null, [67, 88],
                        [67, 108]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [67, 71],
                        [67, 110]
                    ]], 0, 0
                ],
                ["attribute", "style", ["concat", ["width:", ["get", "paymentPercent", ["loc", [null, [76, 101],
                    [76, 115]
                ]], 0, 0, 0, 0], "%"], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                ["inline", "format-balance", [
                    ["get", "model.stats.paid", ["loc", [null, [91, 45],
                        [91, 61]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [91, 28],
                        [91, 63]
                    ]], 0, 0
                ],
                ["block", "if", [
                    ["subexpr", "eq", [
                        ["get", "config.Currency", ["loc", [null, [95, 34],
                            [95, 49]
                        ]], 0, 0, 0, 0], "USD"
                    ],
                        [],
                        ["loc", [null, [95, 30],
                            [95, 56]
                        ]], 0, 0
                    ]
                ],
                    [], 0, 1, ["loc", [null, [95, 24],
                        [99, 31]
                    ]]
                ],
                ["inline", "format-balance", [
                    ["get", "model.stats.immature", ["loc", [null, [128, 115],
                        [128, 135]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [128, 98],
                        [128, 137]
                    ]], 0, 0
                ],
                ["inline", "format-balance", [
                    ["get", "model.stats.balance", ["loc", [null, [135, 115],
                        [135, 134]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [135, 98],
                        [135, 136]
                    ]], 0, 0
                ],
                ["block", "if", [
                    ["get", "model.stats.payoutthreshold", ["loc", [null, [137, 30],
                        [137, 57]
                    ]], 0, 0, 0, 0]
                ],
                    [], 2, 3, ["loc", [null, [137, 24],
                        [141, 31]
                    ]]
                ],
                ["block", "if", [
                    ["get", "model.stats.pending", ["loc", [null, [144, 26],
                        [144, 45]
                    ]], 0, 0, 0, 0]
                ],
                    [], 4, null, ["loc", [null, [144, 20],
                        [150, 27]
                    ]]
                ],
                ["inline", "format-number", [
                    ["get", "roundPercent", ["loc", [null, [154, 86],
                        [154, 98]
                    ]], 0, 0, 0, 0]
                ],
                    ["style", "percent", "maximumFractionDigits", "6"],
                    ["loc", [null, [154, 70],
                        [154, 142]
                    ]], 0, 0
                ],
                ["inline", "format-number", [
                    ["get", "model.roundShares", ["loc", [null, [159, 86],
                        [159, 103]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [159, 70],
                        [159, 105]
                    ]], 0, 0
                ],
                ["inline", "format-number", [
                    ["get", "model.stats.blocksFound", ["loc", [null, [165, 86],
                        [165, 109]
                    ]], 0, 0, 0, 0]
                ],
                    ["fallback", "0"],
                    ["loc", [null, [165, 70],
                        [165, 124]
                    ]], 0, 0
                ],
                ["inline", "format-relative", [
                    ["subexpr", "seconds-to-ms", [
                        ["subexpr", "string-to-int", [
                            ["get", "model.stats.lastShare", ["loc", [null, [170, 118],
                                [170, 139]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [170, 103],
                                [170, 140]
                            ]], 0, 0
                        ]
                    ],
                        [],
                        ["loc", [null, [170, 88],
                            [170, 141]
                        ]], 0, 0
                    ]
                ],
                    [],
                    ["loc", [null, [170, 70],
                        [170, 143]
                    ]], 0, 0
                ],
                ["inline", "format-number", [
                    ["get", "model.paymentsTotal", ["loc", [null, [175, 86],
                        [175, 105]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [175, 70],
                        [175, 107]
                    ]], 0, 0
                ],
                ["inline", "format-relative", [
                    ["get", "applicationController.nextEpoch", ["loc", [null, [180, 88],
                        [180, 119]
                    ]], 0, 0, 0, 0]
                ],
                    ["units", "hour"],
                    ["loc", [null, [180, 70],
                        [180, 134]
                    ]], 0, 0
                ],
                ["block", "twitter-feed", [],
                    [], 5, null, ["loc", [null, [199, 20],
                        [201, 37]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "account.index", "role", "presentation"], 6, null, ["loc", [null, [219, 24],
                        [221, 38]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "account.rewards", "role", "presentation"], 7, null, ["loc", [null, [222, 24],
                        [224, 38]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "account.payouts", "role", "presentation"], 8, null, ["loc", [null, [225, 24],
                        [227, 38]
                    ]]
                ],
                ["content", "outlet", ["loc", [null, [232, 20],
                    [232, 30]
                ]], 0, 0, 0, 0]
            ],
            locals: [],
            templates: [e, t, a, r, n, l, d, i, o]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/account/index", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 15,
                                column: 8
                            },
                            end: {
                                line: 22,
                                column: 8
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 2,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("          ")
                        e.appendChild(t, a)
                        var a = e.createElement("tr"),
                            r = e.createTextNode("\n            ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n            ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n            ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n            ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n          ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = new Array(5)
                        return n[0] = e.createAttrMorph(r, "class"), n[1] = e.createMorphAt(e.childAt(r, [1]), 0, 0), n[2] = e.createMorphAt(e.childAt(r, [3]), 0, 0), n[3] = e.createMorphAt(e.childAt(r, [5]), 0, 0), n[4] = e.createMorphAt(e.childAt(r, [7]), 0, 0), n
                    },
                    statements: [
                        ["attribute", "class", ["concat", [
                            ["subexpr", "if", [
                                ["get", "v.offline", ["loc", [null, [16, 26],
                                    [16, 35]
                                ]], 0, 0, 0, 0], "warning", "success"
                            ],
                                [],
                                ["loc", [null, [16, 21],
                                    [16, 57]
                                ]], 0, 0
                            ]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["content", "k", ["loc", [null, [17, 16],
                            [17, 21]
                        ]], 0, 0, 0, 0],
                        ["inline", "format-hashrate", [
                            ["get", "v.hr", ["loc", [null, [18, 34],
                                [18, 38]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [18, 16],
                                [18, 40]
                            ]], 0, 0
                        ],
                        ["inline", "format-hashrate", [
                            ["get", "v.hr2", ["loc", [null, [19, 34],
                                [19, 39]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [19, 16],
                                [19, 41]
                            ]], 0, 0
                        ],
                        ["inline", "format-relative", [
                            ["subexpr", "seconds-to-ms", [
                                ["get", "v.lastBeat", ["loc", [null, [20, 49],
                                    [20, 59]
                                ]], 0, 0, 0, 0]
                            ],
                                [],
                                ["loc", [null, [20, 34],
                                    [20, 60]
                                ]], 0, 0
                            ]
                        ],
                            [],
                            ["loc", [null, [20, 16],
                                [20, 62]
                            ]], 0, 0
                        ]
                    ],
                    locals: ["k", "v"],
                    templates: []
                }
            }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 2,
                            column: 2
                        },
                        end: {
                            line: 26,
                            column: 2
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/account/index.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("  ")
                    e.appendChild(t, a)
                    var a = e.createElement("h4"),
                        r = e.createTextNode("Your Workers")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n  ")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n    ")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n      ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n        ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n          ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("ID")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n          ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Hashrate (rough, short average)")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n          ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Hashrate (accurate, long average)")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n          ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Last Share")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n        ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n      ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n      ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("      ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n    ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n  ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(e.childAt(t, [3, 1, 3]), 1, 1), r
                },
                statements: [
                    ["block", "each-in", [
                        ["get", "model.workers", ["loc", [null, [15, 19],
                            [15, 32]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 0, null, ["loc", [null, [15, 8],
                            [22, 20]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e]
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 26,
                                column: 2
                            },
                            end: {
                                line: 28,
                                column: 2
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("    ")
                        e.appendChild(t, a)
                        var a = e.createElement("h3"),
                            r = e.createTextNode("No workers online")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 42,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/account/index.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "style", "max-height: 100%; overflow-y: scroll;")
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createComment("")
                e.appendChild(a, r)
                var r = e.createTextNode("  ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "alert alert-info"), e.setAttribute(r, "role", "alert")
                var n = e.createTextNode("\n    \n    Chain:  ")
                e.appendChild(r, n)
                var n = e.createElement("a")
                e.setAttribute(n, "target", "_blank")
                var l = e.createComment("")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n    ")
                e.appendChild(r, n)
                var n = e.createElement("span")
                e.setAttribute(n, "class", "sr-only")
                var l = e.createTextNode("Notice:")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    Your average hashrate will be smoothly adjusted until you have shares to fullfill estimation window.")
                e.appendChild(r, n)
                var n = e.createElement("br")
                e.appendChild(r, n)
                var n = e.createTextNode("\n    There are two windows, long and short, first is equal to about 30 minutes and long window is usually equal to 3 hours.")
                e.appendChild(r, n)
                var n = e.createElement("br")
                e.appendChild(r, n)
                var n = e.createTextNode("\n    Dead (sick) workers will be highlighted in a table of workers if they didn't submit a share for 1/2 of short window,\n    so you can perform maintenance of your rigs.\n  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "alert alert-info"), e.setAttribute(r, "role", "alert")
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n)
                var n = e.createElement("strong"),
                    l = e.createTextNode("Your bulk stats JSON API URL:")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode(" ")
                e.appendChild(r, n)
                var n = e.createElement("a"),
                    l = e.createTextNode("/api/accounts/")
                e.appendChild(n, l)
                var l = e.createComment("")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = e.childAt(r, [3, 1]),
                    l = e.childAt(r, [5, 3]),
                    d = new Array(5)
                return d[0] = e.createMorphAt(r, 1, 1), d[1] = e.createAttrMorph(n, "href"), d[2] = e.createMorphAt(n, 0, 0), d[3] = e.createAttrMorph(l, "href"), d[4] = e.createMorphAt(l, 1, 1), d
            },
            statements: [
                ["block", "if", [
                    ["get", "model.workers", ["loc", [null, [2, 8],
                        [2, 21]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [2, 2],
                        [28, 9]
                    ]]
                ],
                ["attribute", "href", ["concat", [
                    ["get", "config.ChainAddress", ["loc", [null, [31, 23],
                        [31, 42]
                    ]], 0, 0, 0, 0],
                    ["get", "model.login", ["loc", [null, [31, 46],
                        [31, 57]
                    ]], 0, 0, 0, 0]
                ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                ["content", "model.login", ["loc", [null, [31, 77],
                    [31, 92]
                ]], 0, 0, 0, 0],
                ["attribute", "href", ["concat", ["/api/accounts/", ["get", "model.login", ["loc", [null, [40, 76],
                    [40, 87]
                ]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                ["content", "model.login", ["loc", [null, [40, 105],
                    [40, 120]
                ]], 0, 0, 0, 0]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/account/payouts", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                var e = function () {
                    var e = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 21,
                                        column: 20
                                    },
                                    end: {
                                        line: 23,
                                        column: 20
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("                      ")
                                e.appendChild(t, a)
                                var a = e.createElement("span")
                                e.setAttribute(a, "class", "label label-success")
                                var r = e.createComment("")
                                e.appendChild(a, r), e.appendChild(t, a)
                                var a = e.createTextNode("\n")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function (e, t, a) {
                                var r = new Array(1)
                                return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                            },
                            statements: [
                                ["inline", "format-balance", [
                                    ["get", "tx.amount", ["loc", [null, [22, 73],
                                        [22, 82]
                                    ]], 0, 0, 0, 0]
                                ],
                                    [],
                                    ["loc", [null, [22, 56],
                                        [22, 84]
                                    ]], 0, 0
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }(),
                        t = function () {
                            return {
                                meta: {
                                    revision: "Ember@2.8.3+c4330341",
                                    loc: {
                                        source: null,
                                        start: {
                                            line: 24,
                                            column: 20
                                        },
                                        end: {
                                            line: 26,
                                            column: 20
                                        }
                                    },
                                    moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
                                },
                                isEmpty: !1,
                                arity: 0,
                                cachedFragment: null,
                                hasRendered: !1,
                                buildFragment: function (e) {
                                    var t = e.createDocumentFragment(),
                                        a = e.createTextNode("                     TX Charges\n")
                                    return e.appendChild(t, a), t
                                },
                                buildRenderNodes: function () {
                                    return []
                                },
                                statements: [],
                                locals: [],
                                templates: []
                            }
                        }(),
                        a = function () {
                            return {
                                meta: {
                                    revision: "Ember@2.8.3+c4330341",
                                    loc: {
                                        source: null,
                                        start: {
                                            line: 27,
                                            column: 20
                                        },
                                        end: {
                                            line: 31,
                                            column: 20
                                        }
                                    },
                                    moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
                                },
                                isEmpty: !1,
                                arity: 0,
                                cachedFragment: null,
                                hasRendered: !1,
                                buildFragment: function (e) {
                                    var t = e.createDocumentFragment(),
                                        a = e.createTextNode("                        \n                            ")
                                    e.appendChild(t, a)
                                    var a = e.createComment("")
                                    e.appendChild(t, a)
                                    var a = e.createTextNode("\n                      \n")
                                    return e.appendChild(t, a), t
                                },
                                buildRenderNodes: function (e, t, a) {
                                    var r = new Array(1)
                                    return r[0] = e.createMorphAt(t, 1, 1, a), r
                                },
                                statements: [
                                    ["inline", "format-txcharges", [
                                        ["get", "tx.txcost", ["loc", [null, [29, 47],
                                            [29, 56]
                                        ]], 0, 0, 0, 0]
                                    ],
                                        [],
                                        ["loc", [null, [29, 28],
                                            [29, 58]
                                        ]], 0, 0
                                    ]
                                ],
                                locals: [],
                                templates: []
                            }
                        }()
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 20,
                                    column: 16
                                },
                                end: {
                                    line: 32,
                                    column: 18
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
                        },
                        isEmpty: !1,
                        arity: 1,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createComment("")
                            e.appendChild(t, a)
                            var a = e.createComment("")
                            e.appendChild(t, a)
                            var a = e.createComment("")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(3)
                            return r[0] = e.createMorphAt(t, 0, 0, a), r[1] = e.createMorphAt(t, 1, 1, a), r[2] = e.createMorphAt(t, 2, 2, a), e.insertBoundary(t, 0), e.insertBoundary(t, null), r
                        },
                        statements: [
                            ["block", "popover.trigger", [],
                                [], 0, null, ["loc", [null, [21, 20],
                                    [23, 40]
                                ]]
                            ],
                            ["block", "popover.title", [],
                                [], 1, null, ["loc", [null, [24, 20],
                                    [26, 38]
                                ]]
                            ],
                            ["block", "popover.content", [],
                                [], 2, null, ["loc", [null, [27, 20],
                                    [31, 40]
                                ]]
                            ]
                        ],
                        locals: ["popover"],
                        templates: [e, t, a]
                    }
                }(),
                    t = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 36,
                                        column: 24
                                    },
                                    end: {
                                        line: 38,
                                        column: 24
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("                        ")
                                e.appendChild(t, a)
                                var a = e.createComment("")
                                e.appendChild(t, a)
                                var a = e.createTextNode("\n")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function (e, t, a) {
                                var r = new Array(1)
                                return r[0] = e.createMorphAt(t, 1, 1, a), r
                            },
                            statements: [
                                ["inline", "format-ethusd", [
                                    ["get", "tx.amount", ["loc", [null, [37, 41],
                                        [37, 50]
                                    ]], 0, 0, 0, 0],
                                    ["get", "model.exchangedata.price_usd", ["loc", [null, [37, 51],
                                        [37, 79]
                                    ]], 0, 0, 0, 0]
                                ],
                                    [],
                                    ["loc", [null, [37, 24],
                                        [37, 82]
                                    ]], 0, 0
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }(),
                    a = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 38,
                                        column: 24
                                    },
                                    end: {
                                        line: 40,
                                        column: 24
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("                        ")
                                e.appendChild(t, a)
                                var a = e.createComment("")
                                e.appendChild(t, a)
                                var a = e.createTextNode("\n")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function (e, t, a) {
                                var r = new Array(1)
                                return r[0] = e.createMorphAt(t, 1, 1, a), r
                            },
                            statements: [
                                ["inline", "format-ethinr", [
                                    ["get", "tx.amount", ["loc", [null, [39, 41],
                                        [39, 50]
                                    ]], 0, 0, 0, 0],
                                    ["get", "model.exchangedata.price_inr", ["loc", [null, [39, 51],
                                        [39, 79]
                                    ]], 0, 0, 0, 0]
                                ],
                                    [],
                                    ["loc", [null, [39, 24],
                                        [39, 82]
                                    ]], 0, 0
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 13,
                                column: 8
                            },
                            end: {
                                line: 45,
                                column: 8
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("          ")
                        e.appendChild(t, a)
                        var a = e.createElement("tr"),
                            r = e.createTextNode("\n            ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n            ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createTextNode("\n              ")
                        e.appendChild(r, n)
                        var n = e.createElement("a")
                        e.setAttribute(n, "class", "hash"), e.setAttribute(n, "rel", "nofollow"), e.setAttribute(n, "target", "_blank")
                        var l = e.createComment("")
                        e.appendChild(n, l), e.appendChild(r, n)
                        var n = e.createTextNode("\n            ")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n            ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createTextNode("\n")
                        e.appendChild(r, n)
                        var n = e.createComment("")
                        e.appendChild(r, n)
                        var n = e.createTextNode("                \n               ")
                        e.appendChild(r, n)
                        var n = e.createElement("br")
                        e.appendChild(r, n)
                        var n = e.createElement("em"),
                            l = e.createElement("small"),
                            d = e.createTextNode("≅ \n                        \n")
                        e.appendChild(l, d)
                        var d = e.createComment("")
                        e.appendChild(l, d)
                        var d = e.createTextNode("\n                    \n                    ")
                        e.appendChild(l, d), e.appendChild(n, l), e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n          ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = e.childAt(r, [3, 1]),
                            l = e.childAt(r, [5]),
                            d = new Array(5)
                        return d[0] = e.createMorphAt(e.childAt(r, [1]), 0, 0), d[1] = e.createAttrMorph(n, "href"), d[2] = e.createMorphAt(n, 0, 0), d[3] = e.createMorphAt(l, 1, 1), d[4] = e.createMorphAt(e.childAt(l, [4, 0]), 1, 1), d
                    },
                    statements: [
                        ["inline", "format-date-locale", [
                            ["get", "tx.timestamp", ["loc", [null, [15, 37],
                                [15, 49]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [15, 16],
                                [15, 51]
                            ]], 0, 0
                        ],
                        ["attribute", "href", ["concat", [
                            ["get", "config.TransactionAddress", ["loc", [null, [17, 25],
                                [17, 50]
                            ]], 0, 0, 0, 0],
                            ["get", "tx.tx", ["loc", [null, [17, 54],
                                [17, 59]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["content", "tx.tx", ["loc", [null, [17, 107],
                            [17, 116]
                        ]], 0, 0, 0, 0],
                        ["block", "twbs-popover", [],
                            ["popoverTrigger", "hover"], 0, null, ["loc", [null, [20, 16],
                                [32, 35]
                            ]]
                        ],
                        ["block", "if", [
                            ["subexpr", "eq", [
                                ["get", "config.Currency", ["loc", [null, [36, 34],
                                    [36, 49]
                                ]], 0, 0, 0, 0], "USD"
                            ],
                                [],
                                ["loc", [null, [36, 30],
                                    [36, 56]
                                ]], 0, 0
                            ]
                        ],
                            [], 1, 2, ["loc", [null, [36, 24],
                                [40, 31]
                            ]]
                        ]
                    ],
                    locals: ["tx"],
                    templates: [e, t, a]
                }
            }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 1,
                            column: 2
                        },
                        end: {
                            line: 49,
                            column: 2
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("  ")
                    e.appendChild(t, a)
                    var a = e.createElement("h4"),
                        r = e.createTextNode("Your Latest Payouts")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n  ")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n    ")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n      ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n        ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n          ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Time")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n          ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Tx ID")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n          ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Amount")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n        ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n      ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n      ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("      ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n    ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n  ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(e.childAt(t, [3, 1, 3]), 1, 1), r
                },
                statements: [
                    ["block", "each", [
                        ["get", "model.payments", ["loc", [null, [13, 16],
                            [13, 30]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 0, null, ["loc", [null, [13, 8],
                            [45, 17]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e]
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 49,
                                column: 2
                            },
                            end: {
                                line: 51,
                                column: 2
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("  ")
                        e.appendChild(t, a)
                        var a = e.createElement("h3"),
                            r = e.createTextNode("No payouts yet")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 53,
                        column: 0
                    }
                },
                moduleName: "open-ethereum-pool/templates/account/payouts.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createComment("")
                e.appendChild(t, a)
                var a = e.createTextNode("\n")
                return e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = new Array(1)
                return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), r
            },
            statements: [
                ["block", "if", [
                    ["get", "model.payments", ["loc", [null, [1, 8],
                        [1, 22]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [1, 2],
                        [51, 9]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/account/rewards", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 20,
                                    column: 24
                                },
                                end: {
                                    line: 22,
                                    column: 24
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/account/rewards.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("                        ")
                            e.appendChild(t, a)
                            var a = e.createComment("")
                            e.appendChild(t, a)
                            var a = e.createTextNode("\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(t, 1, 1, a), r
                        },
                        statements: [
                            ["inline", "format-ethusd", [
                                ["get", "sumreward.reward", ["loc", [null, [21, 41],
                                    [21, 57]
                                ]], 0, 0, 0, 0],
                                ["get", "model.exchangedata.price_usd", ["loc", [null, [21, 58],
                                    [21, 86]
                                ]], 0, 0, 0, 0]
                            ],
                                [],
                                ["loc", [null, [21, 24],
                                    [21, 89]
                                ]], 0, 0
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }(),
                    t = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 22,
                                        column: 24
                                    },
                                    end: {
                                        line: 24,
                                        column: 24
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/account/rewards.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("                        ")
                                e.appendChild(t, a)
                                var a = e.createComment("")
                                e.appendChild(t, a)
                                var a = e.createTextNode("\n")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function (e, t, a) {
                                var r = new Array(1)
                                return r[0] = e.createMorphAt(t, 1, 1, a), r
                            },
                            statements: [
                                ["inline", "format-ethinr", [
                                    ["get", "sumreward.reward", ["loc", [null, [23, 41],
                                        [23, 57]
                                    ]], 0, 0, 0, 0],
                                    ["get", "model.exchangedata.price_inr", ["loc", [null, [23, 58],
                                        [23, 86]
                                    ]], 0, 0, 0, 0]
                                ],
                                    [],
                                    ["loc", [null, [23, 24],
                                        [23, 89]
                                    ]], 0, 0
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 14,
                                column: 16
                            },
                            end: {
                                line: 28,
                                column: 16
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account/rewards.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                ")
                        e.appendChild(t, a)
                        var a = e.createElement("tr"),
                            r = e.createTextNode("\n                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createElement("em"),
                            l = e.createElement("small"),
                            d = e.createTextNode("≅ \n                                \n")
                        e.appendChild(l, d)
                        var d = e.createComment("")
                        e.appendChild(l, d)
                        var d = e.createTextNode("                        \n                            ")
                        e.appendChild(l, d), e.appendChild(n, l), e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = new Array(3)
                        return n[0] = e.createMorphAt(e.childAt(r, [1]), 0, 0), n[1] = e.createMorphAt(e.childAt(r, [3]), 0, 0), n[2] = e.createMorphAt(e.childAt(r, [5, 0, 0]), 1, 1), n
                    },
                    statements: [
                        ["content", "sumreward.name", ["loc", [null, [16, 24],
                            [16, 42]
                        ]], 0, 0, 0, 0],
                        ["inline", "format-balance", [
                            ["get", "sumreward.reward", ["loc", [null, [17, 41],
                                [17, 57]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [17, 24],
                                [17, 59]
                            ]], 0, 0
                        ],
                        ["block", "if", [
                            ["subexpr", "eq", [
                                ["get", "config.Currency", ["loc", [null, [20, 34],
                                    [20, 49]
                                ]], 0, 0, 0, 0], "USD"
                            ],
                                [],
                                ["loc", [null, [20, 30],
                                    [20, 56]
                                ]], 0, 0
                            ]
                        ],
                            [], 0, 1, ["loc", [null, [20, 24],
                                [24, 31]
                            ]]
                        ]
                    ],
                    locals: ["sumreward"],
                    templates: [e, t]
                }
            }(),
                t = function () {
                    var e = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 45,
                                        column: 24
                                    },
                                    end: {
                                        line: 47,
                                        column: 24
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/account/rewards.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("                        ")
                                e.appendChild(t, a)
                                var a = e.createElement("span")
                                e.setAttribute(a, "class", "label label-default")
                                var r = e.createComment("")
                                e.appendChild(a, r), e.appendChild(t, a)
                                var a = e.createTextNode("\n")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function (e, t, a) {
                                var r = new Array(1)
                                return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                            },
                            statements: [
                                ["inline", "format-balance", [
                                    ["get", "tx.reward", ["loc", [null, [46, 75],
                                        [46, 84]
                                    ]], 0, 0, 0, 0]
                                ],
                                    [],
                                    ["loc", [null, [46, 58],
                                        [46, 86]
                                    ]], 0, 0
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }(),
                        t = function () {
                            return {
                                meta: {
                                    revision: "Ember@2.8.3+c4330341",
                                    loc: {
                                        source: null,
                                        start: {
                                            line: 47,
                                            column: 24
                                        },
                                        end: {
                                            line: 49,
                                            column: 24
                                        }
                                    },
                                    moduleName: "open-ethereum-pool/templates/account/rewards.hbs"
                                },
                                isEmpty: !1,
                                arity: 0,
                                cachedFragment: null,
                                hasRendered: !1,
                                buildFragment: function (e) {
                                    var t = e.createDocumentFragment(),
                                        a = e.createTextNode("                        ")
                                    e.appendChild(t, a)
                                    var a = e.createElement("span")
                                    e.setAttribute(a, "class", "label label-success")
                                    var r = e.createComment("")
                                    e.appendChild(a, r), e.appendChild(t, a)
                                    var a = e.createTextNode("\n")
                                    return e.appendChild(t, a), t
                                },
                                buildRenderNodes: function (e, t, a) {
                                    var r = new Array(1)
                                    return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                                },
                                statements: [
                                    ["inline", "format-balance", [
                                        ["get", "tx.reward", ["loc", [null, [48, 75],
                                            [48, 84]
                                        ]], 0, 0, 0, 0]
                                    ],
                                        [],
                                        ["loc", [null, [48, 58],
                                            [48, 86]
                                        ]], 0, 0
                                    ]
                                ],
                                locals: [],
                                templates: []
                            }
                        }()
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 41,
                                    column: 16
                                },
                                end: {
                                    line: 53,
                                    column: 16
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/account/rewards.hbs"
                        },
                        isEmpty: !1,
                        arity: 1,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("                ")
                            e.appendChild(t, a)
                            var a = e.createElement("tr"),
                                r = e.createTextNode("\n                    ")
                            e.appendChild(a, r)
                            var r = e.createElement("td"),
                                n = e.createComment("")
                            e.appendChild(r, n), e.appendChild(a, r)
                            var r = e.createTextNode("\n                    ")
                            e.appendChild(a, r)
                            var r = e.createElement("td"),
                                n = e.createTextNode("\n")
                            e.appendChild(r, n)
                            var n = e.createComment("")
                            e.appendChild(r, n)
                            var n = e.createTextNode("                    ")
                            e.appendChild(r, n), e.appendChild(a, r)
                            var r = e.createTextNode("\n                    ")
                            e.appendChild(a, r)
                            var r = e.createElement("td"),
                                n = e.createComment("")
                            e.appendChild(r, n), e.appendChild(a, r)
                            var r = e.createTextNode("\n                ")
                            e.appendChild(a, r), e.appendChild(t, a)
                            var a = e.createTextNode("\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = e.childAt(t, [1]),
                                n = new Array(3)
                            return n[0] = e.createMorphAt(e.childAt(r, [1]), 0, 0), n[1] = e.createMorphAt(e.childAt(r, [3]), 1, 1), n[2] = e.createMorphAt(e.childAt(r, [5]), 0, 0), n
                        },
                        statements: [
                            ["inline", "format-number", [
                                ["get", "tx.blockheight", ["loc", [null, [43, 41],
                                    [43, 55]
                                ]], 0, 0, 0, 0]
                            ],
                                [],
                                ["loc", [null, [43, 24],
                                    [43, 57]
                                ]], 0, 0
                            ],
                            ["block", "if", [
                                ["get", "tx.immature", ["loc", [null, [45, 30],
                                    [45, 41]
                                ]], 0, 0, 0, 0]
                            ],
                                [], 0, 1, ["loc", [null, [45, 24],
                                    [49, 31]
                                ]]
                            ],
                            ["inline", "format-number", [
                                ["get", "tx.percent", ["loc", [null, [51, 40],
                                    [51, 50]
                                ]], 0, 0, 0, 0]
                            ],
                                ["style", "percent", "maximumFractionDigits", "6"],
                                ["loc", [null, [51, 24],
                                    [51, 94]
                                ]], 0, 0
                            ]
                        ],
                        locals: ["tx"],
                        templates: [e, t]
                    }
                }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 2,
                            column: 4
                        },
                        end: {
                            line: 57,
                            column: 4
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/account/rewards.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("    ")
                    e.appendChild(t, a)
                    var a = e.createElement("h4"),
                        r = e.createTextNode("Your Latest Rewards")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n    ")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n        ")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n            ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Timeline")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Reward")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("     \n                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("≅ ")
                    e.appendChild(d, i)
                    var i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n            ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n        ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n        ")
                    e.appendChild(a, r)
                    var r = e.createElement("span")
                    e.setAttribute(r, "class", "label label-default")
                    var n = e.createTextNode("Immature")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode(" ")
                    e.appendChild(a, r)
                    var r = e.createElement("span")
                    e.setAttribute(r, "class", "label label-success")
                    var n = e.createTextNode("Matured")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n        ")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n            ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Block Height")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Reward")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Round Share")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n            ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n        ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n    ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = e.childAt(t, [3]),
                        n = e.childAt(r, [1]),
                        l = new Array(3)
                    return l[0] = e.createMorphAt(e.childAt(n, [1, 1, 5]), 1, 1), l[1] = e.createMorphAt(e.childAt(n, [3]), 1, 1), l[2] = e.createMorphAt(e.childAt(r, [7, 3]), 1, 1), l
                },
                statements: [
                    ["content", "config.Currency", ["loc", [null, [10, 26],
                        [10, 45]
                    ]], 0, 0, 0, 0],
                    ["block", "each", [
                        ["get", "model.sumrewards", ["loc", [null, [14, 24],
                            [14, 40]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 0, null, ["loc", [null, [14, 16],
                            [28, 25]
                        ]]
                    ],
                    ["block", "each", [
                        ["get", "model.rewards", ["loc", [null, [41, 24],
                            [41, 37]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 1, null, ["loc", [null, [41, 16],
                            [53, 25]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e, t]
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 57,
                                column: 4
                            },
                            end: {
                                line: 59,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/account/rewards.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("    ")
                        e.appendChild(t, a)
                        var a = e.createElement("h3"),
                            r = e.createTextNode("No rewards yet")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 60,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/account/rewards.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "style", "height:650px;max-height:650px; overflow-y: scroll;")
                var r = e.createTextNode("  \n")
                e.appendChild(a, r)
                var r = e.createComment("")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = new Array(1)
                return r[0] = e.createMorphAt(e.childAt(t, [0]), 1, 1), r
            },
            statements: [
                ["block", "if", [
                    ["get", "model.rewards", ["loc", [null, [2, 10],
                        [2, 23]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [2, 4],
                        [59, 11]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/account/settings", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 22,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/account/settings.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "style", "height:650px;max-height:650px; overflow-y: scroll;")
                var r = e.createTextNode("  \n\n    ")
                e.appendChild(a, r)
                var r = e.createElement("h4"),
                    n = e.createTextNode("SETTINGS")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "col-md-12 disable")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("form")
                e.setAttribute(n, "action", ""), e.setAttribute(n, "method", "post")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "checkbox")
                var d = e.createElement("label"),
                    i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("input")
                e.setAttribute(i, "id", "monitor"), e.setAttribute(i, "type", "checkbox"), e.setAttribute(i, "name", "monitor"), e.appendChild(d, i)
                var i = e.createTextNode("Send a mail if one of my workers goes offline (beta feature)")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "form-group")
                var d = e.createElement("label")
                e.setAttribute(d, "for", "email")
                var i = e.createTextNode("Email address (to prevent spam the first 3 characters are not shown):")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                 ")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "form-group")
                var d = e.createElement("label")
                e.setAttribute(d, "for", "threshold")
                var i = e.createTextNode("Payment threshold in Ether (Min: 0.05 Ether, Max: 10 Ether, if set to less than 1 Ether a fixed tx fee of 0.001 Ether will be deducted from the paid amount).")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                 ")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "form-group")
                var d = e.createElement("label")
                e.setAttribute(d, "for", "ip")
                var i = e.createTextNode("To save, validate your account by completing the IP given below (the IP corresponds to the public IP address of one of your workers):")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("button")
                e.setAttribute(l, "class", "btn btn-default")
                var d = e.createTextNode("Save")
                e.appendChild(l, d), e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0, 3, 1]),
                    n = new Array(3)
                return n[0] = e.createMorphAt(e.childAt(r, [3]), 2, 2), n[1] = e.createMorphAt(e.childAt(r, [5]), 2, 2), n[2] = e.createMorphAt(e.childAt(r, [7]), 2, 2), n
            },
            statements: [
                ["inline", "input", [],
                    ["value", ["subexpr", "@mut", [
                        ["get", "model.email", ["loc", [null, [11, 31],
                            [11, 42]
                        ]], 0, 0, 0, 0]
                    ],
                        [],
                        [], 0, 0
                    ], "class", "form-control"],
                    ["loc", [null, [11, 17],
                        [11, 65]
                    ]], 0, 0
                ],
                ["inline", "input", [],
                    ["value", ["subexpr", "@mut", [
                        ["get", "model.threshold", ["loc", [null, [14, 31],
                            [14, 46]
                        ]], 0, 0, 0, 0]
                    ],
                        [],
                        [], 0, 0
                    ], "class", "form-control"],
                    ["loc", [null, [14, 17],
                        [14, 69]
                    ]], 0, 0
                ],
                ["inline", "input", [],
                    ["value", ["subexpr", "@mut", [
                        ["get", "model.threshold", ["loc", [null, [17, 30],
                            [17, 45]
                        ]], 0, 0, 0, 0]
                    ],
                        [],
                        [], 0, 0
                    ], "class", "form-control"],
                    ["loc", [null, [17, 16],
                        [17, 68]
                    ]], 0, 0
                ]
            ],
            locals: [],
            templates: []
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/application-error", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 15,
                        column: 0
                    }
                },
                moduleName: "open-ethereum-pool/templates/application-error.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "id", "page-wrapper")
                var r = e.createTextNode("\n ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row align-middle"), e.setAttribute(r, "style", "padding-top:50px;font-size: 30px;")
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-12")
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "col-xs-12 alert alert-warning")
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d)
                var d = e.createElement("i")
                e.setAttribute(d, "class", "fa fa-warning"), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "style", "font-family: Arvo; margin-top:80px; border-bottom: none;font-size: 30px;")
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i)
                var i = e.createElement("h1"),
                    o = e.createTextNode("Statistics API are Temporarily Down")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i)
                var i = e.createElement("strong"),
                    o = e.createTextNode("Usually it's just a temporal issue and mining is not affected. ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("         \n            ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n        ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n    ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r), e.appendChild(t, a)
                var a = e.createTextNode("\n\n")
                return e.appendChild(t, a), t
            },
            buildRenderNodes: function () {
                return []
            },
            statements: [],
            locals: [],
            templates: []
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/application", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 23,
                                column: 10
                            },
                            end: {
                                line: 25,
                                column: 10
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/application.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("            ")
                        e.appendChild(t, a)
                        var a = e.createElement("i")
                        e.setAttribute(a, "class", "fa fa-home"), e.appendChild(t, a)
                        var a = e.createTextNode(" Home\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 22,
                            column: 8
                        },
                        end: {
                            line: 26,
                            column: 8
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/application.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createComment("")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), e.insertBoundary(t, null), r
                },
                statements: [
                    ["block", "link-to", ["index"],
                        [], 0, null, ["loc", [null, [23, 10],
                            [25, 22]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e]
            }
        }(),
            t = function () {
                var e = function () {
                    var e = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 30,
                                        column: 12
                                    },
                                    end: {
                                        line: 32,
                                        column: 12
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/application.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("              ")
                                e.appendChild(t, a)
                                var a = e.createElement("span")
                                e.setAttribute(a, "class", "badge alert-success"), e.appendChild(t, a)
                                var a = e.createTextNode("\n")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function () {
                                return []
                            },
                            statements: [],
                            locals: [],
                            templates: []
                        }
                    }()
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 28,
                                    column: 10
                                },
                                end: {
                                    line: 33,
                                    column: 10
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/application.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("            ")
                            e.appendChild(t, a)
                            var a = e.createElement("i")
                            e.setAttribute(a, "class", "fa fa-cubes"), e.appendChild(t, a)
                            var a = e.createTextNode(" Blocks Found\n")
                            e.appendChild(t, a)
                            var a = e.createComment("")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(t, 3, 3, a), e.insertBoundary(t, null), r
                        },
                        statements: [
                            ["block", "if", [
                                ["get", "immatureTotal", ["loc", [null, [30, 18],
                                    [30, 31]
                                ]], 0, 0, 0, 0]
                            ],
                                [], 0, null, ["loc", [null, [30, 12],
                                    [32, 19]
                                ]]
                            ]
                        ],
                        locals: [],
                        templates: [e]
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 27,
                                column: 8
                            },
                            end: {
                                line: 34,
                                column: 8
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/application.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createComment("")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), e.insertBoundary(t, null), r
                    },
                    statements: [
                        ["block", "link-to", ["blocks"],
                            [], 0, null, ["loc", [null, [28, 10],
                                [33, 22]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            a = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 36,
                                    column: 10
                                },
                                end: {
                                    line: 38,
                                    column: 10
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/application.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("            ")
                            e.appendChild(t, a)
                            var a = e.createElement("i")
                            e.setAttribute(a, "class", "fa fa-credit-card"), e.appendChild(t, a)
                            var a = e.createTextNode(" Payments\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function () {
                            return []
                        },
                        statements: [],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 35,
                                column: 8
                            },
                            end: {
                                line: 39,
                                column: 8
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/application.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createComment("")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), e.insertBoundary(t, null), r
                    },
                    statements: [
                        ["block", "link-to", ["payments"],
                            [], 0, null, ["loc", [null, [36, 10],
                                [38, 22]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            r = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 41,
                                    column: 10
                                },
                                end: {
                                    line: 43,
                                    column: 10
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/application.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("            ")
                            e.appendChild(t, a)
                            var a = e.createElement("i")
                            e.setAttribute(a, "class", "fa fa-users"), e.appendChild(t, a)
                            var a = e.createTextNode(" Miners\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function () {
                            return []
                        },
                        statements: [],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 40,
                                column: 8
                            },
                            end: {
                                line: 44,
                                column: 8
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/application.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createComment("")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), e.insertBoundary(t, null), r
                    },
                    statements: [
                        ["block", "link-to", ["miners"],
                            [], 0, null, ["loc", [null, [41, 10],
                                [43, 22]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            n = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 46,
                                    column: 10
                                },
                                end: {
                                    line: 48,
                                    column: 10
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/application.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("            ")
                            e.appendChild(t, a)
                            var a = e.createElement("i")
                            e.setAttribute(a, "class", "fa fa-bank"), e.appendChild(t, a)
                            var a = e.createTextNode(" Terms & Conditions\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function () {
                            return []
                        },
                        statements: [],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 45,
                                column: 8
                            },
                            end: {
                                line: 49,
                                column: 8
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/application.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createComment("")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), e.insertBoundary(t, null), r
                    },
                    statements: [
                        ["block", "link-to", ["about"],
                            [], 0, null, ["loc", [null, [46, 10],
                                [48, 22]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            l = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 50,
                                column: 9
                            },
                            end: {
                                line: 54,
                                column: 8
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/application.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("          ")
                        e.appendChild(t, a)
                        var a = e.createElement("a")
                        e.setAttribute(a, "target", "_blank")
                        var r = e.createTextNode("\n            ")
                        e.appendChild(a, r)
                        var r = e.createElement("i")
                        e.setAttribute(r, "class", "fa fa-life-ring"), e.appendChild(a, r)
                        var r = e.createTextNode(" Helpdesk\n          ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = new Array(1)
                        return n[0] = e.createAttrMorph(r, "href"), n
                    },
                    statements: [
                        ["attribute", "href", ["concat", [
                            ["get", "config.SupportHelpdesk", ["loc", [null, [51, 37],
                                [51, 59]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0]
                    ],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 66,
                        column: 0
                    }
                },
                moduleName: "open-ethereum-pool/templates/application.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createComment(" Fixed navbar ")
                e.appendChild(t, a)
                var a = e.createTextNode("\n")
                e.appendChild(t, a)
                var a = e.createElement("div")
                e.setAttribute(a, "class", "navbar navbar-default navbar-fixed-top"), e.setAttribute(a, "role", "navigation")
                var r = e.createTextNode("\n    \n")
                e.appendChild(a, r)
                var r = e.createElement("a")
                e.setAttribute(r, "class", "navbar-brand")
                var n = e.createTextNode(" \n        ")
                e.appendChild(r, n)
                var n = e.createComment(' <object type="image/svg+xml" data="assets/etc.svg" style="height: 30px; width: 30px;">           \n        </object> &nbsp;&nbsp; ')
                e.appendChild(r, n)
                var n = e.createTextNode("\n      ")
                e.appendChild(r, n)
                var n = e.createElement("img")
                e.setAttribute(n, "src", "assets/etc_name-216193cc6795c18cf77b79d497213f7f.png"), e.setAttribute(n, "alt", "ETHEREUM CLASSIC"), e.setAttribute(n, "style", "height:30px;"), e.appendChild(r, n)
                var n = e.createTextNode("\n      \n")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "container")
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "navbar-header")
                var l = e.createTextNode("\n      ")
                e.appendChild(n, l)
                var l = e.createElement("button")
                e.setAttribute(l, "type", "button"), e.setAttribute(l, "class", "navbar-toggle"), e.setAttribute(l, "data-toggle", "collapse"), e.setAttribute(l, "data-target", ".navbar-collapse")
                var d = e.createTextNode("\n          ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "class", "sr-only")
                var i = e.createTextNode("Toggle navigation")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n          ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "class", "icon-bar"), e.appendChild(l, d)
                var d = e.createTextNode("\n          ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "class", "icon-bar"), e.appendChild(l, d)
                var d = e.createTextNode("\n          ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "class", "icon-bar"), e.appendChild(l, d)
                var d = e.createTextNode("\n      ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n      \n    ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "collapse navbar-collapse")
                var l = e.createTextNode("\n      ")
                e.appendChild(n, l)
                var l = e.createElement("ul")
                e.setAttribute(l, "class", "nav navbar-nav")
                var d = e.createTextNode("\n")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode("                  \n      ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        \n    ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n      \n  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n\n")
                e.appendChild(a, r), e.appendChild(t, a)
                var a = e.createTextNode("\n\n")
                e.appendChild(t, a)
                var a = e.createComment("")
                e.appendChild(t, a)
                var a = e.createTextNode("\n")
                return e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [2, 3, 3, 1]),
                    n = new Array(7)
                return n[0] = e.createMorphAt(r, 1, 1), n[1] = e.createMorphAt(r, 2, 2), n[2] = e.createMorphAt(r, 3, 3), n[3] = e.createMorphAt(r, 4, 4), n[4] = e.createMorphAt(r, 5, 5), n[5] = e.createMorphAt(r, 6, 6), n[6] = e.createMorphAt(t, 4, 4, a), n
            },
            statements: [
                ["block", "active-li", [],
                    ["currentWhen", "index"], 0, null, ["loc", [null, [22, 8],
                        [26, 22]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "blocks"], 1, null, ["loc", [null, [27, 8],
                        [34, 22]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "payments"], 2, null, ["loc", [null, [35, 8],
                        [39, 22]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "miners"], 3, null, ["loc", [null, [40, 8],
                        [44, 22]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "about"], 4, null, ["loc", [null, [45, 8],
                        [49, 22]
                    ]]
                ],
                ["block", "active-li", [],
                    [], 5, null, ["loc", [null, [50, 9],
                        [54, 22]
                    ]]
                ],
                ["content", "outlet", ["loc", [null, [65, 0],
                    [65, 10]
                ]], 0, 0, 0, 0]
            ],
            locals: [],
            templates: [e, t, a, r, n, l]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/blocks", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 89,
                            column: 4
                        },
                        end: {
                            line: 109,
                            column: 4
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/blocks.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("    ")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "row")
                    var r = e.createTextNode("\n\n        ")
                    e.appendChild(a, r)
                    var r = e.createElement("div")
                    e.setAttribute(r, "class", "col-lg-12")
                    var n = e.createTextNode("    \n            ")
                    e.appendChild(r, n)
                    var n = e.createElement("div")
                    e.setAttribute(n, "class", "panel-group")
                    var l = e.createTextNode("\n                ")
                    e.appendChild(n, l)
                    var l = e.createElement("div")
                    e.setAttribute(l, "class", "panel panel-success")
                    var d = e.createTextNode("\n                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("div")
                    e.setAttribute(d, "class", "panel-heading")
                    var i = e.createTextNode("\n                        ")
                    e.appendChild(d, i)
                    var i = e.createElement("h4")
                    e.setAttribute(i, "class", "panel-title")
                    var o = e.createTextNode("\n                            ")
                    e.appendChild(i, o)
                    var o = e.createElement("a")
                    e.setAttribute(o, "data-toggle", "collapse"), e.setAttribute(o, "href", "#collapse1")
                    var p = e.createElement("i")
                    e.setAttribute(p, "class", "fa fa-magic fa-fw"), e.appendChild(o, p)
                    var p = e.createTextNode(" POOL LUCK STATISTICS")
                    e.appendChild(o, p), e.appendChild(i, o)
                    var o = e.createTextNode(" \n                        ")
                    e.appendChild(i, o), e.appendChild(d, i)
                    var i = e.createTextNode("\n                    ")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("div")
                    e.setAttribute(d, "id", "collapse1"), e.setAttribute(d, "class", "panel-collapse collapse")
                    var i = e.createTextNode("\n                        ")
                    e.appendChild(d, i)
                    var i = e.createElement("div")
                    e.setAttribute(i, "class", "panel-body")
                    var o = e.createComment("")
                    e.appendChild(i, o), e.appendChild(d, i)
                    var i = e.createTextNode("\n\n                    ")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n\n        ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n    ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(e.childAt(t, [1, 1, 1, 1, 3, 1]), 0, 0), r
                },
                statements: [
                    ["inline", "partial", ["luck"],
                        [],
                        ["loc", [null, [101, 48],
                            [101, 66]
                        ]], 0, 0
                    ]
                ],
                locals: [],
                templates: []
            }
        }(),
            t = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 121,
                                    column: 24
                                },
                                end: {
                                    line: 121,
                                    column: 54
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("All")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function () {
                            return []
                        },
                        statements: [],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 120,
                                column: 24
                            },
                            end: {
                                line: 122,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["block", "link-to", ["blocks.index"],
                            [], 0, null, ["loc", [null, [121, 24],
                                [121, 66]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            a = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 124,
                                    column: 24
                                },
                                end: {
                                    line: 124,
                                    column: 136
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("Mature ")
                            e.appendChild(t, a)
                            var a = e.createElement("span")
                            e.setAttribute(a, "class", "badge alert-success")
                            var r = e.createComment("")
                            return e.appendChild(a, r), e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                        },
                        statements: [
                            ["inline", "format-number", [
                                ["get", "model.maturedTotal", ["loc", [null, [124, 109],
                                    [124, 127]
                                ]], 0, 0, 0, 0]
                            ],
                                [],
                                ["loc", [null, [124, 93],
                                    [124, 129]
                                ]], 0, 0
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 123,
                                column: 24
                            },
                            end: {
                                line: 125,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["block", "link-to", ["blocks.mature"],
                            [], 0, null, ["loc", [null, [124, 24],
                                [124, 148]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            r = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 127,
                                    column: 24
                                },
                                end: {
                                    line: 127,
                                    column: 141
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("Immature ")
                            e.appendChild(t, a)
                            var a = e.createElement("span")
                            e.setAttribute(a, "class", "badge alert-warning")
                            var r = e.createComment("")
                            return e.appendChild(a, r), e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                        },
                        statements: [
                            ["inline", "format-number", [
                                ["get", "model.immatureTotal", ["loc", [null, [127, 113],
                                    [127, 132]
                                ]], 0, 0, 0, 0]
                            ],
                                [],
                                ["loc", [null, [127, 97],
                                    [127, 134]
                                ]], 0, 0
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 126,
                                column: 24
                            },
                            end: {
                                line: 128,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["block", "link-to", ["blocks.immature"],
                            [], 0, null, ["loc", [null, [127, 24],
                                [127, 153]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            n = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 130,
                                    column: 24
                                },
                                end: {
                                    line: 130,
                                    column: 143
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("New Blocks ")
                            e.appendChild(t, a)
                            var a = e.createElement("span")
                            e.setAttribute(a, "class", "badge alert-danger")
                            var r = e.createComment("")
                            return e.appendChild(a, r), e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                        },
                        statements: [
                            ["inline", "format-number", [
                                ["get", "model.candidatesTotal", ["loc", [null, [130, 113],
                                    [130, 134]
                                ]], 0, 0, 0, 0]
                            ],
                                [],
                                ["loc", [null, [130, 97],
                                    [130, 136]
                                ]], 0, 0
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 129,
                                column: 24
                            },
                            end: {
                                line: 131,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["block", "link-to", ["blocks.pending"],
                            [], 0, null, ["loc", [null, [130, 24],
                                [130, 155]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 140,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/blocks.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "id", "page-wrapper")
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row align-middle"), e.setAttribute(r, "style", "padding-top:50px;")
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-4")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "class", "text-blue"), e.setAttribute(l, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px;")
                var d = e.createTextNode("BLOCKS STATISTICS")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-8"), e.setAttribute(n, "style", "margin-bottom: 20px;")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Pool always pay full block reward including uncle rewards.    ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("                                   \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("br")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Block maturity requires ")
                e.appendChild(d, i)
                var i = e.createElement("u"),
                    o = e.createTextNode("up to")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode(" ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "class", "label label-success")
                var i = e.createTextNode("120")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode(" ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("blocks. Usually it's less indeed.")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("                                  \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-12 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("  \n\n    ")
                e.appendChild(a, r)
                var r = e.createComment(" /.row ")
                e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row")
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-4")
                var l = e.createTextNode(" \n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-red")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode(" \n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode("BLOCKS")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("                    \n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-star-o"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-footer text-center")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "text-red")
                var o = e.createTextNode("NEW BLOCKS")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "pull-right"), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "clearfix"), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-4")
                var l = e.createTextNode(" \n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-yellow")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode("BLOCKS")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("   \n\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-star-half-full"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-footer text-center")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "text-yellow")
                var o = e.createTextNode("IMMATURE BLOCKS")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "pull-right"), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "clearfix"), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-4")
                var l = e.createTextNode(" \n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-green")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white"), e.setAttribute(o, "style", "font-size: 30px;")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("   \n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode("BLOCKS")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("   \n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-star"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-footer text-center")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "text-green")
                var o = e.createTextNode("MATURE BLOCKS")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "pull-right"), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "clearfix"), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createComment(" /.row ")
                e.appendChild(a, r)
                var r = e.createTextNode("\n\n\n")
                e.appendChild(a, r)
                var r = e.createComment("")
                e.appendChild(a, r)
                var r = e.createTextNode("\n\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-12")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel panel-warning")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-cube fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" DETAILED BLOCK STATISTICS                    \n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-body")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("ul")
                e.setAttribute(i, "class", "nav nav-tabs")
                var o = e.createTextNode("   \n")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode("                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createComment("")
                e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n\n")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = e.childAt(r, [5]),
                    l = e.childAt(r, [11, 1, 1, 3]),
                    d = e.childAt(l, [1]),
                    i = new Array(9)
                return i[0] = e.createMorphAt(e.childAt(n, [1, 3, 1, 1, 0]), 1, 1), i[1] = e.createMorphAt(e.childAt(n, [3, 3, 1, 1, 0]), 1, 1), i[2] = e.createMorphAt(e.childAt(n, [5, 3, 1, 1, 0]), 1, 1), i[3] = e.createMorphAt(r, 9, 9), i[4] = e.createMorphAt(d, 1, 1), i[5] = e.createMorphAt(d, 2, 2), i[6] = e.createMorphAt(d, 3, 3), i[7] = e.createMorphAt(d, 4, 4), i[8] = e.createMorphAt(l, 3, 3), i
            },
            statements: [
                ["inline", "format-number", [
                    ["get", "model.candidatesTotal", ["loc", [null, [27, 44],
                        [27, 65]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [27, 28],
                        [27, 67]
                    ]], 0, 0
                ],
                ["inline", "format-number", [
                    ["get", "model.immatureTotal", ["loc", [null, [48, 44],
                        [48, 63]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [48, 28],
                        [48, 65]
                    ]], 0, 0
                ],
                ["inline", "format-number", [
                    ["get", "model.maturedTotal", ["loc", [null, [70, 44],
                        [70, 62]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [70, 28],
                        [70, 64]
                    ]], 0, 0
                ],
                ["block", "if", [
                    ["get", "model.luck", ["loc", [null, [89, 10],
                        [89, 20]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, null, ["loc", [null, [89, 4],
                        [109, 11]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "blocks.index", "role", "presentation"], 1, null, ["loc", [null, [120, 24],
                        [122, 38]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "blocks.mature", "role", "presentation"], 2, null, ["loc", [null, [123, 24],
                        [125, 38]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "blocks.immature", "role", "presentation"], 3, null, ["loc", [null, [126, 24],
                        [128, 38]
                    ]]
                ],
                ["block", "active-li", [],
                    ["currentWhen", "blocks.pending", "role", "presentation"], 4, null, ["loc", [null, [129, 24],
                        [131, 38]
                    ]]
                ],
                ["content", "outlet", ["loc", [null, [133, 20],
                    [133, 30]
                ]], 0, 0, 0, 0]
            ],
            locals: [],
            templates: [e, t, a, r, n]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/blocks/block", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 3,
                            column: 4
                        },
                        end: {
                            line: 5,
                            column: 4
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("      ")
                    e.appendChild(t, a)
                    var a = e.createElement("a")
                    e.setAttribute(a, "rel", "nofollow"), e.setAttribute(a, "target", "_blank")
                    var r = e.createComment("")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = e.childAt(t, [1]),
                        n = new Array(2)
                    return n[0] = e.createAttrMorph(r, "href"), n[1] = e.createMorphAt(r, 0, 0), n
                },
                statements: [
                    ["attribute", "href", ["concat", [
                        ["get", "config.UncleAddress", ["loc", [null, [4, 17],
                            [4, 36]
                        ]], 0, 0, 0, 0],
                        ["get", "block.uncleHeight", ["loc", [null, [4, 40],
                            [4, 57]
                        ]], 0, 0, 0, 0]
                    ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                    ["inline", "format-number", [
                        ["get", "block.height", ["loc", [null, [4, 108],
                            [4, 120]
                        ]], 0, 0, 0, 0]
                    ],
                        [],
                        ["loc", [null, [4, 92],
                            [4, 122]
                        ]], 0, 0
                    ]
                ],
                locals: [],
                templates: []
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 5,
                                column: 4
                            },
                            end: {
                                line: 7,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("      ")
                        e.appendChild(t, a)
                        var a = e.createElement("a")
                        e.setAttribute(a, "rel", "nofollow"), e.setAttribute(a, "target", "_blank")
                        var r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = new Array(2)
                        return n[0] = e.createAttrMorph(r, "href"), n[1] = e.createMorphAt(r, 0, 0), n
                    },
                    statements: [
                        ["attribute", "href", ["concat", [
                            ["get", "config.BlockAddress", ["loc", [null, [6, 17],
                                [6, 36]
                            ]], 0, 0, 0, 0],
                            ["get", "block.height", ["loc", [null, [6, 40],
                                [6, 52]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["inline", "format-number", [
                            ["get", "block.height", ["loc", [null, [6, 103],
                                [6, 115]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [6, 87],
                                [6, 117]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            a = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 10,
                                column: 4
                            },
                            end: {
                                line: 12,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("      ")
                        e.appendChild(t, a)
                        var a = e.createElement("a")
                        e.setAttribute(a, "class", "hash"), e.setAttribute(a, "rel", "nofollow"), e.setAttribute(a, "target", "_blank")
                        var r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = new Array(2)
                        return n[0] = e.createAttrMorph(r, "href"), n[1] = e.createMorphAt(r, 0, 0), n
                    },
                    statements: [
                        ["attribute", "href", ["concat", [
                            ["get", "config.UncleAddress", ["loc", [null, [11, 17],
                                [11, 36]
                            ]], 0, 0, 0, 0],
                            ["get", "block.hash", ["loc", [null, [11, 40],
                                [11, 50]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["content", "block.hash", ["loc", [null, [11, 98],
                            [11, 112]
                        ]], 0, 0, 0, 0]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            r = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 12,
                                    column: 4
                                },
                                end: {
                                    line: 14,
                                    column: 4
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("      ")
                            e.appendChild(t, a)
                            var a = e.createElement("span")
                            e.setAttribute(a, "class", "label label-danger")
                            var r = e.createTextNode("Orphan")
                            e.appendChild(a, r), e.appendChild(t, a)
                            var a = e.createTextNode("\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function () {
                            return []
                        },
                        statements: [],
                        locals: [],
                        templates: []
                    }
                }(),
                    t = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 14,
                                        column: 4
                                    },
                                    end: {
                                        line: 16,
                                        column: 4
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("      ")
                                e.appendChild(t, a)
                                var a = e.createElement("a")
                                e.setAttribute(a, "class", "hash"), e.setAttribute(a, "rel", "nofollow"), e.setAttribute(a, "target", "_blank")
                                var r = e.createComment("")
                                e.appendChild(a, r), e.appendChild(t, a)
                                var a = e.createTextNode("\n    ")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function (e, t, a) {
                                var r = e.childAt(t, [1]),
                                    n = new Array(2)
                                return n[0] = e.createAttrMorph(r, "href"), n[1] = e.createMorphAt(r, 0, 0), n
                            },
                            statements: [
                                ["attribute", "href", ["concat", [
                                    ["get", "config.BlockAddress", ["loc", [null, [15, 17],
                                        [15, 36]
                                    ]], 0, 0, 0, 0],
                                    ["get", "block.hash", ["loc", [null, [15, 40],
                                        [15, 50]
                                    ]], 0, 0, 0, 0]
                                ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                                ["content", "block.hash", ["loc", [null, [15, 98],
                                    [15, 112]
                                ]], 0, 0, 0, 0]
                            ],
                            locals: [],
                            templates: []
                        }
                    }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 12,
                                column: 4
                            },
                            end: {
                                line: 16,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createComment("")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), e.insertBoundary(t, null), r
                    },
                    statements: [
                        ["block", "if", [
                            ["get", "block.orphan", ["loc", [null, [12, 14],
                                [12, 26]
                            ]], 0, 0, 0, 0]
                        ],
                            [], 0, 1, ["loc", [null, [12, 4],
                                [16, 4]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e, t]
                }
            }(),
            n = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 20,
                                column: 4
                            },
                            end: {
                                line: 22,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("      ")
                        e.appendChild(t, a)
                        var a = e.createElement("span")
                        e.setAttribute(a, "class", "label label-success")
                        var r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                    },
                    statements: [
                        ["inline", "format-number", [
                            ["get", "block.variance", ["loc", [null, [21, 56],
                                [21, 70]
                            ]], 0, 0, 0, 0]
                        ],
                            ["style", "percent"],
                            ["loc", [null, [21, 40],
                                [21, 88]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            l = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 22,
                                column: 4
                            },
                            end: {
                                line: 24,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("      ")
                        e.appendChild(t, a)
                        var a = e.createElement("span")
                        e.setAttribute(a, "class", "label label-info")
                        var r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                    },
                    statements: [
                        ["inline", "format-number", [
                            ["get", "block.variance", ["loc", [null, [23, 53],
                                [23, 67]
                            ]], 0, 0, 0, 0]
                        ],
                            ["style", "percent"],
                            ["loc", [null, [23, 37],
                                [23, 85]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            d = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 27,
                                column: 4
                            },
                            end: {
                                line: 29,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("    ")
                        e.appendChild(t, a)
                        var a = e.createElement("span")
                        e.setAttribute(a, "class", "label label-default")
                        var r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                    },
                    statements: [
                        ["content", "block.formatReward", ["loc", [null, [28, 38],
                            [28, 60]
                        ]], 0, 0, 0, 0]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            i = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 29,
                                    column: 4
                                },
                                end: {
                                    line: 31,
                                    column: 4
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("    ")
                            e.appendChild(t, a)
                            var a = e.createElement("span")
                            e.setAttribute(a, "class", "label label-primary")
                            var r = e.createComment("")
                            e.appendChild(a, r), e.appendChild(t, a)
                            var a = e.createTextNode("\n    ")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                        },
                        statements: [
                            ["content", "block.formatReward", ["loc", [null, [30, 38],
                                [30, 60]
                            ]], 0, 0, 0, 0]
                        ],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 29,
                                column: 4
                            },
                            end: {
                                line: 31,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createComment("")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), e.insertBoundary(t, null), r
                    },
                    statements: [
                        ["block", "if", [
                            ["get", "block.isOk", ["loc", [null, [29, 14],
                                [29, 24]
                            ]], 0, 0, 0, 0]
                        ],
                            [], 0, null, ["loc", [null, [29, 4],
                                [31, 4]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 34,
                        column: 0
                    }
                },
                moduleName: "open-ethereum-pool/templates/blocks/block.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("tr"),
                    r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("td"),
                    n = e.createTextNode("\n")
                e.appendChild(r, n)
                var n = e.createComment("")
                e.appendChild(r, n)
                var n = e.createTextNode("  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("td"),
                    n = e.createTextNode("\n")
                e.appendChild(r, n)
                var n = e.createComment("")
                e.appendChild(r, n)
                var n = e.createTextNode("  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("td"),
                    n = e.createComment("")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("td"),
                    n = e.createTextNode("\n")
                e.appendChild(r, n)
                var n = e.createComment("")
                e.appendChild(r, n)
                var n = e.createTextNode("  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("td"),
                    n = e.createTextNode("\n")
                e.appendChild(r, n)
                var n = e.createComment("")
                e.appendChild(r, n)
                var n = e.createTextNode("  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r), e.appendChild(t, a)
                var a = e.createTextNode("\n")
                return e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = new Array(5)
                return n[0] = e.createMorphAt(e.childAt(r, [1]), 1, 1), n[1] = e.createMorphAt(e.childAt(r, [3]), 1, 1), n[2] = e.createMorphAt(e.childAt(r, [5]), 0, 0), n[3] = e.createMorphAt(e.childAt(r, [7]), 1, 1), n[4] = e.createMorphAt(e.childAt(r, [9]), 1, 1), n
            },
            statements: [
                ["block", "if", [
                    ["get", "block.uncle", ["loc", [null, [3, 10],
                        [3, 21]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [3, 4],
                        [7, 11]
                    ]]
                ],
                ["block", "if", [
                    ["get", "block.uncle", ["loc", [null, [10, 10],
                        [10, 21]
                    ]], 0, 0, 0, 0]
                ],
                    [], 2, 3, ["loc", [null, [10, 4],
                        [16, 11]
                    ]]
                ],
                ["inline", "format-date-locale", [
                    ["get", "block.timestamp", ["loc", [null, [18, 27],
                        [18, 42]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [18, 6],
                        [18, 44]
                    ]], 0, 0
                ],
                ["block", "if", [
                    ["get", "block.isLucky", ["loc", [null, [20, 10],
                        [20, 23]
                    ]], 0, 0, 0, 0]
                ],
                    [], 4, 5, ["loc", [null, [20, 4],
                        [24, 11]
                    ]]
                ],
                ["block", "if", [
                    ["get", "block.uncle", ["loc", [null, [27, 10],
                        [27, 21]
                    ]], 0, 0, 0, 0]
                ],
                    [], 6, 7, ["loc", [null, [27, 4],
                        [31, 11]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t, a, r, n, l, d, i]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/blocks/immature", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 17,
                                column: 6
                            },
                            end: {
                                line: 19,
                                column: 6
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/immature.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("        ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["inline", "partial", ["blocks/block"],
                            [],
                            ["loc", [null, [18, 8],
                                [18, 34]
                            ]], 0, 0
                        ]
                    ],
                    locals: ["block"],
                    templates: []
                }
            }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 2,
                            column: 0
                        },
                        end: {
                            line: 23,
                            column: 0
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/blocks/immature.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createElement("h4"),
                        r = e.createTextNode("Immature Blocks")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n\n")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n  ")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n    ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n      ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n        ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Height")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n        ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Block Hash")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n        ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Time Found")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n        ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Variance")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n        ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Reward")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n      ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n    ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n    ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("    ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n  ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(e.childAt(t, [2, 1, 3]), 1, 1), r
                },
                statements: [
                    ["block", "each", [
                        ["get", "model.immature", ["loc", [null, [17, 14],
                            [17, 28]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 0, null, ["loc", [null, [17, 6],
                            [19, 15]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e]
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 23,
                                column: 0
                            },
                            end: {
                                line: 25,
                                column: 0
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/immature.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createElement("h3"),
                            r = e.createTextNode("No immature blocks yet")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 26,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/blocks/immature.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "style", "height:600px; overflow-y: scroll;")
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createComment("")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = new Array(1)
                return r[0] = e.createMorphAt(e.childAt(t, [0]), 1, 1), r
            },
            statements: [
                ["block", "if", [
                    ["get", "model.immature", ["loc", [null, [2, 6],
                        [2, 20]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [2, 0],
                        [25, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/blocks/index", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 19,
                                    column: 8
                                },
                                end: {
                                    line: 21,
                                    column: 8
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("        ")
                            e.appendChild(t, a)
                            var a = e.createElement("span")
                            e.setAttribute(a, "class", "label label-success")
                            var r = e.createComment("")
                            e.appendChild(a, r), e.appendChild(t, a)
                            var a = e.createTextNode("\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                        },
                        statements: [
                            ["inline", "format-number", [
                                ["get", "block.variance", ["loc", [null, [20, 58],
                                    [20, 72]
                                ]], 0, 0, 0, 0]
                            ],
                                ["style", "percent"],
                                ["loc", [null, [20, 42],
                                    [20, 90]
                                ]], 0, 0
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }(),
                    t = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 21,
                                        column: 8
                                    },
                                    end: {
                                        line: 23,
                                        column: 8
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("        ")
                                e.appendChild(t, a)
                                var a = e.createElement("span")
                                e.setAttribute(a, "class", "label label-info")
                                var r = e.createComment("")
                                e.appendChild(a, r), e.appendChild(t, a)
                                var a = e.createTextNode("\n")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function (e, t, a) {
                                var r = new Array(1)
                                return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                            },
                            statements: [
                                ["inline", "format-number", [
                                    ["get", "block.variance", ["loc", [null, [22, 55],
                                        [22, 69]
                                    ]], 0, 0, 0, 0]
                                ],
                                    ["style", "percent"],
                                    ["loc", [null, [22, 39],
                                        [22, 87]
                                    ]], 0, 0
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 14,
                                column: 4
                            },
                            end: {
                                line: 26,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("    ")
                        e.appendChild(t, a)
                        var a = e.createElement("tr"),
                            r = e.createTextNode("\n      ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createElement("a")
                        e.setAttribute(n, "rel", "nofollow"), e.setAttribute(n, "target", "_blank")
                        var l = e.createComment("")
                        e.appendChild(n, l), e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n      ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n      ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createTextNode("\n")
                        e.appendChild(r, n)
                        var n = e.createComment("")
                        e.appendChild(r, n)
                        var n = e.createTextNode("      ")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n    ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = e.childAt(r, [1, 0]),
                            l = new Array(4)
                        return l[0] = e.createAttrMorph(n, "href"), l[1] = e.createMorphAt(n, 0, 0), l[2] = e.createMorphAt(e.childAt(r, [3]), 0, 0), l[3] = e.createMorphAt(e.childAt(r, [5]), 1, 1), l
                    },
                    statements: [
                        ["attribute", "href", ["concat", [
                            ["get", "config.BlockAddress", ["loc", [null, [16, 21],
                                [16, 40]
                            ]], 0, 0, 0, 0],
                            ["get", "block.height", ["loc", [null, [16, 44],
                                [16, 56]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["inline", "format-number", [
                            ["get", "block.height", ["loc", [null, [16, 107],
                                [16, 119]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [16, 91],
                                [16, 121]
                            ]], 0, 0
                        ],
                        ["inline", "format-date-locale", [
                            ["get", "block.timestamp", ["loc", [null, [17, 31],
                                [17, 46]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [17, 10],
                                [17, 48]
                            ]], 0, 0
                        ],
                        ["block", "if", [
                            ["get", "block.isLucky", ["loc", [null, [19, 14],
                                [19, 27]
                            ]], 0, 0, 0, 0]
                        ],
                            [], 0, 1, ["loc", [null, [19, 8],
                                [23, 15]
                            ]]
                        ]
                    ],
                    locals: ["block"],
                    templates: [e, t]
                }
            }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 3,
                            column: 0
                        },
                        end: {
                            line: 30,
                            column: 0
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n  ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n    ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n      ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Height")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n      ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Time Found")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n      ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Variance")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n    ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n  ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n  ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("  ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(e.childAt(t, [0, 1, 3]), 1, 1), r
                },
                statements: [
                    ["block", "each", [
                        ["get", "model.candidates", ["loc", [null, [14, 12],
                            [14, 28]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 0, null, ["loc", [null, [14, 4],
                            [26, 13]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e]
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 30,
                                column: 0
                            },
                            end: {
                                line: 32,
                                column: 0
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createElement("h3"),
                            r = e.createTextNode("-")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }(),
            a = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 48,
                                    column: 4
                                },
                                end: {
                                    line: 50,
                                    column: 4
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                        },
                        isEmpty: !1,
                        arity: 1,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("      ")
                            e.appendChild(t, a)
                            var a = e.createComment("")
                            e.appendChild(t, a)
                            var a = e.createTextNode("\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(t, 1, 1, a), r
                        },
                        statements: [
                            ["inline", "partial", ["blocks/block"],
                                [],
                                ["loc", [null, [49, 6],
                                    [49, 32]
                                ]], 0, 0
                            ]
                        ],
                        locals: ["block"],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 35,
                                column: 0
                            },
                            end: {
                                line: 54,
                                column: 0
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createElement("div")
                        e.setAttribute(a, "class", "table-responsive")
                        var r = e.createTextNode("\n")
                        e.appendChild(a, r)
                        var r = e.createElement("table")
                        e.setAttribute(r, "class", "table table-condensed table-striped")
                        var n = e.createTextNode("\n  ")
                        e.appendChild(r, n)
                        var n = e.createElement("thead"),
                            l = e.createTextNode("\n    ")
                        e.appendChild(n, l)
                        var l = e.createElement("tr"),
                            d = e.createTextNode("\n      ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Height")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n      ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Block Hash")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n      ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Time Found")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n      ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Variance")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n      ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Reward")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n    ")
                        e.appendChild(l, d), e.appendChild(n, l)
                        var l = e.createTextNode("\n  ")
                        e.appendChild(n, l), e.appendChild(r, n)
                        var n = e.createTextNode("\n  ")
                        e.appendChild(r, n)
                        var n = e.createElement("tbody"),
                            l = e.createTextNode("\n")
                        e.appendChild(n, l)
                        var l = e.createComment("")
                        e.appendChild(n, l)
                        var l = e.createTextNode("  ")
                        e.appendChild(n, l), e.appendChild(r, n)
                        var n = e.createTextNode("\n")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(e.childAt(t, [0, 1, 3]), 1, 1), r
                    },
                    statements: [
                        ["block", "each", [
                            ["get", "model.immature", ["loc", [null, [48, 12],
                                [48, 26]
                            ]], 0, 0, 0, 0]
                        ],
                            [], 0, null, ["loc", [null, [48, 4],
                                [50, 13]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            r = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 54,
                                column: 0
                            },
                            end: {
                                line: 56,
                                column: 0
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createElement("h3"),
                            r = e.createTextNode("No Immature Blocks")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }(),
            n = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 73,
                                    column: 6
                                },
                                end: {
                                    line: 75,
                                    column: 6
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                        },
                        isEmpty: !1,
                        arity: 1,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("        ")
                            e.appendChild(t, a)
                            var a = e.createComment("")
                            e.appendChild(t, a)
                            var a = e.createTextNode("\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(t, 1, 1, a), r
                        },
                        statements: [
                            ["inline", "partial", ["blocks/block"],
                                [],
                                ["loc", [null, [74, 8],
                                    [74, 34]
                                ]], 0, 0
                            ]
                        ],
                        locals: ["block"],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 59,
                                column: 0
                            },
                            end: {
                                line: 79,
                                column: 0
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createElement("h4"),
                            r = e.createTextNode("Matured Blocks")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        e.appendChild(t, a)
                        var a = e.createElement("div")
                        e.setAttribute(a, "class", "table-responsive")
                        var r = e.createTextNode("\n  ")
                        e.appendChild(a, r)
                        var r = e.createElement("table")
                        e.setAttribute(r, "class", "table table-condensed table-striped")
                        var n = e.createTextNode("\n    ")
                        e.appendChild(r, n)
                        var n = e.createElement("thead"),
                            l = e.createTextNode("\n      ")
                        e.appendChild(n, l)
                        var l = e.createElement("tr"),
                            d = e.createTextNode("\n        ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Height")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n        ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Block Hash")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n        ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Time Found")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n        ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Variance")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n        ")
                        e.appendChild(l, d)
                        var d = e.createElement("th"),
                            i = e.createTextNode("Reward")
                        e.appendChild(d, i), e.appendChild(l, d)
                        var d = e.createTextNode("\n      ")
                        e.appendChild(l, d), e.appendChild(n, l)
                        var l = e.createTextNode("\n    ")
                        e.appendChild(n, l), e.appendChild(r, n)
                        var n = e.createTextNode("\n    ")
                        e.appendChild(r, n)
                        var n = e.createElement("tbody"),
                            l = e.createTextNode("\n")
                        e.appendChild(n, l)
                        var l = e.createComment("")
                        e.appendChild(n, l)
                        var l = e.createTextNode("    ")
                        e.appendChild(n, l), e.appendChild(r, n)
                        var n = e.createTextNode("\n  ")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(e.childAt(t, [2, 1, 3]), 1, 1), r
                    },
                    statements: [
                        ["block", "each", [
                            ["get", "model.matured", ["loc", [null, [73, 14],
                                [73, 27]
                            ]], 0, 0, 0, 0]
                        ],
                            [], 0, null, ["loc", [null, [73, 6],
                                [75, 15]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            l = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 79,
                                column: 0
                            },
                            end: {
                                line: 81,
                                column: 0
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createElement("h3"),
                            r = e.createTextNode("No matured blocks yet")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 83,
                        column: 0
                    }
                },
                moduleName: "open-ethereum-pool/templates/blocks/index.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "style", "height:600px; overflow-y: scroll;")
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createElement("h4"),
                    n = e.createTextNode("Recently Found Blocks:")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createComment("")
                e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createElement("h4"),
                    n = e.createTextNode("Immature Blocks:")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createComment("")
                e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createElement("h4"),
                    n = e.createTextNode("Matured Blocks:")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createComment("")
                e.appendChild(a, r), e.appendChild(t, a)
                var a = e.createTextNode("\n")
                return e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = new Array(3)
                return n[0] = e.createMorphAt(r, 3, 3), n[1] = e.createMorphAt(r, 7, 7), n[2] = e.createMorphAt(r, 11, 11), n
            },
            statements: [
                ["block", "if", [
                    ["get", "model.candidates", ["loc", [null, [3, 6],
                        [3, 22]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [3, 0],
                        [32, 7]
                    ]]
                ],
                ["block", "if", [
                    ["get", "model.immature", ["loc", [null, [35, 6],
                        [35, 20]
                    ]], 0, 0, 0, 0]
                ],
                    [], 2, 3, ["loc", [null, [35, 0],
                        [56, 7]
                    ]]
                ],
                ["block", "if", [
                    ["get", "model.matured", ["loc", [null, [59, 6],
                        [59, 19]
                    ]], 0, 0, 0, 0]
                ],
                    [], 4, 5, ["loc", [null, [59, 0],
                        [81, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t, a, r, n, l]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/blocks/mature", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 16,
                                column: 4
                            },
                            end: {
                                line: 18,
                                column: 4
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/mature.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("      ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["inline", "partial", ["blocks/block"],
                            [],
                            ["loc", [null, [17, 6],
                                [17, 32]
                            ]], 0, 0
                        ]
                    ],
                    locals: ["block"],
                    templates: []
                }
            }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 2,
                            column: 0
                        },
                        end: {
                            line: 22,
                            column: 0
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/blocks/mature.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createElement("h4"),
                        r = e.createTextNode("Matured Blocks")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n  ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n    ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n      ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Height")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n      ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Block Hash")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n      ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Time Found")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n      ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Variance")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n      ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Reward")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n    ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n  ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n  ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("  ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(e.childAt(t, [2, 1, 3]), 1, 1), r
                },
                statements: [
                    ["block", "each", [
                        ["get", "model.matured", ["loc", [null, [16, 12],
                            [16, 25]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 0, null, ["loc", [null, [16, 4],
                            [18, 13]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e]
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 22,
                                column: 0
                            },
                            end: {
                                line: 24,
                                column: 0
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/mature.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createElement("h3"),
                            r = e.createTextNode("No matured blocks yet")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 25,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/blocks/mature.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "style", "height:600px; overflow-y: scroll;")
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createComment("")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = new Array(1)
                return r[0] = e.createMorphAt(e.childAt(t, [0]), 1, 1), r
            },
            statements: [
                ["block", "if", [
                    ["get", "model.matured", ["loc", [null, [2, 6],
                        [2, 19]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [2, 0],
                        [24, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/blocks/pending", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 19,
                                    column: 10
                                },
                                end: {
                                    line: 21,
                                    column: 10
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/blocks/pending.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("          ")
                            e.appendChild(t, a)
                            var a = e.createElement("span")
                            e.setAttribute(a, "class", "label label-success")
                            var r = e.createComment("")
                            e.appendChild(a, r), e.appendChild(t, a)
                            var a = e.createTextNode("\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                        },
                        statements: [
                            ["inline", "format-number", [
                                ["get", "block.variance", ["loc", [null, [20, 60],
                                    [20, 74]
                                ]], 0, 0, 0, 0]
                            ],
                                ["style", "percent"],
                                ["loc", [null, [20, 44],
                                    [20, 92]
                                ]], 0, 0
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }(),
                    t = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 21,
                                        column: 10
                                    },
                                    end: {
                                        line: 23,
                                        column: 10
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/blocks/pending.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("          ")
                                e.appendChild(t, a)
                                var a = e.createElement("span")
                                e.setAttribute(a, "class", "label label-info")
                                var r = e.createComment("")
                                e.appendChild(a, r), e.appendChild(t, a)
                                var a = e.createTextNode("\n")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function (e, t, a) {
                                var r = new Array(1)
                                return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r
                            },
                            statements: [
                                ["inline", "format-number", [
                                    ["get", "block.variance", ["loc", [null, [22, 57],
                                        [22, 71]
                                    ]], 0, 0, 0, 0]
                                ],
                                    ["style", "percent"],
                                    ["loc", [null, [22, 41],
                                        [22, 89]
                                    ]], 0, 0
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 14,
                                column: 6
                            },
                            end: {
                                line: 26,
                                column: 6
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/pending.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("      ")
                        e.appendChild(t, a)
                        var a = e.createElement("tr"),
                            r = e.createTextNode("\n        ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createElement("a")
                        e.setAttribute(n, "rel", "nofollow"), e.setAttribute(n, "target", "_blank")
                        var l = e.createComment("")
                        e.appendChild(n, l), e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n        ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n        ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createTextNode("\n")
                        e.appendChild(r, n)
                        var n = e.createComment("")
                        e.appendChild(r, n)
                        var n = e.createTextNode("        ")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n      ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = e.childAt(r, [1, 0]),
                            l = new Array(4)
                        return l[0] = e.createAttrMorph(n, "href"), l[1] = e.createMorphAt(n, 0, 0), l[2] = e.createMorphAt(e.childAt(r, [3]), 0, 0), l[3] = e.createMorphAt(e.childAt(r, [5]), 1, 1), l
                    },
                    statements: [
                        ["attribute", "href", ["concat", [
                            ["get", "config.BlockAddress", ["loc", [null, [16, 23],
                                [16, 42]
                            ]], 0, 0, 0, 0],
                            ["get", "block.height", ["loc", [null, [16, 46],
                                [16, 58]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["inline", "format-number", [
                            ["get", "block.height", ["loc", [null, [16, 109],
                                [16, 121]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [16, 93],
                                [16, 123]
                            ]], 0, 0
                        ],
                        ["inline", "format-date-locale", [
                            ["get", "block.timestamp", ["loc", [null, [17, 33],
                                [17, 48]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [17, 12],
                                [17, 50]
                            ]], 0, 0
                        ],
                        ["block", "if", [
                            ["get", "block.isLucky", ["loc", [null, [19, 16],
                                [19, 29]
                            ]], 0, 0, 0, 0]
                        ],
                            [], 0, 1, ["loc", [null, [19, 10],
                                [23, 17]
                            ]]
                        ]
                    ],
                    locals: ["block"],
                    templates: [e, t]
                }
            }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 2,
                            column: 0
                        },
                        end: {
                            line: 30,
                            column: 0
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/blocks/pending.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createElement("h4"),
                        r = e.createTextNode("Recently Found Blocks")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n  ")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n    ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n      ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n        ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Height")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n        ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Time Found")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n        ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Variance")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n      ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n    ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n    ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("    ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n  ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(e.childAt(t, [2, 1, 3]), 1, 1), r
                },
                statements: [
                    ["block", "each", [
                        ["get", "model.candidates", ["loc", [null, [14, 14],
                            [14, 30]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 0, null, ["loc", [null, [14, 6],
                            [26, 15]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e]
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 30,
                                column: 0
                            },
                            end: {
                                line: 32,
                                column: 0
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/blocks/pending.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createElement("h3"),
                            r = e.createTextNode("No new blocks yet")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 33,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/blocks/pending.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "style", "height:600px; overflow-y: scroll;")
                var r = e.createTextNode("\n")
                e.appendChild(a, r)
                var r = e.createComment("")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = new Array(1)
                return r[0] = e.createMorphAt(e.childAt(t, [0]), 1, 1), r
            },
            statements: [
                ["block", "if", [
                    ["get", "model.candidates", ["loc", [null, [2, 6],
                        [2, 22]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [2, 0],
                        [32, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/components/active-li", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 2,
                        column: 0
                    }
                },
                moduleName: "open-ethereum-pool/templates/components/active-li.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createComment("")
                e.appendChild(t, a)
                var a = e.createTextNode("\n")
                return e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = new Array(1)
                return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), r
            },
            statements: [
                ["content", "yield", ["loc", [null, [1, 0],
                    [1, 9]
                ]], 0, 0, 0, 0]
            ],
            locals: [],
            templates: []
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/exchange", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 28,
                            column: 20
                        },
                        end: {
                            line: 119,
                            column: 20
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/exchange.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("                   \n                    ")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n                        ")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-striped table-bordered")
                    var n = e.createTextNode("\n                            ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th")
                    e.setAttribute(d, "class", "text-center")
                    var i = e.createTextNode("LEGEND")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th")
                    e.setAttribute(d, "class", "text-center")
                    var i = e.createTextNode("DATA")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("   \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n                            ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("                              \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("COIN NAME")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("COIN RANK")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("COIN SYMBOL")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("PRICE IN USD")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("PRICE IN INR")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("PRICE IN BTC")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("TOTAL SUPPLY")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i)
                    var i = e.createTextNode(" ETH")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("MARKET CAPITAL IN INR")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                             \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("CHANGE IN 1 HOUR")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i)
                    var i = e.createTextNode(" %")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("CHANGE IN 24 HOURS")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i)
                    var i = e.createTextNode(" %")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                  ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("CHANGE IN 7 DAYS")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i)
                    var i = e.createTextNode(" %")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                \n                                \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("COIN NAME")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                                                              \n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr")
                    e.setAttribute(l, "class", "")
                    var d = e.createTextNode("                         \n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createTextNode("UPDATED ON")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("td"),
                        i = e.createComment("")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("                                    \n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                              \n                                \n                               \n                            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n                        ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n                    ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = e.childAt(t, [1, 1, 3]),
                        n = new Array(13)
                    return n[0] = e.createMorphAt(e.childAt(r, [1, 3]), 0, 0), n[1] = e.createMorphAt(e.childAt(r, [3, 3]), 0, 0), n[2] = e.createMorphAt(e.childAt(r, [5, 3]), 0, 0), n[3] = e.createMorphAt(e.childAt(r, [7, 3]), 0, 0), n[4] = e.createMorphAt(e.childAt(r, [9, 3]), 0, 0), n[5] = e.createMorphAt(e.childAt(r, [11, 3]), 0, 0), n[6] = e.createMorphAt(e.childAt(r, [13, 3]), 0, 0), n[7] = e.createMorphAt(e.childAt(r, [15, 3]), 0, 0), n[8] = e.createMorphAt(e.childAt(r, [17, 3]), 0, 0), n[9] = e.createMorphAt(e.childAt(r, [19, 3]), 0, 0), n[10] = e.createMorphAt(e.childAt(r, [21, 3]), 0, 0), n[11] = e.createMorphAt(e.childAt(r, [23, 3]), 0, 0), n[12] = e.createMorphAt(e.childAt(r, [25, 3]), 0, 0), n
                },
                statements: [
                    ["content", "model.exchangedata.id", ["loc", [null, [42, 40],
                        [42, 65]
                    ]], 0, 0, 0, 0],
                    ["content", "model.exchangedata.rank", ["loc", [null, [48, 40],
                        [48, 67]
                    ]], 0, 0, 0, 0],
                    ["content", "model.exchangedata.symbol", ["loc", [null, [54, 40],
                        [54, 69]
                    ]], 0, 0, 0, 0],
                    ["inline", "format-number", [
                        ["get", "model.exchangedata.price_usd", ["loc", [null, [60, 58],
                            [60, 86]
                        ]], 0, 0, 0, 0]
                    ],
                        ["style", "currency", "currency", "USD"],
                        ["loc", [null, [60, 40],
                            [60, 120]
                        ]], 0, 0
                    ],
                    ["inline", "format-number", [
                        ["get", "model.exchangedata.price_inr", ["loc", [null, [66, 58],
                            [66, 86]
                        ]], 0, 0, 0, 0]
                    ],
                        ["style", "currency", "currency", "INR"],
                        ["loc", [null, [66, 40],
                            [66, 120]
                        ]], 0, 0
                    ],
                    ["inline", "format-number", [
                        ["get", "model.exchangedata.price_btc", ["loc", [null, [72, 58],
                            [72, 86]
                        ]], 0, 0, 0, 0]
                    ],
                        ["style", "currency", "currency", "BTC"],
                        ["loc", [null, [72, 40],
                            [72, 120]
                        ]], 0, 0
                    ],
                    ["content", "model.exchangedata.total_supply", ["loc", [null, [77, 40],
                        [77, 75]
                    ]], 0, 0, 0, 0],
                    ["inline", "format-number", [
                        ["get", "model.exchangedata.market_cap_inr", ["loc", [null, [83, 58],
                            [83, 91]
                        ]], 0, 0, 0, 0]
                    ],
                        ["style", "currency", "currency", "INR"],
                        ["loc", [null, [83, 40],
                            [83, 125]
                        ]], 0, 0
                    ],
                    ["content", "model.exchangedata.percent_change_1h", ["loc", [null, [89, 40],
                        [89, 82]
                    ]], 0, 0, 0, 0],
                    ["content", "model.exchangedata.percent_change_24h", ["loc", [null, [95, 40],
                        [95, 82]
                    ]], 0, 0, 0, 0],
                    ["content", "model.exchangedata.percent_change_7d", ["loc", [null, [100, 40],
                        [100, 82]
                    ]], 0, 0, 0, 0],
                    ["content", "model.exchangedata.id", ["loc", [null, [106, 40],
                        [106, 65]
                    ]], 0, 0, 0, 0],
                    ["inline", "format-date-locale", [
                        ["get", "model.exchangedata.last_updated", ["loc", [null, [111, 61],
                            [111, 92]
                        ]], 0, 0, 0, 0]
                    ],
                        [],
                        ["loc", [null, [111, 40],
                            [111, 95]
                        ]], 0, 0
                    ]
                ],
                locals: [],
                templates: []
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 119,
                                column: 20
                            },
                            end: {
                                line: 121,
                                column: 20
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/exchange.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                    ")
                        e.appendChild(t, a)
                        var a = e.createElement("h3"),
                            r = e.createTextNode("No Data")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 126,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/exchange.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "id", "page-wrapper")
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row align-middle"), e.setAttribute(r, "style", "padding-top:50px;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-5")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "class", "text-blue"), e.setAttribute(l, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px; ")
                var d = e.createTextNode("EXCHANGE STATISTICS")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-7"), e.setAttribute(n, "style", "margin-bottom: 20px;")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Data are updated once in 30 Minutes    ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("                                   \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("br")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Data are fetched from coinmarketcap.com ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("br")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            \n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-12 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("  \n\n\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-12")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel panel-info")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-money fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" EXCHANGE DATA                    \n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-body")
                var i = e.createTextNode("\n")
                e.appendChild(d, i)
                var i = e.createComment("")
                e.appendChild(d, i)
                var i = e.createTextNode("                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = new Array(1)
                return r[0] = e.createMorphAt(e.childAt(t, [0, 3, 1, 1, 3]), 1, 1), r
            },
            statements: [
                ["block", "if", [
                    ["get", "model.exchangedata", ["loc", [null, [28, 26],
                        [28, 44]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [28, 20],
                        [121, 27]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/help", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 24,
                        column: 0
                    }
                },
                moduleName: "open-ethereum-pool/templates/help.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "class", "container")
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "page-header")
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n)
                var n = e.createElement("h1"),
                    l = e.createTextNode("How To Mine")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("p")
                e.setAttribute(r, "class", "lead")
                var n = e.createTextNode("In order to mine on this pool you need to have an\n    ")
                e.appendChild(r, n)
                var n = e.createElement("a")
                e.setAttribute(n, "href", "https://github.com/ethereum/webthree-umbrella/releases"), e.setAttribute(n, "rel", "nofollow"), e.setAttribute(n, "target", "_blank")
                var l = e.createTextNode("ethminer")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode(" installation\n    pointed to")
                e.appendChild(r, n)
                var n = e.createElement("br")
                e.appendChild(r, n)
                var n = e.createElement("code"),
                    l = e.createComment("")
                e.appendChild(n, l)
                var l = e.createTextNode(":")
                e.appendChild(n, l)
                var l = e.createComment("")
                e.appendChild(n, l)
                var l = e.createTextNode("/YOUR_ETH_ADDRESS/RIG_ID")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n  ")
                e.appendChild(a, r)
                var r = e.createElement("h3"),
                    n = e.createTextNode("Personal payout threshold")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("p"),
                    n = e.createTextNode("\n   To set the payout threshold level you have to ")
                e.appendChild(r, n)
                var n = e.createElement("a")
                e.setAttribute(n, "href", "/#/about")
                var l = e.createTextNode("contact")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode(" me with our desire amount, account id and miner ip address.\n  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n  ")
                e.appendChild(a, r)
                var r = e.createElement("h4"),
                    n = e.createTextNode("Stratum Mining with Stratum Proxy for Ethereum")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("p")
                e.setAttribute(r, "class", "lead")
                var n = e.createTextNode("Grab proxy from ")
                e.appendChild(r, n)
                var n = e.createElement("a")
                e.setAttribute(n, "href", "https://github.com/Atrides/eth-proxy"), e.setAttribute(n, "re", "nofollow"), e.setAttribute(n, "target", "_blank")
                var l = e.createTextNode("eth-proxy GitHub repo")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode(".")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("p")
                e.setAttribute(r, "class", "lead")
                var n = e.createTextNode("Edit ")
                e.appendChild(r, n)
                var n = e.createElement("code"),
                    l = e.createTextNode("eth-proxy.conf")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode(" and specify our pool's ")
                e.appendChild(r, n)
                var n = e.createElement("code"),
                    l = e.createTextNode("HOST: ")
                e.appendChild(n, l)
                var l = e.createComment("")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode(", ")
                e.appendChild(r, n)
                var n = e.createElement("code"),
                    l = e.createTextNode("PORT: ")
                e.appendChild(n, l)
                var l = e.createComment("")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode(" and your ")
                e.appendChild(r, n)
                var n = e.createElement("code"),
                    l = e.createTextNode("WALLET")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode(".")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n  ")
                e.appendChild(a, r)
                var r = e.createElement("h3"),
                    n = e.createTextNode("PPLNS block reward")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("p"),
                    n = e.createTextNode("\n   There is no way to cheat the pool.\n  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r), e.appendChild(t, a)
                var a = e.createTextNode("\n")
                return e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = e.childAt(r, [3, 4]),
                    l = e.childAt(r, [13]),
                    d = new Array(4)
                return d[0] = e.createMorphAt(n, 0, 0), d[1] = e.createMorphAt(n, 2, 2), d[2] = e.createMorphAt(e.childAt(l, [3]), 1, 1), d[3] = e.createMorphAt(e.childAt(l, [5]), 1, 1), d
            },
            statements: [
                ["content", "config.HttpHost", ["loc", [null, [7, 25],
                    [7, 44]
                ]], 0, 0, 0, 0],
                ["content", "config.HttpPort", ["loc", [null, [7, 45],
                    [7, 64]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumHost", ["loc", [null, [17, 86],
                    [17, 108]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumPort", ["loc", [null, [17, 129],
                    [17, 151]
                ]], 0, 0, 0, 0]
            ],
            locals: [],
            templates: []
        }
    }())
    e.default = t
})
define("open-ethereum-pool/templates/index", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 26,
                            column: 16
                        },
                        end: {
                            line: 32,
                            column: 16
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/index.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("                    ")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "panel-footer")
                    var r = e.createTextNode("\n                        ")
                    e.appendChild(a, r)
                    var r = e.createElement("span")
                    e.setAttribute(r, "class", "pull-left")
                    var n = e.createTextNode("View All Miners")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n                        ")
                    e.appendChild(a, r)
                    var r = e.createElement("span")
                    e.setAttribute(r, "class", "pull-right")
                    var n = e.createElement("i")
                    e.setAttribute(n, "class", "fa fa-arrow-circle-right"), e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n                        ")
                    e.appendChild(a, r)
                    var r = e.createElement("div")
                    e.setAttribute(r, "class", "clearfix"), e.appendChild(a, r)
                    var r = e.createTextNode("\n                    ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function () {
                    return []
                },
                statements: [],
                locals: [],
                templates: []
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 48,
                                column: 16
                            },
                            end: {
                                line: 54,
                                column: 16
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                    ")
                        e.appendChild(t, a)
                        var a = e.createElement("div")
                        e.setAttribute(a, "class", "panel-footer")
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("span")
                        e.setAttribute(r, "class", "pull-left")
                        var n = e.createTextNode("View All Active Miners")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("span")
                        e.setAttribute(r, "class", "pull-right")
                        var n = e.createElement("i")
                        e.setAttribute(n, "class", "fa fa-arrow-circle-right"), e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("div")
                        e.setAttribute(r, "class", "clearfix"), e.appendChild(a, r)
                        var r = e.createTextNode("\n                    ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }(),
            a = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 65,
                                column: 24
                            },
                            end: {
                                line: 67,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("\n                        ")
                        e.appendChild(t, a)
                        var a = e.createElement("i")
                        e.setAttribute(a, "class", "fa fa-clock-o"), e.appendChild(t, a)
                        var a = e.createTextNode(" Last Block : ")
                        e.appendChild(t, a)
                        var a = e.createElement("span"),
                            r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(e.childAt(t, [3]), 0, 0), r
                    },
                    statements: [
                        ["inline", "format-relative", [
                            ["subexpr", "seconds-to-ms", [
                                ["get", "stats.model.stats.lastBlockFound", ["loc", [null, [66, 106],
                                    [66, 138]
                                ]], 0, 0, 0, 0]
                            ],
                                [],
                                ["loc", [null, [66, 91],
                                    [66, 139]
                                ]], 0, 0
                            ]
                        ],
                            [],
                            ["loc", [null, [66, 73],
                                [66, 141]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            r = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 67,
                                column: 24
                            },
                            end: {
                                line: 69,
                                column: 24
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                        NO NEW BLOCKS\n                        ")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }(),
            n = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 73,
                                column: 16
                            },
                            end: {
                                line: 79,
                                column: 16
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                    ")
                        e.appendChild(t, a)
                        var a = e.createElement("div")
                        e.setAttribute(a, "class", "panel-footer")
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("span")
                        e.setAttribute(r, "class", "pull-left")
                        var n = e.createTextNode("View Pool Blocks")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("span")
                        e.setAttribute(r, "class", "pull-right")
                        var n = e.createElement("i")
                        e.setAttribute(n, "class", "fa fa-arrow-circle-right"), e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("div")
                        e.setAttribute(r, "class", "clearfix"), e.appendChild(a, r)
                        var r = e.createTextNode("\n                    ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }(),
            l = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 88,
                                column: 28
                            },
                            end: {
                                line: 90,
                                column: 28
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                            ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["inline", "format-number", [
                            ["get", "stats.model.exchangedata.price_usd", ["loc", [null, [89, 45],
                                [89, 79]
                            ]], 0, 0, 0, 0]
                        ],
                            ["style", "currency", "currency", "USD"],
                            ["loc", [null, [89, 28],
                                [89, 113]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            d = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 90,
                                column: 28
                            },
                            end: {
                                line: 92,
                                column: 28
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                            ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("                            \n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["inline", "format-number", [
                            ["get", "stats.model.exchangedata.price_inr", ["loc", [null, [91, 45],
                                [91, 79]
                            ]], 0, 0, 0, 0]
                        ],
                            ["style", "currency", "currency", "INR"],
                            ["loc", [null, [91, 28],
                                [91, 113]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            i = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 100,
                                column: 28
                            },
                            end: {
                                line: 102,
                                column: 28
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                            ")
                        e.appendChild(t, a)
                        var a = e.createElement("i")
                        e.setAttribute(a, "class", "fa fa-usd"), e.appendChild(t, a)
                        var a = e.createTextNode(" \n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }(),
            o = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 102,
                                column: 28
                            },
                            end: {
                                line: 104,
                                column: 28
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                            ")
                        e.appendChild(t, a)
                        var a = e.createElement("i")
                        e.setAttribute(a, "class", "fa fa-inr"), e.appendChild(t, a)
                        var a = e.createTextNode("                         \n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }(),
            p = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 106,
                                column: 15
                            },
                            end: {
                                line: 112,
                                column: 17
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                    ")
                        e.appendChild(t, a)
                        var a = e.createElement("div")
                        e.setAttribute(a, "class", "panel-footer")
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("span")
                        e.setAttribute(r, "class", "pull-left")
                        var n = e.createTextNode("View Exchange Data")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("span")
                        e.setAttribute(r, "class", "pull-right")
                        var n = e.createElement("i")
                        e.setAttribute(n, "class", "fa fa-arrow-circle-right"), e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                        ")
                        e.appendChild(a, r)
                        var r = e.createElement("div")
                        e.setAttribute(r, "class", "clearfix"), e.appendChild(a, r)
                        var r = e.createTextNode("\n                    ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }(),
            c = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 198,
                                column: 28
                            },
                            end: {
                                line: 200,
                                column: 28
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                            ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["inline", "format-number", [
                            ["get", "stats.model.exchangedata.price_usd", ["loc", [null, [199, 45],
                                [199, 79]
                            ]], 0, 0, 0, 0]
                        ],
                            ["style", "currency", "currency", "USD"],
                            ["loc", [null, [199, 28],
                                [199, 113]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            s = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 200,
                                column: 28
                            },
                            end: {
                                line: 202,
                                column: 28
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                            ")
                        e.appendChild(t, a)
                        var a = e.createComment("")
                        e.appendChild(t, a)
                        var a = e.createTextNode("                            \n                            ")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = new Array(1)
                        return r[0] = e.createMorphAt(t, 1, 1, a), r
                    },
                    statements: [
                        ["inline", "format-number", [
                            ["get", "stats.model.exchangedata.price_inr", ["loc", [null, [201, 45],
                                [201, 79]
                            ]], 0, 0, 0, 0]
                        ],
                            ["style", "currency", "currency", "INR"],
                            ["loc", [null, [201, 28],
                                [201, 113]
                            ]], 0, 0
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            h = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 220,
                                column: 20
                            },
                            end: {
                                line: 222,
                                column: 20
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/index.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                    ")
                        e.appendChild(t, a)
                        var a = e.createElement("a")
                        e.setAttribute(a, "class", "twitter-timeline")
                        var r = e.createTextNode("Tweets by ")
                        e.appendChild(a, r)
                        var r = e.createComment("")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = new Array(2)
                        return n[0] = e.createAttrMorph(r, "href"), n[1] = e.createMorphAt(r, 1, 1), n
                    },
                    statements: [
                        ["attribute", "href", ["concat", [
                            ["get", "config.TwitterURL", ["loc", [null, [221, 56],
                                [221, 73]
                            ]], 0, 0, 0, 0],
                            ["get", "config.TwitterHash", ["loc", [null, [221, 77],
                                [221, 95]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["content", "config.TwitterHash", ["loc", [null, [221, 109],
                            [221, 131]
                        ]], 0, 0, 0, 0]
                    ],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 622,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/index.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "id", "page-wrapper")
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row"), e.setAttribute(r, "style", "padding-top:50px;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-4")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "class", "text-blue"), e.setAttribute(l, "style", "font-family: 'Fredericka the Great'; font-size: 35px;margin-top:50px;")
                var d = e.createTextNode("POOL STATISTICS")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-8"), e.setAttribute(n, "style", "margin-bottom: 20px;")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Lobster; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("Welcome to high performance ")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode(" mining pool. This pool provides higher profit in comparison to other popular pools for Miners who are not hopping the pool by employing Dynamic realtime PPLNS payments mode. Payouts are processed ")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode(".\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-12 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createComment(" /.row ")
                e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row")
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-3 col-md-6")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-blue")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode(" POOL HASHRATE   ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-dashboard"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode("            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-3 col-md-6")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-green")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode(" ACTIVE MINERS   ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-users"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode("            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-3 col-md-6")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-yellow")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode(" ")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode("    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-cubes"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode("            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-3 col-md-6")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-red")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("                           \n                            \n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode(" ")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode("  \n")
                e.appendChild(d, i)
                var i = e.createComment("")
                e.appendChild(d, i)
                var i = e.createTextNode("                            ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("  \n")
                e.appendChild(l, d)
                var d = e.createComment("")
                e.appendChild(l, d)
                var d = e.createTextNode("            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createComment(" /.row ")
                e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row")
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-4")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel panel-info")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-info-circle fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" Information Panel\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-heading ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "list-group")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-trophy fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Rewards System\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("span")
                e.setAttribute(p, "class", "label label-success")
                var c = e.createElement("em"),
                    s = e.createTextNode("Dynamic PPL'N'S")
                e.appendChild(c, s), e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createElement("a")
                e.setAttribute(p, "href", "http://give-me-coins.com/support/faq/what-is-pplns/"), e.setAttribute(p, "target", "_blank")
                var c = e.createElement("i")
                e.setAttribute(c, "class", "fa fa-question fa-fw"), e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                     ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-thermometer-full fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" 'N' Value for the current round\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("span")
                e.setAttribute(p, "class", "label label-success")
                var c = e.createElement("em"),
                    s = e.createComment("")
                e.appendChild(c, s), e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("                           \n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                     ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-thermometer-empty fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" 'N' shares buffered\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("span")
                e.setAttribute(p, "class", "label label-success")
                var c = e.createElement("em"),
                    s = e.createComment("")
                e.appendChild(c, s), e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("                           \n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    \n")
                e.appendChild(d, i)
                var i = e.createComment('                     <a class="list-group-item">\n                        <div class="progress" style="margin:0px;height:20px;">\n                            <span class="text-center text-aqua bold" style="margin-top:10px;">\n                        <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuemax="1585" style="width:60%">    \n                            \n                        </div></span>\n                         \n                    </div>\n                    </a>')
                e.appendChild(d, i)
                var i = e.createTextNode("\n                    \n                    \n                    ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-money fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Pool Fee\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                     ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-sitemap fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Share Difficulty\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("span")
                e.setAttribute(p, "class", "label label-success")
                var c = e.createElement("em"),
                    s = e.createComment("")
                e.appendChild(c, s), e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-unlock-alt fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Network Difficulty\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-dashboard fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Network Hashrate\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-sort-amount-asc fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Blockchain Height\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-clock-o fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Current Round Variance\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-ticket fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Payment Threshold\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c)
                var c = e.createTextNode(" ")
                e.appendChild(p, c)
                var c = e.createComment("")
                e.appendChild(p, c)
                var c = e.createTextNode(" ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-money fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" Payout\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("a")
                e.setAttribute(i, "class", "list-group-item")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-credit-card-alt fa-fw"), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode("-")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "pull-right text-muted small text-blue")
                var p = e.createTextNode("≅ ")
                e.appendChild(o, p)
                var p = e.createElement("em"),
                    c = e.createTextNode("\n")
                e.appendChild(p, c)
                var c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createElement("br")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "text-muted small text-blue")
                var p = e.createElement("em"),
                    c = e.createComment("")
                e.appendChild(p, c), e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.list-group ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-body ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "chat-panel panel panel-success")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-twitter fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" UPDATES\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "btn-group pull-right")
                var o = e.createTextNode("\n\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-heading ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-body")
                var i = e.createTextNode("\n")
                e.appendChild(d, i)
                var i = e.createComment("")
                e.appendChild(d, i)
                var i = e.createTextNode("                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-body ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createComment(" /.panel-footer ")
                e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createComment(" /.panel .chat-panel ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-4 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-8")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel panel-success")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-user fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" MINER STATUS\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-body")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "input-group")
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createComment("")
                e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("span")
                e.setAttribute(o, "class", "input-group-btn")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createElement("button")
                e.setAttribute(p, "class", "btn btn-primary"), e.setAttribute(p, "type", "button")
                var c = e.createTextNode("\n                                    ")
                e.appendChild(p, c)
                var c = e.createElement("span")
                e.setAttribute(c, "style", "display: inline;")
                var s = e.createElement("i")
                e.setAttribute(s, "class", "fa fa-search"), e.appendChild(c, s)
                var s = e.createTextNode(" SEARCH")
                e.appendChild(c, s), e.appendChild(p, c)
                var c = e.createTextNode("\n                            ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-8 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-8")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel panel-warning")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-question-circle-o fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" SETUP GUIDE\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-body")
                var i = e.createTextNode("\n\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("ul")
                e.setAttribute(i, "class", "nav nav-tabs"), e.setAttribute(i, "id", "myTab")
                var o = e.createTextNode("\n                        \n                        ")
                e.appendChild(i, o)
                var o = e.createElement("li")
                e.setAttribute(o, "class", "active")
                var p = e.createElement("a")
                e.setAttribute(p, "data-target", "#general"), e.setAttribute(p, "data-toggle", "tab")
                var c = e.createElement("i")
                e.setAttribute(c, "class", "fa fa-info fa-fw"), e.appendChild(p, c)
                var c = e.createTextNode(" INFORMATION")
                e.appendChild(p, c), e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("li"),
                    p = e.createElement("a")
                e.setAttribute(p, "data-target", "#rent"), e.setAttribute(p, "data-toggle", "tab")
                var c = e.createElement("i")
                e.setAttribute(c, "class", "fa fa-credit-card-alt fa-fw"), e.appendChild(p, c)
                var c = e.createTextNode(" RENTING")
                e.appendChild(p, c), e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("li"),
                    p = e.createElement("a")
                e.setAttribute(p, "data-target", "#miningsoftware"), e.setAttribute(p, "data-toggle", "tab")
                var c = e.createElement("i")
                e.setAttribute(c, "class", "fa fa-download fa-fw"), e.appendChild(p, c)
                var c = e.createTextNode("MINING SOFTWARE")
                e.appendChild(p, c), e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("li"),
                    p = e.createElement("a")
                e.setAttribute(p, "data-target", "#stratumproxy"), e.setAttribute(p, "data-toggle", "tab")
                var c = e.createElement("i")
                e.setAttribute(c, "class", "fa fa-download fa-fw"), e.appendChild(p, c)
                var c = e.createTextNode("STRATUM PROXY")
                e.appendChild(p, c), e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("li"),
                    p = e.createElement("a")
                e.setAttribute(p, "data-target", "#genoils"), e.setAttribute(p, "data-toggle", "tab")
                var c = e.createElement("i")
                e.setAttribute(c, "class", "fa fa-download fa-fw"), e.appendChild(p, c)
                var c = e.createTextNode("CPP VERSION")
                e.appendChild(p, c), e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "tab-content")
                var o = e.createTextNode("\n\n                         ")
                e.appendChild(i, o)
                var o = e.createElement("div")
                e.setAttribute(o, "class", "tab-pane "), e.setAttribute(o, "id", "rent")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createElement("div")
                e.setAttribute(p, "class", "col-lg-12")
                var c = e.createTextNode("\n                                ")
                e.appendChild(p, c)
                var c = e.createElement("div")
                e.setAttribute(c, "class", "panel")
                var s = e.createTextNode("\n                                    ")
                e.appendChild(c, s)
                var s = e.createElement("div")
                e.setAttribute(s, "class", "panel-body")
                var h = e.createTextNode("\n                                      ")
                e.appendChild(s, h)
                var h = e.createElement("div")
                e.setAttribute(h, "class", "panel panel-success")
                var u = e.createTextNode("\n                                        ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", "panel-heading")
                var m = e.createTextNode(" ")
                e.appendChild(u, m)
                var m = e.createElement("i")
                e.setAttribute(m, "class", "fa fa-credit-card-alt fa-fw"), e.appendChild(u, m)
                var m = e.createTextNode(" MINING RENTAL RIG")
                e.appendChild(u, m)
                var m = e.createElement("a")
                e.setAttribute(m, "href", "https://www.miningrigrentals.com?ref=41914"), e.setAttribute(m, "target", "_blank")
                var v = e.createElement("i")
                e.setAttribute(v, "class", "fa fa-link fa-fw"), e.appendChild(m, v), e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                        ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", "panel-body"), e.setAttribute(u, "style", "padding-top:0px;padding-bottom:0px")
                var m = e.createTextNode("\n\n                                          ")
                e.appendChild(u, m)
                var m = e.createElement("div")
                e.setAttribute(m, "class", "bs-callout bs-callout-info"), e.setAttribute(m, "id", "callout-labels-inline-block")
                var v = e.createTextNode("\n                                              ")
                e.appendChild(m, v)
                var v = e.createElement("h2"),
                    C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-bolt fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Whether you're new to mining and want to try mining out before you buy mining rig")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createElement("br")
                e.appendChild(m, v)
                var v = e.createTextNode("\n                                              ")
                e.appendChild(m, v)
                var v = e.createElement("h4"),
                    C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-ticket fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Pool fully supports miningrigrentals")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                          ")
                e.appendChild(m, v)
                var v = e.createElement("ul")
                e.setAttribute(v, "class", "list-group")
                var C = e.createTextNode("\n                                            ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                              ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://www.miningrigrentals.com/register?ref=41914"), e.setAttribute(b, "target", "_blank"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-sign-in fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("Register using this link to get new account")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode(" ")
                e.appendChild(x, N)
                var N = e.createElement("i")
                e.setAttribute(N, "class", "fa fa-user fa-fw"), e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                          ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                            ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                            ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                               ")
                e.appendChild(C, b)
                var b = e.createElement("i")
                e.setAttribute(b, "class", "fa fa-plus fa-fw"), e.appendChild(C, b)
                var b = e.createTextNode("\n                                            ")
                e.appendChild(C, b)
                var b = e.createElement("strong"),
                    x = e.createTextNode("Add the Pool using the following setting")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                            ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                              ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                                ")
                e.appendChild(C, b)
                var b = e.createElement("span")
                e.setAttribute(b, "style", "font-family: 'Anonymous Pro';")
                var x = e.createTextNode("                                                 \n                                                  Address = stratum+tcp://")
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createTextNode(":")
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode('\n                                                  User = "')
                e.appendChild(b, x)
                var x = e.createElement("kbd"),
                    N = e.createComment("")
                e.appendChild(x, N)
                var N = e.createTextNode(" Address")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode('"')
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  Pass = x")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("                                                   \n                                                  Algorithm = Hasimotos")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n\n                                          ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                        ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n\n\n\n                                        ")
                e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                      ")
                e.appendChild(h, u), e.appendChild(s, h)
                var h = e.createTextNode("\n                                    ")
                e.appendChild(s, h), e.appendChild(c, s)
                var s = e.createTextNode("\n                                ")
                e.appendChild(c, s), e.appendChild(p, c)
                var c = e.createTextNode("\n                            ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("div")
                e.setAttribute(o, "class", "tab-pane active"), e.setAttribute(o, "id", "general"), e.setAttribute(o, "style", "height:600px; overflow-y: scroll;")
                var p = e.createTextNode("\n                          ")
                e.appendChild(o, p)
                var p = e.createElement("div")
                e.setAttribute(p, "class", "col-lg-12")
                var c = e.createTextNode("\n                            ")
                e.appendChild(p, c)
                var c = e.createElement("div")
                e.setAttribute(c, "class", "panel")
                var s = e.createTextNode("\n                              ")
                e.appendChild(c, s)
                var s = e.createElement("div")
                e.setAttribute(s, "class", "panel-body"), e.setAttribute(s, "style", "padding-top:0px;padding-bottom:0px")
                var h = e.createTextNode("\n ")
                e.appendChild(s, h)
                var h = e.createElement("h3")
                e.setAttribute(h, "class", "text-green")
                var u = e.createElement("i")
                e.setAttribute(u, "class", "fa fa-ravelry fa-fw"), e.appendChild(h, u)
                var u = e.createTextNode("FEATURE")
                e.appendChild(h, u), e.appendChild(s, h)
                var h = e.createTextNode("\n                                ")
                e.appendChild(s, h)
                var h = e.createElement("div")
                e.setAttribute(h, "class", "panel-body bs-callout bs-callout-success")
                var u = e.createTextNode("\n                                  ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", ""), e.setAttribute(u, "id", "callout-labels-inline-block")
                var m = e.createTextNode("\n                                    ")
                e.appendChild(u, m)
                var m = e.createElement("ul")
                e.setAttribute(m, "class", "list-group")
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-user-secret fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Anonymous mining, No Registration required\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-share-square-o fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Dynamic PPLNS payout scheme, 'N' Value is fixed at the beginning of each round as 2*Block chain Difficulty\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-credit-card fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Interface customized for ")
                e.appendChild(v, C)
                var C = e.createComment("")
                e.appendChild(v, C)
                var C = e.createTextNode(" Values of corresponding ")
                e.appendChild(v, C)
                var C = e.createComment("")
                e.appendChild(v, C)
                var C = e.createTextNode(" Values\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-credit-card fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" We pay all ")
                e.appendChild(v, C)
                var C = e.createComment("")
                e.appendChild(v, C)
                var C = e.createTextNode(" rewards (Blocks, Uncles)\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                         ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-sitemap fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Share Difficulty : ")
                e.appendChild(v, C)
                var C = e.createComment("")
                e.appendChild(v, C)
                var C = e.createTextNode(", Efficient for miners\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      \n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-download fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Payout are processed ")
                e.appendChild(v, C)
                var C = e.createComment("")
                e.appendChild(v, C)
                var C = e.createTextNode("\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-sun-o fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Customizable minimum payment threshold, To customize, please send us email of your ")
                e.appendChild(v, C)
                var C = e.createComment("")
                e.appendChild(v, C)
                var C = e.createTextNode("Address, IP Address, Email and Payout threshold to ")
                e.appendChild(v, C)
                var C = e.createComment("")
                e.appendChild(v, C)
                var C = e.createTextNode("\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("                                     \n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-sitemap fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Full stratum support (supports all type of miners)\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-fast-forward fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Efficient mining engine, low uncle rates\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-bar-chart fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Detailed global and per-worker statistics\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-envelope fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Professional Helpdesk  ")
                e.appendChild(v, C)
                var C = e.createElement("a")
                e.setAttribute(C, "target", "_blank")
                var b = e.createTextNode("  Helpdesk  ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n\n                                    ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n                                  ")
                e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                ")
                e.appendChild(h, u), e.appendChild(s, h)
                var h = e.createTextNode("\n\n                              ")
                e.appendChild(s, h), e.appendChild(c, s)
                var s = e.createTextNode("\n                            ")
                e.appendChild(c, s), e.appendChild(p, c)
                var c = e.createTextNode("\n                          ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n\n                          ")
                e.appendChild(o, p)
                var p = e.createElement("div")
                e.setAttribute(p, "class", "col-lg-12")
                var c = e.createTextNode("\n                            ")
                e.appendChild(p, c)
                var c = e.createElement("div")
                e.setAttribute(c, "class", "panel")
                var s = e.createTextNode("\n                              ")
                e.appendChild(c, s)
                var s = e.createElement("div")
                e.setAttribute(s, "class", "panel-body"), e.setAttribute(s, "style", "padding-top:0px;padding-bottom:0px")
                var h = e.createTextNode("\n ")
                e.appendChild(s, h)
                var h = e.createElement("h3")
                e.setAttribute(h, "class", "text-orange")
                var u = e.createElement("i")
                e.setAttribute(u, "class", "fa fa-calendar fa-fw"), e.appendChild(h, u)
                var u = e.createTextNode("FUTURE SCOPE")
                e.appendChild(h, u), e.appendChild(s, h)
                var h = e.createTextNode("\n                                ")
                e.appendChild(s, h)
                var h = e.createElement("div")
                e.setAttribute(h, "class", "panel-body bs-callout bs-callout-warning")
                var u = e.createTextNode("\n                                  ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", ""), e.setAttribute(u, "id", "callout-labels-inline-block")
                var m = e.createTextNode("\n                                    ")
                e.appendChild(u, m)
                var m = e.createElement("ul")
                e.setAttribute(m, "class", "list-group")
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-mobile fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Email notification system and SMS Notification\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-android fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Third party Android Monitoring App, iOS Monitoring App, and Telegram Bot\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-compass fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode(" Multiple Servers at various Regions\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("                                     \n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("li")
                e.setAttribute(v, "class", "list-group-item")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-language fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("  Various Language options\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                    ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n                                  ")
                e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                ")
                e.appendChild(h, u), e.appendChild(s, h)
                var h = e.createTextNode("\n\n                              ")
                e.appendChild(s, h), e.appendChild(c, s)
                var s = e.createTextNode("\n                            ")
                e.appendChild(c, s), e.appendChild(p, c)
                var c = e.createTextNode("\n                          ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n\n\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("div")
                e.setAttribute(o, "class", "tab-pane"), e.setAttribute(o, "id", "miningsoftware")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createElement("div")
                e.setAttribute(p, "class", "col-lg-12")
                var c = e.createTextNode("\n                                ")
                e.appendChild(p, c)
                var c = e.createElement("div")
                e.setAttribute(c, "class", "panel")
                var s = e.createTextNode("\n                                    ")
                e.appendChild(c, s)
                var s = e.createElement("div")
                e.setAttribute(s, "class", "panel-body")
                var h = e.createTextNode("\n                                      ")
                e.appendChild(s, h)
                var h = e.createElement("div")
                e.setAttribute(h, "class", "panel panel-success")
                var u = e.createTextNode("\n                                        ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", "panel-heading")
                var m = e.createTextNode(" ")
                e.appendChild(u, m)
                var m = e.createElement("i")
                e.setAttribute(m, "class", "fa fa-download fa-fw"), e.appendChild(u, m)
                var m = e.createTextNode(" Claymore's Dual GPU Miner.")
                e.appendChild(u, m)
                var m = e.createElement("a")
                e.setAttribute(m, "href", "https://bitcointalk.org/index.php?topic=1433925.0"), e.setAttribute(m, "target", "_blank")
                var v = e.createElement("i")
                e.setAttribute(v, "class", "fa fa-link fa-fw"), e.appendChild(m, v), e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                        ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", "panel-body")
                var m = e.createTextNode("\n\n                                          ")
                e.appendChild(u, m)
                var m = e.createElement("div")
                e.setAttribute(m, "class", "bs-callout bs-callout-info"), e.setAttribute(m, "id", "callout-labels-inline-block")
                var v = e.createTextNode("\n                                          ")
                e.appendChild(m, v)
                var v = e.createElement("h4"),
                    C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-cloud-download fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Download  ")
                e.appendChild(v, C)
                var C = e.createElement("span")
                e.setAttribute(C, "class", "badge")
                var b = e.createTextNode("Latest version is v10.0")
                e.appendChild(C, b), e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                          ")
                e.appendChild(m, v)
                var v = e.createElement("ul")
                e.setAttribute(v, "class", "list-group")
                var C = e.createTextNode("\n                                            ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                              ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://github.com/CoinPoolServices/Claymore-Dual-Miner/releases/download/10.0/Claymore.s.Dual.GPU.Miner.v10.0-Windows.zip"), e.setAttribute(b, "target", "_blank"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-windows fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("Claymore's. Dual Miner.v10.0.zip")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createElement("em"),
                    N = e.createTextNode(" Use Internet Explorer for download ")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode("13.1 MB")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                              ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                            ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                            ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                              ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://github.com/CoinPoolServices/Claymore-Dual-Miner/releases/download/10.0/Claymore.s.Dual.GPU.Miner.v10.0.-.LINUX.tar.gz"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-linux fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("Claymore's Dual Miner.v10.0-.LINUX.tar.gz")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode("1.66 MB")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                              ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                            ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n\n                                          ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                        ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n\n\n                                          ")
                e.appendChild(u, m)
                var m = e.createElement("div")
                e.setAttribute(m, "class", "bs-callout bs-callout-info"), e.setAttribute(m, "id", "callout-labels-inline-block")
                var v = e.createTextNode("\n                                            ")
                e.appendChild(m, v)
                var v = e.createElement("h4"),
                    C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-cogs fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Configuration File")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("Put the following commands into a file ")
                e.appendChild(m, v)
                var v = e.createElement("kbd"),
                    C = e.createTextNode("start.bat")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode(" and double click to start your miner\n                                            ")
                e.appendChild(m, v)
                var v = e.createElement("ul")
                e.setAttribute(v, "class", "list-group")
                var C = e.createTextNode("\n                                              ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                                ")
                e.appendChild(C, b)
                var b = e.createElement("span")
                e.setAttribute(b, "style", "font-family: 'Anonymous Pro';")
                var x = e.createTextNode("\n                                                  setx GPU_FORCE_64BIT_PTR 0")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  setx GPU_MAX_HEAP_SIZE 100")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  setx GPU_USE_SYNC_OBJECTS 1")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  setx GPU_MAX_ALLOC_PERCENT 100")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  setx GPU_SINGLE_ALLOC_PERCENT 100")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  ")
                e.appendChild(b, x)
                var x = e.createElement("h4"),
                    N = e.createTextNode("EthDcrMiner64.exe -epool ")
                e.appendChild(x, N)
                var N = e.createComment("")
                e.appendChild(x, N)
                var N = e.createTextNode(":")
                e.appendChild(x, N)
                var N = e.createComment("")
                e.appendChild(x, N)
                var N = e.createTextNode(" -ewal ")
                e.appendChild(x, N)
                var N = e.createElement("kbd"),
                    f = e.createComment("")
                e.appendChild(N, f)
                var f = e.createTextNode("Address")
                e.appendChild(N, f), e.appendChild(x, N)
                var N = e.createTextNode(" -eworker ")
                e.appendChild(x, N)
                var N = e.createElement("kbd"),
                    f = e.createTextNode("WORKERNAME")
                e.appendChild(N, f), e.appendChild(x, N)
                var N = e.createTextNode("   -allcoins 1 ")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                              ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n\n                                            ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                          ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n\n\n                                          ")
                e.appendChild(u, m)
                var m = e.createElement("div")
                e.setAttribute(m, "class", "bs-callout bs-callout-info"), e.setAttribute(m, "id", "callout-labels-inline-block")
                var v = e.createTextNode("\n                                            Put the following commands into a file ")
                e.appendChild(m, v)
                var v = e.createElement("kbd"),
                    C = e.createTextNode("epools.txt")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode(" to automatically switch to backup server, The server may be added later depending upon the load\n                                            ")
                e.appendChild(m, v)
                var v = e.createElement("h4"),
                    C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-database fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Backup Servers")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                            ")
                e.appendChild(m, v)
                var v = e.createElement("ul")
                e.setAttribute(v, "class", "list-group")
                var C = e.createTextNode("\n                                              ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                                Backup 1 : ")
                e.appendChild(C, b)
                var b = e.createComment("")
                e.appendChild(C, b)
                var b = e.createTextNode(":")
                e.appendChild(C, b)
                var b = e.createComment("")
                e.appendChild(C, b)
                var b = e.createTextNode("\n                                              ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                              ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                                Backup 2 :")
                e.appendChild(C, b)
                var b = e.createComment("")
                e.appendChild(C, b)
                var b = e.createTextNode(":")
                e.appendChild(C, b)
                var b = e.createComment("")
                e.appendChild(C, b)
                var b = e.createTextNode("\n                                              ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n\n                                            ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                          ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n\n\n                                        ")
                e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                      ")
                e.appendChild(h, u), e.appendChild(s, h)
                var h = e.createTextNode("\n                                    ")
                e.appendChild(s, h), e.appendChild(c, s)
                var s = e.createTextNode("\n                                ")
                e.appendChild(c, s), e.appendChild(p, c)
                var c = e.createTextNode("\n                            ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("div")
                e.setAttribute(o, "class", "tab-pane"), e.setAttribute(o, "id", "stratumproxy")
                var p = e.createTextNode("\n                          ")
                e.appendChild(o, p)
                var p = e.createElement("div")
                e.setAttribute(p, "class", "col-lg-12")
                var c = e.createTextNode("\n                            ")
                e.appendChild(p, c)
                var c = e.createElement("div")
                e.setAttribute(c, "class", "panel")
                var s = e.createTextNode("\n                              ")
                e.appendChild(c, s)
                var s = e.createElement("div")
                e.setAttribute(s, "class", "panel-body")
                var h = e.createTextNode("\n                                ")
                e.appendChild(s, h)
                var h = e.createElement("div")
                e.setAttribute(h, "class", "panel panel-success")
                var u = e.createTextNode("\n                                  ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", "panel-heading")
                var m = e.createTextNode(" ")
                e.appendChild(u, m)
                var m = e.createElement("i")
                e.setAttribute(m, "class", "fa fa-download fa-fw"), e.appendChild(u, m)
                var m = e.createTextNode(" Stratum mode using Stratum Proxy ")
                e.appendChild(u, m)
                var m = e.createElement("a")
                e.setAttribute(m, "href", "https://bitcointalk.org/index.php?topic=1200891"), e.setAttribute(m, "target", "_blank")
                var v = e.createElement("i")
                e.setAttribute(v, "class", "fa fa-link fa-fw"), e.appendChild(m, v), e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                  ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", "panel-body")
                var m = e.createTextNode("\n\n                                    ")
                e.appendChild(u, m)
                var m = e.createElement("div")
                e.setAttribute(m, "class", "bs-callout bs-callout-info"), e.setAttribute(m, "id", "callout-labels-inline-block")
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("h4"),
                    C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-cloud-download fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Download  ")
                e.appendChild(v, C)
                var C = e.createElement("span")
                e.setAttribute(C, "class", "badge")
                var b = e.createTextNode("Latest version is v0.05")
                e.appendChild(C, b), e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("ul")
                e.setAttribute(v, "class", "list-group")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                          ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://github.com/Atrides/eth-proxy/releases/download/0.0.5/eth-proxy-win.zip"), e.setAttribute(b, "target", "_blank"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-windows fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("Stratum Proxy.v0.0.5.zip")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode("5.18 MB")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                          ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                          ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://github.com/Atrides/eth-proxy/releases/download/0.0.5/eth-proxy.zip"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-linux fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("Linux Stratum Proxy.v0.0.5.zip")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode("43.7 KB")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                          ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                    ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n\n\n                                    ")
                e.appendChild(u, m)
                var m = e.createElement("div")
                e.setAttribute(m, "class", "bs-callout bs-callout-info"), e.setAttribute(m, "id", "callout-labels-inline-block")
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("h4"),
                    C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-cogs fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Configuration File")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("Put the following commands into a file ")
                e.appendChild(m, v)
                var v = e.createElement("kbd"),
                    C = e.createTextNode("start.bat")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode(" and double click to start your miner ")
                e.appendChild(m, v)
                var v = e.createElement("br")
                e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("ul")
                e.setAttribute(v, "class", "list-group")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                                ")
                e.appendChild(C, b)
                var b = e.createElement("span")
                e.setAttribute(b, "style", "font-family: 'Anonymous Pro';")
                var x = e.createTextNode("\n                                                  ")
                e.appendChild(b, x)
                var x = e.createElement("h4"),
                    N = e.createTextNode("ethminer.exe --farm-recheck 200 -G -F http://")
                e.appendChild(x, N)
                var N = e.createComment("")
                e.appendChild(x, N)
                var N = e.createTextNode(":")
                e.appendChild(x, N)
                var N = e.createComment("")
                e.appendChild(x, N)
                var N = e.createTextNode("/")
                e.appendChild(x, N)
                var N = e.createElement("kbd"),
                    f = e.createTextNode("WORKERNAME")
                e.appendChild(N, f), e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      Put the following commands into a file ")
                e.appendChild(m, v)
                var v = e.createElement("kbd"),
                    C = e.createTextNode("eth-proxy.conf")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode(" to add wallet and other configuration")
                e.appendChild(m, v)
                var v = e.createElement("br")
                e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("ul")
                e.setAttribute(v, "class", "list-group")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                                ")
                e.appendChild(C, b)
                var b = e.createElement("span")
                e.setAttribute(b, "style", "font-family: 'Anonymous Pro';")
                var x = e.createTextNode('\n                                                  COIN = "')
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createTextNode('" ')
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode('\n                                                  HOST = "0.0.0.0"')
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  PORT = ")
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode('\n                                                  WALLET = "')
                e.appendChild(b, x)
                var x = e.createElement("kbd"),
                    N = e.createTextNode("ADDRESS")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode('"')
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  ENABLE_WORKER_ID = False")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  MONITORING = False")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode('\n                                                  MONITORING_EMAIL = ""')
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode('\n                                                  # Main pool\n                                                  POOL_HOST = "')
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createTextNode('"')
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  POOL_PORT = ")
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  POOL_FAILOVER_ENABLE = True")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode('\n                                                  POOL_HOST_FAILOVER1 = "')
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createTextNode('"')
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  POOL_PORT_FAILOVER1 = ")
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode('\n                                                  POOL_HOST_FAILOVER2 = "')
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createTextNode('"')
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  POOL_PORT_FAILOVER2 = ")
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  LOG_TO_FILE = True")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                  DEBUG = False")
                e.appendChild(b, x)
                var x = e.createElement("br")
                e.appendChild(b, x)
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                    ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n\n                                  ")
                e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                ")
                e.appendChild(h, u), e.appendChild(s, h)
                var h = e.createTextNode("\n                              ")
                e.appendChild(s, h), e.appendChild(c, s)
                var s = e.createTextNode("\n                            ")
                e.appendChild(c, s), e.appendChild(p, c)
                var c = e.createTextNode("\n                          ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                        ")
                e.appendChild(i, o)
                var o = e.createElement("div")
                e.setAttribute(o, "class", "tab-pane"), e.setAttribute(o, "id", "genoils")
                var p = e.createTextNode("\n                          ")
                e.appendChild(o, p)
                var p = e.createElement("div")
                e.setAttribute(p, "class", "col-lg-12")
                var c = e.createTextNode("\n                            ")
                e.appendChild(p, c)
                var c = e.createElement("div")
                e.setAttribute(c, "class", "panel")
                var s = e.createTextNode("\n                              ")
                e.appendChild(c, s)
                var s = e.createElement("div")
                e.setAttribute(s, "class", "panel-body")
                var h = e.createTextNode("\n                                ")
                e.appendChild(s, h)
                var h = e.createElement("div")
                e.setAttribute(h, "class", "panel panel-success")
                var u = e.createTextNode("\n                                  ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", "panel-heading")
                var m = e.createTextNode(" ")
                e.appendChild(u, m)
                var m = e.createElement("i")
                e.setAttribute(m, "class", "fa fa-download fa-fw"), e.appendChild(u, m)
                var m = e.createTextNode(" CPP ETHEREUM CLIENT.")
                e.appendChild(u, m)
                var m = e.createElement("a")
                e.setAttribute(m, "href", "https://github.com/ethereum/webthree-umbrella/releases"), e.setAttribute(m, "target", "_blank")
                var v = e.createElement("i")
                e.setAttribute(v, "class", "fa fa-link fa-fw"), e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode(" ")
                e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                  ")
                e.appendChild(h, u)
                var u = e.createElement("div")
                e.setAttribute(u, "class", "panel-body")
                var m = e.createTextNode("\n\n                                   ")
                e.appendChild(u, m)
                var m = e.createElement("div")
                e.setAttribute(m, "class", "bs-callout bs-callout-info"), e.setAttribute(m, "id", "callout-labels-inline-block")
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("h4"),
                    C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-cloud-download fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Download  ")
                e.appendChild(v, C)
                var C = e.createElement("span")
                e.setAttribute(C, "class", "badge")
                var b = e.createTextNode('v1.29 ("The Village Idiot")')
                e.appendChild(C, b), e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("ul")
                e.setAttribute(v, "class", "list-group")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                          ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-windows-v1.2.9.zip"), e.setAttribute(b, "target", "_blank"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-windows fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("cpp-ethereum-miner v 1.2.9")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode("32.1 MB")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                          ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                          \n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                          ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-osx-yosemite-v1.2.9.zip"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-apple fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("OS X Yosemite Source 1 ZIP")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode("12.6 MB")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                          ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                          \n                                          \n                                           ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                          ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-osx-yosemite-v1.2.9.dmg"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-apple fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("OS X Yosemite Source 2 DMG")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode("81 MB")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                          ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                          \n                                          ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                          ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-osx-elcapitan-v1.2.9.zip"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-apple fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("OS X El Capitan Source 1 ZIP")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode("11.6 MB")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                          ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n                                          \n                                          ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                          ")
                e.appendChild(C, b)
                var b = e.createElement("a")
                e.setAttribute(b, "href", "https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-osx-elcapitan-v1.2.9.dmg"), e.setAttribute(b, "rel", "nofollow")
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("i")
                e.setAttribute(x, "class", "fa fa-apple fa-fw"), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("strong"),
                    N = e.createTextNode("OS X El Capitan Source 2 DMG")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                            ")
                e.appendChild(b, x)
                var x = e.createElement("small")
                e.setAttribute(x, "class", "text-gray pull-right")
                var N = e.createTextNode("78 MB")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                          ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                    ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n\n\n                                    ")
                e.appendChild(u, m)
                var m = e.createElement("div")
                e.setAttribute(m, "class", "bs-callout bs-callout-info"), e.setAttribute(m, "id", "callout-labels-inline-block")
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("h4"),
                    C = e.createElement("i")
                e.setAttribute(C, "class", "fa fa-cogs fa-fw"), e.appendChild(v, C)
                var C = e.createTextNode("Configuration")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                      ")
                e.appendChild(m, v)
                var v = e.createElement("ul")
                e.setAttribute(v, "class", "list-group")
                var C = e.createTextNode("\n                                        ")
                e.appendChild(v, C)
                var C = e.createElement("li")
                e.setAttribute(C, "class", "list-group-item")
                var b = e.createTextNode("\n                                                ")
                e.appendChild(C, b)
                var b = e.createElement("span")
                e.setAttribute(b, "style", "font-family: 'Anonymous Pro';")
                var x = e.createTextNode("\n                                                  ethminer.exe http://")
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createTextNode(":")
                e.appendChild(b, x)
                var x = e.createComment("")
                e.appendChild(b, x)
                var x = e.createTextNode("/")
                e.appendChild(b, x)
                var x = e.createElement("kbd"),
                    N = e.createTextNode("ADDRESS")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("/")
                e.appendChild(b, x)
                var x = e.createElement("kbd"),
                    N = e.createTextNode("WORKERNAME")
                e.appendChild(x, N), e.appendChild(b, x)
                var x = e.createTextNode("\n                                                ")
                e.appendChild(b, x), e.appendChild(C, b)
                var b = e.createTextNode("\n                                        ")
                e.appendChild(C, b), e.appendChild(v, C)
                var C = e.createTextNode("\n\n                                      ")
                e.appendChild(v, C), e.appendChild(m, v)
                var v = e.createTextNode("\n                                    ")
                e.appendChild(m, v), e.appendChild(u, m)
                var m = e.createTextNode("\n\n                               \n\n\n                                  ")
                e.appendChild(u, m), e.appendChild(h, u)
                var u = e.createTextNode("\n                                ")
                e.appendChild(h, u), e.appendChild(s, h)
                var h = e.createTextNode("\n                              ")
                e.appendChild(s, h), e.appendChild(c, s)
                var s = e.createTextNode("\n                            ")
                e.appendChild(c, s), e.appendChild(p, c)
                var c = e.createTextNode("\n                          ")
                e.appendChild(p, c), e.appendChild(o, p)
                var p = e.createTextNode("\n\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode("\n                    ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-8 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createComment(" /.row ")
                e.appendChild(a, r)
                var r = e.createTextNode("\n")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = e.childAt(r, [1, 3, 1]),
                    l = e.childAt(r, [5]),
                    d = e.childAt(l, [1, 3]),
                    i = e.childAt(l, [3, 3]),
                    o = e.childAt(l, [5, 3]),
                    p = e.childAt(o, [1]),
                    c = e.childAt(l, [7, 3]),
                    s = e.childAt(c, [1]),
                    h = e.childAt(r, [9]),
                    u = e.childAt(h, [1]),
                    m = e.childAt(u, [1, 5]),
                    v = e.childAt(m, [21, 3, 0]),
                    C = e.childAt(m, [25]),
                    b = e.childAt(h, [5, 1, 3, 1]),
                    x = e.childAt(b, [3, 1]),
                    N = e.childAt(h, [9, 1, 3, 3]),
                    f = e.childAt(N, [1, 1, 1, 1, 1, 3, 1, 6, 5, 1]),
                    T = e.childAt(N, [3, 1, 1, 1, 3, 1, 1]),
                    g = e.childAt(T, [5]),
                    A = e.childAt(T, [13]),
                    E = e.childAt(T, [21, 3]),
                    y = e.childAt(N, [5, 1, 1, 1, 1, 3]),
                    w = e.childAt(y, [3, 5, 1, 1, 11]),
                    M = e.childAt(y, [5, 5]),
                    F = e.childAt(M, [1]),
                    k = e.childAt(M, [3]),
                    R = e.childAt(N, [7, 1, 1, 1, 1, 3, 3]),
                    P = e.childAt(R, [7, 1, 1, 1]),
                    _ = e.childAt(R, [13, 1, 1]),
                    O = e.childAt(N, [9, 1, 1, 1, 1, 3, 3, 3, 1, 1]),
                    S = new Array(61)
                return S[0] = e.createMorphAt(n, 1, 1), S[1] = e.createMorphAt(n, 3, 3), S[2] = e.createMorphAt(e.childAt(d, [1, 1, 0]), 1, 1), S[3] = e.createMorphAt(d, 5, 5), S[4] = e.createMorphAt(e.childAt(i, [1, 1, 0]), 1, 1), S[5] = e.createMorphAt(i, 5, 5), S[6] = e.createMorphAt(e.childAt(p, [1, 0]), 1, 1), S[7] = e.createMorphAt(e.childAt(p, [3]), 1, 1), S[8] = e.createMorphAt(o, 5, 5), S[9] = e.createMorphAt(e.childAt(s, [1, 0]), 1, 1), S[10] = e.createMorphAt(e.childAt(s, [3]), 1, 1), S[11] = e.createMorphAt(e.childAt(c, [3]), 1, 1), S[12] = e.createMorphAt(c, 5, 5), S[13] = e.createMorphAt(e.childAt(m, [3, 3, 0, 0]), 0, 0), S[14] = e.createMorphAt(e.childAt(m, [5, 3, 0, 0]), 0, 0), S[15] = e.createMorphAt(e.childAt(m, [9, 3, 0]), 0, 0), S[16] = e.createMorphAt(e.childAt(m, [11, 3, 0, 0]), 0, 0), S[17] = e.createMorphAt(e.childAt(m, [13, 3, 0]), 0, 0), S[18] = e.createMorphAt(e.childAt(m, [15, 3, 0]), 0, 0), S[19] = e.createMorphAt(e.childAt(m, [17, 3, 0]), 0, 0), S[20] = e.createMorphAt(e.childAt(m, [19, 3, 0]), 0, 0), S[21] = e.createMorphAt(v, 0, 0), S[22] = e.createMorphAt(v, 2, 2), S[23] = e.createMorphAt(e.childAt(m, [23, 3, 0]), 0, 0), S[24] = e.createMorphAt(C, 3, 3), S[25] = e.createMorphAt(C, 5, 5), S[26] = e.createMorphAt(e.childAt(C, [7, 1]), 1, 1), S[27] = e.createMorphAt(e.childAt(C, [9, 0]), 0, 0), S[28] = e.createMorphAt(e.childAt(u, [3, 5]), 1, 1), S[29] = e.createMorphAt(b, 1, 1), S[30] = e.createElementMorph(x), S[31] = e.createMorphAt(f, 1, 1), S[32] = e.createMorphAt(f, 3, 3), S[33] = e.createMorphAt(e.childAt(f, [6]), 0, 0), S[34] = e.createMorphAt(g, 3, 3), S[35] = e.createMorphAt(g, 5, 5), S[36] = e.createMorphAt(e.childAt(T, [7]), 3, 3), S[37] = e.createMorphAt(e.childAt(T, [9]), 3, 3), S[38] = e.createMorphAt(e.childAt(T, [11]), 3, 3), S[39] = e.createMorphAt(A, 3, 3), S[40] = e.createMorphAt(A, 5, 5), S[41] = e.createAttrMorph(E, "href"), S[42] = e.createMorphAt(w, 1, 1), S[43] = e.createMorphAt(w, 3, 3), S[44] = e.createMorphAt(e.childAt(w, [5]), 0, 0), S[45] = e.createMorphAt(F, 1, 1), S[46] = e.createMorphAt(F, 3, 3), S[47] = e.createMorphAt(k, 1, 1), S[48] = e.createMorphAt(k, 3, 3), S[49] = e.createMorphAt(P, 1, 1), S[50] = e.createMorphAt(P, 3, 3), S[51] = e.createMorphAt(_, 1, 1), S[52] = e.createMorphAt(_, 7, 7), S[53] = e.createMorphAt(_, 20, 20), S[54] = e.createMorphAt(_, 24, 24), S[55] = e.createMorphAt(_, 29, 29), S[56] = e.createMorphAt(_, 33, 33), S[57] = e.createMorphAt(_, 36, 36), S[58] = e.createMorphAt(_, 40, 40), S[59] = e.createMorphAt(O, 1, 1), S[60] = e.createMorphAt(O, 3, 3), S
            },
            statements: [
                ["content", "config.CoinName", ["loc", [null, [7, 115],
                    [7, 134]
                ]], 0, 0, 0, 0],
                ["content", "config.PaymentText", ["loc", [null, [7, 331],
                    [7, 353]
                ]], 0, 0, 0, 0],
                ["inline", "format-hashrate", [
                    ["get", "stats.model.hashrate", ["loc", [null, [20, 46],
                        [20, 66]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [20, 28],
                        [20, 68]
                    ]], 0, 0
                ],
                ["block", "link-to", ["miners"],
                    [], 0, null, ["loc", [null, [26, 16],
                        [32, 28]
                    ]]
                ],
                ["inline", "format-number", [
                    ["get", "stats.model.minersTotal", ["loc", [null, [42, 44],
                        [42, 67]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [42, 28],
                        [42, 69]
                    ]], 0, 0
                ],
                ["block", "link-to", ["miners"],
                    [], 1, null, ["loc", [null, [48, 16],
                        [54, 28]
                    ]]
                ],
                ["inline", "format-number", [
                    ["get", "model.maturedTotal", ["loc", [null, [63, 44],
                        [63, 62]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [63, 28],
                        [63, 65]
                    ]], 0, 0
                ],
                ["block", "if", [
                    ["get", "stats.model.stats.lastBlockFound", ["loc", [null, [65, 30],
                        [65, 62]
                    ]], 0, 0, 0, 0]
                ],
                    [], 2, 3, ["loc", [null, [65, 24],
                        [69, 31]
                    ]]
                ],
                ["block", "link-to", ["blocks"],
                    [], 4, null, ["loc", [null, [73, 16],
                        [79, 28]
                    ]]
                ],
                ["block", "if", [
                    ["subexpr", "eq", [
                        ["get", "config.Currency", ["loc", [null, [88, 38],
                            [88, 53]
                        ]], 0, 0, 0, 0], "USD"
                    ],
                        [],
                        ["loc", [null, [88, 34],
                            [88, 60]
                        ]], 0, 0
                    ]
                ],
                    [], 5, 6, ["loc", [null, [88, 28],
                        [92, 35]
                    ]]
                ],
                ["inline", "format-date-locale", [
                    ["get", "stats.model.exchangedata.last_updated", ["loc", [null, [96, 45],
                        [96, 82]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [96, 24],
                        [96, 85]
                    ]], 0, 0
                ],
                ["block", "if", [
                    ["subexpr", "eq", [
                        ["get", "config.Currency", ["loc", [null, [100, 38],
                            [100, 53]
                        ]], 0, 0, 0, 0], "USD"
                    ],
                        [],
                        ["loc", [null, [100, 34],
                            [100, 60]
                        ]], 0, 0
                    ]
                ],
                    [], 7, 8, ["loc", [null, [100, 28],
                        [104, 35]
                    ]]
                ],
                ["block", "link-to", ["exchange"],
                    [], 9, null, ["loc", [null, [106, 15],
                        [112, 29]
                    ]]
                ],
                ["inline", "format-number", [
                    ["get", "stats.model.stats.lastNValue", ["loc", [null, [135, 120],
                        [135, 148]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [135, 104],
                        [135, 150]
                    ]], 0, 0
                ],
                ["inline", "format-number", [
                    ["get", "stats.model.stats.nShares", ["loc", [null, [140, 120],
                        [140, 145]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [140, 104],
                        [140, 147]
                    ]], 0, 0
                ],
                ["content", "config.PoolFee", ["loc", [null, [157, 70],
                    [157, 88]
                ]], 0, 0, 0, 0],
                ["inline", "format-hashrate", [
                    ["get", "config.ShareDifficulty", ["loc", [null, [162, 122],
                        [162, 144]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [162, 104],
                        [162, 146]
                    ]], 0, 0
                ],
                ["inline", "with-metric-prefix", [
                    ["get", "stats.difficulty", ["loc", [null, [167, 91],
                        [167, 107]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [167, 70],
                        [167, 109]
                    ]], 0, 0
                ],
                ["inline", "format-hashrate", [
                    ["get", "stats.hashrate", ["loc", [null, [172, 88],
                        [172, 102]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [172, 70],
                        [172, 104]
                    ]], 0, 0
                ],
                ["inline", "format-number", [
                    ["get", "stats.height", ["loc", [null, [177, 86],
                        [177, 98]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [177, 70],
                        [177, 100]
                    ]], 0, 0
                ],
                ["inline", "format-number", [
                    ["get", "stats.roundVariance", ["loc", [null, [182, 86],
                        [182, 105]
                    ]], 0, 0, 0, 0]
                ],
                    ["style", "percent"],
                    ["loc", [null, [182, 70],
                        [182, 123]
                    ]], 0, 0
                ],
                ["content", "config.PayoutThreshold", ["loc", [null, [187, 70],
                    [187, 96]
                ]], 0, 0, 0, 0],
                ["content", "config.CoinShortName", ["loc", [null, [187, 97],
                    [187, 121]
                ]], 0, 0, 0, 0],
                ["content", "config.PaymentText", ["loc", [null, [192, 70],
                    [192, 92]
                ]], 0, 0, 0, 0],
                ["content", "config.CoinShortName", ["loc", [null, [196, 68],
                    [196, 92]
                ]], 0, 0, 0, 0],
                ["content", "config.Currency", ["loc", [null, [196, 93],
                    [196, 112]
                ]], 0, 0, 0, 0],
                ["block", "if", [
                    ["subexpr", "eq", [
                        ["get", "config.Currency", ["loc", [null, [198, 38],
                            [198, 53]
                        ]], 0, 0, 0, 0], "USD"
                    ],
                        [],
                        ["loc", [null, [198, 34],
                            [198, 60]
                        ]], 0, 0
                    ]
                ],
                    [], 10, 11, ["loc", [null, [198, 28],
                        [202, 35]
                    ]]
                ],
                ["inline", "format-date-locale", [
                    ["get", "stats.model.exchangedata.last_updated", ["loc", [null, [203, 102],
                        [203, 139]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [203, 81],
                        [203, 142]
                    ]], 0, 0
                ],
                ["block", "twitter-feed", [],
                    [], 12, null, ["loc", [null, [220, 20],
                        [222, 37]
                    ]]
                ],
                ["inline", "input", [],
                    ["value", ["subexpr", "@mut", [
                        ["get", "cachedLogin", ["loc", [null, [239, 38],
                            [239, 49]
                        ]], 0, 0, 0, 0]
                    ],
                        [],
                        [], 0, 0
                    ], "class", "form-control", "placeholder", "Enter Your Address"],
                    ["loc", [null, [239, 24],
                        [239, 105]
                    ]], 0, 0
                ],
                ["element", "action", ["lookup", ["get", "cachedLogin", ["loc", [null, [241, 92],
                    [241, 103]
                ]], 0, 0, 0, 0]],
                    [],
                    ["loc", [null, [241, 74],
                        [241, 105]
                    ]], 0, 0
                ],
                ["content", "config.StratumHost", ["loc", [null, [294, 74],
                    [294, 96]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumPort", ["loc", [null, [294, 97],
                    [294, 119]
                ]], 0, 0, 0, 0],
                ["content", "config.CoinName", ["loc", [null, [295, 63],
                    [295, 82]
                ]], 0, 0, 0, 0],
                ["content", "config.Currency", ["loc", [null, [327, 105],
                    [327, 124]
                ]], 0, 0, 0, 0],
                ["content", "config.CoinName", ["loc", [null, [327, 149],
                    [327, 168]
                ]], 0, 0, 0, 0],
                ["content", "config.CoinName", ["loc", [null, [330, 91],
                    [330, 110]
                ]], 0, 0, 0, 0],
                ["content", "config.ShareDifficulty", ["loc", [null, [333, 95],
                    [333, 121]
                ]], 0, 0, 0, 0],
                ["content", "config.PaymentText", ["loc", [null, [337, 98],
                    [337, 120]
                ]], 0, 0, 0, 0],
                ["content", "config.CoinShortName", ["loc", [null, [340, 156],
                    [340, 180]
                ]], 0, 0, 0, 0],
                ["content", "config.SupportMail", ["loc", [null, [340, 231],
                    [340, 253]
                ]], 0, 0, 0, 0],
                ["attribute", "href", ["concat", [
                    ["get", "config.SupportHelpdesk", ["loc", [null, [352, 127],
                        [352, 149]
                    ]], 0, 0, 0, 0]
                ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                ["content", "config.StratumHost", ["loc", [null, [432, 79],
                    [432, 101]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumPort", ["loc", [null, [432, 102],
                    [432, 124]
                ]], 0, 0, 0, 0],
                ["content", "config.CoinName", ["loc", [null, [432, 136],
                    [432, 155]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumHost1", ["loc", [null, [445, 59],
                    [445, 82]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumPort1", ["loc", [null, [445, 83],
                    [445, 106]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumHost2", ["loc", [null, [448, 58],
                    [448, 81]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumPort2", ["loc", [null, [448, 82],
                    [448, 105]
                ]], 0, 0, 0, 0],
                ["content", "config.HttpHost", ["loc", [null, [496, 99],
                    [496, 118]
                ]], 0, 0, 0, 0],
                ["content", "config.HttpPort", ["loc", [null, [496, 119],
                    [496, 138]
                ]], 0, 0, 0, 0],
                ["content", "config.CoinName", ["loc", [null, [505, 58],
                    [505, 77]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumPort", ["loc", [null, [507, 57],
                    [507, 79]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumHost", ["loc", [null, [513, 63],
                    [513, 85]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumPort", ["loc", [null, [514, 62],
                    [514, 84]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumHost1", ["loc", [null, [516, 73],
                    [516, 96]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumPort1", ["loc", [null, [517, 72],
                    [517, 95]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumHost2", ["loc", [null, [518, 73],
                    [518, 96]
                ]], 0, 0, 0, 0],
                ["content", "config.StratumPort2", ["loc", [null, [519, 72],
                    [519, 95]
                ]], 0, 0, 0, 0],
                ["content", "config.HttpHost", ["loc", [null, [596, 70],
                    [596, 89]
                ]], 0, 0, 0, 0],
                ["content", "config.HttpPort", ["loc", [null, [596, 90],
                    [596, 109]
                ]], 0, 0, 0, 0]
            ],
            locals: [],
            templates: [e, t, a, r, n, l, d, i, o, p, c, s, h]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/luck", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 12,
                            column: 4
                        },
                        end: {
                            line: 19,
                            column: 4
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/luck.hbs"
                },
                isEmpty: !1,
                arity: 2,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("    ")
                    e.appendChild(t, a)
                    var a = e.createElement("tr"),
                        r = e.createTextNode("\n      ")
                    e.appendChild(a, r)
                    var r = e.createElement("td"),
                        n = e.createComment("")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n      ")
                    e.appendChild(a, r)
                    var r = e.createElement("td"),
                        n = e.createComment("")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n      ")
                    e.appendChild(a, r)
                    var r = e.createElement("td"),
                        n = e.createComment("")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n      ")
                    e.appendChild(a, r)
                    var r = e.createElement("td"),
                        n = e.createComment("")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n    ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = e.childAt(t, [1]),
                        n = new Array(4)
                    return n[0] = e.createMorphAt(e.childAt(r, [1]), 0, 0), n[1] = e.createMorphAt(e.childAt(r, [3]), 0, 0), n[2] = e.createMorphAt(e.childAt(r, [5]), 0, 0), n[3] = e.createMorphAt(e.childAt(r, [7]), 0, 0), n
                },
                statements: [
                    ["content", "total", ["loc", [null, [14, 10],
                        [14, 19]
                    ]], 0, 0, 0, 0],
                    ["inline", "format-number", [
                        ["get", "row.luck", ["loc", [null, [15, 26],
                            [15, 34]
                        ]], 0, 0, 0, 0]
                    ],
                        ["style", "percent"],
                        ["loc", [null, [15, 10],
                            [15, 52]
                        ]], 0, 0
                    ],
                    ["inline", "format-number", [
                        ["get", "row.uncleRate", ["loc", [null, [16, 26],
                            [16, 39]
                        ]], 0, 0, 0, 0]
                    ],
                        ["style", "percent"],
                        ["loc", [null, [16, 10],
                            [16, 57]
                        ]], 0, 0
                    ],
                    ["inline", "format-number", [
                        ["get", "row.orphanRate", ["loc", [null, [17, 26],
                            [17, 40]
                        ]], 0, 0, 0, 0]
                    ],
                        ["style", "percent"],
                        ["loc", [null, [17, 10],
                            [17, 58]
                        ]], 0, 0
                    ]
                ],
                locals: ["total", "row"],
                templates: []
            }
        }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 23,
                        column: 0
                    }
                },
                moduleName: "open-ethereum-pool/templates/luck.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "class", "table-responsive")
                var r = e.createTextNode("\n  ")
                e.appendChild(a, r)
                var r = e.createElement("table")
                e.setAttribute(r, "class", "table table-condensed table-striped")
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n)
                var n = e.createElement("thead"),
                    l = e.createTextNode("\n      ")
                e.appendChild(n, l)
                var l = e.createElement("tr"),
                    d = e.createTextNode("\n        ")
                e.appendChild(l, d)
                var d = e.createElement("th"),
                    i = e.createTextNode("Blocks")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n        ")
                e.appendChild(l, d)
                var d = e.createElement("th"),
                    i = e.createTextNode("Shares/Diff")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n        ")
                e.appendChild(l, d)
                var d = e.createElement("th"),
                    i = e.createTextNode("Uncle Rate")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n        ")
                e.appendChild(l, d)
                var d = e.createElement("th"),
                    i = e.createTextNode("Orphan Rate")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n      ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n    ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n)
                var n = e.createElement("tbody"),
                    l = e.createTextNode("\n")
                e.appendChild(n, l)
                var l = e.createComment("")
                e.appendChild(n, l)
                var l = e.createTextNode("    ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n  ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r), e.appendChild(t, a)
                var a = e.createTextNode("\n")
                return e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = new Array(1)
                return r[0] = e.createMorphAt(e.childAt(t, [0, 1, 3]), 1, 1), r
            },
            statements: [
                ["block", "each-in", [
                    ["get", "model.luck", ["loc", [null, [12, 15],
                        [12, 25]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, null, ["loc", [null, [12, 4],
                        [19, 16]
                    ]]
                ]
            ],
            locals: [],
            templates: [e]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/miners", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 93,
                                    column: 40
                                },
                                end: {
                                    line: 93,
                                    column: 94
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/miners.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createComment("")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(t, 0, 0, a), e.insertBoundary(t, 0), e.insertBoundary(t, null), r
                        },
                        statements: [
                            ["content", "m.login", ["loc", [null, [93, 83],
                                [93, 94]
                            ]], 0, 0, 0, 0]
                        ],
                        locals: [],
                        templates: []
                    }
                }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 91,
                                column: 32
                            },
                            end: {
                                line: 97,
                                column: 32
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/miners.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                                ")
                        e.appendChild(t, a)
                        var a = e.createElement("tr"),
                            r = e.createTextNode("\n                                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                                ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = new Array(4)
                        return n[0] = e.createAttrMorph(r, "class"), n[1] = e.createMorphAt(e.childAt(r, [1]), 0, 0), n[2] = e.createMorphAt(e.childAt(r, [3]), 0, 0), n[3] = e.createMorphAt(e.childAt(r, [5]), 0, 0), n
                    },
                    statements: [
                        ["attribute", "class", ["concat", [
                            ["subexpr", "if", [
                                ["get", "m.offline", ["loc", [null, [92, 48],
                                    [92, 57]
                                ]], 0, 0, 0, 0], "warning"
                            ],
                                [],
                                ["loc", [null, [92, 43],
                                    [92, 69]
                                ]], 0, 0
                            ]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["block", "link-to", ["account", ["get", "m.login", ["loc", [null, [93, 61],
                            [93, 68]
                        ]], 0, 0, 0, 0]],
                            ["class", "hash"], 0, null, ["loc", [null, [93, 40],
                                [93, 106]
                            ]]
                        ],
                        ["inline", "format-hashrate", [
                            ["get", "m.hr", ["loc", [null, [94, 58],
                                [94, 62]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [94, 40],
                                [94, 64]
                            ]], 0, 0
                        ],
                        ["inline", "format-date-locale", [
                            ["get", "m.lastBeat", ["loc", [null, [95, 61],
                                [95, 71]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [95, 40],
                                [95, 73]
                            ]], 0, 0
                        ]
                    ],
                    locals: ["m"],
                    templates: [e]
                }
            }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 79,
                            column: 20
                        },
                        end: {
                            line: 101,
                            column: 20
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/miners.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("                    ")
                    e.appendChild(t, a)
                    var a = e.createElement("h4"),
                        r = e.createTextNode("Miners")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n                    ")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n                        ")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n                            ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Login")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Hashrate")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Last Beat")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n                            ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("                            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n                        ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n                    ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(e.childAt(t, [3, 1, 3]), 1, 1), r
                },
                statements: [
                    ["block", "each", [
                        ["get", "model.miners", ["loc", [null, [91, 40],
                            [91, 52]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 0, null, ["loc", [null, [91, 32],
                            [97, 41]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e]
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 101,
                                column: 20
                            },
                            end: {
                                line: 103,
                                column: 20
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/miners.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                    ")
                        e.appendChild(t, a)
                        var a = e.createElement("h3"),
                            r = e.createTextNode("No miners")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 108,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/miners.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "id", "page-wrapper")
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row align-middle"), e.setAttribute(r, "style", "padding-top:50px;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-5")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "class", "text-blue"), e.setAttribute(l, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px; ")
                var d = e.createTextNode("MINER STATISTICS")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-7"), e.setAttribute(n, "style", "margin-bottom: 20px;")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Anonymous mining    ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("                                   \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("br")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Stratum and TCP Support ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("br")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Efficient Mining pool  ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("                  \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("br")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("All the statistics are available to all miners")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode(" ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "class", "label label-success")
                var i = e.createTextNode("OPEN POOL")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("                 \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-12 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("  \n\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row")
                var n = e.createTextNode("\n\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-6")
                var l = e.createTextNode(" \n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-blue")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n                            ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode("  HASHES PER SECOND ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-dashboard"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-footer text-center")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span"),
                    o = e.createTextNode("POOL HASHRATE")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "pull-right")
                var o = e.createElement("i")
                e.setAttribute(o, "class", "fa fa-arrow-circle-right"), e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("div")
                e.setAttribute(i, "class", "clearfix"), e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-6")
                var l = e.createTextNode(" \n            ")
                e.appendChild(n, l)
                var l = e.createComment(" small box ")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "small-box bg-green")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "inner ")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("h3"),
                    o = e.createElement("span")
                e.setAttribute(o, "class", "text-white")
                var p = e.createTextNode("\n                           ")
                e.appendChild(o, p)
                var p = e.createComment("")
                e.appendChild(o, p)
                var p = e.createTextNode("\n                        ")
                e.appendChild(o, p), e.appendChild(i, o)
                var o = e.createTextNode(" ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("p"),
                    o = e.createTextNode("  MINERS   ")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "icon")
                var i = e.createTextNode(" ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-users"), e.appendChild(d, i)
                var i = e.createTextNode(" ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-footer text-middle")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span"),
                    o = e.createTextNode("Active Miners")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("span")
                e.setAttribute(i, "class", "pull-right"), e.appendChild(d, i)
                var i = e.createTextNode("                        \n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n\n\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row"), e.setAttribute(r, "style", "max-height: 600px; overflow-y: scroll;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-12")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel panel-warning")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-users fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" DETAILED MINER STATISTICS                    \n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-body")
                var i = e.createTextNode("\n")
                e.appendChild(d, i)
                var i = e.createComment("")
                e.appendChild(d, i)
                var i = e.createTextNode("                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = e.childAt(r, [3]),
                    l = new Array(3)
                return l[0] = e.createMorphAt(e.childAt(n, [1, 3, 1, 1, 0]), 1, 1), l[1] = e.createMorphAt(e.childAt(n, [3, 3, 1, 1, 0]), 1, 1), l[2] = e.createMorphAt(e.childAt(r, [5, 1, 1, 3]), 1, 1), l
            },
            statements: [
                ["inline", "format-hashrate", [
                    ["get", "model.hashrate", ["loc", [null, [34, 46],
                        [34, 60]
                    ]], 0, 0, 0, 0]
                ],
                    [],
                    ["loc", [null, [34, 28],
                        [34, 62]
                    ]], 0, 0
                ],
                ["content", "model.minersTotal", ["loc", [null, [55, 27],
                    [55, 48]
                ]], 0, 0, 0, 0],
                ["block", "if", [
                    ["get", "model.miners", ["loc", [null, [79, 26],
                        [79, 38]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [79, 20],
                        [103, 27]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/not-found", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 15,
                        column: 0
                    }
                },
                moduleName: "open-ethereum-pool/templates/not-found.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "id", "page-wrapper")
                var r = e.createTextNode("\n ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row align-middle"), e.setAttribute(r, "style", "padding-top:50px;font-size: 30px;")
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-12")
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "col-xs-12 alert alert-danger")
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d)
                var d = e.createElement("i")
                e.setAttribute(d, "class", "fa fa-warning"), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "style", "font-family: Arvo; margin-top:80px; border-bottom: none;font-size: 30px;")
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i)
                var i = e.createElement("strong"),
                    o = e.createTextNode("If you are looking for your account statistics, you need to submit at least a single share. Sorry no share found for the given Address, Please verify your address and try again")
                e.appendChild(i, o), e.appendChild(d, i)
                var i = e.createTextNode("         \n            ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n        ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n    ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n")
                e.appendChild(a, r), e.appendChild(t, a)
                var a = e.createTextNode("\n\n\n")
                return e.appendChild(t, a), t
            },
            buildRenderNodes: function () {
                return []
            },
            statements: [],
            locals: [],
            templates: []
        }
    }())
    e.default = t
}), define("open-ethereum-pool/templates/payments", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = Ember.HTMLBars.template(function () {
        var e = function () {
            var e = function () {
                var e = function () {
                    return {
                        meta: {
                            revision: "Ember@2.8.3+c4330341",
                            loc: {
                                source: null,
                                start: {
                                    line: 50,
                                    column: 49
                                },
                                end: {
                                    line: 52,
                                    column: 48
                                }
                            },
                            moduleName: "open-ethereum-pool/templates/payments.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function (e) {
                            var t = e.createDocumentFragment(),
                                a = e.createTextNode("                                                ")
                            e.appendChild(t, a)
                            var a = e.createComment("")
                            e.appendChild(t, a)
                            var a = e.createTextNode("\n")
                            return e.appendChild(t, a), t
                        },
                        buildRenderNodes: function (e, t, a) {
                            var r = new Array(1)
                            return r[0] = e.createMorphAt(t, 1, 1, a), r
                        },
                        statements: [
                            ["inline", "format-ethusd", [
                                ["get", "tx.amount", ["loc", [null, [51, 65],
                                    [51, 74]
                                ]], 0, 0, 0, 0],
                                ["get", "model.exchangedata.price_usd", ["loc", [null, [51, 75],
                                    [51, 103]
                                ]], 0, 0, 0, 0]
                            ],
                                [],
                                ["loc", [null, [51, 48],
                                    [51, 106]
                                ]], 0, 0
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }(),
                    t = function () {
                        return {
                            meta: {
                                revision: "Ember@2.8.3+c4330341",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 52,
                                        column: 48
                                    },
                                    end: {
                                        line: 54,
                                        column: 48
                                    }
                                },
                                moduleName: "open-ethereum-pool/templates/payments.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function (e) {
                                var t = e.createDocumentFragment(),
                                    a = e.createTextNode("                                                ")
                                e.appendChild(t, a)
                                var a = e.createComment("")
                                e.appendChild(t, a)
                                var a = e.createTextNode("\n")
                                return e.appendChild(t, a), t
                            },
                            buildRenderNodes: function (e, t, a) {
                                var r = new Array(1)
                                return r[0] = e.createMorphAt(t, 1, 1, a), r
                            },
                            statements: [
                                ["inline", "format-ethinr", [
                                    ["get", "tx.amount", ["loc", [null, [53, 65],
                                        [53, 74]
                                    ]], 0, 0, 0, 0],
                                    ["get", "model.exchangedata.price_inr", ["loc", [null, [53, 75],
                                        [53, 103]
                                    ]], 0, 0, 0, 0]
                                ],
                                    [],
                                    ["loc", [null, [53, 48],
                                        [53, 106]
                                    ]], 0, 0
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }()
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 46,
                                column: 32
                            },
                            end: {
                                line: 64,
                                column: 32
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/payments.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                                ")
                        e.appendChild(t, a)
                        var a = e.createElement("tr"),
                            r = e.createTextNode("\n                                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createComment("")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createElement("strong"),
                            l = e.createComment("")
                        e.appendChild(n, l), e.appendChild(r, n)
                        var n = e.createElement("br")
                        e.appendChild(r, n)
                        var n = e.createElement("em"),
                            l = e.createElement("small"),
                            d = e.createTextNode("≅ \n")
                        e.appendChild(l, d)
                        var d = e.createComment("")
                        e.appendChild(l, d)
                        var d = e.createTextNode("                                            \n                                            ")
                        e.appendChild(l, d), e.appendChild(n, l), e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createTextNode("\n                                        ")
                        e.appendChild(r, n)
                        var n = e.createElement("a")
                        e.setAttribute(n, "class", "hash"), e.setAttribute(n, "rel", "nofollow"), e.setAttribute(n, "target", "_blank")
                        var l = e.createComment("")
                        e.appendChild(n, l), e.appendChild(r, n)
                        var n = e.createTextNode("\n                                    ")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                                    ")
                        e.appendChild(a, r)
                        var r = e.createElement("td"),
                            n = e.createTextNode("\n                                        ")
                        e.appendChild(r, n)
                        var n = e.createElement("a")
                        e.setAttribute(n, "class", "hash"), e.setAttribute(n, "rel", "nofollow"), e.setAttribute(n, "target", "_blank")
                        var l = e.createComment("")
                        e.appendChild(n, l), e.appendChild(r, n)
                        var n = e.createTextNode("\n                                    ")
                        e.appendChild(r, n), e.appendChild(a, r)
                        var r = e.createTextNode("\n                                ")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function (e, t, a) {
                        var r = e.childAt(t, [1]),
                            n = e.childAt(r, [3]),
                            l = e.childAt(r, [5, 1]),
                            d = e.childAt(r, [7, 1]),
                            i = new Array(7)
                        return i[0] = e.createMorphAt(e.childAt(r, [1]), 0, 0), i[1] = e.createMorphAt(e.childAt(n, [0]), 0, 0), i[2] = e.createMorphAt(e.childAt(n, [2, 0]), 1, 1), i[3] = e.createAttrMorph(l, "href"), i[4] = e.createMorphAt(l, 0, 0), i[5] = e.createAttrMorph(d, "href"), i[6] = e.createMorphAt(d, 0, 0), i
                    },
                    statements: [
                        ["inline", "format-date-locale", [
                            ["get", "tx.timestamp", ["loc", [null, [48, 61],
                                [48, 73]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [48, 40],
                                [48, 75]
                            ]], 0, 0
                        ],
                        ["inline", "format-number", [
                            ["get", "tx.formatAmount", ["loc", [null, [49, 64],
                                [49, 79]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [49, 48],
                                [49, 81]
                            ]], 0, 0
                        ],
                        ["block", "if", [
                            ["subexpr", "eq", [
                                ["get", "config.Currency", ["loc", [null, [50, 59],
                                    [50, 74]
                                ]], 0, 0, 0, 0], "USD"
                            ],
                                [],
                                ["loc", [null, [50, 55],
                                    [50, 81]
                                ]], 0, 0
                            ]
                        ],
                            [], 0, 1, ["loc", [null, [50, 49],
                                [54, 55]
                            ]]
                        ],
                        ["attribute", "href", ["concat", [
                            ["get", "config.ChainAddress", ["loc", [null, [58, 51],
                                [58, 70]
                            ]], 0, 0, 0, 0],
                            ["get", "tx.address", ["loc", [null, [58, 74],
                                [58, 84]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["content", "tx.address", ["loc", [null, [58, 132],
                            [58, 146]
                        ]], 0, 0, 0, 0],
                        ["attribute", "href", ["concat", [
                            ["get", "config.TransactionAddress", ["loc", [null, [61, 51],
                                [61, 76]
                            ]], 0, 0, 0, 0],
                            ["get", "tx.tx", ["loc", [null, [61, 80],
                                [61, 85]
                            ]], 0, 0, 0, 0]
                        ], 0, 0, 0, 0, 0], 0, 0, 0, 0],
                        ["inline", "format-tx", [
                            ["get", "tx.tx", ["loc", [null, [61, 145],
                                [61, 150]
                            ]], 0, 0, 0, 0]
                        ],
                            [],
                            ["loc", [null, [61, 133],
                                [61, 152]
                            ]], 0, 0
                        ]
                    ],
                    locals: ["tx"],
                    templates: [e, t]
                }
            }()
            return {
                meta: {
                    revision: "Ember@2.8.3+c4330341",
                    loc: {
                        source: null,
                        start: {
                            line: 33,
                            column: 20
                        },
                        end: {
                            line: 68,
                            column: 20
                        }
                    },
                    moduleName: "open-ethereum-pool/templates/payments.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function (e) {
                    var t = e.createDocumentFragment(),
                        a = e.createTextNode("                    ")
                    e.appendChild(t, a)
                    var a = e.createElement("h4"),
                        r = e.createTextNode("Latest Payouts")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n                    ")
                    e.appendChild(t, a)
                    var a = e.createElement("div")
                    e.setAttribute(a, "class", "table-responsive")
                    var r = e.createTextNode("\n                        ")
                    e.appendChild(a, r)
                    var r = e.createElement("table")
                    e.setAttribute(r, "class", "table table-condensed table-striped")
                    var n = e.createTextNode("\n                            ")
                    e.appendChild(r, n)
                    var n = e.createElement("thead"),
                        l = e.createTextNode("\n                                ")
                    e.appendChild(n, l)
                    var l = e.createElement("tr"),
                        d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Time")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Amount")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Address")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                    ")
                    e.appendChild(l, d)
                    var d = e.createElement("th"),
                        i = e.createTextNode("Tx ID")
                    e.appendChild(d, i), e.appendChild(l, d)
                    var d = e.createTextNode("\n                                ")
                    e.appendChild(l, d), e.appendChild(n, l)
                    var l = e.createTextNode("\n                            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n                            ")
                    e.appendChild(r, n)
                    var n = e.createElement("tbody"),
                        l = e.createTextNode("\n")
                    e.appendChild(n, l)
                    var l = e.createComment("")
                    e.appendChild(n, l)
                    var l = e.createTextNode("                            ")
                    e.appendChild(n, l), e.appendChild(r, n)
                    var n = e.createTextNode("\n                        ")
                    e.appendChild(r, n), e.appendChild(a, r)
                    var r = e.createTextNode("\n                    ")
                    e.appendChild(a, r), e.appendChild(t, a)
                    var a = e.createTextNode("\n")
                    return e.appendChild(t, a), t
                },
                buildRenderNodes: function (e, t, a) {
                    var r = new Array(1)
                    return r[0] = e.createMorphAt(e.childAt(t, [3, 1, 3]), 1, 1), r
                },
                statements: [
                    ["block", "each", [
                        ["get", "model.payments", ["loc", [null, [46, 40],
                            [46, 54]
                        ]], 0, 0, 0, 0]
                    ],
                        [], 0, null, ["loc", [null, [46, 32],
                            [64, 41]
                        ]]
                    ]
                ],
                locals: [],
                templates: [e]
            }
        }(),
            t = function () {
                return {
                    meta: {
                        revision: "Ember@2.8.3+c4330341",
                        loc: {
                            source: null,
                            start: {
                                line: 68,
                                column: 20
                            },
                            end: {
                                line: 70,
                                column: 20
                            }
                        },
                        moduleName: "open-ethereum-pool/templates/payments.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function (e) {
                        var t = e.createDocumentFragment(),
                            a = e.createTextNode("                    ")
                        e.appendChild(t, a)
                        var a = e.createElement("h3"),
                            r = e.createTextNode("No payouts yet")
                        e.appendChild(a, r), e.appendChild(t, a)
                        var a = e.createTextNode("\n")
                        return e.appendChild(t, a), t
                    },
                    buildRenderNodes: function () {
                        return []
                    },
                    statements: [],
                    locals: [],
                    templates: []
                }
            }()
        return {
            meta: {
                revision: "Ember@2.8.3+c4330341",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 85,
                        column: 6
                    }
                },
                moduleName: "open-ethereum-pool/templates/payments.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function (e) {
                var t = e.createDocumentFragment(),
                    a = e.createElement("div")
                e.setAttribute(a, "id", "page-wrapper")
                var r = e.createTextNode("\n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row align-middle"), e.setAttribute(r, "style", "padding-top:50px;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-5")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "class", "text-blue"), e.setAttribute(l, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px; ")
                var d = e.createTextNode("PAYMENT STATISTICS")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-7"), e.setAttribute(n, "style", "margin-bottom: 20px;")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Pool pays using the Highly Profitable Dynamic PPLNS Reward system    ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("                                   \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("br")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Current Pool Fee is ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode(" ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "class", "label label-success")
                var i = e.createComment("")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode(" only                    \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("br")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Payouts are currently credited to miners account")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode(" ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "class", "label label-success")
                var i = e.createComment("")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("br")
                e.appendChild(n, l)
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("span")
                e.setAttribute(l, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("strong"),
                    i = e.createTextNode("Total Payment Send :")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode(" ")
                e.appendChild(l, d)
                var d = e.createElement("span")
                e.setAttribute(d, "class", "label label-success")
                var i = e.createComment("")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode(" \n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createComment(" /.col-lg-12 ")
                e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("  \n        \n    ")
                e.appendChild(a, r)
                var r = e.createElement("div")
                e.setAttribute(r, "class", "row"), e.setAttribute(r, "style", "max-height: 600px; overflow-y: scroll;")
                var n = e.createTextNode("\n        ")
                e.appendChild(r, n)
                var n = e.createElement("div")
                e.setAttribute(n, "class", "col-lg-12")
                var l = e.createTextNode("\n            ")
                e.appendChild(n, l)
                var l = e.createElement("div")
                e.setAttribute(l, "class", "panel panel-warning")
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-heading")
                var i = e.createTextNode("\n                    ")
                e.appendChild(d, i)
                var i = e.createElement("i")
                e.setAttribute(i, "class", "fa fa-credit-card-alt fa-fw"), e.appendChild(d, i)
                var i = e.createTextNode(" DETAILED PAYMENT STATISTICS                    \n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n                ")
                e.appendChild(l, d)
                var d = e.createElement("div")
                e.setAttribute(d, "class", "panel-body")
                var i = e.createTextNode("\n")
                e.appendChild(d, i)
                var i = e.createComment("")
                e.appendChild(d, i)
                var i = e.createTextNode("\n                ")
                e.appendChild(d, i), e.appendChild(l, d)
                var d = e.createTextNode("\n            ")
                e.appendChild(l, d), e.appendChild(n, l)
                var l = e.createTextNode("\n        ")
                e.appendChild(n, l), e.appendChild(r, n)
                var n = e.createTextNode("\n    ")
                e.appendChild(r, n), e.appendChild(a, r)
                var r = e.createTextNode("\n\n\n\n\n\n\n\n\n\n")
                return e.appendChild(a, r), e.appendChild(t, a), t
            },
            buildRenderNodes: function (e, t, a) {
                var r = e.childAt(t, [0]),
                    n = e.childAt(r, [1, 3]),
                    l = new Array(4)
                return l[0] = e.createMorphAt(e.childAt(n, [5, 3]), 0, 0), l[1] = e.createMorphAt(e.childAt(n, [9, 3]), 0, 0), l[2] = e.createMorphAt(e.childAt(n, [13, 3]), 0, 0), l[3] = e.createMorphAt(e.childAt(r, [3, 1, 1, 3]), 1, 1), l
            },
            statements: [
                ["content", "config.PoolFee", ["loc", [null, [12, 88],
                    [12, 106]
                ]], 0, 0, 0, 0],
                ["content", "config.PaymentText", ["loc", [null, [16, 116],
                    [16, 138]
                ]], 0, 0, 0, 0],
                ["content", "model.paymentsTotal", ["loc", [null, [20, 88],
                    [20, 111]
                ]], 0, 0, 0, 0],
                ["block", "if", [
                    ["get", "model.payments", ["loc", [null, [33, 26],
                        [33, 40]
                    ]], 0, 0, 0, 0]
                ],
                    [], 0, 1, ["loc", [null, [33, 20],
                        [70, 27]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
    e.default = t
}), define("open-ethereum-pool/translations/en-in", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = {
        product: {
            html: {
                info: "<strong>{product}</strong> will cost <em>{price, number, USD}</em> if ordered by {deadline, date, time}"
            },
            info: "{product} will cost {price, number, USD} if ordered by {deadline, date, time}",
            title: "Hello world!"
        }
    }
    e.default = t
}), define("open-ethereum-pool/translations/en-us", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var t = {
        product: {
            html: {
                info: "<strong>{product}</strong> will cost <em>{price, number, USD}</em> if ordered by {deadline, date, time}"
            },
            info: "{product} will cost {price, number, USD} if ordered by {deadline, date, time}",
            title: "Hello world!"
        }
    }
    e.default = t
}), define("open-ethereum-pool/utils/intl/missing-message", ["exports", "ember-intl/utils/missing-message"], function (e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    })
}), define("open-ethereum-pool/config/environment", [], function () {
    try {
        var e = "open-ethereum-pool/config/environment",
            t = document.querySelector('meta[name="' + e + '"]').getAttribute("content"),
            a = JSON.parse(decodeURIComponent(t)),
            r = {
                default: a
            }
        return Object.defineProperty(r, "__esModule", {
            value: !0
        }), r
    } catch (t) {
        throw new Error('Could not read config from meta tag with name "' + e + '".')
    }
}), runningTests || require("open-ethereum-pool/app").default.create({
    ApiUrl: "//209.126.6.122/",
    HttpHost: "209.126.6.122",
    HttpPort: 40002,
    StratumHost: "209.126.6.122",
    StratumPort: 9009,
    StratumHost1: "209.126.6.122",
    StratumPort1: 8008,
    NicehashHost: "",
    NicehashPost: 40004,
    PoolFee: "0.01%",
    PayoutThreshold: "0.01",
    ShareDifficulty: "4000000000",
    Currency: "USD",
    CoinName: "Ethereum",
    CoinShortName: "ETH",
    PaymentText: "every hour",
    SupportMail: "",
    SupportHelpdesk: "",
    WebsiteName: "coinpoolservices.com",
    ChainAddress: "https://etherscan.io",
    TransactionAddress: "https://etherscan.io/txs",
    UncleAddress: "https://etherscan.io/uncles",
    BlockAddress: "https://etherscan.io/blocks",
    TwitterURL: "",
    TwitterHash: "",
    BlockTime: 14,
    name: "open-ethereum-pool",
    version: "0.0.0+f0c1a315"
})