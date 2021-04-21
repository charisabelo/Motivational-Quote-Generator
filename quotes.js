const motivationalQuotes = [
  {
    text: "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    author: "Walt Disney",
  },
  {
    text:
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    author: "Winston Churchill",
  },
  {
    text:
      "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    author: "Unknown",
  },
  {
    text: "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
    author: "Vince Lombardi",
  },
  {
    text:
      "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    author: "Steve Jobs",
  },
  {
    text:
      "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    author: "Rob Siltanen",
  },
  {
    text:
      "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    author: "Og Mandino",
  },
  {
    text:
      "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.",
    author: "Mohnish Pabrai",
  },
  {
    text: "We May Encounter Many Defeats But We Must Not Be Defeated.",
    author: "Maya Angelou",
  },
  {
    text:
      "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
    author: "Johann Wolfgang Von Goethe",
  },
  {
    text:
      "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?",
    author: "Brian Tracy",
  },
  {
    text: "We Generate Fears While We Sit. We Overcome Them By Action.",
    author: "Dr. Henry Link",
  },
  {
    text: "Whether You Think You Can Or Think You Can’t, You’re Right.",
    author: "Henry Ford",
  },
  {
    text:
      "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.",
    author: "Helen Keller",
  },
  {
    text:
      "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
    author: "Hasidic Proverb",
  },
  {
    text:
      "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Creativity Is Intelligence Having Fun.",
    author: "Albert Einstein",
  },
  {
    text:
      "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.",
    author: "Don Zimmer",
  },
  {
    text: "Do What You Can With All You Have, Wherever You Are.",
    author: "Theodore Roosevelt",
  },
  {
    text:
      "Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.",
    author: "Brian Tracy",
  },
  {
    text: "You Are Never Too Old To Set Another Goal Or To Dream A New Dream.",
    author: "C.S. Lewis",
  },
  {
    text: "To See What Is Right And Not Do It Is A Lack Of Courage.",
    author: "Confucius",
  },
  {
    text: "Reading Is To The Mind, As Exercise Is To The Body.",
    author: "Brian Tracy",
  },
  {
    text:
      "Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.",
    author: "Brian Tracy",
  },
  {
    text:
      "The Future Belongs To The Competent. Get Good, Get Better, Be The Best!",
    author: "Brian Tracy",
  },
  {
    text:
      "For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.",
    author: "Jack Canfield",
  },
  {
    text:
      "Things Work Out Best For Those Who Make The Best Of How Things Work Out.",
    author: "John Wooden",
  },
  {
    text: "A Room Without Books Is Like A Body Without A Soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    text:
      "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    text:
      "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    author: "Mary Kay Ash",
  },
  {
    text:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "It’s hard to beat a person who never gives up.",
    author: "Babe Ruth",
  },
  {
    text:
      "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    author: "Michele Ruiz",
  },
  {
    text:
      "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
    author: "Arianna Huffington",
  },
  {
    text:
      "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.",
    author: "Joss Whedon",
  },
  {
    text:
      "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.",
    author: "William W. Purkey",
  },
  {
    text:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    author: "Neil Gaiman",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author: "Helen Keller",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text:
      "It’s no use going back to yesterday, because I was a different person then.",
    author: "Lewis Carroll",
  },
  {
    text:
      "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
    author: "Socrates",
  },
  {
    text:
      "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
    author: "Eleanor Roosevelt",
  },
  {
    text:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama XIV",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text:
      "The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.",
    author: "Unknown",
  },
  {
    text:
      "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    author: "Unknown",
  },
  {
    text: "Impossible is just an opinion.",
    author: "Paulo Coelho",
  },
  {
    text: "Your passion is waiting for your courage to catch up.",
    author: "Isabelle Lafleche",
  },
  {
    text: "Hold the vision, trust the process.",
    author: "Unknown",
  },
  {
    text:
      "People who wonder if the glass is half empty or full miss the point. The glass is refillable.",
    author: "Unknown",
  },
  {
    text:
      "No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.",
    author: "Jaymin Shah",
  },
  {
    text:
      "Things may come to those who wait, but only the things left by those who hustle.",
    author: "Abraham Lincoln",
  },
  {
    text:
      "Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.",
    author: "K’wan",
  },
  {
    text: "Without hustle, talent will only carry you so far.",
    author: "Gary Vaynerchuk",
  },
  {
    text:
      "Work like there is someone working twenty four hours a day to take it away from you.",
    author: "Mark Cuban",
  },
  {
    text: "Hustle in silence and let your success make the noise.",
    author: "Unknown",
  },
  {
    text:
      "Some people want it to happen, some wish it would happen, others make it happen.",
    author: "Michael Jordan",
  },
  {
    text: "Very often, a change of self is needed more than a change of scene.",
    author: "A.C. Benson",
  },
  {
    text: "It’s not the load that breaks you down, it’s the way you carry it.",
    author: "Lou Holtz",
  },
  {
    text: "Don't Let Yesterday Take Up Too Much Of Today.",
    author: "Will Rogers",
  },
];

// console.log(motivationalQuotes.length);
