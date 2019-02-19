$(function(){
    $(document).on("click",".about",function(){
        var modal_title = $(this).text();
        $(".modal-title").text(modal_title);
        var modal_content = document.getElementsByClassName("modal-container");
        $(".modal-wrapper").append(modal_content);
        var test = document.getElementsByClassName("modal-wrapper");
        console.log(test);
        $(".modal-wrapper").css("display","block");

    })
})