(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        670: function (e, t, a) {
            "use strict";
            a.r(t);
            var r,
                n,
                i,
                o,
                s,
                l,
                d,
                c,
                p,
                u,
                m,
                g,
                y = a(41),
                h = a.n(y),
                f = a(3),
                v = a.n(f),
                b = a(4),
                x = a.n(b),
                E = a(5),
                w = a.n(E),
                P = a(6),
                C = a.n(P),
                k = a(7),
                R = a.n(k),
                L = a(0),
                _ = a.n(L),
                O = a(19),
                z = a(26),
                I = a.n(z),
                M = a(27),
                N = a(1),
                S = a(2),
                j = a(17),
                T = N.b.div.withConfig({displayName: "RadarControls__LocationLabelContainer"})(["display:flex;margin-top:1.25rem;position:absolute;z-index:2;justify-content:space-between;padding:0 1rem;width:100%;top:0;left:0;touch-action:none;"]),
                Z = Object(N.b)(j.a).withConfig({displayName: "RadarControls__LocationButton"})([
                    "display:", ";align-items:center;padding:0 0.5rem;background:", ";border:none;border-radius:1.375rem;height:2.5rem;cursor:pointer;@media ", "{display:flex;}"
                ], function (e) {
                    return e.isExpanded ? "flex" : "none"
                }, N.e.neutrals.coldWhite, S.g.desktopMedium),
                B = Object(N.b)(j.a).withConfig({displayName: "RadarControls__ButtonControl"})(["width:2.5rem;height:2.5rem;padding:1px;background:#f7f9f9;border:none;border-radius:50%;box-shadow:1px 1px 1px 1px lightgray;"]),
                D = Object(N.b)(B).withConfig({displayName: "RadarControls__ExpandButton"})([
                    "display:flex;justify-content:center;align-items:center;cursor:pointer;margin-left:auto;background:", ";@media ", "{display:none;}"
                ], N.e.darkBlue, S.g.desktopMedium),
                V = N.b.img.withConfig({displayName: "RadarControls__LabelIcon"})(["width:1.5rem;height:1.5rem;"]),
                W = "".concat("", "/icons/radar"),
                A = "".concat("", "/icons/close-white.svg"),
                U = "".concat("", "/icons/radar/full-screen.svg"),
                F = (r = Object(M.a)({category: "radar", action: "expand"}), n = Object(M.a)({category: "radar", action: "collapse"}), i = Object(M.a)({category: "radar", action: "center"}), o = function (e) {
                    function i() {
                        var e,
                            a;
                        v()(this, i);
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) 
                            r[n] = arguments[n];
                        
                        return(a = w()(this, (e = C()(i)).call.apply(e, [this].concat(r)))).displayName = "RadarControls",
                        a.toggleExpand = function () {
                            var e = a.props,
                                t = e.isExpanded;
                            (0, e.setExpanded)(),
                            t ? a.captureCollapseEvent() : a.captureExpandEvent()
                        },
                        a.recenter = function () {
                            a.props.setCentre(),
                            a.captureCenterEvent()
                        },
                        a
                    }
                    return R()(i, e),
                    x()(i, [
                        {
                            key: "captureExpandEvent",
                            value: function () {}
                        }, {
                            key: "captureCollapseEvent",
                            value: function () {}
                        }, {
                            key: "captureCenterEvent",
                            value: function () {}
                        }, {
                            key: "render",
                            value: function () {
                                var e = this.props.isExpanded,
                                    t = e ? A : U,
                                    a = e ? "Close radar viewer" : "Open radar viewer.";
                                return _.a.createElement(T, null, _.a.createElement(Z, {
                                    isExpanded: e,
                                    "aria-label": "Centre on location",
                                    onClick: this.recenter
                                }, _.a.createElement(V, {
                                    "aria-hidden": !0,
                                    alt: "location",
                                    src: "".concat(W, "/map-pin.svg")
                                })), _.a.createElement(D, {
                                    "aria-label": a,
                                    onClick: this.toggleExpand
                                }, _.a.createElement("img", {
                                    src: t,
                                    alt: e ? "Collapse radar" : "Expand radar"
                                })))
                            }
                        }
                    ]),
                    i
                }(_.a.PureComponent), I()(o.prototype, "captureExpandEvent", [r], Object.getOwnPropertyDescriptor(o.prototype, "captureExpandEvent"), o.prototype), I()(o.prototype, "captureCollapseEvent", [n], Object.getOwnPropertyDescriptor(o.prototype, "captureCollapseEvent"), o.prototype), I()(o.prototype, "captureCenterEvent", [i], Object.getOwnPropertyDescriptor(o.prototype, "captureCenterEvent"), o.prototype), o),
                J = a(14),
                G = a(20),
                H = a(647),
                Y = a.n(H),
                q = a(659),
                K = a.n(q),
                Q = a(660),
                X = a(565),
                $ = a(662),
                ee = a(669),
                te = a(663),
                ae = a(568),
                re = a(610),
                ne = a(661),
                ie = a(15),
                oe = N.b.div.withConfig({displayName: "RadarPlayer__RadarPlayerWrapper"})(["touch-action:none;"]),
                se = N.b.div.withConfig({displayName: "RadarPlayer__ProgressBlockWrapper"})([
                    "flex:1;height:100%;margin-right:0.125rem;background:", ";"
                ], N.e.neutrals.lightGrey),
                le = N.b.div.withConfig({displayName: "RadarPlayer__ProgressBlock"})([
                    "transform-origin:left;height:100%;background:", ";transition:transform 500ms ease-out;", ""
                ], function (e) {
                    return e.active ? "".concat(N.e.rainBlue, " !important") : N.e.neutrals.lightGrey
                }, function (e) {
                    var t = 0 !== e.index ? "!important" : "",
                        a = e.active ? "scale(1, 1) ".concat(t) : "scale(0, 1)";
                    return "transform: ".concat(a, ";")
                }),
                de = N.b.div.withConfig({displayName: "RadarPlayer__ProgressBar"})([
                    "display:flex;height:0.25rem;background-color:", ";", ":last-child{margin:0;}"
                ], N.e.white, se),
                ce = N.b.span.withConfig({displayName: "RadarPlayer__ProgressOverlay"})([
                    "display:block;position:absolute;top:0;left:0;", " height:100%;background:rgba(94,180,233,0.05);"
                ], function (e) {
                    var t = e.noOfLayers,
                        a = e.layerNo,
                        r = "((100% - ".concat(t - 1, " * 0.125rem) / ").concat(t, ")"),
                        n = "".concat(a - 1, " * 0.125rem");
                    return "width: calc(".concat(r, " * ").concat(a, " + ").concat(n, ");")
                }),
                pe = N.b.div.withConfig({displayName: "RadarPlayer"})(["display:flex;position:relative;height:100%;align-items:center;background:rgba(231,231,231,0.3);"]),
                ue = Object(N.b)(j.a).withConfig({displayName: "RadarPlayer__Button"})(["display:flex;justify-content:center;align-items:center;padding:0;width:2.5rem;height:2.5rem;border:none;z-index:1;cursor:pointer;"]),
                me = Object(N.b)(ue).withConfig({displayName: "RadarPlayer__PlayPauseButton"})([
                    "background:", ";"
                ], N.e.darkBlue),
                ge = Object(N.b)(ue).withConfig({displayName: "RadarPlayer__StepButton"})(["background:transparent;margin-left:auto;"]),
                ye = N.b.span.withConfig({displayName: "RadarPlayer__TimeLabel"})(["margin-left:0.75rem;font:inherit;font-size:0.75rem;line-height:1rem;letter-spacing:0.5px;z-index:1;"]),
                he = N.b.img.withConfig({displayName: "RadarPlayer__Icon"})(["height:1.5rem;width:1.5rem;"]),
                fe = "".concat("", "/icons/radar"),
                ve = (s = Object(M.a)({category: "radar", action: "play"}), l = Object(M.a)({category: "radar", action: "pause"}), d = Object(M.a)({category: "radar", action: "step"}), c = function (e) {
                    function t(e) {
                        var a;
                        return v()(this, t),
                        (a = w()(this, C()(t).call(this, e))).displayName = "RadarPlayer",
                        a.getRelativeTime = function (e) {
                            var t = ie.a.utc().diff(ie.a.utc(e, "YYYYMMDDhhmm")),
                                a = Math.round(t / 6e4);
                            return a && "".concat(a, " mins ago") || ""
                        },
                        a.setRelativeTime = function (e) {
                            var t = a.getRelativeTime(e);
                            a.setState({relativeTime: t})
                        },
                        a.setTimer = function () {
                            return setInterval(function () {
                                a.setRelativeTime(a.props.time)
                            }, 6e4)
                        },
                        a.togglePlay = function () {
                            var e = a.props,
                                t = e.isPlaying;
                            (0, e.togglePlayPause)(t),
                            t ? a.capturePauseEvent() : a.capturePlayEvent()
                        },
                        a.step = function () {
                            a.props.nextLayer(),
                            a.captureStepEvent()
                        },
                        a.timer = void 0,
                        a.state = {
                            relativeTime: a.getRelativeTime(e.time)
                        },
                        a.timer = a.setTimer(),
                        a
                    }
                    return R()(t, e),
                    x()(t, [
                        {
                            key: "componentDidUpdate",
                            value: function (e) {
                                e.time !== this.props.time && this.setRelativeTime(this.props.time)
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                clearTimeout(this.timer)
                            }
                        },
                        {
                            key: "capturePlayEvent",
                            value: function () {}
                        },
                        {
                            key: "capturePauseEvent",
                            value: function () {}
                        }, {
                            key: "captureStepEvent",
                            value: function () {}
                        }, {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    a = e.activeLayer,
                                    t = e.isPlaying,
                                    r = e.timesteps,
                                    n = this.state.relativeTime;
                                return _.a.createElement(oe, null, _.a.createElement(de, null, this.props.progressRefs.map(function (e, t) {
                                    return _.a.createElement(se, {
                                        key: r[t]
                                    }, _.a.createElement(le, {
                                        innerRef: e,
                                        active: t <= a,
                                        index: t
                                    }))
                                })), _.a.createElement(pe, null, _.a.createElement(me, {
                                    "aria-label": t ? "Pause radar loop." : "Play radar loop.",
                                    onClick: this.togglePlay
                                }, _.a.createElement(he, {
                                    alt: t ? "pause" : "play",
                                    src: fe + (t ? "/pause.svg" : "/play.svg")
                                })), _.a.createElement(ye, null, n), ! t && _.a.createElement(ge, {
                                    "aria-label": "Next radar image.",
                                    onClick: this.step
                                }, _.a.createElement(he, {
                                    alt: "next",
                                    src: "".concat(fe, "/step.svg")
                                })), _.a.createElement(ce, {
                                    noOfLayers: r.length,
                                    layerNo: a + 1
                                })))
                            }
                        }
                    ]),
                    t
                }(_.a.PureComponent), I()(c.prototype, "capturePlayEvent", [s], Object.getOwnPropertyDescriptor(c.prototype, "capturePlayEvent"), c.prototype), I()(c.prototype, "capturePauseEvent", [l], Object.getOwnPropertyDescriptor(c.prototype, "capturePauseEvent"), c.prototype), I()(c.prototype, "captureStepEvent", [d], Object.getOwnPropertyDescriptor(c.prototype, "captureStepEvent"), c.prototype), c),
                be = "about:blank", // Used to be https://tiles.arcgis.com/tiles/eJi5Ccfp64bqr5ym/arcgis/rest/services but I don't want to get my website banned from the API
                xe = "".concat(be, "/proton_basemap/MapServer/tile/{z}/{y}/{x}"),
                Ee = "".concat(be, "/proton_basemap_std/MapServer/tile/{z}/{y}/{x}"),
                we = "".concat(be, "/proton_labels/MapServer/tile/{z}/{y}/{x}"),
                Pe = "".concat(be, "/proton_labels_std/MapServer/tile/{z}/{y}/{x}"),
                Ce = "".concat(be, "/proton_background_labels/MapServer/tile/{z}/{y}/{x}"),
                ke = "".concat(be, "/proton_background_labels_std/MapServer/tile/{z}/{y}/{x}"),
                Re = "".concat("", "/icons/radar"),
                Le = Object(X.i)([
                    110, -50, 158, -1
                ], "EPSG:4326", "EPSG:3857"),
                _e = Object(G.d)(.6, N.e.rainBlue),
                Oe = N.b.div.withConfig({displayName: "Map"})([
                    "position:relative;height:calc(100% - 3rem);width:100%;:focus{outline:2px solid ",
                    ";}@media ",
                    "{height:",
                    ";}.ol-scale-line{position:absolute;right:0.5rem;bottom:0.5rem;.ol-scale-line-inner{font-family:'Inter UI',sans-serif;font-size:0.625rem;line-height:1rem;letter-spacing:0.0625rem;text-align:right;color:",
                    ";border:1px solid ",
                    ";border-left:none;border-bottom:none;padding-right:0.25rem;}@media ",
                    "{right:4rem;bottom:1rem;}}.ol-overlay-container{pointer-events:none;}"
                ], N.e.focus.blue, S.g.desktopMedium, function (e) {
                    return e.isExpanded ? "calc(".concat(window.innerHeight, "px - 3rem)") : "calc(100% - 3rem)"
                }, N.e.darkBlue, N.e.darkBlue, S.g.desktopSmall),
                ze = N.b.img.withConfig({displayName: "Map__Marker"})(["width:3rem;height:3rem;margin-top:-0.75rem;"]),
                Ie = N.b.div.withConfig({displayName: "Map__ZoomControl"})([
                    "display:none;background-color:", ";@media ", "{display:flex;position:absolute;flex-direction:column;z-index:2;bottom:1rem;right:1rem;}"
                ], N.e.neutrals.coldWhite, S.g.desktopSmall),
                Me = Object(N.b)(j.a).withConfig({displayName: "Map__ZoomControlButton"})(["height:2rem;width:2rem;background:none;border:none;padding:0;cursor:pointer;outline:none;"]),
                Ne = N.b.div.withConfig({displayName: "Map__Separator"})(["border-bottom:1px solid rgba(25,30,80,0.2);margin:0 0.25rem;"]),
                Se = N.b.span.withConfig({displayName: "Map__Attribution"})([
                    "font-family:'Inter UI',sans-serif;font-size:0.625rem;position:absolute;bottom:0.5rem;left:0.5rem;z-index:1;background-color:rgba(255,255,255,0.5);@media ", "{bottom:1rem;left:1rem;}"
                ], S.g.desktopMedium),
                je = (p = Object(M.a)({category: "radar", action: "desktop - zoom in"}), u = Object(M.a)({category: "radar", action: "desktop - zoom out"}), m = function (e) {
                    function t(e) {
                        var g;
                        return v()(this, t),
                        (g = w()(this, C()(t).call(this, e))).displayName = "Map",
                        g.onResize = function () {
                            g.props.isExpanded && (g.props.scrollInPosition(), g.map.updateSize(), g.mapRef.style.height = "calc(".concat(window.innerHeight, "px - 3.25rem)"))
                        },
                        g.onMoveStart = function () {
                            g.props.isPlaying && (g.isMoving =! 0)
                        },
                        g.onMoveEnd = function () {
                            g.props.isPlaying && (g.isMoving =! 1)
                        },
                        g.onTileLoadStart = function (e) {
                            var t = e.index;
                            g.radarLayers[t].loading += 1,
                            g.updateProgress(e)
                        },
                        g.onTileLoadEnd = function (e) {
                            var t = e.index;
                            g.radarLayers[t].loaded += 1,
                            g.updateProgress(e);
                            var a = g.state.activeIndex,
                                r = g.getNextIndex(),
                                n = g.radarLayers[a];
                            n.loaded / n.loading == 1 && 0 === t && (g.radarLayers[r].layer.setVisible(!0), g.radarLayers[r].layer.setOpacity(0))
                        },
                        g.getNextIndex = function () {
                            var e = g.state.activeIndex;
                            return e + 1 > g.props.timesteps.length - 1 ? 0 : e + 1
                        },
                        g.getAfterNextIndex = function () {
                            var e = g.state.activeIndex + 2,
                                t = g.props.timesteps.length - 1;
                            return t < e ? Math.abs(e - t) - 1 : e
                        },
                        g.getPreviousIndex = function () {
                            var e = g.state.activeIndex,
                                t = g.props.timesteps;
                            return e - 1 < 0 ? t.length - 1 : e - 1
                        },
                        g.updateProgress = function (e) {
                            var t = (e.loaded / e.loading || .8).toFixed(1),
                                a = g.progressRefs[e.index];
                            a && a.current && (a.current.style.transform = "scale(".concat(t, ", 1)"), a.current.style.background = _e)
                        },
                        g.mapRef = void 0,
                        g.defaultCenter = void 0,
                        g.map = void 0,
                        g.radarLayers = void 0,
                        g.baseLayer = void 0,
                        g.secondaryLabelLayer = void 0,
                        g.labelLayer = void 0,
                        g.view = void 0,
                        g.marker = void 0,
                        g.defaultZoom = void 0,
                        g.timer = void 0,
                        g.timerStart = Date.now(),
                        g.isMoving = void 0,
                        g.progressRefs = void 0,
                        g.isRetina = void 0,
                        g.step = function (e) {
                            var t = g.props,
                                a = t.timesteps,
                                r = t.isPlaying,
                                n = g.state.activeIndex,
                                i = n === a.length - 1,
                                o = Date.now() - g.timerStart,
                                s = g.getNextIndex(),
                                l = g.getAfterNextIndex(),
                                d = g.radarLayers[n],
                                c = g.radarLayers[s],
                                p = g.radarLayers[l],
                                u = d.loaded / d.loading == 1,
                                m = c.loaded / c.loading == 1;
                            ((i ? 1e3 : 500) < o || e) && u && m && ! g.isMoving && (g.setState({activeIndex: s}), c.layer.setOpacity(1), g.radarLayers[n].layer.setVisible(!1), g.radarLayers[n].layer.setOpacity(0), p.layer.setVisible(!0), p.layer.setOpacity(0), g.timerStart = Date.now()),
                            r && requestAnimationFrame(function () {
                                return g.step()
                            })
                        },
                        g.loop = function () {
                            g.timer = requestAnimationFrame(function () {
                                return g.step()
                            })
                        },
                        g.stop = function () {
                            cancelAnimationFrame(g.timer)
                        },
                        g.togglePlay = function (e) {
                            g.props.setPlaying(! e)
                        },
                        g.createRadarLayer = function (e, t, a) {
                            var r = new $.a({
                                    extent: Le,
                                    source: new ne.a(
                                        {
                                            url: "".concat("about:blank", "/").concat(e, "/{z}/{x}/{y}.png"), // Used to be https://api.weather.bom.gov.au/v1/rainradar/tiles but I don't want to get my website banned from the API
                                            tileSize: 256,
                                            minZoom: 3,
                                            maxZoom: 10,
                                            transition: 0
                                        }
                                    ),
                                    visible: a,
                                    opacity: a ? 1 : 0,
                                    zIndex: 2
                                }),
                                n = {
                                    loading: 0,
                                    loaded: 0,
                                    timestep: e,
                                    layer: r,
                                    index: t
                                };
                            return r.getSource().on("tileloadstart", function () {
                                return g.onTileLoadStart(n)
                            }),
                            r.getSource().on("tileloadend", function () {
                                return g.onTileLoadEnd(n)
                            }),
                            r.getSource().on("tileloaderror", function () {
                                return g.onTileLoadEnd(n)
                            }),
                            n
                        },
                        g.createRadarLayers = function (e) {
                            return e.map(function (e, t) {
                                return g.createRadarLayer(e, t, g.state.activeIndex === t)
                            })
                        },
                        g.updateRadarLayers = function () {
                            g.stop();
                            var e = g.state.activeIndex,
                                t = g.props.timesteps,
                                n = 0;
                            t.forEach(function (t, e) {
                                var a = g.radarLayers && g.radarLayers.find(function (e) {
                                    return e.timestep === t
                                });
                                if (a) 
                                    a.index = e;
                                 else {
                                    var r = g.createRadarLayer(t, e, !1);
                                    g.map.addLayer(r.layer),
                                    g.radarLayers.push(r),
                                    n += 1
                                }
                            }),
                            g.radarLayers.splice(0, n).forEach(function (e) {
                                g.map.removeLayer(e.layer)
                            });
                            var a = g.getPreviousIndex();
                            g.radarLayers[a].layer.setVisible(!1),
                            g.radarLayers[e].layer.setVisible(!1),
                            g.radarLayers[0].layer.setVisible(!0),
                            g.radarLayers[0].layer.setOpacity(1),
                            g.radarLayers[1].layer.setVisible(!0),
                            g.radarLayers[1].layer.setOpacity(0),
                            g.setState({activeIndex: 0}),
                            g.props.isPlaying && g.loop()
                        },
                        g.center = function () {
                            g.map.updateSize(),
                            g.view.animate({center: g.defaultCenter, duration: 500, zoom: g.defaultZoom, easing: ae.c}),
                            g.props.setCentre(!1)
                        },
                        g.resizeMap = function () {
                            g.map.updateSize()
                        },
                        g.zoomIn = function () {
                            g.view.setZoom(g.map.getView().getZoom() + 1),
                            g.captureZoomInEvent()
                        },
                        g.zoomOut = function () {
                            g.view.setZoom(g.map.getView().getZoom() - 1),
                            g.captureZoomOutEvent()
                        },
                        g.state = {
                            activeIndex: 0
                        },
                        g.isRetina = K()(),
                        g.progressRefs = e.timesteps.map(function () {
                            return _.a.createRef()
                        }),
                        g
                    }
                    return R()(t, e),
                    x()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    a = t.latitude,
                                    r = t.longitude,
                                    n = t.timesteps;
                                window.addEventListener("resize", this.onResize),
                                this.baseLayer = new $.a({
                                    extent: Le,
                                    source: new ne.a(
                                        {
                                            url: this.isRetina ? xe : Ee,
                                            tilePixelRatio: this.isRetina ? 2 : 1
                                        }
                                    )
                                }),
                                this.secondaryLabelLayer = new $.a({
                                    extent: Le,
                                    source: new ne.a(
                                        {
                                            url: this.isRetina ? Ce : ke,
                                            tilePixelRatio: this.isRetina ? 2 : 1
                                        }
                                    ),
                                    zIndex: 1
                                }),
                                this.labelLayer = new $.a({
                                    extent: Le,
                                    source: new ne.a(
                                        {
                                            url: this.isRetina ? we : Pe,
                                            tilePixelRatio: this.isRetina ? 2 : 1
                                        }
                                    ),
                                    zIndex: 3
                                }),
                                this.labelLayer.getSource().on("tileloaderror", function (e) {
                                    var t = function (e) {
                                        e.getImage().src = "".concat("", "/icons/radar/empty.png")
                                    };
                                    e.tile.tileLoadFunction_ !== t && (e.tile.tileLoadFunction_ = t, e.tile.load())
                                }),
                                this.radarLayers = this.createRadarLayers(n),
                                this.defaultCenter = Object(X.d)([r, a]),
                                this.defaultZoom = 9,
                                this.view = new re.a({
                                    center: this.defaultCenter,
                                    zoom: this.defaultZoom,
                                    enableRotation: !1,
                                    extent: Le,
                                    maxZoom: 10,
                                    minZoom: 4
                                });
                                var i = new ee.a,
                                    o = [this.baseLayer, this.secondaryLabelLayer, this.labelLayer];
                                this.radarLayers.forEach(function (e) {
                                    return o.push(e.layer)
                                }),
                                this.map = new Q.a({target: "radarMap", layers: o, controls: [i], view: this.view}),
                                this.marker = new te.a({
                                    position: Object(X.d)(
                                        [r, a]
                                    ),
                                    positioning: "center-center",
                                    element: document.getElementById("marker") || void 0
                                }),
                                this.map.addOverlay(this.marker),
                                this.map.on("movestart", function () {
                                    return e.onMoveStart()
                                }),
                                this.map.on("moveend", function () {
                                    return e.onMoveEnd()
                                })
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function (e) {
                                return !(this.props.isCentred && ! e.isCentred)
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (e) {
                                var t = this.props,
                                    a = t.isPlaying,
                                    r = t.isExpanded,
                                    n = t.isCentred,
                                    i = t.timesteps;
                                ! e.isPlaying && a && this.loop(),
                                e.isPlaying && ! a && this.stop(),
                                ! e.isExpanded && r && this.onResize(),
                                e.isExpanded && ! r && (this.mapRef.style.height = "calc(100% - 3.25rem)", this.center()),
                                e.isCentred !== n && this.center(),
                                Y()(i, e.timesteps) || this.updateRadarLayers();
                                var o = e.latitude,
                                    s = e.longitude,
                                    l = this.props,
                                    d = l.latitude,
                                    c = l.longitude;
                                o === d && s === c || (this.defaultCenter = Object(X.d)([c, d]), this.marker.setPosition(this.defaultCenter), this.center())
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                window.removeEventListener("resize", this.onResize),
                                clearTimeout(this.timer)
                            }
                        }, {
                            key: "captureZoomInEvent",
                            value: function () {}
                        }, {
                            key: "captureZoomOutEvent",
                            value: function () {}
                        }, {
                            key: "render",
                            value: function () {
                                var t = this,
                                    e = this.props,
                                    a = e.isPlaying,
                                    r = e.timesteps,
                                    n = e.isExpanded,
                                    i = this.state.activeIndex;
                                return _.a.createElement(_.a.Fragment, null, _.a.createElement(Oe, {
                                    tabIndex: 0,
                                    "aria-label": "Radar viewer. Use arrow keys to pan and plus and minus keys to zoom.",
                                    isExpanded: n,
                                    id: "radarMap",
                                    innerRef: function (e) {
                                        t.mapRef = e
                                    }
                                }, _.a.createElement(ze, {
                                    id: "marker",
                                    alt: "Location",
                                    src: "".concat(Re, "/map-pin.svg")
                                }), _.a.createElement(Ie, null, _.a.createElement(Me, {
                                    "aria-label": "zoom in",
                                    onClick: this.zoomIn
                                }, _.a.createElement("img", {
                                    alt: "zoom in",
                                    src: "".concat(Re, "/zoom-in.svg")
                                })), _.a.createElement(Ne, null), _.a.createElement(Me, {
                                    "aria-label": "zoom out",
                                    onClick: this.zoomOut
                                }, _.a.createElement("img", {
                                    alt: "zoom out",
                                    src: "".concat(Re, "/zoom-out.svg")
                                }))), _.a.createElement(Se, {
                                    id: "attribution"
                                }, "© ", _.a.createElement("a", {
                                    href: "https://www.openstreetmap.org/copyright"
                                }, "OpenStreetMap"), " contributors © ", _.a.createElement("a", {
                                    href: "https://www.arcgis.com/home/item.html?id=30e5fe3149c34df1ba922e6f5bbf808f"
                                }, "ESRI"))), _.a.createElement(ve, {
                                    isPlaying: a,
                                    nextLayer: function () {
                                        return t.step(!0)
                                    },
                                    togglePlayPause: this.togglePlay,
                                    activeLayer: i,
                                    timesteps: r,
                                    time: r[i],
                                    progressRefs: this.progressRefs
                                }))
                            }
                        }
                    ]),
                    t
                }(_.a.Component), I()(m.prototype, "captureZoomInEvent", [p], Object.getOwnPropertyDescriptor(m.prototype, "captureZoomInEvent"), m.prototype), I()(m.prototype, "captureZoomOutEvent", [u], Object.getOwnPropertyDescriptor(m.prototype, "captureZoomOutEvent"), m.prototype), m),
                Te = [
                    "#f5f5ff",
                    "#b4b4ff",
                    "#7878ff",
                    "#1414ff",
                    "#00d8c3",
                    "#009690",
                    "#006666",
                    "#ffff00",
                    "#ffc800",
                    "#ff9600",
                    "#ff6400",
                    "#ff0000",
                    "#c80000",
                    "#780000",
                    "#280000"
                ],
                Ze = N.b.div.withConfig({displayName: "Radar__RadarLegend"})([
                    "height:0.5rem;flex:1;background:", ";"
                ], function (e) {
                    return e.color
                }),
                Be = N.b.div.withConfig({displayName: "Radar__RadarLegends"})(["display:flex;"]),
                De = N.b.div.withConfig({displayName: "Radar__RadarWrapper"})([
                    "@media ", "{margin:0 2.5rem 1.5rem 2.5rem;}@media ", "{margin:0;}"
                ], S.g.tabletPortrait, S.g.tabletLandscape),
                Ve = Object(N.b)(J.a).withConfig({displayName: "Radar__RadarLayoutWrapper"})([
                    "max-width:",
                    ";width:",
                    ";@media ",
                    "{",
                    "{margin:",
                    ";}}@media ",
                    "{width:auto;}"
                ], function (e) {
                    return e.expanded ? "100%" : "auto"
                }, function (e) {
                    return e.expanded ? "100%" : "auto"
                }, S.g.tabletPortrait, De, function (e) {
                    return e.expanded ? 0 : ""
                }, S.g.desktopMedium),
                We = N.b.div.withConfig({displayName: "Radar__MapWrapper"})([
                    "position:relative;background-color:",
                    ";height:",
                    ";@media ",
                    "{height:",
                    ";}@media ",
                    "{height:",
                    ";}@media ",
                    "{height:39rem;}@media ",
                    "{height:45rem;}"
                ], N.e.white, function (e) {
                    return e.expanded ? "100vh" : "27.75rem"
                }, S.g.mobileMedium, function (e) {
                    return e.expanded ? "100vh" : "32.75rem"
                }, S.g.tabletPortrait, function (e) {
                    return e.expanded ? "100vh" : "30.25rem"
                }, S.g.desktopMedium, S.g.desktopExtraLarge),
                Ae = N.b.div.withConfig({displayName: "Radar__ActivateLayer"})([
                    "display:",
                    ";position:absolute;width:100%;top:0;left:0;z-index:2;cursor:pointer;height:25rem;@media ",
                    "{height:30rem;}@media ",
                    "{height:27.5rem;}@media ",
                    "{display:none;}"
                ], function (e) {
                    return e.isExpanded ? "none" : "block"
                }, S.g.mobileMedium, S.g.tabletPortrait, S.g.desktopMedium),
                Ue = N.b.h2.withConfig({displayName: "Radar__Title"})([
                    "font-size:1rem;font-weight:500;line-height:1.5rem;margin-bottom:0.5rem;margin-top:3rem;padding:0.5rem;@media ", "{margin-bottom:0;margin-top:2rem;padding:2rem 0;}@media ", "{font-size:1.25rem;line-height:1.75rem;}"
                ], S.g.tabletPortrait, S.g.desktopMedium),
                Fe = Object(O.observer)(g = function (e) {
                    function a(e) {
                        var t;
                        return v()(this, a),
                        (t = w()(this, C()(a).call(this, e))).displayName = "Radar",
                        t.onResize = function () {
                            1280 <= document.body.clientWidth && t.state.isExpanded && t.setState({
                                isExpanded: !1
                            })
                        },
                        t.setPlaying = function (e) {
                            t.setState({isPlaying: e})
                        },
                        t.setCentre = function (e) {
                            t.setState({isCentred: e})
                        },
                        t.setExpanded = function (e) {
                            t.setState({isExpanded: e}),
                            e && t.scrollIntoPosition(),
                            t.setHotJarVisible(! e)
                        },
                        t.setHotJarVisible = function (e) {
                            var t = document.getElementById("_hj_feedback_container");
                            t && (t.style.display = e ? "block" : "none")
                        },
                        t.initialiseObserver = function () {
                            ! t.observer && t.mapContainer && (t.observer = new IntersectionObserver(t.handleIntersection), t.observer.observe(t.mapContainer))
                        },
                        t.handleIntersection = function (e) {
                            e.forEach(function (e) {
                                e.isIntersecting && ! t.state.isPlaying ? t.setPlaying(!0) : t.setPlaying(!1)
                            })
                        },
                        t.scrollIntoPosition = function () {
                            t.mapContainer && setTimeout(function () {
                                t.mapContainer.scrollIntoView()
                            }, 0)
                        },
                        t.mapContainer = void 0,
                        t.observer = void 0,
                        t.state = {
                            isPlaying: !1,
                            isCentred: !1,
                            isExpanded: !1
                        },
                        t
                    }
                    return R()(a, e),
                    x()(a, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                window.addEventListener("resize", this.onResize),
                                this.initialiseObserver()
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function () {
                                window.removeEventListener("resize", this.onResize),
                                this.observer.unobserve(this.mapContainer)
                            }
                        }, {
                            key: "render",
                            value: function () {
                                var t = this,
                                    e = this.state,
                                    a = e.isExpanded,
                                    r = e.isCentred,
                                    n = e.isPlaying,
                                    i = this.props.location,
                                    o = i.radar,
                                    s = i.data,
                                    l = s.latitude,
                                    d = s.longitude,
                                    c = o.timesteps;
                                return _.a.createElement(Ve, {
                                    expanded: a
                                }, _.a.createElement(De, null, _.a.createElement(Ue, null, "Rain radar"), _.a.createElement("span", {
                                    className: "hidden-visually"
                                }, "This is a live rain radar that updates every 10 minutes."), _.a.createElement(We, {
                                    expanded: a,
                                    innerRef: function (e) {
                                        t.mapContainer = e
                                    }
                                }, _.a.createElement(Ae, {
                                    isExpanded: a,
                                    onClick: function () {
                                        return t.setExpanded(!0)
                                    }
                                }), _.a.createElement(Be, null, Te.map(function (e) {
                                    return _.a.createElement(Ze, {
                                        key: e,
                                        color: e
                                    })
                                })), _.a.createElement(F, {
                                    isExpanded: a,
                                    setExpanded: function () {
                                        return t.setExpanded(! a)
                                    },
                                    setCentre: function () {
                                        return t.setCentre(!0)
                                    }
                                }), c && c.length && _.a.createElement(je, {
                                    scrollInPosition: this.scrollIntoPosition,
                                    setPlaying: this.setPlaying,
                                    setCentre: this.setCentre,
                                    isExpanded: a,
                                    isPlaying: n,
                                    isCentred: r,
                                    timesteps: c.slice(),
                                    latitude: l,
                                    longitude: d
                                }))))
                            }
                        }
                    ], [{
                            key: "getDerivedStateFromProps",
                            value: function (e, t) {
                                return e.location.radar.isActive ? null : h()({}, t, {
                                    isPlaying: !1
                                })
                            }
                        }]),
                    a
                }(_.a.Component)) || g;
            a.d(t, "default", function () {
                return Fe
            })
        }
    }
]);
