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

  const contents = () => {
    return(
      <div>
        <div>
          <img src="/images/이후.png"/>
        </div>
        <div>
          <img src="/images/이후.png"/>
        </div>
        <div>
          <img src="/images/이후.png"/>
        </div>
      </div>
    )
  }

  return (
    <Sidebar
      sidebar={contents()}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      shadow={false}
      styles={{ sidebar: { background: "white", width: "400px" } }}
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