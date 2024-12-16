import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Analytics from "path/to/analytics-service";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    Analytics.send(location);
  }, [location]);

  return <div>...</div>;
};
