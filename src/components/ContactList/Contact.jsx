import { FaUser, FaPhone } from 'react-icons/fa';


const Contact = ({name, phoneNumber}) => {
    return (
        <>
        <p><FaUser /> {name}</p>
        <p><FaPhone /> {phoneNumber}</p>
        <button>Delete</button>
        </>
    )
}

export default Contact;