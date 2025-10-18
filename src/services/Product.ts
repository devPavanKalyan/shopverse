export class Product {
  id!: string;
  manufacturerId?: string;
  name!: string;
  slug!: string;
  imageUrl!: string;
  description!: string;
  type!: string;
  price!: number;
  quantity!: number;
  category!: string[];
  connectivity!: string[];
  metrics!: Metric[];
  information!: Information[];
  attributes!: AttributeGroup[];
  createdAt?: Date;
  updatedAt?: Date;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}

export class Metric {
  name!: string;
  unit!: string;

  constructor(init?: Partial<Metric>) {
    Object.assign(this, init);
  }
}

export class Information {
  title!: string;
  priority!: number;
  points!: string[];

  constructor(init?: Partial<Information>) {
    Object.assign(this, init);
  }
}

export class AttributeGroup {
  title!: string;
  priority!: number;
  values!: Record<string, string>;

  constructor(init?: Partial<AttributeGroup>) {
    Object.assign(this, init);
  }
}
