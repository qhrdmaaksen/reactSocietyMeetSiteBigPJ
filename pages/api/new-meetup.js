// /api/new-meetup
import { MongoClient } from 'mongodb';

/*요청 객체는 들어오는 요청에 관한 데이터를 포함하며 응답 객체는 응답을 보낼 때 필요함
이 응답 객체에서 헤더나 요청 바디를 받을 수 있음*/
const handler = async (req, res) => {
  /*어떤 요청이 보내졌는지 알게함*/
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(
      'mongodb+srv://vitamin777:vitamin777test@cluster0.fyhszzo.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
    /*컬렉션은 sql db 에있는 tables 이며 문서는 해당 tables 의 항목이될것임*/
    const meetupsCollection = db.collection('meetups');
    /*작업의 결과*/
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted' });
  }
};
export default handler;
