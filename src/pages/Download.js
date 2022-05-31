import Main from '../components/Main';

const Home = () => {
    return (
        <Main>
            <h1>Download</h1>
            <hr className="mt-"/>
            <p className="mt-4 mb-0">
                You do not need to buy from us, you can download our <code>.dwg</code> file and order from <a href="https://8020.net">8020.net</a>.
            </p>
            <br/>

            <a href="/dl/Desk.dwg" className="btn btn-primary btn-lg">Download .dwg file</a>

            <h1 className="mt-5">Instructions</h1>
            <hr className="mt-2"/>
            <p>
                To open the <code>.dwg</code> file, you will need to have AutoCAD installed.
                <ul>
                    <li>Minimum version is AutoCAD 2018.</li>
                    <li>Demo versions cannot be used with AutoQuoterX.</li>
                    <li><a href="https://www.autodesk.com/products/autocad/overview">AutoCAD download.</a></li>
                </ul>
                AutoQuoterX also needs to be installed, to generate the BOM.
                <ul><li><a href="https://8020.net/aqx">Download AutoQuoterX.</a></li></ul>

                After installing the software, please open the <code>.dwg</code> file.
            </p>
            
        </Main>
    );
}
 
export default Home;