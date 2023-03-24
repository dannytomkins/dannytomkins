import React from 'react';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import './PollenField.css'
import { POLLEN_FIELD_TOKEN } from '../../config/config';


const PollenField = () => {
  return (
    <>
        <p>
          helo worl pollen_field
        </p>
        <InstagramFeed accessToken={POLLEN_FIELD_TOKEN} />
    </>
  );
};

export default PollenField;
