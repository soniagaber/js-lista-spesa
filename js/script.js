let listaSpesa=["latte", "uova", "cacao", "cereali", "yogurt"];
let listaEl= document.getElementById("lista");

contatore=0;

while(contatore< listaSpesa.length){
    let newLiElement=document.createElement('li');
    newLiElement.innerHTML=listaSpesa[contatore];
    listaEl.append(newLiElement);
    contatore ++;
}