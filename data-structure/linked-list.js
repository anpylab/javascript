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
}
let list = new SingleLinkedList();
list.addEle(1);
list.addEle(2);
list.addEle(3);
list.addEle(4);
list.addEle(5);
list.addEle(6);
list.printList();