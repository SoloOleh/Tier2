// import "./Loader.module.css";

// import { TailSpin } from "react-loader-spinner";

// export default function Loader() {
//   return (
//     <div style={{ textAlign: "center", margin: "20px 0" }}>
//       <TailSpin color="#00BFFF" height={80} width={80} />
//     </div>
//   );
// }

// import "./Loader.module.css";

// import { TailSpin } from "react-loader-spinner";

// export default function Loader() {
//   return (
//     <div className="loader">
//       <TailSpin color="#00BFFF" height={80} width={80} />
//     </div>
//   );
// }

import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
}
