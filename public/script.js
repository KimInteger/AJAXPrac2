const root = document.getElementById('root');

const list = document.getElementById('list');

const xhr = new XMLHttpRequest();
console.log('데이터를 받기 전 조회');
console.dir(xhr);

xhr.open('GET','https://seogu.go.kr/seoguAPI/3660000/getBakryStts?pageNo=1&numOfRows=10&type=json',true);

xhr.setRequestHeader('Access-Control-Allow-Origin' , `*`);

xhr.addEventListener('load',()=>{
  if(xhr.status === 200){
    console.log(1);
  }
});

xhr.send();
