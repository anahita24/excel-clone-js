let sheetDb=[];
let collectedSheedDb = [];

{
  let addSheetBtn = document.querySelector('.sheet-add-icon');
  addSheetBtn.click();
  handleSheetProperties();
}
// for (let i = 0; i < rows; i++) {
//     let sheetRow = [];
//   for (let j = 0; j < cols; j++) {
//     let cellProp ={
//        bold: false,
//        italic: false,
//        underline: false,
//        alignment : 'left',
//        fontFamily: "monospace",
//        fontSize: 14,
//        fontColor: "#000000",
//        value: '',
//        formula: '',
//        BGColor: "#f2f1ef",  // just for indication purpose default value 
//        children:[],
//     }
//     sheetRow.push(cellProp);
//   }  
//   sheetDb.push(sheetRow);  
// }


//Selectors for cell property
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size-prop");
let fontFamily = document.querySelector('.font-family-prop');
let fontColor = document.querySelector(".font-color-prop");
let BGColor = document.querySelector('.BGcolor-prop');
let alignment = document.querySelectorAll('.alignment');
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];

let activeColorProp = '#d9b18e';
let inactiveColorProp = '#f2f1ef';
//Attach properties listerner
bold.addEventListener('click',()=>{
  let address = addressBar.value;
  let [cell, cellProp]=getActiveCell(address);
  cellProp.bold = !cellProp.bold;
  cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
  bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
})

italic.addEventListener('click',()=>{
  let address = addressBar.value;
  let [cell, cellProp]=getActiveCell(address);
  cellProp.italic = !cellProp.italic;
  cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
  italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
})

underline.addEventListener('click',()=>{
  let address = addressBar.value;
  let [cell, cellProp]=getActiveCell(address);
  cellProp.underline = !cellProp.underline;
  cell.style.textDecoration = cellProp.underline ? "underline" : "none";
  underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
})

fontSize.addEventListener('change',(e)=>{
  let address = addressBar.value;
  let [cell, cellProp]=getActiveCell(address);


  cellProp.fontSize = fontSize.value;
  cell.style.fontSize = cellProp.fontSize + "px";
  fontSize.value = cellProp.fontSize;
})

fontFamily.addEventListener('change',(e)=>{
  let address = addressBar.value;
  let [cell, cellProp]=getActiveCell(address);


  cellProp.fontFamily = fontFamily.value;
  cell.style.fontFamily = cellProp.fontFamily;
  fontSize.value = cellProp.fontFamily;
})

fontColor.addEventListener('change',(e)=>{
  let address = addressBar.value;
  let [cell, cellProp]=getActiveCell(address);


  cellProp.fontColor = fontColor.value;
  cell.style.color = cellProp.fontColor;
  fontColor.value = cellProp.fontColor;
})

BGColor.addEventListener('change',(e)=>{
  let address = addressBar.value;
  let [cell, cellProp]=getActiveCell(address);


  cellProp.BGColor = BGColor.value;
  cell.style.backgroundColor = cellProp.BGColor;
  BGColor.value = cellProp.BGColor;
})

alignment.forEach(alignElement=>{
  alignElement.addEventListener('click',(e)=>{
    let address = addressBar.value;
    let [cell, cellProp]=getActiveCell(address);
  
    let alignValue = e.target.classList[0];
    cellProp.alignment = alignValue;
    cell.style.textAlign = cellProp.alignment;
    switch(alignValue){
      case 'left':
        leftAlign.style.backgroundColor = activeColorProp;
        centerAlign.style.backgroundColor =  inactiveColorProp;
        rightAlign.style.backgroundColor =  inactiveColorProp;
        break;
      case 'center':
        leftAlign.style.backgroundColor = inactiveColorProp;
        centerAlign.style.backgroundColor =  activeColorProp;
        rightAlign.style.backgroundColor =  inactiveColorProp;
        break;
      case 'right':
        leftAlign.style.backgroundColor = inactiveColorProp;
        centerAlign.style.backgroundColor =  inactiveColorProp;
        rightAlign.style.backgroundColor =  activeColorProp;
        break;
    }
  })
})

let allCells = document.querySelectorAll('.cell');
for(let i = 0; i<allCells.length; i++){
  addListenerForCellPropertyAttachment(allCells[i]);
}

function  addListenerForCellPropertyAttachment(cell){
  cell.addEventListener('click', ()=>{
    let address = addressBar.value;
    let [rId, cId]=rIdcIdFromAddress(address);
    let cellProp = sheetDb[rId][cId];

    cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
    cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
    cell.style.textDecoration = cellProp.underline ? "underline" : "none";
    cell.style.fontSize = cellProp.fontSize + "px";
    cell.style.fontFamily = cellProp.fontFamily;
    cell.style.color = cellProp.fontColor;
    cell.style.backgroundColor = cellProp.BGColor;
    cell.style.textAlign = cellProp.alignment;

    switch(cellProp.alignment){
      case 'left':
        leftAlign.style.backgroundColor = activeColorProp;
        centerAlign.style.backgroundColor =  inactiveColorProp;
        rightAlign.style.backgroundColor =  inactiveColorProp;
        break;
      case 'center':
        leftAlign.style.backgroundColor = inactiveColorProp;
        centerAlign.style.backgroundColor =  activeColorProp;
        rightAlign.style.backgroundColor =  inactiveColorProp;
        break;
      case 'right':
        leftAlign.style.backgroundColor = inactiveColorProp;
        centerAlign.style.backgroundColor =  inactiveColorProp;
        rightAlign.style.backgroundColor =  activeColorProp;
        break;
    }
    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
    italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
    underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
    fontSize.value = cellProp.fontSize;
    fontFamily.value = cellProp.fontFamily;
    fontColor.value = cellProp.fontColor;
    BGColor.value = cellProp.BGColor;

  });


}


function getActiveCell(address){
  let [rId, cId]=rIdcIdFromAddress(address);
  let cell = document.querySelector(`.cell[rid="${rId}"][cid="${cId}"]`);
  let cellProp = sheetDb[rId][cId];
  return [cell, cellProp];
}

function rIdcIdFromAddress(address){
   let rowId = Number(address.slice(1)) - 1;
   let colId = Number(address.charCodeAt(0)) - 65;
   return [rowId, colId];
}
