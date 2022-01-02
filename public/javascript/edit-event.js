async function editFormHandler(event) {
    event.preventDefault();
  
    const event_name = document.querySelector('input[name="event-title"]').value.trim();
    const date = document.querySelector('input[name="event-date"]').value;
    const description = document.querySelector('input[name="event-description"]').value;
    const planner_name=;
    const planner_contact=;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/events/${id}`, {
      method: 'PUT',
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
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  'id',
  'event_name',
  'date',
  'description',
  'planner_name',
  'planner_contact'
  
  document.querySelector('.edit-event-form').addEventListener('submit', editFormHandler);