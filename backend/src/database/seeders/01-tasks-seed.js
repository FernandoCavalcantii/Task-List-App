module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          id: 1,
          name: 'Project 1',
          description: "Add TypeScript to company's system.",
          status: 'Done',
        },
        {
          id: 2,
          name: 'Project 2',
          description: 'Create new interface for system X',
          status: 'In progress',
        },
        {
          id: 1,
          name: 'Project 3',
          description: 'Implement product validation.',
          status: 'Stopped',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
