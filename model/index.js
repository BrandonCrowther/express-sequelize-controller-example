const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection')

class Post extends Model {}
Post.init({
	post: DataTypes.STRING,
}, { sequelize, modelName: 'Post' })

sequelize.sync()

exports.Post = Post