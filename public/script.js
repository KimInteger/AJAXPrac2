const root = document.getElementById('root');

const list = document.getElementById('list');

const entryPoint = 'http://apis.data.go.kr/6300000/examNoticeService'

const key = '4WZqKSFBKTKvEh0FmRpWZqAVCkO%2B2yz3ehUuYtqigHgFExfJZwCVJlXUJsqecScdYmrXgKD%2BU4tfMJql%2FHst%2Fg%3D%3D'

const xhr = new XMLHttpRequest();
console.log('데이터를 받기 전 조회');
console.dir(xhr);

xhr.open('GET',`http://apis.data.go.kr/6300000/examNoticeService/examNoticeList?serviceKey=	
4WZqKSFBKTKvEh0FmRpWZqAVCkO%2B2yz3ehUuYtqigHgFExfJZwCVJlXUJsqecScdYmrXgKD%2BU4tfMJql%2FHst%2Fg%3D%3D&numOfRows=10&pageNo=1`,true);

xhr.addEventListener('load',()=>{
  if(xhr.status === 200){
    console.log(1);
  }
});

xhr.send();
