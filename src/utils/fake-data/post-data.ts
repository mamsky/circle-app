import { Post } from '@/types/post-data-type';

export const postDatas: Post[] = [
  {
    id: '8d5e7a20-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: '08 Endranio Palupi',
      username: 'endranio_palupi',
      avatarUrl:
        'https://api.dicebear.com/9.x/micah/svg?seed=08%20Endranio%20Palupi',
    },
    content: 'Lorem ipsum dolor sit amet.',
    image:
      'https://api.dicebear.com/9.x/micah/svg?seed=content%20Endranio%20Palupi',
    likesCount: 10,
    repliesCount: 2,
    replies: [
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8b70-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'M Rizal',
          username: 'm_rizal',
          avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=M%20Rizal',
        },
        content: 'Benar-benar menginspirasi, Endranio!',
        likesCount: 3,
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
  {
    id: '8d5e7b90-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: 'Iqbal M Hasbi',
      username: 'iqbal_hasbi',
      avatarUrl:
        'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
    },
    content: 'This is a sample post content.',
    image: '',
    likesCount: 8,
    repliesCount: 3,
    replies: [
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8b70-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'M Rizal',
          username: 'm_rizal',
          avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=M%20Rizal',
        },
        content: 'Benar-benar menginspirasi, Endranio!',
        likesCount: 3,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
  {
    id: '8d5e7cf0-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: 'M Rizal',
      username: 'm_rizal',
      avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=M%20Rizal',
    },
    content: 'Another dummy post content.',
    image: '',
    likesCount: 5,
    repliesCount: 1,
    createdAt: new Date(),
  },
  {
    id: '8d5e7e50-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: 'Muh. Yaumil Aksah Hamid',
      username: 'yaumil_aksah',
      avatarUrl:
        'https://api.dicebear.com/9.x/micah/svg?seed=Muh.%20Yaumil%20Aksah%20Hamid',
    },
    content: 'Just a quick thought!',
    image: '',
    likesCount: 7,
    repliesCount: 2,
    createdAt: new Date(),
  },
  {
    id: '8d5e7fba-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: 'Muhammad Alfiandi Rizki',
      username: 'alfiandi_rizki',
      avatarUrl:
        'https://api.dicebear.com/9.x/micah/svg?seed=Muhammad%20Alfiandi%20Rizki',
    },
    content: 'This is a placeholder post.',
    image: '',
    likesCount: 4,
    repliesCount: 1,
    createdAt: new Date(),
  },
  {
    id: '8d5e8126-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: 'Paste Prosman',
      username: 'paste_prosman',
      avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=Paste%20Prosman',
    },
    content: 'Sharing some thoughts.',
    image: '',
    likesCount: 9,
    repliesCount: 4,
    createdAt: new Date(),
  },
  {
    id: '8d5e828c-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: 'Rahim Haq',
      username: 'rahim_haq',
      avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=Rahim%20Haq',
    },
    content: 'Hello everyone!',
    image: '',
    likesCount: 6,
    repliesCount: 0,
    createdAt: new Date(),
  },
  {
    id: '8d5e83fc-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: 'Rendy Zulfan',
      username: 'rendy_zulfan',
      avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=Rendy%20Zulfan',
    },
    content: 'Happy to share!',
    image: '',
    likesCount: 11,
    repliesCount: 5,
    createdAt: new Date(),
  },
  {
    id: '8d5e8574-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: 'Syifa Maulaya',
      username: 'syifa_maulaya',
      avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=Syifa%20Maulaya',
    },
    content: 'Feeling great today.',
    image: '',
    likesCount: 7,
    repliesCount: 3,
    createdAt: new Date(),
  },
  {
    id: '8d5e86e2-1b63-11ee-be56-0242ac120002',
    user: {
      fullName: 'Tajjuddin Auliya Ahaadiin',
      username: 'tajjuddin_auliya',
      avatarUrl:
        'https://api.dicebear.com/9.x/micah/svg?seed=Tajjuddin%20Auliya%20Ahaadiin',
    },
    content: 'A quick update from me.',
    image:
      'https://api.dicebear.com/9.x/micah/svg?seed=contentTajjuddin%20Auliya%20Ahaadiin',
    likesCount: 8,
    repliesCount: 2,
    replies: [
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8b70-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'M Rizal',
          username: 'm_rizal',
          avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=M%20Rizal',
        },
        content: 'Benar-benar menginspirasi, Endranio!',
        likesCount: 3,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8b70-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'M Rizal',
          username: 'm_rizal',
          avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=M%20Rizal',
        },
        content: 'Benar-benar menginspirasi, Endranio!',
        likesCount: 3,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8b70-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'M Rizal',
          username: 'm_rizal',
          avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=M%20Rizal',
        },
        content: 'Benar-benar menginspirasi, Endranio!',
        likesCount: 3,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8b70-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'M Rizal',
          username: 'm_rizal',
          avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=M%20Rizal',
        },
        content: 'Benar-benar menginspirasi, Endranio!',
        likesCount: 3,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
      {
        id: '8d5e8b70-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'M Rizal',
          username: 'm_rizal',
          avatarUrl: 'https://api.dicebear.com/9.x/micah/svg?seed=M%20Rizal',
        },
        content: 'Benar-benar menginspirasi, Endranio!',
        likesCount: 3,
        createdAt: new Date(),
      },
      {
        id: '8d5e8a10-1b63-11ee-be56-0242ac120002',
        user: {
          fullName: 'Iqbal M Hasbi',
          username: 'iqbal_hasbi',
          avatarUrl:
            'https://api.dicebear.com/9.x/micah/svg?seed=Iqbal%20M%20Hasbi',
        },
        content: 'Sangat setuju! Ini adalah salah satu kutipan terbaik.',
        likesCount: 5,
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
];
