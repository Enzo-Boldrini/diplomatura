var moment = require("moment");
moment.locale("es"); //idioma
console.log("Naci " + moment("27/10/97", "DD/MM/YYYY").fromNow())