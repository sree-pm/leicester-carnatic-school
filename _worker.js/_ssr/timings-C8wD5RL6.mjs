import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as school, S as saturday, d as SiteShell, f as WhatsAppCta, g as cn, h as buttonVariants, l as PageHeader, m as batches, v as fees } from "./site-shell-BMZbkOG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timings-C8wD5RL6.js
var import_jsx_runtime = require_jsx_runtime();
function Timings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Fees & timings",
			title: "Weekends. One hour. No weekday exceptions.",
			lede: `${school.window}. Four until five is closed. Last class starts at 6:00.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Now"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl text-paper",
					children: "Stacked one-to-one"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-mist",
					children: "Until we have five students, each child has a private hour inside the window, with a ten-minute gap. New families sit next to a current student so the afternoon stays one thread."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker mt-10",
					children: "When we are five or more"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl text-paper",
					children: "Fixed batches"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 divide-y divide-paper/10 border-y border-paper/10",
					children: batches.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col gap-1 py-4 sm:flex-row sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-paper",
							children: b.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-mist",
							children: [
								b.day,
								" · ",
								b.time
							]
						})]
					}, b.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 divide-y divide-paper/10 border-y border-paper/10",
					children: saturday.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-6 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-14 font-display text-lg text-cyan",
							children: row.time
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-paper-dim",
							children: row.note
						})]
					}, row.time))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-paper/10 bg-ink-2 p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Launch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-display text-5xl text-gold",
						children: [
							"£",
							school.launchFee,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl text-paper-dim",
								children: " / hour"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-mist",
						children: [
							"First ",
							school.launchSeats,
							" students, six months."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule my-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm leading-relaxed text-paper-dim",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: fees.launch }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: fees.later }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: fees.billing }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: fees.trial }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [school.siblingDiscount, "."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: fees.missed })
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 pb-16 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCta, {
				className: cn(buttonVariants({ size: "lg" })),
				children: "Request a trial class"
			})
		})
	] });
}
//#endregion
export { Timings as component };
