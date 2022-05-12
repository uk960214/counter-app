import { useState } from "react";
import { useStore } from "./useStore";
export const useSelector = (predicate) => {
  const store = useStore();

  const [storeState, setStoreState] = useState(store.getState());

  const setCurrentStore = () => setStoreState(store.getState());

  store.subscribe(setCurrentStore);

  return predicate(storeState);
};
