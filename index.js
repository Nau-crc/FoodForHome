const myList = document.querySelector('ul');
const myRequest = new Request('menu.json');


fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    for (const menu of data.menus) {
      let listItem = document.createElement('li');
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = menu.Precio;
      listItem.append(
        `${
          menu.precio
        } €`
      );
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = `${menu.Titulo}`;
      myList.appendChild(listItem);
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = `${menu.Descripcion}`;
      myList.appendChild(listItem);
    }
  });



function foodApp () 
{
    document.getElementById("shopCart").innerHTML = shopNow()

    function shopNow()
    {
        var cart = [["id", "precio", "titulo", "descripcion"], ["id", "precio", "titulo", "descripcion"], ["id", "precio", "titulo", "descripcion"], ["id", "precio", "titulo", "descripcion"], ["id", "precio", "titulo", "descripcion"]];
        for (var i in cart) 
        {
        console.log("row " + i);

        for (var j in cart[i]) 
            {
            console.log(" " + cart[i][j]);
            }
        }
    }

}