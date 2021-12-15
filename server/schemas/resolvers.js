const { User } = require('../models');

const resolvers = {
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return { user };
    }
  }
};

module.exports = resolvers;
