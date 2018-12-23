$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/api/inventory",
        dataType: "json",
        headers: {
            "Content-Type": "application/json"
        },
        success: function(response){
            var i = 1;
            response.forEach(inventory => {
                $("#table-content").append(
                    "<tr>" +
                        "<td>" + i + "</td>" +
                        "<td>" + inventory.nama + "</td>" +
                        "<td>" + inventory.harga + "</td>" +
                        "<td>" + inventory.jumlah + "</td>" +
                        "<td>" + 
                            "<!--detail-inventory-->" +
                            "<!--edit-inventory-->" +
                            "<!--delete-inventory-->" +
                            "<!--print-inventory-->" +
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