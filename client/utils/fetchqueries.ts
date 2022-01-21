
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


async function fetchQuery(path:string, params = " "|| null) {
    
    let url:string;

    (params !== null)?url = `${baseUrl}/${path}/${params}`: url = `${baseUrl}/${path}`

    
    
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;

}

export {baseUrl,fetchQuery}