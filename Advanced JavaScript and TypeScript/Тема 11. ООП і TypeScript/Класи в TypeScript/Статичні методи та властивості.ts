class UseStatic {
  private static count = 0;

  constructor() {
    UseStatic.count += 1;
  }

  public static itStaticMethod() {
    console.log('Run static method');
  }

  public showCount() {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

obj1.showCount(); // 3
obj2.showCount(); // 3
obj3.showCount(); // 3

UseStatic.itStaticMethod(); // Run static method

export {};
