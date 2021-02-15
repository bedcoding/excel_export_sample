import React from 'react';
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function DataExcel({dataExcel}) {   
   const body = [{body1 : dataExcel.body1, body2 : dataExcel.body2}];

   return(
      <>
         <ExcelFile element={<button> 엑셀 추출 버튼 </button>} filename='export excel data'>
            <ExcelSheet data={body} name="추출된 엑셀파일의 제목">
               <ExcelColumn label={dataExcel.header1} value='body1'/>
               <ExcelColumn label={dataExcel.header2} value='body2'/>
            </ExcelSheet>
         </ExcelFile>
      </>
   )
}

export default DataExcel;