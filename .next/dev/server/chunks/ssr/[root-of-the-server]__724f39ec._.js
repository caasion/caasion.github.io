module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/projects/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/ProjectCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../assets/learners-lodge-logo.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../assets/ai-todo-list.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../assets/react-movie-app.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../assets/typing-transformer.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../assets/obsidian-ultimate-planner.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
const projectList = [
    {
        title: "Ultimate Planner",
        description: "A weekly planning tool built with Svelte, TypeScript, and Esbuild, integrated into Obsidian. Features dynamic templates powered by Svelte 5 reactivity, Markdown-enabled cells via Milkdown, and custom data structures for managing tasks and daily actions.",
        tags: [
            "Svelte",
            "TypeScript",
            "Esbuild",
            "Obsidian",
            "Milkdown",
            "State Management"
        ],
        link: "https://github.com/caasion/obsidian-ultimate-planner",
        img: ultimatePlanner
    },
    {
        title: "AI To-Do List",
        description: "An AI-assisted to-do list built with React, TypeScript, and Vite. Uses Firebase to embed a ChatGPT-like assistant that generates tasks and suggests plans based on energy levels, with core task management features and experiments in prompt engineering.",
        tags: [
            "React",
            "TypeScript",
            "Vite",
            "Firebase",
            "AI",
            "Prompt Engineering"
        ],
        link: "https://github.com/caasion/ai-todo-list",
        img: aiTodoList
    },
    {
        title: "Typing Transformer",
        description: "Contributed to an open-source Obsidian plugin with 9,000+ users. Improved plugin stability and performance by refactoring TypeScript and Svelte 5 code, authored clear documentation, and collaborated with maintainers through GitHub issues and PRs.",
        tags: [
            "Open Source",
            "TypeScript",
            "Svelte 5",
            "GitHub Collaboration",
            "Documentation"
        ],
        link: "https://github.com/aptend/typing-transformer-obsidian",
        img: typingTransformer
    },
    {
        title: "React Movie App",
        description: "A React.js app that integrates with The Movie Database (TMDB) API to fetch and display films. Features reusable components like a movie card and search bar, styled with Tailwind, and exploration of Appwrite for trending search tracking.",
        tags: [
            "React",
            "TMDB API",
            "TailwindCSS",
            "Appwrite",
            "Frontend Development"
        ],
        link: "https://github.com/caasion/react-movie-app",
        img: reactMovieApp
    },
    {
        title: "Learner's Lodge",
        description: "A high school club I founded to explore effective learning strategies and build a community of learners. Organized biweekly workshops on memory, focus, and study techniques inspired by neuroscience, reaching 30+ students with positive feedback.",
        tags: [
            "Leadership",
            "Workshops",
            "Community Building",
            "Education",
            "Neuroscience"
        ],
        link: "/llx",
        img: llx
    }
];
const Projects = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-16 mx-60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-6xl text-bold py-4",
                children: "Projects"
            }, void 0, false, {
                fileName: "[project]/src/app/projects/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-col row-gap-4",
                children: projectList.map(({ title, description, tags, link, img })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                        title: title,
                        description: description,
                        tags: tags,
                        link: link,
                        img: img
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/page.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/projects/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Projects;
}),
"[project]/src/app/projects/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__724f39ec._.js.map