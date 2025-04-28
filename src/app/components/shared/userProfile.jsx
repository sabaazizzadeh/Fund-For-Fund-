import Image from "next/image";

function UserProfile({ onClick }) {
    return ( 
        <button onClick={onClick} className="flex items-center focus:outline-none ml-2.5">
        <Image
          src="/Images/ProfileLogin.svg" 
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </button>
     );
}
 
export default UserProfile;