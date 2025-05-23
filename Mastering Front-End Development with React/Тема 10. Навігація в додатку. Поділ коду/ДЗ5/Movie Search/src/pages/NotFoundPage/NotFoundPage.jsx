// робочий варіант
// import { Link } from "react-router-dom";

// function NotFoundPage() {
//   return (
//     <div>
//       <h1>404 - Page not found</h1>
//       <Link to="/">Go back to Home</Link>
//     </div>
//   );
// }

// export default NotFoundPage;

import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className={styles.link}>
        Go back to Home
      </a>
    </div>
  );
}

export default NotFoundPage;
