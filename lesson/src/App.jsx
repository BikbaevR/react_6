import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

import GetFilms from "./kinopoisk/GetFilms.jsx";


function App() {

    const url = 'https://api.kinopoisk.dev/v1.4/';
    const apiKey = 'W1TMFSH-FRXMGFS-KBW0SQ9-06S0DHJ'

    return (
        <>
            <GetFilms url={url} apiKey={apiKey}/>
        </>
    )
}
//paheal
export default App


//npm install axios

// function App() {
//
//     const url = 'https://test.ai-softdev.com/'
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxODMiLCJleHAiOjE3MjU1ODI0MDl9.jZAk3LZXbvjRTXnyBZYZg42CCu6aBUccrbAEarTLYw8'
//
//
//     const [tasks, setTasks] = useState([])
//     const [page, setPage] = useState(1)
//
//     const temp = async () => {
//         // let response = await axios.post(url + 'tasks?page=' + page, {
//         //     title:'one more test',
//         //     description:'one more test'
//         // }, {
//         //     headers:{
//         //         Authorization: token
//         //     }
//         // })
//         // console.log(response.data.data)
//         // setTasks(response.data.data)
//
//         axios.get(url + 'tasks?page=' + page,{
//             headers:{
//                 Authorization: token
//             }
//         })
//             .then(res => {
//                 // console.log(res.data.data)
//                 setTasks(res.data.data)
//             })
//     }
//
//     //Жизненный цикл компонентов
//     //1 этап - монтирование - втсавляется в DOM дерево
//     //2 этап update - изменение данных, перерисовка
//     //3 этап unmount - удаление компонента
//
//
//
//
//     // useEffect( () => { //вызывается только 1 раз при создании компонента
//     //     temp()
//     // }, [])
//
//     useEffect(() => {
//         //для асинхронности нужно объявлять тут
//         temp()
//         // return () => { //при уничтожении компонента
//         //
//         // }
//     }, [page])
//
//     const deleteTask = (id) => {
//         axios.delete(url + 'tasks/' + id,{
//             headers:{
//                 Authorization: token
//             }
//         })
//             .then(response => {
//                 setTasks(response.data.data)
//                 console.log(response.data)
//             })
//     }
//
//   return (
//     <>
//         {tasks.map((task, index) => (<div key={index} onClick={() => {deleteTask(task.id)}}>{task.description}</div>))}
//         <button onClick={() => {setPage(page + 1)}}>Дальше - {page}</button>
//     </>
//   )
// }
//
// export default App
