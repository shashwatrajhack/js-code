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
        }else {
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
        while (current.next){
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null
        }
        shift(){
            if(!this.head)return undefined;
            var currentHead = this.head;
            this.head = currentHead.next;
            this.length--;
            if(this.length === 0){
                
            }
        }
    }

}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")