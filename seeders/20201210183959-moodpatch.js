'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //empty seeded tables to avoid duplicates on reseed
    await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});

    await queryInterface.bulkDelete('posts', null, {truncate: true, cascade: true, restartIdentity: true});

    await queryInterface.bulkDelete('colors', null, {truncate: true, cascade: true, restartIdentity: true});

    //users
    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        email: 'billsprestonesquire@mail.com',
        name: 'Bill',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'tedtheodorelogan@mail.com',
        name: 'Ted',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'admiralwjvonmerkatz@mail.com',
        name: 'Merkatz',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'maninyellowhat@mail.com',
        name: 'man',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'georgeisamonkey@mail.com',
        name: 'george',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true});

    //posts
    const bulkposts = await queryInterface.bulkInsert('posts', [
      {
        userId: 1,
        colorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        colorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        colorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        colorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        colorId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        colorId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        colorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        colorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        colorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        colorId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        colorId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        colorId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        colorId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        colorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        colorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        colorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        colorId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        colorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        colorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        colorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        colorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        colorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        colorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        colorId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        colorId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true});

    //colors
    const bulkThemeAct = await queryInterface.bulkInsert('colors', [
      {
        hex: '#EC8813',
        emotion: '++',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hex: '#57A345',
        emotion: '+',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hex: '#882BA7',
        emotion: '...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hex: '#4087F1',
        emotion: '-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hex: '#949494',
        emotion: '--',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
