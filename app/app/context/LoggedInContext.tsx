import React from "react"

type ContextProps = {
  setLoggedIn?: (loggedIn: boolean) => void,
};
export const LoggedInContext = React.createContext<ContextProps>({});