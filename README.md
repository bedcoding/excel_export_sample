# 확인할 코드 2개

1. App.js (그냥 입력창 4개)
2. component/data.js (엑셀 내보내기 버튼)


</br></br></br></br></br>


# 그외 검토해본 라이브러리 (여기서는 안 씀)
아래 라이브러리의 경우 엑셀 추출은 유료였고 CSV추출만 가능해서 제외했습니다.

npm i ag-grid-community     
npm i ag-grid-react

~~~

import React, { useEffect } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function App() {
    
let gridApi
  const columnDefs= [
    { headerName: "Name", field: "name" ,checkboxSelection:true},
    { headerName: "Age", field: "age",}, 
    {headerName: "Birth Year",field: "birthYear",},
    { headerName: "Phone Number", field: "phoneNumber" },
   
    ]
  const rowData= [
    { name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear:2001}, 
    { name: "David", age: 17, phoneNumber: 9827654310,birthYear:2003}, 
    { name: "Dan", age: 26, phoneNumber: 9765438210,birthYear:1995 },
    { name: "Dan", age: 23, phoneNumber: 9765438210,birthYear:1995 },
    { name: "Dan", age: 25, phoneNumber: 9765438210,birthYear:1995 },
    { name: "Nostar", age: 17, phoneNumber: 9827654,birthYear:2003}, 
    { name: "Curran", age: 26, phoneNumber: 9765438210,birthYear:1995 },
    { name: "jack", age: 23, phoneNumber: 9765438210,birthYear:1995 },
]

const defaultColDef={sortable:true,editable:true,flex:1,filter:true,floatingFilter:true,editable:true}
const onGridReady=(params)=>{
  gridApi=params.api
}
const onExportClick=()=>{
  gridApi.exportDataAsCsv();
}
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
     
      <button onClick={()=>onExportClick()}>Export</button>
      <div className="ag-theme-alpine" style={ {height: '500px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;

~~~