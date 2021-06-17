// http://www.vimeo.com/123

const videoIdInput = document.getElementById('vimeoid');
const output = document.getElementById('output');

    function validateVimeoLink() {
        let catchUrl = document.getElementById('url')
        let result = (catchUrl.value).includes('vimeo.com');
        let url = catchUrl.value

        if(result == true) {
            let idVideo = url.substring(url.indexOf(".com/") + 5 )           
            // teste no console
            console.log(idVideo)
            console.log(`https://vimeo.com/api/v2/video/${idVideo}.json`)

            fetch(`https://vimeo.com/api/v2/video/${idVideo}.json`)
            .then(response => {
                return response.text();
              })
              .then(data => {
                const { thumbnail_small } = JSON.parse(data)[0];
                const small = `<img src="${thumbnail_small}"/>`;
                output.innerHTML = small;   
                
                return console.log(thumbnail_small)
              })
              .catch(error => {
                console.log(error);
              });
        } else {
            return console.log('url errada')
        }
    }   