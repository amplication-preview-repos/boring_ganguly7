import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  dishes?: JsonFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
  status?: "Option1";
  total?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
