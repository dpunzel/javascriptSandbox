// create node

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// doubly linked list

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        //
        const newNode = new Node(value);

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode
        this.length++
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        // check parameters
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);

        const leader = this.traverseToIndex(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList()

    }

    remove(index) {
        //console.log('This is the lenght', this.length)
        if (index > this.length-1) {
            return console.log('Index is greater than listd')
        }
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList()


    }

    traverseToIndex(index) {
        // check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1);
myLinkedList.insert(2,99)
//myLinkedList.remove(5)

//myLinkedList.printList();
console.log(myLinkedList.printList())