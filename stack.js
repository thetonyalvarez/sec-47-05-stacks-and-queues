/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    let curr = this.first
    
    if (this.first == null && this.last == null) {
      this.first = newNode
      this.last = newNode
      this.size++;
      return
    }
    
    if (this.size == 1) {
      this.last = this.first
      this.first = newNode
      newNode.next = this.last
      this.size++
      return
    }
    
    this.first = newNode
    this.first.next = curr
    this.size++

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.first == null) {
      raise("Queue is empty")
    }

    let removed = this.first
    this.first = this.first.next
    this.size--

    return removed.val
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.first == null) {
      raise("Queue is empty")
    }

    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.first != null ? false : true
  }
}

module.exports = Stack;
