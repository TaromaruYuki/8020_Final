import Main from '../components/Main';

const Home = () => {
    return (
        <Main>
            <div className="text-center">
                <h1>Safest Desk</h1>
                <p>Making schooling safer for everyone.</p>

                <a className="btn btn-success btn-lg mb-5" href="/order">Order now</a>
            </div>
            
            
            <div className="container">
                <div className="row border border-3 rounded-2 mb-4">
                    <div className="bg-light col-6 text-center">
                        <h2 className="h1 mt-4">Intro to the desk</h2>
                        <p>
                            <ol className="lh-lg">
                                <li className="mb-4">Our desk uses a two-panel system to make sure the front of the desk can be closed while the child is under it.</li>
                                <li className="mb-4">We make sure the panels are secure by using seals and magnets to prevent the panels from opening and water coming in, in case of floods.</li>
                                <li className="mb-4">Desk is made out of 1515 bars (1.5" x 1.5") and Alucobest panels for a durable yet light option.</li>
                                <li className="mb-4">All panels can provide a lot of impact and are weather resistant. Warping won't be a issue as well.</li>
                            </ol>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center col-6 px-0"><img src="/img/img1_dw.png" class="w-75" alt="Placeholder Text." /></div>
                </div>

                <div className="row border border-3 rounded-2 mb-4">
                    <div className="bg-light col-6 text-center">
                        <h2 className="h1 mt-4">Safety features</h2>
                        <p>
                            <ol className="lh-lg">
                                <li className="mb-4">A flood light is installed into the desk that turns on automatically when the collapsable panel is closed.</li>
                                <li className="mb-4">Top of the desk is made of a Phenolic Resin Panel. The panel is 12mm in thickness.</li>
                            </ol>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center col-6 px-0"><img src="/img/img2_dw.png" class="w-75" alt="Placeholder Text." /></div>
                </div>
            </div>

        </Main>
    );
}
 
export default Home;