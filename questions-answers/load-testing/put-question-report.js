
import http from 'k6/http';

export let options= {
  vus: 200,
  duration: '30s',
};
var max = 3523507;
export default function () {
  var url1 = `http://localhost:3000/qa/questions/${10}/report`;
  var url2 = `http://localhost:3000/qa/questions/${Math.floor(max/2)}/report`;
  var url3 = `http://localhost:3000/qa/questions/${max - 10}/report`;
  var payload = JSON.stringify({
  });

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  http.put(url1, payload, params);
  http.put(url2, payload, params);
  http.put(url3, payload, params);
}