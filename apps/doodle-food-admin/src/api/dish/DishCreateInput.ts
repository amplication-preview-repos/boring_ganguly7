import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type DishCreateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
