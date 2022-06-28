const router = require('express-promise-router')()
const userController = require('../controllers/user.controllers')
const paciController = require('../controllers/paci.controllers')
const consultController = require('../controllers/consult.controllers')

router.get('/user', userController.findAll)
router.get('/user/:id', userController.findById)
router.post('/user', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)
router.post('/loginte', userController.login)
//router.get('/logout', userController.logout) disponivel em 

router.get('/paci', paciController.findAll)
router.get('/paci/:id', paciController.findById)
router.post('/paci', paciController.create)
router.put('/paci/:id', paciController.update)
router.delete('/paci/:id', paciController.delete)
router.post('/loginpa', paciController.login)

router.get('/consult', consultController.findAll)
router.get('/consult/:id', consultController.findById)
router.post('/consult', consultController.create)
router.put('/consult/:id', consultController.update)
router.delete('/consult/:id', consultController.delete)

module.exports = router