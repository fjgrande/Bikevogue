export interface BikesStructure {
  _id: string;
  model: string;
  image: string;
  price: number;
  brand: string;
  material: string;
  modality: string;
  size: string;
  component: string;
}

export interface BikesStateStructure {
  bikes: BikesStructure[];
}
