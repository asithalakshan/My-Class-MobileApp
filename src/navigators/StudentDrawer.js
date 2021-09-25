import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentDashboard from '../screens/student/StudentDashboard';
// import StudentProfile from '../creens/sudent/StudentProfile';

const Drawer = createDrawerNavigator();

const StudentDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StudentDashbaord" component={StudentDashboard} />
      <Drawer.Screen name="StudentProfile" component={StudentProfile} />
    </Drawer.Navigator>
  );
}

export default StudentDrawer