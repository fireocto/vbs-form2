import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Register from './pages/Register'
import NoPage from './pages/NoPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Register />} />
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App







// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path='/home' element={<Home />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='*' element={<NoPage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>

//   )
// }

// export default App