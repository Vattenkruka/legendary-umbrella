const threadTitles = [];
const threadUrlList = [];

$(document).ready(function () {
    console.log("Document loaded");
    $.ajax({
        url: "https://www.reddit.com/r/choosingBeggars/top.json?limit=10",
        method: "GET",
        success: function (response) {
            console.log();
            for(let i = 0 ; i <= response.data.children.length ; i++){
                threadTitles.push(response.data.children[i].data.title);
                threadUrlList.push(response.data.children[i].data.permalink);
            }
        },
        error: function () {
            console.log("Error: Unable to fetch titles.");
        },
    });
});