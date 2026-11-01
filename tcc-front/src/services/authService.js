// src/services/authService.js
import api from "./api";

export const login = async (email, password) => {
  try {
    console.log("📤 Enviando login para API...");
    const response = await api.post("/login", { 
      email: email, 
      password: password 
    });
    return response.data;
  } catch (error) {
    console.error("❌ Erro no authService:", error);
    throw error;
  }
};