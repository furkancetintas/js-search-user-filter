let resultUl = document.getElementById('result');
let inputFilterDOM = document.getElementById('filter');
let listItem = [];

inputFilterDOM.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
  const apiRes = await fetch('https://randomuser.me/api/?results=50');

  const { results } = await apiRes.json();

  // Clear result
  resultUl.innerHTML = '';

  results.forEach((user) => {
    const li = document.createElement('li');

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}"/>
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>
                ${user.location.city}, ${user.location.country}
            </p>
        </div>
    `;

    listItem.push(li);

    resultUl.appendChild(li);
  });
}
getData();

function filterData(searchTerm) {
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
