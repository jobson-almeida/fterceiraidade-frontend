import {
  HomeIcon,
  CogIcon,
  LockClosedIcon,
  AcademicCapIcon,
  PencilSquareIcon,
  NewspaperIcon,
  UserPlusIcon,
  UserIcon,
  UsersIcon,
  UserGroupIcon,
  UserCircleIcon

} from '@heroicons/react/24/solid';

export const items = [
  // {
  //   title: 'Overview',
  //   path: '/overview',
  //   icon: (
  //     <ChartBarIcon width={24} height={24} />
  //   )
  // },
  {
    title: 'Home',
    path: '/home',
    icon: (
      <HomeIcon width={24} height={24} />
    )
  },
  {
    title: 'Alunos',
    path: '/students',
    icon: (
      <UsersIcon width={24} height={24} />
    )
  },
  {
    title: 'Professores',
    path: '/teachers',
    icon: (
      <UserIcon width={24} height={24} />
    )
  },
  {
    title: 'Cursos',
    path: '/courses',
    icon: (
      <AcademicCapIcon width={24} height={24} />
    )
  },
  {
    title: 'Turmas',
    path: '/classrooms',
    icon: (
      <UserGroupIcon width={24} height={24} />
    )
  },
  {
    title: 'Questões',
    path: '/questions',
    icon: (
      <PencilSquareIcon width={24} height={24} />
    )
  },
  {
    title: 'Avaliações',
    path: '/assessments',
    icon: (
      <NewspaperIcon width={24} height={24} />
    )
  },
  {
    title: 'Conta',
    path: '/account',
    icon: (
      <UserCircleIcon width={24} height={24} />
    )
  },
  {
    title: 'Configurações',
    path: '/settings',
    icon: (
      <CogIcon width={24} height={24} />
    )
  },
  {
    title: 'Login',
    path: '/auth/login',
    icon: (
      <LockClosedIcon width={24} height={24} />
    )
  },
  {
    title: 'Cadastro',
    path: '/register',
    icon: (
      <UserPlusIcon width={24} height={24} />
    )
  },
];
