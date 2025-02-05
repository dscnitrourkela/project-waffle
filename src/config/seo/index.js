const images = [
  'https://hacknitr.com/logo.png',
  'https://scontent.fixr2-1.fna.fbcdn.net/v/t39.30808-6/358737614_287012617242586_3314409850152181957_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AXg3rLOJGbEQ7kNvgEgG6XO&_nc_oc=Adg_qUroxlqO5bqplYQKHUrsmMkuXO_SjbhzQzEU5g5m3nxkUWbRnvJFL415ENqSR0I&_nc_zt=23&_nc_ht=scontent.fixr2-1.fna&_nc_gid=AOkzT2KqfQACQfFVPkerLst&oh=00_AYDueJJs02sXOOCdoUSnr_tzREUDjwfLoM8ay4puxzOAcA&oe=67A8A6C2',
  'https://pbs.twimg.com/profile_banners/1012786434153959424/1737131542/1500x500',
];
const description =
  'HackNITR 6.0 is an exciting hackathon that challenges you to unleash your creativity and develop cutting-edge tech solutions for real-world problems. It brings together a vibrant community of tech enthusiasts, sparking innovation and collaboration. Intending to grow our local community and deliver an unforgettable experience, this event promises a thrilling mix of fun, learning, and competition. Get ready for an epic journey starting 1st March 2025!';
const metadataBase = new URL('https://hacknitr.com/');
const title = { default: 'HackNITR 6.0', template: `%s | HackNITR 6.0` };
const url = 'https://hacknitr.com/';
export { metadataBase, title, url, description, images };
