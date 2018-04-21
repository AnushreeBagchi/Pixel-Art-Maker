var x,y;

$("#gridForm").on ('submit',function()
{
    $("#gridTable").empty();
    x=$(".height").val();
    y=$(".width").val();
    var str="";
    for(var i=0;i<x;i++)
    {
       str+="<tr>"
        for (var j=0;j<y;j++)
        {           
           str+="<td cellIndex= "+j+" rowIndex="+i+"> </td>"
        }
       str+="</tr>";    
    }
    $("#gridTable").append(str);
    $("#gridTable td").on("click",function(){
        var c=$("#colorPicker").val();
        $(this).css("background-color",c);
    })
});


$("#gridForm").submit(function(e) {
    e.preventDefault();
});
