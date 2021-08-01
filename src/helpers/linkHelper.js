const linkedInOpener = () => {
  const url = 'https://www.linkedin.com/in/azamat-nuriddinov/';

  const s = window.open(url, '_blank');

  if (s && s.focus) {
    s.focus();
  } else if (!s) {
    window.location.href = url;
  }
};

const gitHubOpener = () => {
  const url = 'https://github.com/bettercallazamat/';

  const s = window.open(url, '_blank');

  if (s && s.focus) {
    s.focus();
  } else if (!s) {
    window.location.href = url;
  }
};

export { linkedInOpener, gitHubOpener };