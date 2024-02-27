let downloadBtn = document.querySelector(".download");
let openbtn = document.querySelector(".open");

downloadBtn.addEventListener("click", (e)=>{
  let jsonData = JSON.stringify([sheetDb , graphComponentMatrix]);
  let file = new Blob([jsonData], {
    type: "application/json"
  })
})