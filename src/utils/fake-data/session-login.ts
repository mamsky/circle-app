export const isLogin: boolean = true;

interface UserSession {
  fullName: string;
  username: string;
  followersCount: number;
  followingsCount: number;
  avatarUrl: string;
  backgroundUrl: string;
  bio?: string;
}

export const userSession: UserSession = {
  fullName: 'Paste Prosmana',
  username: 'paste',
  backgroundUrl:
    'https://api.dicebear.com/9.x/glass/svg?seed=Cintara Surya Elidanto',
  avatarUrl:
    'https://api.dicebear.com/9.x/notionists/svg?seed=Cintara Surya Elidanto',
  followersCount: 1001,
  followingsCount: 0,
  bio: "I'm fullstack developer 😎👍",
};
