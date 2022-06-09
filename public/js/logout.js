const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log('You are logged out!');
    document.location.replace('/');
  } else {
    alert('You are not signed in!');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
