import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TitleStyles = styled.caption`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 600;
  color: #708db3;
`;

const TableColumnStyles = styled.th`
  border: 1px solid black;
  background-color: gray;
`;

const ListStyles = styled.tr`
  width: 100%;
  height: 100%;
  padding: 0;
  border: 1px solid black;
  &:nth-child(2n + 1) {
    background-color: #708db3;
  }
  &:nth-child(2n) {
    background-color: #bbb1df;
  }
`;

const ListItemStyles = styled.tr`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const TextStyles = styled.td`
  font-size: 14px;
  font-weight: 400;
  border: 1px solid black;
`;

const PaginationStyles = styled(Pagination)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 0 0;
  }
`;

export {
  TitleStyles,
  ListStyles,
  TableStyles,
  TableColumnStyles,
  ListItemStyles,
  TextStyles,
  PaginationStyles,
};
