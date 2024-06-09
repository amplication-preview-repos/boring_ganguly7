import { DishUpdateManyWithoutRestaurantsInput } from "./DishUpdateManyWithoutRestaurantsInput";
import { OrderUpdateManyWithoutRestaurantsInput } from "./OrderUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  cuisineType?: string | null;
  dishes?: DishUpdateManyWithoutRestaurantsInput;
  name?: string | null;
  orders?: OrderUpdateManyWithoutRestaurantsInput;
  rating?: number | null;
};
