import shopTypes from "./shop.types";

export const updateCollections = (collectionMap) => ({
	type: shopTypes.UPDATE_COLLECTIONS,
	payload: collectionMap,
});
