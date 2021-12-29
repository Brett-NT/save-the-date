async function newFormHandler(event) {
    event.preventDefault();
  
    const event_name = document.querySelector('input[name="event-title"]').value;
    const date = document.querySelector('input[name="event-date"]').value;
    const description = document.querySelector('input[name="event-description"]').value;
  
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        event_name,
        date,
        description
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
  
  document.querySelector('.event-post-form').addEventListener('submit', newFormHandler);