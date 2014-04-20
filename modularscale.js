var msValue = 0;
var msBases = 1;
var msRatios = (1+ Math.sqrt(5))/2;

// Unique via http://jsfiddle.net/gabrieleromanato/BrLfv/
var msUnique = function(origArr) {
    var newArr = [],
        origLen = origArr.length,
        found, x, y;

    for (x = 0; x < origLen; x++) {
        found = undefined;
        for (y = 0; y < newArr.length; y++) {
            if (origArr[x] === newArr[y]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newArr.push(origArr[x]);
        }
    }
    return newArr;
}

// Main function
function ms(value, bases, ratios) {

  if (typeof value === 'string') {
    value = 1;
  }
  if (value == undefined) {
    value = msValue;
  }
  if (bases == undefined) {
    bases = msBases;
  }
  if (ratios == undefined) {
    ratios = msRatios;
  }

  // Error hangling
  if (bases <= 0) {
    bases = 1;
  }
  if (typeof Math.abs(bases[0]) != 'number') {
    bases = 1;
  }

  // Make arrays
  var bases = (''+bases).split(',');
  var ratios = (''+ratios).split(',');

  // Seed return array
  var r = [];

  for (var ratio = 0; ratio < ratios.length; ratio++) {
    for (var base = 0; base < bases.length; base++) {

      // Seed list with an initial value
      // r.push(bases[base]);

      // Find values on a positive scale
      if (value >= 0) {
        // Find lower values on the scale
        var i = 0;
        while((Math.pow(ratios[ratio], i) * bases[base]) >= bases[0]) {
          r.push(Math.pow(ratios[ratio], i) * bases[base]);
          i--;
        }

        // Find higher possible values on the scale
        var i = 0;
        while(Math.pow(ratios[ratio], i) * bases[base] <= Math.pow(ratios[ratio], value + 1) * bases[base]) {
          r.push(Math.pow(ratios[ratio], i) * bases[base]);
          i++;
        }
      } else {
        // Find values on a negitve scale
        var i = 0;
        while((Math.pow(ratios[ratio], i) * bases[base]) <= bases[0]) {
          r.push(Math.pow(ratios[ratio], i) * bases[base]);
          i++;
        }

        // // Find higher possible values on the scale
        var i = 0;
        while((Math.pow(ratios[ratio], i) * bases[base]) >= (Math.pow(ratios[ratio], value - 1) * bases[base])) {
          if (Math.pow(ratios[ratio], i) * bases[base] <= bases[0]) {
            r.push(Math.pow(ratios[ratio], i) * bases[base]);
          }
          i--;
        }
      }
    }
  }

  r = msUnique(r.sort(function(a,b) { return a - b;}));

  // reverse array if value is negitive
  if(value < 0) {
    r = r.reverse();
  }

  return r[Math.abs(value)];
}