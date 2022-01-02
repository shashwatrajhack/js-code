 class Node{
    constructor(val){
        this.val = val;
        this.next = val;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop(){
        if(!this.head)return undefined;
        var current = this.head;
        var newtail = current;
        while(current.next){
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if(this.length===0){
            this.tail = null;
            this.head = null;
        }
        return current;
    } 

    shift(){
        if(!this.head)return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(!this.length===0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
             this.head = newNode;
             this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

var list = SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")