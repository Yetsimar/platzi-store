import { Product } from "../../products/entities/product.entity";
import { User } from "./users.entity";

export class Order {
  date: Date;
  user: User;
  products: Product[]
}
