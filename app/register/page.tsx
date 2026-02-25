"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const exists = users.find(
      (u: any) => u.email === form.email
    );

    if (exists) {
      alert("Este correo ya está registrado");
      return;
    }

    users.push(form);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Usuario registrado correctamente ✅");

    router.push("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold mb-2 text-center">
          Crear cuenta
        </h1>

        <p className="text-slate-400 text-center mb-6 text-sm">
          Regístrate para comenzar a comprar
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            name="name"
            placeholder="Nombre completo"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-emerald-500 focus:outline-none transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-emerald-500 focus:outline-none transition"
          />

          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-emerald-500 focus:outline-none transition"
          />

          <button
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold p-3 rounded-lg transition"
          >
            Registrarse
          </button>

        </form>

        <p className="text-center text-sm text-slate-400 mt-6">
          ¿Ya tienes cuenta?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-emerald-400 hover:underline cursor-pointer"
          >
            Inicia sesión
          </span>
        </p>

      </div>

    </div>
  );
}