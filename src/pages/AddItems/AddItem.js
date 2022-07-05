import { useForm } from "react-hook-form";
const AddItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const url = `http://localhost:5000/inventory`;
    fetch(url,{
        method:'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
    })
};
  return (
    <div className="w-50 mx-auto">
      <h2>please add product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>

      <input className="mb-2" placeholder="name"  {...register("name")} />
        <textarea className="mb-2" placeholder="description"  {...register("description")} />
       
        <input className="mb-2" placeholder="supplier"  {...register("supplier")} />
        <input className="mb-2" placeholder="quantity"  type="number" {...register("quantity")} />
        <input className="mb-2" placeholder="price"  type="number" {...register("price")} />
        <input className="mb-2" placeholder="img url"  {...register("img")} />

     

        <input className="mb-5" type="submit"  value="Add product"/>
      </form>
    </div>
  );
};

export default AddItem;
