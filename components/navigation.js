function navigation(){
    return ` <div id="product-header">
    <div id="container">
        <div id="topSection">
            <div id="logo">
                <img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png" alt="dineout">
            </div>
            <div id="location">
                <select name="places" id="places">
                    <option value="curLocation"><button>Please type a location</button>
                    </option>
                    <h4>Popular</h4>
                    <option value="">Kalyani Nagar, East Pune
                        <span>Locality</span>
                    </option>
                    <option value="">Koregaon Park, East Pune
                        <span>Locality</span>
                    </option>
                    <option value="">Viman Nagar, East Pune
                        <span>Locality</span>
                    </option>
                    <option value="">Baner, West Pune
                        <span>Locality</span>
                    </option>
                    <option value="">Wakad, West Pune
                        <span>Locality</span>
                    </option>
                </select>
            </div>
            <div id="searchBox">
                <input class="search-input" type="text" name="headerSearch" value="" placeholder="Search for Restaurants, Cuisines, Location..." maxlength="50">
                <button class="search-input" type="submit" value="Submit" >Search</button>
            </div>
        </div>
        <hr class="hrline">
        <div id="bottomSection">
            <div class="home"><a href="./index.html" class="home">Home</a></div>
            <div class="book"><a href="./product-page.html">Book a Table</a></div>
            <div class="pay"><a href="">Dineout Pay</a></div>
           
            <div class="superSaver"><a href="">Super Saver</a></div>
            
        </div>
        <hr class="hrline">
    </div>

</div>`;
}

export default navigation;