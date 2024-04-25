import Contact from "./Contact";
import css from "./ContactList.module.css"

const ContactList = ({contacts}) => {
    console.log(contacts);

    return (
        <>
        <ul className={css.contacts}>
        {contacts.map((contact) => {
            return (
            <li key = {contact.id} className={css.contactsCard}><Contact name={contact.name} phoneNumber={contact.phoneNumber}/>
            </li>
            )
            })

        }
        </ul>
        </>
    )
}

export default ContactList;