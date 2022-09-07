import MainHeader from './components/layout/MainHeader'
import Sidebar from './components/layout/Sidebar'
import { useState } from 'react'

function App() {
  const [sidebarIsShown, setSidebarIsShown] = useState(false)

  return (
    <>
      {sidebarIsShown && <Sidebar setShowSidebar={setSidebarIsShown} />}
      <MainHeader setShowSidebar={setSidebarIsShown} />
    </>
  )
}

export default App
