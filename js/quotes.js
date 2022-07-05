const quotes = [
  {
    qutoe: "It is kind of fun to do the impossible.",
    author: "Walt Disney",
  },
  {
    qutoe: "There are better starters than me but I’m a strong finisher.",
    author: "Usain Bolt",
  },
  {
    qutoe: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    qutoe: "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    qutoe: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author: "Angelina Jolie",
  },
  {
    qutoe: "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "Martin Luther King, Jr",
  },
  {
    qutoe: "Grind Hard, Shine Hard.",
    author: "Dwayne Johnson",
  },
  {
    qutoe: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
    author: "Estée Lauder",
  },
  {
    qutoe: "There is nothing in the world so irresistibly contagious as laughter and good humor.",
    author: "Charles Dickens",
  },
  {
    qutoe: "Love all, trust a few. Do wrong to none.",
    author: "William Shakespeare",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.qutoe;
author.innerText = todaysQuote.author;



//Math.random() 소수 첫째 자리부터 랜덤으로 지정
//Math.round() 반올림 
//Math.ceil() 올림
//Math.floor() 내림