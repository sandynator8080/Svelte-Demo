/** @type {import('./$types').LayoutServerLoad} */
export async function load({fetch}) {

    const loadProducts = async ()=> {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          const productRes = await fetch ("https://dummyjson.com/products", requestOptions);
          const productData = await productRes.json();
          return productData.products;
    }

    return {
        "products" : loadProducts()
    };
}