import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AddItem() {
    const [categorys, setCategorys] = useState([])
    let option;


    useEffect(() => {
        axios.get('/category/get')
            .then(res => {
                setCategorys(res.data);
                console.log(categorys);


            })
    }, [])

    const navigate = useNavigate()

    const handlerNavigate = (e) => {
        e.preventDefault()
        navigate('/')
    }

    option = categorys.map((element) => (
        <option value={element.nomi} label={element.nomi} />
    ))

    return (
        <div className="container m-5 align-middle">
            <form action="http://localhost:5000/products/add" method="POST" onSubmit={() => handlerNavigate}>
                <div className="flex-col">
                    <label className="flex-col">Nomi
                        <input type="text" name="nomi" className="border-2" />
                    </label>
                    <label className="flex-col">Narxi
                        <input type="number" name="price" className="border-2" />
                    </label>
                    <label className="flex-col">Rasmi
                        <input type="text" name="img" className="border-2" />
                    </label>
                    <label className="flex-col">Tafsilot
                        <input type="text" name="about" className="border-2" />
                    </label>
                    <label className="flex-col">Kategoriya
                        <select name='category' id='category'>
                            <option />
                            {option}
                        </select>
                    </label>
                    <button type="submit" className="border-2">Kiritish</button>



                </div>
            </form>
        </div>
    )
}

export default AddItem