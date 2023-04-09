
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import Cart from './components/Cart';
import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cartContext = createContext([]);
export const warnContext = createContext();

function App() {
  const [cart,setCart] = useState([]);
  console.log(cart);
  const warn = (msg) =>{
    toast(msg);
  }
  return (
    <div>
      <cartContext.Provider value={[cart,setCart]}>
        <warnContext.Provider value={warn}>
          <Header></Header>
          <Cart></Cart>
          <div>
          <Outlet></Outlet>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </warnContext.Provider>
      </cartContext.Provider>
      
    </div>
  )
}

export default App


