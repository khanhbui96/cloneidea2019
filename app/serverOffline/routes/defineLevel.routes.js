const router = require('express').Router();
const passport =require('passport');
const controllers = require('../controllers/defineLevel.controllers')
const defineLevelValidate = require('../middlewares/validates/defineLevel.validates');

router.post('/create',defineLevelValidate.create , controllers.create);
router.get('/getAll' , controllers.getAll);
router.post('/delete/:id' , controllers.deleteById);
router.post('/update/:id' , controllers.updateById);
router.post('/find/:id' , controllers.findById);

module.exports = router;

