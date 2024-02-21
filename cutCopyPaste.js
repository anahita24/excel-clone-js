let ctrlKey

document.addEventListener("keydown", (e)=>{
    ctrlKey = e.ctrlKey;
})

document.addEventListener("keyup", (e)=>{
    ctrlKey = e.ctrlKey;
})

for(let i=0; i< rows; i++){
    for(let j=0; j<cols; j++){
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        handleSelectedCell(cell);
    }
}
let rangeStorage = [];

function handleSelectedCell(cell){
    cell.addEventListener("click", (e)=>{
        // Select cells range work 
        if(!ctrlKey) return;
        if(rangeStorage.length >= 2) return;
        
        //UI 
        cell.style.border = "3px solid #218c74";

        let rid = Number(cell.getAttribute("rid"));
        let cid = Number(cell.getAttribute("cid"));
        rangeStorage.push([rid, cid]);
        console.log(rangeStorage, 'range storage');
    })
}