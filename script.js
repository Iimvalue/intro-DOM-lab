let welcomeClass = document.getElementsByClassName("welcome")[0];

welcomeClass.style.color = "blue";
welcomeClass.style.backgroundColor = "gray";

let pItem = document.getElementById("p-item");
pItem.style.fontWeight = "bold";

let img = document.getElementsByTagName("img")[0];

img.src =
  "https://cdn-icons.flaticon.com/svg/6422/6422202.svg?token=exp=1746604144~hmac=4456ab305b1521605693f64f4f467908";
img.style.width = "100px";

let ulTag = document.querySelector("ul");
ulTag.innerHTML = `
<li>Welcome</li>
<li>Hi</li>
<li>Hello</li>
`;

ulTag.style.color = "blue";
ulTag.style.display = "inline";

let liTag = ulTag.querySelectorAll("li");

liTag.forEach((li) => {
  li.style.color = "black";
  li.style.display = "inline-block";
  li.style.border = "1px soild #eee";
});

let tableTag = document.getElementsByTagName("table")[0];
tableTag.innerHTML = `
  <tr>
    <th> Head</th>
    <th> Head</th>
    <th> Head</th>
  </tr>
  <tr>
    <td> Cell</td>
    <td>Cell</td>
    <td> Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>

`;
