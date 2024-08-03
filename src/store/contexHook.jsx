import { createContext } from "react";

// create context
export const AuthContext = createContext();

// Create a Provider component
// export const AuthProvider = ({ children }) => {
//   const storetokenInLS = (serverToken) => {
//     return localStorage.setItem("token", serverToken);
//   };
//   return (
//     <AuthContext.Provider value={{ storetokenInLS }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
