import GetSearch from "../api-config/GetSearch";

async function _Search(keyword) {
    let res = await GetSearch(keyword);
    return res ? res.status === 'success' ? res.result : [] : [];
}

export default _Search;