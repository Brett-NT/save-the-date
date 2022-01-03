let attending = false;

async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="guest-name"]').value;
  const email = document.querySelector('input[name="guest-email"]').value;

  const event_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/guests`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      attending,
      event_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/edit/' + event_id);
  } else {
    alert(response.statusText);
  }
}
function attendingValue(event) {
  event.preventDefault();

  if (this.value === 'yes') {
    attending = true;
  } else {
    attending = false;
  }

}
document.querySelector('.add-guest-btn').addEventListener('click', newFormHandler);
document.querySelectorAll('.attending')[0].addEventListener('change', attendingValue);
document.querySelectorAll('.attending')[1].addEventListener('change', attendingValue);