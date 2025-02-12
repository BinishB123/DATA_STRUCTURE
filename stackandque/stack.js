class QueueUsingStack {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(x) {
    this.s1.push(x);
  }

  dequeue() {
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    if (this.s1.length === 0) {
      console.log("no elements in stack");
    }
    const v = this.s2.pop();
    if (this.s1.length === 0) {
      while (this.s2.length > 0) {
        this.s1.push(this.s2.pop());
      }
      return v;
    }
  }

  print() {
    console.log(this.s1);
  }
}

const qs = new QueueUsingStack();

for (let i = 1; i <= 10; i++) {
  qs.enqueue(i);
}

console.log(qs.dequeue());
qs.print();
