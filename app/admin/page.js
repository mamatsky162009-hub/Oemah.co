
"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage("Login gagal. Periksa email dan password.");
      return;
    }

    setMessage("Login berhasil! Pemeriksaan akses admin akan dilanjutkan.");
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#F3EBDD",
      display: "grid",
      placeItems: "center",
      padding: "24px",
      fontFamily: "Arial, sans-serif",
      color: "#29251F"
    }}>
      <form onSubmit={handleLogin} style={{
        background: "#fffaf2",
        padding: "36px",
        borderRadius: "18px",
        width: "100%",
        maxWidth: "390px",
        boxShadow: "0 12px 40px #29251f18"
      }}>
        <p style={{
          letterSpacing: "4px",
          color: "#B58B60",
          fontSize: "12px",
          textAlign: "center"
        }}>
          OEMAH.CO
        </p>

        <h1 style={{ textAlign: "center" }}>
          Admin Login
        </h1>

        <p style={{
          textAlign: "center",
          color: "#777",
          fontSize: "14px",
          marginBottom: "28px"
        }}>
          A Little Taste of Home
        </p>

        <label>Email Admin</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email admin"
          style={inputStyle}
        />

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "24px",
            background: "#29251F",
            color: "white",
            border: "none",
            borderRadius: "9px",
            fontSize: "15px",
            cursor: "pointer"
          }}
        >
          {loading ? "Memeriksa..." : "Masuk"}
        </button>

        {message && (
          <p style={{ textAlign: "center", fontSize: "13px" }}>
            {message}
          </p>
        )}
      </form>
    </main>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  padding: "13px",
  margin: "9px 0 20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  background: "white"
};
