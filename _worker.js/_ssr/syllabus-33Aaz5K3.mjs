import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as school, d as SiteShell, f as WhatsAppCta, g as cn, h as buttonVariants, l as PageHeader, y as levels } from "./site-shell-BMZbkOG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/syllabus-33Aaz5K3.js
var import_jsx_runtime = require_jsx_runtime();
function Syllabus() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Classes",
		title: "Foundation. Geetham. Stage.",
		lede: "South Indian classical vocal, ages five and up. Each level has one outcome. Exam boards are optional, and we will say so until we register."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-14 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-14",
				children: levels.map((level, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-6 border-t border-paper/10 pt-10 lg:grid-cols-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-5xl text-cyan",
									children: level.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-3xl text-paper",
									children: level.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-mist",
									children: level.duration
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-xl italic text-paper-dim",
									children: level.outcome
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "lg:col-span-8 lg:pt-4",
							children: level.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 border-b border-paper/10 py-4 text-paper-dim last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-cyan" }), item]
							}, item))
						}),
						i === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/eye.jpg",
							alt: "Peacock eyespot",
							className: "frame col-span-full aspect-video w-full object-cover"
						}) : null
					]
				}, level.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 border border-paper/10 bg-ink-2 p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Exams"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl text-paper",
						children: "Optional. Never the point."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-mist",
						children: "We can prepare a student for London Fine Arts Academy or ABRSM Carnatic grades. Leicester Carnatic School is not affiliated with either. That sentence stays on this page until the day it is untrue."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppCta, {
				className: cn(buttonVariants(), "mt-10 inline-flex"),
				children: [
					"Book a £",
					school.trialFee,
					" trial"
				]
			})
		]
	})] });
}
//#endregion
export { Syllabus as component };
