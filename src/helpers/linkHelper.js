let linkedInOpener = () => {
  let url = 'https://www.linkedin.com/in/azamat-nuriddinov/';

  let s = window.open(url, '_blank');

  if (s && s.focus) {
    s.focus();
  }
  else if (!s) {
    window.location.href = url;
  }
}

let gitHubOpener = () => {
  let url = 'https://github.com/bettercallazamat/';

  let s = window.open(url, '_blank');

  if (s && s.focus) {
    s.focus();
  }
  else if (!s) {
    window.location.href = url;
  }
}

export {linkedInOpener, gitHubOpener}