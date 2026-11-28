function shopStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const openTime = Number(shop.openTime.slice(0, 2));
    const closeTime = Number(shop.closeTime.slice(0, 2));
    const isWeekday = day >= 1 && day <= 5;

    if (shop.isClosed) 
        return { 
            isOpen: false, message: "Stan libur sementara. Cek lagi nanti ya." 
        };
    if (isWeekday && hour >= openTime && hour < closeTime)
        return {
            isOpen: true, message: ""
        };
    
    if (isWeekday && hour < openTime)
        return {
            isOpen: false, message: "Buka hari ini pukul " + shop.openTime
        };
    if (day === 5 || day === 6 || day === 0)
        return {
            isOpen: false, message: "Buka lagi senin pukul " + shop.openTime
        };
    return { 
        isOpen: false, message: "Buka lagi besok pukul " + shop.openTime
    };
}