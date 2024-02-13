

let addSheetBtn = document.querySelector('.sheet-add-icon');
addSheetBtn.addEventListener("click", ()=>{
    let sheet = document.createElement("div");
    sheet.setAttribute("class", "sheet-folder");

    let allSheetFolders = document.querySelectorAll(".sheet-folder");
    sheet.setAttribute("id", allSheetFolders.length);
    sheet.innerHTML = `
    <div class="sheet-content">Sheet ${allSheetFolders.length + 1}</div>`;

let sheetsFolderContainer = document.querySelector('.sheets-folder-container');

sheetsFolderContainer.appendChild(sheet);
createSheetDB();
createGraphComponentMatrix();
handleSheetActiveness(sheet);
})

function createSheetDB(){
    let collectedSheedDb = [];
    let sheetDb=[];
    for (let i = 0; i < rows; i++) {
        let sheetRow = [];
      for (let j = 0; j < cols; j++) {
        let cellProp ={
           bold: false,
           italic: false,
           underline: false,
           alignment : 'left',
           fontFamily: "monospace",
           fontSize: 14,
           fontColor: "#000000",
           value: '',
           formula: '',
           BGColor: "#f2f1ef",  // just for indication purpose default value 
           children:[],
        }
        sheetRow.push(cellProp);
      }  
      sheetDb.push(sheetRow);  
    } 
    collectedSheedDb.push(sheetDb);
}


function createGraphComponentMatrix(){
    // Storage -> 2D array (Basic needed)
let collectedGraphComponent = [];
let graphComponentMatrix = [];

for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
        // Why array -> More than 1 child relation(dependency)
        row.push([]);
    }
    graphComponentMatrix.push(row);
}
collectedGraphComponent.push(graphComponentMatrix);
}

function handleSheetActiveness(){
   sheet.addEventListener('click', ()=>{
    let sheetIdx = Number(sheet.getAttribute("id"));
    handleSheetDb(sheetIdx);
    handleSheetProperties();
   })
}  

function handleSheetDb(){
sheetDb = collectedSheedDb[sheetIdx];
graphComponentMatrix = collectedGraphComponent[sheetIdx];
}

function handleSheetProperties(){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('div');
            cell.click();
        }
        
    }
}

