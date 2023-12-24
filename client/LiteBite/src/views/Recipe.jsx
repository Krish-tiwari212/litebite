import React from 'react'
import Bg from '../assets/pancakes.png'
import Cross from '../assets/blackarrow.png'
import Ham from '../assets/blackham.png'
import Star from '../assets/Star.svg'
import Clock from '../assets/clock.svg'
import Like from '../assets/Like.svg'
import Bs from '../assets/blankstar.svg'

function Recipe() {
  return (
    <div className='w-sceen h-screen flex flex-col bg-[#0E100FCC]'>
        <div className='flex items-start w-screen h-[356px]'>
            <img src={Bg} alt="" className='w-screen  h-[356px] rounded-bl-[25px] rounded-br-[25px]'>
            </img>
            <img src={Cross} alt="" className='z-40 w-12 h-12 absolute p-2'/>
            <div className='w-36 rounded-[250px] flex justify-around bg-opacity-50 h-12 bg-[#06060680] z-40 absolute right-4 top-72'>
            <div className="w-[93.97px] text-white pt-1 text-2xl font-normal font-'Jaldi'">5+Photos</div>
            </div>
            <img src={Ham} alt="" className='z-40 w-12 h-12 absolute p-2 right-0'/>
        </div>
        <div className='w-screen h-[105px]  bg-[#0E0F0E] flex flex-row justify-between align-middle'>
            <div className='w-2/3 h-inherit pl-2 flex items-center '><div className="text-white text-[32px] font-normal font-['Jacques']">Blueberry & Orange <br/>Pancake</div></div>
            <div className=' h-inherit flex flex-row pr-2  items-center '>
                <img src={Star} alt="" className='w-6 h-6'/>
                <img src={Star} alt="" className='w-6 h-6'/>
                <img src={Star} alt="" className='w-6 h-6'/>
                <img src={Star} alt="" className='w-6 h-6'/>
                <img src={Bs} alt="" className='w-6 h-6'/>
            </div>
        </div>
        <div className='flex flex-col w-screen h-full '>
            <div className='w-screen h-16 flex flex-row justify-around text-white items-center'>
                <div className='text-[17px] front-normal font-[jacques] flex flex-col'>
                    <div className='flex flex-row'><img src={Clock} alt="" className='pr-1' /> 20 min</div>
                    <div className='w-16 h-[3px] bg-white'>

                    </div>
                </div>
                <div className='text-[17px] front-normal font-[jacques]'>~By Emma</div>
                <div className='text-[17px] front-normal font-[jacques]'>Vegetarian</div>
            </div>
            <div className="w-screen text-white text-[17px] font-normal font-'Jaldi' p-6 pt-2 pb-2">Lorem ipsum dolor sit amet consectetur. Vestibulum magna vestibulum nibh massa vitae ut. Lacus ut lectus ultrices sapien consectetur lacinia vestibulum. Sociis sed adipiscing pellentesque eu. Placerat ut amet ultricies id hendrerit massa vulputate egestas. Est adipiscing tortor in vulputate sem porttitor praesent vitae. Vitae pellentesque ultrices pellentesque neque pulvinar ipsum. Congue quis nisi massa id auctor. Ut egestas sed massa justo. Integer vitae ut adipiscing commodo aliquam.</div>
            <div className='flex flex-row justify-around items-center font-jacques'>
                <button className="w-[134px] h-[45px] bg-yellow-500 bg-opacity-90 rounded-[25px] border border-gray-600 " > See recipe </button>
                <button className="w-[134px] flex flex-row justify-center items-center h-[45px] bg-yellow-500 bg-opacity-90 rounded-[25px] border border-gray-600 m-2 " >
                    Favourite 
                    <img src={Like} className='pl-1' /> 
                </button>
            </div>
        </div>

      
    </div>
  )
}

export default Recipe
