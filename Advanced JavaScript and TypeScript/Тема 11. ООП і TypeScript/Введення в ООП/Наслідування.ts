class ClassA {
  public myMethod() {
    return "I'm a class A";
  }
}

class ClassB extends ClassA { 
  // ClassB наслідує всі властивості та методи ClassA
}

let b = new ClassB();
console.log(b.myMethod()); // "I'm a class A"
