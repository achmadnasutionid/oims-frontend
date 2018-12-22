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
                            "<a href="#"><span style="text-decoration: underline;">Detail</span></a>" +
                            "<a href="#"><span style="text-decoration: underline;margin-left: 25px;">Edit</span></a>" +
                            "<a href="#"><span style="text-decoration: underline;margin-left: 25px;">Print</span></a>" +
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

    $(document).on("click", "#delete-inventory", function(){
        var id = $(this).val();
    
        $.ajax({
            type: "DELETE",
            contentType: "application/json",
            url: "/api/inventory/id/" + id,
            success: function(){
                alert("Inventory deleted");
                location.reload();
            },
            error: function(url){
                alert("Error");
            }
        });
    });

});