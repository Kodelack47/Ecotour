selectActivities.addEventlistener("change", () => {
  console.log(selectActivities);
  details.innerhtml = "";
  const id = selectActivities.selectOptions[0].value;
  // const activities = activitiesData.filter((activity) => activity.id == id){

  for (let i = 0; i < activies.length; i++) {
    activies = activies[i];
    if (activies.id == id) {
      details.innerhtml = `
            <h4>Description:</h4> ${activity.description} <br>
            <h4>Location:</h4> ${activitiy.location}
            <h4>Price</h4> ${activitiy.price}`;

      if (activity.price > 0) {
        order.style.display = "block";
      } else {
        order.style.display = "none";
      }
      break;
    }
  }
});


