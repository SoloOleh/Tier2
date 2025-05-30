const link = document.querySelector(".link");
console.log(link.href); // "<https://goit.global>"
link.href = "[<https://neo.goit.global>](<https://neo.goit.global/>)";
console.log(link.href); // "[<https://neo.goit.global>](<https://neo.goit.global/>)"

const image = document.querySelector(".image");
console.log(image.src); // https://picsum.photos/id/9/320/240
console.log(image.alt); // A laptop

image.src = "https://picsum.photos/id/13/640/480";
image.alt = "River bank";
