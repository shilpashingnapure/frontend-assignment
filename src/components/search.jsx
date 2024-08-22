import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";

export const SearchCompoent = () => {
    const [search, setSearch] = useState("");
  
    const categories = useSelector((state) => state.categories.data);
  
    const [result, setResult] = useState(null);
  
    function handleSearch(value) {
      setSearch(value);
      deBouncing(value);
    }
  
    function deBouncing(value) {
      setTimeout(() => {
        const searchValue = value.trim().toLowerCase();
        if (!searchValue) {
          setResult(null);
          return;
        }
        const result = categories.reduce((acc, item) => {
          const matches = item.widgets.filter((widget) =>
            widget.name.toLowerCase().includes(value)
          );
  
          acc.push(...matches);
          return acc;
        }, []);
        setResult(result);
      }, 300);
    }
    return (
      <div>
        <div className="flex">
          <Search className="muted-icon" />
          <input
            type="text"
            placeholder="Search widgets...."
            onChange={(e) => handleSearch(e.target.value)}
            value={search}
          />
        </div>
        {result && (
          <div className="search-result">
            {result.length === 0 ? (
              <div>No data found</div>
            ) : (
              <div>
                {result.map((item) => {
                  return <p>{item.name}</p>;
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  