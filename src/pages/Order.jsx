import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from "@syncfusion/ej2-react-grids";

import {ordersData, contextMenuItems, ordersGrid} from "../data/dummy";
import { Header } from '../components';
import { useStateContext } from '../context/stateContext';

const Order = () => {
  const {currentMode} = useStateContext();
  return (
    <div className={`m-2 md:m-10 p-2 mt-24 md:p-10  rounded-3xl ${currentMode === 'Dark' ? "bg-[#33373E]" : "bg-white" }`}>
      <Header  category= "Page" title = "Orders"/>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
        {ordersGrid.map((item,i) => (
          <ColumnDirective key={i} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Order