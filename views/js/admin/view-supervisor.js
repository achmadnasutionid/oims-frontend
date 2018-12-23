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
                            "<!--detail-supervisor-->" +
                            "<!--edit-supervisor-->" +
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