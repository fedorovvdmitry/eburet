async function getResponce() {
  let responce = await fetch('../data/shop.json')
  console.log('responce:\n', responce, '\n /responce: \n')
  let content = await responce.text()
  console.log('await responce.text()\n', content)
  content = JSON.parse(content)
  content = content.slice(0, 9)
  console.log('content.slice(0, 9)', content)
  let key
  for (key in content) {
    console.log(content[key].id, content[key].title)
    console.log(content[key])
  }

  let node_for_insert = document.getElementById('node_for_insert')
  for (key in content) {
    node_for_insert.innerHTML += `
        <li>
        <img src=${content[key].img}>
        <h3 class="card-title">${content[key].title}</h3>
        <p>${content[key].description}</p>
        <p>Цена: ${content[key].price} ₽</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p>Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
                `
  }
}
getResponce()
