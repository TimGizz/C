// let i = localStorage.getItem('id')
let idd = localStorage.getItem('id')
const im = document.querySelector('.reviews__content')
const del = document.querySelector('.delete')
// console.log(i);

get();
function get() {
    axios({
    method: 'get',
    url: 'https://672b1e6c976a834dd025b2ee.mockapi.io/reviews',
    params:{
        reviews_id: idd,
        category: 'reviews'
    }
    })
    .then(function (response) {
        let dct = response.data.reverse()
        im.innerHTML='';
        for(i=0; i<dct.length; i++ ){
            create(dct);   
        }
        if (im.textContent == '')
            im.innerHTML='пусто';
    })
    .catch(error => {
        console.error('Ошибка при отправке отзыва:', error);
        console.log('Произошла ошибка при отправке отзыва. Попробуйте снова.');
    });
    
}

function create(dct){

    const reviews = document.createElement('div')
    const name = document.createElement('div')
    const review = document.createElement('div')
    const rating = document.createElement('div')
    const hr = document.createElement('hr')
    const btn = document.createElement('input')

    btn.type = 'submit'
    btn.value = 'удалить'
    btn.classList = 'delete'
    btn.id = dct[i]['id']
    let url = 'https://672b1e6c976a834dd025b2ee.mockapi.io/reviews/'
    btn.onclick = function(id){
        axios.delete(`${url}${this.id}`)
        .then((response) => {
            console.log('Успешно удалено:', response.data);
            console.log(this.id)
            get();
            })
            .catch((error) => {
            console.error('Ошибка при удалении:', error);
            });
    }
    name.textContent = dct[i]['name']
    review.textContent = dct[i]['review']
    rating.textContent = dct[i]['rating']
    // name.textContent = dct['name']
    // review.textContent = dct['review']
    // rating.textContent = dct['rating']  
    
    reviews.appendChild(name)
    reviews.appendChild(review)
    reviews.appendChild(rating)
    reviews.appendChild(btn)
    reviews.appendChild(hr)
    im.appendChild(reviews)
}

function delete_review(id){
    
    
}
function post(){
}
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const review = document.getElementById('name').value;
    const nam = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;
    let url = 'https://672b1e6c976a834dd025b2ee.mockapi.io/reviews/'
    const reviewData = {
        name: nam,
        review: review,
        rating: Number(rating),
        reviews_id: Number(localStorage.getItem('id')),
        category: 'reviews'
    };
    axios.post(url,reviewData)
    .then(response => {
        console.log(response.data)
        get();
    })
    .catch(error => {
        console.error('Ошибка при отправке отзыва:', error);
        console.log('Произошла ошибка при отправке отзыва. Попробуйте снова.');
    });
    // create(reviewData)
});
im.innerHTML='пусто';

