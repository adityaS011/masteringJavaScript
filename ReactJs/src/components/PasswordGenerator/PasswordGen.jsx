import React, { useCallback, useEffect, useState, useRef } from 'react'

const PasswordGen = () => {
    // --- Explanation of hooks ---
    // 1. useState: Manages state values within a functional component.
    const [length, setLength] = useState(8)  // Example: Manages password length
    const [charAllowed, setCharAllowed] = useState(false) // Example: Manages character inclusion
    const [numAllowed, setNumAllowed] = useState(false)  // Example: Manages number inclusion
    const [password, setPassword] = useState("") // Example: Manages generated password

    // 2. useCallback: Memoizes a function, preventing unnecessary re-renders when its dependencies haven't changed.
    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
        if (numAllowed) str += "0123456789"
        if (charAllowed) { str += "!@#$%^&*()_-+={}[]|\\?/,.;:" };

        for (let i = 1; i <= length; i++) {
            pass += str.charAt(Math.floor(Math.random() * str.length + 1))
        };
        return setPassword(pass);
    }, [length, numAllowed, charAllowed, setPassword])  // Memoizes based on these dependencies

    // 3. useEffect: Performs side effects, such as data fetching or DOM manipulation, after a component renders or updates.
    useEffect(() => {
        passwordGenerator()  // Generates a password when length, numAllowed, or charAllowed change
    }, [length, numAllowed, charAllowed, passwordGenerator])
    // 4. useRef: Creates a reference to a DOM element.
    const passwordRef = useRef(null);
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
        setTimeout(() => {
            setPassword("");
        }, 1000);
        
        // alert("Password Copied")
    }, [password])
    // --- UI elements ---
    return (
        <div className='h-fit  bg-slate-800'>
            <p className='text-2xl text-white pt-4 text-center'> # Use of Hooks UseState, UseEffect, UseCallback, UseRef:</p>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500">
                <h1 className='text-white my-3 text-center'>Password Genrator</h1>
                <div className="flex shadow  rounded-lg overflow-hidden mb-3">
                    <input
                        type="text"
                        value={password}
                        className='outline-none  w-full py-1 px-3'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}
                    />
                    <button onClick={copyPasswordToClipboard}
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                        Copy
                    </button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">

                        <input
                            type="range"
                            name=""
                            id=""
                            min={6}
                            max={100}
                            className="cursor-pointer"
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex text-sm gap-x-2">
                        <input
                            type="checkbox"
                            name=""
                            id="numberInput"
                            onChange={() => {
                                setNumAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor='numberInput'>Numbers</label>
                    </div>
                    <div className="flex text-sm gap-x-2">
                        <input
                            type="checkbox"
                            name=""
                            id="characterInput"
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor='characterInput'>Charaacters</label>
                    </div>
                </div>
            </div>
            <div className='pb-5' >
                {/* Explanation of hooks with examples */}
                <ol className='text-sm list text-justify text-gray-900 bg-slate-300 w-fit mx-auto p-2 m-3 rounded-lg'>
                    <li> <b>useState: </b>Manages dynamic data within the component. In this case, it controls:
                        <ol>
                            <li>Password length (e.g., 8 characters)</li>
                            <li>Inclusion of special characters</li>
                            <li>Inclusion of numbers</li>
                            <li>The generated password itself</li>
                        </ol>
                    </li>
                    <li> <b>useEffect: </b>Executes actions after component renders or updates. Here, it triggers the password generation whenever:
                    <ol>
                            <li>Password length changes</li>
                            <li>Special character inclusion changes</li>
                            <li>Number inclusion changes</li>
                        </ol>
                    </li>
                    <li> <b>useCallback:</b> Optimizes performance by memoizing functions. It ensures the password generation function (passwordGenerator) only re-creates if:
                        <ol type='a'>
                            <li>Password length changes</li>
                            <li>Special character inclusion changes</li>
                            <li>Number inclusion changes</li>
                            <li>The password update function (setPassword) changes</li>
                        </ol>
                        This prevents unnecessary re-renders of components relying on passwordGenerator.
                    </li>
                    <li>
                        <b>useRef:</b> Creates a reference to a DOM element. In this case, it:
                        <ol>
                            <li>Holds a reference to the password input field.</li>
                            <li>Allows selecting the password text for copying to the clipboard.</li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default PasswordGen