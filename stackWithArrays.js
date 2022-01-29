class StackWithArray {
    constructor(){
      this.array = [];
    }
    peek() {
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop()
        return this;
    }
    //isEmpty
  }
  
  const myStack = new StackWithArray();
  myStack.push('google')
  myStack.push('Bob')
  myStack.push('Tom')
  myStack.pop();
  console.log(myStack)