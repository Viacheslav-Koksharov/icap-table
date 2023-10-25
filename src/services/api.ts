import axios from "axios";
import {ITableItem} from '../interfaces/Table.interface';

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api";

export const getTable = () => {
  return axios.get(`/table/`);
};

export const postData = (data:ITableItem) => {
  return axios.post("/table/", data);
};
