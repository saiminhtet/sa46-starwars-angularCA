export class List<T = any> {
  count!: number;
  previous!: string;
  next!: string;
  results!: T[];
}
