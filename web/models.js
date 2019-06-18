module.exports = (config, MongoClient, ObjectId) => {
    const models = {};

    MongoClient.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}`, { useNewUrlParser: true }, (error, client) => {
        if(error){
            console.log("Not able to connect to database");
            process.exit(1);
        }

        // Code for specifying collection.
        const db = client.db(config.mongodb.database);

        // Database model for login existing user.
        // models.loginUser = (emailId, password) => new Promise((resolve, reject) => {
        //     const userObj = {
        //         emailId,
        //         password
        //     }
        //     db.collection('users').findOne(userObj, { projection: { password: 0 } }, (err, result) => {
        //         if(err){
        //             reject(err);
        //         } else{
        //             if(result === null){
        //                 resolve({status: "Invalid Credentials"})
        //             } else{
        //                 resolve(result);
        //             }
        //         }
        //     })
        // });

    })

    return models;
}