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
    node = childOne;
    childOne = node.children[0];
  }
 
  return node;

}