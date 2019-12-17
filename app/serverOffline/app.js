(
    function() {
        // "use strict";
        // let express = require('express');
        // let app = express();
        // app.get('/', function(req, res) {
        //    res.json('hello khanh bui')
        // });
        // let server = app.listen(3000, function () {
        //     console.log('Express server listening on port ' + server.address().port);
        // });
        // module.exports = app;


        // node_modules
        const express = require('express');
        const cors = require('cors');
        const mongoose = require('mongoose');
        const passport = require('passport');
        const formidableMiddleware = require('express-formidable');

        // my_modules
        const userRoutes =  require('./routes/user.routes');
        const vehicleRoutes = require('./routes/vehicle.routes ');
        const driverRoutes = require('./routes/driver.routes');
        const defineLevelRoutes = require('./routes/defineLevel.routes');
        const commandRoutes = require('./routes/command.routes');
        const motoBikeRoutes = require('./routes/motoBike.routes')
        // connect_db
        mongoose.set('useFindAndModify', false);
        mongoose.connect('mongodb://localhost/toolVt', {
        keepAlive: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
        })


        const app = express();
        const port = 3000;
        require('./configs/passport')(passport);
        app.use(cors());
        app.use(formidableMiddleware({
            encoding: 'utf-8',
            uploadDir:'/home/khanhbui/Desktop/toolVt/client/src/components/elements',
            multiples: true, // req.files to be arrays of files
        }))
        app.get('/', (req, res)=>{
        res.send('hello khanh bui')
        })
        app.use('/api/users', userRoutes);
        app.use('/api/vehicles', vehicleRoutes);
        app.use('/api/drivers', driverRoutes);
        app.use('/api/defineLevels', defineLevelRoutes);
        app.use('/api/commands', commandRoutes);
        app.use('/api/motoBikes', motoBikeRoutes);

        app.listen(port, ()=>{
            console.log(`Server is listening on ${port}`)
        });
        module.exports = app;
    }()
);