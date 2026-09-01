import { r as __toESM } from "../_runtime.mjs";
import { R as require_react, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ChevronDown } from "../_libs/lucide-react.mjs";
import { C as school, S as saturday, _ as faqs, a as IconShield, b as methodBeats, c as IconVoice, d as SiteShell, f as WhatsAppCta, g as cn, h as buttonVariants, i as IconListen, n as IconHome, o as IconStage, p as audiences, r as IconHour, s as IconUsers, u as PeacockMark, v as fees, w as stats, y as levels } from "./site-shell-BMZbkOG2.mjs";
import { t as EnquireForm } from "./enquire-form-COfjR1JO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DZ0PElv8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroCinematic() {
	const stageRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		const stage = stageRef.current;
		if (!video || !stage) return;
		video.muted = true;
		video.defaultMuted = true;
		video.volume = 0;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const play = () => {
			video.muted = true;
			video.play().catch(() => {});
		};
		if (reduce) {
			video.pause();
			video.removeAttribute("autoplay");
			return;
		}
		play();
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) play();
			else video.pause();
		}, { threshold: .12 });
		io.observe(video);
		let ticking = false;
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			window.requestAnimationFrame(() => {
				const y = Math.max(0, window.scrollY);
				const shift = Math.min(y * .22, 180);
				const scale = 1 + Math.min(y, 900) * 18e-5;
				stage.style.transform = `translate3d(0, ${shift}px, 0) scale(${scale})`;
				ticking = false;
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			io.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-dvh overflow-hidden bg-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: stageRef,
				className: "absolute inset-0 origin-center will-change-transform motion-reduce:transform-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: videoRef,
					className: "size-full object-cover object-[78%_center] sm:object-[70%_center] lg:object-center",
					poster: "/images/hero-poster.jpg",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					preload: "metadata",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/videos/hero.mp4",
						type: "video/mp4"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 lg:bg-gradient-to-r lg:from-ink lg:via-ink/55 lg:to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-5 pb-24 pt-28 sm:px-8 lg:justify-center lg:pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-in kicker",
							children: "Carnatic vocal · Leicester · Weekends"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "hero-in hero-in-2 mt-4 font-display text-display leading-[0.96] text-paper",
							children: ["Ready for the stage", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-paper-dim",
								children: "in a year."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hero-in hero-in-3 mt-5 max-w-md text-lead leading-relaxed text-mist",
							children: [
								"Full-hour lessons in a home studio. Tamil and English. Ages five and up — adults welcome. First ",
								school.launchSeats,
								" seats at £",
								school.launchFee,
								" an hour. The point is a temple kutcheri, not a certificate on the fridge."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-in hero-in-4 mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppCta, {
								className: cn(buttonVariants({ size: "lg" }), "justify-center"),
								children: [
									"Book a £",
									school.trialFee,
									" trial"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#method",
								className: cn(buttonVariants({
									variant: "outline",
									size: "lg"
								}), "justify-center"),
								children: "How the hour works"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hero-in hero-in-5 mt-5 text-xs text-mist",
							children: [
								"First class ",
								school.firstClass,
								". Ten launch seats. If the slot is free, it is yours."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#method",
				className: "absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-cyan/80 transition-colors hover:text-cyan",
				"aria-label": "Scroll to how the hour works",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "scroll-hint size-5 motion-reduce:animate-none" })
			})
		]
	});
}
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .14,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: shown ? `${delay}ms` : "0ms" },
		className: cn("transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-0", shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-[3px]", className),
		children
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "mx-auto grid max-w-6xl grid-cols-2 border-b border-paper/10 sm:grid-cols-4",
		children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-6 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-display text-2xl text-cyan sm:text-3xl",
				children: s.value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 text-xs leading-snug text-mist",
				children: s.label
			})]
		}, s.value))
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-paper/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Why most first concerts fail"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-section text-paper",
					children: "Thirty minutes is why they freeze."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 60,
				className: "lg:col-span-7 lg:pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lead leading-relaxed text-mist",
					children: "A child who has only ever sung to a teacher will not survive a microphone. The usual model is a closed door, a private booth, and a Pongal stage that arrives too soon. We keep a classmate in the room. They listen, they hold tala, they go second. That is the rehearsal for the hall."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lead leading-relaxed text-mist",
					children: "Money is secondary. The work is a voice that can stand up in Balaji Temple or a Leicester Tamil Association room within twelve months."
				})]
			})]
		})
	});
}
function Method() {
	const icons = [
		IconVoice,
		IconHour,
		IconListen
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "method",
		className: "border-b border-paper/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "The hour"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl font-display text-section",
						children: "Split properly. Not rushed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-lead leading-relaxed text-mist",
						children: "We do not sell half-hours. Each student gets sixty minutes: teaching, singing back, then listening. When we have five or more, the same hour becomes a small batch of three or four. The structure does not change."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 overflow-hidden",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-2 w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1/2 bg-cyan" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1/4 bg-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1/4 bg-paper/30" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex text-[0.625rem] uppercase tracking-kicker text-mist",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-1/2",
								children: "30 teach"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-1/4",
								children: "15 back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-1/4",
								children: "15 listen"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: methodBeats.map((beat, i) => {
						const Icon = icons[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							as: "article",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "h-full border border-paper/10 bg-ink-2 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "text-cyan" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 font-display text-4xl text-gold",
										children: beat.minutes
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl text-paper",
										children: beat.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-mist",
										children: beat.body
									})
								]
							})
						}, beat.title);
					})
				})
			]
		})
	});
}
function Who() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-paper/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Who it is for"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-section",
				children: "Four kinds of student. One room."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-px bg-paper/10 sm:grid-cols-2",
				children: audiences.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 50,
					as: "article",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full bg-ink p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-paper",
							children: a.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-mist",
							children: a.body
						})]
					})
				}, a.title))
			})]
		})
	});
}
function Path() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "path",
		className: "border-b border-paper/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "The path"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-section",
					children: "Three levels. One outcome per level."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/syllabus",
					className: cn(buttonVariants({
						variant: "outline",
						size: "sm"
					}), "self-start sm:self-auto"),
					children: "Full syllabus"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 space-y-12",
				children: levels.map((level, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-12",
						children: [i === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-4 lg:order-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/eye.jpg",
								alt: "Close-up of a peacock feather eyespot",
								className: "frame aspect-square w-full object-cover"
							})
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: i === 1 ? "lg:col-span-8 lg:order-1" : "lg:col-span-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline gap-x-4 gap-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-4xl text-cyan",
											children: level.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl text-paper",
											children: level.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-mist",
											children: level.duration
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xl font-display text-xl italic text-paper-dim",
									children: level.outcome
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 grid gap-2 sm:grid-cols-2",
									children: level.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2.5 text-sm text-mist",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" }), item]
									}, item))
								})
							]
						})]
					})
				}, level.n))
			})]
		})
	});
}
function Saturday() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-b border-paper/10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/ripples.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/75" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "A Saturday"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-section",
							children: "The house is a studio from one until seven."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lead leading-relaxed text-mist",
							children: "Last class starts at 6:00. Four until five is never booked. No weekday classes. Twelve weekends make a term. Diwali and Christmas weekends are dark, announced a month ahead."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/timings",
							className: cn(buttonVariants({ variant: "outline" }), "mt-8"),
							children: "Timings & fees"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 60,
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "divide-y divide-paper/10 border-y border-paper/10",
						children: saturday.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-6 py-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-14 shrink-0 font-display text-lg text-cyan",
								children: row.time
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-paper-dim",
								children: row.note
							})]
						}, row.time))
					})
				})]
			})
		]
	});
}
function Offer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-paper/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Launch seats"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-section",
						children: [
							"Ten children at £",
							school.launchFee,
							" an hour. Then it is £",
							school.futureFee,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-lead leading-relaxed text-mist",
						children: fees.billing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-xl text-sm leading-relaxed text-mist",
						children: [
							fees.trial,
							" ",
							school.siblingDiscount,
							". ",
							fees.missed
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 60,
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-paper/10 bg-ink-2 p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Trial"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 font-display text-5xl text-gold",
							children: ["£", school.trialFee]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-mist",
							children: "one hour, then decide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule my-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-paper-dim",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "WhatsApp number on the form. That is how the slot is confirmed." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bank details only after you continue." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "We stack you next to a current student so the afternoon stays one thread." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCta, {
							className: cn(buttonVariants({ size: "lg" }), "mt-8 w-full"),
							children: "Request the trial"
						})
					]
				})
			})]
		})
	});
}
function Trust() {
	const items = [
		{
			Icon: IconHome,
			title: "Home studio",
			body: school.locationNote
		},
		{
			Icon: IconShield,
			title: "Open door",
			body: "Parents may sit any class. No physical contact. Enhanced DBS in the UK path."
		},
		{
			Icon: IconUsers,
			title: "Someone is always listening",
			body: "A classmate holding tala is the first audience. Stage fear thins in that room."
		},
		{
			Icon: IconStage,
			title: "The hall is the exam",
			body: "Home kutcheri first. Then temple. Then association. Mic, walk-on, walk-off — in the syllabus."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "trust",
		className: "border-b border-paper/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/droplets.jpg",
					alt: "Glass water droplets catching a fragment of the peacock eyespot",
					className: "frame aspect-2/3 w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Trust"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-section",
						children: "The door stays open. The credentials stay honest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-2",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: "text-cyan" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl text-paper",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-mist",
								children: item.body
							})
						] }, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/safeguarding",
						className: cn(buttonVariants({ variant: "outline" }), "mt-8"),
						children: "Safeguarding note"
					})
				]
			})]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-paper/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Questions parents actually ask"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-section",
					children: "Before you book."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 divide-y divide-paper/10 border-y border-paper/10",
					children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-xl text-paper [&::-webkit-details-marker]:hidden",
							children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cyan transition-transform duration-150 group-open:rotate-45",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-prose text-sm leading-relaxed text-mist",
							children: item.a
						})]
					}, item.q))
				})
			]
		})
	});
}
function Close() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "enquire",
		className: "bg-ink-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeacockMark, { className: "h-12 w-9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker mt-6",
						children: "Ten seats"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-section",
						children: "Tell us who is singing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lead leading-relaxed text-mist",
						children: "Name, age, WhatsApp. We offer a slot beside a current student. Voice notes after every class. Notebook on the table."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquireForm, {})
			})]
		})
	});
}
function HomeStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCinematic, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Who, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Saturday, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Offer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, {})
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		overlayNav: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeStory, {})
	});
}
//#endregion
export { Home as component };
