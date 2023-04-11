import API from "../constants/api";



export const getPokemons = async (page) => {
	try {
		const res = await fetch(`${API.URL}/api/pokemons?page=${page}`, {
			method: "GET",
		}).then((res) => res.json());
		console.log(res);
		return res;
	} catch (error) {
		return error
	}
};