export type Chapter = {
	id: string;
	title: string;
	years?: string;
	dir: "horizontal" | "vertical";
	kind: "hero" | "passion" | "milestone" | "project" | "city";
	copy: string;
	images: { src: string; alt: string }[]; // 3 placeholders each
	theme: { bg: "sunset" | "ink" | "paper"; accent?: "sun-1" | "sun-2" | "sun-3" };
	route?: { projection: "europe" | "world"; coords: Array<[number, number]> }; // lon,lat
};

export const chapters: Chapter[] = [
	{
		id: "hero",
		title: "Explorer. Technologist. Mentor.",
		years: "Now",
		dir: "vertical",
		kind: "hero",
		copy:
			"I learn by moving: across cities, teams, and ideas. I build simple systems that help people travel better and ship faster.",
		images: [
			{ src: "/images/life/hero/img1.jpg", alt: "PLACEHOLDER — full-body portrait at golden-hour (replace with Klemen photo)" },
			{ src: "/images/life/hero/img2.jpg", alt: "PLACEHOLDER — close-up portrait with warm rim light" },
			{ src: "/images/life/hero/img3.jpg", alt: "PLACEHOLDER — action shot coaching or training" }
		],
		theme: { bg: "sunset", accent: "sun-1" }
	},

	{
		id: "passions",
		title: "What drives me",
		dir: "horizontal",
		kind: "passion",
		copy:
			"Travel, technology, and sport. I chase new people and places, then turn what I learn into useful products. Keep things simple.",
		images: [
			{ src: "/images/life/passions/travel.jpg", alt: "PLACEHOLDER — Klemen on the road / backpacking" },
			{ src: "/images/life/passions/tech.jpg", alt: "PLACEHOLDER — mentoring a dev session / laptop + whiteboard" },
			{ src: "/images/life/passions/sport.jpg", alt: "PLACEHOLDER — training: run, gym, or field" }
		],
		theme: { bg: "ink", accent: "sun-2" }
	},

	{
		id: "born",
		title: "Ljubljana beginnings",
		years: "2000",
		dir: "vertical",
		kind: "milestone",
		copy:
			"Born in Ljubljana; raised just outside the capital. Childhood = ball courts, aikido mats, and muddy rugby boots.",
		images: [
			{ src: "/images/life/born/img1.jpg", alt: "PLACEHOLDER — Ljubljana skyline / Old Town" },
			{ src: "/images/life/born/img2.jpg", alt: "PLACEHOLDER — family-esque archive style photo" },
			{ src: "/images/life/born/img3.jpg", alt: "PLACEHOLDER — sports court nostalgia" }
		],
		theme: { bg: "paper", accent: "sun-3" }
	},

	{
		id: "poljane",
		title: "Gimnazija Poljane",
		years: "2015–2019",
		dir: "horizontal",
		kind: "milestone",
		copy:
			"Moved to the capital for high school. Broad curriculum—science, tech, music—perfect for a mind that likes mixing disciplines.",
		images: [
			{ src: "/images/life/poljane/img1.jpg", alt: "PLACEHOLDER — school exterior / classroom" },
			{ src: "/images/life/poljane/img2.jpg", alt: "PLACEHOLDER — notebook + headphones still life" },
			{ src: "/images/life/poljane/img3.jpg", alt: "PLACEHOLDER — friends / city commute" }
		],
		theme: { bg: "ink", accent: "sun-1" }
	},

	{
		id: "eurotrip",
		title: "First long trip",
		years: "Post-HS",
		dir: "vertical",
		kind: "city",
		copy:
			"A long train-and-hostel run with friends. Light packs, heavier stories—the moment travel became a habit, not a holiday.",
		images: [
			{ src: "/images/life/eurotrip/img1.jpg", alt: "PLACEHOLDER — sleeper train window" },
			{ src: "/images/life/eurotrip/img2.jpg", alt: "PLACEHOLDER — hostel common room energy" },
			{ src: "/images/life/eurotrip/img3.jpg", alt: "PLACEHOLDER — night city blur" }
		],
		route: {
			projection: "europe",
			coords: [
				[14.505, 46.056], [26.102, 44.426], [14.437, 50.075], [17.107, 48.148],
				[13.405, 52.520], [4.904, 52.367], [4.351, 50.847], [2.352, 48.856],
				[8.541, 47.376], [14.505, 46.056]
			]
		},
		theme: { bg: "paper", accent: "sun-2" }
	},

	{
		id: "university",
		title: "Business × Technology",
		years: "Uni Ljubljana",
		dir: "horizontal",
		kind: "milestone",
		copy:
			"Chose International Business for range. Doubled down on code. People + systems. Markets + makers. It clicked.",
		images: [
			{ src: "/images/life/uni/img1.jpg", alt: "PLACEHOLDER — campus + laptop" },
			{ src: "/images/life/uni/img2.jpg", alt: "PLACEHOLDER — late-night study scene" },
			{ src: "/images/life/uni/img3.jpg", alt: "PLACEHOLDER — keyboard close-up" }
		],
		theme: { bg: "ink", accent: "sun-3" }
	},

	{
		id: "korea",
		title: "First solo leap",
		years: "Late 2021 — Korea",
		dir: "vertical",
		kind: "city",
		copy:
			"Furthest exchange I applied to. Real culture shock; real growth. One of the best decisions I’ve made.",
		images: [
			{ src: "/images/life/korea/img1.jpg", alt: "PLACEHOLDER — Seoul street night neon" },
			{ src: "/images/life/korea/img2.jpg", alt: "PLACEHOLDER — campus or study cafe" },
			{ src: "/images/life/korea/img3.jpg", alt: "PLACEHOLDER — food stall scene" }
		],
		theme: { bg: "paper", accent: "sun-1" }
	},

	{
		id: "portugal",
		title: "Lisbon (+ GDC hop)",
		dir: "horizontal",
		kind: "city",
		copy:
			"Surf before class; pastel de nata after. A circle of new friends—and a quick hop to San Francisco for GDC.",
		images: [
			{ src: "/images/life/pt/img1.jpg", alt: "PLACEHOLDER — Lisbon tiles / tram" },
			{ src: "/images/life/pt/img2.jpg", alt: "PLACEHOLDER — surf at golden hour" },
			{ src: "/images/life/pt/img3.jpg", alt: "PLACEHOLDER — selfie group / city view" }
		],
		theme: { bg: "ink", accent: "sun-2" }
	},

	{
		id: "iberia",
		title: "Road south & east",
		dir: "vertical",
		kind: "city",
		copy:
			"Same crew, more miles. Good music, long roads, a coastline that kept surprising us.",
		images: [
			{ src: "/images/life/iberia/img1.jpg", alt: "PLACEHOLDER — roadside panorama" },
			{ src: "/images/life/iberia/img2.jpg", alt: "PLACEHOLDER — car interior candid" },
			{ src: "/images/life/iberia/img3.jpg", alt: "PLACEHOLDER — sunset highway" }
		],
		route: {
			projection: "europe",
			coords: [
				[-9.139, 38.722], [-6.340, 38.916], [-5.994, 37.389], [-4.779, 37.888],
				[-3.703, 40.416], [-0.376, 39.469], [2.173, 41.385], [5.369, 43.296],
				[7.261, 43.710], [9.190, 45.464], [14.505, 46.056]
			]
		},
		theme: { bg: "paper", accent: "sun-3" }
	},

	{
		id: "sweden",
		title: "Learning up close",
		years: "Stockholm",
		dir: "horizontal",
		kind: "milestone",
		copy:
			"Moved to learn directly from the CEO. Mentorship that leveled me up.",
		images: [
			{ src: "/images/life/se/img1.jpg", alt: "PLACEHOLDER — Stockholm winter street" },
			{ src: "/images/life/se/img2.jpg", alt: "PLACEHOLDER — notebook + fika" },
			{ src: "/images/life/se/img3.jpg", alt: "PLACEHOLDER — workspace vignette" }
		],
		theme: { bg: "ink", accent: "sun-1" }
	},

	{
		id: "asia",
		title: "Asia loop",
		dir: "vertical",
		kind: "city",
		copy:
			"Korea, Japan, Vietnam, Malaysia, Thailand, Singapore—days blurred into trains, street food, and laughter.",
		images: [
			{ src: "/images/life/asia/img1.jpg", alt: "PLACEHOLDER — night market steam" },
			{ src: "/images/life/asia/img2.jpg", alt: "PLACEHOLDER — train window landscape" },
			{ src: "/images/life/asia/img3.jpg", alt: "PLACEHOLDER — friends at table" }
		],
		theme: { bg: "paper", accent: "sun-2" }
	},

	{
		id: "valencia",
		title: "Warm base, new direction",
		dir: "horizontal",
		kind: "city",
		copy:
			"We worked remotely, so we headed to Valencia. Sunshine, deep work—and a choice to try the sports industry seriously.",
		images: [
			{ src: "/images/life/valencia/img1.jpg", alt: "PLACEHOLDER — city bike / palms" },
			{ src: "/images/life/valencia/img2.jpg", alt: "PLACEHOLDER — home desk sun beam" },
			{ src: "/images/life/valencia/img3.jpg", alt: "PLACEHOLDER — beach walk" }
		],
		theme: { bg: "ink", accent: "sun-3" }
	},

	{
		id: "berlin",
		title: "MTM chapter",
		dir: "vertical",
		kind: "milestone",
		copy:
			"Joined MTM in Berlin—then made the move for real. A generous, global city.",
		images: [
			{ src: "/images/life/berlin/img1.jpg", alt: "PLACEHOLDER — Berlin night lights" },
			{ src: "/images/life/berlin/img2.jpg", alt: "PLACEHOLDER — studio / training shot" },
			{ src: "/images/life/berlin/img3.jpg", alt: "PLACEHOLDER — street typography" }
		],
		theme: { bg: "paper", accent: "sun-1" }
	},

	{
		id: "munich",
		title: "Building for the long run",
		dir: "horizontal",
		kind: "milestone",
		copy:
			"Met Alex in Berlin—opened a gym in Munich. This time, we’re staying. Great city. Excellent airport.",
		images: [
			{ src: "/images/life/munich/img1.jpg", alt: "PLACEHOLDER — Isar river light" },
			{ src: "/images/life/munich/img2.jpg", alt: "PLACEHOLDER — opening day group photo" },
			{ src: "/images/life/munich/img3.jpg", alt: "PLACEHOLDER — Bavarian detail" }
		],
		theme: { bg: "ink", accent: "sun-2" }
	},

	{
		id: "detour",
		title: "What’s next — Detour",
		dir: "vertical",
		kind: "project",
		copy:
			"Planning a multi-day trip in a new country is hard and time-consuming. I’m building Detour to make it effortless.",
		images: [
			{ src: "/images/life/detour/ui1.jpg", alt: "PLACEHOLDER — Detour UI screen mock: 3-day itinerary map" },
			{ src: "/images/life/detour/ui2.jpg", alt: "PLACEHOLDER — Detour UI mock: route optimizer" },
			{ src: "/images/life/detour/ui3.jpg", alt: "PLACEHOLDER — Detour UI mock: AI suggestions" }
		],
		theme: { bg: "sunset", accent: "sun-3" }
	}
];


