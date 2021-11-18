import React, { useReducer } from 'react';
import Head from 'next/head';
import styles from './Home.module.css';

//layout
import WebLayout from './../layouts/WebLayout';

const Home = () => {
  return (
    <WebLayout>
      <Head>
        <title>We Got Devs</title>
      </Head>
      <div className="content">
        <h1 className="heading">We Got Devs</h1>

        <div className={styles.allService}>
          <div className="left-part">
            <h2 className={styles.serviceBar}>Data Analysis</h2>
            <h2 className={styles.serviceBar}>Enterprise Solution</h2>
            <h2 className={styles.serviceBar}>Backend API</h2>
            <h2 className={styles.serviceBar}>Artifical Intelligence</h2>
            <h2 className={styles.serviceBar}>Website Development</h2>
            <h2 className={styles.serviceBar}>Startup validation</h2>
          </div>

          <div className="right-part">
            <h2 className={styles.serviceBar}>Mobile App</h2>
            <h2 className={styles.serviceBar}>Agile</h2>
            <h2 className={styles.serviceBar}>eCommerce</h2>
            <h2 className={styles.serviceBar}>Financial Model</h2>
            <h2 className={styles.serviceBar}>SaaS PaaS</h2>
            <h2 className={styles.serviceBar}>Digital Marketing</h2>
          </div>
        </div>

        <h1 className={styles.mainHeading}>Ready to serve project manager</h1>

        <div className={styles.description}>
          <div className={styles.descList}>
            <h2 className={styles.descHeading}>I Am Heading</h2>
            <p className={styles.descText}>
              This tried to put an image inside a paragraph. I am a paragraph.
              Here comes the first line. Here comes the second line. Here is the
              image.
              <img
                className={styles.img}
                src="https://www.svgrepo.com/show/380277/crystal-ball-magic-magician-witch.svg"
                width="150"
              />
              Here comes the third line. Here comes the fourth line. A new line
              more. This is the end of the paragraph. Okay Cool!
            </p>
          </div>

          <div className={styles.descList}>
            <h2 className={styles.descHeading}>I Am Heading</h2>
            <p className={styles.descText}>
              This tried to put an image inside a paragraph. I am a paragraph.
              Here comes the first line. Here comes the second line. Here is the
              image.
              <img
                className={styles.img}
                src="https://www.svgrepo.com/show/380277/crystal-ball-magic-magician-witch.svg"
                width="150"
              />
              Here comes the third line. Here comes the fourth line. A new line
              more. This is the end of the paragraph. Okay Cool!
            </p>
          </div>

          <div className={styles.descList}>
            <h2 className={styles.descHeading}>I Am Heading</h2>
            <p className={styles.descText}>
              This tried to put an image inside a paragraph. I am a paragraph.
              Here comes the first line. Here comes the second line. Here is the
              image.
              <img
                className={styles.img}
                src="https://www.svgrepo.com/show/380277/crystal-ball-magic-magician-witch.svg"
                width="150"
              />
              Here comes the third line. Here comes the fourth line. A new line
              more. This is the end of the paragraph. Okay Cool!
            </p>
          </div>

          <div className={styles.descList}>
            <h2 className={styles.descHeading}>I Am Heading</h2>
            <p className={styles.descText}>
              This tried to put an image inside a paragraph. I am a paragraph.
              Here comes the first line. Here comes the second line. Here is the
              image.
              <img
                className={styles.img}
                src="https://www.svgrepo.com/show/380277/crystal-ball-magic-magician-witch.svg"
                width="150"
              />
              Here comes the third line. Here comes the fourth line. A new line
              more. This is the end of the paragraph. Okay Cool!
            </p>
          </div>

          <div className={styles.descList}>
            <h2 className={styles.descHeading}>I Am Heading</h2>
            <p className={styles.descText}>
              This tried to put an image inside a paragraph. I am a paragraph.
              Here comes the first line. Here comes the second line. Here is the
              image.
              <img
                className={styles.img}
                src="https://www.svgrepo.com/show/380277/crystal-ball-magic-magician-witch.svg"
                width="150"
              />
              Here comes the third line. Here comes the fourth line. A new line
              more. This is the end of the paragraph. Okay Cool!
            </p>
          </div>

          <div className={styles.descList}>
            <h2 className={styles.descHeading}>I Am Heading</h2>
            <p className={styles.descText}>
              This tried to put an image inside a paragraph. I am a paragraph.
              Here comes the first line. Here comes the second line. Here is the
              image.
              <img
                className={styles.img}
                src="https://www.svgrepo.com/show/380277/crystal-ball-magic-magician-witch.svg"
                width="150"
              />
              Here comes the third line. Here comes the fourth line. A new line
              more. This is the end of the paragraph. Okay Cool!
            </p>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Home;
