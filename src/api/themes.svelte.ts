const themes = [
	{
		name: "Catppuccin Mocha",
		colors: {
			crust: "#11111b",
			mantle: "#181825",
			base: "#1e1e2e",
			text: "#cdd6f4",
			"overlay-1": "#7f84ac",
			"surface-2": "#585b80",
			"surface-0": "#313244",
			"subtext-1": "#bac2de",
			lavender: "#b4befe",
			blue: "#89b4fa",
		},
	},
] as const satisfies {
	name: string;
	colors: {
		crust: string;
		mantle: string;
		text: string;
		base: string;
		"overlay-1": string;
		"surface-2": string;
		"surface-0": string;
		"subtext-1": string;
		lavender: string;
		blue: string;
	};
}[];

type ThemeName = typeof themes extends (infer T)[]
	? T extends { name: string }
		? T["name"]
		: never
	: never;

export function setTheme(name: ThemeName): void {
	const theme = themes.find(theme => theme.name === name)!;
	console.log("setting");

	Array.from(document.querySelectorAll("*[data-theme]")).forEach(element => element.remove());

	let style = document.createElement("style");
	style.setAttribute("data-theme", name);
	style.innerHTML = `* { ${Object.entries(theme.colors)
		.map(([name, value]) => `--${name}: ${value};`)
		.join(" ")} }`;

	document.head.appendChild(style);
}

export function cssVar(name: string) {
	if (!name.startsWith("--")) name = `--${name}`;
	return window.getComputedStyle(document.body).getPropertyValue(name);
}
