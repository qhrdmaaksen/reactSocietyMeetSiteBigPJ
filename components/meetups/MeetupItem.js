import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';

function MeetupItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    /*프로그래밍 방식으로 탐색하는 메소드 push()
     * -새 페이지를 페이지 더미에 연결하며 Link 컴포넌트를 사용하는 것이나 마찬가지
     * -모임 목록을 렌더링할 때 ID 프로퍼티를 MeetupItem 으로 보냈기에
     * --meetupId는 프로퍼티로 읽어 들였었고 MeetupItem 대신에 props.id를 이용해서 동적 경로를 지정*/
    router.push('/' + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>상세 보기</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
