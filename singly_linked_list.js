function SLL(){
  this.head= null;
  this.length = 0;
}

function Node(val){
  this.value= val;
  this.next = null;
}

function push(ssl,val){
  var node = new Node(val)
  if(ssl.head == null){
    ssl.length += 1;
    ssl.head = node;
  }else{
    var current = ssl.head;
    while(current.next != null){
      current = current.next;
    }
    ssl.length += 1
    current.next = node;
  }
}

function pop(ssl){
  if(ssl.head == null){
    console.log("The head is empty...");
  }else if(ssl.head.next == null){
    var result = ssl.head;
    ssl.head = null;
    ssl.length -= 1;
    return result;
  }else{
    var current = ssl.head;
    while(current.next.next != null){
      current = current.next;
    }
    var result = current.next;
    current.next = null;
    ssl.length -= 1;
    return result;
  }
}

function printss(ssl){
  var current = ssl.head;
  var result = "";
  while(current != null){
    result = result + String(current.value) + " -> ";
    current = current.next;
  }
  result = result + "null (length:" + ssl.length +")";
  console.log(result);
}

function shift(ssl){
  if(ssl.head == null){
    console.log("The head is empty");
  }else if (ssl.head.next == null){
    console.log("Shifting");
  }else{
    console.log("Shifting");
    var current = ssl.head;
    while(current.next.next != null){
      current = current.next;
    }
    var newHead = current.next;
    current.next = null;
    newHead.next = ssl.head;
    ssl.head = newHead;
  }
}

function unshift(ssl){
  if(ssl.head == null){
    console.log("The head is empty");
  }else if (ssl.head.next == null){
    console.log("Unshifting");
  }else{
    console.log("Unshifting");
    var newTail = ssl.head;
    ssl.head = ssl.head.next;
    newTail.next = null;
    var current = ssl.head;
    while(current.next!=null){
      current = current.next;
    }
    current.next = newTail;
  }
}

SLL.prototype.insert = function(position, node){
  if(this.length<position){
    console.log("Out of index");
  }else{
    var count = 1;
    var current = this.head
    while(count != position){
      current = current.next;
      count++;
    }
    node.next = current.next;
    current.next = node;
    this.length += 1;
  }
}

var ssl = new SLL()
push(ssl, 10)
push(ssl, 10)
push(ssl, 20)
push(ssl, 3)
push(ssl, 49)
printss(ssl)
shift(ssl);
printss(ssl);
shift(ssl);
printss(ssl);
unshift(ssl);
printss(ssl);
unshift(ssl);
printss(ssl);
var newNode = new Node(69);
ssl.insert(1,newNode);
printss(ssl);
// pop(ssl);
// printss(ssl);
// pop(ssl);
// printss(ssl);
// pop(ssl);
// printss(ssl);
// pop(ssl);
// printss(ssl);
// pop(ssl);
// printss(ssl);
// pop(ssl);
// printss(ssl);
