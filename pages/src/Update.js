// import axios from 'axios';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Update() {
    const router = useRouter();
    const { query } = router;

    const inital = {
        id: query.id,
        name: query.name,
        email: query.email,
        tel: query.tel
    }
    const [inputValue, setValue] = useState(inital);



    function valueChange(e) {
        let t = e.target
        setValue((obj) => {
            return { ...obj, [t.name]: t.value }
        })
    }
    function create(e) {
        e.preventDefault();
        // get, post, put, delete
        axios.put('/api/hello', { ...inputValue, id: query.id });
        router.push('/')
    }

    console.log(query)
    console.log(inputValue)

    return (
        <div>
            <form onSubmit={create}>
                <p><input value={inputValue.name} onChange={valueChange} type="text" placeholder='이름' name='name' /></p>
                <p><input value={inputValue.email} onChange={valueChange} type="email" placeholder='메일' name='email' /></p>
                <p><input value={inputValue.tel} onChange={valueChange} type="tel" placeholder='연락처' name='tel' /></p>
                <p><input type="submit" value='저장' /></p>
            </form>
        </div>
    )
}

export default Update