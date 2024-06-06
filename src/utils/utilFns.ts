export const getBg = (name: string): string => {
  if (name === 'jlpt') {
    return 'primary.400';
  }

  if (name === 'top-j') {
    return 'blue.600';
  }

  if (name === 'netjest') {
    return 'secondary.600';
  }

  return 'yellow.400';
};
