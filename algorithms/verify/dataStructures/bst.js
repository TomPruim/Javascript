class bst{
  constructor(left, right, value){
    this.left = left;
    this.right = right;
    this.value = value;
  }
  verify(bst){
    if(bst.left<bst.value && bst.value<bst.right){
      return true;
    }else{
      return false;
    }
  }
}
// simple testing
let a = new bst(1,3,2);
let b = new bst(1,2,3);

console.log(a.verify(a));
console.log(b.verify(b));
