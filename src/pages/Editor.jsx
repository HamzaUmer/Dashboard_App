import React from 'react';
import {HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar} from '@syncfusion/ej2-react-richtexteditor';
import {EditorData} from "../data/dummy";
import {Header} from "../components";
import { useStateContext } from '../context/stateContext';

const Editor = () => {
  const {currentMode} = useStateContext();
  return (
    <div className={`m-2 md:m-10 p-2 mt-24 md:p-10  rounded-3xl ${currentMode === 'Dark' ? "bg-[#33373E]" : "bg-white" }`}>
    <Header  category= "Page" title = "Editor"/>
    <RichTextEditorComponent>
      <Inject services={[HtmlEditor,Image,Link,QuickToolbar, Toolbar]}/>
    </RichTextEditorComponent>
    </div>
  )
}

export default Editor