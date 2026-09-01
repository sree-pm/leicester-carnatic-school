import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as school, d as SiteShell, l as PageHeader, v as fees } from "./site-shell-BMZbkOG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-Op58e0F1.js
var import_jsx_runtime = require_jsx_runtime();
function Terms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Terms",
		title: "How the hour is held.",
		lede: "Fees, missed classes, and the weekend window — written once so nobody is surprised."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-paper",
					children: "Fees"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-mist",
					children: fees.billing
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-mist",
					children: fees.launch
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-mist",
					children: fees.later
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-mist",
					children: fees.trial
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-paper",
				children: "Missed classes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-mist",
				children: fees.missed
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-paper",
				children: "The window"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-base leading-relaxed text-mist",
				children: [
					"Teaching happens only ",
					school.window,
					". No weekday classes, no weekday makeups. Last class starts at 6:00 PM. 4:00–5:00 PM is never booked."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-paper",
				children: "Studio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-base leading-relaxed text-mist",
				children: [school.locationNote, " No shoes in the teaching area. Collect on time. A music notebook is the student’s; voice notes are ours."]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-mist",
				children: "Last updated 1 September 2026."
			})
		]
	})] });
}
//#endregion
export { Terms as component };
