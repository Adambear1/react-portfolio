const Post = require("./Portfolio");
require("dotenv").config();
Portfolio.bulkCreate([
  {
    name: "Custom MP3 Player",
    description:
      "Music playing application with the ability to pause, ski, flashforward, and rewind songs. Comes with preloaded songs and album covers",
    learningExp: [
      "Front end development in HTML & CSS",
      "Manipulating music time through DOM and UX",
      "Lyrics API & parsing/display to coordinance of song",
      "CSS, media and motion queries",
    ],
    githubCode: "https://github.com/abirgenheier/MP3-Player",
    githubRepo: "https://abirgenheier.github.io/MP3-Player/",
    type: "frontend",
  },
]);
