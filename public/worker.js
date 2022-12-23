var CACHE_NAME = "covfefe2"

var urlsToCache = [
    '/favicon.ico',
    '/index.html',
    '/worker.js',
    '/testo.js',
    '/manifest.json',
    '/robots.txt',
    '/assets/bootstrap/css/bootstrap.min.css',
    '/assets/bootstrap/js/bootstrap.min.js',
    '/assets/css/Brewing_Guide2.css',
    '/assets/css/Coffee_Article.css',
    '/assets/css/Community.css',
    '/assets/css/Brewing_Guide3.css',
    '/assets/css/Brewing_Guide4.css',
    '/assets/css/styles.css',
    '/assets/css/Features-Clean.css',
    '/assets/css/Multiple-Input-Select-Pills.css',
    '/assets/css/Ultimate-Sidebar-Menu-BS5.css',
    '/assets/css/Round_switch.css',
    '/assets/css/Profile_page.css',
    '/assets/css/Error.css',
    '/assets/css/Login_Register.css',
    '/assets/css/Brewing_Guide.css',
    '/assets/css/Admin_page.css',
    '/assets/js/CoffeeProject.js',
    '/assets/js/CoffeeAvarta.js',
    '/assets/js/bs-init.js',
    '/assets/img/pwaicon512.png',
    '/assets/img/legend_water.png',
    '/assets/img/MokaPot.png',
    '/assets/img/Tools_5.png',
    '/assets/img/Tools_4.png',
    '/assets/img/Error2.png',
    '/assets/img/Favorite Icon.png',
    '/assets/img/legend_rename.png',
    '/assets/img/Moka_ICO.png',
    '/assets/img/Tools_6.png',
    '/assets/img/Tools_7.png',
    '/assets/img/Error1.png',
    '/assets/img/Tools_3.png',
    '/assets/img/Tools_2.png',
    '/assets/img/guide_pack_ico.png',
    '/assets/img/Hario_ICO.png',
    '/assets/img/guide_ratio_ico.png',
    '/assets/img/Tools_1.png',
    '/assets/img/Frenchpress_ICO.png',
    '/assets/img/AvatarIcon.jpg',
    '/assets/img/guide_water_ico.png',
    '/assets/img/guide_timer_ico.png',
    '/assets/img/Process_Dummy_icon.png',
    '/assets/img/Shop Icon.png',
    '/assets/img/legend_name.png',
    '/assets/img/legend_picture.png',
    '/assets/img/Aeropress_ICO.png',
    '/assets/img/legend_process.png',
    '/assets/img/Chemex.png',
    '/assets/img/guide_bean_ico.png',
    '/assets/img/Timer_pause_ico.png',
    '/assets/img/Article_Dummy.png',
    '/assets/img/Timer_play_ico.png',
    '/assets/img/Frenchpress.png',
    '/assets/img/legend_note.png',
    '/assets/img/legend_time.png',
    '/assets/img/legend_bean.png',
    '/assets/img/Comment_Female.png',
    '/assets/img/guide_grind_ico.png',
    '/assets/img/BG1.png',
    '/assets/img/Aeropress192.png',
    '/assets/img/guide_heat_ico.png',
    '/assets/img/ALL_ICO.png',
    '/assets/img/Sample.png',
    '/assets/img/Mug icon.png',
    '/assets/img/pwaicon192.png',
    '/assets/img/Shop_Dummy.png',
    '/assets/img/legend_tool.png',
    '/assets/img/Timer_skip_ico.png',
    '/assets/img/CoffeeCactus.png',
    '/assets/img/Mainprofile3.jpg',
    '/assets/img/Picture1.png',
    '/assets/img/Finished_ICO1.gif',
    '/assets/img/Mainprofile2.png',
    '/assets/img/Tools_10.png',
    '/assets/img/Comment_Male.png',
    '/assets/img/Cup Icon.png',
    '/assets/img/Picture3.png',
    '/assets/img/5sec.mp3',
    '/assets/img/Mainprofile1.jpg',
    '/assets/img/Chemex_ICO.png',
    '/assets/img/Tools_11.png',
    '/assets/img/Mainprofile5.png',
    '/assets/img/Hario V60.png',
    '/assets/img/Finished_text.gif',
    '/assets/img/Mainprofile4.png',
    '/assets/img/Tools_9.png',
    '/assets/img/Tools_8.png',
    '/assets/img/Aeropress.png',
    '/assets/fonts/fa-solid-900.ttf',
    '/assets/fonts/fontawesome-webfont.svg',
    '/assets/fonts/MaterialIcons-Regular.svg',
    '/assets/fonts/fontawesome5-overrides.min.css',
    '/assets/fonts/FontAwesome.otf',
    '/assets/fonts/fa-regular-400.svg',
    '/assets/fonts/ionicons.eot',
    '/assets/fonts/fa-regular-400.woff2',
    '/assets/fonts/ionicons.woff',
    '/assets/fonts/MaterialIcons-Regular.woff2',
    '/assets/fonts/fa-solid-900.eot',
    '/assets/fonts/ionicons.ttf',
    '/assets/fonts/fontawesome-all.min.css',
    '/assets/fonts/fontawesome-webfont.woff2',
    '/assets/fonts/fa-brands-400.svg',
    '/assets/fonts/material-icons.min.css',
    '/assets/fonts/fa-regular-400.woff',
    '/assets/fonts/fa-brands-400.eot',
    '/assets/fonts/MaterialIcons-Regular.woff',
    '/assets/fonts/fa-solid-900.svg',
    '/assets/fonts/fontawesome-webfont.ttf',
    '/assets/fonts/ionicons.min.css',
    '/assets/fonts/MaterialIcons-Regular.ttf',
    '/assets/fonts/font-awesome.min.css',
    '/assets/fonts/fa-solid-900.woff',
    '/assets/fonts/fa-regular-400.ttf',
    '/assets/fonts/ionicons.svg',
    '/assets/fonts/fontawesome-webfont.woff',
    '/assets/fonts/fa-solid-900.woff2',
    '/assets/fonts/fa-brands-400.woff2',
    '/assets/fonts/fa-brands-400.woff',
    '/assets/fonts/fa-brands-400.ttf',
    '/assets/fonts/fontawesome-webfont.eot',
    '/assets/fonts/MaterialIcons-Regular.eot',
    '/assets/fonts/fa-regular-400.eot',
    '../src/styles/Brewing_Guide2.css',
    '../src/styles/Coffee_Article.css',
    '../src/styles/Community.css',
    '../src/styles/Brewing_Guide3.css',
    '../src/styles/Range_Slider.css',
    '../src/styles/Brewing_Guide4.css',
    '../src/styles/.DS_Store',
    '../src/styles/styles.css',
    '../src/styles/Features-Clean.css',
    '../src/styles/Multiple-Input-Select-Pills.css',
    '../src/styles/Ultimate-Sidebar-Menu-BS5.css',
    '../src/styles/Round_switch.css',
    '../src/styles/Profile_page.css',
    '../src/styles/Error.css',
    '../src/styles/Login_Register.css',
    '../src/styles/content-styles.css',
    '../src/styles/Brewing_Guide.css',
    '../src/styles/Admin_page.css',
    
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['your-app-name'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});