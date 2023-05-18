import React from 'react';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import './PollenField.css'

const PollenField = () => {
  return (
    <>
      <p>helo worl pollen_field page II</p>
      <InstagramFeed accessToken={process.env.REACT_APP_POLLEN_FIELD_TOKEN} />
    </>
  );
};

export default PollenField;
