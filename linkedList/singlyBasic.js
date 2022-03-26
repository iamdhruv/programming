function LinkedListItem(data) {
    this.data = data;
    this.next = null;
}

function LinkedList(head = null) {
    this.head = head;
}

// traversion
LinkedList.prototype.traverse = function() {
    let current = this.head;
    let output = '';
    while(current !== null) {
        output += current.data + ' ';
        current = current.next;
    }
    console.log(output);
    return output.trimEnd();
}

// insertion
LinkedList.prototype.insertItemAtEnd = function(data) {
    const newItem = new LinkedListItem(data);
    if(this.head === null){
        this.head = newItem;
        return;
    } 
    let current = this.head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newItem;
}

LinkedList.prototype.insertItemAtStart = function(data) {
    const newItem = new LinkedListItem(data);
    if(this.head === null){
        this.head = newItem;
        return;
    } 
    newItem.next = this.head;
    this.head = newItem;
}

LinkedList.prototype.insertItemInMiddle = function(data, index) {
    if(this.head === null) {
        if(index === 0) {
            this.insertItemAtStart(data);
        }
        return;
    }
    let newItem = new LinkedListItem(data);
    let currentIndex = 0;
    let currentItem = this.head;
    let nextItem = this.head.next;
    while(currentIndex < index-1) {
        currentItem = nextItem;
        nextItem = nextItem === null ? null : nextItem.next;
        currentIndex += 1;
    }
    currentItem.next = newItem;
    newItem.next = nextItem;
}

// deletion
LinkedList.prototype.deleteFromEnd = function() {
    if(this.head === null) {
        return;
    }
    let current = this.head;
    let temp = null;
    while(current.next !== null) {
        temp = current;
        current = current.next;
    }
    temp.next = null;
}

LinkedList.prototype.deleteFromStart = function() {
    if(this.head === null) {
        return;
    }
    let temp = this.head.next;
    this.head.next = null;
    this.head = temp;
}

LinkedList.prototype.deleteFromMiddle = function(index) {
    if(this.head === null) {
        return;
    }
    let currentIndex = 0;
    let current = this.head;
    let previous = null;
    while(currentIndex < index) {
        previous = current;
        current = current.next;
        currentIndex += 1;
    }
    previous.next = current.next;
    current.next = null;
}

export {
    LinkedList,
    LinkedListItem
};

// const LL = new LinkedList();
// LL.insertItemAtEnd(2);
// LL.insertItemAtEnd(3);
// LL.insertItemAtEnd(5);
// LL.insertItemAtEnd(6);
// LL.insertItemAtStart(1);
// LL.insertItemInMiddle(4, 3);
// LL.deleteFromStart();
// LL.deleteFromEnd();
// LL.deleteFromMiddle(2);
// LL.traverse();