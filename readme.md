# Chrome extension to change (by click on an icon, to redirect) base url for front-end developers and for QAs.

(from a localhost to a stage, or from a prod to a stage, for example).

## How to adjust (single profile)

- open main.js
- change "rules"

## How to install extension

[https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)

## How to debug:

1. remove/comment 'window.close();' (all)
2. [https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#logs](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#logs)

## Multi Profile

The simplest way is to create a copy of extension. And install several copies with different settings. 

The advance way is to change main.html, to create a few options, and to invoke a different function by click on them.

## Licence

MIT.

## See also:

[https://redketchup.io/favicon-generator](https://redketchup.io/favicon-generator)
