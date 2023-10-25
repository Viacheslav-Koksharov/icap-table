import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTable } from '../../redux/tables/operations';
import Form from "../../components/Form/Form";
import TableList from '../../components/TableList';

const TableView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTable());
  }, [dispatch]);
  return (
    <>
      <TableList />
      <Form />
    </>
  );
};

export default TableView;
