var nameList = ["aline","Otavio","Camila","Nareba","Jean","Julio","Julio Rodalo","Rany","Ti"]
var contador = 0
const frm = document.querySelector("form")

const listE1 = document.getElementById("list");
const searchField = document.getElementById("searchField");

const adicionar = document.getElementById("buttonAdicionar");
const remover = document.getElementById("buttonRemover");
const filtrar = document.getElementById("buttonFiltrar");
const selecionar = document.getElementById("buttonSelecionar");

this.filllist();

adicionar.addEventListener("click", () => {
    
    if((searchField.value == "") || (searchField.value == " ")){

        filllist();

    }else{

        nameList.push(searchField.value);
        filllist();

    }

    searchField.value = "";
    searchField.focus();

    filllist();
    alert("Nome adicionado com sucesso!!")

});

selecionar.addEventListener("click", () =>{

    if(contador > (nameList.length - 2)){

        contador = 0;

    }else{

        contador += 1;
    }

    filllist();

});

filtrar.addEventListener("click", () =>{

    const filteredList = nameList.filter(e1 => {

        const listItens = e1.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItens.includes(searchWord)

    })
    alert("Filtrado!!")
    filllist(filteredList);

});

remover.addEventListener("click", () =>{

    if(contador > (nameList.length - 2)){

        nameList.splice(contador, 1);
        contador -= 1;
        filllist();

    }else{

        nameList.splice(contador, 1);
        filllist();

    }

    alert("Nome removido com sucesso!!")

});

function filllist(list = nameList){

    listE1.innerHTML = "";

    for(let i=0; i< list.length; i++){

        let listItens = document.createElement("li");

        if(i == contador){

            listItens.className = "alert alert-dark"

        }else{

            listItens.className = "alert alert-info"
        }

        listItens.innerHTML = list[i];
        listE1.appendChild(listItens);
    }
}