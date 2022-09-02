module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          name: 'Fernando Cavalcanti',
          password: 'SuperSafe2.0',
          admin: true,
        },
        {
          id: 2,
          name: 'Fernanda Fernandez',
          password: 'SuperSafe3.0',
          admin: false,
        },
        {
          id: 3,
          name: 'Filipe Jordão',
          password: 'SuperSafe4.0',
          admin: false,
        },
        {
          id: 4,
          name: 'Leonardo Carvalho',
          password: 'SuperSafe5.0',
          admin: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
