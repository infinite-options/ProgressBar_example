import React, {Fragment, useRef, createRef} from "react";

const Home = () => {
  const arrLength1 = 5;
  const arrLength2 = 10;
  const arrLength3 = 20;
  var i1 = 0;
  var i2 = 0;
  var i3 = 0;
  const myRef1 = useRef([]);
  const myRef2 = useRef([]);
  const myRef3 = useRef([]);

  if (myRef1.current.length !== arrLength1) {
    myRef1.current = Array(arrLength1)
      .fill()
      .map((_, i) => myRef1.current[i] || createRef());
  }
  if (myRef2.current.length !== arrLength2) {
    myRef2.current = Array(arrLength2)
      .fill()
      .map((_, i) => myRef2.current[i] || createRef());
  }
  if (myRef3.current.length !== arrLength3) {
    myRef3.current = Array(arrLength3)
      .fill()
      .map((_, i) => myRef3.current[i] || createRef());
  }
  const onAdd1 = () => {
    if (i1 < arrLength1) {
      myRef1.current[i1].current.classList.add("active");
      i1++;
    }
  };

  const onSub1 = () => {
    if (i1 > 0) {
      i1--;
      myRef1.current[i1].current.classList.remove("active");
    }
  };

  const onAdd2 = () => {
    if (i2 < arrLength2) {
      myRef2.current[i2].current.classList.add("active");
      i2++;
    }
  };

  const onSub2 = () => {
    if (i2 > 0) {
      i2--;
      myRef2.current[i2].current.classList.remove("active");
    }
  };
  const onAdd3 = () => {
    if (i3 < arrLength3) {
      myRef3.current[i3].current.classList.add("active");
      i3++;
    }
  };

  const onSub3 = () => {
    if (i3 > 0) {
      i3--;
    }
    myRef3.current[i3].current.classList.remove("active");
  };
  return (
    <Fragment>
      <div>
        <ul className='container1 left_rounded right_rounded progressbar1'>
          {Array(arrLength1)
            .fill()
            .map((_, i) => {
              let name = "";
              if (i == 0) {
                name = "left_rounded";
              } else if (i == arrLength1 - 1) {
                name = "right_rounded";
              }
              return (
                <li key={i} ref={myRef1.current[i]} className={name}>
                  <i className='fas fa-utensils'></i>
                </li>
              );
            })}
        </ul>
      </div>

      <div className='progressbar1'>
        <button style={{float: "left"}} onClick={onSub1}>
          -
        </button>

        <button style={{float: "right"}} onClick={onAdd1}>
          +
        </button>
      </div>

      <div>
        <ul className='container1 progressbar1 left_rounded right_rounded'>
          {Array(arrLength2)
            .fill()
            .map((_, i) => {
              let name = "";
              if (i == 0) {
                name = "left_rounded";
              } else if (i == arrLength2 - 1) {
                name = "right_rounded";
              }

              return (
                <li key={i} ref={myRef2.current[i]} className={name}>
                  <i className='fas fa-utensils'></i>
                </li>
              );
            })}
        </ul>
      </div>

      <div className='progressbar1'>
        <button style={{float: "left"}} onClick={onSub2}>
          -
        </button>

        <button style={{float: "right"}} onClick={onAdd2}>
          +
        </button>
      </div>
      <div>
        <ul className='container1 left_rounded right_rounded progressbar1'>
          {Array(arrLength3)
            .fill()
            .map((_, i) => {
              let name = "";
              if (i == 0) {
                name = "left_rounded";
              } else if (i == arrLength3 - 1) {
                name = "right_rounded";
              }

              return (
                <li key={i} ref={myRef3.current[i]} className={name}>
                  <i className='fas fa-utensils'></i>
                </li>
              );
            })}
        </ul>
      </div>

      <div className='progressbar1'>
        <button style={{float: "left"}} onClick={onSub3}>
          -
        </button>

        <button style={{float: "right"}} onClick={onAdd3}>
          +
        </button>
      </div>
    </Fragment>
  );
};

export default Home;
