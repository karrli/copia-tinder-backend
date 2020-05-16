const Users = require('../models/Users');
const bcrypt = require('bcrypt');

module.exports = {
  findById: (id) => Users.findById(id),
  create: (body) => {
    const newUser = new Users(body);
    return newUser.save();
  },
  find_near_users: async (interestedUser) => {
    return  await Users.aggregate(
      query
    );
  },
  findByEmail: (email) => Users.findOne({ email }),
  update: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  comparePasswords: (candidatePassword, password) => {
    return bcrypt.compareSync(candidatePassword, password);
  }
}
