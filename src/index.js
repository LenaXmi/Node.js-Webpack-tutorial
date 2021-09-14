//Дефолтный импорт
import validatePassword from './validate-password.js'

console.log(validatePassword('ghdkjfhgkfg'))
console.log(validatePassword('ghdk'))
//Именованный импорт
import {fetchUserById,updateUserById, x as y} from './api-service.js'

// console.log(fetchUserById)
// console.log(updateUserById)
// console.log(y)

//Импорт всех сущностей
import * as apiService from './api-service.js'
// console.log(apiService)