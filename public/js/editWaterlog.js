async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const date_watered = document.querySelector('.date_watered').value;
  const plants_watered = document.querySelector('.plants_watered').value;

  const response = await fetch(`/api/logs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      date_watered,
      plants_watered,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/waterlog');
  } else {
    alert(response.statusText);
  }
}

let editWaterlog = document.querySelectorAll('.save-waterlog-btn');
for (let i = 0; i < editWaterlog.length; i++) {
  editWaterlog[i].addEventListener('click', editFormHandler)
};