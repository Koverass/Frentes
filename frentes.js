// Agregar frente
// Escribe un método que acepte un valor y cree un nuevo nodo, asígnalo al encabezado de la lista y devuelve un puntero al nuevo nodo principal.

// Quitar frente
// Escribe un método para eliminar el nodo principal y devolver el nuevo nodo principal de la lista. Si la lista está vacía, devuelve null.

// Frente
// Escribe un método para devolver el valor (no el nodo) al principio (head) de la lista. Si la lista está vacía, devuelve null.


class Node {
    constructor(data){
        this.data=data; 
        this.next=null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val){
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront(){
        if(!this.head) {
            return null;
        }
        this.head = this.head.next;
    }
    front(){
        let curNode = this.head;
        if(!this.head) {
            return null;
        }
        console.log(curNode.data);
    }
    display() {
        let runner=this.head;
        let arr = [];
        if(!this.head) {return null;}
        while(runner !== null){
            arr.push(runner.data);
            console.log(arr);
            runner=runner.next
        }
        
        console.log(arr.join(", "));
        return null;
    }
}
let first = new SLL(5);
first.addFront(5).addFront(10);
console.log("first",first);
first.addFront(8).addFront(10);
first.display();