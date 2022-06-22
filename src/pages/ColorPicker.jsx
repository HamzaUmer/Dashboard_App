import React from 'react';
import {ColorPickerComponent} from "@syncfusion/ej2-react-inputs";

import {Header} from "../components";
import { useStateContext } from '../context/stateContext';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  const {currentMode} = useStateContext();
  return (
    <div className={`m-2 md:m-10 p-2 mt-24 md:p-10  rounded-3xl ${currentMode === 'Dark' ? "bg-[#33373E]" : "bg-white" }`}>
    <Header  category= "Page" title = "Color Picker" />
    <div className="text-center">
      <div id="preview"/>
        <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
            <p className={`text-2xl font-semibold mt-2 mb-4 ${currentMode === 'Dark' ? 'text-white': "text-gray-900"}`}>Inline Palette</p>
            <ColorPickerComponent id="inline-pallete" mode='Palette'
            modeSwitcher={false}
            inline 
            showButtons= {false}
            change = {change}
            />
          </div>
          <div>
            <p className={`text-2xl font-semibold mt-2 mb-4 ${currentMode === 'Dark' ? 'text-white': "text-gray-900"}`}>Inline Picker</p>
            <ColorPickerComponent id="inline-pallete" mode='Picker'
            modeSwitcher={false}
            inline 
            showButtons= {false}
            change= {change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker