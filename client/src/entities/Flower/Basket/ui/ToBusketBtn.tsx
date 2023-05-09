import { useState } from "react";
import { api } from "@entities/api";
import { IFlowerResponse } from "@entities/Flower/api/models";
import { Button } from "@mui/material";
import { authStore } from "@shared/stores/authStore";
import { AuthView } from "@shared/ui/AuthView";

interface IToBasketBtnProps {
	flower: IFlowerResponse;
}

export function ToBasketBtn(props: IToBasketBtnProps) {
	const { flower } = props;
	const [disabled, setDisabled] = useState(flower.is_in_basket);
	const addFlowerToBasket = async (id: number) => {
		try {
			await api.basket.add(id);

			setDisabled(true);
		} catch (e) { }
	};

	return (
		<AuthView>
			{authStore.isAuthicated && (
				<Button
					size="small"
					variant="outlined"
					onClick={() => addFlowerToBasket(flower.id)}
					disabled={disabled}
				>
					{disabled ? "Уже в корзине" : "В корзину"}
				</Button>
			)}
		</AuthView>
	);
}
