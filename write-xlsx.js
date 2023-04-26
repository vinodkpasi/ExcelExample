
var Excel = require('exceljs');

const write = (filname) => {
  var workbook = new Excel.Workbook();
return  workbook.xlsx.readFile(filname)
      .then( function() {
          var worksheet = workbook.getWorksheet(1);
          var row = worksheet.getRow(2);
          row.getCell(1).value = Date.now(); 
          row.commit();
          workbook.xlsx.writeFile(filname);
          return true;
      })
};
module.exports = {
  write
};
