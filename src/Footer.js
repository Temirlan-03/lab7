// Footer.js
import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Footer = () => {
  return (
    <BottomNavigation>
      <BottomNavigationAction label="Обратная связь" icon={<FeedbackIcon />} />
      <BottomNavigationAction label="Поддержка" icon={<ContactSupportIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
