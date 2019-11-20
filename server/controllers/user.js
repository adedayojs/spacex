const User = require('../models/user');

/* Get User by their id */
function getUserById(id) {
  return User.findById(id);
}

/* Get list of entire Users from the database */
function getAllUsers() {
  return User.find({});
}

/* CREATE User*/
function createNewUser(data) {
  return new User({ ...data }).save();
}

/**EDIT A USER */

async function editUser(id, data) {
  const user = await User.findById(id);

  if (user) {
    user = { ...user, ...data };
    return user.save();
  } else {
    return null;
  }
}
module.exports = { getUserById, getAllUsers, createNewUser, editUser };
