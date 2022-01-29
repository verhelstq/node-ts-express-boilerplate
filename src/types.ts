import { OrderItem } from "sequelize/types";

export interface ListQuery {
  offset?: number,
  limit?: number,
  sortBy?: string,
  sortDir?: string,
  orderQuery?: OrderItem;
}
