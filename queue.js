/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		let newNode = new Node(val);
    let curr = this.first;
    
    if (this.first == null && this.last == null) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return
    }
    
    if (this.size == 1) {
      this.last = newNode;
      this.first.next = newNode;
      this.size++;
      return
    }
    
    while (curr != this.last) {
      if (curr.next == this.last) {
        this.size++;
        curr.next.next = newNode;
        this.last = newNode;
        return
      }
      curr = curr.next;
    }

	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
    if (this.first == null) {
      raise("Queue is empty")
    }

    let curr = this.first

    while (curr != null) {
      if (curr.next == null) {
        this.first = null
        return curr.val
      }
      curr.next = this.first
      this.size--;
      return curr.val
    }
  }

	/** peek(): return the value of the first node in the queue. */

	peek() {
    if (this.first == null) {
      raise("Queue is empty")
    }

    return this.first.val

  }

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
    if (this.first != null) {
      return false
    }

    return true
  }
}

module.exports = Queue;
