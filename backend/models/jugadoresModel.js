import { Schema, model } from "mongoose";

// Definir el esquema de los jugadores
const EsquemaJugadores = new Schema({
  name: String, 
  apepat: String, 
  numero: Number
});

// Crear el modelo a partir del esquema
export const modeloJugadores = model("Jugador", EsquemaJugadores);
