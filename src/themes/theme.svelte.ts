import catppuccinMocha from "./catppuccin-mocha.json";

type Theme = typeof catppuccinMocha;

const themes = {
	catppuccinMocha
};

let currentTheme = $state(catppuccinMocha);

export default function theme(): Theme {
	return currentTheme;
}
