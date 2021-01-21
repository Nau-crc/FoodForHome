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