// Event Object
function handleSubmitForm(event) {
  event.preventDefault();
  console.log("Form Submited Successfully");
}

export default function Form() {
  return (
    <form action="" onSubmit={handleSubmitForm}>
      <input type="text" placeholder="Enter name " name="" id="" />
      <button>Submit</button>
    </form>
  );
}
