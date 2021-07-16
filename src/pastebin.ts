import { PASTEBIN_DEV_KEY } from './variables'

export const createPaste = async (code:any) => new Promise<string>(async (resolve, reject) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("api_dev_key", PASTEBIN_DEV_KEY);
    urlencoded.append("api_option", "paste");
    urlencoded.append("api_paste_code", code);

    let requestOptions = {
        mode: 'no-cors',
        method: 'POST',
        headers: myHeaders,
        body: urlencoded, 
    };

    fetch( "https://pastebin.com/api/api_post.php", requestOptions as any)
        .then(response => response.text())
        .then(result => resolve(result))
        .catch(error => console.log('error', error));
})

export const getPaste = async (id:any) => new Promise<string>(async (resolve, reject) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let requestOptions = {
        mode: 'no-cors',
        method: 'GET',
        headers: myHeaders
    };

    fetch( `https://pastebin.com/raw/${id}`, requestOptions as any)
        .then(response => response.text())
        .then(result => {console.log(result);resolve(result)})
        .catch(error => console.log('error', error));
})