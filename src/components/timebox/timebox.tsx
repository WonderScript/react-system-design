import React, {useState} from 'react';
import Modal from '../base/Modal';
import FormModal from './FormModal';
import {useSelector} from 'react-redux';

export default function Timebox(): React.ReactNode {
  const {list} = useSelector(state => state.timeboxPlan);

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add time</button>
      {showModal && (
        <Modal childern={<FormModal onClose={() => setShowModal(false)} />} />
      )}

      <table className="border-separate border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 w-1/5">time</th>
            <th className="border border-slate-300 w-2/5">00</th>
            <th className="border border-slate-300 w-2/5">30</th>
          </tr>
        </thead>
        {list.length > 0 ? (
          <tbody>
            {list?.map((item, index) => (
              <tr key={index}>
                <td className="border border-slate-300 w-1/5 p-2">
                  {item.time}
                </td>
                <td className="border border-slate-300 w-2/5 p-2">
                  {item.firstHabit}
                </td>
                <td className="border border-slate-300 w-2/5 p-2">
                  {item.secondHabit}
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>No record</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
