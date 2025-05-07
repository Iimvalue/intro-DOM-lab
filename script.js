let welcomeClass = document.getElementsByClassName("welcome")[0];

welcomeClass.style.color = "blue";
welcomeClass.style.backgroundColor = "gray";

let pItem = document.getElementById("p-item");
pItem.classList.add("pClass");

let img = document.getElementsByTagName("img")[0];

img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fsrc%2F477%2F4774988.jpg&f=1&nofb=1&ipt=d5f9adb3eb4c6c402a6c0708e1a7c29cda66dd69283b62cad421c1f2c89f73e9";
img.style.width = "100px"

let ulTag = document.querySelector("ul");
ulTag.innerHTML = `
<li>Welcome</li>
<li>Hi</li>
<li>Hello</li>
`;

ulTag.style.color = "blue";
let liTag = ulTag.querySelectorAll("li");

liTag.forEach((li) => {
  li.style.color = "black";
  li.style.display = "inline-block";
  li.style.border = "1px solid black";
});

let tableTag = document.getElementsByTagName("table")[0];
tableTag.innerHTML = `
  <tr class="js-table">
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
