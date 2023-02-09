import { generateDate, months } from "@/lib/calendar";
import dayjs from "dayjs";
import cn from "@/lib/cn";
import { useState } from "react";
import LeftNavIcon from "../icons/LeftNavIcon";
import RightNavIcon from "../icons/RightNavIcon";

type Props = {};

export default function Calendar() {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <div className="w-full max-w-[450px] mx-auto pt-[2rem] md:max-w-[300px]">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-custom">
          {months[today.month()]} {today.year()}
        </h1>
        <div className="flex gap-10 items-center ">
          <button
            aria-label="Display previous month"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          >
            <LeftNavIcon />
          </button>
          <button
            aria-label="Display next month"
            onClick={() => {
              setToday(today.month(today.month() + 1));
            }}
          >
            <RightNavIcon />
          </button>
        </div>
      </div>
      <hr className="border-[1px] my-[0.5rem]" />
      <div className="grid grid-cols-7 ">
        {days.map((day, index) => {
          return (
            <h1
              key={index}
              className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500"
            >
              {day}
            </h1>
          );
        })}
      </div>

      <div className=" grid grid-cols-7 ">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="p-2 text-center h-14 grid place-content-center text-sm"
              >
                <button
                  aria-label={`Select ${
                    months[date.month()]
                  } ${date.date()} ${date.year()}`}
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-blue text-white"
                      : "",
                    today ? "text-red" : "",
                    "h-10 w-10 leading-10 rounded-full grid buttonlace-content-center transition-colors"
                  )}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.date()}
                </button>
              </div>
            );
          }
        )}
      </div>
      <hr className="border-[1px] my-[0.5rem]" />
    </div>
  );
}
