class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const obj = {
      value: value,
      next: null
    };
    this.tail.next = obj;
    this.tail = obj;
    this.length++;
  }
  prepend(value) {
    const obj = {
      value: value,
      next: this.head
    };
    this.head = obj;
    this.length++;
  }

  insert(index, value) {
    let node = this.head;
    let ind = 0;
    if (index == 0) {
      this.prepend(value);
      return this;
    } else {
      while (node.next != null) {
        if (ind == index - 1) {
          const obj = {
            value: value,
            next: node.next
          }
          node.next = obj;
          return this;
        }
        ind++;
        node = node.next;
      }
    }
    console.log('Insert failed! Index out of bounds');
  }

  display() {
    let node = this.head;
    while (node.next != null) {
      console.log(node.value);
      node = node.next;
    }
    console.log(this.tail.value);
    console.log('length : ' + this.length)
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(2);
myLinkedList.append(5);
myLinkedList.append(136);
myLinkedList.prepend(260);
myLinkedList.insert(3, 131);
console.log(myLinkedList.display());
