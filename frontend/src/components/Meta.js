import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title = '' }) => {
  return (
    <Helmet>
      <title>{`🎧 Mr Store | ${title}`}</title>
    </Helmet>
  );
};

export default Meta;
