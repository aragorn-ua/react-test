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
import SearchBar from "./SearchBar/SearchBar";
import LangSwitcher from './LangSwitcher/LangSwitcher';
import FeedbackForm from "./FeedbackForm/FeedbackForm";
// import contacts from "../contacts.json"
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css"

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
 const [lang, setLang] = useState("uk");
 /***************** START of 3 HW *****/
 console.log("Initial contacts:", JSON.parse(window.localStorage.getItem("contacts")));
 const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem("contacts")) || [
  { "id": "id-1", "name": "Rosie Simpson", "phoneNumber": "459-12-56" },
  { "id": "id-2", "name": "Hermione Kline", "phoneNumber": "443-89-12" },
  { "id": "id-3", "name": "Eden Clements", "phoneNumber": "645-17-79" },
  { "id": "id-4", "name": "Annie Copeland", "phoneNumber": "227-91-26" }
]);

const [filteredContact, setFilteredContact] = useState ("");
const handleChange = (e) => {
  setFilteredContact(e.target.value);
}
const filteredList = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filteredContact.toLowerCase()) ||
  contact.phoneNumber.includes(filteredContact)
);
const addContact = (newContact) => {
  const updatedContacts = [...contacts, newContact];
  setContacts(updatedContacts);
  window.localStorage.setItem("contacts", JSON.stringify(updatedContacts));
};

const removeContact = (idContact) => {
  const updatedContacts = contacts.filter(contact => contact.id !== idContact);
  setContacts(updatedContacts);
  window.localStorage.setItem("contacts", JSON.stringify(updatedContacts));
}

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
      <SearchBar/>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <FeedbackForm />
    </div>

      <p>***************** H-W-3 **************************</p>
      <div className={css.phonebook}>
       <h1>Phonebook</h1>
  <ContactForm addContact={addContact} />
  <SearchBox filteredContact = {filteredContact} handleChange={handleChange}/>
  </div>
  <ContactList contacts={filteredList} removeContact={removeContact} />
    </>
  );
};

export default App;