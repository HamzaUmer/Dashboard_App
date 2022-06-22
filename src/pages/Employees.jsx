import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective,  Page, Search , Inject, Toolbar} from "@syncfusion/ej2-react-grids";

import {employeesData,employeesGrid} from "../data/dummy";
import { Header } from '../components';
import { useStateContext } from '../context/stateContext';

const Employees = () => {
  const {currentMode} = useStateContext();
  return (
    <div className={`m-2 md:m-10 p-2 mt-24 md:p-10  rounded-3xl ${currentMode === 'Dark' ? "bg-[#33373E]" : "bg-white" }`}>
      <Header  category= "Page" title = "Employees"/>
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width= "auto"
      >
        <ColumnsDirective>
        {employeesGrid.map((item,i) => (
          <ColumnDirective key={i} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[Page, Search,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees