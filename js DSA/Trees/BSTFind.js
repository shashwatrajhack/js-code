class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root===null){
            this.root = newNode;
            return this;
        }else{
          var current = this.root;
        while(true){
            if(value<current.value){
                if(current.left===null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else if(value>current.value){
                if(current.right===null){
                    current.right = newNode;
                    return this;
                }else{
                    current = current.right;
                }
                
                
             }
          }

        }
    }

    find(value){
        if(this.root===null)return false;
        var current=this.root;
        found = false;
        while(current&&!found){
            if(value<current.value){
                current = current.left;
            }else if(value>current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        return current;
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)