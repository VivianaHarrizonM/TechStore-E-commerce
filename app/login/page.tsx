"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      router.push("/");
    } else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center mb-2">
          Bienvenidos 👋
        </h1>

        <p className="text-slate-400 text-center mb-6 text-sm">
          Inicia sesión en tu cuenta
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-emerald-500 focus:outline-none transition"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-emerald-500 focus:outline-none transition"
          />

          <button
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold p-3 rounded-lg transition"
          >
            Iniciar sesión
          </button>

        </form>

        <p className="text-center text-sm text-slate-400 mt-6">
          ¿No tienes cuenta?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-emerald-400 hover:underline cursor-pointer"
          >
            Regístrate
          </span>
        </p>

      </div>

    </div>
  );
}