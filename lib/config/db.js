import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://chowdharysayan2805:Sion1234@cluster0.bbxxrml.mongodb.net/todo-app');
    console.log("DB Connected");
}