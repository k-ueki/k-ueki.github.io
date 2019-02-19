$(function(){
    $(document).on("click",".about",function(){
        var modal_title = $(this).text();
        var st = document.getElementsByClassName("modal-wrapper").style(); 
        console.log(modal_title);
        console.log(st);
        $(".modal-title").text(modal_title);
        alert("OK");
    })
})