function photos(){
    return `
    <div id="back-button"><i class="fa-solid fa-arrow-left"></i>&nbsp;Click hear to go back</div>

    <div id="Photos-container">
    <div>
        <div id="photos-details">
            <img id="photos-img">
            <div class="photos-restaurant-details">
                <h1 id="photos-name"></h1>
                <div class="address"><span id="photos-address"></span>, <span id="photos-city"></span></div>
                <div><i class="fa-solid fa-indian-rupee-sign"></i>&nbsp;<span id="photos-rupees"></span><span> for 2 (aprox)</span></div>
                <div id="photos-food-type"></div>
            </div>
            <div class="photos-review-rating">
                <div id="photos-rating"></div>
                <div><span id="photos-total-review"></span>&nbsp;votes</div>
            </div>
        </div>

        <hr/>
        <div class="galary">

            <h1 id="galary-name"></h1>

            <div id="galary-grid"></div>
        </div>
        <p>Disclaimer: <span id="p-res-name"></span>, <span id="p-address"></span>photos are collected from restaurant / received over email. Therefore <span id="p-res-name"></span>, <span id="p-address"></span> is subject to change and dineout does not guarantee the accuracy of photos at <span id="p-res-name"></span>, <span id="p-address"></span>.</p>
    </div>
</div>`
}

export default photos;
