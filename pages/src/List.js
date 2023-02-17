import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function List() {

    const [data, setData] = useState([]);
    const router = useRouter();

    function dataget() {
        axios.get('/api/hello')
            .then(res => {
                setData(res.data);
            })
    }
    function dataDelete(id) {
        axios.delete('/api/hello', { data: id })
        // window.location.reload();
        setData('');
        console.log()
    }

    // useEffect(() => {
    //     dataget();
    // }, [])
    //짧게쓰면 아래
    useEffect(dataget, [data])



    if (!data.length) return <>loading.....<Link href="/src/Write">글쓰기</Link></>
    return (
        <>
            <article>
                <h2>List</h2>
                <ul>
                    {
                        data.map(obj => (
                            <li key={obj.id}>
                                {obj.name}  / {obj.email} / {obj.tel} /
                                <button onClick={() => router.push({ pathname: '/src/Update', query: obj })}>수정</button>
                                <button onClick={() => dataDelete(obj.id)}>삭제</button>
                            </li>
                        ))
                    }
                </ul>
            </article>

        </>
    )
}

export default List