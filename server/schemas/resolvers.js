const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getSingleUser: async (parent, { args }) => {
      return User.findOne({ args })
        .select('-__v -password')
    },
    me: async (parent, args) => {
      if (context.user) {
        const userData = await User.findOne({})
          .select('-__v -password')
        // .populate('books')
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    }

  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });
    //   if (!user) {
    //     throw new AuthenticationError('Incorrect credentials');
    //   }
    //   const correctPw = await user.isCorrectPassword(password);
    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect credentials');
    //   }
    //   const token = signToken(user);
    //   return { token, user };
    // }

  }
};

module.exports = resolvers;
