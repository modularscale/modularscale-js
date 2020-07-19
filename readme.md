# Modularscale

This is a JavaScript modular scale calculator so you can create and use modular scales in your project. This calculator was built in tandem with the new [modularscale.com](http://www.modularscale.com/) website both as its calculation engine and as an external tool you can use in your own projects.

### Installation

You can install modularscale-js as an NPM or Bower package to include in your project.

*NPM:*

```
$ npm install modularscale-js
```

*Bower:*

```
$ bower install modularscale-js
```

Alternatively you can download the [latest release](https://github.com/modularscale/modularscale-js/releases) and add it to your project.

### Using modularscale-js

First, you will want to set up your scale. You can go to [modularscale.com](http://www.modularscale.com) and click on the `js` tab to generate a config, or define it yourself.

There is a configuration object that contains the settings for modular scale, inside it is an array of bases and the ratio value.

Call the function with either `msFunction(n)` or `ms(n)` where `n` is the point on your scale. You can pass settings in as a second variable.

```js
$modularscale: {
  base: [1],
  ratio: 1.5
};
```

You can add multiple bases by adding values to the array

```js
$modularscale: {
  base: [12,14,16],
  ratio: 1.5
};
```

## Ratios

Modular scale includes functions for a number of classic design and musical scale ratios. You can add your own ratios as well.

By default, the ratio is set to `1.5` (fifth).

<table>

  <tr><th>Variable</th><th>Decimal value</th></tr>

  <tr><td>minorSecond   </td><td> 1.067   </td></tr>
  <tr><td>majorSecond   </td><td> 1.125   </td></tr>
  <tr><td>minorThird    </td><td> 1.2     </td></tr>
  <tr><td>majorThird    </td><td> 1.25    </td></tr>
  <tr><td>perfectFourth </td><td> 1.333   </td></tr>
  <tr><td>augFourth    </td><td> 1.414   </td></tr>
  <tr><td>perfectFifth  </td><td> 1.5     </td></tr>
  <tr><td>minorSixth    </td><td> 1.6     </td></tr>
  <tr><td>goldenSection </td><td> 1.618   </td></tr>
  <tr><td>majorSixth    </td><td> 1.667   </td></tr>
  <tr><td>minorSeventh  </td><td> 1.778   </td></tr>
  <tr><td>majorSeventh  </td><td> 1.875   </td></tr>
  <tr><td>octave        </td><td> 2       </td></tr>
  <tr><td>majorTenth    </td><td> 2.5     </td></tr>
  <tr><td>majorEleventh </td><td> 2.667   </td></tr>
  <tr><td>majorTwelfth  </td><td> 3       </td></tr>
  <tr><td>doubleOctave  </td><td> 4       </td></tr>

</table>

Add your own ratio by setting a variable.

```js
$modularscale: {
  ratio: 1.234
};
```

## Multiple threads

You may notice you can have multiple scales at once on modularscale.com formatted like this:

```js
$modularscale: {
  base: [1],
  ratio: 1.5,
  a: {
    base: [1],
    ratio: 1.2
  }
};
```

To use a scale with the `$modularscale.a` settings pass the settings in `msFunction(n,$modularscale.a)` where `n` is the point on the scale you wish to find a value for. You can break this variable down and pass it through via its own object but it is consolodated in the output of modularscale.com.

### Licence

The MIT License (MIT)

Copyright © 2015 Scott Kellum

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
