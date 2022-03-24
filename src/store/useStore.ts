import { useContext } from 'react';
import { AppStoreContext } from './AppStore';

/**
 * Use Store Hook for using the store context
 * If the app is not wrapped around a StoreProvider it will throw an error
 */
const useStore = () => {
	const context = useContext(AppStoreContext);

	if (context === undefined) {
		throw new Error('useStore requires a Store in the upper scope.');
	}
	return context;
};

export default useStore;
