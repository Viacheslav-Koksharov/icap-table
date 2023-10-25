interface ITableItem {
  id?: number;
  name: string;
  birthday_date: string;
  email: string;
  phone_number: string;
  address: string;
}

interface ITable {
  table: ITableItem[];
}

export type { ITableItem, ITable };
