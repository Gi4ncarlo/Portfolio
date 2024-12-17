import { useState, useEffect } from 'react';
import styles from '../style/ScrollToUpBtn.module.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
      console.log("Que hace pibe scroleando");
      

    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.scrollToTop}>
      {visible && (
        <button onClick={scrollToTop} className={styles.button}>
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
