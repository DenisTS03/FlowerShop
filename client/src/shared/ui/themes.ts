import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
	}
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

export const defaultTheme = createTheme({
	status: {
		danger: orange[500],
	},
	palette: {
		mode: "light",
		primary: {
			"50": "#F0F7FF",
			"100": "#C2E0FF",
			"200": "#99CCF3",
			"300": "#66B2FF",
			"400": "#ffffff",
			"500": "#007FFF",
			"600": "#0072E5",
			"700": "#0059B2",
			"800": "#004C99",
			"900": "#ffffff",
			main: "#212121",
			light: "#66B2FF",
			dark: "#0059B2",
			contrastText: "rgba(255, 255, 255, 1)",
		},
		divider: "rgba(194, 224, 255, 0.08)",
		background: {
			default: "#FFCFE2",
			paper: "#FFCFE2",
		},
		common: {
			black: "#1D1D1D",
			white: "#ffffff",
		},
		text: {
			primary: "#212121",
			secondary: "#212121",
			disabled: "#000000",
		},
		grey: {
			"50": "#F3F6F9",
			"100": "#E7EBF0",
			"200": "#E0E3E7",
			"300": "#CDD2D7",
			"400": "#B2BAC2",
			"500": "#A0AAB4",
			"600": "#6F7E8C",
			"700": "#3E5060",
			"800": "#2D3843",
			"900": "#1A2027",
		},
		error: {
			"50": "#FFF0F1",
			"100": "#FFDBDE",
			"200": "#FFBDC2",
			"300": "#FF99A2",
			"400": "#FF7A86",
			"500": "#FF505F",
			"600": "#EB0014",
			"700": "#C70011",
			"800": "#94000D",
			"900": "#570007",
			main: "#EB0014",
			light: "#FF99A2",
			dark: "#C70011",
			contrastText: "#fff",
		},
		success: {
			"50": "#E9FBF0",
			"100": "#C6F6D9",
			"200": "#9AEFBC",
			"300": "#6AE79C",
			"400": "#3EE07F",
			"500": "#21CC66",
			"600": "#1DB45A",
			"700": "#1AA251",
			"800": "#178D46",
			"900": "#0F5C2E",
			main: "#1DB45A",
			light: "#6AE79C",
			dark: "#1AA251",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		warning: {
			"50": "#FFF9EB",
			"100": "#FFF3C1",
			"200": "#FFECA1",
			"300": "#FFDC48",
			"400": "#F4C000",
			"500": "#DEA500",
			"600": "#D18E00",
			"700": "#AB6800",
			"800": "#8C5800",
			"900": "#5A3600",
			main: "#DEA500",
			light: "#FFDC48",
			dark: "#AB6800",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		secondary: {
			main: "#ce93d8",
			light: "#f3e5f5",
			dark: "#fce4ec",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		info: {
			main: "#29b6f6",
			light: "#4fc3f7",
			dark: "#0288d1",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
		action: {
			active: "#fff",
			hover: "rgba(255, 255, 255, 0.08)",
			hoverOpacity: 0.08,
			selected: "rgba(255, 255, 255, 0.16)",
			selectedOpacity: 0.16,
			disabled: "rgba(0, 0, 0, 0.3)",
			disabledBackground: "rgba(0, 0, 0, 0.12)",
			disabledOpacity: 0.38,
			focus: "rgba(255, 255, 255, 0.12)",
			focusOpacity: 0.12,
			activatedOpacity: 0.24,
		},
	},
});
