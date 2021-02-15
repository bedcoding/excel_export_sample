import React, { useState } from 'react';
import DataExcel from './component/data';

function App() {
   const [data, setData] = useState({header1:'', header2:'', body1:'', body2:''});

   const handleInputChange = (event) => {
      setData(
        {
          ...data, 
          [event.target.name]: event.target.value
        }
      );
   }

   return(
      <>
         <form onSubmit={event => event.preventDefault()}>            
            <input type="text" name='header1' value={data.header1} onChange={event => handleInputChange(event)}/>
            <input type="text" name='header2' value={data.header2} onChange={event => handleInputChange(event)}/> <br/>
            <input type="text" name='body1' value={data.body1} onChange={event => handleInputChange(event)}/>
            <input type="text" name='body2' value={data.body2} onChange={event => handleInputChange(event)}/> <br/>

            <DataExcel dataExcel={data} />
         </form>
      </>
   )
}

export default App;