let value = document.querySelector("#valuetobe");
let intval = parseInt(value.innerHTML);


function dec(){
    intval = intval - 1;
    value.textContent = intval;
}



function inc(){
    intval = intval + 1;
    value.textContent = intval;
}