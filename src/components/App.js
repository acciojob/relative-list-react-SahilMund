import React from 'react'

const App = () => {
  const relatives = ["A","b","c"]
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                {
                  relatives?.map((rel, index) => (
                    <li key={`relativeListItem${index+1}`}>{rel}</li>
                  ))
                }
               </ol>
    </div>
  )
}

export default App
