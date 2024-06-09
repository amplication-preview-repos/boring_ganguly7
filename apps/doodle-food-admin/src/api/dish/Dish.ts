import { Restaurant } from "../restaurant/Restaurant";

export type Dish = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
};
