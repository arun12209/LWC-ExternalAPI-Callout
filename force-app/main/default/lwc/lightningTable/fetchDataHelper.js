const recordMetadata = {
    name: 'name',
    email: 'email',
    website: 'url',
    amount: 'currency',
    phone: 'phoneNumber',
    closeAt: 'dateInFuture',
};
const ENDPOINT ='https://data-faker.herokuapp.com/collection';
const POST_METHOD = 'POST';
const CONTENT_TYPE = 'application/json; charset=utf-8';
export default function fetchDataHelper({ amountOfRecords }) {
    return fetch(ENDPOINT, {
        method: POST_METHOD,
        headers: {
            'Content-Type': CONTENT_TYPE,
        },
        body: JSON.stringify({
            amountOfRecords,
            recordMetadata,
        }),
    }).then((response) => response.json());
}