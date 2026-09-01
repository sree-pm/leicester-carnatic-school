import { r as __toESM } from "../_runtime.mjs";
import { R as require_react, _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-BMZbkOG2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Peacock feather — vane + eyespot. No stick. Reads at 16px. */
function PeacockMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 52",
		fill: "none",
		"aria-hidden": "true",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 1.6C16.2 9.4 8.6 21.2 9.8 32.4c.8 7.2 6.4 12.6 12.2 10.8 8-2.2 11.2-13.4 6.2-26.2C25.8 10.2 22.6 4.4 20 1.6Z",
				className: "fill-cyan/15 stroke-cyan",
				strokeWidth: "1.55",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20.2 5.5c-.6 8.2-.2 16.5 1.4 27.2",
				className: "stroke-cyan/45",
				strokeWidth: "1",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M17.6 11c-2.8 6.8-4.6 13.4-3.8 21",
				className: "stroke-cyan/40",
				strokeWidth: "0.8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22.8 10c-1.4 6.6-2 13.2-1 21.5",
				className: "stroke-cyan/30",
				strokeWidth: "0.75",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "22.4",
				cy: "36.2",
				rx: "5.4",
				ry: "6",
				className: "stroke-gold",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "22.4",
				cy: "36.4",
				rx: "2.55",
				ry: "2.9",
				className: "fill-ink"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "22.4",
				cy: "36.5",
				r: "1.15",
				className: "fill-cyan"
			})
		]
	});
}
function Wordmark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeacockMark, { className: "h-10 w-8 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-sans text-[0.625rem] font-medium uppercase tracking-kicker text-cyan",
				children: "Leicester"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 font-display text-base text-paper sm:text-lg",
				children: "Carnatic School"
			})]
		})]
	});
}
var stroke = {
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.6,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
function IconHour({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-6", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "8.25",
			...stroke
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 8.2v4.1l2.8 1.7",
			...stroke
		})]
	});
}
function IconVoice({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-6", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M9 9.5v5M12 8v8M15 10v4",
			...stroke
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "8.25",
			...stroke
		})]
	});
}
function IconListen({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-6", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 10.5c0-2.4 1.8-4.3 4-4.3s4 1.9 4 4.3c0 2.2-1.2 3.2-1.2 5.2h-5.6c0-2-1.2-3-1.2-5.2Z",
			...stroke
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10 19h4",
			...stroke
		})]
	});
}
function IconStage({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-6", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4.5 18.5h15",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7 18.5v-4.5l5-6 5 6v4.5",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "11.5",
				r: "1.2",
				className: "fill-current"
			})
		]
	});
}
function IconShield({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-6", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 4.5 6.5 6.8v5.2c0 3.4 2.3 5.8 5.5 7.5 3.2-1.7 5.5-4.1 5.5-7.5V6.8L12 4.5Z",
			...stroke
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M9.8 12.1 11.4 13.7 14.4 10.4",
			...stroke
		})]
	});
}
function IconHome({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-6", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4.8 11.2 12 5.2l7.2 6V19a1 1 0 0 1-1 1h-4.4v-5.2h-3.6V20H5.8a1 1 0 0 1-1-1v-7.8Z",
			...stroke
		})
	});
}
function IconUsers({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-6", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "9",
				cy: "9",
				r: "2.4",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4.8 18c.4-2.4 2.1-3.7 4.2-3.7s3.8 1.3 4.2 3.7",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16.2",
				cy: "9.4",
				r: "2",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M15 14.4c1.8 0 3.3 1 3.8 3.1",
				...stroke
			})
		]
	});
}
var school = {
	name: "Leicester Carnatic School",
	shortName: "LCS",
	tagline: "Ready for the stage in a year.",
	location: "Leicester, UK",
	locationNote: "Home studio. Street address sent on enrolment.",
	email: "enquire@leicestercarnaticschool.co.uk",
	phoneDisplay: "+44 7587 715645",
	whatsappE164: "447587715645",
	languages: ["Tamil", "English"],
	window: "Saturday & Sunday, 1:00–7:00 PM",
	launchFee: 10,
	futureFee: 15,
	trialFee: 10,
	launchSeats: 10,
	siblingDiscount: "10% off the second child",
	termWeekends: 12,
	firstClass: "30 August 2026"
};
var DEFAULT_WHATSAPP_TEXT = "Hello — I’d like to book a £10 trial at Leicester Carnatic School.";
function whatsappUrl(text = DEFAULT_WHATSAPP_TEXT) {
	return `https://wa.me/${school.whatsappE164}?text=${encodeURIComponent(text)}`;
}
var nav = [
	{
		label: "Classes",
		to: "/syllabus"
	},
	{
		label: "Method",
		to: "/",
		hash: "method"
	},
	{
		label: "Fees",
		to: "/timings"
	},
	{
		label: "Trust",
		to: "/safeguarding"
	}
];
var stats = [
	{
		value: "60 min",
		label: "Every lesson. Not 30."
	},
	{
		value: "£10/hr",
		label: "First ten seats, six months."
	},
	{
		value: "6–12 mo",
		label: "To a temple kutcheri."
	},
	{
		value: "1–7 PM",
		label: "Weekends only. Leicester."
	}
];
var audiences = [
	{
		title: "Beginners, from five",
		body: "Sarali on day one. No ‘musical family’ required. If they can copy a note, they can start."
	},
	{
		title: "The child who froze",
		body: "They can sing at home and vanish on a stage. We put a classmate in the room so a hall is not the first audience."
	},
	{
		title: "Adults who meant to start",
		body: "Same hour, same syllabus. No children’s class energy. You will be taken seriously."
	},
	{
		title: "A second sibling",
		body: "Ten percent off the second child. Same afternoon, stacked slots, one pickup."
	}
];
var methodBeats = [
	{
		minutes: 30,
		title: "They are taught",
		body: "New line, voice, correction. One pair of ears on one student — not a group fudge."
	},
	{
		minutes: 15,
		title: "They sing it back",
		body: "Alone. A peer holds tala. The teacher only confirms. This is the first stage."
	},
	{
		minutes: 15,
		title: "They listen",
		body: "Clap tala for the next child. Catch the slip. Learn the phrase before it is their turn."
	}
];
var levels = [
	{
		n: "01",
		name: "Foundation",
		duration: "3–6 months",
		outcome: "They can hold shruti and tala without looking at you.",
		items: [
			"Sarali Varisai at three speeds",
			"Janta and Dhatu Varisai",
			"Alankaram in seven talas",
			"Voice work and pitch alignment"
		]
	},
	{
		n: "02",
		name: "Geetham",
		duration: "4–6 months",
		outcome: "They can sing a song, in time, to a room of family.",
		items: [
			"Pillari and Sanchari Geetham",
			"Swarajathi",
			"Raga and tala, named and felt",
			"First home kutcheri"
		]
	},
	{
		n: "03",
		name: "Stage ready",
		duration: "6–12 months",
		outcome: "They can walk on, take a mic, and leave the hall standing.",
		items: [
			"Adi tala varnam",
			"Keerthanai — Tyagaraja, Dikshitar, Syama Sastri",
			"Alapana and kalpana swaram, begun properly",
			"Temple / association debut"
		]
	}
];
var saturday = [
	{
		time: "1:00",
		note: "Doors. Shoes off. Shruti on."
	},
	{
		time: "2:00",
		note: "Stacked hour — beginners (when we batch)."
	},
	{
		time: "3:10",
		note: "Stacked hour — beginners+."
	},
	{
		time: "4:00",
		note: "House is closed. No bookings."
	},
	{
		time: "5:00",
		note: "Geetham and stage prep."
	},
	{
		time: "6:00",
		note: "Last class starts. Ends 7:00."
	}
];
var fees = {
	launch: "First ten students pay £10/hour, locked for six months.",
	later: "From seat eleven: £15/hour.",
	billing: "Paid monthly on the 1st by bank transfer. Four-week month £40. Five-week month £50. No cash.",
	trial: "The first class is £10. If you continue, it counts toward the month.",
	missed: "WhatsApp us 24 hours ahead. One Sunday makeup per term if a slot exists. Miss it and the hour is gone — no weekday catch-up, no refund. If we cancel, you get a makeup inside two weeks."
};
var batches = [
	{
		day: "Saturday",
		time: "2:00–3:00 PM",
		name: "Beginners"
	},
	{
		day: "Saturday",
		time: "3:10–4:10 PM",
		name: "Beginners+"
	},
	{
		day: "Saturday",
		time: "5:00–6:00 PM",
		name: "Geetham+"
	},
	{
		day: "Sunday",
		time: "2:00–3:00 PM",
		name: "New joiners / makeups"
	},
	{
		day: "Sunday",
		time: "3:10–4:10 PM",
		name: "Rehearsal / stage"
	}
];
var rules = [
	"Fifteen minutes’ practice a day. Parents sit with under-tens.",
	"Five minutes early. Collected on time — this is a house.",
	"Parents may sit the first two lessons, then wait outside. The door stays open.",
	"A music notebook every week. Homework is written in it, by hand.",
	"Bring a shruti-box app if you have one. Pitch is taught, not assumed.",
	"No shoes in the teaching room. Phones silent."
];
var faqs = [
	{
		q: "Can a complete beginner join?",
		a: "Yes. Foundation starts at Sarali Varisai. We would rather start late and clean than skip the drills."
	},
	{
		q: "Is this only for Tamil families?",
		a: "No. Classes run in Tamil and English. The repertoire is Carnatic. The room is Leicester."
	},
	{
		q: "Will they sit exams?",
		a: "The syllabus can prepare a child for London Fine Arts or ABRSM Carnatic grades. We are not affiliated with either board, and we will not pretend otherwise until we are."
	},
	{
		q: "Why not a 30-minute lesson?",
		a: "Because the last fifteen minutes — singing back, then listening — is where stage fear dies. Cut that and you have bought a private booth."
	},
	{
		q: "Do you teach on weekdays?",
		a: "No. Saturday and Sunday, 1:00–7:00 PM. No weekday exceptions, no weekday makeups. The studio stays a home."
	},
	{
		q: "What about safeguarding?",
		a: "Open door. No physical contact. Enhanced DBS, public liability, and a written child-protection note. Parents may sit any class."
	},
	{
		q: "What if we miss a week?",
		a: "24-hour WhatsApp notice. One Sunday makeup per term if space exists. After that the class is forfeited."
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-paper/10 bg-ink-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeacockMark, { className: "mt-0.5 h-11 w-8 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl text-paper",
						children: school.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-sm text-sm leading-relaxed text-mist",
						children: "Weekend Carnatic vocal. A Leicester home studio. Built so a child can stand in a hall within a year."
					})] })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker mb-3",
						children: "School"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-paper-dim",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-paper",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/syllabus",
								className: "hover:text-paper",
								children: "Classes"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/timings",
								className: "hover:text-paper",
								children: "Fees"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappUrl(),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-paper",
								children: "Book a trial"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker mb-3",
						children: "Trust"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-paper-dim",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/safeguarding",
								className: "hover:text-paper",
								children: "Safeguarding"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-paper",
								children: "Privacy"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "hover:text-paper",
								children: "Terms"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 sm:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker mb-3",
							children: "Studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed text-paper-dim",
							children: [
								school.location,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								school.window,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "mt-2 inline-block text-cyan hover:text-paper",
									href: whatsappUrl(),
									target: "_blank",
									rel: "noopener noreferrer",
									children: ["WhatsApp ", school.phoneDisplay]
								})
							]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 text-xs text-mist sm:flex-row sm:justify-between sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					school.name
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Not affiliated with any exam board." })]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium transition-[color,background-color,box-shadow,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-paper text-ink hover:bg-cyan",
			cyan: "bg-cyan text-ink hover:bg-paper",
			outline: "bg-transparent text-paper shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_22%,transparent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-cyan)_55%,transparent)] hover:text-cyan",
			ghost: "bg-transparent text-paper-dim hover:text-paper"
		},
		size: {
			md: "h-11 px-5 text-sm",
			lg: "h-12 px-6 text-sm",
			sm: "h-9 px-3.5 text-xs"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function WhatsAppCta({ children, className, text, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappUrl(text),
		target: "_blank",
		rel: "noopener noreferrer",
		className: cn(className),
		onClick,
		children
	});
}
function SiteHeader({ overlay = false }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn(overlay ? "fixed inset-x-0 top-0" : "sticky top-0", "z-40 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300", !overlay || scrolled || open ? "border-b border-paper/10 bg-ink/95 backdrop-blur-md" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "relative z-10",
					"aria-label": "Leicester Carnatic School home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						hash: "hash" in item ? item.hash : void 0,
						className: "text-sm text-paper-dim transition-colors duration-150 hover:text-paper",
						children: item.label
					}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCta, {
						className: cn(buttonVariants({ size: "sm" })),
						children: "Book a trial"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "relative z-10 inline-flex size-11 items-center justify-center text-paper lg:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			inert: !open,
			"aria-hidden": !open,
			className: cn("overflow-hidden lg:hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]", open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1 border-t border-paper/10 px-5 py-3",
				"aria-label": "Mobile",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					hash: "hash" in item ? item.hash : void 0,
					onClick: () => setOpen(false),
					className: "flex h-11 items-center text-base text-paper",
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCta, {
					onClick: () => setOpen(false),
					className: cn(buttonVariants({ size: "md" }), "mt-1 mb-2 w-full"),
					children: "Book a £10 trial"
				})]
			})
		})]
	});
}
function SiteShell({ children, overlayNav = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { overlay: overlayNav }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function PageHeader({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-paper/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-section text-paper",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lead leading-relaxed text-mist",
					children: lede
				})
			]
		})
	});
}
//#endregion
export { school as C, saturday as S, whatsappUrl as T, faqs as _, IconShield as a, methodBeats as b, IconVoice as c, SiteShell as d, WhatsAppCta as f, cn as g, buttonVariants as h, IconListen as i, PageHeader as l, batches as m, IconHome as n, IconStage as o, audiences as p, IconHour as r, IconUsers as s, Button as t, PeacockMark as u, fees as v, stats as w, rules as x, levels as y };
