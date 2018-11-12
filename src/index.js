import pull from "pull-stream";

document.getElementById("app").innerHTML = `
<h1>Hello Pull-Stream!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

pull(pull.values([1, 2, 3]), pull.log());
pull(pull.values([1, 2, 3]), pull.map(x => x * 2), pull.log());
