import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import CampersList from "../../components/CampersList/CampersList";
import { fetchCampers } from "../../redux/campers/operations";
import { resetCampers } from "../../redux/campers/campersSlice";
import { selectActiveFilters } from "../../redux/filters/selectors";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectActiveFilters);

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(fetchCampers({ page: 1, filters }));
  }, [dispatch, filters]);

  const handleLoadMore = (page) => {
    dispatch(fetchCampers({ page, filters, append: true }));
  };

  return (
    <div className={styles.catalogPage}>
      <div className="container">
        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <FilterPanel />
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
