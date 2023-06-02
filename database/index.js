const mongoose = require( 'mongoose' )
module.exports.init = function ()
{
  let url = process.env.MONGO_URL;
  mongoose.connect( url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } )
    .then( () =>
    {
      console.log( "database connected" );
    } )
    .catch( ( err ) =>
    {
      console.log( err );
    } );
};