import CurrentAPI from "./CurrentApi";

/**
 * 
 * @param {String} genre - genre for searching.
 */
async function GetGenre (genre) {
    let active = await CurrentAPI();
    let url = `${active}/genre/${encodeURI(genre)}`;
    try {
        let res = await fetch(url);
        let json = await res.json();
    
        return json;
    } catch (err) {
        console.log('Error :', err.toString());
        return {status: 'error'};
    }
}

export default GetGenre;