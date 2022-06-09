const newFormHandler = async function(event) {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value;
  const scContent = document.querySelector('input[name="sc-content"]').value;
  const wsContent = document.querySelector('input[name="ws-content"]').value;
  const stContent = document.querySelector('input[name="st-content"]').value;
  const lrContent = document.querySelector('input[name="lr-content"]').value;
  const frContent = document.querySelector('input[name="fr-content"]').value;
  const srContent = document.querySelector('input[name="sr-content"]').value;
  const ioContent = document.querySelector('input[name="io-content"]').value;
  const piContent = document.querySelector('input[name="pi-content"]').value;
  const taContent = document.querySelector('input[name="ta-content"]').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      postTitle,
      scContent,
      wsContent,
      stContent,
      lrContent,
      frContent,
      srContent,
      ioContent,
      piContent,
      taContent
    }),
    headers: { 'Content-Type': 'application/json' },
  });
};
    
document.querySelector('#new-post').addEventListener('submit', newFormHandler);