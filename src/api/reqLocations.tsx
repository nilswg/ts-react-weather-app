const reqLocations = async(input:string)=>{

    /**
     * when you call metaweather api is would be blocked by cors problem,
     * because metaweather don't have "Access-Control-Allow-Origin" in their response header.
     * 
     * There are some ways, you can solved this problem:
     * 
     * 1) Download some extensions to your browser, ex: CORS Unblock for Chrome
     *    But it only work on your own pc 🤔
     * 
     * 2) Take look at "https://cors-anywhere.herokuapp.com/", it can help you request temporarily.
     * 
     * 3) Build a proxy server to get data from metaweather for your own. ex: https://github.com/kaveets24/react-metaweather
     * 
     * 4) Or, JUST DO NOT USE metaweather, there are better api resources to build app.
     * 
     */
    // const url = `https://react-metaweather.herokuapp.com/api/location/search/${input}` // backup
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${input}`;
    const res = await ( 
        await fetch(url, {
            method: "GET",
            
        })
    ).json();

    return res.slice(0, 6);
}

export default reqLocations