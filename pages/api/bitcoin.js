async function bitcoin(req, res) {
    const apiMercado = await fetch("https://www.mercadobitcoin.net/api/btc/ticker");
    const apiMercadoJson = await apiMercado.json();

    const maiorPreco24h = apiMercadoJson.ticker.high;
    const menorPreco24h = apiMercadoJson.ticker.low;
    const volume24h = apiMercadoJson.ticker.vol;

    res.statusCode = 200
    res.json({
        maiorPreco24h: maiorPreco24h,
        menorPreco24h: menorPreco24h,
        volume24h: volume24h
    })

}

export default bitcoin;