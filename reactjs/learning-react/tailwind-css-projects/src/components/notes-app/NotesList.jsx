import noteBg from "../../assets/Sticky-Note-Notepad-png.jpg";


const NotesList = ({ task, deleteNote }) => {
  return (
    <div className='lg:w-1/2 lg:border-l-2  p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
        {task.map(function (elem, idx) {

          return <div
            key={idx}
            style={{ backgroundImage: `url(${noteBg})` }}
            className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4"
          >
            <div>
              <h3 className='leading-tight text-purple-700 text-lg font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
            </div>
            <button onClick={() => {
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
      </div>
    </div>
  );
};

export default NotesList;