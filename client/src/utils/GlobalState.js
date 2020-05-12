import React, { createContext, useReducer, useContext } from "react";
import {
  SEARCH_BY_FULLNAME,
  SEARCH_BY_EMAIL,
  GET_EMPLOYEES,
  SET_EMPLOYEES,
} from "./constants";

const StoreContext = createContext();


// use this reducer for local search container component
const reducer = (state, action) => {

  switch (action.type) {
    case SEARCH_BY_FULLNAME:
      return {
        ...state,
        fullName: action.fullName,
      };
    case SEARCH_BY_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case GET_EMPLOYEES:
      return {
        ...state,
        fullName: action.fullName,
      };
    default:
      return state;
  }
};

// use this reducer for global data
const appReducer = (state, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.employees,
      };
    default:
      
      return state;
  }
};
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(appReducer, {
    employees: [],
    // currentPost: {
    //   _id: 0,
    //   fullName: "",
    //   email: "",
    // },
  });

  return <StoreContext.Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
