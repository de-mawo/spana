"use client";
import React, { useEffect, useState } from "react";
import { WhoIsOnLeave } from "../../data/WhoIsOnLeave";
import { CalculateDay } from "../../lib/dateCalculate";

const DashPageTable = () => {
  const [sunday, setSunday] = useState(0);
  const [monday, setMonday] = useState(0);
  const [tuesday, setTuesday] = useState(0);
  const [wednesday, setWednesday] = useState(0);
  const [thursday, setThursday] = useState(0);
  const [friday, setFriday] = useState(0);
  const [saturday, setSaturday] = useState(0);

  const date = new Date().getDate();
  const day = CalculateDay();

  //TODO : Check if this does not change
  const today = new Date().toLocaleDateString("en-CA");

  useEffect(() => {
    CalculateDate(
      day,
      setSunday,
      date,
      setSaturday,
      setFriday,
      setThursday,
      setWednesday,
      setTuesday,
      setMonday
    );
  }, [date, day]);

  return (
    <section className="dash_page_table ptb_100">
      <div className="table-responsive" data-simplebar>
        <table className="table align-middle mb-0">
          <thead>
            <tr>
              <th className="name_column">Team Member</th>
              <th>
                Monday: <span>{monday} </span>
              </th>
              <th>
                Tuesday: <span>{tuesday}</span>
              </th>
              <th>
                Wednesday: <span>{wednesday}</span>
              </th>
              <th>
                Thursday: <span>{thursday}</span>
              </th>
              <th>
                Friday: <span>{friday}</span>
              </th>
              <th>
                Saturday: <span>{saturday}</span>
              </th>
              <th>
                Sunday: <span>{sunday}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {WhoIsOnLeave.map((wiol) => {
              return (
                // wiol is short for who is on leave
                <tr key={wiol.id}>
                  <td className="name_column"> {wiol.name}</td>

                  <td>
                    {wiol.dates.includes(today) ? (
                      <>
                        <span className="wiol_details">{wiol.leaveType}: </span>
                        <span className="wiol_details">{wiol.leaveDescr} </span>
                      </>
                    ) : (
                      <td></td>
                    )}
                  </td>
                  <td>
                    {wiol.dates.includes(today) ? (
                      <>
                        <span className="wiol_details">{wiol.leaveType}: </span>
                        <span className="wiol_details">{wiol.leaveDescr} </span>
                      </>
                    ) : (
                      <td></td>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashPageTable;

function CalculateDate(
  day: string | undefined,
  setSunday: React.Dispatch<React.SetStateAction<number>>,
  date: number,
  setSaturday: React.Dispatch<React.SetStateAction<number>>,
  setFriday: React.Dispatch<React.SetStateAction<number>>,
  setThursday: React.Dispatch<React.SetStateAction<number>>,
  setWednesday: React.Dispatch<React.SetStateAction<number>>,
  setTuesday: React.Dispatch<React.SetStateAction<number>>,
  setMonday: React.Dispatch<React.SetStateAction<number>>
) {
  if (day === "Monday") {
    setSunday(date + 6);
    setSaturday(date + 5);
    setFriday(date + 4);
    setThursday(date + 3);
    setWednesday(date + 2);
    setTuesday(date + 1);
    setMonday(date);
  }
  if (day === "Tuesday") {
    setSunday(date + 5);
    setSaturday(date + 4);
    setFriday(date + 3);
    setThursday(date + 2);
    setWednesday(date + 1);
    setTuesday(date);
    setMonday(date - 1);
  }
  if (day === "Wednesday") {
    setSunday(date + 4);
    setSaturday(date + 3);
    setFriday(date + 2);
    setThursday(date + 1);
    setWednesday(date);
    setTuesday(date - 1);
    setMonday(date - 2);
  }
  if (day === "Thursday") {
    setSunday(date + 3);
    setSaturday(date + 2);
    setFriday(date + 1);
    setThursday(date);
    setWednesday(date - 1);
    setTuesday(date - 2);
    setMonday(date - 3);
  }
  if (day === "Friday") {
    setSunday(date + 2);
    setSaturday(date + 1);
    setFriday(date);
    setThursday(date - 1);
    setWednesday(date - 2);
    setTuesday(date - 3);
    setMonday(date - 4);
  }
  if (day === "Saturday") {
    setSunday(date + 1);
    setSaturday(date);
    setFriday(date - 1);
    setThursday(date - 2);
    setWednesday(date - 3);
    setTuesday(date - 4);
    setMonday(date - 5);
  }
  if (day === "Sunday") {
    setSunday(date);
    setSaturday(date - 1);
    setFriday(date - 2);
    setThursday(date - 3);
    setWednesday(date - 4);
    setTuesday(date - 5);
    setMonday(date - 6);
  }
}
