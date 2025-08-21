import catppuccinMocha from "./catppuccin-mocha.json";
import catppuccinLatte from "./catppuccin-latte.json";
import midnight from "./midnight.json";
import voidTheme from "./void.json";
import cottonCandy from "./cotton-candy.json";

type Theme = typeof catppuccinMocha;

export const themes = [catppuccinLatte, catppuccinMocha, cottonCandy, midnight, voidTheme];

let currentTheme = $state(
	(() => {
		let theme = localStorage.getItem("theme");
		if (theme) {
			return themes.find(other => other.id === theme) ?? catppuccinMocha;
		}
		return catppuccinMocha;
	})(),
);

/** @deprecated */
export default function theme(): Theme {
	return currentTheme;
}

/** @deprecated */
export function setTheme(theme: Theme) {
	currentTheme = theme;
	localStorage.setItem("theme", theme.id);
}

let accentGradient_ = $derived(
	`linear-gradient(to bottom right, ${theme().accent}, ${theme().accent2})`,
);

/** @deprecated */
export function accentGradient() {
	return accentGradient_;
}
