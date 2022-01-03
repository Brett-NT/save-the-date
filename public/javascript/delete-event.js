// figure out how delete button targets the events specific id.

async function newFormHandler(event) {
    event.preventDefault();
  
    const event_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/events/` + event_id, {
      method: 'DELETE',
      body: JSON.stringify({
        event_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-event-btn').addEventListener('click', newFormHandler);