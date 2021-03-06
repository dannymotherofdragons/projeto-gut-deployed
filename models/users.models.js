module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
        /*prof:{
            type: DataTypes.BOOLEAN,
        }*/
    });

    return user;
};