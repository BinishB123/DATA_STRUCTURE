

class Stack {
    constructor(){
        this.Stack = []
    }

    push(element){
       this.Stack.push(element)
    }
    pop(element){
        this.Stack.pop()
    }

    print(){
        console.log(this.Stack.join(" "));
        
    }
}
const stack = new Stack()

for (let index = 0; index < 10; index++) {
      stack.push(index)
    
}

stack.print()