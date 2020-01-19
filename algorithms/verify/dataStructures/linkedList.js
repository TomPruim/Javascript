class linkedList{
  constructor(curr, next){
    this.curr = curr;
    this.next = next;
  }

  verifyIfEnd(linkedList){
    if(linkedList.next == null){
      return true;
    }else{
      return false;
    }
  }

  
}
