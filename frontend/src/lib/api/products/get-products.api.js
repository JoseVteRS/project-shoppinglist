

export const getProductsApi = async ()=> {
    try {
        const res = await fetch(`http://localhost:3004/api/products`)
        
        let productsList;
        if(res.ok) productsList = await res.json();
        return {
            productsList,
            hasError: false
        }
    } catch (error) {
        return {
            productsList: undefined,
            hasError: true
        }
    }
}