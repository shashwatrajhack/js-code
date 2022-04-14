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

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);