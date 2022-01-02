async function newFormHandler(event) {
    event.preventDefault();
  
    const event_name = document.querySelector('input[name="event-title"]').value;
    const date = document.querySelector('input[name="event-date"]').value;
    const description = document.querySelector('input[name="event-description"]').value;
    const planner_name = document.querySelector('input[name="planner-name"]').value;
    const planner_contact = document.querySelector('input[name="planner-contact"]').value;
  
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        event_name,
        date,
        description,
        planner_name,
        planner_contact
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