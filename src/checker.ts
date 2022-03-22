function isPalindrome(text: string): boolean {
  console.log('isPalindrome...');
  console.log(text);
  let bPalindrome: boolean = true;
  for (let i = 0; i < text.length; i++) {
    console.log(text.charAt(i).toLowerCase(), 
      '\t', text.charAt(text.length - i - 1).toLowerCase());
      //TODO: Implementar lógica de comparación de caracteres

  }
  return bPalindrome;
}
export default isPalindrome;