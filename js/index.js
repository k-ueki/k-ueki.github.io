$(function(){
    $(document).on("click",".about",function(){
        var modal_title = $(this).text();
        console.log(modal_title);
        $("modal-wrapper").style("display:block;")
        $(".modal-title").text(modal_title);
        alert("OK");
    })
})