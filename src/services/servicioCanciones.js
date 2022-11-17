export async function servicioCanciones(){

    const URI="https://api.spotify.com/v1/artists/13JJKrUewC1CJYmIDXQNoH/top-tracks?market=US"
    const TOKEN="Bearer BQCC8I2zYRVH_W-ENFem6ERvrrZmq7ySrDNZMPnnC0n9mMYu616mYLrgjZw5YBtHwW6wd60sQuntM0cYcesKX5tTq6ZyGp7-0haFYyFEuYMP_bkn1-Uw9FnHmUIXmqDZy4EcLuHHCnZhS4ad38Wyo4HwdLMa33iEfSXmAQdh5HxRMFTjYOeSjrEo78qbvVHuCqY"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
    let respuesta=await fetch(URI,PETICION)
    let canciones = await respuesta.json()

    return canciones

}

