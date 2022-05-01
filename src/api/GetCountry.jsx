import CurrentAPI from "./CurrentApi";

/**
 * 
 * @param {String} country - country for searching.
 */
async function GetCountry (country) {
    let active = await CurrentAPI();
    let url = `${active}/country/${encodeURI(country)}`;
    try {
        let res = await fetch(url);
        let json = await res.json();
    
        return json;
    } catch (err) {
        console.log('Error :', err.toString());
        return {status: 'error'};
    }
}

export default GetCountry;