import { r as __toESM } from "../_runtime.mjs";
import { R as require_react, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as school, T as whatsappUrl, g as cn, t as Button } from "./site-shell-BMZbkOG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquire-form-COfjR1JO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AGES = [
	"5–7",
	"8–11",
	"12–16",
	"Adult"
];
var DAYS = [
	"Saturday",
	"Sunday",
	"Either"
];
var empty = {
	parentName: "",
	studentName: "",
	age: "",
	day: "",
	phone: "",
	message: "",
	consent: false
};
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-xs font-medium tracking-wide text-paper-dim",
			children: label
		}), children]
	});
}
var inputClass = "h-11 w-full bg-ink-3 px-3 text-sm text-paper shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_14%,transparent)] outline-none transition-[box-shadow] duration-150 placeholder:text-mist/80 focus:shadow-[0_0_0_1px_var(--color-cyan)]";
function EnquireForm({ compact = false }) {
	const [fields, setFields] = (0, import_react.useState)(empty);
	const [error, setError] = (0, import_react.useState)(null);
	const [sent, setSent] = (0, import_react.useState)(false);
	function update(key, value) {
		setFields((f) => ({
			...f,
			[key]: value
		}));
	}
	function onSubmit(e) {
		e.preventDefault();
		if (fields.parentName.trim().length < 2) {
			setError("Please add a parent or guardian name.");
			return;
		}
		if (fields.studentName.trim().length < 2) {
			setError("Please add the student’s name.");
			return;
		}
		if (!fields.age) {
			setError("Please choose an age group.");
			return;
		}
		if (!fields.phone.trim()) {
			setError("A WhatsApp number helps us reply quickly.");
			return;
		}
		if (!fields.consent) {
			setError("Please consent so we can store this enquiry.");
			return;
		}
		setError(null);
		const payload = {
			...fields,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem("lcs-enquiries") || "[]");
			localStorage.setItem("lcs-enquiries", JSON.stringify([payload, ...prev].slice(0, 20)));
		} catch {}
		const body = [
			`Hello — trial enquiry for Leicester Carnatic School.`,
			``,
			`Parent / guardian: ${fields.parentName}`,
			`Student: ${fields.studentName}`,
			`Age group: ${fields.age}`,
			`Preferred day: ${fields.day || "—"}`,
			`WhatsApp: ${fields.phone}`,
			``,
			fields.message || "(no extra note)"
		].join("\n");
		setSent(true);
		window.setTimeout(() => {
			window.open(whatsappUrl(body), "_blank", "noopener,noreferrer");
		}, 250);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-paper/10 bg-ink-3 p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Sent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-3xl text-paper",
				children: "Your enquiry is ready to send."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-mist",
				children: [
					"WhatsApp should have opened to ",
					school.phoneDisplay,
					". If it did not, message that number and mention the student’s name. We confirm the weekend slot on WhatsApp."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outline",
				className: "mt-6",
				onClick: () => {
					setSent(false);
					setFields(empty);
				},
				children: "Send another"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: cn("grid gap-4", compact ? "" : "sm:grid-cols-2"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Parent / guardian",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					value: fields.parentName,
					onChange: (e) => update("parentName", e.target.value),
					autoComplete: "name",
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Student’s name",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					value: fields.studentName,
					onChange: (e) => update("studentName", e.target.value),
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Age group",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: inputClass,
					value: fields.age,
					onChange: (e) => update("age", e.target.value),
					required: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Choose"
					}), AGES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: a,
						children: a
					}, a))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Preferred day",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: inputClass,
					value: fields.day,
					onChange: (e) => update("day", e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Either is fine"
					}), DAYS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: d,
						children: d
					}, d))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "WhatsApp number",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					value: fields.phone,
					onChange: (e) => update("phone", e.target.value),
					inputMode: "tel",
					autoComplete: "tel",
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: compact ? "" : "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Anything we should know",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: cn(inputClass, "h-28 resize-y py-2.5"),
						value: fields.message,
						onChange: (e) => update("message", e.target.value),
						placeholder: "Previous lessons, shy singer, sibling joining…"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: cn("flex min-h-11 items-start gap-3 text-sm leading-snug text-mist", compact ? "" : "sm:col-span-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "mt-0.5 size-5 shrink-0 accent-cyan",
					checked: fields.consent,
					onChange: (e) => update("consent", e.target.checked),
					required: true
				}), "I agree that Leicester Carnatic School may store this enquiry (name, age group, WhatsApp) to arrange a trial. We do not share it."]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gold sm:col-span-2",
				role: "alert",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: compact ? "" : "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					className: "w-full sm:w-auto",
					children: ["Request a trial class · £", school.trialFee]
				})
			})
		]
	});
}
//#endregion
export { EnquireForm as t };
