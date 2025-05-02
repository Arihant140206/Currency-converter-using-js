import currencyapi from '@everapi/currencyapi-js'

const client = new currencyapi('cur_live_Uf4ji0kwub6hjpXpSOhGxNqFdMu0jhvDIWnzdb3U')
client.latest({
    base_currency: 'USD',
    currencies: 'EUR'
}).then(response => {
    console.log(response)
});
