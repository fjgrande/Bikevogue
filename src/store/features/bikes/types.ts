export interface BikesData {
  model: string;
  image: string;
  price: number;
  brand: string;
  material: string;
  modality: string;
  size: string;
  component: string;
}

export interface BikesStructure extends BikesData {
  _id: string;
}

export interface BikesStateStructure {
  bikes: BikesStructure[];
  selectedBike: BikesStructure;
}
