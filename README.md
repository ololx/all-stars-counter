# all-stars-counter

This is a simple stargazers counter for given users (organizations). The results are displayed as a star with the number of stars for the repositories. 

[![tag](https://img.shields.io/github/v/tag/ololx/all-stars-counter?style=flat&include_prereleases&logo=github)](https://github.com/ololx/all-stars-counter/tags) [![release](https://img.shields.io/github/v/release/ololx/all-stars-counter?style=flat&include_prereleases&logo=github)](https://github.com/ololx/all-stars-counter/releases) [![release_date](https://img.shields.io/github/release-date/ololx/all-stars-counter?style=flat&logo=github)](https://github.com/ololx/all-stars-counter/releases) [![last_commit](https://img.shields.io/github/last-commit/ololx/all-stars-counter?style=flat&logo=github)](https://github.com/ololx/all-stars-counter/commits)

[![codeql_analysis](https://img.shields.io/github/workflow/status/ololx/all-stars-counter/CodeQL?label=CodeQL&logo=github-actions&style=flat)](https://github.com/ololx/all-stars-counter/actions/workflows/codeql-analysis.yml)

[![licence](https://img.shields.io/github/license/ololx/all-stars-counter?style=flat)](LICENCE)

![repo_size](https://img.shields.io/github/repo-size/ololx/all-stars-counter?style=flat&logo=github) ![languages_code_size](https://img.shields.io/github/languages/code-size/ololx/all-stars-counter?style=flat&logo=github) ![languages_count](https://img.shields.io/github/languages/count/ololx/all-stars-counter?style=flat&logo=github) ![languages_top](https://img.shields.io/github/languages/top/ololx/all-stars-counter?style=flat&logo=github)

[![Java Script](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript)](#built-with) [![HTML](https://img.shields.io/badge/HTML-239120?style=flat&logo=html5&logoColor=white)](#built-with) [![CSS](https://img.shields.io/badge/CSS-239120?style=flat&logo=css3&logoColor=white)](#built-with)

---

## 📇 Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#feature)
- [Getting Started](#getting-started)
- [Versioning](#versioning)
- [Authors](#authors)
- [Licensing](#licensing)

##  📖 About

This is a simple stargazers counter for given users (organizations). The results are displayed as a star with the number of stars for the repositories.  It is deployed here https://ololx.github.io/all-stars-counter.

## 📸 Demo

This picture demonstrate the result of counting the stargazers by `all-stars-counter`.

<img src="https://github.com/ololx/all-stars-counter/blob/assets/demo/demo-1.png?raw=true" align="center" width="50%"/>

## 🎚 Features

- Specify the repositories and get the number of stargazers.

### To Do

- ~~For more information on an upcoming development, please read the todo list.~~ No plans.

### Changelog

- For more information on a releases, a features and a changes, please read the [changelog](CHANGELOG.md) notes.

## 🚦 Getting Started

These instructions allow to get a copy of this project and run it on a local machine.

### Installing

In order to install it is quite simple to clone or download this repository.

### Cloning

For the cloning this repository to a local machine, just use the follows link:

```http
https://github.com/ololx/all-stars-counter
```

### Using

To use it is enough to open the `index.html` file in the web-browser.

**It's possible to define the users (organizations) and repositories blacklist (excluded repositories) via `request param`.** 

- To specify the repositories use the param `user`.  *For instance setup folows user: `ololx`, `innopolis-university-java-team`:*

```http
?user=ololx&user=innopolis-university-java-team
```

Live example here https://ololx.github.io/all-stars-counter/?user=ololx&user=innopolis-university-java-team

- To specify the blacklist use the param `exclude_repo`.  *For instance setup the `exclude_repo` for this project :*

```http
?exclude_repo=all-stars-counter
```

Live example here https://ololx.github.io/all-stars-counter/?user=ololx&user=innopolis-university-java-team&exclude_repo=quick-symlink

## 🗒 Versioning

For the versioning is used [Semantic Versioning](http://semver.org/). For the versions available, see the [changelog](CHANGELOG.md) or the tags on this repository.

## ©️ Authors

* **Alexander A. Kropotin** - *Initial work* - [ololx](https://github.com/ololx).

## 🔏 Licensing

This project is unlicensed - see the [lisence](LICENSE) document for details.
