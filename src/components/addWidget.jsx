import { useEffect, useState } from "react";
import { updateCategories } from "../redux/categoriesReducer";
import { useDispatch, useSelector } from "react-redux";
import { WidgetTabs } from "./widgetTabs";
import { Drawer } from "@mui/material";
import { Add, Close } from "@mui/icons-material";

export const AddWidget = ({ handleActiveTab }) => {
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const initialCategories = useSelector((state) => state.categories.data);
  const [categories, setCategories] = useState([...initialCategories]);

  useEffect(() => {
    setCategories([...initialCategories]);
  }, [initialCategories]);

  function handleClose() {
    setCategories(initialCategories);
    setopen(false);
  }

  function openDrawer() {
    handleActiveTab();
    setopen(true);
  }

  // on confirm update to store
  function handleConfirm() {
    dispatch(updateCategories(categories));
    setopen(false);
  }

  return (
    <>
      <button onClick={openDrawer} className="add-widget-btn flex">
        <Add />
        <span>Add Widget</span>
      </button>
      <Drawer
        open={open}
        anchor="right"
        PaperProps={{ className: "custom-drawer" }}
        onClose={handleClose}
      >
        <div className="drawer-header">
          <span>Add Widget</span>
          <Close onClick={handleClose} />
        </div>
        <div className="drawer-content">
          <div>
            <p>Personalise your dashboard by adding the follwing widget</p>
          </div>
          <div className="drawer-tabs">
            <WidgetTabs categories={categories} setCategories={setCategories} />
          </div>
        </div>

        <div className="drawer-actions">
          <button className="outline-btn" onClick={handleClose}>
            Cancel
          </button>
          <button className="filled-btn" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </Drawer>
    </>
  );
};
