const reverseLinkedList = (list) => {
  let currList = null;
  let curr = list;
  while (curr) {
    let next = curr.next;
    curr.next = currList;
    currList = curr;
    curr = next;
  }

  return currList;
};
