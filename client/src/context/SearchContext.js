import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  provinceName: null,
  districtName: null,
  areaOccupancy: null,
  minCapacity: null,
  maxCapacity: null,
  capacity: null,
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [searchState, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        searchState: searchState,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
