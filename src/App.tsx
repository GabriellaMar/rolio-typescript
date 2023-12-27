
import { NavBar } from "@/components/NavBar/NavBar.tsx"
import { useState } from "react"
import { SelectedPage } from "@/shared/types"




function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Oil)
  return (
    <div className='app'>
      <NavBar selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
