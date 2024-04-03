"use client"
 
import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { enGB } from 'date-fns/locale';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
interface Props{
  startdate?:Date;
  value?:Date;
  setdate:(date:Date)=> void
}
export const DatePickerDemo:React.FC<Props>=({value,setdate,startdate})=> {
  const [date, setDate] = React.useState<Date>()
 function formatDate(date: Date) {
    
const formattedDate = date.toLocaleDateString('en-GB');


    return formattedDate
  }
  
  const today = new Date();
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate && selectedDate >= today && startdate && startdate <=selectedDate ) {
      setDate(selectedDate);
      setdate(selectedDate)


    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[90%]  ml-5  mr-auto justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? formatDate(date): <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        
        />
      </PopoverContent>
    </Popover>
  )
}