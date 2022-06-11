async function addPlantHandler(event) {
  event.preventDefault();

  const common_name = document.querySelector('#common_name').value;
  const latin_name = document.querySelector('#latin_name').value;
  const watering_schedule = document.querySelector('#watering_schedule').value;
  const soil_type = document.querySelector('#soil_type').value;
  const light_req = document.querySelector('#light_req').value;
  const fertilizer_req = document.querySelector('#fertilizer_req').value;
  const space_req = document.querySelector('#space_req').value;
  const indoor_outdoor = document.querySelector('#indoor_outdoor').value;
  const pest_info = document.querySelector('#pest_info').value;
  const pet_care = document.querySelector('#pet_care').value;

  if (common_name) {
    const response =  await fetch(`/api/plants`, {
    method: 'POST',
    body: JSON.stringify({
      common_name,
      latin_name,
      watering_schedule,
      soil_type,
      light_req,
      fertilizer_req,
      space_req,
      indoor_outdoor,
      pest_info,
      pet_care
    }),
    headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    };
}  
document.querySelector('.new-plant-form').addEventListener('submit', addPlantHandler);