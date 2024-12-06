class node{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}

class linkedList{

    constructor(head = null){
        this.head = head;
    }

    append(v) {
        if(this.head == null){
            this.head = new node(v,null);
        }else if(this.head.next == null){
            this.head.next = new node(v, null);
        }else{
            let n = this.head.next;
            while(n.next !== null){
                n = n.next;
            }
            n.next = new node(v, null);
        }
        return this.head;      
    }

    prepend(v){
        if(this.head == null){
            this.head = new node(v, null);
        }else{
            let new_node = new node(v, this.head);
            this.head = new_node;
        }
        return this.head;
    }

    size(){
        let n = this.head;
        let count = 0;

        while(n != null){
            count++;
            n = n.next;
        }
        
        return count;
    }

    view_head(){
        return this.head;
    }

    view_tail(){
        let n = this.head;
        while(n.next !== null){
            n = n.next;
        }
        return n;
    }

    at_index(i){
        let n = this.head;
        let count = 0;
        while(n !== null){
            if(i == count){
                return n;
            }
            n = n.next;
            count++;
        }
        return null;
    }

    pop(){
        let n = this.head;
        while(n.next.next !== null){
            n = n.next;
        }
        let pop_node = n.next;
        n.next = null;
        console.log(this.head);
        console.log(pop_node);
        return pop_node;
    }

    contains(v){
        let n = this.head;
        while(n !== null){
            if(n.value == v){
                return true;
            }
            n = n.next;
        }
        return false;
    }

    find(v){
        let n = this.head;
        let count = 0;
        while(n !== null){
            if(n.value == v){
                return count;
            }
            n = n.next;
            count++;
        }
        return null;
    }

    to_string(){
        let n = this.head;
        let sentence = "";
        while(n != null){
            sentence += "(" + n.value + ") -> ";
            n = n.next;
        }
        sentence += null;
        
        return sentence;
    }

    insertAt(v,i){
        let n = this.head;
        let count = 0;
        while(n !== null){
            if(count == i){
                let new_node = node(v, n.next);
                n = new_node;
                return this.head;
            }
            n = n.next;
            count++;
        }
        return this.head;
    }

    removeAt(i){    
        if(this.head == null){
            return null;
        }    
        if(i === 0 ){
            let temp = this.head.next;
            this.head = temp;            
        }else{
            let n = this.head;
            let count = 0;
            i = i - 1;
            while(n !== null){
                if(count == i){
                    let temp = n.next.next;
                    n.next = temp;
                }
                n = n.next;
                count++;
            }
        }
        return this.head;
    }
}

export default linkedList;
