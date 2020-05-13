$(document).ready(function() {
    $(".clickable").click(function() {
        $(".resort-showing").toggle();
        $(".resort-hidden").toggle();
        $("img").show();
    });
});