import { useEffect, useRef, useState } from "react"
import { fetchDust } from "~/store/slice/dustSlice"
import { useAppDispatch, useAppSelector } from "~/store"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyArea from "~/routes/MyArea"
import EntireArea from "~/routes/EntireArea"
import Liked from "~/routes/Liked"
import Nav from "~/components/Nav"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyArea />} />
        <Route path="/entireArea" element={<EntireArea />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/*" element={<p>Not Found</p>} />
      </Routes>
      <Nav />
    </BrowserRouter>
  )
}

export default App
