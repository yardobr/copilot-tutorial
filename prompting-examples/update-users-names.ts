import mongoose from 'mongoose';

const UserModel = mongoose.model('User');

async function updateUsersNames() {
  mongoose.connect('mongodb://localhost:27017/mongoose-examples');
  const users = await UserModel.find({}).exec();

  for (const user of users) {
    user.name = `${user.firstName} ${user.lastName}`;
    await user.save();
  }
}

updateUsersNames()
    .then(() => {
        console.log('Users names updated');
        process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });