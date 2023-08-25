# Confim Control
Web app for immersive science talks under a dome

# Developer : Setup
* Install Node (https://nodejs.org/)
* Install npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* Install Git (https://git-scm.com/downloads)
* Clone this repository on your machine
* Run **node .** in main directory to boot Node server with index.js
* Open *localhost:8082/speaker* in Google Chrome or Mozilla FireFox to open Speaker app
* Open *localhost:8082/assistant* in Google Chrome or Mozilla FireFox to open Assistant app

# Developer : Compiling LESS into CSS
* Install the LESS preprocessor (https://lesscss.org/usage/)
* Run **lessc ./less/main.less ./web-assistant-controls/css/main.css && lessc ./less/main.less ./web-speaker-controls/css/main.css** to compile in both speaker and assistant app directories
* Now your can see your updated CSS
