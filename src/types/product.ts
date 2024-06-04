export type AddtoCartStatus = {
  count: number;
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage: number;
  availabilityStatus: string;
  rating: number;
  reviews: Review[];
  stock: number;
  dimensions: Dimensions;
  images: string[];
  meta: Meta;
  minimumOrderQuantity: number;
  returnPolicy: string;
  shippingInformation: string;
  sku: string;
  tags: string[];
  thumbnail: string;
  warrantyInformation: string;
  weight: number;
};

type Review = {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
};

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};
