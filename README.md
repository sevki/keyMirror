KeyMirror
=========
fork of https://github.com/STRML/keyMirror

Create an object with values equal to its key names.

I thought `react/lib/keyMirror` was useful and wanted to reuse it without any dependencies.

This is not my code, this is property of Facebook.

Usage
-----

`meteor add sevki:keymirror`

```javascript
var COLORS = keyMirror({blue: null, red: null});
var myColor = COLORS.blue;
var isColorValid = !!COLORS[myColor];
```

The last line could not be performed if the values of the generated enum were
not equal to their keys.

Input:  `{key1: val1, key2: val2}`

Output: `{key1: key1, key2: key2}`
