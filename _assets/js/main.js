// Starts and initializes the pjax library, barba in order to create faster experience
// Yes it gracefully degrades!
Barba.Pjax.start();
Barba.Prefetch.init();

// iife to keep variables from poluting the global namespace
(function() {
  
  // Grabbing mobile menu elements 
  var mobileMenuButton = document.getElementById('mobile-menu-button')
  ,  closeButton       = document.getElementById('overlay-close')
  , contentPush        = document.getElementById('overlay-contentpush')
  , menuItems          = document.getElementById('menu-items')
  , container          = document.getElementById('container');
  
  // Classes to slide in and slide out the menu 
  // as well as toggle and push content underneath for extra wow.
  function toggleMenu(e) {
    container.classList.toggle('overlay-open');
    contentPush.classList.toggle('open');
    // Stops event from bubbling the rest of the way up to be more efficient.
    e.stopProgation;
  };
  
  // Adds event listener to mobile menu items so that when clicked the mobile menu closes.
  menuItems.addEventListener('click', function(e) {
    toggleMenu(e);
  });
  
  // Listens for clicks on the mobile menu button to open the mobile menu.
  mobileMenuButton.addEventListener('click', function(e) {
    toggleMenu(e);
  });
  
  // Listens for clicks on the mobile menu's close button and closes it.
  closeButton.addEventListener('click', function(e) {
    toggleMenu(e);
  });
  
  // Sieam Slier
  var mySiema = new Siema({
    perPage: 2,
  });
  
  var prev = document.querySelector('.prev');
  var next = document.querySelector('.next');
  
  prev.addEventListener('click', () => mySiema.prev(2));
  next.addEventListener('click', () => mySiema.next(2));
  
  
})();
