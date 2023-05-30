const cors = require('cors');
const app = express();

app.get('/hello_world',(req,res)=>{
    return res.status(200).send('Hello_World');
})

exports.app = functions.https.onRequest(app);
