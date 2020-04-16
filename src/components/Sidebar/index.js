import React, {useEffect, useState} from "react";
import Sidebar from "react-sidebar";


const FilterSidebar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      styles={{ sidebar: { background: "white" } }}
    >
      <button onClick={() => setSidebarOpen(true)}>
        Open sidebar
      </button>
    </Sidebar>
  );
}

export default FilterSidebar;