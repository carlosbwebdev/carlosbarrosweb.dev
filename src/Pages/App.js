import React from 'react';
import SocialMedia from '../Components/SocialMedia';
import styles from '../Styles/Pages/App.module.css';
import { Icon } from '@iconify/react';

function App() {
  return (
    <div>
      <section className={styles.sectionApp}>
        <div>
          <Icon icon="noto:construction" width={'4rem'} />
          <h1>Carlos Barros Web Designer</h1>
          <p>Em Manutenção...</p>
        </div>
        <div className={styles.socialMedia}>
          <SocialMedia
            width1="32px"
            width2="30px"
            width3="28px"
            color="white"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
