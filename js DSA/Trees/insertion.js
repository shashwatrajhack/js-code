class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Binary {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newnode = new Node(val);
    if ((this.root = null)) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          }
          else{
            current = current.left;
          }
        }elseif(value>current.value)
            if(current.right == null){
                current.right = newNode;
                return this;
            }else{
                current = current.right;
            }
        
      }
    }
  }
}


const bst = new Binary();
