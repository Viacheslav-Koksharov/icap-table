import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getVisibleTable } from '../../redux/tables/selectors';
import Stack from '@mui/material/Stack';
import { usePagination } from 'custom-hooks-ts-lib';
import { ITableItem } from '../../interfaces/Table.interface';
import {
  TitleStyles,
  ListStyles,
  TableStyles,
  TableColumnStyles,
  TextStyles,
  PaginationStyles,
} from './TableList.styled';

const TableList = () => {
  const tables = useSelector(getVisibleTable);
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(tables.length / PER_PAGE);
  const pagination = usePagination(tables, PER_PAGE);

  useEffect(() => {
    pagination.jumpToPage(page);
  }, [page, pagination]);

  const handlePageChange = (
    _: React.ChangeEvent<unknown>,
    pageNumber: number,
  ) => {
    setPage(pageNumber);
  };

  return (
    <>
      <TableStyles>
        <TitleStyles>Table data</TitleStyles>
        <thead>
          <ListStyles>
            <TableColumnStyles>Full name</TableColumnStyles>
            <TableColumnStyles>Date of birth</TableColumnStyles>
            <TableColumnStyles>Email</TableColumnStyles>
            <TableColumnStyles>Phone number</TableColumnStyles>
            <TableColumnStyles>Address</TableColumnStyles>
          </ListStyles>
        </thead>
        <tbody>
          {pagination.getItemsToPage().map((item: ITableItem) => (
            <ListStyles key={item.id}>
              <TextStyles>{item.name}</TextStyles>
              <TextStyles>{item.birthday_date}</TextStyles>
              <TextStyles>{item.email}</TextStyles>
              <TextStyles>{item.phone_number}</TextStyles>
              <TextStyles>{item.address}</TextStyles>
            </ListStyles>
          ))}
        </tbody>
      </TableStyles>
      <Stack spacing={2}>
        {page && (
          <PaginationStyles
            count={count}
            size='large'
            page={page}
            color='primary'
            variant='outlined'
            shape='rounded'
            onChange={handlePageChange}
          />
        )}
      </Stack>
    </>
  );
};

export default TableList;
