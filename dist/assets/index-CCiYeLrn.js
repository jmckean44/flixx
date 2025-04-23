(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const y="18ee293fc284d43c4751d642546d411f",s={currentPage:window.location.pathname,search:{term:"",type:"",page:1,totalPages:1,totalResults:0},api:{apiKey:y,apiURL:"https://api.themoviedb.org/3/"}};async function v(){const{results:a}=await o("movie/popular");a.forEach(e=>{const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`
          <a href="movie-details.html?id=${e.id}">
            ${e.poster_path?`<img
              src="https://image.tmdb.org/t/p/w500${e.poster_path}"
              class="card-img-top"
              alt="${e.title}"
            />`:`<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${e.title}"
          />`}
          </a>
          <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${e.release_date}</small>
            </p>
          </div>
        `,document.querySelector("#popular-movies").appendChild(t)})}async function f(){const{results:a}=await o("tv/popular");a.forEach(e=>{const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`
          <a href="tv-details.html?id=${e.id}">
            ${e.poster_path?`<img
              src="https://image.tmdb.org/t/p/w500${e.poster_path}"
              class="card-img-top"
              alt="${e.name}"
            />`:`<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${e.name}"
          />`}
          </a>
          <div class="card-body">
            <h5 class="card-title">${e.name}</h5>
            <p class="card-text">
              <small class="text-muted">Air Date: ${e.first_air_date}</small>
            </p>
          </div>
        `,document.querySelector("#popular-shows").appendChild(t)})}async function $(){const a=window.location.search.split("=")[1],e=await o(`movie/${a}`);u("movie",e.backdrop_path);const t=document.createElement("div");t.innerHTML=`
  <div class="details-top">
  <div>
  ${e.poster_path?`<img
    src="https://image.tmdb.org/t/p/w500${e.poster_path}"
    class="card-img-top"
    alt="${e.title}"
  />`:`<img
  src="../images/no-image.jpg"
  class="card-img-top"
  alt="${e.title}"
/>`}
  </div>
  <div>
    <h2>${e.title}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${e.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${e.release_date}</p>
    <p>
      ${e.overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
      ${e.genres.map(r=>`<li>${r.name}</li>`).join("")}
    </ul>
    <a href="${e.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> $${m(e.budget)}</li>
    <li><span class="text-secondary">Revenue:</span> $${m(e.revenue)}</li>
    <li><span class="text-secondary">Runtime:</span> ${e.runtime} minutes</li>
    <li><span class="text-secondary">Status:</span> ${e.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">
    ${e.production_companies.map(r=>`<span>${r.name}</span>`).join(", ")}
  </div>
</div>
  `,document.querySelector("#movie-details").appendChild(t)}async function w(){const a=window.location.search.split("=")[1],e=await o(`tv/${a}`);u("tv",e.backdrop_path);const t=document.createElement("div");t.innerHTML=`
  <div class="details-top">
  <div>
  ${e.poster_path?`<img
    src="https://image.tmdb.org/t/p/w500${e.poster_path}"
    class="card-img-top"
    alt="${e.name}"
  />`:`<img
  src="../images/no-image.jpg"
  class="card-img-top"
  alt="${e.name}"
/>`}
  </div>
  <div>
    <h2>${e.name}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${e.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Last Air Date: ${e.last_air_date}</p>
    <p>
      ${e.overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
      ${e.genres.map(r=>`<li>${r.name}</li>`).join("")}
    </ul>
    <a href="${e.homepage}" target="_blank" class="btn">Visit show Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Show Info</h2>
  <ul>
    <li><span class="text-secondary">Number of Episodes:</span> ${e.number_of_episodes}</li>
    <li><span class="text-secondary">Last Episode To Air:</span> ${e.last_episode_to_air.name}</li>
    <li><span class="text-secondary">Status:</span> ${e.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">
    ${e.production_companies.map(r=>`<span>${r.name}</span>`).join(", ")}
  </div>
</div>
  `,document.querySelector("#show-details").appendChild(t)}function u(a,e){const t=document.createElement("div");t.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${e})`,t.style.backgroundSize="cover",t.style.backgroundPosition="center",t.style.backgroundRepeat="no-repeat",t.style.height="100vh",t.style.width="100vw",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.zIndex="-1",t.style.opacity="0.1",a==="movie"?document.querySelector("#movie-details").appendChild(t):document.querySelector("#show-details").appendChild(t)}async function b(){const a=window.location.search,e=new URLSearchParams(a);if(console.log(e),s.search.type=e.get("type"),s.search.term=e.get("search-term"),s.search.term!==""&&s.search.term!==null){const{results:t,total_pages:r,total_results:i,page:n}=await d();if(s.search.page=n,s.search.totalPages=r,s.search.totalResults=i,t.length===0){p("No results found");return}l(t),document.querySelector("#search-term").value=""}else p("Please enter a search term")}function l(a){document.querySelector("#search-results").innerHTML="",document.querySelector("#search-results-heading").innerHTML="",document.querySelector("#pagination").innerHTML="",a.forEach(e=>{const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`
          <a href="${s.search.type}-details.html?id=${e.id}">
            ${e.poster_path?`<img
              src="https://image.tmdb.org/t/p/w500${e.poster_path}"
              class="card-img-top"
              alt="${s.search.type==="movie"?e.title:e.name}"
            />`:`<img
            src="../images/no-image.jpg"
            class="card-img-top"
             alt="${s.search.type==="movie"?e.title:e.name}"
          />`}
          </a>
          <div class="card-body">
            <h5 class="card-title">${s.search.type==="movie"?e.title:e.name}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${s.search.type==="movie"?e.release_date:e.first_air_date}</small>
            </p>
          </div>
        `,document.querySelector("#search-results-heading").innerHTML=`
     <h2 style="text-align:center;">${a.length} <span style="font-weight:normal; text-transform: none">of</span> ${s.search.totalResults} <span style="font-weight:normal; text-transform: none">results for</span> "${s.search.term}"</h2>
    `,document.querySelector("#search-results").appendChild(t)}),_()}function _(){const a=document.createElement("div");a.classList.add("pagination"),a.innerHTML=`
	<button class="btn btn-primary" id="prev">Prev</button>
	<button class="btn btn-primary" id="next">Next</button>
	<div class="page-counter">Page ${s.search.page} of ${s.search.totalPages}</div>
	`,document.querySelector("#pagination").appendChild(a),s.search.page===1&&(document.querySelector("#prev").disabled=!0),s.search.page===s.search.totalPages&&(document.querySelector("#next").disabled=!0),document.querySelector("#next").addEventListener("click",async()=>{s.search.page++;const{results:e,total_pages:t}=await d();l(e)}),document.querySelector("#prev").addEventListener("click",async()=>{s.search.page--;const{results:e,total_pages:t}=await d();l(e)})}async function S(){const{results:a}=await o("movie/now_playing");a.forEach(e=>{const t=document.createElement("div");t.classList.add("swiper-slide"),t.innerHTML=`   
      <a href="movie-details.html?id=${e.id}">
        <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}" />
      </a>
      <h4 class="swiper-rating">
        <i class="fas fa-star text-secondary"></i> ${e.vote_average.toFixed(1)} / 10
      </h4>`,document.querySelector(".swiper-wrapper").appendChild(t),L()})}function L(){new Swiper(".swiper",{slidersPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:4e3,disableOnInteraction:!0},breakpoints:{500:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20},1200:{slidesPerView:4,spaceBetween:30}}})}async function o(a){const e=s.api.apiKey,t=s.api.apiURL;h();const i=await(await fetch(`${t}${a}?api_key=${e}&language=en-US`)).json();return g(),i}async function d(){const a=s.api.apiKey,e=s.api.apiURL;h();const r=await(await fetch(`${e}search/${s.search.type}?api_key=${a}&language=en-US&query=${s.search.term}&page=${s.search.page}`)).json();return g(),r}function h(){document.querySelector(".spinner").classList.add("show")}function g(){document.querySelector(".spinner").classList.remove("show")}function x(){document.querySelectorAll(".nav-link").forEach(e=>{e.getAttribute("href")===s.currentPage?e.classList.add("active"):e.classList.remove("active")})}function p(a,e="error"){const t=document.createElement("div");t.classList.add("alert",e),t.appendChild(document.createTextNode(a)),document.querySelector("#alert").appendChild(t),setTimeout(()=>t.remove(),3e3)}function m(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function P(){switch(s.currentPage){case"/":case"/index.html":S(),v();break;case"/shows.html":f();break;case"/movie-details.html":$();break;case"/tv-details.html":w();break;case"/search.html":b();break}x()}document.addEventListener("DOMContentLoaded",P);
