var map = L.map("mapid").setView([35.837520152, 50.994629859], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let rev = (inp) => {
  for (let i = 0; i < inp.length; i++) {
    let tmp = inp[i][0];
    inp[i][0] = inp[i][1];
    inp[i][1] = tmp;
  }
  return inp;
};
