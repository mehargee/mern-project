const mongoos = require('mongoose');


//Database Altas connection
const DB = process.env.DATABASE;

mongoos.connect(DB).then(() => {
    console.log(`DB connection Sucessfull..!`);
}).catch((e) => {
    console.log(`no connetion`);
});
