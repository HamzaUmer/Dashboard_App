import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter} from "@syncfusion/ej2-react-grids"
import {customersData, customersGrid} from '../data/dummy';
import {Header} from '../components';
import { useStateContext } from '../context/stateContext';

const Customer = () => {
  const {currentMode} = useStateContext();
  return (
    <div className={`m-2 md:m-10 p-2 mt-24 md:p-10  rounded-3xl ${currentMode === 'Dark' ? "bg-[#33373E]" : "bg-white" }`}>
      <Header  category= "Page" title = "Customers"/>
      <GridComponent
         dataSource={customersData}
         allowPaging
         allowSorting
         toolbar= {['Delete']}
         editSettings= {{allowDeleting: true, allowEditing: true}}
      >
        <ColumnsDirective>
        {customersGrid.map((item,i) => (
          <ColumnDirective key={i} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Toolbar, Sort, Filter]}/>
      </GridComponent>
      </div>
  )
}

export default Customer