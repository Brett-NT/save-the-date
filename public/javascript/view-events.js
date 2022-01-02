function getEvents() {
  

    let div = document.getElementById("div");
    fetch(`/api/events`)
    .then(response => response.json())
    .then(event => {
        console.log('data', event)
        //loop here
        for (let i = 0; i<event.length; i++){
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            let a = document.createElement("a");
            let br = document.createElement("br");
            

            li.innerHTML = event[i].event_name;
            li2.innerHTML = event[i].date;
            li3.innerHTML = event[i].description;
            li4.innerHTML = event[i].planner_name;
            li5.innerHTML = event[i].planner_contact;

            ul.appendChild(li);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);

            div.appendChild(ul);
            div.appendChild(a);
            div.append(br);

        }
    })
  }

getEvents(); 
