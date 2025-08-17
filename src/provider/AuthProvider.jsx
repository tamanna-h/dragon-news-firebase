import { createContext, useContext, useState } from "react";

 const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "hablu mia",
    email: "hablu@mia.com"
  });

  const authData = {
    user,
    setUser
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
