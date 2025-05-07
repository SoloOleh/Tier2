// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// export default App;

// const CustomButton = (props) => {
//   return <button onClick={() => alert(props.message)}>{props.children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// export default App;

// import { useState } from "react";

// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

// export default App;

// import { useState } from "react";

// // ClickCounter отримує функцію onUpdate (ім'я пропа),
// // яка викликається під час події onClick
// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Функція, яку будемо передавати в ClickCounter
//   // для виклику під час кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// export default App;

// import { useState } from "react";
// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };
// export default App;

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export default App;

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };
// export default App;

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   const handleEffect = () => {
//     document.title = `You clicked ${clicks} times`;
//   };
//   useEffect(handleEffect);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useEffect } from "react";
// const App = () => {
//   useEffect(
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000),
//     []
//   );

//   return <div>App</div>;
// };

// export default App;

// import { useEffect, useState } from "react";
// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ❌ Ефект записаний з помилкою!
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useState, useEffect } from "react";
// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

// import { useState } from "react";
// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <div>{clicks}</div>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };
// export default App;

// import { useState, useEffect } from "react";
// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log(`Clicks changed - ${clicks}`);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// import { useState, useEffect } from "react";
// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     // window.localStorage.setItem("saved-clicks", clicks);
//     window.localStorage.setItem("saved-clicks", JSON.stringify({ clicks }));
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
      // return Number(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};
export default App;
