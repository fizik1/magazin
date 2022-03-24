import { useNavigate } from 'react-router-dom'


function AddItem() {
    const navigate = useNavigate()
    const handlerNavigate=(e)=>{
        e.preventDefault()
        navigate('/')
    }
    return (
        <div className="container m-5 align-middle">
            <form action="http://localhost:5000/products/add" method="POST" onSubmit={()=>handlerNavigate}>
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
                    <input type="submit" className="border-2" value="Kiritish"/>



                </div>
            </form>
        </div>
    )
}

export default AddItem