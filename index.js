const app = require('./app')

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('server')} corriendo en puerto: ${app.get('port')}`)
})