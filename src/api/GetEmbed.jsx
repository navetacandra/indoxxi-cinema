import CurrentAPI from "./CurrentApi";

/**
 * 
 * @param {String} id - id for get embed and detail.
 */
async function GetEmbed (id) {
    let active = await CurrentAPI();
    let url = `${active}/embed/?id=${encodeURIComponent(id)}`;
    let res = await fetch(url);
    let json = await res.json();

    return json;
}

export default GetEmbed;