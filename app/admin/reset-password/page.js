
"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset(e) {
    e.preventDefault();
    setMessage("");

    if (password.length < 8) {
      setMessage("Password minimal 8 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Konfirmasi password tidak cocok.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    setLoading(false);

    if (error) {
      setMessage("Gagal mengganti password. Coba buka ulang tautan pemulihan terbaru.");
      return;
    }

    setMessage("Password berhasil diganti! Silakan masuk kembali melalui halaman admin.");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#F3EBDD",
      display: "grid",
      placeItems: "center",
      padding: "24px",
      color: "#29251F",
      fontFamily: "Arial, sans-serif"
    }}>
      <form onSubmit={handleReset} style={{
        background: "#fffaf2",
        padding: "32px",
        borderRadius: "18px",
        width: "100%",
        maxWidth: "390px",
        boxShadow: "0 12px 40px #29251f18"
      }}>
        <p style={{
          textAlign: "center",
          letterSpacing: "4px",
          color: "#B58B60"
        }}>
          OEMAH.CO
        </p>

        <h1 style={{ textAlign: "center" }}>
          Ganti Password
        </h1>

        <p style={{ textAlign: "center", color: "#777" }}>
          Buat password baru untuk akun admin.
        </p>

        <label>Password Baru</label>
        <input
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Minimal 8 karakter"
          style={inputStyle}
        />

        <label>Konfirmasi Password</label>
        <input
          type="password"
          required
          minLength={8}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Ulangi password baru"
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "18px",
            background: "#29251F",
            color: "white",
            border: "none",
            borderRadius: "9px",
            cursor: "pointer"
          }}
        >
          {loading ? "Menyimpan..." : "Simpan Password Baru"}
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
            
