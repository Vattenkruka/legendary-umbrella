const threadTitles = [];
const threadUrlList = [];
const authors = [];


const contentElement = document.querySelector("#content");
//An api call for getting title, author and threadUrl from the reddit public api
$(document).ready(function () {
    console.log("Document loaded");
    $.ajax({
        url: "https://www.reddit.com/r/choosingBeggars/top.json?limit=10",
        method: "GET",
        success: function (response) {
            console.log("Get method was successful");
            for (let i = 0; i <= response.data.children.length; i++) {
                threadTitles.push(response.data.children[i].data.title);
                threadUrlList.push(response.data.children[i].data.permalink);
                authors.push(response.data.children[i].data.author);

                createCard(threadTitles[i], threadUrlList[i], authors[i]);
            }
        },
        error: function () {
            console.log("Error: Unable to fetch titles.");
        },


    }).done(function (response) {
        console.log('done()', response);
    });

});

// Creates a card for each iteration in the loop for the api call
function createCard(threadTitle, threadUrl, author) {

    const card = document.createElement('div');
    contentElement.appendChild(card);
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
    <h5 class="card-title">${threadTitle}</h5>
    <p class="card-text">${author}</p>
    <a href="https://www.reddit.com/${threadUrl}" class="btn btn-primary">Take me to the post</a>
  </div>
</div>
    `
}
//Fade out
$(document.getElementById("content")).animate({ opacity: 0 }, 2500);
//Fade in
$(document.getElementById("content")).animate({ opacity: 1 }, 2500);







