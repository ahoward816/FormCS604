$(document).ready(function () {
    $('#costCenterTable').dataTable();
});

var costCenterJSON = '{ "costCenterEntries" : [' +
'{ "costCenterCode":"Supply1" , resources: "Computers" , taskDescription: "Example" ,  totalBaseProgram: "Example" , totalOptions: "Example" },' +
'{ "costCenterCode":"Supply2" , resources: "Computers" , taskDescription: "Example" ,  totalBaseProgram: "Example" , totalOptions: "Example" },' +
'{ "costCenterCode":"Supply3" , resources: "Computers" , taskDescription: "Example" ,  totalBaseProgram: "Example" , totalOptions: "Example" } ]}';

$(document).ready(function () {
    $('#costYear').dataTable();
});

$(document).ready(function () {
    $('#costYearMoney').dataTable();
});

$(document).ready(function () {
    $('#costYearOption').dataTable();
});

$(document).ready(function () {
    $('#costYearOptionMoney').dataTable();
});

$(document).ready(function () {
    $('#example').dataTable();
});

var obj = eval("(" + costCenterJSON + ")");
var i = obj.costCenterEntries.length;

function fnClickAddRow() {

    var cy13 = document.getElementById('CY13').value;
    var cy14 = document.getElementById('CY14').value;
    var cy15 = document.getElementById('CY15').value;
    var cy16 = document.getElementById('CY16').value;
    var cy17 = document.getElementById('CY17').value;
    var cy18 = document.getElementById('CY18').value;
    var cy19 = document.getElementById('CY19').value;
    var cy20 = document.getElementById('CY20').value;
    var cy21 = document.getElementById('CY21').value;
    var cy22 = document.getElementById('CY22').value;
    var cy23 = document.getElementById('CY23').value;
    var cy24 = document.getElementById('CY23').value;
    var cy13m = document.getElementById('CY13M').value;
    var cy14m = document.getElementById('CY14M').value;
    var cy15m = document.getElementById('CY15M').value;
    var cy16m = document.getElementById('CY16M').value;
    var cy17m = document.getElementById('CY17M').value;
    var cy18m = document.getElementById('CY18M').value;
    var cy19m = document.getElementById('CY19M').value;
    var cy20m = document.getElementById('CY20M').value;
    var cy21m = document.getElementById('CY21M').value;
    var cy22m = document.getElementById('CY22M').value;
    var cy23m = document.getElementById('CY23M').value;
    var cy24m = document.getElementById('CY24M').value;
    var cyEscalation = document.getElementById('escalation').value;
    var cymResult;

    var ocy13 = document.getElementById('OCY13').value;
    var ocy14 = document.getElementById('OCY14').value;
    var ocy15 = document.getElementById('OCY15').value;
    var ocy16 = document.getElementById('OCY16').value;
    var ocy17 = document.getElementById('OCY17').value;
    var ocy18 = document.getElementById('OCY18').value;
    var ocy19 = document.getElementById('OCY19').value;
    var ocy20 = document.getElementById('OCY20').value;
    var ocy21 = document.getElementById('OCY21').value;
    var ocy22 = document.getElementById('OCY22').value;
    var ocy23 = document.getElementById('OCY23').value;
    var ocy24 = document.getElementById('OCY23').value;
    var ocy13m = document.getElementById('OCY13M').value;
    var ocy14m = document.getElementById('OCY14M').value;
    var ocy15m = document.getElementById('OCY15M').value;
    var ocy16m = document.getElementById('OCY16M').value;
    var ocy17m = document.getElementById('OCY17M').value;
    var ocy18m = document.getElementById('OCY18M').value;
    var ocy19m = document.getElementById('OCY19M').value;
    var ocy20m = document.getElementById('OCY20M').value;
    var ocy21m = document.getElementById('OCY21M').value;
    var ocy22m = document.getElementById('OCY22M').value;
    var ocy23m = document.getElementById('OCY23M').value;
    var ocy24m = document.getElementById('OCY24M').value;
    var ocymResult;
    var ocyResult;


    if (cy13 == "")
        cy13 = 0;
    if (cy14 == "")
        cy14 = 0;
    if (cy15 == "")
        cy15 = 0;
    if (cy16 == "")
        cy16 = 0;
    if (cy17 == "")
        cy17 = 0;
    if (cy18 == "")
        cy18 = 0;
    if (cy19 == "")
        cy19 = 0;
    if (cy20 == "")
        cy20 = 0;
    if (cy21 == "")
        cy21 = 0;
    if (cy22 == "")
        cy22 = 0;
    if (cy23 == "")
        cy23 = 0;
    if (cy24 == "")
        cy24 = 0;

    if (cy13m == "")
        cy13m = 0;
    if (cy14m == "")
        cy14m = 0;
    if (cy15m == "")
        cy15m = 0;
    if (cy16m == "")
        cy16m = 0;
    if (cy17m == "")
        cy17m = 0;
    if (cy18m == "")
        cy18m = 0;
    if (cy19m == "")
        cy19m = 0;
    if (cy20m == "")
        cy20m = 0;
    if (cy21m == "")
        cy21m = 0;
    if (cy22m == "")
        cy22m = 0;
    if (cy23m == "")
        cy23m = 0;
    if (cy24m == "")
        cy24m = 0;


    if (ocy13 == "")
        ocy13 = 0;
    if (ocy14 == "")
        ocy14 = 0;
    if (ocy15 == "")
        ocy15 = 0;
    if (ocy16 == "")
        ocy16 = 0;
    if (ocy17 == "")
        ocy17 = 0;
    if (ocy18 == "")
        ocy18 = 0;
    if (ocy19 == "")
        ocy19 = 0;
    if (ocy20 == "")
        ocy20 = 0;
    if (ocy21 == "")
        ocy21 = 0;
    if (ocy22 == "")
        ocy22 = 0;
    if (ocy23 == "")
        ocy23 = 0;
    if (ocy24 == "")
        ocy24 = 0;

    if (ocy13m == "")
        ocy13m = 0;
    if (ocy14m == "")
        ocy14m = 0;
    if (ocy15m == "")
        ocy15m = 0;
    if (ocy16m == "")
        ocy16m = 0;
    if (ocy17m == "")
        ocy17m = 0;
    if (ocy18m == "")
        ocy18m = 0;
    if (ocy19m == "")
        ocy19m = 0;
    if (ocy20m == "")
        ocy20m = 0;
    if (ocy21m == "")
        ocy21m = 0;
    if (ocy22m == "")
        ocy22m = 0;
    if (ocy23m == "")
        ocy23m = 0;
    if (ocy24m == "")
        ocy24m = 0;


    var escalationFactors = new Array();
    for (i = 0; i < 12; i++) {
        escalationFactors[i] = 1 + (i * (cyEscalation / 100));
    }

    var result2 = parseInt(cy13m) + (parseInt(cy14m) * escalationFactors[1]) + (parseInt(cy15m) * escalationFactors[2]) + (parseInt(cy16m) * escalationFactors[3]) + (parseInt(cy17m) * escalationFactors[4]) + (parseInt(cy18m) * escalationFactors[5]) + (parseInt(cy19m) * escalationFactors[6]) + (parseInt(cy20m) * escalationFactors[7]) + (parseInt(cy21m) * escalationFactors[8]) + (parseInt(cy22m) * escalationFactors[9]) + (parseInt(cy23m) * escalationFactors[10]) + (parseInt(cy24m) * escalationFactors[11]);
    var result = parseInt(cy13) + parseInt(cy14) + parseInt(cy15) + parseInt(cy16) + parseInt(cy17) + parseInt(cy18) + parseInt(cy19) + parseInt(cy20) + parseInt(cy21) + parseInt(cy22) + parseInt(cy23) + parseInt(cy24);
    var result3 = parseInt(ocy13) + parseInt(ocy14) + parseInt(ocy15) + parseInt(ocy16) + parseInt(ocy17) + parseInt(ocy18) + parseInt(ocy19) + parseInt(ocy20) + parseInt(ocy21) + parseInt(ocy22) + parseInt(ocy23) + parseInt(ocy24);
    var result4 = parseInt(ocy13m) + (parseInt(ocy14m) * escalationFactors[1]) + (parseInt(ocy15m) * escalationFactors[2]) + (parseInt(ocy16m) * escalationFactors[3]) + (parseInt(ocy17m) * escalationFactors[4]) + (parseInt(ocy18m) * escalationFactors[5]) + (parseInt(ocy19m) * escalationFactors[6]) + (parseInt(ocy20m) * escalationFactors[7]) + (parseInt(ocy21m) * escalationFactors[8]) + (parseInt(ocy22m) * escalationFactors[9]) + (parseInt(ocy23m) * escalationFactors[10]) + (parseInt(ocy24m) * escalationFactors[11]);

    cyResult = result;

    cymResult = result2;

    ocyResult = result3;
    ocymResult = result4;

    if (!isNaN(result)) {
        document.getElementById('txt3').value = result;
    }

    var cyResultString = "CY Hours: " + cyResult + " | CY Dollars: " + cymResult;
    var ocyResultString = "CY Hours: " + ocyResult + " | CY Dollars: " + ocymResult;

    $('#costCenterTable').dataTable().fnAddData([
         $("#costCenterCode").val(),
         $("#resources").val(),
         $("#taskDescription").val(),
         cyResultString,
         ocyResultString]
     );

    $('#costYear').dataTable().fnAddData([
          $("#costCenterCode").val(),
         $("#CY13").val(),
        $("#CY14").val(),
         $("#CY15").val(),
         $("#CY16").val(),
         $("#CY17").val(),
        $("#CY18").val(),
         $("#CY19").val(),
         $("#CY20").val(),
         $("#CY21").val(),
        $("#CY22").val(),
         $("#CY23").val(),
         $("#CY24").val()]
     );


    $('#costYearMoney').dataTable().fnAddData([
          $("#costCenterCode").val(),
         $("#CY13M").val(),
        $("#CY14M").val(),
         $("#CY15M").val(),
         $("#CY16M").val(),
         $("#CY17M").val(),
        $("#CY18M").val(),
         $("#CY19M").val(),
         $("#CY20M").val(),
         $("#CY21M").val(),
        $("#CY22M").val(),
         $("#CY23M").val(),
         $("#CY24M").val()]
     );

    $('#costYearOptionMoney').dataTable().fnAddData([
          $("#costCenterCode").val(),
         $("#OCY13M").val(),
        $("#OCY14M").val(),
         $("#OCY15M").val(),
         $("#OCY16M").val(),
         $("#OCY17M").val(),
        $("#OCY18M").val(),
         $("#OCY19M").val(),
         $("#OCY20M").val(),
         $("#OCY21M").val(),
        $("#OCY22M").val(),
         $("#OCY23M").val(),
         $("#OCY24M").val()]
     );

    $('#costYearOption').dataTable().fnAddData([
          $("#costCenterCode").val(),
         $("#OCY13").val(),
        $("#OCY14").val(),
         $("#OCY15").val(),
         $("#OCY16").val(),
         $("#OCY17").val(),
        $("#OCY18").val(),
         $("#OCY19").val(),
         $("#OCY20").val(),
         $("#OCY21").val(),
        $("#OCY22").val(),
         $("#OCY23").val(),
         $("#OCY24").val()]
     );
}

function fnClickAddRowToExample() {
    for (var j = 0; j <= i; j++) {
        $('#example').dataTable().fnAddData([
         obj.costCenterEntries[j].costCenterCode,
         obj.costCenterEntries[j].resources,
         obj.costCenterEntries[j].taskDescription,
         obj.costCenterEntries[j].totalBaseProgram,
         obj.costCenterEntries[j].totalOptions]
     );
    }
}

//$.ajax({
//    type: "POST",
//    url: "Default.aspx/OnSubmit",
//    data: dataValue,
//    contentType: 'application/json; charset=utf-8',
//    dataType: 'json',
//    error: function (XMLHttpRequest, textStatus, errorThrown) {
//        alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
//    },
//    success: function (result) {
//        alert("We returned: " + result);
//    }
//});


//$('#btnRegister').click(function () {
//    if (validateRegistration()) {
//        //            $('#btnRegister').
//        $.ajax({
//            type: 'POST',
//            url: '/progsum/progsum',
//            data: $('FORM').serialize(),
//            dataType: 'json',
//            success: function (result) {
//                if (result != '' || result != null) {
//                    fnClickAddRowToExample();
//                    window.location = '/progsum/progsum';
//                }
//                else {
//                    alert(result);
//                    window.location = '/progsum/progsum';
//                }
//            },
//            error: function () {
//                alert("There was a problem getting data. Please try again.");
//            }
//        });
//    }
//});


function tab(tab) {
document.getElementById('tab1').style.display = 'none';
document.getElementById('tab2').style.display = 'none';
document.getElementById('li_tab1').setAttribute("class", "");
document.getElementById('li_tab2').setAttribute("class", "");
document.getElementById(tab).style.display = 'block';
document.getElementById('li_'+tab).setAttribute("class", "active");
}

//$(document).ready(function () {
//    $('#navigation ul a').click(function () {
//        $('#navigation ul a').removeClass('selected');
//        $(this).addClass('selected');
//        $('#content_changer').html('You have selected ' + $(this).html());
//    });
//});