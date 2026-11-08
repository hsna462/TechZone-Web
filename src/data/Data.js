import laptop from "../assets/laptop.jpg";
import phone from "../assets/phone.jpg";
import monitor from "../assets/monitor.jpg";
import mouse from "../assets/mouse.jpg";
import keyboard from "../assets/keyboard.jpg";
import gamingLaptop from "../assets/gaming-laptop.jpg";
import phone2 from "../assets/phone2.jpg";
import headphones from "../assets/headphones.jpg";
import smartwatch from "../assets/smartwatch.jpg";
import powerbank from "../assets/powerbank.jpg";
import charger from "../assets/charger.jpg";
import mousepad from "../assets/mousepad.jpg";

export const Data = [
  { id: 1, name: "Laptop", price: 800, category: "laptops", image: laptop, description: "A reliable high-performance laptop for work, study, and everyday tasks." },
  { id: 2, name: "Phone", price: 600, category: "phones", image: phone, description: "A modern smartphone designed to keep you connected and productive." },
  { id: 3, name: "Monitor", price: 150, category: "accessories", image: monitor, description: "A Full HD monitor for a clear and comfortable viewing experience." },
  { id: 4, name: "Gaming Mouse", price: 25, category: "accessories", image: mouse, description: "A precise, comfortable mouse for everyday use and gaming." },
  { id: 5, name: "Keyboard", price: 70, category: "accessories", image: keyboard, description: "A responsive keyboard built for comfortable typing." },
  { id: 6, name: "Gaming Laptop", price: 1200, category: "gaming", image: gamingLaptop, description: "A powerful laptop designed for demanding games and applications." },
  { id: 7, name: "Phone Pro", price: 900, category: "phones", image: phone2, description: "A premium smartphone with a refined design and capable performance." },
  { id: 8, name: "Headphones", price: 200, category: "accessories", image: headphones, description: "Comfortable headphones for music, calls, and focused listening." },
  { id: 9, name: "Smartwatch", price: 100, category: "accessories", image: smartwatch, description: "A smart wearable to keep useful information close at hand." },
  { id: 10, name: "Powerbank", price: 50, category: "accessories", image: powerbank, description: "Portable power to help keep your devices charged on the go." },
  { id: 11, name: "Charger", price: 20, category: "accessories", image: charger, description: "A compact fast-charging adapter for compatible devices." },
  { id: 12, name: "Mousepad", price: 10, category: "accessories", image: mousepad, description: "A smooth surface for accurate and comfortable mouse movement." }
];

export const categories = [
  { name: "Laptops", value: "laptops", icon: "💻", description: "Power for work and study" },
  { name: "Phones", value: "phones", icon: "📱", description: "Stay connected" },
  { name: "Accessories", value: "accessories", icon: "🎧", description: "Upgrade your setup" },
  { name: "Gaming", value: "gaming", icon: "🎮", description: "Gear up and play" }
];

export const featuredProducts = [1, 2, 8, 5]
  .map((id) => Data.find((product) => product.id === id));
