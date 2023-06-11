/** @format */

// /** @format */

// 'use strict';

// import { api_key, fetchDataFromServer } from './api.js';

// export function sidebar() {
//   const genreList = {};

//   fetchDataFromServer(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
//     function ({ genres }) {
//       for (const { id, name } of genres) {
//         genreList[id] = name;
//       }
//       genreLink();
//     }
//   );

//   const sidebarInner = document.createElement('div');
//   sidebarInner.classList.add('sidebar-inner');

//   sidebarInner.innerHTML = html`
//     <div
//       class=" sidebar-list  h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
//     >

//     <p class="title" > Genre</p>
//   </div>

//         <div class="sidebar-list" >
//           <p className="title">
//             Language
//           </p>
//           <a href="./movie-list.html" class="sidebar-link" >ENglish</a>
//           <a href="./movie-list.html" class="sidebar-link" >ENglish</a>
//           <a href="./movie-list.html" class="sidebar-link" >ENglish</a>
//           <a href="./movie-list.html" class="sidebar-link" >ENglish</a>
//         </div>
//     </div>
//   `;

//   const genreLink = function () {
//     for (const [genreId, genreName] of Object.entries(genreList)) {
//       const link = document.createElement('a');
//       link.classList.add('sidebar-link');
//       link.setAttribute('href', './movie-list.html');

//       //       link.setAttribute("menu-close", "");
//       // link.setAttribute("onclick", `getMovieList("with_genres=${genreId}", "{$genreName}" )`);
//       link.textContent = genreName;
//       sidebarInner.querySelectorAll('.sidebar-list')[0].appendChild(link);
//     }

//     const sidebar = document.querySelector('[sidebar]');
//     sidebar.appendChild(sidebarInner);
//     toggleSidebar(sidebar);
//   };

//   //   const toggleSidebar = function (sidebar) {
//   //     const sidebarbtn = document.querySelector('[]');
//   //   };
// }

'use strict';

import { api_key, fetchDataFromServer } from './api.js';

export function sidebar() {
  const genreList = {};

  fetchDataFromServer(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
    function ({ genres }) {
      for (const { id, name } of genres) {
        genreList[id] = name;
      }
      genreLink();
    }
  );

  const sidebarInner = document.createElement('div');
  sidebarInner.classList.add('sidebar-inner');

  sidebarInner.innerHTML = `
    <div class="sidebar-list h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <p class="title">Genre</p>
    </div>
    <div class="sidebar-list">
      <p class="title">Language</p>
      <a href="./movie-list.html" class="sidebar-link">English</a>
      <a href="./movie-list.html" class="sidebar-link">English</a>
      <a href="./movie-list.html" class="sidebar-link">English</a>
      <a href="./movie-list.html" class="sidebar-link">English</a>
    </div>
  `;

  const genreLink = function () {
    for (const [genreId, genreName] of Object.entries(genreList)) {
      const link = document.createElement('a');
      link.classList.add('sidebar-link');
      link.setAttribute('href', './movie-list.html');
      link.textContent = genreName;
      sidebarInner.querySelector('.sidebar-list').appendChild(link);
    }

    const sidebar = document.querySelector('[sidebar]');
    sidebar.appendChild(sidebarInner);
    toggleSidebar(sidebar);
  };

  const toggleSidebar = function (sidebar) {
    // Implementation for toggling the sidebar goes here
  };
}
