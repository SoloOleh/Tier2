const objB = {
  b: "objB prop",
};

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA);
