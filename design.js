var boxHeight,boxWidth;

$("#gridForm").on ('submit',function()
{
    $("#gridTable").empty();
    boxHeight=$(".height").val();
    boxWidth=$(".width").val();
    var str="";
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
    $("#gridTable td").on("click",function(){
        var gridColor=$("#colorPicker").val();
        $(this).css("background-color",gridColor);
    })
});


$("#gridForm").submit(function(e) {
    e.preventDefault();
});
