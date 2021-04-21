const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");

// GET QUOTES FROM API
let apiQuotes = [];

// show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// back up quote
function backUpQuote() {
  loading();
  //pick random quote from array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length + 1)];
  //   check if author is blank.
  if (!quote["author"]) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote["author"];
  }

  //   check quote length/determine fontsize
  if (quote["text"].length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  //set quote, hide loader

  quoteText.textContent = quote["text"];
  complete();
}

async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    backUpQuote();
  } catch (error) {
    //   handle error
    console.log(error);
  }
}

// starter quote
function newQuote() {
  const quote =
    motivationalQuotes[
      Math.floor(Math.random() * motivationalQuotes.length + 1)
    ];

  //   check quote length/determine fontsize
  if (quote["text"].length > 30) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote["text"];
  authorText.textContent = quote["author"];
  complete();
}

// TWITTER BTN
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  // opens new window
  window.open(twitterUrl, "_blank");
}

// EVENT LISTENER

newQuoteBtn.addEventListener("click", newQuote);

twitterBtn.addEventListener("click", tweetQuote);

// on load
function loadQuote() {
  try {
    newQuote();
  } catch {
    getQuotes();
    newQuoteBtn.addEventListener("click", getQuotes);
  }
}

loadQuote();
