async function editFormHandler(event) {
    event.preventDefault();
  
    const event_name = document.querySelector('input[name="event-title"]').value.trim();
    const date = document.querySelector('input[name="event-date"]').value;
    const description = document.querySelector('input[name="event-description"]').value;
    const planner_name = document.querySelector('input[name="planner-name"]').value;
    const planner_contact = document.querySelector('input[name="planner-contact"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/events/${id}`, {
      method: 'PUT',
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