console.log('hi');
const sportsQuotes = ["'I don\'t count my situps. I only start counting once it starts hurting.' - Muhammad Ali", "'Cancer can take away all my physical abilities. It cannot touch my mind, it cannot touch my heart and it cannot touch my soul. And those three things are going to carry on forever.' - Jimmy Valvano", "'I\'ve failed over and over again in my life. And that is why I succeed' - Michael Jordan", "'The only way to prove you are a good sport is to lose.' - Ernie Banks", "'There may be people that have more talent than you, but there\'s no excuse for anyone to work harder than you do.' - Derek Jeter", "'If you fail to prepare, you\'re prepared to fail.' - Mark Spitz", "'The road to Easy Street goes through the sewer.' - John Madden", "'Stubbornness usually is considered a negative; but I think that trait has been a positive for me.' - Cal Ripken, Jr", "'Wisdom is always an overmatch for strength.' - Phil Jackson", "'Never say never because limits, like fears, are often just an illusion.' - Michael Jordan"];
const randomNumber = Math.floor(Math.random() * sportsQuotes.length);

const generateFunction = () => {
  console.log(sportsQuotes[randomNumber]);
  return sportsQuotes[randomNumber];
};

generateFunction();

const container = document.getElementById('quote-container');
function quoteGenerator () {
  let randomNum = Math.floor(Math.random() * sportsQuotes.length);
  container.innerText = sportsQuotes[randomNum];
}