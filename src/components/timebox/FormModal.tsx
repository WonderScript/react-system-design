import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {addPlan} from '../../store/features/timeboxPlanSlice';

const time = [
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

export default function FormModal({onClose}) {
  const dispatch = useDispatch();
  const {list} = useSelector(state => state.timeboxPlan);
  const {register, handleSubmit, reset, setFocus} = useForm();
  console.log('timeboxPlanList', list);

  const onSubmit = data => {
    console.log('data', data);
    data.time = time[list.length];

    if (list.length === time.length) {
      console.log('u cant plan than 16 hours');

      return;
    }
    dispatch(addPlan(data));
    setFocus('firstHabit');
    onClose();
    reset();
  };

  return (
    <>
      <div className="flex justify-evenly items-center shadow-lg bg-white border border-gray-200 rounded-lg absolute w-[250px] top-[70px] left-1/2 transform -translate-x-1/2 bottom-[70px]">
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
      </div>
    </>
  );
}
