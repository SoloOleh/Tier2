function protectedMethod() {
  return "Something";
}

class myClass {
  myPublicMethod() {
    return protectedMethod();
  }
}
