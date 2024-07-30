function App() {
    return (
        <div className='app'>
            <Logo />
            <Form />
            <CheckList />
            <Stats />
        </div>
    );
}

const Logo = () => {
    return (
        <>
            <span className='logo'>📝 Go Check ✅</span>
        </>
    );
};
const Form = () => {
    return (
        <>
            <div className='add-form'>
                <h3>Ada yang mau kamu catat?</h3>
            </div>
        </>
    );
};
const CheckList = () => {
    return (
        <>
            <div className='list'>
                <ul>
                    <li>Makan</li>
                    <li>Tidur</li>
                </ul>
            </div>
        </>
    );
};
const Stats = () => {
    return (
        <>
            <footer className='stats'>
                <span>📝 Kamu punya x catatan dan baru x yang dichecklist (x%) ✅</span>
            </footer>
        </>
    );
};

export default App;
