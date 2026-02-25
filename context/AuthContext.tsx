"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, password: string) => boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: any) {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("session");

    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  function login(email: string, password: string) {

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const found = users.find(
      (u: any) =>
        u.email === email &&
        u.password === password
    );

    if (!found) return false;

    const session = {
      name: found.name,
      email: found.email,
    };

    localStorage.setItem(
      "session",
      JSON.stringify(session)
    );

    setUser(session);

    return true;
  }

  function register(
    name: string,
    email: string,
    password: string
  ) {

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const exists = users.find(
      (u: any) => u.email === email
    );

    if (exists) return false;

    users.push({
      name,
      email,
      password,
    });

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    return true;
  }

  function logout() {

    localStorage.removeItem("session");

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {

  const context = useContext(AuthContext);

  if (!context)
    throw new Error(
      "useAuth debe usarse dentro de AuthProvider"
    );

  return context;
}