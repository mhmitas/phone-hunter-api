const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    // console.log(phones)
    displayPhones(phones)
}



const displayPhones = phones => {
    console.log(phones)
    const phonesContainer = document.getElementById('phones-container')

    phonesContainer.textContent = '';

    phones = phones.slice(0, 12)

    const showAllContainer = document.getElementById('show-all-container')
    if (phones.length > 11) {
        showAllContainer.classList.remove('hidden')
    } else {
        showAllContainer.classList.add('hidden')
    }

    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList = 'card w-96 bg-white shadow-xl text-black pt-4'
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"
                alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name
            }</h2>
            <p>${phone.slug}</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail()" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `
        // appendChild
        phonesContainer.appendChild(phoneCard)

        toggleLoadingSpinner(false)
    })
}


// handle search button:
const handleSearch = () => {
    toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText)
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner')
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    } else {
        loadingSpinner.classList.add('hidden')
    }
}


const handleShowDetail = (id) => {
    console.log('clicked show detail')
    
}