const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    // Create a Schema structure with columns
    const fruitSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please check your data entry, name field not specified!"]
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        review: String
    });

    const Fruit = mongoose.model('Fruit', fruitSchema);

    const fruit = new Fruit({
        name: 'Apple',
        rating: 9,
        review: 'An apple a day keeps doctor away'
    });

    const kiwi = new Fruit({
        name: 'Kiwi',
        rating: 4,
        review: 'Okish fruit'
    });

    const orange = new Fruit({
        name: 'Orange',
        rating: 9,
        review: 'Blippis favorite fruit n color'
    });

    const pineapple = new Fruit(
        {name: "Pineapple",
        rating: 9,
        review: "Fantastic Fruit"}
    )

    const mango = new Fruit(
        {
            name: "Mango",
            rating: 9,
            review: "King of Fruits, comes once a year!"
        }
    )
    
    // fruit.save()
    // kiwi.save()
    // orange.save()
    // pineapple.save()
    // mango.save()

    // Fruit.insertMany([kiwi,orange]);
    // await Fruit.find();

    // NOT WORKING: Update & Delete
    // const res = Fruit.updateOne(
    //     {"_id": "64d6ef0756bdaf17e9803c76"}, 
    //     {"name": "Grapes", "review": "Angoor khatte hai!"}
    // );

    // (await res).upsertedId;
    // console.log(res);
    // Fruit.deleteOne({ "name" : "Orange" });

    const peopleSchema = new mongoose.Schema({
        name: String,
        age: Number,
        favFruit: fruitSchema
    });

    const Person = mongoose.model('Person', peopleSchema);
    const person = new Person({
        name: 'John Doe',
        age: 90
    });

    const sneha = new Person(
        {name: 'Sneha',
        age: 37,
        favFruit: pineapple}
    )
    
    // sneha.save()
    // person.save();

    // NOT WORKING: Update & Delete
    // Person.deleteMany(
    //     { 'name' : 'John Doe'},
    //     { 'age' : 90 }
    // );
    // const res = Person.updateOne(
    //     { "name": 'John Doe' }, 
    //     { "favFruit": mango }
    // );

  }

