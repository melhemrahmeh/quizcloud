import Topics from './pages/Topics';
import TopicMCQs from './pages/TopicMCQs';
import Profile from './pages/Profile';
import Account from './pages/Account';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

interface RouteConfig {
  path: string;
  component: React.FC;
  protected: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Topics,
    protected: false,
  },
  {
    path: '/topics/:topicId',
    component: TopicMCQs,
    protected: true,
  },
  {
    path: '/signup',
    component: SignUp,
    protected: false,
  },
  {
    path: '/signin',
    component: SignIn,
    protected: false,
  },
  {
    path: '/profile',
    component: Profile,
    protected: true,
  },
  {
    path: '/account',
    component: Account,
    protected: true,
  },
];
