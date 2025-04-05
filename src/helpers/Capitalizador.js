export default function capitalizarPalabras(texto) {
  // Dividir el texto en palabras
  const palabras = texto.split(" ");

  // Capitalizar la primera letra de cada palabra y convertir el resto a minúscula
  const textoCapitalizado = palabras
    .map(
      (palabra) =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )
    .join(" "); // Unir las palabras con espacios

  return textoCapitalizado;
}
