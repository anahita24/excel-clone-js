let graphComponentMatrix = [];

for (let i = 0; i < rows; i++) {
    let row = [];
  for (let j = 0; j < cols; j++) {
   
    row.push();
  }  
  graphComponentMatrix.push(row);  
}


function isGraphCyclic(){
    // Dependency -> visited , dfsVisited; 
    let visited = [];
    let dfsVisited = [];

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
   
    visited.push([]);
    dfsVisited.push([]);
  }  
}