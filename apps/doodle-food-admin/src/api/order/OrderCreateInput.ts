import { InputJsonValue } from "../../types";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  dishes?: InputJsonValue;
  orderDate?: Date | null;
  restaurant?: RestaurantWhereUniqueInput | null;
  status?: "Option1" | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
