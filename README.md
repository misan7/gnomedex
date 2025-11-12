## 🌳🏡 Brastlewark Town 🏠🌳

This repo contains a Gnome searcher to make easier the life of the heroes that need to relax and buy some stuff in Brastlewark, the gnome town.

### First view

You can open the app in your browser by clicking on the next link: [Open me!](https://brastlewark-town.herokuapp.com/)

### Install

**1/** First of all, _clone_ this repository.

**2/** _Run the command_ `npm install` to install dependencies.

**3/** After that, _run_ `npm start` to start the local server. This will _open a window_ on your main browser. If not, open http://localhost:3000/.

### Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

### Tech Stack

- **React 18** - UI framework
- **React Scripts 5.0.0** - Build tool and dev server
- **Sass** - CSS preprocessing
- **Webpack** - Module bundler

### Structure

This web was created using `create-react-app`.
In the folder **public**, you will find the manifest and favicon.

The **src** folder contains the file **App.js** that is where the magic happens, in other words, where I load the _components_, _SCSS_ styles and the _API_. It uses React Hooks (useState, useEffect) for state management.

Inside the folder src and from top to bottom, you can find the **api** where I fetch the data. The **components** folder with a Header.js file where I filter the gnomes by profession and search name; Cards.js to show basic information of all gnomes distributed in cards; Modal.js to show basic characteristics for every gnome; and an index.js where I load this three components, and send them to App.js.

I used three _fonts_: 'SF Display' (bold and regular) and 'Sigmar One'(regular). These fonts are loaded in the fonts.scss file, inside styles/assets/fonts.scss, using _font-face_.

In the **folder** images, I loaded all the images that appear on the modal and logo. All the images are SVG to make web weigh less.

Finally, in **styles** folder, is where I decided to put together all SCSS files by components. In assets, you would find a `_mixins.scss` file that I used to create SCSS helper functions for colors and fonts. The `getColor()` function retrieves colors from the palette. And the file `color-palette.scss` contains color variables that I used for styling.

### Available Scripts

- `npm start` - Start the development server at http://localhost:3000
- `npm build` - Create a production build
- `npm test` - Run tests with Jest
