// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import FilterPanel from "../../components/FilterPanel/FilterPanel";
// import CampersList from "../../components/CampersList/CampersList";
// import { fetchCampers } from "../../redux/campers/operations";
// import { resetCampers } from "../../redux/campers/campersSlice";
// import { selectActiveFilters } from "../../redux/filters/selectors";
// import styles from "./CatalogPage.module.css";

// const CatalogPage = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector(selectActiveFilters);

//   useEffect(() => {
//     dispatch(resetCampers());
//     dispatch(fetchCampers({ page: 1, filters }));
//   }, [dispatch, filters]);

//   const handleLoadMore = (page) => {
//     dispatch(fetchCampers({ page, filters, append: true }));
//   };

//   return (
//     <div className={styles.catalogPage}>
//       <div className="container">
//         <div className={styles.content}>
//           <aside className={styles.sidebar}>
//             <FilterPanel />
//           </aside>
//           <main className={styles.main}>
//             <CampersList onLoadMore={handleLoadMore} />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import FilterPanel from "../../components/FilterPanel/FilterPanel";
// import CampersList from "../../components/CampersList/CampersList";
// import { fetchCampers } from "../../redux/campers/operations";
// import { resetCampers } from "../../redux/campers/campersSlice";
// import { selectActiveFilters } from "../../redux/filters/selectors";
// import styles from "./CatalogPage.module.css";

// const CatalogPage = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector(selectActiveFilters);

//   useEffect(() => {
//     dispatch(resetCampers());
//     dispatch(fetchCampers({ page: 1, filters }));
//   }, [dispatch, filters]);

//   const handleLoadMore = (page) => {
//     dispatch(fetchCampers({ page, filters, append: true }));
//   };

//   return (
//     <div className={styles.catalogPage}>
//       <div className="container">
//         <div className={styles.content}>
//           <aside className={styles.sidebar}>
//             <FilterPanel />
//           </aside>
//           <main className={styles.main}>
//             <CampersList onLoadMore={handleLoadMore} />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import FilterPanel from "../../components/FilterPanel/FilterPanel";
// import CampersList from "../../components/CampersList/CampersList";
// import { fetchCampers } from "../../redux/campers/operations";
// import { resetCampers } from "../../redux/campers/campersSlice";
// import { selectActiveFilters } from "../../redux/filters/selectors";
// import styles from "./CatalogPage.module.css";

// const CatalogPage = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector(selectActiveFilters);

//   console.log("Active filters in CatalogPage:", filters);

//   useEffect(() => {
//     console.log("useEffect triggered with filters:", filters);
//     dispatch(resetCampers());
//     dispatch(fetchCampers({ page: 1, filters }));
//   }, [dispatch, filters]);

//   const handleLoadMore = (page) => {
//     dispatch(fetchCampers({ page, filters, append: true }));
//   };

//   return (
//     <div className={styles.catalogPage}>
//       <div className="container">
//         <div className={styles.content}>
//           <aside className={styles.sidebar}>
//             <FilterPanel />
//           </aside>
//           <main className={styles.main}>
//             <CampersList onLoadMore={handleLoadMore} />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import FilterPanel from "../../components/FilterPanel/FilterPanel";
// import CampersList from "../../components/CampersList/CampersList";
// import { fetchCampers } from "../../redux/campers/operations";
// import { resetCampers } from "../../redux/campers/campersSlice";
// import { selectActiveFilters } from "../../redux/filters/selectors";
// import styles from "./CatalogPage.module.css";

// const CatalogPage = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector(selectActiveFilters);

//   useEffect(() => {
//     dispatch(resetCampers());
//     dispatch(fetchCampers({ page: 1, filters }));
//   }, [dispatch, filters]);

//   const handleLoadMore = (page) => {
//     dispatch(fetchCampers({ page, filters, append: true }));
//   };

//   return (
//     <div className={styles.catalogPage}>
//       <div className="container">
//         <div className={styles.content}>
//           <aside className={styles.sidebar}>
//             <FilterPanel />
//           </aside>
//           <main className={styles.main}>
//             <CampersList onLoadMore={handleLoadMore} />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import CampersList from "../../components/CampersList/CampersList";
import { fetchCampers } from "../../redux/campers/operations";
import { resetCampers } from "../../redux/campers/campersSlice";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [appliedFilters, setAppliedFilters] = useState({});

  // Завантажуємо всі кемпери при першому рендері
  useEffect(() => {
    dispatch(resetCampers());
    dispatch(fetchCampers({ page: 1, filters: {} }));
  }, [dispatch]);

  // Функція для застосування фільтрів (викликається з FilterPanel)
  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
    dispatch(resetCampers());
    dispatch(fetchCampers({ page: 1, filters }));
  };

  const handleLoadMore = (page) => {
    dispatch(fetchCampers({ page, filters: appliedFilters, append: true }));
  };

  return (
    <div className={styles.catalogPage}>
      <div className="container">
        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <FilterPanel onApplyFilters={handleApplyFilters} />
          </aside>
          <main className={styles.main}>
            <CampersList onLoadMore={handleLoadMore} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
