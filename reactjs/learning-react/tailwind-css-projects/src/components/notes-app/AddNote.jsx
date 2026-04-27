// import { useState } from 'react'
// import noteBg from '../../assets/Sticky-Note-Notepad-png.jpg';
// const Section1 = () => {

//   const [title, setTitle] = useState('Physics')
//   const [details, setDetails] = useState('Work, Energy, Power are very important and also very easy topic if you practice it daily.')

//   const [task, setTask] = useState([])

//   const submitHandler = (e) => {
//     e.preventDefault()

//     const copyTask = [...task];

//     copyTask.push({ title, details })

//     setTask(copyTask)

    
//   }


//   const deleteNote = (idx) => {
//     const copyTask = [...task];

//     copyTask.splice(idx, 1)

//     setTask(copyTask)
//   }

//   return (
//     <div className='h-screen lg:flex bg-black text-white'>

//       <form onSubmit={(e) => {
//         submitHandler(e)
//       }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

//         <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

//         {/* PEHLA INPUT FOR HEADING */}
//         <input
//           type="text"
//           placeholder='Enter Notes Heading'
//           className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value)
//           }}
//         />

//         {/* DETAILED VALA INPUT  */}
//         <textarea
//           type="text"
//           className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
//           placeholder='Write Details here'
//           value={details}
//           onChange={(e) => {
//             setDetails(e.target.value)
//           }}
//         />

//         <button
//           className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
//         >
//           Add Note
//         </button>

//       </form>
//       <div className='lg:w-1/2 lg:border-l-2  p-10'>
//         <h1 className='text-4xl font-bold'>Recent Notes</h1>
//         <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
//           {task.map(function (elem, idx) {

//             return <div key={idx}
//               style={{ backgroundImage: `url(${noteBg})` }}
//               className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4"
//             >
//               <div>
//                 <h3 className='leading-tight text-violet-500 text-lg font-bold'>{elem.title}</h3>
//                 <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
//               </div>
//               <button onClick={() => {
//                 deleteNote(idx)
//               }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
//             </div>
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Section1








import { useState } from "react";

const AddNote = ({ addNote }) => {
  const [title, setTitle] = useState("Physics");
  const [details, setDetails] = useState("Work, Energy, Power are very important and also very easy topic if you practice it daily.");

  const submitHandler = (e) => {
    
    e.preventDefault();  // prevent to not reload the page while click on the submit button


    if (!title.trim() || !details.trim()) {
    alert("Title or Description cannot be empty!");
    return;
  }

    addNote(title, details);
    // setTitle("");
    // setDetails("");
  };

  const chektheValues = (e) =>{
    // console.log("check valye is called")
    // console.log(e.title.value)
    // return (e.target.value !== "" && e.target.value !== "")
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
    >
      <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

      <input
        type="text"
        placeholder="Enter Notes Heading"
        className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded"
        placeholder="Write Details here"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <button onClick={a => {
          chektheValues(a)
      }}
       className="bg-white text-black w-full py-2 rounded">
        Add Note
      </button>
    </form>
  );
};

export default AddNote;



