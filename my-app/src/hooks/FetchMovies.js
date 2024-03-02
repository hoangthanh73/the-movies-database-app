import { useState, useEffect, useReducer } from "react";
import fetchReducer from "../reducers/FetchReducer";

const useFetch = (url = '', initialData = []) => {
    const initialState = {
        isLoading: false,
        data: initialData,
        error: false
    }

    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async (url) => {
            dispatch({ type: 'FETCH_INIT' });

            try {
                const response = await fetch(url);
                const json = await response.json();

                if (isMounted) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: json });
                }
            } catch (error) {
                if (isMounted) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }
            }
        }

        fetchData(url);

        return () => {
            isMounted = false;
        };
    }, [url]);

    return state;
};

export default useFetch;