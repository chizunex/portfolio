(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MonkeyTypeTyping.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonkeyTypeTyping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Common words for random generation
const COMMON_WORDS = [
    'the',
    'be',
    'to',
    'of',
    'and',
    'a',
    'in',
    'that',
    'have',
    'i',
    'it',
    'for',
    'not',
    'on',
    'with',
    'he',
    'as',
    'you',
    'do',
    'at',
    'this',
    'but',
    'his',
    'by',
    'from',
    'they',
    'we',
    'say',
    'her',
    'she',
    'or',
    'an',
    'will',
    'my',
    'one',
    'all',
    'would',
    'there',
    'their',
    'what',
    'so',
    'up',
    'out',
    'if',
    'about',
    'who',
    'get',
    'which',
    'go',
    'me',
    'when',
    'make',
    'can',
    'like',
    'time',
    'no',
    'just',
    'him',
    'know',
    'take',
    'people',
    'into',
    'year',
    'your',
    'good',
    'some',
    'could',
    'them',
    'see',
    'other',
    'than',
    'then',
    'now',
    'look',
    'only',
    'come',
    'its',
    'over',
    'think',
    'also',
    'back',
    'after',
    'use',
    'two',
    'how',
    'our',
    'work',
    'first',
    'well',
    'way',
    'even',
    'new',
    'want',
    'because',
    'any',
    'these',
    'give',
    'day',
    'most',
    'us',
    'computer',
    'science',
    'student',
    'working',
    'studying',
    'masters',
    'currently',
    'anything',
    'interest',
    'piques',
    'project',
    'code',
    'develop',
    'build',
    'create',
    'design',
    'learn',
    'explore',
    'discover',
    'innovate',
    'solve',
    'problem',
    'challenge'
];
const KEY_PRESS_FILES = [
    'nkcream-press-1.wav',
    'nkcream-press-2.wav',
    'nkcream-press-3.wav',
    'nkcream-press-4.wav',
    'nkcream-press-5.wav'
];
const BACKSPACE_FILE = 'nkcream-backspace.wav';
function generateRandomWords(count) {
    const words = [];
    for(let i = 0; i < count; i++){
        words.push(COMMON_WORDS[Math.floor(Math.random() * COMMON_WORDS.length)]);
    }
    return words;
}
function MonkeyTypeTyping({ h1Text, pTexts, className = '' }) {
    _s();
    const [currentElementIndex, setCurrentElementIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [userInput, setUserInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBeat, setIsBeat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasStarted, setHasStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wpm, setWpm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalChars, setTotalChars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [randomWords, setRandomWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const randomWordSegments = randomWords.map((word, idx)=>idx === randomWords.length - 1 ? word : `${word} `);
    const [completedInputs, setCompletedInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confettiCenter, setConfettiCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [highlightStyle, setHighlightStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const surfaceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isDrawingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastPointRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroBackgroundColorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('#18181b');
    const charRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wpmIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const allTextsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        h1Text,
        ...pTexts
    ]);
    const totalCharsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const keyPressBuffersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const backspaceBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioLoadPromiseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[initializeCanvas]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const canvas = canvasRef.current;
            const container = containerRef.current;
            const surface = surfaceRef.current ?? container;
            if (!canvas || !container || !surface) {
                return;
            }
            const surfaceRect = surface.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.max(1, Math.round(surfaceRect.width * dpr));
            canvas.height = Math.max(1, Math.round(surfaceRect.height * dpr));
            canvas.style.width = `${surfaceRect.width}px`;
            canvas.style.height = `${surfaceRect.height}px`;
            canvas.style.left = `${surfaceRect.left - containerRect.left}px`;
            canvas.style.top = `${surfaceRect.top - containerRect.top}px`;
            canvas.style.position = 'absolute';
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                return;
            }
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            const computedBg = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.getComputedStyle(document.body).backgroundColor || '#18181b';
            heroBackgroundColorRef.current = computedBg;
            if (surface instanceof HTMLElement) {
                surface.style.setProperty('--hero-canvas-bg', heroBackgroundColorRef.current);
            }
            ctx.fillStyle = heroBackgroundColorRef.current;
            ctx.fillRect(0, 0, surfaceRect.width, surfaceRect.height);
            canvas.style.backgroundColor = heroBackgroundColorRef.current;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.lineWidth = 2.2;
            ctx.strokeStyle = 'rgba(161, 161, 170, 0.45)';
            ctx.fillStyle = ctx.strokeStyle;
            canvasCtxRef.current = ctx;
        }
    }["MonkeyTypeTyping.useCallback[initializeCanvas]"], []);
    const isInteractiveElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[isInteractiveElement]": (element)=>{
            if (!(element instanceof Element)) {
                return false;
            }
            return Boolean(element.closest('a, button, input, textarea, select, [role="button"], [data-draw-ignore="true"], [data-draw-ignore]'));
        }
    }["MonkeyTypeTyping.useCallback[isInteractiveElement]"], []);
    const getPointerPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[getPointerPosition]": (clientX, clientY)=>{
            const surface = surfaceRef.current;
            if (!surface) {
                return null;
            }
            const rect = surface.getBoundingClientRect();
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        }
    }["MonkeyTypeTyping.useCallback[getPointerPosition]"], []);
    const beginStroke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[beginStroke]": (point)=>{
            const ctx = canvasCtxRef.current;
            if (!ctx) {
                return;
            }
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
        }
    }["MonkeyTypeTyping.useCallback[beginStroke]"], []);
    const extendStroke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[extendStroke]": (point)=>{
            const ctx = canvasCtxRef.current;
            if (!ctx) {
                return;
            }
            ctx.lineTo(point.x, point.y);
            ctx.stroke();
        }
    }["MonkeyTypeTyping.useCallback[extendStroke]"], []);
    const handlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[handlePointerDown]": (event)=>{
            if (event.button !== 0 || isInteractiveElement(event.target)) {
                return;
            }
            const point = getPointerPosition(event.clientX, event.clientY);
            if (!point) {
                return;
            }
            const surface = surfaceRef.current;
            if (surface) {
                try {
                    surface.setPointerCapture(event.pointerId);
                } catch  {
                // no-op
                }
            }
            pointerIdRef.current = event.pointerId;
            isDrawingRef.current = true;
            lastPointRef.current = point;
            beginStroke(point);
            event.preventDefault();
        }
    }["MonkeyTypeTyping.useCallback[handlePointerDown]"], [
        beginStroke,
        getPointerPosition,
        isInteractiveElement
    ]);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[handlePointerMove]": (event)=>{
            if (!isDrawingRef.current) {
                return;
            }
            const point = getPointerPosition(event.clientX, event.clientY);
            if (!point) {
                return;
            }
            extendStroke(point);
            lastPointRef.current = point;
            event.preventDefault();
        }
    }["MonkeyTypeTyping.useCallback[handlePointerMove]"], [
        extendStroke,
        getPointerPosition
    ]);
    const stopDrawing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[stopDrawing]": ()=>{
            if (pointerIdRef.current !== null && surfaceRef.current) {
                try {
                    surfaceRef.current.releasePointerCapture(pointerIdRef.current);
                } catch  {
                // no-op
                }
            }
            isDrawingRef.current = false;
            lastPointRef.current = null;
            pointerIdRef.current = null;
        }
    }["MonkeyTypeTyping.useCallback[stopDrawing]"], []);
    const handlePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[handlePointerUp]": (event)=>{
            if (!isDrawingRef.current) {
                return;
            }
            stopDrawing();
            event.preventDefault();
        }
    }["MonkeyTypeTyping.useCallback[handlePointerUp]"], [
        stopDrawing
    ]);
    const handlePointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MonkeyTypeTyping.useCallback[handlePointerLeave]": (event)=>{
            if (!isDrawingRef.current) {
                return;
            }
            if (event.target === surfaceRef.current) {
                stopDrawing();
            }
        }
    }["MonkeyTypeTyping.useCallback[handlePointerLeave]"], [
        stopDrawing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MonkeyTypeTyping.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) {
                return;
            }
            const surface = container.closest('[data-hero-surface="true"]') ?? container;
            surfaceRef.current = surface;
            initializeCanvas();
            const handleResize = {
                "MonkeyTypeTyping.useEffect.handleResize": ()=>{
                    initializeCanvas();
                }
            }["MonkeyTypeTyping.useEffect.handleResize"];
            let resizeObserver = null;
            let resizeListenerAdded = false;
            if (surface && typeof ResizeObserver !== 'undefined') {
                resizeObserver = new ResizeObserver(handleResize);
                resizeObserver.observe(surface);
            } else {
                window.addEventListener('resize', handleResize);
                resizeListenerAdded = true;
            }
            surface?.addEventListener('pointerdown', handlePointerDown, {
                passive: false
            });
            surface?.addEventListener('pointermove', handlePointerMove, {
                passive: false
            });
            surface?.addEventListener('pointerleave', handlePointerLeave);
            window.addEventListener('pointerup', handlePointerUp);
            window.addEventListener('pointercancel', handlePointerUp);
            return ({
                "MonkeyTypeTyping.useEffect": ()=>{
                    if (resizeObserver) {
                        resizeObserver.disconnect();
                    }
                    if (resizeListenerAdded) {
                        window.removeEventListener('resize', handleResize);
                    }
                    surface?.removeEventListener('pointerdown', handlePointerDown);
                    surface?.removeEventListener('pointermove', handlePointerMove);
                    surface?.removeEventListener('pointerleave', handlePointerLeave);
                    window.removeEventListener('pointerup', handlePointerUp);
                    window.removeEventListener('pointercancel', handlePointerUp);
                    stopDrawing();
                }
            })["MonkeyTypeTyping.useEffect"];
        }
    }["MonkeyTypeTyping.useEffect"], [
        handlePointerDown,
        handlePointerLeave,
        handlePointerMove,
        handlePointerUp,
        initializeCanvas,
        stopDrawing
    ]);
    const ensureAudioContext = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) {
            return null;
        }
        if (!audioContextRef.current) {
            audioContextRef.current = new AudioContextClass();
        }
        return audioContextRef.current;
    };
    const loadAudioBuffer = async (path)=>{
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Failed to load audio at ${path}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            const ctx = ensureAudioContext();
            if (!ctx) {
                return null;
            }
            if (ctx.state === 'suspended') {
                await ctx.resume().catch(()=>{});
            }
            const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
            return audioBuffer;
        } catch (error) {
            console.warn(`[MonkeyTypeTyping] Unable to load audio "${path}"`, error);
            return null;
        }
    };
    const playAudioBuffer = (buffer, playbackRate = 1)=>{
        const ctx = ensureAudioContext();
        if (!ctx || !buffer) {
            return false;
        }
        const startPlayback = ()=>{
            const source = ctx.createBufferSource();
            const gain = ctx.createGain();
            const now = ctx.currentTime;
            source.buffer = buffer;
            source.playbackRate.setValueAtTime(playbackRate, now);
            gain.gain.setValueAtTime(0.9, now);
            gain.gain.linearRampToValueAtTime(0.0001, now + buffer.duration);
            source.connect(gain);
            gain.connect(ctx.destination);
            source.start(now);
            source.onended = ()=>{
                source.disconnect();
                gain.disconnect();
            };
        };
        if (ctx.state === 'suspended') {
            ctx.resume().then(startPlayback).catch(()=>{});
        } else {
            startPlayback();
        }
        return true;
    };
    const loadAllAudioBuffers = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (keyPressBuffersRef.current.length > 0 && backspaceBufferRef.current) {
            return Promise.resolve();
        }
        if (!audioLoadPromiseRef.current) {
            audioLoadPromiseRef.current = Promise.all(KEY_PRESS_FILES.map((file)=>loadAudioBuffer(`/sounds/${file}`))).then((buffers)=>{
                keyPressBuffersRef.current = buffers.filter((buffer)=>buffer !== null);
                return loadAudioBuffer(`/sounds/${BACKSPACE_FILE}`).then((buffer)=>{
                    if (buffer) {
                        backspaceBufferRef.current = buffer;
                    }
                });
            }).finally(()=>{
                audioLoadPromiseRef.current = null;
            });
        }
        return audioLoadPromiseRef.current;
    };
    const playKeySound = (variant, expectedChar, actualChar)=>{
        const ctx = ensureAudioContext();
        if (ctx && ctx.state === 'suspended') {
            ctx.resume().catch(()=>{});
        }
        let playbackRate = variant === 'backspace' ? 0.85 : 1;
        if (variant === 'press' && expectedChar !== undefined && actualChar !== undefined && expectedChar !== actualChar) {
            playbackRate = 0.95;
        }
        if (variant === 'press' && keyPressBuffersRef.current.length === 0) {
            loadAllAudioBuffers().then(()=>{
                const buffers = keyPressBuffersRef.current;
                if (buffers.length > 0) {
                    const fallbackBuffer = buffers[Math.floor(Math.random() * buffers.length)];
                    playAudioBuffer(fallbackBuffer, playbackRate);
                }
            }).catch(()=>{});
            return;
        }
        if (variant === 'backspace' && !backspaceBufferRef.current) {
            loadAllAudioBuffers().then(()=>{
                if (backspaceBufferRef.current) {
                    playAudioBuffer(backspaceBufferRef.current, playbackRate);
                }
            }).catch(()=>{});
            return;
        }
        const buffers = keyPressBuffersRef.current;
        const buffer = variant === 'press' ? buffers.length > 0 ? buffers[Math.floor(Math.random() * buffers.length)] : null : backspaceBufferRef.current;
        if (!buffer) {
            return;
        }
        playAudioBuffer(buffer, playbackRate);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MonkeyTypeTyping.useEffect": ()=>{
            loadAllAudioBuffers().catch({
                "MonkeyTypeTyping.useEffect": ()=>{}
            }["MonkeyTypeTyping.useEffect"]);
        }
    }["MonkeyTypeTyping.useEffect"], []);
    // Reset function to restart the game
    const handleRetry = ()=>{
        setCurrentElementIndex(0);
        setUserInput('');
        setIsComplete(false);
        setIsBeat(false);
        setHasStarted(false);
        setWpm(0);
        setTotalChars(0);
        setRandomWords([]);
        setCompletedInputs(new Map());
        setShowConfetti(false);
        setConfettiCenter(null);
        setHighlightStyle(null);
        startTimeRef.current = null;
        totalCharsRef.current = 0;
        allTextsRef.current = [
            h1Text,
            ...pTexts
        ];
        charRefs.current.clear();
        // Clear WPM interval
        if (wpmIntervalRef.current) {
            clearInterval(wpmIntervalRef.current);
            wpmIntervalRef.current = null;
        }
        // Re-focus input
        setTimeout(()=>{
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 100);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MonkeyTypeTyping.useEffect": ()=>{
            // Auto-focus the input when component mounts
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["MonkeyTypeTyping.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MonkeyTypeTyping.useEffect": ()=>{
            // Re-focus when moving to next element
            if (inputRef.current && !isComplete) {
                inputRef.current.focus();
            }
        }
    }["MonkeyTypeTyping.useEffect"], [
        currentElementIndex,
        isComplete
    ]);
    // Update WPM calculation when totalChars changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MonkeyTypeTyping.useEffect": ()=>{
            if (hasStarted && startTimeRef.current && totalChars > 0 && !isBeat) {
                const elapsedMinutes = (Date.now() - startTimeRef.current) / 60000;
                if (elapsedMinutes > 0.016) {
                    // Only update if at least 1 second has passed
                    const calculatedWpm = Math.round(totalChars / 5 / elapsedMinutes);
                    if (calculatedWpm > 0) {
                        setWpm(calculatedWpm);
                    }
                }
            }
        }
    }["MonkeyTypeTyping.useEffect"], [
        totalChars,
        hasStarted,
        isBeat
    ]);
    // Cleanup interval on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MonkeyTypeTyping.useEffect": ()=>{
            return ({
                "MonkeyTypeTyping.useEffect": ()=>{
                    if (wpmIntervalRef.current) {
                        clearInterval(wpmIntervalRef.current);
                    }
                    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                        audioContextRef.current.close().catch({
                            "MonkeyTypeTyping.useEffect": ()=>{}
                        }["MonkeyTypeTyping.useEffect"]);
                    }
                }
            })["MonkeyTypeTyping.useEffect"];
        }
    }["MonkeyTypeTyping.useEffect"], []);
    // Update highlight position when userInput changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MonkeyTypeTyping.useEffect": ()=>{
            if (isComplete) {
                setHighlightStyle(null);
                return;
            }
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame({
                "MonkeyTypeTyping.useEffect": ()=>{
                    const originalTextCount = 1 + pTexts.length;
                    let currentText;
                    if (currentElementIndex < originalTextCount) {
                        currentText = allTextsRef.current[currentElementIndex];
                    } else {
                        // Random word
                        const wordIndex = currentElementIndex - originalTextCount;
                        currentText = randomWords[wordIndex];
                    }
                    if (!currentText) return;
                    const charIndex = userInput.length;
                    if (charIndex <= currentText.length && containerRef.current) {
                        // Get the character element reference
                        const charKey = `${currentElementIndex}-${charIndex}`;
                        const charElement = charRefs.current.get(charKey);
                        if (charElement) {
                            const containerRect = containerRef.current.getBoundingClientRect();
                            const charRect = charElement.getBoundingClientRect();
                            setHighlightStyle({
                                left: charRect.left - containerRect.left,
                                top: charRect.top - containerRect.top,
                                width: charRect.width,
                                height: charRect.height,
                                opacity: 1
                            });
                        } else if (charIndex === currentText.length && charIndex > 0) {
                            // At the end of text, show highlight on a space after last char
                            const lastCharKey = `${currentElementIndex}-${charIndex - 1}`;
                            const lastCharElement = charRefs.current.get(lastCharKey);
                            if (lastCharElement) {
                                const containerRect = containerRef.current.getBoundingClientRect();
                                const lastCharRect = lastCharElement.getBoundingClientRect();
                                setHighlightStyle({
                                    left: lastCharRect.right - containerRect.left,
                                    top: lastCharRect.top - containerRect.top,
                                    width: lastCharRect.width * 0.5,
                                    height: lastCharRect.height,
                                    opacity: 1
                                });
                            }
                        } else if (charIndex === 0) {
                            // At the start, get first character
                            const firstCharKey = `${currentElementIndex}-0`;
                            const firstCharElement = charRefs.current.get(firstCharKey);
                            if (firstCharElement) {
                                const containerRect = containerRef.current.getBoundingClientRect();
                                const firstCharRect = firstCharElement.getBoundingClientRect();
                                setHighlightStyle({
                                    left: firstCharRect.left - containerRect.left,
                                    top: firstCharRect.top - containerRect.top,
                                    width: firstCharRect.width,
                                    height: firstCharRect.height,
                                    opacity: 1
                                });
                            }
                        }
                    }
                }
            }["MonkeyTypeTyping.useEffect"]);
        }
    }["MonkeyTypeTyping.useEffect"], [
        userInput,
        currentElementIndex,
        isComplete,
        randomWords,
        pTexts
    ]);
    const handleInput = (e)=>{
        const value = e.target.value;
        // Start tracking when user starts typing
        if (!hasStarted && value.length > 0) {
            setHasStarted(true);
            startTimeRef.current = Date.now();
            // Start WPM calculation interval
            wpmIntervalRef.current = setInterval(()=>{
                if (startTimeRef.current && totalCharsRef.current > 0 && !isBeat) {
                    const elapsedMinutes = (Date.now() - startTimeRef.current) / 60000;
                    if (elapsedMinutes > 0.016) {
                        // Only update if at least 1 second has passed
                        const calculatedWpm = Math.round(totalCharsRef.current / 5 / elapsedMinutes);
                        if (calculatedWpm > 0) {
                            setWpm(calculatedWpm);
                        }
                    }
                }
            }, 100); // Update every 100ms for smooth counter
        }
        // Update total characters typed (only count forward progress)
        if (value.length > userInput.length) {
            const addedChars = value.length - userInput.length;
            setTotalChars((prev)=>{
                const newTotal = prev + addedChars;
                totalCharsRef.current = newTotal;
                return newTotal;
            });
        }
        const originalTextCount = 1 + pTexts.length // h1 + paragraphs
        ;
        const isTypingOriginal = currentElementIndex < originalTextCount;
        if (isTypingOriginal) {
            // Typing original text (h1 or paragraphs)
            const currentText = allTextsRef.current[currentElementIndex];
            if (value.length < userInput.length) {
                playKeySound('backspace');
            } else if (value.length > userInput.length) {
                const diff = value.length - userInput.length;
                if (diff === 1) {
                    const newChar = value[value.length - 1];
                    const expectedChar = currentText?.[value.length - 1];
                    playKeySound('press', expectedChar, newChar);
                } else {
                    playKeySound('press');
                }
            }
            setUserInput(value);
            // Check if current element is complete (exact match) or if user has typed the full length
            const isExactMatch = value === currentText;
            const hasTypedFullLength = value.length >= currentText.length;
            if (isExactMatch || hasTypedFullLength) {
                if (currentElementIndex < originalTextCount - 1) {
                    // Store the completed input before moving on
                    setCompletedInputs((prev)=>{
                        const newMap = new Map(prev);
                        newMap.set(currentElementIndex, value);
                        return newMap;
                    });
                    // Move to next original element
                    setCurrentElementIndex(currentElementIndex + 1);
                    setUserInput('');
                } else {
                    // Original paragraphs complete - generate random words to replace p text
                    if (randomWords.length === 0) {
                        // Generate fewer words to fit better in container (approximately 10-12 words per line)
                        const words = generateRandomWords(22);
                        const wordSegments = words.map((word, idx)=>idx === words.length - 1 ? word : `${word} `);
                        setRandomWords(words);
                        // Add random words to allTextsRef as individual word segments (with trailing spaces)
                        allTextsRef.current.push(...wordSegments);
                    }
                    // Store the completed input before moving on
                    setCompletedInputs((prev)=>{
                        const newMap = new Map(prev);
                        newMap.set(currentElementIndex, value);
                        return newMap;
                    });
                    // Move to first random word (which will replace the paragraphs)
                    setCurrentElementIndex(originalTextCount);
                    setUserInput('');
                }
            }
        } else {
            // Typing random words
            const wordIndex = currentElementIndex - originalTextCount;
            const currentSegment = randomWordSegments[wordIndex];
            if (currentSegment) {
                if (value.length < userInput.length) {
                    playKeySound('backspace');
                } else if (value.length > userInput.length) {
                    const diff = value.length - userInput.length;
                    if (diff === 1) {
                        const newChar = value[value.length - 1];
                        const expectedChar = currentSegment[value.length - 1];
                        playKeySound('press', expectedChar, newChar);
                    } else {
                        playKeySound('press');
                    }
                }
                setUserInput(value);
                // Check if current word is complete (exact match) or if user has typed the full length
                const isExactMatch = value === currentSegment;
                const hasTypedFullLength = value.length >= currentSegment.length;
                if (isExactMatch || hasTypedFullLength) {
                    // Store the completed input before moving on
                    setCompletedInputs((prev)=>{
                        const newMap = new Map(prev);
                        newMap.set(currentElementIndex, value);
                        return newMap;
                    });
                    if (wordIndex < randomWordSegments.length - 1) {
                        // Move to next word
                        setCurrentElementIndex(currentElementIndex + 1);
                        setUserInput('');
                    } else {
                        // First batch of random words complete - beat the game!
                        if (!isBeat && randomWords.length === 22) {
                            setIsBeat(true);
                            setIsComplete(true);
                            // Calculate center of container for confetti
                            if (containerRef.current) {
                                const rect = containerRef.current.getBoundingClientRect();
                                setConfettiCenter({
                                    x: rect.left + rect.width / 2,
                                    y: rect.top + rect.height / 2
                                });
                            }
                            setShowConfetti(true);
                            // Stop WPM counter
                            if (wpmIntervalRef.current) {
                                clearInterval(wpmIntervalRef.current);
                            }
                            // Trigger confetti explosion
                            setTimeout(()=>{
                                setShowConfetti(false);
                            }, 3000); // Confetti lasts 3 seconds
                        } else {
                            // All words in current batch complete - generate more (shouldn't happen if beat)
                            const newWords = generateRandomWords(22);
                            const newSegments = newWords.map((word, idx)=>idx === newWords.length - 1 ? word : `${word} `);
                            setRandomWords((prev)=>[
                                    ...prev,
                                    ...newWords
                                ]);
                            allTextsRef.current.push(...newSegments);
                            // Move to first new word
                            setCurrentElementIndex(currentElementIndex + 1);
                            setUserInput('');
                        }
                    }
                }
            }
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Backspace') {
            if (userInput.length === 0) {
                e.preventDefault();
                if (currentElementIndex > 0) {
                    const prevIndex = currentElementIndex - 1;
                    const prevExpected = allTextsRef.current[prevIndex] ?? '';
                    const prevCompleted = completedInputs.get(prevIndex) ?? prevExpected;
                    const truncated = prevCompleted.slice(0, -1);
                    setCurrentElementIndex(prevIndex);
                    setUserInput(truncated);
                    setCompletedInputs((prev)=>{
                        const newMap = new Map(prev);
                        if (truncated.length > 0) {
                            newMap.set(prevIndex, truncated);
                        } else {
                            newMap.delete(prevIndex);
                        }
                        return newMap;
                    });
                    setTotalChars((prev)=>{
                        const next = Math.max(0, prev - 1);
                        totalCharsRef.current = next;
                        return next;
                    });
                    if (isBeat) {
                        setIsBeat(false);
                        setIsComplete(false);
                        setShowConfetti(false);
                    }
                    playKeySound('backspace');
                }
                return;
            }
        }
        // Allow escape to blur (but will re-focus)
        if (e.key === 'Escape') {
            e.preventDefault();
            inputRef.current?.blur();
        }
    };
    const renderTextWithFeedback = (text, index, isH1, isRandomWord = false)=>{
        const renderCharacter = (char, className, key, refCallback)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: refCallback,
                className: `typing-char inline-block min-w-[0.6ch] px-[1px] ${className}`,
                children: char === ' ' ? '\u00A0' : char
            }, key, false, {
                fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                lineNumber: 980,
                columnNumber: 7
            }, this);
        if (index < currentElementIndex) {
            // Already completed - show with error highlighting preserved
            const completedInput = completedInputs.get(index) || '';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    text.split('').map((char, i)=>{
                        const isCorrect = i < completedInput.length ? char === completedInput[i] : true;
                        return renderCharacter(char, isCorrect ? isH1 ? 'text-white' : 'text-zinc-400' : 'text-red-500 bg-red-500/20', i);
                    }),
                    completedInput.length > text.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: completedInput.slice(text.length).split('').map((char, i)=>renderCharacter(char, 'text-red-500 bg-red-500/20', text.length + i))
                    }, void 0, false)
                ]
            }, void 0, true);
        } else if (index === currentElementIndex) {
            // Currently typing - show feedback
            const hasExtraChars = userInput.length > text.length;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    text.split('').map((char, i)=>{
                        const charKey = `${index}-${i}`;
                        if (i < userInput.length && i < text.length) {
                            // Already typed - show correct/incorrect
                            const isCorrect = char === userInput[i];
                            return renderCharacter(char, isCorrect ? isH1 ? 'text-white' : 'text-zinc-400' : 'text-red-500 bg-red-500/20', i, (el)=>{
                                if (el) charRefs.current.set(charKey, el);
                                else charRefs.current.delete(charKey);
                            });
                        } else {
                            // Current or future character - dimmed
                            return renderCharacter(char, isH1 ? 'text-white/50' : 'text-zinc-100/40', i, (el)=>{
                                if (el) charRefs.current.set(charKey, el);
                                else charRefs.current.delete(charKey);
                            });
                        }
                    }),
                    hasExtraChars && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: userInput.slice(text.length).split('').map((char, i)=>renderCharacter(char, 'text-red-500 bg-red-500/20', text.length + i))
                    }, void 0, false)
                ]
            }, void 0, true);
        } else {
            // Not yet reached - show dimmed
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: text.split('').map((char, i)=>renderCharacter(char, isH1 ? 'text-white/50' : 'text-zinc-100/40', i))
            }, void 0, false);
        }
    };
    // Calculate which random words to display in which paragraph
    const originalTextCount = 1 + pTexts.length // h1 + paragraphs
    ;
    // Split random words into two lines (paragraphs)
    const wordsPerLine = Math.ceil(randomWords.length / 2);
    const line1WordArray = randomWords.slice(0, wordsPerLine);
    const line2WordArray = randomWords.slice(wordsPerLine);
    // Confetti colors
    const confettiColors = [
        '#f4f4f5',
        '#ef4444',
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#8b5cf6',
        '#ec4899',
        '#06b6d4',
        '#f97316',
        '#84cc16'
    ];
    // Confetti particles - evenly distributed in a circle
    const confettiParticles = Array.from({
        length: 100
    }, (_, i)=>({
            id: i,
            angle: i / 100 * 360,
            delay: Math.random() * 0.3,
            duration: 2 + Math.random() * 1.5,
            distance: 300 + Math.random() * 400,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)]
        }));
    const renderRandomWord = (word, globalIdx)=>{
        const segment = randomWordSegments[globalIdx] ?? word;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block",
            children: renderTextWithFeedback(segment, originalTextCount + globalIdx, false, true)
        }, globalIdx, false, {
            fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
            lineNumber: 1104,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${className} relative z-10 hero-draw-surface select-none`,
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "hero-draw-canvas pointer-events-none absolute"
            }, void 0, false, {
                fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                lineNumber: 1112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    showConfetti && confettiCenter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 pointer-events-none -z-10 overflow-hidden",
                        children: confettiParticles.map((particle)=>{
                            const angleRad = particle.angle * Math.PI / 180;
                            const x = Math.cos(angleRad) * particle.distance;
                            const y = Math.sin(angleRad) * particle.distance;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute confetti-particle",
                                style: {
                                    left: `${confettiCenter.x}px`,
                                    top: `${confettiCenter.y}px`,
                                    width: '8px',
                                    height: '4px',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: particle.color,
                                    '--confetti-x': `${x}px`,
                                    '--confetti-y': `${y}px`,
                                    '--confetti-rotate': `${particle.angle + 720}deg`,
                                    '--confetti-duration': `${particle.duration}s`,
                                    '--confetti-delay': `${particle.delay}s`
                                }
                            }, particle.id, false, {
                                fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                lineNumber: 1122,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                        lineNumber: 1116,
                        columnNumber: 11
                    }, this),
                    hasStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-center mb-4",
                        style: {
                            marginTop: '-15px'
                        },
                        children: [
                            isBeat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-draw-ignore": "true",
                                    onClick: handleRetry,
                                    className: "inline-flex items-center justify-center w-8 h-8 text-zinc-400 hover:text-zinc-100 transition-colors duration-200",
                                    "aria-label": "Retry",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                            lineNumber: 1168,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                        lineNumber: 1161,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                    lineNumber: 1155,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                lineNumber: 1154,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl md:text-3xl font-light text-zinc-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-300",
                                        children: wpm
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                        lineNumber: 1179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-500 ml-2",
                                        children: "WPM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                        lineNumber: 1180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                lineNumber: 1178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                        lineNumber: 1148,
                        columnNumber: 11
                    }, this),
                    !isBeat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        value: userInput,
                        onChange: handleInput,
                        onKeyDown: handleKeyDown,
                        className: "fixed top-0 left-0 w-1 h-1 opacity-0 pointer-events-auto z-50",
                        autoFocus: true,
                        autoComplete: "off",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        onBlur: (e)=>{
                            // Re-focus after a short delay to allow clicking links
                            if (!isComplete && !isBeat) {
                                setTimeout(()=>{
                                    if (inputRef.current && document.activeElement?.tagName !== 'A') {
                                        inputRef.current.focus();
                                    }
                                }, 100);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                        lineNumber: 1187,
                        columnNumber: 11
                    }, this),
                    highlightStyle && !isComplete && !isBeat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute pointer-events-none z-10 ${currentElementIndex === 0 ? 'animate-pulse-highlight' : 'animate-pulse-highlight-dark'}`,
                        style: {
                            left: `${highlightStyle.left}px`,
                            top: `${highlightStyle.top}px`,
                            width: `${highlightStyle.width}px`,
                            height: `${highlightStyle.height}px`,
                            opacity: highlightStyle.opacity,
                            transition: 'left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                        lineNumber: 1214,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-6xl font-light text-zinc-100 mb-4 tracking-tight relative",
                        children: renderTextWithFeedback(h1Text, 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                        lineNumber: 1230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative min-h-[140px] flex flex-col items-center justify-center gap-3 mb-8",
                        children: randomWords.length === 0 ? // Original paragraphs
                        pTexts.map((text, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-zinc-200 font-light leading-relaxed text-center",
                                children: renderTextWithFeedback(text, index + 1, false)
                            }, index, false, {
                                fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                lineNumber: 1238,
                                columnNumber: 15
                            }, this)) : // Random words displayed in two paragraphs (replacing original paragraphs)
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-zinc-200 font-light leading-relaxed text-center",
                                    style: {
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        maxWidth: '100%'
                                    },
                                    children: line1WordArray.map((word, wordIdx)=>renderRandomWord(word, wordIdx))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                    lineNumber: 1248,
                                    columnNumber: 15
                                }, this),
                                line2WordArray.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-zinc-200 font-light leading-relaxed text-center",
                                    style: {
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        maxWidth: '100%'
                                    },
                                    children: line2WordArray.map((word, wordIdx)=>renderRandomWord(word, wordsPerLine + wordIdx))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                                    lineNumber: 1260,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                        lineNumber: 1233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonkeyTypeTyping.tsx",
        lineNumber: 1111,
        columnNumber: 5
    }, this);
}
_s(MonkeyTypeTyping, "Sw6fm3dpV1Ug3Coq9KtJbsqdUlY=");
_c = MonkeyTypeTyping;
var _c;
__turbopack_context__.k.register(_c, "MonkeyTypeTyping");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_MonkeyTypeTyping_tsx_ba82f125._.js.map