$(function(){
    $(document).on("click",".about",function(){
        var modal_title = $(this).text();
        console.log(modal_title);
        $(".modal-title").text(modal_title);
        var st = document.getElementsByClassName("modal-wrapper"); 
        console.log(st.style.display);

        alert("OK");
    })
})