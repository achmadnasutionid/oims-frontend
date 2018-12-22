$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    $("#update-inventory").attr("href", "inventory-update-form.html?id="+id);

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/inventory/id/" + id,
        dataType: "json",
        success: function(response){
            $("#inventory-detail").append(
                "<p>Nama :" + response.nama + "</p>" +
                "<p>Harga:" + response.harga + "</p>" +
                "<p>Jumlah:" + response.jumlah + "</p>" +
                "<p>Deskripsi" + response.deskripsi + "</p>"
            );
        },
        error: function(){
            alert("Error!");
        }
    });
});