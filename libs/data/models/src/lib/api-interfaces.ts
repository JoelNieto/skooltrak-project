export interface Message {
  message: string;
}

export interface EntityBase {
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
}
