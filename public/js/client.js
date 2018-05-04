$(".consume").on("click", function (event) {
  event.preventDefault();
  const data = $(this).parent().serialize()
  const id = $(this).parent().find(`input[name="id"]`).val();
  return $.ajax({
      url: `/tacos/${parseInt(id)}`,
      data: data,
      type: "put",
    })
    .then(response=>window.location.replace("/"))
    .catch(err => console.log('Something went wrong', err))
})