import React, { useState } from 'react'



export default function LoginPage() {


    const [data, setData] = useState({
        username: "",
        password: ""

    })

    const { username, password } = data


    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data)
        setSubmitted(true)

        if (username === '') {
            alert("please fill the user name")
        }
        if (password === '') {
            alert("password should not be empty")
        }

        if(password.length <= 4){
           
        }

    }





    const validateForm = (e) => {
        let name = e.target.name
        let value = e.target.value
        console.log('name', name)
        console.log('value', value)



    }

    const [submitted, setSubmitted] = useState(false)








    return (
        // password should not be emty
        //password shoul minimum 5 charatchers
        //password should not be greated than 13
        //alphanumeric allowed'
        //special characters are not allowed

        <React.Fragment>
            <div className='loginScreen'>
                <form onSubmit={submitHandler}>
                    <h1>Login Page</h1>

                    <div>


                        <input type="text" name="username" value={username} placeholder="user Name" onChange={changeHandler} onBlur={validateForm} /> <br />
                    </div>
                    <div>
                        {submitted && !data.username ? <span>Please enter user name</span> : null}
                    </div>

                    <div>
                        <input type="password" name="password" value={password} placeholder="password" onChange={changeHandler} onBlur={validateForm} /><br />
                    </div>
                    <div>
                        {submitted && !data.password ? <span>Please enter  correct password</span> : null}
                        {/* {submitted && password.length <= 4 ? <p>password should be minimum 5 characters</p>:null} */}
                    </div>

                    <div>
                        <input type="submit" name="submit" onClick={submitHandler} />
                    </div>



                </form><br />

                {submitted && data.password && data.username ? <div className='successful'>Login Successfully!!!</div> : null}


            </div>
        </React.Fragment>

    )
}
