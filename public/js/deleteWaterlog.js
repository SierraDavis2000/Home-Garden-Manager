async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/logs/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/waterlog/');
    } else {
        alert(response.statusText);
    }
}

let deleteButtons = document.querySelectorAll('.delete-waterlog-btn');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteFormHandler);
}