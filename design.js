var boxHeight,boxWidth;
// creating grid box with specifications on clicking submit button
$("#gridForm").on ('submit',function()
{
    $("#gridTable").empty();
    boxHeight=$(".height").val(); //recording number of rows selected
    boxWidth=$(".width").val();  // recording number of columns selected
    var str="";
    // generating append string
    for(var i=0;i<boxHeight;i++)
    {
       str+="<tr>"
        for (var j=0;j<boxWidth;j++)
        {           
           str+="<td cellIndex= "+j+" rowIndex="+i+"> </td>"
        }
       str+="</tr>";    
    }
    $("#gridTable").append(str);
// selecting color from color picker and changing background of the selected grid
    $("#gridTable td").on("click",function(){
        var gridColor=$("#colorPicker").val();  // selecting color from color picker
        $(this).css("background-color",gridColor); //changing background of the grid which is clicked
    })
});

$("#gridForm").submit(function(e) {
    e.preventDefault();
});
