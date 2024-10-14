import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*navbar starts here*/}
    <navbar class= "h-14 w-full bg-indigo-500 flex justify-between px-4 md:px-4 items-center text-white shadow-lg sticky top-0">
      <div class= "text-2xl font-bold"> KSG Boxes</div>
      <ul class= "md:flex hidden font-semibold">
        <li class= "mx-[10px] cursor-pointer">Home</li>
        <li class= "mx-[10px] cursor-pointer">About Us</li>
        <li class= "mx-[10px] cursor-pointer">Contact</li>
      </ul>
      <div class= "hidden md:block px-2 py-2 bg-indigo-700 rounded font-bold cursor-pointer">Login/SignUp</div>
      <div class= "md:hidden">
        <a class="text-4xl" href="#">&#8801;</a>
      </div>
    </navbar>
    {/*navbar ends here*/}
    {/*image section starts here */}
    <div class= "w-full h-auto">
      <img class="hidden md:block" src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="" srcset="" />
      <img class="md:hidden" src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="" srcset="" />
    </div>
    {/*image section ends here */}
    {/* Our student section */}
    <div class= "h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 gap-4">
      <div class="w-full h-auto flex flex-wrap flex-col items-center">
        <p class="font-bold text-3xl md:text-4xl text-center">"Pure hardwork, No Shortcuts!"</p>
        <div class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-4"></div>
      </div>
      <div class="w-full flex flex-wrap justify-evenly">
        <div class="w-46 flex flex-col items-center mb-12">
          <img src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="w-72 h-auto block" alt="" />
          <p class="text-2xl font-bold">600+</p>
          <p class="text-2xl font-bold">Different Courses</p>
        </div>
        <div class="w-46 flex flex-col items-center mb-12">
          <img src="https://cdn.pixabay.com/photo/2019/07/25/16/31/doughnut-vector-art-4363014_1280.png" class="w-48 h-auto block" alt="" />
          <p class="text-2xl font-bold">600+</p>
          <p class="text-2xl font-bold">Different Courses</p>
        </div>
        <div class="w-46 flex flex-col items-center mb-12">
          <img src="https://img.freepik.com/free-vector/man-taking-break-from-work_23-2148508516.jpg?w=1380&t=st=1728072717~exp=1728073317~hmac=79a1684aa2b3d5db51cdad5e8aab6fc7a0f050661d8a806da9683f8824c211e1" class="w-48 h-auto block" alt="" />
          <p class="text-2xl font-bold">600+</p>
          <p class="text-2xl font-bold">Different Courses</p>
        </div>
      </div>
    </div>
    {/* Our student section ends here */}
    {/* Our product section */}
    <div class= "h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 gap-4">
      <div class="w-full h-auto flex flex-wrap flex-col items-center">
        <p class="font-bold text-3xl md:text-4xl text-center">Our Products</p>
        <div class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-4"></div>
      </div>
      <div class="w-[90%] h-auto flex flex-wrap justify-around">
        <div class="w-64 flex flex-col items-center mb-12 hover:border-indigo-700 rounded-xl p-2 border-2">
          <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <p class="text-xl font-bold">PW Skills lab</p>
          <p class="text-xl">Some information on this product, please read</p>
        </div>
        <div class="w-64 flex flex-col items-center mb-12 hover:border-indigo-700 rounded-xl p-2 border-2">
          <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <p class="text-xl font-bold">PW Skills lab</p>
          <p class="text-xl">Some information on this product, please read</p>
        </div>
        <div class="w-64 flex flex-col items-center mb-12 hover:border-indigo-700 rounded-xl p-2 border-2">
          <img src="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <p class="text-xl font-bold">PW Skills lab</p>
          <p class="text-xl">Some information on this product, please read</p>
        </div>
        <div class="w-64 flex flex-col items-center mb-12 hover:border-indigo-700 rounded-xl p-2 border-2">
          <img src="https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <p class="text-xl font-bold">PW Skills lab</p>
          <p class="text-xl">Some information on this product, please read</p>
        </div>
      </div>
    </div>
    {/* Our student section ends here */}

    {/* Our footer section */}
    <footer class= "h-28 w-full bg-indigo-700 flex pt-8 flex-col justify-between px-4 md:flex-row items-center text-white shadow-lg bottom-0 opacity-70">
    <div class="w-full flex flex-wrap justify-evenly">
    <div class="w-full h-auto flex flex-wrap flex-col items-center">
        <p class="font-bold text-3xl md:text-4xl text-center">footer</p>
        <div class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-4"></div>
      </div> 
    </div> 
    </footer>
    </>
  )
}

export default App
