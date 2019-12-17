const router = require('express').Router();
const passport =require('passport');
const controllers = require('../controllers/command.controllers')


router.post('/create' , controllers.create);
router.get('/getAll' , controllers.getAll);
router.post('/delete/:id' , controllers.deleteById);
router.post('/update/:id' , controllers.updateById);
router.post('/find/:id' , controllers.findById);

module.exports = router;

