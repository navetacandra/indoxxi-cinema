import CurrentAPI from "./CurrentApi";

/**
 * 
 * @param {String} keyword - Keyword for searching.
 */
async function GetSearch (keyword) {
    let active = await CurrentAPI();
    let url = `${active}/search/${encodeURI(keyword)}`;
    try {
        let res = await fetch(url);
        let json = await res.json();
    
        return json;
    } catch (err) {
        console.log('Error :', err.toString());
        return {status: 'error'};
    }
}

export default GetSearch;