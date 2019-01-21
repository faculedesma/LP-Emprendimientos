# React Start-up

A starter kit for rapid application development using React and Ant Design framework.

## Get Started

1. **Before begin**
  * Install [Git](https://git-scm.com/downloads)
  * Install [Node 4.0.0 or greater](https://nodejs.org)
  * [Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor) to assure hot reloading works properly.
  * Complete the steps below for your operating system:

        ### macOS
    
        * Install [watchman](https://facebook.github.io/watchman/) via `brew install watchman` or fswatch via `brew install fswatch` to avoid [this issue](https://github.com/facebook/create-react-app/issues/871) which occurs if your macOS has no appropriate file watching service installed.
    
        ### Linux
    
        * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).
    
            `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.
    
        ### Windows
        
        * **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
        * **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows.
        
          [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler.
          
          If you already have Visual Studio installed:
          Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop.
          The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

2. **Clone the project**  
  
   `git clone https://github.com/sebarev1989/react-startup.git && cd react-startup`

3. **Install dependencies (first time and when dependencies are updated)**

    `npm install`

4. **Run the example app**

    `npm start -s`

    This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt and linting runs. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

---

## Technologies

This repo includes the following technologies:

* React
* Ant Design
* Redux + Redux DevTools Extension
* Hot Reloading
* Webpack
* Browser Sync
* ESlint

---

## Notes
* At least one reducer is needed.
* PWA support will be implemented in the future.
