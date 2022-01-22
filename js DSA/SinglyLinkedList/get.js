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
        var newNode =new Node(val);
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
        return current
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
       } else {
           newNode.next = this.head;
           this.head = newNode;
       }
       this.length++;
       return this;
    }
    get(index){
        if(index < 0 || index >= this.length)return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = currnt.next;
            counter++;
        }
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.push("<3")
list.push(":)")