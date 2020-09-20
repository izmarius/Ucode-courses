function LinkedList () {
    this.length = 0;
    this.head = null;

    let Node = function (data) {
        this.data = data;
        this.next = null;
    };

    this.add = (data) => {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    };

    this.remove = (data) => {
        let currentNode = this.head;
        let previousNode = null;
        let includesData = this.includes(data);
        if (includesData) {
            if (currentNode.data === data) {
                this.head = currentNode.next;
            } else {
                while (currentNode.data !== data) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next;
            }
            this.length--;
        }
        return;
    };

    this.includes = (data) => {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.data === data) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    };

    this.reverseList = () => {
        let currentNode = this.head;
        let previousNode = null;
        let nextNode = null;
        while (currentNode != null) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.head = previousNode;
    };
}

//create a linked list starting from  an array
// add and remove methods
// reverse list method
let array1 = [1, 3, 6, 7, 8, 10, 1];
let array2 = [1, 2, 3, 4, 5];

const getLinkedListFromArray = (arr) => {
    let linkedList = new LinkedList();
    while (arr.length !== 0) {
        linkedList.add(arr.shift());
    }
    return linkedList;
};

//linked list 1
let linkedList1 = getLinkedListFromArray(array1);
console.log(linkedList1);
linkedList1.remove(1);
console.log(linkedList1);

//linked list 2
let linkedList2 = getLinkedListFromArray(array2);
console.log(linkedList2);

const converArrayIntoLinkedList = (arr) => {
    let list = null;
    let listSize = 0;
    while (arr.length !== 0) {
        list = {
            data: arr.pop(),
            next: list
        };
        listSize++;
    }
    list.length = listSize;
    return list;
};

let a = [1, 2, 3];
console.log(converArrayIntoLinkedList(a));