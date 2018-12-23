$(document).ready(function(){
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/employee",
        dataType: "json",
        success: function(response){
            var i = 1;
            response.forEach(employee => {
                $('#table-content').append(
                    "<tr>" +
                        "<td>" + i + "</td>" +
                        "<td>" + employee.nama + "</td>" +
                        "<td>" + employee.hp + "</td>" +
                        "<td>" + employee.email + "</td>" +
                        "<td>" + 
                            "<!--delete-employee-->" +
                            "<!--edit-employee-->" +
                        "</td>" +
                    "<tr>"
                );
                i++;
            });
        },
        error: function(){
            alert("Error");
        }
    });
});