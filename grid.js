let rows = 100;
let cols = 26;


let addressColumnContainer = document.querySelector(".address-col-container");
let addressRowContainer = document.querySelector('.address-row-container');
let cellCont = document.querySelector('.cells-container');
let addressBar = document.querySelector('.address-bar')


for (let i =0;i< rows; i++){
    let addressCol = document.createElement('div');
    addressCol.innerText = i+ 1;
    addressCol.setAttribute('class', 'address-col');
    addressColumnContainer.appendChild(addressCol);
}

for(let i=0; i< cols; i++){
    let addressRow = document.createElement('div');
    addressRow.innerText = String.fromCharCode(i+65);
    addressRow.setAttribute('class', 'address-row');
    addressRowContainer.appendChild(addressRow);
}

for (let i = 0; i < rows; i++) {
    let rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'row-container');
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement('div');
        // for cell and storage identification
        cell.setAttribute('rid',i);
        cell.setAttribute('cid',j);
        cell.setAttribute('spellcheck', false);
        cell.setAttribute('class', 'cell');
        cell.setAttribute('contenteditable', true);
        addListenerForAddressBarDisplay(cell, i,j);
        rowContainer.appendChild(cell);
    }
    cellCont.appendChild(rowContainer)
}

function addListenerForAddressBarDisplay(cell, i , j) {
    cell.addEventListener('click', (e)=>{
     let rowId = i+1;
     let colId = String.fromCharCode(j+65);
     addressBar.value = `${colId}${rowId}`;
    })
}

let firstCell = document.querySelector('.cell');
firstCell.click();



