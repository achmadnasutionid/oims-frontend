$(document).ready(function(){
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/supervisor",
        dataType: "json",
        success: function(response){
            var i = 1;
            response.forEach(supervisor => {
                $('#table-content').append(
                    "<tr>" +
                        "<td>" + i + "</td>" +
                        "<td>" + supervisor.nama + "</td>" +
                        "<td>" + supervisor.hp + "</td>" +
                        "<td>" + supervisor.email + "</td>" +
                        "<td>" + 
                            "<a class='btn btn-primary' href='view-supervisor.html?id="+ supervisor.id +"'>View</a>" +
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