/*
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

I: singly linked list, k
O: kth to last element
C: singly linked
E: k is larger than the number of nodes in the list (return head), missing or empty list (return null), missing k (return tail)

Examples:
{1, 2, 3, 4, 5}, 2 --> 4
{1, 2, 3, 4, 5}, 4 --> 2
{1, 2, 3, 4, 5}, 8 --> 1 (return head)
{}, 12 --> null
12 --> null
{1, 2, 3, 4, 5} --> 5 (return tail)
*/

const LinkedList = require('../../classes/sll');
const list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);

// if no 'size/length' property on list
function findKthToLast(list, k) {
  if (!Object.keys(list).length) return null;
  if (!k) return list.tail;

  let length = countNodes(list);
  if (length < k) return list.head;
  let targetNode = length - k + 1;
  let node = list.head;
  let nodeNum = 1;

  while(nodeNum < targetNode) {
    node = node.next;
    nodeNum++;
  }
  return node;
}

function countNodes(list) {
  let count = 0;
  let node = list.head;

  while(node) {
    count++;
    node = node.next;
  }
  return count;
}

console.log(findKthToLast(list, 2)); // 4
console.log(findKthToLast(list, 4)); // 2
console.log(findKthToLast(list, 8)); // 1
console.log(findKthToLast({}, 12));  // null
console.log(findKthToLast(12));      // null
console.log(findKthToLast(list));    // 5
