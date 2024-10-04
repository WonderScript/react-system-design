import React, {useEffect, useState} from 'react';
// import {useTimebox} from './hooks/useTimebox';
import {useForm} from 'react-hook-form';

export default function Profile(): React.ReactNode {
  // const {userData, userNamesData, userRolesData} = useTimebox();

  const {register, handleSubmit, reset, setFocus} = useForm();
  const [habits, setHabits] = useState<
    null[] | [{time: string; firstHabit: string; secondHabit: string}]
  >([]);

  const time = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  ];

  const onSubmit = data => {
    console.log('data', data);
    data.time = time[habits.length];

    if (habits.length === time.length) {
      console.log('u cant plan than 16 hours');

      return;
    }
    setHabits(prev => [...prev, data]);
    setFocus('firstHabit');

    reset();
  };

  useEffect(() => {
    console.log(habits);
  }, [habits]);

  return (
    <>
      {/* <div>{userData && userData.map(item => <div>{item.email}</div>)}</div>
      <div>{userNamesData && userNamesData.map(item => <div>{item}</div>)}</div>
      <div>{userRolesData && userRolesData.map(item => <div>{item}</div>)}</div> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-separate border border-slate-400 w-full p-6 mb-8"
      >
        <div className="mb-2">Type your habit here</div>
        <input
          {...register('firstHabit', {required: true, maxLength: 80})}
          type="text"
          placeholder="Type Here..."
          className="mb-2 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100"
        />
        <input
          {...register('secondHabit', {required: true, maxLength: 80})}
          type="text"
          placeholder="Type Here..."
          className="mb-2 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100"
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <table className="border-separate border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 w-1/5">time</th>
            <th className="border border-slate-300 w-2/5">00</th>
            <th className="border border-slate-300 w-2/5">30</th>
          </tr>
        </thead>
        {habits.length > 0 ? (
          <tbody>
            {habits?.map((item, index) => (
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
    </>
  );
}
