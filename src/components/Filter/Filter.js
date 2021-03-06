import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import * as actions from "../../redux/contacts/contacts-actions";

import s from "./Filter.module.css";
import TextField from "@material-ui/core/TextField";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <TextField
      id="outlined-search"
      type="search"
      variant="outlined"
      label="Find contacts by name"
      value={value}
      name="name"
      className={s.input}
      onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
    />
  );
};

export default Filter;
