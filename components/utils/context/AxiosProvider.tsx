import axios from "axios";
import { createContext, useContext } from "react";

/** cr: Emilicos 
 * 
 * "Provides" axios defaults to any component or page.
 * Axios requests to backend should just use "/" instead of the full url link
 * and inserting a token should not be necessary.
*/

const AxiosContext = createContext({});

// export const useTheme = () => useContext(AxiosContext);
export const AxiosProvider: React.FC<any> = ({ children }) => {
  axios.defaults.baseURL = process.env["NEXT_PUBLIC_STRAPI_URL"];
  axios.defaults.headers["Authorization"] = `Bearer ${process.env['NEXT_PUBLIC_STRAPI_API_TOKEN']}`;

  return <AxiosContext.Provider value={{}}>{children}</AxiosContext.Provider>;
};