import { ITokens } from "./models";
import { api, auth } from "./config";

export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "token";


export const authApi = () => {
	const signIn = async (user: FormData) => {
		const response = await api.post("login/", user);

		localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
		localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
	};

	const signUp = async (user: FormData) => auth.post("register/", user);

	const refresh = async () => {
		const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

		if (refreshToken) {
			const response = await auth.post<Pick<ITokens, "access">>(
				"login/refresh/",
				{ refresh: refreshToken }
			);

			localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
		}
	};

	const logout = () => {
		localStorage.removeItem(ACCESS_TOKEN_KEY);
		localStorage.removeItem(REFRESH_TOKEN_KEY);
	};

	const isAuthicated = () => !!localStorage.getItem(ACCESS_TOKEN_KEY);

	return { signIn, signUp, logout, refresh, isAuthicated };
};
