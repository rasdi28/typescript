"use strict";
//enum
// numeric enums
// enum Month {
//     JAN = 1,
//     FEB,
//     MAR,
//     APR,
//     MAY
// }
// console.log (Month)
//STRING ENUM
var Month;
(function (Month) {
    Month["JAN"] = "januari";
    Month["FEB"] = "februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MEI"] = "Mei";
})(Month || (Month = {}));
console.log(Month.MAR);
