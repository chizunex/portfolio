(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/setup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>SetupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function SetupPage() {
    _s();
    const [carState, setCarState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [doorsOpen, setDoorsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const doorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const doorPartsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const wheelsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const carStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(carState);
    const doorsOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(doorsOpen);
    // Keep refs in sync with state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SetupPage.useEffect": ()=>{
            carStateRef.current = carState;
        }
    }["SetupPage.useEffect"], [
        carState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SetupPage.useEffect": ()=>{
            doorsOpenRef.current = doorsOpen;
        }
    }["SetupPage.useEffect"], [
        doorsOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SetupPage.useEffect": ()=>{
            if (!containerRef.current) return;
            // Scene setup
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x18181b);
            // Camera
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
            camera.position.set(5, 2.5, 5);
            // Renderer
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                powerPreference: 'high-performance'
            });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            renderer.setPixelRatio(1);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
            renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
            renderer.toneMappingExposure = 1.2;
            containerRef.current.appendChild(renderer.domElement);
            // Controls
            const controls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](camera, renderer.domElement);
            controls.enablePan = false;
            controls.enableZoom = true;
            controls.minDistance = 3;
            controls.maxDistance = 12;
            // Lighting
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.6);
            scene.add(ambientLight);
            // Main directional light
            const dirLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 2);
            dirLight.position.set(5, 10, 7);
            dirLight.castShadow = true;
            dirLight.shadow.mapSize.width = 4096;
            dirLight.shadow.mapSize.height = 4096;
            dirLight.shadow.bias = -0.0003;
            dirLight.shadow.normalBias = 0.05;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 30;
            dirLight.shadow.camera.left = -5;
            dirLight.shadow.camera.right = 5;
            dirLight.shadow.camera.top = 5;
            dirLight.shadow.camera.bottom = -5;
            dirLight.shadow.radius = 8;
            scene.add(dirLight);
            // Fill light
            const fillLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0.8);
            fillLight.position.set(-5, 5, -5);
            scene.add(fillLight);
            // Rim light for car silhouette
            const rimLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1);
            rimLight.position.set(0, 5, -10);
            scene.add(rimLight);
            // Ground - invisible plane for shadows only
            const groundGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](20, 20);
            const groundMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
                opacity: 0
            });
            const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](groundGeo, groundMat);
            ground.rotation.x = -Math.PI / 2;
            ground.position.y = 0;
            ground.receiveShadow = true;
            scene.add(ground);
            // Load car model
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
            loader.load('/models/gr86.glb', {
                "SetupPage.useEffect": (gltf)=>{
                    // Compute bounding box to see model size
                    const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(gltf.scene);
                    const size = box.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
                    const center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
                    const model = gltf.scene;
                    // Center the model at origin, then position it
                    model.position.x = -center.x;
                    model.position.y = -box.min.y; // Put bottom at y=0
                    model.position.z = -center.z;
                    // Scale based on model size (target ~4 meters length)
                    const targetLength = 4;
                    const scale = targetLength / size.z;
                    model.scale.set(scale, scale, scale);
                    // Add shadows - keep original materials
                    model.traverse({
                        "SetupPage.useEffect": (child)=>{
                            if (child instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]) {
                                child.castShadow = true;
                                child.receiveShadow = true;
                                const mat = child.material;
                                const nameLower = child.name.toLowerCase();
                                // Make windows 40% dark, skip headlights/taillights
                                const matName = mat.name ? mat.name.toLowerCase() : '';
                                const isWindow = nameLower.includes('glass') || nameLower.includes('window') || matName.includes('glass') || matName.includes('window');
                                const isLight = nameLower.includes('light_b') || nameLower.includes('light_f') || nameLower.includes('head') || nameLower.includes('tail_l') || nameLower.includes('lamp') || nameLower.includes('brake') || matName.includes('light_b') || matName.includes('light_f') || matName.includes('head') || matName.includes('tail_l') || matName.includes('lamp') || matName.includes('brake');
                                if (isWindow && !isLight) {
                                    if (mat.color) {
                                        mat.color.setScalar(0.2); // Set to 20% brightness
                                    }
                                    mat.opacity = 0.2; // 20% opaque
                                    mat.transparent = false;
                                    mat.depthWrite = true;
                                    mat.needsUpdate = true;
                                }
                                // Fix material rendering
                                mat.depthWrite = true;
                                mat.depthTest = true;
                                mat.polygonOffset = false;
                                mat.polygonOffsetFactor = 0;
                                mat.polygonOffsetUnits = 0;
                                if (mat instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                                    mat.envMapIntensity = 1;
                                    mat.needsUpdate = true;
                                }
                                // Find ALL door and mirror meshes - add everything
                                const name = child.name;
                                // FL Door - all front left door parts
                                if (nameLower.includes('door_fl')) {
                                    doorPartsRef.current.push({
                                        mesh: child,
                                        side: 'FL'
                                    });
                                    console.log('FL door part:', name);
                                }
                                // FR Door - all front right door parts
                                if (nameLower.includes('door_fr')) {
                                    doorPartsRef.current.push({
                                        mesh: child,
                                        side: 'FR'
                                    });
                                    console.log('FR door part:', name);
                                }
                                // Side mirrors - ALL parts (not just _0_1)
                                if (nameLower.includes('sidemirror')) {
                                    const side = nameLower.includes('_l') || nameLower.includes('left') ? 'MirrorL' : 'MirrorR';
                                    doorPartsRef.current.push({
                                        mesh: child,
                                        side
                                    });
                                    console.log('Mirror part:', name, '->', side);
                                }
                                // Track wheels
                                if (nameLower.includes('wheel') || nameLower.includes('tire') || nameLower.includes('rim')) {
                                    wheelsRef.current.set(name, child);
                                }
                            }
                        }
                    }["SetupPage.useEffect"]);
                    scene.add(model);
                    carRef.current = model;
                }
            }["SetupPage.useEffect"], undefined, {
                "SetupPage.useEffect": (error)=>{
                    console.error('Error loading model:', error);
                }
            }["SetupPage.useEffect"]);
            // Animation loop
            let doorProgress = 0;
            let wheelRotation = 0;
            const animate = {
                "SetupPage.useEffect.animate": ()=>{
                    animationRef.current = requestAnimationFrame(animate);
                    const targetProgress = doorsOpenRef.current ? 1 : 0;
                    if (Math.abs(doorProgress - targetProgress) > 0.01) {
                        doorProgress += (targetProgress - doorProgress) * 0.1;
                        // Rotate ALL door and mirror parts on Y axis (flipped)
                        doorPartsRef.current.forEach({
                            "SetupPage.useEffect.animate": ({ mesh, side })=>{
                                if (side === 'FL') {
                                    mesh.rotation.y = -doorProgress * 1.2;
                                } else if (side === 'FR') {
                                    mesh.rotation.y = doorProgress * 1.2;
                                } else if (side === 'MirrorL') {
                                    mesh.rotation.y = -doorProgress * 0.8;
                                } else if (side === 'MirrorR') {
                                    mesh.rotation.y = doorProgress * 0.8;
                                }
                            }
                        }["SetupPage.useEffect.animate"]);
                    }
                    // Engine state animations
                    if (carRef.current) {
                        if (carStateRef.current === 'idle') {
                            // Subtle rumble vibration
                            carRef.current.position.y = Math.sin(Date.now() * 0.01) * 0.001;
                        } else if (carStateRef.current === 'moving') {
                            // Gentle bobbing motion + wheel rotation
                            carRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.005;
                            // Rotate wheels
                            wheelRotation += 0.15;
                            wheelsRef.current.forEach({
                                "SetupPage.useEffect.animate": (wheel)=>{
                                    wheel.rotation.x = wheelRotation;
                                }
                            }["SetupPage.useEffect.animate"]);
                        } else {
                            // Off - no vibration
                            carRef.current.position.y = 0;
                            // Reset wheel rotation
                            wheelsRef.current.forEach({
                                "SetupPage.useEffect.animate": (wheel)=>{
                                    wheel.rotation.x = 0;
                                }
                            }["SetupPage.useEffect.animate"]);
                        }
                    }
                    controls.update();
                    renderer.render(scene, camera);
                }
            }["SetupPage.useEffect.animate"];
            animate();
            // Resize handler
            const handleResize = {
                "SetupPage.useEffect.handleResize": ()=>{
                    if (!containerRef.current || !camera || !renderer) return;
                    camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
                }
            }["SetupPage.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "SetupPage.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    cancelAnimationFrame(animationRef.current);
                    renderer.dispose();
                    if (containerRef.current && renderer.domElement) {
                        containerRef.current.removeChild(renderer.domElement);
                    }
                }
            })["SetupPage.useEffect"];
        }
    }["SetupPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-zinc-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-zinc-100 mb-2",
                        children: "Setup"
                    }, void 0, false, {
                        fileName: "[project]/src/app/setup/page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-400 mb-8",
                        children: "2022 Toyota GR86"
                    }, void 0, false, {
                        fileName: "[project]/src/app/setup/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCarState('off'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${carState === 'off' ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`,
                                        children: "Off"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/setup/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCarState('idle'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${carState === 'idle' ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`,
                                        children: "Idle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/setup/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCarState('moving'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${carState === 'moving' ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`,
                                        children: "Moving"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/setup/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/setup/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDoorsOpen(!doorsOpen),
                                className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${doorsOpen ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`,
                                children: doorsOpen ? 'Close Doors' : 'Open Doors'
                            }, void 0, false, {
                                fileName: "[project]/src/app/setup/page.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/setup/page.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/setup/page.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "h-[60vh] w-full"
            }, void 0, false, {
                fileName: "[project]/src/app/setup/page.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/setup/page.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
}
_s(SetupPage, "Scr/I4e1gcRF3fEE9VEYGLf8UWU=");
_c = SetupPage;
var _c;
__turbopack_context__.k.register(_c, "SetupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_setup_page_tsx_b78bdae3._.js.map