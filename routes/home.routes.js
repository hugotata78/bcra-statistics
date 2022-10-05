const { Router } = require('express')
const app = require('../app')
const pack = require('../package.json')
const router = Router()

router.get('/', (req,res)=>{
    res.json({
        name:pack.name,
        author:pack.author,
        license:pack.license,
        description:pack.description,
        version:pack.version
    })
})

module.exports = router