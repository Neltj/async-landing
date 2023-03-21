const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCNYW2vfGrUE6R5mIJYzkRyQ&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ea1d52fe82mshd135c588bbbd154p19e050jsn21f84c37bb38',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

//funzione che si chiama se stessa con (function) in questo caso passiamo una funzione anonima
(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
    <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
    <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
    </a>
    `).slice(0,4).join('')}

    `;

    content.innerHTML = view
  } catch (error) {
    console.log(error)
  }
})();



// fetch('url', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


