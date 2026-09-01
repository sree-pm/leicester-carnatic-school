import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as school, T as whatsappUrl, d as SiteShell, l as PageHeader } from "./site-shell-BMZbkOG2.mjs";
import { t as EnquireForm } from "./enquire-form-COfjR1JO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquire-BrZDS2n8.js
var import_jsx_runtime = require_jsx_runtime();
function Enquire() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Book a trial",
		title: "One hour. Then we see.",
		lede: `£${school.trialFee} for the first class, folded into the month if you continue. Weekends only, ${school.location}.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-paper",
					children: "Tell us who is singing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-mist",
					children: "We offer new families a slot beside a current student. A WhatsApp number we can actually reach is how the hour is confirmed. Bank details only after you decide to continue."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "kicker",
							children: "Window"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-paper-dim",
							children: school.window
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "kicker",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-cyan hover:text-paper",
								href: whatsappUrl(),
								target: "_blank",
								rel: "noopener noreferrer",
								children: school.phoneDisplay
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "kicker",
							children: "Studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-paper-dim",
							children: school.locationNote
						})] })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquireForm, {})
		})]
	})] });
}
//#endregion
export { Enquire as component };
