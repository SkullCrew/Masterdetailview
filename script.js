// Sample data for items
const items = [
  { id: 1, title: "Smartphone   ", image: "images/smartphone.jpg", description: "  High-performance smartphone with advanced features. Comes with a powerful processor, ample storage, and a high-resolution display.", price: "$699",stock :"7000" },
  { id: 2, title: "Laptop   ", image: "images/laptop.jpg", description: "  Powerful laptop for work and entertainment. Equipped with a fast processor, large storage capacity, and a high-quality display.", price: "$1299",stock :"3217" },
  { id: 3, title: "Smart Watch   ", image: "images/smartwatch.jpg", description: "  Sleek and stylish smartwatch with health tracking. Monitors heart rate, tracks activities, and provides notifications.", price: "$199",stock :"1098" },
  { id: 4, title: "Wireless Earbuds   ", image: "images/earbuds.jpg", description: "  True wireless earbuds with exceptional sound quality. Features Bluetooth connectivity and long battery life.", price: "$149",stock :"4389" },
  { id: 5, title: "Fitness Tracker   ", image: "images/fitnesstracker.jpg", description: "  Activity tracker to monitor your fitness progress. Tracks steps, distance, calories burned, and monitors sleep quality.", price: "$79",stock :"9890" },
  { id: 6, title: "Digital Camera   ", image: "images/camera.jpg", description: "  High-resolution digital camera for capturing memories. Features manual controls and various shooting modes.", price: "$599",stock :"17680" },
  { id: 7, title: "Bluetooth Speaker   ", image: "images/speaker.jpg", description: "  Portable speaker with rich audio and wireless connectivity. Offers excellent audio quality and long-lasting battery life.", price: "$99",stock :"234" },
  { id: 8, title: "Gaming Console   ", image: "images/console.jpg", description: "  Next-generation gaming console for immersive gaming experiences. Supports high-resolution graphics and multiplayer gaming.", price: "$499",stock :"986" },
  { id: 9, title: "Wireless Headphones   ", image: "images/headphones.jpg", description: "  Wireless headphones with noise cancellation technology. Provides rich sound quality and comfortable over-ear design.", price: "$199",stock :"4562" },
  { id: 10, title: "Tablet   ", image: "images/tablet.jpg", description: "  Versatile tablet for work, entertainment, and creativity. Features a high-resolution display, powerful processor, and long battery life.", price: "$349",stock :"3980" }
];

  
  // DOM elements
  const masterListView = document.getElementById("master-list-view");
  const detailView = document.getElementById("detail-view");
  const itemList = document.getElementById("item-list");
  const itemImage = document.getElementById("item-image");
  const itemTitle = document.getElementById("item-title");
  const itemDescription = document.getElementById("item-description");
  const itemPrice = document.getElementById("item-price");
  const itemStock = document.getElementById("item-stock");
  
  // Display master list view
  function showMasterList() {
    masterListView.style.display = "block";
    detailView.style.display = "none";
  }
  
  // Display detail view of the selected item
  function showDetail(itemId) {
    const selectedItem = items.find(item => item.id === itemId);
  
    if (selectedItem) {
      masterListView.style.display = "none";
      detailView.style.display = "block";
  
      itemImage.src = selectedItem.image;
      itemTitle.textContent = selectedItem.title;
      itemDescription.textContent = selectedItem.description;
      itemPrice.textContent = "Price: " + selectedItem.price;
      itemStock.textContent= "Stock Available : " + selectedItem.stock;
    }
  }
  
  // Create master list
  function createMasterList() {
    items.forEach(item => {
      const li = document.createElement("li");
      li.className = "item";
      li.onclick = () => showDetail(item.id);
  
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
  
      const h3 = document.createElement("h3");
      h3.textContent = item.title;
  
      const p = document.createElement("p");
      p.textContent = item.description;
  
      li.appendChild(img);
      li.appendChild(h3);
      li.appendChild(p);
      itemList.appendChild(li);
    });
  }
  
  // Go back to the master list view
  function goBack() {
    showMasterList();
  }
  
  // Initialize the application
  function initializeApp() {
    createMasterList();
    showMasterList();
  }
  
  initializeApp();
  
  