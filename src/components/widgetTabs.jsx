import { useState } from "react";
import { useSelector } from "react-redux";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Checkbox, Tab } from "@mui/material";

export const WidgetTabs = ({ categories, setCategories }) => {
    const activeCategory = useSelector(
      (store) => store.categories.activeCategoryTab
    );
    const [activeTab, setActiveTab] = useState(
      activeCategory || categories[0].category
    );
  
    // update in local data instead of store
    function addOrRemove(checked, categoryIndex , widgetIndex) {
      const updatedCategories = categories.map((category, catIndex) => {
        if (catIndex === categoryIndex) {
          return {
            ...category,
            widgets: category.widgets.map((widget , index) =>
              index === widgetIndex
                ? { ...widget, isAdded: checked }
                : widget
            ),
          };
        }
        return category;
      });
  
      setCategories(updatedCategories);
    }
  
    return (
      <TabContext value={activeTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            className="custom-tab-list"
          >
            {categories.map((item, index) => {
              return (
                <Tab label={item.category} value={item.category} key={index} />
              );
            })}
          </TabList>
        </Box>

        {/* tab content */}
        {categories.map(({ category, widgets }, catIndex) => {
          return (
            <TabPanel value={category} key={catIndex}>
              <ul>
                {widgets.map((item, index) => {
                  return (
                    <li key={index}>
                      <Checkbox
                        checked={item.isAdded}
                        onChange={(e) =>
                          addOrRemove(e.target.checked, catIndex , index)
                        }
                      />
                      <span>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </TabPanel>
          );
        })}
      </TabContext>
    );
  };
  