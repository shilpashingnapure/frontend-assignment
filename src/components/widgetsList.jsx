import { useDispatch } from "react-redux";
import { setActiveCategoryTab } from "../redux/categoriesReducer";
import { AddWidget } from "./addWidget";

export const WidgetList = ({ widgets, selectedCategory }) => {
    const dispatch = useDispatch();
  
    function handleActiveTab() {
      dispatch(setActiveCategoryTab(selectedCategory));
    }
    return (
      <div className="dashboard__widgets">
        {widgets
          .filter((widget) => widget.isAdded)
          .map((widget, index) => {
            return (
              <div className="widget-card" key={index}>
                <h4>{widget.name}</h4>
                {widget.text ? (
                  <p>{widget.text}</p>
                ) : (
                  <div className="center-content">
                    <p>No Data Available!</p>
                  </div>
                )}
              </div>
            );
          })}
        <div className="widget-card center-content">
          <AddWidget handleActiveTab={handleActiveTab} />
        </div>
      </div>
    );
  };