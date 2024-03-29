class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) return -1;
    let current = this.head
    let i = 0
    while(i != index){
        current = current.next
        i++
    }
    return current.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.next = this.head
        this.head = newNode
    }
    this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val)
    if(!this.tail){
        this.head = newNode;
        this.tail = newNode
    } else {
        this.tail.next = newNode
        this.tail = newNode;
    }
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val)
    if (index < 0 || index > this.length) return -1;
    if (index === 0){
        this.addAtHead(val)
    } else if(index == this.length) {
        this.addAtTail(val)
    } else {
        let current = this.head
        let i = 0
        while(i != index - 1){
            current = current.next
            i++
        }
        newNode.next = current.next
        current.next = newNode
        this.length++
    }
};


/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.length) return -1;
    if (index === 0) {
        this.head = this.head.next;
    } else{
        let current = this.head;
        let i = 0;
        while (i !== index - 1) {
            current = current.next;
            i++;
        }
        current.next = current.next.next;
        if (index === this.length - 1) {
            this.tail = current;
        }
    }
    this.length--;
};