import React from 'react'
import {ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule';

import {scheduleData} from  '../data/dummy';
import {Header} from "../components";
import { useStateContext } from '../context/stateContext';

const Calendar = () => {
  const {currentMode} = useStateContext();
  return (
    <div className={`m-2 md:m-10 p-2 mt-24 md:p-10  rounded-3xl ${currentMode === 'Dark' ? "bg-[#33373E]" : "bg-white" }`}>
    <Header  category= "Page" title = "Calendar"/>
    <ScheduleComponent
    height="650px"
    eventSettings={{dataSource: scheduleData}}
    selectedDate={new Date(2021, 0, 10)}
    >
         <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
    </ScheduleComponent>
    </div>
  )
}

export default Calendar