<a name="readme-top"></a>

<h1 align="center">
  <br>
  Quad
  <br>
</h1>

<h4 align="center">
Rewrite of <a href="https://github.com/jackdeadman/quad">Quad-Theme</a> 
<br>
Designed For Elite Hackers
</h4>

<p align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#build-from-source">Build From Source</a> •
  <a href="#development">Development</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#credit">Credits</a> •
  <a href="#license">License</a>
</p>

![screenshot](screenshot.png)

<p align="center"><a href="https://parham-dev27.github.io/Quad/">Live Version</a></p>

## Installation

> **Note**:
> This is a theme for <a href="https://github.com/MerkeX/Lightdm-webkit2-greeter" target="_blank">Lightdm-webkit2-greeter</a>, therefore that must be installed.

1. Download the [latest release](https://github.com/parham-dev27/Quad/releases)
1. Extract using: `tar -xzf Quad.tgz`
1. `cp -r quad /usr/share/lightdm-webkit/themes/`
1. Set lightdm greeter session to webkit2 using:
    ```sh
    sudo sed -i 's/^\(#?greeter\)-session\s*=\s*\(.*\)/greeter-session = lightdm-webkit2-greeter #\1/ #\2g' /etc/lightdm/lightdm.conf
    ```
1. Set `quad` as the default theme using:
    ```sh
    sudo sed -i 's/^webkit_theme\s*=\s*\(.*\)/webkit_theme = quad #\1/g' /etc/lightdm/lightdm-webkit2-greeter.conf
    ```

## Build From Source

> **Note**:
> Node modules must be installed.
> If They are not installed, install them using `npm install`

1. `git clone https://github.com/parham-dev27/Quad`
1. `npm run build`

## Development

> **Note**:
> Node modules must be installed.
> If They are not installed, install them using `npm install`

1. `npm run dev`

-   This will start a webserver: `http://localhost:8000`
-   The webpage will automatically update on changes made to the source files.

### Built with:

-   [![Javascript][js]][js]
-   [![Node][node.js]][node-url]
-   [![NPM][npm]][npm-url]
-   [![SCSS][scss]][scss]
-   [![Gulp][gulp]][gulp-url]

## Roadmap

-   [x] Rewrite in SCSS
-   [ ] Dynamically generated distribution logo
-   [ ] Add a way to switch between DE/WM
    > **Feel free to suggest/create new features** #good-first-issue

## Credits

-   This is a rewrite of the original <a href="https://github.com/jackdeadman/quad">Quad-Theme</a>.
-   Special thanks to <a href="https://github.com/jackdeadman">Jack Deadman</a> for the original code.

## License

MIT

---

> GitHub [@parham-dev27](https://github.com/parham-dev27) &nbsp;&middot;&nbsp;
> Github [@jackdeadman](https://github.com/jackdeadman)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- IMG -->

[contributors-shield]: https://img.shields.io/github/contributors/parham-dev27/Quad.svg?style=for-the-badge
[contributors-url]: https://github.com/parham-dev27/Quad/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/parham-dev27/Quad.svg?style=for-the-badge
[forks-url]: https://github.com/parham-dev27/Quad/network/members
[stars-shield]: https://img.shields.io/github/stars/parham-dev27/Quad.svg?style=for-the-badge
[stars-url]: https://github.com/parham-dev27/Quad/stargazers
[issues-shield]: https://img.shields.io/github/issues/parham-dev27/Quad.svg?style=for-the-badge
[issues-url]: https://github.com/parham-dev27/Quad/issues
[license-shield]: https://img.shields.io/github/license/parham-dev27/Quad.svg?style=for-the-badge
[license-url]: https://github.com/parham-dev27/Quad/blob/master/LICENSE.txt
[npm]: https://img.shields.io/badge/npm-000000?style=for-the-badge&logo=npm&logoColor=red
[npm-url]: https://www.npmjs.com/
[node.js]: https://img.shields.io/badge/node-darkgreen?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en
[gulp]: https://img.shields.io/badge/gulp-35495E?style=for-the-badge&logo=gulp&logoColor=4FC08D
[gulp-url]: https://gulpjs.com/
[scss]: https://img.shields.io/badge/SCSS-bf4080?style=for-the-badge&logo=sass&logoColor=white
[scss]: https://sass-lang.com/documentation/syntax/
[js]: https://img.shields.io/badge/Javascript-4A4A55?style=for-the-badge&logo=javascript&logoColor=yello
[js]: https://developer.mozilla.org/en-US/docs/Web/javascript
