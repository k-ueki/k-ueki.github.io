$(function(){
    $(document).on("click",".about",function(){
        var modal_title = $(this).text();
        $(".modal-title").text(modal_title);
        var modal_content = document.getElementsByClassName("modal-container");
        $(".modal-wrapper").append(modal_content);
        var test = document.getElementsByClassName("modal-wrapper");
        console.log(test);
        var inner = "<h3>Hi I'm ueki!</h3>";
        $("modal-inner").append(inner);
        //$(".modal-wrapper").css("display","block");
        $(".modal-wrapper").fadeIn();
    })

    $(document).on("click",".back",function(){
        $(".modal-wrapper").fadeOut();
    })
})