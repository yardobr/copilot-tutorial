import mongoose from 'mongoose';

const User = mongoose.model('User');

(async () => {
    const users = await User.find({});
    const chunkSize = 1000;

    while (users.length) {
        const chunk = users.splice(0, chunkSize);

        const bulkWrite = chunk.map(user => ({
            updateOne: {
                filter: { _id: user._id },
                update: { name: `${user.firstName} ${user.lastName}` }
            }
        }));

        await User.bulkWrite(bulkWrite);
    }

    console.log(`Done!`);
})();