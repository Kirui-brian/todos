const mongoose = require('mongoose');
module.exports = async()=>{
   try {
       const connection = await mongoose.connect('mongodb://localhost:27017/to-do-app', function () {
           console.log('Connection has been made!');
       })
   } catch (error) {
       console.error('Error starting app:', err.stack);
       process.exit(1);
   }
}