import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as school, T as whatsappUrl, d as SiteShell, l as PageHeader } from "./site-shell-BMZbkOG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-SNojmlEU.js
var import_jsx_runtime = require_jsx_runtime();
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Privacy",
		title: "We keep little, and we do not share it.",
		lede: "A short notice for a small school. UK GDPR, in plain language."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl space-y-6 px-5 py-14 text-base leading-relaxed text-mist sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Leicester Carnatic School is a sole-trader home studio in ",
				school.location,
				". We hold the minimum needed to teach: student name, date of birth or age group, parent name, WhatsApp number, attendance, and fee status."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That information lives in a private sheet and in messages you send us. We use it to timetable classes, send voice notes, and collect fees. We do not sell it, and we do not use it for advertising." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Enquiries submitted here are stored in your browser until you send the WhatsApp message. Ask us to delete your family’s record by messaging",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "text-cyan hover:text-paper",
					href: whatsappUrl("Please delete our family’s record at Leicester Carnatic School."),
					target: "_blank",
					rel: "noopener noreferrer",
					children: school.phoneDisplay
				}),
				"."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are not required to register with the ICO at this scale. If that changes, this page will change with it." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: "Last updated 1 September 2026."
			})
		]
	})] });
}
//#endregion
export { Privacy as component };
