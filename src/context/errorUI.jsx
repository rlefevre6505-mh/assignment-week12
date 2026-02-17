import { createContext, useContext, useReducer } from "react";

function warningReducer(state, action) {
  //conditional logic to update the value of the theme state
  //if statement or switch...case
  //the return keyword breaks the execution of the code: we do not need the break keyword
  if (action.type === true) {
    return { warning: (state.warning = true) };
  } else {
    return { warning: (state.warning = false) };
  }
}

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  //replace our useState hook with a useReducer hook
  //dispatch is how we are going to trigger the state update --> we will specify which update depending on the action type
  const [state, dispatch] = useReducer(themeReducer, { theme: "" });

  //update the value prop to be state and dispatch
  return (
    <>
      <ThemeContext value={{ state, dispatch }}>{children}</ThemeContext>;
    </>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
