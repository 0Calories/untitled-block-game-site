import { useState } from 'react';
import Profile from './Profile';

const ProfilePage = () => {
  const character = {
    name: 'Ash',
    bio:
      'Hey there, I’m the lead (and only) Boblox developer. I like making and playing games in my spare time. Feel free to leave me some feedback on Boblox, it’s a work in progress :)',
    pic:
      'https://i.pinimg.com/originals/be/e6/60/bee66095c5539c8d1f1e1f247214f330.png',
  };

  return (
    <div>
      <Profile character={character} />
    </div>
  );
};

export default ProfilePage;
