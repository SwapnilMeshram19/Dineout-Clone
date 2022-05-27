function booked(){
    return `
    
    <div id="booked-container">
        <div id="booked-rest">
            <h1 id="b-res-name">Smoke Hub Barbeque</h1>
            <div id="b-res-address">Thyagaraya Nagar, Central Chennai, Chennai,</div>
        </div>
        <hr class="b-hr">
        <div id="guest-details">
            <h5>Guest Details</h5>
            <div class="guest-name-div"><span>Guest Name: </span><span id="guest-name">swapnil Meshram</span></div>
            <div class="guest-phone-div"><span>Phone No.:</span><span id="guest-no">9595183013</span></div>
        </div>
        <hr class="b-hr">
        <div id="booking-summary">
            <h5>Booking Summary</h5>
            <div class="b-status"><span>Table Status-Cheking</span><span id="status">&nbsp;&nbsp;We are checking with the restaurant</span></div>
            <div class="status">and will update your table status</div>
            <div class="b-date-time"><span>Date & Time</span><span id="date-time">29 may 2022 12:30 PM</span></div>
            <div class="b-total-guest"><span>Guests</span><span id="total-guest">4 Guests</span></div>
            <div class="b-guest-names"><span>Name</span><span id="b-guest-name">Swapnil Meshram</span></div>
            <div class="b-guest-id"><span>ID</span><span id="guest-id">D016230546</span></div>
        </div class="b-hr">
        <hr>
    </div>

    `;
}

export default booked;