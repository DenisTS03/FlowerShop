import { authStore } from "@shared/stores/authStore";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

interface IAuthViewProps {
	children: ReactNode;
}


export const AuthView = observer((props: IAuthViewProps) => {
	const { children } = props;

	return (
		/* eslint-disable */
		<>{authStore.isAuthicated && children}</>
	);
});
