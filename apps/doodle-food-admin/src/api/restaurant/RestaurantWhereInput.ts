import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DishListRelationFilter } from "../dish/DishListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RestaurantWhereInput = {
  address?: StringNullableFilter;
  cuisineType?: StringNullableFilter;
  dishes?: DishListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  rating?: FloatNullableFilter;
};
