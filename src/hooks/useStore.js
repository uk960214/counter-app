import { useContext } from "react";
import * as ReactRedux from "react-redux";

export const useStore = () => {
  return useContext(ReactRedux.ReactReduxContext).store;
};
