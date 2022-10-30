# reactSocietySiteBigPJ
## 모임 게시판 사이트

```js

project name : reactSocietyMeetSiteBigPJ
site url : https://react-society-meet-site-big-pj-1ful.vercel.app/
1. 네비게이션 출력
2. 게시판의 모든 글 목록 출력
3. 게시글 상세보기 기능
4. 새 게시글 추가 기능

React CSS Html mongodb next/router

Components
  UI 폴더 : 유저 인터페이스 관련
    -Card.js : card 틀
  layout 폴더 
    Layout.js : main 상단 navigation 및 main layout
    MainNavigation.js : 네비게이션
  meetups 폴더 : 모임 게시판 관련
     MeetupDetail.js : 게시글 상세보기 컴포넌트
     MeetupItem.js : 게시글 아이템 컴포넌트
     NoQuotesFound.js : 게시글 찾을 수 없을때 활용
     NewMeetupForm.js : 새 게시글 등록 폼 컴포넌트
     QuoteList.js : 게시글 목록 컴포넌트
  comments 폴더 : 댓글 관련
    CommentItem.js : 댓글 출력 관련
    Comments.js : 댓글 데이터, 요청, 상태 관리 관련
    CommentsList.js : 댓글 목록 출력 관련
    NewCommentForm.js : 새 게시글의 요청,에러,상태 관리 관련
  pages 폴더 : 각 페이지 출력
    [meetupId]폴더 : 게시글의 아이디로 들어왔을때 보여줄 컴포넌트
    api 폴더
      new-meetup.js : api 컴포넌트
    new-meetup 폴더
      index.js : 새로운 글 등록 페이지를 보여줌
    index.js : 메인 홈 페이지 보여줌
    
Function
  MeetupItem.js
    showDetailsHandler : 모임 목록을 렌더링할 때 ID 프로퍼티를 MeetupItem 으로 보냈기에
    -meetupId는 프로퍼티로 읽어 들였었고 MeetupItem 대신에 props.id를 이용해서 동적 경로를 지정
      하여 상세보기 페이지를 열어줄 함수
  NewMeetupForm.js
    submitHandler : 폼에서 입력받은 데이터를 객체에 담아 onAddMeeup 함수에 props 로 전달해줄 함수
    
 
```

Vercel deploy

![reactBigVercelDiploying](https://user-images.githubusercontent.com/75942405/198845294-30bd2461-3a9f-47e6-ad26-7da79fbad1e7.png)

Vercel deploy success

![reactBigDeploySuccess](https://user-images.githubusercontent.com/75942405/198845301-202d386d-f54d-424f-9383-c6e1031724cd.png)

새 게시글 추가

![reactBigtest03](https://user-images.githubusercontent.com/75942405/198845308-a2e546b8-ce81-4096-85f3-5699dfa491e8.png)

첫 번째 게시글 목록 출력

![reactBigFirstBoardWrite](https://user-images.githubusercontent.com/75942405/198845311-27cba366-a907-4088-8638-99b8adc2eca3.png)

게시글 등록 후 리스트 확인

![reactBigtest03List](https://user-images.githubusercontent.com/75942405/198845306-f312bb24-11e5-4a59-98e1-0cf8e57b5075.png)

몽고 db 데이터

![20221030_030022](https://user-images.githubusercontent.com/75942405/198846331-0d13c004-9de9-4539-8034-0ece10c720a1.png)
