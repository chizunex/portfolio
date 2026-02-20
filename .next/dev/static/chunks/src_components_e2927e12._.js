(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/LoadingProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingProvider",
    ()=>LoadingProvider,
    "useLoading",
    ()=>useLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const LoadingContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useLoading() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within LoadingProvider');
    }
    return context;
}
_s(useLoading, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function LoadingProvider({ children }) {
    _s1();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingProvider.useEffect": ()=>{
            // Show loading on every pathname change
            setLoading(true);
            // Minimum 0.3 second display time
            const timer = setTimeout({
                "LoadingProvider.useEffect.timer": ()=>{
                    setLoading(false);
                }
            }["LoadingProvider.useEffect.timer"], 300);
            return ({
                "LoadingProvider.useEffect": ()=>clearTimeout(timer)
            })["LoadingProvider.useEffect"];
        }
    }["LoadingProvider.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingContext.Provider, {
        value: {
            setLoading
        },
        children: [
            children,
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-zinc-900/95 backdrop-blur-sm z-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-2 border-zinc-100 border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LoadingProvider.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LoadingProvider.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LoadingProvider.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LoadingProvider.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s1(LoadingProvider, "jf3q6W3nUnJymjRY+/BbtWfnd0U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = LoadingProvider;
var _c;
__turbopack_context__.k.register(_c, "LoadingProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const INNER_SIZE = 8;
const OUTER_SIZE = 32;
const SMOOTHING = 0.06;
const INTERACTIVE_SELECTORS = 'a, button, [data-cursor="interactive"], [data-interactive="true"]';
function CustomCursor() {
    _s();
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const followerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const followerPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visibilityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const didActivateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasMovedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const interactiveHoverCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const interactiveElementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || typeof document === 'undefined') {
                return;
            }
            const mediaQuery = window.matchMedia('(pointer: fine)');
            if (!mediaQuery.matches) {
                return;
            }
            didActivateRef.current = true;
            setIsActive(true);
            document.body.classList.add('custom-cursor-active');
            const updateCursorPosition = {
                "CustomCursor.useEffect.updateCursorPosition": (x, y)=>{
                    if (cursorRef.current) {
                        cursorRef.current.style.transform = `translate3d(${x - INNER_SIZE / 2}px, ${y - INNER_SIZE / 2}px, 0)`;
                    }
                }
            }["CustomCursor.useEffect.updateCursorPosition"];
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (event)=>{
                    const { clientX, clientY } = event;
                    mousePosition.current = {
                        x: clientX,
                        y: clientY
                    };
                    if (!hasMovedRef.current) {
                        hasMovedRef.current = true;
                        followerPosition.current = {
                            x: clientX,
                            y: clientY
                        };
                        updateCursorPosition(clientX, clientY);
                        if (followerRef.current) {
                            followerRef.current.style.transform = `translate3d(${clientX - OUTER_SIZE / 2}px, ${clientY - OUTER_SIZE / 2}px, 0)`;
                        }
                    } else {
                        updateCursorPosition(clientX, clientY);
                    }
                    if (!visibilityRef.current) {
                        visibilityRef.current = true;
                        document.body.classList.add('custom-cursor-visible');
                    }
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "CustomCursor.useEffect.handleMouseLeave": (event)=>{
                    if (event.relatedTarget === null) {
                        visibilityRef.current = false;
                        document.body.classList.remove('custom-cursor-visible');
                    }
                }
            }["CustomCursor.useEffect.handleMouseLeave"];
            const handleMouseEnter = {
                "CustomCursor.useEffect.handleMouseEnter": ()=>{
                    if (!visibilityRef.current) {
                        visibilityRef.current = true;
                        document.body.classList.add('custom-cursor-visible');
                    }
                }
            }["CustomCursor.useEffect.handleMouseEnter"];
            const handleInteractiveEnter = {
                "CustomCursor.useEffect.handleInteractiveEnter": ()=>{
                    interactiveHoverCountRef.current += 1;
                    document.body.classList.add('custom-cursor-interactive');
                }
            }["CustomCursor.useEffect.handleInteractiveEnter"];
            const handleInteractiveLeave = {
                "CustomCursor.useEffect.handleInteractiveLeave": ()=>{
                    interactiveHoverCountRef.current = Math.max(0, interactiveHoverCountRef.current - 1);
                    if (interactiveHoverCountRef.current === 0) {
                        document.body.classList.remove('custom-cursor-interactive');
                    }
                }
            }["CustomCursor.useEffect.handleInteractiveLeave"];
            const handleMouseDown = {
                "CustomCursor.useEffect.handleMouseDown": ()=>{
                    document.body.classList.add('custom-cursor-pressed');
                }
            }["CustomCursor.useEffect.handleMouseDown"];
            const handleMouseUp = {
                "CustomCursor.useEffect.handleMouseUp": ()=>{
                    document.body.classList.remove('custom-cursor-pressed');
                }
            }["CustomCursor.useEffect.handleMouseUp"];
            const interactiveElements = Array.from(document.querySelectorAll(INTERACTIVE_SELECTORS));
            interactiveElementsRef.current = interactiveElements;
            interactiveElements.forEach({
                "CustomCursor.useEffect": (element)=>{
                    element.addEventListener('mouseenter', handleInteractiveEnter);
                    element.addEventListener('mouseleave', handleInteractiveLeave);
                }
            }["CustomCursor.useEffect"]);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseout', handleMouseLeave);
            window.addEventListener('mouseenter', handleMouseEnter);
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('blur', handleMouseUp);
            const animate = {
                "CustomCursor.useEffect.animate": ()=>{
                    followerPosition.current.x += (mousePosition.current.x - followerPosition.current.x) * SMOOTHING;
                    followerPosition.current.y += (mousePosition.current.y - followerPosition.current.y) * SMOOTHING;
                    if (followerRef.current) {
                        followerRef.current.style.transform = `translate3d(${followerPosition.current.x - OUTER_SIZE / 2}px, ${followerPosition.current.y - OUTER_SIZE / 2}px, 0)`;
                    }
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            }["CustomCursor.useEffect.animate"];
            animationFrameRef.current = requestAnimationFrame(animate);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseout', handleMouseLeave);
                    window.removeEventListener('mouseenter', handleMouseEnter);
                    window.removeEventListener('mousedown', handleMouseDown);
                    window.removeEventListener('mouseup', handleMouseUp);
                    window.removeEventListener('blur', handleMouseUp);
                    interactiveElementsRef.current.forEach({
                        "CustomCursor.useEffect": (element)=>{
                            element.removeEventListener('mouseenter', handleInteractiveEnter);
                            element.removeEventListener('mouseleave', handleInteractiveLeave);
                        }
                    }["CustomCursor.useEffect"]);
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    document.body.classList.remove('custom-cursor-visible');
                    document.body.classList.remove('custom-cursor-active');
                    document.body.classList.remove('custom-cursor-interactive');
                    document.body.classList.remove('custom-cursor-pressed');
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    if (!isActive) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: followerRef,
                className: "custom-cursor-follow pointer-events-none fixed top-0 left-0 z-[9998]",
                style: {
                    transform: 'translate3d(-9999px, -9999px, 0)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "custom-cursor-follow-inner h-8 w-8 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/CustomCursor.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: "custom-cursor-point pointer-events-none fixed top-0 left-0 z-[9999]",
                style: {
                    transform: 'translate3d(-9999px, -9999px, 0)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "custom-cursor-point-inner h-2 w-2 rounded-full bg-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/CustomCursor.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "Zdb+m9k8fJcuENZviK8KzILjO50=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_e2927e12._.js.map