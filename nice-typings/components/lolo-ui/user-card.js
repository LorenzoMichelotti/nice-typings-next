export default function UserCard({user, logOut}){
    if (user) {
        return(
            <div className=' m-auto mt-2'>
                {user.uid !== "".trim() && <div>
                <div className='flex'>
                    <img className='w-full h-full rounded-full object-cover' src={user.photoUrl} alt="" />
                    <div className='flex flex-col p-3 ml-2'>
                        <h1 className='text-3xl font-bold'>{user.displayName}</h1>
                        <p className='text-gray-500'>{user.email}</p>
                        <button onClick={()=>{logOut()}} className='text-right text-purple-600 hover:underline transition-all hover:-translate-y-1'>Logout</button>
                    </div>
                </div>
                </div>}
            </div>
        )}
}