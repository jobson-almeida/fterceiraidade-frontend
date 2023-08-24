import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import TeacherListView from 'src/views/teacher/TeacherListView';
import StudentListView from 'src/views/student/StudentListView';
import StudentRegister from 'src/views/student/StudentRegister';
import StudentEdit from 'src/views/student/StudentEdit';
import StudentPerformanceView from 'src/views/student/StudentPerformanceView';
import AssessmentListView from 'src/views/assessment/AssessmentListView';
import QuestionListView from 'src/views/question/QuestionListView';
import ClassRoomListView from 'src/views/classroom/ClassRoomListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import CourseListView from 'src/views/course/CourseListView';
import CoursePerformanceView from 'src/views/course/CoursePerformanceView';
import ResetView from 'src/views/auth/ResetView';
import RecoverView from 'src/views/auth/RecoverView';
import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'teachers', element: <TeacherListView /> },
      { path: 'students', element: <StudentListView /> },
      { path: 'student-edit', element: <StudentEdit /> },
      { path: 'student-register', element: <StudentRegister /> },
      { path: 'student-performance', element: <StudentPerformanceView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'course-performance', element: <CoursePerformanceView /> },
      { path: 'courses', element: <CourseListView /> },
      { path: 'assessments', element: <AssessmentListView /> },
      { path: 'questions', element: <QuestionListView /> },
      { path: 'classrooms', element: <ClassRoomListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'reset', element: <ResetView /> },
      { path: 'recover', element: <RecoverView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> }, //  <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
