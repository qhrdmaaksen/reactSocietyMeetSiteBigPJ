import {Fragment} from 'react'
import Head from 'next/head'
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

const MeetupDetails = (props) => {
  return (
      <Fragment>
        <Head>
          <title>{props.meetupData.title}</title>
          <meta name='description' content={props.meetupData.description} />
        </Head>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
      </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://vitamin777:vitamin777test@cluster0.fyhszzo.mongodb.net/meetups?retryWrites=true&w=majority',
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  /*_id: 1은 ID만 포함하고 다른 필드 값은 포함하지 않는다는 뜻*/
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking' /*false 로 하면 일부가 아닌 모든 meetupId value 를 포함한다
    -true or blocking 으로하면 여기서 지정한 경로 목록이 완전하지 않을 수 있고 더 유효한 페이지가 있음을
    nextJS 에게 알려주며 NextJS 가 바로 페이지를 찾을 수 없는 경우 404 페이지로 응답하지 않음 */,
    /*id가 있는 문서인 .map(meetup = ) 입력하여 경로는 객체의 배열이어야 하므로 { }을 입력하고
    여기 아래에 보이는 것처럼 모든 객체가 가지고 있는 params key 인 params: 을 입력하고
    그 안에 nested object 가 있으므로 meetupId: 을입력하여 meetupId 값을 정의하는 곳을 지정함
    meetupId 값은 여기의 ID가 되어야 하므로 meetup 을 입력하여 엑세스함
    이 매개 변수는 자동으로 map 을 주기 때문에 이렇게 ._id.toString 을 입력*/
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } })),
  };
};

export const getStaticProps = async (context) => {
  /*이게 ID 객체가 됨.그리고 폴더에 대괄호 사이에 있는 건 프로퍼티가 됨. 밸류는 URL 에 인코드 되어 있음.따라서 meetupId 는 context.params.meetupId 에 접속할 수 있음*/
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  /*mongoDB 에 게시글 상세 보기*/
  const client = await MongoClient.connect(
    'mongodb+srv://vitamin777:vitamin777test@cluster0.fyhszzo.mongodb.net/meetups?retryWrites=true&w=majority',
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  /*단일 meetup access*/
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),/*오브젝트 객체로 문자열을 전환*/
  });

  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
