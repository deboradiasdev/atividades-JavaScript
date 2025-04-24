//Palíndromo

function palindromo(palavra) {
  const texto = palavra.toLowerCase()
  const tamanho = texto.length;

  for (let i=0; i < tamanho /2; i++){
      if(texto[i] !== texto[tamanho - 1 -i]) {
        return false
      }
    }
    return true;
};

console.log(palindromo("Nathan"));
console.log(palindromo("Ana"));
console.log(palindromo("Gabriel"));
console.log(palindromo("Ciro"));
console.log(palindromo("Renner"));


