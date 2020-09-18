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
}

//create a linked list starting from  an array
let array = [1, 3, 6, 7, 8, 10, 1];

const getLinkedListFromArray = (arr) => {
    let linkedList = new LinkedList();
    while (arr.length !== 0) {
        linkedList.add(arr.shift());
    }
    return linkedList;
};
console.log(getLinkedListFromArray(array));

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