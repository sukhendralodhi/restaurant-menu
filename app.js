const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://cdn.pixabay.com/photo/2017/01/16/17/42/pancake-1984712__340.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1528740096961-3798add19cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29kemlsbGElMjBtaWxrc2hha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnRyeSUyMGRlbGlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVnZyUyMGF0dGFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b3JlbyUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://images.unsplash.com/photo-1592086326871-f7cf2f1801ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFjb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://images.unsplash.com/photo-1555243896-771a81243361?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBjbGFzc2ljJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNpbXBsZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ymlzb24lMjBzdGVhayUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ]; 

  const sectionCenter = document.querySelector('#section-center');

  window.addEventListener('DOMContentLoaded', () => {
    let displayMenu = menu.map((item) => {
       
        return `<article class="flex flex-col items-center justify-center text-center w-96 px-4 py-4 h-auto">
      
        <img class="w-96 border-2 border-orange-400 rounded" src=${item.img} alt=${item.title}>
         
        <div>
        
            <header class="flex justify-between py-2">
                <h4 class="text-base font-bold text-black">${item.title}</h4>
                <h4 class="text-base font-bold text-orange-600">$${item.price}</h4>
            </header>
             
            <hr class="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-400">
            <p class="text-sm text-left">${item.desc}</p>
        </div>
       
    </article>`;

    });
    displayMenu = displayMenu.join("")
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
  });