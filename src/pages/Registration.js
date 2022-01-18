import React, {useState} from 'react'

const Registration = () => {
    const [user, setUser] = useState({})
    const values = {
        name: 'account_circle',
        phone: "local_phone",
        password: 'dialpad',
        email: 'email',
    }
    const onChange = (e) => {
        setUser({...user, [e.target.id] : e.target.value})
    }
    return (
        <form className="container">
            {Object.keys(values).map((value) =>
            <div className="row">
                <div className="input-field row s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                        onChange={onChange}
                        id="login"
                        type="text"
                        className="validate blm"
                    />
                </div>
            </div>)}
            <a onClick={() => console.log("")} className="waves-effect waves-light btn deep-orange lighten-1 btn-login">
                <i className="material-icons left"></i>плоти налоги
            </a>
        </form>
    )
}

export default Registration;