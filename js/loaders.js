const loadImage = (url) => new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', (err) => reject(err));
    img.src = url;
});


const loadJSON = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(r => {
                resolve(r.json())
            })
            .catch(e => reject())
    })
}

export {loadJSON, loadImage}