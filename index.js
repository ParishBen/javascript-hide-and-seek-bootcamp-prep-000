function getFirstSelector(s) {
  return document.querySelector(s);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
deepestChild(){
  
  let grandNode = document.getElementById('grand-node');
  let childOne = grandNode.children[0];
 
  while (childOne) {
    grandNode = childOne;
    childOne = grandNode.children[0];
  }
 
  return grandNode;

}