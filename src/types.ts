type Service = {
  name: string;
  price: string | number;
};

type Discount = {
  category: string;
  percentOff: number;
};

export default interface ServiceTypes {
  services: Service[];
  discounts: Discount[];
}
