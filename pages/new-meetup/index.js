import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  /*NewMeetupForm.js 에서 받아온 onAddMeetup props meetupData */
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return (
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
  );
};
export default NewMeetupPage;
