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
              
              find(value){
              if(this.root===null)return false;
               var current = this.root;
               found = false;

               while(current &&! found){
               if(value<current.value){
               current = current.left;
               }
               else if(value>current.value){
                current = current.right;
               }
               else{
               found = true;
               }
               }
               return current;
              }  

              BFS(){
              var node = this.root;
              data = [];
              queue = [];
              queue.push(node);

              while(queue.length){

              node = queue.shift();
              data.push(node.value);
              if(node.left)queue.push(node.left);
              if(node.right)queue.push(node.right);
              }
              return data;
              }
              DFSPreOrder(){
              var data = [];
              function traverse(node){
              data.push(node.value);
              if(node.left)traverse(node.left);
              if(node.right)traverse(node.right);
              }

              traverse(this.root);
              return data;
              }
             }
          }

        }
    }
}