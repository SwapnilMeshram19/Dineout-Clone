function restaurant(){
    return `<div>
    <div id="image-slider">
        <img id="image-slider-image"/>
        <div id="left-arrow"><i class="fa-solid fa-angle-left"></i></div>
        <div id="right-arrow"><i class="fa-solid fa-angle-right"></i></div>
        <button id="all-photos"> 13+ Images </button>
        <div class="restaurant-details-container">
            <div class="restaurant-details">
              <h1 id="name"></h1>
              <div><i class="fa-solid fa-indian-rupee-sign"></i>&nbsp;<span id="rupees"></span>&nbsp;<span class="vl"></span>&nbsp;<sapn id="food-type"></sapn></div>
              <div><span id="address"></span>&nbsp;<span class="vl"></span>&nbsp;<span id="city"></span></div>
              <div class="times">Time:&nbsp;<span id="opening-time"></span></div>
            </div>
            
            <div class="review-rating">
              <div id="rating"></div>
              <div><span id="total-review"></span>&nbsp;reviews</div>
            </div>
        </div>
  </div>
  <div class="menu-container">
    <ul id="menu-bar">
        <li class="active"><a  href="#overview">Overview</a></li> <span class="vl-menu"></span>     
        <li><a href="#menu">Menu</a></li>
        <li><a  href="#about">About</a></li>
        <li><a  href="#review">Reviews<span id="total-review"></span></a></li>
        <li><a  href="#help">Help</a></li>
    </ul>

    <div id="overview">
        <img src="./images/gp-logo.webp">
        <span>Combine any offer with Dineout Pay to <strong>save up to 10%</strong> more on your bill</span>
    </div>
    <div id="menu">
        <h3>Menu</h3>
        <div id="menu-img">
        </div>
        <div id="total-menu">Menu (13)</div>
    </div>
    <div id="about">
        <h3>About</h3>
        <p id="about-details"></p><div id="read-more">Read more</div>
        <div  class="about-info">
            <img src="./images/cuisine.webp">
            <div>
                <h4>CUISINE</h4>
                <div id="cuisine"></div>
            </div>
        </div>
        <div  class="about-info">
            <img src="./images/type.webp">
            <div>
                <h4>TYPE</h4>
                <div id="dine-type"></div>
            </div>
        </div>
        <div  class="about-info">
            <img src="./images/average_cost.webp">
            <div>
                <h4>AVERAGE COST</h4>
                <div id="cost"></div>
            </div>
        </div>
        <div  class="about-info">
            <img src="./images/facility.webp">
            <div>
                <h4>FACILITIES & FEATURES</h4>
                <div id="features">
                    <div>
                        <img src="./images/airconditionar.webp">
                        <span>Air Conditioned</span>
                    </div>
                    <div>
                        <img src="./images/lift.webp">
                        <span>Lift</span>
                    </div>
                    <div>
                        <img src="./images/homedelivery.webp">
                        <span>Home Delivery</span>
                    </div>
                    <div>
                        <img src="./images/parking.webp">
                        <span>Parking</span>
                    </div>
                    <div>
                        <img src="./images/card.webp">
                        <span>Card Accepted</span>
                    </div>
                    <div>
                        <img src="./images/wallet.webp">
                        <span>Wallet Accepted</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="review">

    </div>
    <div id="help">
        <h3>We're always here to help</h3>
        <div>
            <div>
                <img src="./images/call.webp">
                <div>
                    <span><strong>Call Us</strong></span><br/>
                    <span>91+ 9212340202</span>
                </div>
            </div>
            <div>
                <img src="./images/call.webp">
                <div>
                    <span><strong>Call the restaurant</strong></span><br/>
                    <span>09677140625</span>
                </div>
            </div>
        </div>

    </div>
</div>
 </div>`
}

export default restaurant;