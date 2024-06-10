const root = document.getElementById('root');

const list = document.getElementById('list');

const xhr = new XMLHttpRequest();
console.log('데이터를 받기 전 조회');
console.dir(xhr);

xhr.open('GET',`http://apis.data.go.kr/5690000/sjGameStat/sj_00000100?pageIndex=1&pageUnit=20&dataTy=json&searchCondition=mtlty&serviceKey=4WZqKSFBKTKvEh0FmRpWZqAVCkO%2B2yz3ehUuYtqigHgFExfJZwCVJlXUJsqecScdYmrXgKD%2BU4tfMJql%2FHst%2Fg%3D%3D`,true);

xhr.addEventListener('load',()=>{
  console.log('데이터 받은 후 조회');
  console.dir(xhr);

  let result = JSON.parse(xhr.responseText);

  console.log(result);

  let data = result.body.items;

  console.log(data);

});

xhr.send();
