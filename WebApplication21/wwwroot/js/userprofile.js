$(document).ready(function () {

    $("#instaimg").click(function () {
        $("#slider").slideUp()
        $("#insta15").slideDown()
    });
    $('.trigger').click(function () {

        $('#slider').slideDown();
        /*  $("#block").slideUp()
          $("#image").hide()*/
    });
    $("#krest").click(function () {
        $("#slider").slideUp()
    });

    var t = true;



    $("#jjj").click(function () {

        if (t) {
            $("#jjj").css("background-color", "#3bd950")
            $("#jjj").text("Seve")
            $("#image").show();
            $("#block").slideDown()
            t = false;
        }
        else {
            $("#jjj").css("background-color", "#007bff")
            $("#jjj").text("Edit")
            $("#image").hide();
            $("#block").slideUp()
            t = true;
        }


        //$('#block').toggle()

    });

    var t1 = true;
    $("#btn").click(function () {
        if (t1) {
            $("#btn").css("background-color", "#3bd950")
            $("#btn").text("Direct on")
            t1 = false
        }
        else {
            $("#btn").css("background-color", "#007bff")
            $("#btn").text("Direct off")
            t1 = true
        }
        $(".popl").toggle();
    })
    $("#addlink").click(function () {
        $("#slider").slideDown()
    })
    $("#send").click(function () {

        var imagelink = $("#link_icon").attr("src");
        var username = $("#usr").val();
        $.ajax({
            method: 'get',
            url: '../api/ajax',
            data: { 'imagelink': imagelink, 'username': username },
            success: function (data) {
                alert(data)
            }
        })
    
    

   

});

});



