let downloadBtn = document.querySelector(".download");
let openbtn = document.querySelector(".open");

downloadBtn.addEventListener("click", (e)=>{
  let jsonData = JSON.stringify([sheetDb , graphComponentMatrix]);
  let file = new Blob([jsonData], {
    type: "application/json"
  })
  let a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = "SheetData.json";
  a.click();
})

openbtn.addEventListener("click",()=>{
  let input = document.createElement("input");
  input.setAttribute("type", "file");
  input.click();
  input.addEventListener("change",()=>{
    let fr = new FileReader();
    let files = input.files[0];
    let fileObj = files[0];
    fr.readAsArrayBuffer(fileObj);
    fr.addEventListener("load", (e)=>{
      let readSheetData = JSON.parse( fr.result);
      addSheetBtn.click();
    })
  })
    
})