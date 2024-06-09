import { JsonValue } from "type-fest";
import { Restaurant } from "../restaurant/Restaurant";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  dishes: JsonValue;
  id: string;
  orderDate: Date | null;
  restaurant?: Restaurant | null;
  status?: "Option1" | null;
  total: number | null;
  updatedAt: Date;
  user?: User | null;
};
