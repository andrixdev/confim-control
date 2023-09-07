# Confim Control
Web app for immersive science talks under a dome

# Developer : Setup
* Install Node (https://nodejs.org/)
* Install npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* Install Git (https://git-scm.com/downloads)
* Clone this repository on your machine
* Run **npm install** in main directory to download dependencies
* Run **node .** in main directory to boot Node server with index.js
* Open *localhost:8082/speaker* in Google Chrome or Mozilla FireFox to open Speaker app
* Open *localhost:8082/assistant* in Google Chrome or Mozilla FireFox to open Assistant app

# Developer : Compiling LESS into CSS with Visual Studio Code
* Install the Easy LESS extension (by mrcrowl)
* All .less files are automatically compiled to CSS on file save
* On editing *less/main.less*, you still have to manually update *main.css* in both web-speaker-controls/css/ and web-assistant-controls/css/ with the new *less/main.css* file

# Developer : Compiling LESS into CSS without Visual Studio Code
* Install the LESS preprocessor (https://lesscss.org/usage/)
* Run **lessc ./less/main.less ./less/main.css** to generate the new main CSS file
* In both web-speaker-controls/css/ and in web-assistant-controls/css/, replace *main.css* with the new file 
* Run **lessc ./web-assistant-controls/less/assistant.less ./web-assistant-controls/css/assistant.css && lessc ./web-speaker-controls/less/speaker.less ./web-speaker-controls/css/speaker.css** to generate specific CSS files
* Now your can see your updated CSS
