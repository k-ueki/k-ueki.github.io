$(function(){
    $(document).on("click",".about",function(){
        var modal_title = $(this).text();
        $("modal-wrapper").style("display:")
        $(".modal-title").text(modal_title);
    })
})