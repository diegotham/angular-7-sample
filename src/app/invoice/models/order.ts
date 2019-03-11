export interface Order {
  id: string;
  recipient: Recipient;
  created_at: string;
  items: Item[];
  delivery: Delivery;
  charge_customer: Chargecustomer;
}

interface Chargecustomer {
  currency: string;
  total_price: string;
}

interface Delivery {
  courier: string;
  method: string;
}

interface Item {
  id: string;
  name: string;
  quantity: number;
  total_price: Totalprice;
}

interface Totalprice {
  currency: string;
  amount: string;
}

interface Recipient {
  name: string;
  email: string;
}

// Filter
export interface OrdersFilter {
  customerId: string;
  startDate: Date;
  endDate: Date;
}
