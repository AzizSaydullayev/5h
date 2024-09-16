let str = prompt ("ismingizni kirining").toLowerCase()

let harf = prompt("Libboy harf kiriting").toLocaleLowerCase()

if(str.includes(harf)){
console.log("Ha bu harf qatnashgan");
}else{
console.log("Qatnashmagan");
}