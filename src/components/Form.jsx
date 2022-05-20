import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <div className="container">
            <input type="text"  placeholder="Name"/>
            <input type="email" placeholder="Email" />
            <div className="upload">
                <h1>Upload user profile</h1>
                <button>Upload</button>
            </div>
            <div className="login">
                <p>Already have an account?</p>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Form