export default {
  locations: [
    {id: 1, name: 'Project name', path: '/project'},
    {id: 2, name: 'FeatureSet name', path: '/project/feature-set'},
    {id: 0, name: 'Sprint name', path: '//project/feature-set/sprint'},
  ],
  projects: [
    {
      id: 12,
      path: 'project',
      name: 'cool project 12',
      description: 'this is a dummy project for testing 12',
      featureSetIds: [1, 2]
    },
    {
      id: 4,
      path: 'project',
      name: 'cool project 4',
      description: 'this is a dummy project for testing 4',
      featureSetIds: [3]
    },
    {
      id: 6,
      path: 'project',
      name: 'cool project 6',
      description: 'this is a dummy project for testing 6',
      featureSetIds: [4]
    }
  ],
  featureSets: [
    {
      id: 1,
      path: 'feature-set',
      name: 'my cool feature set 1',
      description: 'this is a dummy feature set for testing 1',
      sprintIds: [1, 2]
    },
    {
      id: 2,
      path: 'feature-set',
      name: 'my cool feature set 2',
      description: 'this is a dummy feature set for testing 2',
      sprintIds: [3]
    },
    {
      id: 3,
      path: 'feature-set',
      name: 'my cool feature set 3',
      description: 'this is a dummy feature set for testing 3',
      sprintIds: [4]
    },
    {
      id: 4,
      path: 'feature-set',
      name: 'my cool feature set 4',
      description: 'this is a dummy feature set for testing 4',
      sprintIds: [5]
    }
  ],
  sprints: [
    {
      id: 1,
      path: 'sprint',
      name: 'my cool sprint 1',
      description: 'this is a dummy sprint for testing 1',
      storyIds: [1, 2]
    },
    {
      id: 2,
      path: 'sprint',
      name: 'my cool sprint 2',
      description: 'this is a dummy sprint for testing 2',
      storyIds: [3]
    },
    {
      id: 3,
      path: 'sprint',
      name: 'my cool sprint 3',
      description: 'this is a dummy sprint for testing 3',
      storyIds: [4]
    },
    {
      id: 4,
      path: 'sprint',
      name: 'my cool sprint 4',
      description: 'this is a dummy sprint for testing 4',
      storyIds: [5]
    },
    {
      id: 5,
      path: 'sprint',
      name: 'my cool sprint 5',
      description: 'this is a dummy sprint for testing 5',
      storyIds: [6]
    }
  ],
  stories: [
    {
      id: 1,
      dependencies: [1, 2, 3, 4],
      responsible: {
        name: 'Bob',
        img: `https://api.adorable.io/avatars/50/${parseInt(
          Math.random() * 100,
          10
        )}.png`
      },
      story:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      estimation: 5,
      status: 'Done'
    },
    {
      id: 2,
      dependencies: [1, 2, 3, 4],
      responsible: {
        name: 'Joe',
        img: `https://api.adorable.io/avatars/50/${parseInt(
          Math.random() * 100,
          10
        )}.png`
      },
      story:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      estimation: 5,
      status: 'New'
    },
    {
      id: 3,
      dependencies: [1, 2, 3, 4],
      responsible: {
        name: 'Marie',
        img: `https://api.adorable.io/avatars/50/${parseInt(
          Math.random() * 100,
          10
        )}.png`
      },
      story:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      estimation: 5,
      status: 'In progress'
    },
    {
      id: 4,
      dependencies: [1, 2, 3, 4],
      responsible: {
        name: 'Kate',
        img: `https://api.adorable.io/avatars/50/${parseInt(
          Math.random() * 100,
          10
        )}.png`
      },
      story:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      estimation: 5,
      status: 'New'
    },
    {
      id: 5,
      dependencies: [1, 2, 3, 4],
      responsible: {
        name: 'Avo',
        img: `https://api.adorable.io/avatars/50/${parseInt(
          Math.random() * 100,
          10
        )}.png`
      },
      story:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      estimation: 5,
      status: 'Done'
    },
    {
      id: 6,
      responsible: {
        name: 'Nin',
        img: `https://api.adorable.io/avatars/50/${parseInt(
          Math.random() * 100,
          10
        )}.png`
      },
      story:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      estimation: 5,
      status: 'Review'
    }
  ]
}
