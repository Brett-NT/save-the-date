// figure out how delete button targets the events specific id.

async function newFormHandler(event) {
    event.preventDefault();
  
    const event_id = document.querySelector('input[name="event-id"]').value;
  
    const response = await fetch(`/api/events`, {
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
  
  document.querySelector('.new-event-form').addEventListener('submit', newFormHandler);