// // https://www.youtube.com/watch?v=oSWTXtMglKE 

// class Node {
//     constructor(data, left, right, parent){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//         this.parent = null;
//     }
// }

// let node50 = new Node(50)
// let node30 = new Node(30)
// let node70 = new Node(70)

// node30.parent = node50
// node70.parent = node50
// node50.left = node30
// node50.right = node70



// const minimumNode = (node) => {
//     while (node.left != null){
//         node = node.left;
//     }
//     return node;
// }

// const deleteNode = (node, key) => {
//     console.log(node)
//     let temp = null
//     if (node == null){
//         return node
//     }
//     else if (key < node.data){
//         node.left = deleteNode(node.left, key)
//     }
//     else if (key > node.data){
//         node.right = deleteNode(node.right, key)
//     }
//     else {
//         if (node.left == null && node.right == null){
//             node = null;
//         }
//         else if (node.left == null){
//             temp = node
//             node = node.right
//         }
//         else if (node.right == null){
//             temp = node
//             node = node.left
//         }
//         else{
//             temp = minimumNode(node.right)
//             node.data = temp.data
//             node.right = deleteNode(node.right, temp.data)
//         }
//     }
//     console.log(node)
//     return node
// }

// console.log(node70)




class Node {
    constructor (data, left, right){
        this.data = data
        this.right = right,
        this.left = left
    }

    insert(value){
        if (value <= this.data){
            if (this.left == null){
                this.left = new Node(value)
            }
            else {
                this.left.insert(value)
            }
        }
        else {
            if (this.right == null){
                this.right = new Node(value)
            }
            else{
                this.right.insert(value)
            }
        }
    }

    contains(value){
        if (value == this.data){
            return true;
        }
        else if (value < this.data) {
            if (this.left == null) {
                return false;
            }
            else {
                return this.left.contains(value)
            }
        }
        else {
            if (this.right == null) {
                return false;
            }
            else {
                return this.right.contains(value)
            }
        }
    }
    // In order traversal
    printInOrder = () => {
        if (this.left != null){
            this.left.printInOrder();
        }  
        console.log(this.data)
        if (this.right != null){
            this.right.printInOrder();
        }
    }
}



let node50 = new Node(50)
node50.insert(20)
node50.insert(75)
node50.insert(40)
node50.insert(24)
node50.insert(52)
node50.insert(8)
node50.insert(99)
node50.insert(1)
node50.insert(66)
node50.insert(75)
node50.insert(100)
node50.insert(124)
node50.insert(41)
//console.log(node50)
//console.log(node50.contains(25))