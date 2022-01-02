async function newFormHandler(event) {
    event.preventDefault();
  
    const guest = document.querySelector('input[name="guest-name"]').value;
    const email = document.querySelector('input[name="guest-email"]').value;
    const attendingResponse = document.querySelector('input[name="attending"]').value;
    const event_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    let attending;
    if (attendingResponse === yes) {
        attending = true;
    }else {
        attending = false;
    }
  
    const response = await fetch(`/api/guests`, {
      method: 'POST',
      body: JSON.stringify({
        guest,
        email,
        attending,
        event_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/edit/{{event.id}}');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.add-guest-btn').addEventListener('submit', newFormHandler);