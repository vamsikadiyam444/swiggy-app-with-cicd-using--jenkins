import useOnlineStatus from "../../utils/useOnlineStatus";

const ContactUs = () => {
    const onlineStatus = useOnlineStatus();

      if(onlineStatus === false){
    return <h1>Looks like you're offline! Check Internet Connectivity</h1>
   }
    return(
        <div className="">
            <h2 className="text-2xl font-bold p-4 m-4">Contact Us</h2>
            <div className="flex  gap-4 p-2 m-2">
                <input type="text" placeholder="name" className="border border-black"/>
                <input type="text" placeholder="message" className="border border-black" />
                <button className="border border-black bg-gray-100 px-2 rounded-lg hover:cursor-pointer ">Submit</button>
            </div>
        </div>
    )
}
export default ContactUs;