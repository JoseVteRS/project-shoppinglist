import { useEffect, useMemo, useReducer } from 'react';
import { PRODUCT_ACTIONS } from '../../constants/actions/product-actions';
import { productListAllApi } from '../../lib/api/products/product-get-all.api';
import { productListByCategories } from '../../lib/api/products/product-get-by-category.api';
import { productGetById } from '../../lib/api/products/product-get-by-id.api';
import { ProductContext } from '../../lib/context/product-context';
import { useProducts } from '../../lib/hooks/use-products';
import {
	productReducer,
	PRODUCTS_CONTEXT_INITIAL_STATE
} from '../../lib/reducers/product-reducer';

const ProductProvider = ({ children }) => {
	const { products } = useProducts();
	const [state, dispatch] = useReducer(
		productReducer,
		PRODUCTS_CONTEXT_INITIAL_STATE
	);

	const listProducts = async () => {
		dispatch({
			type: PRODUCT_ACTIONS.PRODUCTS_LIST_INDEX,
			payload: products
		});
	};

	const addProductToIndexListOnCreate = product => {
		dispatch({
			type: PRODUCT_ACTIONS.PRODUCT_ADD_TO_INDEX_ON_CREATE,
			payload: [...state.productListIndex, ...product]
		});
	};

	const selectProduct = async productId => {
		const product = await productGetById(productId);
		dispatch({
			type: PRODUCT_ACTIONS.PRODUCT_INFO,
			payload: product.product.data
		});
	};

	const addProductToList = async product => {
		// const product = await productGetById(productId);
		const productsInListPreSaved = state.productsInListPreSaved.some(
			prod => prod._id === product._id
		);

		if (!productsInListPreSaved) {
			return dispatch({
				type: PRODUCT_ACTIONS.LIST_ADD_PRODUCT,
				payload: [
					...state.productsInListPreSaved,
					{
						...product,
						quantity: parseInt(1)
					}
				]
			});
		}

		const updateProducts = state.productsInListPreSaved.map(prod => {
			if (prod._id !== product._id) return prod;

			prod.quantity += 1;
			return prod;
		});

		dispatch({
			type: PRODUCT_ACTIONS.LIST_ADD_PRODUCT,
			payload: updateProducts
		});
	};

	const updateListQuantity = product => {
		dispatch({
			type: PRODUCT_ACTIONS.LIST_CHANGE_QUANITY,
			payload: product
		});
	};

	return (
		<ProductContext.Provider
			value={{
				...state,
				listProducts,
				selectProduct,
				addProductToList,
				updateListQuantity,
				addProductToIndexListOnCreate
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
