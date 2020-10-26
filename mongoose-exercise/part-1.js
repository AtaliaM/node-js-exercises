const mongoose = require('mongoose');
const validator = require('validator');

// Let’s create a mongoose model for restaurants
// (use a different collection or DB, let’s start from scratch\clean collection)
// Restaurants at this stage should include: 
// name
// borough
// cuisine
// Restuarant_id
// Add validation(s) - 
// required: restuarant_id, name, 
// restaurant_id value is bigger than 0
// Create 5 different objects and save them to your collection.


mongoose.connect('mongodb://127.0.0.1:27017/restaurant-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
})

const addressSchema = new mongoose.Schema({
    building: {
        type: String,
    },
    street: {
        type: String
    },
    zipcode: {
        type: Number,
    },
    coord : {
        type: Array,
        validate(value) {
            if(value.length !== 2) {
                throw new Error("You must provide lat and lon, 2 values")
            }
            if(!validator.isLatLong(`${value[0]}, ${value[1]}`))
            {
                throw new Error("lat and lon are invalid");
            }
        }

    }
  });

//defining a model
const Restaurant = mongoose.model('Restaurant', { //constructer function for that model
    name: {
        type: String,
        required: true,
        trim: true,
    },
    borough: {
        type: String,
        // required: true,
        trim: true,
        lowercase: true,

    },
    cuisine: {
        type: String,

    },
    Restaurant_id: {
        type: Number,
        required: true,
        // minlength: 7,
        trim: true,
        validate(value) { //validate that people can't enter negative number for id
            if (value < 0) {
                throw new Error("restaurant id must be a positive number")
            }
        }
    },
    address: {
       type: addressSchema,
    }
})

const createRestaurant = (name, borough, cuisine, Restaurant_id, address) => {
    // creating an instance of it
    const restaurant = new Restaurant({
        name: name,
        borough: borough,
        cuisine: cuisine,
        Restaurant_id: Restaurant_id,
        address: address,
    })

    console.log(restaurant);

    //saving the instance to the database
    restaurant.save().then(() => {
        console.log(restaurant);
    }).catch((err) => {
        console.log(err);
    })
}

createRestaurant("Starbucks", "Beit Hanania", "coffee and such", 123, 
{building:"building", street:"street", zipcode:234, coord: ["-73.856077", "40.848447"]});
// createRestaurant("KFC", "London", "fried chicken", 1234);
// createRestaurant("Cheescake Factory", "New York", "cakes", 12);
// createRestaurant("McDonalds", "London", "Hamburger", 11111);
// createRestaurant("Burger King", "Tokyo", "Hamburger", 232323);

// Let’s add more objects to the restaurants
// address  {building, street, zipcode, coord: []}
// Add validation to coord (lat, lon)



