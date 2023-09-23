import User from './User.model';

export const updateUsersNames = async () => {
    let offset = 0;
    let limit = 100;

    const usersCount = await User.count();

    while (offset < usersCount) {
        const users = await User.find({}).skip(offset).limit(limit);
        const updatedUser = users.map(user => {
            user.name = `${user.firstName} ${user.lastName}`;
            return user;
        });
        User.bulkWrite(updatedUser.map(user => ({
            updateOne: {
                filter: { _id: user._id },
                update: { $set: { name: user.name } }
            }
        })));
    }
};