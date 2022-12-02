/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Couter } from "../../Context/counter";
import "./styles.scss";
import { useSnackbar } from "notistack";
import { paymentApi } from "../../api/paymentApi";
import emailjs from 'emailjs-com'
import { getUserId } from "../../api/ApiResult";
function Payment() {
  const [Listproduct, setListproduct] = useState(
    JSON.parse(localStorage.getItem("ListProduct"))
      ? JSON.parse(localStorage.getItem("ListProduct"))
      : []
  );

  const { countPro, setCountPro } = useContext(Couter);
  const history = useHistory();
  const [Total, setTotal] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const handleRemoveAll = () => {
    localStorage.removeItem("ListProduct");
    setCountPro(0);
    history.push("/");
  };
  //nut delete
  function DeteleItemCart(index) {
    Listproduct.splice(index, 1);
    setListproduct(Listproduct);
    setCountPro(countPro - 1 < 0 ? 0 : countPro - 1);
    localStorage.setItem("ListProduct", JSON.stringify(Listproduct));
  }
  // tong tien
  useEffect(() => {
    if (countPro > 0) {
      setTotal(
        Listproduct.reduce((Total, item) => {
          Total += item?.SL * item?.GiaSP;

          return Total;
        }, 0)
      );
    } else {
      history.push("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Listproduct, countPro]);
  // lấy ngày hiện tại
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()+3}`;
  console.log(date);
  //Thanh toan

  const [dataFrom, setDataForm] = useState({
    Username: [], // lấy từ localstorage
    FullName: "",
    PhoneNumber: "",
    Address: "",
    Note: "",
    Method: "cash", 
    Listproduct:[], // lấy từ localstorage
    TongTien: "",
    NgayNH: ""
  });
  const handleOnchange = (e) => {
    setDataForm({ ...dataFrom, [e.target.name]: e.target.value });
  };
  const handleOnchangeCheckBox = (e) => {
    if (e.target.checked)
    {
      console.log(e.target.value)
      setDataForm({ ...dataFrom, Method: e.target.value });
    }
      
  };
  const onsubmit = async (e) => { 
    e.preventDefault();
    if(localStorage.getItem('UserId'))
    { const UserId=localStorage.getItem('UserId');

        const res = await paymentApi({...dataFrom,TongTien:Total,Username:UserId,Listproduct:Listproduct, NgayNH:date});
        if(res)
        { const User= await getUserId(UserId)
          console.log(User)
          if(User){
        const emailForm={
          customeremail:User[0]?.Email,
          name:dataFrom.FullName
        }
           enqueueSnackbar("success", { variant: "success" });
        emailjs.send('service_qftu14q', 'template_rsx7zbg', emailForm, 'user_qKCzkgmXadcBf9juMfZM2')
        .then(res=>{
      
          setTimeout(()=>{    
            localStorage.removeItem("ListProduct");
            setCountPro(0);
            history.push("/");},1100)
          
        }
        )
        .catch(err=>{
          // enqueueSnackbar("failed", { variant: "error" });
        })
         }
      }
      else{
        enqueueSnackbar("failed", { variant: "error" });
      }
    
    }
    else {
      history.push("/login");
    }
   
 
  };

  return (
    <div className="Payment">
      <div className="Payment-title">
        <img
          src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png"
          alt="image shipper"
        />
        <span>Order Confirmation</span>
      </div>
      <form onSubmit={onsubmit}>
        <div className="Payment-content">
          <div div className="Payment-content-left">
            <div className="left-form">
              <h3>Please choose a shipping address</h3>
              <table>
                <tr>
                  <td>
                    <label htmlFor="customer_phone" id="customer_phone">
                      Full name<span>*</span>
                    </label>
                    <br />
                    <input
                      required
                      type="text"
                      id="FullName"
                      name="FullName"
                      placeholder="Your name.."
                      value={dataFrom.FullName}
                      onChange={(e) => handleOnchange(e)}
                    />
                  </td>
                  <td>
                    <label htmlFor="customer_phone" id="customer_phone">
                      Phone<span>*</span>
                    </label>
                    <br />
                    <input
                      required
                      type="text"
                      id="PhoneNumber"
                      name="PhoneNumber"
                      placeholder="Your phone.."
                      value={dataFrom.PhoneNumber}
                      onChange={(e) => handleOnchange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <label htmlFor="customer_phone" id="customer_phone">
                      Address<span>*</span>
                    </label>
                    <br />
                    <input
                      required
                      type="text"
                      id="Address"
                      name="Address"
                      placeholder="Your address.."
                      value={dataFrom.Address}
                      onChange={(e) => handleOnchange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <label htmlFor="customer_phone" id="customer_phone">
                      Note
                    </label>
                    <br />
                    <input
                      type="text"
                      id="Note"
                      name="Note"
                      placeholder="Your note.."
                      value={dataFrom.Note}
                      onChange={(e) => handleOnchange(e)}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="left-pay">
              <h3>Payment Method</h3>
              <div className="checkpay">
                <input
                  required
                  type="radio"
                  name="Pay" onChange={e=>handleOnchangeCheckBox(e)}
                  value="cash"
                  id="cash"
                />
                <label htmlFor="cash">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
                    alt=""
                  />

                  <span> Cash</span>
                </label>
              </div>
              <div className="checkpay">
                <input required type="radio"   id="momo" name="Pay"value="momo" onChange={e=>handleOnchangeCheckBox(e)}/>
                <label htmlFor="momo">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png"
                    alt=""
                  />
                  <span> MoMo</span>{" "}
                </label>
              </div>
              <div className="checkpay">
                <input
                  required
                  type="radio"
                  name="Pay" onChange={e=>handleOnchangeCheckBox(e)}
                  id="zalopay"
                  value="zalopay"
                />
                <label htmlFor="zalopay">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png"
                    alt=""
                  />
                </label>
                <span> ZaloPay</span>
              </div>
              <div className="checkpay">
                <input required type="radio" value="shopeepay" name="Pay" onChange={e=>handleOnchangeCheckBox(e)} id="shopeepay" />
                <label htmlFor="shopeepay">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/1120_1119_ShopeePay-Horizontal2_O.png"
                    alt=""
                  />
                  <span> ShopeePay</span>{" "}
                </label>
              </div>
            </div>
            <div className="left-argee">
              <input required type="checkbox" name="" id="" />
              <span>
                {" "}
                I agree to Fruito's terms and{" "}
                <span>
                  <a href="">conditions of purchase</a> .
                </span>
              </span>
            </div>
          </div>
          <div className="Payment-content-right">
            <div className="Payment_right-title">
              <div className="title-text">
                <h5>Selected products</h5>
              </div>
              <div className="title-btn ">
                <Link className="Makeup" to="/">
                  <button className="btn-success">Back to buy</button>{" "}
                </Link>
              </div>
            </div>
            <ul className="Payment_right-list">
              {Listproduct?.map((item, index) => (
                <li key={index} className="list-bill-item">
                  <div className="item-img">
                    <img src={`${item.Photo?.PhotoMain}`} alt="" />
                  </div>
                  <div className="item-text">
                    <b className="title-item">{item.TenSP}</b>
                    <p className="size-item"> x {item.SL}</p>
                    <div
                      className="btn-delete"
                      onClick={() => DeteleItemCart(index)}
                    >
                      <p>Delete</p>{" "}
                    </div>
                  </div>
                  <div className="item-price">
                    <p>$ {item.GiaSP}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="Payment_right-total">
              <div className="total-money">
                <b> Total money</b>
                <p>${Total}</p>
              </div>
              <button type="submit" className="btn btn-success">
                Pay
              </button>
            </div>
            <div className="Remove-all">
              <Link
                className="Home"
                to="../../"
                style={{ textDecoration: "none", color: "#ec944b" }}
              >
                <p onClick={handleRemoveAll}>Remove all</p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Payment;
