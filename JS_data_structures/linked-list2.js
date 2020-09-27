function LinkedListV2 () {
    this.head = null;
    this.length = 0;

    function Node (data) {
        this.data = data;
        this.next = null;
    }

    this.add = (data) => {
        if (this.search(data)) {
            return null;
        }
        this.head = this.addNode(this.head, data);
        this.length++;
    }

    this.search = (data) => {
        return this.searchNode(this.head, data);
    }

    this.addNode = (node, data) => {
        if (node === null) {
            node = new Node(data);
        } else {
            node.next = this.addNode(node.next, data);
        }
        return node;
    }

    this.searchNode = (node, data) => {
        if (node === null) {
            return false;
        }
        if (data !== node.data) {
            return this.searchNode(node.next, data);
        }
        return true;
    }
}

let listV2 = new LinkedListV2();
listV2.add(10);
listV2.add(8);
listV2.add(11);
listV2.add(20);
listV2.add(13);
console.log(listV2);
console.log(listV2.search(10));