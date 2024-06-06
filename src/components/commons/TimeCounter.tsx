import {Box, Text} from 'native-base';
import {useEffect, useState} from 'react';

export function TimeCounter() {
  const [time, setTime] = useState(3 * 60 * 60); // 3 hours in seconds

  useEffect(() => {
    if (time <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (t: number) => {
    const hours = Math.floor(t / 3600);
    const minutes = Math.floor((t % 3600) / 60);
    const seconds = t % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <Box>
      <Text color="white" fontSize="lg">
        {formatTime(time)}
      </Text>
    </Box>
  );
}
