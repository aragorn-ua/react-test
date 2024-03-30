import userData from "../userData.json";
import Profile from "./profile/Profile";
import friends from "../friends.json";
import FriendList from "./friendlist/FriendList";
import transactions from "../transactions.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Options from "./options/Options"
import Feedback from "./feedback/Feedback";
import Notification from "./notification/Notification"
import LoginForm from "./LoginForm/LoginForm";

import { useState, useEffect  } from 'react';
const ClickCounter = () => {
	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
    setClicks(clicks + 1);
  };

	return <button onClick={handleClick}>Current: {clicks}</button>
};


const App = () => {

 ////********* Begin of second HW */
  const [feedbackCounts, setFeedbackCounts] = useState(()=> {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
   return (
   {good: 0,
    neutral: 0,
    bad: 0} )
  });
  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedbackCounts));
  },[feedbackCounts]);

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1
    }));
  };
  const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

  const resetFeedback = () => {
    setFeedbackCounts({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }
  /***************** END of 2 HW *****/

  /***********************************MODULE 3 */
  const handleLogin = (userData) => {
    console.log(userData);
 };
  /***********************END OF MODULE 3*****/

 return (
    <>
      <p>***************** H-W-1 **************************</p>
      <Profile userInfo={userData.userData} />
      <FriendList friends={friends.friends} />
      <TransactionHistory items={transactions.transactions} />
      <p>***************** TESTING MODULE 2 **************************</p>
      <ClickCounter />
			<ClickCounter />
      <p>***************** H-W-2 **************************</p>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
      {totalFeedback>0
      ? (<Feedback feedbackCounts={feedbackCounts} totalFeedback={totalFeedback} />)
      : (<Notification />)}
      <p>***************** TESTING MODULE 3 **************************</p>
      <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
    </div>

      <p>***************** H-W-3 **************************</p>
    </>
  );
};

export default App;