
var Excel = require('exceljs');

const write = (filename) => {
  var workbook = new Excel.Workbook();
return  workbook.xlsx.readFile(filename)
      .then( function() {
          var worksheet = workbook.getWorksheet(1);
          var row = worksheet.getRow(2);
          row.getCell(1).value = Date.now(); 
          row.commit();
          workbook.xlsx.writeFile(filename);
          return true;
      })
};
module.exports = {
  write
};
