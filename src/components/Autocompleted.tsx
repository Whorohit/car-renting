import React, { useState } from 'react'
import { AutoComplete } from 'rsuite';
import 'rsuite/AutoComplete/styles/index.css';
type Props = {
  data: string[];
  value: string;
  setValue: (value: string) => void;
}
type ItemDataType = {
  label: string;
  // Other properties...
};

const Autocompleted: React.FC<Props> = ({ data, value, setValue }) => {
  console.log(value);
  // const handleSelect = (value: any, item: any, event: React.SyntheticEvent<Element, Event>) => {


  //   setValue(item.label)

  //   // const handleFilterBy = (value: string, item: Record<string, any>) => {
  //   //   const label = item?.label || ''; // Access the label property or default to an empty string if undefined
  //   //   return label.toLowerCase().indexOf(value.toLowerCase()) !== -1
  // }
  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue);
  };

  const handleChange = (value: string) => {
    setValue(value);
  };
  return (

    <div>
      <AutoComplete data={data}  placeholder='Serach Your Car' 
         onChange={handleChange}
          onSelect={handleSelect}/>
    </div>
  )
}

export default Autocompleted