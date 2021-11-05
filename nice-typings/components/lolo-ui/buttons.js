export function PrimaryButton({...input}) {
    return <input
    type='button'
    className="m-1 cursor-pointer select-none outline-none bg-pink-500 font-bold text-center text-white p-2 shadow-sm rounded transition-all hover:bg-pink-400 hover:-translate-y-1"
    {...input}
    ></input>
}

export function SecondaryButton({...input}) {
    return <input
    type='button'
    className="cursor-pointer select-none outline-none bg-gray-400 font-bold text-center text-white p-2 shadow-sm rounded transition-all hover:bg-gray-300 hover:-translate-y-1"
    {...input}
    ></input>
}