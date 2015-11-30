// Values
var minorSecond   = 1.067;
var majorSecond   = 1.125;
var minorThird    = 1.2;
var majorThird    = 1.25;
var perfectFourth = 1.333;
var augFourth    = 1.414;
var perfectFifth  = 1.5;
var minorSixth    = 1.6;
var goldenSection = 1.618;
var majorSixth    = 1.667;
var minorSeventh  = 1.778;
var majorSeventh  = 1.875;
var octave        = 2;
var majorTenth    = 2.5;
var majorEleventh = 2.667;
var majorTwelfth  = 3;
var doubleOctave  = 4;

console.log(msFunction(22));

// Function
function msFunction(v, base, ratio) {
  return v;
};

// @function ms-function($v: 0, $base: false, $ratio: false, $thread: false, $settings: $modularscale) {

//   // Parse settings
//   $ms-settings: ms-settings($base,$ratio,$thread,$settings);
//   $base: nth($ms-settings, 1);
//   $ratio: nth($ms-settings, 2);

//   // Render target values from settings.
//   @if unit($ratio) != '' {
//     $ratio: ms-target($ratio,$base)
//   }

//   // Fast calc if not multi stranded
//   @if(length($base) == 1) {
//     @return ms-round-px(pow($ratio, $v) * $base);
//   }

//   // Create new base array
//   $ms-bases: nth($base,1);

//   // Normalize base values
//   @for $i from 2 through length($base) {
//     // initial base value
//     $ms-base: nth($base,$i);
//     // If the base is bigger than the main base
//     @if($ms-base > nth($base,1)) {
//       // divide the value until it aligns with main base.
//       @while($ms-base > nth($base,1)) {
//         $ms-base: $ms-base / $ratio;
//       }
//       $ms-base: $ms-base * $ratio;
//     }
//     // If the base is smaller than the main base.
//     @elseif ($ms-base < nth($base,1)) {
//       // pump up the value until it aligns with main base.
//       @while $ms-base < nth($base,1) {
//         $ms-base: $ms-base * $ratio;
//       }
//     }
//     // Push into new array
//     $ms-bases: append($ms-bases,$ms-base);
//   }

//   // Sort array from smallest to largest.
//   $ms-bases: ms-sort($ms-bases);

//   // Find step to use in calculation
//   $vtep: floor($v / length($ms-bases));
//   // Find base to use in calculation
//   $ms-base: round(($v / length($ms-bases) - $vtep) * length($ms-bases)) + 1;

//   @return ms-round-px(pow($ratio, $vtep) * nth($ms-bases,$ms-base));
// }