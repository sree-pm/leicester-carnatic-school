import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as school, d as SiteShell, f as WhatsAppCta, g as cn, h as buttonVariants, l as PageHeader, x as rules } from "./site-shell-BMZbkOG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/safeguarding-DMXYbzwg.js
var import_jsx_runtime = require_jsx_runtime();
var policy = [
	{
		title: "Open door",
		body: "The teaching door remains open. A parent may sit in any class. After the first two lessons we ask parents to wait outside so the child can work — the door still does not close on them."
	},
	{
		title: "No physical contact",
		body: "Voice is taught by listening and demonstration. We do not correct posture or mouth shape by touch."
	},
	{
		title: "A house, not a shopfront",
		body: "Arrive five minutes early; collect on time. No shoes in the teaching room. Phones silent."
	},
	{
		title: "UK compliance",
		body: "Enhanced DBS, public liability, and a notice to the home insurer are how we operate. Names, dates of birth and WhatsApp numbers are kept only to run classes, stored privately, never sold."
	},
	{
		title: "If something is wrong",
		body: `Write to ${school.email}. Concerns about a child’s safety are referred to Leicester City Council children’s services or the NSPCC helpline (0808 800 5000). We would rather over-report than wait.`
	}
];
function Safeguarding() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Safeguarding",
		title: "A home studio with the door open.",
		lede: "Carnatic music is taught here as a craft and as a duty of care. Parents are not guests we tolerate."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-5 py-14 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-10",
				children: policy.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "kicker",
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl text-paper",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-mist",
						children: item.body
					})
				] }, item.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl text-paper",
				children: "House rules"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: rules.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm leading-relaxed text-paper-dim",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-gold" }), r]
				}, r))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCta, {
				className: cn(buttonVariants(), "mt-12 inline-flex"),
				children: "Book a trial"
			})
		]
	})] });
}
//#endregion
export { Safeguarding as component };
