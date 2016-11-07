function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BST(){
  this.root = null;
}

BST.prototype.find = function(value){
  if(this.root == null){
    console.log('BST is empty');;
  }
  else{
    return findNode(this.root, value);
  }
}

function findNode(node,value){
  if(node == null){
    return null;
  }else if(node.value == value){
    return node;
  }else if(value > node.value){
    return findNode(node.right, value);
  }else{
    return findNode(node.left, value);
  }
}

BST.prototype.add = function(value){
  if(this.root == null){
    this.root = new Node(value);
  }else{
    this.root.addNode(value);
  }

}

Node.prototype.addNode = function(value){
  if(this.value > value){
    if(this.left == null){
      this.left = new Node(value)
    }else{
      this.left.addNode(value);
    }
  }else if(this.value < value){
    if(this.right == null){
      this.right = new Node(value)
    }else{
      this.right.addNode(value);
    }
  }else{
    console.log('the vlue already exists');
  }
}

BST.prototype.height = function(){
  if(this.root == null){
    return 0;
  }else{
    return height(this.root)
  }
}

function height(node){
  if(node == null){
    return 0;
  }else{
    var countLeft = 1 + height(node.left);
    var countRight = 1 + height(node.right);
  }
  if(countRight<countLeft){
    return countLeft;
  }else{
    return countRight;
  }
}

bst = new BST()

bst.add(5);

console.log(bst.height());

bst.add(10);
console.log(bst.height());
bst.add(12);
console.log(bst.height());
bst.add(8);
console.log(bst.height());
bst.add(9);
console.log(bst.height());
bst.add(3);
console.log(bst.height());
console.log(bst.find(10));
