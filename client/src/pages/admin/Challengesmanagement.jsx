import React, { useEffect, useState } from "react";
import Sidebar from "../navbar/sidebar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import companypath from "./BackendURL";
import { useNavigate } from "react-router-dom";
  

function AdminChallenges() {

    const [title,setTitle] = useState('')
    const [url,setUrl] = useState('')
    const [funding,setFunding] = useState('')
    const [deadline,setDeadline] = useState('')
    const [Description, setDescription] = useState('')
    const [review, setReview] = useState('')
    const [challenge, setChallenge] = useState('')
    const [status, setStatus] = useState('')
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(0)

    const navigate = useNavigate()

    function whenclicking ()  {

        let data = {
            title,
            url,
            funding,
            deadline,
            Description,
            review,
            challenge,
            status
        }

        fetch(companypath+'insertchallenges',{
            method:'post',
            headers: {
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((result) => {
            // console.log(result)
            // setData(result)
        })
        setRefresh(prev => prev + 1)
        navigate('/')


    }

    useEffect(() => {
        fetch(companypath+'challengesdata').then((res) => res.json()).then((result) => {
            console.log(result)
            setData(result)
        })
    },[refresh])

    const statusclicking = (ids) => {

        let delid = {
            id: ids
        }

        fetch(companypath+'updatedata',{
            method:'post',
            headers: {
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(delid)
        }).then((res) => res.json()).then((result) => {
            // console.log(result)
        setRefresh(prev => prev + 1)

            
        })
        // setRefresh(prev => prev + 1)

    }

    return (
        <>
            <Sidebar />
            <div className="bg-[white] h-[900px] relative lg:ml-[250px] p-[50px]">

                <div className="flex justify-between">
                    <h1 className="text-4xl font-[600]">Challenges Management</h1>



                    <Popover>
                        <PopoverTrigger>                    
                            <button className="bg-[blue] w-[200px] h-[35px] rounded-md text-white">
                                + ADD CHALLENGES
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className={'w-[1400px] h-[700px] ps-40  mx-30 mt-[-100px]'}><h1 className="text-4xl font-[600]">Add Challenges</h1>
                        
                        
{/* <form> */}
    <div class="grid gap-6 mb-6 md:grid-cols-2 mt-20">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ImageURL</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL" onChange={(e) => setUrl(e.target.value)} required />
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Funding</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" onChange={(e) => setFunding(e.target.value)} required />
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
            <input type="Date" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" onChange={(e) => setDeadline(e.target.value)} required />
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <input type="textarea" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="......" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review videos</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" onChange={(e) => setReview(e.target.value)} required />
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Challenge Video</label>
            <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setChallenge(e.target.value)} required />
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setStatus(e.target.value)}>
                <option>select</option>
                <option value={1}>visible</option>
                <option value={2}>Not visible</option>
            </select>
            {/* <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setStatus(e.target.value)} required /> */}
        </div>
    </div>
   
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={whenclicking}>Submit</button>
{/* </form> */}

                        </PopoverContent>
                    </Popover>

                </div>
                
                

<div class="relative overflow-x-auto mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL.NO
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    Funding
                </th>
                <th scope="col" class="px-6 py-3">
                    Deadline
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Review videos
                </th>
                <th scope="col" class="px-6 py-3">
                    Challenge video
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>


        {data.map((item,index) => {
            
            return (
                

                
                <tbody>
            <tr key={item._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <td class="px-6 py-4">
                    <div className="flex justify-center items-center w-[100px] h-[50px]">
                <img src={item.url} className=""></img><span>{item.title}</span>
                </div>
                  
                    
                </td>
                <td class="px-6 py-4">
                    {/* {item.funding} */}
                </td>
                <td class="px-6 py-4">
                    {item.funding}
                </td>
                <td class="px-6 py-4">
                    {item.deadline}
                </td>
                <td class="px-6 py-4">
                    {item.Description}
                </td>
                <td class="px-6 py-4">
                    {item.review}
                </td>
                <td class="px-6 py-4">
                    {item.challenge}
                </td>
                <td class="px-6 py-4" onClick={()=>statusclicking(item._id)}>
                <button className="p-4 border border-[black] rounded-sm">
                    { item.status == 1  ? 'visible' : 'hidden'}
                    </button>
                </td>

            </tr>
            
        </tbody>
            )
        })}
        
    </table>
</div>



            </div>

        </>
    )
}

export default AdminChallenges