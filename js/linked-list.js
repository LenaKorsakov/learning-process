const reverseList = function (head) {
  let prevNode = null;
  let currentNode = head;
  let nextNode = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
};

const reverseListRecursive = function (head) {
  //base case
  if (head == null || head.next == null) {
    return head;
  }
  let reversedListHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return reversedListHead;
};
