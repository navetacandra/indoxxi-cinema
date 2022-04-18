const API_LIST = ['indoxxi-api1', 'indoxxi-api2'];

const validate = async (res) => {
    if(await res.json()) return true;
    else return false;
};

const CurrentAPI = async function () {
    let active = API_LIST.map(async name => {
        let url = `https://${name}.herokuapp.com`;
        try {
            let res = await fetch(url);
            let _active = await validate(res) ? url : undefined;
            return _active;
        } catch (err) {
            console.log('Error :', err.toString());
            return undefined;
        }
    });

    active = await Promise.all(active);
    return active.filter(url => url !== undefined)[0];
}

export default CurrentAPI;