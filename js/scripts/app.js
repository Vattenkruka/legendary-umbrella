$(document).ready(function () {
    console.log("Document loaded");
    $.ajax({
        url: "https://www.reddit.com/r/choosingBeggars/top.json?limit=10",
        method: "GET",
        success: function (response) {
            console.log(response);
            $("#content").html(response.title);
        },
        error: function () {
            console.log("Error: Unable to fetch titles.");
        },
    });
});