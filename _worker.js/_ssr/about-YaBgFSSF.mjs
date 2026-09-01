import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as school, d as SiteShell, f as WhatsAppCta, g as cn, h as buttonVariants, l as PageHeader, p as audiences } from "./site-shell-BMZbkOG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-YaBgFSSF.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "About",
			title: "A Leicester home studio. A year to a hall.",
			lede: "Carnatic vocal, taught from a house, for children and adults who intend to perform — not to collect worksheets."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "The teacher"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-section",
						children: "Patience, voice, the stage."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4 text-base leading-relaxed text-mist",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Classes are taught by a female Carnatic vocalist, in Tamil and English, from a Leicester home. The first class was ",
								school.firstClass,
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lineage — guru, years, city — will be listed here when it is written down. Nothing is claimed ahead of fact. We are not affiliated with London Fine Arts Academy or ABRSM. The syllabus can prepare a student who later sits those grades." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The work is beginner-patient: aligning a young voice to shruti, keeping tala honest, and putting a child on a temple stage without shrinking." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppCta, {
						className: cn(buttonVariants(), "mt-8 inline-flex"),
						children: [
							"Book a £",
							school.trialFee,
							" trial"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/filaments.jpg",
					alt: "Luminous cyan peacock filaments on dark water",
					className: "frame aspect-3/2 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-mist",
					children: school.locationNote
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-paper/10 bg-ink-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Who walks in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-8 sm:grid-cols-2",
					children: audiences.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-paper",
						children: a.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-mist",
						children: a.body
					})] }, a.title))
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
