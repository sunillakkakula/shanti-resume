# [Shanti - Resume using React JS + MUI]

Material-UI & ReactJS based Landing Pages Kit made with [Material UI's](https://material-ui.com/?ref=maccarian-agency) components, [React](https://reactjs.org/?ref=maccarian-agency). 

## Built with

- React
- Material-UI
- React Scripts


## Folder structure

In the root folder there are 4 folders:
- **pages** *The NextJS & GatsbyJS pre-rendered pages are located under this folder. If you are not using NextJS or GatsbyJS you may delete or ignore the `pages` folder*
- **plugins** *The GatsbyJS custom plugins are located under this folder. If you are not using GatsbyJS you may delete or ignore the `plugins` folder*
- **public** *Here are the public assets, images and `index.html` file. Note that you don't need `index.html` file if you are using NextJS or GatsbyJS versions. Also note, that when running GatsbyJS build scripts the `index.html` file will be overwritten. If you want to recover the file copy the content of `_index.html` and past into `index.html`*
- **src** *Here is the main business logic of the theme.*
- **|----assets**
- **|----common**
- **|----components** *The reusable and stand-alone components are stored here, by following [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)*
- **|----|----atoms** *These are small functional components that are not using any other atomic components*
- **|----|----molecules** *Tese are those functional components which have dependencies from other atoms*
- **|----|----organisms** *These are the functional components that are using other molecules and atoms*
- **|----layouts**
- **|----|----Main** *The main layout: header navigation, the main container and footer part*
- **|----|----Minimal** *The minimal layout*
- **|----theme** *In this folder there are overrides of the default color palette and typography coming from MUI*
- **|----views** *All the views/pages that are available. Here are the combination and composition of re-usable components and pages representations.*
- **|----App.js** *This is the main starting point file, which instantiates React router and renders the application views. If you are not using react-scripts you may delete or ignore the `App.js` file*
- **|----serviceWorker.js** *React Scripts specific file. If you are not using react-scripts you may delete or ignore the `serviceWorker.js` file*

## Quick start with React Scripts

- Install dependencies: `npm install`
- Start the server: `npm run start`
- Build on production: `npm run build`

## Instalation of images

In order to not overload the theme size with the static images we hosted them into a different git repository and put them as a dependency of the theme which is being installed when doing `npm i` and being copied from `node_modules` into the `public/assets/images` folder during `npm postinstall`
The images will be deleted from `public/assets/images` folder and will be fetched again from remote git repository every time you do `npm i`

*First you need to do the following, before starting to modify/customize the theme and also images based on your app/business needs:*

- Download images manually from https://github.com/gevorgmakaryan/thefront-assets
- Copy the `images` folder and paste into the `public/assets` folder
- Remove the `public/assets/images` in `.gitignore` file
- Open the `package.json` file and remove `assets` and `postinstall` scripts
- Remove `thefront-assets` from the `dependencies` in `package.json` file

## Run the style guide

- `npm run styleguide`

## MUI Documentation

The full documentation for the React Material Kit can be found [here](https://material-ui.com?ref=maccarian-agency).

## Free Updates and Support

No matter how well documented and built something is, sometimes you just need a little help! That’s why we make ourselves available to help you anytime, just contact our [support](hi@maccarianagency.com) email. We’re also planning tons of updates! In addition to keeping theFront up to date with Material UI's core and any necessary patches, we’ll be adding new features regularly over the coming months!

- [Contact us via email](hi@maccarianagency.com)

## Contact Us

- Email Us: hi@maccarianagency.com
- [Follow us on Linkedin](https://www.linkedin.com/company/maccarian)
- [Follow us on Instagram](https://www.instagram.com/maccarian/)
- [Follow us on Facebook](https://facebook.com/maccarian.agency/)
