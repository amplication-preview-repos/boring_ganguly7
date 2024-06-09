import { Dish } from "../dish/Dish";
import { Order } from "../order/Order";

export type Restaurant = {
  address: string | null;
  createdAt: Date;
  cuisineType: string | null;
  dishes?: Array<Dish>;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  rating: number | null;
  updatedAt: Date;
};
