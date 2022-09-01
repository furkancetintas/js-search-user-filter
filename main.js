let resultUl = document.getElementById('result');
let inputFilterDOM = document.getElementById('filter');
let listItem = [];

inputFilterDOM.addEventListener('input', (e) => filterData(e.target.value));

fetch('https://randomuser.me/api/?results=50')
  .then((response) => response.json())
  .then((data) => {
    // Clear result for Loading text..
    resultUl.innerHTML = '';
    data.results.map((user) => {
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
  });

function filterData(searchTerm) {
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
