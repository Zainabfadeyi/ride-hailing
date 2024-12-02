import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../images/assets/animationData.json';
import styles from './info.module.css'; 
import { ArrowRightCircle } from 'react-bootstrap-icons';

const Info = () => {
  // Configuration for the Lottie animation
  const defaultOptions = {
    loop: true, // Enables looping of the animation
    autoplay: true, // Automatically start animation
    animationData: animationData, // Your animation data file
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Adjust according to your needs
    },
  };

  return (
    <div className={styles.container}> 
    <div className={styles.wrapper}>
        <div className={styles.text}>
      <h1 className={styles.header}> 
        Go wherever, whenever
        </h1>
        <div className={styles.about}>
        Quicklift is the all-in-one mobility app. Get picked up by a top-rated driver in minutes and enjoy a comfortable ride to wherever you’re going; or skip the traffic entirely on one of our industry-leading scooters.
      </div>
      </div>

      <button className={styles.button} onClick={() => console.log('connect')}> {/* Apply button styles */}
        Get the app 
        <ArrowRightCircle className={styles.icon} size={25} /> {/* Apply icon margin styles */}
      </button>
      </div>
      <div className={styles.animation}> {/* Apply animation container styles */}
        <Lottie 
          options={defaultOptions} 
          height={400} 
          width={400}  
        />
      </div>
    </div>
  );
};

export default Info;
