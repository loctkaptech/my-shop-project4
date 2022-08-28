const storageKey = 'theme-preference';

export const getColorPreference = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  }
};

export const setColorPreference = (theme) => {
  localStorage.setItem(storageKey, theme);
};
