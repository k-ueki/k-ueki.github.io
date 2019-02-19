$(function(){
    $("#header").load("../templates/header.html");
    $(document).on("click",".about",function(){
        var modal_title = $(this).text();
        $(".modal-title").text(modal_title);
        var modal_content = document.getElementsByClassName("modal-container");
        $(".modal-wrapper").append(modal_content);
        var inner = "<h3>Hi I'm ueki!</h3>";
        $(".modal-inner").append(inner);
        var test = document.getElementsByClassName("modal-inner");
        console.log(test);
        //$(".modal-wrapper").css("display","block");
        $(".modal-wrapper").fadeIn();
    })

    $(document).on("click",".back",function(){
        $(".modal-wrapper").fadeOut();
    })


    $(".port").click(function(){
        location.href="../templates/port.html";
    })
})