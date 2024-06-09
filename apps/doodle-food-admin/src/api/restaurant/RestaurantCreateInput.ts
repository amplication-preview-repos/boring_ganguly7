import { DishCreateNestedManyWithoutRestaurantsInput } from "./DishCreateNestedManyWithoutRestaurantsInput";
import { OrderCreateNestedManyWithoutRestaurantsInput } from "./OrderCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  cuisineType?: string | null;
  dishes?: DishCreateNestedManyWithoutRestaurantsInput;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutRestaurantsInput;
  rating?: number | null;
};
