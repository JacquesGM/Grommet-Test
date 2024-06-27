import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.body.style.backgroundColor = '#1A1A1A';
    } else {
      document.body.style.backgroundColor = '#FFFFFF';
    }
  }, [dark]);

  return [dark, toggleDarkMode];
};

export default useDarkMode;
