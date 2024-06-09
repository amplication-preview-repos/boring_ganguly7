import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  dishes?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  restaurantId?: SortOrder;
  status?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
