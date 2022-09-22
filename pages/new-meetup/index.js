// our-domain.com/new-meetup
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();
  /*NewMeetupForm.js 에서 받아온 onAddMeetup props meetupData */
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log('addMeetupHandler Fn 으로 받은 데이터 ::: ', enteredMeetupData);
    /*만약 외부 API 라면 경로를 입력해야 하지만 여기에서는 내부 API 를 사용하고 있으므로
    이 페이지를 제공하는데 사용되는 같은 서버에 의해 관리됨*/
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      /*request 첨부된 데이터를 넣어야 하고 그것은 데이터베이스에 저장할 제목, 이미지, 주소, 설명 필드에 대한
      데이터를 전달하는 자바스크립트 객체*/
      body: JSON.stringify(enteredMeetupData) /*내장된 JSON 전환 방법 stringify*/,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json(); /*fetch Fn 으로부터 응답 얻기*/
    console.log('fetch fn 으로부터 응답 ::: ', data);
    /*meetup 게시글 추가 후 이동될 페이지*/
    router.push('/')
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};
export default NewMeetupPage;
