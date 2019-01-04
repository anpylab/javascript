/**
 * Linked list
 */
function SingleLinkedList() {
    this.head = null;
}

SingleLinkedList.prototype.addEle = function (value) {
    let newNode = {
        data: value,
        next: null
    };
    if (this.head == null) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}
SingleLinkedList.prototype.printList = function () {
    let current = this.head;
    let str = "";
    while (current.next) {
        str += current.data + "=>";
        current = current.next;
    }
    str += current.data + "=>";
    console.log(str);
};
SingleLinkedList.prototype.findMiddleEle = function () {
    let curr = this.head;
    let mid = this.head;
    while (curr && curr.next) {
        mid = mid.next;
        curr = curr.next.next;
    }
    console.log("Mid value=" + mid.data);
};
SingleLinkedList.prototype.rev = function () {
    let curr = this.head;
    let next = null;
    let prev = null;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev;
}
1,2,3,4,5
SingleLinkedList.prototype.reverse = function () {
    let curr = this.head;
    let next = null;
    let prev = null;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev;
};
let list = new SingleLinkedList();
list.addEle(1);
list.addEle(2);
list.addEle(3);
list.addEle(4);
list.addEle(5);
list.addEle(6);
list.addEle(7);
list.printList();
list.findMiddleEle(); // Find Middle Element
list.reverse(); // Reverse Linked List
list.printList();