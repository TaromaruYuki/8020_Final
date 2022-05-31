import Main from '../components/Main';

const OrderFinished = () => {
    const dt = new Date(Date.now());
    const min = Math.floor(Math.random() * (59 - 0)) + 0;
    dt.setMonth(dt.getMonth() + 1);
    dt.setHours(16, min, 0, 0);

    return (
        <Main>
            <div className="text-centered">
                <h1>Order has been confirmed!</h1>
                <p>Thank you.</p>

                <p>Your order will be shipped on {dt.toDateString()} at {dt.getHours() - 12}:{dt.getMinutes()} PM.</p>
            </div>
        </Main>
    );
}
 
export default OrderFinished;