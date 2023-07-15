const router = require("express").Router();
const {getUser,createUser,deleteUser, loginUser} = require('../controllers/user')
const authentication = require ('../midlewares/authentication.js')

router.post('/login', loginUser)
router.post('/', createUser)
router.get('/',authentication, getUser)
router.delete('/:id', deleteUser)



module.exports = router;