const images = [
  'https://hacknitr.com/logo.png',
  'https://www.nitrkl.ac.in/assets/images/gallery3.jpg',
  'https://www.nitrkl.ac.in/assets/images/gallery1.jpg',
];
const description =
  'HackNITR 6.0 is an exciting hackathon that challenges you to unleash your creativity and develop cutting-edge tech solutions for real-world problems. It brings together a vibrant community of tech enthusiasts, sparking innovation and collaboration. Intending to grow our local community and deliver an unforgettable experience, this event promises a thrilling mix of fun, learning, and competition. Get ready for an epic journey starting 1st March 2025!';
const metadataBase = new URL('https://hacknitr.com/');
const title = { default: 'HackNITR 6.0', template: `%s | HackNITR 6.0` };
const url = 'https://hacknitr.com/';
export { metadataBase, title, url, description, images };
