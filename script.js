const quoteTag = document.getElementById("quote");
const authorTag = document.getElementById("author");
const quoteButton = document.getElementById("newQuoteBtn");
const loaderTag = document.getElementById("loader");




function fetchQuote() {
    loaderTag.style.display = "block";
    quoteTag.style.display = "none";
    authorTag.style.display = "none";


    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.api-ninjas.com/v1/quotes", true);

    xhr.setRequestHeader("X-Api-Key", "GlZORQdn/SOmjkIMpVht9g==ZbUk3Ok4191NxquW");

    xhr.addEventListener("readystatechange", () => {

        // console.log(xhr.readyState);

        if (xhr.readyState === 4) {

            loaderTag.style.display = "none";

            if (xhr.status === 200) {
                let quoteData = JSON.parse(xhr.responseText);
                console.log(quoteData);
                quoteTag.innerText = `${quoteData[0].quote}`;
                authorTag.innerText = `Author : ${quoteData[0].author}`;

                quoteTag.style.display = "block";
                authorTag.style.display = "block";
            }
        }
    });
    xhr.send();

}

quoteButton.addEventListener("click", fetchQuote);