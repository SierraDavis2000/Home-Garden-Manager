async function newFormHandler(event) {
  event.preventDefault();

  const date_watered = document.querySelector('#date_watered').value;
  const plants_watered = document.querySelector('#plants_watered').value;

  const response = await fetch(`/api/logs`, {
    method: 'POST',
    body: JSON.stringify({
      date_watered,
      plants_watered,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/waterlog');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-waterlog-form').addEventListener('submit', newFormHandler);