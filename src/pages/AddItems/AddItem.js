import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const AddItem = () => {
  const [user] = useAuthState(auth);

  const email = user.email;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://mysterious-eyrie-32357.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    const myItem = {
      email: user.email,
      name: data.name,
      img: data.img,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      supplier: data.supplier,
    };
    axios
      .post("https://mysterious-eyrie-32357.herokuapp.com/myItem", myItem)
      .then((response) => {
        const { data } = response;

        if (data.insertedId) {
          toast("Item Added");
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>please add product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" placeholder="name" {...register("name")} />
        <input className="mb-2" value={email} {...register("email")} />

        <textarea
          className="mb-2"
          placeholder="description"
          {...register("description")}
        />

        <input
          className="mb-2"
          placeholder="supplier"
          {...register("supplier")}
        />
        <input
          className="mb-2"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input className="mb-2" placeholder="img url" {...register("img")} />

        <input className="mb-5" type="submit" value="Add product" />
      </form>
    </div>
  );
};

export default AddItem;
