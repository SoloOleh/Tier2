// src/components/Product.jsx

// export default function Product() {
// const price = 999;
// const imgUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

//   return (
//     <>
//       <h2>Tacos</h2>
//       <img src={imgUrl} alt="Tacos With Lime" width="640" />
//       <p>Price: {price} credits</p>
//     </>
//   );
// }

// src/components/Product.jsx

// export default function Product(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img
//         src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         alt="Tacos With Lime"
//         width="480"
//       />
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }

// src/components/Product.jsx

export default function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt={props.name} width="480" />
      <p>Price: {props.price} credits</p>
    </div>
  );
}

// src/components/Product.jsx

// export default function Product({ name, imgUrl, price }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// }

// src/components/Product.jsx

// export default function Product({
//   name,
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   price,
// }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// }
