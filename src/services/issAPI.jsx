const ISS_BASE_API = 'http://api.open-notify.org/iss-now.json';

const getCurrentISSLocation = async () => {
  const issRequest = await fetch(ISS_BASE_API);
  const issJson = issRequest.json();

  return issJson
}

export default getCurrentISSLocation