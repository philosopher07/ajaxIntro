// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
// globals var
const PORT = 5000;
// uses
app.use( bodyParser.urlencoded({extended : true}))
app.use( express.static( 'server/public' ) );
// spin up server
app.listen(PORT, ()=> {
    console.log('server up on:', PORT );
}); // end server up
// get route
const people = ['Heather', 'Heather', 'Halima'];

app.get( '/tester', (req, res)=>{
    console.log('in /tester GET');// will show up in terminal
    res.send(people);
    })// end GET

app.post( '/tester', (req, res) => {
        console.log('got to POST /tester', req.body);// req.body came from body-parser. came from data in ajax
        people.push(req.body.name)
        console.log(people);        
        res.send('woof');
}); // end post
