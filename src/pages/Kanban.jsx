import React from 'react';
import {KanbanComponent, ColumnsDirective,ColumnDirective} from '@syncfusion/ej2-react-kanban';
import {kanbanData, kanbanGrid} from '../data/dummy';
import {Header} from "../components";
import { useStateContext } from '../context/stateContext';

const Kanban = () => {
  const {currentMode} = useStateContext();
  return (
    <div className={`m-2 md:m-10 p-2 mt-24 md:p-10  rounded-3xl ${currentMode === 'Dark' ? "bg-[#33373E]" : "bg-white" }`}>
    <Header  category= "Page" title = "Kanban"/>
    <KanbanComponent
       id='kanban'
       dataSource={kanbanData}
       cardSettings={{contentField: 'Summary', headerField: 'Id'}}
       keyField = "Status"
    >
      <ColumnsDirective>
      {kanbanGrid.map((item,i)=> (
        <ColumnDirective key={i} {...item}/>
      ))}
      </ColumnsDirective>
    </KanbanComponent>
    </div>
  )
}

export default Kanban