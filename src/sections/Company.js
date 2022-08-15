import React from 'react';

import '../styles/company.scss';

import googleLogo from '../images/logos/google_logo.png';
import trelloLogo from '../images/logos/trello_logo.png';
import mondayLogo from '../images/logos/monday_logo.png';
import notionLogo from '../images/logos/notion_logo.png';
import slackLogo from '../images/logos/slack_logo.png';

const Company = () => {
  return (
    <>
      <div className="company-logos">
        <div className="container">
          <div className="logo">
            <img src={googleLogo} alt="google logo" className="logo__item" />
          </div>
          <div className="logo">
            <img src={trelloLogo} alt="trello logo" className="logo__item" />
          </div>
          <div className="logo">
            <img src={mondayLogo} alt="monday logo" className="logo__item" />
          </div>
          <div className="logo">
            <img src={notionLogo} alt="notion logo" className="logo__item" />
          </div>
          <div className="logo">
            <img src={slackLogo} alt="slack logo" className="logo__item" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
