
import user from '../model/user-schema.js';
import User from '../model/user-schema.js';

export const getUsers =async (request, response) => {
    try{
        let user = await User.find();
        response.json(user);
    } catch(error){
        response.json({message: error.message} )
    }
        //response.send('hello world');
    }

export const addUser = async (request, response) => {
        const user = request.body;
        const newUser = new User(user);

        try{
            await newUser.save(); //to save the user object in mongodb 
            response.json(newUser);
        } catch(error){
            response.json({message: error.message} )
        }

        // response.send('hello world');
    }


export const getUserById = async (request, response) => {
        const id = request.params.id;
        try{
            const user = await User.findById(_id);
            response.json(user);

        } catch(error){
            response.json({message: error.message});
        }
    }

export const editUser = async (request, response) => {
    const user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.json(editUser);
    } catch(error){
        response.json({message: error.message} )
    }
}

export const deleteUser = async (request, response) => {
    try{
        await user.deleteOne( { id: request.params.id} );
        response.json("user deleted sucessfully");
    } catch(error){
        response.json({ message: error.message});
    }
}

