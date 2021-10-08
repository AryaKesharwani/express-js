const App = () => {
  const [products, setProducts] = React.useState([]);
  const [form, setForm] = React.useState({
    name: "",
    price: "",
  });

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        // set products
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!form.name || !form.price){
      return;
    }
    fetch('/api/products',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)
    })
    // .then(response=>)
    // .catch()
  };

  const updateForm = (event, field) => {
    // if (field === "name") {
    //   setForm({ ...form, name: event.traget.value });
    // } else if (field === "price") {
    //   setForm({ ...form, price: event.traget.value });
    // }
    setForm({...form,[field]:event.traget.value})
  };

  return (
    <>
      <div className="card">
        <div className="card-header">Add a product</div>
        <div className="card-body">
          <form onClick={handleSubmit}>
            <input
              type="text"
              value={form.name}
              onChange={(event) => updateForm(event, "name")}
              placeholder="Product Name..."
              className="form-control mt-3"
            />
            <input
              type="text"
              vlaue={form.price}
              onChange={(event) => updateForm(event, "price")}
              placeholder="Product Price"
              className="form-control mt-3"
            />
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ul className="list-group mt-4">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="">
                <strong>{product.name}: </strong>${product.price}
              </div>
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
