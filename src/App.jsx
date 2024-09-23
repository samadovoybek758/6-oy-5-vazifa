import { useState } from 'react';
import { useEffect } from 'react';
import Card from './components/Card';
import './App.css'

function App() {
  const[input,setinput] = useState('')
  const[data,setdata] = useState([])

  function change_input(e) {
    setinput(e.target.value)
  }

  function add_btn(e) {
    e.preventDefault()

    if (!input.trim()) return; 

    const item = {
      input: input,
      id: Date.now()
    }

    let copied = [...data];
    copied.push(item)
    setdata(copied);

    
    let storage_copy = [];
    if (localStorage.getItem('data')) {
      storage_copy = JSON.parse(localStorage.getItem('data'))
     
    }

    storage_copy.push(item)
    localStorage.setItem("data",JSON.stringify(storage_copy))

    setinput('')

  }

 

  useEffect(()=> {
    let storage_item = [];
    if (localStorage.getItem('data')) {
      storage_item = JSON.parse(localStorage.getItem('data'))
    }
    setdata(storage_item)
  },[])


  function delet_btn(id) {
    console.log(id);
    let copy = [...data]
    copy = copy.filter(function (value) {
      return value.id != id
    })
    localStorage.setItem("data", JSON.stringify(copy))
    setdata(copy)
  }
  return(
    <>
      <div  className="flex justify-center gap-3 mx-auto w-[600px] my-20" >
        <input onChange={change_input} value={input} type="text" placeholder='Enter somethis...' className=' rounded-md w-[382px] bg-violet-950 px-2 text-white border-solid border-white text-base' />
        <div onClick={add_btn} className='w-10 h-10 flex justify-center align-middle rounded-lg text-white text-2xl bg-purple-600'>+</div>
      </div>
      {
        data.length > 0 && data.map(function (value,index) {
          return <Card title={value} key={index} delet_btn={delet_btn}/>
        })
      }
    </>
  )
}

export default App
