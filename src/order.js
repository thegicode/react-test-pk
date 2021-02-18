'use strict';

const useState = React.useState;
const el = React.createElement;

function Order(){

  const [isShowPopup, setIsShowPopup] = useState(false);
  const [data, setData] = useState({});

  function openPopup(){
    history.pushState({popup: 'order'}, "", "?popup=order")
    setIsShowPopup( true );
  }

  const closePopup = (data) => {
    window.history.back();
    setIsShowPopup( false );
    setData(data);
  };

  window.onpopstate = (event) => {
    if(location.search === '?popup=order'){
      setIsShowPopup( true );
      return;
    }
    setIsShowPopup( false );
  }

  return(
    <React.Fragment>

      <h2>Order</h2>

      { Object.keys(data).length > 0  && 
        <div className="order-data">
          <p>{data.addr}</p>
          <p>{data.mobile}</p>
        </div>
      }

      <button onClick={openPopup}>Show Popup</button>

      { isShowPopup && 
        <PopupContent onCloseButtonClick = {closePopup} />
      }

    </React.Fragment>
  )

}



function PopupContent(props) {

  const data = {
    addr: '서울시 강동구 고덕동',
    mobile: '010-124-6790'
  };

  function handleClick(){
    props.onCloseButtonClick(data);
  }

  return (
    <div className="popupContent">
      <button type="button" onClick={handleClick}>Popup Close & Pass data</button>
    </div>
  );
}


const domContainer = document.querySelector('#order');
ReactDOM.render(el(Order), domContainer);


