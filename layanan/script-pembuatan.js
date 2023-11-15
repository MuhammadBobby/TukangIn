const teamMembers = [
  {
    src: "../assets/foto/team-1.jpg",
    name: "Jikan Team Contractor",
    alias: "Jikate@team.co.id",
    keahlian: ["building", "rumah"],
    status: "profesional",
    tags: "+6282234542232",
  },
  {
    src: "../assets/foto/team-2.jpg",
    name: "Tukapro Company",
    alias: "tukapro21@yahoo.com",
    keahlian: ["building", "bangunan"],
    status: "profesional",
    tags: "+62823222324590",
  },
];

const teamMembers2 = [
  {
    src: "../assets/foto/team-3.webp",
    name: "Zikarya",
    alias: "zikarya@team.com",
    keahlian: ["building", "gedung"],
    status: "profesional",
    tags: "+6282244234290",
  },
];

let tableRowCount = document.getElementsByClassName("table-row-count");
let tableRowSit = document.getElementsByClassName("table-row-sit");
tableRowCount[0].innerHTML = `(${teamMembers.length}) Tukang Online`;
tableRowSit[0].innerHTML = `(${teamMembers.length}) Tukang Online`;
console.log(tableRowCount);
console.log(tableRowSit);

let tableBody = document.getElementById("team-member-personal");
let tableBody2 = document.getElementById("team-member-team");

const itemsOnPage = 5;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);
const numberOfPages2 = Math.ceil(teamMembers2.length / itemsOnPage);

const start = new URLSearchParams(window.location.search).get("page") || 1;

// table 1
const mappedRecords = teamMembers
  .filter((teamMember, i) => (start - 1) * itemsOnPage < i + 1 && i + 1 <= start * itemsOnPage)
  .map((teamMember) => {
    return `<tr>
        <td class="team-member-profile">
            <img src="${teamMember.src}" alt="${teamMember.name}">
            <span class="profile-info">
                <span class="profile-info__name text-[#236859]">
                <a href="transaksi/transaksipembuatan.html?nama=${teamMember.name}">${teamMember.name}</a>
                </span>
                <span class=profile-info__alias>
                <a href="https://mail.google.com/${teamMember.alias}" target="_blank">${teamMember.alias}</a>
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${teamMember.status}">
                ${teamMember.status}
            </span>
        </td>
        <td><span class="tags">
        ${teamMember.keahlian.map((tag) => `<span class="tag tag--${tag}">${tag}</span>`).join("")}
    </span> </td>
    <td>
    <a href="https://wa.me/${teamMember.tags}" style="display: block;" target="_blank"><img src="../assets/Whatsapp.png" alt="whatsapp" width="50px"></a>       
    </td>
    </tr>`;
  });

tableBody.innerHTML = mappedRecords.join("");

const pagination = document.querySelector(".pagination");

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
  const pageNumber = i + 1;
  console.log(pageNumber, start);
  linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ""} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join("");

// table 2
const mappedRecords2 = teamMembers2
  .filter((teamMember, i) => (start - 1) * itemsOnPage < i + 1 && i + 1 <= start * itemsOnPage)
  .map((teamMember) => {
    return `<tr>
        <td class="team-member-profile">
            <img src="${teamMember.src}" alt="${teamMember.name}">
            <span class="profile-info">
                <span class="profile-info__name text-[#236859]">
                <a href="transaksi/transaksipembuatan.html?nama=${teamMember.name}">${teamMember.name}</a>
                </span>
                <span class=profile-info__alias>
                <a href="https://mail.google.com/${teamMember.alias}" target="_blank">${teamMember.alias}</a>
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${teamMember.status}">
                ${teamMember.status}
            </span>
        </td>
        <td><span class="tags">
        ${teamMember.keahlian.map((tag) => `<span class="tag tag--${tag}">${tag}</span>`).join("")}
    </span> </td>
    <td>
    <a href="https://wa.me/${teamMember.tags}" style="display: block;" target="_blank"><img src="../assets/Whatsapp.png" alt="whatsapp" width="50px"></a>       
    </td>
    </tr>`;
  });

tableBody2.innerHTML = mappedRecords2.join("");

const pagination2 = document.querySelector(".pagination2");

const linkList2 = [];

for (let i = 0; i < numberOfPages; i++) {
  const pageNumber = i + 1;
  console.log(pageNumber, start);
  linkList2.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ""} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination2.innerHTML = linkList2.join("");
