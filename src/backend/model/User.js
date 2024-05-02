import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [2, 'First name must be at least 2 characters long'],
        maxlength: [50, 'First name must be at most 50 characters long']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [2, 'Last name must be at least 2 characters long'], 
        maxlength: [50, 'Last name must be at most 50 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'Email must be at least 6 characters long'],
        validate: {
            validator: function (email) {
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                return emailRegex.test(email);
            },
            message: props => `${props.value} is not a valid email address`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },

    favourites: {
        type: Array,
        required: false,
    }
})

export const userModel = mongoose.models.users || mongoose.model('users', schema);
