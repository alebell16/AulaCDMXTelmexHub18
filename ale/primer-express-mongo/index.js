let express = require("express")
let app = express()

app.get('/', function (request, response){
    response.send('hola terricola')
})
app.get('/adios', function (request, response){
    response.send('ADIOS MUNDO CRUEL')
})
app.get('/aiuda', function (request, response){
    response.send('AIIUDAA')
})
app.get('/json', function (request, response){
    let objJson = {
        hola: 'amigos',
        como: ['les', 'ha', 'ido'],
        que: {
            cuenta: 'la mala',
            vida: '?'
        }
    }
    response.send(objJson)
})
app.listen(3000, function (){
    console.log('Example app listening on port 3000!')
})