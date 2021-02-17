# The Lazy Media API

Unofficial The Lazy Media Api

![Satya Wikananda's card name](https://cardivo.vercel.app/api?name=The%20Lazy%20Media%20Api&description=Unofficial%20The%20Lazy%20Media%20Api&image=https://github.com/NicolaDonoastro/The-Lazy-Media-api/blob/main/src/assets/tlmLogo.jpg?raw=true&backgroundColor=%23f4f1f2&fontColor=%230B090A)

### Usage
1. Clone this repository
    ```bash
    git clone https://github.com/NicolaDonoastro/The-Lazy-Media-api.git
    ```
2. Install dependecies (`yarn`)
3. Start the development environment
    ```bash
    yarn dev
    ```
4. visit http://localhost:3001/api


### Documentation

| Field | Description |
| ------ | ----------- |
| key   | is a unique key used to access detail endpoint |
| page  | load a next of data |

### Endpoint Usage

**Base Url** : `https://the-lazy-media-api.vercel.app/`


----
* `Detail News`

```
/api/detail/[key]
```

* `example`

```
/api/detail/2021/01/28/balan-wonderworld-preview
```
----



* `games news`

```
/api/games?page=1
```

* `games console news`

```
/api/games/console-game?page=1
```

* `e-sport news`

```
/api/games/e-sport/?page=1
```

* `update game news`

```
/api/games/news/?page=1
```

* `lazy talk`

```
/api/games/lazy-talk?page=1
```


* `Pc Games`

```
/api/games/pc?page=1
```


* `Game Review`

```
/api/games/review?page=1
```
----


* `tech news`

```
/api/tech?page=1
```


* `tech cranky-lounge`

```
/api/tech/cranky-lounge?page=1
```

* `tech news update`

```
/api/tech/news?page=1
```

* `tech setup`

```
/api/tech/setup?page=1
```

* `tech recommend`

```
/api/tech/recommend?page=1
```

* `tech review`

```
/api/tech/review?page=1
```

* `tech tip`

```
/api/tech/tip?page=1
```

----

* `search`

```
/api/search?search=gta
```

----
### Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request

### Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/NicolaDonoastro/The-Lazy-Media-api/issues) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/NicolaDonoastro/The-Lazy-Media-api/issues). Please include sample queries and their corresponding results.

### Showcase

App Showcase that use this API (you can add your app by edit this readme)

🔧 Still On Progress
