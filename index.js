function getFirstSelector(s) {
  return document.querySelector(s);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function deepestChild(){
  
  let grandNode = document.getElementById('grand-node');
  let childOne = grandNode.children[0];
 
  while (childOne) {
    grandNode = childOne;
    childOne = grandNode.children[0];
  }
 
  return grandNode;

}


function increaseRankBy(n) {
  const allRankedLists = document.querySelectorAll('.ranked-list');
 
  for (let i = 0, l = allRankedLists.length; i < l; i++) {
    let allChildren = allRankedLists[i].children;
 
    for (let r = 0, len = allChildren.length; r < len; r++) {
      allChildren[r].innerHTML = parseInt(allChildren[r].innerHTML) + n;
    }
  }
}
