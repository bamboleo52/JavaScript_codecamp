const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

//container.style.display = 'none';
messageContainer.textContent = "<h3>D-Day를 입력해 주세요</h3>";

//const obj = {
//  name: "Peter",
//  age: 25,
//};
//if (obj.name === "Jason" || obj.name === "Peter") {
//  console.log("안녕, " + obj.name);
//} else {
//  console.log("넌 우리 멤버가 아니구나");
//}

//if (obj.name === "Jason" && obj.age >= 25) {
//  console.log("안녕, " + obj.name + "너의 나이는," + obj.age);
//} else {
//  console.log("넌 우리 멤버가 아니구나");
//}

//let name = 'Peter';
//if (name === 'Jason') {
//  console.log('조건문통과');
//}

//console.log('1 === 1', 1 === 1);
//console.log('1 > 2', 1 > 2);
//const check = 'check';
//console.log("check === 'check'", check === 'check');
//console.log('check === 123', check === 123);
//const arr = [1, 2, 3]
//console.log('arr = [1, 2, 3]', arr === [1, 2, 3])

const dateFormMaker = function () {
  //const inputYear = document.querySelector("#target-year-input").value;
  //const inputMonth = document.querySelector("#target-month-input").value;
  //const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
  // console.log(inputYear, inputMonth, inputDate);
};

const counterMaker = function () {
  //const messageContainer = document.querySelector("#d-day-message");
  //console.log(messageContainer);
  //messageContainer.textContent = 'D-Day를 입력해 주세요';
  //console.log(document.querySelector('#d-day-message'));

  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  //console.log(remaining);
  if (remaining <= 0) {
    // 만약, remaining이 0이라면, 타이머가 종료되었습니다. 출력
    //console.log('타이머가 종료되었습니다.');
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
  } else if (isNaN(remaining)) {
    // 만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    //console.log("유효한 시간대가 아닙니다");
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
  }

  //const remainingDate = Math.floor(remaining / 3600 / 24);
  //const remainingHours = Math.floor(remaining / 3600) % 24;
  //const remainingMin = Math.floor(remaining / 60) % 60;
  //const remainingSec = Math.floor(remaining) % 60;
  //console.log(remainingDate, remainingHours, remainingMin, remainingSec);

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24);
    remainingHours = Math.floor(remaining / 3600) % 24;
    remainingMin = Math.floor(remaining / 60) % 60;
    remainingSec = Math.floor(remaining) % 60;
  }
  //console.log(remainingObj['remainingDate']);

  //const days = document.getElementById("days");
  //const hours = document.getElementById("hours");
  //const min = document.getElementById("min");
  //const sec = document.getElementById("sec");
  //console.log(days, hours, min, sec);

  const documentObj = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    min: document.getElementById('min'),
    sec: document.getElementById('sec')
  };

  const timeKeys = Object.keys(remainingObj);
  //const docKeys = Object.keys(documentOb);

  ///for (let i = 0; i < timeKeys.length; i = i + 1) {
    //console.log(timeKeys);
    //console.log(timeKeys[i]);
    //console.log(documentObj[docKeys[i]]);
    ///documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    //젤밑 4줄대신 (주석처리해서) 이렇게 반복문으로 쓸수 있다.
  }

  let i = 0;
  for (let key in documentObj) {
    //console.log(documentObj[key], key);
    documentObj[key].textContent = remainingObj[timeKeys[i]]
    // i = i + 1
    i++ 
  }
  //days.textContent = remainingDate;
  //hours.textContent = remainingHours;
  //min.textContent = remainingMin;
  //sec.textContent = remainingSec;

  
  //이렇게도 가능
  //days.textContent = remainingObj['remainingDate'];
  //hours.textContent = remainingObj['remainingHours'];
  //min.textContent = remainingObj['remainingMin'];
  //sec.textContent = remainingObj['remainingSec'];
  //console.log(remainingDate, remainingHours, remainigMin, remainingSec);

  //최종
  //documentObj['days'].textContent = remainingObj['remainingDate'];
  //documentObj['hours'].textContent = remainingObj['remainingHours'];
  //documentObj['min'].textContent = remainingObj['remainingMin'];
  //documentObj['sec'].textContent = remainingObj['remainingSec'];
};
