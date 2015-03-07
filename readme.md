# Modularscale

This is a JavaScript modular scale calculator so you can create and use modular scales in your project. This calculator was built in tandem with the new [modularscale.com](http://modularscale.com/) website both as its calculation engine and as an external tool you can use in your own projects.

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

First, you will want to set up your scale. You can go to [modularscale.com](http://modularscale.com) and click on the `js` tab to generate a config, or define it yourself.

There are two variables that need to be redefined by you, `msBases` is an array of a base, or multiple base values. `msRatios` holds the ratios that your bases will be multiplied by to create your scale.

```js
msBases = [1];
msRatios = [1.5];
```

Now you can use the function `ms()` throughout your project. Pass a number into this function to get the value for that position on the scale. For example, `ms(5)` with the above configuration will return the result `7.594`.

## Ratios

Modular scale includes functions for a number of classic design and musical scale ratios. You can add your own ratios as well.

By default, the variable `msRatios` is set to `1.618`.

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
msRatios = [1.234];
```

You can also pass more than one ratio

```js
msRatios = [1.234, augFourth];
```

### Licence

The MIT License (MIT)

Copyright © 2015 Scott Kellum

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**