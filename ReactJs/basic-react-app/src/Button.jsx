// Handling Click Events 

function printHello() {
  console.log("Hello World");
}
function addFriendReq() {
  console.log("Requested Accepted");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <button onClick={addFriendReq}>Add Friend</button>
    </div>
  );
}
