export default function LandingPage({children}){
    return(
        <div className=' text-2xl flex flex-col w-screen h-screen dark:text-white bg-white dark:bg-gray-700'>
            <div className='flex w-screen h-1/3'>
                <img className='mx-auto w-full object-cover shadow-sm' src={'https://images.unsplash.com/photo-1495757450029-09dbedacbc36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80'}></img>
                <div className='absolute w-full flex'>
                    <h1 className='m-auto mt-32 md:mt-64 text-5xl text-white font-bold italic'>NICE TYPINGS</h1>
                </div>
            </div>
            <div className='w-full mt-5'>
                {children}
            </div>
        </div>
    )
}