import React,{useState,useEffect} from "react"
import ReactDOM from "react-dom";

function getStorageValue(key, defaultValue) {
	// getting stored value
	const saved = localStorage.getItem(key);
	const initial = JSON.parse(saved);
	return initial || defaultValue;
}

export const useLocalStorage=(key, defaultValue) => {
	const [value,setValue] = useState(()=>{
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input 
		localStorage.setItem(key, JSON.stringify(value));
	},[key,value]);

	return[value,setValue]
}

export default useLocalStorage