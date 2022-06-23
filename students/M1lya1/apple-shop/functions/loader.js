


const showLoader = () => {
    const loader = document.getElementById('loader');
    console.log(loader);
    loader.classList.remove('loader__hidden');
};

const hideLoader = () => {
    const loader = document.getElementById('loader');
    loader.classList.add('loader__hidden');
}

export {showLoader, hideLoader};
