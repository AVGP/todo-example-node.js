$(document).ready(function initEventHandlers() {
    $("#todos li input").on("change", function(event) {
        var listItem = $(this).parent();
        listItem.toggleClass("done");
        console.log($(this).val());
    });
});