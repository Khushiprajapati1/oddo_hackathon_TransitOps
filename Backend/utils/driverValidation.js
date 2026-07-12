const checkDriverAvailability = (driver)=>{

    const today = new Date();

    const expiry = new Date(driver.expiryDate);


    if(expiry < today){
        return false;
    }


    if(driver.status === "Suspended"){
        return false;
    }


    return true;
}


module.exports = checkDriverAvailability;