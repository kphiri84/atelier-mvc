const express = require('express');
const app = express();
const router = express.Router();
const routes = require( './routes/index') ;

app.use('/posts', routes);
app.use('/posts/new', routes);
app.use('/posts/:id/edit', routes);
app.use('/', router);

app.set('views', './views'); 
app.set('view engine', 'pug');

router.get('/', (req, res) => {
    res.send('Hello World!')
    });


app.listen(3002, () => {
    console.log('Example app listening on port 3002!')
    });