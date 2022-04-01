import {useNavigate} from 'react-router-dom'



function AddCategory() {
    const navigate = useNavigate()
    const handlerNavigate=(e)=>{
        e.preventDefault()
        navigate('/')
    }
    return (
        <div className="m-auto w-[300px] mt-5">
            <form action="http://localhost:5000/category/add" method="post" onSubmit={()=>handlerNavigate}>
                <label className="flex-row text-center text-2xl ">
                    Add CategoryList
                    <input className="input mt-3 border-2 rounded-md text-base outline-none py-1 px-3" name="category" type='text' placeholder='Nomi' />
                    <input className="input mt-3 border-2 rounded-md text-base outline-none py-1 px-3" name="img" type='text' placeholder='Rasm' />
                </label>
                <button className="mt-3 text-base border-2 py-1 px-3" type='submit' >Kiritish</button>
            </form>
        </div>
    )
}

export default AddCategory