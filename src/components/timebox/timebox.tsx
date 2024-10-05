import React, {useState} from 'react';
import Modal from '../base/Modal';
import FormModal from './FormModal';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

export default function Timebox(): React.ReactNode {
  const {list} = useSelector((state: RootState) => state.timeboxPlan);

  const [showModal, setShowModal] = useState(false);
  const [columnName, setColumnName] = useState();
  const [timeValue, setTimeValue] = useState();

  const addPlan = (columnName, time) => {
    setShowModal(true);
    setColumnName(columnName);
    setTimeValue(time);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add time</button>
      {showModal && (
        <Modal
          childern={
            <FormModal
              onClose={() => setShowModal(false)}
              column={columnName}
              time={timeValue}
            />
          }
        />
      )}

      <table className="border-separate border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 w-1/5">time</th>
            <th className="border border-slate-300 w-2/5">00</th>
            <th className="border border-slate-300 w-2/5">30</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(list).map(([time, plan], index) => (
            <tr key={index}>
              <td className="border border-slate-300 w-1/5 p-2 text-center">
                {time}
              </td>
              <td
                className="border border-slate-300 w-2/5 p-2"
                onClick={() => addPlan('first', time)}
              >
                {plan.first}
              </td>
              <td
                className="border border-slate-300 w-2/5 p-2"
                onClick={() => addPlan('second', time)}
              >
                {plan.second}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
