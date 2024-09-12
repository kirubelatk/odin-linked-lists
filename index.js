class Node {
    constructor(value = null) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }

    append(value){

        const node = new Node(value);

        if (this.head === null){
            this.head = node;
        }

        else{
            let currentNode = this.head;
            while(currentNode.nextNode != null){
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = node;
        }

    }

    prepend(value){
        const node = new Node(value)

        if(this.head === null){
            this.head = node;
        }

        else{
            let currentNode = this.head;
            node.nextNode = currentNode;
            this.head = node;
        }
}

    size(){
        let count = 0;
        let currentNode = this.head;
        while(currentNode != null){
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    head(){
        return this.head;
    }

    tail(){
        if(this.head === null){
            return null;
        }

        else{
            let currentNode = this.head;

            while(currentNode.nextNode != null){
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        }
    }

    pop(){
        if(this.head === null){
            return null
        }

        if(this.head.nextNode === null){
            this.head = null
        }

        else{
            let currentNode = this.head;
            let prevNode = null;

            while(currentNode.nextNode !== null){
                prevNode = currentNode
                currentNode = currentNode.nextNode

            }
            prevNode.nextNode = null
        }
    }

    contains(value){

        if(this.head === null){
            return false
        }

        else{
            let currentNode = this.head

            while(currentNode !== null){

                if(currentNode.value === value){
                    return true
                }
                currentNode = currentNode.nextNode

            }
        }
    }

    at(index){

        if(this.head === null){
            return null
        }
        else{
            let currentNode = this.head
            let count = 0
            while(currentNode.nextNode !== null){
               
                if(count === index){
                    return currentNode.value
                }
                count++
            }
            currentNode = currentNode.nextNode
            return currentNode
        }
    }

    findIndex(value){
        if(this.head === null){
            return null
        }
        else{
            let currentNode = this.head
            let count = 0
            while(currentNode !== null){
                if(currentNode.value === value){
                    return count
                }
                count++
                currentNode = currentNode.nextNode
            }
        }
    }
  

    toString(){

        if(this.head === null){
            return null
        }
        else{ 
            let currentNode = this.head
            let string = ''
            while(currentNode !== null){
                string += currentNode.value
                console.log('(' + string + ')' + ' -> ')
                currentNode = currentNode.nextNode
            }
            
        }
    }

    insertAt(value, index){
        if(this.head === null){
            return null
        }
        else{
            let currentNode = this.head
            let count = 0
            while(currentNode !== null){
                if(count === index){
                    const node = new Node(value)
                    node.nextNode = currentNode.nextNode
                    currentNode.nextNode = node
                }
                count++
                currentNode = currentNode.nextNode
            }
        }
    }

    remove(index){
        if(this.head === null){
            return null
        }
        else{
            let currentNode = this.head
            let prevNode = null
            let count = 0
            while(currentNode !== null){
                if(count === index){
                    prevNode.nextNode = currentNode.nextNode
                }
                count++
                prevNode = currentNode
                currentNode = currentNode.nextNode
            }
        }
    }
}



const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());