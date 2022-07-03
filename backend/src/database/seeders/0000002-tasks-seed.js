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
          userId: 1,
        },
        {
          id: 2,
          name: 'Project 2',
          description: 'Create new interface for system X',
          status: 'In progress',
          userId: 2,
        },
        {
          id: 3,
          name: 'Project 3',
          description: 'Implement product validation.',
          status: 'Stopped',
          userId: 3,
        },
        {
          id: 4,
          name: 'Project 4',
          description: 'Refactor Project X service layer.',
          status: 'Stopped',
          userId: 4,
        },
        {
          id: 5,
          name: 'Project 5',
          description: 'Refactor Project X model layer.',
          status: 'In progress',
          userId: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
