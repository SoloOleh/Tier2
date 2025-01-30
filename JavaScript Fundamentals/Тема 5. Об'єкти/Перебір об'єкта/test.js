// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(object);
  for (key of keys) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
