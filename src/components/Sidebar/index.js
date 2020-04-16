import React, {useEffect, useState} from "react";
import Sidebar from "react-sidebar";
import { connect } from 'react-redux';
import { clickSidebar } from "../../actions";


const FilterSidebar = ({isOpen, clickSidebar}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(()=>{
    setSidebarOpen(isOpen);
  },[isOpen])

  useEffect(()=>{
    clickSidebar(sidebarOpen);
  },[sidebarOpen])

  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      styles={{ sidebar: { background: "white" } }}
    >
    </Sidebar>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return { 
    isOpen : state.sidebar.isOpen
  }
}

export default connect(mapStateToProps, {clickSidebar})(FilterSidebar);