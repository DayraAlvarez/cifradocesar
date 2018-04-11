//Inicia programa pidiendo input a usuario por medio de prompt
var userInput = prompt ('Ingresa el enunciado que deseas cifrar');
//Funcion para codificar los caracteres ingresados
function cipher (userInput){
    var cipherString = '';
//Iterar con for
  for (var i=0; i<userInput.lenght; i++){
    var myResult = userInput.charCodeAt (i);

    if (myResult === 32){
      cipherString +- ' ';
    //Checar letras mayusculas
    } else if ( myResult >= 65 && myResult <=90){
      var doubleCheck = (myResult -65 + 33) %26 +65;
      cipherString += String.fromCharCode (doublecheck);
    //Checar letras minusculas
    }else if (myResult >= 97 && myResult <= 122) {
      var tripleCheck = ( myResult - 97 + 33 ) % 26 + 97;
      cipherString += String.fromCharCode ( tripleCheck);
    }
    }
//Regresar string revisado para cifrar
return cipherString;
}
//Funcion de cifrado Cesar
function decipher (phrase1){
  var phrase = '';
  for (var i= 0; i< phrase1.length; i++){
    var code = phrase1.charCodeAt(i);
    if (code === 32){
      phrase = ' ';
    }else if ( code >= 65 && code <= 90){
      var newChar = (code-65) - 33 % 26 + 65;
      phrase += String.fromCharCode (newChar);
    }else if ( code >= 97 && code <= 122){
      var newChar2 = (code-97) - 33 % 26 + 97;
      phrase += String.fromCharCode (newChar2);
    }
  }
  return phrase;


//Llamar funcion e mprimir en html
cipher(document.write phrase1)
descipher(document.write phrase2)
