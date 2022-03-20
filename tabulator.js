GenerateSuperTablePlease = function()
{
var myList = {
    "array": [
      {
        "name": "aaa",
        "count": 1,
        "profitability": "12%"
      },
      {
        "name": "addda",
        "count": 3,
        "profitability": "8%"
      },
      {
        "name": "qqq",
        "count": 1,
        "profitability": "1%"
      },
      {
        "name": "aaq",
        "count": 1,
        "profitability": "2%"
      },
      {
        "name": "qq",
        "count": 14,
        "profitability": "2%"
      },
      {
        "name": "aa",
        "count": 1,
        "profitability": "12%"
      },
      {
        "name": "baa",
        "count": 2,
        "profitability": "7%"
      },
      {
        "name": "aba",
        "count": 3,
        "profitability": "12%"
      }
    ]
  }
for (var i in myList.count){
  var row = "<tr><td>"+tableData[i].name +"</td><td>" +tableData[i].count + "</td><td>" +tableData[i].profitability+ "</td></tr>"
  var table = '#table-body'
  table.append(row)
}
return table
}