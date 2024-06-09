import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type DishUpdateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
