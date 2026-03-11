const mongodb =require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getALL = async (requestAnimationFrame, res) => {
    const result = await mongodb.getDatabase().bd().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getSingle =async (requestAnimationFrame, res) => {
    const userId = new ObjectId(requestAnimationFrame.paramas.id);
    const result = await mongodb.getDatabase().bd().collection('users').find({_id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

module.exports = {
    getALL,
    getSingle
}