import React, { useEffect, useState } from 'react';

const BackgroundButton = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-body' : 'light-body';
  }, [isDark]);

  return <button onClick={() => setIsDark(!isDark)}>Switch</button>;
};

export default BackgroundButton;
