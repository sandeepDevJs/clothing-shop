import shopTypes from "./shop.types";
import {
	firestore,
	convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
	type: shopTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
	type: shopTypes.FETCH_COLLECTION_SUCCESS,
	payload: collectionMap,
});

export const fetchCollectonFailure = (errorMessage) => ({
	type: shopTypes.FETCH_COLLECTION_FAILURE,
	payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
	return (dispatch) => {
		dispatch(fetchCollectionStart());
		const collectionRef = firestore.collection("collections");

		collectionRef
			.get()
			.then((snapshot) => {
				const collectionMap = convertCollectionsSnapShotToMap(snapshot);
				dispatch(fetchCollectionSuccess(collectionMap));
			})
			.catch((error) => dispatch(fetchCollectonFailure(error.message)));
	};
};
