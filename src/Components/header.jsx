import "react";

function header() {
  return (
    <div>
      <div className="head">
        <div className="part1">
          <div className="call">
            <div>
              <img src="/images/call image.png" alt="" className="mas" />
            </div>
            <p>+250 784 688 641</p>
          </div>
          <div className="cll">
            <div>
              <img src="images/download leter.png" alt="" className="mas" />
            </div>
            <p>bbanteemma@gmail.com</p>
          </div>
          <div className="name">
            <img src="/images/download facebook.png" alt="" className="alt" />
            <img src="/images/twiterimage.png" alt="" className="alt" />
            <img src="/images/linedimage.png" alt="" className="alt" />
            <img src="/images/download  instal.png" alt="" className="altt" />
          </div>
        </div>
        <div className="part2">
          <div className="part2-1">
            <div className="call">
              <img
                src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nZvHZDGhrEn8fO~B-UrrPF3rR3YC1LDOl5yjBGHY-XC8dvcr7KvR3g6OFULOUHYwPJxi-oq-YSL3SolVgZV9j0Qbz3EjxhIAhBB~jTbQArb9N9LHpJvSYMbJBDZ3oicFjWf8zdoXD~ZeXTf3yJUhfvyCnpwz~hzrgpCRoMAYQbdrqdB2VNvKh8cJehsN-XBtTslfx7HjhBbkJwll~Js7scLiPzPmN-rp8PqIRB~fjCQL0xgqocI0~LnVpYAwXhLjBUP~ketSartDVM2t4esVa8l8XBPNLkdLheHGb2XbyfxcSY692DHN8C6rVoPi7Ko7Eh3ZggbbU5AwES1n10Z50Q__"
                alt=""
                className="map"
              />
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/package"> Tourpakage</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="bot">
            <button className="btnn1">Sign in</button>
          </div>
        </div>
        <div className="header">
          <div className="cove">
            <h1>
              Experience the beauty <br /> of Rwanda with us
            </h1>
            <h4>Discover the Land of a Thousand Hills</h4>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="bad">
           <input
            type="text"
            value=""
            // onChange={(e) => setQuery(e.target.value)}
            placeholder="Search activities or Destinations"
            id="man"
          /> 
          <svg width="" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39C15.44 5.61 13.12 3.39 10.32 3.05C6.09002 2.53 2.53002 6.09 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.5C5.00002 7.01 7.01002 5 9.50002 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.50002 14Z" fill="#9A9AB0"/> */}
          </svg>

        </div>
        <div className="pap">
          <p>Guestst</p>
          <select id="items">
            <option value="item">2 Adult</option>
            <option value="item"> 10children</option>
            <option value="item">20 kids</option>
          </select>
        </div>
        <div className="pap">
          <p>DATE</p>
          <select id="items">
            <option value="item">12- 13 April 2021</option>
            <option value="item"> 10-06 MAY 2022</option>
            <option value="item">20 kids</option>
          </select>
        </div>
        <div className="pap">
          <p>pakage</p>
          <select id="items">
            <option value="item">ALL</option>
            <option value="item"> 10children</option>
            <option value="item">20 kids</option>
          </select>
        </div>
        <div>
        <button className="btnn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default header;
