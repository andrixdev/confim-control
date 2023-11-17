# Confim Control
Control web app for immersive science talks under a dome

# Version
*See current branch and tag*

# User: Setup
* Install Node (https://nodejs.org/)
* Install npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* Clone this repository on your machine (on GitHub or with Git installed on your machine)
* Run **npm install** in main directory to download dependencies
* Run **node .** in main directory to boot Node server with index.js
* Open *localhost:8082/speaker* in Google Chrome or Mozilla FireFox to open Speaker app
* Open *localhost:8082/assistant* in Google Chrome or Mozilla FireFox to open Assistant app

# Developer: Contributing
* Install Git (https://git-scm.com/downloads)
* Talk to the main developer
* Agree on a cool feature and push commits on a new separate branch
* Test your code (manually)
* Submit a Pull Request, code will be reviewed

# Developer: Compiling LESS into CSS with Visual Studio Code
* Install the Easy LESS extension (by mrcrowl)
* All .less files are automatically compiled to CSS on file save

# Developer: Compiling LESS into CSS without Visual Studio Code
* Install the LESS preprocessor (https://lesscss.org/usage/)
* To update common stylesheet, run **lessc ./sources/css/main.less ./sources/css/main.css** from root directory
* To update assistant stylesheet, run **lessc ./web-assistant-controls/css/main.less ./web-assistant-controls/css/main.css** from root directory
* To update speaker stylesheet, run **lessc ./web-speaker-controls/css/main.less ./web-speaker-controls/css/main.css** from root directory
* Yay
