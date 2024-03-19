import mainPhoto from '../imgs/mainPhoto.jpg'

function Sidebar(){
    return (
        <>
            <div className="sidebar">
                <img src={mainPhoto} alt='My Image'/>
            </div>
        </>
    );
}

export default Sidebar;