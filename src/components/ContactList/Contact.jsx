import { FaUser, FaPhone } from 'react-icons/fa';


const Contact = ({name, phoneNumber, idContact, removeContact}) => {
    return (
        <>
        <p><FaUser /> {name}</p>
        <p><FaPhone /> {phoneNumber}</p>
        <button onClick={() => removeContact(idContact)}>Delete</button>
        </>
    )
}

export default Contact;