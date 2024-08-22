import { ExpandMore, Loop, MoreVert, WatchLater } from "@mui/icons-material";
import "./dashboard.css";

import { useDispatch, useSelector } from "react-redux";
import { setActiveCategoryTab } from "../redux/categoriesReducer";
import { WidgetList } from "./widgetsList";
import { AddWidget } from "./addWidget";

export const Dashboard = () => {
  const categories = useSelector((state) => state.categories.data);
  const dispatch = useDispatch();

  function defaulActiveTab() {
    dispatch(setActiveCategoryTab(categories[0].category));
  }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h3>CNAPP Dashboard</h3>
        <ul>
          <li>
            <AddWidget handleActiveTab={defaulActiveTab} />
          </li>
          <li>
            <Loop />
          </li>
          <li>
            <MoreVert />
          </li>
          <li className="btn">
            <WatchLater />
            <div>
              <span>Last 2 days</span>
              <ExpandMore />
            </div>
          </li>
        </ul>
      </div>

      <div className="dashboard__categories">
        {categories.map((item, index) => {
          return (
            <div key={index} className="category">
              <h3>{item.categoryName}</h3>
              <WidgetList
                widgets={item.widgets}
                selectedCategory={item.category}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
