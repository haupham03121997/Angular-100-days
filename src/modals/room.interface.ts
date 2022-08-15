export interface Room {
  deleteAt:        boolean;
  _id:             string;
  name:            string;
  guests:          number;
  bedRoom:         number;
  bath:            number;
  description:     string;
  price:           number;
  elevator:        boolean;
  hotTub:          boolean;
  pool:            boolean;
  indoorFireplace: boolean;
  dryer:           boolean;
  gym:             boolean;
  kitchen:         boolean;
  wifi:            boolean;
  heating:         boolean;
  cableTV:         boolean;
  locationId:      LocationID;
  image:           string;
}

export interface LocationID {
  deleteAt: boolean;
  name:     string;
  province: string;
  country:  string;
  valueate: number;
  image:    string;
}