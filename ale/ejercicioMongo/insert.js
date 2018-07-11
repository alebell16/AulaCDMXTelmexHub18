let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

client.connect(url, function (err, con) {
    if (err) console.log(err)
    console.log('connected successfully to server')
    
    const db = con.db(dbName)

    db.collection("persona").remove({})
    
    
    db.collection('persona').insert({
        name: 'Pablo',
        lastname: 'Marmol',
        edad: '45',
        mascota:['dinosaurio, foca, pez']
    }, function (err, data){
        console.log(data)
    })
    db.collection('persona').insert({
        name: 'Ximena',
        lastname: 'sariñana',
        edad: '18',
        mascota:['perro, araña, vobora']
    }, function (err, data){
        console.log(data)
    })
    db.collection('persona').insert({
        name: 'Pedro',
        lastname: 'Picapiedra',
        edad: '35',
        mascota: ['mono capuchino, gato, cotorro']
    }, function (err, data){
        console.log(data)
    })
    db.collection('persona').insert({
        name: 'Antonio',
        lastname: 'Brown',
        edad: '22',
        mascota:['ciervo, conejo, zorrillo']
    }, function (err, data){
        console.log(data)
    })
    db.collection('persona').insert({
        name: 'Ricardo',
        lastname: 'Casarez',
        edad: '31',
        mascota: ['colibri, mariposa, sapo']
    }, function (err, data){
        console.log(data)
    })
})