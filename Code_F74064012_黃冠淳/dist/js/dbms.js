$("#sql_submit").click(function(){
   if( $("#sql").val().substring(0, 6)=="DELETE")
   {
        $.get('/upload_sql', {
            sql_data: $("#sql").val(),

        }, (data) => {
            console.log(data)  
            $("#output").html("刪除成功!")
        })
   }
   else if($("#sql").val().substring(0, 6)=="INSERT")
   {
        $.get('/upload_sql', {
            sql_data: $("#sql").val(),

        }, (data) => {
            $("#output").html("新增成功!")
        })
   }
   else if($("#sql").val().substring(0, 6)=="UPDATE")
   {
        $.get('/upload_sql', {
            sql_data: $("#sql").val(),

        }, (data) => {
            console.log(data)  
            $("#output").html("更改成功!")
        })
   }
   else{
        $.get('/upload_sql', {
            sql_data: $("#sql").val(),

        }, (data) => {  
            
            var text = "";
            var arr="";
            var width=15;
            
            //console.log(Object.keys(data))
            //console.log(data[Object.keys(data)])
            //console.log(data.length)
            arr = Object.keys(data[0]);
            width*=arr.length;
            $("#output").css("width",width+"vh");
            text+="<tr>";
            for(j=0;j<arr.length;j++)
            {
                text+="<th>"+Object.keys(data[0])[j]+"</th>";
            }
            text+="</tr>";
            for (i = 0; i < data.length; i++) {
                arr = Object.keys(data[i]);
                text+="<tr>";
                for(j=0;j<arr.length;j++)
                {
                    text+="<th>"+Object.values(data[i])[j]+"</th>";
                }
                text+="</tr>";
            }
            $("#output").html(text)
            //var arr = Object.keys(data[i]);
            //var len = arr.length;
            //console.log(len)
            //console.log(Object.values(data[0])[0])
        });
   }
    
});
var method="";
$("#method_select").change(function(){
    console.log($("#method_select").find("option:selected").text());
    method= $("#method_select").find("option:selected").text();
    $("#find_output").css("visibility", "hidden");
    $("#check_update").css("visibility", "hidden");
}); 
$("#table_select").change(function(){
    $("#find_output").css("visibility", "hidden");
    $("#check_update").css("visibility", "hidden");
    $("#row").css("visibility", "hidden");
    $("#query_row").css("visibility", "hidden");
    $("#query_submit").css("visibility", "hidden");
    var table="";
    var table_text="";
    var top=0;
    if(method=="查詢")
    {
        table_text+="輸入要查詢的條件 : <br>";
    }
    else if(method=="刪除")
    {
        table_text+="選擇要刪除的欄位 : <br>";
    }
    else if(method=="新增")
    {
        table_text+="輸入新增欄位資訊 : <br>";
    }
    else if(method=="更改")
    {
        table_text+="選擇要更改的欄位 : <br>";
    }
    $("#table_result").html(table_text)

        if($("#table_select").find("option:selected").text()=="court")
        {
            table+="\
            <tr>\
            <th>欄位</th>\
            <th >值</th>\
            </tr>\
            <tr>\
            <td>Cnumber</td>\
            <td><input type=\"text\" id=\"Cnumber\"></td>\
            </tr>\
            <tr>\
                <td>court_name</td>\
                <td><input type=\"text\" id=\"court_name\"></td>\
            </tr>\
            <tr>\
                <td>court_location</td>\
                <td><input type=\"text\" id=\"court_location\"></td>\
            </tr>"
            top=60;
        }
        else if($("#table_select").find("option:selected").text()=="game_record")
        {
            table+="\
            <tr>\
            <th>欄位</th>\
            <th >值</th>\
            </tr>\
            <tr>\
            <td>GRnumber</td>\
            <td><input type=\"text\" id=\"GRnumber\"></td>\
            </tr>\
            <tr>\
                <td>win_Tnumber</td>\
                <td><input type=\"text\" id=\"win_Tnumber\"></td>\
            </tr>\
            <tr>\
                <td>lose_Tnumber</td>\
                <td><input type=\"text\" id=\"lose_Tnumber\"></td>\
            </tr>\
            <tr>\
                <td>Cno</td>\
                <td><input type=\"text\" id=\"Cno\"></td>\
            </tr>\
            <tr>\
                <td>game_date</td>\
                <td><input type=\"text\" id=\"game_date\"></td>\
            </tr>\
            <tr>\
                <td>score</td>\
                <td><input type=\"text\" id=\"score\"></td>\
            </tr>"
            top=77;
        }
        else if($("#table_select").find("option:selected").text()=="general_manager")
        {
            table+="\
            <tr>\
            <th>欄位</th>\
            <th >值</th>\
            </tr>\
            <tr>\
            <td>GMnumber</td>\
            <td><input type=\"text\" id=\"GMnumber\"></td>\
            </tr>\
            <tr>\
                <td>manager_name</td>\
                <td><input type=\"text\" id=\"manager_name\"></td>\
            </tr>\
            <tr>\
                <td>manager_age</td>\
                <td><input type=\"text\" id=\"manager_age\"></td>\
            </tr>\
            <tr>\
                <td>Tno</td>\
                <td><input type=\"text\" id=\"Tno\"></td>\
            </tr>"
            top=65;
        }
        else if($("#table_select").find("option:selected").text()=="head_coach")
        {
            table+="\
            <tr>\
            <th>欄位</th>\
            <th >值</th>\
            </tr>\
            <tr>\
            <td>HCnumber</td>\
            <td><input type=\"text\" id=\"HCnumber\"></td>\
            </tr>\
            <tr>\
                <td>coach_name</td>\
                <td><input type=\"text\" id=\"coach_name\"></td>\
            </tr>\
            <tr>\
                <td>coach_age</td>\
                <td><input type=\"text\" id=\"coach_age\"></td>\
            </tr>\
            <tr>\
                <td>Tno</td>\
                <td><input type=\"text\" id=\"Tno\"></td>\
            </tr>"
            top=65;
        }
        else if($("#table_select").find("option:selected").text()=="player")
        {
            table+="\
            <tr>\
            <th>欄位</th>\
            <th >值</th>\
            </tr>\
            <tr>\
            <td>Pnumber</td>\
            <td><input type=\"text\" id=\"Pnumber\"></td>\
            </tr>\
            <tr>\
                <td>player_name</td>\
                <td><input type=\"text\" id=\"player_namer\"></td>\
            </tr>\
            <tr>\
                <td>PTS</td>\
                <td><input type=\"text\" id=\"PTS\"></td>\
            </tr>\
            <tr>\
                <td>REB</td>\
                <td><input type=\"text\" id=\"REB\"></td>\
            </tr>\
            <tr>\
                <td>AST</td>\
                <td><input type=\"text\" id=\"AST\"></td>\
            </tr>\
            <tr>\
                <td>Tno</td>\
                <td><input type=\"text\" id=\"Tno\"></td>\
            </tr>\
            <tr>\
                <td>HCno</td>\
                <td><input type=\"text\" id=\"HCno\"></td>\
            </tr>"
            top=83;
        }
        else if($("#table_select").find("option:selected").text()=="team")
        {
            table+="\
            <tr>\
            <th>欄位</th>\
            <th >值</th>\
            </tr>\
            <tr>\
            <td>Tnumber</td>\
            <td><input type=\"text\" id=\"Tnumber\"></td>\
            </tr>\
            <tr>\
                <td>team_name</td>\
                <td><input type=\"text\" id=\"team_name\"></td>\
            </tr>\
            <tr>\
                <td>team_alliance</td>\
                <td><input type=\"text\" id=\"team_alliance\"></td>\
            </tr>\
            <tr>\
                <td>team_champion	</td>\
                <td><input type=\"text\" id=\"team_champion	\"></td>\
            </tr>\
            <tr>\
                <td>Cno</td>\
                <td><input type=\"text\" id=\"Cno\"></td>\
            </tr>\
            <tr>\
                <td>team_group</td>\
                <td><input type=\"text\" id=\"team_group\"></td>\
            </tr>"
            top=77;
        }
     
    $("#update_table").html(table)
    $("#btn_check").css("top",top+"vh");
    $("#btn_check").css("visibility", "visible");

    
}); 
$("#btn_check").click(function(){  
    /*var trList = $("#update_table").children("tr")
    console.log(trList)
    var tdArr = trList.eq(1).find("td");
    var aa=tdArr.eq(0).text();
    console.log(aa);
    var history_income_type = tdArr.eq(1).find("input").val();//收入類別
    console.log(tdArr)
    console.log(history_income_type)*/   
    if(method=="刪除")
    {
        var condition="";
        var count=1;
        var trList = $("#update_table").children("tr")
        for (var i=1;i<trList.length;i++  ) {
        var tdArr = trList.eq(i).find("td");
            if(tdArr.eq(1).find("input").val()!="")
            {
                if(count!=1)
                {
                    condition+=" AND ";
                }
                condition+=tdArr.eq(0).text()
                condition+=tdArr.eq(1).find("input").val()
                count+=1;
            }
            
        }

        $.get('/delete_table', {
            delete_table: $("#table_select").find("option:selected").text(),
            delete_condition: condition

        }, (data) => {
            alert("刪除成功");
        })
        //alert($("#table_select").find("option:selected").text());
        //alert(condition);
    }
    else if(method=="新增")
    {
        var trList = $("#update_table").children("tr")
        var insert_data="";

        for (var i=1;i<trList.length;i++  ) 
        {

            var tdArr = trList.eq(i).find("td");
            if(i==1)
            {
                insert_data+="(";
            }
            
            if( !isNaN( tdArr.eq(1).find("input").val() ) )
            {
                insert_data+=tdArr.eq(1).find("input").val();
            }
            else
            {
                insert_data+="\"";
                insert_data+=tdArr.eq(1).find("input").val();
                insert_data+="\"";
            }
            if(i!=trList.length-1)
            {
                insert_data+=",";
            }
            else
            {
                insert_data+=")";
            }
        }
        $.get('/insert_table', {
            insert_table: $("#table_select").find("option:selected").text(),
            insert_text: insert_data

        }, (data) => {
            alert("新增成功");
        })
    }
    else if(method=="更改")
    {
        var condition="";
        var count=1;
        var trList = $("#update_table").children("tr")
        for (var i=1;i<trList.length;i++  ) {
        var tdArr = trList.eq(i).find("td");
            if(tdArr.eq(1).find("input").val()!="")
            {
                if(count!=1)
                {
                    condition+=" AND ";
                }
                condition+=tdArr.eq(0).text()
                condition+=tdArr.eq(1).find("input").val()
                count+=1;
            }
            
        }
        //alert(condition);
        $.get('/find_table', {
            find_table: $("#table_select").find("option:selected").text(),
            find_text: condition

        }, (data) => {
            var text = "";
            var arr="";
            var width=15;
            var top=90;
            var table_top=70;
            $("#find_output").css("visibility", "visible");
            $("#check_update").css("visibility", "visible");
            if($("#table_select").find("option:selected").text()=="court")
            {
                top=92;
                table_top=67;
            }
            else if($("#table_select").find("option:selected").text()=="game_record")
            {
                top=126;
                table_top=83;
            }
            else if($("#table_select").find("option:selected").text()=="general_manager")
            {
                top=102;
                table_top=70;
            }
            else if($("#table_select").find("option:selected").text()=="head_coach")
            {
                top=102;
                table_top=70;
            }
            else if($("#table_select").find("option:selected").text()=="player")
            {
                top=137;
                table_top=88;
            }
            else if($("#table_select").find("option:selected").text()=="team")
            {
                top=126;
                table_top=83;
            }
            //console.log(Object.keys(data))
            //console.log(data[Object.keys(data)])
            //console.log(data.length)
            arr = Object.keys(data[0]);
            text+="輸入要更改的資訊:<bt>"
            text+= "<tr>\
                    <th>欄位</th>\
                    <th >值</th>\
                    </tr>"
            for(j=0;j<arr.length;j++)
            {
                text+="<tr>";
                text+="<th>"+Object.keys(data[0])[j]+"</th>";
                text+="<th>"+"<input type=\"text\" value=\""+Object.values(data[0])[j]+"\"></input></th>";
                text+="</tr>";
            }
            $("#check_update").css("top",top+"vh");
            $("#check_update").css("visibility", "visible");
            $("#find_output").css("top",table_top+"vh");
            $("#find_output").html(text)
        })
    
    }
    else if(method=="查詢")
    {
        $("#row").css("visibility", "visible");
        $("#query_row").css("visibility", "visible");
        $("#query_submit").css("visibility", "visible");
        var text=""
        text+="輸入要查詢的欄位:"
        var top=67
        var text_top=71
        var botton_top=93
        $("#query_row").html(text)
        if($("#table_select").find("option:selected").text()=="court")
        {
            $("#row").val("Cnumber\ncourt_name\ncourt_location");
            top=67
            text_top=71
            botton_top=93
        }
        if($("#table_select").find("option:selected").text()=="game_record")
        {
            $("#row").val("GRnumber\nwin_Tnumber\nlose_Tnumber\nCno\ngame_date\nscore");
            top=83
            text_top=87
            botton_top=109
        }
        if($("#table_select").find("option:selected").text()=="general_manager")
        {
            $("#row").val("GMnumber\nmanager_name\nmanager_age\nTno");
            top=71
            text_top=75
            botton_top=97
        }
        if($("#table_select").find("option:selected").text()=="head_coach")
        {
            $("#row").val("HCnumber\ncoach_name\ncoach_age\nTno");
            top=71
            text_top=75
            botton_top=97
        }
        if($("#table_select").find("option:selected").text()=="player")
        {
            $("#row").val("Pnumber\nplayer_name\nPTS\nREB\nAST\nTno\nHCno");
           top=88
           text_top=92
           botton_top=114
        }
        if($("#table_select").find("option:selected").text()=="team")
        {
            $("#row").val("Tnumber\nteam_name\nteam_alliance\nteam_champion\nCno\nteam_group");
           top=83
           text_top=87
           botton_top=109
        }
        $("#row").css("top",text_top+"vh");
        $("#query_row").css("top",top+"vh");
        $("#query_submit").css("top",botton_top+"vh");
        
    }
});
$("#query_submit").click(function(){
    
    var NewArray = $("#row").val().split("\n");
    console.log(NewArray.length)
    var basic_text=""
    var basic_count=1;
    for (var i=0;i<NewArray.length;i++  )
    {
        if(basic_count!=1)
        {
            basic_text+=", ";
            
        }
        
        basic_text+=NewArray[i]
        basic_count+=1;
    }
    var condition="";
    var count=1;
    var trList = $("#update_table").children("tr")
    for (var i=1;i<trList.length;i++  ) {
    var tdArr = trList.eq(i).find("td");
        if(tdArr.eq(1).find("input").val()!="")
        {
            if(count!=1)
            {
                condition+=" AND ";
            }
            condition+=tdArr.eq(0).text()
            condition+=tdArr.eq(1).find("input").val()
            count+=1;
        }
        
    }
    $.get('/query_table', {
        query_table: $("#table_select").find("option:selected").text(),
        query_column:condition,
        query_text: basic_text

    }, (data) => {
        var text = "";
        var arr="";
        var width=15;
        
        //console.log(Object.keys(data))
        //console.log(data[Object.keys(data)])
        //console.log(data.length)
        arr = Object.keys(data[0]);
        width*=arr.length;
        $("#query_output").css("width",width+"vh");
        text+="<tr>";
        for(j=0;j<arr.length;j++)
        {
            text+="<th>"+Object.keys(data[0])[j]+"</th>";
        }
        text+="</tr>";
        for (i = 0; i < data.length; i++) {
            arr = Object.keys(data[i]);
            text+="<tr>";
            for(j=0;j<arr.length;j++)
            {
                text+="<th>"+Object.values(data[i])[j]+"</th>";
            }
            text+="</tr>";
        }
        $("#query_output").html(text)
        $("#output_text").html("查詢結果:<br>")
    })

})
$("#check_update").click(function(){

    var condition="";
    var count=1;
    var trList = $("#update_table").children("tr")
    for (var i=1;i<trList.length;i++  ) {
    var tdArr = trList.eq(i).find("td");
        if(tdArr.eq(1).find("input").val()!="")
        {
            if(count!=1)
            {
                condition+=" AND ";
            }
            condition+=tdArr.eq(0).text()
            condition+=tdArr.eq(1).find("input").val()
            count+=1;
        }
        
    }
    //alert(condition);
    var update_condition="";
    var update_count=1;
    var index=1;
    var update_trList = $("#find_output").children("tr")
    console.log(update_trList.length)
    $("#find_output").find("tr").each(function(){
        if(index!=1)
        {
            var update_tdArr = $(this).children();
            if(update_tdArr.eq(1).find("input").val()!="")
            {
                
                if(update_count!=1)
                {
                    update_condition+=" AND ";
                }
                update_condition+= update_tdArr.eq(0).text();
                update_condition+= "="
                if( !isNaN( update_tdArr.eq(1).find("input").val() ) )
                {
                    update_condition+= update_tdArr.eq(1).find("input").val();
                }
                else
                {
                    update_condition+="\""
                    update_condition+= update_tdArr.eq(1).find("input").val();
                    update_condition+="\""
                }
                update_count+=1;
            }
        }
       
        index+=1;
    });
    //alert(update_condition)
    $.get('/change_table', {
        change_table: $("#table_select").find("option:selected").text(),
        change_column:condition,
        change_text: update_condition

    }, (data) => {
        alert("更改成功!")
    })
});
var nest_method=""
var in_table=""
$("#nest_method").change(function(){
    console.log($("#nest_method").find("option:selected").text());
    nest_method=$("#nest_method").find("option:selected").text();
}); 
$("#in_table").change(function(){
    console.log($("#in_table").find("option:selected").text());
    in_table=$("#in_table").find("option:selected").text();
    var text=""
    if(in_table=="court")
    {
        text+="<option>select column</option>\
               <option>Cnumber</option>\
               <option>court_name</option>\
               <option>court_location</option>"

    }
    else if(in_table=="game_record")
    {
        text+="<option>select column</option>\
        <option>GRnumber</option>\
        <option>win_Tnumber</option>\
        <option>lose_Tnumber</option>\
        <option>Cno</option>\
        <option>game_date</option>\
        <option>score</option>"
    }
    else if(in_table=="general_manager")
    {
        text+="<option>select column</option>\
        <option>GMnumber</option>\
        <option>manager_name</option>\
        <option>manager_age</option>\
        <option>Tno</option>"
    }
    else if(in_table=="head_coach")
    {
        text+="<option>select column</option>\
        <option>HCnumber</option>\
        <option>coach_name</option>\
        <option>coach_age</option>\
        <option>Tno</option>"
    }
    else if(in_table=="player")
    {
        text+="<option>select column</option>\
        <option>Pnumber</option>\
        <option>player_name</option>\
        <option>PTS</option>\
        <option>REB</option>\
        <option>AST</option>\
        <option>Tno</option>\
        <option>HCno</option>"
    }
    else if(in_table=="team")
    {
        text+="<option>select column</option>\
        <option>Tnumber</option>\
        <option>team_name</option>\
        <option>team_alliance</option>\
        <option>team_champion</option>\
        <option>Cno</option>\
        <option>team_group</option>"
    }
    
    $("#where_column").html(text)

}); 
$("#two_table").change(function(){
    console.log($("#two_table").find("option:selected").text());
    in_table=$("#two_table").find("option:selected").text();
    var text=""
    if(in_table=="court")
    {
        text+="<option>select column</option>\
               <option>Cnumber</option>\
               <option>court_name</option>\
               <option>court_location</option>"

    }
    else if(in_table=="game_record")
    {
        text+="<option>select column</option>\
        <option>GRnumber</option>\
        <option>win_Tnumber</option>\
        <option>lose_Tnumber</option>\
        <option>Cno</option>\
        <option>game_date</option>\
        <option>score</option>"
    }
    else if(in_table=="general_manager")
    {
        text+="<option>select column</option>\
        <option>GMnumber</option>\
        <option>manager_name</option>\
        <option>manager_age</option>\
        <option>Tno</option>"
    }
    else if(in_table=="head_coach")
    {
        text+="<option>select column</option>\
        <option>HCnumber</option>\
        <option>coach_name</option>\
        <option>coach_age</option>\
        <option>Tno</option>"
    }
    else if(in_table=="player")
    {
        text+="<option>select column</option>\
        <option>Pnumber</option>\
        <option>player_name</option>\
        <option>PTS</option>\
        <option>REB</option>\
        <option>AST</option>\
        <option>Tno</option>\
        <option>HCno</option>"
    }
    else if(in_table=="team")
    {
        text+="<option>select column</option>\
        <option>Tnumber</option>\
        <option>team_name</option>\
        <option>team_alliance</option>\
        <option>team_champion</option>\
        <option>Cno</option>\
        <option>team_group</option>"
    }
    
    $("#two_column").html(text)

    var table=""
    var top=100;
    if(in_table=="court")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>Cnumber</td>\
        <td><input type=\"text\" id=\"Cnumber\"></td>\
        </tr>\
        <tr>\
            <td>court_name</td>\
            <td><input type=\"text\" id=\"court_name\"></td>\
        </tr>\
        <tr>\
            <td>court_location</td>\
            <td><input type=\"text\" id=\"court_location\"></td>\
        </tr>"
        top=95;
    }
    else if(in_table=="game_record")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>GRnumber</td>\
        <td><input type=\"text\" id=\"GRnumber\"></td>\
        </tr>\
        <tr>\
            <td>win_Tnumber</td>\
            <td><input type=\"text\" id=\"win_Tnumber\"></td>\
        </tr>\
        <tr>\
            <td>lose_Tnumber</td>\
            <td><input type=\"text\" id=\"lose_Tnumber\"></td>\
        </tr>\
        <tr>\
            <td>Cno</td>\
            <td><input type=\"text\" id=\"Cno\"></td>\
        </tr>\
        <tr>\
            <td>game_date</td>\
            <td><input type=\"text\" id=\"game_date\"></td>\
        </tr>\
        <tr>\
            <td>score</td>\
            <td><input type=\"text\" id=\"score\"></td>\
        </tr>"
        top=111;
    }
    else if(in_table=="general_manager")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>GMnumber</td>\
        <td><input type=\"text\" id=\"GMnumber\"></td>\
        </tr>\
        <tr>\
            <td>manager_name</td>\
            <td><input type=\"text\" id=\"manager_name\"></td>\
        </tr>\
        <tr>\
            <td>manager_age</td>\
            <td><input type=\"text\" id=\"manager_age\"></td>\
        </tr>\
        <tr>\
            <td>Tno</td>\
            <td><input type=\"text\" id=\"Tno\"></td>\
        </tr>"
        top=99;
    }
    else if(in_table=="head_coach")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>HCnumber</td>\
        <td><input type=\"text\" id=\"HCnumber\"></td>\
        </tr>\
        <tr>\
            <td>coach_name</td>\
            <td><input type=\"text\" id=\"coach_name\"></td>\
        </tr>\
        <tr>\
            <td>coach_age</td>\
            <td><input type=\"text\" id=\"coach_age\"></td>\
        </tr>\
        <tr>\
            <td>Tno</td>\
            <td><input type=\"text\" id=\"Tno\"></td>\
        </tr>"
        top=99;
    }
    else if(in_table=="player")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>Pnumber</td>\
        <td><input type=\"text\" id=\"Pnumber\"></td>\
        </tr>\
        <tr>\
            <td>player_name</td>\
            <td><input type=\"text\" id=\"player_namer\"></td>\
        </tr>\
        <tr>\
            <td>PTS</td>\
            <td><input type=\"text\" id=\"PTS\"></td>\
        </tr>\
        <tr>\
            <td>REB</td>\
            <td><input type=\"text\" id=\"REB\"></td>\
        </tr>\
        <tr>\
            <td>AST</td>\
            <td><input type=\"text\" id=\"AST\"></td>\
        </tr>\
        <tr>\
            <td>Tno</td>\
            <td><input type=\"text\" id=\"Tno\"></td>\
        </tr>\
        <tr>\
            <td>HCno</td>\
            <td><input type=\"text\" id=\"HCno\"></td>\
        </tr>"
        top=116;
    }
    else if(in_table=="team")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>Tnumber</td>\
        <td><input type=\"text\" id=\"Tnumber\"></td>\
        </tr>\
        <tr>\
            <td>team_name</td>\
            <td><input type=\"text\" id=\"team_name\"></td>\
        </tr>\
        <tr>\
            <td>team_alliance</td>\
            <td><input type=\"text\" id=\"team_alliance\"></td>\
        </tr>\
        <tr>\
            <td>team_champion	</td>\
            <td><input type=\"text\" id=\"team_champion	\"></td>\
        </tr>\
        <tr>\
            <td>Cno</td>\
            <td><input type=\"text\" id=\"Cno\"></td>\
        </tr>\
        <tr>\
            <td>team_group</td>\
            <td><input type=\"text\" id=\"team_group\"></td>\
        </tr>"
        top=111;
    }
 
$("#condition_table").html(table)
$("#query_check").css("top",top+"vh");
$("#query_check").css("visibility", "visible");
}); 
$("#query_check").click(function(){
    var NewArray = $("#nest_row").val().split("\n");
    console.log(NewArray.length)
    var column1=""
    var basic_count=1;
    for (var i=0;i<NewArray.length;i++  )
    {
        if(basic_count!=1)
        {
            column1+=", ";
            
        }
        
        column1+=NewArray[i]
        basic_count+=1;
    }


    var condition2="";
    var count2=1;
    var index=1;

    $("#condition_table").find("tr").each(function(){
        if(index!=1)
        {
            var tdArr2 = $(this).children();
            if(tdArr2.eq(1).find("input").val()!="")
            {
                
                if(count2!=1)
                {
                    condition2+=" AND ";
                }
                condition2+= tdArr2.eq(0).text();
                condition2+= tdArr2.eq(1).find("input").val();
                count2+=1;
            }
        }
       
        index+=1;
    });

    $.get('/find_in', {
        in_table1:$("#in_table").find("option:selected").text(),
        in_column1: column1,
        in_condition1:$("#where_column").find("option:selected").text(),
        in_not:$("#in_not").find("option:selected").text(),
        in_table2:$("#two_table").find("option:selected").text(),
        in_column2:$("#two_column").find("option:selected").text(),
        in_condition2:condition2


    }, (data) => {
        console.log(data)
        var text = "";
        var arr="";
        var width=20;
        
        //console.log(Object.keys(data))
        //console.log(data[Object.keys(data)])
        //console.log(data.length)
        arr = Object.keys(data[0]);
        width*=arr.length;
        $("#in_output").css("width",width+"vh");
        text+="<tr>";
        for(j=0;j<arr.length;j++)
        {
            text+="<th>"+Object.keys(data[0])[j]+"</th>";
        }
        text+="</tr>";
        for (i = 0; i < data.length; i++) {
            arr = Object.keys(data[i]);
            text+="<tr>";
            for(j=0;j<arr.length;j++)
            {
                text+="<th>"+Object.values(data[i])[j]+"</th>";
            }
            text+="</tr>";
        }
        $("#in_output").html(text)
        $("#in_text").html("查詢結果:<br>")
    })
})

$("#exist2_table").change(function(){
    console.log($("#exist2_table").find("option:selected").text());
    exist_table=$("#exist2_table").find("option:selected").text();
    var table=""
    var top=100;
    if(exist_table=="court")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>Cnumber</td>\
        <td><input type=\"text\" id=\"Cnumber\"></td>\
        </tr>\
        <tr>\
            <td>court_name</td>\
            <td><input type=\"text\" id=\"court_name\"></td>\
        </tr>\
        <tr>\
            <td>court_location</td>\
            <td><input type=\"text\" id=\"court_location\"></td>\
        </tr>"
        top=90;
    }
    else if(exist_table=="game_record")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>GRnumber</td>\
        <td><input type=\"text\" id=\"GRnumber\"></td>\
        </tr>\
        <tr>\
            <td>win_Tnumber</td>\
            <td><input type=\"text\" id=\"win_Tnumber\"></td>\
        </tr>\
        <tr>\
            <td>lose_Tnumber</td>\
            <td><input type=\"text\" id=\"lose_Tnumber\"></td>\
        </tr>\
        <tr>\
            <td>Cno</td>\
            <td><input type=\"text\" id=\"Cno\"></td>\
        </tr>\
        <tr>\
            <td>game_date</td>\
            <td><input type=\"text\" id=\"game_date\"></td>\
        </tr>\
        <tr>\
            <td>score</td>\
            <td><input type=\"text\" id=\"score\"></td>\
        </tr>"
        top=106;
    }
    else if(exist_table=="general_manager")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>GMnumber</td>\
        <td><input type=\"text\" id=\"GMnumber\"></td>\
        </tr>\
        <tr>\
            <td>manager_name</td>\
            <td><input type=\"text\" id=\"manager_name\"></td>\
        </tr>\
        <tr>\
            <td>manager_age</td>\
            <td><input type=\"text\" id=\"manager_age\"></td>\
        </tr>\
        <tr>\
            <td>Tno</td>\
            <td><input type=\"text\" id=\"Tno\"></td>\
        </tr>"
        top=94;
    }
    else if(exist_table=="head_coach")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>HCnumber</td>\
        <td><input type=\"text\" id=\"HCnumber\"></td>\
        </tr>\
        <tr>\
            <td>coach_name</td>\
            <td><input type=\"text\" id=\"coach_name\"></td>\
        </tr>\
        <tr>\
            <td>coach_age</td>\
            <td><input type=\"text\" id=\"coach_age\"></td>\
        </tr>\
        <tr>\
            <td>Tno</td>\
            <td><input type=\"text\" id=\"Tno\"></td>\
        </tr>"
        top=94;
    }
    else if(exist_table=="player")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>Pnumber</td>\
        <td><input type=\"text\" id=\"Pnumber\"></td>\
        </tr>\
        <tr>\
            <td>player_name</td>\
            <td><input type=\"text\" id=\"player_namer\"></td>\
        </tr>\
        <tr>\
            <td>PTS</td>\
            <td><input type=\"text\" id=\"PTS\"></td>\
        </tr>\
        <tr>\
            <td>REB</td>\
            <td><input type=\"text\" id=\"REB\"></td>\
        </tr>\
        <tr>\
            <td>AST</td>\
            <td><input type=\"text\" id=\"AST\"></td>\
        </tr>\
        <tr>\
            <td>Tno</td>\
            <td><input type=\"text\" id=\"Tno\"></td>\
        </tr>\
        <tr>\
            <td>HCno</td>\
            <td><input type=\"text\" id=\"HCno\"></td>\
        </tr>"
        top=111;
    }
    else if(exist_table=="team")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>Tnumber</td>\
        <td><input type=\"text\" id=\"Tnumber\"></td>\
        </tr>\
        <tr>\
            <td>team_name</td>\
            <td><input type=\"text\" id=\"team_name\"></td>\
        </tr>\
        <tr>\
            <td>team_alliance</td>\
            <td><input type=\"text\" id=\"team_alliance\"></td>\
        </tr>\
        <tr>\
            <td>team_champion	</td>\
            <td><input type=\"text\" id=\"team_champion	\"></td>\
        </tr>\
        <tr>\
            <td>Cno</td>\
            <td><input type=\"text\" id=\"Cno\"></td>\
        </tr>\
        <tr>\
            <td>team_group</td>\
            <td><input type=\"text\" id=\"team_group\"></td>\
        </tr>"
        top=106;
    }
 
$("#condition2_table").html(table)
$("#query_check2").css("top",top+"vh");
$("#query_check2").css("visibility", "visible");
}); 

$("#query_check2").click(function(){
    var NewArray = $("#exist_row").val().split("\n");
    console.log(NewArray.length)
    var column1=""
    var basic_count=1;
    for (var i=0;i<NewArray.length;i++  )
    {
        if(basic_count!=1)
        {
            column1+=", ";
            
        }
        
        column1+=NewArray[i]
        basic_count+=1;
    }
    
    var condition2="";
    var count2=1;
    var index=1;
    $("#condition2_table").find("tr").each(function(){
        if(index!=1)
        {
            var tdArr2 = $(this).children();
            if(tdArr2.eq(1).find("input").val()!="")
            {
                
                if(count2!=1)
                {
                    condition2+=" AND ";
                }
                condition2+= tdArr2.eq(0).text();
                condition2+= tdArr2.eq(1).find("input").val();
                count2+=1;
            }
        }
       
        index+=1;
    });

    $.get('/find_exist', {
        exist_table1:$("#exist_table").find("option:selected").text(),
        exist_column1: column1,
        exist_not:$("#exist_not").find("option:selected").text(),
        exist_table2:$("#exist2_table").find("option:selected").text(),
        exist_condition2:condition2


    }, (data) => {
        console.log(data)
        var text = "";
        var arr="";
        var width=20;
        
        //console.log(Object.keys(data))
        //console.log(data[Object.keys(data)])
        //console.log(data.length)
        arr = Object.keys(data[0]);
        width*=arr.length;
        $("#exist_output").css("width",width+"vh");
        text+="<tr>";
        for(j=0;j<arr.length;j++)
        {
            text+="<th>"+Object.keys(data[0])[j]+"</th>";
        }
        text+="</tr>";
        for (i = 0; i < data.length; i++) {
            arr = Object.keys(data[i]);
            text+="<tr>";
            for(j=0;j<arr.length;j++)
            {
                text+="<th>"+Object.values(data[i])[j]+"</th>";
            }
            text+="</tr>";
        }
        $("#exist_output").html(text)
        $("#exist_result").html("查詢結果:<br>")
    })
})

$("#Aggregate_table").change(function(){
    console.log($("#Aggregate_table").find("option:selected").text());
    Aggregate_table=$("#Aggregate_table").find("option:selected").text();
    var text=""
    if(Aggregate_table=="court")
    {
        text+="<option>select column</option>\
               <option>Cnumber</option>\
               <option>court_name</option>\
               <option>court_location</option>"

    }
    else if(Aggregate_table=="game_record")
    {
        text+="<option>select column</option>\
        <option>GRnumber</option>\
        <option>win_Tnumber</option>\
        <option>lose_Tnumber</option>\
        <option>Cno</option>\
        <option>game_date</option>\
        <option>score</option>"
    }
    else if(Aggregate_table=="general_manager")
    {
        text+="<option>select column</option>\
        <option>GMnumber</option>\
        <option>manager_name</option>\
        <option>manager_age</option>\
        <option>Tno</option>"
    }
    else if(Aggregate_table=="head_coach")
    {
        text+="<option>select column</option>\
        <option>HCnumber</option>\
        <option>coach_name</option>\
        <option>coach_age</option>\
        <option>Tno</option>"
    }
    else if(Aggregate_table=="player")
    {
        text+="<option>select column</option>\
        <option>Pnumber</option>\
        <option>player_name</option>\
        <option>PTS</option>\
        <option>REB</option>\
        <option>AST</option>\
        <option>Tno</option>\
        <option>HCno</option>"
    }
    else if(Aggregate_table=="team")
    {
        text+="<option>select column</option>\
        <option>Tnumber</option>\
        <option>team_name</option>\
        <option>team_alliance</option>\
        <option>team_champion</option>\
        <option>Cno</option>\
        <option>team_group</option>"
    }
    
    $("#Aggregate_column").html(text)
    var table=""
    var top=100;
    if(Aggregate_table=="court")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>Cnumber</td>\
        <td><input type=\"text\" id=\"Cnumber\"></td>\
        </tr>\
        <tr>\
            <td>court_name</td>\
            <td><input type=\"text\" id=\"court_name\"></td>\
        </tr>\
        <tr>\
            <td>court_location</td>\
            <td><input type=\"text\" id=\"court_location\"></td>\
        </tr>"
        top=67;
    }
    else if(Aggregate_table=="game_record")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>GRnumber</td>\
        <td><input type=\"text\" id=\"GRnumber\"></td>\
        </tr>\
        <tr>\
            <td>win_Tnumber</td>\
            <td><input type=\"text\" id=\"win_Tnumber\"></td>\
        </tr>\
        <tr>\
            <td>lose_Tnumber</td>\
            <td><input type=\"text\" id=\"lose_Tnumber\"></td>\
        </tr>\
        <tr>\
            <td>Cno</td>\
            <td><input type=\"text\" id=\"Cno\"></td>\
        </tr>\
        <tr>\
            <td>game_date</td>\
            <td><input type=\"text\" id=\"game_date\"></td>\
        </tr>\
        <tr>\
            <td>score</td>\
            <td><input type=\"text\" id=\"score\"></td>\
        </tr>"
        top=83;
    }
    else if(Aggregate_table=="general_manager")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>GMnumber</td>\
        <td><input type=\"text\" id=\"GMnumber\"></td>\
        </tr>\
        <tr>\
            <td>manager_name</td>\
            <td><input type=\"text\" id=\"manager_name\"></td>\
        </tr>\
        <tr>\
            <td>manager_age</td>\
            <td><input type=\"text\" id=\"manager_age\"></td>\
        </tr>\
        <tr>\
            <td>Tno</td>\
            <td><input type=\"text\" id=\"Tno\"></td>\
        </tr>"
        top=71;
    }
    else if(Aggregate_table=="head_coach")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>HCnumber</td>\
        <td><input type=\"text\" id=\"HCnumber\"></td>\
        </tr>\
        <tr>\
            <td>coach_name</td>\
            <td><input type=\"text\" id=\"coach_name\"></td>\
        </tr>\
        <tr>\
            <td>coach_age</td>\
            <td><input type=\"text\" id=\"coach_age\"></td>\
        </tr>\
        <tr>\
            <td>Tno</td>\
            <td><input type=\"text\" id=\"Tno\"></td>\
        </tr>"
        top=71;
    }
    else if(Aggregate_table=="player")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>Pnumber</td>\
        <td><input type=\"text\" id=\"Pnumber\"></td>\
        </tr>\
        <tr>\
            <td>player_name</td>\
            <td><input type=\"text\" id=\"player_namer\"></td>\
        </tr>\
        <tr>\
            <td>PTS</td>\
            <td><input type=\"text\" id=\"PTS\"></td>\
        </tr>\
        <tr>\
            <td>REB</td>\
            <td><input type=\"text\" id=\"REB\"></td>\
        </tr>\
        <tr>\
            <td>AST</td>\
            <td><input type=\"text\" id=\"AST\"></td>\
        </tr>\
        <tr>\
            <td>Tno</td>\
            <td><input type=\"text\" id=\"Tno\"></td>\
        </tr>\
        <tr>\
            <td>HCno</td>\
            <td><input type=\"text\" id=\"HCno\"></td>\
        </tr>"
        top=88;
    }
    else if(Aggregate_table=="team")
    {
        table+="\
        <tr>\
        <th>欄位</th>\
        <th >值</th>\
        </tr>\
        <tr>\
        <td>Tnumber</td>\
        <td><input type=\"text\" id=\"Tnumber\"></td>\
        </tr>\
        <tr>\
            <td>team_name</td>\
            <td><input type=\"text\" id=\"team_name\"></td>\
        </tr>\
        <tr>\
            <td>team_alliance</td>\
            <td><input type=\"text\" id=\"team_alliance\"></td>\
        </tr>\
        <tr>\
            <td>team_champion	</td>\
            <td><input type=\"text\" id=\"team_champion	\"></td>\
        </tr>\
        <tr>\
            <td>Cno</td>\
            <td><input type=\"text\" id=\"Cno\"></td>\
        </tr>\
        <tr>\
            <td>team_group</td>\
            <td><input type=\"text\" id=\"team_group\"></td>\
        </tr>"
        top=83;
    }
 
    $("#Aggregate_condition").html(table)
    $("#query_check3").css("top",top+"vh");
    $("#query_check3").css("visibility", "visible");
});

$("#query_check3").click(function(){
    var result_top=90;
    var output_top=95;
    if(Aggregate_table=="court")
    {
        var result_top=74;
        var output_top=79;
    }
    else if(Aggregate_table=="game_record")
    {
        var result_top=90;
        var output_top=95;
    }
    else if(Aggregate_table=="general_manager")
    {
        var result_top=80;
        var output_top=85;
    }
    else if(Aggregate_table=="head_coach")
    {
        var result_top=80;
        var output_top=85;
    }
    else if(Aggregate_table=="player")
    {
        var result_top=95;
        var output_top=100;
    }
    else if(Aggregate_table=="team")
    {
        var result_top=90;
        var output_top=95;
    }
    var condition2="";
    var count2=1;
    var index=1;
    $("#Aggregate_condition").find("tr").each(function(){
        if(index!=1)
        {
            var tdArr2 = $(this).children();
            if(tdArr2.eq(1).find("input").val()!="")
            {
                
                if(count2!=1)
                {
                    condition2+=" AND ";
                }
                condition2+= tdArr2.eq(0).text();
                condition2+= tdArr2.eq(1).find("input").val();
                count2+=1;
            }
        }
       
        index+=1;
    });

  
    $.get('/find_Aggregate', {
        Aggregate_table1:$("#Aggregate_table").find("option:selected").text(),
        Aggregate_column1:$("#Aggregate_column").find("option:selected").text(),
        Aggregate_fun1:$("#Aggregate_fun").find("option:selected").text(),
        Aggregate_condition:condition2


    }, (data) => {
        console.log(data)
        var text = "";
        var arr="";
        var width=20;
        
        //console.log(Object.keys(data))
        //console.log(data[Object.keys(data)])
        //console.log(data.length)
        arr = Object.keys(data[0]);
        width*=arr.length;
        $("#Aggregate_output").css("width",width+"vh");
        text+="<tr>";
        for(j=0;j<arr.length;j++)
        {
            text+="<th>"+Object.keys(data[0])[j]+"</th>";
        }
        text+="</tr>";
        for (i = 0; i < data.length; i++) {
            arr = Object.keys(data[i]);
            text+="<tr>";
            for(j=0;j<arr.length;j++)
            {
                text+="<th>"+Object.values(data[i])[j]+"</th>";
            }
            text+="</tr>";
        }

        $("#Aggregate_output").html(text)
        $("#Aggregate_result").html("查詢結果:<br>")
        $("#Aggregate_result").css("top",result_top+"vh");
        $("#Aggregate_output").css("top",output_top+"vh");
    })
})

$("#having_table").change(function(){
    console.log($("#having_table").find("option:selected").text());
    having_table=$("#having_table").find("option:selected").text();
    var text=""
    if(having_table=="court")
    {
        text+="<option>select column</option>\
               <option>Cnumber</option>\
               <option>court_name</option>\
               <option>court_location</option>"

    }
    else if(having_table=="game_record")
    {
        text+="<option>select column</option>\
        <option>GRnumber</option>\
        <option>win_Tnumber</option>\
        <option>lose_Tnumber</option>\
        <option>Cno</option>\
        <option>game_date</option>\
        <option>score</option>"
    }
    else if(having_table=="general_manager")
    {
        text+="<option>select column</option>\
        <option>GMnumber</option>\
        <option>manager_name</option>\
        <option>manager_age</option>\
        <option>Tno</option>"
    }
    else if(having_table=="head_coach")
    {
        text+="<option>select column</option>\
        <option>HCnumber</option>\
        <option>coach_name</option>\
        <option>coach_age</option>\
        <option>Tno</option>"
    }
    else if(having_table=="player")
    {
        text+="<option>select column</option>\
        <option>Pnumber</option>\
        <option>player_name</option>\
        <option>PTS</option>\
        <option>REB</option>\
        <option>AST</option>\
        <option>Tno</option>\
        <option>HCno</option>"
    }
    else if(having_table=="team")
    {
        text+="<option>select column</option>\
        <option>Tnumber</option>\
        <option>team_name</option>\
        <option>team_alliance</option>\
        <option>team_champion</option>\
        <option>Cno</option>\
        <option>team_group</option>"
    }
    
    $("#Aggregate_col").html(text)
})

$("#Aggregate_col").change(function(){
    var having=$("#agg_fun").find("option:selected").text()
    having+="("+$("#Aggregate_col").find("option:selected").text()+")"
    $("#Aggregate_having").val(having)
})

$("#query_check4").click(function(){

    $.get('/find_having', {
        having_table:$("#having_table").find("option:selected").text(),
        agg_fun:$("#agg_fun").find("option:selected").text(),
        Aggregate_col:$("#Aggregate_col").find("option:selected").text(),
        Aggregate_where:$("#Aggregate_where").val(),
        Aggregate_group:$("#Aggregate_group").val(),
        Aggregate_having:$("#Aggregate_having").val()


    }, (data) => {
        console.log(data)
        var text = "";
        var arr="";
        var width=20;
        
        //console.log(Object.keys(data))
        //console.log(data[Object.keys(data)])
        //console.log(data.length)
        arr = Object.keys(data[0]);
        width*=arr.length;
        $("#having_output").css("width",width+"vh");
        text+="<tr>";
        for(j=0;j<arr.length;j++)
        {
            text+="<th>"+Object.keys(data[0])[j]+"</th>";
        }
        text+="</tr>";
        for (i = 0; i < data.length; i++) {
            arr = Object.keys(data[i]);
            text+="<tr>";
            for(j=0;j<arr.length;j++)
            {
                text+="<th>"+Object.values(data[i])[j]+"</th>";
            }
            text+="</tr>";
        }

        $("#having_output").html(text)
        $("#having_result").html("查詢結果:<br>")
    })
})