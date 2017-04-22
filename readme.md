# Gulp Starter

This is a very basic package to start compiling.

This avoids concatenating CSS and JS files for HTTP2 Multiplexing.

- Compile SASS/SCSS to single file CSS
- Compile JS to single file JS

<!-- TOC -->

- [Gulp Starter](#gulp-starter)
    - [What's Included](#whats-included)
- [Install](#install)
    - [Commands](#commands)
    - [Change Paths](#change-paths)
- [Integrate into your project](#integrate-into-your-project)

<!-- /TOC -->

## What's Included

In the `src` folder you can add as many SASS/JS/Image files that you want.

```
./dest/vue.min.js               <-- Not Compiled, remove if you like.
./src/scripts/app.js            <-- Main JS File
./src/stylesheets/screen.sass   <-- Main SASS file
```

# Install

You can install with `yarn` (suggested) or the default `npm`.

```sh
yarn install

# or

npm install
```

## Commands

```
gulp          <-- Watch for Changes (Default)

gulp clean    <-- Clean the Build Folder
gulp scripts  <-- Miniffy/Copy Scripts
gulp images   <-- Optimize Images
```

## Change Paths

Open `gulpfile.js` and change the following as you like.

```js
var scripts = {
  src: 'src/scripts/**/*.js',
  dest: 'dest/js',
};

var images = {
  src: 'src/images/**/*',
  dest: 'dest/img'
};

var stylesheets = {
  'src': 'src/stylesheets/**/*',
  'dest': 'dest/css'
};
```

# Integrate into your project

It will be easiest to clone this repository.

```
git clone https://github.com/codezeus/gulp-starter.git
```

(Optional) You can leave your files in the subfolder, or you can move them a directory below.

```
cd gulp-starter
mv dest .. && mv gulpfile.js .. && mv node_modules .. && mv package.json .. && mv src ..
```

We are only moving the necessary files to prevent any overwriting of anything you may have existing.

---

MIT License

&copy; 2017 | CodeZeus
