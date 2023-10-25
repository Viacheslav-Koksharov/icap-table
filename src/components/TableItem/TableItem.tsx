import { ITableItem } from '../../interfaces/Table.interface';
import { ListItemStyles, TextStyles } from './TableItem.styled';
interface ITableItemProps {
  tableItem: ITableItem;
}
const TableItem = (tableItem: ITableItemProps) => {
  const item = tableItem.tableItem;
  console.log(item);
  return (
    <>
      <ListItemStyles key={item.id}>
        <TextStyles>{item.name}</TextStyles>
        <TextStyles>{item.email}</TextStyles>
        <TextStyles>{item.birthday_date}</TextStyles>
        <TextStyles>{item.phone_number}</TextStyles>
        <TextStyles>{item.address}</TextStyles>
        {/* {Object.keys(item).map(property => (
          <TextStyles>{property}</TextStyles>
        ))} */}
      </ListItemStyles>
    </>
  );
};

export default TableItem;
