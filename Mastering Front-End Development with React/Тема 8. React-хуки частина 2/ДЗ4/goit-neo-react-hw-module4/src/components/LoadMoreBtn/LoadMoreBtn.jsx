// import "./LoadMoreBtn.module.css";

// export default function LoadMoreBtn({ onClick }) {
//   return (
//     <button onClick={onClick} style={{ margin: "20px auto", display: "block" }}>
//       Load more
//     </button>
//   );
// }

import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button onClick={onClick} className={styles.loadMore}>
      Load more
    </button>
  );
}
