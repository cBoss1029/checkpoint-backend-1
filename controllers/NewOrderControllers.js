module.exports.list =  function list(request, response) {
    const fs = require('fs')
  
    fs.readFile("./server/data.csv", 'utf8', function (err, data) {
      const arrData = data.split("\n")
      const numArr = arrData[1].split(",");
      if (err) {
        return console.log(err);
      }
      return response.json(numArr[2])
    });
}
